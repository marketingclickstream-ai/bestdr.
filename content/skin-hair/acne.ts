import type { CityTreatmentPage, CostLine, FaqRow, IncludeKeyDef, NationalCostPage, SkinHairTopic, TreatmentContent } from "../types";
import { SLUGS } from "../slugs";
import { cityBase, faqRow, line } from "./shared";

// Acne treatment: hub, four city pages, cost lines, FAQs and the national cost page.
// Copy written for this site. Medical statements are general and pending a dermatology reviewer.
// No medicine names, doses or brands. No before and after, no outcome claims.

const T = SLUGS.acne;

// Rows of the "what the price includes" table. 7 of them, gate G2 needs 5 answered.
export const acneIncludeKeys: IncludeKeyDef[] = [
  { key: "consultation", label: "First consultation", ask: "Is the first visit charged, and is it credited if you start a plan?" },
  { key: "prescriber", label: "Prescriber is a dermatologist", ask: "Who writes the prescription, and are they registered with a medical council?" },
  { key: "medicines", label: "Creams, gels and tablets", ask: "Are medicines in the quote, or bought separately each month?" },
  { key: "tests", label: "Tests if tablets need checks", ask: "Which blood tests are planned, and who pays for them?" },
  { key: "consumables", label: "Peel or light session supplies", ask: "Is each session priced with its solutions and consumables?" },
  { key: "followups", label: "Follow-up visits", ask: "How many reviews does the plan include, and what does an extra one cost?" },
  { key: "aftercare", label: "Aftercare products", ask: "Which products are advised, and are they in the price?" },
];

// ------------------------------------------------------------------ hub content
// TODO-VERIFY: every timing in this file (6 to 8 weeks to a first change, review intervals, peel flaking days)
// is a general range for the dermatology reviewer to confirm or replace.
export const acneContent: TreatmentContent = {
  dek: "Acne treatment usually means creams, sometimes tablets, and sometimes a procedure such as a peel or a light session, chosen after a doctor looks at your skin. Most plans run for months, and a first change often takes 6 to 8 weeks to show. Results vary and acne can return. The [cost of a course](/cost/acne-treatment) depends on the plan, so ask for each line in writing.",

  shortAnswers: [
    {
      q: "Can a pharmacy cream do the job?",
      a: "For a few mild spots, sometimes. If spots are many, painful, deep or leave marks, a dermatologist can choose stronger options and watch for side effects.",
      href: "#surgery",
      linkText: "What treatment involves",
    },
    {
      q: "How long will it take?",
      a: "Plan for months. A first change often shows at about 6 to 8 weeks, and the plan is reviewed every few weeks.",
      href: "#recovery",
      linkText: "The first three months",
    },
    {
      q: "What will it cost?",
      a: "A consultation, then follow-up visits, medicines and sometimes procedures. The ranges shown are to be confirmed.",
      href: "#cost",
      linkText: "The cost lines",
    },
    {
      q: "Who should I see?",
      a: "A registered dermatologist for anything beyond a few mild spots. Check the registration before the first visit.",
      href: "#choose",
      linkText: "The checks",
    },
  ],

  operation: {
    lead: "Acne starts when pores block and the oil glands under the skin become inflamed. Treatment aims to reduce new spots, calm the ones you have and lower the chance of marks. The doctor looks at the type of spots, how many there are, where they sit and what you have already tried.",
    body: "Your plan may be one cream, a mix of creams, a course of tablets, a procedure, or a combination. Read about [acne grades](/learn/acne-grades-when-to-see-doctor) before the visit, and about the [medicines doctors prescribe](/learn/acne-medicines-doctors-prescribe) to know what to ask. If you are asked about [isotretinoin](/learn/isotretinoin-acne-questions), read that guide first. Some spots that look like acne are caused by yeast, and the plan is different, see [fungal and bacterial acne](/learn/fungal-acne-vs-bacterial-acne). A [hydrafacial](/hydrafacial) is a skin-care session and does not treat acne.",
    caption: "How a plan is built: examine, choose, review, adjust.",
    ask: "Which type and grade is mine, and what do you expect to change in the first 8 weeks?",
    how: [
      "First visit: the doctor examines your skin and asks about creams you have used, medicines, periods and pregnancy plans if they apply, and family history. Photos taken in the clinic stay with the clinic.",
      "Creams and gels: used on the skin every day. Dryness, stinging or peeling are common in the first weeks.",
      "Tablets: some people with moderate or severe acne, or acne that leaves marks, are prescribed tablets. These need a doctor's checks. Never take another person's tablets.",
      "Procedures: a chemical peel, a light session or clearing of blocked pores may be added. Sessions are spaced weeks apart, and the doctor sets the number.",
      "Follow-up: visits every few weeks at first, so the doctor can change the plan. Skipping reviews is a common reason plans stall.",
    ],
    whoItSuits: [
      { term: "Who asks", text: "Teenagers and their parents, adults whose acne started after 25, and women with spots along the jaw. The first question differs for each group, and so does the plan." },
      { term: "Expectations", text: "Acne is managed over time. Treatment can help reduce spots and marks, results vary, and acne can return after a plan ends." },
      { term: "Commitment", text: "Daily use of creams for months, and review visits. If travel makes visits hard, plan that before you start." },
      { term: "Under 18", text: "A parent or guardian takes part in decisions about tablets and procedures. The doctor explains the plan to both." },
    ],
  },

  areas: {
    lead: "Doctors describe acne by grade. Scales differ between doctors, so yours will explain theirs. This table shows the usual idea, not a diagnosis.",
    body: "Only an examination can say which grade you have. Grade changes over time, and the plan changes with it.",
    rows: [
      { area: "Mild", usual: "Blackheads and whiteheads, a few small red spots", depends: "How long it has lasted and whether products are making it worse" },
      { area: "Moderate", usual: "More red spots with pus, on the face and sometimes the back or chest", depends: "Marks left behind, skin type, and whether creams alone have been tried properly" },
      { area: "Severe", usual: "Many large, painful lumps and deep spots, often with marks", depends: "Whether tablets are suitable, pregnancy plans, and checks needed before they start" },
      { area: "Sudden or unusual", usual: "A rapid flare, uniform itchy bumps, or acne after a new medicine or supplement", depends: "The cause. It needs a doctor early, not a stronger cream" },
    ],
    note: "A grade helps a doctor choose a plan. It does not decide the outcome.",
  },

  techniques: {
    lead: "These are the usual options. A doctor may use one or combine several. Medicine names and doses are decided at the visit and are not listed here.",
    rows: [
      { name: "Creams and gels", how: "Applied to the skin, usually daily", often: "Mild to moderate acne, and as the base of most plans", ask: "How do I build up use, and what dryness is normal?" },
      { name: "Antibiotic tablets", how: "Taken by mouth for a limited period, often with a cream", often: "Moderate acne with many inflamed spots", ask: "How long will I take them, and what stops me from staying on them?" },
      { name: "Hormonal approaches", how: "Prescribed by a doctor for some women after assessment", often: "Women whose acne follows a cycle pattern", ask: "Which tests are needed first, and what if I plan a pregnancy?" },
      { name: "Isotretinoin tablets", how: "A prescription course with regular checks", often: "Severe acne, or acne that leaves marks, after a specialist's assessment", ask: "What are the pregnancy rules, blood tests and review dates?" },
      { name: "Chemical peel", how: "A solution applied to the skin in clinic, then washed off", often: "Some people with mild to moderate acne or marks, as an add-on", ask: "How many sessions, how long is flaking, and what is the pigment risk for my skin?" },
      { name: "Light or laser session", how: "A device used on the skin in clinic", often: "Selected cases, as an add-on to a plan", ask: "What is the aim, how many sessions, and what are the burn and pigment risks?" },
      { name: "Clearing blocked pores", how: "A clinician gently removes blackheads and whiteheads", often: "Many blackheads and whiteheads, alongside creams", ask: "Who does it, and how are tools cleaned?" },
    ],
    note: "A procedure is usually an add-on to a plan. It does not replace one. See [peels, light and laser for acne](/learn/acne-peels-light-laser).",
  },

  recovery: {
    lead: "There is no recovery period for a cream. This is what the first three months commonly look like, and your doctor sets yours. {pending}",
    body: "Dryness and peeling in the first weeks do not mean the plan is failing. Some people see a flare before things settle. Tell the doctor if skin burns, swells or breaks out in a rash. See [how long acne treatment takes](/learn/how-long-acne-treatment-takes).",
    highlights: [
      { pre: "about", big: "6 to 8 weeks", text: "Before a first visible change is usual, per the reviewer" },
      { pre: "every", big: "4 to 6 weeks", text: "Typical gap between early reviews, set by the doctor" },
      { pre: "about", big: "3 months", text: "Point where many doctors judge whether the plan is working" },
    ],
    timeline: [
      { when: "Day 0", notice: "Plan written, creams started", doThis: "Start slowly as advised. Use sunscreen if the doctor says so. Do not pick spots." },
      { when: "Week 1 to 2", notice: "Dryness, stinging or peeling from creams", doThis: "Use a gentle moisturiser if advised. Do not add scrubs or extra products." },
      { when: "Week 4", notice: "Some people see a flare before it settles", doThis: "First review. Tell the doctor about irritation, missed doses and new products." },
      { when: "Week 6 to 8", notice: "A first change often becomes visible", doThis: "Keep the routine. Photos at home on the same day each month help the review." },
      { when: "Month 3", notice: "Doctor decides whether to continue, change or add", doThis: "Review visit. Procedures, if planned, are timed around this visit." },
      { when: "Month 6 and after", notice: "Maintenance, or a break from some medicines", doThis: "Ask what to do if spots return, and who to see locally." },
    ],
    grid: {
      cols: ["Wk 1", "Wk 2", "Wk 4", "Wk 8", "Mo 3"],
      rows: [
        { label: "Daily creams", cells: [{ state: "y", text: "Yes" }, { state: "y", text: "Yes" }, { state: "y", text: "Yes" }, { state: "y", text: "Yes" }, { state: "y", text: "Yes" }] },
        { label: "Sun cover", cells: [{ state: "y", text: "Yes" }, { state: "y", text: "Yes" }, { state: "y", text: "Yes" }, { state: "y", text: "Yes" }, { state: "y", text: "Yes" }] },
        { label: "Peel or light", cells: [{ state: "n", text: "No" }, { state: "n", text: "No" }, { state: "m", text: "Ask" }, { state: "m", text: "Ask" }, { state: "m", text: "If planned" }] },
        { label: "Review visit", cells: [{ state: "n", text: "No" }, { state: "n", text: "No" }, { state: "y", text: "Yes" }, { state: "m", text: "Often" }, { state: "y", text: "Yes" }] },
        { label: "Planning a pregnancy", cells: [{ state: "m", text: "Tell doctor" }, { state: "m", text: "Tell doctor" }, { state: "m", text: "Tell doctor" }, { state: "m", text: "Tell doctor" }, { state: "m", text: "Tell doctor" }] },
      ],
    },
    closing: "Tell your doctor at once about swelling of the lips or face, a spreading rash, severe mood change, or burning after a peel. If you cannot reach the doctor, go to the nearest emergency department.",
  },

  risks: {
    lead: "Every treatment has risks. These are the ones people most often ask about, in plain words, with what to ask. This is not a complete list, and your doctor will go through yours.",
    rows: [
      { risk: "Dryness and irritation", means: "Common with creams and tablets in the first weeks. Skin can sting, redden or peel.", ask: "How do I build up use, and when should I stop and call?" },
      { risk: "Sun sensitivity", means: "Some creams and tablets make skin burn more easily, and sun can darken marks.", ask: "Which sun protection do you advise for my skin?" },
      { risk: "A flare in the first weeks", means: "Some people see more spots before improvement.", ask: "How long is a flare expected, and when is it a reason to call?" },
      { risk: "Birth defects with some tablets", means: "Some acne tablets can seriously harm an unborn baby. Pregnancy rules and tests apply.", ask: "What do I need to do about pregnancy before, during and after the course?" },
      { risk: "Mood or liver changes", means: "Some tablets need blood tests and a doctor's attention to mood.", ask: "Which tests, how often, and what signs should I report?" },
      { risk: "Peel burns and colour change", means: "A peel or light session can leave darker or lighter patches, more often in darker skin.", ask: "What is my risk, and can you do a small test area first?" },
      { risk: "Scarring from picking", means: "Picking and squeezing can leave marks that last longer than the spot.", ask: "What can I do instead of picking, and when do marks need treatment?" },
      { risk: "Acne returning", means: "Acne can return after a plan ends, so maintenance matters.", ask: "What is the plan after the course, and when should I come back?" },
    ],
    alert: "Call your doctor straight away for swelling of the face or lips, a spreading rash, blistering, severe stomach pain, yellow skin or eyes, or a low mood that worries you or the people around you. If you cannot reach the doctor, go to the nearest emergency department.",
    wait: [
      "You are pregnant or planning a pregnancy (ask before any tablet or peel)",
      "Acne started suddenly, is very painful or is spreading fast",
      "Acne began after a new medicine or supplement",
      "The skin shows signs of infection: heat, pus that spreads, fever",
      "You took isotretinoin in recent months and a peel or laser is being planned",
    ],
    tell: [
      "Every cream, tablet, supplement and home remedy you use",
      "Pregnancy, breastfeeding or plans to conceive",
      "Previous reactions to medicines or skin products",
      "A tendency to dark marks or thick scars after skin injuries",
      "Low mood, liver or kidney conditions, and family history of acne scars",
    ],
  },

  patientQuestions: [
    { q: "Do I need a doctor, or will a pharmacy cream do?", href: "#surgery", linkText: "Read: what treatment involves" },
    { q: "How many months before I see a change?", href: "#recovery", linkText: "Read: the first three months" },
    { q: "Which grade of acne do I have?", href: "#areas", linkText: "Read: grades" },
    { q: "Are tablets always needed?", href: "#compare", linkText: "Read: the options" },
    { q: "Why did my acne return?", href: "#faq", linkText: "Read: questions" },
    { q: "What will a course cost in total?", href: "#cost", linkText: "Read: the cost lines" },
  ],

  quoteProcess: [
    { title: "You talk to a coordinator", text: "By phone or WhatsApp, in the language you prefer. Say how long the acne has lasted and what you have tried. No pressure to book." },
    { title: "A dermatologist examines your skin", text: "The plan is made in person after looking at your skin, not from a photo or a phone call." },
    { title: "You receive a written plan", text: "Visits, medicines, procedures and expected months, each on its own line." },
    { title: "You start slowly", text: "The first weeks are for building up creams and watching for irritation." },
    { title: "You return for reviews", text: "A coordinator check-in after the first week, then reviews at the interval the doctor sets." },
  ],

  quoteChecks: [
    "name the doctor who prescribes and examines you?",
    "list the consultation and each follow-up visit separately?",
    "say which medicines are included and which you buy yourself?",
    "list any blood tests that tablets need?",
    "price each peel or light session, with its number of sessions?",
  ],

  extras: [
    "Follow-up visits beyond those in the plan",
    "Creams and gels each month",
    "Tablets, if prescribed",
    "Blood tests if tablets need monitoring",
    "Peels, light sessions and pore clearing",
    "Sunscreen and moisturiser",
    "Treatment of a reaction",
    "Travel and time off for repeat visits",
  ],

  insurance:
    "Insurance. Acne treatment is usually treated as cosmetic or routine skin care, and many policies do not pay for it. Some policies may consider severe acne when a doctor records a medical need. Ask your insurer in writing before you start and keep the plan.",
  payment:
    "Payment. Pay per visit or per procedure session. Instalment plans through a lender may exist, but terms depend on the clinic and the lender and are not shown here. {tbc}",

  // TODO-VERIFY: the reviewer opens each source and confirms the URL and the facts used. Only general facts are taken from them.
  sources: [
    { label: "National Medical Commission: public register of doctors", href: "https://www.nmc.org.in/" },
    { label: "American Academy of Dermatology: acne overview for patients", href: "https://www.aad.org/public/diseases/acne" },
    { label: "NHS: acne overview", href: "https://www.nhs.uk/conditions/acne/" },
  ],

  footnotes: [
    "Medical review is pending. The reviewer, qualification and review date will be shown once a registered dermatologist signs off.",
    "Timings such as 6 to 8 weeks and the review gaps are general ranges to be confirmed or replaced by the reviewer.",
    "Prescription medicines are named by class only here. Doses and brands are for the treating doctor.",
    "Insurance and payment wording is general and to be confirmed. Your policy document decides.",
    "Studies cited here will be read and checked by the reviewer first. None is cited yet.",
  ],
};

// ------------------------------------------------------------------ city pages
// TODO-VERIFY (all four cities): road times, station and airport names, seasonal air-quality statements and
// water statements below are general and must be checked against a dated public source before any page leaves noindex.

const pharmacyAndGp = "A chemist can sell a cream, but only a doctor can prescribe tablets.";

const acneDelhi: CityTreatmentPage = {
  ...cityBase(T, "delhi"),
  seoTitle: "Acne Treatment in Delhi: Cost, Timeline, Risks",
  h1: "Acne treatment in Delhi",
  metaDescription: "Acne treatment in Delhi: what a course costs, how many visits, side effects, and travel and follow-up planning from nearby towns.",
  intro: "Acne treatment in Delhi is a course of visits over months, not one appointment. Expect a first consultation and then reviews every few weeks. The local price range is {tbc} until quotes are collected. In Delhi, traffic more than distance decides how easy those visits are.",
  includes: { followups: "varies", aftercare: "varies" },
  facilities: {
    intro: "No partner facility is confirmed in Delhi yet. Acne care is usually a dermatology clinic or a hospital outpatient department, and this page will say which once it is known. Until then, run the checks below on any place you are given.",
    partners: [{ type: "Dermatology clinic or hospital outpatient department in Delhi (to be confirmed)", count: null }],
    accreditation: null,
    checks: [
      { check: "Doctor registration", why: "Acne tablets and procedures should be directed by a registered dermatologist", ask: "Which council is the doctor registered with, and can I check it on the public register?" },
      { check: "Examination before any plan", why: "A plan made from a photo misses things a doctor sees in person", ask: "Will the doctor examine my skin at the first visit?" },
      { check: "Written plan with visits", why: "Acne is a course, so the number of visits matters", ask: "How many reviews are in the quote, and what is an extra one?" },
      { check: "Who does the procedure", why: "Peels and light sessions need training and clean tools", ask: "Who performs it, and how are tools and tips cleaned?" },
      { check: "Pregnancy and tablet rules", why: "Some tablets need tests and an agreed pregnancy plan", ask: "What do you need from me before tablets, and how often are checks?" },
    ],
  },
  travel: {
    intro: "Acne follow-ups are short and frequent, so a clinic near your office or a metro line matters more than anything else. Ask for a mid-morning or early-afternoon slot.",
    airport: "Indira Gandhi International Airport (to be verified)",
    station: "New Delhi, Old Delhi and Hazrat Nizamuddin stations (to be verified against the facility)",
    stayDays: "Same day. No stay for consultations and reviews",
    metro: "Most reviews are easy by metro. After a peel, skin can be red and sensitive to sun and dust, so a cab or a cover-up helps. {sample} The nearest station is added once a facility is confirmed.",
    roadTimes: [
      { from: "Noida", time: "50 to 90 min", tip: "Book the review before the evening peak" },
      { from: "Ghaziabad", time: "60 to 100 min", tip: "Ask whether some reviews can be a video call with photos" },
      { from: "Faridabad", time: "50 to 90 min", tip: "Keep a fixed weekday slot so the visit becomes routine" },
      { from: "Gurgaon", time: "50 to 90 min", tip: "Leave before the morning peak or after 11" },
    ],
    privacyNote: "Photos of your skin are health data. Ask where clinic photos are stored and who can see them. No building name is printed on messages we send.",
    mapCaption: "Travel into Delhi from nearby towns, no building shown.",
  },
  localContext: [
    { text: "NEEDS REAL DATA: which Delhi facility, if any, will provide acne care", source: "", asOf: "" },
    { text: "NEEDS REAL DATA: winter and post-Diwali air quality in Delhi (public CPCB records, month and station)", source: "", asOf: "" },
    { text: "NEEDS REAL DATA: tap water quality by area of Delhi (public water board reports)", source: "", asOf: "" },
  ],
  usefulness: "For readers who live in Delhi or the nearby NCR towns and plan months of follow-ups around traffic, winter air and wedding-season dates. It gives local planning points, not a clinic recommendation.",
  localCopy: [
    "In Delhi, traffic more than distance decides how easy review visits are.",
    "Wedding season fills the winter months, so start a plan well before an event.",
    "Ask whether clinic photos of your skin stay with the clinic.",
  ],
  localNotes: [
    { heading: "Choosing a slot", text: "Review visits are short. Mid-morning and early afternoon on weekdays are the quietest hours on Delhi roads, and a fixed weekly or fortnightly slot is easier to keep than a different time every visit." },
    { heading: "Bring your history", text: "Many people begin with a chemist or a family doctor before seeing a dermatologist. Bring the names of creams you have used and for how long. " + pharmacyAndGp },
    { heading: "Parents of teenagers", text: "A parent usually comes to the first visit. Ask the doctor to explain the plan to the teenager and the parent together, and to write the visit dates down." },
    { heading: "A written plan for a local doctor", text: "Ask for a one-page plan that a doctor in Noida, Faridabad or Ghaziabad could follow if a review is missed. The coordinator can check what a local doctor may change and what needs your dermatologist." },
  ],
  sections: [
    {
      heading: "How a course fits into a Delhi week",
      paragraphs: [
        "A plan for acne asks for a visit every few weeks for months. That is the real commitment, more than the price of any one visit. In Delhi the time a visit takes is set by the road, so choose a clinic by how easily you can reach it on a regular working day.",
        "Ask at the first visit which reviews need you in person and which could be a short video call with photos. Skin is hard to judge on a screen, so the doctor may still want to see it at certain points, especially when tablets or a peel are involved.",
      ],
    },
    {
      heading: "Winter air, dust and your skin",
      paragraphs: [
        "Air quality in Delhi is at its worst in the weeks after Diwali and through much of winter, and winter air is also dry. Many people ask whether pollution causes their acne. We do not claim that it does, and no page can say so for one person. A dermatologist may talk about gentle cleansing, how dry air interacts with acne creams, and sun protection in summer.",
        "Creams that dry the skin can sting more in winter. Ask which moisturiser suits your plan and whether the routine should change between seasons. Report burning or swelling early.",
      ],
    },
    {
      heading: "Water, washing and what not to add",
      paragraphs: [
        "Tap water in parts of Delhi is described as hard, and some people feel their skin gets tight after washing. There is no basis here to blame water for acne. If your skin feels dry after washing, mention it. The doctor may suggest a different cleanser, and that is better than adding scrubs or extra products on your own.",
      ],
    },
    {
      heading: "Language and who to ask first",
      paragraphs: [
        "Consultations in Hindi and English are normal in Delhi, and some clinics also speak Punjabi. Ask for the written plan in the language you read most easily. {tbc}",
        "A family doctor can refer you and send notes about earlier treatment. That helps the dermatologist see what has been tried. If you were prescribed tablets before, tell the doctor how long you took them and why you stopped.",
      ],
    },
    {
      heading: "Timing around exams and weddings",
      paragraphs: [
        "Wedding season runs through the winter months, and board exams fall in early spring. Both bring stress and a wish for quick change. Start a plan at least two to three months before an event, and avoid starting a peel in the last weeks, since early weeks can bring dryness or a flare. Ask the doctor what is realistic for your date.",
      ],
    },
  ],
};

const acneGurgaon: CityTreatmentPage = {
  ...cityBase(T, "gurgaon"),
  seoTitle: "Acne Treatment in Gurgaon: Cost, Timeline, Risks",
  h1: "Acne treatment in Gurgaon",
  metaDescription: "Acne treatment in Gurgaon (Gurugram): course cost, visits, side effects, and how to plan follow-ups. Reviewed by a registered doctor.",
  intro: "Acne treatment in Gurgaon (also written Gurugram) means a consultation and then repeat visits for months. The local price range is {tbc} until quotes are collected. Many people fit visits around office hours, so ask about early or late slots and whether some reviews can be by video.",
  includes: { followups: "varies", aftercare: "varies" },
  facilities: {
    intro: "A partner facility exists in Gurgaon for other treatments, and whether it runs dermatology is to be confirmed. We do not name it. Acne care here would be a dermatology clinic or an outpatient department, and the checks below apply to either.",
    partners: [{ type: "Dermatology clinic or hospital outpatient department in Gurgaon (to be confirmed)", count: null }],
    accreditation: null,
    checks: [
      { check: "Doctor registration", why: "Acne tablets and procedures should be directed by a registered dermatologist", ask: "Which council is the doctor registered with, and where can I check it?" },
      { check: "Evening or early slots", why: "Reviews recur, so slot times decide whether you keep them", ask: "Which times are available for follow-ups, and can they be fixed?" },
      { check: "Written plan with visits", why: "Acne is a course, so the number of visits matters", ask: "How many reviews are in the quote, and what is an extra one?" },
      { check: "Who does the procedure", why: "Peels and light sessions need training and clean tools", ask: "Who performs it, and how are tools cleaned?" },
      { check: "Pregnancy and tablet rules", why: "Some tablets need tests and an agreed pregnancy plan", ask: "What do you need from me before tablets, and how often are checks?" },
    ],
  },
  travel: {
    intro: "Gurgaon visits are usually squeezed between work and the commute, so the useful question is how close the clinic is to your office or home and at what hour you can go.",
    airport: "Indira Gandhi International Airport, Delhi (to be verified)",
    station: "HUDA City Centre (Yellow Line) and Sikandarpur (Rapid Metro)",
    stayDays: "Same day. No stay for consultations and reviews",
    metro: "Sikandarpur and HUDA City Centre stations serve much of the commercial belt, and many people walk or take a short cab from there. {sample} Station distance to a facility is added once one is confirmed.",
    roadTimes: [
      { from: "South Delhi", time: "40 to 70 min", tip: "Pick a slot before the evening rush on the highway" },
      { from: "Noida", time: "70 to 110 min", tip: "Ask whether video reviews are possible between in-person visits" },
      { from: "Faridabad", time: "60 to 100 min", tip: "A fixed weekend or early slot is easier to keep" },
      { from: "Rewari", time: "60 to 90 min", tip: "Combine the visit with other work in the city" },
    ],
    privacyNote: "Many people here work in offices where colleagues notice time off. You do not have to explain a visit to anyone. Ask the clinic not to print the treatment name on any message it sends.",
    mapCaption: "Travel into Gurgaon from Delhi and nearby towns, no building shown.",
  },
  localContext: [
    { text: "NEEDS REAL DATA: whether the Gurgaon partner facility runs a dermatology service, and its type", source: "", asOf: "" },
    { text: "NEEDS REAL DATA: groundwater quality for Gurugram (Central Ground Water Board report, year)", source: "", asOf: "" },
    { text: "NEEDS REAL DATA: seasonal air quality in Gurugram (public CPCB records)", source: "", asOf: "" },
  ],
  usefulness: "For people in Gurgaon (Gurugram) and the NCR who commute daily and need an acne plan that survives a work schedule, with notes on slots, offices and monsoon travel.",
  localCopy: [
    "Many people in Gurgaon fit acne reviews around office hours and a long commute.",
    "Ask which follow-ups can be a video call and which need an in-person look.",
    "Monsoon waterlogging can turn a short drive into a long one, so book reviews with spare time.",
  ],
  localNotes: [
    { heading: "Gurgaon or Gurugram", text: "They are the same city. We use Gurgaon here because more people search for it, and the body text also says Gurugram. Either spelling works when you ask a clinic." },
    { heading: "Slots around work", text: "Ask which weekdays and hours are held for follow-ups. A short review before or after work is easier to keep than one in the middle of the day. Say so before you start, not after you have missed two." },
    { heading: "Air-conditioned offices", text: "Long hours in an air-conditioned office can leave skin dry, and acne creams add to that. Mention it at the review, because the doctor may adjust how often you use the cream or suggest a moisturiser." },
    { heading: "Coming from Delhi or beyond", text: "People travel here from South Delhi, Noida, Faridabad and Rewari. Decide at the start who sees you between visits if you live far from the clinic, and keep the one-page plan on your phone." },
  ],
  sections: [
    {
      heading: "Plans that survive a work schedule",
      paragraphs: [
        "A plan for acne asks for steady use of creams and a visit every few weeks. In Gurgaon the limit is rarely interest, it is time. Many people begin with enthusiasm and miss the third review. Ask at the start how long the early visits take and whether the doctor can keep slots free before or after normal hours.",
        "If your plan includes tablets, the doctor may ask for blood tests before and during the course. Ask whether those can be done at a lab near your office and sent to the clinic, so one visit does not turn into three.",
      ],
    },
    {
      heading: "Heat, sweat and the long summer",
      paragraphs: [
        "Summers in Gurgaon run from April into September and are hot and sweaty. Heat and sun can darken acne marks, and some medicines make skin burn more easily. Ask your doctor which sun protection suits you and how to adjust in the hot months.",
        "Peels and light sessions are often planned for cooler months because redness and flaking fit poorly with strong sun. The doctor decides that for your skin type. Do not book a procedure just before a trip.",
      ],
    },
    {
      heading: "Water and what the tap does to skin",
      paragraphs: [
        "Groundwater in parts of Gurugram is reported to be hard or salty, and many homes use filters. We do not claim that this causes acne. If your skin feels tight and flaky after washing, tell the doctor, who can suggest a gentler wash. Avoid adding scrubs.",
      ],
    },
    {
      heading: "Language and referral habits",
      paragraphs: [
        "Hindi and English are the working languages of most clinics here, and the first call can be in either. Some patients arrive after a family doctor or a chemist suggested a skin specialist. Bring any note from them, and a list of what you have used.",
        "Ask the clinic for your plan in writing, with the dates of your next two reviews, and keep them in your phone calendar.",
      ],
    },
    {
      heading: "Monsoon and travel",
      paragraphs: [
        "Heavy rain can cause waterlogging on roads here and long delays. Leave extra time in July and August, and ask whether a short missed review can move by a day. A review delayed by a week rarely matters, but a skipped course can.",
      ],
    },
  ],
};

const acneLucknow: CityTreatmentPage = {
  ...cityBase(T, "lucknow"),
  seoTitle: "Acne Treatment in Lucknow: Cost, Timeline, Risks",
  h1: "Acne treatment in Lucknow",
  metaDescription: "Acne treatment in Lucknow: what a course costs, how often you return, side effects, and travel from Barabanki, Unnao and Sitapur.",
  intro: "Acne treatment in Lucknow means a first consultation and then reviews every few weeks for months. The local price range is {tbc} until quotes are collected. If you live in a nearby town, plan the visits and who sees you between them before you start.",
  includes: { followups: "varies", aftercare: "varies" },
  facilities: {
    intro: "No partner facility is confirmed in Lucknow yet. Acne care here would be a dermatology clinic or a hospital outpatient department. If care ends up in another city we will say so at the top of this page and not claim a local site.",
    partners: [{ type: "Dermatology clinic or hospital outpatient department in Lucknow (to be confirmed)", count: null }],
    accreditation: null,
    checks: [
      { check: "Doctor registration", why: "Acne tablets and procedures should be directed by a registered dermatologist", ask: "Which council is the doctor registered with, and where can I check it?" },
      { check: "Plan a local doctor can follow", why: "Patients from small towns cannot return every month", ask: "Can the plan be written so a doctor near my home can follow it?" },
      { check: "Written plan with visits", why: "Acne is a course, so the number of visits matters", ask: "How many reviews are in the quote, and what is an extra one?" },
      { check: "Who does the procedure", why: "Peels and light sessions need training and clean tools", ask: "Who performs it, and how are tools cleaned?" },
      { check: "Pregnancy and tablet rules", why: "Some tablets need tests and an agreed pregnancy plan", ask: "What do you need from me before tablets, and how often are checks?" },
    ],
  },
  travel: {
    intro: "Many people who ask about acne treatment in Lucknow live in a nearby district and come in by road or train. The plan runs more smoothly when each trip has a purpose and the gaps between trips are covered locally.",
    airport: "Chaudhary Charan Singh International Airport, Lucknow (to be verified)",
    station: "Charbagh station and the Lucknow Metro (to be verified against the facility)",
    stayDays: "Same day for most visits. No stay for consultations and reviews",
    metro: "The Lucknow Metro runs along a north-south line and is useful for a consultation in the city. After a peel, a cab with the window up keeps dust and sun off the skin. {sample} Station names near a facility are added once it is confirmed.",
    roadTimes: [
      { from: "Barabanki", time: "40 to 70 min", tip: "Short enough for a same-day review" },
      { from: "Unnao", time: "60 to 100 min", tip: "Book the early review slot to avoid afternoon heat" },
      { from: "Sitapur", time: "80 to 120 min", tip: "Ask which reviews can be done by video or locally" },
      { from: "Hardoi", time: "100 to 150 min", tip: "Combine the visit with other errands in the city" },
    ],
    privacyNote: "In smaller towns a neighbour may recognise you at a clinic. A quiet slot or a different waiting area can help, and you can ask the clinic not to name the treatment on messages.",
    mapCaption: "Travel into Lucknow from nearby districts, no building shown.",
  },
  localContext: [
    { text: "NEEDS REAL DATA: which Lucknow facility, if any, will provide acne care", source: "", asOf: "" },
    { text: "NEEDS REAL DATA: road times from Barabanki, Unnao, Sitapur and Hardoi, checked on a map with a date", source: "", asOf: "" },
    { text: "NEEDS REAL DATA: Lucknow climate normals for heat, humidity and fog (IMD)", source: "", asOf: "" },
  ],
  usefulness: "For readers in Lucknow and the surrounding districts who must plan repeated trips for acne care, with notes on follow-up by road, summer heat, winter fog and who can review between visits.",
  localCopy: [
    "From a district town, the question is who sees your skin between the Lucknow visits.",
    "Summer in Lucknow is hot and dry, and the monsoon is humid, and both affect how skin feels under creams.",
    "A written plan that a local doctor can follow keeps a course going when a trip is missed.",
  ],
  localNotes: [
    { heading: "Who checks you between visits", text: "Ask the dermatologist which changes a local doctor may make and which need a call to the clinic. Write down the clinic's number and the dates of your next two reviews before you leave." },
    { heading: "Coming from a district town", text: "A review needs one early trip in and one ride home. Barabanki can be a same-day visit. From Sitapur or Hardoi, plan the whole day and bring water and a cap or umbrella, since skin on some creams burns more easily in sun." },
    { heading: "Hindi and Awadhi speakers", text: "The consultation can be in Hindi or Hinglish. If words in a leaflet are hard, ask the clinic to explain them aloud and to write the plan in a language you read easily. {tbc}" },
    { heading: "Marriages and festivals", text: "Roads and hotels fill during wedding season and around Diwali and Eid. Book reviews early in those weeks, and avoid starting a peel just before a family event." },
  ],
  sections: [
    {
      heading: "Planning visits from outside the city",
      paragraphs: [
        "A course of acne treatment is a string of short visits, and for a patient from Unnao or Sitapur each visit is most of a day. Before you start, work out how many trips are realistic and tell the doctor. A plan built around four visits can differ from a plan built around twelve.",
        "Ask whether early reviews can be by video, with photos taken in daylight, and whether blood tests, if needed, can be done at a lab near home and sent on. The doctor will say what can and cannot be done remotely.",
      ],
    },
    {
      heading: "Hot dry summers, humid monsoon, foggy winters",
      paragraphs: [
        "Lucknow summers are hot and dry, the monsoon is humid, and winter mornings can be foggy. Heat and sweat make some creams feel heavy. Dry months make others sting. Ask whether to change your routine in May and June and what to do in the humid weeks.",
        "Strong sun can darken marks left by acne and make some medicines sting more. The doctor will tell you what protection fits your plan.",
      ],
    },
    {
      heading: "Water from the Gomti and the tap",
      paragraphs: [
        "Households here use a mix of piped supply and groundwater, and hardness varies by area. We do not claim that water causes acne. If skin feels tight after washing, mention it at the next review and let the doctor choose the cleanser.",
      ],
    },
    {
      heading: "Referral habits and being heard",
      paragraphs: [
        "In smaller towns many people start with a local doctor or a medical shop and arrive in Lucknow after months of trying creams. That history helps. Bring the packets or photographs of the labels, and tell the doctor how long you used each.",
        "If you are told you need tablets, ask for the plan in writing, including the tests and the dates of review. Do not buy tablets without a prescription or share them with family.",
      ],
    },
    {
      heading: "Seasonal timing",
      paragraphs: [
        "Peels and light sessions create redness and flaking that fit badly with strong summer sun. Doctors often plan them for cooler months, and your doctor will say if that applies to you. Start any plan well before a wedding, and tell the doctor the date.",
      ],
    },
  ],
};

const acneKanpur: CityTreatmentPage = {
  ...cityBase(T, "kanpur"),
  seoTitle: "Acne Treatment in Kanpur: Cost, Timeline, Risks",
  h1: "Acne treatment in Kanpur",
  metaDescription: "Acne treatment in Kanpur: course cost, number of visits, side effects, and follow-up planning for patients from Unnao and nearby towns.",
  intro: "Acne treatment in Kanpur is a course of visits over months. The local price range is {tbc} until quotes are collected. No partner facility is confirmed in Kanpur yet, so this page also covers the choice between Kanpur and Lucknow and what that means for repeat visits.",
  includes: { followups: "varies", aftercare: "varies" },
  facilities: {
    intro: "No partner facility is confirmed in Kanpur, and Lucknow is the nearest other city we cover. If care is in Lucknow we will say so at the top of this page and give the trip time. Until then this page shows how a plan is made and what to check.",
    partners: [{ type: "Dermatology clinic or hospital outpatient department in Kanpur (to be confirmed)", count: null }],
    accreditation: null,
    checks: [
      { check: "Doctor registration", why: "Acne tablets and procedures should be directed by a registered dermatologist", ask: "Which council is the doctor registered with, and where can I check it?" },
      { check: "Where reviews happen", why: "A review in Lucknow means a longer trip than one in Kanpur", ask: "Can the early reviews be in Kanpur and only the procedures elsewhere?" },
      { check: "Written plan with visits", why: "Acne is a course, so the number of visits matters", ask: "How many reviews are in the quote, and what is an extra one?" },
      { check: "Who does the procedure", why: "Peels and light sessions need training and clean tools", ask: "Who performs it, and how are tools cleaned?" },
      { check: "Pregnancy and tablet rules", why: "Some tablets need tests and an agreed pregnancy plan", ask: "What do you need from me before tablets, and how often are checks?" },
    ],
  },
  travel: {
    intro: "For acne, the Kanpur question is simple: can most reviews be in Kanpur, and which, if any, need a trip to Lucknow. Settle that before you start.",
    airport: "Kanpur civil airport and Lucknow airport (service and schedules to be verified)",
    station: "Kanpur Central, and Charbagh in Lucknow (to be verified)",
    stayDays: "Same day for Kanpur visits. A Lucknow visit is a day trip",
    metro: "Kanpur has a metro line that is partly open, and the part open and the route are to be checked against any facility. {sample} After a peel, a cab is easier on the skin than a crowded vehicle.",
    roadTimes: [
      { from: "Unnao", time: "30 to 60 min", tip: "Close enough for a same-day review" },
      { from: "Kanpur Dehat", time: "40 to 80 min", tip: "An early slot avoids afternoon heat" },
      { from: "Fatehpur", time: "70 to 110 min", tip: "Ask for a longer gap between reviews if the doctor agrees" },
      { from: "Lucknow", time: "100 to 150 min", tip: "The other city we cover. Compare the trip before you book" },
    ],
    privacyNote: "In a mid-sized city many people know each other. A quiet slot and discreet messages are reasonable requests, and the clinic should not print the treatment on any message.",
    mapCaption: "Travel into Kanpur from nearby towns, and the road to Lucknow, no building shown.",
  },
  localContext: [
    { text: "NEEDS REAL DATA: whether any partner facility exists in Kanpur for dermatology", source: "", asOf: "" },
    { text: "NEEDS REAL DATA: Kanpur road time to Lucknow, from a map with a date", source: "", asOf: "" },
    { text: "NEEDS REAL DATA: Kanpur air quality record (public CPCB station data) and tap water quality", source: "", asOf: "" },
  ],
  usefulness: "For readers in Kanpur and nearby towns weighing whether to treat acne locally or travel to Lucknow, with notes on follow-up trips, industrial dust questions and cold winters.",
  localCopy: [
    "The first question in Kanpur is whether follow-ups happen in Kanpur or need a trip to Lucknow.",
    "Kanpur is an industrial city and people ask about dust. No claim is made that it causes acne.",
    "A dermatologist in another city can write a plan a Kanpur doctor can follow.",
  ],
  localNotes: [
    { heading: "Kanpur or Lucknow", text: "If the first visit is in Lucknow, ask whether later reviews can be in Kanpur, with the plan shared by letter or phone. Many acne plans need the dermatologist's eye only at a few points." },
    { heading: "Dust and industrial air", text: "Kanpur is known as an industrial city, and people ask whether dust affects their skin. Whether it matters for your acne is a question for the reviewing dermatologist. We make no claim here. {pending}" },
    { heading: "Winter cold and dry months", text: "Winters here are cold and dry, which can make acne creams harsher. Say so at the review so the doctor can adjust the routine, and ask about a moisturiser." },
    { heading: "Language", text: "Hindi and Hinglish are common in clinics. Ask for the written plan in the language you read most easily, and for the names of medicines spelled out in a way you can show a local chemist." },
  ],
  sections: [
    {
      heading: "Do I have to go to Lucknow?",
      paragraphs: [
        "That depends on whether a facility in Kanpur provides acne care, and none is confirmed yet. If a plan is made in Lucknow, the useful question is how often you must return. A good plan uses the specialist where the specialist is needed and a local doctor for simple reviews.",
        "Ask how many visits are for procedures, such as peels, and how many are simple checks. Peels need to be done where the equipment and trained staff are. Cream reviews often can be shared with a Kanpur doctor if the plan is written down.",
      ],
    },
    {
      heading: "Planning the gaps between visits",
      paragraphs: [
        "A course is only as good as the weeks between visits. Decide before the first appointment who you will see if the skin burns, a spot grows or a rash appears. Write the name of that local doctor on the plan.",
        "Keep a note of what you apply each day, and take photographs at the same time of day in the same light once a month. Both help a doctor who is not the one who wrote the plan.",
      ],
    },
    {
      heading: "Cold winters and hot, dusty summers",
      paragraphs: [
        "Kanpur has cold winters and hot summers. Cold air dries skin and acne creams can sting more, while summer heat and dust bring sweat and a wish to wash often. Washing too often can irritate acne-prone skin, so ask the doctor how often is right for you.",
      ],
    },
    {
      heading: "Water and washing",
      paragraphs: [
        "Water supply in the city mixes the river, piped supply and groundwater, and hardness differs by neighbourhood. We do not claim that water causes acne. If skin feels tight after washing, tell the doctor, and avoid adding scrubs or home remedies.",
      ],
    },
    {
      heading: "Seasonal timing and travel",
      paragraphs: [
        "Winter fog can delay trains and road trips to Lucknow. Book winter reviews with spare time, and avoid a long trip straight after a peel, when skin is red and sensitive. Ask the clinic to hold a same-day slot for your return trip if the road is slow.",
      ],
    },
  ],
};

// ------------------------------------------------------------------ cost lines and cost page
// Pending price lines: no figures yet, so the template shows the "To be confirmed" chip.
const acneCosts: CostLine[] = [
  line(T, 1, "First consultation", "The doctor and the clinic type"),
  line(T, 2, "Follow-up visit, each", "Whether reviews are in the plan"),
  line(T, 3, "Creams and gels, per month", "The prescription"),
  line(T, 4, "Tablets, per month, if prescribed", "Whether any are needed, and which"),
  line(T, 5, "Tests if tablets need monitoring", "Which tests, and the lab"),
  line(T, 6, "Chemical peel, per session", "The peel used and the clinic"),
  line(T, 7, "Light or laser, per session", "The device and the area"),
  line(T, 8, "Pore clearing, per session", "The area and the time"),
];

export const acneCostPage: NationalCostPage = {
  seoTitle: "Acne Treatment Cost in India: What Changes the Price",
  metaDescription: "What an acne course costs in India: consultation, medicines, peels and light sessions, follow-ups, and what to ask in writing.",
  h1: "Acne treatment cost in India",
  answer: "An acne plan is priced as a series: a consultation, follow-up visits, medicines each month, and sometimes procedures. The total depends on how many months you need and what is added. The ranges on this page are {sample} until confirmed quotes are collected, and each one will show its source and date.",
  unit: "course",
  rangeHeading: "Sample lines for a course",
  rangeCaption: "Each line is a separate case with its own range. Your total is built from the lines that apply to you, not from one headline figure.",
  planner: {
    heading: "A six-month planner",
    formula: "Total = consultation + (follow-up visits x months) + (medicines x months) + (procedure sessions x price per session) + tests",
    steps: [
      "Ask the doctor how many months and how many visits to plan for.",
      "Fill each line from the written quote, not from a verbal estimate.",
      "Add tests and aftercare products if they are not in the quote.",
      "Leave the lines that do not apply to your plan blank. The formula gives your own range, not an average.",
    ],
  },
  factors: [
    { factor: "Severity and type", why: "Mild acne may need a cream and few reviews. Severe acne can need tablets, tests and more visits." },
    { factor: "Number of months", why: "The total grows with the length of the plan, so ask for the expected number of months." },
    { factor: "Who treats you", why: "A dermatologist, a general physician and a cosmetology clinic price visits differently." },
    { factor: "Tablets and monitoring", why: "Some tablets need blood tests and closer review, which adds visits and fees." },
    { factor: "Procedures", why: "Each peel or light session is priced separately, and sessions repeat." },
    { factor: "Clinic type", why: "A hospital outpatient department and a standalone clinic structure fees differently." },
    { factor: "City", why: "Visit fees differ between cities. Ranges by city appear only where local quotes exist." },
  ],
  notIncluded: [
    "Medicines bought at a pharmacy each month",
    "Blood tests done at an outside lab",
    "Sunscreen and moisturiser",
    "Treatment of a reaction",
    "Extra visits beyond the plan",
    "Your travel and time off for repeat visits",
  ],
  compareQuotes: [
    "Ask each clinic for the same lines in writing: consultation, each review, medicines, tests and procedures.",
    "Compare the number of months and visits each plan assumes, along with the price of one visit.",
    "Check who prescribes and examines you, and ask for the registration number to be shown on the quote.",
    "Be careful of a plan that asks you to prepay for many sessions before an examination.",
    "A promise of a set number of days to a result is a reason to ask more questions.",
  ],
  insurance: "Acne treatment is usually treated as cosmetic or routine skin care, and many policies do not pay for it. Some may consider severe acne when a doctor records a medical need. Ask your insurer in writing before you start.",
  payment: "Visits and procedures are usually paid per visit. Instalments may be available through a lender, and terms are not shown here. {tbc}",
  method: "No figure is shown yet. When quotes arrive each line will show the source type, the number of data points and the date. A range needs at least three dated points from separate sources before it replaces the pending label. Figures from other websites are not used.",
  faqs: [
    { q: "How much does acne treatment cost in India?", a: "It depends on the plan. A course is the sum of a consultation, reviews, medicines, and any procedures, over several months. Ranges on this page are sample data until confirmed. Ask each clinic for the same lines in writing so you can compare." },
    { q: "Why do two clinics quote different totals?", a: "They may assume different numbers of months and visits, include different medicines, or count procedures differently. Compare line by line." },
    { q: "Are peels and light sessions included in a course?", a: "Not always. Many quotes price them per session on top of visits and medicines. Ask how many sessions the doctor expects." },
    { q: "Do tablets add to the cost?", a: "They can. Some need blood tests and extra reviews, which add fees. Ask for tests and review dates in the written plan." },
    { q: "Is there a lower-cost way to treat acne?", a: "A simple plan with fewer procedures costs less than a plan with many sessions. What suits you is a doctor's decision after an examination. Price is one factor to weigh against the plan's length and checks." },
    { q: "Does insurance pay for acne treatment?", a: "Usually not, because policies often treat it as cosmetic. Ask your insurer in writing." },
  ],
  sources: [
    { label: "National Medical Commission: public register of doctors", href: "https://www.nmc.org.in/" },
  ],
};

// ------------------------------------------------------------------ FAQs
const faqs: FaqRow[] = [
  faqRow(T, null, "acne-pharmacy", 1, "Can creams from a pharmacy treat acne, and when is a doctor needed?", "For a few mild spots, a pharmacy cream may help. See a doctor if spots are many, painful, deep, leave marks, or have not improved after a couple of months of use. A doctor can also check whether a product is making things worse. Tablets are never available without a prescription."),
  faqRow(T, null, "acne-how-long", 2, "How long before acne improves?", "A first change often takes about 6 to 8 weeks, and many plans run for months. Early weeks may bring dryness or a flare. The doctor reviews the plan every few weeks. Results vary, and a plan that works for one person may not for another."),
  faqRow(T, null, "acne-return", 3, "Why did acne return after I stopped treatment?", "Acne is a long-term skin condition for many people. Stopping early, ending a plan too soon, new triggers or hormone changes can bring it back. Ask your doctor what maintenance looks like and what to do if spots return."),
  faqRow(T, null, "acne-isotretinoin", 4, "What is isotretinoin and what checks does it need?", "It is a prescription tablet used for severe acne or acne that scars, under a specialist's care. It needs blood tests, regular review and strict pregnancy rules, because it can seriously harm an unborn baby. Never take it without a prescription. See our [isotretinoin guide](/learn/isotretinoin-acne-questions)."),
  faqRow(T, null, "acne-pregnancy", 5, "Can I use acne medicines while pregnant or planning pregnancy?", "Some cannot be used. Tell the doctor before any treatment starts if you are pregnant, breastfeeding or may become pregnant. The doctor will choose options that fit and tell you what to avoid."),
  faqRow(T, null, "acne-food", 6, "Does food cause acne?", "Research on food and acne is mixed and no single food is proven to cause it for everyone. If you notice a pattern, mention it to your doctor. Do not drop whole food groups without advice, especially a teenager."),
  faqRow(T, null, "acne-peel-tablets", 7, "Can I have a peel or laser while on tablets?", "It depends on the tablet and the procedure, and some combinations are not advised. Always tell the person doing a peel or laser which tablets you take or took in recent months. Never agree to a procedure without asking."),
  faqRow(T, null, "acne-marks", 8, "Why do some pimples leave marks, and can they be treated?", "Marks can be flat dark patches or small dents. Picking raises the chance of both. Many dark patches fade over months with sun protection, and dents need a different approach. Treat active acne first. See [acne scars](/learn/acne-scar-types-treatment)."),
  faqRow(T, null, "acne-who", 9, "Dermatologist, general physician or cosmetologist: who should I see?", "A registered dermatologist is trained in skin conditions and prescribes tablets. A general physician can start simple treatment. Cosmetology clinics vary in who treats you, so ask who examines you and check the registration."),
  faqRow(T, null, "acne-cost", 10, "How much does a course cost?", "It depends on the months of treatment, visits, medicines and any procedures. Read the [cost page](/cost/acne-treatment) and ask each clinic for line-by-line quotes. Figures here are sample data until confirmed."),

  // ---- Delhi
  faqRow(T, "delhi", "acne-delhi-where", 20, "Is acne treatment available in Delhi itself?", "That is to be confirmed. No partner facility is confirmed in Delhi yet. If care is in Gurgaon, the page will say so at the top, and the [Gurgaon page](/acne-treatment-in-gurgaon) has road times."),
  faqRow(T, "delhi", "acne-delhi-pollution", 21, "Does Delhi's winter air cause my acne?", "No page can say that for one person. A dermatologist may discuss cleansing, dryness and sun protection in different seasons. Ask at your review, and bring the list of products you use."),
  faqRow(T, "delhi", "acne-delhi-noida", 22, "I live in Noida or Ghaziabad. Can reviews be nearer home?", "Sometimes. Ask for a written plan a local doctor could follow, and which reviews need the Delhi dermatologist. Photos on a video call may cover some reviews."),
  faqRow(T, "delhi", "acne-delhi-wedding", 23, "How early should I start before a wedding?", "At least two to three months is a common suggestion, because early weeks can bring dryness or a flare. Tell the doctor the date. Avoid starting a peel in the final weeks."),

  // ---- Gurgaon
  faqRow(T, "gurgaon", "acne-ggn-name", 20, "Gurgaon or Gurugram: is it the same place?", "Yes. Both spellings are used for the same city in Haryana. This page uses Gurgaon because more people search for it."),
  faqRow(T, "gurgaon", "acne-ggn-office", 21, "Can I keep my review visits to before or after office hours?", "Ask the clinic. Some hold early or late slots for follow-ups. Fix the day and hour at the start, because a skipped review can stall a plan."),
  faqRow(T, "gurgaon", "acne-ggn-ac", 22, "Does air conditioning in my office dry my acne skin?", "It can add to the dryness from acne creams. Tell the doctor and ask about a moisturiser. Do not stop the cream on your own."),
  faqRow(T, "gurgaon", "acne-ggn-monsoon", 23, "What if monsoon traffic makes me miss a review?", "Call the clinic and ask for the next slot. A short delay rarely matters, but do not skip the plan. Leave extra time in July and August."),

  // ---- Lucknow
  faqRow(T, "lucknow", "acne-lko-where", 20, "Is acne care provided in Lucknow?", "That is to be confirmed. No partner facility is confirmed in Lucknow yet. If it is elsewhere, the page will say so at the top, with the distance."),
  faqRow(T, "lucknow", "acne-lko-barabanki", 21, "I live in Barabanki or Sitapur. How often must I come?", "That is for the dermatologist to set. Early reviews are often every few weeks, and some can be by video. Ask which are in person and who can see you locally."),
  faqRow(T, "lucknow", "acne-lko-summer", 22, "Does Lucknow's summer change how I use acne creams?", "Heat and sun can make some creams sting and darken marks. Ask the doctor whether to change the routine in May and June, and which sun protection to use."),
  faqRow(T, "lucknow", "acne-lko-hindi", 23, "Can the consultation and written plan be in Hindi?", "Yes, the first call and the consultation can be in Hindi or Hinglish. Ask for the plan in the language you read most easily and check every line before you leave."),

  // ---- Kanpur
  faqRow(T, "kanpur", "acne-knp-lucknow", 20, "Do I need to go to Lucknow for acne treatment?", "That is to be confirmed. No partner facility is confirmed in Kanpur yet, and Lucknow is the nearest other city we cover. If care is there, the page will say so, with the trip time."),
  faqRow(T, "kanpur", "acne-knp-local", 21, "Can a Kanpur doctor follow a plan written in Lucknow?", "Often, for simple reviews, if the plan is written down. Ask the dermatologist which changes a local doctor may make and which need a call back."),
  faqRow(T, "kanpur", "acne-knp-dust", 22, "Does dust in Kanpur make acne worse?", "This is a question for your reviewing dermatologist, and we make no claim. Ask how often to wash, which cleanser suits your skin, and whether to cover up outdoors."),
  faqRow(T, "kanpur", "acne-knp-fog", 23, "Winter fog delays trains to Lucknow. How do I plan a review?", "Book the earliest slot and allow spare time. If the road is blocked, call the clinic. Avoid a long trip straight after a peel, when skin is red and sensitive."),
];

export const acne: SkinHairTopic = {
  treatment: {
    slug: T,
    seo: {
      title: "Acne Treatment: Options, Timeline, Side Effects, Cost",
      description: "What acne treatment involves, how long it takes, the risks, who should wait, and what a course costs. Reviewed by a registered doctor.",
      cityTitle: "Acne Treatment in {city}: Cost, Timeline, Risks",
    },
    content: acneContent,
    display: {
      costMode: "options",
      priceLabel: "A course of acne treatment, usual total",
      priceLinkText: "The lines inside it",
      costHeading: "What an acne plan costs",
      costCaption: "Each line is a separate case with its own range. Sample data / To be confirmed.",
      operationHeading: "What acne treatment involves",
      recoveryHeading: "What the first three months look like",
      recoveryTocLabel: "First three months",
      timelineCaption: "What most people notice and do, by time since starting.",
      risksHeading: "Side effects and risks",
      riskGuideHref: "/acne-treatment#risks",
      heroPlate: "none",
      operationPlate: "none",
      labels: {
        areasHeading: "Which kind of acne is it",
        areasCaption: "Grades of acne and what a doctor checks. Scales differ between doctors.",
        areasNoPlate: true,
        techniquesHeading: "Treatment options",
        techniquesCaption: "The usual options, who they suit and what to ask.",
        tocTechniques: "Options",
      },
      tocLabels: { surgery: "What it involves", choices: "Types and grades" },
    },
  },
  costUnit: "course",
  includeKeys: acneIncludeKeys,
  costPage: acneCostPage,
  costLines: acneCosts,
  faqs,
  cityPages: [acneDelhi, acneGurgaon, acneLucknow, acneKanpur],
};
