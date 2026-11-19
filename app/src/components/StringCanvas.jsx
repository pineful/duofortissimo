import { useEffect, useRef } from 'react'

/**
 * 오선(五線)을 닮은 가는 빛의 줄. 마우스가 가까이 가면 줄이 살짝 휘고,
 * 줄 위로 따뜻한 빛이 번집니다. 움직임을 줄이도록 설정한 기기에서는 정지 화면으로 남습니다.
 */
export default function StringCanvas() {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const pointer = { x: -9999, y: -9999, tx: -9999, ty: -9999, active: false }
    const lines = []
    const LINE_COUNT = 7
    let w = 1
    let h = 1
    let dpr = 1
    let raf = 0
    let visible = true

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = Math.max(1, Math.round(rect.width))
      h = Math.max(1, Math.round(rect.height))
      canvas.width = Math.round(w * dpr)
      canvas.height = Math.round(h * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      lines.length = 0
      const base = h * 0.6
      const gap = Math.max(8, Math.min(15, h * 0.016))
      const mid = (LINE_COUNT - 1) / 2
      for (let i = 0; i < LINE_COUNT; i += 1) {
        lines.push({
          y: base + (i - mid) * gap,
          phase: i * 0.85,
          weight: 1 - Math.abs(i - mid) / (LINE_COUNT + 1),
        })
      }
    }

    const lineY = (line, x, t) => {
      const nx = x / w
      const slow = Math.sin(nx * Math.PI * 3.1 + t * 0.55 + line.phase) * (1.6 + 2.2 * Math.sin(nx * Math.PI))
      let pull = 0
      if (pointer.active) {
        const dx = x - pointer.x
        const sigma = Math.max(80, w * 0.11)
        const gx = Math.exp(-(dx * dx) / (2 * sigma * sigma))
        const dy = pointer.y - line.y
        const sy = Math.max(70, h * 0.14)
        const gy = Math.exp(-(dy * dy) / (2 * sy * sy))
        pull = gx * gy * 42 * Math.sin(t * 1.6 + x * 0.012)
      }
      return line.y + slow + pull
    }

    const paint = (t) => {
      ctx.clearRect(0, 0, w, h)
      pointer.x += (pointer.tx - pointer.x) * 0.09
      pointer.y += (pointer.ty - pointer.y) * 0.09

      for (const line of lines) {
        const grad = ctx.createLinearGradient(0, 0, w, 0)
        grad.addColorStop(0, 'rgba(201,165,102,0)')
        grad.addColorStop(0.16, `rgba(201,165,102,${0.05 + line.weight * 0.12})`)
        grad.addColorStop(0.5, `rgba(226,196,139,${0.08 + line.weight * 0.34})`)
        grad.addColorStop(0.84, `rgba(201,165,102,${0.05 + line.weight * 0.12})`)
        grad.addColorStop(1, 'rgba(201,165,102,0)')
        ctx.strokeStyle = grad
        ctx.lineWidth = 1
        ctx.beginPath()
        const step = w > 900 ? 9 : 7
        for (let x = 0; x <= w; x += step) {
          const y = lineY(line, x, t)
          if (x === 0) ctx.moveTo(x, y)
          else ctx.lineTo(x, y)
        }
        ctx.stroke()
      }

      if (pointer.active && pointer.x > -500) {
        const glow = ctx.createRadialGradient(pointer.x, pointer.y, 0, pointer.x, pointer.y, 260)
        glow.addColorStop(0, 'rgba(201,165,102,0.11)')
        glow.addColorStop(0.55, 'rgba(201,165,102,0.03)')
        glow.addColorStop(1, 'rgba(201,165,102,0)')
        ctx.fillStyle = glow
        ctx.fillRect(pointer.x - 260, pointer.y - 260, 520, 520)
      }
    }

    const loop = (ms) => {
      paint(ms * 0.001)
      raf = requestAnimationFrame(loop)
    }

    const start = () => {
      if (raf || reduce) return
      raf = requestAnimationFrame(loop)
    }
    const stop = () => {
      if (!raf) return
      cancelAnimationFrame(raf)
      raf = 0
    }

    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      pointer.tx = e.clientX - rect.left
      pointer.ty = e.clientY - rect.top
      pointer.active = pointer.ty > -80
    }
    const onLeave = () => {
      pointer.active = false
      pointer.tx = -9999
      pointer.ty = -9999
    }
    const onTouch = (e) => {
      const touch = e.touches && e.touches[0]
      if (!touch) return
      const rect = canvas.getBoundingClientRect()
      pointer.tx = touch.clientX - rect.left
      pointer.ty = touch.clientY - rect.top
      pointer.active = true
    }

    resize()
    paint(0.4)
    if (!reduce) start()

    const ro = new ResizeObserver(() => {
      resize()
      if (reduce) paint(0.4)
    })
    ro.observe(canvas)

    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        visible = entry.isIntersecting
        if (visible && !reduce) start()
        else stop()
      },
      { threshold: 0.01 },
    )
    io.observe(canvas)

    if (!reduce) {
      window.addEventListener('pointermove', onMove, { passive: true })
      window.addEventListener('pointerdown', onTouch, { passive: true })
      window.addEventListener('pointerup', onLeave, { passive: true })
      window.addEventListener('pointerleave', onLeave, { passive: true })
    }

    return () => {
      stop()
      ro.disconnect()
      io.disconnect()
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerdown', onTouch)
      window.removeEventListener('pointerup', onLeave)
      window.removeEventListener('pointerleave', onLeave)
    }
  }, [])

  return <canvas ref={ref} className="hero-canvas" aria-hidden="true" />
}
