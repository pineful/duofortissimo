import { photos } from '../media.js'
import { useI18n } from '../i18n.jsx'
import { Reveal } from './shared.jsx'

export default function Duo() {
  const { c } = useI18n()
  const d = c.duo
  const side = photos.duo

  return (
    <section className="spread" id="duo">
      <div className="shell">
        <header className="spread-head">
          <p className="folio">
            <span>01</span>
            {d.folio}
          </p>
          <h2>
            {d.title[0]}
            <br />
            {d.title[1]}
          </h2>
        </header>

        <div className="article">
          <div className="article-body">
            <p className="dropcap">{d.body[0]}</p>
            <p>{d.body[1]}</p>
            <blockquote>
              <p>{d.quote}</p>
            </blockquote>
            <p>{d.body2[0]}</p>
            <p>{d.body2[1]}</p>
          </div>

          <aside className="article-side">
            <div className="side-plate">
              <img
                src={side.src}
                srcSet={side.srcset}
                sizes="(max-width: 1000px) 92vw, 36vw"
                width={side.width}
                height={side.height}
                alt={d.sideAlt}
                loading="lazy"
              />
              <p>{d.sideCaption}</p>
            </div>
            <dl className="fact-list">
              <p className="fact-head">{d.factHead}</p>
              {d.facts.map(([k, v]) => (
                <div key={k}>
                  <dt>{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
              <div>
                <dt>{d.stageFact[0]}</dt>
                <dd>{d.stageFact[1]}</dd>
              </div>
            </dl>
          </aside>
        </div>

        <div className="profiles">
          <p className="profiles-head">{d.profilesHead}</p>
          {d.members.map((m, i) => {
            const photo = photos.members[i]
            return (
              <Reveal as="article" className="profile" key={m.name} delay={i * 100}>
                <figure className="profile-photo">
                  <img
                    src={photo.src}
                    srcSet={photo.srcset}
                    sizes="(max-width: 820px) 92vw, (max-width: 1000px) 44vw, 38vw"
                    width="960"
                    height="1200"
                    alt={m.photoAlt || photo.alt}
                    loading="lazy"
                  />
                  <figcaption>{m.photoCaption || photo.caption}</figcaption>
                </figure>
                <div className="profile-copy">
                  <div className="profile-head">
                    <p className="profile-role">
                      {i + 1}. {m.role}
                    </p>
                    <span className="profile-en">{m.nameEn}</span>
                  </div>
                  <h3>
                    {m.name} <span>{m.roleLabel}</span>
                  </h3>
                  <dl>
                    {m.facts.map(([k, v]) => (
                      <div key={k}>
                        <dt>{k}</dt>
                        <dd>{v}</dd>
                      </div>
                    ))}
                  </dl>
                  {m.note ? <p className="profile-note">{m.note}</p> : null}
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
