const {launch,BASE,SH}=require('./lib');
const U=BASE+'/gynecomastia-surgery-in-gurgaon';
const log=(...a)=>console.log(...a);
(async()=>{const b=await launch();
const c=await b.newContext({viewport:{width:390,height:844},hasTouch:true,isMobile:true});const p=await c.newPage();
const errs=[];p.on('pageerror',e=>errs.push(e.message));p.on('console',m=>{if(m.type()==='error')errs.push(m.text())});
const posts=[];p.on('request',r=>{if(r.url().includes('/api/leads'))posts.push(r.postData())});
await p.goto(U,{waitUntil:'networkidle'});
// forms inventory
log('forms',await p.evaluate(()=>[...document.querySelectorAll('form')].map(f=>f.id||f.className+':'+(f.closest('dialog')?'dialog':'inline')+':'+f.querySelectorAll('input').length)));
// find inline lead form
const sel='form.lf';
log('lf count',await p.locator(sel).count());
// FAQ
const det=await p.evaluate(()=>[...document.querySelectorAll('details')].map(d=>({open:d.open,s:d.querySelector('summary')?.textContent.trim().slice(0,40),h:Math.round(d.querySelector('summary')?.getBoundingClientRect().height||0)})));
log('details',det.length,'open',det.filter(d=>d.open).length,'summary heights <44',det.filter(d=>d.h&&d.h<44).map(d=>d.s+':'+d.h));
// FAQ toggle
const fq=p.locator('details:has(summary)').filter({hasText:'?'}).first();
log('faq0 summary',await fq.locator('summary').textContent());
await fq.locator('summary').scrollIntoViewIfNeeded();await fq.locator('summary').click();log('faq open after click',await fq.evaluate(e=>e.open));
await p.keyboard.press('Enter');log('faq after enter',await fq.evaluate(e=>e.open));
await p.keyboard.press('Enter');
// video facades
const vf=await p.locator('[class*=vplay]').count();log('video facades',vf);
if(vf){const v=p.locator('[class*=vplay]').first();await v.scrollIntoViewIfNeeded();
 const reqs=[];p.on('request',r=>{if(/youtube/.test(r.url()))reqs.push(r.url())});
 await v.click();await p.waitForTimeout(400);log('after click iframes',await p.locator('iframe').count(),'msg',(await p.locator('[class*=vmsg]').first().textContent()).slice(0,120),'yt reqs',reqs);
 await p.screenshot({path:SH+'m390-video-open.png'});
 await p.keyboard.press('Enter');await p.waitForTimeout(300);log('close->focus',await p.evaluate(()=>document.activeElement.className||document.activeElement.textContent));}
// quote tick table
const ticks=await p.evaluate(()=>{const cbs=[...document.querySelectorAll('input[type=checkbox]')].map(c=>({id:c.id,name:c.name,lab:(c.closest('label')||document.querySelector(`label[for="${c.id}"]`))?.textContent.trim().slice(0,50),w:Math.round(c.getBoundingClientRect().width),h:Math.round(c.getBoundingClientRect().height)}));return cbs});
log('checkboxes',JSON.stringify(ticks));
// cost checker
await p.locator('#chk').scrollIntoViewIfNeeded();
await p.locator('#chk label:has-text("Small")').click();await p.locator('#chk label:has-text("Same day")').click();await p.click('#chk button[type=submit]');
log('checker result',(await p.locator('#res').textContent()).slice(0,300));
await p.screenshot({path:SH+'m390-checker.png'});
// lead form inline invalid
const f=p.locator('form.lf').first();await f.scrollIntoViewIfNeeded();
await f.locator('button[type=submit]').click();
log('errors empty submit',await f.locator('.err').allTextContents(),'posts',posts.length);
await f.locator('input[name=name]').fill('Ravi');await f.locator('input[name=phone]').fill('1234567890');await f.locator('button[type=submit]').click();
log('bad phone',await f.locator('.err').allTextContents());
await f.locator('input[name=phone]').fill('9876543210');await f.locator('button[type=submit]').click();
log('no consent',await f.locator('.err').allTextContents(),'posts',posts.length);
await p.screenshot({path:SH+'m390-form-errors.png'});
// phone paste with +91
await f.locator('input[name=phone]').fill('+91 98765 43210');log('phone field value after +91 paste',await f.locator('input[name=phone]').inputValue());
await f.locator('input[name=phone]').fill('9876543210');
await f.locator('input[type=checkbox]').check();
log('city default',await f.locator('input[type=radio]:checked').getAttribute('value'));
await f.locator('button[type=submit]').click();await p.waitForTimeout(800);
log('submit posts',posts);log('success msg',await p.locator('.lf .msg').first().textContent().catch(()=>null));
await p.screenshot({path:SH+'m390-form-success.png'});
log('errs',errs);
await c.close();await b.close()})().catch(e=>{console.error(e);process.exit(1)});
