import { useState } from 'react'
import { faqs } from '../data'

const num = (i: number) => String(i + 1).padStart(2, '0')

export default function FAQ() {
  const [active, setActive] = useState(0)
  const [q, a] = faqs[active]

  return (
    <section id="faq" className="faq">
      <h2 className="faq__title">Questions colleges ask us</h2>
      <div className="faq__grid">
        <div className="faq__list">
          {faqs.map(([question], i) => (
            <button
              key={question}
              type="button"
              className={`faq__q${i === active ? ' faq__q--active' : ''}`}
              aria-pressed={i === active}
              onClick={() => setActive(i)}
              onMouseEnter={() => setActive(i)}
            >
              <span className="faq__num">{num(i)}</span>
              {question}
            </button>
          ))}
        </div>
        <div className="faq__panel" aria-live="polite">
          <div className="faq__panel-kicker">QUESTION {num(active)}</div>
          <div className="faq__panel-q">{q}</div>
          <p>{a}</p>
          <a href="#demo">Still unsure? Ask us →</a>
        </div>
      </div>
    </section>
  )
}
