import { useState } from 'react'
import Reveal from './Reveal.jsx'
import { ArrowIcon, CopyIcon } from './Icons.jsx'
import { site } from '../data.js'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(site.email)
      } else {
        const ta = document.createElement('textarea')
        ta.value = site.email
        ta.setAttribute('readonly', '')
        ta.style.position = 'fixed'
        ta.style.opacity = '0'
        document.body.appendChild(ta)
        ta.select()
        document.execCommand('copy')
        document.body.removeChild(ta)
      }
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2200)
    } catch (err) {
      setCopied(false)
    }
  }

  return (
    <section className="section contact" id="contact">
      <div className="shell">
        <p className="sec-index">
          <span className="num">05</span>
          <span className="bar" />
          <span>Contact</span>
        </p>
        <Reveal>
          <h2 className="contact-title" style={{ marginTop: 28 }}>
            공연과 섭외,
            <br />
            <em>이 메일로</em> 시작합니다.
          </h2>
        </Reveal>

        <div className="contact-grid">
          <Reveal className="contact-copy" delay={80}>
            <p>
              연주회, 기업 행사, 예식, 소규모 모임까지 자리와 규모에 맞춰 상의합니다. 일시와 장소, 연주 시간을
              알려 주시면 가능한 프로그램을 함께 정리해 드립니다.
            </p>
            <p>악기와 음향 장비는 현장에 맞춰 준비합니다. 야외 무대도 상의해 주세요.</p>
          </Reveal>

          <Reveal className="mail-card" delay={160}>
            <p className="lab">E-mail</p>
            <a
              className="mail-link"
              href={`mailto:${site.email}?subject=${encodeURIComponent('듀오 포르티시모 섭외 문의')}`}
            >
              {site.email}
            </a>
            <div className="mail-actions">
              <a
                className="btn btn-gold"
                href={`mailto:${site.email}?subject=${encodeURIComponent('듀오 포르티시모 섭외 문의')}`}
              >
                메일 보내기 <ArrowIcon />
              </a>
              <button type="button" className={`copy-btn ${copied ? 'done' : ''}`} onClick={copy}>
                <CopyIcon />
                {copied ? '주소를 복사했습니다' : '주소 복사'}
              </button>
            </div>
            <p className="mail-hint">
              행사 일시와 장소, 연주 시간, 원하시는 분위기를 함께 적어 주시면 상담이 빠릅니다.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
