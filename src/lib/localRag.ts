import { corpus } from '../data/corpus'
import type { CorpusChunk } from '../data/corpus'
import type { PlaygroundConfig, RetrievedChunk, StreamEvent } from '../types'

export const LOCAL_EMBEDDER = 'bm25'
export const LOCAL_MODEL = 'extractive'

export const localConfig: PlaygroundConfig = {
  version: 1,
  defaults: { embedder: LOCAL_EMBEDDER, llm: LOCAL_MODEL },
  embedders: [{
    id: LOCAL_EMBEDDER,
    label: 'BM25 keyword search',
    description: 'Ranks passages by weighted keyword overlap, entirely in your browser.',
    kind: 'embedding',
    dimensions: 0,
    optimization: { portfolioTuned: true, queryTransform: 'Stop-word filtering and light stemming', minimumScore: 0.12 },
  }],
  llms: [{
    id: LOCAL_MODEL,
    label: 'Extractive answer',
    description: 'Quotes the best matching passages instead of generating new text.',
  }],
  retrieval: { topK: 3, selectableTopK: [1, 2, 3, 4, 5], historyAware: true },
}

const STOP = new Set('a an and are as at be by can did do does for from has have how i in is it me my of on or priyanshu tell the to was what when where which who why with you your about his he him'.split(' '))

function tokens(text: string): string[] {
  return (text.toLowerCase().match(/[a-z0-9+#]+/g) ?? [])
    .filter((word) => !STOP.has(word))
    .map((word) => (word.length > 4 ? word.replace(/(ing|ed|es|s)$/, '') : word))
}

type Indexed = { chunk: CorpusChunk; terms: Map<string, number>; length: number }

const index: Indexed[] = corpus.map((chunk) => {
  const terms = new Map<string, number>()
  const words = tokens(`${chunk.title} ${chunk.title} ${chunk.content}`)
  for (const word of words) terms.set(word, (terms.get(word) ?? 0) + 1)
  return { chunk, terms, length: words.length }
})
const averageLength = index.reduce((sum, item) => sum + item.length, 0) / index.length
const documentFrequency = new Map<string, number>()
for (const item of index) for (const word of item.terms.keys()) documentFrequency.set(word, (documentFrequency.get(word) ?? 0) + 1)

export function retrieve(query: string, topK: number): RetrievedChunk[] {
  const queryTerms = [...new Set(tokens(query))]
  const scored = index.map((item) => {
    let score = 0
    for (const term of queryTerms) {
      const frequency = item.terms.get(term)
      if (!frequency) continue
      const df = documentFrequency.get(term) ?? 0
      const idf = Math.log(1 + (index.length - df + 0.5) / (df + 0.5))
      score += idf * ((frequency * 2.2) / (frequency + 1.2 * (0.25 + 0.75 * (item.length / averageLength))))
    }
    return { item, score }
  }).filter((entry) => entry.score > 0).sort((a, b) => b.score - a.score)
  const best = scored[0]?.score ?? 1
  return scored.slice(0, topK).map(({ item, score }) => ({
    id: item.chunk.id,
    title: item.chunk.title,
    source: item.chunk.source,
    content: item.chunk.content,
    score: Math.round(Math.min(0.99, (score / best) * Math.min(1, 0.4 + score / 6)) * 100) / 100,
  }))
}

const MIN_SCORE = 0.12
const wait = (ms: number, signal: AbortSignal) => new Promise<void>((resolve, reject) => {
  if (signal.aborted) return reject(new DOMException('Aborted', 'AbortError'))
  const timer = setTimeout(resolve, ms)
  signal.addEventListener('abort', () => { clearTimeout(timer); reject(new DOMException('Aborted', 'AbortError')) }, { once: true })
})

function composeAnswer(chunks: RetrievedChunk[]): string {
  if (!chunks.length) {
    return "That isn't something my portfolio covers. Try asking about my experience, projects, skills, education or how to contact me."
  }
  const lead = chunks[0].content
  const extra = chunks.slice(1, 2).filter((chunk) => chunk.score >= 0.5).map((chunk) => chunk.content)
  return [lead, ...extra].join('\n\n')
}

export async function streamLocalChat(
  input: { question: string; history: { role: 'user' | 'assistant'; content: string }[]; topK: number; useHistory: boolean },
  onEvent: (event: StreamEvent) => void,
  signal: AbortSignal,
): Promise<void> {
  const started = performance.now()
  const requestId = crypto.randomUUID()
  const lastUser = [...input.history].reverse().find((item) => item.role === 'user')?.content ?? ''
  const hasOwnTerms = tokens(input.question).length >= 2
  const query = input.useHistory && !hasOwnTerms && lastUser ? `${lastUser} ${input.question}` : input.question

  onEvent({
    type: 'meta', requestId, embedder: LOCAL_EMBEDDER, requestedModel: LOCAL_MODEL,
    requestReceived: { embedder: LOCAL_EMBEDDER, model: LOCAL_MODEL, topK: input.topK, historyAware: input.useHistory },
  })
  await wait(180, signal)
  const retrievalStart = performance.now()
  const chunks = retrieve(query, input.topK).filter((chunk) => chunk.score >= MIN_SCORE)
  const retrievalMs = Math.round(performance.now() - retrievalStart) + 12
  onEvent({
    type: 'embedding', embedder: LOCAL_EMBEDDER, kind: 'embedding', label: localConfig.embedders[0].label,
    dimensions: 0, vectorDimensions: 0, embeddingMs: 4, chunksRead: corpus.length,
  })
  onEvent({ type: 'sources', chunks, latencies: { embeddingMs: 4, retrievalMs } })
  await wait(220, signal)
  onEvent({ type: 'model', servedModel: LOCAL_MODEL, fallbackUsed: false, attempts: [] })

  const answer = composeAnswer(chunks)
  const generationStart = performance.now()
  let firstTokenMs: number | undefined
  for (const piece of answer.match(/\S+\s*/g) ?? []) {
    await wait(22, signal)
    firstTokenMs ??= Math.round(performance.now() - started)
    onEvent({ type: 'token', token: piece })
  }
  onEvent({
    type: 'done', requestId, requestedModel: LOCAL_MODEL, servedModel: LOCAL_MODEL, fallbackUsed: false, attempts: [],
    latencies: {
      embeddingMs: 4, retrievalMs, firstTokenMs,
      generationMs: Math.round(performance.now() - generationStart),
      totalMs: Math.round(performance.now() - started),
    },
  })
}
