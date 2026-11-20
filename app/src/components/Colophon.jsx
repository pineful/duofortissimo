import { Fragment } from 'react'
import { site } from '../media.js'
import { useI18n } from '../i18n.jsx'

export default function Colophon() {
  const { c } = useI18n()

  // 두 사람 이름을 '·' 기준으로 나눠 각각 한 덩어리로 둡니다.
  // 좁은 화면에서 줄이 바뀌더라도 이름 중간이 아니라 '·' 자리에서만 끊기게 하기 위함입니다.
  const members = c.colophon.members.split(/\s*·\s*/).filter(Boolean)

  return (
    <footer className="colophon">
      <div className="shell colophon-inner">
        <div className="colophon-brand">
          <img src="/assets/logo-lockup.png" alt="Duo Fortissimo" width="459" height="676" loading="lazy" />
          <div>
            <b>
              {members.map((member, i) => (
                <Fragment key={member}>
                  <span className="colophon-member">{member}</span>
                  {i < members.length - 1 ? <span className="colophon-sep">{'\u00a0· '}</span> : null}
                </Fragment>
              ))}
            </b>
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
