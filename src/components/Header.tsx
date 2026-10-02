import logo from '../assets/evalent-logo.svg'

const links = [
  { label: 'Formats', href: '#formats' },
  { label: 'Students', href: '#students' },
  { label: 'Proctoring', href: '#integrity' },
  { label: 'Roles', href: '#roles' },
  { label: 'FAQ', href: '#faq' },
]

export default function Header() {
  return (
    <header className="header">
      <div className="header__pill">
        <img src={logo} alt="BluetipAI Evalent" className="header__logo" />
        <nav className="header__nav">
          {links.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
        <div className="header__actions">
          <a href="#signin" className="header__signin">
            Sign in
          </a>
          <a href="#demo" className="header__demo">
            Book a demo
          </a>
        </div>
      </div>
    </header>
  )
}
