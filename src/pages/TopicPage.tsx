import { useEffect, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { getTopic, topics, type TopicSection } from '../data'
import { CallbackModal, Footer, Header, Reveal } from '../components/Layout'

function isPhoto(src: string) {
  return /\.(jpe?g|webp)$/i.test(src)
}

function TopicMedia({ section }: { section: TopicSection }) {
  const images = section.gallery?.length
    ? section.gallery
    : section.image
      ? [section.image]
      : []
  const [active, setActive] = useState(0)
  const current = images[active] ?? images[0]
  const photo = current ? isPhoto(current) : false

  useEffect(() => {
    setActive(0)
  }, [section.title])

  if (!current) return null

  return (
    <div className={`topic-block__media${photo ? ' is-photo' : ' is-product'}`}>
      <img key={current} src={current} alt="" loading="lazy" className="topic-block__img" />
      {images.length > 1 ? (
        <div className="topic-media-dots" role="tablist" aria-label="Section images">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              role="tab"
              aria-selected={i === active}
              aria-label={`Image ${i + 1}`}
              className={`topic-media-dot${i === active ? ' is-active' : ''}`}
              onClick={() => setActive(i)}
            />
          ))}
        </div>
      ) : null}
    </div>
  )
}

export default function TopicPage() {
  const { slug } = useParams()
  const topic = getTopic(slug)
  const [callbackOpen, setCallbackOpen] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  useEffect(() => {
    if (!topic) return
    document.title = `${topic.title} — City Sound`
    return () => {
      document.title = 'City Sound — Event Sound, Light & Entertainment | Dubai'
    }
  }, [topic])

  if (!topic) return <Navigate to="/" replace />

  const others = topics.filter((t) => t.slug !== topic.slug)

  return (
    <>
      <div className="grain" aria-hidden="true" />
      <Header onCallback={() => setCallbackOpen(true)} />
      <main>
        <section className="topic-hero">
          <div className="wrap topic-hero__layout">
            <div className="topic-hero__content">
              <nav className="crumbs" aria-label="Breadcrumb">
                <Link to="/">Home</Link>
                <span>/</span>
                <Link to="/#services">Services</Link>
                <span>/</span>
                <span aria-current="page">{topic.navLabel}</span>
              </nav>
              <p className="eyebrow">Topic</p>
              <h1>{topic.title}</h1>
              <p className="topic-hero__lede">{topic.summary}</p>
              <div className="hero__cta">
                <button
                  type="button"
                  className="btn btn--solid btn--lg"
                  onClick={() => setCallbackOpen(true)}
                >
                  <span className="btn-label-full">Request a call back</span>
                  <span className="btn-label-short">Call back</span>
                </button>
                <Link className="btn btn--ghost btn--lg" to="/#contact">
                  Contact us
                </Link>
              </div>
            </div>
            <div
              className={`topic-hero__shot${isPhoto(topic.heroImage) ? ' is-photo' : ' is-product'}`}
            >
              <img src={topic.heroImage} alt="" />
            </div>
          </div>
        </section>

        <section className="topic-sections">
          <div className="wrap">
            {topic.sections.map((section, i) => (
              <Reveal
                as="article"
                key={section.title}
                className={`topic-block${i % 2 === 1 ? ' topic-block--flip' : ''}`}
                delay={((i % 3) + 1) as 1 | 2 | 3}
              >
                <div className="topic-block__copy">
                  <span className="service-band__index">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h2>{section.title}</h2>
                  {section.paragraphs.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
                <TopicMedia section={section} />
              </Reveal>
            ))}
          </div>
        </section>

        <section className="topic-more">
          <div className="wrap">
            <Reveal className="section-head">
              <p className="eyebrow">More topics</p>
              <h2>Explore the rest of the kit.</h2>
            </Reveal>
            <div className="topic-more__grid">
              {others.map((item) => (
                <Link key={item.slug} className="topic-card" to={`/services/${item.slug}`}>
                  <img src={item.heroImage} alt="" loading="lazy" />
                  <span>{item.navLabel}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <CallbackModal open={callbackOpen} onClose={() => setCallbackOpen(false)} />
    </>
  )
}
