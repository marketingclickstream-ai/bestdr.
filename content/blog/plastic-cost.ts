// SAMPLE CONTENT, PENDING SURGEON REVIEW. Money, paperwork and trust posts for plastic surgery.
// `published: true` is set only so the staging site renders them. reviewerId "sample-reviewer" is a placeholder:
// no surgeon has reviewed these posts. See content/blog/README.md for the body markup.
//
// TODO-VERIFY: how-to-check-a-surgeons-registration has no register URL on purpose. Add the official National Medical
// Commission and State Medical Council register links only after opening and checking them. Do not invent one.
// TODO-VERIFY (lawyer): septoplasty-insurance-india never states coverage; confirm the wording and the complaint route
// (insurer grievance, then the insurance ombudsman) before production.
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

export const plasticCostPosts: BlogPost[] = [
  {
    ...base,
    slug: "septoplasty-insurance-india",
    treatmentSlug: "rhinoplasty",
    title: "Septoplasty and insurance in India: what to check",
    excerpt: "Whether a policy pays for septoplasty depends on its wording. A step-by-step way to read yours, what papers to gather and what to ask the insurer.",
    minutes: 5,
    thumb: 1,
    body: lines(`
[[reviewer]]
We cannot tell you whether your insurer will pay for septoplasty. That depends on your policy wording, your medical records and the insurer's decision. What you can do is read the policy, gather your reports and ask in writing before you book. This guide lists the steps. See our [[link: /rhinoplasty | rhinoplasty guide]].
## Why the question comes up
Septoplasty treats a blocked nose from a bent septum, so it is a breathing operation. Rhinoplasty changes the outer shape. A policy may treat the two differently, and the wording of its exclusions matters. Read [[link: /learn/rhinoplasty-vs-septoplasty | rhinoplasty vs septoplasty]] first, to know which operation applies to you.
## Step 1: find the policy papers
- The policy schedule and the full policy wording. The brochure is a summary and may leave things out.
- The exclusions list and any list of waiting periods.
- The claim form and the cashless procedure, if there is one.
Policies from different insurers, and employer group policies, differ. Do not rely on what a friend's policy covered.
## Step 2: look for these words
Search the wording for terms such as cosmetic, plastic, aesthetic, deviated septum, ENT, waiting period, pre-existing condition, sub-limits and room rent limits. We do not state what any term means for your claim. If a phrase is unclear, ask the insurer to explain it in writing.
## Step 3: gather medical papers
A claim usually rests on records that show a medical reason. Ask your doctor for:
- A consultation note stating your symptoms and how long you have had them.
- Examination findings, such as an endoscopy report.
- Any scan report, if one was done.
- A note of treatments tried first, such as nasal sprays or medicines, and the results.
- A clear statement of the planned operation and its name.
Keep dated copies. Do not ask a doctor to word a note in a way that is untrue, since a false claim creates serious trouble.
## Step 4: ask the insurer
Write by email or through the app, so there is a record. Ask:
- Is septoplasty for a deviated septum covered under my plan, subject to what conditions?
- Is there a waiting period that applies to me?
- Do I need pre-authorisation, and how long does it take?
- Is cashless available at the hospital I am considering, or will I pay and claim later?
- What documents do you need, and what are the limits on room rent or the sum paid?
- What if the plan includes shape change along with the breathing operation?
## Step 5: hospital and quote
Ask the hospital for an itemised estimate with the procedure name and codes, if used. Ask who handles the insurance desk and how long approval takes. A combined operation can have the quote split, so see [[link: /learn/what-a-surgery-quote-includes | what a quote includes]]. For rhinoplasty price lines see the [[link: /cost/rhinoplasty | rhinoplasty cost page]].
## If the insurer says no
Ask for the reason in writing. Check that it matches your policy wording. The insurer's grievance process comes first, and your policy document lists the next step. TODO-VERIFY the complaint route with the lawyer.
## What this page does not do
It does not say that any insurer covers or refuses septoplasty. Policies are individual. Ask a registered doctor about your medical need, and the insurer about your coverage.
## Timeline planning
Approval can take days or longer, and a hospital date may depend on it. Do not book travel until you have the answer. Our [[link: /learn/surgery-leave-planner | leave planner]] helps you set dates.
## A short note on records
Keep a folder, paper or phone, with the policy wording, the doctor's notes, each email to the insurer and the reply. If a claim is questioned months later, dated records settle most arguments. Ask the hospital insurance desk to put approval or refusal on paper, and to tell you the reference number.
[[faq: Kya insurance septoplasty ko cover karta hai? | Yeh aapki policy ke shabdon aur bima company ke faisle par depend karta hai. Policy padhein aur company se likhit mein poochhein.]]
[[faq: Septoplasty ke liye kaun se kagaz chahiye? | Doctor ka note, jaanch ki report aur ilaaj ka vivaran aksar maange jaate hain. Insurer se poori suchi lein.]]
[[faq: Kya cashless milta hai? | Kuch hospital mein hota hai, kuch mein nahi. Hospital aur insurer dono se poochhein.]]
[[faq: Waiting period kya hota hai? | Yeh ek avadhi hai jiske baad kuch ilaaj ke daawe maange ja sakte hain. Aapki policy mein likha hota hai.]]
[[faq: Claim mana ho jaye to kya karein? | Kaaran likhit mein maangein, policy se milayein aur insurer ki shikayat prakriya se shuru karein.]]
Send us a message on WhatsApp if you want help writing your questions to the insurer.
[[sources: Insurance Regulatory and Development Authority of India (IRDAI) patient and policyholder guidance; NHS patient information on septoplasty.]]
`),
  },
  {
    ...base,
    slug: "consultation-checklist",
    treatmentSlug: null,
    title: "Plastic surgery consultation checklist to print",
    excerpt: "What to bring, what to ask and what to write down before, during and after a plastic surgery consultation. A printable list.",
    minutes: 5,
    thumb: 2,
    body: lines(`
[[reviewer]]
Take a printed list to the consultation: your medical papers, your questions, a family member and a way to take notes. Ask about the exact operation, the surgeon's training, risks, recovery, who handles problems, and the written quote. Browse operations in our [[link: /plastic-surgery | plastic surgery hub]].
## Before you go
- Write down what bothers you, in your own words, and what you want to change.
- List your medicines, supplements and herbal products.
- List past surgeries, allergies and long-term illnesses such as diabetes, blood pressure and thyroid.
- Gather old reports: blood tests, scans, discharge summaries.
- For women: note your delivery dates and any breastfeeding.
- Note your tobacco and alcohol use honestly.
- Check the surgeon with our [[link: /learn/how-to-check-a-surgeons-registration | registration guide]].
## Who to bring
Bring a family member or friend. They hear things you miss and can ask questions you forget. For a procedure where you will need help at home, bring the person who will stay with you.
## In the room: about the operation
- What exactly do you advise and why?
- What are the other options, including doing nothing?
- Where will the scars lie, and how long?
- Will I need one operation or more?
- How many of these operations do you do each month? Ask for an honest sense of how often.
## In the room: about the surgeon
- What is your training in this operation?
- What is your registration, and with which council?
- Will you do the operation yourself, and who assists?
- Who is the anaesthetist, and what is their qualification?
## In the room: about risk
- What can go wrong in my case?
- Which of those are common, and which are rare?
- How would you deal with each?
- What happens if I am not satisfied?
## In the room: recovery
- How long in hospital?
- How many days off work? See the [[link: /learn/surgery-leave-planner | leave planner]].
- What can I not do, and for how long?
- When is the first review, and how many are included?
## Your own health
A surgeon may ask you to stop smoking, adjust medicines or lose or keep weight stable. Write down every instruction. Ask whether blood tests or a fitness check are needed.
## Money
Ask for a written, itemised quote. Use our [[link: /learn/what-a-surgery-quote-includes | quote checklist]] line by line. Ask what happens to the amount if you decide to cancel.
## After the visit
- Write a summary the same day.
- Compare with a second opinion, if you wish.
- Do not sign or pay on the day if you feel rushed. A good surgeon allows time to decide.
- Ask yourself if you were allowed to ask everything. If not, note that.
## For specific operations
Add operation questions from our guides: [[link: /learn/tummy-tuck-after-c-section | tummy tuck after a C-section]], [[link: /learn/rhinoplasty-recovery-timeline | rhinoplasty recovery]] or [[link: /learn/breast-reduction-eligibility | breast reduction eligibility]]. Price lines for each operation are on the [[link: /cost/tummy-tuck | cost pages]].
## A printable box
- Date and surgeon seen:
- Operation advised:
- Number of operations needed:
- Scar location:
- Days in hospital:
- Days off work:
- Follow-up visits included:
- Total quote:
- What I still want to ask:
## If you are travelling for the visit
People from smaller towns often fit the consultation into a single day trip. Carry the originals of old reports, plus phone photos of them, and a charger for your phone. Ask whether the surgeon will see you again before the operation, and whether a video call can replace a repeat visit. Book the return ticket flexibly, since a consultation can run long or end with tests that need a second day.
## Second opinions
A second opinion is routine. Take the same list to the second surgeon, and note where the two answers differ on the operation, the scar, the stay and the follow-up. If both agree on the plan but not on the quote, compare lines using the quote checklist.
[[faq: Consultation mein kaun se sawal poochhne chahiye? | Operation, scar, risk, recovery, follow-up aur kharcha. Is page ki suchi saath le jaayein.]]
[[faq: Consultation mein kisi ko saath le jaana chahiye? | Haan, ek parivaar ka sadasya ya dost jo sunne aur likhne mein madad kare.]]
[[faq: Kya pehli mulaqat mein hi surgery book karni chahiye? | Zaroori nahi. Sochne ka samay lein aur chahein to doosri raay bhi lein.]]
[[faq: Surgeon ke sawal poochhne par bura to nahi maanenge? | Achhe surgeon sawal ka swagat karte hain. Agar jawab nahi mile to woh khud ek sanket hai.]]
[[faq: Kharcha kaise poochhein? | Likhit mein ek-ek line wala quote maangein. Hum bhi quote padhne mein madad kar sakte hain.]]
Message us on WhatsApp for a copy of this list, or to talk through your questions before you go.
[[sources: NHS guidance on cosmetic procedures and choosing a provider; American Society of Plastic Surgeons patient information on choosing a surgeon.]]
`),
  },
  {
    ...base,
    slug: "what-a-surgery-quote-includes",
    treatmentSlug: null,
    title: "What a surgery quote should include, line by line",
    excerpt: "A checklist for reading a plastic surgery quote in India: what each line means, what is often missing and what to ask before you pay.",
    minutes: 5,
    thumb: 3,
    body: lines(`
[[reviewer]]
A good quote lists the surgeon's fee, the anaesthesia, the theatre and room, consumables, tests, medicines, garments, follow-up and what happens if you need more surgery. A single lump sum hides what you are paying for. Ask for an itemised, written quote. See our [[link: /plastic-surgery | plastic surgery hub]].
## Why lines matter
Two quotes for the same operation can differ in what they include. The lower one may leave out the anaesthetist, the garment or the review visits. Comparing totals is not enough, so compare line by line.
## The checklist
Tick each line as included, extra or not applicable.
- Surgeon's fee, and whether it covers follow-up visits.
- Assistant surgeon's fee.
- Anaesthetist's fee, and the type of anaesthesia.
- Operation theatre charges, and whether they are per hour or fixed.
- Room or day-care bed, and number of nights.
- Nursing and ward charges.
- Consumables such as sutures, dressings and drains.
- Implants or devices, if any, with documentation.
- Pre-operative tests: blood tests, ECG and others.
- Medicines in hospital and to take home.
- Compression garment or bra, and how many.
- Follow-up visits and dressings.
- Laboratory examination of removed tissue, if done.
- Taxes and any registration or admission fee.
- Blood or other support if needed.
## Package or itemised
A package price is simple, but ask what happens if you stay longer or need extra care. An itemised quote shows each part, but may grow. Ask which complications the package covers and which it does not.
## What is often missing
- Extra nights in hospital.
- A second operation to adjust the result.
- Garments beyond the first.
- Medicines for weeks at home.
- Physiotherapy or scar care.
- Travel and stay for your family. See [[link: /learn/surgery-leave-planner | the leave planner]] for the time side.
## Questions about complications
- Who treats me, and who pays, if I have a problem?
- What charges apply if I need to return to theatre?
- Is a touch-up possible if I am unhappy with the result, and what does it cost?
Get the answers in writing. A verbal promise may not hold.
## Paying
- Ask what advance is needed and when it is refundable.
- Pay by a traceable method and keep receipts with the quote.
- Do not pay in cash to an individual without a receipt.
- Ask for a cancellation policy.
## Insurance
For most cosmetic operations, insurers do not pay. For a breathing operation, ask your insurer in advance. Read [[link: /learn/septoplasty-insurance-india | septoplasty and insurance]].
## Comparing two quotes
Put them in two columns. Mark each line from the checklist. Add the extras you would need to match the other quote. Then compare. If a line is missing, ask.
## What a price page can and cannot tell you
Our [[link: /cost/tummy-tuck | tummy tuck cost page]] and [[link: /cost/rhinoplasty | rhinoplasty cost page]] list the factors that move the price. They cannot replace a written quote from the surgeon you plan to see after an examination.
## A worked comparison
Say two quotes arrive for the same operation. Quote one lists the surgeon, theatre, one night in a room and a garment. Quote two shows a lower total, but leaves out the anaesthetist, medicines and the garment. Once you add the missing lines to the second, the gap may shrink or reverse. This is why a column for each line is worth the effort. Ask both clinics to fill in the same checklist so the two sheets look alike.
## Getting it in writing
Ask for the quote on the hospital or clinic letterhead, with a date and a validity period. Prices for implants, medicines and theatre time can change, so ask how long the figure holds. Keep the original and a photo.
## Ask about the unexpected
Ask what the hospital does if surgery takes longer than planned, or if a tube stays longer. Most clinics have a rule, but few write it down unless asked.
[[faq: Surgery ke quote mein kya-kya shamil hota hai? | Surgeon, anaesthesia, theatre, kamra, saamaan, jaanch, dawai, garment aur follow-up. Har line ka likhit jawab maangein.]]
[[faq: Package aur itemised quote mein kya antar hai? | Package mein ek rakam hoti hai, itemised mein har line alag. Dono mein poochhein ki kya shamil nahi hai.]]
[[faq: Agar complication ho to kharcha kaun uthata hai? | Yeh hospital aur quote par depend karta hai. Pehle se likhit mein poochhein.]]
[[faq: Kya advance wapas milta hai? | Yeh policy par depend karta hai. Quote ke saath likhwa lein.]]
[[faq: Kharcha kin cheezon par depend karta hai? | Surgeon ki fees, anaesthesia, hospital ka prakaar, rehne ke din, garment aur follow-up.]]
Send your quote to us on WhatsApp and we will point out lines to ask about.
[[sources: NHS guidance on cosmetic procedures; American Society of Plastic Surgeons patient information on costs of surgery.]]
`),
  },
  {
    ...base,
    slug: "how-to-check-a-surgeons-registration",
    treatmentSlug: null,
    title: "How to check a surgeon's registration in India",
    excerpt: "Five steps to confirm that a doctor is registered with a medical council and holds the training for plastic surgery, before you book.",
    minutes: 4,
    thumb: 1,
    body: lines(`
[[reviewer]]
Ask the surgeon for their registration number and the council that issued it, search that council's register, and match the name, qualification and year. Then check that the qualification covers the operation you want. A registered doctor is not the same as a trained plastic surgeon. See [[link: /how-we-verify-surgeons | how we verify surgeons]].
## Step 1: ask for the details
Ask the clinic or the surgeon for:
- Full name as registered.
- Registration number.
- The council: a State Medical Council or the National Medical Commission.
- Qualifications and the year of each.
A good clinic gives these without fuss. If they are slow, note that.
## Step 2: search the register
India has State Medical Councils and a National Medical Commission, which maintains a national register of doctors. Each has a way to search by name or number. Official register link: TODO-VERIFY. We do not link to a register until we have opened and checked it ourselves. Find the council's name through the official government site. Do not follow a link from an advert or a message.
## Step 3: match what you find
- Does the name match?
- Is the registration current?
- Is the qualification listed?
- Do the year and place of qualification look right?
If a record is hard to find, a spelling difference or an older register may be the reason. Ask the clinic for help and do not guess.
## Step 4: check the training for the operation
Plastic surgery in India is a specialty with its own postgraduate degrees, such as MCh in plastic surgery or a DNB in plastic surgery. A general surgeon, an ENT surgeon or a dermatologist may do some operations too, with their own training. Ask:
- Which degree and where was it earned?
- How much of your practice is this operation?
- Are you a member of a professional body such as the Association of Plastic Surgeons of India? Membership gives you no licence to operate, and it is one more fact to check.
Be wary of the title "cosmetic surgeon" used alone, since it does not tell you the training.
## Step 5: check the place of surgery
Ask where the operation will be done, and whether that facility is registered to run surgery with anaesthesia and has emergency backup. Ask who the anaesthetist is. Our [[link: /learn/consultation-checklist | consultation checklist]] has these questions.
## Warning signs
- No number, or a number that does not match.
- Pressure to pay on the day.
- Promises that the result is certain.
- A quote that is much lower than all others, with no list of lines. Read [[link: /learn/what-a-surgery-quote-includes | what a quote includes]].
- Staff who will not say who operates.
## If you cannot confirm
Do not go ahead. Ask another doctor, or ask us. We do not publish reviews or ratings and do not name doctors on our pages, and we cannot vouch for any doctor you meet elsewhere.
## For operations in other towns
If you travel from a smaller town, do the check before the trip. Doing it on arrival gives you little room to walk away. Read [[link: /plastic-surgery | the plastic surgery hub]] for the operations we cover, and see the [[link: /cost/rhinoplasty | cost pages]] for what to expect on a quote.
## Questions about records and paperwork
- Ask for the consent form in advance, so you can read it at home before the day.
- Ask whether the hospital gives a discharge summary and operation notes. You will need them for any later review elsewhere.
- Ask which doctor you should call at night, and what the number is.
## When a clinic uses only a first name
Some clinics advertise by a brand name or a short name. Ask for the full name as it appears on the register. If the name on the board, the quote and the register differ, ask the clinic to explain before paying anything.
[[faq: Surgeon ka registration kaise check karein? | Naam, registration number aur council poochhein, phir council ke register mein khojein aur naam, degree aur saal milayein.]]
[[faq: Plastic surgeon aur cosmetic surgeon mein kya antar hai? | Plastic surgery ki apni degree hoti hai, jaise MCh ya DNB. Cosmetic surgeon sirf ek naam ho sakta hai, isliye degree poochhein.]]
[[faq: Register ka link kahan milega? | Official sarkari site par council ka naam khojein. Vigyapan ya message ke link par bharosa na karein.]]
[[faq: Agar registration na mile to? | Aage na badhein. Clinic se poochhein aur doosri raay lein.]]
Send us the details you were given on WhatsApp if you want help knowing what to check.
[[sources: National Medical Commission and State Medical Councils (register links to be verified before publication); Association of Plastic Surgeons of India (professional body).]]
`),
  },
];
