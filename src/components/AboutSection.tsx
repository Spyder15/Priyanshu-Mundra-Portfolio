import { withBase } from '../lib/base'

const experience = [
  {
    period: '2025 — 2026',
    role: 'Software Development Engineer II',
    company: 'Cloudify',
    detail: 'Built AI apps with the OpenAI and Anthropic SDKs, designed RAG pipelines, and cut operational costs by 70% with self-hosted infrastructure.',
  },
  {
    period: '2024 — 2025',
    role: 'Team Lead / AI Engineer',
    company: 'Giichi IT Solution',
    detail: 'Led enterprise cloud and AI delivery: LLM features, RAG and vector search, and embedding pipelines that lifted processing efficiency by 30%.',
  },
  {
    period: '2022 — 2023',
    role: 'Senior Software Engineer, AI & Backend',
    company: 'PlutoPe',
    detail: 'Kept production transaction pipelines at 99.9% uptime and built the serving layer for AI features.',
  },
  {
    period: '2021 — 2023',
    role: 'Earlier work',
    company: 'OranetAI · onchain.vc · Fiverr · NoBroker · Goldman Sachs',
    detail: 'Restaurant SaaS from scratch, Solidity and Rust smart contracts, ERC-20/721/1155 delivery, a 3 ms autocomplete API on ELK, and a password-hashing security review. Also consulted for startups on full-stack, mobile and cloud.',
  },
  {
    period: 'Education',
    role: 'B.Tech, Computer Science & Engineering',
    company: 'Lovely Professional University',
    detail: 'CGPA 8.0. Frankfurt School DeFi Talent Program, Alchemy University blockchain development, Web3Champ and HackClub RAIT SoC. 1st place at BlueSprint and a top-10 team at a national hackathon.',
  },
] as const

type AboutSectionProps = {
  onNavigate: (path: string) => void
}

export function AboutSection({ onNavigate }: AboutSectionProps) {
  return (
    <section className="portfolio-section about-section" id="about" aria-labelledby="about-title">
      <header className="section-header about-header">
        <p><span>04</span> About</p>
        <a className="route-header-home" href={withBase('/')} onClick={(event) => { event.preventDefault(); onNavigate('/') }}>
          <span aria-hidden="true">←</span> Home
        </a>
      </header>

      <div className="about-layout">
        <div className="about-statement">
          <p className="section-kicker"><span /> The person behind the systems</p>
          <h2 id="about-title">Engineering should feel<br /><em>clear on both sides.</em></h2>
          <p>
            I build AI systems, backends and blockchain products: retrieval pipelines,
            reliable services, and the details that make them cost less and break less.
          </p>
          <a className="route-back-link" href={withBase('/')} onClick={(event) => { event.preventDefault(); onNavigate('/') }}>
            <span aria-hidden="true">←</span> Back to portfolio
          </a>
          <div className="about-profile">
            <img src={`${import.meta.env.BASE_URL}images/priyanshu-photo.jpg`} alt="Portrait of Priyanshu Mundra" width="72" height="72" loading="lazy" />
            <a className="resume-link" href={`${import.meta.env.BASE_URL}Priyanshu_Mundra_Resume.pdf`} target="_blank" rel="noreferrer" download>
              Download resume <span aria-hidden="true">↓</span>
            </a>
          </div>
          <div className="availability-note">
            <span aria-hidden="true" />
            AI &amp; backend engineer · Available for work
          </div>
        </div>

        <div className="experience-list" aria-label="Experience and education">
          {experience.map((item) => (
            <article key={`${item.company}-${item.period}`}>
              <time>{item.period}</time>
              <div>
                <h3>{item.role}</h3>
                <strong>{item.company}</strong>
                <p>{item.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <footer className="contact-footer" id="contact">
        <div>
          <p>Have a difficult, useful thing to build?</p>
          <a href="mailto:mundrapriyanshu15@gmail.com">mundrapriyanshu15@gmail.com <span aria-hidden="true">↗</span></a>
        </div>
        <nav aria-label="Social links">
          <a href="https://github.com/Spyder15" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/priyanshu-mundra" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={withBase('/#playground')} onClick={(event) => { event.preventDefault(); onNavigate('/#playground') }}>Ask my portfolio</a>
        </nav>
        <p>Priyanshu Mundra · 2026 · Design adapted from yash456k.com (MIT)</p>
      </footer>
    </section>
  )
}
