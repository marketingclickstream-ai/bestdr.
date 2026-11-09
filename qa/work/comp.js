const cheerio=require('/home/claude/bestdoctorsin-site/node_modules/cheerio');
const BASE=process.argv[2]||'http://localhost:3100';
const routes=JSON.parse(require('fs').readFileSync('crawl.json')).routes.concat(['/_not-found','/nope-404']);
const banned=[['best',/\bbest(?!doctorsin|dr)/gi],['guarantee',/guarantee/gi],['safe',/\bsafe(ly|r|st)?\b/gi],['safety',/\bsafety\b/gi],['painless',/painless/gi],['permanent',/permanent/gi],['success rate',/success\s*rate/gi],['lowest price',/lowest\s*price/gi],['cheap',/cheap/gi],['affordable',/affordab/gi],['world-class',/world[- ]class/gi],['discount',/discount/gi],['offer',/\boffer/gi],['100%',/100\s?%/g],['top-rated',/top[- ]rated/gi],['all insurances',/all insurances/gi]];
const src=[['3000+',/3[,]?000\s?\+/],['8000+',/8[,]?000\s?\+/],['99%',/99\s?%/],['97%',/97\s?%/],['4.8',/\b4\.8\b/],['4.9',/\b4\.9\b/],['USFDA',/usfda|fda/i],['scar-free',/scar[- ]?free|scarless/i],['zero recurrence',/zero recurrence/i],['Kalosa',/kalosa/i],['Khare',/khare/i],['VASER/MicroAire/Thermi',/vaser|microaire|thermi/i],['registration no',/registration (no|number|#)|reg\.? no|\bMCI\b|\bNMC\b/i],['phone',/(\+91[\s-]?)?[6-9]\d{9}\b/],['email',/[\w.+-]+@[\w-]+\.[a-z]{2,}/i],['hospital',/hospital/i],['clinic',/clinic/i],['address',/sector \d+|\bdlf\b|golf course|\bmg road\b/i]];
(async()=>{const agg={};const sampleChipPages=[];
for(const r of routes){const res=await fetch(BASE+r);const html=await res.text();
 // visible-ish: strip scripts (but keep ld+json separately), style
 const $=cheerio.load(html);const ld=$('script[type="application/ld+json"]').map((i,e)=>$(e).text()).get().join(' ');
 const attrs=[];$('[alt],[aria-label],[title],meta[content]').each((i,e)=>{['alt','aria-label','title','content'].forEach(a=>{const v=$(e).attr(a);if(v)attrs.push(v)})});
 $('script,style,noscript').remove();const text=$('body').text().replace(/\s+/g,' ');const head=$('head > title').text()+' '+attrs.join(' | ');
 const hay=text+' || '+head+' || '+ld;
 for(const [k,re] of banned){const m=[...hay.matchAll(re)];if(m.length){const ctx=m.slice(0,2).map(x=>hay.slice(Math.max(0,x.index-40),x.index+40));(agg['B:'+k]=agg['B:'+k]||[]).push({r,n:m.length,ctx})}}
 for(const [k,re] of src){const m=hay.match(re);if(m){const i=hay.search(re);(agg['S:'+k]=agg['S:'+k]||[]).push({r,ctx:hay.slice(Math.max(0,i-50),i+50)})}}
}
for(const [k,v] of Object.entries(agg)){console.log('##',k,'pages:',v.length);v.slice(0,4).forEach(x=>console.log('   ',x.r,JSON.stringify(x.ctx)))}
if(!Object.keys(agg).length)console.log('NO HITS');
})();
