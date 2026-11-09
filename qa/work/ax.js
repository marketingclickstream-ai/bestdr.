const {launch,BASE,SH}=require('./lib');const fs=require('fs');
const axe=fs.readFileSync('axe/node_modules/axe-core/axe.min.js','utf8');
const pages=['/','/gynecomastia-surgery-in-gurgaon','/gynecomastia-surgery','/cost/gynecomastia-surgery','/plastic-surgery-in-gurgaon','/learn/gynecomastia-grades','/videos','/privacy','/gynecomastia-surgery-in-delhi','/contact','/nope'];
(async()=>{const b=await launch();
for(const [w,h,mob] of [[1366,768,false],[390,844,true]]){
 const c=await b.newContext({viewport:{width:w,height:h},colorScheme:'light',hasTouch:mob,isMobile:mob});const p=await c.newPage();
 for(const u of pages){await p.goto(BASE+u,{waitUntil:'networkidle'});await p.addScriptTag({content:axe});
  const r=await p.evaluate(async()=>await axe.run(document,{runOnly:{type:'tag',values:['wcag2a','wcag2aa','wcag21a','wcag21aa','wcag22aa','best-practice']}}));
  console.log(`## ${w} ${u}: violations ${r.violations.length}, incomplete ${r.incomplete.length}`);
  for(const v of r.violations)console.log('  ',v.impact,v.id,v.nodes.length,'|',v.nodes.slice(0,2).map(n=>n.target.join(' ')+' :: '+(n.any[0]?.message||n.all[0]?.message||'').slice(0,110)).join(' || '));
  for(const v of r.incomplete.filter(v=>v.id==='color-contrast'))console.log('   incomplete color-contrast',v.nodes.length,v.nodes.slice(0,3).map(n=>n.target.join(' ')+' '+(n.any[0]?.message||'').slice(0,80)).join(' || '));
 }
 await c.close();}
await b.close()})();
