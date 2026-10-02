import { performers, podiumColors } from '../data'

export default function TopPerformers() {
  const podium = performers.slice(0, 3)
  const rest = performers.slice(3)

  return (
    <section id="students" className="band band--students">
      <div className="band__inner">
        <div className="split-head">
          <h2 className="h2">Students get more than a score.</h2>
          <p>Every result comes with guidance on what to work on next. Meet this term’s top performers.</p>
        </div>
        <div className="podium">
          {podium.map((p, i) => (
            <div key={p.rank} className="podium__card" style={{ background: podiumColors[i] }}>
              <div className="podium__top">
                <div className="podium__avatar">{p.initials}</div>
                <span className="podium__rank">#{p.rank}</span>
              </div>
              <div>
                <div className="podium__name">{p.name}</div>
                <div className="podium__score">{p.score}% average</div>
              </div>
            </div>
          ))}
        </div>
        <div className="ranks">
          {rest.map((p) => (
            <div key={p.rank} className="rank">
              <span className="rank__num">{p.rank}</span>
              <span className="rank__avatar">{p.initials}</span>
              <span className="rank__name">{p.name}</span>
              <b>{p.score}%</b>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
