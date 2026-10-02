import type { CSSProperties } from 'react'
import { stagger } from '../motion'
import RevealWords from './RevealWords'
import CountUp from './CountUp'

const kw = (word: string) => <span className="code__kw">{word}</span>

// Merge-intervals solution shown in the coding card; kept under ~32 characters a line so it never wraps.
const codeLines = [
  <>{kw('def')} merge(intervals):</>,
  <>{'  '}intervals.sort()</>,
  <>{'  '}merged = [intervals[0]]</>,
  <>{'  '}{kw('for')} s, e {kw('in')} intervals[1:]:</>,
  <>{'    '}last = merged[-1]</>,
  <>{'    '}{kw('if')} s {'<='} last[1]:</>,
  <>{'      '}last[1] = max(last[1], e)</>,
  <>{'    '}{kw('else')}:</>,
  <>{'      '}merged.append([s, e])</>,
  <>{'  '}{kw('return')} merged</>,
]

export default function Formats() {
  return (
    <section id="formats" className="formats">
      <div className="section-intro">
        <h2 className="h2" data-reveal="words">
          <RevealWords text="Three skills, three formats." />
        </h2>
        <p data-reveal="up" style={stagger(3)}>
          Knowing the theory, talking it through and writing working code are different skills. Evalent tests each one
          its own way.
        </p>
      </div>
      <div className="formats__grid">
        <div className="format format--mcq" data-reveal="tilt" style={stagger(0)}>
          <div className="format__kicker">MULTIPLE CHOICE</div>
          <h3>A fresh paper for every student.</h3>
          <p>Aptitude and technical tests from 1M+ questions, randomised per student and matched to your syllabus.</p>
          <div className="format__mock mcq">
            <div className="mcq__q">Average lookup time in a hash table with chaining?</div>
            <div className="mcq__opts">
              <div className="mcq__opt mcq__opt--on">O(1)</div>
              <div className="mcq__opt">O(log n)</div>
              <div className="mcq__opt">O(n)</div>
            </div>
          </div>
        </div>

        <div className="format format--interview" data-reveal="tilt" style={stagger(1)}>
          <div className="format__kicker">AI INTERVIEW</div>
          <h3>An interview built from their resume.</h3>
          <p>Spoken interviews from 50,000+ questions. It asks follow-ups and scores content and communication.</p>
          <div className="format__mock chat">
            <div className="chat__ai">How did you handle back-pressure in your ingestion pipeline?</div>
            <div className="chat__me">We tracked consumer lag and added rate-limited queues.</div>
            <div className="chat__score">
              <span>Score</span>
              <b>
                <CountUp value="92 / 100" duration={1200} delay={1900} />
              </b>
            </div>
          </div>
        </div>

        <div className="format format--coding" data-reveal="tilt" style={stagger(2)}>
          <div className="format__kicker">CODING</div>
          <h3>Let the code answer.</h3>
          <p>
            17,000+ problems in a real editor, checked against visible and hidden test cases with runtime and memory
            figures.
          </p>
          <div className="format__mock code">
            {codeLines.map((line, i) => (
              <div
                key={i}
                className={`code__line${i === codeLines.length - 1 ? ' code__line--caret' : ''}`}
                style={{ '--l': i } as CSSProperties}
              >
                {line}
              </div>
            ))}
            <div className="code__ok">✓ 3/3 passed · 12ms</div>
          </div>
        </div>
      </div>
    </section>
  )
}
