const {chromium}=require('/home/claude/bestdoctorsin-site/node_modules/playwright');
exports.launch=()=>chromium.launch({executablePath:'/usr/bin/google-chrome',args:['--no-sandbox']});
exports.BASE='http://localhost:3100';
exports.SH='/home/claude/bestdoctorsin-site/qa/shots/';
