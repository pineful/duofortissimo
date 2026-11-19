import { gallery, stages, mailto } from '../data.js'
import { Reveal, ArrowIcon } from './shared.jsx'

export default function Stage() {
  return (
    <section className="spread spread--stage" id="stage">
      <div className="shell">
        <header className="spread-head">
          <p className="folio">
            <span>03</span>
            On Stage
          </p>
          <h2>지난 무대, 그리고 다음 무대</h2>
          <p className="standfirst standfirst--small">
            2026년 9월 2일, 경북 문경의 쌍용양회 공장에서 열린 「재생의 선율 RE;BASIN」 클래식 콘서트.
            폐공장 마당에 차린 무대와 공연을 기다리던 오후의 사진입니다.
          </p>
        </header>

        <div className="photo-strip">
          <div className="photo-strip-head">
            <p>Photographs</p>
            <span>문경 · 2026년 9월 2일</span>
          </div>
          <div className="gallery">
            {gallery.map((g, i) => (
              <Reveal as="figure" key={g.src} delay={i * 70}>
                <div className="g-img">
                  <img
                    src={g.src}
                    srcSet={`${g.small} 520w, ${g.src} 1040w`}
                    sizes="(max-width: 560px) 92vw, (max-width: 1000px) 44vw, 22vw"
                    width="1040"
                    height="1300"
                    alt={g.alt}
                    style={{ objectPosition: g.pos }}
                    loading="lazy"
                  />
                </div>
                <figcaption>
                  <b>{g.caption}</b>
                  <span>{g.meta}</span>
                </figcaption>
              </Reveal>
            ))}
          </div>
        </div>

        <ol className="stage-table" style={{ marginTop: 'clamp(40px, 6vw, 72px)' }}>
          {stages.map((s, i) => (
            <Reveal as="li" key={s.date + s.what} delay={i * 70}>
              <time>{s.date}</time>
              <div>
                <p className="s-what">{s.what}</p>
                <p className="s-where">{s.where}</p>
              </div>
              <span className="s-city">{s.city}</span>
            </Reveal>
          ))}
        </ol>

        <Reveal className="next-note" delay={120}>
          <p className="next-stamp">Next</p>
          <div>
            <h3>다음 무대를 준비하고 있습니다</h3>
            <p>
              공개된 연주 일정은 아직 없습니다. 새 소식은 이 페이지에 먼저 올리고, 필요하신 분께는 메일로도 알려
              드립니다.
            </p>
            <a className="text-link" href={mailto}>
              소식 받아 보기
              <ArrowIcon />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
