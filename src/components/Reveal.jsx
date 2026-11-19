import { useEffect, useRef } from 'react'

export default function Reveal({
  as: Tag = 'div',
  children,
  className = '',
  delay = 0,
  mask = false,
  threshold = 0.12,
  style,
  ...rest
}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!('IntersectionObserver' in window)) {
      el.classList.add('in')
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold, rootMargin: '0px 0px -6% 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [threshold])

  return (
    <Tag
      ref={ref}
      className={`${mask ? 'reveal-mask' : 'reveal'} ${className}`.trim()}
      style={{ transitionDelay: delay ? `${delay}ms` : undefined, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
