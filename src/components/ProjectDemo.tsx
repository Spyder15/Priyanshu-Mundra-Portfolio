import { useEffect, useState } from 'react'
import type { CSSProperties, ReactNode } from 'react'

// A small outline drawing of what each project does. It plays once, holds, fades,
// and starts over; picking another project starts its drawing from the beginning.
const CYCLE_MS = 6500

const at = (seconds: number) => ({ '--d': `${seconds}s` }) as CSSProperties

function AskDemo() {
  return (
    <>
      <rect className="d-draw" pathLength={1} style={at(0)} x="372" y="6" width="150" height="26" rx="13" />
      <text className="d-fade demo-text" style={at(0.35)} x="447" y="23" textAnchor="middle">Who is Priyanshu?</text>
      <circle className="d-draw" pathLength={1} style={at(0.9)} cx="46" cy="52" r="9" />
      <path className="d-draw" pathLength={1} style={at(1.05)} d="M46 47 L47.5 50.5 L51 52 L47.5 53.5 L46 57 L44.5 53.5 L41 52 L44.5 50.5 Z" />
      <rect className="d-draw" pathLength={1} style={at(1)} x="66" y="40" width="290" height="54" rx="12" />
      <path className="d-draw demo-soft" pathLength={1} style={at(1.4)} d="M84 56 H330" />
      <path className="d-draw demo-soft" pathLength={1} style={at(1.95)} d="M84 67 H306" />
      <path className="d-draw demo-soft" pathLength={1} style={at(2.5)} d="M84 78 H240" />
      <path className="d-draw demo-faint" pathLength={1} style={at(3)} d="M356 60 C366 60 366 52 378 52" />
      <path className="d-draw demo-faint" pathLength={1} style={at(3.15)} d="M356 72 C366 72 366 80 378 80" />
      <g className="d-pop" style={at(3.2)}>
        <rect x="378" y="43" width="112" height="18" rx="9" />
        <text className="demo-text demo-small" x="434" y="55.5" textAnchor="middle">About Priyanshu · 0.97</text>
      </g>
      <g className="d-pop" style={at(3.4)}>
        <rect x="378" y="71" width="98" height="18" rx="9" />
        <text className="demo-text demo-small" x="427" y="83.5" textAnchor="middle">Projects · 0.64</text>
      </g>
    </>
  )
}

const DEMOS: Record<string, { title: string, draw: () => ReactNode }> = {
  'support-chatbot': { title: 'A question answered with its sources', draw: AskDemo },
}

export function ProjectDemo({ projectId }: { projectId: string }) {
  const [cycle, setCycle] = useState(0)
  useEffect(() => {
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return
    const timer = window.setInterval(() => setCycle((value) => value + 1), CYCLE_MS)
    return () => window.clearInterval(timer)
  }, [projectId])
  const demo = DEMOS[projectId]
  if (!demo) return null
  return (
    <svg key={`${projectId}-${cycle}`} className="project-demo" viewBox="0 0 600 100" role="img" aria-label={demo.title} style={{ '--cycle': `${CYCLE_MS}ms` } as CSSProperties}>
      {demo.draw()}
    </svg>
  )
}
