/* 이력서 PDF 생성기: node tools/build-cv.js  →  cv-ko.pdf, cv-en.pdf
   content.js 의 내용을 그대로 읽어 이력서를 만듭니다. */
const fs = require('fs'), path = require('path');
const { chromium } = require('playwright');
const ROOT = path.join(__dirname, '..');
global.window = {};
eval(fs.readFileSync(path.join(ROOT, 'content.js'), 'utf8'));
const P = window.PORTFOLIO;

const L = {
  ko: { cv:'이력서', interests:'연구 분야', edu:'학력', career:'경력', papers:'학술지 논문', talks:'학술대회 발표',
        awards:'수상', certs:'자격증', media:'기사 및 언론 활동', written:'기자단 기사 (대학생신재생에너지기자단)', press:'언론 보도',
        reports:'행사 보고서 작성 (임팩트온)', now:'현재', oral:'구두', poster:'포스터', updated:'최종 수정',
        reportsNote:n=>`기후·에너지·ESG 정책 포럼 및 세미나 ${n}건 참석, 행사 보고서 작성 (유료 보고서로 발행)`,
        site:'홈페이지' },
  en: { cv:'Curriculum Vitae', interests:'Research interests', edu:'Education', career:'Experience', papers:'Journal articles', talks:'Conference presentations',
        awards:'Awards', certs:'Certifications', media:'Writing & media', written:'Reporting (Renewable Energy Followers, in Korean)', press:'Press coverage',
        reports:'Event reports (ImpactOn)', now:'Present', oral:'Oral', poster:'Poster', updated:'Updated',
        reportsNote:n=>`Attended ${n} climate, energy and ESG policy forums and seminars and wrote a report on each (published as subscription reports)`,
        site:'Website' }
};
const INTERESTS = {
  ko: '도시하천 · 물환경 관리, 홍수 피해 산정 및 가뭄 예측, 수질(녹조) 예측, 하천 복원의 경제적 가치 평가, 지속가능성',
  en: 'Urban rivers and water environments; flood damage estimation and drought prediction; water quality (algal bloom) prediction; economic valuation of river restoration; sustainability'
};

function build(lang){
  const u = L[lang];
  const t = v => v == null ? '' : (typeof v === 'object' ? (v[lang] || v.ko || v.en || '') : String(v));
  const esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
  const fmt = d => d ? String(d).replace(/-/g,'.') : '';
  const ym = d => fmt(String(d).slice(0,7));
  const desc = k => (a,b) => String(a[k]) < String(b[k]) ? 1 : -1;
  const venue = id => { const v=(P.venues||[]).find(x=>x.id===id); return v ? t(v.name) : id; };
  const me = s => { let h = esc(s||''); (P.myNames||[]).slice().sort((a,b)=>b.length-a.length).forEach(n=>{ h = h.split(esc(n)).join('\u0000'+esc(n)+'\u0001'); }); return h.replace(/\u0000/g,'<b>').replace(/\u0001/g,'</b>'); };
  const works = (P.works||[]).slice().sort(desc('date'));
  const tl = list => (list||[]).slice().sort(desc('start')).map(c =>
    `<div class="row"><div class="when">${ym(c.start)} – ${c.end?ym(c.end):u.now}</div><div><b>${esc(t(c.role))}</b>, ${esc(t(c.org))}${c.note?`<div class="note">${esc(t(c.note))}</div>`:''}</div></div>`).join('');
  const papers = works.filter(w=>w.type==='paper');
  const talks = works.filter(w=>w.type==='talk');
  const cite = (w,i) => `<li><span class="n">${i}</span><div>${me(t(w.authors))} (${ym(w.date)}). ${esc(t(w.title))}. <i>${esc(venue(w.venue))}</i>${w.detail?', '+esc(t(w.detail)):''}.${w.doi?` doi:${esc(w.doi)}`:''}${w.award?` <span class="aw">${esc(t(w.award))}</span>`:''}</div></li>`;
  const certs = (P.certs||[]).slice().sort(desc('date'));
  const reps = (P.reports||[]).slice().sort(desc('date'));
  const byY = {}; reps.forEach(r => (byY[r.date.slice(0,4)] = byY[r.date.slice(0,4)] || []).push(r));

  return `<!doctype html><html lang="${lang}"><head><meta charset="utf-8"><style>
  @page{size:A4;margin:16mm 16mm 16mm 16mm}
  *{box-sizing:border-box}
  body{margin:0;font:9.6pt/1.55 "Noto Sans CJK KR","Noto Sans",sans-serif;color:#16212A}
  h1{font:700 23pt/1.1 "Noto Serif CJK KR",serif;margin:0;letter-spacing:-.01em}
  .alt{font:500 11pt "Noto Serif CJK KR",serif;color:#5A6870;margin-left:8px}
  .head{display:flex;justify-content:space-between;align-items:flex-end;border-bottom:2px solid #1F6B53;padding-bottom:8px;margin-bottom:6px}
  .role{color:#1F6B53;font-weight:500;margin-top:4px}
  .contact{text-align:right;font-size:8.8pt;color:#384650;line-height:1.6}
  h2{font:700 11pt "Noto Serif CJK KR",serif;color:#1F6B53;margin:16px 0 6px;padding-bottom:3px;border-bottom:1px solid #C9DDD1;break-after:avoid}
  h3{font:600 9.6pt "Noto Sans CJK KR",sans-serif;margin:8px 0 3px;color:#384650}
  .row{display:grid;grid-template-columns:118px 1fr;gap:10px;padding:2px 0;break-inside:avoid}
  .when{color:#5A6870;font-variant-numeric:tabular-nums;font-size:9pt}
  .note{color:#5A6870;font-size:8.8pt}
  ol{list-style:none;margin:0;padding:0}
  ol li{display:grid;grid-template-columns:22px 1fr;gap:4px;padding:2.5px 0;break-inside:avoid}
  .n{color:#5A6870;font-size:8.6pt;padding-top:1px}
  .aw{display:inline-block;font-size:7.8pt;font-weight:600;color:#8A5A1E;border:1px solid #8A5A1E;border-radius:8px;padding:0 6px;margin-left:3px;line-height:1.5}
  .reps{columns:2;column-gap:18px;font-size:8.3pt;line-height:1.45}
  .reps .y{font-weight:700;color:#384650;margin:4px 0 2px;break-after:avoid}
  .reps div.r{break-inside:avoid;padding:1px 0;display:grid;grid-template-columns:40px 1fr;gap:4px}
  .reps .d{color:#5A6870;font-variant-numeric:tabular-nums}
  .small{font-size:8.8pt;color:#5A6870}
  </style></head><body>
  <div class="head"><div><h1>${esc(t(P.name))}<span class="alt">${esc(lang==='ko'?P.name.en:P.name.ko)}</span></h1><div class="role">${esc(t(P.role))}</div></div>
  <div class="contact">${esc(P.email||'')}${P.site?`<br>${esc(P.site)}`:''}</div></div>

  <h2>${u.interests}</h2><div>${esc(INTERESTS[lang])}</div>
  <h2>${u.edu}</h2>${tl(P.education)}
  <h2>${u.career}</h2>${tl(P.career)}
  ${papers.length?`<h2>${u.papers}</h2><ol>${papers.map((w,i)=>cite(w,papers.length-i)).join('')}</ol>`:''}
  ${talks.length?`<h2>${u.talks}</h2><ol>${talks.map((w,i)=>cite(w,talks.length-i)).join('')}</ol>`:''}
  <h2>${u.awards}</h2>${(P.awards||[]).slice().sort(desc('date')).map(a=>`<div class="row"><div class="when">${fmt(a.date)}</div><div><b>${esc(t(a.title))}</b>, ${esc(t(a.org))}${a.note?`<div class="note">${esc(t(a.note))}</div>`:''}</div></div>`).join('')}
  ${certs.length?`<h2>${u.certs}</h2>${certs.map(c=>`<div class="row"><div class="when">${fmt(c.date)}</div><div><b>${esc(t(c.title))}</b>${c.org?`, ${esc(t(c.org))}`:''}${c.note?`<div class="note">${esc(t(c.note))}</div>`:''}</div></div>`).join('')}`:''}
  <h2>${u.media}</h2>
  <h3>${u.written}</h3><p class="small" style="margin:0 0 6px">${esc(t(P.refIntro))}</p>
  <div class="reps">${(()=>{const ra=(P.refArticles||[]).slice().sort(desc('date'));const by={};ra.forEach(r=>(by[r.date.slice(0,4)]=by[r.date.slice(0,4)]||[]).push(r));return Object.keys(by).sort().reverse().map(y=>`<div class="y">${y}</div>`+by[y].map(r=>`<div class="r"><span class="d">${(r.date.slice(5)||'').replace('-','.')}</span><span>${esc(t(r.title))}</span></div>`).join('')).join('');})()}</div>
  <h3>${u.press}</h3>${works.filter(w=>w.type==='press').map(w=>`<div class="row"><div class="when">${fmt(w.date)}</div><div>${esc(t(w.title))} <span class="small">· ${esc(venue(w.venue))}${(w.also||[]).length?' 외 '+w.also.length+'건':''}</span>${w.detail?`<div class="note">${esc(t(w.detail))}</div>`:''}</div></div>`).join('').replace(/ 외 (\d+)건/g, lang==='ko'?' 외 $1건':' + $1 more')}
  ${reps.length?`<h2>${u.reports}</h2><p class="small" style="margin:0 0 6px">${u.reportsNote(reps.length)}</p><div class="reps">${Object.keys(byY).sort().reverse().map(y=>`<div class="y">${y}</div>`+byY[y].map(r=>`<div class="r"><span class="d">${r.date.slice(5).replace('-','.')}</span><span>${esc(t(r.title))}</span></div>`).join('')).join('')}</div>`:''}
  </body></html>`;
}

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const today = new Date().toISOString().slice(0,10).replace(/-/g,'.');
  for (const lang of ['ko','en']) {
    await page.setContent(build(lang), { waitUntil: 'load' });
    await page.pdf({ path: path.join(ROOT, `cv-${lang}.pdf`), format: 'A4', printBackground: true,
      displayHeaderFooter: true, headerTemplate: '<span></span>',
      footerTemplate: `<div style="width:100%;font:7pt sans-serif;color:#8a979e;padding:0 16mm;display:flex;justify-content:space-between"><span>${lang==='ko'?P.name.ko+' · '+L.ko.updated:P.name.en+' · '+L.en.updated} ${today}</span><span><span class="pageNumber"></span> / <span class="totalPages"></span></span></div>`,
      margin: { top:'16mm', bottom:'18mm', left:'16mm', right:'16mm' } });
    console.log('wrote cv-' + lang + '.pdf');
  }
  await browser.close();
})();
