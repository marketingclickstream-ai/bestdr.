const {launch,BASE,SH}=require('./lib');
const U=BASE+'/gynecomastia-surgery-in-gurgaon';
(async()=>{const b=await launch();
// tap targets mobile
for(const [w,h,mob] of [[390,844,true],[1366,768,false]]){
const c=await b.newContext({viewport:{width:w,height:h},hasTouch:mob,isMobile:mob});const p=await c.newPage();await p.goto(U,{waitUntil:'networkidle'});
const small=await p.evaluate(()=>{const out=[];const els=[...document.querySelectorAll('a[href],button,input:not([type=hidden]),select,textarea,summary,[tabindex]:not([tabindex="-1"])')];
 for(const e of els){const cs=getComputedStyle(e);if(cs.visibility==='hidden'||cs.display==='none')continue;let r=e.getBoundingClientRect();if(!r.width||!r.height)continue;
  // for inputs in labels, use label rect
  let rr=r;if(/checkbox|radio/.test(e.type||'')){const l=e.closest('label');if(l)rr=l.getBoundingClientRect()}
  if(e.closest('.sr,[aria-hidden=true]')&&!e.closest('a'))continue;
  // inline text links in paragraphs are exempt (WCAG 2.5.8) -> flag separately
  const inline=e.tagName==='A'&&cs.display==='inline'&&e.closest('p,li,td,dd,span');
  if((rr.height<44||rr.width<44)){out.push({t:(e.textContent||e.getAttribute('aria-label')||e.type||'').trim().slice(0,35),tag:e.tagName,w:Math.round(rr.width),h:Math.round(rr.height),inline:!!inline})}}
 return out});
const blocking=small.filter(x=>!x.inline);
console.log(`## ${w}: <44px non-inline targets: ${blocking.length}; inline text links <44: ${small.length-blocking.length}`);
console.log(blocking.slice(0,25).map(x=>`${x.tag}:${x.t}:${x.w}x${x.h}`).join(' | '));
await c.close();}
// keyboard walkthrough desktop: focus indicator on every stop
{const c=await b.newContext({viewport:{width:1366,height:768}});const p=await c.newPage();await p.goto(U,{waitUntil:'networkidle'});
 await p.keyboard.press('Tab');const first=await p.evaluate(()=>({t:document.activeElement.textContent.trim(),href:document.activeElement.getAttribute('href'),y:Math.round(document.activeElement.getBoundingClientRect().y)}));console.log('first tab stop',first);
 await p.screenshot({path:SH+'skip-link-focus.png'});
 await p.keyboard.press('Enter');await p.waitForTimeout(200);console.log('after skip activate: focus',await p.evaluate(()=>document.activeElement.tagName+'#'+document.activeElement.id+' '+location.hash),'scrollY',await p.evaluate(()=>scrollY));
 await p.goto(U,{waitUntil:'networkidle'});
 const noFocus=[];let n=0;const seen=new Set();
 for(let i=0;i<260;i++){await p.keyboard.press('Tab');const r=await p.evaluate(()=>{const e=document.activeElement;if(!e||e===document.body)return null;const cs=getComputedStyle(e);const rc=e.getBoundingClientRect();return {k:e.tagName+':'+(e.textContent||e.getAttribute('aria-label')||'').trim().slice(0,28),outline:cs.outlineStyle+' '+cs.outlineWidth+' '+cs.outlineColor,shadow:cs.boxShadow,vis:rc.width>0&&rc.height>0,inview:rc.bottom>0&&rc.top<innerHeight}});
  if(!r)break;if(seen.has(r.k+i))continue;n++;const has=(r.outline&&!/^none/.test(r.outline)&&!/0px/.test(r.outline))||(r.shadow&&r.shadow!=='none');if(!has)noFocus.push(r.k+' '+r.outline+' / '+r.shadow);if(!r.vis)noFocus.push('INVISIBLE FOCUS '+r.k);}
 console.log('tab stops walked',n,'no visible focus style:',noFocus.length,noFocus.slice(0,12));
 // reduced motion
 await c.close();}
{const c=await b.newContext({viewport:{width:1366,height:768},reducedMotion:'reduce'});const p=await c.newPage();await p.goto(U,{waitUntil:'networkidle'});
 const m=await p.evaluate(()=>{const out=[];for(const e of document.querySelectorAll('*')){const cs=getComputedStyle(e);const td=parseFloat(cs.transitionDuration)||0,ad=parseFloat(cs.animationDuration)||0;if((td>0.01||ad>0.01)&&(cs.animationName!=='none'||cs.transitionProperty!=='all'||td>0.01))out.push(e.tagName+'.'+String(e.className).slice(0,20)+' t='+cs.transitionDuration+' a='+cs.animationName+' '+cs.animationDuration)}return {count:out.length,sample:out.slice(0,6),scrollBehavior:getComputedStyle(document.documentElement).scrollBehavior}});console.log('reduced-motion residual transitions/animations',JSON.stringify(m));await c.close();}
await b.close()})();
