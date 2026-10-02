const points = [
  ['Fits your structure', 'Courses, departments, batches and roll numbers are built in.'],
  ['Questions ready on day one', 'Over a million MCQ, coding and interview questions to start from.'],
  ['Whole-batch exams', 'One schedule for the batch, a randomised paper for each student.'],
  ['Real people to help', 'Setup and exam-day support, Monday to Friday, 9:00–18:00 IST.'],
]

export default function Why() {
  return (
    <section className="band band--why">
      <div className="band__inner why">
        <h2 className="h2 h2--sm">Made for colleges and placement teams.</h2>
        <div className="why__grid">
          {points.map(([title, body], i) => (
            <div key={title}>
              <div className="why__num">{String(i + 1).padStart(2, '0')}</div>
              <div className="why__title">{title}</div>
              <div className="why__body">{body}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
