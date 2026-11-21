// SAMPLE CONTENT, PENDING DOCTOR REVIEW.
// Eight PRP guides for staging. reviewerId "sample-reviewer" is a placeholder: no doctor has reviewed these posts.
// TODO-VERIFY: a registered dermatologist signs off every claim, at least two peer-reviewed papers on PRP for hair are opened
// and named by a person before the evidence post is cited, and every Sources line is opened before production.
// No outcome claims, no approval claims, no session numbers without the reviewer, no brands or devices.
import type { BlogPost } from "@/content/types";

const lines = (s: string): string[] =>
  s
    .trim()
    .split("\n")
    .map((x) => x.trim())
    .filter(Boolean);

const base = {
  treatmentSlug: "prp-treatment",
  reviewerId: "sample-reviewer",
  published: true,
  datePublished: "2026-11-21",
  dateModified: "2026-11-21",
} as const;

export const prpPosts: BlogPost[] = [
  // P1
  {
    ...base,
    slug: "prp-how-it-is-made",
    title: "How PRP is made: blood draw to injection",
    excerpt: "The steps from a small blood sample to platelet-rich plasma, what platelet-rich means, why methods differ, and what to ask a clinic about its process.",
    minutes: 5,
    thumb: 1,
    body: lines(`
[[reviewer]]
Platelet-rich plasma (PRP) is made from a small sample of your own blood. The blood is spun in a centrifuge so the platelet-rich part separates, and that part is then injected or applied to the treatment area. Methods differ between clinics, so ask how yours works. See our [[link: /prp-treatment | PRP treatment overview]].
## What platelet-rich means
Blood contains red cells, white cells, platelets and plasma. Platelets help with clotting and also release signalling substances. PRP is plasma that has more platelets per millilitre than your normal blood. The exact concentration differs between kits and methods, and the ideal concentration is not settled. TODO-VERIFY: reviewer confirms wording.
## Step by step
- A nurse or doctor takes blood from a vein in your arm, usually a small amount in one or more tubes.
- The tubes go into a centrifuge, which spins them to separate the layers.
- The platelet-rich layer is drawn off. Some methods spin the blood twice.
- Some clinics add an activating agent just before use. Others use none.
- The PRP is injected into the treatment area or applied to the skin after needling.
The whole visit often lasts about an hour, including preparation. TODO-VERIFY: reviewer confirms the time.
## Single and double spin
A single-spin system uses one round, and a double-spin system uses two. Neither is proven better for every use. Ask the doctor which they use and why. Do not accept a claim that a particular machine is the only right one.
## Kits and devices
Several kits and machines are sold for PRP. Their regulatory status and quality differ. Ask whether the kit is single use, whether it is sealed, and where it came from. Do not choose a clinic because of a machine name.
## Hygiene and handling
Because PRP uses your own blood, allergy to the product is unlikely. Infection, bruising and pain at the draw and injection sites are possible. Tools and tubes must be clean or single use. Ask how the clinic prevents mix-ups of samples when several patients are treated in a day.
## What it is used for
Doctors use PRP in several areas, including hair thinning, skin and some joint problems. The evidence differs by use. Hair is covered in [[link: /learn/prp-for-hair-loss-evidence | our evidence guide]]. The skin uses are covered in [[link: /learn/prp-for-skin-face-under-eye | the skin guide]].
> PRP is a procedure whose steps vary. Ask for the steps in writing, and ask what each is for.
## Before your visit
Drink water, eat a light meal, and tell the doctor about blood thinners and supplements. Ask whether to avoid anti-inflammatory painkillers beforehand. Do not stop prescribed medicine on your own.
## Cost
The price depends on the kit, the doctor's time, the area and any add-ons such as needling. Ask for the cost of each session and of the plan. See [[link: /cost/prp-treatment | our cost page]].
## Who should wait
Wait if you have a blood disorder, a low platelet count or an infection, if you take blood-thinning medicine that your doctor has not reviewed, or if you are pregnant or breastfeeding. See [[link: /learn/prp-who-should-wait | the full checklist]].
## Questions worth asking
- Which method and kit do you use, and how is it stored and discarded?
- How is my sample labelled?
- How many sessions do you suggest, and why?
[[faq: Is PRP made from my own blood? | Yes. A small sample of your blood is processed and the platelet-rich part is used.]]
[[faq: Does blood draw hurt? | It is a routine needle draw. Many people feel a brief sting. The injections can feel more uncomfortable.]]
[[faq: Is there one correct way to make PRP? | No. Methods differ, and the ideal concentration is not settled.]]
Related reading: [[link: /learn/prp-side-effects | PRP side effects]]. City pages: [[link: /prp-treatment-in-delhi | Delhi]], [[link: /prp-treatment-in-gurgaon | Gurgaon]].
Message us on WhatsApp if you want help preparing questions for a registered doctor.
[[sources: American Academy of Dermatology patient information on hair loss and treatments; peer-reviewed reviews on platelet-rich plasma preparation, to be named after a reviewer opens them. TODO-VERIFY: add verified papers.]]
`),
  },
  // P2
  {
    ...base,
    slug: "prp-for-hair-loss-evidence",
    title: "Does PRP work for hair loss? What the evidence says",
    excerpt: "What studies of PRP for pattern hair thinning tested, why results are mixed, who may see no change, and why a diagnosis comes before any plan.",
    minutes: 6,
    thumb: 2,
    body: lines(`
[[reviewer]]
Evidence on PRP for hair thinning is mixed. Some small studies report more hair in some people with pattern thinning, and others show little change, and the studies use different methods. PRP is not a proven fix and results vary. A doctor should find the cause of the thinning first. See our [[link: /prp-treatment | PRP treatment overview]].
## What studies tested
Most studies looked at men and women with pattern hair thinning, often called androgenetic alopecia. They injected PRP into the scalp in a series of sessions and counted hairs or measured density, usually compared with a placebo or with another treatment. Findings differ in the number of sessions, the PRP method and how outcomes were measured. TODO-VERIFY: reviewer names at least two papers that a person has opened, and sets the exact wording.
## Why results are mixed
- PRP is made in different ways, so one study's PRP may not match another's.
- The number of people studied is often small.
- Follow-up time is often short.
- Hair counts vary with the day and the method.
- People differ in the type and stage of thinning.
This is why a doctor cannot promise a result. If a clinic gives you a percentage, ask which study it comes from.
## Patterns where it has been tried
Doctors have used PRP in early to moderate pattern thinning, and for other types of hair loss in some cases. The evidence is weaker for other causes. Thinning can also come from thyroid problems, low iron, medicines, stress, scalp disease or hormone conditions. Those need their own care. Treating PRP as the answer without a diagnosis risks wasting money and time.
## Who may see no change
People with advanced baldness, where follicles are gone or very small, are less likely to benefit. Someone with a cause that is not addressed may also see little change. A doctor can examine your scalp, ask about family history and order tests if needed. TODO-VERIFY: reviewer confirms wording.
## The place of medical therapy
Doctors usually discuss established medicines first. See [[link: /learn/prp-vs-minoxidil-finasteride | PRP versus minoxidil and finasteride]]. PRP is sometimes suggested in addition to them. When thinning is advanced, a hair transplant may be discussed, which is covered in the [[link: /hair-transplant | hair transplant guide]].
## What a fair plan looks like
A scalp examination, a named diagnosis, a clear statement that evidence is mixed, a set number of sessions, a review point at which you and the doctor decide whether to continue, and a written total. If the doctor will not talk about the limits, ask someone else.
> Ask what happens if there is no change after the planned sessions.
## Cost
Prices vary with the kit, the doctor's time, the sessions and add-ons. Plan for a series, and add a review. Do not pay for a large prepaid package before you know how you respond. See [[link: /cost/prp-treatment | our cost page]] and [[link: /learn/prp-cost-why-quotes-differ | why quotes differ]].
## Who should wait
Wait if you have a blood disorder or low platelets, active scalp infection, cancer under treatment, or if you are pregnant or breastfeeding. Take medicines for thinning as your doctor says, and ask before stopping any.
## Questions worth asking
- What do you think is causing my thinning?
- What does the evidence say for people like me?
- How will we judge whether it is working, and when do we stop?
[[faq: Does PRP stop hair fall? | Evidence is mixed. Some people see a change, others do not. A doctor should look for the cause of the thinning first.]]
[[faq: Is PRP better than minoxidil? | They are different options. Doctors often start with established medicines, and PRP may be added. Ask your doctor.]]
[[faq: How soon will I know if PRP is working? | It takes months to judge, since hair cycles are slow. Ask your doctor for a review date.]]
Related reading: [[link: /learn/prp-hair-sessions-and-spacing | PRP for hair: sessions and spacing]], [[link: /learn/prp-side-effects | side effects]]. City pages: [[link: /prp-treatment-in-lucknow | Lucknow]], [[link: /prp-treatment-in-kanpur | Kanpur]].
Message us on WhatsApp if you want help preparing questions for a registered doctor.
[[sources: American Academy of Dermatology patient information on hair loss; NHS patient information on hair loss; at least two peer-reviewed papers on PRP for pattern hair thinning, to be named after a reviewer opens them. TODO-VERIFY: add verified papers.]]
`),
  },
  // P3
  {
    ...base,
    slug: "prp-hair-sessions-and-spacing",
    title: "PRP for hair: sessions and spacing explained",
    excerpt: "How doctors describe a PRP plan for hair, why the number and gap of sessions vary, what a review checks, and when stopping is reasonable.",
    minutes: 5,
    thumb: 3,
    body: lines(`
[[reviewer]]
There is no fixed number of PRP sessions for hair. Doctors usually describe a series of sessions several weeks apart, followed by a review and possibly maintenance visits. The plan depends on your hair, your doctor and the evidence they rely on. Ask for the plan in writing. See our [[link: /prp-treatment | PRP treatment overview]]. TODO-VERIFY: reviewer sets any numbers.
## Why plans differ
Studies of PRP for hair used different schedules, and no single plan has been agreed. Clinics follow their own habits. A plan may differ for early thinning and for more advanced loss. Ask the doctor what their schedule is based on.
## A typical shape
Doctors often describe:
- A first series of sessions spaced weeks apart.
- A review after the series, to judge change.
- Possible maintenance sessions after that, at longer gaps.
The numbers are set by the doctor. Be wary of a package with a fixed large number of sessions that is paid in full at the start. TODO-VERIFY: reviewer confirms wording.
## Why it takes months to judge
Hair follows a slow cycle. Hairs shed and new ones grow over months, so a change in density is hard to see after one or two sessions. A review at the right time is more useful than weekly checking. Take photos in the same light and angle at each visit.
## What a review checks
The doctor compares photos and may use a close-up scalp exam. They ask about shedding, any new medicines or illness, and side effects. They decide whether to continue, change the plan, or stop. If you cannot see a difference at the review, you can ask to stop.
## When stopping is reasonable
- No change at the agreed review point.
- Side effects that bother you.
- A cause for the thinning has been found that needs another treatment.
- The cost no longer fits your plans.
A good plan has a stopping point from the start.
## Combining with medicines
Doctors often use PRP in addition to prescribed medicines, and the combination is chosen case by case. See [[link: /learn/prp-vs-minoxidil-finasteride | PRP versus minoxidil and finasteride]]. If you stop a medicine, thinning can resume, which is true of the medicines and not of PRP alone.
## Maintenance
Some doctors suggest repeat sessions to keep any gain. Evidence on how long benefit lasts is limited. Ask what the maintenance plan would cost for a year. See [[link: /cost/prp-treatment | the cost page]].
> The most useful question about a plan is what happens if it does not work.
## Practical points
Wear loose clothing and bring a cap if you want to cover the scalp afterwards. Plan sessions when you can avoid heavy exercise for the rest of the day. Ask about washing hair on the day, and about avoiding scalp products for some hours. Follow your doctor's instructions.
## Who should wait
Wait if you have a scalp infection, a blood disorder, low platelets, or if you are pregnant or breastfeeding. Doctors may ask you to pause blood-thinning medicines only if it is appropriate. Do not stop them on your own.
## Questions worth asking
- How many sessions, how far apart, and why?
- When is the review, and what will you check?
- What will a year of this plan cost?
[[faq: How many PRP sessions do I need for hair? | The number is set by your doctor and varies. Ask for the plan and a review point.]]
[[faq: How far apart are the sessions? | Often several weeks. Your doctor decides.]]
[[faq: Do I need maintenance? | Some doctors suggest it. Evidence on how long a benefit lasts is limited.]]
Related reading: [[link: /learn/prp-for-hair-loss-evidence | what the evidence says]], [[link: /learn/prp-side-effects | side effects]]. City pages: [[link: /prp-treatment-in-delhi | Delhi]], [[link: /prp-treatment-in-gurgaon | Gurgaon]].
Message us on WhatsApp if you want help preparing questions for a registered doctor.
[[sources: American Academy of Dermatology patient information on hair loss; NHS patient information on hair loss. TODO-VERIFY: open each page and confirm wording on session plans.]]
`),
  },
  // P4
  {
    ...base,
    slug: "prp-vs-minoxidil-finasteride",
    title: "PRP vs minoxidil vs finasteride for thinning hair",
    excerpt: "What each option is, how it is used, who prescribes it, the main side effects, whether they can be combined, and why finding the cause comes first.",
    minutes: 6,
    thumb: 1,
    body: lines(`
[[reviewer]]
Minoxidil and finasteride are medicines doctors use for pattern hair thinning, and PRP is a procedure that some doctors add. They work in different ways, and a doctor decides which suit you after finding the cause. Minoxidil and finasteride need a doctor's advice, and neither suits everyone. See our [[link: /prp-treatment | PRP treatment overview]].
## Find the cause first
Thinning can come from pattern hair loss, thyroid or iron problems, medicines, stress, scalp disease or hormone conditions. A doctor can examine your scalp and order tests if needed. A plan for the wrong cause wastes time.
## Minoxidil
Minoxidil is applied to the scalp as a liquid or foam, and some doctors prescribe it in other forms. It is used regularly over months. Common effects include scalp irritation and, in some people, increased shedding at first. Unwanted hair on the face can occur. Stopping it usually means thinning returns. Ask your doctor which form suits you. TODO-VERIFY: reviewer confirms wording.
## Finasteride
Finasteride is a prescription tablet used in men with pattern thinning. It affects a hormone involved in the process. Reported side effects include sexual problems and mood changes in some men, and the effect on a pregnancy matters, so women who are or may become pregnant should not handle crushed or broken tablets. It is not used in the same way for women. Your doctor will explain the risks and checks. Only a doctor can prescribe it.
## PRP
PRP is a procedure using your own blood, described in [[link: /learn/prp-how-it-is-made | how PRP is made]]. Evidence is mixed, as set out in [[link: /learn/prp-for-hair-loss-evidence | the evidence guide]]. It is sometimes added to medicines.
## Who prescribes and manages
A dermatologist or a trained physician should prescribe medicines for hair thinning and review progress. Do not buy prescription medicines without a prescription, and do not rely on an online seller. Ask about monitoring and follow-up.
## Can they be combined?
Doctors sometimes combine a medicine with PRP. The decision depends on your hair, your health, your budget and your goals. More treatments do not always mean a better outcome. Ask what each part is for.
## Differences in plain terms
- Minoxidil: applied to the scalp, used daily, and works only while you use it.
- Finasteride: a tablet for men, with specific side effects, taken regularly under a doctor's care.
- PRP: a clinic procedure repeated over several visits, with mixed evidence.
## Side effects to discuss
Ask about scalp irritation, shedding, sexual effects, mood changes and how a pregnancy would change the plan. Report any new symptoms. See [[link: /learn/prp-side-effects | PRP side effects]] for the procedure.
> Medicine and procedure both need a review date. Ask for it at the first visit.
## Cost
Medicines cost money every month, and PRP costs money per session. Work out a yearly total for each option. See [[link: /cost/prp-treatment | the cost page]].
## Who should wait
Pregnant women and those planning pregnancy should talk to a doctor before any of these. Wait on PRP if you have a blood disorder or infection. Tell your doctor about all medicines and liver or heart conditions.
## Questions worth asking
- What is causing my thinning?
- What are the side effects of each option for me?
- How long should I try before we review?
[[faq: Is minoxidil better than PRP? | They are different. Doctors often start with medicines, and PRP may be added. Ask your doctor.]]
[[faq: Can women take finasteride? | It is not used the same way as in men, and it carries pregnancy risks. A doctor decides.]]
[[faq: Do I have to continue minoxidil forever? | Usually the effect lasts only while you use it. Ask your doctor.]]
Related reading: [[link: /learn/hair-transplant-for-women | hair transplant for women]], [[link: /learn/hair-transplant-shock-loss | shock loss after a transplant]]. City pages: [[link: /prp-treatment-in-lucknow | Lucknow]], [[link: /prp-treatment-in-kanpur | Kanpur]].
Message us on WhatsApp if you want help preparing questions for a registered doctor.
[[sources: American Academy of Dermatology patient information on hair loss treatments; NHS patient information on hair loss. TODO-VERIFY: open each page and confirm wording on both medicines.]]
`),
  },
  // P5
  {
    ...base,
    slug: "prp-side-effects",
    title: "PRP side effects: what is common and what is not",
    excerpt: "Common effects of PRP injections such as bruising and swelling, less common problems, red flags, who should wait and when to call the doctor.",
    minutes: 5,
    thumb: 2,
    body: lines(`
[[reviewer]]
Common effects of PRP are pain at the injection sites, swelling, redness and bruising, which settle over days. Less often, people get headache, infection or an uneven result. PRP uses your own blood, so allergy to it is unlikely, but any needle procedure carries risks. See our [[link: /prp-treatment | PRP treatment overview]].
## Common effects
- Soreness or a tight feeling at the blood draw site and where PRP was injected.
- Swelling and redness for a day or two.
- Small bruises, more likely if you take blood-thinning medicine.
- A mild headache after scalp injections.
- A feeling of numbness or sensitivity in the area for a short time.
TODO-VERIFY: reviewer confirms the durations. Most people go home the same day.
## Less common effects
- Infection at an injection site, with pain, warmth, pus or fever.
- Scarring or nerve injury, which are rare.
- Reactions to numbing cream, an activating agent or needling products.
- An uneven result or lumps in skin treated for texture.
- Fainting at the blood draw.
- Shedding of hairs in some people after scalp treatment, which a doctor can explain.
## Red flags
- Fever, spreading redness, pus or increasing pain.
- Severe swelling or headache that does not settle.
- Vision changes, if treatment was near the eyes.
- Numbness that is spreading.
Call the doctor who treated you or seek urgent care for these signs.
## Who should wait
Wait if you have a blood disorder, low platelets, an infection, cancer under treatment, or a condition that affects clotting. Pregnant and breastfeeding women should check with a doctor first. Tell the doctor about blood thinners and supplements such as fish oil and vitamin E. See [[link: /learn/prp-who-should-wait | who should not have PRP]].
## Lowering the risk
Choose a registered doctor. Ask about single-use kits and how the area is cleaned. Follow instructions on washing, sun and exercise. Do not pick scabs. Report anything that worries you early.
## When to expect the worst of it
Soreness is usually strongest on the day and the day after. If it is getting worse after the third day instead of easing, call the clinic. Keep a note of when symptoms started, since it helps the doctor judge whether the cause is the procedure or something else.
## What to ask before treatment
- What are the usual and rare risks for me?
- Whom do I call after hours?
- What happens if I get an infection or a reaction, and who bears the cost?
See [[link: /learn/prp-how-it-is-made | how PRP is made]] for the process.
> A procedure with a low risk of serious harm still needs informed consent. Ask for the risks in plain words.
## After the session
Keep the treated area clean, and do not apply makeup or scalp products until the clinic says you can. Avoid touching the area for the first hours. Many doctors ask you to skip heavy exercise and some skin products for a day or so. Follow your own instructions. A cold pack can help with swelling if your doctor agrees. TODO-VERIFY: reviewer confirms the list.
## Cost of problems
Some clinics include a review visit and treatment of minor problems in the price, and some charge for each. Ask whether review visits are included and what happens if you need extra care. See [[link: /cost/prp-treatment | our cost page]].
[[faq: Is PRP painful? | Many people find the injections uncomfortable. Numbing is often used. Sensations vary.]]
[[faq: Can PRP cause an allergic reaction? | Allergy to your own blood is unlikely, but reactions to other products used in the session can happen.]]
[[faq: How long do bruises last? | Often days, and longer in some people. Tell your doctor if they worry you.]]
Related reading: [[link: /learn/prp-for-hair-loss-evidence | what the evidence says]], [[link: /learn/prp-for-skin-face-under-eye | PRP for skin]]. City pages: [[link: /prp-treatment-in-delhi | Delhi]], [[link: /prp-treatment-in-gurgaon | Gurgaon]].
Message us on WhatsApp if you want help preparing questions for a registered doctor.
[[sources: American Academy of Dermatology patient information on hair loss treatments; NHS patient information on injections and aftercare. TODO-VERIFY: open each page and confirm wording.]]
`),
  },
  // P6
  {
    ...base,
    slug: "prp-for-skin-face-under-eye",
    title: "PRP for skin: face, under-eye and scars",
    excerpt: "How doctors describe PRP for facial skin, the area under the eyes and scars, how it pairs with needling, what it does not do, and who should wait.",
    minutes: 6,
    thumb: 3,
    body: lines(`
[[reviewer]]
Doctors use PRP on the face, around the eyes and on some scars. Evidence for these uses is limited and mixed, and results vary. PRP is often combined with micro-needling. It does not remove dark circles caused by pigment or deep scars. A doctor should examine your skin first. See our [[link: /prp-treatment | PRP treatment overview]].
## Facial skin
People ask about PRP for fine lines, texture and dullness. Doctors may inject small amounts in the skin or apply PRP after needling. Studies exist, with mixed findings and different methods. For the broader anti-ageing picture, see [[link: /learn/prp-face-evidence | PRP for the face: what evidence exists]] and the [[link: /anti-aging-treatment | anti-aging overview]].
## Under the eyes
The skin under the eyes is thin, so injections need care. Dark circles have many causes: pigment, shadows from the shape of the face, visible blood vessels, allergy, tiredness and thin skin. PRP may not help all of them, and evidence is limited. A doctor should identify the cause before suggesting any treatment. TODO-VERIFY: reviewer confirms wording on dark circles.
## Scars
Doctors sometimes use PRP with needling for acne scars, with the aim of improving texture. The evidence is limited, and other methods are used more widely. See [[link: /learn/acne-scar-types-treatment | acne scar types and options]]. PRP does not remove scars.
## PRP with micro-needling
Needling creates tiny channels in the skin. PRP is applied after, so it reaches the skin through those channels. Redness and flaking follow for a few days. Needling carries its own risks, including infection and pigment change, and it is a separate procedure with its own cost.
## What PRP does not do
- It does not remove dark circles caused by pigment.
- It does not lift sagging skin or fill deep folds.
- It does not replace sun protection.
- It does not stop ageing.
Ask a doctor what they expect and what that is based on. Be cautious about names such as "vampire" treatments, which are marketing and not medical terms.
## Sessions
Doctors may suggest a series of sessions weeks apart, followed by a review. Skin treated with needling needs time to settle between visits, and sun protection matters throughout. TODO-VERIFY: reviewer sets any range. Ask when you will judge the result and what you would do if there is none. Keep to a sun-protection routine between visits, because irritated skin that is exposed to sun can darken.
## Risks
Bruising, swelling and redness are common, and they can be more visible on thin skin around the eyes. Less often there are infection, pigment change or an uneven result. Risk of a cold sore flare is possible. See [[link: /learn/prp-side-effects | PRP side effects]].
> Name the problem first. A treatment makes sense only if it matches the cause.
## Cost
Prices vary with the kit, the area, whether needling is used and the number of sessions. See [[link: /cost/prp-treatment | the cost page]].
## Who should wait
Wait if you have a blood disorder, an infection, a cold sore, active acne in the area or sunburn, and if you are pregnant or breastfeeding. A tendency to thick scars needs a doctor's advice before needling. See [[link: /learn/prp-who-should-wait | the checklist]].
## Questions worth asking
- What is causing my concern, and is PRP suited to that cause?
- What would you expect and why?
- What is the plan if there is no change?
[[faq: Does PRP help dark circles? | Evidence is limited, and dark circles have many causes. A doctor should identify the cause first.]]
[[faq: Is PRP facial the same as a vampire facial? | The name is a marketing term for PRP with needling. Ask what is actually done.]]
[[faq: Can PRP remove acne scars? | It may help texture a little in some people. It does not remove scars.]]
Related reading: [[link: /learn/prp-how-it-is-made | how PRP is made]]. City pages: [[link: /prp-treatment-in-lucknow | Lucknow]], [[link: /prp-treatment-in-kanpur | Kanpur]].
Message us on WhatsApp if you want help preparing questions for a registered doctor.
[[sources: American Academy of Dermatology patient information on cosmetic procedures; peer-reviewed studies on PRP in facial skin and scars, to be named after a reviewer opens them. TODO-VERIFY: add verified papers.]]
`),
  },
  // P7
  {
    ...base,
    slug: "prp-who-should-wait",
    title: "Who should not have PRP: a checklist",
    excerpt: "Conditions and medicines that may mean waiting or avoiding PRP, the questions a doctor asks, tests that may be needed, and what to tell the clinic.",
    minutes: 5,
    thumb: 1,
    body: lines(`
[[reviewer]]
PRP may not suit people with blood disorders, low platelets, some infections, certain cancers, or those taking blood-thinning medicines. Pregnant and breastfeeding women are usually advised to wait. A doctor must check your history before treatment. This list is general, and the reviewer will confirm each item. See our [[link: /prp-treatment | PRP treatment overview]].
## Conditions that call for care
- Blood disorders and low platelet counts, since PRP depends on your platelets.
- Conditions that affect clotting.
- Active skin infection or an open wound at the treatment site.
- Current cancer or a recent diagnosis, unless your treating doctor agrees.
- Fever or a general infection.
- Uncontrolled diabetes, or conditions that slow healing.
- Liver disease, which can affect platelets and clotting.
- A weak immune system.
TODO-VERIFY: reviewer signs off every item.
## Medicines that matter
- Blood thinners, such as tablets or injections that stop clots.
- Anti-inflammatory painkillers, which some doctors ask you to avoid around the time of treatment.
- Steroids, in the area or by mouth.
- Supplements that can affect bleeding, for example fish oil and vitamin E.
Do not stop prescribed medicine on your own. Ask the prescribing doctor first.
## Pregnancy and breastfeeding
Information on PRP in pregnancy is limited. Many doctors advise waiting. Tell the clinic if you may be pregnant. If you are breastfeeding, ask the doctor.
## Habits and recent events
Heavy alcohol use, smoking and a recent illness can affect platelets and healing. Sun exposure or sunburn in the treatment area, and recent procedures such as peels, lasers or other injections, may mean waiting. Ask what gap to leave.
## What a doctor should ask
Your history of bleeding and clotting, your medicines and supplements, allergies, infections, previous procedures, any cancer history and your goals. A clinic that skips these questions gives you a reason to look elsewhere.
## Why the list is long
Each item on this list links to one of two concerns: whether PRP will work as intended when platelets or clotting are affected, and whether the procedure could harm you. A long history form is routine, and your answers help the doctor decide whether to proceed, change the plan or refer you to a specialist first.
## Tests that may be needed
Doctors may advise a blood count or other tests if your history suggests a problem. Do not order tests without a doctor reviewing them. TODO-VERIFY: reviewer confirms wording.
## What to tell the clinic
Bring a list of all medicines, dates of recent procedures and any hospital stays. Mention if you faint at needles. Say if you have had a bad reaction to numbing cream.
> A thorough history takes a few minutes, and it protects you. Ask the clinic to explain why a question matters.
## Cost
A consultation may be charged separately. Ask whether tests are included. See [[link: /cost/prp-treatment | our cost page]].
## Other options
If PRP does not suit you, a doctor can suggest other plans. For hair, see [[link: /learn/prp-vs-minoxidil-finasteride | the medicine comparison]]. For skin, see [[link: /learn/prp-for-skin-face-under-eye | PRP for skin]].
## Questions worth asking
- Is there any reason PRP might not suit me?
- Which of my medicines would you want me to review first?
- What tests, if any, do I need before treatment?
[[faq: Can I have PRP while taking blood thinners? | Only if your doctor has reviewed it. Do not stop the medicine on your own.]]
[[faq: Can PRP be done if I have diabetes? | It depends on how well it is controlled and on the treatment area. A doctor decides.]]
[[faq: Is PRP suitable in pregnancy? | Doctors usually advise waiting, since information is limited.]]
Related reading: [[link: /learn/prp-side-effects | PRP side effects]], [[link: /learn/prp-how-it-is-made | how PRP is made]]. City pages: [[link: /prp-treatment-in-delhi | Delhi]], [[link: /prp-treatment-in-gurgaon | Gurgaon]].
Message us on WhatsApp if you want help preparing questions for a registered doctor.
[[sources: American Academy of Dermatology patient information on hair loss treatments; NHS patient information on blood tests and medicines that affect bleeding. TODO-VERIFY: open each page and confirm wording.]]
`),
  },
  // P8
  {
    ...base,
    slug: "prp-cost-why-quotes-differ",
    title: "PRP cost: why one clinic quotes more than another",
    excerpt: "What makes PRP quotes differ, from the kit and doctor time to add-ons and number of sessions, how to compare quotes line by line, and red flags.",
    minutes: 5,
    thumb: 2,
    body: lines(`
[[reviewer]]
Two PRP quotes can differ because they include different things: the kit used, the doctor's time, add-ons such as needling, the number of sessions and follow-up. Ask for each quote in writing and compare line by line. All figures on our pages are sample data pending confirmed quotes. See our [[link: /cost/prp-treatment | PRP cost page]] and [[link: /prp-treatment | overview]].
## What goes into a quote
- Consultation, and whether it is credited if you proceed.
- The kit and consumables used to make the PRP.
- The doctor's time and who performs the session.
- Numbing cream or other comfort steps.
- Add-ons such as needling or other products.
- The number of sessions in the plan.
- A review visit, and any maintenance sessions.
## Why quotes differ
Kits differ in cost, and clinics differ in how much they spend on equipment and staff. The doctor's training and the city also matter. A quote that looks low may leave out the review or the add-ons. One that looks high may include them.
## A simple formula
Total plan cost = consultation + (price per session x number of sessions) + add-ons + review visits + any maintenance. Ask the clinic to fill in each part. This is a formula only, and we do not state an average. TODO-VERIFY: figures come only from confirmed quotes.
## Prepaid packages
A package of many sessions paid at the start can lower the price per session and lock you in. Ask:
- Can I stop if I see no change or have side effects, and what happens to the unused sessions?
- What is the refund policy, in writing?
- Is the same kit used in each session?
- Is there an expiry on the package?
Be cautious of pressure to pay on the first visit. See [[link: /learn/prp-hair-sessions-and-spacing | sessions and spacing]].
## Questions about the plan itself
Ask how many sessions the doctor suggests and why, when you will review, and what the evidence says for your concern. For hair, see [[link: /learn/prp-for-hair-loss-evidence | the evidence guide]]. A cheaper plan with no review may cost more in the end than a priced plan that stops when it should.
## Red flags
- A price given only by phone.
- A quote that changes on the day.
- A promise of a particular result.
- Refusal to say who performs the session.
- No questions about your health.
- Pressure to buy a large package right away.
## Checking the doctor
Ask who will perform the session, and check the registration on the state medical council register. Doctor time is one of the lines that changes the quote, so ask whether the price depends on who does it.
## Insurance
PRP for cosmetic reasons is usually not covered. Ask your insurer in writing. TODO-VERIFY: reviewer or lawyer confirms wording.
> The clearest quote is one that lists every line and the total.
## Where to find local sample ranges
City pages show sample ranges only when real quotes exist. See [[link: /prp-treatment-in-delhi | Delhi]] and [[link: /prp-treatment-in-gurgaon | Gurgaon]]. Until then, treat any number as unverified, including ours.
## Who should wait
Do not pay for PRP before a doctor has checked whether it suits you. Wait if you have a blood disorder, infection or pregnancy question. See [[link: /learn/prp-who-should-wait | the checklist]].
## Questions worth asking
- What does the total include and leave out?
- What is the exit policy for a package?
- What is the review plan?
[[faq: Why is PRP so expensive in some clinics? | Costs come from the kit, the doctor's time, the setting and add-ons. A higher price does not prove better results.]]
[[faq: Is a package cheaper? | The price per session may be lower, but you commit upfront. Ask about exit and refund terms.]]
[[faq: Is the consultation free? | Policies differ. Ask in writing.]]
Related reading: [[link: /learn/prp-side-effects | PRP side effects]]. More city pages: [[link: /prp-treatment-in-lucknow | Lucknow]], [[link: /prp-treatment-in-kanpur | Kanpur]].
Message us on WhatsApp if you want help preparing questions for a registered doctor.
[[sources: Sources to be added after reviewer sign-off. TODO-VERIFY: a named consumer protection or regulator page, opened and checked.]]
`),
  },
];
