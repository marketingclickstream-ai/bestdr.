// SAMPLE CONTENT, PENDING DOCTOR REVIEW AND LAWYER DECISION.
// Eight botulinum toxin guides for staging. reviewerId "sample-reviewer" is a placeholder: no doctor has reviewed
// these posts. TODO-VERIFY: a registered dermatologist signs off every line against the product leaflet, and a person
// opens each Sources line before production.
// LAWYER: the slug lives in TOXIN_SLUG in content/slugs.ts only (master plan decision 1, Option B). Changing it to "botox-treatment" is a one-line edit there. The common name appears in body text only (first paragraph or one FAQ),
// never in a title, slug, excerpt or anchor. No product names, no unit prices, no doses, no promotions.
import type { BlogPost } from "@/content/types";

import { TOXIN_SLUG } from "@/content/slugs";

const T = TOXIN_SLUG;

const lines = (s: string): string[] =>
  s
    .trim()
    .split("\n")
    .map((x) => x.trim())
    .filter(Boolean);

const base = {
  treatmentSlug: T,
  reviewerId: "sample-reviewer",
  published: true,
  datePublished: "2026-11-21",
  dateModified: "2026-11-21",
} as const;

export const botulinumToxinPosts: BlogPost[] = [
  // B1. TODO-VERIFY: reviewer confirms onset and duration ranges. No unit counts.
  {
    ...base,
    slug: "how-long-wrinkle-injections-last",
    title: "How long do wrinkle injections last?",
    excerpt: "How soon botulinum toxin starts to show, how long the effect usually lasts, what changes it, and why repeat visits are normal.",
    minutes: 5,
    thumb: 1,
    body: lines(`
[[reviewer]]
Botulinum toxin (often called Botox) injections for wrinkles take a few days to show and the effect wears off over a few months. Exact timing varies by person, area and plan, so your doctor gives the range for you. Repeat visits are normal. See our [[link: /${T} | botulinum toxin injections overview]]. TODO-VERIFY: reviewer sets the ranges.
## When it starts to show
The injection relaxes the small muscles that make frown lines and other movement lines. The change builds gradually. Many people notice it within several days, and the full effect often takes about two weeks. TODO-VERIFY: reviewer confirms. Doctors often schedule a review visit around two weeks to check the result.
## How long it lasts
The effect fades over a few months as the muscle recovers. Then the lines usually return to how they were before. Your doctor can tell you what range to expect for your face. Do not accept a fixed promise from a person who has not examined you.
## What changes the duration
- The area treated. Muscles differ in strength and in how much they move.
- Your own muscle strength and how expressive your face is.
- The product prescribed and the plan your doctor chose.
- How you metabolise it, which varies from person to person.
- How often you have it done. Some doctors say repeat treatment is needed to keep the look, and the plan should be discussed at the start.
Heavy exercise, heat and sun are often mentioned online as shortening the effect. The evidence is limited, so ask your doctor what matters for you.
## Why repeat visits happen
Because the effect is temporary, keeping the look means going back. Repeat treatment has a cost each time, and the cost over a year is worth working out before you start. See [[link: /cost/${T} | our cost page]] for the lines to ask about.
## What happens as it wears off
Movement returns slowly. Lines that were relaxed can look the same as before. Some people see no change over time and others find they need less frequent visits. Do not repeat the injection sooner than your doctor advises, because more is not better.
> Repeat treatment is a recurring cost. Ask your doctor to put the visit gap and expected yearly cost in writing.
## Touch-up visits
If the result looks uneven at the review visit, a doctor may adjust. Ask whether a touch-up is included in the price, and what the policy is. Do not assume it is free.
## Planning around events
If you have a wedding, interview or trip coming up, do not schedule the injection in the last days before it. The review visit, the first bruise and any uneven result all need time. Many people book the first treatment well ahead, then plan repeats around their calendar.
## Who should wait
Wait if you are pregnant, planning pregnancy or breastfeeding, if you have an infection at the injection site, or if you have a nerve or muscle condition. A doctor should check your medicines too. See the full list in [[link: /learn/botulinum-toxin-side-effects | the side effects guide]].
## Questions worth asking
- How long should I expect this plan to last for my face?
- When is the review visit, and is a touch-up included?
- What will I spend over a year if I repeat it?
[[faq: Does botulinum toxin last for good? | No. The effect fades over months and the lines return. Your doctor can explain what to expect for your plan.]]
[[faq: Can I have it done more often to make it last? | More frequent treatment does not make it last longer and can raise risks. Follow your doctor's gap.]]
[[faq: Does the effect stop suddenly? | It usually fades gradually over weeks.]]
Related reading: [[link: /learn/aftercare-after-wrinkle-injections | aftercare in the first 24 hours]] and [[link: /learn/botulinum-toxin-vs-fillers | botulinum toxin vs fillers]]. City pages: [[link: /${T}-in-lucknow | Lucknow]], [[link: /${T}-in-kanpur | Kanpur]].
Talk to a doctor about your options. Message us on WhatsApp if you want help preparing questions.
[[sources: American Society of Plastic Surgeons patient information on botulinum toxin; American Academy of Dermatology patient information on botulinum toxin. TODO-VERIFY: open each page and confirm wording.]]
`),
  },
  // B2. TODO-VERIFY: no filler brands; filler regulation to the lawyer.
  {
    ...base,
    slug: "botulinum-toxin-vs-fillers",
    title: "Botulinum toxin vs fillers: what each is for",
    excerpt: "Movement lines versus volume loss, the areas each is used for, how long each lasts, their risks, and the questions to ask before choosing.",
    minutes: 5,
    thumb: 2,
    body: lines(`
[[reviewer]]
Botulinum toxin relaxes the muscles that cause movement lines, such as frown lines. Fillers add volume or fill creases where the skin has lost support. They do different jobs, and many people need only one. A doctor decides after looking at your face. See our [[link: /${T} | botulinum toxin injections overview]].
## What each is for
Botulinum toxin is used where lines appear when you frown, squint or raise your brows. Fillers are used where the face has lost volume or where folds have formed, such as around the mouth or in the cheeks. Neither changes skin quality much, and neither stops ageing. See [[link: /anti-aging-treatment | the anti-aging overview]] for other options.
## Areas
- Botulinum toxin: forehead, between the brows, and around the eyes, in the usual wrinkle uses.
- Fillers: cheeks, lines from the nose to the mouth, lips and the chin, as decided by the doctor.
Both can also be used in other places for other reasons. Those uses are not covered here.
## How long each lasts
Both are temporary. Toxin fades over a few months. Fillers last for a period that depends on the material and area, and a doctor can tell you what to expect. TODO-VERIFY: reviewer confirms ranges. Neither should be described to you as lasting for good.
## Risks of each
- Botulinum toxin: bruising, headache, uneven results, and a drooping eyelid or brow in some people. See [[link: /learn/botulinum-toxin-side-effects | side effects]].
- Fillers: swelling, lumps, bruising and uneven contour. A rare and serious risk is a filler entering a blood vessel, which can damage skin or vision, and needs urgent care. TODO-VERIFY: reviewer confirms wording.
Doctors choose their products and technique to lower these risks, and not every person is a good candidate.
## Combined plans
Some doctors use both in one plan, for example toxin for the forehead and filler for volume. Combining raises the number of injections and the cost. Ask what each part is for and what you would lose by skipping one.
## Regulation
Fillers may be regulated differently from toxin, and the rules for advertising and sale vary. Use a registered doctor and ask them to show you the product pack and batch label. See [[link: /learn/check-wrinkle-injection-product | how to check a product]].
## Cost
Prices differ by area, product and doctor. Toxin is often priced per area, and filler per syringe or amount used, so totals are not easy to compare. Ask for a written plan with a total. See [[link: /cost/${T} | our cost page]] for toxin lines.
> A plan is only as good as the question it answers. Ask what each injection is meant to change.
## Who should wait
Wait if you are pregnant or breastfeeding, if you have an infection near the site, or if you are expecting a result that no injection can deliver. Nerve and muscle conditions affect toxin choices, and bleeding disorders and some medicines affect both.
## Questions worth asking
- Which of my lines are movement lines and which are volume loss?
- What would you do first, and why?
- What are the risks for my face and what do I do if something goes wrong?
[[faq: Which is better, botulinum toxin or fillers? | Neither is better in general. They do different jobs. A doctor can match the option to your face.]]
[[faq: Can I have both on the same day? | Some doctors do this. Ask whether it suits your plan and what it adds to the cost.]]
[[faq: Are fillers reversible? | Some types can be dissolved. Ask your doctor which type is being used and whether it can be reversed.]]
Related reading: [[link: /learn/skin-boosters-vs-fillers-vs-toxin | skin boosters, fillers and toxin compared]], [[link: /learn/wrinkle-injections-for-men | wrinkle injections for men]]. City pages: [[link: /${T}-in-delhi | Delhi]], [[link: /${T}-in-gurgaon | Gurgaon]].
Talk to a doctor about your options. Message us on WhatsApp if you want help preparing questions.
[[sources: American Society of Plastic Surgeons patient information on injectable fillers and botulinum toxin; American Academy of Dermatology patient information on fillers. TODO-VERIFY: open each page and confirm wording.]]
`),
  },
  // B3. TODO-VERIFY: reviewer checks each line against the product leaflet.
  {
    ...base,
    slug: "botulinum-toxin-side-effects",
    title: "Botulinum toxin side effects and what to do",
    excerpt: "Common, uncommon and rare effects of botulinum toxin injections, how they unfold over days, who is at higher risk, and when to call a doctor.",
    minutes: 6,
    thumb: 3,
    body: lines(`
[[reviewer]]
Common effects of botulinum toxin injections are small bumps, redness, bruising and headache, which settle within days. Less often, a brow or eyelid can droop or the result can look uneven. Rare problems such as trouble swallowing or breathing need urgent care. Your doctor and the product leaflet give the full list. See our [[link: /${T} | botulinum toxin injections overview]].
## Common effects
- Small bumps where the needle went in, which settle within hours.
- Redness or tenderness at the sites.
- Bruising, more likely if you take blood-thinning medicines.
- A mild headache, usually brief.
## Less common effects
- A drooping eyelid or brow, caused by the toxin spreading to nearby muscle. It can last weeks and settles as the effect wears off. A doctor can sometimes suggest eye drops for droopy eyelids.
- An uneven result, such as one brow higher than the other. A touch-up may help.
- A frozen or heavy look when too much is used. A conservative plan lowers this risk.
- Dry eyes or watery eyes, in treatment around the eyes.
- Flu-like symptoms in some people.
## Rare and urgent effects
Rarely, the effect can spread beyond the area treated. Warning signs include trouble swallowing, trouble breathing, weakness in distant muscles, hoarse voice or drooping that is widespread. Seek urgent medical help for these. Allergic reactions such as rash, swelling of the lips or face, or difficulty breathing also need emergency care. TODO-VERIFY: reviewer confirms wording against the leaflet.
## How effects unfold over days
Bumps and redness appear within minutes to hours. Bruising may show in a day or two. Headache may come the same day. A drooping eyelid or brow tends to appear days to a couple of weeks later. Review visits at about two weeks let your doctor see the full result.
## Who is at higher risk
- People with nerve or muscle conditions.
- People taking some antibiotics or medicines that affect nerves and muscles. Tell the doctor about all medicines.
- People with infection or skin problems at the injection site.
- Pregnant and breastfeeding women, because information is limited.
- People with thin or weak muscle in the area being treated.
## What to do
Note the time, the symptom and the area. Take photos if it helps. Call the doctor who treated you for anything that worries you. If you cannot reach them, go to a doctor or emergency service. Do not rub the area, and do not try to correct an uneven result yourself.
> Ask before treatment who you should call, and on what number, if something goes wrong after hours.
## Reducing the chance of problems
Choose a registered doctor with relevant training. Ask what product is being used and see the sealed vial. Follow aftercare instructions, described in [[link: /learn/aftercare-after-wrinkle-injections | our aftercare guide]]. Report your medicines and health conditions honestly. Our [[link: /learn/check-wrinkle-injection-product | guide to checking the product]] covers what to ask about.
## Cost of complications
Ask in writing whether review visits and touch-ups are included, and who pays for treatment of a complication. See [[link: /cost/${T} | our cost page]].
## Who should wait
Wait if you are pregnant, breastfeeding, unwell, or have an infection near the site. Postpone until a doctor agrees if you have a neuromuscular condition.
[[faq: Is botulinum toxin dangerous? | Serious problems are rare, but they can happen, and any injection has risks. Treatment should be done by a trained doctor who explains the risks first.]]
[[faq: How long does a drooping eyelid last? | It can last weeks and usually settles as the effect wears off. A doctor can advise on options. TODO-VERIFY: reviewer confirms.]]
[[faq: Can I take painkillers for the headache? | Ask your doctor which are suitable, since some increase bruising.]]
Related reading: [[link: /learn/how-long-wrinkle-injections-last | how long wrinkle injections last]]. City pages: [[link: /${T}-in-lucknow | Lucknow]], [[link: /${T}-in-kanpur | Kanpur]].
Talk to a doctor about your options. Message us on WhatsApp if you want help preparing questions.
[[sources: American Society of Plastic Surgeons patient information on botulinum toxin; American Academy of Dermatology patient information on botulinum toxin; the product leaflet for the medicine prescribed. TODO-VERIFY: open each source and confirm wording.]]
`),
  },
  // B4. TODO-VERIFY: day-0 list is the reviewer's. Never claim zero recovery time.
  {
    ...base,
    slug: "aftercare-after-wrinkle-injections",
    title: "What to do after wrinkle injections: first 24 hours",
    excerpt: "The usual advice for the first day after botulinum toxin injections, what is normal, what to avoid, and which signs need a call to the doctor.",
    minutes: 5,
    thumb: 1,
    body: lines(`
[[reviewer]]
After botulinum toxin injections, doctors commonly ask you to keep the skin clean, avoid rubbing the treated area, stay upright for some hours and skip hard exercise that day. Small bumps and redness are normal. Your doctor's own instructions come first. See our [[link: /${T} | botulinum toxin injections overview]]. TODO-VERIFY: reviewer confirms the list.
## The first few hours
- Do not rub, press or massage the treated area unless your doctor says to.
- Stay upright for several hours. Avoid lying flat or bending forward for long.
- Keep makeup off the sites until the clinic says it is fine.
- Move your face as normal. Some doctors ask you to frown or raise your brows gently in the first hours. Follow your own doctor's advice.
## The first day
- Skip heavy exercise and heat such as saunas or steam. Heat and strong activity raise blood flow to the face.
- Avoid alcohol for the period your doctor advises, since it can increase bruising.
- Avoid facials, peels or devices on the area.
- Wash your face gently and use sunscreen outside.
Some doctors give extra advice about pillows and sleeping position. Ask what applies to you.
## What is normal
Small bumps that fade within hours, mild redness, tenderness and a little bruising are common. A mild headache can occur. The effect on the lines builds over several days, so do not judge the result on day one.
## Myths to ignore
Many online lists include rules with no good evidence, such as strict bans on washing your face or on all talking and chewing. Follow your doctor's instructions, and ask for the reason if a rule seems odd. A short written aftercare sheet from the clinic is reasonable to expect.
## Travel and events
Avoid long flights, intense sport or an important event on the day. If you must travel, tell the doctor beforehand and ask what to do about pressure and activity. Keep your clinic's contact number with you for the first few days.
## Medicines
Tell the doctor about blood thinners and supplements before treatment, since they can increase bruising. Ask before taking painkillers afterwards. Do not stop prescribed medicine on your own.
## Red flags
- Trouble swallowing, breathing or speaking.
- Swelling of the lips, face or throat, or widespread rash.
- Severe pain, blistering, or signs of infection such as pus or spreading redness.
- Drooping of the eyelid or brow, which can appear in the days after.
- Vision changes.
Call your doctor, or go to an emergency service for the serious signs. See [[link: /learn/botulinum-toxin-side-effects | the side effects guide]].
> Ask the doctor to give the aftercare rules in writing and to tell you who to contact after hours.
## Review visit
A review at about two weeks lets the doctor check the result and adjust. Ask whether it is included in the price. See [[link: /cost/${T} | the cost page]] for lines to compare.
## Who should wait
If you have an infection, a cold sore near the area or fever on the day, ask to reschedule. Pregnant women should check with a doctor first.
## Questions worth asking
- Which of these rules apply to me and for how long?
- Who do I call if I am worried?
- When is the review?
[[faq: Can I wash my face after botulinum toxin? | Most doctors say yes, gently. Avoid rubbing. Follow your own doctor's advice.]]
[[faq: Can I exercise the same day? | Doctors often advise skipping hard exercise on the day. Ask for your own instructions.]]
[[faq: When can I wear makeup? | Ask your clinic. Some suggest waiting for some hours.]]
Related reading: [[link: /learn/how-long-wrinkle-injections-last | how long wrinkle injections last]]. City pages: [[link: /${T}-in-delhi | Delhi]], [[link: /${T}-in-gurgaon | Gurgaon]].
Talk to a doctor about your options. Message us on WhatsApp if you want help preparing questions.
[[sources: American Society of Plastic Surgeons patient information on botulinum toxin; the aftercare sheet from the treating doctor. TODO-VERIFY: open each source and confirm wording.]]
`),
  },
  // B5. TODO-VERIFY: no prevention claim, no age targeting copy.
  {
    ...base,
    slug: "age-for-wrinkle-injections",
    title: "What age do doctors consider wrinkle injections?",
    excerpt: "There is no set age for botulinum toxin. Doctors decide after an examination, and skin care and sun protection usually come first.",
    minutes: 5,
    thumb: 2,
    body: lines(`
[[reviewer]]
There is no set age for wrinkle injections. A doctor decides after examining your face, and the decision depends on the lines you have, how they look at rest, your health and what you want. Many doctors suggest skin care and sun protection first. See our [[link: /${T} | botulinum toxin injections overview]].
## What the doctor looks at
Doctors look at lines at rest and in motion. Lines that only show when you frown may respond to treatment of the muscle. Lines that are visible at rest may involve skin changes too, and a different plan can be needed. The doctor also checks the position of your brows and eyelids, muscle strength and any medical condition.
## Questions about your face and mood
Doctors also ask why you want treatment. Frown lines that make you look tired or cross when you are not can be a reason. A wish to look like someone else is not. Be honest about your goals and any past treatments, since this helps the doctor choose a plan that is conservative at first and easy to adjust.
## Age is a poor guide
Skin ageing depends on sun exposure, smoking, genetics and skin type. Two people of the same age can have very different faces. People of any adult age may be told they do not need treatment. Adults under 18 are not the target of this guide, and treatment for young people is a medical decision made with a guardian.
## Starting early to prevent lines
Some people ask whether starting young stops lines forming. Evidence on this is limited, and doctors differ. TODO-VERIFY: reviewer confirms wording. Starting a repeat treatment commits you to repeat visits and a recurring cost. If you are unsure, ask your doctor what they would advise if cost and fashion were not a factor.
## Skin care first
- Use sunscreen every day.
- Do not smoke.
- Keep skin moisturised.
- Ask a doctor about a retinoid for the skin surface, if suitable. See [[link: /learn/sunscreen-retinoids-skin-ageing | sunscreen and retinoid basics]].
These steps cost less and cut down on several causes of lines. They do not replace injections, and they are not a reason to avoid seeing a doctor.
## Expectations
Treatment can soften movement lines. It does not remove sun damage, lift sagging skin or add volume. Results vary. If you are hoping for something different, ask what else exists. See [[link: /anti-aging-treatment | the anti-aging overview]].
## Cost over time
The cost is recurring. Over several years the total can be large, so decide how long you are willing to continue. Ask your doctor to estimate the yearly cost. See [[link: /cost/${T} | the cost page]].
> The right moment to start is when you have a reason to, and not when an age or an advertisement says so.
## Who should wait
Wait if you are pregnant, breastfeeding, unwell or have an infection. Do not start if the main driver is pressure from other people or social media. Talk to a doctor if you feel distressed about your looks, since this can be a health concern in its own right.
## Questions worth asking
- Do my lines need injections, or would skin care do?
- What happens if I stop after one or two visits?
- How would you plan this over a year?
[[faq: Is 25 too young for botulinum toxin? | There is no fixed age. A doctor decides from your face and goals. Many people at that age do not need it.]]
[[faq: Is there an upper age limit? | No fixed limit. Health and expectations matter more.]]
[[faq: Does it prevent wrinkles? | Evidence is limited and doctors differ. Ask your own doctor.]]
Related reading: [[link: /learn/anti-aging-care-by-decade | anti-aging care by decade]], [[link: /learn/botulinum-toxin-vs-fillers | botulinum toxin vs fillers]]. City pages: [[link: /${T}-in-lucknow | Lucknow]], [[link: /${T}-in-kanpur | Kanpur]].
Talk to a doctor about your options. Message us on WhatsApp if you want help preparing questions.
[[sources: American Society of Plastic Surgeons patient information on botulinum toxin; American Academy of Dermatology patient information on skin ageing. TODO-VERIFY: open each page and confirm wording.]]
`),
  },
  // B6. Highest risk post. No unit numbers, no unit price, no product names. LAWYER to approve the idea.
  {
    ...base,
    slug: "botulinum-toxin-units-explained",
    title: "Units explained: why per-unit prices can mislead",
    excerpt: "What a unit measures, why units are not comparable between products, how a doctor sets the dose, and why a written total for your plan is clearer.",
    minutes: 5,
    thumb: 3,
    body: lines(`
[[reviewer]]
A unit is a measure of how much biological activity a dose of botulinum toxin has. Units are not comparable between products, and the dose is set by your doctor for your face. So a price quoted per unit tells you little about the total cost. Ask for a written total for your whole plan. See our [[link: /cost/${T} | cost page]] and [[link: /${T} | overview]].
## What a unit measures
A unit describes how strong a dose is in lab terms. It does not tell you how much of a visible effect you will get. Manufacturers measure strength in their own ways, so one product's unit does not equal another's. Do not compare numbers across products.
## Who sets the dose
Your doctor decides the dose, based on your muscles, the lines, your health and the product used. A friend's dose tells you nothing about yours. A conservative plan may use less at first, and the doctor adds at a review if needed.
## Why per-unit quotes mislead
- A low per-unit figure can come with a large number of units, so the total is not low.
- Different products use different units, so the figures cannot be compared.
- A per-unit quote does not tell you the doctor's fee, the consultation or the review.
- It can hide a plan that treats more areas than you need.
- It may push you to compare on price instead of on the doctor and the plan.
Cost guides that list numbers of units for each area can be wrong for your face. This guide does not list any.
## What to ask in writing
- The areas to be treated and why.
- The total price for the plan, including the doctor's fee and the product.
- Whether a review visit is included.
- What a touch-up costs, if needed.
- The name of the product, which you can ask to see on the vial or pack.
A clear written plan lets you compare two doctors fairly. See [[link: /learn/check-wrinkle-injection-product | how to check the product]].
## How to compare two quotes
Ask both doctors to write the same plan: same areas, same visit schedule, and the same review. Then compare the totals and what each includes, such as the consultation, the product and a touch-up. A quote that leaves out the review or the touch-up may look low and cost more later.
## Why price should not decide
Choosing on price alone can lead to dilute, counterfeit or poorly handled product. A very low quote is a reason to ask more questions. See the same guide for warning signs. This does not mean a higher price means better care, either. The training of the doctor and what the plan includes matter more.
## Insurance
Cosmetic use is usually not covered. Ask your insurer in writing. TODO-VERIFY: reviewer or lawyer confirms wording.
> If someone quotes you a number of units before they have looked at your face, ask them how they chose it.
## Who should wait
Wait if you are pregnant, breastfeeding, unwell, or have a nerve or muscle condition. Do not agree to a plan under time pressure.
## Questions worth asking
- Why this dose for my face?
- What will the total be if I need a touch-up?
- Which parts of the quote are the doctor's fee and which are the product?
[[faq: How many units do I need? | Only a doctor who has examined you can say. It depends on the muscles and the plan.]]
[[faq: Is a price per unit a fair way to compare? | Not usually. Units differ between products and a unit price does not show the total. Compare written totals for the same plan.]]
[[faq: Why do two doctors quote different totals? | They may plan different areas, use different products and include different follow-up. Ask each to list what is included.]]
Related reading: [[link: /learn/botulinum-toxin-vs-fillers | botulinum toxin vs fillers]]. City pages: [[link: /${T}-in-delhi | Delhi]] and [[link: /${T}-in-gurgaon | Gurgaon]].
Talk to a doctor about your options. Message us on WhatsApp if you want help preparing questions.
[[sources: American Society of Plastic Surgeons patient information on botulinum toxin; the product leaflet for the medicine prescribed. TODO-VERIFY: open each source and confirm wording on units.]]
`),
  },
  // B7. TODO-VERIFY: no brand names, no accusation of any company; official reporting channel verified, not from memory.
  {
    ...base,
    slug: "check-wrinkle-injection-product",
    title: "Genuine or diluted? Questions to ask before injections",
    excerpt: "General steps to check a botulinum toxin product before treatment: sealed vial, batch label, licensed supplier, a written plan and red flags.",
    minutes: 5,
    thumb: 1,
    body: lines(`
[[reviewer]]
Fake or poorly handled injectable products exist, and you can lower your risk by asking questions. Ask to see the sealed vial and its batch label, ask who supplied it, and get a written plan. Treatment should be done by a registered doctor. These checks are general, and no single check proves a product is genuine. See our [[link: /${T} | botulinum toxin injections overview]].
## Why it matters
Botulinum toxin is a prescription medicine. Counterfeit, diluted or wrongly stored product can fail to work or cause harm. A low price can be a sign of a problem, though a high price does not prove quality either.
## What to ask to see
- The sealed vial or pack opened in front of you.
- The label with the product name, batch number and expiry date.
- The packaging, which should look intact and unaltered.
Note the batch number in your records. Ask the doctor to record it in your file too. TODO-VERIFY: reviewer confirms the checks.
## Where it came from
Ask how the clinic buys its product. A doctor should be able to say it comes from a licensed supplier and show an invoice if asked. Be wary of an answer that is vague or defensive. Product sold through social media or sent by courier for use at home is a red flag.
## Storage and handling
These products need cold storage. Ask how it is stored and how long a vial is kept after it is opened. Reuse or sharing of vials across patients should concern you. TODO-VERIFY: reviewer confirms the wording on reuse.
## Who is injecting
Ask for the name and registration of the doctor performing the injection, and check it on the state medical council register. A beauty salon or an unregistered person should not be injecting a prescription medicine. See the choose-a-doctor checklist in the [[link: /${T} | overview]].
## A written plan and consent
You should get a consultation, a written plan with areas and the total, and a consent form that lists risks. If a clinic refuses to provide any of these, think twice.
## Red flags
- A very low price for the whole plan.
- A deal that expires today.
- Vials already opened or prepared before you arrive.
- Treatment at a home, party or pop-up setting.
- A doctor who will not give a name or a registration number.
- No questions about your health or medicines.
- A promise of a particular outcome.
> If you feel pressed to decide quickly, walk out. You can come back after you have checked.
## If you suspect a problem
Contact the treating doctor and a doctor of your own. Keep the packaging, the batch number and photos. The correct official channel for reporting a suspected fake or a complication should be listed here after it has been checked. TODO-VERIFY: add the official reporting channel from a verified source.
## What it costs
Ask what the price includes. See [[link: /cost/${T} | our cost page]] and [[link: /learn/botulinum-toxin-units-explained | the guide to units]].
## Who should wait
Wait if you are pregnant, breastfeeding or unwell. Postpone if you cannot confirm the product and the doctor, since a delay costs less than a complication.
## Questions worth asking
- Can I see the sealed vial and the batch label?
- Where do you buy your product?
- What is your registration number?
[[faq: How can I tell if botulinum toxin is genuine? | You cannot tell from looking at the result. Ask to see the sealed vial, label and batch number, and ask where it was bought. Choose a registered doctor.]]
[[faq: Is a very low quote a problem? | It can be a reason to ask more questions. Compare written plans, not single numbers.]]
[[faq: Can I bring my own product? | No. A doctor should supply and store the product they inject.]]
Related reading: [[link: /learn/botulinum-toxin-side-effects | botulinum toxin side effects]]. City pages: [[link: /${T}-in-lucknow | Lucknow]] and [[link: /${T}-in-kanpur | Kanpur]].
Talk to a doctor about your options. Message us on WhatsApp if you want help preparing questions.
[[sources: Product leaflet for the medicine prescribed; the state medical council register for checking doctor registration. TODO-VERIFY: open each source and add the official channel for complaints.]]
`),
  },
  // B8. TODO-VERIFY: no masculine-look promises, no testimonials.
  {
    ...base,
    slug: "wrinkle-injections-for-men",
    title: "Wrinkle injections for men: what differs",
    excerpt: "How male facial muscles, brow shape and expectations change the plan for botulinum toxin, with risks, aftercare and questions to ask.",
    minutes: 5,
    thumb: 2,
    body: lines(`
[[reviewer]]
Men can have botulinum toxin injections for wrinkles. A doctor adjusts the plan because male facial muscles are often stronger and brows sit differently. The aim is usually a natural expression, and results vary. A doctor decides after an examination. See our [[link: /${T} | botulinum toxin injections overview]].
## What differs
- Muscle strength: many men have stronger forehead and frown muscles, which can mean a different plan from the one a woman would get. The doctor decides.
- Brow shape: male brows are often lower and flatter. A plan that lifts or arches the brow can look out of place, so doctors take care with the forehead.
- Skin and hair: thicker skin and facial hair affect how injections are placed and how bruises show.
- Expectations: many men want to look rested and keep their expression. Say that clearly.
Do not expect any plan to give a particular look. Ask the doctor what a conservative plan would change and what it would not.
## Common areas
Forehead lines, frown lines between the brows and lines around the eyes are the usual areas. Doctors treat these with attention to balance, since a heavy forehead with a mobile frown can look odd. See [[link: /learn/botulinum-toxin-vs-fillers | botulinum toxin vs fillers]] for other options.
## Risks
The risks are the same as for anyone: bruising, headache, uneven results, and a drooping brow or eyelid in some people. A forehead treated without enough care can leave a heavy brow. See [[link: /learn/botulinum-toxin-side-effects | the side effects guide]].
## Aftercare
Follow your doctor's instructions on the first day. Avoid rubbing the area and skip hard exercise that day. If you shave, ask when you can shave near the injection sites. See [[link: /learn/aftercare-after-wrinkle-injections | the aftercare guide]].
## Cost and visits
The effect is temporary, and repeat visits are a recurring cost. Ask for a written plan and yearly estimate. See [[link: /cost/${T} | our cost page]]. Men sometimes prefer fewer visits and a shorter plan, which the doctor can plan around.
## Skin and hair care
Men who shave daily may notice more irritation at the sites. Ask about moisturiser and sunscreen after treatment, and avoid new products on the treated skin for the first day. A plain routine is easier to judge if a reaction occurs.
## Privacy
Many men worry about others noticing. A conservative plan and a review visit help. A doctor should keep your treatment private, and you should be able to ask about how your records are handled.
> The aim of a plan is a result that fits your face. Say what you want to keep as well as what you want to soften.
## Who should wait
Wait if you have an infection near the area, if you take medicines that thin the blood and your doctor has not reviewed them, or if you have a nerve or muscle condition. Do not start if you expect a change in how others see you that injections cannot deliver. Men who feel distress about their looks can talk to a doctor about it.
## Questions worth asking
- What would a conservative plan for my face change?
- How will my brows look after treatment?
- What is the review plan, and what does a touch-up cost?
[[faq: Is botulinum toxin only for women? | No. Men are treated too. The plan is adjusted for muscle strength and brow shape.]]
[[faq: Will I look frozen? | It depends on the plan. Ask for a conservative plan and a review.]]
[[faq: Do men need more? | Often the muscles are stronger, which may change the plan. Only a doctor who has examined you can say.]]
Related reading: [[link: /learn/age-for-wrinkle-injections | what age doctors consider wrinkle injections]], [[link: /learn/how-long-wrinkle-injections-last | how long they last]]. City pages: [[link: /${T}-in-delhi | Delhi]], [[link: /${T}-in-gurgaon | Gurgaon]].
Talk to a doctor about your options. Message us on WhatsApp if you want help preparing questions.
[[sources: American Society of Plastic Surgeons patient information on botulinum toxin; American Academy of Dermatology patient information on botulinum toxin. TODO-VERIFY: open each page and confirm wording on male patients.]]
`),
  },
];
