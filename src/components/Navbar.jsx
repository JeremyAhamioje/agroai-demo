import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Sun, Moon, Leaf, Menu, X } from 'lucide-react'

export default function Navbar({ darkMode, toggleDark }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  const links = [
    { href: '#how-it-works', label: 'How It Works' },
    { href: '#features', label: 'Features' },
    { href: '#use-cases', label: 'Use Cases' },
    { href: '#faq', label: 'FAQ' },
  ]

  const scrollTo = (id) => {
    setMobileOpen(false)
    if (location.pathname !== '/') {
      window.location.href = '/' + id
      return
    }
    const el = document.querySelector(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="nav-glass fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-leaf-500 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
              <Leaf size={16} className="text-white" strokeWidth={2.5} />
            </div>
            <span className="font-display font-700 text-lg" style={{ color: 'var(--text-primary)' }}>
              Plant<span className="text-gradient">Aid</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {links.map(l => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                className="text-sm font-medium transition-colors hover:text-leaf-500"
                style={{ color: 'var(--text-secondary)' }}
              >
                {l.label}
              </button>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleDark}
              className="w-9 h-9 rounded-lg flex items-center justify-center transition-all hover:bg-leaf-500/10"
              style={{ color: 'var(--text-secondary)' }}
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <Link to="/analyze" className="hidden md:block btn-primary text-sm py-2 px-4">
              Try It Now
            </Link>

            <button
              className="md:hidden w-9 h-9 rounded-lg flex items-center justify-center"
              style={{ color: 'var(--text-secondary)' }}
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t px-4 py-4 space-y-3" style={{ borderColor: 'var(--border)', background: 'var(--nav-bg)' }}>
          {links.map(l => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className="block w-full text-left text-sm font-medium py-2"
              style={{ color: 'var(--text-secondary)' }}
            >
              {l.label}
            </button>
          ))}
          <Link to="/analyze" className="btn-primary w-full justify-center text-sm py-2.5 mt-2" onClick={() => setMobileOpen(false)}>
            Try It Now
          </Link>
        </div>
      )}
    </nav>
  )
}
