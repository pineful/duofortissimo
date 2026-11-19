import Reveal from './Reveal.jsx'

export default function Duo() {
  return (
    <section className="section duo-section" id="duo">
      <div className="shell">
        <div className="sec-head">
          <div className="head-main">
            <p className="sec-index">
              <span className="num">01</span>
              <span className="bar" />
              <span>The Duet</span>
            </p>
            <div className="head-copy">
              <h2 className="title">
                만돌린이 노래하면,
                <br />
                기타가 그 아래를 받쳐 줍니다.
              </h2>
            </div>
          </div>
          <p className="head-note">만돌린 · 클래식기타 / 2026년 8월 결성</p>
        </div>

        <div className="duo-grid">
          <Reveal className="duo-copy">
            <p className="lead-big">
              만돌린은 두 줄씩 네 벌, 여덟 줄을 가진 악기입니다. 짧은 피크 소리를 빠르게 이어 붙여 긴 음을
              만드는 트레몰로가 이 악기의 표정입니다.
            </p>
            <p>
              그 옆에서 클래식기타는 저음과 화성을 맡습니다. 두 악기만으로도 오케스트라 악보의 결을 살릴 수
              있는 편성입니다.
            </p>
            <p>
              두 사람은 숭실대학교 만돌린오케스트라 동문연주단에서 선후배로 오래 함께 연주했습니다. 2026년
              8월에 듀오를 결성하고, 연주회와 기업 행사, 야외 무대까지 자리를 가리지 않고 연주하고 있습니다.
            </p>
            <p className="ff-note">
              <b>ff</b>
              포르티시모는 악보에서 ‘아주 힘있게’를 뜻하는 셈여림 기호입니다.
            </p>

            <dl className="stat-strip">
              <div>
                <dt>Formed</dt>
                <dd>2026년 8월</dd>
              </div>
              <div>
                <dt>Line-up</dt>
                <dd>만돌린 · 클래식기타</dd>
              </div>
              <div>
                <dt>Roots</dt>
                <dd>숭실대학교 만돌린오케스트라 동문연주단</dd>
              </div>
            </dl>
          </Reveal>

          <Reveal as="figure" className="duo-figure" delay={120} mask>
            <div className="frame">
              <img
                src="/assets/detail-strings.webp"
                width="1536"
                height="1024"
                alt="악보와 초록 벨벳 위에 놓인 만돌린 헤드와 기타의 로제트"
                loading="lazy"
                data-parallax="0.05"
              />
            </div>
            <figcaption>
              <span>악보와 악기, 연습실의 풍경</span>
              <span>Duo Fortissimo</span>
            </figcaption>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
