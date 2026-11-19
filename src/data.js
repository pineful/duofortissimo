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
    role: 'Mandolin',
    roleKo: '만돌린',
    instrument: 'mandolin',
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
    role: 'Classical Guitar',
    roleKo: '클래식기타',
    instrument: 'guitar',
    facts: [['소속', '숭실대학교 만돌린오케스트라 동문연주단 기타 파트장']],
    // [채울 자리] 학력과 연주 경력
    note: '학력과 연주 경력은 정리해서 곧 올립니다.',
  },
]

export const videos = [
  {
    id: 'slL9iu_OWS8',
    title: 'Valtzer Fantastico (E. Marucelli)',
    titleKo: '환상적인 왈츠',
    meta: '2026.10.10 · 숭실대학교 만돌린오케스트라 동문연주단 기타발표회',
    length: '6분 27초',
    featured: true,
  },
  {
    id: 'b62zBLBz8x0',
    title: 'Santa Claus March (F. Vokoun)',
    titleKo: '산타클로스 행진곡',
    meta: '2026.10.10 · 같은 발표회',
    length: '2분 27초',
  },
  {
    id: '6RDwFnw-o40',
    title: 'MOOB 2026 기타발표회 2차 리허설',
    titleKo: '',
    meta: '2026.09.12 · 리허설 실황',
    length: '9분 09초',
  },
]

export const repertoire = [
  { composer: 'Enrico Marucelli', title: 'Valtzer Fantastico', titleKo: '환상적인 왈츠', inst: '만돌린과 클래식기타' },
  { composer: 'F. Vokoun', title: 'Santa Claus March', titleKo: '산타클로스 행진곡', inst: '만돌린과 클래식기타' },
]

export const stages = [
  { date: '2026.10.10', what: '숭실대학교 만돌린오케스트라 동문연주단 기타발표회', where: 'Valtzer Fantastico, Santa Claus March 연주' },
  { date: '2026.09.12', what: 'MOOB 2026 기타발표회 2차 리허설', where: '리허설 실황' },
  { date: '2026.09.03', what: '쌍용양회공업 문경공장 공연', where: '경북 문경' },
  { date: '2026.09.01', what: '버스킹', where: 'Valtzer Fantastico, Santa Claus March' },
]
