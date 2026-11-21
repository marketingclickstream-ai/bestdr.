import type { CityTreatmentPage, CostLine, FacilityData, FaqRow, IncludeKeyDef, NationalCostPage, SkinHairTopic, TreatmentContent } from "../types";
import { SLUGS } from "../slugs";
import { cityBase, faqRow, line } from "./shared";

// Hair transplant: hub, four city pages, cost lines, FAQs and the national cost page.
// Rules applied: no density, graft survival or growth percentages. No claim of regrowth, thick hair or a fixed result.
// No "natural", "restore" or the banned permanence word. "How long do transplanted hairs last" answers that query.
// No device or brand names. Finasteride and minoxidil are named by generic name only, in plain information.
// Pending a plastic surgeon or trained hair surgeon reviewer.

const T = SLUGS.hairTransplant;
const PRP = `/${SLUGS.prp}`;

export const hairTransplantIncludeKeys: IncludeKeyDef[] = [
  { key: "surgeon", label: "Who performs each step", ask: "Who extracts the grafts, who makes the sites and who implants, and what is their training?" },
  { key: "anaesthesia", label: "Local anaesthesia", ask: "What is used, who gives it, and is it in the price?" },
  { key: "theatre", label: "Procedure room and day-care stay", ask: "Is the facility fee in the price, and is an overnight stay needed?" },
  { key: "consumables", label: "Blades, tools and dressings", ask: "Are all single-use items in the price?" },
  { key: "medicines", label: "Medicines after the procedure", ask: "Which medicines are included, and which do I buy?" },
  { key: "followups", label: "Follow-up visits", ask: "How many reviews are in the price, and what does an extra one cost?" },
];

// TODO-VERIFY: Norwood grade statements, the recovery calendar, what a graft contains and the typical graft bands are general
// descriptions for the reviewer to confirm or replace. No density, survival or growth percentages are used anywhere.
export const hairTransplantContent: TreatmentContent = {
  dek: "A hair transplant moves hair follicles from a donor area, usually the back of the scalp, to thinning areas. It does not stop hair loss in the rest of the scalp, so many people also need medicines. Grafts needed, technique and sessions set the [cost](/cost/hair-transplant). Results vary, and a doctor decides who is a candidate.",

  shortAnswers: [
    {
      q: "What does it do?",
      a: "It moves follicles from a donor area to a thinning area. The rest of your hair keeps its own pattern of loss.",
      href: "#surgery",
      linkText: "What it does and does not do",
    },
    {
      q: "Who is a candidate?",
      a: "Adults with established loss and enough donor hair. A doctor examines the scalp and sets a plan.",
      href: "#candidacy",
      linkText: "Candidacy by Norwood grade",
    },
    {
      q: "How long is recovery?",
      a: "Scabs settle over about two weeks. Shedding comes after, and growth builds over many months.",
      href: "#recovery",
      linkText: "The recovery calendar",
    },
    {
      q: "What sets the price?",
      a: "Mostly the number of grafts times a rate per graft, plus extras. Ask for both in writing.",
      href: "#cost",
      linkText: "The cost lines",
    },
  ],

  operation: {
    lead: "A hair transplant is a procedure under local anaesthesia. Follicles are taken from a donor area, usually the back and sides of the scalp, and placed into small sites made in the thinning area. It is done in a day-care facility, and you go home or to a nearby stay the same day. A doctor decides whether it suits you.",
    body: "The transplanted hairs are meant to keep growing in their new place. Your other hairs can still thin over the years, which is why many people also use medicines such as minoxidil, or for some men finasteride, as a doctor advises. Read [how grafts are counted](/learn/hair-transplant-grafts-needed) and [the limits of the donor area](/learn/hair-transplant-donor-area-limits). If you are thinking of a milder option first, see [PRP treatment](" + PRP + "), which is a different procedure with a different aim.",
    caption: "Donor area at the back and sides of the scalp, and the thinning area at the front and top.",
    ask: "Am I a candidate, how many grafts do you plan, and what is the plan if growth is thin?",
    how: [
      "Consultation: the doctor examines the scalp, often with a magnified scalp check, asks about the pattern and family history, and checks the donor area. Tests may be advised.",
      "Planning: the doctor draws the hairline and the area to be covered, and gives a graft estimate in writing. The number can change after the exam.",
      "Anaesthesia: local anaesthesia is injected into the donor and recipient areas. You are awake.",
      "Extraction: follicles are taken from the donor area, either one by one or as a strip, by the method planned.",
      "Placement: small sites are made in the thinning area and the grafts are placed in them. This takes several hours, with breaks.",
      "Dressing and discharge: you receive wash instructions, medicines and a review date. A first wash visit may be planned for the next day.",
    ],
    whoItSuits: [
      { term: "Established loss", text: "Adults whose pattern of loss has settled, with enough donor hair for the area to be covered." },
      { term: "Realistic aims", text: "A plan that fits the donor supply. A doctor will say if the area you hope to cover is more than the donor can give." },
      { term: "Medical care alongside", text: "People who accept that medicines or other care may continue, because hair outside the transplant can keep thinning." },
      { term: "Time for recovery", text: "People who can manage a quiet first week, a period without sweat or sports, and several reviews over many months." },
    ],
  },

  techniques: {
    lead: "FUE, FUT and DHI are names for ways of taking and placing grafts. Clinics describe them differently, so ask what is meant. This table lists plain differences with no ranking.",
    rows: [
      { name: "FUE (follicular unit extraction)", how: "Follicles are taken one by one with a small punch, leaving tiny dot marks. The donor area is often shaved short, fully or in part", often: "People who want to keep a short haircut and accept shaving. Larger sessions take longer", ask: "How many hours of extraction, who does it, and will I be shaved?" },
      { name: "FUT (follicular unit transplantation, strip)", how: "A thin strip of scalp is taken from the donor area and divided into grafts under a microscope. This leaves a line scar that hair can cover", often: "People who plan to wear their hair longer and want many grafts in one session", ask: "Where will the scar be, how long will it be, and who cuts and closes it?" },
      { name: "DHI (direct hair implantation)", how: "A name used by some clinics for a method where grafts are loaded into a fine pen-like tool and placed without making the sites first. The wording differs between clinics", often: "Smaller areas, or people who want less shaving in the recipient area", ask: "What exactly is meant by this term at your clinic, and how does it change the price?" },
    ],
    note: "A doctor decides which method suits your scalp and your aim. Some clinics combine methods, and some use body hair when donor hair is limited, at the reviewer's confirmation.",
  },

  extraSections: [
    {
      id: "grafts",
      heading: "How grafts are counted",
      tocLabel: "Grafts",
      paragraphs: [
        "A graft is a small piece of scalp that holds one to a few hairs. Clinics count grafts, and sometimes count hairs, so ask which one a quote uses. The reviewer will confirm the usual range of hairs per graft. {pending}",
        "The doctor estimates the number from the size of the area, the pattern of loss and the donor supply. That estimate is a plan and not a promise, and it can change after the exam. Ask how the count was made and who counts the grafts on the day.",
        "A higher number is not better in itself. A donor area has a limit, and taking more than it can give can leave it thin. Ask what the donor limit is for you and how much is kept in reserve.",
      ],
      note: { label: "Ask this", text: "Will the quote use grafts or hairs, how will you count them on the day, and what happens to the price if the number changes?" },
    },
    {
      id: "candidacy",
      heading: "Who is a candidate, by Norwood grade",
      tocLabel: "Candidacy by Norwood grade",
      lead: "The Norwood scale describes patterns of male hair loss from grade 2 to grade 7. General notes for the reviewer to confirm. Only a doctor who examines you can say where you stand.",
      table: {
        caption: "General notes by pattern. A doctor decides for you.",
        head: ["Pattern", "Usual donor situation", "What a doctor checks", "May need to wait because"],
        rows: [
          ["Grade 2", "Donor usually ample", "Whether the loss is early and still changing", "The pattern is not settled, and medicines may be tried first"],
          ["Grade 3", "Donor usually ample", "Hairline recession, crown thinning, and family history", "Loss may continue, so the plan must allow for it"],
          ["Grade 4", "Donor usually enough for the front", "Size of the area against the donor supply", "A large area may need more than one session"],
          ["Grade 5", "Donor usually limited for full cover", "How much can be covered, and the order of areas", "Expectations may be higher than the donor allows"],
          ["Grade 6", "Donor often limited", "Whether partial cover is realistic", "Donor supply may not match the area"],
          ["Grade 7", "Donor often very limited", "Whether a transplant is advised at all", "Other options may fit better, and body hair may be discussed"],
        ],
      },
    },
    {
      id: "donor",
      heading: "Donor area limits",
      tocLabel: "Donor limits",
      paragraphs: [
        "The donor area is the part of the scalp that supplies the grafts. It holds a limited number of follicles, and it cannot be refilled. A plan that takes too many grafts now can leave nothing for later sessions, and can leave the donor area looking thin.",
        "Ask the doctor how many grafts the donor can give over your lifetime, how many this session uses and what is kept in reserve. If hair loss goes on, the plan should allow for that.",
      ],
    },
    {
      id: "shock-loss",
      heading: "Shock loss and the growth timeline",
      tocLabel: "Shock loss and timeline",
      paragraphs: [
        "In the weeks after a transplant, the transplanted hairs often shed. This is called shock loss when it happens in nearby hairs too, and it is common, though not in every person. New hairs begin later, often thin at first, and the reviewer will confirm the usual months. {pending}",
        "Growth builds over many months, and the final look is usually judged after a year or more. No one can promise a result, and a doctor reviews yours. Call the clinic if you are worried about shedding or if the scalp looks infected.",
      ],
      note: { label: "How long do transplanted hairs last", text: "Transplanted follicles are meant to keep growing where they are placed, and hairs around them can still thin with time. A doctor can tell you what to expect for your pattern." },
    },
    {
      id: "choose",
      heading: "How to choose a doctor and clinic",
      tocLabel: "How to choose",
      bullets: [
        "Check the registration of the doctor who performs the key steps, whatever name the brochure carries.",
        "Ask who extracts grafts, who makes the sites and who places them.",
        "Ask for the graft number, the method and what happens if the number changes, all in writing.",
        "Ask about donor limits and how much is kept in reserve.",
        "Ask what is included in the price, and what the follow-up schedule is.",
        "Be careful of a package sold before an in-person exam, and of any promise of a fixed density or result.",
      ],
    },
  ],

  recovery: {
    lead: "This is the usual shape of recovery, and your doctor sets yours. Day and month ranges are general and are for the reviewer to confirm. {pending}",
    body: "Plan a quiet first week. Scabs and redness settle over about two weeks. Hairs often shed after that, and new growth comes later and builds slowly. Follow the wash instructions you are given, and do not rub or scratch the grafts.",
    highlights: [
      { pre: "about", big: "1 to 2 weeks", text: "Scabs and crusts fall and redness settles" },
      { pre: "weeks", big: "2 to 6", text: "Transplanted hairs may shed. This is common and not in everyone" },
      { pre: "month", big: "12 to 18", text: "The final look is usually judged. Growth builds slowly" },
    ],
    timeline: [
      { when: "Day 0", notice: "Dressing, tenderness, swelling risk on the forehead", doThis: "Sleep with your head raised, as advised. Do not touch the grafts." },
      { when: "Day 1 to 3", notice: "Tight scalp, mild swelling, small scabs", doThis: "First wash as instructed. Do not rub the grafts." },
      { when: "Day 7 to 14", notice: "Scabs and crusts fall, redness remains", doThis: "Keep to the wash routine. Attend the review visit." },
      { when: "Week 2 to 6", notice: "Transplanted hairs may shed", doThis: "Do not panic. Call the clinic if you are worried." },
      { when: "Month 3 to 4", notice: "New growth often begins thin", doThis: "Continue medicines if advised, and attend reviews." },
      { when: "Month 6 to 9", notice: "Growth and thickness build", doThis: "Keep to the schedule. Do not judge yet." },
      { when: "Month 12 to 18", notice: "The final look is usually judged", doThis: "Final review. Discuss whether another session is advised." },
    ],
    grid: {
      cols: ["Day 1", "Day 3", "Day 7", "Wk 2"],
      rows: [
        { label: "Desk work", cells: [{ state: "n", text: "No" }, { state: "m", text: "Cover" }, { state: "y", text: "Yes" }, { state: "y", text: "Yes" }] },
        { label: "Wash the scalp", cells: [{ state: "m", text: "As told" }, { state: "m", text: "As told" }, { state: "y", text: "Yes" }, { state: "y", text: "Yes" }] },
        { label: "Sports or sweating", cells: [{ state: "n", text: "No" }, { state: "n", text: "No" }, { state: "n", text: "No" }, { state: "m", text: "Ask" }] },
        { label: "Cap or helmet on grafts", cells: [{ state: "n", text: "No" }, { state: "n", text: "No" }, { state: "m", text: "Ask" }, { state: "m", text: "Ask" }] },
        { label: "Strong sun", cells: [{ state: "n", text: "No" }, { state: "n", text: "No" }, { state: "m", text: "Cover" }, { state: "m", text: "Cover" }] },
      ],
    },
    closing: "Never assume a fixed recovery. Swelling, scabbing and shedding vary between people. Plan events and travel months ahead.",
  },

  risks: {
    lead: "Every procedure carries risk. These are the ones people most often ask about, in plain words, and what to ask. This is not a complete list, and your doctor will go through yours.",
    rows: [
      { risk: "Swelling and bruising", means: "Swelling of the forehead, and sometimes around the eyes, in the first days.", ask: "What can I do, and when should I call?" },
      { risk: "Scabbing and redness", means: "Small scabs and pink skin for one to a few weeks.", ask: "How should I wash, and when can I go out?" },
      { risk: "Numbness", means: "A numb patch in the donor or recipient area, usually temporary.", ask: "How long does it usually last?" },
      { risk: "Shedding (shock loss)", means: "Transplanted or nearby hairs shed in the weeks after.", ask: "What is normal, and when should I call?" },
      { risk: "Infection", means: "Rare. Pain, pus, fever or spreading redness need early treatment.", ask: "What signs should I report, and who do I call?" },
      { risk: "Folliculitis", means: "Small pimples around the grafts.", ask: "How is it treated?" },
      { risk: "Thin growth in some grafts", means: "Not every graft grows as hoped, and results vary.", ask: "What is the plan if growth is thin, and does a repeat session cost extra?" },
      { risk: "Scarring in the donor area", means: "A line scar after strip removal, and dot marks after punch removal.", ask: "Where will the marks be, and can my hair cover them?" },
      { risk: "A poorly planned hairline", means: "A hairline that does not suit the face or age, or looks uneven.", ask: "Who draws the hairline, and will I approve it before you start?" },
      { risk: "Loss continuing outside the transplant", means: "Other hairs can keep thinning.", ask: "Which medicines do you advise, and for how long?" },
      { risk: "Dissatisfaction with density", means: "The result may be lower or different from what you hoped.", ask: "What should I expect for my donor and my area?" },
    ],
    alert: "Call your doctor straight away for fever, spreading redness or heat, pus, severe pain or swelling that keeps getting worse. If you cannot reach the doctor, go to the nearest emergency department.",
    wait: [
      "You are under about 25 and your pattern is not yet settled",
      "You have a scalp infection or an active inflammatory scalp disease",
      "You have uncontrolled diabetes or a bleeding disorder",
      "Your donor area is thin",
      "You expect a density the donor cannot give",
      "You have recently had a crash diet or illness with shedding",
      "You have active alopecia areata",
      "You smoke or take blood thinners, and have not asked the doctor",
    ],
    tell: [
      "All medicines, supplements and blood thinners you take",
      "Diabetes, thyroid, bleeding or skin conditions",
      "Family history of hair loss",
      "Past hair procedures or treatments",
      "Allergies to anaesthetics, dressings or antibiotics",
      "Smoking and alcohol",
    ],
  },

  patientQuestions: [
    { q: "Am I a candidate?", href: "#candidacy", linkText: "Read: Norwood grade" },
    { q: "How many grafts will I need?", href: "#grafts", linkText: "Read: how grafts are counted" },
    { q: "FUE, FUT or DHI?", href: "#surgery", linkText: "Read: the methods" },
    { q: "When will hair grow?", href: "#shock-loss", linkText: "Read: the timeline" },
    { q: "What will it cost?", href: "#cost", linkText: "Read: the cost lines" },
    { q: "How do I choose a doctor?", href: "#choose", linkText: "Read: how to choose" },
  ],

  quoteProcess: [
    { title: "You talk to a coordinator", text: "By phone or WhatsApp. Say where you live and what you want to ask. No pressure to book." },
    { title: "A doctor examines your scalp", text: "In person, or by photos for a first view. A graft number is given only after an in-person exam." },
    { title: "You receive a written plan", text: "The method, the graft number and how it is counted, who performs each step, the price, and what is included." },
    { title: "You decide in your own time", text: "Compare plans for the same grafts and method. Do not pay a package before the exam." },
    { title: "Reviews after the procedure", text: "A coordinator check-in the next day, a first wash visit, a review around day 10, and later reviews." },
  ],

  quoteChecks: [
    "state the number of grafts, how they are counted and the rate per graft?",
    "name the method and say who performs each step?",
    "say how many sessions are planned?",
    "list medicines, PRP or other add-ons and follow-up visits separately?",
    "include GST in the total, or show it as a separate line?",
    "say what happens, and what you pay, if growth is thin?",
  ],

  extras: [
    "Medicines for hair, such as minoxidil, if prescribed",
    "PRP or other add-ons",
    "A second session, if the area is large",
    "Follow-up visits beyond those in the plan",
    "Tests before the procedure",
    "GST, if shown separately",
    "A stay near the facility",
    "Your travel and time off",
  ],

  insurance:
    "Insurance. A hair transplant for cosmetic reasons is usually not covered by health policies. Ask your insurer in writing before you book, and keep the plan. We do not promise cashless approval.",
  payment:
    "Payment. Payment methods and instalments depend on the clinic and the lender and are not shown here. Do not pay a package before an in-person exam. {tbc}",

  // TODO-VERIFY: the reviewer opens each source and confirms the URL and the facts used.
  sources: [
    { label: "National Medical Commission: public register of doctors", href: "https://www.nmc.org.in/" },
  ],

  footnotes: [
    "Medical review is pending. The reviewer, qualification and review date will be shown once a registered doctor signs off.",
    "Norwood grade notes, graft ranges, the recovery calendar and shock loss timing are general and to be confirmed by the reviewer.",
    "No density, graft survival or growth percentage is given, because none has been verified.",
    "Whether a transplant is done by a qualified practitioner is a public-health concern. Check registration and who performs each step.",
    "Insurance and payment wording is general and to be confirmed.",
  ],
};

// ------------------------------------------------------------------ city pages
// TODO-VERIFY (all four cities): travel times, station and airport names, stays and follow-up arrangements are general
// and must be checked against the partner facility and a dated public source before any page leaves noindex.
// A hair transplant is one long visit plus a first wash visit and a review around day 10, so city text covers the stay,
// the ride home with a dressing and which reviews can be local. Travel text must not repeat the PRP page for the same city.

const htChecks = (focus: string): FacilityData["checks"] => [
  { check: "Registered doctor for key steps", why: "Who extracts and places grafts decides the result and the risk", ask: "Who performs extraction, site making and placement, and where can I check the registration?" },
  { check: "Graft count in writing", why: "The bill is grafts times a rate, so the count must be written down", ask: "Can I have the graft number, how it is counted and the rate in writing?" },
  { check: "Donor limits and reserve", why: "The donor area is limited and cannot be refilled", ask: "How much donor hair do I have, and how much is kept in reserve?" },
  { check: "What is included", why: "Medicines, reviews and add-ons are often extra", ask: `What is included, what is extra, and what if growth is thin? ${focus}` },
  { check: "Follow-up schedule", why: "A first wash and a review at about day 10 are common", ask: "Which reviews are in person, and can any be done near my home?" },
];

const htDelhi: CityTreatmentPage = {
  ...cityBase(T, "delhi"),
  seoTitle: "Hair Transplant in Delhi: Cost, Recovery, Risks",
  h1: "Hair transplant in Delhi",
  metaDescription: "Hair transplant in Delhi: sample cost lines, how grafts and technique change the bill, recovery, risks, and how to reach Delhi from nearby towns.",
  intro: "The sample total for a hair transplant in Delhi depends on grafts, technique and sessions. In Delhi the procedure is done in a day-care facility, and the number of nights and follow-up visits is to be confirmed by the partner. A doctor checks the donor area before giving a graft number.",
  includes: { surgeon: "varies", medicines: "varies", followups: "varies" },
  facilities: {
    intro: "No partner facility is confirmed in Delhi yet. A hair transplant is done in a day-care facility with a procedure room, and not on a hospital ward. This page will name the facility type once one is confirmed. Until then, use the questions below on any place you are considering.",
    partners: [{ type: "Day-care facility in Delhi (to be confirmed)", count: null }],
    accreditation: null,
    checks: htChecks("Ask about parking and attendant rules on the day."),
  },
  travel: {
    intro: "A transplant is a long day with a dressing at the end, and then a first wash visit and a review. The questions in Delhi are how to travel home after the day, whether to stay near the facility, and how smog and heat affect a healing scalp.",
    airport: "Indira Gandhi International Airport (to be verified)",
    station: "New Delhi, Old Delhi and Hazrat Nizamuddin stations (to be verified against the facility)",
    stayDays: "To be confirmed by the partner. Many plans use a same-day return or one night",
    metro: "After a long day with a dressing, a cab with an attendant is easier than the metro, and rush hours can be slow. {sample} Whether a nearby stay is available is added once a facility is confirmed.",
    roadTimes: [
      { from: "Noida", time: "50 to 90 min", tip: "A same-night return is possible, and the first wash visit is a second trip" },
      { from: "Ghaziabad", time: "60 to 100 min", tip: "Ask whether the first wash can be done by a local doctor" },
      { from: "Faridabad", time: "50 to 90 min", tip: "Plan the return for a time away from peak traffic" },
      { from: "Gurgaon", time: "50 to 90 min", tip: "Compare Gurgaon facilities before you commit" },
    ],
    privacyNote: "A cap and a loose scarf can cover a dressing on the way home. Photos of your scalp are health data, so ask where clinic photos are stored and who can see them.",
    mapCaption: "Travel into Delhi from nearby towns, no building shown.",
  },
  localContext: [
    { text: "NEEDS REAL DATA: which Delhi facility, if any, will do hair transplants, and its type", source: "", asOf: "" },
    { text: "NEEDS REAL DATA: winter and post-Diwali air quality in Delhi (public CPCB records, month and station)", source: "", asOf: "" },
    { text: "NEEDS REAL DATA: parking and attendant rules at the partner facility", source: "", asOf: "" },
  ],
  usefulness: "For readers in Delhi and nearby NCR towns who plan one long day for a transplant, with notes on the ride home with a dressing, whether to stay a night, smog and a healing scalp, and parking and attendant rules.",
  localCopy: [
    "A transplant in Delhi is one long day, so the ride home with a dressing is part of the plan.",
    "Smog and a fresh transplant is a question to put to the doctor, who may advise staying indoors.",
    "Parking and attendant rules differ between facilities, so ask before the day.",
  ],
  localNotes: [
    { heading: "Travelling home after the day", text: "You leave with a dressing and tender scalp. Arrange a cab or a driver, and bring someone with you. Avoid a crowded metro car, where a head can be bumped, and a two-wheeler is not advised." },
    { heading: "Is a stay needed", text: "Many people return home the same night, and some stay one night near the facility. If you live more than an hour away, ask whether a stay is available, and what it costs. {tbc}" },
    { heading: "Smog and a fresh transplant", text: "Poor air in winter, and after Diwali in particular, raises the question of going out in the first days. We make no claim about what smog does to grafts. Ask the doctor what to do, and plan the date with the season in mind. {pending}" },
    { heading: "Parking and attendant rules", text: "Some facilities limit who may enter with you. Ask whether an attendant can stay in the facility, where the driver can wait, and what the visiting hours are on the day." },
  ],
  sections: [
    {
      heading: "A long day, planned from the end",
      paragraphs: [
        "Plan a Delhi transplant from the ride home backwards. The procedure takes most of a day, you finish with a dressing and a tender scalp, and the road from the facility to your door may take an hour or more. Fix the cab, the attendant and the first-night bed before you book the date.",
        "Ask the clinic at what time the procedure usually ends, so that your return does not fall in the evening rush. If the ride is long, ask whether a stay nearby is possible.",
      ],
    },
    {
      heading: "Air quality, dust and the first week",
      paragraphs: [
        "Delhi has long spells of poor air in winter, and dust and heat in summer. A healing scalp is sensitive, so the doctor may advise staying indoors for the first days and covering the head when you go out. We make no claim about what pollution does to grafts.",
        "If you can choose the month, ask the doctor how the season changes the plan. A date in a stretch of very poor air, or in the hottest weeks, may be harder to manage.",
      ],
    },
    {
      heading: "Reviews: what must be in person",
      paragraphs: [
        "A first wash is often planned for the next day and a review around day 10. Ask which of these must be at the facility. If you live in Noida, Ghaziabad or Faridabad, a local doctor may do a simple check if the plan is written down, and a photo review may fill other gaps.",
        "Later reviews are usually spaced over months. Photos in daylight help the doctor see growth from far away.",
      ],
    },
    {
      heading: "Language and the written plan",
      paragraphs: [
        "Staff at most Delhi clinics speak Hindi and English, and some speak Punjabi. Ask for the graft number, the method and the aftercare written in the language you read most easily. Compare plans for the same graft number and method. {tbc}",
      ],
    },
    {
      heading: "Timing around weddings and work",
      paragraphs: [
        "Scabs and redness last about two weeks and shedding follows. If you have a wedding or a big event, plan the procedure at least a few months ahead, and do not book the week before. Ask your employer about leave for the first days and the reviews.",
      ],
    },
  ],
};

const htGurgaon: CityTreatmentPage = {
  ...cityBase(T, "gurgaon"),
  seoTitle: "Hair Transplant in Gurgaon: Cost, Recovery, Risks",
  h1: "Hair transplant in Gurgaon",
  metaDescription: "Hair transplant in Gurgaon (Gurugram): sample cost lines, how grafts and technique change the bill, recovery, risks and getting there from Delhi.",
  intro: "The sample total for a hair transplant in Gurgaon (also written Gurugram) depends on grafts, technique and sessions. The procedure is done in a day-care facility, and the number of nights and follow-up visits is to be confirmed by the partner. A doctor checks the donor area before giving a graft number.",
  includes: { surgeon: "varies", medicines: "varies", followups: "varies" },
  facilities: {
    intro: "A partner facility exists in Gurgaon for other treatments, and whether it does hair transplants is to be confirmed. We do not name it. In this city a transplant is done in a day-care facility with a procedure room, so ask what kind of place you are in.",
    partners: [{ type: "Day-care facility in Gurgaon (to be confirmed)", count: null }],
    accreditation: null,
    checks: htChecks("Ask whether the doctor who plans the work is the doctor who performs it."),
  },
  travel: {
    intro: "Many people in Gurgaon work in offices and commute by car or two-wheeler. The questions here are same-day return or one night, how to ride home with a dressing, and where to do the follow-up if you return to Delhi.",
    airport: "Indira Gandhi International Airport, Delhi (to be verified)",
    station: "HUDA City Centre (Yellow Line) and Sikandarpur (Rapid Metro)",
    stayDays: "To be confirmed by the partner. From Delhi, many plans use a same-day return or one night",
    metro: "After a long day with a dressing, a booked cab is easier than a metro change, and walking to a station in the heat is not advised. {sample} The distance to a facility is added once one is confirmed.",
    roadTimes: [
      { from: "South Delhi", time: "40 to 70 min", tip: "A late finish may meet the highway rush, so ask for an earlier start" },
      { from: "Noida", time: "70 to 110 min", tip: "A one-night stay may be easier than a long ride at night" },
      { from: "Faridabad", time: "60 to 100 min", tip: "Ask whether the first wash can be done locally" },
      { from: "Rewari", time: "60 to 90 min", tip: "Ask whether a stay in Gurgaon is available for the first night" },
    ],
    privacyNote: "Many clients come from nearby offices. You do not need to explain the days off. Ask the clinic to keep the procedure name out of messages and reminders.",
    mapCaption: "Travel into Gurgaon from Delhi and nearby towns, no building shown.",
  },
  localContext: [
    { text: "NEEDS REAL DATA: whether the Gurgaon partner facility does hair transplants, and its type", source: "", asOf: "" },
    { text: "NEEDS REAL DATA: groundwater hardness for Gurugram (Central Ground Water Board report, year)", source: "", asOf: "" },
    { text: "NEEDS REAL DATA: whether a stay near the Gurgaon facility is available, and the follow-up arrangements", source: "", asOf: "" },
  ],
  usefulness: "For people in Gurgaon (Gurugram) and those coming from Delhi who decide between a same-day return and one night, with notes on riding home with a dressing, a cap and helmet, follow-up in Delhi, and hard-water questions with no claim attached.",
  localCopy: [
    "In Gurgaon the first decision is a same-day return or one night, and who rides you home.",
    "A helmet or cap on a two-wheeler commute presses on grafts, so plan another way to travel.",
    "Follow-up can be split between Gurgaon and Delhi if the plan is written down.",
  ],
  localNotes: [
    { heading: "Gurgaon or Gurugram", text: "They are the same city. This page uses Gurgaon because more people search for it, and the body text also says Gurugram. Either spelling works when you ask a clinic." },
    { heading: "Same-day or one night from Delhi", text: "From South Delhi a same-day return is possible. From Noida or Faridabad, a night near the facility may be easier than a long ride in the dark. Ask what a stay costs and what it includes. {tbc}" },
    { heading: "Helmet or cap on a two-wheeler", text: "A helmet presses on grafts, so do not ride a two-wheeler home or for the first weeks without asking the doctor. Arrange a cab and ask when a soft cap is allowed and when a helmet can be used again." },
    { heading: "Gurgaon or Delhi for follow-up", text: "If you live in Delhi, ask whether the first wash and day 10 review can be done near home. A written plan and daylight photos can help a doctor elsewhere. Delhi is the nearest other city we cover." },
  ],
  sections: [
    {
      heading: "One long day and an office calendar",
      paragraphs: [
        "A Gurgaon transplant takes most of a day, and then you have a dressing and a quiet first week. Check your work calendar before you set a date, and ask your employer about the days you need. Many people find it easiest to take the procedure on a Thursday or Friday and use the weekend to rest.",
        "Plan the first wash and the review at about day 10 into the same calendar. A few meetings by video from home in the second week are usually easier than meetings in a crowded office.",
      ],
    },
    {
      heading: "Heat, air conditioning and a healing scalp",
      paragraphs: [
        "Gurgaon summers run from April into September, with heat and sweat, and air-conditioned offices dry the skin. After a transplant, sweat and sports are usually limited for a period, so a summer date may be harder. Ask the doctor how the month you pick changes the advice.",
        "We make no claim that heat or air conditioning changes how grafts grow.",
      ],
    },
    {
      heading: "Hard water, shampoo and the wash routine",
      paragraphs: [
        "Groundwater in parts of Gurugram is described as hard or salty, and many people ask whether it affects a healing scalp. We make no claim about that and no source is attached yet. Ask the doctor how to wash after the procedure, which water to use and which shampoo suits your scalp.",
      ],
    },
    {
      heading: "Referral habits and asking a second doctor",
      paragraphs: [
        "People often get a clinic name from a colleague. A name is a place to start, and not a check. Ask for the registration of the doctor who performs the key steps, the written graft number and what is included. A second opinion from a dermatologist you already see is a good step.",
        "Be careful of a package sold on the first call, and of a graft number given before the doctor has seen your scalp.",
      ],
    },
    {
      heading: "Monsoon and travel delays",
      paragraphs: [
        "Heavy rain can cause long delays in July and August. Leave a buffer for the return after the procedure and for the first wash visit. If rain stops you from reaching the clinic, call and ask what to do, and do not skip the wash routine.",
      ],
    },
  ],
};

const htLucknow: CityTreatmentPage = {
  ...cityBase(T, "lucknow"),
  seoTitle: "Hair Transplant in Lucknow: Cost, Recovery, Risks",
  h1: "Hair transplant in Lucknow",
  metaDescription: "Hair transplant in Lucknow: sample cost lines, how grafts and technique change the bill, recovery, risks, and how to reach Lucknow from nearby towns.",
  intro: "The sample total for a hair transplant in Lucknow depends on grafts, technique and sessions. Many people come from nearby towns for a day-care procedure and need a place to stay. The number of nights and follow-up visits is to be confirmed by the partner. A doctor checks the donor area before giving a graft number.",
  includes: { surgeon: "varies", medicines: "varies", followups: "varies" },
  facilities: {
    intro: "No partner facility is confirmed in Lucknow yet. A transplant is done in a day-care facility with a procedure room. If care ends up in another city, we will say so at the top of this page and not claim a local site.",
    partners: [{ type: "Day-care facility in Lucknow (to be confirmed)", count: null }],
    accreditation: null,
    checks: htChecks("From a nearby town, ask where you get your first wash done."),
  },
  travel: {
    intro: "For many people the trip is the hard part. You come from a district town, spend a long day at the facility, and then need to sleep somewhere before the first wash and the ride home.",
    airport: "Chaudhary Charan Singh International Airport, Lucknow (to be verified)",
    station: "Charbagh station and the Lucknow Metro (to be verified against the facility)",
    stayDays: "To be confirmed by the partner. From a district town, plan one or two nights",
    metro: "The Lucknow Metro runs along a north-south line and can help for the consultation. After the procedure, a booked cab to your stay is easier. {sample} A stay near the facility is added once one is confirmed.",
    roadTimes: [
      { from: "Barabanki", time: "40 to 70 min", tip: "A same-day return is possible, and the first wash is a second trip" },
      { from: "Unnao", time: "60 to 100 min", tip: "A night near the facility may be easier than a late drive" },
      { from: "Sitapur", time: "80 to 120 min", tip: "Plan one night, and ask where the first wash can be done" },
      { from: "Hardoi", time: "100 to 150 min", tip: "Plan two nights, and ask which reviews can be by video" },
    ],
    privacyNote: "In a smaller town a neighbour may notice a dressing. A cap on the way home helps, and a clinic should keep the procedure name out of messages.",
    mapCaption: "Travel into Lucknow from nearby districts, no building shown.",
  },
  localContext: [
    { text: "NEEDS REAL DATA: which Lucknow facility, if any, will do hair transplants, and its type", source: "", asOf: "" },
    { text: "NEEDS REAL DATA: availability and cost of a stay near the facility, and the first wash arrangement", source: "", asOf: "" },
    { text: "NEEDS REAL DATA: Lucknow climate normals for heat, dust and humidity (IMD) and Gomti water supply hardness", source: "", asOf: "" },
  ],
  usefulness: "For readers in Lucknow and nearby districts who come for a day-care procedure and need to plan a night or two, with notes on where to get the first wash, summer sweat rules, a Hindi-speaking coordinator and reviews by video.",
  localCopy: [
    "From a district town, a transplant is a day at the facility plus a night or two, so the stay is part of the plan.",
    "The first wash is the visit people forget to plan, and it must be somewhere you can reach.",
    "Summer sweat and dust shape the advice for the first weeks.",
  ],
  localNotes: [
    { heading: "Coming from a small town", text: "A day-care procedure is one long day. You arrive early, finish in the afternoon or evening and need somewhere to sleep. Bring a family member, and plan the ride home for the day after the first wash." },
    { heading: "A night near the facility", text: "Ask whether a stay is available and what it costs, or look for a place close to the facility so that you are not on the road at night. {tbc}" },
    { heading: "Where to get the first wash", text: "The first wash is usually the next day. If you leave on the same night, ask who will do it, how, and what to use. A local doctor can do it if the plan is written down, and the doctor who did the procedure may want a photo." },
    { heading: "Summer sweat rules", text: "Lucknow summers are hot, and sweat and dust are limited for a period after a transplant. Ask what to do on a day in May or June, and whether the month you picked makes things harder." },
  ],
  sections: [
    {
      heading: "A long day and a night away",
      paragraphs: [
        "For most people from Sitapur, Hardoi or Unnao, a transplant is not a day trip. The procedure runs from morning into the afternoon, you leave with a dressing, and the road home after dark is tiring. A night near the facility, and a first wash the next morning, make the plan easier.",
        "Ask the clinic for the full timeline: arrival time, likely finish, the wash visit, and the earliest sensible time to travel home. Put the dates on a calendar and check them against work, farming seasons, festivals and exams.",
      ],
    },
    {
      heading: "Dust, summer heat and monsoon",
      paragraphs: [
        "Lucknow summers are hot and dry, with dust, and the monsoon is humid. A healing scalp needs care in both. The doctor will say how long to avoid sweat and sun, and what to wear outdoors. Ask what to do on the first days in your month.",
        "We make no claim that dust or humidity changes how grafts grow. If your scalp is sore or you see pus, call the clinic.",
      ],
    },
    {
      heading: "Water and the wash routine",
      paragraphs: [
        "Households use a mix of piped supply and groundwater, and hardness varies by area. People ask whether water affects a healing scalp, and we make no claim about that. Ask the doctor how to wash, which water and shampoo to use and how often.",
      ],
    },
    {
      heading: "Referrals from a local doctor",
      paragraphs: [
        "In smaller towns, many people hear about hair transplants from a local doctor, a barber, a pharmacist or a relative. Ask a doctor you trust whether you are a candidate, and whether your thyroid, iron and hormone levels have been checked. Bring any reports.",
        "Be careful of a phone call or a message that quotes a graft number and a price before a doctor has seen your scalp. Ask for the registration of the doctor who performs the key steps.",
      ],
    },
    {
      heading: "Language, festivals and fog",
      paragraphs: [
        "Hindi and Hinglish are common in clinics, and you can ask for the plan and the aftercare in the language you read most easily. Festivals, weddings and winter fog change roads and trains, so keep a spare date for the review and a buffer for the return.",
      ],
    },
  ],
};

const htKanpur: CityTreatmentPage = {
  ...cityBase(T, "kanpur"),
  seoTitle: "Hair Transplant in Kanpur: Cost, Recovery, Risks",
  h1: "Hair transplant in Kanpur",
  metaDescription: "Hair transplant in Kanpur: sample cost lines, how grafts and technique change the bill, recovery, risks, and how to reach the facility from nearby towns.",
  intro: "The sample total for a hair transplant in Kanpur depends on grafts, technique and sessions. No partner facility is confirmed in Kanpur yet, so the first question is whether the procedure is done in Kanpur or in Lucknow, and what follow-up can be done near home. A doctor checks the donor area before giving a graft number.",
  includes: { surgeon: "varies", medicines: "varies", followups: "varies" },
  facilities: {
    intro: "No partner facility is confirmed in Kanpur, and Lucknow is the nearest other city we cover. If a transplant is done in Lucknow, we will say so at the top of this page, with the trip time. Until then, this page shows how to plan and what to check.",
    partners: [{ type: "Day-care facility in Kanpur (to be confirmed)", count: null }],
    accreditation: null,
    checks: htChecks("If the procedure is in Lucknow, ask which reviews must be there."),
  },
  travel: {
    intro: "For Kanpur the main question is which city does the procedure. If it is Lucknow, you travel for the day, return with a dressing and then plan the follow-up from Kanpur.",
    airport: "Kanpur civil airport and Lucknow airport (service and schedules to be verified)",
    station: "Kanpur Central, and Charbagh in Lucknow (to be verified)",
    stayDays: "To be confirmed. If the procedure is in Lucknow, plan a night there, or a long return the same day",
    metro: "Kanpur has a metro line that is partly open, and the part open is to be checked against any facility. {sample} After a procedure, a cab is easier than a crowded train.",
    roadTimes: [
      { from: "Unnao", time: "30 to 60 min", tip: "Close enough for a same-day return if the finish is early" },
      { from: "Kanpur Dehat", time: "40 to 80 min", tip: "Plan the return for daylight" },
      { from: "Fatehpur", time: "70 to 110 min", tip: "A night in the city may be easier than a late road" },
      { from: "Lucknow", time: "100 to 150 min", tip: "The other city we cover. Check the road and train times in current sources" },
    ],
    privacyNote: "In a mid-sized city many people know each other. You do not have to explain a dressing, and a clinic should keep the procedure name out of messages.",
    mapCaption: "Travel into Kanpur from nearby towns, and the road to Lucknow, no building shown.",
  },
  localContext: [
    { text: "NEEDS REAL DATA: which Kanpur or Lucknow facility will do the procedure, and its type", source: "", asOf: "" },
    { text: "NEEDS REAL DATA: Kanpur to Lucknow road time and expressway status, and the rail timetable, with a date", source: "", asOf: "" },
    { text: "NEEDS REAL DATA: Kanpur air quality record (public CPCB station data) and groundwater hardness", source: "", asOf: "" },
  ],
  usefulness: "For readers in Kanpur and nearby towns who must decide where the procedure takes place and how follow-up works after they return, with notes on the road to Lucknow, helmet use after a transplant, local reviews and dust and hard-water questions without a claim.",
  localCopy: [
    "In Kanpur the first question is which city does the procedure, and the second is who follows up at home.",
    "A helmet on a two-wheeler is a real question after a transplant and needs a plan for the first weeks.",
    "Follow-up near home is possible only if the written plan reaches a Kanpur doctor.",
  ],
  localNotes: [
    { heading: "Which facility does the procedure", text: "A facility in Kanpur or one in Lucknow may do the procedure, and none is confirmed yet. Ask where the doctor works and where the procedure takes place, and how long the trip is from your home." },
    { heading: "Follow-up after returning to Kanpur", text: "You may be back in Kanpur for the first wash and the review at about day 10. Ask whether a Kanpur doctor can do a simple check from a written plan, and what the planning doctor needs to see." },
    { heading: "Helmet use after a transplant", text: "A helmet presses on grafts. Ask when you can ride a two-wheeler again with one, and what to use in the meantime. Arrange a car or a cab for the ride home and the early reviews." },
    { heading: "Dust and hard water", text: "Kanpur is an industrial city, and people ask about dust and water and a healing scalp. We make no claim that either affects grafts. Ask the doctor how to wash and which shampoo suits your scalp. {pending}" },
  ],
  sections: [
    {
      heading: "Kanpur or Lucknow for the procedure",
      paragraphs: [
        "That depends on whether a facility in Kanpur does hair transplants, and none is confirmed yet. If the procedure is in Lucknow, it is a long day, with a night in the city, and a ride home with a dressing.",
        "Ask the clinic how long the procedure takes, when you will finish and what the earliest sensible time to travel is. If the road or train time is long, plan a night and travel the next day after the first wash.",
      ],
    },
    {
      heading: "Planning the follow-up from home",
      paragraphs: [
        "After the procedure, the first wash comes the next day and a review about ten days later, with later reviews over many months. Ask which of these must be with the doctor who did the work and which can be done in Kanpur.",
        "A written plan, daylight photos at set dates and a named person to reach at the clinic help a lot. If a problem shows up between reviews, you need a name to call.",
      ],
    },
    {
      heading: "Cold winters, hot summers and dust",
      paragraphs: [
        "Kanpur has cold dry winters and hot summers, with dust and industrial air through the year. A healing scalp needs care in each. In winter, very hot water can sting, and in summer, sweat and sun are the concern. The doctor will say what to avoid, and for how long.",
        "We make no claim that dust, heat or cold changes how grafts grow.",
      ],
    },
    {
      heading: "Water, shampoo and wash advice",
      paragraphs: [
        "Water supply in the city mixes the river, piped supply and groundwater, and hardness differs by neighbourhood. People ask about water and a healing scalp. We make no claim about it. Ask the doctor how to wash, and which shampoo suits you.",
      ],
    },
    {
      heading: "Referral, language and a second opinion",
      paragraphs: [
        "Hindi and Hinglish are common in clinics. A family doctor can refer you and keep your notes, which helps if you see doctors in two cities. Ask whether thyroid, iron and hormone levels have been checked, and bring the reports.",
        "If a person promises a result before a doctor has examined you, ask for the plan in writing and take a second opinion.",
      ],
    },
  ],
};

// ------------------------------------------------------------------ cost lines and cost page
// Pending price lines: no figures yet, so the template shows the "To be confirmed" chip.
const htCosts: CostLine[] = [
  line(T, 1, "Consultation and scalp check (trichoscopy)", "The doctor and the clinic type"),
  line(T, 2, "Per-graft rate, FUE", "Method and graft number"),
  line(T, 3, "Per-graft rate, FUT", "Method and graft number"),
  line(T, 4, "Per-graft rate, DHI", "Method and how the clinic defines it"),
  line(T, 5, "Typical bill for up to 2,000 grafts", "Formula: grafts x rate + extras"),
  line(T, 6, "Typical bill for 2,001 to 3,500 grafts", "Formula: grafts x rate + extras"),
  line(T, 7, "Second session (larger loss)", "Donor supply and the area left"),
  line(T, 8, "Medicines, PRP add-on and follow-up reviews", "Ask in writing before you book"),
];

export const hairTransplantCostPage: NationalCostPage = {
  seoTitle: "Hair Transplant Cost in India: Per Graft and Total Bill",
  metaDescription: "How hair transplant cost is built: grafts x rate, technique, sessions, extras. Labelled sample ranges with source and date. What a quote must list.",
  h1: "Hair transplant cost in India",
  answer: "The bill is usually grafts times a per-graft rate plus extras, so ask for the graft number and rate in writing. Sample per-graft and total ranges follow, dated and labelled once quotes arrive, then what raises or lowers the number.",
  unit: "graft",
  rangeHeading: "Sample per-graft rates and totals by graft band",
  rangeCaption: "Per-graft rates by method, then total bills by graft band. Each line is a separate case.",
  planner: {
    heading: "How the price is built",
    formula: "Total = grafts x rate per graft + medicines, add-ons and follow-up",
    steps: [
      "Ask the doctor for the graft number and how it was counted.",
      "Multiply the graft number by the rate per graft in the written quote.",
      "Add medicines, PRP or other add-ons, follow-up visits, tests and GST if they are not in the quote.",
      "Compare plans for the same graft number and method, not the headline rate.",
    ],
  },
  factors: [
    { factor: "Number of grafts", why: "The area to cover and the donor supply decide the count, and the count sets most of the bill." },
    { factor: "Method", why: "FUE, FUT and DHI take different time and skill, and clinics price them differently." },
    { factor: "Sessions", why: "A large area may need more than one session, and each adds its own cost." },
    { factor: "Who performs each step", why: "A doctor-led team and other settings price the same work differently." },
    { factor: "What is included", why: "Medicines, reviews and add-ons may or may not be in the rate." },
    { factor: "Facility", why: "A day-care facility and a hospital outpatient department structure fees differently." },
    { factor: "City", why: "Rents and wages differ between cities, and so do fees." },
  ],
  notIncluded: [
    "Medicines for hair, such as minoxidil, if prescribed",
    "PRP or other add-ons",
    "A second session",
    "Follow-up visits beyond those in the plan",
    "Tests before the procedure",
    "GST, if shown separately",
    "A stay near the facility",
    "Your travel and time off",
  ],
  compareQuotes: [
    "Ask each clinic for the graft number, how it is counted and the rate per graft, in writing.",
    "Compare totals for the same graft number and method, and not the headline rate.",
    "Ask who performs each step, and where you can check their registration.",
    "Ask what happens, and what you pay, if growth is thin.",
    "Do not pay a package before an in-person exam.",
  ],
  insurance: "A hair transplant for cosmetic reasons is usually not covered by health policies, and instalment terms depend on the lender. Ask your insurer in writing before you book.",
  payment: "Payment methods and instalments depend on the clinic and the lender, and terms are not shown here. GST wording is to be confirmed. {tbc}",
  method: "No figure is shown yet. When quotes arrive, each line will show the source type, the number of data points and the date. A range needs at least three dated points from separate sources before it replaces the pending label. Figures from other websites are not used, and one city's range is not used for another.",
  faqs: [
    { q: "How is a hair transplant priced?", a: "Usually as the number of grafts times a rate per graft, plus extras such as medicines, add-ons and reviews. Ask for the graft number and the rate in writing." },
    { q: "Does the method change the price?", a: "Often. FUE, FUT and DHI take different time and skill, and clinics define DHI in different ways. Compare plans for the same graft number and method." },
    { q: "How many grafts will I need?", a: "The doctor estimates it from the area, the pattern of loss and the donor supply, after an in-person exam. It is a plan and not a promise, and it can change." },
    { q: "What is usually not in the price?", a: "Medicines, PRP or other add-ons, extra follow-up visits, tests, GST if shown separately, a stay near the facility and a second session." },
    { q: "Does insurance cover it?", a: "Usually not, when it is done for cosmetic reasons. Ask your insurer in writing." },
    { q: "What should the quote list?", a: "The graft number and how it is counted, the method, who performs each step, the sessions, medicines, add-ons, follow-up, GST and what happens if growth is thin." },
  ],
  sources: [
    { label: "National Medical Commission: public register of doctors", href: "https://www.nmc.org.in/" },
  ],
};

// ------------------------------------------------------------------ FAQs
const faqs: FaqRow[] = [
  faqRow(T, null, "ht-methods", 1, "FUE, FUT or DHI: which is right?", "It depends on your scalp, your hair length and your aim. FUE takes follicles one by one, FUT takes a thin strip, and DHI is a name some clinics use for a pen-like placement method. A doctor decides after an exam. See [the methods compared](/learn/hair-transplant-fue-fut-dhi)."),
  faqRow(T, null, "ht-candidate", 2, "Am I a candidate at Norwood 3, 5 or 7?", "A doctor decides, after examining the scalp. Donor supply matters as much as the pattern. At higher grades the donor may not cover the area, and other options may fit. See [candidacy by grade](/learn/hair-transplant-norwood-grade-candidate)."),
  faqRow(T, null, "ht-grafts", 3, "How many grafts will I need?", "The doctor estimates it from the area, the pattern and the donor supply, and it can change after the exam. Ask how grafts are counted. See [how grafts are counted](/learn/hair-transplant-grafts-needed)."),
  faqRow(T, null, "ht-bill", 4, "What does the bill cover and what is extra?", "The rate usually covers the procedure and the team. Medicines, add-ons, extra reviews, tests and GST may be extra. Read the [cost page](/cost/hair-transplant) and ask for a written list."),
  faqRow(T, null, "ht-growth", 5, "When does hair start to grow?", "New hairs often begin around the third or fourth month, thin at first, and build over many months. The reviewer will confirm the usual months. No one can promise a result."),
  faqRow(T, null, "ht-shock", 6, "What is shock loss?", "Shedding of transplanted and sometimes nearby hairs in the weeks after the procedure. It is common but not in everyone. Call the doctor if you are worried. See [shock loss](/learn/hair-transplant-shock-loss)."),
  faqRow(T, null, "ht-last", 7, "How long do transplanted hairs last?", "Transplanted follicles are meant to keep growing where they are placed. Hairs around them can still thin with time. A doctor can tell you what to expect for your pattern."),
  faqRow(T, null, "ht-women", 8, "Can women have a hair transplant?", "Some can. Female hair loss is often spread over the scalp and needs a medical check first. A doctor decides. See [hair transplant for women](/learn/hair-transplant-for-women)."),
  faqRow(T, null, "ht-risks", 9, "What are the risks?", "Swelling, bruising, scabbing, numbness, shedding, folliculitis, infection, thin growth in some grafts, scarring in the donor area and a hairline that does not suit you. Ask about each in the consultation."),
  faqRow(T, null, "ht-meds", 10, "Will I still need medicines?", "Many people do, because hair outside the transplant can keep thinning. A doctor may advise minoxidil, or for some men finasteride. They are prescription medicines, so ask the doctor."),

  // ---- Delhi
  faqRow(T, "delhi", "ht-delhi-home", 20, "How do I travel home after the Day 1 wash?", "Arrange a cab or a driver, and bring someone with you. Avoid a crowded metro car, and do not ride a two-wheeler. Ask the clinic when you can travel on your own."),
  faqRow(T, "delhi", "ht-delhi-stay", 21, "Do I need to stay in Delhi?", "Many people go home the same night, and some stay one night near the facility. If you live more than an hour away, ask whether a stay is available and what it costs."),
  faqRow(T, "delhi", "ht-delhi-smog", 22, "What does the doctor say about smog and a fresh transplant?", "We make no claim about what smog does to grafts. Ask the doctor whether to stay indoors and cover the head, and how the season changes the plan."),
  faqRow(T, "delhi", "ht-delhi-attendant", 23, "What are the parking and attendant rules?", "They differ between facilities. Ask whether an attendant can stay, where the driver can wait and what the visiting hours are on the day."),

  // ---- Gurgaon
  faqRow(T, "gurgaon", "ht-ggn-night", 20, "Is it a same-day or one-night stay from Delhi?", "From South Delhi a same-day return is possible. From Noida or Faridabad a night near the facility may be easier. Ask what a stay includes and what it costs."),
  faqRow(T, "gurgaon", "ht-ggn-helmet", 21, "Can I wear a helmet or a cap on a two-wheeler commute?", "A helmet presses on grafts, so ask the doctor when it is allowed. Arrange a cab for the ride home and the early weeks, and ask when a soft cap is fine."),
  faqRow(T, "gurgaon", "ht-ggn-followup", 22, "Gurgaon or Delhi for the follow-up?", "If you live in Delhi, ask whether the first wash and day 10 review can be done near home. A written plan and daylight photos help a doctor elsewhere."),
  faqRow(T, "gurgaon", "ht-ggn-name", 23, "Gurgaon or Gurugram: is it the same place?", "Yes. Both spellings are used for the same city in Haryana. This page uses Gurgaon because more people search for it."),

  // ---- Lucknow
  faqRow(T, "lucknow", "ht-lko-small", 20, "I live in a small town. Can I come for a day-care procedure?", "Yes, many people do, and most plan one or two nights. A transplant is a long day, and the road home after dark is tiring. Ask the clinic for the full timeline."),
  faqRow(T, "lucknow", "ht-lko-night", 21, "Is there a stay near the facility?", "That is to be confirmed. No partner facility is confirmed in Lucknow yet. Ask what a stay costs and what it includes, and look for one close to the facility."),
  faqRow(T, "lucknow", "ht-lko-wash", 22, "Where do I get my first wash done?", "It is usually the next day. Ask the clinic who does it, and whether a local doctor can do it from a written plan if you return home."),
  faqRow(T, "lucknow", "ht-lko-summer", 23, "What are the summer sweat rules?", "Sweat and sun are usually limited for a period after a transplant. Ask the doctor what to do in May or June and how long to avoid heavy sweating."),

  // ---- Kanpur
  faqRow(T, "kanpur", "ht-knp-where", 20, "Which Kanpur or Lucknow facility does the procedure?", "That is to be confirmed. No partner facility is confirmed in Kanpur yet, and Lucknow is the nearest other city we cover. If care is there, the page will say so, with the trip time."),
  faqRow(T, "kanpur", "ht-knp-followup", 21, "What is the follow-up after I return to Kanpur?", "The first wash is the next day and a review comes around day 10. Ask whether a Kanpur doctor can do a simple check from a written plan, and what the planning doctor needs."),
  faqRow(T, "kanpur", "ht-knp-helmet", 22, "Can I wear a helmet after a transplant?", "A helmet presses on grafts, so ask when it is allowed. Arrange a car or a cab for the ride home and the early reviews."),
  faqRow(T, "kanpur", "ht-knp-dust", 23, "Does Kanpur's dust matter for a healing scalp?", "We make no claim. Ask the doctor how to wash, what to wear outdoors and how long to avoid dust and sweat."),
];

export const hairTransplant: SkinHairTopic = {
  treatment: {
    slug: T,
    seo: {
      title: "Hair Transplant: Techniques, Grafts, Recovery, Risks",
      description: "How a hair transplant works, FUE vs FUT vs DHI, how grafts are counted, who is a candidate, recovery, risks and what sets the price. Results vary.",
      cityTitle: "Hair Transplant in {city}: Cost, Recovery, Risks",
    },
    content: hairTransplantContent,
    display: {
      costMode: "options",
      priceLabel: "Typical bill, up to 2,000 grafts",
      priceLinkText: "The lines inside it",
      costHeading: "What a hair transplant costs, per graft and in total",
      costCaption: "Per-graft ranges by method and bills by graft band. Total = grafts x rate + extras. Sample data / To be confirmed.",
      operationHeading: "What a hair transplant does and does not do",
      recoveryHeading: "Recovery calendar",
      recoveryTocLabel: "Recovery",
      timelineCaption: "What most people notice and do, by time since the procedure.",
      risksHeading: "Risks and side effects",
      riskGuideHref: "/hair-transplant#risks",
      heroPlate: "none",
      operationPlate: "none",
      labels: {
        techniquesHeading: "FUE, FUT and DHI explained",
        techniquesCaption: "Plain differences between methods. No ranking.",
        tocTechniques: "FUE, FUT and DHI",
      },
      tocLabels: { surgery: "What it does", choices: "Methods and candidacy" },
    },
  },
  costUnit: "graft",
  includeKeys: hairTransplantIncludeKeys,
  costPage: hairTransplantCostPage,
  costLines: htCosts,
  faqs,
  cityPages: [htDelhi, htGurgaon, htLucknow, htKanpur],
};
