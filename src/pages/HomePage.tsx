import { useEffect, useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { aboutPoints, contact, heroFeatures, reasons, services } from '../data'
import { Reveal } from '../components/Layout'

function Hero({ onCallback }: { onCallback: () => void }) {
  const [index, setIndex] = useState(0)
  const [displayIndex, setDisplayIndex] = useState(0)
  const [ready, setReady] = useState(false)
  const [textIn, setTextIn] = useState(false)
  const slide = heroFeatures[displayIndex]

  const goTo = (next: number) => {
    const target = ((next % heroFeatures.length) + heroFeatures.length) % heroFeatures.length
    if (target === index) return
    setTextIn(false)
    setIndex(target)
    window.setTimeout(() => {
      setDisplayIndex(target)
      setTextIn(true)
    }, 220)
  }

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      setReady(true)
      setTextIn(true)
      return
    }
    const frame = window.requestAnimationFrame(() => setReady(true))
    const showText = window.setTimeout(() => setTextIn(true), 420)
    return () => {
      window.cancelAnimationFrame(frame)
      window.clearTimeout(showText)
    }
  }, [])

  useEffect(() => {
    if (!ready) return
    const id = window.setInterval(() => {
      goTo(index + 1)
    }, 6000)
    return () => window.clearInterval(id)
  }, [index, ready])

  return (
    <section className={`hero${ready ? ' is-ready' : ''}`} id="top" aria-label="Main features">
      <div className="hero__media" aria-hidden="true">
        {heroFeatures.map((feature, i) => (
          <img
            key={feature.id}
            src={feature.image}
            alt=""
            className={`hero__img${i === index ? ' is-active' : ''}`}
            fetchPriority={i === 0 ? 'high' : 'low'}
          />
        ))}
        <div className="hero__veil" />
        <div className="hero__beam" />
      </div>

      <div className="wrap-wide hero__content">
        <p className="hero__brand hero-enter hero-enter--1">City Sound</p>
        <p className="hero__feature-label hero-enter hero-enter--2">Main features</p>
        <div className={`hero__swap${textIn ? ' is-in' : ''}`}>
          <h1 className="hero__title">
            <span className="hero__title-main">{slide.title}</span>
            <span className="hero__title-sub">{slide.emphasis || '\u00A0'}</span>
          </h1>
        </div>
        <p className="hero__lede hero-enter hero-enter--3">
          Professional event support across Dubai — gear, install, and people who show up ready.
        </p>
        <div className="hero__cta hero-enter hero-enter--4">
          <Link className="btn btn--ghost btn--lg" to={slide.href}>
            Explore
          </Link>
            <button type="button" className="btn btn--solid btn--lg" onClick={onCallback}>
              <span className="btn-label-full">Request a call back</span>
              <span className="btn-label-short">Call back</span>
            </button>
        </div>
      </div>

      <div className="hero__dots hero-enter hero-enter--5" role="tablist" aria-label="Feature slides">
        {heroFeatures.map((feature, i) => (
          <button
            key={feature.id}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={feature.title}
            className={`hero__dot${i === index ? ' is-active' : ''}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>

      <div className="hero__arc" aria-hidden="true">
        <svg viewBox="0 0 1440 200" preserveAspectRatio="none">
          <path d="M0,0 C360,180 1080,180 1440,0 L1440,200 L0,200 Z" />
        </svg>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section className="services" id="services">
      <div className="wrap">
        <Reveal className="section-head">
          <p className="eyebrow">Our services</p>
          <h2>Everything the room needs — nothing it doesn’t.</h2>
        </Reveal>
      </div>

      <div className="services__list wrap-wide">
        {services.map((service, i) => (
          <Reveal
            as="div"
            key={service.id}
            className="service-band-wrap"
            delay={((i % 3) + 1) as 1 | 2 | 3}
          >
            <Link className="service-band" to={service.href}>
              <div className="service-band__visual">
                <img src={service.image} alt="" loading="lazy" />
              </div>
              <div className="service-band__body">
                <span className="service-band__index">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3>{service.title}</h3>
                <p>{service.copy}</p>
                <span className="btn btn--ghost service-band__cta">Read more</span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="about" id="about">
      <div className="wrap about__grid">
        <Reveal className="about__intro">
          <p className="eyebrow">About us</p>
          <h2>
            <span className="accent">CitySound.ae</span> — We are professionals in the entertainment
            business.
          </h2>
          <p className="about__copy">
            Our team of experienced managers is available for a chat at any time. We pick the best
            event equipment for your requirements and budget — professional gear, affordable prices,
            and flexible contract terms.
          </p>
        </Reveal>
        <Reveal as="ul" className="about__list" delay={2}>
          {aboutPoints.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </Reveal>
      </div>
    </section>
  )
}

function WhyUs() {
  return (
    <section className="why" id="why">
      <div className="wrap">
        <Reveal className="section-head section-head--split">
          <div>
            <p className="eyebrow">Why us</p>
            <h2>Built for live rooms — not slide decks.</h2>
          </div>
          <p className="section-head__aside">
            Straight talk, pro equipment, and a crew that stays until strike.
          </p>
        </Reveal>

        <div className="why__grid">
          {reasons.map((reason, i) => (
            <Reveal
              as="article"
              key={reason.title}
              className="why-item"
              delay={((i % 3) + 1) as 1 | 2 | 3}
            >
              <h3>{reason.title}</h3>
              <p>{reason.copy}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const [sent, setSent] = useState(false)

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') || '')
    const phone = String(data.get('phone') || '')
    const email = String(data.get('email') || '')
    const message = String(data.get('message') || '')
    const body = encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\n\n${message}`,
    )
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent('City Sound enquiry')}&body=${body}`
    setSent(true)
  }

  return (
    <section className="contact" id="contact">
      <div className="wrap contact__grid">
        <Reveal className="contact__intro">
          <p className="eyebrow">Contact</p>
          <h2>Tell us the date. We’ll bring the room to life.</h2>
          <p>Available 24/7 across Dubai &amp; the UAE.</p>
          <ul className="contact__channels">
            <li>
              <span>Phone</span>
              <a href={`tel:${contact.phoneTel}`}>{contact.phone}</a>
            </li>
            <li>
              <span>Email</span>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </li>
            <li>
              <span>Instagram</span>
              <a href={contact.instagramUrl} target="_blank" rel="noreferrer">
                @{contact.instagram}
              </a>
            </li>
            <li>
              <span>WhatsApp</span>
              <a href={contact.whatsappUrl} target="_blank" rel="noreferrer">
                Message us
              </a>
            </li>
          </ul>
        </Reveal>

        <Reveal className="contact__form-wrap" delay={2}>
          <form className="contact-form" onSubmit={onSubmit}>
            <label>
              Name
              <input name="name" required autoComplete="name" placeholder="Your name" />
            </label>
            <label>
              Phone
              <input
                name="phone"
                required
                autoComplete="tel"
                placeholder="+971…"
                defaultValue="+971"
              />
            </label>
            <label>
              Email
              <input
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="you@company.com"
              />
            </label>
            <label>
              Message
              <textarea
                name="message"
                required
                rows={4}
                placeholder="Date, venue, what you need…"
              />
            </label>
            <button type="submit" className="btn btn--solid btn--lg btn--block">
              {sent ? 'Opening mail…' : 'Send'}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  )
}

export default function HomePage({
  onCallback,
}: {
  onCallback: () => void
}) {
  return (
    <>
      <Hero onCallback={onCallback} />
      <About />
      <Services />
      <WhyUs />
      <Contact />
    </>
  )
}
