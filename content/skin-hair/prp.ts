import type { CityTreatmentPage, CostLine, FacilityData, FaqRow, IncludeKeyDef, NationalCostPage, SkinHairTopic, TreatmentContent } from "../types";
import { SLUGS } from "../slugs";
import { cityBase, faqRow, line } from "./shared";

// PRP treatment (hair and skin): hub, four city pages, cost lines, FAQs and the national cost page.
// Hair first, skin second. This page owns the PRP-for-face query, so the anti-aging page links here and does not target it.
// Rules applied: evidence is described as mixed and results vary. No claim of regrowth, thickness, stopping hair fall,
// collagen or reversal of ageing. No "FDA" or approval wording, no device or kit brands, no percentages. Finasteride and
// minoxidil are named by generic name only, in plain information. No studies are cited until a reviewer opens them.
// Pending a dermatology reviewer.

const T = SLUGS.prp;
const HAIR = `/${SLUGS.hairTransplant}`;

// Rows of the "what the price includes" table. 7 of them, gate G2 needs 5 answered.
export const prpIncludeKeys: IncludeKeyDef[] = [
  { key: "consultation", label: "Consultation and scalp or skin check", ask: "Is the first visit charged, and is it credited if you start a course?" },
  { key: "performer", label: "Who draws the blood and injects", ask: "Is it a doctor, a nurse or a technician, and what is their training?" },
  { key: "kit", label: "Blood draw and PRP kit", ask: "Is the kit single-use and sealed, and is it in the price?" },
  { key: "procedure", label: "The session itself", ask: "What is done in one session, and how many sessions are planned?" },
  { key: "numbing", label: "Numbing cream or cooling", ask: "Is numbing cream used, and is it in the price?" },
  { key: "aftercare", label: "Aftercare products", ask: "Which products are advised, and are they in the price?" },
  { key: "review", label: "Review visit", ask: "How many reviews are in the plan, and what does an extra one cost?" },
];

// TODO-VERIFY: session counts, the gap between sessions (4 to 6 weeks), how long marks last and when a doctor judges
// change are general ranges for the dermatology reviewer to confirm or replace. PRP studies are NOT cited:
// the reviewer must open and verify at least two papers before any is named.
export const prpContent: TreatmentContent = {
  dek: "PRP means platelet-rich plasma, made from a small sample of your own blood and injected into the scalp or skin. Doctors use it as an add-on for hair thinning and for skin texture. Evidence is mixed and results vary. A usual plan is several sessions, so the [total bill](/cost/prp-treatment) matters more than one session fee.",

  shortAnswers: [
    {
      q: "What is PRP?",
      a: "Blood is drawn from your arm and spun to concentrate platelets. The platelet-rich part is injected into the scalp or skin.",
      href: "#surgery",
      linkText: "How it is made",
    },
    {
      q: "Does it work?",
      a: "Evidence is mixed. Some people see a change, and some see none. A doctor should tell you plainly what to expect for you.",
      href: "#evidence",
      linkText: "What is known",
    },
    {
      q: "How many sessions?",
      a: "Usually several, spaced weeks apart, and the doctor sets the number. Ask for the course total as well as the price of one session.",
      href: "#cost",
      linkText: "The cost lines",
    },
    {
      q: "Who should wait?",
      a: "Active infection, blood disorders or blood thinners, low platelets, pregnancy or cancer treatment need a doctor's view first.",
      href: "#risks",
      linkText: "Who should wait",
    },
  ],

  operation: {
    lead: "PRP is a way of using your own blood. A small sample is taken and spun in a machine, which separates a platelet-rich part. That part is injected into the scalp for hair thinning, or into the skin of the face for texture. A doctor decides whether it suits you.",
    body: "It is not a transplant, and it is not a medicine that changes the cause of hair loss. Hair thinning can come from medical causes such as thyroid, iron or hormone problems, so a doctor checks first. Read [how PRP is made](/learn/prp-how-it-is-made) and [what the evidence says for hair](/learn/prp-for-hair-loss-evidence). If you are comparing it with a [hair transplant](" + HAIR + "), the two are different options with different aims.",
    caption: "From blood draw to injection: draw, spin, separate, inject.",
    ask: "What do you expect PRP to do for my hair or skin, how many sessions, and what will we do if I see no change?",
    how: [
      "Consultation: the doctor examines your scalp or skin, asks about hair loss history, medicines, blood conditions and pregnancy plans, and may suggest tests for medical causes.",
      "Blood draw: a small sample is drawn from a vein in your arm, as for a blood test.",
      "Spinning: the sample is spun in a machine so that the platelet-rich plasma separates from the rest. Methods differ between clinics.",
      "Injection: numbing cream may be used. The PRP is injected with a fine needle into the scalp, or into the skin of the face. It can also be applied after microneedling.",
      "Aftercare: you go home the same day, with advice on washing, sun and what to avoid for the first day or two.",
    ],
    whoItSuits: [
      { term: "Hair", text: "Adults with early or mild thinning whose doctor has checked for medical causes, and who understand that evidence is mixed. It is often an add-on to medical care." },
      { term: "Skin", text: "Adults who want to talk about texture or under-eye concerns. Evidence is limited and results vary. See [PRP for the face](/learn/prp-face-evidence)." },
      { term: "Expectations", text: "Some people notice a change over months, and some do not. No one can promise a result." },
      { term: "Commitment", text: "A course of sessions spaced weeks apart, and review visits. If travel makes visits hard, plan that before you start." },
    ],
  },

  extraSections: [
    {
      id: "evidence",
      heading: "PRP for hair thinning: what is known and unknown",
      tocLabel: "Hair: the evidence",
      paragraphs: [
        "Studies of PRP for hair thinning have used different methods, different numbers of sessions and different ways of measuring change, so results are hard to compare. Some report a change in some people, and others report little or none. For that reason the evidence is described as mixed.",
        "A reviewer will open and check published studies before any is named on this page. None is cited yet. {pending}",
        "Hair thinning has many causes. Some need a medical check, such as thyroid, iron and hormone tests. Treating the cause may matter more than any injection.",
      ],
      note: { label: "Ask this", text: "Which kind of hair thinning do I have, what are the other options, and why do you suggest PRP for me?" },
    },
    {
      id: "skin-prp",
      heading: "PRP for skin: the face, under the eyes and scars",
      tocLabel: "Skin: face and under-eye",
      paragraphs: [
        "For the skin, PRP is used by some doctors for texture, fine lines, under-eye concerns and some marks, often with microneedling. Evidence is limited and results vary, and it does not replace sun protection or other care.",
        "Under-eye skin is thin and sensitive. If a doctor suggests PRP there, ask what the aim is, what the risks are and how many sessions. We make no claim about dark circles, scars or ageing. For the wider set of options, see [anti-aging treatment](/anti-aging-treatment).",
      ],
    },
    {
      id: "sessions",
      heading: "Sessions and spacing",
      tocLabel: "Sessions",
      paragraphs: [
        "Clinics usually plan a course of several sessions spaced a few weeks apart. Our reviewer will give a general range for the number and the gap once review is complete. {pending}",
        "A doctor judges change after some months and decides whether to continue, space the visits out, or stop. Ask in advance what counts as a change and what the plan is if there is none. Do not prepay for a large package before you have seen how you respond.",
      ],
    },
  ],

  techniques: {
    lead: "People often ask how PRP compares with other options for thinning hair. This table lists plain differences, with no ranking.",
    rows: [
      { name: "PRP", how: "Your own platelet-rich plasma injected into the scalp", often: "Early or mild thinning, as an add-on. Several sessions", ask: "What is the aim, how many sessions, and what if there is no change?" },
      { name: "Medicines for hair", how: "Creams or tablets prescribed by a doctor, such as minoxidil, and for some men finasteride", often: "Many types of thinning, used for months or longer", ask: "Which medicine suits me, what are the side effects, and how long must I use it?" },
      { name: "Microneedling", how: "Fine needles create tiny channels in the skin, sometimes with PRP applied", often: "Skin texture, and sometimes as a scalp add-on", ask: "What does it add, and what are the infection and irritation risks?" },
      { name: "Hair transplant", how: "A procedure that moves hair follicles from a donor area to a thinning area", often: "Established thinning with enough donor hair. See [hair transplant](" + HAIR + ")", ask: "Am I a candidate, how many grafts, and what are the risks?" },
    ],
    note: "A doctor decides which of these suits you, and some people use more than one.",
  },

  recovery: {
    lead: "There is little recovery for most people. This is what the first hours and days commonly look like, and your doctor sets yours. {pending}",
    body: "Mild tenderness, redness and tiny marks from the needle are common. Follow the doctor's advice about washing your hair or face, sun and exercise on the first day or two. Tell the doctor about a fever, spreading redness or severe pain.",
    highlights: [
      { pre: "same", big: "day", text: "Home after the session, with redness and mild tenderness" },
      { pre: "about", big: "4 to 6 weeks", text: "Gap between sessions in many plans, per the reviewer" },
      { pre: "after", big: "months", text: "A doctor judges whether there is any change. Hair changes, if any, are gradual" },
    ],
    timeline: [
      { when: "Same day", notice: "Redness and mild tenderness at injection sites", doThis: "Follow the washing and sun advice you were given. Do not rub or scratch the area." },
      { when: "Day 1 to 2", notice: "Swelling or a tight feeling, skin may look flushed", doThis: "Rest as needed. Avoid hard exercise and heat if the doctor says so." },
      { when: "Day 3 to 7", notice: "Most visible marks settle on the face. Scalp tenderness eases", doThis: "Gentle care. Report any pus, fever or spreading redness." },
      { when: "Week 2 to 4", notice: "Skin and scalp feel usual", doThis: "Next session or review, at the interval the doctor sets." },
      { when: "Month 3 to 6", notice: "A doctor reviews whether there is any change", doThis: "Review visit. Decide whether to continue, space out or stop." },
    ],
    grid: {
      cols: ["Day 0", "Day 1", "Day 3", "Wk 1"],
      rows: [
        { label: "Return to work", cells: [{ state: "y", text: "Often" }, { state: "y", text: "Yes" }, { state: "y", text: "Yes" }, { state: "y", text: "Yes" }] },
        { label: "Wash scalp or face", cells: [{ state: "n", text: "Ask" }, { state: "m", text: "Ask" }, { state: "y", text: "Yes" }, { state: "y", text: "Yes" }] },
        { label: "Hard exercise", cells: [{ state: "n", text: "No" }, { state: "m", text: "Ask" }, { state: "y", text: "Yes" }, { state: "y", text: "Yes" }] },
        { label: "Strong sun", cells: [{ state: "n", text: "No" }, { state: "n", text: "No" }, { state: "m", text: "Cover" }, { state: "m", text: "Cover" }] },
        { label: "Hair colour or treatments", cells: [{ state: "n", text: "No" }, { state: "n", text: "No" }, { state: "m", text: "Ask" }, { state: "m", text: "Ask" }] },
      ],
    },
    closing: "Never assume there is no downtime. Marks and swelling vary between people. If you have an event, plan sessions weeks ahead.",
  },

  risks: {
    lead: "Every injection carries risk. These are the ones people most often ask about, in plain words, and what to ask. This is not a complete list, and your doctor will go through yours.",
    rows: [
      { risk: "Pain and bruising at the sites", means: "Common. The scalp can be tender for a day or two.", ask: "What do you use for comfort, and how long does it last?" },
      { risk: "Swelling or headache", means: "Some people have swelling of the scalp or forehead, or a headache.", ask: "What can I take, and when should I call?" },
      { risk: "Infection", means: "Rare. Any needle can carry a risk, and it needs early treatment.", ask: "Is the kit single-use and sealed, and what signs should I report?" },
      { risk: "Allergic reaction to numbing cream", means: "Rash, itch or swelling where the cream was applied.", ask: "Do I have any allergy that matters?" },
      { risk: "Scalp tenderness", means: "The scalp can feel sore, especially when combed.", ask: "How long should it last, and what can I use?" },
      { risk: "No visible benefit", means: "Results vary, and some people see no change after a course.", ask: "What counts as a change, and what is the plan if there is none?" },
      { risk: "Blood-related risks", means: "A needle can bleed more in people with a bleeding tendency or on blood thinners.", ask: "Should I stop any medicine, and who decides that?" },
    ],
    alert: "Call your doctor straight away for fever, spreading redness or heat, pus, severe pain or swelling that keeps getting worse. If you cannot reach the doctor, go to the nearest emergency department.",
    wait: [
      "You have an active scalp or skin infection",
      "You have a blood disorder, a low platelet count or take blood thinners (the doctor decides)",
      "You are pregnant or breastfeeding, unless the doctor agrees",
      "You are having cancer treatment",
      "Your diabetes is not controlled",
      "Your hair loss has a medical cause, such as thyroid, iron or hormone problems, that has not been checked",
      "You expect a promised result",
    ],
    tell: [
      "All medicines, supplements and blood thinners you take",
      "Any blood disorder, diabetes, thyroid or hormone condition",
      "Pregnancy, breastfeeding or plans to conceive",
      "Past reactions to numbing creams or injections",
      "Any other hair or skin treatment you use, or plan",
    ],
  },

  patientQuestions: [
    { q: "Does PRP help with hair thinning?", href: "#evidence", linkText: "Read: what is known" },
    { q: "How many sessions will I need?", href: "#sessions", linkText: "Read: sessions" },
    { q: "How much will a course cost?", href: "#cost", linkText: "Read: the cost lines" },
    { q: "Is PRP for the face the same?", href: "#skin-prp", linkText: "Read: skin" },
    { q: "How does PRP compare with medicines or a transplant?", href: "#compare", linkText: "Read: how it compares" },
    { q: "Who should not have PRP?", href: "#risks", linkText: "Read: who should wait" },
  ],

  quoteProcess: [
    { title: "You talk to a coordinator", text: "By phone or WhatsApp. Say what you want to talk about, hair or skin. No pressure to book." },
    { title: "A doctor examines you", text: "The doctor examines the scalp or skin, asks about medicines and blood conditions, and may suggest tests for medical causes." },
    { title: "You receive a written plan", text: "The number of sessions, the gap between them, the price of each and the total, and what happens if there is no change." },
    { title: "You start with one session", text: "Pay for the first session before a package. See how you respond and how the visit goes." },
    { title: "You return for reviews", text: "A coordinator check-in the next day, then sessions and reviews at the interval the doctor sets." },
  ],

  quoteChecks: [
    "state the number of sessions, the gap between them and the course total?",
    "say who draws the blood and injects, with their training?",
    "say that the kit is single-use and sealed?",
    "list review visits, medicines and tests separately?",
    "say what happens, and what you pay, if there is no change?",
  ],

  extras: [
    "Sessions beyond the course in the plan",
    "Microneedling or other add-ons",
    "Medicines for hair, if prescribed",
    "Blood tests for medical causes",
    "Follow-up and review visits",
    "Aftercare products",
    "Treatment of a reaction",
    "Your travel and time off for repeat visits",
  ],

  insurance:
    "Insurance. PRP for hair or skin is usually treated as cosmetic, and most health policies do not pay for it. Ask your insurer in writing before you start, and keep the plan. We do not promise cashless approval.",
  payment:
    "Payment. Pay per session. Package plans and instalments depend on the clinic and the lender and are not shown here. Pay for one session before a package. {tbc}",

  // TODO-VERIFY: the reviewer opens each source and confirms the URL and the facts used.
  sources: [
    { label: "National Medical Commission: public register of doctors", href: "https://www.nmc.org.in/" },
  ],

  footnotes: [
    "Medical review is pending. The reviewer, qualification and review date will be shown once a registered doctor signs off.",
    "Evidence for PRP is described as mixed. Studies will be cited only after the reviewer opens and checks each one. None is cited yet.",
    "Session counts, gaps between sessions and how long marks last are general ranges to be confirmed by the reviewer.",
    "Kits and devices have their own regulatory status, which is with the founder's lawyer. This page makes no approval claim.",
    "Insurance and payment wording is general and to be confirmed.",
  ],
};

// ------------------------------------------------------------------ city pages
// TODO-VERIFY (all four cities): road times, station and airport names, seasonal statements and water statements are
// general and must be checked against a dated public source before any page leaves noindex.

const prpChecks = (focus: string): FacilityData["checks"] => [
  { check: "Registered doctor", why: "PRP involves a needle and a blood draw, and a doctor should plan it", ask: "Who examines me and plans the course, and where can I check the registration?" },
  { check: "Single-use sealed kit", why: "Reused kits can spread infection", ask: "Is the kit single-use and sealed, and will I see it opened?" },
  { check: "Sessions and total in writing", why: "A course is the real price, and one session is not", ask: "Can I have the number of sessions, the gap and the total in writing?" },
  { check: "What if there is no change", why: "Evidence is mixed, so a plan for no change matters", ask: `What is the plan if I see no change after the course? ${focus}` },
  { check: "Medical causes checked", why: "Hair thinning can have a medical cause that needs its own care", ask: "Will you check for thyroid, iron or hormone causes before starting?" },
];

const prpDelhi: CityTreatmentPage = {
  ...cityBase(T, "delhi"),
  seoTitle: "PRP Treatment in Delhi: Cost, Sessions, Risks",
  h1: "PRP treatment in Delhi",
  metaDescription: "PRP treatment in Delhi: sample cost lines, sessions, recovery, risks and how to reach the clinic from Noida, Ghaziabad or Faridabad. Results vary.",
  intro: "PRP treatment in Delhi is usually a course of short visits, so travel time counts as much as the price of one session. The local sample cost per session is {tbc} until quotes are collected. Evidence for PRP is mixed and results vary, so ask what the plan is if you see no change.",
  includes: { review: "varies", aftercare: "varies" },
  facilities: {
    intro: "No partner facility is confirmed in Delhi yet. PRP is given in day-care clinics and dermatology clinics, not hospital wards. This page will name the facility type once one is confirmed. Until then, use the questions below on any place you are considering.",
    partners: [{ type: "Day-care facility or clinic in Delhi (to be confirmed)", count: null }],
    accreditation: null,
    checks: prpChecks("Ask for the answer in writing."),
  },
  travel: {
    intro: "A PRP course repeats a short visit every few weeks, so it suits a clinic close to work or on your metro line. Delhi traffic decides how long each visit really takes.",
    airport: "Indira Gandhi International Airport (to be verified)",
    station: "New Delhi, Old Delhi and Hazrat Nizamuddin stations (to be verified against the facility)",
    stayDays: "Same day. No stay for sessions",
    metro: "The metro suits a session on a workday. Go home rather than to the gym, and cover up on the way if skin or scalp is red. {sample} The nearest station is added once a facility is confirmed.",
    roadTimes: [
      { from: "Noida", time: "50 to 90 min", tip: "Fix the same weekday and slot for every session" },
      { from: "Ghaziabad", time: "60 to 100 min", tip: "Ask which reviews can be a video call with photos" },
      { from: "Faridabad", time: "50 to 90 min", tip: "Book the next session before you leave" },
      { from: "Gurgaon", time: "50 to 90 min", tip: "Gurgaon has its own clinics, so compare before you commit to a course" },
    ],
    privacyNote: "You do not have to explain visits to anyone. Photos of your scalp or skin are health data, so ask where clinic photos are stored and who can see them.",
    mapCaption: "Travel into Delhi from nearby towns, no building shown.",
  },
  localContext: [
    { text: "NEEDS REAL DATA: which Delhi facility, if any, will provide PRP, and its type", source: "", asOf: "" },
    { text: "NEEDS REAL DATA: winter and post-Diwali air quality in Delhi (public CPCB records, month and station)", source: "", asOf: "" },
    { text: "NEEDS REAL DATA: tap water hardness by area of Delhi (public water board reports)", source: "", asOf: "" },
  ],
  usefulness: "For readers in Delhi and the nearby NCR towns who need to fit a course of PRP visits around work, with notes on metro and traffic planning, winter air and dryness, and hard-water questions that carry no claim.",
  localCopy: [
    "A PRP course in Delhi is a series of short visits, so a clinic on your metro line matters.",
    "People ask about winter air and hair or skin, and we make no claim about it.",
    "Fix the same weekday and slot for every session, so the course keeps its rhythm.",
  ],
  localNotes: [
    { heading: "Work-day sessions", text: "A session is short. Many people book it near the office, and go home afterwards. If your scalp is red or tender, a cap and a quiet afternoon are easier than a meeting." },
    { heading: "Spacing and your calendar", text: "Sessions are spaced weeks apart. Put every date in your calendar when you book the course, and check it against travel, festivals and exams. A long gap in the middle of a course changes the plan." },
    { heading: "Winter air and skin PRP", text: "People ask whether Delhi's winter air changes the timing of PRP for the face. We make no claim here. Ask the dermatologist what is known and how to protect treated skin. {pending}" },
    { heading: "Hard water and your scalp", text: "Tap water in parts of Delhi is described as hard, and people ask about hair. We make no claim that water causes hair thinning. Ask the doctor which shampoo and how often to wash after a session." },
  ],
  sections: [
    {
      heading: "A course in a city of long distances",
      paragraphs: [
        "A PRP course is several short visits across weeks or months. In Delhi the length of each visit is the road. Choose a clinic on a metro line or near your workplace, and ask for the same slot every time, so that it becomes a habit rather than a planning problem.",
        "Count the trips before you pay. A plan with six sessions and two reviews is eight trips. If the number is more than you can keep, tell the doctor, who may plan a shorter course or longer gaps.",
      ],
    },
    {
      heading: "Winter dryness, pollution questions and summer sweat",
      paragraphs: [
        "Delhi winters are dry and the air in many weeks is poor, and summers are hot and sweaty. After a scalp session, the doctor will say when you can wash your hair and what to use. After a face session, sun protection matters. We make no claim that pollution or heat changes how PRP works.",
        "If you sweat a lot, ask how to manage the first day or two, because the advice may be to avoid heavy exercise and heat.",
      ],
    },
    {
      heading: "Referral and the question of medical causes",
      paragraphs: [
        "Many people in Delhi come to PRP after seeing a family doctor or after trying a shampoo or a supplement. If hair thinning is the reason, ask whether your thyroid, iron and hormone levels have been checked. Bring any reports.",
        "A second opinion is reasonable before a course. A plan that is good will stand up to it.",
      ],
    },
    {
      heading: "Language and written answers",
      paragraphs: [
        "Staff at most Delhi clinics speak Hindi and English, and some speak Punjabi. Ask for the course plan in the language you read most easily. Ask the doctor what counts as a change and what the plan is if there is none. {tbc}",
      ],
    },
    {
      heading: "Wedding season and event timing",
      paragraphs: [
        "A scalp or face session looks minor, yet marks and swelling can show for days. If you have a wedding or event, plan sessions weeks ahead and avoid a session in the final days.",
      ],
    },
  ],
};

const prpGurgaon: CityTreatmentPage = {
  ...cityBase(T, "gurgaon"),
  seoTitle: "PRP Treatment in Gurgaon: Cost, Sessions, Risks",
  h1: "PRP treatment in Gurgaon",
  metaDescription: "PRP treatment in Gurgaon (Gurugram): sample cost lines, sessions, recovery, risks and how to reach the clinic from Delhi. Results vary.",
  intro: "PRP treatment in Gurgaon (also written Gurugram) is a course of short visits, usually fitted around office hours. The local sample cost per session is {tbc} until quotes are collected. Evidence is mixed and results vary, so ask what the plan is if you see no change.",
  includes: { review: "varies", aftercare: "varies" },
  facilities: {
    intro: "A partner facility exists in Gurgaon for other treatments, and whether it provides PRP is to be confirmed. We do not name it. In this city PRP is given in day-care clinics and dermatology clinics, so ask what kind of place you are in.",
    partners: [{ type: "Day-care facility or clinic in Gurgaon (to be confirmed)", count: null }],
    accreditation: null,
    checks: prpChecks("Ask whether the same doctor sees you at every session."),
  },
  travel: {
    intro: "Most people fit a PRP course around the working week. Choose a clinic near your office or on your commute, and ask which evening slots are kept for repeat sessions.",
    airport: "Indira Gandhi International Airport, Delhi (to be verified)",
    station: "HUDA City Centre (Yellow Line) and Sikandarpur (Rapid Metro)",
    stayDays: "Same day. No stay for sessions",
    metro: "Sikandarpur and HUDA City Centre serve much of the commercial belt. After a scalp session, a cap and a short cab are easier than a long walk in the heat. {sample} The distance to a facility is added once one is confirmed.",
    roadTimes: [
      { from: "South Delhi", time: "40 to 70 min", tip: "An evening slot may cross the highway rush, so try mid-morning" },
      { from: "Noida", time: "70 to 110 min", tip: "Check clinics in Noida before you commit to a course here" },
      { from: "Faridabad", time: "60 to 100 min", tip: "A weekend slot suits a course spaced by weeks" },
      { from: "Rewari", time: "60 to 90 min", tip: "Plan sessions on days you are in the city anyway" },
    ],
    privacyNote: "Many clients come from nearby offices. You do not need to explain visits to colleagues. Ask the clinic to keep the treatment name out of messages and reminders.",
    mapCaption: "Travel into Gurgaon from Delhi and nearby towns, no building shown.",
  },
  localContext: [
    { text: "NEEDS REAL DATA: whether the Gurgaon partner facility provides PRP, and its type", source: "", asOf: "" },
    { text: "NEEDS REAL DATA: groundwater hardness for Gurugram (Central Ground Water Board report, year)", source: "", asOf: "" },
    { text: "NEEDS REAL DATA: Rapid Metro and road route to the facility, with a date", source: "", asOf: "" },
  ],
  usefulness: "For people in Gurgaon (Gurugram) who plan a PRP course around office hours, with notes on evening slots, the Rapid Metro, the naming of the city, hard-water questions with no claim attached, and coming from Delhi each time.",
  localCopy: [
    "In Gurgaon a PRP course has to fit an office week, so evening slots and the Rapid Metro come first.",
    "The question of coming from Delhi each time depends on the number of trips as well as the distance.",
    "Hard water is a common question here, and no claim is made without a source.",
  ],
  localNotes: [
    { heading: "Gurgaon or Gurugram", text: "They are the same city. We use Gurgaon here because more people search for it, and the body text also says Gurugram. Either spelling works when you ask a clinic." },
    { heading: "Evening slots after office", text: "Some clinics keep evening slots. Ask which days and until what time. An evening scalp session lets you go home and rest, and you avoid an office meeting with a red or tender scalp." },
    { heading: "The Rapid Metro route", text: "Sikandarpur is on the Rapid Metro and HUDA City Centre is on the Yellow Line. Ask the clinic how far it is from either, and check the walk or the cab you will need on a hot day." },
    { heading: "Coming from Delhi each time", text: "People travel from South Delhi and nearby towns. Compare Delhi and Gurgaon plans on the number of trips and the total, along with the price of one session. Delhi is the nearest other city we cover." },
  ],
  sections: [
    {
      heading: "A course around an office week",
      paragraphs: [
        "PRP is not a one-visit treatment. A course of several sessions, spaced by weeks, competes with deadlines, travel and holidays in a Gurgaon work year. Before you pay for a course, put each session on a calendar and check the weeks around it.",
        "Ask whether the first and second sessions are close together or spaced, and how many weeks the plan allows to pass before a review. If the plan has a long gap in the middle, ask why.",
      ],
    },
    {
      heading: "Heat, air conditioning and scalp care",
      paragraphs: [
        "Gurgaon summers run from April into September, with heat and sweat. After a scalp session, the doctor will say when to wash your hair and when to avoid heat and hard exercise. Air-conditioned offices dry the skin, so skin PRP aftercare may need a moisturiser, and the doctor will say which kind.",
        "We make no claim that heat or air conditioning changes how PRP works.",
      ],
    },
    {
      heading: "Hard water, shampoo and hair questions",
      paragraphs: [
        "Groundwater in parts of Gurugram is described as hard or salty, and many people ask whether it affects their hair. We make no claim that water causes hair thinning, and no source is yet attached. Ask the doctor which shampoo suits your scalp and how often to wash.",
      ],
    },
    {
      heading: "Referral habits and asking a second doctor",
      paragraphs: [
        "People often take a clinic name from a colleague. A name is a place to start, and not a check. Ask for the registration, the written plan, the number of sessions and what the plan is if you see no change. A second opinion from a dermatologist you already see is a good step.",
        "Be careful of a package of many sessions on the first day, and ask for the price of one session by itself.",
      ],
    },
    {
      heading: "Monsoon and keeping the rhythm",
      paragraphs: [
        "Heavy rain can cause long delays in July and August. Leave a buffer for each visit. A session delayed by a week or two is usually acceptable, and the clinic can tell you how much delay the plan allows.",
      ],
    },
  ],
};

const prpLucknow: CityTreatmentPage = {
  ...cityBase(T, "lucknow"),
  seoTitle: "PRP Treatment in Lucknow: Cost, Sessions, Risks",
  h1: "PRP treatment in Lucknow",
  metaDescription: "PRP treatment in Lucknow: sample cost lines, sessions, recovery, risks and how to reach the clinic from Barabanki, Unnao and Sitapur. Results vary.",
  intro: "PRP treatment in Lucknow is a course of short visits, and many people travel in from nearby towns for each one. The local sample cost per session is {tbc} until quotes are collected. Evidence is mixed and results vary, so count the trips and ask what the plan is if you see no change.",
  includes: { review: "varies", aftercare: "varies" },
  facilities: {
    intro: "No partner facility is confirmed in Lucknow yet. PRP is given in day-care clinics and dermatology clinics. If care ends up in another city, we will say so at the top of this page and not claim a local site.",
    partners: [{ type: "Day-care facility or clinic in Lucknow (to be confirmed)", count: null }],
    accreditation: null,
    checks: prpChecks("From a nearby town, ask who sees you if something goes wrong between sessions."),
  },
  travel: {
    intro: "A PRP course repeats a short visit every few weeks. From a district town, that is a series of day trips, so plan them as a set and not one at a time.",
    airport: "Chaudhary Charan Singh International Airport, Lucknow (to be verified)",
    station: "Charbagh station and the Lucknow Metro (to be verified against the facility)",
    stayDays: "Same day. No stay for sessions",
    metro: "The Lucknow Metro runs along a north-south line and suits a consultation in the city. After a scalp session, a cab with a cap keeps sun and dust off a tender scalp. {sample} Stations near a facility are added once it is confirmed.",
    roadTimes: [
      { from: "Barabanki", time: "40 to 70 min", tip: "Short enough for a session and a same-day return" },
      { from: "Unnao", time: "60 to 100 min", tip: "Book the earliest slot to avoid afternoon heat" },
      { from: "Sitapur", time: "80 to 120 min", tip: "Ask whether reviews can be by video" },
      { from: "Hardoi", time: "100 to 150 min", tip: "Plan sessions on days you are in the city anyway" },
    ],
    privacyNote: "In a smaller town a neighbour may recognise you at a clinic. A quiet slot or a different waiting area can help, and the clinic should keep the treatment name out of messages.",
    mapCaption: "Travel into Lucknow from nearby districts, no building shown.",
  },
  localContext: [
    { text: "NEEDS REAL DATA: which Lucknow facility, if any, will provide PRP, and its type", source: "", asOf: "" },
    { text: "NEEDS REAL DATA: road times from Barabanki, Unnao, Sitapur and Hardoi, checked on a map with a date", source: "", asOf: "" },
    { text: "NEEDS REAL DATA: Lucknow climate normals for heat, dust and humidity (IMD) and Gomti water supply hardness", source: "", asOf: "" },
  ],
  usefulness: "For readers in Lucknow and nearby districts who must plan a PRP course as a series of day trips, with notes on spacing sessions around holidays, a Hindi-speaking coordinator, summer sweat and dust on a tender scalp.",
  localCopy: [
    "From a district town, a PRP course is a series of day trips that are planned as a set.",
    "Sessions can be spaced around festivals and holidays if the doctor agrees.",
    "A Hindi-speaking coordinator helps with the plan and with the aftercare.",
  ],
  localNotes: [
    { heading: "Do I travel for every session", text: "Ask which visits need you in person and which can be a video call with photos. A session needs you at the clinic, and a review often does not. Count only the sessions as trips, and plan the rest." },
    { heading: "Spacing around holidays", text: "Sessions are spaced weeks apart, so you can choose dates that fit festivals, Eid and holidays, if the doctor agrees. Fix the dates for the whole course at the first visit." },
    { heading: "Hindi-speaking coordinator", text: "The consultation and the first calls can be in Hindi or Hinglish. Ask for a coordinator who speaks Hindi, and for the plan and the aftercare written in the language you read most easily. {tbc}" },
    { heading: "Areas people ask about", text: "People often ask about clinics in Gomti Nagar, Hazratganj and Indira Nagar. We name no clinic. Choose by the doctor and the written plan, and then by distance and the trips you need to make." },
  ],
  sections: [
    {
      heading: "A course as a set of day trips",
      paragraphs: [
        "PRP is a course of several short sessions. For someone from Unnao or Sitapur, each session is a trip that takes most of a day. Before you pay, write the whole course on a calendar with the dates, and check it against work, farming seasons, exams and festivals.",
        "If the total of trips is more than you can manage, say so at the consultation. A doctor may plan a shorter course or longer gaps, or tell you plainly that PRP is not a good fit.",
      ],
    },
    {
      heading: "Dust, summer sweat and the scalp",
      paragraphs: [
        "Lucknow summers are hot and dry, with dust, and the monsoon is humid. After a scalp session the doctor will say when you can wash your hair and what to avoid, and the advice for a hot, sweaty day may differ from a cool one. Ask what to do on the first day in May or June.",
        "We make no claim that dust or humidity changes how PRP works. If your scalp is sore or you see pus, call the clinic.",
      ],
    },
    {
      heading: "Water and hair washing",
      paragraphs: [
        "Households use a mix of piped supply and groundwater, and hardness varies by area. People ask whether water affects hair. We make no claim that it causes hair thinning. Ask the doctor which shampoo suits your scalp and how often to wash.",
      ],
    },
    {
      heading: "Referrals from a local doctor",
      paragraphs: [
        "In smaller towns, many people hear about PRP from a local doctor, a pharmacist or a relative. Ask the local doctor whether it suits you, and whether your thyroid, iron and hormone levels have been checked. Bring any reports.",
        "Be careful of a phone call or a message that quotes a price before a doctor has seen you. A registered doctor should examine you first.",
      ],
    },
    {
      heading: "Seasons, festivals and fog",
      paragraphs: [
        "Wedding season, Diwali and Eid fill roads and clinics. Winter fog can delay roads and trains. Plan the course so that no session falls on a day when travel is likely to be hard, and keep a spare date in the calendar.",
      ],
    },
  ],
};

const prpKanpur: CityTreatmentPage = {
  ...cityBase(T, "kanpur"),
  seoTitle: "PRP Treatment in Kanpur: Cost, Sessions, Risks",
  h1: "PRP treatment in Kanpur",
  metaDescription: "PRP treatment in Kanpur: sample cost lines, sessions, recovery, risks and how to reach the clinic from Unnao and Kanpur Dehat. Results vary.",
  intro: "PRP treatment in Kanpur is a course of short visits every few weeks. The local sample cost per session is {tbc} until quotes are collected. No partner facility is confirmed in Kanpur yet, so the first question is whether sessions are local or in Lucknow, and whether reviews can be done near home.",
  includes: { review: "varies", aftercare: "varies" },
  facilities: {
    intro: "No partner facility is confirmed in Kanpur, and Lucknow is the nearest other city we cover. If PRP is given in Lucknow, we will say so at the top of this page, with the trip time. Until then, this page shows how to plan a course and what to check.",
    partners: [{ type: "Day-care facility or clinic in Kanpur (to be confirmed)", count: null }],
    accreditation: null,
    checks: prpChecks("If care is in Lucknow, ask which visits must be there."),
  },
  travel: {
    intro: "A PRP course repeats a short visit every four to six weeks in many plans. For Kanpur, plan the interval around a trip you can make again and again.",
    airport: "Kanpur civil airport and Lucknow airport (service and schedules to be verified)",
    station: "Kanpur Central, and Charbagh in Lucknow (to be verified)",
    stayDays: "Same day for Kanpur visits. A Lucknow visit is a day trip",
    metro: "Kanpur has a metro line that is partly open, and the part open is to be checked against any facility. {sample} After a scalp session, a cab with a cap is easier than a crowded vehicle.",
    roadTimes: [
      { from: "Unnao", time: "30 to 60 min", tip: "Close enough for a session and a same-day return" },
      { from: "Kanpur Dehat", time: "40 to 80 min", tip: "An early slot avoids afternoon heat" },
      { from: "Fatehpur", time: "70 to 110 min", tip: "Ask whether the gap between sessions can be longer" },
      { from: "Lucknow", time: "100 to 150 min", tip: "The other city we cover. Compare the trips before you commit to a course" },
    ],
    privacyNote: "In a mid-sized city many people know each other. You do not have to explain visits, and a clinic should keep the treatment name out of messages.",
    mapCaption: "Travel into Kanpur from nearby towns, and the road to Lucknow, no building shown.",
  },
  localContext: [
    { text: "NEEDS REAL DATA: whether any partner facility exists in Kanpur for PRP, and its type", source: "", asOf: "" },
    { text: "NEEDS REAL DATA: Kanpur to Lucknow rail timings and road time, from a map or timetable with a date", source: "", asOf: "" },
    { text: "NEEDS REAL DATA: Kanpur air quality record (public CPCB station data) and groundwater hardness", source: "", asOf: "" },
  ],
  usefulness: "For readers in Kanpur and nearby towns who must decide whether PRP sessions are local or in Lucknow, with notes on train timings for a four to six week interval, local reviews, and dust and hard-water questions that carry no claim.",
  localCopy: [
    "In Kanpur a PRP course raises one question first: do sessions happen here or in Lucknow.",
    "A four to six week gap suits a regular train or road trip if the timings are checked.",
    "Reviews may be done locally if the plan is written down for a Kanpur doctor.",
  ],
  localNotes: [
    { heading: "Do I travel to Lucknow", text: "If PRP is given only in Lucknow, each session is a day trip. Ask whether any part of the course can be in Kanpur, and which visits need the doctor who made the plan." },
    { heading: "Rail timings for a four to six week visit", text: "A regular gap between sessions suits a fixed train or road trip. Check the timings and the return before you book the course. Winter fog can delay trains, so keep a spare date." },
    { heading: "Reviews done locally", text: "Ask whether a Kanpur doctor can do a simple review if the plan is written down, and what the planning doctor needs to see afterwards. A review by video with photos in daylight may also be possible." },
    { heading: "Dust and hard water", text: "Kanpur is an industrial city and people ask about dust and water and their hair. We make no claim that either causes hair thinning. Ask the doctor which shampoo suits your scalp. {pending}" },
  ],
  sections: [
    {
      heading: "Is it in Kanpur or in Lucknow",
      paragraphs: [
        "That depends on whether a facility in Kanpur provides PRP, and none is confirmed yet. If the course is in Lucknow, each session is a day trip, and the plan should say how many trips there are and which of them are essential.",
        "Ask whether the first session and a final review need to be in person, and whether the middle sessions can be done by a local doctor under the plan. Not every part of a course can be moved, and the doctor decides.",
      ],
    },
    {
      heading: "Timing the gap between sessions",
      paragraphs: [
        "In many plans the gap is around four to six weeks, and the reviewer will confirm a general range. That gap is easy to fit to a regular train or road trip, if the timings are checked. Put the dates on a calendar, and keep a spare date in case of winter fog or a delayed train.",
        "A gap that stretches to months changes the plan, so ask the clinic what to do if you miss a date.",
      ],
    },
    {
      heading: "Cold winters, hot summers and the scalp",
      paragraphs: [
        "Kanpur has cold dry winters and hot summers, with dust and industrial air through the year. After a scalp session the doctor will say when to wash your hair and what to avoid. We make no claim that dust, heat or cold changes how PRP works.",
        "In winter, hot water on a tender scalp can sting. In summer, sweat and dust are the concern. Ask what to do in the month you book.",
      ],
    },
    {
      heading: "Water, shampoo and hair questions",
      paragraphs: [
        "Water supply in the city mixes the river, piped supply and groundwater, and hardness differs by neighbourhood. People ask about hair and water. We make no claim that water causes hair thinning. Ask the doctor which shampoo suits your scalp and how often to wash.",
      ],
    },
    {
      heading: "Referral, language and a second opinion",
      paragraphs: [
        "Hindi and Hinglish are common in clinics. A family doctor can refer you and keep your notes, which helps if you see doctors in two cities. If hair thinning is the reason, ask whether thyroid, iron and hormone levels have been checked, and bring the reports.",
        "If a person promises a result before a doctor has examined you, take that as a reason to ask for the plan in writing and a second opinion.",
      ],
    },
  ],
};

// ------------------------------------------------------------------ cost lines and cost page
// Pending price lines: no figures yet, so the template shows the "To be confirmed" chip.
const prpCosts: CostLine[] = [
  line(T, 1, "Consultation and scalp or skin check", "The doctor and the clinic type"),
  line(T, 2, "One PRP session, scalp", "The area and the kit used"),
  line(T, 3, "One PRP session, face", "The area and the kit used"),
  line(T, 4, "Under-eye PRP, if the doctor advises", "The area and the plan"),
  line(T, 5, "Add-on with microneedling", "Whether the add-on is advised"),
  line(T, 6, "Course total: sessions x price per session", "Number of sessions set by the doctor. Shown as a formula, not a figure"),
  line(T, 7, "Review visit, medicines and blood tests", "Ask in writing before you book"),
];

export const prpCostPage: NationalCostPage = {
  seoTitle: "PRP Treatment Cost in India: What Changes the Price",
  metaDescription: "What drives the cost of PRP for hair and skin: sessions, clinic type, kit, add-ons and follow-up. Labelled sample ranges and what a quote should list.",
  h1: "PRP treatment cost in India",
  answer: "PRP is priced per session and usually needs several, so the course total matters more than one session fee. The sample ranges below show a single session and the formula for a course, with source and date shown once quotes arrive. Then comes what changes the number.",
  unit: "session",
  rangeHeading: "Sample lines per session and per course",
  rangeCaption: "Per-session lines, then the course as a formula. Each line is a separate case with its own range.",
  planner: {
    heading: "From one session to a course total",
    formula: "Course total = consultation + (sessions x price per session) + add-ons + reviews, medicines and tests",
    steps: [
      "Ask the doctor how many sessions and what gap between them.",
      "Multiply the number of sessions by the price of one session in the written quote.",
      "Add any microneedling or other add-on, and reviews, medicines and tests that are not in the quote.",
      "Compare the total for the same number of sessions between clinics, not the price of one session.",
    ],
  },
  factors: [
    { factor: "Area treated", why: "Scalp, face and under-eye need different amounts of work and time." },
    { factor: "Number of sessions", why: "A plan usually has several sessions spaced weeks apart, so the course total matters." },
    { factor: "Kit and method", why: "The blood-draw kit and the method used to spin the sample are priced differently." },
    { factor: "Who performs it", why: "A doctor-led clinic and other settings price it differently." },
    { factor: "Add-ons", why: "Microneedling or other add-ons are priced on top of the base session." },
    { factor: "Clinic type", why: "A day-care clinic and a hospital outpatient department structure fees differently." },
    { factor: "City", why: "Rents and wages differ between cities, and so do fees." },
  ],
  notIncluded: [
    "Sessions beyond the course in the plan",
    "Microneedling or other add-ons",
    "Medicines for hair, if prescribed",
    "Blood tests for medical causes",
    "Review visits and aftercare products",
    "Treatment of a reaction",
    "Your travel and time off for repeat visits",
  ],
  compareQuotes: [
    "Ask each clinic for the number of sessions, the gap between them and the course total in writing.",
    "Compare totals for the same number of sessions, and not the price of one session.",
    "Ask who draws the blood and injects, and whether the kit is single-use and sealed.",
    "Ask what happens, and what you pay, if you see no change.",
    "Pay for one session before a package, and be careful of any package to prepay.",
  ],
  insurance: "PRP for hair or skin is usually treated as cosmetic, and most health policies do not pay for it. Ask your insurer in writing before you start.",
  payment: "Sessions are usually paid for one at a time. Package plans and instalments depend on the clinic and the lender, and terms are not shown here. {tbc}",
  method: "No figure is shown yet. When quotes arrive, each line will show the source type, the number of data points and the date. A range needs at least three dated points from separate sources before it replaces the pending label. Figures from other websites are not used, and one city's range is not used for another.",
  faqs: [
    { q: "How much does PRP cost per session in India?", a: "It depends on the area, the kit, the clinic and the add-ons. The range on this page is sample data until confirmed. Ask each clinic for the number of sessions and the course total in writing." },
    { q: "How many sessions will I need, and what does that do to the cost?", a: "Plans usually have several sessions, and the doctor sets the number. Multiply by the price of one session, then add add-ons, reviews and tests." },
    { q: "Why do quotes differ so much?", a: "Clinics use different kits, methods and numbers of sessions, and some include reviews and tests while others do not. Compare totals for the same plan." },
    { q: "Is a package cheaper?", a: "A package can lower the price per session, and it commits you before you know how you respond. Pay for one session first." },
    { q: "Does insurance cover PRP?", a: "Usually not, because it is treated as cosmetic. Ask your insurer in writing." },
    { q: "What should the quote list?", a: "The number of sessions, the gap, the price of each, the total, who draws the blood and injects, the kit, reviews, medicines, tests and what happens if there is no change." },
  ],
  sources: [
    { label: "National Medical Commission: public register of doctors", href: "https://www.nmc.org.in/" },
  ],
};

// ------------------------------------------------------------------ FAQs
const faqs: FaqRow[] = [
  faqRow(T, null, "prp-what", 1, "What is PRP?", "PRP means platelet-rich plasma. A small sample of your own blood is spun to concentrate platelets, and the platelet-rich part is injected into the scalp or skin. It is used as an add-on for hair thinning and for skin texture. A doctor decides whether it suits you."),
  faqRow(T, null, "prp-sessions", 2, "How many sessions are usually planned?", "Usually several, spaced a few weeks apart. The doctor sets the number, and the reviewer will give a general range after review. Ask for the course total as well as the price of one session."),
  faqRow(T, null, "prp-hair", 3, "Can PRP help with hair thinning?", "Evidence is mixed. Some people notice a change and some notice none, and no one can promise a result. A doctor should check for medical causes first and tell you plainly what to expect. See [what the evidence says](/learn/prp-for-hair-loss-evidence)."),
  faqRow(T, null, "prp-hurt", 4, "Does it hurt?", "Most people feel pinpricks and tenderness, and numbing cream may be used. The scalp can feel sore for a day or two. Tell the doctor if it is hard to bear."),
  faqRow(T, null, "prp-time", 5, "How long before any change?", "If there is a change, it is usually gradual and judged after some months. A doctor reviews it and decides whether to continue. Ask in advance what counts as a change."),
  faqRow(T, null, "prp-side", 6, "What are the side effects?", "Pain, bruising, swelling, a headache and scalp tenderness are the most common. Rarely, infection or an allergic reaction to numbing cream can occur. Some people see no visible benefit."),
  faqRow(T, null, "prp-who", 7, "Who should not have PRP?", "People with an active infection, a blood disorder, low platelets or blood thinners, pregnancy, cancer treatment or uncontrolled diabetes need a doctor's view first. So does anyone whose hair loss has a medical cause not yet checked."),
  faqRow(T, null, "prp-vs", 8, "How does PRP compare with minoxidil or finasteride?", "They are different. Minoxidil and finasteride are medicines a doctor prescribes and a person uses for months or longer. PRP is a procedure given in sessions. Some people use both, and a doctor decides what suits you."),
  faqRow(T, null, "prp-cost", 9, "How much does it cost, and why do quotes differ?", "Kits, methods, sessions, add-ons and clinic type all change the total. Read the [cost page](/cost/prp-treatment), and ask each clinic for the course total in writing. Figures are sample data until confirmed."),
  faqRow(T, null, "prp-face", 10, "Is PRP for the face the same as for hair?", "The idea is the same, and the injection site and aim differ. Evidence for skin is limited and results vary. See [PRP for the face](/learn/prp-face-evidence)."),

  // ---- Delhi
  faqRow(T, "delhi", "prp-delhi-workday", 20, "Can I do sessions on a work day near a metro line?", "Many people do. A session is short, and you go home after. Ask which slots are free, and keep the same weekday and time for each session."),
  faqRow(T, "delhi", "prp-delhi-winter", 21, "Does winter pollution change skin PRP timing?", "We make no claim. Ask the dermatologist what is known and how to protect treated skin. The reviewer will confirm the wording for Delhi."),
  faqRow(T, "delhi", "prp-delhi-gap", 22, "How far apart are visits?", "The doctor sets the gap, and in many plans it is a few weeks. The reviewer will give a general range. Ask for every date at the first visit."),
  faqRow(T, "delhi", "prp-delhi-job", 23, "Can I fit a course around a full-time job?", "Often, with a fixed slot and a calendar. Count every session and review as a trip, and tell the doctor if the total is more than you can keep."),

  // ---- Gurgaon
  faqRow(T, "gurgaon", "prp-ggn-name", 20, "Gurgaon or Gurugram: is it the same place?", "Yes. Both spellings are used for the same city in Haryana. This page uses Gurgaon because more people search for it."),
  faqRow(T, "gurgaon", "prp-ggn-evening", 21, "Are evening slots available after office?", "That depends on the clinic. Ask which days and until what time, and whether an evening slot can be fixed for the whole course."),
  faqRow(T, "gurgaon", "prp-ggn-metro", 22, "Which Rapid Metro route reaches the clinic?", "That is to be confirmed once a facility is named. Sikandarpur is on the Rapid Metro and HUDA City Centre is on the Yellow Line. Ask the clinic how far it is from either."),
  faqRow(T, "gurgaon", "prp-ggn-delhi", 23, "Can I come from Delhi each time?", "Many people do. Count the trips for the whole course, and compare a Delhi plan with a Gurgaon one on the total and the number of trips."),

  // ---- Lucknow
  faqRow(T, "lucknow", "prp-lko-travel", 20, "Do I need to travel from a small town for each session?", "A session needs you at the clinic, and some reviews may be by video. Ask which visits need you in person, and count only those as trips."),
  faqRow(T, "lucknow", "prp-lko-holiday", 21, "Can sessions be six weeks apart around holidays?", "Often, if the doctor agrees. Fix the dates for the whole course at the first visit, and keep a spare date in case of a delay."),
  faqRow(T, "lucknow", "prp-lko-hindi", 22, "Is there a Hindi-speaking coordinator?", "Ask the clinic. The first call and the consultation can be in Hindi or Hinglish. Ask for the plan and the aftercare written in the language you read most easily."),
  faqRow(T, "lucknow", "prp-lko-where", 23, "Is PRP provided in Lucknow?", "That is to be confirmed. No partner facility is confirmed in Lucknow yet. If it is elsewhere, the page will say so at the top, with the distance."),

  // ---- Kanpur
  faqRow(T, "kanpur", "prp-knp-lucknow", 20, "Do I travel to Lucknow for PRP?", "That is to be confirmed. No partner facility is confirmed in Kanpur yet, and Lucknow is the nearest other city we cover. If care is there, the page will say so, with the trip time."),
  faqRow(T, "kanpur", "prp-knp-rail", 21, "Which train timings suit a four to six week visit?", "That is to be checked against a current timetable and added with a date. Plan a regular trip, keep a spare date for winter fog, and check the return as well."),
  faqRow(T, "kanpur", "prp-knp-local", 22, "Can reviews be done locally?", "Often, for a simple check, if the plan is written down for a Kanpur doctor. Ask which changes a local doctor may make and what the planning doctor needs to see."),
  faqRow(T, "kanpur", "prp-knp-dust", 23, "Does Kanpur's dust matter after a scalp session?", "We make no claim. Ask the doctor when you can wash your hair, what to use and what to wear outdoors for the first day."),
];

export const prp: SkinHairTopic = {
  treatment: {
    slug: T,
    seo: {
      title: "PRP Treatment for Hair and Skin: Cost, Sessions, Risks",
      description: "What PRP is, how many sessions doctors usually plan, what changes the price, recovery, side effects and who should wait. Results vary. Doctor reviewed.",
      cityTitle: "PRP Treatment in {city}: Cost, Sessions, Risks",
    },
    content: prpContent,
    display: {
      costMode: "options",
      priceLabel: "One PRP session, usual cost",
      priceLinkText: "The lines inside it",
      costHeading: "What PRP costs, per session and per course",
      costCaption: "Per-session ranges. The course total is sessions x per-session range. Sample data / To be confirmed.",
      operationHeading: "What PRP is and how it is made",
      recoveryHeading: "Recovery between sessions",
      recoveryTocLabel: "Recovery",
      timelineCaption: "What most people notice and do, by time since a session.",
      risksHeading: "Risks and side effects",
      riskGuideHref: "/prp-treatment#risks",
      heroPlate: "none",
      operationPlate: "none",
      labels: {
        techniquesHeading: "PRP, medicines, microneedling and transplant compared",
        techniquesCaption: "Plain differences between options for thinning hair. No ranking.",
        tocTechniques: "How it compares",
      },
      tocLabels: { surgery: "What it is", choices: "Hair and skin" },
    },
  },
  costUnit: "session",
  includeKeys: prpIncludeKeys,
  costPage: prpCostPage,
  costLines: prpCosts,
  faqs,
  cityPages: [prpDelhi, prpGurgaon, prpLucknow, prpKanpur],
};
