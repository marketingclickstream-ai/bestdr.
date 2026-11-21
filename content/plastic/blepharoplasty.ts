import type { CityTreatmentPage, CostLine, FaqRow, NationalCostPage, PlasticTopic, TreatmentContent, TreatmentDisplay } from "../types";
import { NMC_SOURCE, cityBase, faqRow, line, surgicalIncludes } from "./shared";

// Blepharoplasty (eyelid surgery): hub, Delhi and Gurgaon city pages, cost lines, FAQs and the national cost page.
// Rules applied: no outcome promise, no counts, no before and after, no named facility or doctor, no price figure.
// Insurance wording is limited to "check your policy wording" for the functional case (lids that reduce the field of view).
// TODO-VERIFY: stitch removal day, bruising time, contact lens and screen advice, and the stay are general descriptions for the
// plastic surgeon (or oculoplastic) reviewer to confirm. Marked {pending} where they are shown.

const T = "blepharoplasty";

export const blepharoplastyDisplay: TreatmentDisplay = {
  noPlates: true,
  operationHeading: "What eyelid surgery changes, lid by lid",
  recoveryHeading: "Recovery calendar for eyelid surgery, day by day and week by week",
  recoveryTocLabel: "Recovery",
  timelineCaption: "What most people notice and do, by time since the operation.",
  risksHeading: "Risks and complications",
  riskGuideHref: "/blepharoplasty#risks",
  priceLabel: "Upper eyelids, usual total bill",
  priceLinkText: "Lower lids and add-ons",
  costMode: "options",
  costHeading: "What eyelid surgery costs, by lids treated",
  costCaption: "Each row is a separate case. Rows are not added together. Sample data / To be confirmed.",
  labels: {
    techniquesHeading: "Upper, lower and combined eyelid surgery",
    techniquesCaption: "Plain differences between the common plans. A surgeon decides which fits your lids.",
    tocTechniques: "Upper, lower or both",
  },
  tocLabels: { surgery: "What it changes", choices: "Which lids and why" },
};

export const blepharoplastyContent: TreatmentContent = {
  dek: "Blepharoplasty (eyelid surgery) removes extra skin, and sometimes fat or muscle, from the upper or lower eyelids. Some people have it for appearance and some because heavy upper lids reduce what they can see. The [cost](/cost/blepharoplasty) depends on which lids are treated and the facility. A surgeon decides who it suits, and recovery is measured in weeks.",

  shortAnswers: [
    { q: "What does it change?", a: "Loose skin, and in some plans fat, on the upper or lower lids. It does not change the brow or the cause of a drooping lid.", href: "#surgery", linkText: "What it changes" },
    { q: "Is it for looks or for sight?", a: "Either. If heavy lids block your view, a surgeon may call it functional, and your policy wording may treat it differently.", href: "#which-lid", linkText: "Which lid and why" },
    { q: "How long is recovery?", a: "Stitches usually come out in about a week, bruising fades in about two weeks, and swelling settles over weeks {pending}.", href: "#recovery", linkText: "The calendar" },
    { q: "What sets the price?", a: "Which lids are treated, whether fat is moved, the anaesthesia, the facility and whether a brow or ptosis plan is added.", href: "#cost", linkText: "The cost lines" },
  ],

  operation: {
    lead: "Blepharoplasty is usually done under local anaesthesia with sedation, or sometimes general anaesthesia, in a day-care setting. The surgeon marks the natural crease, removes extra skin and sometimes fat or muscle, and closes the cut with fine stitches. A surgeon decides whether it suits you.",
    body: "Eyelids are thin, and small changes show. The surgeon checks whether the real problem is skin, fat, a low brow or a droopy lid muscle (ptosis), because each needs a different plan. An eye check before surgery is part of a good plan. Read about the related [brow lift cost](/cost/brow-lift), since a low brow can make the upper lids look heavy.",
    caption: "Upper lid crease and lower lash line, the two places a surgeon plans the cuts.",
    ask: "Which lids do you plan to treat, is my brow or lid muscle part of the problem, and which eye checks do you do first?",
    how: [
      "Consultation: the surgeon examines the lids, brows and eyes, asks about dry eyes, spectacles and past eye surgery, and takes photos.",
      "Eye checks: vision, tear production and, where the lid blocks sight, a visual field test. An eye specialist may be asked to examine you.",
      "Marking: the surgeon marks the planned cuts while you sit up.",
      "Anaesthesia: local anaesthesia with sedation is common. General anaesthesia is used in some cases. The anaesthetist explains the plan.",
      "Operation: skin, and if planned fat or muscle, is removed or repositioned. For lower lids, the cut may be just below the lashes or inside the lid.",
      "Closure and care: fine stitches are placed, and cold compresses and eye care are advised.",
      "Stay: most people go home the same day, and the surgeon sets yours {pending}.",
    ],
    whoItSuits: [
      { term: "Extra skin or fat on the lids", text: "Adults whose upper lids hang over the lashes, or whose lower lids have bags, and who have checked that the cause is the lid and not another problem." },
      { term: "Healthy eyes", text: "People whose eyes are not dry, inflamed or untreated for conditions such as thyroid eye disease. An eye check decides this." },
      { term: "Realistic about limits", text: "People who know that surgery cannot remove dark circles from the colour of the skin or change the shape of the eye." },
      { term: "Time to heal", text: "People who can manage two weeks of bruising and limited screen time with help at home or at work." },
    ],
  },

  techniques: {
    lead: "The names below describe where the cut goes and what is removed. Ask which plan your quote means.",
    rows: [
      { name: "Upper eyelid surgery", how: "A cut along the natural crease of the upper lid. Extra skin, and sometimes muscle or fat, is removed", often: "Heavy upper lids, or lids that hang over the lashes or reduce the view", ask: "Is the problem skin, fat, the brow or the lid muscle, and how do you know?" },
      { name: "Lower eyelid surgery, skin cut", how: "A cut just below the lashes. Skin, and sometimes fat, is removed or moved", often: "Loose lower lid skin with or without bags", ask: "How do you lower the risk of the lid pulling down?" },
      { name: "Lower eyelid, cut inside the lid", how: "The cut is inside the lower lid, with no skin cut. Fat is removed or repositioned", often: "Bags with little excess skin", ask: "Can you treat loose skin as well, and what does that change?" },
      { name: "Upper and lower together", how: "Both lids are treated in one operation", often: "People with changes in all four lids", ask: "Does doing all four lids change my recovery or the bill?" },
    ],
    note: "A droopy lid with a lid muscle problem (ptosis) and a low brow are different problems. A surgeon may add a ptosis correction or a brow lift to the plan. See the [brow lift cost page](/cost/brow-lift).",
  },

  extraSections: [
    {
      id: "which-lid",
      heading: "Which lid, which problem: a decision table",
      tocLabel: "Which lid and why",
      lead: "People often search for a surgeon to fix a tired look, then find out another problem sits behind it. The table lists what a surgeon checks. A surgeon decides for you.",
      table: {
        caption: "What you notice, what a surgeon checks, and what may be added to the plan.",
        head: ["What you notice", "What a surgeon checks", "What may be in the plan"],
        rows: [
          ["Upper lid skin rests on the lashes", "Amount of loose skin, brow position, lid muscle", "Upper blepharoplasty, sometimes with a brow lift"],
          ["Upper lids look heavy, and lashes point down", "Lid height against the pupil and whether the lid muscle is weak", "Ptosis correction, with or without skin removal"],
          ["Bags under the eyes", "Fat pads, skin laxity, the groove below the lid", "Lower lid surgery with fat removal or repositioning"],
          ["Lower lid skin is loose and creased", "Skin laxity and lid tone", "Lower lid surgery with skin removal"],
          ["Dark colour below the eyes", "Whether it is skin colour, a hollow or shadow from the fat pad", "Surgery may not change skin colour, so a surgeon tells you plainly"],
          ["Lids that block your view", "A visual field test and photographs, as an insurer may ask", "A functional plan, with your policy wording checked first"],
          ["Dry, red or tired eyes", "Tear production and surface health", "Treatment of the eye first, and surgery only if the surgeon agrees"],
        ],
      },
    },
    {
      id: "eye-checks",
      heading: "Who examines your eyes, and which tests come first",
      tocLabel: "Eye checks",
      paragraphs: [
        "Eyelid surgery is done by plastic surgeons and by eye surgeons who have trained in the eyelid. Either can be a good choice, and we do not rank them. Ask who will operate and what their training is, and where you can check the registration.",
        "A good plan includes a vision test and a tear check. Where the lid blocks sight, it may also include a visual field test and photographs taken with the lid lifted and relaxed. If you wear spectacles or contact lenses, bring your prescription. If you have thyroid disease or dry eyes, tell the surgeon early, because they change the plan. {pending}",
      ],
      note: { label: "Ask this", text: "Which eye checks will you do before surgery, and who will see me if my eyes feel dry or sore afterwards?" },
    },
    {
      id: "screens",
      heading: "Screens, lenses and make-up after eyelid surgery",
      tocLabel: "Screens and lenses",
      lead: "Most people ask about eyes and daily life. General timings are for the reviewer to confirm. {pending}",
      table: {
        caption: "General guidance. Your surgeon sets yours.",
        head: ["Thing", "General guidance", "Ask"],
        rows: [
          ["Phone and laptop", "Short sessions with breaks for the first days. Blinking falls when you stare, which dries the eyes", "How many minutes at a time, and when can I work a full day?"],
          ["Contact lenses", "Often avoided for about a week or two. Spectacles are used instead", "When can I wear lenses again?"],
          ["Eye make-up and kajal", "Avoided until the wounds have healed, and a new product is used afterwards", "When can I use kajal or eyeliner, and which products?"],
          ["Cold compresses", "Often used in the first days for swelling", "How often, and with what cloth?"],
          ["Driving", "After the sedation has worn off and your vision is clear", "When can I drive, and can I ride at night?"],
          ["Sunglasses and sun", "Sun and wind irritate healing lids, so sunglasses help", "Which sunglasses, and for how long?"],
          ["Sleeping", "Head raised for the first days. Do not rub the eyes", "How should I sleep, and what if I rub my eyes in my sleep?"],
        ],
      },
    },
    {
      id: "questions",
      heading: "Questions to settle before you pay",
      tocLabel: "Questions to ask",
      bullets: [
        "Which lids do you plan to treat, and what is not part of the plan?",
        "Is a brow or ptosis problem part of this, and what does that add?",
        "Which tests do you do before surgery, and who reads them?",
        "How do you lower the risk of dry eyes and a lower lid that pulls down?",
        "Local or general anaesthesia, and who gives it?",
        "When are stitches removed, and what do I do if an eye feels very sore?",
        "What does a touch-up cost, and when do you advise it?",
        "What records do you provide if my insurer asks for them?",
      ],
    },
  ],

  recovery: {
    lead: "The timings below describe a typical course, with your own dates set by your surgeon. The reviewer has yet to confirm the ranges. {pending}",
    body: "Expect swelling and bruising around the eyes, mild tightness, dry or watery eyes and a need to rest your eyes from screens. Use cold compresses as advised, sleep with your head raised, and keep to the review dates.",
    highlights: [
      { pre: "about", big: "1 week", text: "Before stitches are usually removed" },
      { pre: "about", big: "1 to 2 weeks", text: "Before many people return to desk work" },
      { pre: "weeks to months", big: "4 to 12", text: "Swelling settles and the scar fades" },
    ],
    timeline: [
      { when: "Day 0 to 2", notice: "Swelling, bruising, tight lids and watery or blurred vision from ointment", doThis: "Rest with your head raised. Cold compresses as advised. Do not rub your eyes." },
      { when: "Day 3 to 7", notice: "Bruising peaks and turns purple then yellow. Eyes feel dry or gritty", doThis: "Use drops and ointment as prescribed. Short screen sessions. Attend the stitch removal visit." },
      { when: "Week 2", notice: "Stitches out. Bruising fades. Swelling remains, worst in the morning", doThis: "Return to desk work if the surgeon agrees. Sunglasses outdoors." },
      { when: "Week 3 to 4", notice: "Most swelling down. Eyes may feel dry or tired by evening", doThis: "Ask about lenses and make-up. Keep up the drops." },
      { when: "Week 6", notice: "Lids feel more normal. The scar is pink along the crease", doThis: "Review visit. Ask about exercise and sun care for the scar." },
      { when: "Month 3", notice: "Most swelling has settled", doThis: "Review. Discuss any concern about shape or lid closure." },
      { when: "Month 6 to 12", notice: "The scar fades into the crease. Fine change continues", doThis: "Final review. Discuss any touch-up only after the lids have settled." },
    ],
    grid: {
      cols: ["Wk 1", "Wk 2", "Wk 4", "Wk 6"],
      rows: [
        { label: "Desk work", cells: [{ state: "n", text: "No" }, { state: "m", text: "Ask" }, { state: "y", text: "Yes" }, { state: "y", text: "Yes" }] },
        { label: "Long screen time", cells: [{ state: "n", text: "No" }, { state: "m", text: "Short" }, { state: "y", text: "Yes" }, { state: "y", text: "Yes" }] },
        { label: "Contact lenses", cells: [{ state: "n", text: "No" }, { state: "m", text: "Ask" }, { state: "m", text: "Ask" }, { state: "y", text: "Yes" }] },
        { label: "Eye make-up", cells: [{ state: "n", text: "No" }, { state: "n", text: "No" }, { state: "m", text: "Ask" }, { state: "m", text: "Ask" }] },
        { label: "Exercise", cells: [{ state: "n", text: "No" }, { state: "n", text: "No" }, { state: "m", text: "Ask" }, { state: "m", text: "Ask" }] },
      ],
    },
    closing: "Treat the timetable above as a guide. Bruising, swelling and dryness vary with the lids treated, whether fat was moved and your skin. Plan weddings and photographs months ahead.",
  },

  risks: {
    lead: "Every operation carries risk, and the eye is a sensitive place. The common concerns are below in plain words, each with a question to ask. Your surgeon goes through the complete list.",
    rows: [
      { risk: "Dry or irritated eyes", means: "Eyes may feel dry, gritty or watery for weeks, and some people need drops for longer.", ask: "How do you check my tear production, and what drops do you advise?" },
      { risk: "Bleeding and bruising", means: "Bruising is common. Bleeding behind the eye is rare and urgent.", ask: "What signs mean I must call at once?" },
      { risk: "Infection", means: "Redness, heat, pus or fever at the wounds.", ask: "Which signs should I report, and who do I call?" },
      { risk: "Difficulty closing the eyes", means: "The lids may not close fully for a time, and rarely for longer.", ask: "How do you check this, and how is it managed?" },
      { risk: "Lower lid pulled down", means: "The lower lid may sit lower and show more white of the eye.", ask: "How do you lower the chance, and how is it treated?" },
      { risk: "Asymmetry", means: "The two sides may differ in crease height or fullness.", ask: "Which differences are normal, and what is the plan if one persists?" },
      { risk: "Scarring", means: "A scar in the crease or below the lashes that can be red or raised for a time.", ask: "What scar care do you advise?" },
      { risk: "Changes in vision", means: "Blurred vision is common for days. Lasting change is rare and needs urgent attention.", ask: "What changes should I report at once?" },
      { risk: "Need for further surgery", means: "Some people need a small touch-up.", ask: "What does a touch-up cost, and when do you advise it?" },
      { risk: "Anaesthesia risks", means: "Sedation and general anaesthesia carry their own risks, higher with some illnesses.", ask: "Who gives my anaesthesia, and what did my fitness check show?" },
    ],
    alert: "Call your surgeon immediately for sudden pain in or behind an eye, a rapidly swelling eyelid, loss or sharp change in vision, fever, pus or spreading redness. If you cannot reach the surgeon or an eye specialist, go to the nearest emergency department.",
    wait: [
      "Your eyes are dry, red or inflamed and have not been treated",
      "You have untreated thyroid eye problems",
      "Your concern is dark skin colour under the eyes alone",
      "You expect to change the shape of your eyes",
      "You have an active eye infection",
      "You smoke or use nicotine and have not stopped as advised",
      "You take blood thinners without a plan",
      "You have a wedding or major event within a few weeks",
    ],
    tell: [
      "Dry eyes, glaucoma, thyroid disease or past eye surgery",
      "Spectacle and contact lens use",
      "All medicines, supplements and blood thinners",
      "Bleeding or clotting conditions",
      "Allergies to anaesthetics, tape or antibiotics",
      "Smoking, nicotine and alcohol",
    ],
  },

  patientQuestions: [
    { q: "Which lid is the problem?", href: "#which-lid", linkText: "Read: the decision table" },
    { q: "Who examines my eyes?", href: "#eye-checks", linkText: "Read: eye checks" },
    { q: "What about screens and lenses?", href: "#screens", linkText: "Read: screens and lenses" },
    { q: "What should I ask?", href: "#questions", linkText: "Read: questions to ask" },
    { q: "How long is recovery?", href: "#recovery", linkText: "Read: the calendar" },
    { q: "What will it cost?", href: "#cost", linkText: "Read: the cost lines" },
  ],

  quoteProcess: [
    { title: "A coordinator takes your first call", text: "Phone or WhatsApp. Say where you live and what you want to ask. You are not asked to book." },
    { title: "A surgeon examines your eyes and lids", text: "In person. The plan depends on skin, fat, brow position and eye health." },
    { title: "The plan arrives in writing", text: "It lists the lids to be treated, whether fat is moved, any brow or ptosis work, and the surgeon, facility and price." },
    { title: "You decide in your own time", text: "Compare plans for the same lids and the same setting. No package is paid before the examination." },
    { title: "Care after the operation", text: "A coordinator call, a stitch removal visit and later reviews." },
  ],

  quoteChecks: [
    "state which lids are treated and whether fat is moved?",
    "list any brow or ptosis work as its own line?",
    "say whether anaesthesia and the facility fee are included?",
    "say whether eye checks, drops and ointments are included?",
    "give the cost of follow-up visits and of a touch-up?",
    "name the facility type and the length of stay?",
  ],

  extras: [
    "Brow lift or ptosis correction, if added",
    "Visual field test and an eye specialist's examination",
    "Pre-operative tests",
    "Lubricating drops, ointments and cold packs",
    "A touch-up, if advised",
    "Review visits beyond those in the plan",
    "GST, if shown separately",
    "Your travel and time off",
  ],

  insurance:
    "Insurance. Eyelid surgery for appearance is usually not covered by health policies. When heavy lids reduce the field of view, a plan may be treated as functional, so read your policy wording and ask your insurer in writing what records it needs. Cashless approval is never promised here.",
  payment:
    "Payment. Methods and instalments depend on the facility and the lender and are not shown here. Pay nothing until you have been examined. {tbc}",

  // TODO-VERIFY: the reviewer opens each source and confirms the URL and the facts used.
  sources: [NMC_SOURCE],

  footnotes: [
    "Medical review is pending. A reviewer name, qualification and date will appear once a registered plastic surgeon or eye surgeon signs off.",
    "Stitch removal day, bruising time, contact lens and screen advice and the stay are general and await the reviewer.",
    "No satisfaction or complication figure appears, because none has been verified.",
    "Insurance and payment wording is general and still to be confirmed.",
  ],
};

// ------------------------------------------------------------------ city pages
// TODO-VERIFY (both cities): road times, station and airport names, metro lines, stays and follow-up arrangements are general
// and must be checked against the partner facility and a dated public source before any page leaves noindex.

const blDelhi: CityTreatmentPage = {
  ...cityBase(T, "delhi"),
  seoTitle: "Blepharoplasty in Delhi: Cost, Recovery, Risks",
  h1: "Eyelid surgery (blepharoplasty) in Delhi",
  metaDescription: "Blepharoplasty in Delhi: sample cost lines, which lids and why, eye checks, recovery around smog and screens, and travel from Noida, Ghaziabad and Faridabad.",
  intro: "The sample total for blepharoplasty in Delhi depends on which lids are treated, whether fat is moved and the facility. No partner facility is confirmed in Delhi yet, so no price is shown. In Delhi the questions are eye irritation from dust and smog, screen-heavy jobs and getting through a metro commute with swollen eyes.",
  includes: { ...surgicalIncludes },
  facilities: {
    intro: "No partner facility is confirmed in Delhi yet. Blepharoplasty is usually a day-care operation under local anaesthesia with sedation. Check whether the facility has an anaesthetist, an eye check and a clear plan if an eye feels very sore.",
    partners: [{ type: "Day-care facility with a minor theatre in Delhi (to be confirmed)", count: null }],
    accreditation: null,
    checks: [
      { check: "Eye specialist access", why: "Eye problems after surgery need an eye specialist quickly", ask: "Who sees me if my vision changes or my eye is very sore, and how quickly?" },
      { check: "Anaesthesia plan", why: "Sedation affects who can take you home", ask: "Local or general anaesthesia, who gives it, and when can I leave?" },
      { check: "Stitch removal visit", why: "A visit around day seven fits into a work week", ask: "Is the visit fixed, and can it be early or late in the day?" },
    ],
  },
  travel: {
    intro: "People travel into Delhi for eyelid surgery from Noida, Ghaziabad, Faridabad and Gurgaon. After sedation you need a companion, and swollen eyes make a busy station or a sunny road harder.",
    airport: "Indira Gandhi International Airport (to be verified)",
    station: "New Delhi, Old Delhi and Hazrat Nizamuddin stations (to be verified against the facility)",
    stayDays: "To be confirmed by the partner. A same-day return is usual for a day-care operation {pending}",
    metro: "Delhi Metro is not a comfortable ride with swollen eyes and bright light. A booked cab with a companion is easier. {sample} Distance to a facility is added once one is confirmed.",
    roadTimes: [
      { from: "Noida", time: "50 to 90 min", tip: "Plan the stitch removal visit for a time outside the peak rush" },
      { from: "Ghaziabad", time: "60 to 100 min", tip: "A same-day return is workable with a companion" },
      { from: "Faridabad", time: "50 to 90 min", tip: "Ask if the stitch visit can be early in the day" },
      { from: "Gurgaon", time: "50 to 90 min", tip: "Compare Gurgaon options before you decide" },
    ],
    privacyNote: "Sunglasses cover bruising on the way home, and many people use them in an office for a week or two. Photographs of your eyes are health data, so ask where clinic photos are stored.",
    mapCaption: "Travel into Delhi from nearby towns, no building shown.",
  },
  localContext: [
    { text: "NEEDS REAL DATA: which Delhi facility, if any, will do blepharoplasty, and its type", source: "", asOf: "" },
    { text: "NEEDS REAL DATA: winter and post-Diwali air quality in Delhi (public CPCB records, month and station)", source: "", asOf: "" },
    { text: "NEEDS REAL DATA: whether an eye specialist is on site or on call at the partner facility", source: "", asOf: "" },
  ],
  usefulness: "For adults in Delhi and nearby towns who want to plan eyelid surgery around smog days, screen-heavy work and a metro commute, with notes on eye checks, sunglasses at work and where to go if an eye feels very sore.",
  localCopy: [
    "A Delhi eyelid plan starts with the dusty months and the smog weeks, when eyes are already irritated.",
    "Many Delhi office workers spend most of the day on a screen, so screen time after surgery is a real question.",
    "Dry air in winter and indoor heating can dry healing eyes.",
  ],
  localNotes: [
    { heading: "Smog, dust and healing eyes", text: "Delhi has long spells of poor air in winter, and dust in summer. Eyes are already irritated by these, and healing lids are sensitive. We make no claim about what the air does to healing. Ask the surgeon how to rinse, which drops to use and when to stay indoors. {pending}" },
    { heading: "Screens at work", text: "Many Delhi jobs are screen-based. Staring lowers blinking, and healing eyes dry quickly. Ask what a work day looks like in the second week, and whether you can break often." },
    { heading: "Metro with swollen eyes", text: "A metro car is bright and crowded. A cab with a companion is easier, and sunglasses cover bruising. Ask when it is fine to travel alone." },
    { heading: "Nearest eye specialist", text: "If an eye feels very sore or your vision changes, you need an eye specialist soon. Ask the facility who that is and where, and note the route from your home." },
  ],
  sections: [
    {
      heading: "A day-care operation and a plan for the evening",
      paragraphs: [
        "Eyelid surgery is often a short day-care operation, and the planning concerns the ride home. After sedation you need a companion, a booked cab and a quiet room with dim light. You may see blurred vision from the ointment for a few hours. Tell your family what you will need, such as a cold compress, a clean cloth and someone nearby overnight.",
        "Ask when the sedation wears off, and whether you can take the metro home the next day for a check.",
      ],
    },
    {
      heading: "Dust, smog and the first fortnight",
      paragraphs: [
        "Delhi's winter and post-Diwali weeks bring heavy smog, and dust and heat come in summer. Eyes are sensitive in the first fortnight after eyelid surgery. A surgeon may advise staying indoors on the worst days, wearing sunglasses outside and using lubricating drops. If you can choose the month, ask how the season changes the plan. {pending}",
        "Avoid rubbing your eyes if they itch. Ask what to use, such as a cold compress.",
      ],
    },
    {
      heading: "Screens, conferences and a calendar to match",
      paragraphs: [
        "Delhi's offices run on screens, and meetings take much of the day. Plan the date around a quiet stretch with no big presentations. Ask the surgeon how many minutes at a time are fine in the first days and how you will do video calls. Many people arrange a week of rest, followed by half days.",
        "Weddings and festivals fill the Delhi calendar, and bruising can take about two weeks to fade. Do not schedule surgery just before a major event.",
      ],
    },
    {
      heading: "Language and consent in the clinic",
      paragraphs: [
        "Hindi, Punjabi and English are all used in Delhi clinics. Ask for the plan, the lids to be treated and the aftercare in the language you read most easily. Bring a trusted adult to the consultation to listen and ask with you.",
        "If a clinic quotes a plan before examining your eyes, take a second opinion.",
      ],
    },
    {
      heading: "From the NCR towns and back for stitch removal",
      paragraphs: [
        "If you live in Noida, Ghaziabad or Faridabad, the surgery day and the stitch visit are two trips of an hour or more. A same-day return after surgery works for many people with a companion. For the stitch visit, ask for a time early or late in the day, and bring sunglasses. Ask whether a local doctor can check you if a problem comes up between visits.",
      ],
    },
  ],
};

const blGurgaon: CityTreatmentPage = {
  ...cityBase(T, "gurgaon"),
  seoTitle: "Blepharoplasty in Gurgaon: Cost, Recovery, Risks",
  h1: "Eyelid surgery (blepharoplasty) in Gurgaon",
  metaDescription: "Blepharoplasty in Gurgaon (Gurugram): sample cost lines, which lids and why, recovery around office life and dry air-conditioning, and travel from Delhi.",
  intro: "The sample total for blepharoplasty in Gurgaon (also written Gurugram) depends on which lids are treated, whether fat is moved and the facility. A partner facility exists in Gurgaon for other treatments, and whether it does eyelid surgery is to be confirmed, so no price is shown. Here the questions concern office life, air-conditioning and commuting from Delhi.",
  includes: { ...surgicalIncludes },
  facilities: {
    intro: "A partner facility exists in Gurgaon for other treatments, and whether it does eyelid surgery is to be confirmed. We do not name it. Ask whether the plan involves a plastic surgeon, an eye surgeon or both.",
    partners: [{ type: "Day-care facility with a minor theatre in Gurgaon (to be confirmed)", count: null }],
    accreditation: null,
    checks: [
      { check: "Who operates", why: "Plastic surgeons and eye surgeons both do this operation", ask: "Who will operate, what is their training and where can I check their registration?" },
      { check: "Time on the day", why: "Office workers need a plan for the hours after sedation", ask: "How long will I be at the facility, and when can I leave with a companion?" },
      { check: "A plan if the eye is sore", why: "Sudden pain is an emergency", ask: "What is the number to call at night, and where do I go?" },
    ],
  },
  travel: {
    intro: "Many people in Gurgaon work in offices and commute by car, cab or the Rapid Metro. The questions are how to get home after sedation, how to work in an air-conditioned office with healing eyes and how to travel back for stitch removal.",
    airport: "Indira Gandhi International Airport, Delhi (to be verified)",
    station: "HUDA City Centre (Yellow Line) and Sikandarpur (Rapid Metro)",
    stayDays: "To be confirmed by the partner. A same-day return is usual for a day-care operation {pending}",
    metro: "After sedation, a booked cab with a companion is easier than a metro change. {sample} The distance to a facility is added once one is confirmed.",
    roadTimes: [
      { from: "South Delhi", time: "40 to 70 min", tip: "A late finish may meet the evening rush, so ask for an early slot" },
      { from: "Noida", time: "70 to 110 min", tip: "Plan the stitch visit on a day you can start late" },
      { from: "Faridabad", time: "60 to 100 min", tip: "Ask whether the stitch check can be nearer home" },
      { from: "Rewari", time: "60 to 90 min", tip: "Plan a short stay in Gurgaon for the day of surgery if the ride is long" },
    ],
    privacyNote: "Many clients come from nearby offices and you do not need to explain days off. Sunglasses cover bruising. Ask the clinic to keep the procedure name out of messages.",
    mapCaption: "Travel into Gurgaon from Delhi and nearby towns, no building shown.",
  },
  localContext: [
    { text: "NEEDS REAL DATA: whether the Gurgaon partner facility does blepharoplasty, and its type", source: "", asOf: "" },
    { text: "NEEDS REAL DATA: whether an eye specialist is on site or on call at the Gurgaon facility", source: "", asOf: "" },
    { text: "NEEDS REAL DATA: Gurugram air quality in winter (public CPCB station data, month and station)", source: "", asOf: "" },
  ],
  usefulness: "For office workers in Gurgaon (Gurugram) and those travelling from Delhi, with notes on air-conditioned offices, hybrid work for the second week, the Rapid Metro and a cab, and who checks the eyes if they feel sore.",
  localCopy: [
    "In Gurgaon the first week is planned around a hybrid work calendar and an air-conditioned office.",
    "Dry office air can irritate healing eyes, so ask about drops and about where to sit.",
    "A cab with a companion is the usual plan after sedation in a city of long commutes.",
  ],
  localNotes: [
    { heading: "Gurgaon or Gurugram", text: "One city, two spellings. The page title uses the more common search term, Gurgaon, and the text also says Gurugram. A clinic will understand either." },
    { heading: "Air-conditioned offices", text: "Dry air from air-conditioning dries healing eyes. Ask about lubricating drops, a desk away from vents and breaks from the screen. {pending}" },
    { heading: "Hybrid work", text: "Many Gurgaon employers allow some days from home. Ask whether you can work from home in the second week, and what your manager will be told. You decide how much to share." },
    { heading: "From Delhi", text: "If you live in Delhi, ask whether the stitch visit can be near home, with a written plan, or whether you must return to Gurgaon. Delhi is the nearest other city we cover." },
  ],
  sections: [
    {
      heading: "A week planned around meetings",
      paragraphs: [
        "Gurgaon work weeks run on calendars. A good date for eyelid surgery leaves a day for the operation, a few days of rest and then a gradual return. Many people choose a Thursday or Friday and use the weekend to rest. Plan the stitch visit about a week later and ask for a slot that does not clash with a long meeting.",
        "Bruising peaks in the first week, so video calls may need dark glasses or a camera off. Think about what you will tell colleagues, if anything.",
      ],
    },
    {
      heading: "Air-conditioning and dry eyes",
      paragraphs: [
        "Gurgaon offices are cold and dry inside and hot outside. Healing eyes dry quickly in air-conditioning. Ask the surgeon about lubricating drops, how often to use them and how to arrange a desk away from direct vents. Short screen breaks help. If your eyes feel gritty, say so at the review.",
        "Contact lens wearers should ask when lenses are fine. Spectacles are an alternative in the meantime, and your prescription may need a check.",
      ],
    },
    {
      heading: "Heat, glare and dust outdoors",
      paragraphs: [
        "Gurgaon's summers are hot and its roads dusty. Sunglasses help in the first weeks, with a wide frame that sits off the lids. In winter, smog and dust can irritate eyes. We make no claim about what air does to healing. Ask the surgeon which sunglasses and drops suit you.",
      ],
    },
    {
      heading: "Car, cab or metro",
      paragraphs: [
        "After sedation, a companion should take you home, and a cab is the usual way. A metro change with swollen eyes and bright light is tiring. For the stitch visit, many people drive themselves once the surgeon allows it. Ask when that is, and whether you can ride a two-wheeler.",
      ],
    },
    {
      heading: "Gurgaon or Delhi for the second opinion",
      paragraphs: [
        "Gurgaon and Delhi are close, and many people compare surgeons in both. Take the same list to each: the lids to be treated, the anaesthesia, the eye checks, the stitch visit and who handles a sore eye. A total can differ because one quote covers upper lids only and another covers four lids. Compare the scope first.",
      ],
    },
  ],
};

// ------------------------------------------------------------------ cost lines and cost page
const blCosts: CostLine[] = [
  line(T, 1, "Consultation, eye check and examination", "The surgeon and whether an eye specialist is involved"),
  line(T, 2, "Upper eyelids (both), usual total", "Skin only or with fat, and anaesthesia"),
  line(T, 3, "Lower eyelids (both), usual total", "Skin cut or inside cut, and fat handling"),
  line(T, 4, "All four lids, usual total", "Operating time and anaesthesia"),
  line(T, 5, "Add-on: ptosis correction or brow lift", "The plan the surgeon advises"),
  line(T, 6, "Drops, ointments and dressings", "What is included in the quote"),
  line(T, 7, "Follow-up visits and any touch-up", "Ask in writing before you book"),
];

export const blepharoplastyCostPage: NationalCostPage = {
  seoTitle: "Blepharoplasty Cost in India: What Sets the Total Bill",
  metaDescription: "How eyelid surgery cost is built: upper, lower or all four lids, fat handling, anaesthesia and add-ons. Ranges appear once dated quotes are collected.",
  h1: "Blepharoplasty (eyelid surgery) cost in India",
  answer: "The total depends on which lids are treated, whether fat is moved, the anaesthesia, the facility and any brow or ptosis work added. We have no price to show yet. Ranges will follow once dated quotes exist, each with its basis stated.",
  unit: "total",
  rangeHeading: "Sample totals by lids treated",
  rangeCaption: "Lines show separate plans and are not meant to be summed.",
  planner: {
    heading: "Count the lids before you compare",
    formula: "Total = surgeon + anaesthesia + facility + (upper lids or lower lids or four lids) + add-ons + follow-up",
    steps: [
      "Ask whether the quote is for two lids or four, and which ones.",
      "Ask whether fat is removed or moved, and whether the cut is outside or inside the lid.",
      "Ask whether a brow lift or ptosis correction is in the quote or a separate line.",
      "Ask whether the eye checks, drops and ointments are included.",
      "List what is missing from the quote: GST, medicines and any tests done beforehand.",
    ],
  },
  extraSections: [
    {
      id: "two-lids-or-four",
      heading: "Two lids or four: reading the quote",
      tocLabel: "Two lids or four",
      lead: "A quote that says eyelid surgery does not say how many lids. The table sets out the plans you may see and what each changes in the bill.",
      table: {
        caption: "Plans seen in quotes and what to check in each.",
        head: ["Plan in the quote", "What it usually covers", "What to check"],
        rows: [
          ["Upper lids", "Two upper lids, skin and sometimes fat", "Is it both upper lids, and is muscle work included?"],
          ["Lower lids", "Two lower lids, skin or fat", "Is the cut outside or inside the lid, and is skin removal included?"],
          ["All four lids", "Upper and lower lids in one operation", "Is this one price for four lids, or two prices added?"],
          ["With brow or ptosis work", "Lid surgery plus a lift of the brow or the lid muscle", "Is the extra work a separate line, and does it change the lid plan?"],
          ["Functional plan", "Upper lids that block your view, with a visual field test", "What papers does the plan produce for an insurer?"],
        ],
      },
    },
  ],
  factors: [
    { factor: "Lids treated", why: "Two upper lids, two lower lids and all four lids are different amounts of work." },
    { factor: "Skin only or fat as well", why: "Moving or removing fat changes the time and the method." },
    { factor: "Anaesthesia", why: "Sedation with local anaesthetic costs differently from a general anaesthetic." },
    { factor: "Related procedures", why: "A brow lift or ptosis correction in the same sitting is a separate line." },
    { factor: "Facility type", why: "Day-care units and hospitals bill the room and theatre in different ways." },
    { factor: "Surgeon and team", why: "Training and experience affect the fee. We do not rank plastic or eye surgeons." },
    { factor: "Eye checks and follow-up", why: "Some quotes include a visual field test and review visits, and some bill each." },
    { factor: "Delhi or Gurgaon", why: "Facility rent and clinic hours follow the city, which moves the fee for the same lids." },
  ],
  notIncluded: [
    "Brow lift or ptosis correction, if added",
    "Visual field test and an eye specialist's examination",
    "Lubricating drops, ointments and cold packs",
    "A touch-up, if advised",
    "Tests before the operation",
    "Review visits beyond those in the plan",
    "GST, if shown separately",
    "Your travel and time off",
  ],
  compareQuotes: [
    "Ask each facility which lids are treated and what is removed or moved.",
    "Compare totals for the same lids and the same anaesthesia.",
    "Ask who will operate, and check their registration yourself.",
    "Ask what a touch-up costs and when it is advised.",
    "Do not pay before an in-person examination.",
  ],
  insurance: "Eyelid surgery for appearance is usually not covered by health policies. When heavy lids reduce the field of view, a plan may be treated as functional, so read your policy wording and ask your insurer in writing what records it needs.",
  payment: "Instalments depend on the facility and the lender, and their terms are not listed here. GST wording is to be confirmed. {tbc}",
  method: "No eyelid surgery price is shown yet. When quotes arrive, each line will state its source type, how many data points stand behind it and when they were collected. A line with fewer than three dated sources stays pending. Nothing comes from other websites, and one city's figure is not applied to another.",
  faqs: [
    { q: "What affects the price of eyelid surgery the most?", a: "Which lids are treated, whether fat is moved, the anaesthesia and the facility. Ask for each as a line." },
    { q: "Are upper and lower lids priced separately?", a: "Often they are separate lines, and some quotes give one price for all four. Ask for what each includes." },
    { q: "Does insurance cover eyelid surgery?", a: "Usually not for appearance. When heavy lids reduce your view, it may be treated differently. Check your policy wording and ask in writing." },
    { q: "Is a brow lift included?", a: "Only if the quote says so. It is a different operation and a separate line." },
    { q: "Are drops and follow-up included?", a: "Only if the quote says so. Ask for a written list." },
    { q: "Can the cost be paid over months?", a: "Some facilities and lenders allow it. Terms vary and are not shown here." },
  ],
  sources: [NMC_SOURCE],
};

// ------------------------------------------------------------------ FAQs (10 on the hub, 4 per city)
const faqs: FaqRow[] = [
  faqRow(T, null, "bl-func", 1, "Is eyelid surgery cosmetic or functional?", "It can be either. If heavy upper lids block your view, a surgeon may document it as functional, and your policy wording may treat it differently. Appearance alone is usually not covered."),
  faqRow(T, null, "bl-ptosis", 2, "What is the difference between blepharoplasty and ptosis surgery?", "Blepharoplasty removes extra skin or fat. Ptosis surgery tightens the muscle that lifts a drooping lid. Some people need both, and a surgeon decides."),
  faqRow(T, null, "bl-dark", 3, "Will it remove dark circles?", "Not usually. Dark colour from the skin is not changed by surgery, though a shadow from a fat pad may be. A surgeon will say what your lids allow."),
  faqRow(T, null, "bl-stay", 4, "Do I need to stay in hospital?", "Most people go home the same day, with a companion. The surgeon sets yours. {pending}"),
  faqRow(T, null, "bl-stitch", 5, "When are the stitches removed?", "Often after about a week. The surgeon sets the date. {pending}"),
  faqRow(T, null, "bl-lens", 6, "When can I wear contact lenses?", "Often after a week or two, and the surgeon sets the date. Wear spectacles in the meantime. {pending}"),
  faqRow(T, null, "bl-dry", 7, "Will my eyes feel dry afterwards?", "They can, for weeks. Drops are usual. Tell the surgeon if you already have dry eyes before surgery."),
  faqRow(T, null, "bl-hi-kharcha", 8, "Eyelid surgery ka kharcha kis par depend karta hai?", "Kitni palkon par surgery hai (upar, neeche ya chaaron), fat ka kaam, anaesthesia, aur facility. Quote mein har line likhwa lein. Dekhein [cost page](/cost/blepharoplasty)."),
  faqRow(T, null, "bl-hi-rest", 9, "Palkon ki surgery ke baad kitne din rest karna padta hai?", "Aam taur par office ka kaam 1 se 2 hafte baad shuru hota hai, lekin surgeon tay karta hai. Sujan aur neel kareeb do hafte rehte hain. {pending}"),
  faqRow(T, null, "bl-hi-insurance", 10, "Agar palkein aankhon ke saamne aa jaati hain to kya insurance milta hai?", "Yeh aapki policy par depend karta hai. Jab bhaari palkein nazar rokti hain to surgery alag tarah se dekhi ja sakti hai. Policy ke shabd padhein aur insurer se likhit mein poochein."),

  // ---- Delhi
  faqRow(T, "delhi", "bl-del-smog", 20, "Does Delhi smog matter in the first fortnight?", "We make no claim about what smog does to healing. Ask the surgeon whether to stay indoors on bad days, and which drops and sunglasses to use."),
  faqRow(T, "delhi", "bl-del-metro", 21, "Can I take the metro home after surgery?", "A companion and a cab are easier after sedation. Ask when it is fine to travel alone."),
  faqRow(T, "delhi", "bl-del-screens", 22, "How much screen time can I manage in week one?", "Short sessions with breaks. Ask the surgeon how many minutes and what to do if your eyes feel gritty."),
  faqRow(T, "delhi", "bl-del-eye", 23, "Where do I go if my eye hurts badly?", "Call the surgeon at once, and ask the facility before surgery which eye specialist or emergency department to go to."),

  // ---- Gurgaon
  faqRow(T, "gurgaon", "bl-ggn-ac", 20, "Is air-conditioning a problem for healing eyes?", "It dries them. Ask about lubricating drops, a desk away from vents and breaks from the screen."),
  faqRow(T, "gurgaon", "bl-ggn-hybrid", 21, "Can I work from home in week two?", "Many people do. Ask the surgeon how long at a time you can work on a screen, and whether to avoid video calls for a few days."),
  faqRow(T, "gurgaon", "bl-ggn-name", 22, "Gurgaon or Gurugram: is it the same place?", "Yes, one city with two spellings, in Haryana. We use Gurgaon here because it is the more common search."),
  faqRow(T, "gurgaon", "bl-ggn-delhi", 23, "I live in Delhi. Can the stitch visit be near home?", "Ask the surgeon. A written plan and photographs can help a doctor near home. Delhi is the nearest other city we cover."),
];

export const blepharoplasty: PlasticTopic = {
  kind: "pillar",
  treatment: {
    slug: T,
    seo: {
      title: "Blepharoplasty: Which Lids, Recovery, Risks",
      description: "How eyelid surgery works, upper vs lower vs all four lids, eye checks, screens and lenses after surgery, risks and what sets the price. Results vary.",
      cityTitle: "Blepharoplasty in {city}: Cost, Recovery, Risks",
    },
    content: blepharoplastyContent,
    display: blepharoplastyDisplay,
    deskWork: "About 1 to 2 weeks, to be confirmed by the reviewer",
    costPage: blepharoplastyCostPage,
    costFactors: blepharoplastyCostPage.factors,
    images: { hero: {}, operation: {}, recovery: {}, card: {} },
  },
  costLines: blCosts,
  faqs,
  cityPages: [blDelhi, blGurgaon],
};
