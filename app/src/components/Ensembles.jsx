import { useState } from 'react'
import { ensembles } from '../media.js'
import { useI18n } from '../i18n.jsx'
import { Reveal, PlayIcon, ArrowIcon } from './shared.jsx'

export default function Ensembles() {
  const { c } = useI18n()
  const e = c.ensembles
  const copy = e.items[0]
  const asset = ensembles[0]
  const v = copy.video
  const [playing, setPlaying] = useState(false)

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

        <figure className="ens-plate">
          <div className="ens-frame">
            {playing ? (
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${asset.video.id}?autoplay=1&rel=0&modestbranding=1`}
                title={`${copy.name} · ${v.title}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; compute-pressure"
                allowFullScreen
              />
            ) : (
              <button
                type="button"
                className="ens-btn"
                onClick={() => setPlaying(true)}
                aria-label={`${v.title} · ${e.videoLabel}`}
              >
                <img src={asset.video.thumb} alt="" width="1280" height="720" loading="lazy" />
                <span className="ens-play">
                  <PlayIcon />
                  <span>{e.videoLabel}</span>
                </span>
              </button>
            )}
          </div>
          <figcaption className="ens-caption">
            <span>{e.videoLabel}</span>
            <span>
              {v.title}
              {v.sub ? ` · ${v.sub}` : ''}
              <em>
                {v.place} · {v.length}
              </em>
            </span>
          </figcaption>
        </figure>
      </Reveal>
    </div>
  )
}
