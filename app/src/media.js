// 사진·영상·연락처처럼 언어와 무관한 자산만 담습니다. 글은 content/<언어>.js에 있습니다.

export const site = {
  name: 'Duo Fortissimo',
  email: 'pineful@gmail.com',
  youtube: 'https://www.youtube.com/@MinSoonPark',
  domain: 'duofortissimo.kr',
}

export const photos = {
  hero: {
    src: '/assets/photos/hero-1400.webp',
    srcset: '/assets/photos/hero-700.webp 700w, /assets/photos/hero-1400.webp 1400w',
    width: 1400,
    height: 1050,
  },
  duo: {
    src: '/assets/photos/duo-1200.webp',
    srcset: '/assets/photos/duo-600.webp 600w, /assets/photos/duo-1200.webp 1200w',
    width: 1200,
    height: 900,
  },
  members: [
    {
      src: '/assets/photos/player-park-960.webp',
      srcset: '/assets/photos/player-park-480.webp 480w, /assets/photos/player-park-960.webp 960w',
      alt: '만돌린을 든 박민순, 문경 쌍용양회 공장 공연장에서',
      caption: '2026년 9월 2일, 문경 공연장에서',
    },
    {
      src: '/assets/photos/player-lee-960.webp',
      srcset: '/assets/photos/player-lee-480.webp 480w, /assets/photos/player-lee-960.webp 960w',
      alt: '무대에서 클래식기타를 연주하는 이철규',
      caption: '무대에서 클래식기타를 연주하는 이철규',
    },
  ],
  gallery: [
    { src: '/assets/photos/stage-chairs-1040.webp', small: '/assets/photos/stage-chairs-520.webp', pos: 'center 40%' },
    { src: '/assets/photos/stage-banner-1040.webp', small: '/assets/photos/stage-banner-520.webp', pos: 'center 45%' },
    { src: '/assets/photos/stage-empty-1040.webp', small: '/assets/photos/stage-empty-520.webp', pos: 'center 42%' },
    { src: '/assets/photos/stage-wall-1040.webp', small: '/assets/photos/stage-wall-520.webp', pos: '72% center' },
  ],
}

export const videos = [
  { id: 'slL9iu_OWS8', no: 'I', thumb: '/assets/yt-slL9iu_OWS8.jpg', date: '2026.10.10' },
  { id: 'b62zBLBz8x0', no: 'II', thumb: '/assets/yt-b62zBLBz8x0.jpg', date: '2026.10.10' },
  { id: '6RDwFnw-o40', no: 'III', thumb: '/assets/yt-6RDwFnw-o40.jpg', date: '2026.09.12' },
]

export const stageDates = ['2026.10.10', '2026.09.12', '2026.09.02', '2026.09.01']

// 박민순이 함께 서는 단체. 채널 주소와 대표 영상은 실제 유튜브에서 확인한 것입니다.
// (2026-11-20 확인 · oEmbed 200 · 유튜브 채널 @ssumo-ob)
// 두 번째 영상은 2026/10/10 기타 발표회 전체 실황(rASIXVtzvPo)이고,
// 설명란 타임스탬프의 41:46(L'Encouragement, Op. 34 · 이철규·서민석)부터 재생되도록 start를 두었습니다.
// (2026-11-20 확인 · oEmbed 200 · 유튜브 채널 @ssumo-ob)
export const ensembles = [
  {
    key: 'ssumo',
    channel: 'https://www.youtube.com/@ssumo-ob',
    handle: '@ssumo-ob',
    videos: [
      { id: 'hySoMWFKzkg', thumb: '/assets/yt-ens-hySoMWFKzkg.jpg' },
      { id: 'rASIXVtzvPo', start: 2506, thumb: '/assets/yt-ens-lenc-rASIXVtzvPo.jpg' },
    ],
  },
]
