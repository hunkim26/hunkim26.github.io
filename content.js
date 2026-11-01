/* =====================================================================
   포트폴리오 내용 파일 — 사이트를 업데이트할 때는 이 파일만 고치면 됩니다.

   ▸ 한/영 문구는 { ko: "...", en: "..." } 형태로 씁니다.
     영어를 비워두면 영어 화면에서도 한국어가 보입니다.
   ▸ 항목을 추가할 때는 각 목록에서 { ... }, 한 덩어리를 복사해 붙여넣고
     내용만 바꾸세요. 쉼표( , )를 빠뜨리지 않도록 주의!
   ▸ 날짜는 "2026-09-14" 또는 "2026-09" 형식. 순서는 자동 정렬됩니다.
   ▸ 「확인 필요」 라고 적힌 곳은 직접 확인해서 고쳐 주세요.
   ===================================================================== */

window.PORTFOLIO = {

  /* 노란 안내 띠. true 로 바꾸면 '예시' 안내가 나타납니다. */
  sample: false,

  /* ── 기본 정보 ─────────────────────────────────────────── */
  name:  { ko: "김경훈", en: "Kyunghun Kim" },
  role:  { ko: "인하대학교 스마트시티공학전공 석사과정", en: "MS Student, Smart City Engineering, Inha University" },
  motto: { ko: "지속가능한 도시", en: "Sustainable cities" },     /* 첫 화면 원고지 칸에 들어가는 문구 */
  intro: {
    ko: "도시하천과 물 환경을 연구합니다. 홍수·가뭄 예측, 수질 관리, 하천 복원의 경제적 가치를 다루며, 대학생 신재생에너지 기자단 단장으로 에너지 분야를 취재해 왔습니다.",
    en: "I research urban rivers and water environments, from flood and drought prediction to water quality and the economic value of river restoration. I have also reported on renewable energy as head of a national student reporters' corps."
  },

  /* 논문·발표 저자 목록에서 내 이름을 굵게 표시할 때 쓰는 이름들 */
  myNames: ["김경훈", "Kyunghun Kim", "Kim, Kyunghun", "Kyoung Hun Kim", "Kim, Kyoung Hun", "Kim, K. H."],

  /* ── 소개(About) 문단 ───────────────────────────────────── */
  about: {
    ko: [
      "인하대학교 환경공학과를 졸업하고, 2026년부터 같은 학교 스마트시티공학전공 석사과정에서 수자원·환경·지형정보를 연구하고 있습니다.",
      "물리기반 침수해석으로 홍수 피해액을 산정하고, 가뭄 전파와 녹조(Chl-a)를 예측하며, 헤도닉 가격모형으로 도시하천 복원의 경제적 편익을 평가하는 연구를 해왔습니다. 한국수자원학회, 한국습지학회, AOGS, IAHR APD 등 국내외 학술대회에서 발표했습니다.",
      "학부 시절에는 ESG 미디어 임팩트온에서 연구원(RA)으로 일했고, 대학생 신재생에너지 기자단에서 홍보팀장과 단장을 맡았습니다."
    ],
    en: [
      "I graduated in Environmental Engineering from Inha University and, since 2026, have been a master's student in Smart City Engineering there, working on water resources, environment and geospatial information.",
      "My research covers physics-based inundation modelling for flood damage estimation, prediction of drought propagation and algal blooms (Chl-a), and hedonic pricing of the economic benefits of urban stream restoration. I have presented at KWRA, the Korean Wetlands Society, AOGS and IAHR APD.",
      "As an undergraduate I worked as a research assistant at the ESG media outlet ImpactOn, and served as PR team lead and then head of the National Student Renewable Energy Reporters."
    ]
  },
  photo: "",            /* 사진 파일을 같은 폴더에 넣고 "photo.jpg" 처럼 적기 */
  cv: { ko: "cv-ko.pdf", en: "cv-en.pdf" },   /* 이력서: tools/build-cv.js 로 다시 만들 수 있어요 */

  /* ── 연락처 ────────────────────────────────────────────── */
  email: "kh7128@nate.com",
  links: [
    { label: "대학생신재생에너지기자단", url: "https://renewableenergyfollowers.org/" }
    /* , { label: "LinkedIn", url: "https://linkedin.com/in/..." } */
  ],

  /* ── 게재처: 학술지, 학회, 언론사 ───────────────────────── */
  venues: [
    { id: "localstudies", name: { ko: "Local Studies (인천학회)", en: "Local Studies (Incheon Studies Association)" }, url: "https://www.doi.org/10.23338/LOCALSTUDIES.2025.9.1.10" },
    { id: "kipo",     name: { ko: "특허청 (국내특허)", en: "Korean Intellectual Property Office" }, url: "https://www.kipo.go.kr" },
    { id: "kwra",     name: { ko: "한국수자원학회 학술발표회",       en: "KWRA Annual Conference" }, url: "https://www.kwra.or.kr" },
    { id: "kws",      name: { ko: "한국습지학회 정기학술발표대회",   en: "Korean Wetlands Society Annual Conference" }, url: "" },
    { id: "kwsintl",  name: { ko: "한국습지학회 국제학술대회",       en: "Korean Wetlands Society International Conference" }, url: "" },
    { id: "ksee",     name: { ko: "한국공학교육학회 공학교육학술대회", en: "Korean Society for Engineering Education Conference" }, url: "" },
    { id: "wes",      name: { ko: "물공학회 학술발표회",             en: "Water Engineering Society Conference" }, url: "" },
    { id: "aogs",     name: { ko: "AOGS 2026",                     en: "AOGS 2026" }, url: "https://www.asiaoceania.org" },
    { id: "iahr",     name: { ko: "IAHR APD 2026",                 en: "IAHR APD 2026" }, url: "https://www.iahr.org" },
    { id: "incheon",  name: { ko: "인천학회 학술대회",               en: "Incheon Studies Association Conference" }, url: "" },
    { id: "ksce",     name: { ko: "대한토목학회 KSCE 2026 CONVENTION", en: "KSCE 2026 Convention" }, url: "https://www.ksce.or.kr" },
    { id: "ref",      name: { ko: "대학생신재생에너지기자단 (R.E.F)", en: "Renewable Energy Followers (R.E.F)" }, url: "https://renewableenergyfollowers.org/" },
    { id: "electimes", name: { ko: "전기신문", en: "Electimes" }, url: "https://www.electimes.com" },
    { id: "mpmbc",    name: { ko: "목포MBC", en: "Mokpo MBC" }, url: "https://www.mpmbc.co.kr" },
  ],

  /* ── 연구·글 ────────────────────────────────────────────
     type    : "paper"(논문) | "talk"(학술발표) | "article"(기사·칼럼)
     venue   : 위 venues 의 id
     featured: true 면 첫 화면 '대표 성과'에 크게 보입니다 (3개 권장) */
  works: [
    /* 학술지 논문 */
    {
      type: "paper", date: "2025-09", venue: "localstudies", lang: "ko", featured: true,
      title: {
        ko: "도시하천의 지속가능성을 위한 중요요인 분석: 검단신도시 나진포천을 중심으로",
        en: "Analysis of Important Factors for the Sustainability of Urban Rivers: Focusing on Najinpo-river in Geomdan Newtown"
      },
      authors: { ko: "최재국, 김경훈, 김수전", en: "Jea Kook Choi, Kyunghun Kim, Soo Jun Kim" },
      detail:  "Vol.1 No.2, pp. 13–34",
      summary: {
        ko: "삼축이론과 AHP로 전문가 35명을 조사해, 도시하천 지속가능성에서 환경적 요인(0.442)이 가장 중요함을 밝힘.",
        en: "An AHP survey of 35 experts based on the Three Pillar Model finds environmental sustainability the most important factor (0.442)."
      },
      tags: ["river", "sustainability"],
      doi: "10.23338/LOCALSTUDIES.2025.9.1.10",
      url: "https://www.doi.org/10.23338/LOCALSTUDIES.2025.9.1.10"
    },

    /* 특허 */
    {
      type: "patent", date: "2026-08-28", venue: "kipo", lang: "ko", featured: true,
      title: {
        ko: "바이오차 필터 부유습지 및 이를 이용한 수질정화 및 바이오차 재활용 방법",
        en: "Biochar Filter Floating Wetland and Method for Water Purification and Biochar Recycling Using the Same"
      },
      authors: { ko: "김수전 (대표발명자), 김경훈 (공동발명자)", en: "Soo Jun Kim (lead inventor), Kyunghun Kim (co-inventor)" },
      detail:  { ko: "국내특허 출원 10-2026-0163115 · 출원인 인하대학교 산학협력단", en: "Korean patent application 10-2026-0163115 · Applicant: Inha University Industry-Academic Cooperation Foundation" },
      summary: {
        ko: "바이오차 필터를 단 부유습지로 수중 영양염류(질소·인)를 흡착해 수질을 정화하고, 영양염류를 머금은 바이오차를 회수해 토양개량재로 재활용하는 자원순환형 기술.",
        en: "A floating wetland with a removable biochar filter that adsorbs nitrogen and phosphorus from water, then recovers the nutrient-laden biochar for reuse as a soil amendment."
      },
      tags: ["waterquality"]
    },

    /* 학술대회 발표 */
    {
      type: "talk", date: "2026-08", venue: "aogs", lang: "en",
      title: {
        ko: "헤도닉 가격모형을 활용한 도시하천 복원의 경제적 효과 분석",
        en: "Analysis of the Economic Effects of Urban Stream Restoration Using a Hedonic Price Model"
      },
      authors: { ko: "김경훈", en: "Kyunghun Kim" },
      detail:  { ko: "구두발표 · 일본 후쿠오카", en: "Oral presentation · Fukuoka, Japan" },
      summary: {
        ko: "수원 서호천 인근 아파트 실거래 14,263건을 연도별로 분석해, 복원 편익이 준공 연도(2015)에 100m당 약 1,282만 원으로 가장 크고 이후 줄어듦을 확인.",
        en: "Year-by-year hedonic models on 14,263 apartment sales near Seoho Stream show restoration benefits peaked in the completion year (2015) and declined after."
      },
      tags: ["river", "valuation"]
    },
    {
      type: "talk", date: "2026-08", venue: "iahr", lang: "en",
      title: {
        ko: "도시하천 복원의 지불의사액 분석: 수원 서호천 사례",
        en: "Analysis of Willingness to Pay for Urban Stream Restoration: A Case Study of the Seoho Stream in Suwon"
      },
      authors: { ko: "김경훈", en: "Kyunghun Kim" },
      detail:  { ko: "포스터 · 인천", en: "Poster · Incheon, Korea" },
      tags: ["river", "valuation"]
    },
    {
      type: "talk", date: "2026-09", venue: "ksee", lang: "ko",
      title: {
        ko: "가뭄지수 간 시차 상관분석을 통한 가뭄 전파 지연시간 평가",
        en: "Evaluating Drought Propagation Lag Time through Lagged Correlation Analysis of Drought Indices"
      },
      authors: { ko: "김도현, 맹우진, 심은수, 이기영, 김경훈, 김수전", en: "Dohyun Kim, Woojin Maeng, Eunsu Sim, Giyoung Lee, Kyunghun Kim, Soo Jun Kim" },
      detail:  { ko: "2026 공학교육학술대회 · From Classroom to the Field 세션", en: "2026 Conference · From Classroom to the Field session" },
      award:   { ko: "우수발표논문상", en: "Best Presentation Award" },
      tags: ["drought"]
    },
    {
      type: "talk", date: "2026-08", venue: "kws", lang: "ko",
      title: {
        ko: "낙동강 유역의 Chl-a 예측을 위한 수질 관측소 군집분석",
        en: "Cluster Analysis of Water Quality Monitoring Stations for Chl-a Prediction in the Nakdong River Basin"
      },
      authors: { ko: "김경훈", en: "Kyunghun Kim" },
      detail:  { ko: "구두발표 · 경기도", en: "Oral presentation · Gyeonggi, Korea" },
      tags: ["waterquality"]
    },
    {
      type: "talk", date: "2026-05", venue: "kwra", lang: "ko",
      title: {
        ko: "물리기반 침수해석에 기반한 홍수 피해액 산정 및 베이시스 리스크 저감 방안 연구",
        en: "Flood Damage Estimation and Basis Risk Reduction Based on Physics-Based Inundation Analysis"
      },
      authors: { ko: "김경훈", en: "Kyunghun Kim" },
      detail:  { ko: "구두발표 · 부산", en: "Oral presentation · Busan, Korea" },
      summary: {
        ko: "GRM–G2D–K-FRM 모형을 연계해 미호천 중권역의 빈도별 홍수 피해액을 산정하고, 지수형 보험의 강우 임계값별 보험금을 제시.",
        en: "Linking GRM, G2D and K-FRM models for the Miho Stream basin to estimate flood damage and set rainfall-trigger payouts for index insurance."
      },
      tags: ["flood"]
    },
    {
      type: "talk", date: "2026-05", venue: "kwra", lang: "ko",
      title: {
        ko: "바이오차 기반 수질정화-토양개량 연계 시스템의 구축 및 적용성 평가",
        en: "Development and Evaluation of a Biochar-Based Water Purification and Soil Amendment System"
      },
      authors: { ko: "김도현, 변성현, 심은수, 이기영, 김경훈, 이호용, 김수전", en: "Dohyun Kim, Sunghyun Byun, Eunsu Sim, Giyoung Lee, Kyunghun Kim, Hoyong Lee, Soo Jun Kim" },
      award:   { ko: "우수발표 논문상", en: "Excellent Presentation Award" },
      detail:  { ko: "구두발표 · 부산", en: "Oral presentation · Busan, Korea" },
      tags: ["waterquality"]
    },
    {
      type: "talk", date: "2026-10", venue: "ksce", lang: "ko",
      title: {
        ko: "낙동강 유역의 Chl-a 예측을 위한 수질 관측소 군집분석",
        en: "Cluster Analysis of Water Quality Monitoring Stations for Chl-a Prediction in the Nakdong River Basin"
      },
      authors: { ko: "김경훈, 이승민, 한윤진, 이호용, 한희찬, 김수전", en: "Kyunghun Kim, Seungmin Lee, Yunjin Han, Hoyong Lee, Heechan Han, Soo Jun Kim" },
      detail:  { ko: "포스터", en: "Poster" },
      summary: {
        ko: "낙동강 유역 180개 관측소의 수질 15개 항목과 위치정보를 4가지 기법으로 군집화해, PCA+K-means 6개 군집이 최적이고 하류 군집에서 Chl-a가 가장 높게 분리됨을 확인.",
        en: "Clustering 180 Nakdong basin stations on 15 water quality variables and location: PCA+K-means with six clusters performed best, isolating a high-Chl-a downstream cluster."
      },
      pdf:     "materials/2026_ksce-chla-cluster-poster.pdf",
      tags: ["waterquality"]
    },
    {
      type: "talk", date: "2025-05-24", venue: "incheon", lang: "ko",
      title: {
        ko: "지속가능한 도시하천의 중요요인 분석: 검단신도시 나진포천을 중심으로",
        en: "Key Factors for Sustainable Urban Rivers: The Case of Najinpo Stream in Geomdan New Town"
      },
      authors: { ko: "김경훈", en: "Kyunghun Kim" },
      detail:  { ko: "2025 춘계학술대회 · 구두발표 · 인천", en: "2025 Spring Conference · Oral presentation · Incheon" },
      pdf:     "materials/2025_incheon-spring-najinpo-slides.pdf",
      tags: ["river", "sustainability"]
    },
    {
      type: "talk", date: "2025-11", venue: "wes", lang: "ko",
      title: {
        ko: "바이오차 기반 수질개선 기술의 복합효과 및 적용성 검토",
        en: "Assessment of the Multifaceted Effects and Applicability of Biochar-Based Water Quality Improvement Technologies"
      },
      authors: { ko: "김경훈, 김도현, 심은수, 조중훈, 최재우, 이호용, 김수전", en: "Kyunghun Kim, Dohyun Kim, Eunsu Sim, Junghoon Cho, Jaewoo Choi, Hoyong Lee, Soo Jun Kim" },
      detail:  { ko: "제8회 물공학회 학술발표회 · 학부생 캡스톤 세션 · 포스터", en: "8th Conference · Undergraduate Capstone Session · Poster" },
      pdf:     "materials/2025-11_wes-biochar-poster.pdf",
      award:   { ko: "장려상", en: "Encouragement Award" },
      tags: ["waterquality"]
    },
    {
      type: "talk", date: "2025-08", venue: "kwsintl", lang: "ko", featured: true,
      title: {
        ko: "헤도닉 가격모형에 기반한 도심하천복원의 경제적 가치평가",
        en: "Economic Valuation of Urban Stream Restoration Based on a Hedonic Price Model"
      },
      authors: { ko: "김경훈, 김도현, 심은수, 조중훈, 최재우, 이호용, 김수전", en: "Kyunghun Kim, Dohyun Kim, Eunsu Sim, Junghoon Cho, Jaewoo Choi, Hoyong Lee, Soo Jun Kim" },
      detail:  { ko: "2025 국제학술대회", en: "2025 International Conference" },
      award:   { ko: "우수논문상", en: "Best Paper Award" },
      summary: {
        ko: "주저자로 발표해 우수논문상을 받은 연구. 하천 복원이 인근 아파트 가격에 미치는 영향으로 복원 편익을 평가.",
        en: "First-authored study awarded Best Paper: valuing stream restoration through its effect on nearby apartment prices."
      },
      tags: ["river", "valuation"]
    },
    {
      type: "talk", date: "2025-08", venue: "kwsintl", lang: "ko",
      title: {
        ko: "수생태계 복원을 위한 바이오차의 수질개선 효과 분석",
        en: "Water Quality Improvement Effects of Biochar for Aquatic Ecosystem Restoration"
      },
      authors: { ko: "최재우, 김경훈, 김도현, 심은수, 조중훈, 이호용, 김수전", en: "Jaewoo Choi, Kyunghun Kim, Dohyun Kim, Eunsu Sim, Junghoon Cho, Hoyong Lee, Soo Jun Kim" },
      detail:  { ko: "2025 국제학술대회", en: "2025 International Conference" },
      award:   { ko: "우수논문상", en: "Best Paper Award" },
      tags: ["waterquality"]
    },
    {
      type: "talk", date: "2025-12", venue: "incheon", lang: "ko",
      title: {
        ko: "헤도닉 가격모형을 활용한 도심하천복원사업의 경제적 효과 분석: 수원 서호천을 중심으로",
        en: "Economic Effects of Urban Stream Restoration Using a Hedonic Price Model: The Case of Seoho Stream, Suwon"
      },
      authors: { ko: "김경훈", en: "Kyunghun Kim" },
      detail:  { ko: "2025 동계학술발표대회 · 구두발표 · 인천", en: "2025 Winter Conference · Oral presentation · Incheon" },
      tags: ["river", "valuation"]
    }

    /* 언론 보도 (나·기자단이 소개된 기사). also 에 같은 소식을 다룬 다른 매체 링크 */
    ,{
      type: "press", date: "2025-12-19", venue: "mpmbc", lang: "ko",
      title:  { ko: "'햇빛연금' 주목..기후에너지어워드 대상 '신안군'", en: "Sinan County Wins Grand Prize at the Climate Energy Awards" },
      detail: { ko: "기자단 기후에너지 보도부문 최우수상 소개", en: "Reports the reporters' corps winning the top prize for climate energy reporting" },
      tags: ["energy"],
      url: "https://www.mpmbc.co.kr/NewsArticle/1496984",
      also: [ { label: { ko: "뉴시스 (수상자 발표)", en: "Newsis (winners announced)" }, url: "https://www.newsis.com/view/NISX20251121_0003412652" } ]
    },
    {
      type: "press", date: "2025-03-28", venue: "electimes", lang: "ko",
      title:  { ko: "서울에너지드림센터, 대학생신재생에너지기자단과 업무협약 체결", en: "Seoul Energy Dream Center Signs Partnership with Student Renewable Energy Reporters" },
      detail: { ko: "기자단 단장으로 협약 체결", en: "Signed the agreement as head of the reporters' corps" },
      tags: ["energy"],
      url: "https://www.electimes.com/news/articleView.html?idxno=352592",
      also: [
        { label: { ko: "투데이에너지", en: "TodayEnergy" },      url: "https://www.todayenergy.kr/news/articleView.html?idxno=281215" },
        { label: { ko: "에너지플랫폼뉴스", en: "Energy Platform News" }, url: "https://www.e-platform.net/news/articleView.html?idxno=92322" },
        { label: { ko: "전기신문 (후속)", en: "Electimes (follow-up)" }, url: "https://www.electimes.com/news/articleView.html?idxno=352613" },
        { label: { ko: "에너지신문", en: "Energy News" },        url: "https://www.energy-news.co.kr/news/articleView.html?idxno=212162" }
      ]
    }
  ],

  /* ── 기자단 기사 (대학생신재생에너지기자단 R.E.F) ─────────────
     co: true 는 공동 작성. 링크가 있으면 url: "https://..." 추가 */
  refIntro: {
    ko: "대학생신재생에너지기자단(R.E.F) 23기 기자로 활동하며 2023년 3월부터 기후·에너지·물 분야 기사 79건을 작성했습니다. 도시침수, Water Risk(수자원 리스크), ENERGY NEXUS 시리즈를 기획했습니다.",
    en: "As a reporter (cohort 23) with the Renewable Energy Followers (R.E.F), I have written 79 articles on climate, energy and water since March 2023, including the Urban Flooding, Water Risk and ENERGY NEXUS series. Articles are in Korean."
  },
  refCats: [
    { id: "water",   name: { ko: "물·도시침수",      en: "Water & flooding" } },
    { id: "climate", name: { ko: "기후정책·탄소시장·ESG", en: "Climate policy, carbon & ESG" } },
    { id: "energy",  name: { ko: "에너지·수소",       en: "Energy & hydrogen" } },
    { id: "env",     name: { ko: "자원순환·생태",     en: "Circularity & ecology" } },
    { id: "expo",    name: { ko: "박람회·행사 취재",  en: "Expos & events" } }
  ],
  refArticles: [
    { date: "2023-03-06", cat: "climate", co: true, title: "트렌드에 맞게 변화하는 ESG, 이제는 필수로!" },
    { date: "2023-03-19", cat: "env", co: true, title: "팜유와 습지는 공존할 수 없는 걸까?" },
    { date: "2023-04-25", cat: "expo", co: false, title: "[2023 국제그린에너지엑스포 후기] 스코트라, 수상태양광의 기준이 되다" },
    { date: "2023-04-28", cat: "expo", co: true, title: "[2023 국제그린에너지엑스포 후기] H2MI, 수소의 모든 것" },
    { date: "2023-05-29", cat: "water", co: false, title: "[취재] 생태하천복원의 명(明)과 암(暗)" },
    { date: "2023-07-24", cat: "env", co: true, title: "도로에 미세플라스틱 뿌리는 전기 자동차" },
    { date: "2023-07-30", cat: "env", co: false, title: "[취재] 지하철만 타면 답답한 이유" },
    { date: "2023-08-31", cat: "water", co: false, title: "[취재][도시침수 시리즈 1] 내가 사는 곳도 침수될까? 홍수위험지도로 알아보는 침수위험지역", url: "https://renewableenergyfollowers.org/reporting/?idx=168619973&bmode=view" },
    { date: "2023-09-03", cat: "climate", co: true, title: "지구가 열받은 만큼의 대가, 누가 죄인인가" },
    { date: "2023-09-05", cat: "expo", co: false, title: "[ENTECH 후기] 도시화와 기후변화로 발생한 문제를 해결한다, 한국그린인프라·저영향개발센터" },
    { date: "2023-09-05", cat: "expo", co: true, title: "[ENTECH 후기] 스마트에너지플랫폼 구축사업(동아대학교 & 울산테크노파크)" },
    { date: "2023-10-03", cat: "water", co: false, title: "[취재][도시침수 시리즈 2] 부산은 과연 도시침수로부터 안전한가?" },
    { date: "2023-10-31", cat: "env", co: true, title: "[취재] 땅 파서 100원? 난 쓰레기 주워서 150원!" },
    { date: "2023-11-15", cat: "expo", co: false, title: "[2023 GreenEnerTEC 후기] 제10회 국제기후금융·산업컨퍼런스, 그린에너텍에서 열리다" },
    { date: "2023-11-26", cat: "water", co: false, title: "[취재][도시침수 시리즈 3] 부천 심곡천, 도시침수는 막았지만 막지 못한 것이 따로 있다?" },
    { date: "2023-11-28", cat: "env", co: false, title: "[Remake, 취재] 난지도, 쓰레기 매립지에서 가을 명소로 거듭나다" },
    { date: "2024-01-31", cat: "water", co: false, title: "[도시침수 시리즈] 20년 걸린 단 하나의 법안, '도시침수방지법'" },
    { date: "2024-01-31", cat: "env", co: false, title: "[취재] 지구도 뜨겁게 하는 핫팩, 이제는 귤껍질로 만들자!" },
    { date: "2024-01-31", cat: "energy", co: true, title: "골든 수소, 세상을 구해 주이소.." },
    { date: "2024-02-29", cat: "climate", co: true, title: "탄소중립 실현을 위한 파괴적 혁신 기술, 기후테크" },
    { date: "2024-04-01", cat: "energy", co: true, title: "[취재] 청정(Clean)수소, 너 정말로 깨끗해?" },
    { date: "2024-04-01", cat: "env", co: true, title: "혈연, 지연, 목(木)연" },
    { date: "2024-05-01", cat: "climate", co: true, title: "[취재] 기후변화 공시 TCFD를 이은, 자연자본 공시 TNFD" },
    { date: "2024-05-01", cat: "climate", co: true, title: "[기후·환경정책 스터디] 보조금 전쟁의 시작, IRA" },
    { date: "2024-05-01", cat: "env", co: true, title: "[취재] 세 살 적 환경 교육, 여든까지 간다" },
    { date: "2024-05-25", cat: "climate", co: true, title: "2% 부족한 한국형 지속가능성 공시기준 초안" },
    { date: "2024-06-05", cat: "climate", co: true, title: "[기후·환경정책 스터디] 탄소배출권, 그게 뭐야?" },
    { date: "2024-06-15", cat: "climate", co: true, title: "탄소배출권의 위기" },
    { date: "2024-06-16", cat: "climate", co: true, title: "[산에 살어리랏다] 검은숲 안의 산림탄소상쇄제도" },
    { date: "2024-07-29", cat: "env", co: true, title: "플라스틱에서 새어 나오는 온실가스" },
    { date: "2024-08", cat: "climate", co: true, title: "[응답하라 2030] 2030년 대한민국, 안녕하신가요?" },
    { date: "2024-08-26", cat: "climate", co: true, title: "환경유해보조금을 줄이지 못하는 이유" },
    { date: "2024-08-26", cat: "water", co: false, title: "[Water Risk: 수자원 리스크] 기후공시 속 수자원 리스크" },
    { date: "2024-09-19", cat: "expo", co: false, title: "[ENTECH 후기] 세계 최초 텀블러 세척기를 만들다, 돌핀" },
    { date: "2024-09-19", cat: "expo", co: true, title: "[ENTECH 후기] 중소기업의 ESG 대응 방안을 찾다" },
    { date: "2024-09-30", cat: "water", co: true, title: "일본의 수자원 리스크 대응 방법은?" },
    { date: "2024-10-24", cat: "water", co: false, title: "[취재] 1년 6개월이 지나, 다시 방문한 '굴포천 생태하천 복원사업' 현장" },
    { date: "2024-11-24", cat: "climate", co: true, title: "[취재] 기후테크 육성을 위한 기후금융 충분한가?" },
    { date: "2024-11-25", cat: "climate", co: true, title: "숨겨진 온실가스의 배출구, '전쟁'" },
    { date: "2024-12-07", cat: "climate", co: true, title: "지침(Directive)과 규정(Regulation), 뭐가 다를까?" },
    { date: "2024-12-07", cat: "climate", co: true, title: "증권사가 배출권 시장에 참여하는 이유" },
    { date: "2024-12-09", cat: "water", co: false, title: "[Water Risk: 수자원 리스크] 기후대응댐이 아니라 환경파괴댐이 될 수 있다" },
    { date: "2025-01-23", cat: "climate", co: true, title: "기후보도가 한국에서 외면받는 이유" },
    { date: "2025-01-25", cat: "climate", co: true, title: "유럽연합은 환경에 진심일까?" },
    { date: "2025-01-27", cat: "energy", co: true, title: "수소경제활성화로드맵부터 청정수소 발전시장까지" },
    { date: "2025-01-27", cat: "water", co: false, title: "[도시침수 시리즈] 여름 장마보다 '가을장마'가 더 무섭다" },
    { date: "2025-02-28", cat: "energy", co: true, title: "[Remake] 바이오매스로 수소를? 친환경 수소 생산의 미래" },
    { date: "2025-03-02", cat: "water", co: false, title: "[취재][Water Risk: 수자원 리스크] 국회물포럼 제28차 토론회 '대체수자원 현안과 미래 발전 방안'" },
    { date: "2025-03-03", cat: "water", co: true, title: "[도시침수 시리즈] 전기차, 도시침수에 안전할까?" },
    { date: "2025-03-04", cat: "water", co: true, title: "[Water Risk: 수자원 리스크] 기후변화는 수력 발전과 에너지 전환을 위협한다" },
    { date: "2025-03-28", cat: "climate", co: true, title: "폭염의 해, 선거의 해: 기후유권자가 선택한 미래는?" },
    { date: "2025-03-31", cat: "water", co: true, title: "[ENERGY NEXUS] 용인 반도체 클러스터의 물 공급 해법은?" },
    { date: "2025-03-31", cat: "env", co: true, title: "[취재] 사라진 혁신, 흔들리는 지속가능성 – 서울혁신파크 철거의 의미를 다시 묻다" },
    { date: "2025-03-31", cat: "water", co: true, title: "[ENERGY NEXUS] 미국으로의 반도체 공장 대이동, 물 공급 체계 흔들릴까?" },
    { date: "2025-04-28", cat: "expo", co: false, title: "[2025 국제그린에너지엑스포 후기] 지속가능한 태양광 발전을 가능하게 하는, 한화큐셀" },
    { date: "2025-04-28", cat: "energy", co: true, title: "[ENERGY NEXUS] 용인 반도체 클러스터의 전력 공급 해법은?" },
    { date: "2025-04-28", cat: "expo", co: false, title: "[2025 국제그린에너지엑스포 후기] 모듈별 실시간 진단으로 스마트 태양광 운영 실현, (주)에스비일렉트릭" },
    { date: "2025-04-28", cat: "expo", co: false, title: "[2025 국제그린에너지엑스포 후기] 그린에너지의 생생한 현장에 방문하다" },
    { date: "2025-04-28", cat: "expo", co: false, title: "[2025 국제그린에너지엑스포 후기] 농업과 태양광의 공존을 이끄는 기술, 파루(PARU SOLAR)" },
    { date: "2025-04-28", cat: "expo", co: false, title: "[2025 국제그린에너지엑스포 후기] PVMI, 태양광마켓 인사이트 현장을 방문하다" },
    { date: "2025-05-26", cat: "energy", co: false, title: "[취재] 제때 반영 못한 연료비, 에너지 공기업 적자 키웠다" },
    { date: "2025-05-26", cat: "env", co: true, title: "[녹색 나들이 시리즈][Intro] 한강 나들이의 유행, 그 속에 숨겨진 이면은?" },
    { date: "2025-05-26", cat: "energy", co: true, title: "[Energy Nexus] 지브리 스타일 이미지 유행, 데이터센터 전력 소비는 괜찮을까?" },
    { date: "2025-05-27", cat: "env", co: true, title: "정보도, 기후도 빠져나간 유심 해킹" },
    { date: "2025-06-25", cat: "env", co: true, title: "[취재][녹색 나들이 시리즈] 한강 다회용기, 친환경을 위해서는 어떻게?" },
    { date: "2025-07-20", cat: "climate", co: true, title: "탄소세와 배출권거래제: 기후위기 대응의 두 해법" },
    { date: "2025-07-21", cat: "water", co: false, title: "[취재][Water Risk: 수자원 리스크] 길 잃은 국가물관리위원회", url: "https://renewableenergyfollowers.org/reporting/?idx=168619990&bmode=view" },
    { date: "2025-08-30", cat: "energy", co: true, title: "재생에너지 시대, 장주기 ESS의 중요성" },
    { date: "2025-09-01", cat: "expo", co: true, title: "[ENTECH] 전기로 세상을 잇다, 효성중공업" },
    { date: "2025-09-14", cat: "water", co: true, title: "[Water Risk: 수자원 리스크] 마른 오봉저수지, 바닥 드러낸 대한민국의 기후 대응" },
    { date: "2025-10-18", cat: "energy", co: false, title: "AI가 촉발한 전력 위기, 해법은 '지능형 분산망'… \"수익 모델과 민간 참여가 관건\"" },
    { date: "2025-10-19", cat: "energy", co: true, title: "[SEP 2025] 한국수력원자력, 혁신형 SMR로 탄소중립 미래를 제시하다" },
    { date: "2025-10-25", cat: "env", co: true, title: "[테라사이클 시리즈] 똑같은 다회용기 사업, 프랑스에서만 통한 이유" },
    { date: "2025-10-27", cat: "energy", co: true, title: "[취재] 청정수소 시장의 보이지 않는 장벽, '인증기준' 통일이 관건이다" },
    { date: "2025-11-24", cat: "env", co: true, title: "[테라사이클 시리즈] 테라사이클 톰 재키 대표 인터뷰 1부, \"왜 재사용인가?\"" },
    { date: "2025-11-24", cat: "climate", co: true, title: "'탄소중립포인트제도', 국민 참여형 탄소 절감의 첫걸음이 될 수 있을까?" },
    { date: "2025-11-16", cat: "energy", co: false, title: "[SEP Conference] \"AI가 촉발한 전력 위기, 해법은 'AI 오케스트레이션'에 있다\"", url: "https://renewableenergyfollowers.org/etc/?idx=168620006&bmode=view" },
    { date: "2025-11-16", cat: "expo", co: false, title: "미래 에너지 기술의 집약, '스마트에너지플러스 2025' 성황리 폐막", url: "https://renewableenergyfollowers.org/etc/?idx=168620011&bmode=view" },
    { date: "2025-12-22", cat: "climate", co: false, title: "대학생신재생에너지기자단, 목포MBC '2025 기후에너지어워드' 최우수상 수상", url: "https://renewableenergyfollowers.org/notice/?idx=169143837&bmode=view" }
  ],

  /* ── 행사 보고서 (임팩트온) ─────────────────────────────────
     cat : 아래 reportCats 의 id. 링크가 있으면 url: "https://..." 추가 */
  reportsIntro: {
    ko: "임팩트온 인턴 연구원(RA)으로 일하며 기후·에너지·ESG 정책 포럼과 세미나에 참석해 행사 보고서를 작성했습니다. 보고서는 임팩트온 유료 보고서로 발행되었습니다.",
    en: "As a research assistant at ImpactOn, I attended climate, energy and ESG policy forums and seminars and wrote a report on each event. The reports were published as ImpactOn subscription reports."
  },
  reportCats: [
    { id: "climate", name: { ko: "기후정책·국제협상", en: "Climate policy" } },
    { id: "carbon",  name: { ko: "배출권·탄소시장",   en: "Carbon markets" } },
    { id: "esg",     name: { ko: "ESG·공시·공급망",   en: "ESG & disclosure" } },
    { id: "energy",  name: { ko: "에너지·수소",       en: "Energy & hydrogen" } },
    { id: "water",   name: { ko: "물·자연·순환경제",  en: "Water, nature & circularity" } }
  ],
  reports: [
    { date: "2023-10-21", cat: "climate", title: { ko: "기상청-대신경제연구소 공동포럼: 기후정보 활용과 물리적 위험 대응", en: "KMA–Daishin Joint Forum: Using Climate Information to Respond to Physical Risk" } },
    { date: "2023-11-08", cat: "carbon", title: { ko: "배출권거래제와 전력 시장의 역할과 연계방안 세미나", en: "Seminar on Linking the Emissions Trading Scheme and the Power Market" } },
    { date: "2023-12-18", cat: "climate", title: { ko: "COP28 제28차 유엔기후변화협약 당사국총회 결과 공유 대국민 포럼", en: "Public Forum on the Outcomes of COP28" } },
    { date: "2024-01-18", cat: "esg", title: { ko: "산업계 기후 리더십 심포지엄 - 기후공시: 리스크 관리에서 기회 창출까지", en: "Industry Climate Leadership Symposium – Climate Disclosure: From Risk Management to Opportunity" } },
    { date: "2024-01-25", cat: "climate", title: { ko: "2024 기후전망과 전략: 10인과의 대화", en: "2024 Climate Outlook and Strategy: Conversations with Ten Experts" } },
    { date: "2024-02-07", cat: "energy", title: { ko: "제5회 톡톡_Talk, Talk! 탄소중립: CCUS", en: "5th Talk, Talk! Carbon Neutrality: CCUS" } },
    { date: "2024-02-21", cat: "esg", title: { ko: "제11회 ESG ON 세미나", en: "11th ESG ON Seminar" } },
    { date: "2024-02-29", cat: "energy", title: { ko: "청정수소 인증제 종합 설명회", en: "Briefing on the Clean Hydrogen Certification Scheme" } },
    { date: "2024-03-29", cat: "esg", title: { ko: "제22대 총선 기획: 대전환의 시대, ESG 정책 토론회", en: "22nd General Election Special: ESG Policy Debate in an Era of Transition" } },
    { date: "2024-04-29", cat: "water", title: { ko: "자연기반해법의 습지포럼", en: "Wetland Forum on Nature-Based Solutions" } },
    { date: "2024-06-26", cat: "water", title: { ko: "제23차 환경정책심포지엄: UN 플라스틱 국제협약 마지막 단계에서 우리의 대응 전략과 역할은?", en: "23rd Environmental Policy Symposium: Korea's Strategy for the Final Stage of the UN Plastics Treaty" } },
    { date: "2024-06-27", cat: "esg", title: { ko: "ESG 사회적 가치 아카데미 2024 #4", en: "ESG Social Value Academy 2024 #4" } },
    { date: "2024-07-03", cat: "water", title: { ko: "2024 KEI 통합물관리 연구성과보고회: 국민 안전과 환경을 모두 지키는 통합물관리를 향한 여정", en: "2024 KEI Integrated Water Management Research Report" } },
    { date: "2024-07-04", cat: "carbon", title: { ko: "제4차 배출권거래제 기본계획 방향과 시장활성화 방안", en: "Direction of the 4th ETS Master Plan and Market Activation" } },
    { date: "2024-07-12", cat: "energy", title: { ko: "대한민국 수소경제 탄소중립 대국민 포럼", en: "Public Forum on Korea's Hydrogen Economy and Carbon Neutrality" } },
    { date: "2024-07-31", cat: "esg", title: { ko: "2024 상반기 산업계 적응경쟁력 포럼 - 기후 공시의 시작, 대응을 위한 우리의 전략과 역할은?", en: "2024 H1 Industry Adaptation Forum – The Start of Climate Disclosure" } },
    { date: "2024-08-01", cat: "water", title: { ko: "22대 국회, 시민의 일상을 지키기 위한 도시숲 보전 과제", en: "22nd National Assembly: Conserving Urban Forests for Everyday Life" } },
    { date: "2024-09-03", cat: "carbon", title: { ko: "배출권거래제 제4차 계획기간, 유상할당 강화 방안은?", en: "Strengthening Auctioning in the 4th ETS Phase" } },
    { date: "2024-09-26", cat: "climate", title: { ko: "1.5도 목표 달성을 위한 2035 NDC 수립 방향", en: "Setting the 2035 NDC to Meet the 1.5°C Goal" } },
    { date: "2024-09-26", cat: "esg", title: { ko: "EU 공급망 실사지침(CSDDD) 발효에 따른 수출기업 대응방안 설명회", en: "Briefing for Exporters on the EU CSDDD" } },
    { date: "2024-10-10", cat: "carbon", title: { ko: "기후위기에 역행하는 화석연료 보조금, 교통에너지환경세, 배출권거래제, 어떻게 뜯어고칠까?", en: "Reforming Fossil Fuel Subsidies, the Transport-Energy-Environment Tax and the ETS" } },
    { date: "2024-11-01", cat: "climate", title: { ko: "제2회 대한민국 2050 미래전략 포럼 - 기후테크 육성을 위한 기후금융의 역할", en: "2nd Korea 2050 Future Strategy Forum – Climate Finance for Climate Tech" } },
    { date: "2024-12-03", cat: "climate", title: { ko: "COP29 협상 결과 및 향후 대응 과제", en: "COP29 Outcomes and Next Steps" } },
    { date: "2024-12-16", cat: "climate", title: { ko: "기후재난 일상화 시대, 농업재해 보상 방안은?", en: "Compensating Agricultural Losses in an Era of Routine Climate Disasters" } },
    { date: "2025-01-23", cat: "water", title: { ko: "대체수자원 현안과 미래 발전 방안", en: "Alternative Water Resources: Current Issues and Future Directions" } },
    { date: "2025-02-05", cat: "climate", title: { ko: "한국사회 불평등: 기후위기와 불평등", en: "Inequality in Korea: The Climate Crisis and Inequality" } },
    { date: "2025-02-11", cat: "esg", title: { ko: "국내 지속가능성 정보의 재무중요성과 실증분석과 활용방안", en: "Financial Materiality of Sustainability Information in Korea" } },
    { date: "2025-02-13", cat: "water", title: { ko: "순환경제 스타트업 활성화를 위한 제도개선의 과제들", en: "Regulatory Reform for Circular Economy Start-ups" } },
    { date: "2025-02-19", cat: "esg", title: { ko: "제23회 ESG ON 세미나: 글로벌 ESG 투자시장과 K-택소노미 개정 현황", en: "23rd ESG ON Seminar: Global ESG Investment and the K-Taxonomy Revision" } },
    { date: "2025-03-07", cat: "esg", title: { ko: "중소기업 탈탄소 지원방안 간담회", en: "Roundtable on Decarbonisation Support for SMEs" } },
    { date: "2025-03-18", cat: "carbon", title: { ko: "제24회 ESG ON 세미나 - 탄소배출권 거래 및 자발적 탄소시장의 동향과 전망", en: "24th ESG ON Seminar – Trends in Carbon Credit Trading and Voluntary Carbon Markets" } },
    { date: "2025-03-24", cat: "esg", title: { ko: "트럼프 2.0 글로벌 공급망 위기 - 해운물류 분야 대응 전략 세미나", en: "Trump 2.0 Supply Chain Crisis – Strategies for Shipping and Logistics" } },
    { date: "2025-04-02", cat: "carbon", title: { ko: "국제 탄소시장 개막에 따른 우리의 대응 정책토론회", en: "Policy Debate on Korea's Response to the International Carbon Market" } },
    { date: "2025-04-16", cat: "esg", title: { ko: "제25회 ESG ON 세미나 '공급망 ESG 실사는 어떻게 이루어지는가'", en: "25th ESG ON Seminar: How Supply Chain ESG Due Diligence Works" } },
    { date: "2025-04-30", cat: "energy", title: { ko: "에너지 안보 위기 극복을 위한 미래에너지 대응전략", en: "Future Energy Strategies for the Energy Security Crisis" } },
    { date: "2025-05-07", cat: "energy", title: { ko: "격변기 국가에너지정책 방향 및 에너지공기업 역할 강화방안 모색", en: "National Energy Policy and the Role of Energy SOEs in Turbulent Times" } },
    { date: "2025-06-11", cat: "climate", title: { ko: "탄소중립기본법 개정과 국가의 감축 책임 강화: 헌법재판소 판결을 계기로 본 법·제도적 과제", en: "Revising the Carbon Neutrality Act after the Constitutional Court Ruling" } },
    { date: "2025-06-18", cat: "water", title: { ko: "통합물관리 향상을 위한 법제도적 개선 방안", en: "Legal and Institutional Reforms for Integrated Water Management" } }
  ],

  /* ── 수상 ──────────────────────────────────────────────
     pdf : 상장 스캔 파일. awards 폴더에 넣고 "awards/파일이름.pdf" 로 적기 */
  awards: [
    { date: "2026-09-17", title: { ko: "우수발표논문상", en: "Best Presentation Award" },
      org:  { ko: "(사)한국공학교육학회 · 2026 공학교육학술대회", en: "Korean Society for Engineering Education · 2026 Conference" },
      note: { ko: "「가뭄지수 간 시차 상관분석을 통한 가뭄 전파 지연시간 평가」 공동저자", en: "Co-author, drought propagation lag time study" },
      pdf: "awards/2026-09_ksee-best-presentation.pdf" },
    { date: "2026-05-22", title: { ko: "우수발표 논문상 (우수상)", en: "Excellent Presentation Award" },
      org:  { ko: "한국수자원학회 · 2026 학술발표회 대학생논문경진대회", en: "KWRA · 2026 Conference, Student Paper Competition" },
      note: { ko: "「바이오차 기반 수질정화-토양개량 연계 시스템의 구축 및 적용성 평가」 공동저자", en: "Co-author, biochar water purification and soil amendment system" },
      pdf: "awards/2026-05_kwra-excellent-presentation.pdf" },
    { date: "2025-12-19", title: { ko: "2025 기후에너지어워드 기후에너지 보도부문 최우수상", en: "2025 Climate Energy Award, Grand Prize for Reporting" },
      org:  { ko: "목포문화방송", en: "Mokpo MBC" },
      url:  "https://www.mpmbc.co.kr/NewsArticle/1496984",
      note: { ko: "대학생 신재생에너지 기자단 단체 수상 (단장 재임 중), 1년간 200건 이상 보도", en: "Awarded to the Student Renewable Energy Reporters during my term as head, for 200+ stories in a year" },
      pdf: "awards/2025-12_climate-energy-award.pdf" },
    { date: "2025-11-21", title: { ko: "장려상", en: "Encouragement Award" },
      org:  { ko: "물공학회 · 제8회 학술발표회 학부생 캡스톤 세션", en: "Water Engineering Society · 8th Conference, Undergraduate Capstone Session" },
      note: { ko: "「바이오차 기반 수질개선 기술의 복합효과 및 적용성 검토」 주저자", en: "First author, biochar water quality improvement study" },
      pdf: "awards/2025-11_water-engineering-encouragement.pdf" },
    { date: "2025-08-22", title: { ko: "우수논문상", en: "Best Paper Award" },
      org:  { ko: "(사)한국습지학회 국제학술대회 · 동아시아람사르지역센터", en: "Korean Wetlands Society International Conference · Ramsar Regional Centre–East Asia" },
      note: { ko: "「헤도닉 가격모형에 기반한 도심하천복원의 경제적 가치평가」 주저자", en: "First author, hedonic valuation of urban stream restoration" },
      pdf: "awards/2025-08_kws-best-paper-hedonic.pdf" },
    { date: "2025-08-22", title: { ko: "우수논문상", en: "Best Paper Award" },
      org:  { ko: "(사)한국습지학회 국제학술대회 · 동아시아람사르지역센터", en: "Korean Wetlands Society International Conference · Ramsar Regional Centre–East Asia" },
      note: { ko: "「수생태계 복원을 위한 바이오차의 수질개선 효과 분석」 공동저자", en: "Co-author, biochar for aquatic ecosystem restoration" },
      pdf: "awards/2025-08_kws-best-paper-biochar.pdf" }
  ],

  /* ── 자격증 ──────────────────────────────────────────────
     { date: "2025-06", title: { ko: "자격증 이름", en: "Certificate" }, org: { ko: "발급 기관", en: "Issuer" }, pdf: "certs/파일.pdf" } */
  certs: [
  ],

  /* ── 학력 ─── end 를 "" 로 두면 '현재'로 표시됩니다. ───── */
  education: [
    { start: "2026-03", end: "",
      role: { ko: "석사과정 · 스마트시티공학전공", en: "MS, Smart City Engineering" },
      org:  { ko: "인하대학교", en: "Inha University" },
      note: { ko: "세부전공: 수자원 · 환경 · 지형정보", en: "Water resources, environment and geospatial information" } },
    { start: "2020-03", end: "2026-02",
      role: { ko: "학사 · 환경공학과", en: "BS, Environmental Engineering" },
      org:  { ko: "인하대학교", en: "Inha University" } },
    { start: "2017-03", end: "2020-02",
      role: { ko: "졸업", en: "High school diploma" },
      org:  { ko: "삼산고등학교 (인천)", en: "Samsan High School, Incheon" } }
  ],

  /* ── 경력 ─────────────────────────────────────────────── */
  career: [
    { start: "2023-02", end: "2026-02",
      role: { ko: "기자 (23기) · 2024 홍보팀장 · 2025 단장", en: "Reporter (Cohort 23) · PR Team Lead 2024 · Head 2025" },
      org:  { ko: "대학생 신재생에너지 기자단 (R.E.F)", en: "National Student Renewable Energy Reporters (R.E.F)" },
      url:  "https://renewableenergyfollowers.org/" },
    { start: "2023-03", end: "2025-03",
      role: { ko: "인턴 연구원 (RA)", en: "Research Assistant (Intern)" },
      org:  { ko: "임팩트온 (주식회사 더퍼블리카)", en: "ImpactOn (The Publica Inc.)" },
      note: { ko: "기후·에너지·ESG 정책 행사 취재 및 행사 보고서 38건 작성", en: "Covered climate, energy and ESG policy events and wrote 38 event reports" } }
  ],

  /* 태그 이름 번역 */
  tagNames: {
    river:          { ko: "도시하천",       en: "Urban rivers" },
    flood:          { ko: "홍수",           en: "Floods" },
    drought:        { ko: "가뭄",           en: "Drought" },
    waterquality:   { ko: "수질",           en: "Water quality" },
    valuation:      { ko: "경제성 평가",    en: "Economic valuation" },
    sustainability: { ko: "지속가능성",     en: "Sustainability" },
    policy:         { ko: "물관리 정책", en: "Water policy" },
    energy:         { ko: "신재생에너지",   en: "Renewable energy" }
  }
};
