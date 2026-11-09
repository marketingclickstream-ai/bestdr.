const {chromium}=require('/home/claude/bestdoctorsin-site/node_modules/playwright');
(async()=>{const b=await chromium.launch({});const p=await b.newPage();await p.goto('http://localhost:3100/gynecomastia-surgery-in-gurgaon');console.log(await p.title());await b.close()})()
