import { useState } from 'react'
import Reveal from './Reveal.jsx'
import { ArrowIcon, PlayIcon } from './Icons.jsx'
import { repertoire, site, videos } from '../data.js'

function VideoCard({ video, large = false, delay = 0 }) {
  const [playing, setPlaying] = useState(false)
  const watch = `https://www.youtube.com/watch?v=${video.id}`

  return (
    <Reveal delay={delay}>
      <div className={`video ${large ? 'main' : 'small'}`}>
        {playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0`}
            title={`${video.title} ${video.titleKo}`.trim()}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            className="facade"
            onClick={() => setPlaying(true)}
            aria-label={`${video.title} ${video.titleKo} 영상 재생`}
          >
            <img
              src={`https://i.ytimg.com/vi/${video.id}/maxresdefault.jpg`}
              alt=""
              loading={large ? 'eager' : 'lazy'}
              onError={(e) => {
                e.currentTarget.src = `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`
              }}
            />
            <span className="play" aria-hidden="true">
              <PlayIcon />
            </span>
          </button>
        )}
      </div>
      <div className="meta">
        <h3>
          {video.title}
          {video.titleKo ? ` ${video.titleKo}` : ''}
          <span>
            {video.meta} · {video.length}
          </span>
        </h3>
        <a href={watch} target="_blank" rel="noopener noreferrer">
          유튜브에서 보기
        </a>
      </div>
    </Reveal>
  )
}

export default function Performances() {
  const [featured, ...rest] = videos

  return (
    <section className="section" id="performances">
      <div className="shell">
        <div className="sec-head">
          <div className="head-main">
            <p className="sec-index">
              <span className="num">03</span>
              <span className="bar" />
              <span>Performances</span>
            </p>
            <div className="head-copy">
              <h2 className="title">
                실제 연주를
                <br />
                그대로 담았습니다.
              </h2>
              <p className="lead">
                2026년 10월 10일, 숭실대학교 만돌린오케스트라 동문연주단 기타발표회에서 연주한 실황입니다.
                영상을 누르면 이 자리에서 바로 재생됩니다.
              </p>
            </div>
          </div>
          <p className="head-note">YouTube @MinSoonPark</p>
        </div>

        <div className="videos">
          <VideoCard video={featured} large />
          <div className="video-grid">
            {rest.map((v, i) => (
              <VideoCard key={v.id} video={v} delay={i * 90} />
            ))}
          </div>
        </div>

        <div className="rep">
          <div className="rep-head">
            <span>Repertoire</span>
            <span>주요 연주곡</span>
          </div>
          {repertoire.map((r, i) => (
            <div className="rep-row" key={r.title}>
              <span className="no">{String(i + 1).padStart(2, '0')}</span>
              <span className="ttl">
                {r.title}
                {r.titleKo ? <span>{r.titleKo}</span> : null}
              </span>
              <span className="sub">
                <span>{r.composer}</span>
                <span>{r.inst}</span>
              </span>
            </div>
          ))}
          <p className="rep-note">
            지금까지 무대에서 연주한 곡을 정리한 목록입니다. 연주곡은 계속 늘려 가고 있습니다.
          </p>
          <a className="btn" href={site.youtube} target="_blank" rel="noopener noreferrer" style={{ marginTop: 26 }}>
            유튜브 채널 전체 보기 <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  )
}
