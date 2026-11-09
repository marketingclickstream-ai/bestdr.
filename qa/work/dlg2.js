const {launch,BASE,SH}=require('./lib');
(async()=>{const b=await launch();
 const c=await b.newContext({viewport:{width:390,height:844},hasTouch:true,isMobile:true});const p=await c.newPage();
 await p.goto(BASE+'/gynecomastia-surgery-in-gurgaon',{waitUntil:'networkidle'});
 await p.locator('button:has-text("Call me back"):visible').first().tap();await p.waitForTimeout(500);
 console.log(JSON.stringify(await p.evaluate(()=>{const d=document.querySelector('dialog');const r=d.getBoundingClientRect();return {open:d.open,h:Math.round(r.height),top:Math.round(r.top),w:Math.round(r.width),vh:innerHeight,active:document.activeElement.name,sy:scrollY,docOverflow:getComputedStyle(document.documentElement).overflow}})));
 await p.screenshot({path:SH+'dialog-390.png'});
 // fill invalid and see error visible within dialog w/ keyboard? check submit button visible within viewport
 const sb=await p.locator('dialog button[type=submit]').boundingBox();console.log('submit btn',sb,'inViewport',sb.y+sb.height<=844);
 await p.keyboard.press('Escape');await p.waitForTimeout(300);console.log('closed',!(await p.evaluate(()=>document.querySelector('dialog').open)));
 await b.close()})();
