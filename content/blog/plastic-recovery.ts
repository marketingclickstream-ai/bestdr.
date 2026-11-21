// SAMPLE CONTENT, PENDING SURGEON REVIEW. Recovery and planning posts for the plastic surgery pillars.
// `published: true` is set only so the staging site renders them. reviewerId "sample-reviewer" is a placeholder:
// no surgeon has reviewed these posts. See content/blog/README.md for the body markup.
//
// TODO-VERIFY (reviewer): every day and week range below is a typical planning range, not a promise. The reviewer
// must confirm or change each one before production: drain and dressing timings, lifting limits, garment duration,
// splint days, desk-work leave ranges (surgery-leave-planner), time-to-event advice (plastic-surgery-before-a-wedding).
// NEEDS REAL DATA: surgery-season-north-india has no month-by-month temperature or air quality figures yet.
import type { BlogPost } from "@/content/types";

const lines = (s: string): string[] =>
  s
    .trim()
    .split("\n")
    .map((x) => x.trim())
    .filter(Boolean);

const base = {
  reviewerId: "sample-reviewer",
  published: true,
  datePublished: "2026-11-21",
  dateModified: "2026-11-21",
} as const;

export const plasticRecoveryPosts: BlogPost[] = [
  {
    ...base,
    slug: "tummy-tuck-recovery-week-by-week",
    treatmentSlug: "tummy-tuck",
    title: "Tummy tuck recovery week by week in India",
    excerpt: "What the first twelve weeks after a tummy tuck usually look like, with notes on heat, stairs, floor toilets and getting back to work.",
    minutes: 5,
    thumb: 1,
    body: lines(`
[[reviewer]]
Most people spend the first week resting at home, walking a little bent forward, with a garment on and sometimes a drain. Desk work often resumes in two to three weeks and exercise comes back in stages by around week twelve, but your surgeon sets the dates. Our [[link: /tummy-tuck | tummy tuck guide]] explains the operation itself.
## Before you read the weeks
These are common ranges. A mini tummy tuck usually moves faster than a full one, and a tummy tuck combined with other surgery moves slower. Your discharge sheet overrides this page.
## Days 1 to 3: the hospital and the first nights
- You usually stay one night or more, depending on the plan. Ask how many nights your quote covers.
- You will be walking short distances with help within a day, since lying still raises the chance of leg clots.
- Expect a tight, pulling feeling across the belly. Pain medicines are prescribed for this.
- A drain tube may be fitted. Someone at home needs to learn how to empty and note the amount, or the nurse will teach you before discharge.
## Week 1: the home setup matters more than the medicine
Your bed height decides how hard getting up is. A low floor mattress is a real problem in week one, so many families put a firm cot or a raised bed in place before surgery. The same goes for toilets. Squatting on an Indian-style toilet is hard with a tight abdomen, and some people borrow a commode seat or raised seat for the first weeks. Ask your surgeon whether your set-up is workable.
In a hot spell the garment traps sweat. Wear a thin cotton layer beneath it and keep the skin dry to avoid rashes.
## Weeks 2 and 3: standing straighter
- Most people straighten up gradually, and the pulling eases.
- Stairs are possible but slow. If you live on the second floor without a lift, plan for it.
- Many return to desk work in this window, often part-time at first. Long commutes by bus or auto with bumps are tiring, so ask about working from home.
- Bruising fades. Numbness over the lower belly is common and may take months to settle.
## Weeks 4 to 6: more normal, still restricted
Walking longer distances is usually fine. Lifting is the main restriction: shopping bags, a gas cylinder, a toddler, a full bucket. Ask for a weight limit in kilos and a date. Driving a car usually restarts once you can turn and brake without wincing and are off prescription painkillers. Two-wheelers need a longer wait, since a sudden stop strains the belly.
## Weeks 6 to 12: back to exercise in steps
Surgeons usually clear light exercise first, such as walking and gentle stretching, and core work and heavy weights last. Swelling goes down gradually and may come and go through the day, worse in the evening. Scars are red or dark early on and fade over months.
## When to call the surgeon
- Fever, or redness that spreads around the wound.
- One side of the belly swelling more than the other, or tense.
- Calf pain or swelling, or sudden breathlessness (go to emergency care straight away).
- Wound opening or a bad smell.
- Drain output that suddenly increases or turns cloudy.
Save your surgeon's number in the phone of the person staying with you, as well as your own.
## If you travel in from a town
Patients from places such as Unnao, Hardoi, Sitapur or Etawah usually plan to stay near the hospital for the first week or more and return for the drain or stitch review. A long road trip with a drain and a tight abdomen is uncomfortable. Ask when the first review happens and whether a local doctor can see you in between.
## Questions to ask at the consultation
- On which day will the drain come out, and who removes it?
- How many weeks of garment do you advise, and what size will I need?
- What can I lift at week 2, week 4 and week 6?
- How many review visits are in my quote?
Our [[link: /learn/tummy-tuck-compression-garment | compression garment guide]] covers the garment in detail, and the [[link: /learn/surgery-leave-planner | leave planner]] turns the weeks into dates. Price lines are on the [[link: /cost/tummy-tuck | tummy tuck cost page]].
[[faq: Tummy tuck ke baad kitne din tak bed rest chahiye? | Pehle kuch din aaram karna hota hai, par poora din bistar par rehna nahi hota. Surgeon chhote-chhote walk karne ko kehte hain. Din ginti aapke operation ke prakaar par depend karti hai, isliye discharge sheet dekhein.]]
[[faq: Tummy tuck ke baad kitne din mein office ja sakte hain? | Desk ka kaam aksar do se teen hafte mein shuru hota hai, kabhi-kabhi ghar se kaam karke. Yeh range surgeon ki salah se badal sakti hai.]]
[[faq: Surgery ke baad kitne din tak ghar par kisi ki zaroorat hoti hai? | Pehle hafte mein chalne, uthne-baithne aur drain ke liye kisi vayask ki madad chahiye hoti hai. Kai parivar pehle do hafte tak koi na koi saath rakhte hain.]]
[[faq: Garmi mein tummy tuck ke baad kya dikkat hoti hai? | Garment ke neeche paseena aur daane ho sakte hain. Patla sooti kapda neeche pehnein aur skin ko sookha rakhein. Zyada takleef ho to surgeon ko dikhayein.]]
Booking soon? Send us the date you have in mind on WhatsApp, and we will go through your questions with you.
[[sources: NHS patient information on abdominoplasty; American Society of Plastic Surgeons patient information on tummy tuck recovery.]]
`),
  },
  {
    ...base,
    slug: "rhinoplasty-recovery-timeline",
    treatmentSlug: "rhinoplasty",
    title: "Rhinoplasty recovery timeline: day 1 to month 12",
    excerpt: "A dated timeline for nose surgery recovery: splint, bruising, swelling, work, helmets, dust and when the shape settles.",
    minutes: 5,
    thumb: 2,
    body: lines(`
[[reviewer]]
After rhinoplasty the splint usually stays on for about a week, bruising fades over one to two weeks, and most people return to desk work in one to two weeks. Swelling takes much longer: the shape keeps settling for months, and a year is a common wait before judging the result. See the [[link: /rhinoplasty | rhinoplasty guide]] for the operation.
## The timeline in one list
- Day 0: you go home the same day or after one night. The nose is packed or has soft splints inside, and a splint sits outside.
- Days 1 to 3: swelling peaks. Sleeping with your head raised on two or three pillows helps. Mouth breathing is normal.
- Days 5 to 8: the outer splint usually comes off at the first review. The nose looks wide and puffy. This stage alarms people who expected an immediate change.
- Weeks 2 to 3: most bruising is gone. Make-up can usually hide what remains once the surgeon allows it.
- Weeks 4 to 6: many return to light exercise, but contact sports stay off the list.
- Months 3 to 6: the nose looks closer to its shape, but the tip is often still swollen.
- Months 9 to 12: fine changes finish. Thick skin takes the longest.
## What the surgeon tells you not to do
You will be asked not to blow your nose for a period, to sneeze with your mouth open, and not to rest anything on the nose. That includes spectacles, so ask whether to tape them to the forehead or use contact lenses for a few weeks. Sun on a healing nose can leave marks, so use shade and a hat outside.
## Indian details that change the plan
- Two-wheelers and helmets. A full-face helmet presses on the face, and a fall is the main risk. Ask when you can ride again, and whether to be a pillion passenger until then.
- Dust and smog. In Delhi and Gurgaon in the winter months, air quality can be poor. A blocked, healing nose reacts to dust, so ask about saline sprays and masks.
- Colour festivals and crowds. A single knock to the nose during Holi, a rush at a station or a cricket game on the terrace can undo months of waiting. Skip the crowd.
- Head baths and dust at home. Ask when you can wash your hair normally and whether you can cover the splint while bathing.
- Hot weather. Sweat loosens the splint and tape, so keep the dressing dry.
## Going back to work
- Desk job: often one to two weeks. If you have video calls, the splint and bruising may be visible, so plan around them.
- Customer-facing job: bruising may be visible for two weeks or more. Some people take longer leave for this reason.
- Field job or travel: dust and sun exposure are the issue. Ask for a longer break or desk duty.
- Student: tell the college in advance. Exams are better scheduled well away from the dates.
## Swelling and what is normal
Swelling is worse in the morning, after salt-heavy food, in heat, and after bending down. The tip is last to settle. Numbness at the tip is common and fades. If one side swells much more than the other, or you have fever or a bad smell from the nose, call the surgeon.
## Questions to ask
- Will I have packing or soft splints inside, and who removes them?
- When can I wear glasses, ride a two-wheeler and exercise?
- When will you review the shape, and how many reviews does the quote include?
- What happens if I want a small change after the first year?
If you are comparing procedures, the guide on [[link: /learn/rhinoplasty-vs-septoplasty | rhinoplasty and septoplasty]] explains the difference, and [[link: /learn/revision-rhinoplasty | revision rhinoplasty]] covers a second operation. For price lines see the [[link: /cost/rhinoplasty | rhinoplasty cost page]]. If you live in Lucknow or Kanpur, our [[link: /rhinoplasty-in-lucknow | Lucknow]] and [[link: /rhinoplasty-in-kanpur | Kanpur]] pages will list local follow-up when we have confirmed it.
[[faq: Rhinoplasty ke baad kitne din rest karna padta hai? | Aam taur par pehla hafta ghar par aaram hota hai. Desk ka kaam aksar ek se do hafte mein shuru hota hai, par surgeon aapki surgery ke hisaab se tay karte hain.]]
[[faq: Nose surgery ke baad office kab join kar sakte hain? | Bahut log ek se do hafte mein join karte hain. Chehre par neel ya soojan dikhe to kuch log zyada chhutti lete hain.]]
[[faq: Nose surgery ke baad chasma kab pehen sakte hain? | Kuch hafte tak chashme ka bhaar naak par nahi rakhna hota. Surgeon batate hain ki tape ya contact lens use karein ya nahi.]]
[[faq: Naak ka final shape kab dikhta hai? | Soojan dheere-dheere kam hoti hai. Final shape dikhne mein kai mahine lagte hain, aur kabhi-kabhi ek saal tak. Results alag-alag hote hain.]]
[[faq: Bike chalana kab shuru kar sakte hain? | Yeh surgeon se poochhein. Helmet ka dabaav aur girne ka khatra dekh kar woh tarikh batate hain.]]
Want a second pair of eyes on your questions list? Send us a message on WhatsApp.
[[sources: NHS patient information on rhinoplasty; American Society of Plastic Surgeons patient information on rhinoplasty recovery.]]
`),
  },
  {
    ...base,
    slug: "surgery-leave-planner",
    treatmentSlug: null,
    title: "Surgery leave planner: how many days off to plan",
    excerpt: "A step-by-step way to work out your leave for plastic surgery, with planning ranges by operation and how to talk to your employer.",
    minutes: 5,
    thumb: 3,
    body: lines(`
[[reviewer]]
Add up four blocks: days in hospital, days of strict rest at home, days of light activity before you can work, and a buffer. For most desk jobs that comes to between one and four weeks depending on the operation. The ranges below are planning numbers, and your surgeon's advice replaces them. Browse all operations on our [[link: /plastic-surgery | plastic surgery hub]].
## The four blocks
- Block A: hospital days, including the day before if you travel in. Ask your quote how many nights.
- Block B: strict rest at home. Most of this is lying down or walking about the house.
- Block C: light activity. You are up and about, but not ready for a full day at a desk or on your feet.
- Block D: buffer. Add three to five days. Recovery rarely follows the calendar, and a delay at work costs more than an extra day at home.
## Planning ranges by operation
These are typical ranges for a desk job. A job on your feet or with lifting needs longer. TODO-VERIFY with the reviewer before publication.
- Rhinoplasty: about one to two weeks off.
- Eyelid surgery: about one week, longer if bruising shows.
- Breast augmentation: about one week for desk work, longer for lifting.
- Breast reduction: about two to three weeks.
- Tummy tuck: about two to three weeks, often with part-time work at first.
- Liposuction of one area: about one week.
- Mommy makeover or any combined surgery: add one to two weeks to the longest single operation.
## A worked example
Say you work at a bank branch in Lucknow and plan a tummy tuck. Hospital is two days. Strict rest at home is seven days, light activity is another seven, and you add four for the buffer. That is twenty days. Starting on a Monday, that runs close to three weeks, and you can return on a Monday after three weeks while keeping weekends as extra rest. A holiday week inside your leave means fewer leave days needed, so check the calendar.
## Talking to your employer
- Check the leave policy in writing. Casual, earned and medical leave work differently in different workplaces.
- Some employers ask for a medical certificate. Ask the hospital to issue one that states the dates of surgery and rest and does not name the procedure unless you want it named.
- You do not need to explain a cosmetic procedure in detail. Say you have a planned surgery and give the dates.
- Ask whether you can work from home in the second block of days.
## Government and board exam schedules
Students and teachers have a short window. School exam months, practical exams and invigilation duty are hard to move. Choose dates that leave a clear gap before and after. If you are a teacher or a government employee, ask HR about the notice period and rules for planned medical leave.
## Family cover
Many people forget this block. List who will:
- stay with you in the hospital and the first week at home,
- cook and run the house,
- take children to school or look after a baby,
- manage the lifting you cannot do.
Festivals, weddings and guests at home will cut into your rest. Choose a quiet fortnight where you can.
## Travelling in from a smaller town
If you come from a town near Kanpur or Lucknow, add travel days at both ends, and one or two days for the first review before heading home. Overnight trains are tiring just after surgery, and the surgeon may ask you to stay near the hospital until the dressings are checked.
## Planner you can copy
- Surgery date:
- Last working day:
- Hospital days (A):
- Strict rest days (B):
- Light activity days (C):
- Buffer days (D):
- Total leave days:
- First review date:
- Person staying with me:
- Back to work on:
For a week-by-week view see [[link: /learn/tummy-tuck-recovery-week-by-week | tummy tuck recovery]] or [[link: /learn/rhinoplasty-recovery-timeline | rhinoplasty recovery]]. Price lines for your operation are on the [[link: /cost/tummy-tuck | cost pages]].
[[faq: Surgery ke liye kitni chhutti leni chahiye? | Yeh operation par depend karta hai. Nose surgery mein aksar ek se do hafte, tummy tuck mein do se teen hafte. Surgeon ki salah sabse zaroori hai.]]
[[faq: Kya chhutti ke liye medical certificate milta hai? | Aksar hospital certificate deta hai. Aap dates likhwa sakte hain, aur chahein to procedure ka naam na likhne ko keh sakte hain.]]
[[faq: Surgery ke baad kitne din tak ghar par kisi ki zaroorat hoti hai? | Pehle hafte mein kisi ka saath hona achha rehta hai, khaas kar bade operation mein. Surgeon se poochhein ki aapke case mein kitne din.]]
[[faq: Kya main ghar se kaam kar sakta hoon? | Kai log doosre block mein halka kaam ghar se karte hain. Yeh surgeon aur employer dono par depend karta hai.]]
Want to check your dates? Send us your surgery type and month on WhatsApp and we will help you fill the planner.
[[sources: NHS patient information on recovery after surgery; American Society of Plastic Surgeons patient information on recovery planning.]]
`),
  },
  {
    ...base,
    slug: "tummy-tuck-compression-garment",
    treatmentSlug: "tummy-tuck",
    title: "Tummy tuck compression garment: how long and how",
    excerpt: "Why surgeons ask for a compression garment, how many to buy, how to cope with heat and toilets, and what to check in your quote.",
    minutes: 4,
    thumb: 1,
    body: lines(`
[[reviewer]]
A compression garment is a firm, elastic wrap worn over the abdomen after a tummy tuck to reduce swelling and support the healing tissue. Surgeons usually ask for it day and night for the first weeks, then in the daytime for a while longer. The exact number of weeks comes from your surgeon. Our [[link: /tummy-tuck | tummy tuck guide]] covers the operation.
## What the garment does
It presses gently on the operated area. That limits fluid collecting under the skin, supports the belly while you move and makes standing straighter easier. It does not shape the belly or replace the surgery's result. A garment that is too tight is as much of a problem as one that is too loose.
## Sizing and when to buy
Hospitals vary. Some supply the garment at discharge. Others give a size chart and ask you to buy it in advance. Because your belly swells after surgery, sizing from a measurement before surgery may be wrong. Ask:
- Does the hospital supply it, and is it in the quote?
- Which size do you advise, and is a second size needed later?
- Can I exchange it if it does not fit?
## How many garments
Buy or arrange two. One is on while the other is being washed and dried. In the monsoon, drying takes longer, so some people want a third. A single garment worn for days without washing leads to skin irritation and smell.
## Heat, sweat and skin
This is a common worry in north Indian summers and the humid monsoon.
- Wear a thin, soft cotton layer under the garment, and change it daily.
- Keep skin dry. A small amount of surgeon-approved powder can help, but do not apply creams on or near the wound without asking.
- Look for rash, blisters or red marks at the edges. Tell the surgeon at once.
- Take the garment off only as the surgeon allows, even when you feel hot.
## Toilets and daily life
Pick a style with a wide opening or hook fastening at the front and an easy way to use the toilet. A fully pulled-on style may be hard to remove in the first week. If you use an Indian-style toilet, practise sitting and rising before surgery, and keep a stool or raised seat ready if the surgeon allows it.
## What goes wrong
- Rolling at the top or the bottom edge, which digs into the skin.
- Folds under the garment, which press the skin into lines.
- Numb patches that make it hard to feel pressure marks. Check the skin each day with a mirror.
- Wearing a tight waist cincher under the clothes for looks. Ask before using anything else.
## Garment in your quote
Some quotes list a garment under medicines and consumables, others leave it out. A second garment is rarely included. Our [[link: /learn/what-a-surgery-quote-includes | quote checklist]] shows how to read each line, and the [[link: /cost/tummy-tuck | tummy tuck cost page]] lists the usual factors.
## Questions to ask
- How many weeks, day and night, and then how many weeks in the daytime?
- When can I take it off to shower?
- What do I do if it rolls or irritates?
- Do I need any foam or pad under it?
For the full recovery timeline read [[link: /learn/tummy-tuck-recovery-week-by-week | tummy tuck recovery week by week]].
## When the garment looks wrong
A garment that leaves deep marks, causes numbness in the legs or makes breathing hard is too tight. Loosen it only as the surgeon allows, and call the clinic the same day. If a family member washes your garment, ask them to follow the instructions, since hot water and strong detergents can weaken the elastic.
## Trial of fit before the day
If the hospital allows, try the garment's style and closure before surgery so that you know how it opens and closes. Practise getting dressed with one hand holding the belly. Ask a family member to learn the fastenings too, since in the first days someone else may need to help you with the garment and the toilet.
[[faq: Compression garment kitne hafte pehenna padta hai? | Aksar kai hafte, pehle din-raat aur phir sirf din mein. Sahi samay aapke surgeon batate hain.]]
[[faq: Kya garment mein garmi lagti hai? | Haan, garmi aur paseene mein dikkat ho sakti hai. Neeche patla sooti kapda pehnein aur skin ko sookha rakhein.]]
[[faq: Kitne garment kharidne chahiye? | Do rakhna achha hota hai, taki ek dhulte samay doosra pehna ja sake. Barsaat mein kapda der se sookhta hai.]]
[[faq: Garment kya quote mein shamil hota hai? | Kabhi-kabhi hota hai, kabhi nahi. Quote mein ek-ek line poochhein.]]
Send a photo of your quote on WhatsApp and we will point out which lines to ask about.
[[sources: NHS patient information on abdominoplasty aftercare; American Society of Plastic Surgeons patient information on tummy tuck.]]
`),
  },
  {
    ...base,
    slug: "plastic-surgery-before-a-wedding",
    treatmentSlug: null,
    title: "Plastic surgery before a wedding: a countdown plan",
    excerpt: "How far ahead to book surgery before a wedding in India, by operation, plus what to avoid in the last weeks. A countdown list.",
    minutes: 5,
    thumb: 2,
    body: lines(`
[[reviewer]]
Finish surgery as far ahead of the wedding as you can. For most operations, plan to be done at least three to six months before, and longer for a nose. Swelling, bruising and scars keep changing for months, and a wedding week leaves no room for rest. Read our [[link: /plastic-surgery | plastic surgery guide]] for the options.
## Why the date works backwards
A wedding date in India is often fixed months ahead by the family, with muhurat, venue and guest travel booked. The surgery date should be fitted around it. Counting back from the wedding is the surest way to avoid a clash. TODO-VERIFY ranges with the reviewer.
## Countdown by months
- Twelve months before: a nose operation fits here. The shape settles over a year, and you may want a chance to review.
- Six to nine months before: breast surgery, a tummy tuck and other body surgery. You get time for scars to settle and weight to stay steady.
- Three to six months before: smaller operations such as eyelid surgery or ear correction.
- Two to three months before: non-surgical treatments only, and only those that the doctor says will have settled.
- Last four weeks: no new procedures. This is a time for the dentist, the dress fitting and rest.
## What the wedding week asks of your body
Think of the actual events: haldi, mehendi, sangeet, long hours standing, heavy lehenga or sherwani, dance, travel to the venue, and hugging relatives. A healing abdomen or nose is not ready for that. Surgeons set restrictions for weeks on lifting, bending, sun, and knocks to the face.
## Different people, different plans
- Bride or groom: pick the date first, then work backwards. Tell the surgeon the wedding date at the first consultation.
- Sibling or parent: your leave and your duties during the wedding also need planning. Sitting through ceremonies in a heavy outfit is tiring, so the planned rest should be over before the pre-wedding events begin.
- Guest or friend: you are less constrained. Surgery two to three months before is more comfortable than surgery the week before.
## What to avoid in the last weeks
- Surgery or a new procedure within the final weeks.
- Weight loss crash diets before surgery, which can delay healing and change the plan.
- Sun and tanning on fresh scars.
- Buying fitted clothes before your shape has settled. Ask the tailor for alterations late.
- Treating the surgeon's advice as flexible when the family is in a hurry.
## If the date is close
Ask the surgeon three questions: what is the earliest date you would operate for this wedding, what will I look like on the wedding day, and what happens if there is a delay in healing? A surgeon who says no is giving you advice. Compare it with a smaller change, or accept the result you have for now. Our [[link: /learn/surgery-leave-planner | leave planner]] helps you place dates, and [[link: /learn/consultation-checklist | the consultation checklist]] lists what to carry to the first visit.
## Winter wedding season
Many weddings in north India fall in the cooler months, when fog can disrupt trains and flights and smog worsens in Delhi and Gurgaon. Allow a spare day for travel to your review. Our note on [[link: /learn/surgery-season-north-india | choosing a season]] gives more on timing.
## Costs and quotes
Ask for a written quote early. Wedding expenses already stretch most budgets, and a late change in the plan can add costs for a second visit. See the [[link: /cost/rhinoplasty | rhinoplasty cost page]] and [[link: /cost/tummy-tuck | tummy tuck cost page]] for the lines to expect.
[[faq: Shaadi se kitne mahine pehle surgery karwani chahiye? | Aam salah hai ki kam se kam teen se chhe mahine pehle, aur naak ki surgery ke liye isse zyada. Surgeon aapki date dekh kar batate hain.]]
[[faq: Shaadi ke kuch hafte pehle surgery ho sakti hai kya? | Zyadatar surgeon ise tala dene ko kehte hain. Soojan aur nishaan kai mahine tak badalte rehte hain.]]
[[faq: Surgery ke baad haldi ya sangeet mein shaamil ho sakte hain? | Yeh operation aur samay par depend karta hai. Zyada der khade rehna aur naachna shuru mein mana ho sakta hai.]]
[[faq: Kya main apni date surgeon ko pehle bataun? | Haan, pehli mulaqat mein shaadi ki date zaroor bataein. Isse surgeon sahi samay suggest kar paate hain.]]
Planning around a date? Message us the month on WhatsApp and we will help you order your questions.
[[sources: American Society of Plastic Surgeons patient information on planning surgery around events; NHS patient information on cosmetic procedures.]]
`),
  },
  {
    ...base,
    slug: "surgery-season-north-india",
    treatmentSlug: null,
    title: "Choosing a season for surgery in north India",
    excerpt: "How heat, monsoon humidity, winter smog and fog affect recovery in Delhi NCR, Lucknow and Kanpur, as a planning list. Month data pending.",
    minutes: 4,
    thumb: 3,
    body: lines(`
[[reviewer]]
No single season suits everyone in north India. Cooler months ease garment wear and wound care but bring smog and fog. Summer is hard on dressings and garments. The monsoon brings humidity and travel trouble. Pick the season that fits your operation and your travel, and ask your surgeon. See our [[link: /plastic-surgery | plastic surgery hub]].
## Why season matters at all
Surgery itself takes place in an air-conditioned theatre. The season affects the weeks after, when you are at home in a compression garment, with dressings, a limited ability to move and a need to get to review visits.
## Climate facts
NEEDS REAL DATA: month-by-month temperature and rainfall for Delhi, Gurgaon, Lucknow and Kanpur, and air quality by month, will be added from an official source once checked. This page states general patterns only and no figures.
## Season by season
- Summer (the hot months before the monsoon): heat and sweat under garments, a higher chance of rashes and loosened dressings, and power cuts that affect fans and air conditioning. Plan an air-conditioned room.
- Monsoon: humid and damp. Garments and dressings dry slowly, roads flood, and travel to review visits is less certain. Water collecting around the house adds to a sense of risk when you have a drain.
- Post-monsoon (the festival months): milder weather, but a lot of family activity and visitors, plus travel for festivals.
- Winter: comfortable for garment wear. In Delhi NCR, air quality is often poor in the cooler months, which matters for nose surgery, and fog can delay trains and flights.
## By operation
- Nose surgery: dust and smog bother a healing nose. Choose a month with cleaner air, and check the forecast.
- Tummy tuck and body surgery: heat and humidity affect garment comfort. Winter is easier for garments, but cold mornings make getting out of bed harder with a tight abdomen.
- Breast surgery: a supportive bra for weeks, so sweat and rash are the issue.
- Eyelid and ear surgery: dust, sun and wind matter more than temperature.
## Travel factors for people from smaller towns
Fog from December to January can slow trains and roads. If your surgery needs a review at day seven, a delay of a day matters. Book a room near the hospital for a few extra nights. Rural and small-town patients travelling to Delhi or Lucknow should also keep in mind monsoon floods and heat on long bus journeys.
## Work, school and family calendars
Season is a small part of the choice. The bigger part is the calendar:
- Exams and results months for students.
- Your busiest weeks at work, such as year-end or audits.
- Festival and wedding months, when guests make rest difficult.
- Planned travel for your helper or family.
See the [[link: /learn/surgery-leave-planner | leave planner]] for turning this into dates.
## How to decide
- List your operation and the likely number of weeks of garment or dressing.
- Mark the hottest and the smoggiest weeks in your city on a calendar.
- Remove weeks with exams, audits, weddings and festivals.
- Ask your surgeon which of the remaining dates they have free.
- Keep one backup month.
The note on [[link: /learn/plastic-surgery-before-a-wedding | surgery before a wedding]] adds a countdown if a date is fixed. For pricing see the [[link: /cost/tummy-tuck | tummy tuck cost page]].
## When the power goes out
A cut in power for several hours in summer or in the monsoon matters when you are recovering. Ask whether your home has an inverter, how long it runs a fan or cooler, and whether the room can stay cool. If not, consider staying near the hospital for the first days.
[[faq: Garmi mein surgery karwani chahiye ya sardi mein? | Dono mein fayde aur dikkatein hain. Garmi mein garment aur paseene ki dikkat hoti hai, sardi mein dhundh aur pradooshan. Apne surgeon se poochhein.]]
[[faq: Barsaat mein surgery recovery mushkil hoti hai kya? | Namee ke kaaran garment aur patti der se sookhte hain, aur review par jaana mushkil ho sakta hai. Yeh dhyaan mein rakh kar date chunein.]]
[[faq: Delhi ke pradooshan mein naak ki surgery ke baad kya karein? | Dhool aur dhuaan se bachne ke liye surgeon se mask aur saline spray ki salah lein.]]
[[faq: Kohre mein review par kaise aayein? | Ek-do din pehle aakar hospital ke paas ruk jaana aasaan rehta hai. Train aur flight late ho sakti hain.]]
Message us your city and operation on WhatsApp and we will help you shortlist months to discuss with the surgeon.
[[sources: Climate and air quality figures: NEEDS REAL DATA, to be taken from an official source and checked. General guidance: NHS patient information on recovery after surgery.]]
`),
  },
];
