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
    detail: 'Built AI client applications with the OpenAI and Anthropic SDKs, designed RAG-style retrieval and prompt pipelines, and migrated workloads to self-hosted infrastructure and model serving.',
    proof: [
      { value: '70%', label: 'Operational cost cut' },
      { value: 'RAG', label: 'Grounded on client data' },
    ],
  },
  {
    id: 'giichi',
    year: '2024',
    period: 'Jan 2024 — Dec 2025',
    title: 'Team Lead / AI Engineer',
    organization: 'Giichi IT Solution',
    label: 'Leading with AI at the core',
    summary: 'Architecture, delivery and a team that ships with AI.',
    detail: 'Led architecture and delivery of enterprise cloud applications, integrating LLM features, RAG retrieval and vector search. Built event-driven embedding pipelines and rolled out AI-assisted development across the team.',
    proof: [
      { value: '+30%', label: 'Processing efficiency' },
      { value: 'Python · Node.js', label: 'AI-serving microservices' },
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
    detail: 'Maintained secure transaction APIs and routing engines, built the serving layer for AI features, and mentored junior engineers on AI integrations and prompt workflows.',
    proof: [
      { value: '99.9%', label: 'Processing uptime' },
      { value: 'OpenAPI', label: 'Docs and schemas authored' },
    ],
  },
]
