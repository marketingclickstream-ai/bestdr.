const {launch,BASE}=require('./lib');
(async()=>{const b=await launch();const out={};
for(const [k,u] of [['ref','file:///home/claude/bestdoctorsin-project/13-final/page.html'],['site',BASE+'/gynecomastia-surgery-in-gurgaon']]){
 const p=await (await b.newContext({viewport:{width:1366,height:768}})).newPage();await p.goto(u,{waitUntil:'networkidle'});
 out[k]=await p.evaluate(()=>[...document.querySelectorAll('h1,h2')].map(h=>h.tagName+' '+h.textContent.trim().slice(0,50)+' @'+Math.round(h.getBoundingClientRect().top+scrollY)));
 const w=await p.evaluate(()=>{const cs=[...document.querySelectorAll('.wrap,[class*=wrap]')].slice(0,3).map(e=>({c:e.className.toString().slice(0,25),mw:getComputedStyle(e).maxWidth,pad:getComputedStyle(e).paddingLeft}));return cs});console.log(k,JSON.stringify(w));
}
console.log('REF');out.ref.forEach(x=>console.log(' ',x));console.log('SITE');out.site.forEach(x=>console.log(' ',x));
await b.close()})();
