import { useEffect, useRef } from 'react'
import { reducedMotion } from '../motion'

// Counts the number in a value like "10,000+" or "1M+" up from zero each time it scrolls into view.
export default function CountUp({
  value,
  duration = 1600,
  delay = 0,
}: {
  value: string
  duration?: number
  delay?: number
}) {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    const m = value.match(/^([^\d]*)([\d,]+)(.*)$/)
    if (!el || !m || reducedMotion()) return

    const [, prefix, digits, suffix] = m
    const target = Number(digits.replace(/,/g, ''))
    const fmt = (n: number) => prefix + (digits.includes(',') ? n.toLocaleString('en-US') : String(n)) + suffix
    el.textContent = fmt(0)

    let raf = 0
    let played = false
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          // Fully off screen: rewind so it counts again on the way back.
          cancelAnimationFrame(raf)
          played = false
          el.textContent = fmt(0)
          return
        }
        if (played || entry.intersectionRatio < 0.6) return
        played = true
        const t0 = performance.now() + delay
        const tick = (now: number) => {
          const p = Math.max(0, Math.min(1, (now - t0) / duration))
          el.textContent = fmt(Math.round(target * (1 - Math.pow(1 - p, 4))))
          if (p < 1) raf = requestAnimationFrame(tick)
        }
        raf = requestAnimationFrame(tick)
      },
      { threshold: [0, 0.6] },
    )
    io.observe(el)

    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
      el.textContent = value
    }
  }, [value, duration, delay])

  return (
    <span ref={ref} aria-label={value}>
      {value}
    </span>
  )
}
