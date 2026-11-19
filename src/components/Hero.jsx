import { ArrowIcon } from './Icons.jsx'
import StringCanvas from './StringCanvas.jsx'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <StringCanvas />
      <div className="shell">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Mandolin &amp; Classical Guitar</p>
            <h1>
              <span className="line">
                <span>Duo</span>
              </span>
              <span className="line">
                <span>Fortissimo</span>
              </span>
            </h1>
            <p className="hero-sub">
              만돌린과 클래식기타,
              <br />
              두 대의 현으로 만드는 실내악.
            </p>
            <p className="hero-body">
              듀오 포르티시모는 숭실대학교 만돌린오케스트라 동문연주단에서 만난 선후배가 2026년에 결성한
              듀엣입니다. 이탈리아 만돌린 음악에서 출발해 클래식기타의 음색을 더했습니다.
            </p>
            <div className="hero-actions">
              <a className="btn btn-gold" href="#performances">
                연주 영상 보기 <ArrowIcon />
              </a>
              <a className="btn" href="#contact">
                공연·섭외 문의
              </a>
            </div>
            <p className="hero-meta">
              <span>2026년 결성</span>
              <span>만돌린 박민순</span>
              <span>클래식기타 이철규</span>
            </p>
          </div>

          <figure className="hero-figure" data-parallax="0.05">
            <div className="arch">
              <div className="inner">
                <img
                  src="/assets/hero-duo.webp"
                  width="1024"
                  height="1535"
                  alt="오후 볕이 드는 나무 탁자 위에 놓인 만돌린과 클래식기타"
                  fetchPriority="high"
                />
              </div>
            </div>
            <figcaption className="hero-caption">
              <span>만돌린과 클래식기타</span>
              <em>Duo Fortissimo</em>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}
