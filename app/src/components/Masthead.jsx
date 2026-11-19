export default function Masthead({ y }) {
  return (
    <header className={`masthead ${y > 120 ? 'is-tight' : ''}`}>
      <div className="mast-inner">
        <div className="mast-meta">
          <span>Vol. 01</span>
          <span>2026</span>
        </div>
        <a className="brand" href="#top" aria-label="Duo Fortissimo, 듀오 포르티시모 홈으로">
          <span className="brand-mark">
            <img src="/assets/logo-mark.png" alt="" width="406" height="473" />
          </span>
          <span className="brand-word">
            <img src="/assets/logo-wordmark.png" alt="Duo Fortissimo" width="431" height="54" />
            <i>Mandolin · Guitar</i>
          </span>
        </a>
        <nav className="mast-nav" aria-label="주요 메뉴">
          <a href="#duo">듀오</a>
          <a href="#programme">연주</a>
          <a href="#stage">무대</a>
          <a className="mast-mail" href="#contact">
            섭외
          </a>
        </nav>
      </div>
      <div className="mast-rules" aria-hidden="true">
        <span />
        <span />
      </div>
    </header>
  )
}
