const {launch,BASE,SH}=require('./lib');
const VP=[[390,844],[768,1024],[1024,768],[1366,768],[1920,1080]];
(async()=>{const b=await launch();
const targets={site:BASE+'/gynecomastia-surgery-in-gurgaon',ref:'file:///home/claude/bestdoctorsin-project/13-final/page.html'};
for(const [k,u] of Object.entries(targets)){
 for(const [w,h] of VP){
  const c=await b.newContext({viewport:{width:w,height:h},deviceScaleFactor:1});const p=await c.newPage();
  const fails=[];p.on('requestfailed',r=>fails.push(r.url()));
  p.on('response',r=>{if(r.status()>=400)fails.push(r.status()+' '+r.url())});
  await p.goto(u,{waitUntil:'networkidle'});await p.waitForTimeout(500);
  const m=await p.evaluate(()=>{
   const de=document.documentElement;
   const q=s=>document.querySelector(s);
   const h1=q('h1');const r=e=>{if(!e)return null;const b=e.getBoundingClientRect();return {x:Math.round(b.x),y:Math.round(b.y),w:Math.round(b.width),h:Math.round(b.height),b:Math.round(b.bottom),r:Math.round(b.right)}};
   const logo=[...document.querySelectorAll('header img, header svg, a[href="/"] img')].slice(0,3).map(e=>({tag:e.tagName,src:e.currentSrc||e.getAttribute('src'),nat:e.naturalWidth,...r(e),complete:e.complete}));
   // container widths: find main wide elements
   const secs=[...document.querySelectorAll('main > *, main section, main .container, [class*=wrap],[class*=container]')].slice(0,40).map(e=>({c:(e.className||'').toString().slice(0,30),...r(e)}));
   const btns=[...document.querySelectorAll('a,button')].filter(e=>/call|whatsapp|quote|ask|price|get/i.test(e.textContent)).slice(0,8).map(e=>({t:e.textContent.trim().slice(0,30),...r(e)}));
   const price=[...document.querySelectorAll('*')].find(e=>e.children.length===0&&/Rs\s?62,000|₹\s?62,000/.test(e.textContent));
   return {sw:de.scrollWidth,cw:de.clientWidth,bsw:document.body.scrollWidth,h1:r(h1),h1t:h1&&h1.textContent.slice(0,80),logo,secs,btns,price:r(price),priceT:price&&price.textContent.slice(0,40),totalH:de.scrollHeight};
  });
  console.log(JSON.stringify({k,w,h,sideways:m.sw>m.cw,sw:m.sw,cw:m.cw,h1:m.h1,h1t:m.h1t,price:m.price,logo:m.logo,totalH:m.totalH}));
  console.log('  CTAs',JSON.stringify(m.btns.map(x=>[x.t,x.y,x.b])));
  console.log('  fails',fails.slice(0,5));
  await p.screenshot({path:`${SH}${k}-${w}x${h}-fold.png`});
  if(w==390||w==1366) await p.screenshot({path:`${SH}${k}-${w}-full.png`,fullPage:true});
  await c.close();
 }}
await b.close()})();
