import logo from '../assets/evalent-logo.svg'

const columns = [
  {
    heading: 'PRODUCT',
    links: [
      ['MCQ assessments', '#formats'],
      ['AI interviews', '#formats'],
      ['Coding assessments', '#formats'],
      ['Proctoring', '#integrity'],
    ],
  },
  {
    heading: 'FOR',
    links: [
      ['Super Admins', '#roles'],
      ['College Admins', '#roles'],
      ['Students', '#roles'],
    ],
  },
  {
    heading: 'GET STARTED',
    links: [
      ['Book a demo', '#demo'],
      ['Sign in', '#signin'],
      ['Register', '#register'],
    ],
  },
]

const bottomLinks = [
  ['Formats', '#formats'],
  ['Proctoring', '#integrity'],
  ['Roles', '#roles'],
  ['FAQ', '#faq'],
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__brand">
          <div className="footer__logo">
            <img src={logo} alt="BluetipAI Evalent" />
          </div>
          <p>AI-powered assessment and proctoring for colleges and placement teams.</p>
        </div>
        <div className="footer__cols">
          {columns.map((col) => (
            <div key={col.heading} className="footer__col">
              <div className="footer__heading">{col.heading}</div>
              {col.links.map(([label, href]) => (
                <a key={label} href={href}>
                  {label}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="footer__bar">
        <div className="footer__bar-inner">
          <span className="footer__wordmark">Evalent</span>
          <div className="footer__bar-links">
            {bottomLinks.map(([label, href]) => (
              <a key={label} href={href}>
                {label}
              </a>
            ))}
            <span className="footer__support">
              <span />
              Support: Mon–Fri, 9:00–18:00
            </span>
          </div>
          <span>© 2026 Evalent</span>
        </div>
      </div>
    </footer>
  )
}
