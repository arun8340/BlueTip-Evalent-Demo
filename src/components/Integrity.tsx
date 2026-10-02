import { useRef } from 'react'
import { signals } from '../data'
import { stagger, useScrollVar } from '../motion'
import RevealWords from './RevealWords'

// 0 while the band's top is at the bottom of the viewport, 1 once it is 60% of the way up.
const bandProgress = (r: DOMRect, vh: number) => (vh - r.top) / (vh * 0.6)

export default function Integrity() {
  const ref = useRef<HTMLElement>(null)
  useScrollVar(ref, '--band', bandProgress)

  return (
    <section id="integrity" className="integrity" ref={ref}>
      <div className="band__inner">
        <div className="integrity__head">
          <h2 className="h2" data-reveal="words">
            <RevealWords text="Proctoring, no invigilator needed." />
          </h2>
          <p data-reveal="up" style={stagger(3)}>
            27 signals run in the student’s browser. Every flag has a timestamp and a link to the recording, so you can
            review what actually happened.
          </p>
        </div>
        <div className="integrity__bar" data-reveal="bar">
          {signals.map((s, i) => (
            <div key={s.name} style={stagger(i, { flex: s.count, background: s.color })}>
              {s.count}
            </div>
          ))}
        </div>
        <div className="integrity__legend">
          {signals.map((s, i) => (
            <div key={s.name} data-reveal="blur" style={stagger(i)}>
              <div className="integrity__name">
                <span style={{ background: s.color }} />
                {s.name}
              </div>
              <div className="integrity__desc">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
