import { stagger } from '../motion'
import RevealWords from './RevealWords'

const steps = [
  {
    color: '#3D4FE0',
    title: 'Start from a template',
    body: 'Open a saved assessment, tweak the settings and schedule it for a batch.',
    link: 'Browse templates →',
  },
  {
    color: '#7A55D8',
    title: 'Upload your questions',
    body: 'Write or bulk-upload your own MCQ, coding and AI interview questions.',
    link: 'Set up a question bank →',
  },
  {
    color: '#0D1B33',
    title: 'Generate from your syllabus',
    body: 'Three steps to a randomised, syllabus-weighted paper from our question bank.',
    link: 'Open the builder →',
  },
]

export default function Create() {
  return (
    <section className="create">
      <div className="create__panel" data-reveal="panel">
        <h2 className="h2 h2--sm" data-reveal="words">
          <RevealWords text="Build an assessment your way." />
        </h2>
        <p className="create__lead" data-reveal="up" style={stagger(3)}>Pick a starting point. Scheduling, proctoring and reports work the same either way.</p>
        <div className="create__grid">
          {steps.map((s, i) => (
            <div key={s.title} className="create__card" data-reveal="domino" style={stagger(i)}>
              <div className="create__num" style={{ background: s.color }}>
                {i + 1}
              </div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
              <a href="#create">{s.link}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
