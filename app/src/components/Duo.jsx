import { members, facts } from '../data.js'
import { Reveal } from './shared.jsx'

export default function Duo() {
  return (
    <section className="spread" id="duo">
      <div className="shell">
        <header className="spread-head">
          <p className="folio">
            <span>01</span>
            The Duet
          </p>
          <h2>
            만돌린이 노래하면,
            <br />
            기타가 그 아래를 받쳐 줍니다
          </h2>
        </header>

        <div className="article">
          <div className="article-body">
            <p className="dropcap">
              만돌린은 두 줄씩 네 벌, 여덟 줄을 가진 악기입니다. 짧은 피크 소리를 빠르게 이어 붙여 긴 음을 만드는
              트레몰로가 이 악기의 표정입니다. 그 옆에서 클래식기타는 저음과 화성을 맡습니다.
            </p>
            <p>두 악기만으로도 오케스트라 악보의 결을 살릴 수 있는 편성입니다.</p>
            <blockquote>
              <p>두 악기가 한 호흡을 맞추면, 작은 방에도 무대의 넓이가 생깁니다.</p>
            </blockquote>
            <p>
              두 사람은 숭실대학교 만돌린오케스트라 동문연주단에서 선후배로 오래 함께 연주했습니다. 2026년 8월에
              듀오를 결성하고 연주회와 기업 행사, 야외 무대까지 자리를 가리지 않고 연주하고 있습니다.
            </p>
            <p>
              포르티시모는 악보에서 ‘아주 힘있게’를 뜻하는 셈여림 기호입니다. 이름처럼 두 악기가 함께 내는 소리는
              작은 편성인데도 단단합니다.
            </p>
          </div>

          <aside className="article-side">
            <div className="side-plate">
              <img
                src="/assets/photos/duo-1200.webp"
                srcSet="/assets/photos/duo-600.webp 600w, /assets/photos/duo-1200.webp 1200w"
                sizes="(max-width: 1000px) 92vw, 36vw"
                width="1200"
                height="900"
                alt="클래식기타 이철규와 만돌린 박민순, 야외 버스킹을 마치고 나란히 앉아 있다"
                loading="lazy"
              />
              <p>연주를 마치고. 2026년 9월 1일, 야외 버스킹에서.</p>
            </div>
            <dl className="fact-list">
              <p className="fact-head">사실 확인</p>
              {facts.map(([k, v]) => (
                <div key={k}>
                  <dt>{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
              <div>
                <dt>무대</dt>
                <dd>연주회, 기업 행사, 야외 버스킹</dd>
              </div>
            </dl>
          </aside>
        </div>

        <div className="profiles">
          <p className="profiles-head">두 연주자</p>
          {members.map((m, i) => (
            <Reveal as="article" className="profile" key={m.name} delay={i * 100}>
              <figure className="profile-photo">
                <img
                  src={m.photo.src}
                  srcSet={m.photo.srcset}
                  sizes="(max-width: 820px) 92vw, (max-width: 1000px) 44vw, 38vw"
                  width="960"
                  height="1200"
                  alt={m.photo.alt}
                  loading="lazy"
                />
                <figcaption>{m.photo.caption}</figcaption>
              </figure>
              <div className="profile-copy">
                <div className="profile-head">
                  <p className="profile-role">
                    {i + 1}. {m.role}
                  </p>
                  <span className="profile-en">{m.nameEn}</span>
                </div>
                <h3>
                  {m.name} <span>{m.roleKo}</span>
                </h3>
                <dl>
                  {m.facts.map(([k, v]) => (
                    <div key={k}>
                      <dt>{k}</dt>
                      <dd>{v}</dd>
                    </div>
                  ))}
                </dl>
                {m.note ? <p className="profile-note">{m.note}</p> : null}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
