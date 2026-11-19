import { useI18n } from '../i18n.jsx'

export default function Masthead({ y }) {
  const { c, code, setCode, locales } = useI18n()

  return (
    <header className={`masthead ${y > 120 ? 'is-tight' : ''}`}>
      <div className="mast-inner">
        <div className="mast-meta">
          <span>{c.mast.vol}</span>
          <span>{c.mast.year}</span>
        </div>
        <a className="brand" href="#top" aria-label={c.ui.homeLabel}>
          <span className="brand-mark">
            <img src="/assets/logo-mark.png" alt="" width="406" height="473" />
          </span>
          <span className="brand-word">
            <img src="/assets/logo-wordmark.png" alt="Duo Fortissimo" width="431" height="54" />
            <i>Mandolin · Guitar</i>
          </span>
        </a>
        <nav className="mast-nav" aria-label={c.ui.navLabel}>
          <a href="#duo">{c.nav.duo}</a>
          <a href="#programme">{c.nav.programme}</a>
          <a href="#stage">{c.nav.stage}</a>
          <a className="mast-mail" href="#contact">
            {c.nav.contact}
          </a>
          <label className="lang-switch">
            <span className="visually-hidden">{c.ui.langLabel}</span>
            <select
              value={code}
              onChange={(event) => setCode(event.target.value)}
              aria-label={c.ui.langLabel}
              lang={c.htmlLang}
            >
              {locales.map((l) => (
                <option key={l.code} value={l.code} lang={l.htmlLang}>
                  {l.label}
                </option>
              ))}
            </select>
          </label>
        </nav>
      </div>
      <div className="mast-rules" aria-hidden="true">
        <span />
        <span />
      </div>
    </header>
  )
}
