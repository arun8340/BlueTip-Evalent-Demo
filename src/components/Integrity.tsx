import { signals } from '../data'

export default function Integrity() {
  return (
    <section id="integrity" className="integrity">
      <div className="band__inner">
        <div className="integrity__head">
          <h2 className="h2">Proctoring, no invigilator needed.</h2>
          <p>
            27 signals run in the student's browser. Every flag has a timestamp and a link to the recording, so you can
            review what actually happened.
          </p>
        </div>
        <div className="integrity__bar">
          {signals.map((s) => (
            <div key={s.name} style={{ flex: s.count, background: s.color }}>
              {s.count}
            </div>
          ))}
        </div>
        <div className="integrity__legend">
          {signals.map((s) => (
            <div key={s.name}>
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
