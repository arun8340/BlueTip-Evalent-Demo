import { useState } from 'react'
import logo from '../assets/evalent-logo.svg'

const links = [
  { label: 'Formats', href: '#formats' },
  { label: 'Students', href: '#students' },
  { label: 'Proctoring', href: '#integrity' },
  { label: 'Roles', href: '#roles' },
  { label: 'FAQ', href: '#faq' },
]

const menuLinks = [...links, { label: 'Sign in', href: '#signin' }]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="header__pill">
        <div className="header__row">
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
            <button
              type="button"
              className={`header__burger${menuOpen ? ' header__burger--open' : ''}`}
              aria-label="Menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((o) => !o)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
        {menuOpen && (
          <nav className="header__menu">
            {menuLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>
                {l.label}
                <span>→</span>
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
