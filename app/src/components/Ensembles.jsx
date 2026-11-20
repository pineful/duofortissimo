import { useState } from 'react'
import { ensembles } from '../media.js'
import { useI18n } from '../i18n.jsx'
import { Reveal, PlayIcon, ArrowIcon } from './shared.jsx'

function EnsembleCard({ copy, asset, labels, index }) {
  const [playing, setPlaying] = useState(false)
  const v = copy.video

  return (
    <Reveal as="article" className="ens-card" delay={index * 90}>
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
              aria-label={`${v.title} · ${labels.videoLabel}`}
            >
              <img src={asset.video.thumb} alt="" width="1280" height="720" loading="lazy" />
              <span className="ens-play">
                <PlayIcon />
                <span>{labels.videoLabel}</span>
              </span>
            </button>
          )}
        </div>
        <figcaption className="ens-caption">
          <span>{labels.videoLabel}</span>
          <span>
            {v.title}
            {v.sub ? ` · ${v.sub}` : ''}
            <em>
              {v.place} · {v.length}
            </em>
          </span>
        </figcaption>
      </figure>

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
          {labels.channelLink}
          <span className="ens-handle">{asset.handle}</span>
          <ArrowIcon />
        </a>
      </div>
    </Reveal>
  )
}

export default function Ensembles() {
  const { c } = useI18n()
  const e = c.ensembles

  return (
    <div className="ensembles">
      <div className="ens-head">
        <p className="ens-label">{e.label}</p>
        <h3 className="ens-title">{e.title}</h3>
        <p className="standfirst standfirst--small">{e.standfirst}</p>
      </div>

      <div className="ens-grid">
        {e.items.map((copy, i) => (
          <EnsembleCard key={ensembles[i].key} copy={copy} asset={ensembles[i]} labels={e} index={i} />
        ))}
      </div>
    </div>
  )
}
