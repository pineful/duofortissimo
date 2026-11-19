import { useEffect, useRef } from 'react'
import Masthead from './components/Masthead.jsx'
import Cover from './components/Cover.jsx'
import Duo from './components/Duo.jsx'
import ProgrammeSection from './components/Programme.jsx'
import Stage from './components/Stage.jsx'
import Contact from './components/Contact.jsx'
import Colophon from './components/Colophon.jsx'
import { useScrollValue } from './components/shared.jsx'
import { I18nProvider, useI18n } from './i18n.jsx'

function Page() {
  const { y } = useScrollValue()
  const { c } = useI18n()
  const progress = useRef(null)

  useEffect(() => {
    const el = progress.current
    if (!el) return
    let raf = 0
    const tick = () => {
      raf = 0
      const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight)
      el.style.transform = `scaleX(${Math.min(1, window.scrollY / max)})`
    }
    const on = () => {
      if (!raf) raf = requestAnimationFrame(tick)
    }
    tick()
    window.addEventListener('scroll', on, { passive: true })
    window.addEventListener('resize', on, { passive: true })
    return () => {
      window.removeEventListener('scroll', on)
      window.removeEventListener('resize', on)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <span className="read-progress" ref={progress} aria-hidden="true" />
      <Masthead y={y} />
      <a className="skip" href="#main">
        {c.ui.skip}
      </a>

      <main id="main">
        <Cover />
        <Duo />
        <ProgrammeSection />
        <Stage />
        <Contact />
      </main>

      <Colophon />
    </>
  )
}

export default function App() {
  return (
    <I18nProvider>
      <Page />
    </I18nProvider>
  )
}
