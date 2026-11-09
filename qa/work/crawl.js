const cheerio=require('/home/claude/bestdoctorsin-site/node_modules/cheerio');
const BASE='http://localhost:3100';
(async()=>{
 const seen=new Map();const q=['/'];const out={broken:[],redirects:[],ext:new Set(),badAnchors:[],emptyHref:[],pages:0};
 const idsByPage={};const links={};
 while(q.length){const path=q.shift();if(seen.has(path))continue;
  const r=await fetch(BASE+path,{redirect:'manual'});seen.set(path,r.status);
  if(r.status>=300&&r.status<400){out.redirects.push(path+' -> '+r.status+' '+r.headers.get('location'));continue}
  if(r.status>=400){out.broken.push(path+' '+r.status);continue}
  if(!(r.headers.get('content-type')||'').includes('html'))continue;
  out.pages++;const $=cheerio.load(await r.text());
  idsByPage[path]=new Set($('[id]').map((i,e)=>$(e).attr('id')).get());links[path]=[];
  $('a[href]').each((i,e)=>{const h=$(e).attr('href').trim();links[path].push(h);
   if(h===''||h==='#'){out.emptyHref.push(path+' :: '+$(e).text().trim().slice(0,30));return}
   if(/^(https?:)?\/\//.test(h)){if(!h.startsWith(BASE))out.ext.add(h.split('?')[0]);return}
   if(/^(mailto|tel):/.test(h)){out.ext.add(h);return}
   const [p0,hash]=h.split('#');const target=p0||path;
   if(!target.startsWith('/'))return;
   if(!seen.has(target)&&!q.includes(target))q.push(target);
  });
 }
 // anchors
 for(const [path,hs] of Object.entries(links))for(const h of hs){if(!h.includes('#')||h.endsWith('#'))continue;const [p0,hash]=h.split('#');const t=p0||path;const ids=idsByPage[t];if(ids&&!ids.has(hash))out.badAnchors.push(path+' -> '+h);}
 // also follow redirect targets
 console.log('pages crawled',out.pages,'total visited',seen.size);
 console.log('BROKEN',out.broken);console.log('REDIRECT hrefs',out.redirects);console.log('EMPTY',[...new Set(out.emptyHref)].slice(0,20));console.log('BAD ANCHORS',[...new Set(out.badAnchors)]);console.log('EXTERNAL',[...out.ext]);
 const g=links['/gynecomastia-surgery-in-gurgaon']||[];const ig=g.filter(h=>h.startsWith('/')||h.startsWith('#'));
 console.log('gurgaon: total anchors',g.length,'internal path links',g.filter(h=>h.startsWith('/')).length,'unique internal targets',new Set(g.filter(h=>h.startsWith('/')).map(h=>h.split('#')[0])).size,'hash-only',g.filter(h=>h.startsWith('#')).length);
 require('fs').writeFileSync('crawl.json',JSON.stringify({routes:[...seen.keys()],statuses:[...seen.entries()]},null,1));
})();
