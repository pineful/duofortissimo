import { site } from '../data.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="shell">
        <span className="fb">Duo Fortissimo</span>
        <div className="footer-links">
          <a href={site.youtube} target="_blank" rel="noopener noreferrer">
            YouTube
          </a>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <span>© 2026 Duo Fortissimo</span>
        </div>
      </div>
    </footer>
  )
}
