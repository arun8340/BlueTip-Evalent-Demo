import { aiStages } from '../data'

export default function AIStages() {
  return (
    <section className="ai">
      <h2 className="h2 h2--sm ai__title">AI at every step, no extra tools.</h2>
      <div className="ai__grid">
        {aiStages.map((st) => (
          <div key={st.stage} className="ai__card">
            <div className="ai__stage" style={{ background: st.bg, color: st.fg }}>
              {st.stage}
            </div>
            {st.items.map((it) => (
              <div key={it.title} className="ai__item">
                <div className="ai__item-title">{it.title}</div>
                <div className="ai__item-body">{it.body}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}
