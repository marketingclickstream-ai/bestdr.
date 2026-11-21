import type { CityTreatmentPage, CostLine, FaqRow, NationalCostPage, TreatmentContent, TreatmentDisplay } from "../types";
import { NMC_SOURCE, cityBase, faqRow, line, surgicalIncludes, type PlasticTopic } from "./shared";

// Tummy tuck (abdominoplasty): hub, Kanpur and Lucknow city pages, cost lines, FAQs and the national cost page.
// Rules applied: no outcome promise, no counts, no named facility or doctor, no figure for price.
// TODO-VERIFY: every day and week range, the garment period, the stay in nights and the waiting time after delivery are general
// descriptions for the plastic surgeon reviewer to confirm or replace. Marked {pending} where they are shown.

const T = "tummy-tuck";

export const tummyTuckDisplay: TreatmentDisplay = {
  noPlates: true,
  operationHeading: "What a tummy tuck changes, and what it leaves alone",
  recoveryHeading: "Recovery calendar for a tummy tuck, week by week",
  recoveryTocLabel: "Recovery",
  timelineCaption: "What most people notice and do, by time since the operation.",
  risksHeading: "Risks and complications",
  riskGuideHref: "/tummy-tuck#risks",
  priceLabel: "Full tummy tuck, usual total bill",
  priceLinkText: "Other types and add-ons",
  costMode: "options",
  costHeading: "What a tummy tuck costs, by type",
  costCaption: "Each row is a separate case. Rows are not added together. Sample data / To be confirmed.",
  labels: {
    techniquesHeading: "Mini, full and extended tummy tuck",
    techniquesCaption: "Plain differences between the types. A surgeon decides which fits your skin, muscle and scars.",
    tocTechniques: "Types of tummy tuck",
  },
  tocLabels: { surgery: "What it changes", choices: "Types and situations" },
};

export const tummyTuckContent: TreatmentContent = {
  dek: "A tummy tuck (abdominoplasty) removes loose skin and some fat from the abdomen and tightens stomach muscles that have stretched apart. It does not treat weight. The [cost](/cost/tummy-tuck) depends on the type, the facility and the nights you stay. A plastic surgeon decides who it suits, and desk work often resumes after two to three weeks {pending}.",

  shortAnswers: [
    { q: "What does it change?", a: "Loose lower abdominal skin, some fat, and stretched muscle. It leaves weight and deep belly fat alone.", href: "#surgery", linkText: "What it changes" },
    { q: "Who should wait?", a: "Anyone planning another pregnancy, still losing weight, or still breastfeeding. Smokers are asked to stop first.", href: "#after-pregnancy", linkText: "After pregnancy or a C-section" },
    { q: "How long is recovery?", a: "A bent-over first week, a garment for weeks, and a gradual return to lifting over about six weeks {pending}.", href: "#recovery", linkText: "The weekly calendar" },
    { q: "What sets the price?", a: "The type of operation, the facility, the nights in hospital, anaesthesia, and add-ons such as liposuction or hernia repair.", href: "#cost", linkText: "The cost lines" },
  ],

  operation: {
    lead: "A tummy tuck is an operation under anaesthesia. The surgeon cuts low across the abdomen, lifts the skin, tightens the stretched stomach muscles with stitches, removes the extra skin and closes the wound. The belly button is usually brought out through a new opening. A surgeon decides whether it suits you.",
    body: "The scar usually sits low, from hip to hip, and often runs around the navel. It stays for life and fades over many months, and how far it fades varies. A tummy tuck reshapes the abdomen after weight change or pregnancy. It does not replace diet and exercise, and it does not remove fat inside the belly. Read how it differs from [liposuction](/liposuction) and from a [body lift](/cost/body-lift).",
    caption: "Loose skin and stretched muscle between the ribs and the pubic area, and the low scar line a surgeon plans.",
    ask: "Which type do you advise for me, where will the scar sit, and will you tighten the muscle?",
    how: [
      "Consultation: the surgeon examines the abdomen standing and lying, checks for muscle separation and hernia, and reviews your weight history, pregnancies and past scars.",
      "Fitness check: blood tests and an anaesthesia assessment. Smoking, diabetes, thyroid and blood thinners are reviewed.",
      "Marking: while you stand, the surgeon draws the planned scar and the area of skin to be removed.",
      "Anaesthesia: usually general anaesthesia. The anaesthetist explains the plan and the risks.",
      "Operation: the skin is lifted, the muscle is tightened if planned, extra skin and fat are removed, and drains are placed if the surgeon uses them.",
      "Closure and garment: the wound is closed in layers and a compression garment is fitted.",
      "Stay: a hospital stay of one or more nights is common, so that pain, drains and mobility can be managed {pending}.",
    ],
    whoItSuits: [
      { term: "Loose skin and stretched muscle", text: "Adults with skin that hangs or muscle that bulges after weight loss or pregnancy, whom diet and exercise did not change." },
      { term: "Stable weight", text: "People whose weight has held steady for a period the surgeon finds sensible. A large change afterwards can alter the result." },
      { term: "Family complete", text: "People who do not plan another pregnancy soon, because a pregnancy can stretch the repaired muscle and skin again." },
      { term: "Health in order", text: "People who do not smoke, whose diabetes and blood pressure are controlled, and who can rest for weeks with help at home." },
    ],
  },

  techniques: {
    lead: "Surgeons use these names loosely, and some clinics use them as price tiers. Ask what exactly is cut, tightened and removed in the quote you are given.",
    rows: [
      { name: "Mini tummy tuck", how: "A shorter cut low on the abdomen. Skin and some muscle below the navel are tightened, and the navel is usually left in place", often: "A small pouch below the navel, with little loose skin above it", ask: "Will my upper abdomen look different afterwards, or only the area below the navel?" },
      { name: "Full tummy tuck", how: "A hip to hip cut and a new opening for the navel. Skin is removed above and below, and muscle is tightened from the ribs to the pubic area", often: "Loose skin across the whole abdomen, often after pregnancy or large weight loss", ask: "Where will the scar sit, and will the navel scar be visible?" },
      { name: "Extended tummy tuck", how: "A full tummy tuck with the cut carried further round the hips to take skin from the flanks", often: "Loose skin that reaches the sides, in people who did not have a full lower body lift", ask: "How far round does the scar go, and what are the signs I need a lower body lift instead?" },
      { name: "Tummy tuck with liposuction", how: "Fat is removed from nearby areas such as the flanks in the same operation", often: "People with a fatty layer above the muscle as well as loose skin", ask: "What is the extra cost, and does it change my stay or my garment period?" },
    ],
    note: "Circumferential skin removal that goes right round the body is a different operation. See the [body lift cost page](/cost/body-lift).",
  },

  extraSections: [
    {
      id: "after-pregnancy",
      heading: "After pregnancy or a C-section: when to think about it",
      tocLabel: "After pregnancy or a C-section",
      lead: "Mothers ask this more than any other question about a tummy tuck. A surgeon decides, and the table lists what surgeons usually weigh. Timings are general and for the reviewer to confirm. {pending}",
      table: {
        caption: "Situation and what a surgeon usually considers. A surgeon decides for you.",
        head: ["Your situation", "What a surgeon usually considers", "Ask"],
        rows: [
          ["Delivered a few months ago", "Many surgeons advise waiting while the body settles and weight stabilises", "How long do you advise waiting in my case?"],
          ["Still breastfeeding", "Breast size and body weight keep changing, and anaesthesia and medicines may matter for the baby", "Do you wait until I stop breastfeeding, and why?"],
          ["Had a C-section scar", "The old scar can often be removed or placed within the new one. Scar tissue can affect healing", "Will you use my C-section scar, and what changes if I have had more than one?"],
          ["Planning another baby", "A later pregnancy can stretch the repaired muscle and skin again", "Is it better for me to wait until the family is complete?"],
          ["Muscle gap and a bulge on lifting the head", "A surgeon checks whether muscle separation (diastasis) is present, and whether a hernia is also there", "Will the muscle repair be part of the operation, and is a hernia repair needed?"],
          ["Still above a comfortable weight", "Weight loss before surgery often helps wound healing and the final shape", "What weight or change do you want to see first?"],
        ],
      },
    },
    {
      id: "diastasis",
      heading: "Muscle separation, hernia and what the operation can repair",
      tocLabel: "Muscle separation and hernia",
      paragraphs: [
        "Diastasis recti is a widening of the gap between the two straight stomach muscles. It is common after pregnancy and after weight change, and it is checked by hand and sometimes by ultrasound. A tummy tuck usually tightens the muscle with stitches. The doctor decides whether that is enough.",
        "A hernia is a gap in the abdominal wall through which tissue pushes. A surgeon may repair a small hernia during a tummy tuck. A large or complex one may need a separate plan. Ask for the hernia assessment to be written down, because a repair can change the bill, the stay and the recovery. {pending}",
      ],
      note: { label: "Ask this", text: "Do I have a muscle gap or a hernia, will you repair it in the same operation, and how does that change the bill?" },
    },
    {
      id: "home-setup",
      heading: "Setting up an Indian home for the first two weeks",
      tocLabel: "Setting up home",
      lead: "The house makes much of the first fortnight hard. Walk through yours before the date is fixed.",
      bullets: [
        "Toilet type. A squat toilet strains a tight abdomen. Ask whether a commode seat or a raised stool can be arranged, and who will help.",
        "Stairs. A first or second floor home without a lift needs a plan for the ride home and the follow-up visits.",
        "Bed and sleeping. Many surgeons advise sleeping with the hips slightly bent in the first days. Wedges and extra pillows help, and a low floor bed is harder to rise from.",
        "Waistbands. A saree petticoat knot, a salwar drawstring or a tight belt sits on the healing scar. Ask which clothes you can wear and buy loose ones early.",
        "Kitchen and lifting. Pressure cookers, gas cylinders, buckets and a toddler are all lifts. Decide who does them for the first weeks.",
        "Heat. A compression garment in May and June is hot and can irritate skin. Ask what to wear under it and how to wash it.",
        "Monsoon and humidity. Damp dressings and sweat-rash are harder to manage. Ask what to do and when to call.",
        "Attendant. Plan for a family member to stay in hospital and at home for the first days.",
      ],
    },
    {
      id: "leave",
      heading: "Leave from work and household duties",
      tocLabel: "Leave planner",
      table: {
        caption: "General planning ranges for the reviewer to confirm. Your surgeon sets yours. {pending}",
        head: ["Your day", "Usual planning", "Ask your surgeon"],
        rows: [
          ["Desk job at home or office", "Often two to three weeks off, then a gradual return", "Can I work from home earlier, and how long can I sit at a time?"],
          ["On your feet or lifting", "Often longer, with lifting limits for about six weeks", "When can I lift, and can I be moved to lighter duty?"],
          ["Two-wheeler or long commute", "Driving and riding wait until the surgeon agrees", "When can I drive or ride, and what do I do about a bumpy road?"],
          ["Looking after a toddler", "Lifting a child is limited for weeks", "Who can carry my child for the first weeks, and when can I lift them?"],
          ["Cooking and housework", "Light tasks first, heavy tasks later", "Which tasks are fine in week two?"],
        ],
      },
    },
    {
      id: "questions",
      heading: "Questions to put to your surgeon before you pay",
      tocLabel: "Questions to ask",
      bullets: [
        "Which type of tummy tuck do you advise for me, and why not a smaller or larger one?",
        "Will you tighten the muscle, and will you check for a hernia?",
        "Where will the scar sit when I wear my usual underwear or swimwear?",
        "How many nights do I stay, and what happens if I need to stay longer?",
        "Which clots and fluid problems do you watch for, and what do you advise to lower the chance?",
        "How long is the garment worn, and are two garments in the price?",
        "What follow-up visits are in the price, and what does an extra visit cost?",
        "If I need a touch-up or a second procedure, what do I pay?",
      ],
    },
  ],

  recovery: {
    lead: "Recovery looks like this for most people, though your surgeon sets your own plan. The weeks and days below are general figures that the plastic surgeon reviewer will confirm or replace. {pending}",
    body: "Expect to walk a little bent forward in the first week, with a garment on day and night. Swelling and tightness peak in the first fortnight and ease over months. Plan help at home, and keep to the walking and lifting rules you are given.",
    highlights: [
      { pre: "about", big: "2 to 3 weeks", text: "Before many people return to desk work" },
      { pre: "about", big: "6 weeks", text: "Before lifting and strenuous exercise are usually allowed" },
      { pre: "months", big: "6 to 12", text: "Swelling settles and the scar matures" },
    ],
    timeline: [
      { when: "Day 0 to 2", notice: "Drowsiness, a tight abdomen, drains and a garment, walking bent forward", doThis: "Walk short distances with help. Take medicines as prescribed. Do not strain." },
      { when: "Day 3 to 7", notice: "Swelling, bruising, soreness, tiredness and slow bowels", doThis: "Short walks every few hours. Drink water and eat fibre. Keep the garment on. Attend the first review." },
      { when: "Week 2", notice: "Drains usually out. Tightness and swelling remain. You may stand straighter", doThis: "Light tasks at home. No lifting. Work from home only if the surgeon agrees." },
      { when: "Week 3 to 4", notice: "More energy. Numb patches and pulling around the scar", doThis: "Return to desk work if the surgeon agrees. Keep the garment. No two-wheeler yet." },
      { when: "Week 6", notice: "Most people feel close to usual, with a firm scar and some swelling", doThis: "Ask about lifting, driving and exercise. Review visit." },
      { when: "Month 3 to 4", notice: "Swelling mostly down. The scar is pink and firm", doThis: "Gradual return to exercise. Scar care as advised." },
      { when: "Month 6 to 12", notice: "Swelling settles and the scar fades slowly", doThis: "Final review. Discuss any revision only after the scar has matured." },
    ],
    grid: {
      cols: ["Wk 1", "Wk 2", "Wk 4", "Wk 6"],
      rows: [
        { label: "Desk work", cells: [{ state: "n", text: "No" }, { state: "m", text: "Ask" }, { state: "y", text: "Yes" }, { state: "y", text: "Yes" }] },
        { label: "Stairs", cells: [{ state: "m", text: "Slowly" }, { state: "y", text: "Yes" }, { state: "y", text: "Yes" }, { state: "y", text: "Yes" }] },
        { label: "Lifting a child", cells: [{ state: "n", text: "No" }, { state: "n", text: "No" }, { state: "n", text: "No" }, { state: "m", text: "Ask" }] },
        { label: "Driving or riding", cells: [{ state: "n", text: "No" }, { state: "n", text: "No" }, { state: "m", text: "Ask" }, { state: "m", text: "Ask" }] },
        { label: "Gym or strenuous work", cells: [{ state: "n", text: "No" }, { state: "n", text: "No" }, { state: "n", text: "No" }, { state: "m", text: "Ask" }] },
      ],
    },
    closing: "Do not plan around a fixed recovery. Swelling, drains and fatigue vary with the type of tummy tuck, whether muscle repair was done and your health. Plan weddings, exams and travel months ahead.",
  },

  risks: {
    lead: "Every operation carries risk. The ten below come up most often, with a plain description and a question for each. Your surgeon will go through the full list for you.",
    rows: [
      { risk: "Bleeding and bruising", means: "Blood collecting under the skin, sometimes needing a return to theatre.", ask: "What do you do if I bleed, and where would I be treated?" },
      { risk: "Fluid collection (seroma)", means: "Fluid under the skin after drains are out, sometimes needing draining.", ask: "How do you lower the chance, and how is a collection treated?" },
      { risk: "Infection", means: "Redness, heat, pus or fever at the wound.", ask: "Which signs should I report, and who do I call at night?" },
      { risk: "Wound healing problems", means: "Parts of the wound edge may open or the skin may heal slowly, more often in smokers.", ask: "What do you advise about nicotine, and how is a slow wound managed?" },
      { risk: "Blood clots", means: "A clot in the leg or lung is rare and serious. Risk is assessed before surgery.", ask: "What do you do to lower the clot risk, and when do I move around?" },
      { risk: "Numbness and altered feeling", means: "The lower abdomen can feel numb or odd for months.", ask: "How long does it usually last?" },
      { risk: "Scarring", means: "A long scar that can be raised, wide or dark in some people.", ask: "What scar care do you advise, and can I wear a swimsuit without it showing?" },
      { risk: "Asymmetry or uneven contour", means: "The two sides may differ, or the tissue may look uneven.", ask: "Which differences are normal, and what is the plan if one persists?" },
      { risk: "Changes in the belly button", means: "Its shape or position may differ from what you expected.", ask: "How do you place the navel, and how is its scar hidden?" },
      { risk: "Anaesthesia risks", means: "Nausea, breathing and heart events, higher with some illnesses.", ask: "Who gives my anaesthesia, and what did my fitness check show?" },
    ],
    alert: "Phone your surgeon at once for fever, spreading redness or heat, pus, severe pain, a fast-growing swelling on one side, chest pain, breathlessness or a painful swollen leg. If your surgeon is unreachable, go to an emergency department at once.",
    wait: [
      "You plan another pregnancy soon",
      "You are breastfeeding or recently delivered, and your surgeon advises waiting",
      "Your weight is still changing",
      "You smoke or use nicotine and have not stopped as advised",
      "Your diabetes or blood pressure is uncontrolled",
      "You have a history of blood clots and have not discussed it",
      "You have an active skin infection near the abdomen",
      "You expect the operation to treat weight or deep belly fat",
    ],
    tell: [
      "Pregnancies, deliveries and any C-sections",
      "All medicines, supplements and blood thinners",
      "Weight changes in the past two years",
      "Diabetes, thyroid, heart, lung or bleeding conditions",
      "Past hernia repair or abdominal surgery",
      "Smoking, nicotine and alcohol",
    ],
  },

  patientQuestions: [
    { q: "Which type suits me?", href: "#surgery", linkText: "Read: the types" },
    { q: "When after a baby?", href: "#after-pregnancy", linkText: "Read: after pregnancy" },
    { q: "Do I have a muscle gap?", href: "#diastasis", linkText: "Read: muscle separation" },
    { q: "How do I set up home?", href: "#home-setup", linkText: "Read: home setup" },
    { q: "How many weeks off work?", href: "#leave", linkText: "Read: the leave planner" },
    { q: "What will it cost?", href: "#cost", linkText: "Read: the cost lines" },
  ],

  quoteProcess: [
    { title: "A coordinator takes your first call", text: "Phone or WhatsApp. Tell them your town and your questions. Nobody should push you to book on this call." },
    { title: "A surgeon examines your abdomen", text: "In person, standing and lying. Photos give a first view, but the type of operation is decided at the examination." },
    { title: "The plan arrives in writing", text: "It names the type, says whether muscle repair is included and lists the surgeon, the hospital, the nights and the price." },
    { title: "You take your time", text: "Put two plans side by side for the same type and the same stay. No package is paid before the examination." },
    { title: "Care after the operation", text: "A call after discharge, visits for drains and dressings, and reviews that continue over months." },
  ],

  quoteChecks: [
    "name the type of tummy tuck and say whether muscle repair is included?",
    "state the nights in hospital and the room type?",
    "list anaesthesia, theatre and surgeon fees separately?",
    "say whether the garment, drains and dressings are included?",
    "show liposuction or hernia repair as their own lines if planned?",
    "explain what follow-up is covered and what happens if a second operation is needed?",
  ],

  extras: [
    "Liposuction of other areas, if planned",
    "Hernia repair, if needed",
    "A second garment",
    "Extra nights in hospital",
    "Blood tests and the anaesthesia fitness check",
    "Medicines after discharge",
    "GST, if shown separately",
    "An attendant's stay and your time off work",
  ],

  insurance:
    "Insurance. A tummy tuck for cosmetic reasons is usually not covered by health policies. A repair of a medical problem such as a hernia may be treated differently, so read your policy wording and put the question to your insurer in writing before you book. Cashless approval is never promised here.",
  payment:
    "Payment. Hospitals and lenders set their own payment methods and instalments, and none are listed here. Keep your money back until you have been examined. {tbc}",

  // TODO-VERIFY: the reviewer opens each source and confirms the URL and the facts used.
  sources: [NMC_SOURCE],

  footnotes: [
    "Medical review is pending. A reviewer name, qualification and date will appear once a registered plastic surgeon signs off.",
    "The day and week ranges, garment period, hospital stay and waiting time after delivery are general and await the reviewer.",
    "No satisfaction or complication figure appears, because none has been verified.",
    "Insurance and payment wording is general and still to be confirmed.",
  ],
};

// ------------------------------------------------------------------ city pages
// TODO-VERIFY (both cities): road times, station and airport names, expressway status, stays and follow-up arrangements are general
// and must be checked against the partner facility and a dated public source before any page leaves noindex.

const ttKanpur: CityTreatmentPage = {
  ...cityBase(T, "kanpur"),
  seoTitle: "Tummy Tuck in Kanpur: Cost, Recovery, Risks",
  h1: "Tummy tuck in Kanpur",
  metaDescription: "Tummy tuck in Kanpur: sample cost lines, how type and stay change the bill, recovery with a garment in the heat, and travel from Unnao and nearby towns.",
  intro: "The sample total for a tummy tuck in Kanpur depends on the type, the nights in hospital and whether muscle repair is included. No partner facility is confirmed in Kanpur yet, so no price is shown. People here often plan the operation around the hot months, a long stair climb at home and help from a joint family.",
  includes: { ...surgicalIncludes },
  facilities: {
    intro: "No partner facility is confirmed in Kanpur yet. A tummy tuck needs a hospital with an operating theatre and overnight beds, and not a day-care room. This page will name the facility type once one exists.",
    partners: [{ type: "Hospital with theatre and overnight beds in Kanpur (to be confirmed)", count: null }],
    accreditation: null,
    checks: [
      { check: "Beds for two or more nights", why: "A tummy tuck usually needs an overnight stay", ask: "How many nights are planned for me, and what does an extra night cost in my room type?" },
      { check: "Clot and wound plan", why: "Walking early and wound care lower common problems", ask: "Who sees me on the ward at night, and what is the plan if my wound leaks?" },
      { check: "Surgeon continuity", why: "The surgeon who plans the work should be in the theatre", ask: "Will the surgeon I met do the whole operation, and will they see my dressings?" },
    ],
  },
  travel: {
    intro: "Most people who come to a Kanpur hospital live in the city or within an hour or two of it. The questions are how a person with a tight abdomen gets up the stairs at home, and whether follow-up visits for drains fall on a day you can travel.",
    airport: "Kanpur Airport at Chakeri has limited services (to be verified). Many travellers use Lucknow airport",
    station: "Kanpur Central",
    stayDays: "To be confirmed by the partner. Two or more nights in hospital are common for a tummy tuck {pending}",
    metro: "Kanpur has a metro line that covers part of the city (to be verified). With a garment and drains, a cab or a family car is easier than any public transport.",
    roadTimes: [
      { from: "Unnao", time: "40 to 80 min", tip: "Plan the drain review visits for mid-morning to avoid the bridge queues" },
      { from: "Kanpur Dehat", time: "60 to 120 min", tip: "Ask whether a dressing check can be done nearer home" },
      { from: "Fatehpur", time: "90 to 150 min", tip: "A night in Kanpur after discharge may be easier than a long ride" },
      { from: "Lucknow", time: "90 to 150 min", tip: "Compare Lucknow hospitals before you commit" },
    ],
    privacyNote: "You do not need to explain a few weeks of leave to neighbours. Ask the hospital to keep the procedure name out of calls and messages.",
    mapCaption: "Travel into Kanpur from Unnao and nearby towns, no building shown.",
  },
  localContext: [
    { text: "NEEDS REAL DATA: which Kanpur hospital, if any, will do tummy tucks, and the nights it plans", source: "", asOf: "" },
    { text: "NEEDS REAL DATA: Kanpur summer temperatures and humidity by month (India Meteorological Department records)", source: "", asOf: "" },
    { text: "NEEDS REAL DATA: Kanpur to Lucknow road time and expressway status, with a date", source: "", asOf: "" },
  ],
  usefulness: "For women and men in Kanpur and nearby towns who want to know how the operation fits a joint family, a stair climb at home, a May or June date and a long drive for reviews, with notes on who helps, where drains are checked and when to travel.",
  localCopy: [
    "In Kanpur the first plan is who stays with you, because family help decides how easy the first fortnight is.",
    "A compression garment in a Kanpur May is a real problem, so ask about skin care and timing.",
    "Reviews for drains and dressings need a Kanpur doctor you can reach on the day.",
  ],
  localNotes: [
    { heading: "Who stays with you", text: "Many Kanpur households have several adults at home in the day. Decide who stays in hospital at night, who helps you stand and use the toilet, and who is told what the operation is. Hospitals often limit visitors to one attendant on the ward." },
    { heading: "The garment in the hot months", text: "Kanpur reaches high temperatures from April to June. A compression garment traps heat and sweat, and rash is common. Ask what to wear under it, how many to buy and whether an air cooler or AC room is available at home. {pending}" },
    { heading: "Unnao and Kanpur Dehat", text: "If you live outside the city, ask for the drain review and the dressing visits to be set on days you can travel. A written wound plan helps a local doctor check you if you cannot return." },
    { heading: "A Lucknow second opinion", text: "Lucknow is the nearest other city we cover. People compare surgeons in both. Ask for the same written plan from each, with the type of tummy tuck and the nights in hospital, before you compare totals." },
  ],
  sections: [
    {
      heading: "Planning the weeks around a Kanpur year",
      paragraphs: [
        "Kanpur has hot dry summers, a humid monsoon and cold, foggy winters. A tummy tuck asks you to wear a close garment day and night for weeks. In May the garment is hard to bear, in the monsoon damp skin under it can break out, and in a December fog a trip for a drain check is slow and tiring. Winter and the weeks around it often feel kinder, though a surgeon decides the date on medical grounds.",
        "If you can choose, ask the surgeon what the season changes in your plan. Keep the weeks before a wedding or a board exam free, because swelling and tiredness last longer than most people expect.",
      ],
    },
    {
      heading: "Stairs, floors and the toilet at home",
      paragraphs: [
        "Many Kanpur homes have a bedroom on a first or second floor and a squat toilet. Climbing stairs after a tummy tuck is possible with care and help. Getting up from a squat is harder with a tight abdomen. Ask whether a commode seat or a raised stool can be arranged for the first fortnight, and whether the ground floor can serve as your room.",
        "Think about the way in as well. A person leaving hospital after a few nights may be carried or helped up a narrow stairway. Ask the hospital about a wheelchair at your door.",
      ],
    },
    {
      heading: "Dust, industry and wound care",
      paragraphs: [
        "Kanpur is an industrial city with dusty roads through the year. A healing wound needs clean dressings and a clean room. We make no claim about what local air does to healing. Ask the surgeon how to keep dressings dry, how often a nurse or relative changes them and what to do if the area looks wet or red.",
      ],
    },
    {
      heading: "Referral and language in Kanpur clinics",
      paragraphs: [
        "Many people reach a plastic surgeon through a family doctor or a gynaecologist who delivered their babies. Hindi and Hinglish are common in consultations, and some families speak the local Kanpuria Hindi at home. Ask for the plan, the nights in hospital and the garment instructions in writing in the language you read most easily. Bring your delivery and C-section notes to the first visit.",
        "If anyone promises a result before an examination, ask for the plan in writing and take a second opinion.",
      ],
    },
    {
      heading: "After discharge: staying near or going home",
      paragraphs: [
        "Some people go home to a town the same day they leave hospital. A long road with bumps and a tight garment is tiring, and a leaking drain site on a bus is worse. If your home is more than an hour from the hospital, ask whether a night nearby can be arranged and what it costs. {tbc}",
        "Drains are usually out in the first one to two weeks, and the dates vary. Ask the hospital for a named person to call between visits.",
      ],
    },
  ],
};

const ttLucknow: CityTreatmentPage = {
  ...cityBase(T, "lucknow"),
  seoTitle: "Tummy Tuck in Lucknow: Cost, Recovery, Risks",
  h1: "Tummy tuck in Lucknow",
  metaDescription: "Tummy tuck in Lucknow: sample cost lines, how type and stay change the bill, recovery, and travel from Barabanki, Unnao, Sitapur and Kanpur.",
  intro: "The sample total for a tummy tuck in Lucknow depends on the type, the nights in hospital and add-ons such as liposuction or hernia repair. No partner facility is confirmed in Lucknow yet, so no price is shown. Lucknow draws patients from several towns, so planning where you stay between discharge and the first review matters.",
  includes: { ...surgicalIncludes },
  facilities: {
    intro: "No partner facility is confirmed in Lucknow yet. A tummy tuck needs a hospital with a theatre and overnight beds. Lucknow has many hospitals of different sizes, so check what each can do.",
    partners: [{ type: "Hospital with theatre and overnight beds in Lucknow (to be confirmed)", count: null }],
    accreditation: null,
    checks: [
      { check: "Overnight bed and visitor rules", why: "Families from other towns arrive in groups", ask: "How many attendants may stay, and what are the visiting hours on my ward?" },
      { check: "Written type and scope", why: "Quotes use mini, full and extended loosely", ask: "Which type, which muscle work and which scar is in this quote?" },
      { check: "Review plan for out-of-town patients", why: "Drain and dressing visits come soon after discharge", ask: "Can I see a doctor on a fixed day, and who handles a call at night?" },
    ],
  },
  travel: {
    intro: "Lucknow is a regional centre. People come from Barabanki, Unnao, Sitapur, Raebareli and Hardoi, and some from Kanpur. The questions are where to sleep between discharge and the first review, and how to get a post-operative body across a city with traffic.",
    airport: "Chaudhary Charan Singh International Airport, Amausi (to be verified)",
    station: "Lucknow Charbagh, and Lucknow Junction (Gomti Nagar is also used, to be verified)",
    stayDays: "To be confirmed by the partner. Two or more nights in hospital are common for a tummy tuck {pending}",
    metro: "Lucknow has a metro line on a north to south route (to be verified). It is not a good fit for a person with a tight abdomen and drains, so plan a cab or a family car.",
    roadTimes: [
      { from: "Barabanki", time: "40 to 80 min", tip: "A same-day trip to the first review is workable for most" },
      { from: "Unnao", time: "60 to 100 min", tip: "Ask about a night near the facility if the drain visit falls on a busy day" },
      { from: "Sitapur", time: "90 to 150 min", tip: "Plan a short stay in Lucknow for the first review week" },
      { from: "Kanpur", time: "90 to 150 min", tip: "Compare Kanpur options and travel for reviews before you commit" },
    ],
    privacyNote: "Staying in a guest house or with relatives in the city means you do not have to explain the surgery at home. Ask the hospital to keep the procedure name out of messages.",
    mapCaption: "Travel into Lucknow from nearby towns and districts, no building shown.",
  },
  localContext: [
    { text: "NEEDS REAL DATA: which Lucknow hospital, if any, will do tummy tucks, and the nights it plans", source: "", asOf: "" },
    { text: "NEEDS REAL DATA: Lucknow air quality in winter (public CPCB station data, month and station)", source: "", asOf: "" },
    { text: "NEEDS REAL DATA: guest houses or serviced stays near the partner hospital, rates and distance", source: "", asOf: "" },
  ],
  usefulness: "For patients from Lucknow and the districts around it who want to know where to stay after discharge, how many people can come with them, what a review week looks like and how monsoon and winter dates change the plan.",
  localCopy: [
    "A Lucknow plan starts with the question of where an out-of-town patient sleeps for the first review.",
    "Drain checks fall in the second week, which is when roads from the districts feel long.",
    "Lucknow clinics often see people referred from district doctors, so a written summary matters.",
  ],
  localNotes: [
    { heading: "Barabanki, Unnao and Sitapur", text: "These towns send many patients to Lucknow. A short stay near the hospital for the first review week avoids a long return for a drain check. Ask the hospital what a stay costs and what it includes. {tbc}" },
    { heading: "The district doctor's role", text: "A district doctor who knows you can help with wound checks, medicines and clots if you cannot travel. Give them a written plan from the surgeon: the type, the drain dates and what to look for." },
    { heading: "Winter smog and fog", text: "Lucknow has winter fog and poor air on some days. A tight abdomen can make coughing hurt. We make no claim that air changes healing. Ask the surgeon about winter dates and cough control. {pending}" },
    { heading: "Language in the clinic", text: "Hindi and Urdu-influenced Hindi are common in Lucknow, and English is used in hospital paperwork. Ask for the written plan in the language you read most easily, and check that the quoted type matches the one the surgeon described." },
  ],
  sections: [
    {
      heading: "Coming from a district town",
      paragraphs: [
        "A tummy tuck is not a day trip. You are in hospital for a few nights, and the first review with the drains usually comes within a fortnight. If you live in Sitapur, Hardoi or Raebareli, the road back is long for a person with a tight abdomen and a garment. Most people plan one of three things: a short stay near the hospital, a family home in Lucknow, or a return with a local doctor to check the wound.",
        "Whichever you choose, write down the days of the reviews before the operation date is fixed.",
      ],
    },
    {
      heading: "Monsoon, heat and the garment",
      paragraphs: [
        "Lucknow summers are hot and the monsoon is humid. A compression garment is worn day and night for weeks, so heat rash and damp are common questions. Ask what to wear under it, how to dry it between washes and whether a second garment is in the price.",
        "If your operation falls in the monsoon, ask how to keep the dressing dry on a wet day, and what to do if the road is flooded on a review day.",
      ],
    },
    {
      heading: "Visitors and privacy in a large family",
      paragraphs: [
        "Families in the Lucknow region often come in groups to a hospital. Wards limit attendants, and you may not want extended family at the bedside. Decide in advance who is told, who stays, and who handles phone calls. How much you share is your choice. The surgeon still needs your full history.",
      ],
    },
    {
      heading: "Weddings, festivals and the calendar",
      paragraphs: [
        "Wedding seasons and festivals fill the Lucknow calendar. A tummy tuck takes weeks to settle, and swelling can last for months. A date just before a wedding is risky because swelling and the scar are at their most visible. Many surgeons suggest a gap of several months before a big event. {pending}",
        "If a festival is near your operation date, ask which foods and rituals you can follow in the first fortnight, including fasting, which can matter after anaesthesia.",
      ],
    },
    {
      heading: "Comparing Lucknow with Kanpur",
      paragraphs: [
        "Lucknow and Kanpur are about an hour and a half or two hours apart by road, and many people compare surgeons in both. Compare the same type of tummy tuck, the same nights in hospital and the same follow-up. A lower total in one city can reflect a smaller scope, a shorter stay or a garment sold separately. Ask each hospital for the line items, and compare them one by one.",
      ],
    },
  ],
};

// ------------------------------------------------------------------ cost lines and cost page
const ttCosts: CostLine[] = [
  line(T, 1, "Consultation and examination", "The surgeon and the hospital"),
  line(T, 2, "Mini tummy tuck, usual total", "Scope, anaesthesia and stay"),
  line(T, 3, "Full tummy tuck, usual total", "Muscle repair, nights and room type"),
  line(T, 4, "Extended tummy tuck, usual total", "Scar length and operating time"),
  line(T, 5, "Add-on: liposuction of other areas", "Number of areas"),
  line(T, 6, "Add-on: hernia repair", "Size of the hernia and the method"),
  line(T, 7, "Compression garment and dressings", "Number of garments and what is included"),
  line(T, 8, "Follow-up visits and medicines", "Ask in writing before you book"),
];

export const tummyTuckCostPage: NationalCostPage = {
  seoTitle: "Tummy Tuck Cost in India: What Sets the Total Bill",
  metaDescription: "How tummy tuck cost is built: type, muscle repair, nights in hospital, add-ons and garments. Sample ranges are labelled and dated once real quotes exist.",
  h1: "Tummy tuck cost in India",
  answer: "The total depends on the type of tummy tuck, whether the muscle is repaired, the nights you stay, and add-ons such as liposuction or hernia repair. No price is shown yet, and a dated range replaces this note only when real quotes exist.",
  unit: "total",
  rangeHeading: "Sample totals by type of tummy tuck",
  rangeCaption: "Read each line as its own case. They do not sum to one price.",
  planner: {
    heading: "Build the quote you are given line by line",
    formula: "Total = surgeon + anaesthesia + theatre + nights x room rate + garment + add-ons + follow-up",
    steps: [
      "Ask which type of tummy tuck the quote covers and whether muscle repair is included.",
      "Ask how many nights it assumes, and the price of one more night in your room type.",
      "Check that liposuction, hernia repair and a second garment are separate lines.",
      "Ask what follow-up visits, drains and dressings are in the price.",
      "Add the lines the quote leaves out: GST, discharge medicines and pre-operative tests.",
    ],
  },
  extraSections: [
    {
      id: "read-the-quote",
      heading: "Reading two tummy tuck quotes side by side",
      tocLabel: "Reading two quotes",
      lead: "Two quotes can both say tummy tuck and describe different operations. The table lists the lines that most often differ.",
      table: {
        caption: "What to look for in each line of a quote.",
        head: ["Line", "What may differ between quotes", "What to ask"],
        rows: [
          ["Type", "Mini, full or extended, sold under one name", "Which cut, which skin and which muscle work is this?"],
          ["Muscle repair", "Included in one quote, a separate line in another, missing from a third", "Is the stitching of stretched muscle in this price?"],
          ["Nights", "One night in one quote and three in another", "What is the price of an extra night, and in which room?"],
          ["Garment and drains", "Supplied in one, bought separately in another", "How many garments, and who removes the drains?"],
          ["Add-ons", "Liposuction of the flanks folded into the total", "Is liposuction a separate line with its own price?"],
          ["Revision allowance", "A free touch-up in one quote, none in another", "What do I pay if a scar or a dog-ear needs correcting?"],
        ],
      },
    },
  ],
  factors: [
    { factor: "Type of operation", why: "A mini tummy tuck is a smaller operation than a full or extended one, and the time in theatre changes the fee." },
    { factor: "Muscle repair", why: "Tightening the stretched muscle adds operating time and skill, and some quotes list it separately." },
    { factor: "Add-ons", why: "Liposuction or hernia repair in the same operation adds time and materials." },
    { factor: "Nights in hospital", why: "Room type and number of nights set a large part of the facility bill." },
    { factor: "Anaesthesia", why: "A longer operation and a more complex health history change the anaesthesia fee." },
    { factor: "Surgeon and team", why: "Training, experience and the team that assists affect the fee, and we do not rank surgeons." },
    { factor: "Garments and drains", why: "A quote may or may not include garments, drain care and dressings." },
    { factor: "City and facility", why: "Rents, wages and the kind of hospital differ between cities, and so do fees." },
  ],
  notIncluded: [
    "Liposuction or hernia repair, if added",
    "A second compression garment",
    "Extra nights in hospital",
    "Blood tests and the anaesthesia fitness check",
    "Medicines after discharge",
    "Review visits beyond the first few",
    "GST, if shown separately",
    "An attendant's stay, your travel and your time off work",
  ],
  compareQuotes: [
    "Ask each hospital to state the type of operation and what is cut, tightened and removed.",
    "Compare totals only for the same type and the same number of nights.",
    "Ask which surgeon will operate, and where you can check their registration.",
    "Ask what you pay if a return to theatre is needed.",
    "Wait for a physical examination before any package payment.",
  ],
  insurance: "A tummy tuck for cosmetic reasons is usually not covered by health policies. A hernia repair or another medical problem may be treated differently, so read your policy wording and put the question to your insurer in writing.",
  payment: "Hospitals and lenders set their own instalment terms, and none are listed on this page. GST wording is to be confirmed. {tbc}",
  method: "This page holds no price yet. Each future line will name the source type, the number of data points behind it and the date of collection. Three dated points from separate sources are the minimum before the pending label is removed. We use no figures from other websites, and one city's range never stands in for another's.",
  faqs: [
    { q: "What is included in a tummy tuck price?", a: "Usually the surgeon, anaesthesia, theatre, the hospital stay and a basic set of dressings. Garments, add-ons, medicines and extra visits can be separate. Ask for a written list." },
    { q: "Does a mini tummy tuck cost less than a full one?", a: "Usually it is a smaller operation, so the fee is often lower, but the hospital stay and the surgeon's time also count. Compare quotes for the same scope." },
    { q: "Does insurance cover a tummy tuck?", a: "Usually not for cosmetic reasons. A related medical repair such as a hernia may be treated differently. Check the policy wording and ask in writing." },
    { q: "Why do two hospitals quote different totals?", a: "The type of operation, the muscle repair, the nights, the room and the add-ons may differ. Ask for line items and compare like with like." },
    { q: "Is liposuction included?", a: "Only if the quote says so. It is often a separate line when added to a tummy tuck." },
    { q: "Can I pay in instalments?", a: "Some hospitals and lenders allow it. Terms vary and are not shown here." },
  ],
  sources: [NMC_SOURCE],
};

// ------------------------------------------------------------------ FAQs (10 on the hub, 4 per city)
const faqs: FaqRow[] = [
  faqRow(T, null, "tt-what", 1, "What is the difference between a tummy tuck and liposuction?", "Liposuction removes fat through small cuts and does not remove skin. A tummy tuck removes loose skin, can tighten muscle and leaves a longer scar. Many people need one or the other, and some need both. See the [liposuction page](/liposuction)."),
  faqRow(T, null, "tt-c-section", 2, "How long after a C-section should I wait?", "A surgeon decides. Many advise waiting until weight is stable and breastfeeding has ended, and the planning period varies. Bring your delivery notes to the consultation. {pending}"),
  faqRow(T, null, "tt-diastasis", 3, "Can a tummy tuck fix a muscle gap?", "Surgeons often tighten the stretched muscle with stitches during a tummy tuck. Whether it is enough depends on your anatomy, and a surgeon examines you first."),
  faqRow(T, null, "tt-scar", 4, "Where is the scar and will it show?", "The scar sits low, usually hip to hip, and often around the navel. It can be placed to sit under underwear or swimwear in many people. It fades with time, and how much varies."),
  faqRow(T, null, "tt-stay", 5, "How many nights in hospital?", "A stay of one or more nights is common so that pain, drains and walking can be managed. The surgeon sets yours. {pending}"),
  faqRow(T, null, "tt-garment", 6, "How long do I wear the compression garment?", "Often for several weeks, day and night at first. The surgeon sets the plan, and heat and rash are common questions. {pending}"),
  faqRow(T, null, "tt-pregnancy", 7, "Can I get pregnant after a tummy tuck?", "A pregnancy is possible, but it can stretch the repaired muscle and skin again. Many surgeons advise waiting until the family is complete."),
  faqRow(T, null, "tt-hi-kharcha", 8, "Tummy tuck ka kharcha kis par depend karta hai?", "Operation ke type par, muscle repair par, hospital mein kitni raat rukna hai us par, aur liposuction ya hernia repair jaise add-ons par. Quote mein har line likhwa lein. Dekhein [cost page](/cost/tummy-tuck)."),
  faqRow(T, null, "tt-hi-rest", 9, "Tummy tuck ke baad kitne din rest karna padta hai?", "Aam taur par office ka kaam 2 se 3 hafte baad shuru hota hai, lekin yeh surgeon tay karta hai. Bhaari saaman uthana aur gym kai hafte baad hi hota hai. {pending}"),
  faqRow(T, null, "tt-hi-delivery", 10, "Delivery ya C-section ke kitne time baad tummy tuck ho sakta hai?", "Yeh surgeon dekhkar batate hain. Aksar weight stable hone aur breastfeeding khatam hone ka intezaar kiya jata hai. Delivery ke papers saath le jaayein."),

  // ---- Kanpur
  faqRow(T, "kanpur", "tt-knp-hot", 20, "Is a compression garment manageable in a Kanpur summer?", "It is hot, and rash is common. Ask the surgeon what to wear under it, how to wash it, and whether a cooler room helps. The date can also be chosen with the season in mind."),
  faqRow(T, "kanpur", "tt-knp-stairs", 21, "I live on an upper floor with a squat toilet. Is that a problem?", "It makes the first fortnight harder. Ask about a commode seat or a ground floor room, and plan help for the stairs on discharge day and for review visits."),
  faqRow(T, "kanpur", "tt-knp-unnao", 22, "I live in Unnao. How do I manage drain visits?", "Ask the hospital to set the visits on days you can travel, and for a written wound plan a local doctor can follow. A night nearby may be easier than a long ride."),
  faqRow(T, "kanpur", "tt-knp-lko", 23, "Should I compare Kanpur with Lucknow?", "Many people do. Compare the same type of operation, the same nights and the same follow-up, with line items in writing."),

  // ---- Lucknow
  faqRow(T, "lucknow", "tt-lko-district", 20, "I live in Sitapur or Hardoi. Do I need to stay near the hospital?", "Many people stay near the hospital until the first review. If you go home, ask for a written plan and a local doctor who can check the wound and call the surgeon."),
  faqRow(T, "lucknow", "tt-lko-visitors", 21, "How many family members can stay with me?", "It depends on the hospital and the ward. Ask for the attendant and visiting rules in advance, and decide who handles phone calls."),
  faqRow(T, "lucknow", "tt-lko-wedding", 22, "How far ahead of a wedding should I plan?", "Several months is often advised, because swelling and the scar take time to settle. The surgeon advises for you. {pending}"),
  faqRow(T, "lucknow", "tt-lko-monsoon", 23, "What should I do about dressings in the monsoon?", "Ask how to keep dressings dry, how often they are changed, and what to do if you cannot reach the hospital on a review day."),
];

export const tummyTuck: PlasticTopic = {
  kind: "pillar",
  treatment: {
    slug: T,
    seo: {
      title: "Tummy Tuck: Types, Recovery by Week, Risks",
      description: "How a tummy tuck works, mini vs full vs extended, who should wait, a week-by-week recovery calendar, risks and what sets the price. Results vary.",
      cityTitle: "Tummy Tuck in {city}: Cost, Recovery, Risks",
    },
    content: tummyTuckContent,
    display: tummyTuckDisplay,
    deskWork: "About 2 to 3 weeks, to be confirmed by the reviewer",
    costPage: tummyTuckCostPage,
    costFactors: tummyTuckCostPage.factors,
    images: { hero: {}, operation: {}, recovery: {}, card: {} },
  },
  costLines: ttCosts,
  faqs,
  cityPages: [ttKanpur, ttLucknow],
};
