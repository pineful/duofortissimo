# Duo Fortissimo 공식 홈페이지

만돌린 박민순, 클래식기타 이철규로 구성된 듀엣 **듀오 포르티시모**의 공식 홈페이지입니다.
React + Vite로 만들었고, 빌드 결과를 GitHub Pages로 배포합니다.

- 주소: https://duofortissimo.kr
- 저장소: https://github.com/pineful/duofortissimo

## 구조

저장소 루트는 **배포되는 사이트**이고, 소스는 `app/` 안에 있습니다.
빌드하면 `docs/`에 결과가 생기고, 같은 결과를 저장소 루트로도 복사합니다.
그래서 GitHub Pages 설정이 `/(root)`든 `/docs`든 어느 쪽이어도 같은 사이트가 열립니다.

```
index.html          배포본 (빌드 결과, 직접 고치지 않습니다)
assets/             배포본의 JS·CSS·이미지
CNAME               duofortissimo.kr
.nojekyll
docs/               같은 빌드 결과의 사본
app/
  index.html        개발용 진입 파일 (메타 정보, OG 태그, 구조화 데이터)
  vite.config.js    빌드 설정 (outDir: ../docs)
  src/
    main.jsx        React 진입점
    App.jsx         섹션 조합, 스크롤 진행률·패럴랙스
    data.js         콘텐츠 정본: 구성원, 영상, 레퍼토리, 지난 무대
    index.css       전체 디자인(색, 서체, 레이아웃, 모션)
    components/
      Hero.jsx            첫 화면
      StringCanvas.jsx    오선 모양의 빛줄기 캔버스(마우스에 반응)
      Marquee.jsx         흐르는 문구 띠
      Duo.jsx             듀오 소개
      Players.jsx         연주자 프로필
      Performances.jsx    연주 영상, 레퍼토리
      Stage.jsx           지난 무대, 다음 무대
      Contact.jsx         섭외 문의
      Footer.jsx
      Reveal.jsx          스크롤 등장 애니메이션 래퍼
      Icons.jsx           만돌린·기타 라인 아트, 아이콘
  public/
    assets/         아트워크 원본(웹용 WebP)
    CNAME
scripts/
  sync-root.mjs     docs/ → 저장소 루트 복사
```

## 콘텐츠 고치기

글과 목록은 `app/src/data.js`에서 고칩니다. 영상은 유튜브 영상 ID만 넣으면 미리보기와 임베드가 함께 만들어집니다.

```js
export const videos = [
  { id: '유튜브영상ID', title: '곡명', titleKo: '한글 곡명', meta: '날짜 · 공연', length: '6분 27초' },
]
```

새 공연이 잡히면 `stages` 배열 맨 위에 한 줄 추가하고, `Stage.jsx`의 "다음 무대" 문구도 함께 고칩니다.

### 아직 비어 있는 자리

- `app/src/components/Players.jsx`: 연주자 사진. 지금은 라인 아트와 "연주 사진 준비 중" 표시가 들어 있습니다.
  사진을 `app/public/assets/`에 넣고 `.portrait` 안의 `<Art />`와 `<span className="ph-label">`을
  `<img src="/assets/파일명.webp" alt="...">`로 바꾸면 됩니다.
- `app/src/data.js`의 이철규 님 `facts`: 학력과 연주 경력.
- `app/src/data.js`의 `repertoire`: 곡이 늘면 항목을 추가합니다.

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

## 이미지

`app/public/assets/hero-duo.webp`, `detail-strings.webp`, `stage-empty.webp`는 홈페이지를 위해 생성한
아트워크입니다. 실제 공연 사진이 생기면 같은 비율로 바꿔 넣으면 됩니다.
