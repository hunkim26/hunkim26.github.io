# 내 포트폴리오 사이트 사용법

## 폴더 구성

| 파일 | 하는 일 |
|---|---|
| `content.js` | **사이트의 모든 내용.** 업데이트할 때는 이 파일만 고치면 됩니다. |
| `index.html` | 디자인과 동작. 평소에는 건드리지 않아도 됩니다. |
| `photo.jpg`, `cv.pdf` | (선택) 소개 사진, 이력서. 폴더에 넣고 `content.js` 의 `photo`, `cv` 에 파일 이름을 적기 |

## 1. 내 내용으로 바꾸기

`content.js` 를 열어 이름, 소개, 게재처, 연구·글, 수상, 경력을 바꿉니다.
다 바꿨으면 맨 위 `sample: true` 를 `false` 로 바꾸면 노란 예시 안내가 사라집니다.
날짜 순서는 자동으로 정렬되니 목록 어디에 넣어도 됩니다.

### 논문 추가 (`works` 목록에)
```js
{
  type: "paper", date: "2026-10", venue: "kjs", lang: "ko",
  title:   { ko: "논문 제목", en: "English title" },
  authors: "홍길동, 김철수",
  detail:  "제60권 2호, 1–30쪽",
  tags: ["city"], doi: "10.xxxx/xxxx",
  url: "https://논문-링크"
},
```

### 학술발표 추가
```js
{
  type: "talk", date: "2026-11-05", venue: "kss", lang: "ko",
  title:   { ko: "발표 제목", en: "Talk title" },
  authors: "홍길동",
  detail:  { ko: "구두발표 · 부산", en: "Oral presentation · Busan" },
  url: "https://발표-링크"
},
```

### 뉴스 기사·칼럼 추가
```js
{
  type: "article", date: "2026-10-25", venue: "daily", lang: "ko",
  title:  { ko: "기사 제목", en: "Article title" },
  detail: { ko: "칼럼", en: "Column" },
  url: "https://기사-주소"
},
```
나에 대한 인터뷰·보도 기사라면 `detail: { ko: "인터뷰", en: "Interview" }` 처럼 구분해 주세요.

### 수상 추가 (`awards` 목록에)
```js
{ date: "2026-10", title: { ko: "상 이름", en: "Award name" },
  org: { ko: "수여 기관", en: "Awarding body" },
  pdf: "awards/상장파일.pdf" },
```
상장 스캔본은 `awards` 폴더에 넣고 `pdf` 에 경로를 적으면 '상장 보기' 링크가 생깁니다. 파일 이름은 영문·숫자로 짓는 게 안전해요.

### 학력·경력 추가 (`education`, `career` 목록에)
학력과 경력은 같은 형식입니다.
```js
{ start: "2026-03", end: "",
  role: { ko: "직책", en: "Position" },
  org:  { ko: "기관", en: "Organisation" } },
```
`end` 를 비워두면 '현재'로 표시됩니다.

### 공통 팁
- 새 학술지·학회·언론사는 `venues` 에 먼저 등록하고, 그 `id` 를 `venue` 에 씁니다.
- `featured: true` 를 넣으면 첫 화면 '대표 성과'에 크게 나옵니다 (3개 권장).
- `myNames` 에 내 이름 표기를 모두 적어두면 저자 목록에서 내 이름이 강조됩니다.
- 영어를 비워두면 영어 화면에서도 한국어가 보입니다.
- 항목이 하나도 없는 구역(예: 수상)은 자동으로 숨겨집니다.

## 2. 인터넷에 올리기 (GitHub Pages, 무료)

1. github.com 가입 → 새 저장소(Repository) 만들기 (예: `portfolio`)
2. **Add file → Upload files** 로 이 폴더의 파일을 모두 올리기
3. 저장소 **Settings → Pages** → Branch를 `main` 으로 선택 후 Save
4. 1~2분 뒤 `https://내아이디.github.io/portfolio` 에서 확인

**업데이트할 때:** GitHub에서 `content.js` 를 열고 연필(✏️) 버튼 → 수정 → **Commit changes**. 1분쯤 뒤 반영됩니다.

## 3. 개인 도메인 연결

1. 가비아, 카페24, Cloudflare 등에서 도메인 구매
2. 저장소 **Settings → Pages → Custom domain** 에 도메인 입력
3. 도메인 구매처 DNS 설정에 GitHub 안내대로 레코드 추가
   - `www` → CNAME → `내아이디.github.io`
   - 루트(@) → A 레코드 4개 (GitHub Pages 안내 문서의 IP)
4. 연결되면 **Enforce HTTPS** 체크

## 언어 링크
- 한국어: `https://yourname.com/?lang=ko`
- 영어: `https://yourname.com/?lang=en`

## 이력서 PDF

`cv-ko.pdf`, `cv-en.pdf` 는 `content.js` 내용으로 자동으로 만든 이력서입니다.
내용을 바꾼 뒤 이력서도 새로 만들려면 Claude에게 "이력서 다시 만들어줘"라고 하거나,
Node.js가 설치된 컴퓨터에서 `npm i playwright` 후 `node tools/build-cv.js` 를 실행하세요.

## 자격증

`content.js` 의 `certs` 목록에 추가하면 홈페이지와 이력서에 '자격증' 구역이 나타납니다.
스캔본은 `certs` 폴더에 넣고 `pdf: "certs/파일.pdf"` 로 연결하세요.
