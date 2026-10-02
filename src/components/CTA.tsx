import type { MouseEvent } from 'react'
import RevealWords from './RevealWords'

// Moves the spotlight in `.cta::before` to follow the cursor.
const trackCursor = (e: MouseEvent<HTMLElement>) => {
  const r = e.currentTarget.getBoundingClientRect()
  e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
  e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
}

export default function CTA() {
  return (
    <section id="demo" className="cta" onMouseMove={trackCursor}>
      <div className="cta__glow" />
      <div className="cta__inner" data-reveal="stage">
        <div className="cta__copy">
          <div className="cta__chip">30-minute live demo</div>
          <h2>
            <RevealWords text="See Evalent with" />{' '}
            <span className="cta__accent">
              <RevealWords text="your own syllabus." start={3} />
            </span>
          </h2>
          <p>
            Bring your question bank or syllabus. We’ll create, run, monitor and evaluate a sample assessment with your
            team.
          </p>
        </div>
        <div className="btn-row">
          <a href="#demo" className="btn btn--primary btn--cta">
            Book a demo
          </a>
          <a href="#tour" className="btn btn--ghost-dark">
            ▶ Product tour
          </a>
        </div>
      </div>
    </section>
  )
}
