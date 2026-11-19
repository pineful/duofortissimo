import { useState } from 'react'
import { site } from '../media.js'
import { useI18n } from '../i18n.jsx'
import { copyText, ArrowIcon, CopyIcon } from './shared.jsx'

export default function Contact() {
  const { c } = useI18n()
  const k = c.contact
  const [copied, setCopied] = useState(false)
  const mailto = `mailto:${site.email}?subject=${encodeURIComponent(k.mailSubject)}`

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
            {k.folio}
          </p>
          <h2>
            {k.title[0]}
            <br />
            <em>{k.title[1]}</em>
            {k.title[2]}
          </h2>
        </div>
        <div className="reply-card">
          <p className="reply-label">{k.label}</p>
          <p className="reply-body">{k.body}</p>
          <a className="reply-mail" href={mailto}>
            {site.email}
          </a>
          <div className="reply-actions">
            <a className="ink-btn" href={mailto}>
              {k.mail}
              <ArrowIcon />
            </a>
            <button type="button" className="line-btn" onClick={onCopy}>
              <CopyIcon />
              {copied ? k.copied : k.copyAddr}
            </button>
          </div>
          <p className="reply-hint">{k.hint}</p>
        </div>
      </div>
    </section>
  )
}
