import { useLayoutEffect, useRef } from 'react'
import { photos } from '../media.js'
import { useI18n } from '../i18n.jsx'

/* ── 표지의 두 줄 — 두 악기의 잔향 ──────────────────────
 * 만돌린은 피크로 튕겨 잦은 떨림이 빨리 잦아들고, 클래식기타는 성긴 저음이 길게 남는다.
 * 그 차이를 금색 선과 네이비 선 하나씩으로 적는다. 서명 아래 빈 여백에서 두 선이
 * 왼쪽에서 오른쪽으로 그어지고, 제목 두 줄만 살짝 올라온다. 1.6초에 한 번 끝나고
 * 나서는 종이에 인쇄된 파형처럼 그 자리에 남는다.
 */
const TRACE_W = 420
const TRACE_H = 64
const TRACE_MID = 32
const TRACE_TOTAL = 1.6 // 전체 시퀀스(초)
const TRACE_DRAW_AT = 0.3 // 두 선이 그어지기 시작하는 때
const TRACE_DRAW_SPAN = 0.62 // 그어지는 데 걸리는 시간
const MANDOLIN = { amp: 14, cycles: 15, k: 3.4, phase: 0 }
const GUITAR = { amp: 11, cycles: 6.5, k: 1.5, phase: Math.PI * 0.5 }
const TITLE = { at1: 0.06, at2: 0.13, span: 0.44, rise: 16 }

const clamp01 = (x) => (x < 0 ? 0 : x > 1 ? 1 : x)
const step = (t, start, span) => clamp01((t - start) / span)
const easeOut = (x) => 1 - Math.pow(1 - clamp01(x), 3)
const easeInOut = (x) => {
  const v = clamp01(x)
  return v < 0.5 ? 4 * v * v * v : 1 - Math.pow(-2 * v + 2, 3) / 2
}
// 튕긴 뒤 진폭이 지수로 줄어드는 여운
const ring = (age, tau, freq) => (age <= 0 ? 0 : Math.exp(-age / tau) * Math.sin(2 * Math.PI * freq * age))

function tracePath({ amp, cycles, k, phase }, prog, gain) {
  const n = 260
  let d = ''
  for (let i = 0; i <= n; i++) {
    const u = i / n
    if (u > prog) break
    const env = Math.exp(-u * k)
    const y = TRACE_MID - amp * env * gain * Math.sin(2 * Math.PI * cycles * u + phase)
    d += `${i ? 'L' : 'M'}${(u * TRACE_W).toFixed(1)} ${y.toFixed(2)}`
  }
  return d
}

const PRINTED_MANDOLIN = tracePath(MANDOLIN, 1, 1)
const PRINTED_GUITAR = tracePath(GUITAR, 1, 1)

export default function Cover() {
  const { c } = useI18n()
  const hero = photos.hero
  const line1 = useRef(null)
  const line2 = useRef(null)
  const mandolin = useRef(null)
  const guitar = useRef(null)

  useLayoutEffect(() => {
    const lines = [line1.current, line2.current]
    const paths = [mandolin.current, guitar.current]
    if (!paths[0] || !paths[1]) return

    // 최종 상태: 계산 결과와 상관없이 인쇄된 파형 한 장으로 끝난다
    const settle = () => {
      paths[0].setAttribute('d', PRINTED_MANDOLIN)
      paths[1].setAttribute('d', PRINTED_GUITAR)
      lines.forEach((el) => {
        if (!el) return
        el.style.opacity = ''
        el.style.transform = ''
      })
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      settle()
      return
    }

    const setLines = (t) => {
      ;[[lines[0], TITLE.at1], [lines[1], TITLE.at2]].forEach(([el, start]) => {
        if (!el) return
        const e = easeOut(step(t, start, TITLE.span))
        el.style.opacity = e.toFixed(3)
        el.style.transform = `translateY(${((1 - e) * TITLE.rise).toFixed(2)}px)`
      })
    }

    const setTrace = (t) => {
      const prog = easeInOut(step(t, TRACE_DRAW_AT, TRACE_DRAW_SPAN))
      const age = Math.max(0, t - (TRACE_DRAW_AT + TRACE_DRAW_SPAN))
      const gain = 1 + 0.42 * ring(age, 0.42, 2.4)
      paths[0].setAttribute('d', tracePath(MANDOLIN, prog, gain))
      paths[1].setAttribute('d', tracePath(GUITAR, prog, gain))
    }

    let raf = 0
    let t0 = 0
    const tick = (now) => {
      if (!t0) t0 = now
      const t = (now - t0) / 1000
      if (t >= TRACE_TOTAL) {
        raf = 0
        settle()
        return
      }
      setLines(t)
      setTrace(t)
      raf = requestAnimationFrame(tick)
    }

    // 첫 프레임 전에 출발 상태로 둔다(제목이 한 번 번쩍이지 않게)
    setLines(0)
    setTrace(0)
    raf = requestAnimationFrame(tick)

    // 안전장치: 어떤 이유로 프레임이 멈춰도 2.4초 뒤에는 제자리로 둔다
    const guard = window.setTimeout(() => {
      if (raf) cancelAnimationFrame(raf)
      raf = 0
      settle()
    }, 2400)
    const onReduce = (e) => {
      if (!e.matches) return
      if (raf) cancelAnimationFrame(raf)
      raf = 0
      settle()
    }
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mq.addEventListener) mq.addEventListener('change', onReduce)

    return () => {
      if (raf) cancelAnimationFrame(raf)
      window.clearTimeout(guard)
      if (mq.removeEventListener) mq.removeEventListener('change', onReduce)
    }
  }, [])

  return (
    <section className="cover" id="top">
      <div className="cover-inner">
        <div className="cover-copy">
          <p className="kicker">
            {c.cover.kicker} <i />
            {c.cover.kickerTag}
          </p>
          <h1>
            <span className="t-line t-line--first" ref={line1}>
              {c.cover.title[0]}
            </span>
            <br />
            <span className="t-line" ref={line2}>
              {c.cover.title[1]}
            </span>
          </h1>
          <p className="standfirst">{c.cover.standfirst}</p>
          <p className="byline">{c.cover.byline}</p>
          <div className="duo-trace" aria-hidden="true">
            <svg viewBox={`0 0 ${TRACE_W} ${TRACE_H}`} preserveAspectRatio="none" focusable="false">
              <path className="t-mand" ref={mandolin} d={PRINTED_MANDOLIN} />
              <path className="t-guit" ref={guitar} d={PRINTED_GUITAR} />
            </svg>
          </div>
        </div>

        <figure className="cover-plate">
          <div className="cover-img">
            <img
              src={hero.src}
              srcSet={hero.srcset}
              sizes="(max-width: 820px) 92vw, 44vw"
              width={hero.width}
              height={hero.height}
              alt={c.cover.alt}
            />
          </div>
          <figcaption>
            <span>{c.cover.plateLabel}</span>
            <b>{c.cover.plateCaption}</b>
          </figcaption>
        </figure>
      </div>

      <div className="contents">
        <p className="contents-label">{c.cover.contentsLabel}</p>
        <ol>
          {c.cover.contents.map((item, i) => (
            <li key={item.no}>
              <a href={['#duo', '#programme', '#stage'][i]}>
                <span className="c-no">{item.no}</span>
                <span className="c-name">{item.name}</span>
                <span className="c-ko">{item.sub}</span>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
