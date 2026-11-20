import { useState } from 'react'
import { ensembles } from '../media.js'
import { useI18n } from '../i18n.jsx'
import { Reveal, PlayIcon, ArrowIcon } from './shared.jsx'

export default function Ensembles() {
  const { c } = useI18n()
  const e = c.ensembles
  const copy = e.items[0]
  const asset = ensembles[0]
  const [playing, setPlaying] = useState(-1)

  return (
    <div className="ensembles">
      <div className="ens-head">
        <p className="ens-label">{e.label}</p>
        <h3 className="ens-title">{e.title}</h3>
        <p className="standfirst standfirst--small">{e.standfirst}</p>
      </div>

      <Reveal as="article" className="ens-card">
        <div className="ens-copy">
          <p className="ens-role">{copy.role}</p>
          <h4>
            {copy.name}
            <span>{copy.nameLatin}</span>
          </h4>
          <p className="ens-body">{copy.body}</p>
          <dl className="ens-facts">
            {copy.facts.map(([k, val]) => (
              <div key={k}>
                <dt>{k}</dt>
                <dd>{val}</dd>
              </div>
            ))}
          </dl>
          <a className="text-link" href={asset.channel} target="_blank" rel="noopener noreferrer">
            {e.channelLink}
            <span className="ens-handle">{asset.handle}</span>
            <ArrowIcon />
          </a>
        </div>

        <div className="ens-plates">
          {copy.videos.map((v, i) => {
            const a = asset.videos[i]
            const on = playing === i
            return (
              <figure className="ens-plate" key={a.id}>
                <div className="ens-frame">
                  {on ? (
                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${a.id}?autoplay=1&rel=0&modestbranding=1${
                        a.start ? `&start=${a.start}` : ''
                      }`}
                      title={`${copy.name} · ${v.title}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; compute-pressure"
                      allowFullScreen
                    />
                  ) : (
                    <button
                      type="button"
                      className="ens-btn"
                      onClick={() => setPlaying(i)}
                      aria-label={`${v.title} · ${e.videoLabel}`}
                    >
                      <img src={a.thumb} alt="" width="1280" height="720" loading="lazy" />
                      <span className="ens-play">
                        <PlayIcon />
                        <span>{e.videoLabel}</span>
                      </span>
                    </button>
                  )}
                </div>
                <figcaption className="ens-caption">
                  <span>{v.tag}</span>
                  <span>
                    {v.title}
                    {v.sub ? ` · ${v.sub}` : ''}
                    <em>{v.meta}</em>
                  </span>
                </figcaption>
              </figure>
            )
          })}
        </div>
      </Reveal>
    </div>
  )
}
