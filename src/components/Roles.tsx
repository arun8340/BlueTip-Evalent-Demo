const roles = [
  {
    title: 'Super Admin',
    scope: 'Whole institution',
    body: 'Set up departments, add staff and students, and see readiness across campus.',
    bg: '#ECE4FB',
    accent: '#5634B0',
    text: '#3E3360',
    linkColor: '#5634B0',
  },
  {
    title: 'College Admin',
    scope: 'One department',
    body: 'Create and schedule assessments, watch live exams and publish results.',
    bg: '#E2E5FC',
    accent: '#2B37A8',
    text: '#323A66',
    linkColor: undefined, // default link colour, as in the design
  },
  {
    title: 'Student',
    scope: 'Their own progress',
    body: 'Take assessments, practise with mock tests and track what to improve.',
    bg: '#DFF1FB',
    accent: '#1A6E9C',
    text: '#1F4560',
    linkColor: '#1A6E9C',
  },
]

export default function Roles() {
  return (
    <section id="roles" className="roles">
      <h2 className="h2 h2--sm roles__title">One platform, three workspaces.</h2>
      <div className="roles__grid">
        {roles.map((r) => (
          <div key={r.title} className="role" style={{ background: r.bg }}>
            <h3>{r.title}</h3>
            <div className="role__scope" style={{ color: r.accent }}>
              {r.scope}
            </div>
            <p style={{ color: r.text }}>{r.body}</p>
            <a href="#roles" style={r.linkColor ? { color: r.linkColor } : undefined}>
              Explore →
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
