// SAMPLE CONTENT, PENDING DOCTOR REVIEW.
// Eight acne guides written for staging. reviewerId "sample-reviewer" is a placeholder: no doctor has reviewed
// these posts. TODO-VERIFY: a registered dermatologist signs off every claim and every timeline, and a person
// opens each Sources line before production. Markup is described in content/blog/README.md.
import type { BlogPost } from "@/content/types";

const lines = (s: string): string[] =>
  s
    .trim()
    .split("\n")
    .map((x) => x.trim())
    .filter(Boolean);

const base = {
  treatmentSlug: "acne-treatment",
  reviewerId: "sample-reviewer",
  published: true,
  datePublished: "2026-11-21",
  dateModified: "2026-11-21",
} as const;

export const acnePosts: BlogPost[] = [
  // TODO-VERIFY: grading wording from reviewer; photo guide only from the founder.
  {
    ...base,
    slug: "acne-grades-when-to-see-doctor",
    title: "Acne grades: when pimples need a dermatologist",
    excerpt: "How doctors describe mild, moderate and severe acne, which signs need a visit this week, and what a first appointment covers.",
    minutes: 5,
    thumb: 1,
    body: lines(`
[[reviewer]]
Doctors usually describe acne as mild, moderate or severe, based on the kind of spots and how many there are. Blackheads and a few small pimples are mild. Many red, swollen spots, or deep painful lumps, are moderate to severe and should be seen by a doctor. This guide supports our [[link: /acne-treatment | acne treatment overview]].
## The usual grades
Systems differ between doctors, so treat the list below as a plain-language guide and not as a diagnosis.
- Mild: mostly blackheads and whiteheads, with a few small red pimples.
- Moderate: more red spots, many with pus, spread over the face and sometimes the chest or back.
- Moderately severe: many inflamed spots and some deep lumps.
- Severe: large, painful lumps (nodules or cysts) that can leave marks. These often appear on the jaw, back and chest too.
The number of spots is only part of the picture. A doctor also asks how long the acne has lasted, whether it comes back after treatment, and whether it leaves marks.
## Blackheads, pimples and cysts
A blackhead is a blocked pore that stays open at the surface. A whitehead stays closed. A pimple with pus is a red spot with a white or yellow tip. A cyst or nodule sits deeper, feels hard or tender, and may last weeks. Deep lumps are the type most likely to scar, so they are the ones not to squeeze or leave alone for months.
## Signs that need a doctor this week
- Painful, deep lumps that keep returning in the same place.
- Acne that began suddenly in adulthood, or after a new medicine or supplement.
- Fever, spreading redness or pus that looks like an infection.
- Acne together with irregular periods or excess facial or body hair in women.
- Dark marks or pits that are appearing after the pimples heal.
Pharmacy creams for a few small spots are common. If there is no change after several weeks, or the acne is getting worse, an examination gives you a plan that fits your skin.
## What a first visit covers
The doctor looks at your face, back and chest, asks how long this has been going on, and asks about medicines, supplements, skin products and family history. Women may be asked about periods and pregnancy plans, because some acne medicines cannot be used in pregnancy. You may leave with creams, a tablet, or a plan to review in a few weeks. Ask what each item is for and how long you should use it before judging it.
> A grade describes how acne looks today. It does not predict how long treatment will take or how your skin will respond.
## Who should wait
Do not start a new tablet, peel or light session until a doctor has seen you if you are pregnant or planning pregnancy, or if you have an infected, very sore area. A doctor may also ask you to pause some skin products before a procedure.
## Questions worth asking
- Which grade or type of acne do you think I have?
- Do I need tests before any tablet?
- How many visits should I plan for, and how often?
- What will treatment cost for the first three months? Our [[link: /cost/acne-treatment | cost page]] lists the lines to ask about.
[[faq: How many grades of acne are there? | Different doctors use different scales. Most patients hear mild, moderate or severe, sometimes with a fourth step between moderate and severe. Ask which scale your doctor uses.]]
[[faq: Can I treat cystic acne with a pharmacy cream? | Deep lumps often need a prescription plan and a review. Creams alone may not be enough, and squeezing can leave marks. A dermatologist can advise.]]
[[faq: Should I see a dermatologist or a general physician? | Both can see acne. A dermatologist has more training in skin conditions, which helps when acne is moderate or severe, keeps returning or leaves marks.]]
Related reading: [[link: /learn/acne-medicines-doctors-prescribe | acne medicines explained]] and [[link: /learn/acne-peels-light-laser | peels and light for acne]]. If you are planning visits, see how a course is organised in [[link: /acne-treatment-in-delhi | Delhi]] and [[link: /acne-treatment-in-gurgaon | Gurgaon]].
Message us on WhatsApp if you want help preparing questions for a registered doctor. We do not diagnose or prescribe.
[[sources: NHS patient information on acne; American Academy of Dermatology patient information on acne. TODO-VERIFY: open each page and confirm wording.]]
`),
  },
  // TODO-VERIFY: drug classes only; reviewer checks every sentence.
  {
    ...base,
    slug: "acne-medicines-doctors-prescribe",
    title: "Acne medicines doctors prescribe, explained",
    excerpt: "The main groups of acne medicines, why some are time-limited, what needs a prescription, and the mistakes that slow progress.",
    minutes: 6,
    thumb: 2,
    body: lines(`
[[reviewer]]
Doctors usually prescribe acne medicine in groups: creams or gels used on the skin, antibiotics for a limited time, hormone-related tablets for some women, and isotretinoin for severe or stubborn acne. Which group suits you depends on the type of acne and your health. This guide names classes only. Our [[link: /acne-treatment | acne treatment overview]] explains the wider plan.
## Creams and gels
Most plans start here. Doctors use several types, each with a different job.
- Retinoid creams help unblock pores and are usually used at night. They can cause dryness and peeling in the first weeks.
- Benzoyl peroxide reduces the bacteria that feed inflamed spots. It can bleach fabric and dry the skin.
- Topical antibiotics are often combined with another ingredient so bacteria are less likely to adapt.
- Azelaic acid is sometimes used when marks or sensitive skin are a concern.
Some creams are sold without a prescription and some are not. A doctor can say which ones to combine, since stacking several strong products can burn the skin.
## Antibiotic tablets and why they are time-limited
Doctors sometimes add an antibiotic tablet for moderate or inflamed acne. The course is usually kept as short as the plan allows, because long use can make bacteria resistant and can cause side effects. Ask how long you should take it and what to expect when it ends. Many doctors pair a tablet with a cream that continues after the tablet stops.
## Hormone-related options for some women
When acne follows a pattern, such as a monthly flare along the jaw, a doctor may talk about hormone-related medicines. They are decided case by case and need questions about periods, pregnancy plans and medical history. They are not suitable for everyone. If you have irregular cycles, tell the doctor, who may ask for tests.
## Isotretinoin
Isotretinoin is a strong prescription tablet used for severe acne or acne that has not responded to other plans. It needs pregnancy prevention, regular follow-up and sometimes blood tests. We cover the questions to ask in [[link: /learn/isotretinoin-acne-questions | our isotretinoin guide]].
## What needs a prescription
Antibiotic tablets, hormone-related medicines and isotretinoin are prescription medicines. Do not buy them without one, and do not share a friend's strip. A prescription also gives a doctor the chance to check allergies and other medicines you take.
> Medicines in this guide are described by group only. Names, doses and timing are decided by a registered doctor who has examined you.
## Common mistakes
- Stopping early when the skin looks better, then seeing acne return.
- Switching creams every week. Most products need weeks before you can judge them.
- Using many strong products at once.
- Skipping sunscreen while using drying creams or tablets.
- Picking at spots, which can leave marks.
## Who should wait
Tell the doctor first if you are pregnant, planning pregnancy or breastfeeding. Some acne medicines can harm an unborn baby. Also mention liver or kidney conditions, other medicines and any past reaction to antibiotics.
## Questions worth asking
- What is each product for, and when do I apply it?
- How many weeks before we judge whether it helps?
- What side effects should make me call you?
- How much will the first three months of medicines cost? Use our [[link: /cost/acne-treatment | acne cost page]] as a checklist.
[[faq: Which tablet is used for acne? | There is no single choice. The right medicine depends on the acne type, your health, pregnancy plans and what you tried before. A doctor decides after an examination.]]
[[faq: How long do acne medicines take to work? | Many people wait several weeks before a clear change, and some skin gets worse briefly at first. Your doctor sets a review date. TODO-VERIFY: reviewer range.]]
[[faq: Can I stop once the pimples are gone? | Not without asking. Stopping early is a common reason acne returns. Doctors often plan a gradual change to a maintenance routine.]]
Related reading: [[link: /learn/how-long-acne-treatment-takes | how long acne treatment takes]], [[link: /learn/adult-hormonal-acne-women | adult acne in women]] and [[link: /learn/fungal-acne-vs-bacterial-acne | fungal and bacterial acne]]. City guides: [[link: /acne-treatment-in-lucknow | Lucknow]] and [[link: /acne-treatment-in-kanpur | Kanpur]].
Message us on WhatsApp if you want help preparing questions for a registered doctor. We do not prescribe.
[[sources: NHS patient information on acne treatments; British Association of Dermatologists patient information leaflets on acne. TODO-VERIFY: open each page and confirm wording.]]
`),
  },
  // TODO-VERIFY: two reviewers needed for this post; no dose; confirm pregnancy-prevention wording with the reviewer.
  {
    ...base,
    slug: "isotretinoin-acne-questions",
    title: "Isotretinoin for acne: questions to ask your doctor",
    excerpt: "What isotretinoin is, who doctors consider it for, the pregnancy rules, the checks during treatment, and why you need a prescription.",
    minutes: 6,
    thumb: 3,
    body: lines(`
[[reviewer]]
Isotretinoin is a strong prescription tablet that doctors consider for severe acne, or for acne that returns after other plans. It carries serious risks, including harm to an unborn baby, so it needs pregnancy prevention, check-ups and sometimes blood tests. Only a registered doctor can decide if it suits you. See our wider [[link: /acne-treatment | acne treatment guide]].
## What it is
Isotretinoin is a vitamin A related medicine. It reduces oil production in the skin and affects how pores clog. Doctors usually consider it for severe nodular acne, acne that leaves marks, or acne that has not improved with other plans.
## Who doctors consider it for
A doctor may raise the option when acne is deep and painful, scarring, or returning after other treatments. Age, weight, pregnancy plans, liver health, mood history and other medicines all enter the decision. A teenager and a parent usually make the decision with the doctor together.
## Pregnancy rules
This is the most important point. Isotretinoin can cause serious birth defects. Women who could become pregnant are usually asked for a negative pregnancy test before starting, regular tests during treatment, and reliable contraception for a period set by the doctor. Tell the doctor straight away if you think you may be pregnant. Men are usually told to ask about the rules that apply to them.
## Checks during treatment
Doctors often ask for blood tests, for example liver and blood fat levels, before and during treatment. Your visits are not optional extras. They are how the doctor spots a problem early. TODO-VERIFY: reviewer confirms which tests and how often.
## Common effects
- Dry lips and skin, sometimes dry eyes or a dry nose.
- Sun sensitivity, so sunscreen and shade matter.
- Muscle or joint aches in some people.
- A flare of acne in the first weeks for some.
Report severe headache, vision changes, stomach pain, yellowing of the skin or eyes, or any thoughts of self-harm to the doctor or emergency services without delay.
## Mood
Some people report low mood while taking it. Evidence on the link is debated, and doctors still ask about mood before and during treatment. Tell family or friends what you are taking so they can notice changes. If you feel very low or have thoughts of harming yourself, seek urgent help.
## Why you need a prescription
Do not buy isotretinoin from an online seller or a friend. A product with no prescription has no check on pregnancy, liver health or your other medicines, and you cannot be sure what is inside. A doctor can also plan what to avoid, such as waxing or some peels, during treatment.
> This page gives questions to ask. It does not give a dose or a reason to start or stop any medicine.
## Who should wait
Wait and talk to a doctor if you are pregnant, planning pregnancy or breastfeeding, or have liver disease, high blood fat levels or a history of depression. Also tell the doctor about vitamin A supplements and other medicines.
## Questions to ask your doctor
- Why is this the right option for my acne?
- What pregnancy test and contraception rules apply to me?
- Which blood tests do I need, and when?
- What side effects should I report, and who do I call after hours?
- Can I have a peel, laser or waxing during treatment? See [[link: /learn/acne-peels-light-laser | peels and light for acne]].
- What will visits and tests add to the cost? Our [[link: /cost/acne-treatment | cost page]] lists items to ask about.
[[faq: Is isotretinoin the same as a normal antibiotic? | No. It is a different type of medicine with different risks and checks. Antibiotics are described in our guide to acne medicines.]]
[[faq: Will acne come back after isotretinoin? | It can. Some people need another plan later. Ask your doctor what maintenance routine to use afterwards.]]
[[faq: Can I take it without a prescription if I use a low amount? | No. Using it without a doctor skips the pregnancy and blood checks and is not advised.]]
Related reading: [[link: /learn/how-long-acne-treatment-takes | how long acne treatment takes]]. Visit planning: [[link: /acne-treatment-in-delhi | Delhi]], [[link: /acne-treatment-in-gurgaon | Gurgaon]].
Message us on WhatsApp if you want help preparing questions for a registered doctor. We do not prescribe.
[[sources: British Association of Dermatologists patient information leaflet on isotretinoin; NHS patient information on isotretinoin. TODO-VERIFY: open each page and confirm wording.]]
`),
  },
  // TODO-VERIFY: reviewer sets wording; no self-diagnosis.
  {
    ...base,
    slug: "fungal-acne-vs-bacterial-acne",
    title: "Fungal acne vs bacterial acne: how doctors tell",
    excerpt: "Why itchy, uniform bumps can be a yeast related condition and not ordinary acne, how doctors check, and why the wrong cream can make it worse.",
    minutes: 5,
    thumb: 2,
    body: lines(`
[[reviewer]]
Some small, itchy, same-size bumps on the forehead, chest or back are caused by yeast living in hair follicles, and are often called fungal acne. Doctors call it Malassezia folliculitis. Ordinary acne is driven by oil, clogged pores and bacteria. A doctor can tell them apart by examination, which matters because they need different treatment. See the main [[link: /acne-treatment | acne treatment guide]].
## Why the difference matters
Ordinary acne medicines target oil, blocked pores and bacteria. Antibiotics can reduce yeast competitors on the skin, so a long antibiotic course may leave yeast-related bumps worse. A cream that suits one type can do little for the other. That is why a guess from a photo is risky.
## Clues doctors look for
- Bumps that are all about the same size.
- Itching, which is less common in ordinary acne.
- Spots on the forehead, upper back, chest or shoulders.
- Bumps that flare with sweat, humid weather or tight clothes.
- Acne that gets worse during an antibiotic course.
- No blackheads, which are usual in ordinary acne.
These clues point towards a possibility. They do not confirm it, and both conditions can occur together.
## How a doctor checks
The doctor looks closely and asks about itching, sweating, medicines and how the spots reacted to earlier treatment. A skin scraping or swab may be used to look for yeast under a microscope. Sometimes the doctor starts a trial of treatment and reviews the response. You may be asked to bring the creams you have used.
## Why the wrong plan backfires
Using ordinary acne creams repeatedly on yeast-related bumps may do nothing, and thick moisturisers or oily products can feed the yeast. Skipping a diagnosis can mean months of treatment that does not match the cause. Strong steroid creams can also thin the skin and make the problem worse. Do not apply a steroid cream to your face without advice.
> If bumps are itchy, uniform and not responding to acne creams after a few weeks, ask a doctor whether another cause is possible.
## Treatment in outline
Plans for yeast-related folliculitis often use medicated washes or antifungal medicines chosen by the doctor, with attention to sweat and tight clothing. TODO-VERIFY: reviewer confirms wording. Do not start antifungal tablets without a prescription.
## What to bring to the visit
Bring a list of every cream, wash and tablet you have used, with rough dates. Note when the bumps started, whether they itch, and whether they change with sweating or after workouts. Photos taken in daylight every week or two help the doctor see how the spots have behaved.
## Who should wait
Do not begin a peel, laser or strong acid on bumps you have not had examined. See a doctor soon if there is fever, spreading redness, pus or pain. Anyone with diabetes or a weak immune system should have new rashes checked early.
## Questions worth asking
- Do you think this is ordinary acne, a yeast-related problem, or both?
- Do I need a scraping or swab?
- Which of my current products should I stop?
- How many weeks before we review?
[[faq: Is fungal acne really acne? | The name is used by many people, but it is a different condition from ordinary acne. It involves yeast in hair follicles, which is why doctors use a different term.]]
[[faq: Can I diagnose fungal acne at home? | No. The signs overlap with ordinary acne and other rashes. A doctor can check and decide whether tests are needed.]]
[[faq: Will it come back? | Yeast-related bumps can return, especially with sweat and heat. Ask your doctor how to lower the chance of a repeat.]]
Related reading: [[link: /learn/acne-grades-when-to-see-doctor | acne grades and when to see a doctor]] and [[link: /learn/acne-medicines-doctors-prescribe | acne medicines explained]]. Cost lines for visits are on the [[link: /cost/acne-treatment | acne cost page]]; city pages for [[link: /acne-treatment-in-lucknow | Lucknow]] and [[link: /acne-treatment-in-kanpur | Kanpur]] cover follow-up planning.
Message us on WhatsApp if you want help preparing questions for a registered doctor. We do not diagnose.
[[sources: American Academy of Dermatology patient information on folliculitis; NHS patient information on acne. TODO-VERIFY: open each page and confirm that Malassezia folliculitis is covered.]]
`),
  },
  // TODO-VERIFY: no balancing-hormone claims; reviewer confirms tests wording.
  {
    ...base,
    slug: "adult-hormonal-acne-women",
    title: "Adult and hormonal acne in women: what to check",
    excerpt: "Why acne can appear after 25, the jawline pattern doctors mention, when tests are asked for, and what to tell the doctor about pregnancy plans.",
    minutes: 5,
    thumb: 3,
    body: lines(`
[[reviewer]]
Acne after 25 is common in women. It often sits along the jaw and chin and may flare around periods. A doctor checks your skin, asks about periods and pregnancy plans, and decides whether any tests are needed before choosing treatment. Many plans use creams first. See our [[link: /acne-treatment | acne treatment guide]] for the full picture.
## Why acne appears or continues in adulthood
Acne is linked to oil production, clogged pores, bacteria and inflammation. Hormone changes can add to the oil, which is one reason many women see flares before periods. Other contributors a doctor may discuss include certain medicines, some skin and hair products, and family history. Stress and poor sleep are often mentioned, and the evidence that they directly cause acne is limited. TODO-VERIFY: reviewer sets evidence level.
## The pattern doctors notice
Deep, tender spots on the jawline, chin and lower cheeks that come and go with the cycle are a typical description. A doctor still examines the face, because other conditions such as rosacea or folliculitis look similar. If you have only occasional pimples, no tests may be needed.
## When tests are asked for
A doctor may suggest tests if acne comes with irregular periods, excess facial or body hair, hair thinning, or sudden onset. These signs can point to a hormone condition such as polycystic ovary syndrome (PCOS), which has its own plan. Tests are advised by a doctor, based on your symptoms. Do not order hormone panels on your own without a doctor reviewing the results, since normal ranges depend on age and timing in the cycle.
## Pregnancy and medicines
If you are pregnant or planning to be, tell the doctor first. Some acne medicines, including strong tablets, are not used in pregnancy. Your doctor may choose a different plan, and may advise on contraception while treatment runs. Breastfeeding also changes the choices. Our [[link: /learn/acne-medicines-doctors-prescribe | guide to acne medicines]] lists the groups in plain terms, and the [[link: /learn/isotretinoin-acne-questions | isotretinoin guide]] covers the pregnancy rules in more detail.
## What daily routine helps
- A gentle wash twice a day, without scrubbing.
- A light moisturiser and sunscreen.
- Not squeezing deep spots.
- Checking cosmetics and hair oils that sit on the forehead and jawline.
- Sleeping and eating at regular times, which may help overall health even if the direct effect on acne is unclear.
> Hormone-related acne is common, and a doctor may look at the pattern before choosing a plan.
## Planning visits
Most plans need a review after several weeks, so ask how often you will be seen and whether some reviews can be done by video. Keep the list of products you use, because some cosmetics and hair oils can add to breakouts along the hairline and jaw.
## Who should wait
Do not start any tablet, peel or light session without telling the doctor about pregnancy plans. Anyone with a sudden severe flare, fever or spreading redness should be seen promptly.
## Questions worth asking
- Do my periods or other symptoms suggest tests?
- Which options fit if I plan a pregnancy in the next year?
- How many months should I follow this plan before we review?
- What will visits and any tests cost? See the [[link: /cost/acne-treatment | acne cost page]].
[[faq: Is adult acne different from teenage acne? | The spots look similar, but adult acne often sits lower on the face and may flare with the cycle. The treatment plan depends on skin type, pregnancy plans and other health factors.]]
[[faq: Do I need a hormone test for acne? | Not always. A doctor usually asks when there are other signs such as irregular periods or excess hair.]]
[[faq: Can I use acne medicines if I might get pregnant? | Some cannot be used. Tell your doctor about pregnancy plans before any prescription.]]
Related reading: [[link: /learn/how-long-acne-treatment-takes | how long acne treatment takes]]. Local planning: [[link: /acne-treatment-in-gurgaon | Gurgaon]] and [[link: /acne-treatment-in-delhi | Delhi]].
Message us on WhatsApp if you want help preparing questions for a registered doctor.
[[sources: NHS patient information on acne; NHS patient information on polycystic ovary syndrome. TODO-VERIFY: open each page and confirm wording.]]
`),
  },
  // TODO-VERIFY: session counts and intervals come from the reviewer only.
  {
    ...base,
    slug: "acne-peels-light-laser",
    title: "Chemical peels and light for acne: what they can do",
    excerpt: "Where peels, light sessions and lasers may help acne, where they do not, the pigment risk in darker skin, and how they fit with tablets.",
    minutes: 6,
    thumb: 1,
    body: lines(`
[[reviewer]]
Chemical peels and light-based sessions are sometimes added to an acne plan to help with clogged pores, marks or inflammation. They do not replace the creams or tablets a doctor prescribes, and results vary. Risks include redness, flaking and dark marks, which are more of a concern in darker skin. See our [[link: /acne-treatment | acne treatment guide]].
## Where a procedure may help
Doctors sometimes use a superficial peel for blackheads, whiteheads and mild marks. Light-based devices, including blue light, are used for some inflamed acne. Lasers are used by some doctors for marks and scars, and are covered with scars in [[link: /learn/acne-scar-types-treatment | our scar guide]]. Evidence differs by method and by person, and a reviewer will set the final wording. TODO-VERIFY.
## Where they do not help
A procedure does not remove the cause of acne, and acne can return. Deep cysts usually need a medical plan first. A peel on actively infected or very sore skin can make things worse. Do not expect one session to change your skin.
## Sessions and spacing
Doctors commonly plan a series of sessions some weeks apart. The number depends on your skin, the method and your response. TODO-VERIFY: reviewer sets any range. Ask for the number of sessions, the gap between them and the review point in writing.
## What a visit looks like
The doctor examines the skin, asks about medicines and recent sun, and may do a small patch test. The skin is cleaned, the peel or device is applied for a set time, and the skin is cooled or neutralised as needed. Redness and a tight feeling are common. Flaking can follow for several days, depending on the strength.
## Darker skin and pigment risk
Indian skin tones can develop dark patches after irritation, called post-inflammatory hyperpigmentation. Strong peels and some devices raise this risk. Many doctors choose gentler settings or different methods. Ask how the doctor adjusts the plan for your skin tone and what they would do if marks appear.
## Timing with tablets
Some acne tablets make the skin more fragile. Doctors often ask people to wait a set time after certain tablets before a peel or laser. Do not decide the interval yourself. If you are taking isotretinoin, see [[link: /learn/isotretinoin-acne-questions | our isotretinoin guide]] and ask the prescribing doctor before any procedure.
> Never have a peel or laser on skin that is sunburnt, infected or newly irritated.
## What the cost lines look like
Quotes usually list the consultation, each session, any numbing or cooling, products for aftercare and follow-up visits. Our [[link: /cost/acne-treatment | cost page]] shows the lines to ask about in writing. Packs with many sessions need a clear refund and exit policy before you pay.
## Who should wait
Pregnancy, active infection, cold sores, recent sun exposure or tanning, a tendency to form thick scars, and recent strong tablets are all reasons to ask a doctor before starting.
## Questions worth asking
- Why this method for my skin, and what else could I use?
- What are the risks for my skin tone?
- Who performs the session, and with what training?
- What do I do if my skin reacts?
[[faq: Can a chemical peel treat acne? | A peel may help some people as part of a plan, but it is not a stand-alone answer. Acne can return, and a doctor decides what suits your skin.]]
[[faq: Is laser better than a peel for acne? | They do different jobs. Peels and light sessions are used for different problems, and one is not better in general. Ask which fits your goal.]]
[[faq: How soon can I wear makeup after a peel? | It depends on the peel. Your doctor gives instructions on timing and products.]]
Related reading: [[link: /hydrafacial | hydrafacial, a skin-care session that does not treat acne]], [[link: /learn/hydrafacial-vs-peel-vs-microdermabrasion | hydrafacial, peel and microdermabrasion compared]]. City pages: [[link: /acne-treatment-in-lucknow | Lucknow]], [[link: /acne-treatment-in-kanpur | Kanpur]].
Message us on WhatsApp if you want help preparing questions for a registered doctor.
[[sources: American Academy of Dermatology patient information on acne treatment; NHS patient information on acne. TODO-VERIFY: confirm device and peel statements with the reviewer.]]
`),
  },
  // TODO-VERIFY: scar types from the reviewer; diagram from the founder.
  {
    ...base,
    slug: "acne-scar-types-treatment",
    title: "Acne scars: types and when treatment makes sense",
    excerpt: "The difference between dark marks and true scars, the main scar shapes, why active acne comes first, and how doctors describe options.",
    minutes: 6,
    thumb: 2,
    body: lines(`
[[reviewer]]
Acne can leave two different problems. Flat dark or red marks usually fade over months. True scars are dents or raised areas in the skin and are slower to change. Doctors treat active acne first, then look at scars, and results vary with the scar type and skin. See our [[link: /acne-treatment | acne treatment guide]].
## Marks and scars are different
A flat brown or red mark is a pigment or blood-vessel change left after a pimple heals. It is not a dent. Many fade slowly, and sunscreen helps stop them getting darker. A scar involves the skin's structure. It can be pitted or raised, and it does not fade on its own in the same way.
## Scar types doctors describe
- Rolling scars: shallow, wide dips with sloping edges.
- Boxcar scars: round or oval dents with sharp edges.
- Ice pick scars: narrow, deep, pit-like marks.
- Raised scars: thick lumps, more common on the jawline, chest and back. Keloid tendency runs in some families.
Many people have more than one type, which is why a doctor examines the skin under light and by touch before suggesting a plan.
## Treat active acne first
New pimples create new marks, so most doctors start by controlling acne. Treating scars while acne is active can waste money and may irritate the skin. See [[link: /learn/how-long-acne-treatment-takes | how long acne treatment takes]] for a realistic timeline.
## Options in plain terms
Doctors describe several options, and a plan often combines them. TODO-VERIFY: reviewer confirms each description.
- Chemical peels for surface texture and marks.
- Microneedling, using tiny needles to prompt skin changes.
- Laser or light-based devices, with settings adjusted for skin tone.
- Small procedures such as subcision, which releases the tissue under a dented scar.
- Fillers for some soft dents, temporary and used by selected doctors.
- Injections or other methods for raised scars, decided by a doctor.
Each has risks, including redness, dark marks, infection and uneven results. In darker skin, some devices raise the chance of pigment change. A doctor can explain how the method is adjusted.
## What results depend on
Scar type, depth, age of scars, skin tone, how many sessions you can attend and how well aftercare is followed all matter. Many scars improve in look without disappearing. Ask what level of change is realistic for your scars and how it will be judged. Before-and-after photos from one clinic cannot predict your result.
> A scar plan is a set of options over months. It is not a single procedure with a fixed outcome.
## What it costs
Scar plans usually run as courses. Quotes differ because of the method, the number of sessions, the device and who performs them. Our [[link: /cost/acne-treatment | cost page]] shows the lines to compare, and the city pages for [[link: /acne-treatment-in-delhi | Delhi]] and [[link: /acne-treatment-in-gurgaon | Gurgaon]] cover follow-up planning.
## Who should wait
Wait if acne is active, if your skin is sunburnt or infected, if you took isotretinoin recently, or if you are pregnant. Anyone with a history of thick scarring should tell the doctor before any needle or laser.
## Questions worth asking
- Which of my scars are dents and which are marks?
- What would you try first, and what is the plan if my skin reacts?
- How many sessions, and what does each cost?
[[faq: Can acne scars be removed? | Treatment can change how scars look, often partly. Doctors rarely promise that a scar will disappear. Ask what is realistic for your type.]]
[[faq: Do dark marks need treatment? | Many fade with time and sun protection. A doctor can suggest options if they stay or worry you.]]
[[faq: Can I squeeze pimples to avoid marks? | Squeezing raises the chance of marks and infection. Leave deep spots to a doctor.]]
Related reading: [[link: /learn/acne-peels-light-laser | peels and light for acne]], [[link: /learn/acne-grades-when-to-see-doctor | acne grades]].
Message us on WhatsApp if you want help preparing questions for a registered doctor.
[[sources: American Academy of Dermatology patient information on acne scars; NHS patient information on scars. TODO-VERIFY: open each page and confirm wording.]]
`),
  },
  // TODO-VERIFY: timeline is a reviewer range, never a promise.
  {
    ...base,
    slug: "how-long-acne-treatment-takes",
    title: "How long acne treatment takes and why acne returns",
    excerpt: "A realistic week-by-week picture of acne treatment, why a flare can come first, why acne returns, and when to ask a doctor to change the plan.",
    minutes: 6,
    thumb: 3,
    body: lines(`
[[reviewer]]
Acne treatment is usually a course of months, not weeks. Many plans show a first change after several weeks, and some skin gets worse briefly at the start. Acne can return when treatment stops, so doctors often plan a maintenance routine. Results vary. See our [[link: /acne-treatment | acne treatment guide]] for the options. TODO-VERIFY: reviewer sets the ranges below.
## A rough timeline
- Weeks 1 to 2: creams can cause dryness, stinging or peeling. Some people see a flare. Doctors often ask you to keep going unless it is severe.
- Weeks 4 to 6: a review visit. The doctor checks whether spots are fewer and decides whether to continue or change.
- Around month 3: many plans reach a clearer picture of what is working. Marks may still be visible even where new spots slow down.
- After that: some people move to a lighter maintenance routine, others need a longer plan.
The pattern differs by acne type and medicine. Deep cystic acne often takes longer than mild acne, and doctors may adjust the plan more than once.
## Why the first weeks can feel worse
Retinoid creams and some other medicines clear blocked pores that were already forming under the skin. That can bring a short flare. It does not always mean the treatment is wrong, and it should not be ignored if the skin is very sore. Call your doctor if irritation is severe or spreading.
## Why acne returns
Treatment controls the factors behind acne. It does not change your skin for good, so spots can come back when treatment stops. Triggers doctors discuss include hormone changes, some medicines, heavy products on the skin, and stopping creams too early. Seasonal sweat and heat can also play a part. If acne returns, tell the doctor early, since a short plan change may be enough.
## Food and face wash myths
Evidence that food directly causes acne is mixed, and some studies link high-sugar diets and some dairy to flares in some people. TODO-VERIFY: reviewer sets evidence wording. Scrubbing and frequent face-washing can irritate the skin and make acne worse. A gentle wash twice a day is enough for most people. Home pastes and lemon on the skin can burn, and they are not advised.
## When to ask for a change
- No improvement after the period your doctor set.
- Side effects you cannot manage.
- New marks forming faster than old ones fade.
- You are pregnant, or planning to be.
Doctors may change the medicine, adjust the strength or add a procedure. See [[link: /learn/acne-medicines-doctors-prescribe | acne medicines explained]] and [[link: /learn/acne-peels-light-laser | peels and light for acne]].
> A plan that is reviewed on a schedule is easier to judge than one that is changed whenever the skin has a bad week.
## Planning the visits and the cost
Count the consultation, follow-up visits, medicines per month and any procedures. Our [[link: /cost/acne-treatment | cost page]] has a simple way to add these up. If you live outside a big city, ask how follow-ups can be arranged, for example by video, and which visits must be in person. Our pages for [[link: /acne-treatment-in-lucknow | Lucknow]] and [[link: /acne-treatment-in-kanpur | Kanpur]] cover travel planning.
## Who should wait
Pregnant women and those planning pregnancy should talk to a doctor before any acne medicine. Anyone with a very sore, infected or rapidly spreading flare should be seen quickly.
[[faq: How many months does acne treatment take? | Many plans last several months and some last longer. Your doctor sets a review date and changes the plan if needed.]]
[[faq: Why did my acne come back after I stopped? | The causes behind acne can continue after treatment ends. Ask your doctor about a maintenance plan.]]
[[faq: Is it normal for acne to get worse at first? | Some people see a short flare with certain medicines. Tell your doctor if it is severe or lasts longer than expected.]]
Related reading: [[link: /learn/adult-hormonal-acne-women | adult acne in women]].
Message us on WhatsApp if you want help preparing questions for a registered doctor.
[[sources: NHS patient information on acne; American Academy of Dermatology patient information on acne. TODO-VERIFY: open each page and confirm wording.]]
`),
  },
];
