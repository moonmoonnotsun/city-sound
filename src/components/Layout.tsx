import { asset } from '../asset'
import {
  useEffect,
  useRef,
  useState,
  type FormEvent,
  type ReactNode,
} from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { contact, topics } from '../data'
import { applyTheme, getPreferredTheme, toggleTheme, type Theme } from '../theme'

export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-in')
          io.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return ref
}

export function Reveal({
  children,
  className = '',
  as: Tag = 'div',
  delay,
}: {
  children: ReactNode
  className?: string
  as?: 'div' | 'section' | 'header' | 'li' | 'article' | 'ul'
  delay?: 1 | 2 | 3
}) {
  const ref = useReveal<HTMLElement>()
  const delayClass = delay ? ` reveal-delay-${delay}` : ''
  return (
    <Tag ref={ref as never} className={`reveal${delayClass} ${className}`.trim()}>
      {children}
    </Tag>
  )
}

function IconWhatsApp() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" width="20" height="20">
      <path
        fill="currentColor"
        d="M12.04 2C6.58 2 2.15 6.41 2.15 11.85c0 1.96.57 3.79 1.56 5.35L2 22l4.96-1.63a9.86 9.86 0 0 0 5.08 1.4h.01c5.46 0 9.89-4.41 9.89-9.85C21.94 6.41 17.5 2 12.04 2zm5.76 13.99c-.24.68-1.4 1.25-1.94 1.33-.5.07-1.13.1-1.82-.11-.42-.13-.96-.31-1.65-.61-2.9-1.26-4.79-4.18-4.93-4.37-.14-.19-1.16-1.54-1.16-2.94 0-1.4.73-2.09.99-2.38.26-.29.57-.36.76-.36h.55c.17 0 .4-.07.62.47.24.58.81 2 .88 2.14.07.14.12.31.02.5-.1.19-.14.31-.28.48-.14.17-.29.37-.42.5-.14.14-.28.29-.12.56.16.28.71 1.17 1.52 1.9 1.05.93 1.93 1.22 2.2 1.36.28.14.44.12.6-.07.17-.19.7-.81.88-1.09.19-.28.37-.23.62-.14.26.1 1.63.77 1.91.91.28.14.47.21.54.33.07.12.07.68-.17 1.36z"
      />
    </svg>
  )
}

function IconInstagram() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" width="20" height="20">
      <path
        fill="currentColor"
        d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5zm0 2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5zM17.75 6.5a1.25 1.25 0 1 1-1.25 1.25A1.25 1.25 0 0 1 17.75 6.5z"
      />
    </svg>
  )
}

function IconMail() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" width="20" height="20">
      <path
        fill="currentColor"
        d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 2v.4l8 5.1 8-5.1V6H4zm16 12V9.2l-7.4 4.7a1.2 1.2 0 0 1-1.2 0L4 9.2V18h16z"
      />
    </svg>
  )
}

function SocialLinks({ className = '' }: { className?: string }) {
  return (
    <div className={`social-links ${className}`.trim()}>
      <a
        href={contact.whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        title="WhatsApp"
      >
        <IconWhatsApp />
      </a>
      <a
        href={contact.instagramUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Instagram"
        title="Instagram"
      >
        <IconInstagram />
      </a>
      <a href={`mailto:${contact.email}`} aria-label="Email" title="Email">
        <IconMail />
      </a>
    </div>
  )
}

function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => getPreferredTheme())

  useEffect(() => {
    applyTheme(theme)
  }, [theme])

  useEffect(() => {
    const sync = () => setTheme(getPreferredTheme())
    window.addEventListener('city-sound-theme', sync)
    return () => window.removeEventListener('city-sound-theme', sync)
  }, [])

  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      className="theme-toggle"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Light mode' : 'Dark mode'}
      onClick={() => setTheme((t) => toggleTheme(t))}
    >
      {isDark ? (
        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
          <circle cx="12" cy="12" r="4.2" fill="currentColor" />
          <g stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            <path d="M12 2.8v2.2M12 19v2.2M2.8 12h2.2M19 12h2.2M5.4 5.4l1.5 1.5M17.1 17.1l1.5 1.5M5.4 18.6l1.5-1.5M17.1 6.9l1.5-1.5" />
          </g>
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
          <path
            fill="currentColor"
            d="M20.5 14.2A7.8 7.8 0 0 1 9.8 3.5a8.6 8.6 0 1 0 10.7 10.7z"
          />
        </svg>
      )}
    </button>
  )
}

export function Header({ onCallback }: { onCallback: () => void }) {
  const [scrolled, setScrolled] = useState(false)
  const [entered, setEntered] = useState(false)
  const [open, setOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const location = useLocation()
  const onServicePage = location.pathname.startsWith('/services/')
  const servicesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setEntered(true))
    return () => window.cancelAnimationFrame(frame)
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    setOpen(false)
    setServicesOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (!servicesOpen) return
    const onDoc = (e: MouseEvent) => {
      if (!servicesRef.current?.contains(e.target as Node)) setServicesOpen(false)
    }
    document.addEventListener('mousedown', onDoc)
    return () => document.removeEventListener('mousedown', onDoc)
  }, [servicesOpen])

  const close = () => {
    setOpen(false)
    setServicesOpen(false)
  }

  return (
    <header
      className={`site-header${entered ? ' is-entered' : ''}${scrolled ? ' is-scrolled' : ''}${location.pathname === '/' && !scrolled ? ' over-hero' : ''}`}
    >
      <div className="wrap-wide site-header__inner">
        <Link className="brand" to="/" aria-label="City Sound home">
          <img src={asset('logo.png')} alt="City Sound" width={54} height={54} />
        </Link>

        <nav className="site-nav" aria-label="Primary">
          <NavLink to="/" end className="nav-link" onClick={close}>
            Home
          </NavLink>

          <div
            className={`nav-dd${servicesOpen ? ' is-open' : ''}`}
            ref={servicesRef}
          >
            <button
              type="button"
              className={`nav-link nav-dd__btn${onServicePage ? ' is-active' : ''}`}
              aria-expanded={servicesOpen}
              aria-haspopup="menu"
              onClick={() => setServicesOpen((v) => !v)}
            >
              Services
              <svg className="nav-dd__chev" viewBox="0 0 12 12" aria-hidden="true">
                <path
                  d="M2.5 4.5 6 8l3.5-3.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            <div className="nav-dd__menu" role="menu">
              <Link to="/#services" role="menuitem" onClick={close}>
                All services
              </Link>
              {topics.map((topic) => (
                <NavLink
                  key={topic.slug}
                  to={`/services/${topic.slug}`}
                  role="menuitem"
                  onClick={close}
                >
                  {topic.navLabel}
                </NavLink>
              ))}
            </div>
          </div>

          <Link className="nav-link" to="/#about" onClick={close}>
            About
          </Link>
          <Link className="nav-link" to="/#contact" onClick={close}>
            Contact
          </Link>
        </nav>

        <div className="site-header__actions">
          <span className="header-badge" title="Available around the clock">
            24/7
          </span>
          <SocialLinks className="social-links--header" />
          <a className="phone-chip" href={`tel:${contact.phoneTel}`}>
            {contact.phone}
          </a>
          <ThemeToggle />
          <button type="button" className="btn btn--solid header-callback" onClick={onCallback}>
            Call back
          </button>
          <button
            type="button"
            className={`nav-toggle${open ? ' is-open' : ''}`}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className={`mobile-nav${open ? ' is-open' : ''}`} hidden={!open}>
        <nav aria-label="Mobile">
          <NavLink to="/" end onClick={close}>
            Home
          </NavLink>
          <p className="mobile-nav__label">Services</p>
          <Link to="/#services" onClick={close}>
            Overview
          </Link>
          {topics.map((topic) => (
            <NavLink key={topic.slug} to={`/services/${topic.slug}`} onClick={close}>
              {topic.navLabel}
            </NavLink>
          ))}
          <Link to="/#about" onClick={close}>
            About
          </Link>
          <Link to="/#contact" onClick={close}>
            Contact
          </Link>
        </nav>
        <SocialLinks />
        <a className="btn btn--solid" href={`tel:${contact.phoneTel}`}>
          Call {contact.phone}
        </a>
      </div>
    </header>
  )
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap site-footer__inner">
        <Link className="brand" to="/">
          <img src={asset('logo.png')} alt="" width={48} height={48} />
          <span>
            City <em>Sound</em>
          </span>
        </Link>
        <p>© {new Date().getFullYear()} CitySound.ae — All rights reserved.</p>
        <div className="site-footer__links">
          <SocialLinks />
          <a href={`tel:${contact.phoneTel}`}>{contact.phone}</a>
        </div>
      </div>
      <div className="wrap site-footer__topics">
        {topics.map((topic) => (
          <Link key={topic.slug} to={`/services/${topic.slug}`}>
            {topic.navLabel}
          </Link>
        ))}
      </div>
    </footer>
  )
}

export function CallbackModal({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) {
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (!open) setDone(false)
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!open) return null

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const name = String(data.get('name') || '')
    const phone = String(data.get('phone') || '')
    const body = encodeURIComponent(`Call back request\nName: ${name}\nPhone: ${phone}`)
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent('Call back request')}&body=${body}`
    setDone(true)
  }

  return (
    <div className="modal" role="dialog" aria-modal="true" aria-labelledby="callback-title">
      <button type="button" className="modal__backdrop" aria-label="Close" onClick={onClose} />
      <div className="modal__panel">
        <button type="button" className="modal__close" onClick={onClose} aria-label="Close">
          ×
        </button>
        <h2 id="callback-title">Request a call back</h2>
        <p>Our experts will advise on all questions.</p>
        <form onSubmit={onSubmit}>
          <label>
            Name
            <input name="name" required placeholder="Your name" />
          </label>
          <label>
            Phone
            <input name="phone" required placeholder="+971…" defaultValue="+971" />
          </label>
          <button type="submit" className="btn btn--solid btn--block btn--lg">
            {done ? 'Opening mail…' : 'To order'}
          </button>
        </form>
      </div>
    </div>
  )
}
