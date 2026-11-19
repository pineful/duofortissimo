import Reveal from './Reveal.jsx'
import { GuitarArt, MandolinArt } from './Icons.jsx'
import { members } from '../data.js'

const ART = { mandolin: MandolinArt, guitar: GuitarArt }

export default function Players() {
  return (
    <section className="section" id="players">
      <div className="shell">
        <div className="sec-head">
          <div className="head-main">
            <p className="sec-index">
              <span className="num">02</span>
              <span className="bar" />
              <span>The Players</span>
            </p>
            <div className="head-copy">
              <h2 className="title">
                두 사람,
                <br />
                두 대의 악기.
              </h2>
              <p className="lead">
                숭실대학교 만돌린오케스트라 동문연주단에서 만난 선후배입니다. 만돌린의 박민순, 클래식기타의
                이철규.
              </p>
            </div>
          </div>
          <p className="head-note">박민순 · 이철규</p>
        </div>

        <div className="players">
          {members.map((m, i) => {
            const Art = ART[m.instrument]
            return (
              <Reveal as="article" className="player" key={m.name} delay={i * 110}>
                <div className="portrait">
                  <Art />
                  <span className="ph-label">연주 사진 준비 중</span>
                </div>
                <h3>{m.name}</h3>
                <p className="role">{m.role}</p>
                <ul className="facts">
                  {m.facts.map(([yr, text]) => (
                    <li key={`${m.name}-${yr}-${text}`}>
                      <span className="yr">{yr}</span>
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
                {m.note ? <p className="card-note">{m.note}</p> : null}
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
