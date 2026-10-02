import type { CSSProperties } from 'react'
import { aiStages } from '../data'
import { stagger } from '../motion'
import RevealWords from './RevealWords'

export default function AIStages() {
  return (
    <section className="ai">
      <h2 className="h2 h2--sm ai__title" data-reveal="words">
        <RevealWords text="AI at every step, no extra tools." />
      </h2>
      <div className="ai__grid">
        {aiStages.map((st, i) => (
          <div key={st.stage} className="ai__card" data-reveal="depth" style={stagger(i)}>
            <div className="ai__stage" style={{ background: st.bg, color: st.fg }}>
              {st.stage}
            </div>
            {st.items.map((it, j) => (
              <div key={it.title} className="ai__item" style={{ '--j': j } as CSSProperties}>
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
