import { site } from '../data.js'

export default function Colophon() {
  return (
    <footer className="colophon">
      <div className="shell colophon-inner">
        <div className="colophon-brand">
          <img src="/assets/logo-lockup.png" alt="Duo Fortissimo 듀오 포르티시모" width="459" height="676" loading="lazy" />
          <div>
            <b>만돌린 박민순 · 클래식기타 이철규</b>
            <p>활자 Playfair Display, Noto Serif KR, Pretendard</p>
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
