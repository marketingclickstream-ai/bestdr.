const {launch,BASE,SH}=require('./lib');
(async()=>{const b=await launch();
for(const [w,h,mob] of [[1366,768,false],[390,844,true]]){
 const c=await b.newContext({viewport:{width:w,height:h},hasTouch:mob,isMobile:mob});const p=await c.newPage();
 await p.goto(BASE+'/gynecomastia-surgery-in-gurgaon',{waitUntil:'networkidle'});
 const trig=p.locator('button:has-text("Call me back")').first();await trig.focus();await trig.press('Enter');await p.waitForTimeout(400);
 const st=await p.evaluate(()=>{const d=document.querySelector('dialog');return {open:d?.open,modal:d?.matches(':modal'),active:document.activeElement.tagName+':'+(document.activeElement.name||document.activeElement.id||document.activeElement.textContent.trim().slice(0,20)),bodyOverflow:getComputedStyle(document.body).overflow,labelled:d?.getAttribute('aria-labelledby')||d?.getAttribute('aria-label'),h:Math.round(d?.getBoundingClientRect().height),top:Math.round(d?.getBoundingClientRect().top),vh:innerHeight}});
 console.log(w,'dialog',JSON.stringify(st));await p.screenshot({path:SH+`dialog-${w}.png`});
 const foc=new Set();for(let i=0;i<20;i++){await p.keyboard.press('Tab');foc.add(await p.evaluate(()=>document.activeElement.closest('dialog')?'in':'OUT '+document.activeElement.tagName))}
 console.log(' focus trap',[...foc]);
 await p.keyboard.press('Escape');await p.waitForTimeout(300);
 console.log(' after Esc open?',await p.evaluate(()=>document.querySelector('dialog')?.open),'focus ->',await p.evaluate(()=>document.activeElement.textContent.trim().slice(0,25)));
 await c.close();}
await b.close()})();
