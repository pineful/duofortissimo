import { useEffect, useRef, useState } from 'react'
import Hero from './components/Hero.jsx'
import Marquee from './components/Marquee.jsx'
import Duo from './components/Duo.jsx'
import Players from './components/Players.jsx'
import Performances from './components/Performances.jsx'
import Stage from './components/Stage.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import { site } from './data.js'

export default function App() {
  const [scrolled, setScrolled] = useState(false)
  const rafRef = useRef(0)

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const root = document.documentElement

    // 첫 화면 타이포그래피가 아래에서 올라옵니다.
    const readyId = window.setTimeout(() => document.body.classList.add('ready'), 120)

    const update = () => {
      rafRef.current = 0
      const y = window.scrollY || window.pageYOffset
      const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight)
      root.style.setProperty('--sp', String(Math.min(1, Math.max(0, y / max))))
      setScrolled(y > 40)

      if (!reduce) {
        document.querySelectorAll('[data-parallax]').forEach((el) => {
          const speed = Number(el.getAttribute('data-parallax')) || 0
          const rect = el.getBoundingClientRect()
          const center = rect.top + rect.height / 2 - window.innerHeight / 2
          el.style.setProperty('--py', `${(-center * speed).toFixed(1)}px`)
        })
      }
    }

    const onScroll = () => {
      if (!rafRef.current) rafRef.current = window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })

    return () => {
      window.clearTimeout(readyId)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (rafRef.current) window.cancelAnimationFrame(rafRef.current)
    }
  }, [])

  const nav = [
    ['#duo', '듀오'],
    ['#players', '연주자'],
    ['#performances', '연주'],
    ['#stage', '무대'],
  ]

  return (
    <>
      <div className="progress" aria-hidden="true" />
      <a className="skip" href="#main">
        본문으로 건너뛰기
      </a>

      <header className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="shell">
          <a className="brand" href="#top" aria-label="Duo Fortissimo 홈으로">
            <b>Duo Fortissimo</b>
            <i>ff</i>
          </a>
          <nav className="nav-links" aria-label="주요 메뉴">
            {nav.map(([href, label]) => (
              <a key={href} href={href}>
                {label}
              </a>
            ))}
            <a className="nav-cta" href="#contact">
              섭외 문의
            </a>
          </nav>
        </div>
      </header>

      <main id="main">
        <Hero />
        <Marquee />
        <Duo />
        <Players />
        <Performances />
        <Stage />
        <Contact />
      </main>

      <Footer />
      <span hidden>{site.nameKo}</span>
    </>
  )
}
