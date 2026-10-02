export default function CTA() {
  return (
    <section id="demo" className="cta">
      <div className="cta__glow" />
      <div className="cta__inner">
        <div className="cta__copy">
          <div className="cta__chip">30-minute live demo</div>
          <h2>
            See Evalent with <span>your own syllabus.</span>
          </h2>
          <p>
            Bring your question bank or syllabus. We'll create, run, monitor and evaluate a sample assessment with your
            team.
          </p>
        </div>
        <div className="btn-row">
          <a href="#demo" className="btn btn--primary btn--cta">
            Book a demo
          </a>
          <a href="#tour" className="btn btn--ghost-dark">
            ▶ Product tour
          </a>
        </div>
      </div>
    </section>
  )
}
