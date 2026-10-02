import { marqueeRows } from '../data'
import { stagger } from '../motion'

export default function Languages() {
  return (
    <section className="languages">
      <div className="languages__card" data-reveal="zoom">
        <div className="languages__head">
          <h2>55 languages, tools &amp; SQL engines</h2>
          <span>Hover a row to pause</span>
        </div>
        {marqueeRows.map((row, ri) => {
          // Repeat short lists so the track is wide enough, then duplicate it for a seamless -50% loop.
          let items = row.items
          while (items.length < 24) items = items.concat(row.items)
          const track = items.concat(items)
          return (
            <div
              key={row.label}
              className="mq"
              data-reveal={row.reverse ? 'from-left' : 'from-right'}
              style={stagger(ri + 1)}
            >
              <div className="mq__label" style={{ background: row.bg, color: row.fg }}>
                <div className="mq__count">{row.items.length}</div>
                {row.label}
              </div>
              <div className="mq__viewport">
                <div
                  className="mq__track"
                  style={{ animation: `marquee ${row.duration}s linear infinite${row.reverse ? ' reverse' : ''}` }}
                >
                  {track.map((s, i) => (
                    <span key={i} className="mq__chip">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
