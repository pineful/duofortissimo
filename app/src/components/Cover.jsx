export default function Cover() {
  return (
    <section className="cover" id="top">
      <div className="cover-inner">
        <div className="cover-copy">
          <p className="kicker">
            Cover Story <i />
            실내악
          </p>
          <h1>
            두 대의 현이
            <br />
            <span>한 호흡으로</span>
          </h1>
          <p className="standfirst">
            만돌린 박민순과 클래식기타 이철규. 2026년 8월에 만난 두 연주자가 한 무대에서 만들어 온 소리를 공연
            프로그램 한 권으로 정리했습니다.
          </p>
          <p className="byline">Duo Fortissimo / 2026년 가을</p>
        </div>

        <figure className="cover-plate">
          <div className="cover-img">
            <img
              src="/assets/photos/hero-1400.webp"
              srcSet="/assets/photos/hero-700.webp 700w, /assets/photos/hero-1400.webp 1400w"
              sizes="(max-width: 820px) 92vw, 44vw"
              width="1400"
              height="1751"
              alt="재생의 선율 RE;BASIN 무대 배너 앞에서 만돌린을 든 박민순"
            />
          </div>
          <figcaption>
            <span>표지 도판</span>
            <b>
              2026년 9월 2일, 경북 문경 쌍용양회 공장. 무대를 앞두고 만돌린을 든 박민순.
            </b>
          </figcaption>
        </figure>
      </div>

      <div className="contents">
        <p className="contents-label">이 번호의 차례</p>
        <ol>
          <li>
            <a href="#duo">
              <span className="c-no">01</span>
              <span className="c-name">The Duet</span>
              <span className="c-ko">듀오 소개와 두 연주자</span>
            </a>
          </li>
          <li>
            <a href="#programme">
              <span className="c-no">02</span>
              <span className="c-name">Programme</span>
              <span className="c-ko">연주 영상과 연주곡</span>
            </a>
          </li>
          <li>
            <a href="#stage">
              <span className="c-no">03</span>
              <span className="c-name">On Stage</span>
              <span className="c-ko">무대 사진과 지난 무대</span>
            </a>
          </li>
        </ol>
      </div>
    </section>
  )
}
