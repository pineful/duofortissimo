import { photos } from '../media.js'
import { useI18n } from '../i18n.jsx'

export default function Cover() {
  const { c } = useI18n()
  const hero = photos.hero

  return (
    <section className="cover" id="top">
      <div className="cover-inner">
        <div className="cover-copy">
          <p className="kicker">
            {c.cover.kicker} <i />
            {c.cover.kickerTag}
          </p>
          <h1>
            {c.cover.title[0]}
            <br />
            <span>{c.cover.title[1]}</span>
          </h1>
          <p className="standfirst">{c.cover.standfirst}</p>
          <p className="byline">{c.cover.byline}</p>
        </div>

        <figure className="cover-plate">
          <div className="cover-img">
            <img
              src={hero.src}
              srcSet={hero.srcset}
              sizes="(max-width: 820px) 92vw, 44vw"
              width={hero.width}
              height={hero.height}
              alt={c.cover.alt}
            />
          </div>
          <figcaption>
            <span>{c.cover.plateLabel}</span>
            <b>{c.cover.plateCaption}</b>
          </figcaption>
        </figure>
      </div>

      <div className="contents">
        <p className="contents-label">{c.cover.contentsLabel}</p>
        <ol>
          {c.cover.contents.map((item, i) => (
            <li key={item.no}>
              <a href={['#duo', '#programme', '#stage'][i]}>
                <span className="c-no">{item.no}</span>
                <span className="c-name">{item.name}</span>
                <span className="c-ko">{item.sub}</span>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
