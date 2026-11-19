# Duo Fortissimo 공식 홈페이지

만돌린 박민순, 클래식기타 이철규로 구성된 듀엣 **듀오 포르티시모**의 공식 홈페이지입니다.
React + Vite로 만들었고, 빌드 결과를 GitHub Pages로 배포합니다.

- 주소: https://duofortissimo.kr
- 저장소: https://github.com/pineful/duofortissimo

## 디자인

**에디토리얼 페이퍼** — 따뜻한 종이 바탕, 비대칭 지면, 음악잡지 표지 같은 구성입니다.
색과 활자는 로고 원본(`00. 로고/시안_20260806.png`)에서 가져왔습니다.

| 쓰임 | 값 |
| --- | --- |
| 종이 | `#f5f1e8` |
| 잉크(네이비) | `#142033` |
| 골드 | `#c5a15a` (강조 글자는 `#8a6a2f`) |
| 라틴 활자 | Playfair Display (로고 워드마크와 같은 서체) |
| 한글 활자 | Noto Serif KR, Pretendard |

## 구조

저장소 루트는 **배포되는 사이트**이고, 소스는 `app/` 안에 있습니다.
빌드하면 `docs/`에 결과가 생기고, 같은 결과를 저장소 루트로도 복사합니다.
그래서 GitHub Pages 설정이 `/(root)`든 `/docs`든 어느 쪽이어도 같은 사이트가 열립니다.

```
index.html          배포본 (빌드 결과, 직접 고치지 않습니다)
assets/             배포본의 JS·CSS·이미지
CNAME  robots.txt  sitemap.xml  favicon-32.png  favicon-64.png  apple-touch-icon.png
.nojekyll
docs/               같은 빌드 결과의 사본
app/
  index.html        개발용 진입 파일 (메타 정보, OG 태그, 구조화 데이터)
  vite.config.js    빌드 설정 (outDir: ../docs)
  src/
    main.jsx        React 진입점
    App.jsx         섹션 조합, 읽기 진행 막대
    data.js         콘텐츠 정본: 구성원·사진, 영상, 레퍼토리, 지난 무대, 무대 사진
    index.css       전체 디자인(색, 서체, 레이아웃, 모션)
    components/
      Masthead.jsx    상단 로고와 메뉴
      Cover.jsx       표지(첫 화면), 표지 도판, 차례
      Duo.jsx         듀오 소개, 사실 확인, 두 연주자 프로필
      Programme.jsx   연주 영상과 연주곡
      Stage.jsx       문경 공연 사진, 지난 무대, 다음 무대
      Contact.jsx     섭외 문의
      Colophon.jsx    하단 로고와 링크
      shared.jsx      스크롤 등장, 주소 복사, 아이콘
  public/
    assets/
      logo-mark.png       ff 심볼 (투명 PNG, 로고 원본에서 추출)
      logo-wordmark.png   Duo Fortissimo 워드마크 (투명 PNG)
      logo-lockup.png     심볼 + 워드마크 + 한글 + MANDOLIN·GUITAR
      og-image.jpg        공유 미리보기 1200×630
      photos/             2026년 9월 2일 문경 공연 사진(웹용 WebP)
      yt-*.jpg            유튜브 영상 썸네일
    robots.txt  sitemap.xml  CNAME  favicon-*.png  apple-touch-icon.png
scripts/
  sync-root.mjs     docs/ → 저장소 루트 복사
```

## 콘텐츠 고치기

글과 목록은 `app/src/data.js`에서 고칩니다. 영상은 유튜브 영상 ID만 넣으면 미리보기와 임베드가 함께 만들어집니다.

```js
export const videos = [
  { id: '유튜브영상ID', no: 'I', title: '곡명', titleKo: '한글 곡명', composer: '작곡', meta: '2026.10.10', place: '공연 이름', length: '6분 27초', thumb: '/assets/yt-....jpg' },
]
```

- `members[].photo`: 연주자 프로필 사진 경로와 캡션
- `gallery`: 무대 사진(경로, 캡션, `pos`는 `object-position`)
- `stages`: 새 공연이 잡히면 배열 맨 위에 한 줄 추가하고, `Stage.jsx`의 "다음 무대" 문구도 함께 고칩니다.

### 아직 비어 있는 자리

- `app/src/data.js`의 이철규 님 `facts`: 학력과 연주 경력. 지금은 소속 한 줄과 "곧 올립니다" 안내만 있습니다.

## 이미지

`app/public/assets/photos/`의 사진은 2026년 9월 2일 경북 문경 쌍용양회 공장에서 열린
「재생의 선율 RE;BASIN」 클래식 콘서트와, 9월 1일 야외 버스킹에서 찍은 것입니다.
원본은 구글 드라이브 `듀오 포르티시모` 폴더에 있습니다. 사진을 바꿀 때는 같은 비율(4:5, 4:3)로 잘라
WebP로 저장하고 파일 이름을 유지하면 됩니다.

## 로컬에서 보기

```bash
cd app
npm install
npm run dev      # http://localhost:5173
npm run build    # docs/ 로 빌드한 뒤 저장소 루트로 복사
npm run preview  # 빌드 결과 확인
```

## 배포

`main` 브랜치를 그대로 올리면 GitHub Pages가 1분 안에 다시 배포합니다.

```bash
cd app && npm run build
cd .. && git add -A && git commit -m "content: 공연 소식 갱신" && git push
```

`app/public/CNAME`에 `duofortissimo.kr`이 들어 있어 빌드 결과마다 함께 복사됩니다.

## 도메인과 인증서

DNS는 호스팅케이알(ns1~4.hosting.co.kr)에서 관리하며, GitHub Pages를 가리키도록 설정돼 있습니다.

- `duofortissimo.kr` A 레코드: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
- `www.duofortissimo.kr` CNAME: pineful.github.io
- 인증서: Let's Encrypt, `duofortissimo.kr`과 `www.duofortissimo.kr` 포함
