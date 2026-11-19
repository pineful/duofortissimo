import Reveal from './Reveal.jsx'
import { stages } from '../data.js'

export default function Stage() {
  return (
    <section className="section stage" id="stage">
      <div className="stage-bg" data-parallax="0.09" aria-hidden="true" />
      <div className="shell">
        <div className="sec-head">
          <div className="head-main">
            <p className="sec-index">
              <span className="num">04</span>
              <span className="bar" />
              <span>On Stage</span>
            </p>
            <div className="head-copy">
              <h2 className="title">
                지난 무대,
                <br />
                그리고 다음 무대.
              </h2>
              <p className="lead">
                연주회와 기업 행사, 야외 버스킹까지. 지난 무대 기록을 시간순으로 정리했습니다.
              </p>
            </div>
          </div>
          <p className="head-note">2026년 가을</p>
        </div>

        <div className="stage-grid">
          <ol className="timeline">
            {stages.map((s, i) => (
              <Reveal as="li" key={`${s.date}-${s.what}`} delay={i * 70}>
                <span className="date">{s.date}</span>
                <div>
                  <p className="what">{s.what}</p>
                  <p className="where">{s.where}</p>
                </div>
              </Reveal>
            ))}
          </ol>

          <Reveal className="next-card" delay={140}>
            <p className="tag">Next Stage</p>
            <h3>다음 무대를 준비하고 있습니다</h3>
            <p>
              공개된 연주 일정은 아직 없습니다. 연주회와 행사 소식은 이 페이지에 먼저 올리고, 필요하신 분께는
              메일로도 알려 드립니다.
            </p>
            <a className="btn" href="#contact">
              공연 소식 받아 보기
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
