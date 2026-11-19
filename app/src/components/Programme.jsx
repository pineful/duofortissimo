import { useEffect, useState } from 'react'
import { site, videos, repertoire } from '../data.js'
import { Reveal, PlayIcon, ArrowIcon } from './shared.jsx'

function Programme() {
  const [index, setIndex] = useState(0)
  const [playing, setPlaying] = useState(false)
  const active = videos[index]
  useEffect(() => setPlaying(false), [index])

  return (
    <div className="programme">
      <div className="plate">
        <div className="plate-frame">
          {playing ? (
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${active.id}?autoplay=1&rel=0&modestbranding=1`}
              title={`${active.title} ${active.titleKo}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; compute-pressure"
              allowFullScreen
            />
          ) : (
            <button
              type="button"
              className="plate-btn"
              onClick={() => setPlaying(true)}
              aria-label={`${active.title} 영상 재생`}
            >
              <img src={active.thumb} alt="" />
              <span className="plate-numeral">{active.no}</span>
              <span className="plate-play">
                <PlayIcon />
                재생
              </span>
            </button>
          )}
        </div>
        <p className="plate-caption">
          <span>도판 {active.no}</span>
          {active.meta} {active.place}
        </p>
      </div>

      <div className="programme-list" role="tablist" aria-label="연주 영상 목록">
        <p className="list-head">Programme</p>
        {videos.map((v, i) => (
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
              <b>{v.title}</b>
              <em>{v.titleKo}</em>
              <span className="prog-meta">
                {v.composer ? `${v.composer} · ` : ''}
                {v.length}
              </span>
            </span>
          </button>
        ))}
        <a className="text-link" href={site.youtube} target="_blank" rel="noopener noreferrer">
          유튜브 채널에서 더 보기
          <ArrowIcon />
        </a>
      </div>
    </div>
  )
}

export default function ProgrammeSection() {
  return (
    <section className="spread spread--programme" id="programme">
      <div className="shell">
        <header className="spread-head spread-head--row">
          <p className="folio">
            <span>02</span>
            Programme
          </p>
          <div>
            <h2>무대에서 남긴 세 편의 연주</h2>
            <p className="standfirst standfirst--small">
              2026년 10월 10일 기타발표회와 9월 리허설 실황입니다. 목록에서 곡을 고르면 이 자리에서 재생됩니다.
            </p>
          </div>
        </header>

        <Reveal>
          <Programme />
        </Reveal>

        <div className="rep-table">
          <p className="rep-title">주요 연주곡</p>
          <div className="rep-head-row">
            <span>작곡</span>
            <span>곡</span>
            <span>편성</span>
          </div>
          {repertoire.map((r) => (
            <div className="rep-line" key={r.title}>
              <span>{r.composer}</span>
              <span>
                {r.title}
                <em>{r.titleKo}</em>
              </span>
              <span>{r.inst}</span>
            </div>
          ))}
          <p className="rep-foot">
            두 곡은 9월 2일 문경 쌍용양회 공장 콘서트에서도 연주했습니다. 연주곡은 계속 늘려 가고 있습니다.
          </p>
        </div>
      </div>
    </section>
  )
}
