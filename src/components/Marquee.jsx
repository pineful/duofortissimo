const PHRASES = ['Duo Fortissimo', '만돌린과 클래식기타', 'Mandolin & Classical Guitar', '듀오 포르티시모']

export default function Marquee() {
  const group = (hidden) => (
    <div aria-hidden={hidden || undefined} style={{ display: 'flex' }}>
      {PHRASES.map((p, i) => (
        <span key={`${hidden ? 'b' : 'a'}-${i}`}>{p}</span>
      ))}
    </div>
  )
  return (
    <div className="marquee">
      <div className="marquee-track">
        {group(false)}
        {group(true)}
      </div>
    </div>
  )
}
