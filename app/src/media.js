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

// 도판 III은 2026년 9월 1일 보정동 카페거리 '보카' 앞에서 한 실제 야외 버스킹 영상입니다.
// (2026-11-20 확인 · oEmbed·채널 @MinSoonPark · 제목 '20260901 버스킹 Valtzer Fantastico' · 6분 30초)
// 썸네일은 그 영상의 유튜브 최대 해상도(1280x720)를 받아 저장한 것입니다.
// 이전 도판 III(6RDwFnw-o40)은 연습실에서 찍은 MOOB 2026 기타발표회 2차 리허설 영상(2026.09.12)이어서,
// 야외 버스킹으로 잘못 소개되고 있어 바로잡았습니다.
// 도판 I·II는 2026년 10월 10일 기타발표회 실황을 이철규 님이 자기 채널(@CKLee-hz7dk)에 올린 영상입니다.
// (2026-11-22 확인 · oEmbed 200 · 제목 'Valtzer Fantastico (E. Marucelli) 환상적인 왈츠 2026.10.10 Duo Fortissimo'·
// 'Santa Claus March (F. Vokoun) 산타클로스 행진곡 2026.10.10 Duo Fortissimo' · 재생 시간 6:19·2:35 · 최고 화질 1080p)
// 두 편 모두 1080p(FHD)로 올라와 있어 썸네일도 maxresdefault(1280x720)를 그대로 받아 저장했습니다.
// 위아래·좌우에 검은 여백은 없습니다.
// 이전 도판 I·II는 같은 채널의 480p 영상(oG-47j7irzw·rKK6iLyauWE)이었고, 그 앞에는 박민순 채널의 같은 날
// 연주 영상(slL9iu_OWS8·b62zBLBz8x0)이었습니다. 지금 것은 1080p로 다시 올린 영상입니다.
export const videos = [
  { id: 'sE0KbqqtYPQ', no: 'I', thumb: '/assets/yt-sE0KbqqtYPQ.jpg', date: '2026.10.10' },
  { id: 'Ouyt6KZ_Zlo', no: 'II', thumb: '/assets/yt-Ouyt6KZ_Zlo.jpg', date: '2026.10.10' },
  { id: 'xnnB6MzRUFA', no: 'III', thumb: '/assets/yt-xnnB6MzRUFA.jpg', date: '2026.09.01' },
]

export const stageDates = ['2026.10.10', '2026.09.02', '2026.09.01']

// 박민순이 함께 서는 단체. 채널 주소와 대표 영상은 실제 유튜브에서 확인한 것입니다.
// (2026-11-20 확인 · oEmbed 200 · 유튜브 채널 @ssumo-ob)
// 두 번째 영상은 2026/10/10 기타 발표회 전체 실황(rASIXVtzvPo)이고,
// 설명란 타임스탬프의 41:46(L'Encouragement, Op. 34 · 이철규·서민석)부터 재생되도록 start를 두었습니다.
// 41:46 장면의 썸네일(yt-ens-lenc-rASIXVtzvPo-4146.jpg)은 그 영상 41:46 무렵(2516~2529초) 프레임을
// 유튜브 플레이어에서 1080p로 받아 1280x720으로 잘라 저장한 것입니다. 화면에 깔린 자막·조작 막대는 없습니다.
// (2026-11-20 확인 · oEmbed 200 · 유튜브 채널 @ssumo-ob)
export const ensembles = [
  {
    key: 'ssumo',
    channel: 'https://www.youtube.com/@ssumo-ob',
    handle: '@ssumo-ob',
    videos: [
      { id: 'hySoMWFKzkg', thumb: '/assets/yt-ens-hySoMWFKzkg.jpg' },
      { id: 'rASIXVtzvPo', start: 2506, thumb: '/assets/yt-ens-lenc-rASIXVtzvPo-4146.jpg' },
    ],
  },
]
