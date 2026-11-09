const {launch,BASE,SH}=require('./lib');
const U=BASE+'/gynecomastia-surgery-in-gurgaon';
const log=(...a)=>console.log(...a);
(async()=>{const b=await launch();
// ---------- DESKTOP MENU
{const c=await b.newContext({viewport:{width:1366,height:768}});const p=await c.newPage();
 const errs=[];p.on('pageerror',e=>errs.push(e.message));p.on('console',m=>{if(m.type()==='error')errs.push(m.text())});
 await p.goto(U,{waitUntil:'networkidle'});
 const li=p.locator('ul[class*=dnav] > li').first();
 await li.hover();await p.waitForTimeout(300);
 const vis=async s=>p.evaluate(s=>{const e=document.querySelector(s);if(!e)return null;const cs=getComputedStyle(e);const r=e.getBoundingClientRect();return cs.visibility+'/'+cs.display+'/'+cs.opacity+' h'+Math.round(r.height)},s);
 log('hover submenu0',await vis('#sub0'));
 await p.screenshot({path:SH+'menu-hover-1366.png'});
 await p.mouse.move(600,500);await p.waitForTimeout(300);log('after leave',await vis('#sub0'));
 // click caret
 const caret=p.locator('button[aria-label="Treatments submenu"]');
 await caret.click();await p.waitForTimeout(200);log('click -> expanded',await caret.getAttribute('aria-expanded'),await vis('#sub0'));
 await p.mouse.move(700,600);await p.waitForTimeout(200);log('after mouse away (click-open)',await caret.getAttribute('aria-expanded'));
 await p.keyboard.press('Escape');await p.waitForTimeout(100);log('escape ->',await caret.getAttribute('aria-expanded'),'focus on caret:',await p.evaluate(()=>document.activeElement.getAttribute('aria-label')));
 // keyboard
 await p.keyboard.press('Enter');log('enter on caret expanded',await caret.getAttribute('aria-expanded'));
 await p.keyboard.press('ArrowDown');log('arrowdown focus',await p.evaluate(()=>document.activeElement.textContent));
 await p.keyboard.press('Escape');log('esc focus',await p.evaluate(()=>document.activeElement.getAttribute('aria-label')));
 // tab through top-level
 await p.focus('a[href="/"]');
 const order=[];for(let i=0;i<14;i++){await p.keyboard.press('Tab');order.push(await p.evaluate(()=>{const a=document.activeElement;return (a.getAttribute('aria-label')||a.textContent||a.tagName).trim().slice(0,25)+'|'+Math.round(a.getBoundingClientRect().height)}))}
 log('tab order',order.join(' > '));
 // Does a menu opened via hover cover H1? check dropdown z
 // click outside
 await caret.click();await p.mouse.click(900,600);await p.waitForTimeout(150);log('click outside ->',await caret.getAttribute('aria-expanded'));
 log('js errs',errs);await c.close();}
// ---------- MOBILE
{const c=await b.newContext({viewport:{width:390,height:844},hasTouch:true,isMobile:true});const p=await c.newPage();
 const errs=[];p.on('pageerror',e=>errs.push(e.message));p.on('console',m=>{if(m.type()==='error')errs.push(m.text())});
 await p.goto(U,{waitUntil:'networkidle'});
 const bar=()=>p.evaluate(()=>{const e=document.getElementById('bar');const r=e.getBoundingClientRect();return {inert:e.hasAttribute('inert'),top:Math.round(r.top),h:Math.round(r.height),vis:getComputedStyle(e).visibility,transform:getComputedStyle(e).transform}});
 log('bar at top',JSON.stringify(await bar()));
 await p.evaluate(()=>window.scrollTo(0,1500));await p.waitForTimeout(500);log('bar after scroll',JSON.stringify(await bar()));
 await p.screenshot({path:SH+'m390-sticky-bar.png'});
 const btns=await p.evaluate(()=>[...document.querySelectorAll('#bar a,#bar button')].map(e=>{const r=e.getBoundingClientRect();return [e.textContent.trim(),Math.round(r.width),Math.round(r.height)]}));log('bar btn sizes',JSON.stringify(btns));
 // does bar cover content at page bottom? footer padding
 await p.evaluate(()=>window.scrollTo(0,document.body.scrollHeight));await p.waitForTimeout(400);
 await p.screenshot({path:SH+'m390-bottom.png'});
 log('bottom bar',JSON.stringify(await bar()));
 await p.evaluate(()=>window.scrollTo(0,0));await p.waitForTimeout(300);
 await p.tap('#burger');await p.waitForTimeout(300);
 log('menu open dialog visible',await p.evaluate(()=>!document.getElementById('mp').hidden),'site inert',await p.evaluate(()=>document.getElementById('site').hasAttribute('inert')),'focus',await p.evaluate(()=>document.activeElement.id));
 await p.screenshot({path:SH+'m390-menu-open.png'});
 await p.keyboard.type('cost');await p.waitForTimeout(200);
 log('search results',await p.evaluate(()=>[...document.querySelectorAll('[class*=sres] a')].map(a=>a.textContent+'->'+a.getAttribute('href'))));
 await p.screenshot({path:SH+'m390-menu-search.png'});
 await p.fill('#mq','zzzz');log('no results text',await p.evaluate(()=>document.querySelector('[class*=nores]')?.textContent));
 await p.fill('#mq','');
 await p.click('[class*=acc] button >> nth=0');log('accordion expanded',await p.evaluate(()=>document.querySelector('[class*=acc] button').getAttribute('aria-expanded')));
 // tab trap
 const foc=[];for(let i=0;i<25;i++){await p.keyboard.press('Tab');foc.push(await p.evaluate(()=>{const e=document.activeElement;return e.closest('#mp')?'in':'OUT:'+e.tagName}))}
 log('focus trap',[...new Set(foc)]);
 await p.keyboard.press('Escape');await p.waitForTimeout(200);
 log('after esc hidden',await p.evaluate(()=>document.getElementById('mp').hidden),'focus returned',await p.evaluate(()=>document.activeElement.id));
 // mobile menu tap targets
 await p.tap('#burger');await p.waitForTimeout(200);
 const small=await p.evaluate(()=>[...document.querySelectorAll('#mp a,#mp button,#mp input')].filter(e=>e.offsetParent).map(e=>{const r=e.getBoundingClientRect();return [e.textContent.trim().slice(0,20)||e.id,Math.round(r.width),Math.round(r.height)]}).filter(x=>x[2]<44||x[1]<44));
 log('menu small targets',JSON.stringify(small));
 await p.keyboard.press('Escape');
 log('errs',errs);await c.close();}
await b.close()})().catch(e=>{console.error(e);process.exit(1)});
