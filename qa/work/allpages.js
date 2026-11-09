const {launch,BASE,SH}=require('./lib');
const routes=JSON.parse(require('fs').readFileSync('crawl.json')).routes;
(async()=>{const b=await launch();const bad=[];
for(const [w,h] of [[320,640],[390,844],[768,1024],[1366,768],[1920,1080]]){
 const c=await b.newContext({viewport:{width:w,height:h}});const p=await c.newPage();let errs=[];
 p.on('pageerror',e=>errs.push('pageerror '+e.message));p.on('console',m=>{if(m.type()==='error'||m.type()==='warning')errs.push(m.type()+' '+m.text().slice(0,120))});p.on('requestfailed',r=>errs.push('reqfail '+r.url()));p.on('response',r=>{if(r.status()>=400)errs.push(r.status()+' '+r.url())});
 let over=[];for(const r of routes){errs=[];await p.goto(BASE+r,{waitUntil:'networkidle'});
  const m=await p.evaluate(()=>{const de=document.documentElement;const wide=[...document.querySelectorAll('body *')].filter(e=>{const r=e.getBoundingClientRect();return r.right>de.clientWidth+1&&r.width>0&&getComputedStyle(e).position!=='fixed'&&!e.closest('[class*=scroll],.tw,table')}).slice(0,2).map(e=>e.tagName+'.'+String(e.className).slice(0,25));return {sw:de.scrollWidth,cw:de.clientWidth,wide,imgbroken:[...document.images].filter(i=>i.complete&&i.naturalWidth===0).map(i=>i.src)}});
  if(m.sw>m.cw)over.push(`${r} sw=${m.sw}>${m.cw} ${m.wide}`);if(m.imgbroken.length)over.push(r+' broken img '+m.imgbroken);if(errs.length)over.push(r+' errs '+errs.slice(0,3).join(' ; '));}
 console.log(`## ${w}px: ${over.length} issues`);over.forEach(x=>console.log('  ',x));await c.close();}
await b.close()})();
