import { useEffect, useLayoutEffect, type CSSProperties, type RefObject } from 'react'

export const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

// Stagger index for a [data-reveal] element; CSS turns it into a transition/animation delay.
export const stagger = (i: number, style?: CSSProperties) => ({ ...style, '--i': i }) as CSSProperties

// Snaps an element back to its pre-reveal state so the entrance can play again: transitions are
// suppressed for a frame (no visible reverse fade) and keyframe animations are rewound to their start,
// where the CSS keeps them paused until data-revealed returns.
function resetReveal(el: HTMLElement) {
  el.dataset.instant = ''
  delete el.dataset.revealed
  for (const a of el.getAnimations({ subtree: true })) {
    if (a instanceof CSSAnimation) a.currentTime = 0
  }
  requestAnimationFrame(() => requestAnimationFrame(() => delete el.dataset.instant))
}

// Sets data-revealed on every [data-reveal] element as it scrolls into view, from either direction,
// and clears it once the element is fully off screen so the entrance replays next time.
// CSS keys each section's choreography off that attribute.
export function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('[data-reveal]')
    if (reducedMotion() || !('IntersectionObserver' in window)) {
      els.forEach((el) => (el.dataset.revealed = ''))
      return
    }

    // Enter: a little inside the viewport, below the sticky header and above the bottom edge.
    const enter = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) (e.target as HTMLElement).dataset.revealed = ''
        }
      },
      { rootMargin: '-80px 0px -12% 0px' },
    )
    // Leave: only once it is completely out of view, so nothing resets while still visible.
    const leave = new IntersectionObserver((entries) => {
      for (const e of entries) {
        const el = e.target as HTMLElement
        if (!e.isIntersecting && el.dataset.revealed !== undefined) resetReveal(el)
      }
    })
    els.forEach((el) => {
      enter.observe(el)
      leave.observe(el)
    })
    return () => {
      enter.disconnect()
      leave.disconnect()
    }
  }, [])
}

// Writes a 0–1 scroll progress for `ref` into a CSS custom property, for scroll-linked effects.
export function useScrollVar(
  ref: RefObject<HTMLElement | null>,
  name: string,
  progress: (rect: DOMRect, vh: number) => number,
) {
  useLayoutEffect(() => {
    const el = ref.current
    if (!el || reducedMotion()) return

    let raf = 0
    const update = () => {
      raf = 0
      const p = Math.min(1, Math.max(0, progress(el.getBoundingClientRect(), window.innerHeight)))
      el.style.setProperty(name, p.toFixed(3))
    }
    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      el.style.removeProperty(name)
    }
  }, [ref, name, progress])
}
