import { useState } from 'react'
import { site, mailto } from '../data.js'
import { copyText, ArrowIcon, CopyIcon } from './shared.jsx'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const onCopy = async () => {
    const ok = await copyText(site.email)
    if (ok) {
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2200)
    }
  }

  return (
    <section className="spread spread--contact" id="contact">
      <div className="shell contact-inner">
        <div className="contact-lead">
          <p className="folio">
            <span>04</span>
            Contact
          </p>
          <h2>
            공연과 섭외,
            <br />
            <em>이 메일로</em> 시작합니다
          </h2>
        </div>
        <div className="reply-card">
          <p className="reply-label">To. Duo Fortissimo</p>
          <p className="reply-body">
            연주회, 기업 행사, 예식, 소규모 모임까지 자리와 규모에 맞춰 상의합니다. 일시와 장소, 연주 시간을 알려
            주시면 가능한 프로그램을 함께 정리해 드립니다. 악기와 음향 장비는 현장에 맞춰 준비하고, 야외 무대도
            상의해 주세요.
          </p>
          <a className="reply-mail" href={mailto}>
            {site.email}
          </a>
          <div className="reply-actions">
            <a className="ink-btn" href={mailto}>
              메일 보내기
              <ArrowIcon />
            </a>
            <button type="button" className="line-btn" onClick={onCopy}>
              <CopyIcon />
              {copied ? '주소를 복사했습니다' : '주소 복사'}
            </button>
          </div>
          <p className="reply-hint">행사 일시와 장소, 연주 시간, 원하시는 분위기를 함께 적어 주세요.</p>
        </div>
      </div>
    </section>
  )
}
