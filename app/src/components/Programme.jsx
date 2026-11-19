import { useEffect, useState } from 'react'
import { site, videos } from '../media.js'
import { useI18n } from '../i18n.jsx'
import { Reveal, PlayIcon, ArrowIcon } from './shared.jsx'

function Programme() {
  const { c } = useI18n()
  const p = c.programme
  const [index, setIndex] = useState(0)
  const [playing, setPlaying] = useState(false)
  const active = videos[index]
  const copy = p.videos[index]
  useEffect(() => setPlaying(false), [index])

  return (
    <div className="programme">
      <div className="plate">
        <div className="plate-frame">
          {playing ? (
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${active.id}?autoplay=1&rel=0&modestbranding=1`}
              title={`${copy.title} ${copy.sub}`.trim()}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; compute-pressure"
              allowFullScreen
            />
          ) : (
            <button
              type="button"
              className="plate-btn"
              onClick={() => setPlaying(true)}
              aria-label={`${copy.title} — ${c.ui.play}`}
            >
              <img src={active.thumb} alt="" />
              <span className="plate-numeral">{active.no}</span>
              <span className="plate-play">
                <PlayIcon />
                {c.ui.play}
              </span>
            </button>
          )}
        </div>
        <p className="plate-caption">
          <span>
            {c.ui.plate} {active.no}
          </span>
          {active.date} {copy.place}
        </p>
      </div>

      <div className="programme-list" role="tablist" aria-label={c.ui.videoListLabel}>
        <p className="list-head">{p.listHead}</p>
        {videos.map((v, i) => {
          const item = p.videos[i]
          return (
            <button
              key={v.id}
              type="button"
              role="tab"
              aria-selected={i === index}
              className={`prog-item ${i === index ? 'is-on' : ''}`}
              onClick={() => setIndex(i)}
            >
              <span className="prog-no">{v.no}</span>
              <span className="prog-copy">
                <b>{item.title}</b>
                {item.sub ? <em>{item.sub}</em> : null}
                <span className="prog-meta">
                  {item.composer ? `${item.composer} · ` : ''}
                  {item.length}
                </span>
              </span>
            </button>
          )
        })}
        <a className="text-link" href={site.youtube} target="_blank" rel="noopener noreferrer">
          {c.ui.moreVideos}
          <ArrowIcon />
        </a>
      </div>
    </div>
  )
}

export default function ProgrammeSection() {
  const { c } = useI18n()
  const p = c.programme

  return (
    <section className="spread spread--programme" id="programme">
      <div className="shell">
        <header className="spread-head spread-head--row">
          <p className="folio">
            <span>02</span>
            {p.folio}
          </p>
          <div>
            <h2>{p.title}</h2>
            <p className="standfirst standfirst--small">{p.standfirst}</p>
          </div>
        </header>

        <Reveal>
          <Programme />
        </Reveal>

        <div className="rep-table">
          <p className="rep-title">{p.repTitle}</p>
          <div className="rep-head-row">
            {p.repHead.map((h) => (
              <span key={h}>{h}</span>
            ))}
          </div>
          {p.rep.map(([composer, title, sub, inst]) => (
            <div className="rep-line" key={title}>
              <span>{composer}</span>
              <span>
                {title}
                {sub ? <em>{sub}</em> : null}
              </span>
              <span>{inst}</span>
            </div>
          ))}
          <p className="rep-foot">{p.repFoot}</p>
        </div>
      </div>
    </section>
  )
}
