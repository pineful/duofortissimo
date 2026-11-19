// 확인된 사실만 담습니다. 새 정보는 이 파일에서 고칩니다.
export const site = {
  name: 'Duo Fortissimo',
  nameKo: '듀오 포르티시모',
  email: 'pineful@gmail.com',
  youtube: 'https://www.youtube.com/@MinSoonPark',
  domain: 'duofortissimo.kr',
}

export const members = [
  {
    name: '박민순',
    nameEn: 'Park Minsoon',
    role: 'Mandolin',
    roleKo: '만돌린',
    instrument: 'mandolin',
    photo: {
      src: '/assets/photos/player-park-960.webp',
      srcset: '/assets/photos/player-park-480.webp 480w, /assets/photos/player-park-960.webp 960w',
      alt: '만돌린을 든 박민순, 문경 쌍용양회 공장 공연장에서',
      caption: '2026년 9월 2일, 문경 공연장에서',
    },
    facts: [
      ['1994~', '숭실대학교 만돌린오케스트라 동문연주단 악장'],
      ['2009~', '아니마토 만돌린 앙상블 단장'],
      ['2009~2011', '백석대학교 음악대학원 기악과(만돌린) 석사'],
      ['연주', '만돌린, 만돌론첼로, 클래식기타'],
    ],
    note: null,
  },
  {
    name: '이철규',
    nameEn: 'Lee Chulkyu',
    role: 'Classical Guitar',
    roleKo: '클래식기타',
    instrument: 'guitar',
    photo: {
      src: '/assets/photos/player-lee-960.webp',
      srcset: '/assets/photos/player-lee-480.webp 480w, /assets/photos/player-lee-960.webp 960w',
      alt: '야외 버스킹에서 웃는 이철규',
      caption: '2026년 9월 1일, 야외 버스킹에서',
    },
    facts: [['소속', '숭실대학교 만돌린오케스트라 동문연주단 기타 파트장']],
    note: '학력과 연주 경력은 정리해서 곧 올립니다.',
  },
]

export const videos = [
  {
    id: 'slL9iu_OWS8',
    no: 'I',
    title: 'Valtzer Fantastico',
    composer: 'E. Marucelli',
    titleKo: '환상적인 왈츠',
    meta: '2026.10.10',
    place: '숭실대학교 만돌린오케스트라 동문연주단 기타발표회',
    length: '6분 27초',
    thumb: '/assets/yt-slL9iu_OWS8.jpg',
    featured: true,
  },
  {
    id: 'b62zBLBz8x0',
    no: 'II',
    title: 'Santa Claus March',
    composer: 'F. Vokoun',
    titleKo: '산타클로스 행진곡',
    meta: '2026.10.10',
    place: '같은 발표회',
    length: '2분 27초',
    thumb: '/assets/yt-b62zBLBz8x0.jpg',
  },
  {
    id: '6RDwFnw-o40',
    no: 'III',
    title: 'MOOB 2026 기타발표회 2차 리허설',
    composer: '',
    titleKo: '리허설 실황',
    meta: '2026.09.12',
    place: 'MOOB 2026 기타발표회',
    length: '9분 09초',
    thumb: '/assets/yt-6RDwFnw-o40.jpg',
  },
]

export const repertoire = [
  { composer: 'Enrico Marucelli', title: 'Valtzer Fantastico', titleKo: '환상적인 왈츠', inst: '만돌린과 클래식기타' },
  { composer: 'F. Vokoun', title: 'Santa Claus March', titleKo: '산타클로스 행진곡', inst: '만돌린과 클래식기타' },
]

export const stages = [
  {
    date: '2026.10.10',
    what: '숭실대학교 만돌린오케스트라 동문연주단 기타발표회',
    where: 'Valtzer Fantastico, Santa Claus March 연주',
    city: '서울',
  },
  { date: '2026.09.12', what: 'MOOB 2026 기타발표회 2차 리허설', where: '리허설 실황', city: '서울' },
  {
    date: '2026.09.02',
    what: '쌍용양회 문경공장 「재생의 선율 RE;BASIN」 클래식 콘서트',
    where: 'Valtzer Fantastico, Santa Claus March 연주',
    city: '문경',
  },
  { date: '2026.09.01', what: '야외 버스킹', where: 'Valtzer Fantastico, Santa Claus March', city: '서울' },
]

// 무대 사진: 2026년 9월 2일 문경 쌍용양회 공장 공연
export const gallery = [
  {
    src: '/assets/photos/stage-chairs-1040.webp',
    small: '/assets/photos/stage-chairs-520.webp',
    alt: '공연을 기다리며 쌓아 둔 의자와 무대 배너',
    caption: '공연을 기다리는 의자',
    meta: '2026.09.02 · 문경',
    pos: 'center 40%',
  },
  {
    src: '/assets/photos/stage-banner-1040.webp',
    small: '/assets/photos/stage-banner-520.webp',
    alt: '폐공장 벽 앞에 세운 재생의 선율 RE;BASIN 무대 배너',
    caption: '무대 배너, 재생의 선율 RE;BASIN',
    meta: '2026.09.02 · 문경',
    pos: 'center 45%',
  },
  {
    src: '/assets/photos/stage-empty-1040.webp',
    small: '/assets/photos/stage-empty-520.webp',
    alt: '조명을 세운 빈 무대',
    caption: '소리가 오르기 전의 무대',
    meta: '2026.09.02 · 문경',
    pos: 'center 42%',
  },
  {
    src: '/assets/photos/stage-wall-1040.webp',
    small: '/assets/photos/stage-wall-520.webp',
    alt: '무대 뒤 폐공장 벽의 틈에 선 박민순',
    caption: '무대 뒤, 벽의 틈',
    meta: '2026.09.02 · 문경',
    pos: '72% center',
  },
]

export const facts = [
  ['결성', '2026년 8월'],
  ['편성', '만돌린과 클래식기타'],
  ['뿌리', '숭실대학교 만돌린오케스트라 동문연주단'],
]

export const mailto = `mailto:${site.email}?subject=${encodeURIComponent('듀오 포르티시모 섭외 문의')}`
