const {launch,BASE,SH}=require('./lib');
(async()=>{const b=await launch();const p=await (await b.newContext({viewport:{width:1366,height:900}})).newPage();
await p.goto(BASE+'/gynecomastia-surgery-in-gurgaon',{waitUntil:'networkidle'});
for(const [txt,name] of [['Gurgaon range','related-card'],['3 to 7 days','desk-card']]){
 const el=p.locator(`dt:has-text("${txt.split(' ')[0]}")`).filter({hasText:txt}).first();
 const loc=p.locator(`text=${txt}`).first();await loc.scrollIntoViewIfNeeded();
 const info=await loc.evaluate(e=>{let s=e.closest('section');const h=s?.querySelector('h2,h3');return {sec:s?.className||s?.id,h:h?.textContent}});console.log(txt,JSON.stringify(info));
 await p.screenshot({path:SH+'chip-missing-'+name+'.png'});}
await b.close()})();
