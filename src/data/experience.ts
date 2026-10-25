export type ExperienceItem = {
  id: string
  year: string
  period: string
  title: string
  organization: string
  label: string
  summary: string
  detail: string
  proof: readonly { value: string; label: string }[]
  current?: boolean
}

export const experienceItems: readonly ExperienceItem[] = [
  {
    id: 'cloudify',
    year: '2025',
    period: 'Dec 2025 — Jun 2026',
    title: 'Software Development Engineer II',
    organization: 'Cloudify',
    label: 'Applied AI at scale',
    summary: 'Shipping AI products and cutting the bill.',
    detail: 'Built AI applications on the OpenAI and Anthropic APIs, designed RAG pipelines, and moved inference to self-hosted models, cutting AI costs by about 70%.',
    proof: [
      { value: '~70%', label: 'AI cost reduction' },
      { value: 'RAG', label: 'Production pipelines' },
    ],
  },
  {
    id: 'cto',
    year: '2024',
    period: 'Jul 2024 — Mar 2026',
    title: 'Chief Technology Officer',
    organization: 'Giichi IT Solution · PolluxChain',
    label: 'Owning the whole stack',
    summary: 'Technical lead for products, people and platforms.',
    detail: 'Led engineering across AI, backend and blockchain products: the Polink wallet at PolluxChain, RAG and vector search at Giichi, and DeFi protocol work at ZebraSwap.',
    proof: [
      { value: '$1M+', label: 'Revenue generated' },
      { value: '+30%', label: 'Team efficiency' },
    ],
  },
  {
    id: 'plutope',
    year: '2022',
    period: 'Sep 2022 — Dec 2023',
    title: 'Senior Software Engineer, AI & Backend',
    organization: 'PlutoPe',
    label: 'Where it started',
    summary: 'Backend systems people relied on every day.',
    detail: 'Built AI-assisted features and distributed backend services for a payments product, with a focus on reliability and clean service boundaries.',
    proof: [
      { value: '99.9%', label: 'Uptime' },
      { value: '2022', label: 'First production role' },
    ],
  },
]
