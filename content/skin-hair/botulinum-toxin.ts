import type { CityTreatmentPage, CostLine, FacilityData, FaqRow, IncludeKeyDef, NationalCostPage, SkinHairTopic, TreatmentContent } from "../types";
import { SLUGS, TOXIN_SLUG } from "../slugs";
import { cityBase, faqRow, line } from "./shared";

// Botulinum toxin injections for wrinkles: hub, four city pages, cost lines, FAQs and the national cost page.
//
// REGULATED TOPIC. Botulinum toxin is a prescription medicine. Rules applied in this file:
// - The common name "Botox" appears only in plain text: the hub description, the first paragraph (dek), one FAQ
//   ("Is botulinum toxin the same as Botox?") and the four city meta descriptions. Never in a heading, link text,
//   image text or nav label.
// - No product or brand names, no comparison of products, no dose or unit counts, no per-unit price, no "from" price, no promotion.
// - Cost lines are sample ranges per treatment area with the pending chip. If the lawyer says even ranges are promotion,
//   remove the lines and keep the factor table (seo-2, "Mode 0").
// - Every medical statement is general and pending the reviewer. Nothing here is legal advice.
// The page slug lives in content/slugs.ts (TOXIN_SLUG), so a slug change is one line there.

const T = SLUGS.toxin;
const HUB = `/${TOXIN_SLUG}`;

// Rows of the "what the price includes" table. 6 of them, gate G2 needs 5 answered.
export const toxinIncludeKeys: IncludeKeyDef[] = [
  { key: "consultation", label: "Consultation and face assessment", ask: "Is the first visit charged, and is it credited if you go ahead?" },
  { key: "prescriber", label: "Doctor who assesses and prescribes", ask: "Who decides the plan, and are they registered with a medical council?" },
  { key: "performer", label: "Who injects", ask: "Is the person who injects a doctor, and can I see their registration?" },
  { key: "product", label: "The medicine, from a sealed pack", ask: "Will the sealed pack and batch label be shown to me before use?" },
  { key: "review", label: "Review visit", ask: "Is a review at about two weeks included, and what does a touch-up cost?" },
  { key: "aftercare", label: "Aftercare advice", ask: "Do I get written advice for the first day, and who do I call if I am worried?" },
];

// TODO-VERIFY: onset (days), how long the effect lasts (months), the review visit at about 2 weeks and the first-day
// activity limits are general ranges for the dermatology reviewer to confirm against the product leaflet.
export const toxinContent: TreatmentContent = {
  dek: `Botulinum toxin injections (often called Botox) relax small facial muscles so that lines made by frowning or squinting look softer. A doctor decides after a consultation whether they suit you. The effect is temporary and fades over months. [Cost](/cost/${TOXIN_SLUG}) depends mostly on the areas treated, the doctor and the product prescribed.`,

  shortAnswers: [
    {
      q: "What does it do?",
      a: "It softens lines caused by muscle movement, such as frown lines. It does not change sun damage, sagging skin or lost volume.",
      href: "#surgery",
      linkText: "What it does and does not do",
    },
    {
      q: "How long does it last?",
      a: "The effect is temporary and fades over months. The reviewer will give a general range. Results vary.",
      href: "#recovery",
      linkText: "Onset and duration",
    },
    {
      q: "What will it cost?",
      a: "Cost depends on the areas treated, the doctor and follow-up. There is no per-unit price here, because units differ and a total plan is what matters.",
      href: "#cost",
      linkText: "The cost lines",
    },
    {
      q: "Who should wait?",
      a: "Pregnancy, breastfeeding, some nerve and muscle conditions, an infection at the site and some medicines need a doctor's view first.",
      href: "#risks",
      linkText: "Who should wait",
    },
  ],

  operation: {
    lead: "Botulinum toxin is a prescription medicine. A doctor injects a small amount into chosen muscles with a fine needle. The muscle relaxes, and the skin over it creases less. It acts on movement lines. It does not add volume or tighten skin.",
    body: "Only a registered doctor can prescribe and decide the plan, and the dose is set by the doctor for your face. Other medical uses exist, and they are decided by a doctor and not covered here. If volume loss or loose skin bothers you more than lines, read [botulinum toxin vs fillers](/learn/botulinum-toxin-vs-fillers) and our [anti-aging treatment guide](/anti-aging-treatment). Before you book, read [how to check the product](/learn/check-wrinkle-injection-product).",
    caption: "Areas commonly discussed for movement lines. The doctor decides yours.",
    ask: "Which lines are you treating, what result should I expect, and what is the plan if it is uneven?",
    how: [
      "Consultation: the doctor asks about your health, medicines, pregnancy plans and what bothers you. You are asked to frown, raise your brows and squint so the doctor can see how the muscles move.",
      "Plan and consent: the doctor explains the areas, the risks and what to expect, and asks for your consent. You see the sealed pack and batch label.",
      "Injections: tiny injections are given at several points. Most people describe pinprick discomfort, and it varies.",
      "Short observation: you may be asked to wait a short time, and the doctor explains the first-day advice.",
      "Review: many doctors ask you to return at about two weeks to check the result and decide whether anything needs adjusting. {pending}",
    ],
    whoItSuits: [
      { term: "Who asks", text: "Adults who are bothered by lines between the brows, across the forehead or at the corners of the eyes, and want to talk to a doctor about options." },
      { term: "Expectations", text: "A softer look to movement lines for a time, not a different face. The effect is temporary and results vary. Some people prefer to keep some movement, and the doctor can plan for that." },
      { term: "Age", text: "No set age. The doctor decides after assessing your face. See [what age doctors consider](/learn/age-for-wrinkle-injections)." },
      { term: "Men and women", text: "Both. Muscle strength and brow shape differ, and the plan differs with them. See [wrinkle injections for men](/learn/wrinkle-injections-for-men)." },
    ],
  },

  areas: {
    lead: "These are the areas most often discussed for wrinkles. A doctor decides which, if any, suit your face.",
    body: "Each area is treated for a different line, and the plan differs. Treating several areas together raises the total, and a doctor may suggest treating fewer.",
    rows: [
      { area: "Between the brows", usual: "Frown lines, sometimes called the elevens", depends: "How strongly the muscles pull, and your brow position" },
      { area: "Forehead", usual: "Horizontal lines across the forehead", depends: "Brow height and eyelid position. Over-treating can leave the brow heavy" },
      { area: "Outer corners of the eyes", usual: "Lines from squinting or smiling", depends: "How the lines look at rest, and your smile" },
    ],
    note: "A face diagram will be added to this page. Image slot: no photos of patients, no syringes, no vials or packaging.",
  },

  techniques: {
    lead: "People often compare botulinum toxin with other options for ageing skin. This table lists plain differences, with no ranking.",
    rows: [
      { name: "Botulinum toxin", how: "A medicine injected into muscles that relaxes them", often: "Lines caused by movement, such as frown lines", ask: "Which lines will it soften, and what will it not change?" },
      { name: "A filler", how: "A gel injected under the skin to add volume or smooth a fold", often: "Folds and lost volume", ask: "Which type is used, how long is it expected to last, and what are the rare blood vessel risks?" },
      { name: "Skin boosters", how: "Small injections meant to improve skin hydration and texture", often: "Dull or dry-looking skin, with mixed evidence", ask: "What does the evidence say, and how many sessions?" },
      { name: "Peels and lasers", how: "A solution or a light device acts on the skin surface", often: "Texture and tone, with some days of redness", ask: "What is the downtime, and what is my risk of dark marks?" },
    ],
    note: "See the [anti-aging treatment guide](/anti-aging-treatment) for a longer comparison.",
  },

  extraSections: [
    {
      id: "product",
      heading: "Checking the product and who injects",
      tocLabel: "Check the product",
      lead: "This is a prescription medicine, and the checks below are your right as a patient. A good clinic will welcome them.",
      bullets: [
        "The person who assesses you and injects is a registered doctor. Ask for the registration and check it on the state medical council or National Medical Commission register.",
        "The medicine comes from a licensed supplier in a sealed vial. Ask to see the sealed pack and the batch label before anything is prepared.",
        "You receive a written plan with the areas and the follow-up, and you sign a consent form after the risks are explained.",
        "Nobody pressures you to decide on the day, to add areas, or to pay for a bundle in advance.",
        "You know who to call if something worries you, and what a follow-up visit costs.",
      ],
      note: { label: "A note on wording", text: "We do not name products, give units or promote a price. The dose is set by your doctor." },
    },
  ],

  recovery: {
    lead: "There is little recovery for most people, and the effect takes days to show. This is what the first hours, days and weeks commonly look like, and your doctor sets yours. {pending}",
    body: "Small bumps or redness at the injection sites are common and short-lived. Follow the doctor's advice about touching the area, lying down, exercise and heat on the first day. See [what to do after wrinkle injections](/learn/aftercare-after-wrinkle-injections).",
    highlights: [
      { pre: "within", big: "minutes", text: "Small bumps or redness may appear and then settle" },
      { pre: "after", big: "days", text: "The effect starts to show, per the reviewer" },
      { pre: "over", big: "months", text: "The effect fades, which is why repeat visits happen" },
    ],
    timeline: [
      { when: "First hours", notice: "Small bumps, redness or tenderness at the sites", doThis: "Follow the doctor's advice on touching, rubbing and lying down. Avoid heat and hard exercise if told to." },
      { when: "Day 1", notice: "Possible small bruises", doThis: "Normal activity as the doctor allows. Do not massage the area unless advised." },
      { when: "Day 3 to 7", notice: "The effect begins to show", doThis: "Watch for droopiness or unevenness and note it for the review." },
      { when: "About week 2", notice: "The effect is usually fully visible", doThis: "Review visit. The doctor checks the result and decides whether anything needs adjusting." },
      { when: "Month 2 to 3 and after", notice: "The effect gradually fades", doThis: "Decide with the doctor whether and when to return. There is no need to rush." },
    ],
    grid: {
      cols: ["Day 0", "Day 1", "Day 3", "Wk 2"],
      rows: [
        { label: "Return to work", cells: [{ state: "y", text: "Often" }, { state: "y", text: "Yes" }, { state: "y", text: "Yes" }, { state: "y", text: "Yes" }] },
        { label: "Gym", cells: [{ state: "n", text: "No" }, { state: "m", text: "Ask" }, { state: "y", text: "Yes" }, { state: "y", text: "Yes" }] },
        { label: "Heat, sauna", cells: [{ state: "n", text: "No" }, { state: "n", text: "No" }, { state: "m", text: "Ask" }, { state: "y", text: "Yes" }] },
        { label: "Lying flat", cells: [{ state: "n", text: "Ask" }, { state: "m", text: "Ask" }, { state: "y", text: "Yes" }, { state: "y", text: "Yes" }] },
        { label: "Facial, massage", cells: [{ state: "n", text: "No" }, { state: "n", text: "No" }, { state: "n", text: "No" }, { state: "m", text: "Ask" }] },
      ],
    },
    closing: "Do not assume there is no downtime. Bruising can show for a few days. If you have an event, plan the injections a few weeks ahead, so the effect and any adjustment are done in time.",
  },

  risks: {
    lead: "Every injection carries risk. These are the ones people most often ask about, in plain words, and what to ask. This is not a complete list, and the product leaflet and your doctor will go through yours.",
    rows: [
      { risk: "Bruising and soreness", means: "Common at the injection sites and usually short-lived.", ask: "How long should it last, and what can I do to reduce it?" },
      { risk: "Headache", means: "Some people have a headache in the first days.", ask: "What can I take, and when should I call?" },
      { risk: "An uneven or unwanted result", means: "One side can look different from the other, or the effect can be stronger or weaker than planned.", ask: "How is it adjusted, and is a touch-up in the plan?" },
      { risk: "Drooping eyelid or brow", means: "The medicine can spread to a nearby muscle. It is temporary and settles as the effect wears off.", ask: "How do you lower the chance, and what do you do if it happens?" },
      { risk: "Allergic reaction", means: "Rash, itching or swelling. Rarely it is severe.", ask: "Do I have any allergy that matters, and what is the plan if I react?" },
      { risk: "Spread of the effect", means: "Rarely the effect can spread beyond the area treated, with weakness, trouble swallowing or breathing. It needs urgent care.", ask: "What signs should send me to an emergency department?" },
      { risk: "A product that is not genuine", means: "Counterfeit or diluted medicine is a known risk where checks are skipped.", ask: "Can I see the sealed pack and the batch label before use?" },
    ],
    alert: "Go to an emergency department straight away for difficulty breathing, swallowing or speaking, a spreading rash with swelling of the face or lips, or severe weakness. Tell them you had botulinum toxin. Call your doctor for a drooping eyelid, double vision or pain that keeps getting worse.",
    wait: [
      "You are pregnant, breastfeeding or planning a pregnancy",
      "You have a nerve or muscle condition, or take medicines that affect nerves or muscles (ask the doctor)",
      "You have an infection or skin disease at the injection site",
      "You are allergic to an ingredient or reacted to it before",
      "You have unrealistic expectations, such as changing the shape of your face",
      "You are being pushed to decide on the day",
    ],
    tell: [
      "All medicines, supplements and blood thinners you take",
      "Any nerve or muscle condition, and any past reaction to injections",
      "Pregnancy, breastfeeding or plans to conceive",
      "Previous cosmetic treatments, including fillers and lasers",
      "Allergies to medicines, ingredients or dressings",
    ],
  },

  patientQuestions: [
    { q: "How long do wrinkle injections last?", href: "#recovery", linkText: "Read: onset and duration" },
    { q: "Will my face look stiff?", href: "#areas", linkText: "Read: areas" },
    { q: "How much does it cost, and why no per-unit price?", href: "#cost", linkText: "Read: the cost lines" },
    { q: "What are the side effects?", href: "#risks", linkText: "Read: risks" },
    { q: "How do I check the product and the doctor?", href: "#product", linkText: "Read: the checks" },
    { q: "Is it better than fillers?", href: "#compare", linkText: "Read: other options" },
  ],

  quoteProcess: [
    { title: "You talk to a coordinator", text: "By phone or WhatsApp. Say what bothers you. The coordinator does not name a product or quote a price before you see a doctor." },
    { title: "A doctor assesses your face", text: "The doctor looks at how your face moves, asks about your health and explains the options, including not treating." },
    { title: "You receive a written plan", text: "The areas, the total, the review visit and what a touch-up costs, each on its own line." },
    { title: "You consent and check the product", text: "You sign after the risks are explained, and you see the sealed pack and batch label." },
    { title: "After the visit", text: "Written advice for the first day, a check-in from us the next day, and a review visit at the interval the doctor sets." },
  ],

  quoteChecks: [
    "list the areas treated and the total for the whole plan?",
    "say who assesses and injects, with their registration?",
    "say whether a review visit is included, and what a touch-up costs?",
    "tell you the medicine will be shown to you sealed before use?",
    "state what happens if the result is uneven or you have a problem?",
  ],

  extras: [
    "A review visit, if not included",
    "A touch-up, if the result needs adjusting",
    "Treatment of a complication",
    "A second visit as the effect fades",
    "Other treatments suggested on the day",
    "Aftercare products",
    "Your travel and time off",
  ],

  insurance:
    "Insurance. Use for wrinkles is cosmetic, and most health policies do not pay for it. Ask your insurer in writing before you book, and keep the plan. We do not promise cashless approval.",
  payment:
    "Payment. Pay at the visit, or by card. Terms for instalments depend on the clinic and the lender and are not shown here. Do not prepay for a bundle of visits before you have seen a doctor. {tbc}",

  // TODO-VERIFY: the reviewer opens each source and confirms the URL and the facts used. Only leaflet-level general facts are drawn from them.
  sources: [
    { label: "National Medical Commission: public register of doctors", href: "https://www.nmc.org.in/" },
    { label: "Central Drugs Standard Control Organisation: regulator of medicines in India", href: "https://cdsco.gov.in/" },
  ],

  footnotes: [
    "Medical review is pending. The reviewer, qualification and review date will be shown once a registered dermatologist signs off.",
    "Onset, duration and review timing are general ranges to be confirmed by the reviewer against the product leaflet.",
    "Botulinum toxin is a prescription medicine. This page is general information. It names no product, gives no dose and makes no price promotion.",
    "The wording and the slug of this page are with the founder's lawyer. Insurance and payment wording is general and to be confirmed.",
    "Studies cited here will be read and checked by the reviewer first. None is cited yet.",
  ],
};

// ------------------------------------------------------------------ city pages
// TODO-VERIFY (all four cities): road times, station and airport names, seasonal statements and water statements are
// general and must be checked against a dated public source before any page leaves noindex.

const toxinChecks = (city: string): FacilityData["checks"] => [
  { check: "Registered doctor injects", why: "It is a prescription medicine and the plan is a medical decision", ask: `Who will assess and inject me, and where in ${city} can I check the registration?` },
  { check: "Sealed pack and batch label", why: "Counterfeit or diluted medicine is a known risk", ask: "Can I see the sealed pack and the batch label before it is prepared?" },
  { check: "Written plan and consent", why: "You should know the areas, the total and the risks before you agree", ask: "Can I have the plan and the consent form in writing, before the day?" },
  { check: "Review visit", why: "A review lets the doctor adjust an uneven result", ask: "Is a review at about two weeks included, and what does a touch-up cost?" },
  { check: "Plan for a problem", why: "A complication needs a plan and a number to call", ask: "What do I do if I have a drooping eyelid or breathing trouble, and who do I call?" },
];

const toxinDelhi: CityTreatmentPage = {
  ...cityBase(T, "delhi"),
  seoTitle: "Botulinum Toxin Injections in Delhi: Cost and Risks",
  h1: "Botulinum toxin injections in Delhi",
  metaDescription: "Botulinum toxin (often called Botox) for wrinkles in Delhi: sample cost lines, downtime, risks and how to pick a doctor.",
  intro: "Botulinum toxin injections in Delhi are a short visit with a doctor, after a consultation. The local sample range per area is {tbc} until quotes are collected. It is a prescription medicine, so who assesses you matters more than the clinic address. The effect is temporary and fades over months.",
  includes: { review: "varies", aftercare: "varies" },
  facilities: {
    intro: "No partner facility is confirmed in Delhi yet. These injections are given in dermatology clinics, cosmetic clinics and hospital skin departments, and the checks differ between them. This page will name the type of facility once one is confirmed. Until then, use the questions below.",
    partners: [{ type: "Dermatology or cosmetic clinic in Delhi (to be confirmed)", count: null }],
    accreditation: null,
    checks: toxinChecks("Delhi"),
  },
  travel: {
    intro: "The visit is short, so the trip is the longer part. In Delhi, choose a slot that avoids peak roads and gives you a quiet hour afterwards.",
    airport: "Indira Gandhi International Airport (to be verified)",
    station: "New Delhi, Old Delhi and Hazrat Nizamuddin stations (to be verified against the facility)",
    stayDays: "Same day. No stay needed",
    metro: "The metro works well for the visit. The doctor may ask you to avoid heat and hard exercise on the first day, so go home rather than to the gym. {sample} The nearest station is added once a facility is confirmed.",
    roadTimes: [
      { from: "Noida", time: "50 to 90 min", tip: "A mid-morning slot avoids both peaks" },
      { from: "Ghaziabad", time: "60 to 100 min", tip: "Ask whether the review visit can be a video call" },
      { from: "Faridabad", time: "50 to 90 min", tip: "Plan the review near a day you are in the city anyway" },
      { from: "Gurgaon", time: "50 to 90 min", tip: "Gurgaon has its own clinics, so compare before you travel" },
    ],
    privacyNote: "You do not have to explain why you are at the clinic. Ask that messages name the clinic and time only, and do not name the treatment or the medicine.",
    mapCaption: "Travel into Delhi from nearby towns, no building shown.",
  },
  localContext: [
    { text: "NEEDS REAL DATA: which Delhi facility, if any, will provide the injections, and its type", source: "", asOf: "" },
    { text: "NEEDS REAL DATA: winter and post-Diwali air quality in Delhi (public CPCB records, month and station)", source: "", asOf: "" },
    { text: "NEEDS REAL DATA: metro station and road access to that facility, with a date", source: "", asOf: "" },
  ],
  usefulness: "For readers in Delhi and the nearby NCR towns who want to plan a short visit around work and traffic, and to ask the right questions about who injects and what is used.",
  localCopy: [
    "In Delhi, a mid-morning slot avoids both rush hours and leaves a quiet afternoon.",
    "Winter air is dry and the first day is for rest, so plan the visit around that.",
    "Ask for the review visit in the same part of the city as your work.",
  ],
  localNotes: [
    { heading: "Work and traffic", text: "Pick a mid-morning slot on a weekday. The visit is short, and a quiet afternoon at home suits the first-day advice. Avoid booking before a long drive." },
    { heading: "Noida, Ghaziabad and Faridabad", text: "People come from across the NCR. Ask the clinic whether the review at about two weeks can be a video call with photos, and which problems need you to come back in person." },
    { heading: "Many clinics, one set of checks", text: "Delhi has many clinics that provide these injections. The checks are the same everywhere: a registered doctor, a sealed pack shown to you, a written plan and a review." },
    { heading: "No bundles on the day", text: "A plan should come from an assessment, not from a package price. If you are asked to pay for a bundle on the day, step back and ask for the plan in writing." },
  ],
  sections: [
    {
      heading: "Planning the day around work and roads",
      paragraphs: [
        "The injections take a short time. The day also includes the road, the wait and the observation period. In Delhi, travel time varies widely, so ask for a slot that gives you slack on both sides.",
        "After the visit the doctor may ask you to avoid heat and hard exercise on the first day, and to keep from rubbing the area. A quiet afternoon at home is easier than a meeting or the gym.",
      ],
    },
    {
      heading: "Dry winters, hot summers and the first day",
      paragraphs: [
        "Delhi winters are dry, summers are hot, and air quality is poor for part of the year. We make no claim that any of this changes how the medicine works. The doctor may talk about skin comfort, sun protection and heat on the first day, and the reviewer will confirm the wording for Delhi.",
        "If you are travelling in the first days after the visit, tell the doctor, because long hours in heat or a long flight change the advice.",
      ],
    },
    {
      heading: "Referral and second opinions",
      paragraphs: [
        "Many people start with a family doctor or a dermatologist they already know, and some seek a second opinion on the plan. That is reasonable. Ask for the written plan and the list of areas, and show it to a doctor you trust before you agree.",
        "If you have taken part in other cosmetic treatments in Delhi, bring the details, including fillers and lasers, so the doctor can see what has been done.",
      ],
    },
    {
      heading: "Language and consent",
      paragraphs: [
        "Hindi and English are the working languages, and some clinics also speak Punjabi. Ask for the consent form in the language you read most easily, and ask the doctor to explain the risks aloud. {tbc}",
      ],
    },
    {
      heading: "Timing around events",
      paragraphs: [
        "The effect takes days to show and the review is at about two weeks, so book several weeks before a wedding or a big event. If the result needs adjusting, there is time. Do not add new treatments in the final week.",
      ],
    },
  ],
};

const toxinGurgaon: CityTreatmentPage = {
  ...cityBase(T, "gurgaon"),
  seoTitle: "Botulinum Toxin Injections in Gurgaon: Cost and Risks",
  h1: "Botulinum toxin injections in Gurgaon",
  metaDescription: "Botulinum toxin (often called Botox) for wrinkles in Gurgaon (Gurugram): sample cost lines, downtime, risks and how to pick a doctor.",
  intro: "Botulinum toxin injections in Gurgaon (also written Gurugram) are a short visit with a doctor after a consultation. The local sample range per area is {tbc} until quotes are collected. Most people here plan the visit around office hours, so slot times and the first-day advice matter.",
  includes: { review: "varies", aftercare: "varies" },
  facilities: {
    intro: "A partner facility exists in Gurgaon for other treatments, and whether it provides these injections is to be confirmed. We do not name it. In this city the injections are given in cosmetic clinics, dermatology clinics and hospital skin departments, so ask what kind of place you are in.",
    partners: [{ type: "Dermatology or cosmetic clinic in Gurgaon (to be confirmed)", count: null }],
    accreditation: null,
    checks: toxinChecks("Gurgaon"),
  },
  travel: {
    intro: "In Gurgaon the corridor between home, office and clinic decides how the visit goes. Choose a clinic near the place you already go to every day.",
    airport: "Indira Gandhi International Airport, Delhi (to be verified)",
    station: "HUDA City Centre (Yellow Line) and Sikandarpur (Rapid Metro)",
    stayDays: "Same day. No stay needed",
    metro: "Sikandarpur and HUDA City Centre serve much of the commercial belt. A short cab from the station avoids a walk in the heat and sun. {sample} The distance to a facility is added once one is confirmed.",
    roadTimes: [
      { from: "South Delhi", time: "40 to 70 min", tip: "Avoid the highway rush by choosing a mid-morning slot" },
      { from: "Noida", time: "70 to 110 min", tip: "Ask about video for the review visit" },
      { from: "Faridabad", time: "60 to 100 min", tip: "A weekend slot may be easier than a workday" },
      { from: "Rewari", time: "60 to 90 min", tip: "Combine the visit with other errands" },
    ],
    privacyNote: "Many clients come from nearby offices. You do not need to explain the visit to colleagues. Ask the clinic to keep the treatment name out of messages and reminders.",
    mapCaption: "Travel into Gurgaon from Delhi and nearby towns, no building shown.",
  },
  localContext: [
    { text: "NEEDS REAL DATA: whether the Gurgaon partner facility provides these injections, and its type", source: "", asOf: "" },
    { text: "NEEDS REAL DATA: seasonal air quality in Gurugram (public CPCB records)", source: "", asOf: "" },
    { text: "NEEDS REAL DATA: road times from Delhi, Noida and Faridabad, checked on a map with a date", source: "", asOf: "" },
  ],
  usefulness: "For people in Gurgaon (Gurugram) who plan an injection visit around office hours and commutes, with notes on after-work slots, the first day and the review visit.",
  localCopy: [
    "Many people in Gurgaon plan the visit around an after-work slot.",
    "Plan the first day, because redness or bruising can show at a meeting the next morning.",
    "Ask which problems the clinic can see on a video call and which need you in person.",
  ],
  localNotes: [
    { heading: "Gurgaon or Gurugram", text: "They are the same city. We use Gurgaon here because more people search for it, and the body text also says Gurugram." },
    { heading: "After-work slots", text: "Some clinics keep early or late slots. A visit after work gives you the evening and the night at home. Avoid hard exercise and heat on the same evening unless the doctor says otherwise." },
    { heading: "The morning after", text: "Small bruises can show the next day. If you have a presentation or a meeting, plan the visit so that you are not in front of people on the following morning." },
    { heading: "Cyber City and Golf Course Road", text: "People working in these corridors often want a clinic nearby. Choose by the doctor and the product checks first, and by distance second." },
  ],
  sections: [
    {
      heading: "Fitting a short visit around the office",
      paragraphs: [
        "The injection takes a short time. What takes longer is the consultation, the consent and the wait afterwards. Ask the clinic how long the whole visit takes, and book a slot that lets you go home afterwards rather than back to a desk.",
        "If you need a review visit at about two weeks, book it at the same time as the first, so it does not slip. A review that is missed means a result that nobody has checked.",
      ],
    },
    {
      heading: "Heat, air conditioning and what to tell the doctor",
      paragraphs: [
        "Summers in Gurgaon run from April into September and are hot. Offices are cold and dry. The doctor may advise you to avoid heat and hard exercise on the first day, and sun protection afterwards. We make no claim that climate changes how the medicine works.",
        "If you travel a lot for work, tell the doctor. A long flight soon after the visit is a question for the doctor and not for a general page.",
      ],
    },
    {
      heading: "Water is not a factor here",
      paragraphs: [
        "Groundwater in parts of Gurugram is described as hard or salty. It has no known bearing on this treatment. Wash your face as the doctor advises on the first day, and use your usual routine after that.",
      ],
    },
    {
      heading: "Referral habits and who to ask",
      paragraphs: [
        "People in Gurgaon often ask colleagues and friends for a clinic name, and a name from a colleague is not a check. Ask for the doctor's registration and the plan in writing, and compare at least two places.",
        "A second opinion from a dermatologist you already see is a good step. It costs a consultation and can save a plan you did not need.",
      ],
    },
    {
      heading: "Monsoon and the review visit",
      paragraphs: [
        "Heavy rain can cause long delays on the roads in July and August. Leave extra time for the visit and for the review, and ask the clinic how to reschedule the review without losing the point of it.",
      ],
    },
  ],
};

const toxinLucknow: CityTreatmentPage = {
  ...cityBase(T, "lucknow"),
  seoTitle: "Botulinum Toxin Injections in Lucknow: Cost and Risks",
  h1: "Botulinum toxin injections in Lucknow",
  metaDescription: "Botulinum toxin (often called Botox) for wrinkles in Lucknow: sample cost lines, downtime, risks and how to pick a doctor.",
  intro: "Botulinum toxin injections in Lucknow are a short visit with a doctor after a consultation. The local sample range per area is {tbc} until quotes are collected. Many people come from nearby towns, so a same-day return and a plan for the review visit are worth settling before you book.",
  includes: { review: "varies", aftercare: "varies" },
  facilities: {
    intro: "No partner facility is confirmed in Lucknow yet. These injections are given in dermatology clinics, cosmetic clinics and hospital skin departments. If care ends up in another city, we will say so at the top of this page and not claim a local site.",
    partners: [{ type: "Dermatology or cosmetic clinic in Lucknow (to be confirmed)", count: null }],
    accreditation: null,
    checks: toxinChecks("Lucknow"),
  },
  travel: {
    intro: "Many people come to Lucknow for this visit from a town nearby. The plan is one early trip in, a short wait, and a ride home that does not involve heat or heavy lifting.",
    airport: "Chaudhary Charan Singh International Airport, Lucknow (to be verified)",
    station: "Charbagh station and the Lucknow Metro (to be verified against the facility)",
    stayDays: "Same day for most visits. No stay needed",
    metro: "The Lucknow Metro runs along a north-south line and suits a consultation in the city. On the day of the injections a cab is easier, with a seat that stays upright for the first hours. {sample} Stations near a facility are added once it is confirmed.",
    roadTimes: [
      { from: "Barabanki", time: "40 to 70 min", tip: "Short enough for a same-day return" },
      { from: "Unnao", time: "60 to 100 min", tip: "Book an early slot to avoid afternoon heat" },
      { from: "Sitapur", time: "80 to 120 min", tip: "Ask whether the review can be a video call" },
      { from: "Hardoi", time: "100 to 150 min", tip: "Plan the whole day, and keep the ride home comfortable" },
    ],
    privacyNote: "In a smaller town a neighbour may recognise you at a clinic. A quiet slot or a different waiting area can help, and the clinic should keep the treatment name out of messages.",
    mapCaption: "Travel into Lucknow from nearby districts, no building shown.",
  },
  localContext: [
    { text: "NEEDS REAL DATA: which Lucknow facility, if any, will provide the injections, and its type", source: "", asOf: "" },
    { text: "NEEDS REAL DATA: road times from Barabanki, Unnao, Sitapur and Hardoi, checked on a map with a date", source: "", asOf: "" },
    { text: "NEEDS REAL DATA: Lucknow climate normals for heat, humidity and fog (IMD)", source: "", asOf: "" },
  ],
  usefulness: "For readers in Lucknow and nearby districts who want a short visit with a same-day return, with notes on summer heat on the first day, the review visit and wedding dates.",
  localCopy: [
    "From Barabanki or Unnao the visit can be a same-day return if the ride home is comfortable.",
    "A hot Lucknow summer makes the first-day advice about heat more than a formality.",
    "A video review saves a second long trip to the city.",
  ],
  localNotes: [
    { heading: "Areas people ask about", text: "People often ask about clinics in Gomti Nagar, Hazratganj and Indira Nagar. We name no clinic. Choose by the doctor, the checks on the product and the written plan, and then by distance." },
    { heading: "Same-day return", text: "From Barabanki, Unnao and nearby towns, many people go home the same day. Ask for an early slot, bring someone to travel with you, and plan the ride so you can sit upright and keep out of the afternoon heat." },
    { heading: "Hindi and Hinglish", text: "The consultation and the consent can be in Hindi or Hinglish. Ask the doctor to explain the risks aloud and to write the plan in the language you read most easily. {tbc}" },
    { heading: "Marriage season", text: "Lucknow fills with events through the winter wedding season. Book several weeks before a date, so that the effect and any adjustment are done in time." },
  ],
  sections: [
    {
      heading: "One trip in, one ride home",
      paragraphs: [
        "A visit for injections is short, and for someone from Sitapur or Unnao the trip is the larger part of the day. Ask for an early slot and the whole timing of the visit, including the consultation, consent and observation. Bring someone who can talk to you on the way home.",
        "The review visit at about two weeks is a second trip. Ask whether a video call with photos in daylight can replace it, and which problems still need you in person.",
      ],
    },
    {
      heading: "Heat, dust and the first day",
      paragraphs: [
        "Lucknow summers are hot and dry, the monsoon is humid, and winter mornings can be foggy. The doctor may advise you to avoid heat and hard exercise on the first day. A long ride in a hot vehicle is not helpful, so book a cooler hour or a cab with air conditioning.",
        "We make no claim that climate changes how the medicine works. The reviewer will confirm the first-day advice for hot weather.",
      ],
    },
    {
      heading: "Water and your face wash",
      paragraphs: [
        "Water supply mixes piped water and groundwater, and hardness varies by area. It has no known bearing on this treatment. Wash your face as the doctor advises on the first day.",
      ],
    },
    {
      heading: "Referrals from a local doctor",
      paragraphs: [
        "In smaller towns people often hear of a clinic through a local doctor or a relative who has been to the city. Ask the local doctor whether the plan suits you, and ask the city clinic for the plan in writing. Bring the plan and a list of your medicines to the consultation.",
        "Be careful of prices given by phone or by an agent before you have seen a doctor. A registered doctor assesses you first, and then a plan and a total are given.",
      ],
    },
    {
      heading: "Seasons, festivals and travel",
      paragraphs: [
        "Wedding season, Diwali and Eid make roads and hotels busy. Book early, and keep a gap of several weeks before any event so the result can settle and be reviewed. Winter fog can delay roads and trains, so leave spare time for the trip.",
      ],
    },
  ],
};

const toxinKanpur: CityTreatmentPage = {
  ...cityBase(T, "kanpur"),
  seoTitle: "Botulinum Toxin Injections in Kanpur: Cost and Risks",
  h1: "Botulinum toxin injections in Kanpur",
  metaDescription: "Botulinum toxin (often called Botox) for wrinkles in Kanpur: sample cost lines, downtime, risks and how to pick a doctor.",
  intro: "Botulinum toxin injections in Kanpur follow a consultation with a doctor. The local sample range per area is {tbc} until quotes are collected. No partner facility is confirmed in Kanpur yet, so the first question is whether the visit is in Kanpur or means a trip to Lucknow, and how the review is handled.",
  includes: { review: "varies", aftercare: "varies" },
  facilities: {
    intro: "No partner facility is confirmed in Kanpur, and Lucknow is the nearest other city we cover. If the injections are given in Lucknow, we will say so at the top of this page, with the trip time. Until then, this page shows how to plan the choice and what to check.",
    partners: [{ type: "Dermatology or cosmetic clinic in Kanpur (to be confirmed)", count: null }],
    accreditation: null,
    checks: toxinChecks("Kanpur"),
  },
  travel: {
    intro: "For this treatment the Kanpur question is plain: do you have it in Kanpur, or do you travel to Lucknow, and what happens at the review. Settle that before you book.",
    airport: "Kanpur civil airport and Lucknow airport (service and schedules to be verified)",
    station: "Kanpur Central, and Charbagh in Lucknow (to be verified)",
    stayDays: "Same day for Kanpur visits. A Lucknow visit is a day trip",
    metro: "Kanpur has a metro line that is partly open, and the part open is to be checked against any facility. {sample} On the day of the injections, a cab with an upright seat is easier than a crowded vehicle.",
    roadTimes: [
      { from: "Unnao", time: "30 to 60 min", tip: "Close enough for a same-day visit and review" },
      { from: "Kanpur Dehat", time: "40 to 80 min", tip: "An early slot avoids afternoon heat" },
      { from: "Fatehpur", time: "70 to 110 min", tip: "Ask whether the review can be on video" },
      { from: "Lucknow", time: "100 to 150 min", tip: "The other city we cover, so compare before you travel" },
    ],
    privacyNote: "In a mid-sized city many people know each other. You do not have to explain the visit. A clinic should keep the treatment name out of messages and reminders.",
    mapCaption: "Travel into Kanpur from nearby towns, and the road to Lucknow, no building shown.",
  },
  localContext: [
    { text: "NEEDS REAL DATA: whether any partner facility exists in Kanpur for these injections, and its type", source: "", asOf: "" },
    { text: "NEEDS REAL DATA: Kanpur road time to Lucknow, from a map with a date", source: "", asOf: "" },
    { text: "NEEDS REAL DATA: Kanpur air quality record (public CPCB station data)", source: "", asOf: "" },
  ],
  usefulness: "For readers in Kanpur and nearby towns weighing a local visit against a trip to Lucknow, with notes on the review visit by video, dust questions and seasonal travel.",
  localCopy: [
    "In Kanpur the first question is whether the visit is local or in Lucknow.",
    "A review by video can save a second long trip.",
    "Dust and industrial air are common questions, and we make no claim about them.",
  ],
  localNotes: [
    { heading: "Kanpur or Lucknow", text: "If a facility in Kanpur does not provide these injections, the visit may be in Lucknow. Ask where the consultation, the injections and the review each take place, and which can be local." },
    { heading: "Unnao and Kanpur Dehat", text: "People come from nearby areas for the visit. Plan one early trip and ask for the plan in writing, so that a doctor near your home can read it if you have a question later." },
    { heading: "Dust and industrial air", text: "Kanpur is an industrial city, and people ask whether dust affects skin after injections. We make no claim here. Ask the doctor what to do on the first day and how to clean your face. {pending}" },
    { heading: "Language", text: "Hindi and Hinglish are common in clinics. Ask for the consent and the plan in the language you read most easily, and ask the doctor to explain the risks aloud." },
  ],
  sections: [
    {
      heading: "Do I have to go to Lucknow?",
      paragraphs: [
        "That depends on whether a facility in Kanpur provides this treatment, and none is confirmed yet. If the visit is in Lucknow, the first trip is the consultation and the injections together. A second trip for the review is the one to plan.",
        "Ask whether the review at about two weeks can be a video call with photos taken in daylight, and what the doctor will do if you send photos of a problem. A drooping eyelid or breathing trouble is never a video-call matter, and you should know where to go for urgent care near home.",
      ],
    },
    {
      heading: "Urgent care near home",
      paragraphs: [
        "Serious problems after injections are rare. Because you may live far from the clinic, ask on the day where to go if you have trouble swallowing, speaking or breathing. Write the answer on your phone. Tell the emergency team that you had botulinum toxin.",
      ],
    },
    {
      heading: "Cold winters and hot dusty summers",
      paragraphs: [
        "Kanpur has cold winters and hot summers. The first-day advice about avoiding heat is easy in winter and harder in summer, so book a cooler hour in hot months. We make no claim that climate changes how the medicine works.",
        "Winter fog can slow roads and trains, so leave extra time for the trip and avoid scheduling the injections on a day when you must travel far afterwards.",
      ],
    },
    {
      heading: "Water and your face wash",
      paragraphs: [
        "Water supply in the city mixes the river, piped supply and groundwater. It has no known bearing on this treatment. Wash your face as the doctor advises on the first day.",
      ],
    },
    {
      heading: "Referrals and checking before you pay",
      paragraphs: [
        "People in mid-sized cities often hear of a clinic from a friend. A name from a friend is not a check. Ask for the doctor's registration, the plan in writing, and to see the sealed pack and the batch label. If anyone asks you to pay before you have seen a doctor, stop and ask why.",
      ],
    },
  ],
};

// ------------------------------------------------------------------ cost lines and cost page
// Pending price lines per area: no figures yet, so the template shows the "To be confirmed" chip.
// No per-unit price and no "from" price on purpose.
const toxinCosts: CostLine[] = [
  line(T, 1, "Consultation and face assessment", "May be credited if you go ahead, clinic policy"),
  line(T, 2, "One area, for example frown lines", "Per visit, with the medicine the doctor prescribes"),
  line(T, 3, "Two areas", "Per visit, which two areas"),
  line(T, 4, "Upper face, three areas", "Per visit, which areas"),
  line(T, 5, "Review visit at about two weeks", "Included or charged, ask in writing"),
  line(T, 6, "Repeat visit, as the effect fades", "How often you return, set with the doctor"),
];

export const toxinCostPage: NationalCostPage = {
  seoTitle: "Botulinum Toxin Injection Cost in India: What Changes It",
  metaDescription: "Why prices differ for wrinkle injections: areas treated, doctor, product and follow-up. Sample ranges by area, never a per-unit price.",
  h1: "Botulinum toxin injection cost in India",
  answer: "Prices for wrinkle injections in India vary widely because they depend on how many areas are treated, the doctor's training, the product prescribed and whether follow-up is included. The ranges below are {sample} pending confirmed quotes, each with a date and the number of data points.",
  unit: "area",
  rangeHeading: "Sample lines by area",
  rangeCaption: "Each line is a separate case with its own range. There is no per-unit figure, because units are not comparable between products or doctors.",
  factors: [
    { factor: "Areas treated", why: "Each area needs a different plan, and the total grows with the number of areas." },
    { factor: "Doctor and facility", why: "A dermatologist, a general doctor and the clinic type price the consultation differently." },
    { factor: "The product prescribed", why: "Different medicines are prescribed, and the dose is set by the doctor, so the figure is not comparable between quotes." },
    { factor: "Follow-up and touch-up policy", why: "Some clinics include a review and an adjustment, some charge for each." },
    { factor: "Repeat visits", why: "The effect fades over months, so the yearly cost depends on how often you return." },
    { factor: "City and clinic type", why: "Rents and wages differ between cities, and so do fees." },
  ],
  notIncluded: [
    "A review visit, if not included",
    "A touch-up, if the result needs adjusting",
    "Other treatments suggested on the day",
    "Treatment of a complication",
    "Your travel and time off",
  ],
  compareQuotes: [
    "Ask each clinic for the total for the same plan in writing, with the areas listed.",
    "Do not compare a per-unit figure with a total. Ask what the total covers.",
    "Check who assesses and injects, and ask for the registration.",
    "Ask to see the sealed pack and the batch label before use.",
    "Be careful of any price given before a doctor has seen you, and of any bundle to prepay.",
  ],
  insurance: "Use for wrinkles is cosmetic, and most health policies do not pay for it. Ask your insurer in writing before you book.",
  payment: "Pay at the visit or by card. Instalments depend on the clinic and the lender, and terms are not shown here. {tbc}",
  method: "No figure is shown yet. When quotes arrive, each line will show the source type, the number of data points and the date. A range needs at least three dated points from separate sources before it replaces the pending label. Figures from other websites are not used. If the founder's lawyer decides that ranges for a prescription medicine count as promotion, the range column is removed and the factor table and the quote checklist remain.",
  faqs: [
    { q: "How much do wrinkle injections cost in India?", a: "It depends on the areas treated, the doctor, the product prescribed and follow-up. The ranges on this page are sample data until confirmed. Ask each clinic for the total for the same plan in writing." },
    { q: "Why is there no price per unit?", a: "Units are not comparable between products or doctors, and a low per-unit figure can sit beside a high total. A written total for your plan is what to compare." },
    { q: "Is a follow-up visit included?", a: "Sometimes. Ask whether a review at about two weeks and a touch-up are in the quote, and what each costs if not." },
    { q: "Why do prices differ between clinics?", a: "Doctors, products, areas and follow-up policies differ. Compare the same plan line by line." },
    { q: "Does insurance cover it?", a: "Usually not, because use for wrinkles is cosmetic. Ask your insurer in writing." },
    { q: "What should the quote list?", a: "The areas treated, the total, who assesses and injects, the review visit, the touch-up policy and what happens if you have a problem." },
  ],
  sources: [
    { label: "National Medical Commission: public register of doctors", href: "https://www.nmc.org.in/" },
  ],
};

// ------------------------------------------------------------------ FAQs
const faqs: FaqRow[] = [
  faqRow(T, null, "toxin-same", 1, "Is botulinum toxin the same as Botox?", "Botox is a common name that many people use for botulinum toxin injections. Botulinum toxin is the medicine, and different products exist. This page uses the name of the medicine. A doctor decides which one is prescribed."),
  faqRow(T, null, "toxin-lasts", 2, "How long does it last?", "The effect is temporary and fades over months. The reviewer will give a general range after review. How long it lasts varies between people and between areas, so ask your doctor what to expect for you. See [how long wrinkle injections last](/learn/how-long-wrinkle-injections-last)."),
  faqRow(T, null, "toxin-hurt", 3, "Does it hurt?", "Most people describe pinprick discomfort at each injection. It varies by person and by area. Tell the doctor if it is hard to bear, and ask what can be done for comfort."),
  faqRow(T, null, "toxin-side", 4, "What are the common side effects?", "Small bumps, redness, bruising and headache are the most common, and they are usually short-lived. An uneven result or a drooping eyelid or brow can happen. Rarely, the effect spreads and needs urgent care. See [side effects and what to do](/learn/botulinum-toxin-side-effects)."),
  faqRow(T, null, "toxin-men", 5, "Can men have it?", "Yes, a doctor can plan it for men. Muscle strength and brow shape differ, so the plan differs. See [wrinkle injections for men](/learn/wrinkle-injections-for-men)."),
  faqRow(T, null, "toxin-age", 6, "At what age do doctors consider it?", "There is no set age. A doctor decides after looking at your face and asking what bothers you. Starting early to prevent lines is not something this page advises. See [what age doctors consider](/learn/age-for-wrinkle-injections)."),
  faqRow(T, null, "toxin-frozen", 7, "Will my face look frozen?", "That depends on the plan. Ask for a conservative plan if you want to keep movement. A doctor can treat fewer areas or use a smaller amount, and adjust at the review."),
  faqRow(T, null, "toxin-after", 8, "What should I avoid after the injection?", "Follow your doctor's advice for the first hours and the first day. This often includes not rubbing the area, avoiding heat and hard exercise, and staying upright for a time. See [what to do after wrinkle injections](/learn/aftercare-after-wrinkle-injections)."),
  faqRow(T, null, "toxin-insurance", 9, "Is it covered by insurance?", "Usually not, because use for wrinkles is cosmetic. Check your policy and ask your insurer in writing. We do not promise cashless approval."),
  faqRow(T, null, "toxin-genuine", 10, "How do I check the product is genuine?", "Ask to see the sealed pack and the batch label before it is prepared, and confirm that the doctor who injects is registered. A clinic that is happy to show you is a good sign. See [checking the product](/learn/check-wrinkle-injection-product)."),

  // ---- Delhi
  faqRow(T, "delhi", "toxin-delhi-where", 20, "Which part of Delhi is the facility in?", `That is to be confirmed. No partner facility is confirmed in Delhi yet. If injections are in Gurgaon, the page will say so at the top, and the [Gurgaon page](/${TOXIN_SLUG}-in-gurgaon) has road times.`),
  faqRow(T, "delhi", "toxin-delhi-slot", 21, "What time of day suits a visit in Delhi?", "A mid-morning weekday slot avoids both rush hours and leaves a quiet afternoon for the first-day advice. Avoid booking before a long drive or a hard workout."),
  faqRow(T, "delhi", "toxin-delhi-review", 22, "Can the review visit be a video call from Noida or Ghaziabad?", "Often, for a simple check. Ask which problems need you in person, and where to go for urgent care near home."),
  faqRow(T, "delhi", "toxin-delhi-winter", 23, "Does Delhi's winter air change the aftercare?", "We make no claim. The reviewer will confirm the wording. The usual advice for the first day, such as avoiding heat and rubbing the area, applies in every season."),

  // ---- Gurgaon
  faqRow(T, "gurgaon", "toxin-ggn-reach", 20, "How do I reach the clinic from Golf Course Road or Cyber City?", "That is to be confirmed once a facility is named. The Rapid Metro and Yellow Line serve the area, and a short cab from the station is easy. Ask for a slot outside the evening rush."),
  faqRow(T, "gurgaon", "toxin-ggn-office", 21, "Can I go back to the office after the visit?", "Many people can, but small bumps or redness can show for a few hours and bruising for a few days. Ask the doctor about activity limits, and consider a late slot so you can go home."),
  faqRow(T, "gurgaon", "toxin-ggn-name", 22, "Gurgaon or Gurugram: is it the same place?", "Yes. Both spellings are used for the same city in Haryana. This page uses Gurgaon because more people search for it."),
  faqRow(T, "gurgaon", "toxin-ggn-summer", 23, "How do I manage heat in the first day in a Gurgaon summer?", "Avoid heat and hard exercise if your doctor says so. Plan the visit for a cooler hour, travel in an air-conditioned vehicle and spend the rest of the day indoors."),

  // ---- Lucknow
  faqRow(T, "lucknow", "toxin-lko-sameday", 20, "Can I return to Barabanki or Sitapur the same day?", "Many people from nearby towns can, if the doctor agrees and the ride is comfortable. From farther towns, plan the whole day. Ask for an early slot."),
  faqRow(T, "lucknow", "toxin-lko-where", 21, "Is the injection provided in Lucknow?", "That is to be confirmed. No partner facility is confirmed in Lucknow yet. If it is elsewhere, the page will say so at the top, with the distance."),
  faqRow(T, "lucknow", "toxin-lko-heat", 22, "How do I manage a hot Lucknow day after the visit?", "Follow the doctor's advice on heat for the first day. Choose a cooler hour, use an air-conditioned vehicle and stay indoors for the rest of the day if you can."),
  faqRow(T, "lucknow", "toxin-lko-agent", 23, "A person phoned me with a price before I saw a doctor. Is that normal?", "No. A registered doctor should assess you first, and then a plan and a total are given. Be careful of prices by phone, and of bundles asked in advance."),

  // ---- Kanpur
  faqRow(T, "kanpur", "toxin-knp-lucknow", 20, "Do I need to go to Lucknow?", "That is to be confirmed. No partner facility is confirmed in Kanpur yet, and Lucknow is the nearest other city we cover. If the visit is there, the page will say so, with the trip time."),
  faqRow(T, "kanpur", "toxin-knp-video", 21, "Can the review be by video from Kanpur?", "Often, for a simple check, with photos in daylight. Ask which problems need you in person, and where to go for urgent care near home."),
  faqRow(T, "kanpur", "toxin-knp-urgent", 22, "Where do I go for a problem if I live far from the clinic?", "Ask the doctor on the day, and write the answer on your phone. For trouble breathing, swallowing or speaking, go to the nearest emergency department and say that you had botulinum toxin."),
  faqRow(T, "kanpur", "toxin-knp-fog", 23, "Winter fog makes travel slow. How do I plan the visit and the review?", "Book the earliest slot, allow spare time, and ask whether the review can be moved by a day. Avoid scheduling the injections on a day when you must travel far afterwards."),
];

export const botulinumToxin: SkinHairTopic = {
  treatment: {
    slug: T,
    seo: {
      title: "Botulinum Toxin Injections: Cost, Risks and Downtime",
      description: "Botulinum toxin (often called Botox) relaxes facial muscles to soften frown lines. See cost factors, downtime, risks and how to choose a doctor.",
      cityTitle: "Botulinum Toxin Injections in {city}: Cost and Risks",
    },
    content: toxinContent,
    display: {
      costMode: "options",
      priceLabel: "Usual cost for one area",
      priceLinkText: "The lines by area",
      costHeading: "What the injections cost, by area",
      costCaption: "Each line is a separate case. There is no per-unit price. Sample data / To be confirmed.",
      compareGuideHref: `/cost/${TOXIN_SLUG}`,
      operationHeading: "What the injection does and does not do",
      recoveryHeading: "Downtime and the first day",
      recoveryTocLabel: "Downtime",
      timelineCaption: "What most people notice and do, by time since the injections.",
      risksHeading: "Risks and side effects",
      riskGuideHref: `${HUB}#risks`,
      heroPlate: "none",
      operationPlate: "none",
      labels: {
        areasHeading: "Areas treated for wrinkles",
        areasCaption: "Areas commonly discussed. The doctor decides yours.",
        areasNoPlate: true,
        techniquesHeading: "Other options",
        techniquesCaption: "Plain differences between options people compare. No ranking.",
        tocTechniques: "Other options",
      },
      tocLabels: { surgery: "What it does", choices: "Areas" },
    },
  },
  costUnit: "area",
  includeKeys: toxinIncludeKeys,
  costPage: toxinCostPage,
  costLines: toxinCosts,
  faqs,
  cityPages: [toxinDelhi, toxinGurgaon, toxinLucknow, toxinKanpur],
};
