// SAMPLE CONTENT, PENDING DOCTOR REVIEW.
// Eight hair transplant guides for staging. reviewerId "sample-reviewer" is a placeholder: no doctor has reviewed
// these posts. TODO-VERIFY: a registered dermatologist or hair surgeon signs off every statement marked [R] in the
// source brief, every day and month in the recovery calendar, and every Sources line is opened before production.
// No density or survival percentages, no restoration or approval claims, no devices or brands, no competitor figures.
// The long-term questions are answered under neutral headings such as "how long transplanted hairs last".
import type { BlogPost } from "@/content/types";

const lines = (s: string): string[] =>
  s
    .trim()
    .split("\n")
    .map((x) => x.trim())
    .filter(Boolean);

const base = {
  treatmentSlug: "hair-transplant",
  reviewerId: "sample-reviewer",
  published: true,
  datePublished: "2026-11-21",
  dateModified: "2026-11-21",
} as const;

export const hairTransplantPosts: BlogPost[] = [
  // H1
  {
    ...base,
    slug: "hair-transplant-fue-fut-dhi",
    title: "FUE, FUT and DHI: how they differ and what to ask",
    excerpt: "How follicles are taken in FUE and FUT, what DHI means, the scar and shaving differences, who each usually fits, and questions to ask the surgeon.",
    minutes: 6,
    thumb: 1,
    body: lines(`
[[reviewer]]
FUE takes follicles one at a time with a small punch, and FUT removes a thin strip of scalp from the back and splits it into grafts. DHI is a name some clinics use for a version of FUE in which a pen-like tool places the hairs. Which fits you depends on your donor area, your goals and the surgeon. See our [[link: /hair-transplant | hair transplant overview]].
## How follicles are taken
- FUE (follicular unit extraction): the surgeon removes individual follicular units from the donor area with a tiny punch. The donor area is usually trimmed short, and some clinics shave it.
- FUT (follicular unit transplantation, strip method): the surgeon removes a thin strip of scalp from the back or sides, closes the wound with stitches or staples, and technicians split the strip under magnification.
- DHI (direct hair implantation): the term used by some clinics for FUE with a pen-like implanter that places each graft directly. TODO-VERIFY: reviewer confirms wording. Others use the term as a brand or marketing name, so ask what exactly is done.
## Scars
FUE leaves many tiny dot-like marks that are usually hard to see under short hair. FUT leaves a thin line across the back of the scalp, which can be visible if hair is cut very short. Both can scar in an unusual way in some people. Ask to see the surgeon's technique for closing and how scars are handled. Photos from one clinic cannot predict your own scarring.
## Shaving and downtime
FUE often needs the donor area to be trimmed, and some people need a larger shaved patch. FUT avoids shaving a wide area, though a strip must be taken. Recovery details appear in [[link: /learn/hair-transplant-recovery-calendar | the recovery calendar]]. Both involve swelling, scabbing and a period without strenuous exercise.
## Who each usually fits
- FUE: people who want to wear their hair very short, who prefer no linear scar, or who need grafts from more than one area, as decided by the surgeon.
- FUT: people with a lax scalp and a larger donor requirement, who accept a linear scar.
- DHI: people for whom the surgeon thinks the implanter method fits. Ask for the reasons.
No method fits everyone, and a good surgeon explains what fits your pattern. See [[link: /learn/hair-transplant-donor-area-limits | donor area limits]].
## Questions to ask
- Which method do you recommend for me, and why?
- Who removes the grafts and who places them? What is their training?
- How many grafts are planned, and what is the plan if the donor falls short?
- How is the donor area protected from over-harvesting?
- What does the quote include? See [[link: /learn/hair-transplant-cost-per-graft | how the bill is built]].
## Questions a clinic should not dodge
Ask who performs each step. In some places, unqualified staff perform parts of the surgery, and that is a recognised problem. Ask for the surgeon's name and check their registration on the state medical council register. TODO-VERIFY: reviewer cites an official source on qualification concerns.
## Risks
Bleeding, infection, swelling, numbness, scarring, uneven density and a result that looks different from what you expected can occur. Shedding after surgery is common and described in [[link: /learn/hair-transplant-shock-loss | our shock loss guide]].
> A method name is a label. The surgeon's skill and the plan matter more than the label.
## Cost
Prices depend on the method, the number of grafts, the surgeon, the clinic and the city. See [[link: /cost/hair-transplant | our cost page]].
## Who should wait
Wait if your hair loss is still changing quickly, if the cause is not known, or if you are unwell. A doctor may ask you to try medical treatment first. See [[link: /learn/hair-transplant-norwood-grade-candidate | candidacy by Norwood grade]].
[[faq: Which is better, FUE or FUT? | Neither is better for everyone. The right method depends on your donor area, hair length, scar tolerance and the surgeon's skill.]]
[[faq: Is DHI different from FUE? | Some clinics use DHI for a form of FUE with a pen-like implanter. Ask what exactly is done and by whom.]]
[[faq: Does FUE leave scars? | Every method leaves some mark. Ask what scars to expect and see how they are handled.]]
Related reading: [[link: /learn/hair-transplant-grafts-needed | how many grafts you need]]. City pages: [[link: /hair-transplant-in-delhi | Delhi]], [[link: /hair-transplant-in-gurgaon | Gurgaon]].
Message us on WhatsApp if you want help preparing questions for a registered doctor.
[[sources: International Society of Hair Restoration Surgery patient information on hair transplantation; American Academy of Dermatology patient information on hair transplants. TODO-VERIFY: open each page and confirm wording.]]
`),
  },
  // H2
  {
    ...base,
    slug: "hair-transplant-norwood-grade-candidate",
    title: "Am I a candidate? Hair transplant by Norwood grade",
    excerpt: "How the Norwood scale describes male pattern baldness, what a surgeon checks about the donor area, and why some people should wait or try medicines.",
    minutes: 6,
    thumb: 2,
    body: lines(`
[[reviewer]]
Whether you are a candidate depends on your pattern of loss, the donor hair available, your age and your goals. The Norwood scale helps describe the pattern, and a surgeon examines your scalp before saying anything about a plan. Some people are advised to wait or start medicines first. See our [[link: /hair-transplant | hair transplant overview]].
## The Norwood scale
The Norwood scale describes male pattern hair loss in stages, from a normal hairline to loss across the front, crown and sides. Stages are numbered, and some have variants. It is a descriptive tool, and surgeons use it to talk about the pattern, not to promise a result. The scale is from a medical paper published in 1975. TODO-VERIFY: reviewer confirms citation.
## What each broad stage often means
These are general statements for the reviewer to confirm. TODO-VERIFY: [R] for each.
- Early stages: a receding hairline or small crown loss. Many doctors suggest medical treatment and watching progress, and surgery may be discussed later.
- Middle stages: clear loss at the front and crown. Surgery may be considered if donor hair is good and the pattern has stabilised.
- Advanced stages: large areas of loss. The donor area may not be enough to cover everything, and the surgeon will set priorities.
No stage decides on its own whether surgery is possible. See [[link: /learn/hair-transplant-grafts-needed | how many grafts you need]].
## The donor check
The surgeon looks at the density and quality of hair on the back and sides, the thickness of each hair, scalp laxity and any signs of thinning there. A thin donor area limits what can be moved. See [[link: /learn/hair-transplant-donor-area-limits | donor area limits]].
## Why some should wait
- Young people whose loss is still progressing, since a transplanted hairline can look odd as the surrounding hair thins.
- People whose cause of thinning is not known or has not been treated.
- Anyone with unrealistic expectations of density or hairline.
- People with scalp disease, active infection or uncontrolled medical conditions.
A surgeon may ask you to wait a year or more and review. That is good advice, not an obstacle.
## Medical therapy first
Doctors often start with medicines for pattern thinning, which is covered in [[link: /learn/prp-vs-minoxidil-finasteride | the medicine comparison]]. Medicines may slow loss and keep existing hair while a transplant adds hair where it is gone. They are often continued after surgery.
## Other causes of hair loss
Thinning can come from thyroid problems, low iron, hormone conditions, medicines, scalp disease or stress. These need their own care, and a transplant does not treat them. A dermatologist can examine you and arrange tests.
## Questions to ask
- What stage do you think I am, and is the pattern stable?
- What is the donor area like, and how many grafts could be used?
- What would you do if my loss continues?
> A realistic plan describes a hairline that suits your face for years to come.
## Cost
The cost relates to the number of grafts and the plan. See [[link: /cost/hair-transplant | our cost page]].
## Who should wait
Wait if you are under 25 with fast loss, if the cause is unknown, or if your scalp has an infection or skin disease. Talk to a doctor if you are anxious about hair loss, since it can affect mood.
[[faq: At what age can I have a hair transplant? | There is no fixed age. Surgeons often prefer a stable pattern, which is why younger people with fast loss may be asked to wait.]]
[[faq: Can anyone with baldness have a transplant? | No. It depends on the donor area, the pattern and your health. A surgeon decides.]]
[[faq: Do I need medicines as well? | Often a doctor recommends them to protect existing hair. Ask what suits you.]]
Related reading: [[link: /learn/hair-transplant-for-women | hair transplant for women]]. City pages: [[link: /hair-transplant-in-lucknow | Lucknow]], [[link: /hair-transplant-in-kanpur | Kanpur]].
Message us on WhatsApp if you want help preparing questions for a registered doctor.
[[sources: Norwood OT. Male pattern baldness: classification and incidence. Southern Medical Journal, 1975; American Academy of Dermatology patient information on hair loss. TODO-VERIFY: open each source and confirm the citation details.]]
`),
  },
  // H3
  {
    ...base,
    slug: "hair-transplant-grafts-needed",
    title: "How many grafts do you need? How grafts are counted",
    excerpt: "What a graft is, how the area and density are measured, why the donor limits the number, and why the figure changes after the examination.",
    minutes: 5,
    thumb: 3,
    body: lines(`
[[reviewer]]
A graft is a small unit of tissue holding one or more hairs, usually between one and a few. The number of grafts you need depends on the size of the area, the density wanted, your hair type and what the donor area can supply. No online figure applies to you. The surgeon sets an estimate after examining your scalp. See our [[link: /hair-transplant | hair transplant overview]]. TODO-VERIFY: reviewer confirms the hairs-per-graft range.
## What a graft is
Hair grows in natural groups called follicular units, usually with one to four hairs each. Surgeons move these units as grafts. Single-hair grafts are often used at the front of the hairline for a softer edge, and multi-hair grafts behind for fullness. TODO-VERIFY: [R].
## How the number is worked out
- The surgeon measures the area to be covered.
- They decide on a target density that fits your hair and the donor supply.
- They check how many grafts the donor area can give without leaving it thin.
- They split the work between the hairline, the middle and the crown, in order of priority.
The result is an estimate. The actual number depends on what is extracted and how many are usable. Ask how the clinic counts and whether the number is the one planned or the one extracted.
## Why numbers differ between clinics
A clinic may count single units, or count hairs, or quote a larger figure by including multi-hair grafts. Comparing two quotes requires the same definition. Ask for a written definition of a graft.
## Limits of the donor
Every person has a limited supply of donor hair. Taking too much can leave the donor area thin. A plan that tries to cover a large area at high density may not be possible in one session. See [[link: /learn/hair-transplant-donor-area-limits | donor area limits]].
## Hairline and crown priorities
Many surgeons protect the hairline and the front third first, because they frame the face. The crown can take many grafts and show a modest result. Discuss which area matters to you and the order of work.
## Density
Density means hairs per square centimetre. Surgeons describe what is realistic for your donor and your hair. Do not accept a promise of a number. A plan with moderate density that blends with existing hair often looks more natural than an aim for the maximum.
## Why the number changes after the exam
Online calculators and phone quotes are guesses. The surgeon may change the number when they see the scalp, the donor and the pattern. If a clinic quotes a firm number without an examination, ask how they arrived at it.
> The question to ask is how many grafts your plan needs and why, and how many grafts you can afford is a separate question.
## Cost
Many clinics quote by graft count, and the bill is made of the rate, the number and extras. See [[link: /learn/hair-transplant-cost-per-graft | how the bill is built]] and [[link: /cost/hair-transplant | the cost page]].
## Who should wait
Wait if the pattern is still progressing, if the donor is thin or if the cause of thinning is unknown. See [[link: /learn/hair-transplant-norwood-grade-candidate | candidacy by Norwood grade]].
## Questions to ask
- How do you define and count a graft?
- How many do you plan, and how many might the donor supply?
- What if I need a second session?
[[faq: How many grafts for a receding hairline? | It depends on the area, density and donor. Only a surgeon who has examined you can say.]]
[[faq: Are more grafts always better? | No. The donor is limited, and a plan that is too large can leave the donor thin.]]
[[faq: Why do clinics give different numbers? | They may count differently or plan different density. Ask for the definition and the area covered.]]
Related reading: [[link: /learn/hair-transplant-fue-fut-dhi | FUE, FUT and DHI]]. City pages: [[link: /hair-transplant-in-delhi | Delhi]], [[link: /hair-transplant-in-gurgaon | Gurgaon]].
Message us on WhatsApp if you want help preparing questions for a registered doctor.
[[sources: International Society of Hair Restoration Surgery patient information on hair transplantation; American Academy of Dermatology patient information on hair transplants. TODO-VERIFY: open each page and confirm wording.]]
`),
  },
  // H4
  {
    ...base,
    slug: "hair-transplant-recovery-calendar",
    title: "Hair transplant recovery: a day by day and month calendar",
    excerpt: "A general timeline from the day of surgery to about 18 months, covering washing, sleeping, work, sport, sun and the signs that mean you should call.",
    minutes: 6,
    thumb: 1,
    body: lines(`
[[reviewer]]
Early recovery from a hair transplant takes about one to two weeks, when scabs form and fall, and the visible result builds over many months. The timeline below is general, and your surgeon's instructions come first. See our [[link: /hair-transplant | hair transplant overview]]. TODO-VERIFY: reviewer confirms every day and month below.
## The calendar
- Day 0 to 1: a dressing or band may be used. Mild bleeding, soreness and swelling are common. Sleep with your head raised.
- Days 2 to 5: swelling often moves toward the forehead and around the eyes. Take medicines as prescribed.
- Days 5 to 10: scabs form on the recipient area and start to loosen. Your surgeon will show you how to wash.
- Weeks 2 to 3: most scabs fall. Redness fades. Some people return to desk work earlier.
- Weeks 2 to 8: transplanted hairs often shed, which is expected and not a failure. See [[link: /learn/hair-transplant-shock-loss | shock loss]].
- Months 3 to 4: new hairs start to appear in many people, thin at first.
- Months 6 to 9: hairs thicken and the pattern becomes clearer.
- Months 12 to 18: many people see the final look, though timing varies.
## Washing and sleeping
Follow the washing method you are given, and do not scrub. Avoid hot water pressure directly on the area at first. Sleep with your head raised for the period your surgeon names, and avoid pressing the area against a pillow.
## Work and sport
Many people return to desk work within days to a couple of weeks, depending on swelling and how visible the area is. Hard exercise, heavy lifting, swimming and contact sport are usually avoided for a period set by the surgeon. Do not return early because you feel well.
## Sun and heat
Protect the scalp from sun, and avoid saunas and hot rooms for the time advised. A hat that does not rub the grafts may be allowed. Ask which kind.
## How long transplanted hairs last
Transplanted hairs are taken from an area that is usually less affected by pattern loss, and they often keep that quality in their new place. Hair that was already there can continue to thin over time, and the surgeon may suggest medicines to protect it. Results are not static for life, and further procedures are sometimes needed. TODO-VERIFY: reviewer sets wording.
## Medicines
Surgeons often prescribe medicines for pain, swelling or infection and, sometimes, medicines to support existing hair. Take them as directed, and ask what to do if you miss a dose.
## Signs to call about
- Fever, increasing pain or pus.
- Heavy bleeding that will not stop with gentle pressure.
- Spreading redness or hot, hard areas.
- Severe swelling that affects your vision.
- Numbness that is spreading.
Contact the surgeon or seek urgent care.
> The calendar is a guide. If your recovery looks different, ask. Do not guess.
## Cost
Ask whether review visits and medicines are in the quote. See [[link: /cost/hair-transplant | the cost page]].
## Who should wait
Do not schedule surgery before a big event within weeks. Wait if you cannot arrange recovery time, if you have an infection, or if you cannot follow the aftercare plan.
## Questions to ask
- When are my review visits?
- What do I do if something looks wrong at night?
- When can I return to exercise and swimming?
[[faq: When can I go back to work after a hair transplant? | Many people with desk jobs return within days to a couple of weeks. Your surgeon sets the timing.]]
[[faq: When will I see the result? | New hairs often appear around months three to four, and the look continues to develop for many months. Timing varies.]]
[[faq: Is shedding after a transplant normal? | Yes, transplanted hairs often shed in the first weeks and months. Ask your surgeon what to expect.]]
Related reading: [[link: /learn/hair-transplant-fue-fut-dhi | FUE, FUT and DHI]], [[link: /learn/hair-transplant-donor-area-limits | donor area limits]]. City pages: [[link: /hair-transplant-in-lucknow | Lucknow]], [[link: /hair-transplant-in-kanpur | Kanpur]].
Message us on WhatsApp if you want help preparing questions for a registered doctor.
[[sources: International Society of Hair Restoration Surgery patient information on recovery after hair transplantation; American Academy of Dermatology patient information on hair transplants. TODO-VERIFY: open each page and confirm the calendar.]]
`),
  },
  // H5
  {
    ...base,
    slug: "hair-transplant-shock-loss",
    title: "Shock loss after a hair transplant: why it happens",
    excerpt: "What shock loss is, when it shows up, how it differs from graft failure, which hairs are affected, and when to see the doctor.",
    minutes: 5,
    thumb: 2,
    body: lines(`
[[reviewer]]
Shock loss is the shedding of hairs after surgery, often in the weeks after a hair transplant. Transplanted hairs commonly shed and then return, and some existing hairs nearby can shed too. It often settles over months, though not always. Contact your surgeon if you are worried. See our [[link: /hair-transplant | hair transplant overview]].
## What it is
Hairs follow a cycle of growth, rest and shedding. Surgery stresses the skin and follicles, and many hairs enter a resting phase and shed. Transplanted hairs often shed their visible shaft in the first weeks while the roots remain under the skin. New hairs form after months. TODO-VERIFY: reviewer confirms wording.
## When it appears
Many people notice shedding in the transplanted area from about two weeks to two months after surgery. Shedding in nearby native hair can occur as well. The timing varies. TODO-VERIFY: [R].
## Which hairs are affected
- Transplanted hairs, which shed and then return in most cases.
- Native hairs in or near the recipient area, which may shed and may or may not return, especially if they were already thin.
- Rarely, hairs in the donor area.
Native hairs that were already weakened by pattern loss are the ones most likely not to return, and a surgeon may discuss medicines to protect them.
## How it differs from graft failure
Shedding is common and expected. Failure means grafts did not take, which shows as areas where no new hairs appear after the usual time for return, often several months. The two can look alike in the first weeks. A surgeon can examine your scalp and compare photographs. Do not decide on your own at week three.
## When to see the doctor
- Shedding that continues beyond the period your surgeon described.
- Patchy loss that is increasing.
- Signs of infection such as pus, pain or fever.
- No new hairs by the time your surgeon told you to expect them.
Take dated photos in the same light to help the review. See [[link: /learn/hair-transplant-recovery-calendar | the recovery calendar]].
## Medicines
Doctors sometimes suggest medicines to support existing hair after surgery. See [[link: /learn/prp-vs-minoxidil-finasteride | the medicine comparison]]. Use only what a doctor prescribes.
## Reassurance with limits
Doctors often say that shedding is common and that hairs return. They cannot promise it for every person. Beware of a clinic that promises full return for everyone, and of one that never mentions shedding before surgery. Ask at the consultation what is likely and what could go differently.
## Mood
Waiting for results can be stressful. Talk to your surgeon if you feel low or anxious. Support from family and a plan for review visits help.
> Shedding after surgery is common. It is not a sign that you did something wrong.
## Cost
Ask whether review visits and any corrective treatment are included. See [[link: /cost/hair-transplant | the cost page]].
## Who should wait
Do not plan surgery before an event soon after. If you have a skin disease of the scalp, shedding conditions or an unknown cause of thinning, see a doctor before surgery.
## Questions to ask
- When should I expect shedding, and how long might it last?
- What would make you worried about graft failure?
- What does a review visit include?
[[faq: Will my transplanted hair fall out? | Many transplanted hairs shed in the first weeks and then return. Ask your surgeon what to expect.]]
[[faq: Is shock loss the same as graft failure? | No. Shedding is common. Failure means grafts did not take, and a surgeon can tell by examination.]]
[[faq: Does shock loss happen in the donor area? | It can, rarely. Tell your surgeon if you see it.]]
Related reading: [[link: /learn/hair-transplant-donor-area-limits | donor area limits]]. City pages: [[link: /hair-transplant-in-delhi | Delhi]], [[link: /hair-transplant-in-gurgaon | Gurgaon]].
Message us on WhatsApp if you want help preparing questions for a registered doctor.
[[sources: International Society of Hair Restoration Surgery patient information on hair transplantation; American Academy of Dermatology patient information on hair loss. TODO-VERIFY: open each page and confirm wording.]]
`),
  },
  // H6
  {
    ...base,
    slug: "hair-transplant-cost-per-graft",
    title: "Hair transplant cost per graft: how the bill is built",
    excerpt: "How a quote is made from the number of grafts, the rate, the method and extras, how sessions change the total, and how to read a written quote.",
    minutes: 5,
    thumb: 3,
    body: lines(`
[[reviewer]]
Most hair transplant quotes are built as a rate per graft times the number of grafts, plus extras. The technique, the surgeon, the clinic and the city change the rate. The number of grafts changes after examination. Ask for a written total that lists every line. All figures on our pages are sample data pending confirmed quotes. See our [[link: /cost/hair-transplant | hair transplant cost page]].
## The formula
Total = (rate per graft x number of grafts) + consultation + medicines and dressings + review visits + any extras. A clinic that quotes only the rate is giving you one part. Ask them to fill in each part. This is a formula only, and we do not state an average. TODO-VERIFY: figures come only from confirmed quotes.
## What changes the rate
- The method, for example FUE or FUT, and what each involves. See [[link: /learn/hair-transplant-fue-fut-dhi | FUE, FUT and DHI]].
- The surgeon's training and experience.
- The clinic type and setting.
- The number of grafts, since some clinics change the rate for large cases.
- The city.
## How the graft count changes the bill
The number is an estimate until the exam and until surgery. Ask what happens to the price if the actual count is lower or higher than the quote. See [[link: /learn/hair-transplant-grafts-needed | how grafts are counted]]. If the quote is a flat package instead of a rate, ask how many grafts it covers.
## Sessions
A large area may need more than one session, and each session costs money. Ask if the quote covers a second session and at what price. The donor area limits what one session can do.
## What is often left out
- The consultation.
- Medicines and dressings.
- Review visits.
- Tests before surgery.
- Travel and stay, if you come from another town.
- Treatment of complications.
- A second session, if needed.
Ask for each of these in writing as included or excluded.
## How to read a written quote
Check the date, the surgeon's name, the method, the number of grafts and the definition of a graft, the rate, the total, the included items, the payment schedule and the refund policy. Our [[link: /hair-transplant | hair transplant overview]] has a checklist for choosing a surgeon and a clinic.
## Red flags
- A price only over the phone.
- A quote that changes on arrival.
- Pressure to pay a deposit the same day.
- A promise of a particular density or timing.
- Refusal to name the surgeon or to describe who does each step.
- A rate that is far below others without explanation.
Low cost should lead to more questions, such as who does the work and how many grafts are placed per hour.
> The question that matters is what you will pay in total for the plan, including the parts that are easy to forget.
## Insurance and payment
Hair transplant for cosmetic reasons is usually not covered by insurance. Ask in writing. EMI and payment plans carry their own costs and terms. TODO-VERIFY: reviewer or lawyer confirms wording.
## Who should wait
Do not pay until a surgeon has examined you and given a written plan. Wait if the pattern is changing or the cause is unknown. See [[link: /learn/hair-transplant-norwood-grade-candidate | candidacy by Norwood grade]].
## Questions to ask
- What does the total include and leave out?
- How is the price affected if the count changes?
- What is the refund policy?
[[faq: How is hair transplant cost calculated? | Most quotes multiply a rate per graft by the number of grafts, then add extras. Ask for each line in writing.]]
[[faq: Why do clinics quote very different prices? | The method, the surgeon, the setting, the graft definition and the included items differ. Compare line by line.]]
[[faq: Is a lower price a problem? | It can be a reason to ask more questions, such as who performs the surgery.]]
Related reading: [[link: /learn/hair-transplant-recovery-calendar | recovery calendar]]. City pages: [[link: /hair-transplant-in-lucknow | Lucknow]], [[link: /hair-transplant-in-kanpur | Kanpur]].
Message us on WhatsApp if you want help preparing questions for a registered doctor.
[[sources: Sources to be added after reviewer sign-off. TODO-VERIFY: a named consumer protection or regulator page, opened and checked.]]
`),
  },
  // H7
  {
    ...base,
    slug: "hair-transplant-donor-area-limits",
    title: "Donor area limits: how much hair can be moved",
    excerpt: "What the donor area is, why the supply is limited, the risk of over-harvesting, body hair as an option, and why a long-term plan matters.",
    minutes: 5,
    thumb: 1,
    body: lines(`
[[reviewer]]
The donor area is the part of the scalp, usually the back and sides, from which hair is taken for transplanting. The supply is limited, and taking too much can leave the donor thin. A surgeon plans how much to move now and what to keep for later. See our [[link: /hair-transplant | hair transplant overview]].
## What the donor area is
In pattern hair loss, the hair on the back and sides tends to be less affected. Surgeons use it because those hairs often keep their character after being moved. The size of the donor zone depends on your scalp and your pattern. TODO-VERIFY: [R].
## Why supply is limited
A person has a fixed number of hairs in the donor area, and each graft taken is gone from there. The donor can only give so many grafts before it looks thin. Over a lifetime, a person may want more than one procedure, so the plan has to leave grafts for later.
## Over-harvesting
Taking too many grafts, or taking them too close together, can leave a moth-eaten look in the donor area or visible scars. The donor zone can also continue to change over the years. A responsible surgeon sets a limit and says no when a request goes beyond it. Be cautious of a clinic that promises to cover a large area in one session at high density.
## Reading your own donor
Ask the surgeon to show you the donor area, explain its density and describe what it can supply. Do not rely on a figure given without examination. See [[link: /learn/hair-transplant-grafts-needed | how grafts are counted]].
## Body hair as an option
In some people with a limited scalp donor, surgeons discuss using hair from the beard or chest. Body hair differs in cycle and texture, and its place in a plan is for the surgeon to decide. TODO-VERIFY: reviewer confirms wording. Ask about the experience of the surgeon with this approach and what to expect.
## Why a plan matters
A plan covers the pattern you have now and the pattern you may have in ten years. A hairline that is too low or too bold can look wrong if surrounding hair thins. Surgeons often choose a conservative hairline and keep grafts in reserve. Medical therapy may slow further loss and protect the result. See [[link: /learn/prp-vs-minoxidil-finasteride | the medicine comparison]].
## Who it affects most
Younger people with quickly progressing loss, those with a thin donor and people who want a very dense result are most affected by limits. Women with diffuse thinning may have a weaker donor. See [[link: /learn/hair-transplant-for-women | hair transplant for women]].
## Questions to ask
- How large is my donor, and how many grafts could it supply over my lifetime?
- What would you leave in reserve?
- What would you do if I need a second procedure?
> A donor limit protects you. A plan that ignores it uses up something you cannot replace.
## Cost
A plan for staged work has more than one cost. Ask how a second session would be priced. See [[link: /cost/hair-transplant | the cost page]].
## Who should wait
Wait if your donor is thin, if the loss is changing, or if the cause is unknown. Seek another opinion if you are advised to proceed without an examination.
[[faq: How much hair can be taken from the donor area? | It depends on your scalp. A surgeon decides after examining it. Taking too much can leave the donor thin.]]
[[faq: Can I use body hair? | Sometimes, if the scalp donor is limited. Ask the surgeon about experience and expected differences.]]
[[faq: What happens if I run out of donor hair? | Options become limited, and a doctor may discuss other approaches. This is why planning matters.]]
Related reading: [[link: /learn/hair-transplant-norwood-grade-candidate | candidacy by Norwood grade]], [[link: /learn/hair-transplant-fue-fut-dhi | FUE, FUT and DHI]]. City pages: [[link: /hair-transplant-in-delhi | Delhi]], [[link: /hair-transplant-in-gurgaon | Gurgaon]].
Message us on WhatsApp if you want help preparing questions for a registered doctor.
[[sources: International Society of Hair Restoration Surgery patient information on hair transplantation; American Academy of Dermatology patient information on hair transplants. TODO-VERIFY: open each page and confirm wording.]]
`),
  },
  // H8
  {
    ...base,
    slug: "hair-transplant-for-women",
    title: "Hair transplant for women: who may be a candidate",
    excerpt: "Patterns of female hair loss, why diffuse thinning needs a medical work-up first, hairline lowering, who may wait, and the place of PRP and medicines.",
    minutes: 6,
    thumb: 2,
    body: lines(`
[[reviewer]]
Fewer women than men are candidates for a hair transplant, because many women lose hair in a diffuse pattern and the donor hair may also be thin. A doctor first looks for causes such as thyroid problems, low iron or hormone conditions. Transplant is considered only for selected patterns. See our [[link: /hair-transplant | hair transplant overview]].
## Patterns of hair loss in women
Female pattern hair loss often shows as widening of the parting and thinning across the top of the scalp, with the front hairline kept. Other patterns include loss after illness or childbirth, loss from medicines and loss from traction caused by tight hairstyles. A doctor identifies the pattern by examination and history. TODO-VERIFY: [R].
## Why a medical work-up comes first
Diffuse thinning can come from iron deficiency, thyroid disorders, hormone conditions such as polycystic ovary syndrome, nutrition, stress or medicines. A doctor may arrange tests, and treating the cause can change the picture. A transplant does not treat these causes. See [[link: /learn/adult-hormonal-acne-women | adult acne and hormones in women]] for related questions about tests.
## When a transplant may be considered
- Loss in a localised area, such as from scarring, injury or surgery.
- Traction loss that has stopped, after the cause is removed.
- A selected pattern with a good donor area.
- Hairline lowering for some women who want a lower forehead, which the surgeon assesses carefully.
Many women with diffuse loss are not candidates. A surgeon will explain why.
## Donor area
In diffuse loss, the donor area may also be thin, which limits how many grafts can be moved. A donor that is stable and dense is better. See [[link: /learn/hair-transplant-donor-area-limits | donor area limits]].
## Hairline lowering
Some women request a lower hairline. The surgeon assesses the existing hairline, the forehead, the donor and the likelihood of future loss. The plan should be conservative. The result takes months to show, and a second session is sometimes needed. TODO-VERIFY: reviewer confirms wording.
## Medical options
Doctors may suggest medicines suitable for women, treatment of any underlying cause, and in some cases PRP. See [[link: /learn/prp-for-hair-loss-evidence | what the evidence says about PRP]] and [[link: /learn/prp-vs-minoxidil-finasteride | the medicine comparison]]. Some medicines are not suitable in pregnancy, so tell the doctor about pregnancy plans.
## What to bring to the first visit
Bring a list of your medicines, any recent blood test reports, and photographs of your hair from a year or two ago. Note when thinning began, whether it followed an illness, childbirth or a change in medicine, and whether other women in your family have thin hair. This helps the doctor decide quickly whether a work-up is needed.
## Who may need to wait
Women with active hair loss, an unknown cause, a recent illness or childbirth, or a scalp condition should wait for a medical assessment. Those planning pregnancy should discuss timing, since hormone changes affect hair.
## Risks
Bleeding, infection, swelling, scarring, uneven density and shedding after surgery, as in men. See [[link: /learn/hair-transplant-shock-loss | shock loss]]. Results vary, and some women see less improvement than expected.
> A diagnosis first is cheaper than a procedure that does not match the cause.
## Cost
The cost relates to the number of grafts, the method and the surgeon. See [[link: /cost/hair-transplant | our cost page]] and [[link: /learn/hair-transplant-cost-per-graft | how the bill is built]].
## Questions to ask
- What do you think is causing my thinning?
- Am I a candidate, and why or why not?
- What are the other options for me?
[[faq: Can women have a hair transplant? | Some can, in selected patterns. Many women with diffuse thinning are not candidates. A doctor decides after a work-up.]]
[[faq: Is hair loss in women always hormonal? | No. Causes include iron, thyroid, medicines, stress and others. A doctor can investigate.]]
[[faq: Can a hair transplant lower my hairline? | Some surgeons do this in selected cases. Ask about risks, the donor and future loss.]]
Related reading: [[link: /learn/hair-transplant-norwood-grade-candidate | candidacy by Norwood grade]]. City pages: [[link: /hair-transplant-in-lucknow | Lucknow]], [[link: /hair-transplant-in-kanpur | Kanpur]].
Message us on WhatsApp if you want help preparing questions for a registered doctor.
[[sources: American Academy of Dermatology patient information on hair loss in women; NHS patient information on hair loss. TODO-VERIFY: open each page and confirm wording.]]
`),
  },
];
