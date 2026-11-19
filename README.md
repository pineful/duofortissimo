# Duo Fortissimo 공식 홈페이지

만돌린 박민순, 클래식기타 이철규로 구성된 듀엣 **듀오 포르티시모**의 공식 홈페이지입니다.
React + Vite로 만들었고, 빌드 결과(`docs/`)를 GitHub Pages로 배포합니다.

- 주소: https://duofortissimo.kr
- 저장소: https://github.com/pineful/duofortissimo

## 구조

```
index.html          페이지 메타 정보(제목, 설명, OG 태그, 구조화 데이터)
src/
  main.jsx          React 진입점
  App.jsx           섹션 조합, 스크롤 진행률·패럴랙스 처리
  data.js           콘텐츠 정본. 구성원, 영상, 레퍼토리, 지난 무대 목록
  index.css         전체 디자인(색, 서체, 레이아웃, 모션)
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
  assets/           아트워크(웹용 WebP)와 생성 이미지
  CNAME             GitHub Pages 사용자 도메인
docs/               빌드 결과. 이 폴더가 그대로 배포됩니다
```

## 콘텐츠 고치기

글과 목록은 `src/data.js`에서 고칩니다. 영상은 유튜브 영상 ID만 넣으면 미리보기와 임베드가 함께 만들어집니다.

```js
export const videos = [
  { id: '유튜브영상ID', title: '곡명', titleKo: '한글 곡명', meta: '날짜 · 공연', length: '6분 27초' },
]
```

새 공연이 잡히면 `stages` 배열 맨 위에 한 줄 추가합니다. `Stage.jsx`의 "다음 무대" 문구도 함께 고쳐 주세요.

### 아직 비어 있는 자리

- `src/components/Players.jsx`: 연주자 사진. 지금은 라인 아트와 "연주 사진 준비 중" 표시가 들어 있습니다.
  사진을 `public/assets/`에 넣고 `.portrait` 안의 `<Art />`와 `<span className="ph-label">`을
  `<img src="/assets/파일명.webp" alt="...">`로 바꾸면 됩니다.
- `src/data.js`의 이철규 님 `facts`: 학력과 연주 경력.
- `src/data.js`의 `repertoire`: 곡이 늘면 항목을 추가합니다.

## 로컬에서 보기

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # docs/ 로 빌드
npm run preview  # 빌드 결과 확인
```

## 배포

`main` 브랜치의 `docs/` 폴더를 GitHub Pages 소스로 씁니다.
빌드 후 커밋하고 푸시하면 1분 안에 반영됩니다.

```bash
npm run build
git add -A && git commit -m "content: 공연 소식 갱신" && git push
```

`public/CNAME`에 `duofortissimo.kr`이 들어 있어 빌드 결과에도 그대로 복사됩니다.

## 도메인과 인증서

DNS는 호스팅케이알(ns1~4.hosting.co.kr)에서 관리합니다. 이미 GitHub Pages를 가리키도록 설정돼 있습니다.

- `duofortissimo.kr` A 레코드: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
- `www.duofortissimo.kr` CNAME: pineful.github.io

## 이미지

`public/assets/hero-duo.webp`, `detail-strings.webp`, `stage-empty.webp`는 홈페이지를 위해 생성한
아트워크입니다. 실제 공연 사진이 생기면 같은 비율로 바꿔 넣으면 됩니다.
