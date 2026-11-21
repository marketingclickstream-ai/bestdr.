// SAMPLE CONTENT, PENDING SURGEON REVIEW. Decision and eligibility posts for the plastic surgery pillars.
// `published: true` is set only so the staging site renders them. reviewerId "sample-reviewer" is a placeholder:
// no surgeon has reviewed these posts. See content/blog/README.md for the body markup.
//
// TODO-VERIFY (reviewer): waiting periods after delivery, after weight loss and before revision surgery; breast
// imaging advice by age; implant follow-up scan advice; keloid recurrence wording (dermatology reviewer too).
// LEGAL REVIEW before publication: breast-implant-vs-fat-transfer, breast-implant-removal (implants), mommy-makeover.
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

export const plasticGuidePosts: BlogPost[] = [
  {
    ...base,
    slug: "tummy-tuck-after-c-section",
    treatmentSlug: "tummy-tuck",
    title: "Tummy tuck after a C-section: timing and what changes",
    excerpt: "Can you have a tummy tuck after a C-section? When surgeons usually ask you to wait, how the old scar fits in, and what to arrange at home.",
    minutes: 5,
    thumb: 1,
    body: lines(`
[[reviewer]]
Yes, a tummy tuck can be done after a C-section. Surgeons usually ask you to wait several months after delivery, until breastfeeding has ended and your weight is steady, and to finish having children first. The old scar often sits close to the new one. Our [[link: /tummy-tuck | tummy tuck guide]] explains the operation.
## What a C-section leaves behind
The cut for a C-section runs low across the belly. Beneath it, the muscle wall and the scar tissue heal in layers, and some women notice a fold of skin hanging over the line. A tummy tuck also works through a low cut. In many cases the surgeon can remove the old scar and place the new one in the same region, but they need to examine you first, since the old scar may be higher, lower or uneven.
## Three problems that look alike
- Loose or stretched skin. Pregnancy stretches the skin, and it may not return.
- Separated abdominal muscles. This is called diastasis, and no amount of skin removal fixes it on its own. See [[link: /learn/diastasis-recti-surgery | diastasis recti surgery]].
- Fat that stays on the lower abdomen despite weight loss.
A tummy tuck deals with skin and muscle. Liposuction deals with fat. A surgeon may suggest one, two or all three after an examination.
## When to wait
- Weight not yet steady. Weight that is still changing will change the result.
- Still breastfeeding. Many surgeons prefer you to finish before surgery.
- A baby under about six months old or until you have fully recovered from the delivery. TODO-VERIFY waiting time with the reviewer.
- Another pregnancy planned. A later pregnancy would stretch the repair again, so most surgeons advise finishing the family first.
- Anaemia or a health problem from delivery that has not been treated.
## Questions about the C-section itself
Bring the discharge summary from your delivery if you have it. Tell the surgeon how many C-sections you have had and whether the wound had problems, such as an infection or a hernia. Scarring from repeated C-sections may need a different approach. Ask whether a mini tummy tuck is enough, which depends on where your loose skin lies. The guide on [[link: /learn/mini-vs-full-tummy-tuck | mini and full tummy tuck]] shows the difference.
## What to arrange at home
A new mother has an unusual problem: the baby cannot be put on hold. Lifting is restricted for weeks, so ask who will do the lifting and carrying.
- Someone who can look after the baby during the first two weeks.
- A plan for feeding if you are still breastfeeding. Ask the anaesthetist about medicines while breastfeeding.
- A joint-family or neighbour roster if your husband works away. Rotating relatives is common in India, but check who stays in the first week at night.
- A place to rest that is quiet and cool.
Use our [[link: /learn/surgery-leave-planner | leave planner]] to place dates, and read [[link: /learn/tummy-tuck-recovery-week-by-week | the week-by-week recovery]] before you book.
## Travel from outside the city
Women from towns around Kanpur and Lucknow often travel for surgery. Ask where you can stay with the baby's carer, and how soon the first review is. Our pages for [[link: /tummy-tuck-in-kanpur | Kanpur]] and [[link: /tummy-tuck-in-lucknow | Lucknow]] will list local follow-up once confirmed.
## Questions to ask your surgeon
- How long after my delivery do you advise waiting for me?
- Will you remove my C-section scar, and where will the new scar lie?
- Do I need muscle repair as well as skin removal?
- What can I lift at week 2 and week 6?
- If I have another baby later, what happens to the result?
Price lines are on the [[link: /cost/tummy-tuck | tummy tuck cost page]].
[[faq: C-section ke kitne time baad tummy tuck ho sakta hai? | Aksar delivery ke kuch mahine baad, breastfeeding khatam hone aur weight sthir hone par. Surgeon aapki jaanch ke baad tarikh batate hain.]]
[[faq: Kya C-section ka purana nishaan hat sakta hai? | Kai baar surgeon purane nishaan ko naye nishaan ke saath hata sakte hain. Yeh aapke nishaan ki jagah par depend karta hai.]]
[[faq: Doosra bachcha chahiye to kya tummy tuck karwa sakte hain? | Zyada surgeon pehle parivar poora hone ki salah dete hain, kyunki agli pregnancy mein pet phir khinchta hai.]]
[[faq: Breastfeeding ke dauran tummy tuck ho sakta hai kya? | Kai surgeon breastfeeding poori hone ka intezaar karne ko kehte hain. Anaesthesia aur dawai ke baare mein surgeon aur anaesthetist se baat karein.]]
[[faq: Tummy tuck ke baad bachche ko kaun sambhalega? | Pehle do hafte kisi vayask ki madad chahiye hogi, kyunki bhaari cheezein uthana mana hota hai. Pehle se plan karein.]]
Not sure where to begin? Send us your delivery date on WhatsApp and we will help you write questions for the consultation.
[[sources: NHS patient information on abdominoplasty; American Society of Plastic Surgeons patient information on tummy tuck and pregnancy.]]
`),
  },
  {
    ...base,
    slug: "diastasis-recti-surgery",
    treatmentSlug: "tummy-tuck",
    title: "Diastasis recti surgery: when a gap needs an operation",
    excerpt: "What separated stomach muscles are, how a doctor checks the gap, when physiotherapy is tried first and how surgery repairs it.",
    minutes: 4,
    thumb: 2,
    body: lines(`
[[reviewer]]
Diastasis recti is a gap between the two straight muscles of the abdomen, common after pregnancy. Many gaps cause no problem and do not need surgery. When the bulge bothers you or comes with back pain, a surgeon can stitch the muscle wall together, usually as part of a tummy tuck. See the [[link: /tummy-tuck | tummy tuck guide]].
## What the gap is
The two straight muscles of the abdomen meet along a central band. During pregnancy the band stretches, and the muscles move apart. After delivery the band may stay stretched. A bulge may show along the middle when you sit up or strain. It differs from a hernia, though a hernia can sit in the same area.
## How it is checked
- A doctor lies you on your back, asks you to lift your head, and feels the gap with fingers.
- Width is described in finger-breadths, and depth tells how weak the band feels.
- Ultrasound or a scan is sometimes used, especially if a hernia is suspected.
Different doctors measure differently, so ask which method your doctor used.
## Who may need surgery
Questions to answer with a surgeon:
- Does the bulge remain when you are lying down relaxed?
- Is there back pain or a sense of weakness in the core that does not improve with time?
- Is there a hernia?
- Has it been long since delivery and has the gap stayed?
If you have no symptoms and mainly dislike the look, surgery is a choice you make with your surgeon. It is not urgent.
## What to try first
Physiotherapy for the abdominal wall and pelvic floor is the usual first step, ideally guided by a physiotherapist who treats women after delivery. Exercises that strain the middle, such as full sit-ups, may be avoided. Time also helps, since some gaps narrow in the months after delivery. Surgeons often want to see that you tried a sensible programme before operating.
## What the operation does
In an abdominoplasty the surgeon lifts the skin, stitches the muscle edges together with strong stitches and removes extra skin. Some surgeons do a smaller repair through a limited cut. The repair has a hospital stay of one or more nights, a garment and limits on lifting for weeks. Read the [[link: /learn/tummy-tuck-recovery-week-by-week | recovery week by week]].
## Gap, hernia or both
A hernia means tissue pushes through a hole in the wall. Diastasis is a stretched band with no hole. A belly button hernia often comes with diastasis, and the surgeon can repair both in one operation. The guide on [[link: /learn/tummy-tuck-and-hernia-repair | tummy tuck and hernia repair]] covers the planning.
## Planning for another baby
A repaired wall can stretch again in a later pregnancy. Most surgeons advise finishing childbearing first.
## Questions for your surgeon
- How wide is my gap, and how did you measure it?
- Would physiotherapy alone work, and for how long should I try?
- Do I also have a hernia?
- Is the muscle repair done at the same time as skin removal, and how does that change my quote?
See the [[link: /cost/tummy-tuck | tummy tuck cost page]] for price lines.
## A day-to-day picture
Women describe it in ordinary terms: a soft dome when they sit up from bed, trousers that fit at the hips but pinch at the waist, a lower back that tires by evening, or the look of being a few months pregnant long after delivery. A doctor listens to these details and examines you lying and standing. Write down when the bulge shows and what makes it worse, since that guides the advice.
## In smaller towns
A physiotherapist with experience in post-delivery care may not be easy to find near you. Ask your gynaecologist for a referral, or whether a plan can be shared by video with checks in person every few weeks. Do not follow social media core routines without a check, since some movements strain the middle and may widen the gap.
## Bring the right papers
Take your delivery summary, any scan report and a list of exercises you have tried and for how long. If you had a hernia noticed during pregnancy or after, say so. A surgeon can then decide faster whether an examination alone is enough or a scan is needed.
[[faq: Is diastasis recti the same as a hernia? | No. Diastasis is a stretched central band with no hole. A hernia is a hole through which tissue pushes. Both can occur together, and an examination tells them apart.]]
[[faq: Can exercise close the gap? | Guided physiotherapy helps some people, and the gap may narrow with time after delivery. A surgeon can tell you whether surgery is worth discussing.]]
[[faq: Is surgery done only for looks? | Sometimes the aim is appearance, sometimes weakness or back pain. Be clear with the surgeon about what bothers you most.]]
Send your questions on WhatsApp and we will help you shape them for a consultation.
[[sources: NHS patient information on abdominal muscle separation after pregnancy; American Society of Plastic Surgeons patient information on abdominoplasty.]]
`),
  },
  {
    ...base,
    slug: "body-contouring-after-weight-loss",
    treatmentSlug: null,
    title: "Body contouring after weight loss: stages and planning",
    excerpt: "Loose skin after a large weight loss: when surgeons say you are ready, why surgery is staged, and what to plan for each stage.",
    minutes: 5,
    thumb: 3,
    body: lines(`
[[reviewer]]
After a large weight loss, loose skin on the belly, arms, thighs and chest can be removed in staged operations. Surgeons usually want your weight to be steady for some months first, your nutrition checked, and each stage planned with months between. See our [[link: /plastic-surgery | plastic surgery hub]] and the [[link: /cost/body-lift | body lift cost page]].
## Ready or not: a checklist
- Weight steady for several months. TODO-VERIFY the period with the reviewer.
- Blood tests for anaemia, protein, vitamins and sugar, particularly after bariatric surgery.
- Skin condition: rashes under folds, which need treatment before surgery.
- No smoking or tobacco in any form, and a plan for staying off it.
- A realistic expectation of scars, which are long after skin removal.
Weight loss from medicines, surgery, diet or exercise can all leave loose skin. Ask your doctor whether your weight is still falling.
## Why surgery is staged
Taking skin from the abdomen, back, arms, thighs and breasts in a single sitting would be too long and too risky. Surgeons divide the work, often one or two areas per operation, with a gap of some months. The order depends on what troubles you most.
- Abdomen: often first, since an apron of skin affects hygiene, walking and clothes.
- Lower body lift: belly, flanks and buttocks together in a circle. This is a bigger operation.
- Thighs: inner thigh skin removal leaves scars on the inner thigh or the groin crease.
- Arms: a scar along the inner arm, which some people find a hard trade.
- Breast and chest: lift or skin removal, sometimes with an implant or fat.
## A sample staging plan
This is only a picture of how it might go, and every body is different.
- Stage 1: abdomen.
- Gap of a few months.
- Stage 2: thighs or arms.
- Gap of a few months.
- Stage 3: the remaining area.
Total time from first to last operation may be a year or more. Make sure you can live with that.
## Leave for several operations
Each stage needs leave. A tummy tuck type operation needs two to three weeks off for most desk jobs, and a body lift often longer. Ask your employer before you start, and not after the second stage. If you are a student or on a contract, check the dates. Our [[link: /learn/surgery-leave-planner | leave planner]] shows how to add the blocks.
## Nutrition and healing
Losing a lot of weight may leave you low in protein or iron. Poor nutrition slows healing and raises infection risk. Many surgeons ask for blood tests and diet advice, and some want a dietitian involved. Vegetarians should ask for a protein plan, since some surgeons give advice based on non-vegetarian diets.
## What the scars look like
The scars are long. They fade over a year or more but do not vanish. Placement is chosen to hide them in clothing where possible. A scar on the arm is hard to hide in sleeveless wear, and many people accept that for the improved comfort.
## Costs across stages
Each stage has its own surgeon fee, anaesthesia, facility and garment. Quotes sometimes bundle stages. Ask whether a package covers all stages or one, what happens if you stop after stage one, and whether revisions are included. Read [[link: /learn/what-a-surgery-quote-includes | what a quote includes]].
## Questions to ask
- Which area do you advise first and why?
- How long should I wait between stages?
- Which scars will be visible in which clothes?
- If I regain weight, what happens to the result?
- Who will see me for follow-up if I live outside the city?
Our [[link: /learn/tummy-tuck-after-c-section | tummy tuck after C-section]] guide covers another reason for loose abdominal skin.
## A word on regaining weight
Skin removal does not stop weight from returning. If you gain a lot afterwards, the result changes. Talk with your surgeon about how you plan to keep your weight steady, and whether to see a dietitian before and after.
[[faq: How long should my weight be steady before surgery? | Surgeons usually want several months of steady weight. Your surgeon gives the period after an examination.]]
[[faq: Can everything be done in one operation? | Usually no. Surgeons divide the work into stages to keep each operation shorter and reduce risk.]]
[[faq: Will the scars go away? | They fade over a year or more but do not vanish. A surgeon can show you where each will lie.]]
Message us your weight history on WhatsApp and we will help you list questions.
[[sources: NHS patient information on surgery after weight loss; American Society of Plastic Surgeons patient information on body contouring.]]
`),
  },
  {
    ...base,
    slug: "rhinoplasty-vs-septoplasty",
    treatmentSlug: "rhinoplasty",
    title: "Rhinoplasty vs septoplasty: which operation fixes what",
    excerpt: "Septoplasty straightens the wall inside the nose for breathing. Rhinoplasty reshapes the outside. A plain comparison and the combined operation.",
    minutes: 4,
    thumb: 1,
    body: lines(`
[[reviewer]]
Septoplasty straightens the inner wall of the nose to help breathing. Rhinoplasty changes the outer shape. Some people need one, some the other, and some have both in a single operation called septorhinoplasty. An ENT or plastic surgeon examines your nose to decide. See the [[link: /rhinoplasty | rhinoplasty guide]].
## The two operations side by side
- Septoplasty: aim is breathing. Works on the septum, the wall dividing the nostrils. Done through the inside of the nose, with no change to the outer shape.
- Rhinoplasty: aim is shape, and sometimes breathing too. Works on bone and cartilage of the bridge and tip. May be done through a small cut at the base of the nose or entirely inside.
- Septorhinoplasty: both, in one sitting.
## Which problem do you have
Ask yourself:
- Is one side of my nose usually blocked, even without a cold? That points to the septum.
- Do I snore, wake with a dry mouth, or have nose-related headaches? A doctor can tell whether the nose is involved.
- Is my main concern the hump, the tip or the width? That points to rhinoplasty.
- Do I have both? Say so at the consultation.
Self-diagnosis is unreliable. A doctor looks inside with a small camera or light and examines the structures.
## Tests you may be asked for
- Nasal endoscopy, a thin scope to look inside.
- Sometimes a CT scan of the sinuses.
- Blood tests and an anaesthesia check, as for any operation.
## Who does which
Septoplasty is done by ENT surgeons and sometimes plastic surgeons. Rhinoplasty is done by plastic surgeons and by some ENT surgeons with training in nasal surgery. Ask about the surgeon's training and how often they do the exact operation you need. Our [[link: /learn/how-to-check-a-surgeons-registration | registration check guide]] shows how to confirm qualifications.
## Recovery differences
Septoplasty often means less swelling outside and a shorter wait, though inside the nose feels blocked for a while from swelling and sometimes soft splints. A combined operation follows the rhinoplasty timeline. See [[link: /learn/rhinoplasty-recovery-timeline | rhinoplasty recovery]].
## Money and paperwork
Because septoplasty treats a breathing problem, some people ask about insurance. Whether any policy pays depends on the policy wording, the reason for surgery and the insurer's decision. Read [[link: /learn/septoplasty-insurance-india | septoplasty and insurance in India]]. A combined operation may have a quote split between the breathing part and the shape part, so ask for each line. The [[link: /cost/rhinoplasty | rhinoplasty cost page]] lists the usual factors.
## Questions to ask
- Do I need septoplasty, rhinoplasty or both?
- What will you do inside, and what outside?
- If I only want the breathing fixed, will the outer shape change?
- If I choose shape surgery now, could I need a second operation for breathing later?
- How long will I be off work?
## A few examples
- A student with a nose that blocks on the left side since a cricket injury and no complaint about shape. A septoplasty may be the question, and a doctor will look.
- A young woman happy with breathing who dislikes a hump on the bridge. Rhinoplasty is the topic.
- A man with a crooked nose after a fall who also snores and has a blocked side. Septorhinoplasty may be discussed.
These are illustrations only. The real answer comes from an examination.
## What changes the plan
Allergy, sinus disease and enlarged turbinates (structures along the side wall of the nose) can cause blockage without a bent septum. If allergy or sinus problems are the cause, surgery on the septum may not solve it. Surgeons often ask you to try medicines first and to control allergy. Ask whether turbinate treatment is part of the plan, since it changes theatre time and cost.
## Age
The nose keeps growing into the late teens. Surgeons may wait for an adult for shape surgery, and a breathing operation in a young person is judged on need.
## After the decision
Whichever operation you choose, ask when you can fly, travel by train, exercise and return to work. Septoplasty often has a lighter timetable, but your surgeon sets it for you.
[[faq: Is septoplasty the same as a nose job? | No. Septoplasty works inside the nose to improve breathing. A nose job usually means rhinoplasty, which changes the outer shape.]]
[[faq: Can both be done together? | Yes. The combined operation is called septorhinoplasty, and surgeons decide after examining you.]]
[[faq: Does septoplasty change how my nose looks? | It is not meant to change the outer shape, though small changes can happen. Ask your surgeon what to expect.]]
Talk it through with us on WhatsApp before your consultation.
[[sources: NHS patient information on septoplasty and rhinoplasty; American Society of Plastic Surgeons patient information on rhinoplasty.]]
`),
  },
  {
    ...base,
    slug: "breast-reduction-eligibility",
    treatmentSlug: "breast-reduction",
    title: "Breast reduction eligibility: who surgeons usually accept",
    excerpt: "Symptoms, age, weight, smoking, breastfeeding and imaging: what surgeons look at before breast reduction, as a decision list.",
    minutes: 5,
    thumb: 2,
    body: lines(`
[[reviewer]]
Surgeons consider breast reduction for adults with large breasts that cause pain, rashes or limits to daily life, whose weight is steady and who are not planning to breastfeed soon. There is no single cut-off. A surgeon decides after an examination and a talk about your goals. See the [[link: /breast-reduction | breast reduction guide]].
## Start with symptoms
Doctors take symptoms seriously. Common ones:
- Pain in the neck, shoulders or upper back.
- Grooves from bra straps.
- Rashes or infections in the skin fold under the breasts.
- Trouble exercising, running or sleeping on your front.
- Difficulty finding clothes or bras that fit.
- Numb fingers from nerve pressure, which a doctor should check.
Describe how these affect your day. A list helps in the consultation.
## Factors a surgeon checks
- Age and growth. Breasts should have finished growing. A surgeon may wait for an adult teenager, or involve a family conversation for a minor, and the law on consent applies.
- Weight. Large changes after surgery affect the result. Many ask for a steady weight.
- Smoking. Tobacco in any form slows healing and raises wound problems. Surgeons often ask you to stop for weeks beforehand.
- Medical conditions. Diabetes, blood pressure, thyroid and anaemia are controlled before surgery.
- Breast health. Depending on age and family history, the surgeon may ask for an ultrasound or mammogram first. TODO-VERIFY the age advice with the reviewer.
- Medicines. Blood thinners and some supplements may be stopped. Do not stop anything on your own.
## Breastfeeding and future pregnancy
Reduction can reduce your ability to breastfeed, and the amount varies by technique. If you plan children soon, discuss it before booking. Many surgeons ask women to finish having children first, though some operate earlier with a clear conversation.
## What you cannot choose
Surgeons choose the cut and the amount of tissue to remove based on your anatomy. You can tell them the size you hope for, such as a cup size, but cup sizes differ between brands, so describe the look and comfort you want instead.
## Insurance and paperwork
Some insurers consider breast reduction cosmetic and others treat it as reconstructive when symptoms are documented. We cannot tell you which applies to you. Check your policy wording and ask the insurer in writing. Keep records of physiotherapy, medicines and doctor visits for your symptoms.
## A decision list
Tick what applies, and bring the list to the consultation:
- I am an adult with a steady weight.
- My symptoms affect my daily life.
- I have tried a supportive bra and physiotherapy where advised.
- I do not smoke, or I am ready to stop.
- I know whether I want to breastfeed.
- I have told the surgeon about my family history of breast disease.
## Practical planning
Desk work often resumes in two to three weeks, with lifting restricted for longer. Plan help at home. Read the [[link: /learn/surgery-leave-planner | leave planner]] and the [[link: /learn/breast-implant-vs-fat-transfer | breast implant vs fat transfer]] guide if you are comparing breast operations. Price lines are on the [[link: /cost/breast-reduction | breast reduction cost page]]. Women in Lucknow and Kanpur can see our [[link: /breast-reduction-in-lucknow | Lucknow]] and [[link: /breast-reduction-in-kanpur | Kanpur]] pages once local follow-up is confirmed.
## Bring a symptom diary
For two weeks before the visit, note when pain starts, which activities are hard and what you do to cope, such as wearing two bras or avoiding sport. Concrete notes help the surgeon, and any insurance paperwork, far more than a general statement of discomfort.
## Questions at the consultation
- How much tissue do you plan to remove, and how do you decide?
- Where will the scars lie, and will I have drains?
- What are the chances that I may need a touch-up?
- How many weeks before I can wear a normal bra again?
[[faq: Breast reduction ke liye kitni umar honi chahiye? | Breast ka badhna ruk jaana chahiye. Koi ek tay umar nahi hai, surgeon jaanch ke baad batate hain.]]
[[faq: Breast reduction ke baad breastfeeding ho sakti hai kya? | Kuch mahilaon mein doodh pilane ki kshamta kam ho sakti hai. Agar bachche ki yojana hai to pehle surgeon se baat karein.]]
[[faq: Kya breast reduction ke liye mammogram zaroori hai? | Umar aur parivaar ke itihas ke hisaab se surgeon jaanch suggest karte hain. Yeh sabke liye ek jaisa nahi hota.]]
[[faq: Smoking kitne din pehle band karni chahiye? | Surgeon aksar kuch hafte pehle se band karne ko kehte hain. Sahi samay unse poochhein.]]
[[faq: Kya insurance breast reduction ko cover karta hai? | Yeh aapki policy ke shabdon aur bima company ke faisle par depend karta hai. Policy padh kar likhit mein poochhein.]]
Message us on WhatsApp with your symptom list and we will help you prepare for the visit.
[[sources: NHS patient information on breast reduction; American Society of Plastic Surgeons patient information on breast reduction.]]
`),
  },
  {
    ...base,
    slug: "breast-implant-vs-fat-transfer",
    treatmentSlug: "breast-augmentation",
    title: "Breast implant vs fat transfer: a plain comparison",
    excerpt: "How implants and fat transfer differ in size change, scars, follow-up and later surgery, so you can ask better questions at consultation.",
    minutes: 5,
    thumb: 3,
    body: lines(`
[[reviewer]]
Implants can add a larger, more predictable volume. Fat transfer moves your own fat to the breast for a smaller change, and some of it is absorbed over time. Each has different scars, follow-up and later surgery. A surgeon helps you choose after an examination. See the [[link: /breast-augmentation | breast augmentation guide]].
## Side by side
- Size change: implants can give a larger increase. Fat transfer gives a modest one.
- Material: implants are a silicone shell with silicone or saline filling. Fat transfer uses fat taken by liposuction from your body.
- Scars: implants need a cut under the breast, around the nipple or elsewhere. Fat transfer leaves tiny liposuction marks at the donor site and the breast.
- Donor fat: fat transfer needs enough fat to take. A very slim person may not have enough.
- Absorption: part of transferred fat is absorbed. A second session is sometimes planned.
- Later surgery: implants are not lifelong devices and may need replacement or removal. Fat transfer may need top-up sessions.
- Feel: implants can feel firmer. Fat feels like your own tissue.
## Questions only you can answer
- How big a change do I want?
- How much fat do I have to spare?
- Am I ready for follow-up for the life of an implant?
- Would I accept more than one operation?
## Implant questions to ask
- Which type, shell and filling are used, and where is it placed?
- What follow-up and imaging do you advise, and how often?
- What are the possible problems, such as hardening around the implant, rupture or a change in position?
- What happens if I want it out later? Read [[link: /learn/breast-implant-removal | breast implant removal]].
- Will I be given an implant card or record with the product details?
Do not ask for a brand by name from advertising. Ask for the documentation your surgeon will give you.
## Fat transfer questions to ask
- How much of the fat do you expect to last, and how will you check?
- Where is the fat taken from, and what shape change happens there?
- Could the fat form lumps, and how would they be looked at later?
- Do I need a scan or mammogram, now or later, given my age?
## Pregnancy, breastfeeding and weight
Both choices may be affected by a later pregnancy and by weight change. Breasts change shape after breastfeeding, and implants do not stop that. Many surgeons suggest finishing children first, but each case is individual.
## Recovery and leave
Both involve a tight bra and limited lifting. Desk work often resumes in about a week, and driving and exercise return in steps. Fat transfer includes recovery at the donor site. Our [[link: /learn/surgery-leave-planner | leave planner]] shows how to count the days.
## Money
Implants add the cost of the device. Fat transfer adds liposuction. If a second session is likely, ask whether the quote includes it. See the [[link: /cost/breast-augmentation | breast augmentation cost page]] and [[link: /learn/what-a-surgery-quote-includes | what a quote includes]].
## What to bring to the consultation
- A note of the size and feel you want, in your own words. Cup sizes differ between brands, so a cup size alone can mislead.
- Your height and weight, and any recent change.
- Details of pregnancies and breastfeeding.
- Family history of breast disease.
Many women in India have not had a breast scan before surgery. Ask your surgeon whether one is advised for you, and how it will be done around an implant.
## A note on advertising
Posts that promise a particular size in a single session, or that mention a named product as if it were a service, should make you cautious. Ask for plain information about the type of implant and the documents you will receive.
## Time to decide
You do not need to choose in the consultation. Take the notes home, read about both choices, and return with questions. Surgeons who plan carefully will not mind.
[[faq: Can fat transfer give the same size as an implant? | Usually not. Fat transfer gives a smaller change, and part of the fat is absorbed. A surgeon can explain what is realistic for you.]]
[[faq: Do implants last for life? | No. They may need replacement or removal at some point, and surgeons advise follow-up. Ask how often.]]
[[faq: Is a scan needed after an implant? | Surgeons may advise periodic imaging. Ask what suits your implant type and your age.]]
[[faq: Can I breastfeed after either? | It may be possible, but each person differs. Discuss it before surgery.]]
Message us your questions on WhatsApp before the consultation.
[[sources: NHS patient information on breast implants; American Society of Plastic Surgeons patient information on breast augmentation and fat transfer.]]
`),
  },
  {
    ...base,
    slug: "breast-implant-removal",
    treatmentSlug: "breast-augmentation",
    title: "Breast implant removal: reasons, options and recovery",
    excerpt: "Why people remove breast implants, what en bloc and capsule removal mean, what shape to expect afterwards and how to plan recovery.",
    minutes: 5,
    thumb: 1,
    body: lines(`
[[reviewer]]
People remove breast implants for many reasons: a change in preference, hardening, pain, a change in position, rupture or concern about health. The operation takes out the implant, and sometimes the scar tissue around it. Your breast shape afterwards depends on your tissue. See the [[link: /breast-augmentation | breast augmentation guide]].
## Common reasons
- You no longer want implants.
- The breast feels hard, tender or painful.
- The implant has moved or changed shape.
- A scan shows rupture or a leak.
- Fluid or swelling appears long after surgery. Tell a doctor promptly, since it needs examination.
- Breast changes with age, weight or pregnancy.
The decision is yours, and a surgeon explains the medical side.
## Terms you will hear
- Implant removal alone: the implant is taken out, and the surrounding capsule of scar tissue stays.
- Capsulectomy: the capsule is taken out as well, wholly or in part.
- En bloc: the implant and capsule are taken out as one piece. It is a longer operation.
- Replacement: a new implant goes in at the same time.
- Lift or fat transfer at the same time: used to improve shape after removal.
## What shape to expect
After removal the skin may be loose, particularly after a large implant or a long time since surgery. Some breasts look flatter and some show folds or dimpling. A surgeon can examine you and explain options, including a lift or fat transfer. Ask the surgeon to be frank about what removal will leave you with.
## What you need to bring
- Implant records or card, if you have them, with date, size and type.
- Notes from the original surgery.
- Any scan or mammogram report.
- A list of symptoms and when they began.
If records are missing, tell the surgeon. They may ask for a scan.
## Before the operation
Surgeons often ask for an ultrasound, MRI or mammogram to check the implant and the breast. Regular tests, anaesthesia fitness and a medicines review apply as for any operation. Ask whether the removed tissue will be examined in a laboratory.
## Recovery
Removal alone is often a shorter recovery than the first operation, and removal with capsule or lift takes longer. Many people return to desk work in about a week, with limits on lifting. A supportive bra is usually worn. See our [[link: /learn/surgery-leave-planner | leave planner]].
## If you want to go ahead
- Ask which method suits you and why.
- Ask whether the original surgeon is available, and whether another doctor can see you if not.
- Ask how many review visits the quote covers.
Comparing options? Read [[link: /learn/breast-implant-vs-fat-transfer | breast implant vs fat transfer]]. Price lines are on the [[link: /cost/breast-augmentation | cost page]].
## Questions about the first operation
Many people considering removal had the first operation years ago, possibly in another city. If you cannot trace the surgeon or the hospital, say so. A scan can show the implant type and its condition, and the new surgeon works from what they see. Ask the hospital for old records in writing, since they must keep notes, and the process takes time.
## Emotions and decisions
Removal can feel like a loss to some people and a relief to others. Take time to think, speak with the surgeon, and bring a family member. Some people ask for a few weeks between the consultation and the date. That is reasonable.
## Check-up routine afterwards
After removal the surgeon will tell you when to return for dressings and a check, and how to care for scars. Ask whether any breast imaging should continue, based on your age and history. Keep all papers from the operation, including the laboratory report if tissue was examined.
## Cost lines to look for
A removal quote may include the surgeon's fee, anaesthesia, theatre, one or two nights in a room, a scan before surgery, laboratory examination of tissue, a bra and follow-up visits. If a lift or fat transfer is added, those lines are extra. Ask the hospital to split the quote so you can see each part.
[[faq: Does removing an implant leave the breast looking the same as before? | Not always. Skin may be loose, and shape depends on your tissue. A surgeon can explain what to expect.]]
[[faq: Is the capsule always removed? | No. It depends on the reason for removal and the findings. Your surgeon explains the choice.]]
[[faq: Can a lift be done at the same time? | Sometimes. Whether it is wise depends on your skin and the surgeon's view.]]
Send your implant details on WhatsApp and we will help you prepare questions.
[[sources: NHS patient information on breast implants and their removal; American Society of Plastic Surgeons patient information on implant removal.]]
`),
  },
  {
    ...base,
    slug: "revision-rhinoplasty",
    treatmentSlug: "rhinoplasty",
    title: "Revision rhinoplasty: waiting, planning and questions",
    excerpt: "Unhappy with a nose operation? How long surgeons usually wait, why a second operation is harder and what to bring and ask.",
    minutes: 4,
    thumb: 2,
    body: lines(`
[[reviewer]]
Revision rhinoplasty is a second operation on a nose that has already been operated on. Surgeons usually advise waiting about a year, so swelling has settled and you can see what is left. It is often harder than the first operation, since tissue is scarred and cartilage may be missing. See the [[link: /rhinoplasty | rhinoplasty guide]].
## Why people ask for a revision
- The shape differs from what was discussed.
- The tip, bridge or nostrils look uneven.
- A breathing problem appeared or did not improve.
- A change after healing, such as a bump returning.
Some of these are visible early, but swelling hides the real result for months. Read [[link: /learn/rhinoplasty-recovery-timeline | the rhinoplasty recovery timeline]] before deciding.
## Why wait
Operating again too soon means working on swollen, still-changing tissue. Surgeons commonly wait about twelve months, and longer if the nose is thick-skinned. TODO-VERIFY the waiting period with the reviewer. A breathing problem, an infection or a clear injury is different, and a doctor should see you promptly.
## Why it is harder
- Scar tissue makes the layers stick.
- Cartilage may have been removed, so the surgeon may need grafts from the ear, the septum or a rib.
- Blood supply to the skin is thinner.
- The surgeon must understand what the first surgeon did.
The result of a revision may be a smaller change than you hope for. Ask for a plain account of what can be improved.
## What to bring
- The operation notes, or at least the date, hospital and type of surgery.
- Your own photos of the nose from before surgery, for the surgeon only.
- A list of what you dislike and what you want.
- A list of breathing symptoms.
Your hospital must hand over notes if you ask in writing, which can take time, so ask early.
## Should you go back to the first surgeon
Often a good first step. Ask for a review and for their view on what is possible. A second opinion from a surgeon who does many revisions is also reasonable. Tell each doctor that you are seeing another.
## Questions to ask
- What exactly is wrong, in your view?
- What would you change, and what would stay?
- Is a graft needed, and from where?
- How long is the wait, and how many reviews?
- If I am still not satisfied, what next?
- What does the quote include, and is a further touch-up covered?
## Time off and cost
Expect recovery similar to the first operation or a little longer if a rib graft is used. Plan leave using our [[link: /learn/surgery-leave-planner | leave planner]]. A revision quote may cost more because the operation is longer. Compare lines using [[link: /learn/what-a-surgery-quote-includes | what a quote includes]] and the [[link: /cost/rhinoplasty | rhinoplasty cost page]].
## Handling the conversation with the first surgeon
Be direct and calm. Say what you see and what you feel. Ask what the surgeon saw at the time and what they would change. Surgeons differ in how they handle a request for revision, and some give a touch-up on their own terms, which you should read in writing. If the conversation does not help, a second opinion from a different surgeon is fair.
## Practical points for India
- Hospital records may sit in different departments, so ask the medical records desk for the operation note and the discharge summary.
- If you had the first operation in another city, ask whether a video review is possible before you travel.
- Plan leave as for a new operation, and add days if a rib graft is expected. See the leave planner.
- Keep expectations modest. A revision aims to improve a specific problem and works with the nose you have.
## Mental health and expectations
Unhappiness with a result can weigh heavily. A good surgeon asks about your reasons and your expectations, and may suggest speaking with a counsellor if the worry is larger than the visible change. The conversation helps you both decide whether a second operation will help.
[[faq: How long should I wait for a revision? | Surgeons commonly advise around a year. A breathing problem or infection should be seen sooner.]]
[[faq: Is a revision harder than the first operation? | Often yes, because of scar tissue and missing cartilage.]]
[[faq: Should I go back to my first surgeon? | It is often a good first step. You can also seek a second opinion.]]
Send us your questions on WhatsApp and we will help you list them.
[[sources: NHS patient information on rhinoplasty; American Society of Plastic Surgeons patient information on revision rhinoplasty.]]
`),
  },
  {
    ...base,
    slug: "keloid-surgery",
    treatmentSlug: null,
    title: "Keloid surgery: why scars return and what helps",
    excerpt: "Keloids can grow back after being cut out. What a keloid is, how treatment is combined, and what to ask a plastic surgeon or dermatologist.",
    minutes: 4,
    thumb: 3,
    body: lines(`
[[reviewer]]
A keloid is a raised scar that grows beyond the original wound. Cutting it out alone often leads to a return, so doctors usually combine surgery with other treatment such as injections, pressure or radiation. A dermatologist or plastic surgeon examines it first. See our [[link: /plastic-surgery | plastic surgery hub]] and the skin team's [[link: /learn/acne-scar-types-treatment | scar types guide]].
## Keloid or ordinary raised scar
- A hypertrophic scar stays within the line of the wound and may flatten over time.
- A keloid spreads past the wound edge, may keep growing, and can itch or hurt.
People with darker skin tend to be more prone, and keloids run in some families. Common sites are the ears after piercing, the chest, shoulders and upper back.
## Why plain removal often fails
A cut is a new wound. In a person prone to keloids, the new scar can become another keloid, sometimes bigger. TODO-VERIFY recurrence wording with the dermatology reviewer. That is why plans usually add a second treatment.
## Options doctors discuss
- Steroid injections into the keloid, often repeated over months.
- Silicone gel or sheets worn over the scar.
- Pressure devices, such as earring clips for ear keloids.
- Freezing treatment for smaller keloids, in a dermatologist's hands.
- Surgery, followed by one of the above, sometimes with radiation.
No option works for everyone. Ask what the plan is for the months after surgery, since that is where the keloid is held back or not.
## Ear piercing and keloids
Ear keloids after piercing are a common reason people see a doctor. If you are prone to keloids, think before another piercing, and ask a doctor first. Do not cut or burn a keloid at home, and do not let someone apply caustic substances.
## What to ask
- Is this a keloid or another scar?
- Is surgery needed or can injections work first?
- What will you do after surgery to lower the chance of the keloid returning?
- How many visits will I need over the next year?
- Do you work with a dermatologist on keloids?
## Who treats keloids
Dermatologists and plastic surgeons both treat keloids, and a joint plan helps with large ones. Ask your surgeon about their experience with your site. Read [[link: /learn/how-to-check-a-surgeons-registration | how to check a surgeon's registration]] to confirm training.
## Time and cost
A keloid plan often means many short visits over the year. A quote may list the operation only, with injections and dressings billed per visit. Ask for the whole plan on paper. Read [[link: /learn/what-a-surgery-quote-includes | what a quote includes]] and see the [[link: /cost/scar-revision | scar revision cost page]].
## A note on treatment length
Keloid care often runs for a year or more, with visits every few weeks at first. If you live far from the clinic, ask which parts can be done closer to home, such as injections by a local dermatologist, with the surgeon deciding the plan. Keep a record of each visit so that any doctor can see what has been done.
## Skin care and sun
A healing scar in darker skin may look darker for a time. Cover it from strong sun while it heals, as advised by your doctor. Do not apply home remedies, oils or pastes over open wounds. Ask what to use, and for how long.
## Other places on the body
Keloids on the earlobe, chest and shoulders behave differently from those on the stomach or the upper back. Tension on the skin affects the scar. Ask your doctor why they suggest a particular approach for your site.
## Children and teenagers
Keloids can appear after ear piercing or minor injury in young people. Treatment in a child is planned with a parent or guardian, and a paediatric or skin specialist may be involved. Do not delay a visit because the scar looks small. Early treatment is often simpler, and the doctor can explain options in plain terms. Ask how pain will be handled during injections for a child, and what care at home involves.
[[faq: Can a keloid come back after surgery? | Yes, it can. That is why doctors often combine surgery with injections, pressure or other treatment.]]
[[faq: Is keloid surgery needed for an ear keloid? | Not always. Small ear keloids may respond to injections or pressure. A doctor decides after an examination.]]
[[faq: Can I get my ears pierced again? | Ask your doctor first, since a new piercing can cause another keloid.]]
Send us a message on WhatsApp if you want help choosing whom to see.
[[sources: NHS patient information on keloid scars; British Association of Dermatologists patient information on keloid scars.]]
`),
  },
  {
    ...base,
    slug: "mommy-makeover",
    treatmentSlug: "tummy-tuck",
    title: "Mommy makeover: what it combines and when to wait",
    excerpt: "A mommy makeover joins a tummy tuck and a breast operation, sometimes with liposuction. What it involves, risks of long surgery and how to plan.",
    minutes: 5,
    thumb: 1,
    body: lines(`
[[reviewer]]
A mommy makeover is a plan that joins several operations in one session, most often a tummy tuck with a breast lift, reduction or augmentation, sometimes with liposuction. It means a longer anaesthetic and a longer recovery. Many surgeons suggest waiting until you have finished childbearing and breastfeeding. See the [[link: /tummy-tuck | tummy tuck guide]].
## How the plan is built
No standard package exists. Your surgeon builds the combination around your body and your priorities. Typical building blocks:
- Tummy tuck, with or without muscle repair.
- Breast lift, reduction or implant.
- Liposuction of the flanks or back.
- Sometimes an arm or thigh procedure, which usually belongs in a second stage.
## One session or two
Doing several operations at once saves a recovery and some costs, but it makes the operation longer. A longer time under anaesthesia raises the chance of problems such as clots. Surgeons often set a limit on the total length and may split a plan into two. Ask for both versions and the reasons.
## Timing after children
Surgeons usually want these in place first:
- Breastfeeding has ended and your breasts have settled.
- Your weight is steady.
- You do not plan another pregnancy, since pregnancy stretches the work again.
TODO-VERIFY the minimum waiting time with the reviewer. Our guide on [[link: /learn/tummy-tuck-after-c-section | tummy tuck after C-section]] goes through the abdominal side.
## Who does the lifting
This is the part that breaks plans. You will not be able to lift children, buckets or bags for some weeks, and a tight bra and abdominal garment limit your movement. With small children at home, that matters.
- Who can do school drop-offs and the baby's night feeds?
- Is your mother, mother-in-law or a helper available for two weeks or more?
- Can your partner take leave?
Use the [[link: /learn/surgery-leave-planner | leave planner]] to count days. Add one to two weeks to the longest single operation, as the planner suggests.
## Risks and fitness
Combined surgery needs good general health, a healthy weight range and no smoking. Blood tests, a fitness check and a review of medicines come first. Surgeons may decline to combine procedures if the risk looks higher for you.
## Quote
A makeover quote should list each part: the surgeon's fee for each procedure, anaesthesia time, facility and stay, implants if any, garments and follow-up. Ask whether a package price changes if one part is dropped. See [[link: /learn/what-a-surgery-quote-includes | what a quote includes]] and the [[link: /cost/tummy-tuck | tummy tuck cost page]].
## Questions to ask
- Which parts do you advise now, and which later?
- How many hours will I be under anaesthesia?
- What are the extra risks of combining, in my case?
- How long before I can lift my child?
- If a part needs a touch-up, is it covered?
## What a day could look like after
Imagine the first week. You are in a bed with a garment and a bra, walking in short rounds, and you need help to get up. A child cries at night. Your mother stays, but she cannot lift the child either if her back is weak. These details decide whether a combined plan is workable. Many families find it easier to space the operations over two admissions, with a few months between, and keep a helper at home for each.
## Honest limits
A combined surgery does not change the fact that each part has its own scars and risks. A surgeon who is frank about what to leave for a second stage is giving you useful advice. If one surgeon recommends everything at once and another suggests two stages, ask each to explain why.
## Your health first
Combined surgery depends on being fit. Anaemia is common after pregnancy and breastfeeding in India, and surgeons often check haemoglobin before any large operation. If yours is low, treatment comes first and the date may move. Bring your latest blood reports, and tell the surgeon about thyroid problems, diabetes and any medicine you take regularly.
[[faq: Is a mommy makeover one operation? | It is a plan that combines more than one operation, tailored to you. Your surgeon decides which parts and whether to split them.]]
[[faq: When should I wait before a makeover? | Usually until childbearing and breastfeeding are over and weight is steady.]]
[[faq: Can I look after my baby after surgery? | Lifting is restricted for weeks, so plan help at home.]]
A WhatsApp message to us is a fair way to start if you want a hand listing what to ask.
[[sources: American Society of Plastic Surgeons patient information on mommy makeover and combined procedures; NHS patient information on abdominoplasty.]]
`),
  },
  {
    ...base,
    slug: "mini-vs-full-tummy-tuck",
    treatmentSlug: "tummy-tuck",
    title: "Mini vs full tummy tuck: who suits which",
    excerpt: "A mini tummy tuck treats the lower belly only. A full one treats the whole abdomen and may move the belly button. A comparison list.",
    minutes: 4,
    thumb: 2,
    body: lines(`
[[reviewer]]
A mini tummy tuck treats loose skin and a small bulge below the belly button through a shorter cut. A full tummy tuck treats the whole abdomen, tightens muscle above and below, and usually repositions the belly button. A surgeon decides after examining where your loose skin lies. See the [[link: /tummy-tuck | tummy tuck guide]].
## Comparison
- Area treated: mini, below the belly button. Full, the whole abdomen.
- Scar: mini, a shorter scar low on the belly. Full, a longer scar plus one around the belly button.
- Belly button: mini, usually left as it is. Full, moved or re-formed.
- Muscle repair: mini, limited to the lower part. Full, the full length if needed.
- Loose skin: mini, only a small amount below the navel. Full, a larger amount above and below.
- Time in theatre: mini, shorter. Full, longer.
- Recovery: mini, generally quicker. Full, longer.
## Quick self-check
Look at your belly in the mirror, with a surgeon's help ideally:
- Is the loose skin only below the navel?
- Is the muscle gap short, and only low down?
- Is there little excess skin above the navel?
If most answers are yes, a mini may be considered. If the skin hangs from above the navel, or the muscle gap runs the full length, a full tummy tuck is likelier.
## When mini is often not enough
- Large loose skin after major weight loss.
- A muscle gap along the entire length.
- A big overhang. See [[link: /learn/body-contouring-after-weight-loss | body contouring after weight loss]].
- Hernia above the navel. See [[link: /learn/tummy-tuck-and-hernia-repair | tummy tuck and hernia repair]].
## Other names you may see
Extended tummy tuck includes flanks. Circumferential or lower body lift continues around the back. Fleur-de-lis adds a vertical cut. Ask the surgeon to draw what they mean on the abdomen, since names are not used the same way everywhere.
## Risk in a smaller operation
A smaller operation usually has a smaller wound, but anaesthesia, clots and infection still apply. The word mini describes how much is done. Ask your surgeon what your own recovery will look like.
## Recovery and leave
A mini tummy tuck often needs about one to two weeks off for desk work, and a full one two to three weeks. These are only planning figures. See the [[link: /learn/tummy-tuck-recovery-week-by-week | tummy tuck recovery]].
## Prices
Quotes differ, and the difference lies in the surgeon's fee, anaesthesia time, stay and garments. A mini is often shorter, so might cost less, but ask line by line. See the [[link: /cost/tummy-tuck | tummy tuck cost page]].
## Questions
- Which version do you advise, and why not the other?
- Where will the scars lie, and how long are they?
- Will the belly button change?
- Would I need liposuction too?
## Bring these to the consultation
- Photos of your abdomen from the front and the side, taken by you, for the surgeon only.
- Your delivery or weight-loss history.
- Any scan report of the abdomen.
- A note of where the skin bothers you, such as at the waistband or under the navel.
## Scars and clothing
A mini scar usually sits where a C-section scar or underwear line would lie. A full scar runs wider, and the surgeon chooses its height so that it can sit below most trousers and swimwear. Ask where the line will lie relative to your usual clothes. A sari tied low or jeans worn low change the answer for some people.
## Do not choose by price alone
A mini operation can look like the cheaper path, but if your anatomy needs a full one, a mini may leave you unhappy and facing a second operation.
## Weight and plans
Both versions suit people when your weight is steady and you do not plan another pregnancy soon. If you expect to lose a good deal of weight, a surgeon may ask you to wait, because the amount of loose skin will change. Tell the surgeon about any weight plan, including medicines, diet or exercise programmes, so the choice of operation fits your real situation.
[[faq: Is a mini tummy tuck suitable after pregnancy? | It may be if the loose skin is only below the navel. A surgeon examines you and decides.]]
[[faq: Does a mini tummy tuck move the belly button? | Usually not. A full one often does.]]
[[faq: Is recovery shorter with a mini? | Often, but it varies. Ask your surgeon for your own plan.]]
Send us a message on WhatsApp if you want to talk through your questions.
[[sources: NHS patient information on abdominoplasty; American Society of Plastic Surgeons patient information on tummy tuck.]]
`),
  },
  {
    ...base,
    slug: "tummy-tuck-and-hernia-repair",
    treatmentSlug: "tummy-tuck",
    title: "Tummy tuck and hernia repair: doing both together",
    excerpt: "Belly button and scar hernias are common near the area a tummy tuck treats. How surgeons plan one operation for both, and what to ask.",
    minutes: 4,
    thumb: 3,
    body: lines(`
[[reviewer]]
A hernia near the belly button or in an old surgical scar can sometimes be repaired in the same operation as a tummy tuck. The surgeon must examine the hernia first, because it changes the plan, the team and the quote. See the [[link: /tummy-tuck | tummy tuck guide]].
## What a hernia is
A hernia is a hole or weak spot in the abdominal wall that lets tissue push through. It shows as a bulge, often on coughing or standing, and may ache. It differs from a muscle gap. See [[link: /learn/diastasis-recti-surgery | diastasis recti surgery]].
## Common types near the abdomen
- Umbilical hernia: at the belly button.
- Incisional hernia: through an old surgical scar, such as a C-section or other abdominal scar.
- Epigastric hernia: in the midline above the navel.
## Why it matters for a tummy tuck
A tummy tuck lifts the skin from the muscle wall and tightens the wall. A hernia in that area has to be dealt with, since tightening over an unrepaired hernia leaves it in place. Surgeons find out by examination and sometimes by ultrasound or a scan.
## Who does what
Some plastic surgeons repair small hernias themselves. A larger or complicated hernia may involve a general surgeon, working together or in two stages. Ask who will be in theatre and who is responsible for each part.
## One operation or two
- One operation: shorter total recovery, one anaesthetic. Suitable for a small, simple hernia.
- Two operations: the hernia first, then the tummy tuck months later. Used when the hernia is large, recurrent or complicated.
A surgeon picks the order that carries the least risk for you. Ask them to explain the reasons.
## Mesh
Some hernia repairs use a mesh, a sheet that strengthens the repair. Ask whether mesh is planned, what kind and why. Ask about the need for follow-up.
## Fitness and lifestyle
Smoking, weight, diabetes and constipation or heavy coughing affect healing of a hernia repair. Surgeons ask you to stop tobacco and control these before surgery.
## Paperwork and quote
A hernia repair is a medical need, while a tummy tuck is usually cosmetic. A combined operation may have a quote split between the two parts. Whether an insurer pays for any part depends on the policy wording and the insurer's decision. Check your policy and ask in writing, and ask the hospital how a bill will be divided. Read [[link: /learn/what-a-surgery-quote-includes | what a quote includes]] and see the [[link: /cost/tummy-tuck | tummy tuck cost page]].
## Recovery
Expect a recovery at least as long as a tummy tuck, and lifting limits may run longer. Read [[link: /learn/tummy-tuck-recovery-week-by-week | the week-by-week recovery]].
## Questions
- Do I have a hernia, and where?
- Will you repair it, or will another surgeon?
- One operation or two, and why?
- Is mesh used?
- What lifting limits follow, and for how long?
## Signs that a bulge needs a doctor
- It gets bigger, harder or more painful.
- It cannot be pushed back when you lie down.
- It is red, tender or comes with vomiting. This is an emergency, and you should go to a hospital straight away.
Do not wait for a planned tummy tuck if any of these appear.
## Planning with a general surgeon
If two surgeons are involved, ask them to speak before the date. Ask who writes the final consent, and who looks after you if the hernia repair has a problem. Ask the hospital whether the surgeons are on its panel, and which of the two bills you receive.
## Heavy work at home
People who lift sacks, gas cylinders, school bags or toddlers every day put strain on a repair. Think about how you will manage these tasks for the first weeks, and whether your job needs a change of duty.
## Keeping the records
After any hernia repair, keep the operation note, the mesh details if a mesh was used, and the discharge summary. If you see a different doctor in future, those papers save time and avoid repeat tests. Ask the hospital for copies before you leave.
[[faq: Can a hernia be repaired during a tummy tuck? | Often a small one can. A surgeon decides after examination and sometimes a scan.]]
[[faq: Does a hernia change the quote? | Yes, it can, because it adds work and sometimes another surgeon.]]
[[faq: What if I find a bulge after a C-section? | Show it to a doctor. It may be a hernia and needs examination.]]
Write to us on WhatsApp if you would like to prepare your questions first.
[[sources: NHS patient information on hernia repair and abdominoplasty; American Society of Plastic Surgeons patient information on tummy tuck.]]
`),
  },
];
