import { photos, site, stageDates } from '../media.js'
import { useI18n } from '../i18n.jsx'
import { Reveal, ArrowIcon } from './shared.jsx'

export default function Stage() {
  const { c } = useI18n()
  const s = c.stage
  const mailto = `mailto:${site.email}?subject=${encodeURIComponent(c.meta.title)}`

  return (
    <section className="spread spread--stage" id="stage">
      <div className="shell">
        <header className="spread-head">
          <p className="folio">
            <span>03</span>
            {s.folio}
          </p>
          <h2>{s.title}</h2>
          <p className="standfirst standfirst--small">{s.standfirst}</p>
        </header>

        <div className="photo-strip">
          <div className="photo-strip-head">
            <p>{s.photosLabel}</p>
            <span>{s.photosPlace}</span>
          </div>
          <div className="gallery">
            {photos.gallery.map((g, i) => {
              const item = s.gallery[i]
              return (
                <Reveal as="figure" key={g.src} delay={i * 70}>
                  <div className="g-img">
                    <img
                      src={g.src}
                      srcSet={`${g.small} 520w, ${g.src} 1040w`}
                      sizes="(max-width: 560px) 92vw, (max-width: 1000px) 44vw, 22vw"
                      width="1040"
                      height="1300"
                      alt={item.alt}
                      style={{ objectPosition: g.pos }}
                      loading="lazy"
                    />
                  </div>
                  <figcaption>
                    <b>{item.caption}</b>
                    <span>{item.meta}</span>
                  </figcaption>
                </Reveal>
              )
            })}
          </div>
        </div>

        <p className="stage-label" style={{ marginTop: 'clamp(40px, 6vw, 72px)' }}>{s.pastLabel}</p>
        <ol className="stage-table">
          {s.stages.map((item, i) => (
            <Reveal as="li" key={stageDates[i]} delay={i * 70}>
              <time>{stageDates[i]}</time>
              <div>
                <p className="s-what">{item.what}</p>
                <p className="s-where">{item.where}</p>
              </div>
              <span className="s-city">{item.city}</span>
            </Reveal>
          ))}
        </ol>

        <Reveal className="upcoming" delay={120}>
          <p className="upcoming-stamp">{s.upcoming.stamp}</p>
          <div className="upcoming-body">
            <p className="upcoming-date">
              <time dateTime={s.upcoming.date.replace(/\./g, '-')}>{s.upcoming.date}</time>
              <span>{s.upcoming.weekday}</span>
            </p>
            <h3>{s.upcoming.title}</h3>
            <p className="upcoming-venue">
              {s.upcoming.venue}
              <span>{s.upcoming.place}</span>
            </p>
            <p className="upcoming-role">{s.upcoming.role}</p>
            <p className="upcoming-note">{s.upcoming.note}</p>
            <a className="text-link" href={mailto}>
              {s.upcoming.link}
              <ArrowIcon />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
