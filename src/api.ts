import { localConfig, streamLocalChat } from './lib/localRag'
import { parseActivitySnapshot, writeCachedActivity } from './activity'
import type { ActivitySnapshot } from './activity'
import type { HistoryItem, PlaygroundConfig, StreamEvent } from './types'

export class ApiError extends Error {
  readonly status: number
  readonly retryAfter?: number

  constructor(message: string, status: number, retryAfter?: number) {
    super(message)
    this.name = 'ApiError'
    this.status = status
    this.retryAfter = retryAfter
  }
}

export async function getConfig(): Promise<PlaygroundConfig> {
  return localConfig
}

const GITHUB_USER = 'Spyder15'

function isoDay(date: Date): string {
  return date.toISOString().slice(0, 10)
}

export async function getActivity(signal?: AbortSignal): Promise<ActivitySnapshot> {
  let response: Response
  try {
    response = await fetch(`https://github-contributions-api.jogruber.de/v4/${GITHUB_USER}?y=last`, {
      headers: { Accept: 'application/json' },
      credentials: 'omit',
      signal,
    })
  } catch (error) {
    if (error instanceof DOMException && error.name === 'AbortError') throw error
    throw new ApiError('Could not refresh activity data.', 0)
  }
  if (!response.ok) throw new ApiError('Could not refresh activity data.', response.status)

  const body = (await response.json()) as { contributions?: { date: string; count: number }[] }
  const days = (body.contributions ?? []).slice(-365).map(({ date, count }) => ({ date, count }))
  const active = days.filter((day) => day.count > 0)
  const peak = active.reduce<{ date: string; count: number } | null>((best, day) => (!best || day.count > best.count ? day : best), null)
  const activity = parseActivitySnapshot({
    generatedAt: new Date().toISOString(),
    period: { start: days[0]?.date ?? isoDay(new Date()), end: days[days.length - 1]?.date ?? isoDay(new Date()) },
    codex: { total: 0, lifetimeTotal: 0, peakDailyTokens: 0, activeDays: 0, peak: null, days: [] },
    github: {
      username: GITHUB_USER,
      total: days.reduce((sum, day) => sum + day.count, 0),
      activeDays: active.length,
      peak,
      days,
    },
  })
  if (!activity) throw new ApiError('The activity service returned an invalid response.', 0)
  writeCachedActivity(activity)
  return activity
}

type ChatInput = {
  question: string
  embedder: string
  model: string
  history: HistoryItem[]
  topK: number
  useHistory: boolean
}

export async function streamChat(
  input: ChatInput,
  onEvent: (event: StreamEvent) => void,
  signal: AbortSignal,
): Promise<void> {
  await streamLocalChat(input, onEvent, signal)
}
