import { Fragment, type CSSProperties } from 'react'

// Splits a heading into masked words that rise in one after another (see `.rw` in index.css).
// `start` offsets the stagger when a heading is split across several calls.
export default function RevealWords({ text, start = 0 }: { text: string; start?: number }) {
  return text.split(' ').map((word, i) => (
    <Fragment key={i}>
      {i > 0 && ' '}
      <span className="rw">
        <span style={{ '--w': start + i } as CSSProperties}>{word}</span>
      </span>
    </Fragment>
  ))
}
