import { useEffect, useRef } from 'react'
import { reducedMotion, stagger, useScrollVar } from '../motion'
import CountUp from './CountUp'

type Char = HTMLSpanElement & { _v: number; _last: number }

// Fixed line breaks so the lens animation (which widens letters) can't reflow words between lines.
const lines = [
  [{ text: 'Help every student', accent: false }],
  [{ text: 'walk into', accent: false }],
  [
    { text: 'placements', accent: false },
    { text: 'ready.', accent: true },
  ],
]

// How far the hero has scrolled out of view, 0–1, for the scroll parallax.
const heroProgress = (r: DOMRect) => -r.top / r.height

const NAVY = [13, 27, 51]
const INDIGO = [61, 79, 224]
const VIOLET = [122, 85, 216]

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null)
  const stageRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  useScrollVar(heroRef, '--hp', heroProgress)

  // Card parallax: follows the cursor over the hero, drifts gently when idle.
  useEffect(() => {
    const host = heroRef.current
    const stage = stageRef.current
    if (!host || !stage || reducedMotion()) return

    const cards = [...stage.querySelectorAll<HTMLElement>('[data-depth]')]
    let idle = true
    let t0 = performance.now()

    const apply = (nx: number, ny: number) => {
      for (const el of cards) {
        const d = parseFloat(el.dataset.depth!)
        el.style.transform = `translate3d(${nx * d * 14}px,${ny * d * 14}px,0) rotateX(${-ny * 6}deg) rotateY(${nx * 8}deg)`
      }
    }
    const onMove = (e: MouseEvent) => {
      idle = false
      const r = host.getBoundingClientRect()
      apply(((e.clientX - r.left) / r.width) * 2 - 1, ((e.clientY - r.top) / r.height) * 2 - 1)
    }
    const onLeave = () => {
      idle = true
      t0 = performance.now()
    }

    host.addEventListener('mousemove', onMove)
    host.addEventListener('mouseleave', onLeave)
    const iv = setInterval(() => {
      if (!idle) return
      const t = (performance.now() - t0) / 1000
      apply(Math.sin(t * 0.6) * 0.5, Math.cos(t * 0.45) * 0.4)
    }, 600)

    return () => {
      clearInterval(iv)
      host.removeEventListener('mousemove', onMove)
      host.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  // Variable-font lens: characters near the cursor widen, embolden and shift colour.
  useEffect(() => {
    const host = heroRef.current
    const title = titleRef.current
    if (!host || !title || reducedMotion()) return

    const chars = [...title.querySelectorAll<Char>('[data-char]')]
    chars.forEach((c) => {
      c._v = 0
      c._last = 0
    })

    let mx = 0
    let my = 0
    let on = false
    const t0 = performance.now()
    const onMove = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY
      on = true
    }
    const onLeave = () => {
      on = false
    }
    host.addEventListener('mousemove', onMove)
    host.addEventListener('mouseleave', onLeave)

    let raf = 0
    const loop = (now: number) => {
      let px = mx
      let py = my
      if (!on) {
        // Virtual cursor drifting across the headline on a Lissajous path.
        const r = title.getBoundingClientRect()
        const t = (now - t0) / 1000
        px = r.left + r.width * (0.5 + 0.48 * Math.sin(t * 0.55))
        py = r.top + r.height * (0.5 + 0.42 * Math.sin(t * 0.85))
      }
      const R = on ? 230 : 170
      for (const ch of chars) {
        const b = ch.getBoundingClientRect()
        const d = Math.hypot(b.left + b.width / 2 - px, b.top + b.height / 2 - py)
        const k = Math.max(0, 1 - d / R)
        const e = k * k * (3 - 2 * k)
        ch._v += (e - ch._v) * 0.16
        const v = ch._v
        if (Math.abs(v - ch._last) < 0.004) continue
        ch._last = v
        ch.style.fontVariationSettings = `'wdth' ${(78 + 22 * v).toFixed(1)},'wght' ${Math.round(600 + 200 * v)}`
        const accent = ch.dataset.accent !== undefined
        const A = accent ? INDIGO : NAVY
        const B = accent ? VIOLET : INDIGO
        const cv = Math.min(1, v * 1.6)
        ch.style.color = `rgb(${A.map((a, i) => Math.round(a + (B[i] - a) * cv)).join(',')})`
      }
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(raf)
      host.removeEventListener('mousemove', onMove)
      host.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero__dots" />
      <div className="hero__grid">
        <div className="hero__copy">
          <div className="hero__badge">
            <span className="hero__badge-new">New</span>Resume-based AI interviews
          </div>
          <h1 className="hero__title" ref={titleRef} aria-label="Help every student walk into placements ready.">
            {lines.map((line, li) => (
              <span key={li} className="hero__line" aria-hidden="true" style={{ animationDelay: `${120 + li * 110}ms` }}>
                {line.map((part, pi) => (
                  <span key={pi} className={part.accent ? 'hero__accent' : undefined}>
                    {pi > 0 && ' '}
                    {part.text.split(' ').map((word, wi) => (
                      <span key={wi}>
                        {wi > 0 && ' '}
                        <span className="hero__word">
                          {[...word].map((ch, ci) => (
                            <span key={ci} data-char="" data-accent={part.accent ? '' : undefined}>
                              {ch}
                            </span>
                          ))}
                        </span>
                      </span>
                    ))}
                  </span>
                ))}
              </span>
            ))}
          </h1>
          <p className="hero__lead">
            MCQ, coding and AI interview assessments with built-in proctoring. Students see exactly what to work on
            next. Your placement team sees who is ready.
          </p>
          <div className="btn-row">
            <a href="#demo" className="btn btn--primary">
              Book a demo
            </a>
            <a href="#tour" className="btn btn--outline">
              ▶ Product tour
            </a>
          </div>
          <div className="hero__trust">
            {['No software to install', 'Proctored in the browser', '10,000+ assessments run'].map((t) => (
              <span key={t}>
                <span className="hero__check">✓</span>
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="hero__stage" ref={stageRef} aria-hidden="true">
          <div data-depth="1" className="hcard hcard--report">
            <div className="hcard__head">
              <span className="hcard__kicker">READINESS REPORT</span>
              <span className="hcard__ready">Placement-ready</span>
            </div>
            <div className="hcard__score">
              <span>86</span>
              <span>/ 100 overall</span>
            </div>
            <div className="hcard__bars">
              {[
                ['Aptitude', 91, '#7A55D8'],
                ['Coding', 88, '#3D4FE0'],
                ['Interview', 74, '#3FA7DE'],
              ].map(([label, value, color]) => (
                <div key={label}>
                  <div className="hcard__bar-label">
                    <span>{label}</span>
                    <b>{value}</b>
                  </div>
                  <div className="hcard__track">
                    <div style={{ width: `${value}%`, background: color as string }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div data-depth="2.2" className="hcard hcard--next">
            <div className="hcard__next-kicker">NEXT STEP</div>
            <div className="hcard__next-body">
              Practise explaining trade-offs out loud. Try 2 mock interviews on system design this week.
            </div>
          </div>
          <div data-depth="3.2" className="hcard hcard--passed">
            <span>✓</span>All 3/3 test cases passed
          </div>
          <div data-depth="2.8" className="hcard hcard--signals">
            27 proctoring signals · live
          </div>
        </div>
      </div>

      <div className="hero__stats-wrap" data-reveal="stage">
        <div className="hero__stats">
          {[
            ['1M+', 'questions'],
            ['10,000+', 'assessments run'],
            ['17,000+', 'coding problems'],
            ['55', 'languages, tools & SQL engines'],
          ].map(([value, label], i) => (
            <div key={label} className="hero__stat" style={stagger(i)}>
              <div className="hero__stat-value">
                <CountUp value={value} />
              </div>
              <div className="hero__stat-label">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
