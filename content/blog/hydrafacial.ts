// SAMPLE CONTENT, PENDING DOCTOR REVIEW.
// Eight hydrafacial guides written for staging. reviewerId "sample-reviewer" is a placeholder: no doctor has reviewed
// these posts. TODO-VERIFY: a registered dermatologist signs off every claim, interval and timeline, and a person
// opens each Sources line before production. TODO-VERIFY (lawyer): trademark wording for "hydrafacial".
// A hydrafacial is a skin-care session here. No post claims it treats acne, scars, pigment or ageing.
import type { BlogPost } from "@/content/types";

const lines = (s: string): string[] =>
  s
    .trim()
    .split("\n")
    .map((x) => x.trim())
    .filter(Boolean);

const base = {
  treatmentSlug: "hydrafacial",
  reviewerId: "sample-reviewer",
  published: true,
  datePublished: "2026-11-21",
  dateModified: "2026-11-21",
} as const;

export const hydrafacialPosts: BlogPost[] = [
  {
    ...base,
    slug: "hydrafacial-vs-regular-facial",
    title: "Hydrafacial vs a regular facial: the real differences",
    excerpt: "How a hydrafacial session differs from a standard facial in steps, time and cost drivers, and who might prefer which. No claim that one is better.",
    minutes: 5,
    thumb: 1,
    body: lines(`
[[reviewer]]
A hydrafacial uses a handheld device to cleanse, exfoliate and loosen blocked pores, then applies a serum. A regular facial is done mostly by hand with creams, steam and massage. Both are skin-care sessions, and neither treats acne or scars. The choice depends on your skin, time and budget. See our [[link: /hydrafacial | hydrafacial overview]].
## The steps side by side
A hydrafacial session usually runs in a fixed order, often cleansing, a mild acid exfoliation, suction to clear pores, and a serum. A regular facial often includes cleansing, steam, manual extractions, a mask and massage. Clinics vary, so ask for the exact steps in writing. TODO-VERIFY: reviewer confirms the standard step order.
- Cleansing: both start with it.
- Exfoliation: a hydrafacial uses a device and a solution. A regular facial may use a scrub or acid, depending on the clinic.
- Pore clearing: a hydrafacial uses suction. A regular facial usually uses hands or tools.
- Serums and masks: both may include them, and quality and ingredients differ between places.
- Massage: more common in a regular facial.
## What each is meant to do
Both aim to leave the skin feeling cleaner and look fresher for a short time. A hydrafacial is often chosen by people who want a shorter session with a device. A regular facial suits those who want a longer, relaxing session. Neither changes skin structure, and neither replaces a doctor's plan for acne or pigment.
## Time and cost drivers
Sessions often run from about 30 to 60 minutes. TODO-VERIFY: reviewer confirms. Price depends on the device, the serum or booster, who performs the session, add-ons such as LED or lymphatic steps, and the city. Our [[link: /cost/hydrafacial | hydrafacial cost page]] lists the lines to ask for. Compare quotes line by line. Our [[link: /learn/read-hydrafacial-quote | guide to reading a quote]] shows how.
## Who might prefer which
- People with sensitive or reactive skin may prefer a gentler, shorter facial. Ask a doctor first if skin is very reactive.
- People who want a quick session before an event may like a device-based session, with a trial well before the date. See [[link: /learn/hydrafacial-before-wedding-timing | timing before a wedding]].
- People who enjoy longer sessions with massage may prefer a regular facial.
Neither is better in general. If a salon or clinic tells you one is, ask what that claim is based on.
## Risks that apply to both
Redness, stinging, breakouts after the session and allergic reactions to products can occur. Unclean tools raise the risk of infection. Pink skin can last a few hours. See [[link: /learn/hydrafacial-side-effects-who-should-skip | side effects and who should skip it]].
> If you have active acne, a skin disease or you are unsure about a product, see a dermatologist before any facial.
## Who should wait
Wait if you have sunburn, open sores, a cold sore, an active skin infection, or irritated skin from new acids. Pregnant women should ask their doctor first. If you took isotretinoin recently, ask the prescribing doctor how long to wait.
## Questions worth asking
- Who will perform my session and with what training?
- Which products touch my face, and are tips and tools single use or cleaned between clients?
- What add-ons are included, and which cost extra?
- What happens if my skin reacts?
[[faq: Is a hydrafacial the same as a regular facial? | No. Both clean the skin, but a hydrafacial uses a handheld device for exfoliation and pore clearing, while a regular facial is mostly manual. Steps differ between places.]]
[[faq: Which is better for oily skin? | Neither is better in general. Ask a skin doctor, since oily and acne-prone skin can react to some products.]]
[[faq: Which costs more? | A hydrafacial often costs more because of the device and consumables, but quotes vary a lot. Ask for a written list of what is included.]]
Related reading: [[link: /learn/hydrafacial-vs-peel-vs-microdermabrasion | hydrafacial, peel and microdermabrasion compared]]. City guides: [[link: /hydrafacial-in-delhi | Delhi]] and [[link: /hydrafacial-in-gurgaon | Gurgaon]].
Message us on WhatsApp if you want help preparing questions for a registered doctor.
[[sources: American Academy of Dermatology patient information on skin care and facials; NHS patient information on skin care. TODO-VERIFY: open each page and confirm that facials are covered.]]
`),
  },
  {
    ...base,
    slug: "hydrafacial-acne-prone-skin",
    title: "Hydrafacial for acne-prone skin: what to expect",
    excerpt: "What a hydrafacial can and cannot do when you get pimples, why breakouts can follow a session, and when to see a dermatologist first.",
    minutes: 5,
    thumb: 2,
    body: lines(`
[[reviewer]]
A hydrafacial does not treat acne. It is a skin-care session that cleans pores and exfoliates the surface, and some clinics provide it for oily or acne-prone skin. If you have active, inflamed or painful acne, see a dermatologist first. Breakouts can follow a session. See our [[link: /hydrafacial | hydrafacial overview]] and the [[link: /acne-treatment | acne treatment guide]].
## Active acne and old marks
Inflamed spots, pus and painful lumps need a medical plan. Facial devices can irritate them. Old marks and blocked pores on otherwise calm skin are what a hydrafacial can touch at the surface, and the change is mostly in how the skin looks and feels for a short time. Dark marks and scars need other approaches, covered in [[link: /learn/acne-scar-types-treatment | our scar guide]].
## Extractions have limits
Many sessions include suction or manual extraction of blocked pores. Deep cysts cannot be extracted this way, and squeezing them can make marks worse. A trained person should decide what to extract and what to leave.
## Why a breakout can follow
Some people see new spots a few days after a session. Possible reasons include irritation, a product that blocks pores for that person, or a coincidence with their own acne cycle. TODO-VERIFY: reviewer confirms wording. If it happens, stop new products and tell the clinic. A doctor can advise if it keeps happening.
## When to see a dermatologist first
- Painful, deep or spreading spots.
- Acne that is getting worse or leaving marks.
- You are using prescription acne medicines.
- You are pregnant or planning pregnancy.
- The skin is very dry, sore or peeling from acne creams.
A dermatologist can decide whether a session is sensible, delay it, or advise another method. See [[link: /learn/acne-peels-light-laser | peels and light for acne]] for procedures doctors discuss for acne.
## Isotretinoin and timing
If you have taken isotretinoin, ask the prescribing doctor when facial procedures can restart. Doctors set the interval, and it can be many weeks or longer. TODO-VERIFY: reviewer sets the wording. Do not rely on a clinic's general answer.
## What a sensible visit looks like
The person checks your skin before starting, asks about medicines and recent products, and tells you which steps they will skip. They use clean or single-use tips and explain what to avoid afterwards, such as the sun and strong acids for a few days. They do not promise any particular skin outcome.
> A hydrafacial is not an acne treatment. Do not use it in place of a doctor's plan.
## Aftercare for oily and acne-prone skin
Use a gentle cleanser and a plain moisturiser, and wear sunscreen. Avoid scrubs and strong acids for the days the clinic advises. Do not pick at spots, and do not apply new products on the same day.
## Cost
A session is usually priced per visit, with extra charges for boosters. Do not buy a large pack until you have seen how your skin reacts to one session. Our [[link: /cost/hydrafacial | cost page]] lists the lines to ask about.
## Who should wait
Wait if there is an infection, a cold sore, sunburn or very sore acne. Anyone pregnant should check with a doctor first.
[[faq: Can I get a hydrafacial with active pimples? | Some clinics do it on mild breakouts, and many advise waiting if spots are inflamed or painful. A dermatologist can decide for your skin.]]
[[faq: Will a hydrafacial clear my acne? | No. It is a skin-care session and not an acne treatment.]]
[[faq: Can I have one while taking acne tablets? | Ask your prescribing doctor first. Some medicines make skin fragile.]]
Related reading: [[link: /learn/hydrafacial-side-effects-who-should-skip | hydrafacial side effects]] and [[link: /learn/acne-grades-when-to-see-doctor | acne grades]]. City guides: [[link: /hydrafacial-in-lucknow | Lucknow]], [[link: /hydrafacial-in-kanpur | Kanpur]].
Message us on WhatsApp if you want help preparing questions for a registered doctor.
[[sources: American Academy of Dermatology patient information on acne; NHS patient information on acne. TODO-VERIFY: open each page and confirm wording.]]
`),
  },
  {
    ...base,
    slug: "hydrafacial-side-effects-who-should-skip",
    title: "Hydrafacial side effects and who should skip it",
    excerpt: "Common effects such as pink skin and stinging, less common problems such as breakouts and allergy, who should skip it, aftercare and red flags.",
    minutes: 5,
    thumb: 3,
    body: lines(`
[[reviewer]]
The most common effects of a hydrafacial are pink skin and mild stinging that settle within hours to a day or two. Less often, people see breakouts, allergic reactions or a cold sore flare. People with sunburn, infection or sore acne should skip it. This is a general guide, and your doctor's advice overrides it. See our [[link: /hydrafacial | hydrafacial overview]].
## Common effects
- Pink or red skin for a few hours.
- Stinging or warmth during or just after the session.
- A tight or dry feeling for a day or two.
- Mild sensitivity to the sun.
TODO-VERIFY: reviewer confirms the time window. Many people return to normal routines the same day, though redness can be visible. It is wise not to plan an important event for the same evening on the first visit.
## Less common problems
- A breakout after the session.
- An allergic reaction to a serum, such as itching, swelling or rash.
- A cold sore flare in people who get them.
- Pigment change on skin that was irritated.
- Infection, if tools are not cleaned or single use.
- Burns or bruising from poor device handling, which are rare.
## Who should skip it
- Sunburnt or very irritated skin.
- Open sores, cold sores or any skin infection in the area.
- Recent use of strong acids or retinoids, unless your doctor says it is fine.
- Recent laser or peel.
- Isotretinoin in the last months. The prescribing doctor sets the interval.
- Pregnancy, unless a doctor says it is fine.
- Skin conditions such as eczema or rosacea in a flare, without a doctor's advice.
- Known allergy to an ingredient in the serum.
Ask for a patch test if your skin reacts easily. See [[link: /learn/hydrafacial-acne-prone-skin | hydrafacial and acne-prone skin]].
## Aftercare
Use a gentle cleanser and plain moisturiser, wear sunscreen and avoid sun exposure. Skip strong acids and scrubs for the days the clinic names. Keep your hands off your face. Avoid heat, steam rooms and heavy exercise for the period your clinic advises. TODO-VERIFY: reviewer confirms the list.
## Red flags to act on
- Swelling of the lips, face or throat, or trouble breathing. This needs emergency care.
- Blisters, severe pain or skin that turns dark or grey.
- Pus, spreading redness or fever.
- A reaction that gets worse after the first day.
Contact the clinic and a doctor without delay if any of these occur.
> A session should never be rushed. If a person pushes you to skip a skin check, you can say no.
## Who performs it
Ask whether the session is done by a doctor, nurse or trained technician, and how they handle tips and tools. Do not assume a technician is a doctor. Our [[link: /hydrafacial | hub]] has a checklist for choosing a clinic.
## Cost of a reaction
Ask what happens if your skin reacts. Does the clinic include a review visit, and is it free or charged? Add this to your written quote. See [[link: /cost/hydrafacial | the cost page]].
## Who should wait
Anyone with an active infection, sunburn or pregnancy question should hold off, and so should those who have taken isotretinoin recently, until a doctor says it is fine.
[[faq: Is there downtime after a hydrafacial? | Most people go about their day, but pink skin and sensitivity can last for hours or longer. Plan for some redness.]]
[[faq: Does it hurt? | Many describe a mild tingling or suction feeling, and sensitive skin may sting. Sensations vary.]]
[[faq: Can I wear makeup afterwards? | Many clinics suggest waiting some hours. Follow the instructions you are given.]]
Related reading: [[link: /learn/how-often-hydrafacial | how often to have a hydrafacial]], [[link: /learn/hydrafacial-indian-skin-pigmentation | hydrafacial on Indian skin]]. City guides: [[link: /hydrafacial-in-delhi | Delhi]] and [[link: /hydrafacial-in-gurgaon | Gurgaon]].
Message us on WhatsApp if you want help preparing questions for a registered doctor.
[[sources: American Academy of Dermatology patient information on skin care and cosmetic procedures; NHS patient information on skin reactions. TODO-VERIFY: open each page and confirm wording.]]
`),
  },
  {
    ...base,
    slug: "how-often-hydrafacial",
    title: "How often can you get a hydrafacial?",
    excerpt: "Why clinics suggest different gaps between sessions, what skin type and active products change, and how to avoid pack pressure.",
    minutes: 5,
    thumb: 1,
    body: lines(`
[[reviewer]]
There is no single schedule for a hydrafacial. Clinics suggest gaps that range from a few weeks to a few months, and the right gap depends on your skin, your other products and how your skin reacted last time. A dermatologist can advise. Treat any fixed monthly plan with care. See our [[link: /hydrafacial | hydrafacial overview]]. TODO-VERIFY: reviewer sets any interval and labels it as opinion.
## Why advice differs
There is little agreed guidance on how often a hydrafacial should be repeated, so the interval often reflects the clinic's habit. Skin that is oily and tolerant may handle more frequent sessions than skin that is dry or sensitive. If a clinic quotes an interval, ask what it is based on.
## What changes the gap
- Skin type and how it reacted to the last session.
- Use of retinoids, acids or peels at home. These already exfoliate, and extra exfoliation can irritate.
- Sun exposure and tanning.
- Season and humidity, which affect dryness.
- Your goal. A one-off session before an event is different from a regular routine.
## Retinoids and acids
If you use a retinoid or a strong acid, tell the person before the session. Some doctors ask you to pause these for a few days before and after. Do not stop prescribed medicine on your own. Ask the prescribing doctor.
## What a review visit checks
After a first session, ask for a quick review of how your skin responded. Redness that lasted longer than expected, breakouts or dryness all mean the gap should be longer, or the plan should change. A good clinic adjusts the plan, and does not push the same schedule.
## Pack pressure
Packs of three or six sessions are common, and they can lower the price per session. They can also lock you into sessions you do not need. Ask these questions before you pay:
- Can I use the sessions over a longer period?
- What happens if my skin reacts and I should stop?
- Is there a written refund or exit policy?
- Is the booster or serum the same in every session?
Our [[link: /learn/read-hydrafacial-quote | guide to reading a quote]] explains packs line by line. If you feel pressed to decide on the spot, you can leave and come back.
## Cost over a year
Multiply the price per session by the number of sessions you actually plan to have in a year. Add products and any add-ons. Our [[link: /cost/hydrafacial | cost page]] shows the lines to ask about, and the city pages for [[link: /hydrafacial-in-lucknow | Lucknow]] and [[link: /hydrafacial-in-kanpur | Kanpur]] show local sample ranges once confirmed.
> A hydrafacial does not need to be repeated to keep the skin healthy. Sun protection and a gentle routine matter more day to day.
## Who should wait
Do not book repeat sessions if your skin is irritated, sunburnt or infected, or if you have started new strong products. Ask a doctor first if you are pregnant or took isotretinoin recently.
## Questions worth asking
- What gap do you suggest for my skin, and why?
- What would make you advise a longer gap?
- Do I need a booster each time, and what does it cost?
[[faq: Can I have a hydrafacial every week? | Most clinics do not suggest this. Frequent exfoliation can irritate the skin. Ask your skin doctor.]]
[[faq: Is monthly the standard? | Some clinics suggest it, but there is no single standard. The right gap varies by person.]]
[[faq: Do I need a doctor to decide? | For sensitive skin, active acne or medicines, a dermatologist can advise. For routine sessions, a trained professional should check your skin before every visit.]]
Related reading: [[link: /learn/hydrafacial-side-effects-who-should-skip | side effects and who should skip it]], [[link: /learn/hydrafacial-vs-regular-facial | hydrafacial vs a regular facial]].
Message us on WhatsApp if you want help preparing questions for a registered doctor.
[[sources: American Academy of Dermatology patient information on skin care; NHS patient information on skin care. TODO-VERIFY: open each page and confirm wording.]]
`),
  },
  {
    ...base,
    slug: "hydrafacial-vs-peel-vs-microdermabrasion",
    title: "Hydrafacial vs chemical peel vs microdermabrasion",
    excerpt: "A plain comparison of what each procedure does, downtime, risks and who it suits, so you can pick by goal and ask better questions.",
    minutes: 5,
    thumb: 2,
    body: lines(`
[[reviewer]]
A hydrafacial, a chemical peel and microdermabrasion all exfoliate the skin, but they work differently and carry different downtime and risks. A hydrafacial is the gentlest of the three for most people, and a peel can go deeper. Which suits you depends on your goal and your skin. This guide compares them in plain terms. See our [[link: /hydrafacial | hydrafacial overview]].
## What each one does
- Hydrafacial: a device exfoliates and clears pores with suction and a serum is applied. It is a surface skin-care session.
- Chemical peel: an acid solution is applied to loosen the top layers of skin. Strength ranges from light to deep, and a doctor chooses it. TODO-VERIFY: reviewer confirms wording.
- Microdermabrasion: a device removes the outer layer by abrasion, using fine particles or a diamond-tipped head, along with suction.
## Downtime
A hydrafacial often leaves pink skin for hours. A light peel can cause redness and flaking for several days, and stronger peels take longer. Microdermabrasion can leave the skin pink or tender for a day or so. TODO-VERIFY: the reviewer sets the ranges. Plan any big event with a gap, and do a trial first.
## Risks
All three can cause redness, stinging, dryness and sun sensitivity. Peels carry a higher chance of burns and dark marks, especially in darker skin, if the strength is wrong. Abrasive methods can irritate the skin if used too hard. See [[link: /learn/hydrafacial-indian-skin-pigmentation | hydrafacial on Indian skin]] for pigment concerns.
## Who each suits
- Hydrafacial: people who want a gentle, short skin-care session and have no active skin disease.
- Chemical peel: people whose doctor suggests it for a specific concern such as surface texture or marks. A doctor should assess the skin first, and may advise a gentler method. See [[link: /learn/acne-peels-light-laser | peels for acne]].
- Microdermabrasion: people with tolerant skin who want surface smoothing. It is less suited to active acne, very sensitive skin or darker skin with a tendency to pigment change, unless a doctor agrees.
## Picking by goal
- A routine skin-care session: a hydrafacial or a regular facial.
- Surface texture or marks that bother you: ask a dermatologist what a peel or other method might do.
- Active acne: a doctor's plan first. See our [[link: /acne-treatment | acne treatment guide]].
- Pigment such as melasma: a dermatologist, since irritation can make it worse.
None of these methods stops ageing or removes scars. Results vary, and one session usually makes a small change.
## What to ask about cost
Ask what the price includes, how many sessions are needed, and what the product is. Peels are often priced per session by strength, and devices by session plus add-ons. Our [[link: /cost/hydrafacial | cost page]] has a line-by-line checklist.
> Do not choose by the machine name. Choose by what a doctor thinks your skin needs.
## Who should wait
Do not have any of these on sunburnt, infected or newly irritated skin. Pregnant women should ask a doctor first, and people who took isotretinoin recently should wait for the interval their doctor sets.
## Questions worth asking
- Why this method for my skin and my goal?
- What are the risks for my skin tone?
- How many sessions, and how far apart?
- What do I do if my skin reacts?
[[faq: Which is stronger, a peel or a hydrafacial? | A peel can reach deeper layers and carries a higher chance of flaking and pigment change. A hydrafacial is milder for most people.]]
[[faq: Can I combine them in one visit? | Some clinics do. Doing more at once raises the chance of irritation, so ask the doctor if this is wise for your skin.]]
[[faq: Is microdermabrasion the same as a hydrafacial? | No. Microdermabrasion uses abrasion to remove surface skin, and a hydrafacial uses a different device with suction and serums.]]
Related reading: [[link: /learn/hydrafacial-vs-regular-facial | hydrafacial vs a regular facial]]. City guides: [[link: /hydrafacial-in-delhi | Delhi]], [[link: /hydrafacial-in-gurgaon | Gurgaon]].
Message us on WhatsApp if you want help preparing questions for a registered doctor.
[[sources: American Academy of Dermatology patient information on chemical peels and microdermabrasion; NHS patient information on skin care. TODO-VERIFY: open each page and confirm wording.]]
`),
  },
  {
    ...base,
    slug: "hydrafacial-before-wedding-timing",
    title: "Hydrafacial before a wedding: how many days to plan",
    excerpt: "How far ahead to try a session, how long redness can last, what to avoid before and after, and why a trial visit comes first.",
    minutes: 5,
    thumb: 3,
    body: lines(`
[[reviewer]]
Plan the first hydrafacial well before a wedding, at least a few weeks ahead, so you can see how your skin reacts. A session close to the event is a risk if your skin turns out to be sensitive. Redness is common for hours, and some people react for longer. Your dermatologist can set the timing. See our [[link: /hydrafacial | hydrafacial overview]]. TODO-VERIFY: reviewer sets the timing wording.
## Why a trial matters
Skin responds differently from person to person. A trial session tells you how long redness lasts, whether you get a breakout, and whether a serum irritates your skin. Do not try a new device session in the week before an event. If you already know your skin tolerates it, a short gap may be reasonable, but ask the person doing it.
## A simple timeline
- Several weeks before: book a skin check and a first session if you have never had one.
- About two weeks before: if the first session went well, a second can be planned. Ask how long to leave between sessions.
- The week before: avoid new products, scrubs, waxing on the face, threading in new areas and strong acids unless your doctor advises.
- Day of the event: keep skin care simple.
TODO-VERIFY: the reviewer confirms the gaps and sets any day count.
## What to avoid before
- Sunburn and tanning. Sun makes skin more reactive and harder to treat.
- New products, especially acids and retinoids.
- Other procedures such as peels or lasers near the same date.
- Squeezing spots, which can leave marks that show in photos.
## What to avoid after
Skip strong acids, scrubs, saunas and heavy exercise for the days your clinic names. Use sunscreen and plain moisturiser. Avoid trying new makeup the same day if your skin looks sensitive. If a product stings, wash it off.
## Makeup and photos
Pink skin can show through makeup. Bring your own tested products to your trial visit, and ask how soon you can use them. If you are using a makeup artist, tell them what you had done and when. Do not have a session on the day before photographs unless you know how your skin behaves.
## What not to expect
A single session is not going to change skin tone, scars or pigment. It can leave skin looking cleaner for a short time. Do not pay for a large bridal pack on the promise of a particular look. See [[link: /learn/how-often-hydrafacial | how often to have a hydrafacial]].
> The week before a wedding is the wrong time to find out your skin reacts to something new.
## Cost planning
Add the trial session, the pre-event session and any boosters. Ask for a written total before you pay. Our [[link: /cost/hydrafacial | cost page]] lists the lines to compare and [[link: /learn/read-hydrafacial-quote | our quote guide]] shows red flags.
## Who should wait
Skip a session if you have sunburn, a cold sore, an infection, or you are pregnant and not sure. People with acne or pigment concerns should see a dermatologist first. See [[link: /learn/hydrafacial-side-effects-who-should-skip | who should skip it]].
[[faq: How many days before an event should I have a hydrafacial? | There is no single number. Many people plan a trial weeks ahead and any later session with a gap that suits their skin. Ask your doctor.]]
[[faq: Can I have one the day before? | It is not advised for a first time. Redness or sensitivity can still be there.]]
[[faq: Will it make my skin look better in photos? | It can make skin look cleaner for a short time. Results vary.]]
Related reading: [[link: /learn/hydrafacial-vs-regular-facial | hydrafacial vs a regular facial]]. City guides: [[link: /hydrafacial-in-lucknow | Lucknow]] and [[link: /hydrafacial-in-kanpur | Kanpur]].
Message us on WhatsApp if you want help preparing questions for a registered doctor.
[[sources: American Academy of Dermatology patient information on skin care; NHS patient information on sun protection. TODO-VERIFY: open each page and confirm wording.]]
`),
  },
  {
    ...base,
    slug: "hydrafacial-indian-skin-pigmentation",
    title: "Hydrafacial on Indian skin: tan, pigment and melasma",
    excerpt: "What a surface skin-care session can touch, why melasma needs a dermatologist, the sun rules that matter, and how irritation can darken skin.",
    minutes: 5,
    thumb: 1,
    body: lines(`
[[reviewer]]
A hydrafacial works on the surface of the skin. It can make skin look cleaner and may lift some surface tan for a short time, but it does not treat melasma or deep pigment. Irritation can make dark patches worse in some Indian skin tones, so ask a dermatologist first if you have pigment concerns. See our [[link: /hydrafacial | hydrafacial overview]].
## What it can touch
Surface dullness and light tan sit in the outer layer of skin. Exfoliation can remove some dead cells, which may improve how the skin looks for a short time. TODO-VERIFY: reviewer confirms wording. The change is usually small and does not last without sun protection.
## What needs a dermatologist
Melasma, which appears as brown patches on the cheeks, forehead and upper lip, is driven by factors including hormones and sun, and tends to return. It needs a doctor's assessment. Post-acne marks, freckles, and dark patches from other causes can look similar, and a doctor can tell them apart. Do not rely on a facial for these.
## How irritation darkens skin
Skin that is irritated, burned or inflamed can produce extra pigment as it heals, called post-inflammatory hyperpigmentation. This happens more easily in medium to dark skin tones. A harsh scrub, a strong acid, or a session on sunburnt skin can set it off. If a session leaves lasting redness, avoid further exfoliation until a doctor has seen it.
## Sun rules that matter
- Use a broad-spectrum sunscreen every day, and reapply when outdoors.
- Cover up in strong sun and avoid peak hours when you can.
- Avoid sunbeds and tanning.
- Do not have a session on skin that is sunburnt or freshly tanned.
Sun protection often matters more than any single session for how pigment behaves.
## Products to be careful with
Some skin-lightening creams sold without a prescription contain strong steroids or other ingredients that can harm the skin. Ask a doctor before using one. Do not apply home remedies such as lemon on the face, since they can burn. Tell the person doing your hydrafacial about every product you use.
## What a good visit includes
A skin check, a question about melasma or pigment history, a patch test if your skin reacts easily, and a clear plan for sun protection afterwards. If the person promises to lighten skin or remove pigment, take it as a warning.
> A facial can make skin look cleaner. It is not a treatment for pigment disorders.
## Cost
Sessions are priced per visit, and doctor-led plans for pigment have their own costs. Our [[link: /cost/hydrafacial | hydrafacial cost page]] lists what to ask, and the [[link: /acne-treatment | acne treatment guide]] covers marks after pimples.
## Who should wait
Wait if you are sunburnt, if the skin is irritated, or if you have an active melasma flare that is under treatment, until your dermatologist agrees. Pregnant women should ask their doctor first, since melasma is common in pregnancy and many products are not advised.
## Questions worth asking
- Is this skin patch melasma or something else?
- How will you adjust the session for my skin tone?
- What do I do if my skin darkens afterwards?
[[faq: Can a hydrafacial remove tan? | It can remove some surface tan for a short time. Sun exposure brings it back, so sun protection matters.]]
[[faq: Is it suitable for melasma? | A dermatologist should decide. Irritation can make melasma worse.]]
[[faq: Can a hydrafacial make my skin darker? | Irritation, burns or sun exposure after a session can lead to dark marks in some people. Tell the clinic if you see changes.]]
Related reading: [[link: /learn/hydrafacial-side-effects-who-should-skip | hydrafacial side effects]], [[link: /learn/hydrafacial-acne-prone-skin | hydrafacial and acne-prone skin]]. City guides: [[link: /hydrafacial-in-delhi | Delhi]], [[link: /hydrafacial-in-gurgaon | Gurgaon]].
Message us on WhatsApp if you want help preparing questions for a registered doctor.
[[sources: American Academy of Dermatology patient information on melasma and sun protection; NHS patient information on sun protection. TODO-VERIFY: open each page and confirm wording.]]
`),
  },
  {
    ...base,
    slug: "read-hydrafacial-quote",
    title: "How to read a hydrafacial quote: serums, add-ons, packs",
    excerpt: "What a base session covers, how boosters and add-ons change the total, how to work out the per-session price of a pack, and red flags to watch.",
    minutes: 5,
    thumb: 2,
    body: lines(`
[[reviewer]]
A hydrafacial quote should list the base session, any booster serum, add-on steps, consumables and follow-up in separate lines, with a total in writing. Two quotes can look far apart because one includes more steps than the other. Divide any pack price by the number of sessions to compare. See our [[link: /cost/hydrafacial | hydrafacial cost page]] and [[link: /hydrafacial | overview]].
## Base session and boosters
The base session is the standard cleansing, exfoliation and serum. A booster is an extra serum applied for a specific purpose. Ask what the booster is meant to do, what it contains, and whether you need it at all. A booster is optional for most people, and the price can add a lot.
## Add-ons
Some clinics add steps such as LED light, lymphatic massage or extra masks. Each should have its own price. Ask which add-ons are included in the base price, and which are extra.
## Packs
A pack of several sessions often lowers the price per session. To compare, divide the pack total by the number of sessions and add any boosters you will want each time. Then check:
- How long the sessions are valid.
- What happens if your skin reacts and you have to stop.
- Whether you can transfer sessions or get a refund.
- Whether the same booster is used in each session.
Do not pay for a large pack before you have tried one session. See [[link: /learn/how-often-hydrafacial | how often to have a hydrafacial]].
## Consumables and tips
Disposable tips and serums are a cost to the clinic. Ask whether tips are single use or cleaned between clients, and whether the quote includes them. Aftercare products sold at the clinic should have separate prices and be optional.
## What else to ask in writing
- Who performs the session, and with what qualification.
- Whether a skin check comes first, and if it costs extra.
- What the review visit costs if your skin reacts.
- What the cancellation and refund policy is.
- What taxes are added to the quote.
## Red flags
- A price that is only given over the phone and not in writing.
- A quote that changes on the day.
- Pressure to buy a pack or leave a deposit the same day.
- A promise of a particular skin result.
- No skin check before the session.
- Refusal to say who performs the session.
> A clear written quote is a reasonable thing to ask for, and a clinic that cannot provide one is giving you information.
## What changes the price
Common factors include the city, the type of clinic, the person performing the session, the device and serum, and the add-ons. Our [[link: /cost/hydrafacial | cost page]] shows each line. City pages for [[link: /hydrafacial-in-delhi | Delhi]] and [[link: /hydrafacial-in-gurgaon | Gurgaon]] show sample ranges once real quotes are confirmed. Until then, treat any figure you see online as unverified, including ours.
## Insurance
Cosmetic skin care is usually not covered by health insurance. Ask your insurer in writing if you want to be sure. TODO-VERIFY: reviewer or lawyer confirms wording.
## Who should wait
Do not pay for a session if you have sunburn, infection, or a question about pregnancy or recent isotretinoin use. Get advice first.
[[faq: Why do hydrafacial prices differ between clinics? | Differences come from the device, the serum, add-ons, the person performing it, and the city. A clinic with higher prices may include more steps. Compare line by line.]]
[[faq: Is a pack worth it? | It depends on whether you will use every session and whether your skin tolerates it. Try one session first.]]
[[faq: Should I pay a deposit? | Be careful with large deposits. Ask for the refund terms in writing.]]
Related reading: [[link: /learn/hydrafacial-vs-regular-facial | hydrafacial vs a regular facial]], [[link: /learn/hydrafacial-before-wedding-timing | timing before a wedding]]. More city pages: [[link: /hydrafacial-in-lucknow | Lucknow]], [[link: /hydrafacial-in-kanpur | Kanpur]].
Message us on WhatsApp if you want help preparing questions for a registered doctor.
[[sources: Sources to be added after reviewer sign-off. TODO-VERIFY: a named consumer protection or regulator page, opened and checked.]]
`),
  },
];
