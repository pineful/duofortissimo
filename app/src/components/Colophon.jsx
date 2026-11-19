import { site } from '../media.js'
import { useI18n } from '../i18n.jsx'

export default function Colophon() {
  const { c } = useI18n()

  return (
    <footer className="colophon">
      <div className="shell colophon-inner">
        <div className="colophon-brand">
          <img src="/assets/logo-lockup.png" alt="Duo Fortissimo" width="459" height="676" loading="lazy" />
          <div>
            <b>{c.colophon.members}</b>
            <p>{c.colophon.typeNote}</p>
          </div>
        </div>
        <div className="colophon-links">
          <a href={site.youtube} target="_blank" rel="noopener noreferrer">
            YouTube
          </a>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <span>© 2026</span>
        </div>
      </div>
    </footer>
  )
}
