import type { CityTreatmentPage, CostLine, FacilityData, FaqRow, IncludeKeyDef, NationalCostPage, SkinHairTopic, TreatmentContent } from "../types";
import { SLUGS, TOXIN_SLUG } from "../slugs";
import { cityBase, faqRow, line } from "./shared";

// Anti-aging treatment: non-surgical options bundle page, four city pages, cost lines, FAQs and the national cost page.
// Ownership rules (master plan): PRP for the face belongs to /prp-treatment, so this page links to it and does not target
// the same keyword. Hydrafacial and acne belong to their own pages. Botulinum toxin is a prescription medicine: only the
// generic name, no brand, no dose, no price promotion. No claim that any option stops, reverses or erases ageing.
// No device or filler brand names. Pending a dermatology reviewer.

const T = SLUGS.antiAging;
const TOXIN = `/${TOXIN_SLUG}`;
const PRP = `/${SLUGS.prp}`;
const HYDRA = `/${SLUGS.hydrafacial}`;

// Rows of the "what the price includes" table. 7 of them, gate G2 needs 5 answered.
export const antiAgingIncludeKeys: IncludeKeyDef[] = [
  { key: "consultation", label: "Consultation and skin assessment", ask: "Is the first visit charged, and is it credited if you go ahead?" },
  { key: "prescriber", label: "Doctor who assesses and plans", ask: "Who decides the plan, and are they registered with a medical council?" },
  { key: "performer", label: "Who performs each treatment", ask: "Is it a doctor, a nurse or a technician, and what is their training?" },
  { key: "procedure", label: "The session itself", ask: "What exactly is done in one session, and how many sessions are planned?" },
  { key: "numbing", label: "Numbing or cooling", ask: "Is anything used for comfort, and is it in the price?" },
  { key: "aftercare", label: "Aftercare products", ask: "Which products are advised, and are they in the price?" },
  { key: "review", label: "Review visit", ask: "Is a review included, and what does an extra visit cost?" },
];

// TODO-VERIFY: downtime ranges, session counts and how long effects last are general statements for the dermatology
// reviewer to confirm or replace. Evidence for skin boosters and for PRP is described as limited or mixed, pending the reviewer.
export const antiAgingContent: TreatmentContent = {
  dek: "Non-surgical anti-aging treatments aim to soften lines, improve skin texture or tone, or add a little firmness. They do not stop ageing and cannot do what surgery does. A dermatologist picks the options after looking at your skin. Cost and downtime depend on the method, how many sessions you need and your skin type. The [cost factors](/cost/anti-aging-treatment) are on their own page.",

  shortAnswers: [
    {
      q: "What can these treatments do?",
      a: "They can soften some lines, change skin texture or tone, or add firmness or volume for a time. They do not stop ageing, and each method targets something different.",
      href: "#surgery",
      linkText: "What they can and cannot do",
    },
    {
      q: "Which one suits me?",
      a: "That depends on what bothers you and on your skin. A dermatologist matches the concern to the method, and sometimes advises daily care first.",
      href: "#compare",
      linkText: "The options at a glance",
    },
    {
      q: "What is the downtime?",
      a: "It runs from none to several days of redness or flaking, depending on the method. Some leave bruises.",
      href: "#recovery",
      linkText: "Downtime by method",
    },
    {
      q: "What will it cost?",
      a: "Each method has its own price per session, and plans often need several sessions and repeats. The ranges shown are to be confirmed.",
      href: "#cost",
      linkText: "The cost lines",
    },
  ],

  operation: {
    lead: "People use the term anti-aging for a group of non-surgical options that act on lines, skin texture, tone and firmness. A dermatologist looks at your skin, asks what bothers you and what you have tried, and then plans one or more options. Some people need only a better daily routine.",
    body: "No option stops the skin from ageing. Each has limits, and some suit one concern better than another. Read [skin boosters, fillers and toxin compared](/learn/skin-boosters-vs-fillers-vs-toxin) to see the differences. Daily sun protection matters more than any procedure, see [sunscreen and retinoids](/learn/sunscreen-retinoids-skin-ageing). If you are looking for [botulinum toxin injections](" + TOXIN + ") or [PRP treatment](" + PRP + "), each has its own page.",
    caption: "The usual path: assess, start with daily care, add one option at a time, review.",
    ask: "Which of my concerns can each option help with, which can it not, and what do you suggest I try first?",
    how: [
      "Assessment: the doctor looks at your skin in good light and asks about sun exposure, smoking, medicines, pregnancy plans, past treatments and what you want to change.",
      "Daily care first: for many people the first step is sun protection and a gentle routine. The doctor may add a prescription cream.",
      "One option at a time: a plan may begin with one method and add another later, so that you can see what each does.",
      "Sessions: peels, light and energy devices are given in a course, spaced weeks apart. Injections are given in short visits.",
      "Review and maintenance: most options need repeat visits, so the yearly cost matters more than one session.",
    ],
    whoItSuits: [
      { term: "Who asks", text: "Adults from their thirties onwards who notice lines, rough texture, uneven tone or lost volume, and who want to understand options before they decide." },
      { term: "Expectations", text: "A change to some features for a time. Results vary, and nothing here makes skin look as it did years ago. Some people see little change." },
      { term: "Commitment", text: "Several sessions for some methods, repeat visits for most, and daily sun protection for all." },
      { term: "Time", text: "Downtime ranges from none to several days. Plan around work and events, and avoid new treatments in the final week before one." },
    ],
  },

  techniques: {
    lead: "These are the options people compare. Each row says what the option is, what it targets, and what to ask. There is no ranking, and no price in this table.",
    rows: [
      { name: "Botulinum toxin", how: "A prescription medicine injected into facial muscles", often: "Lines caused by movement, such as frown lines. Effect fades over months. See [botulinum toxin injections](" + TOXIN + ")", ask: "Which lines will it soften, and what will it not change?" },
      { name: "Fillers", how: "A gel injected under the skin", often: "Folds and lost volume. Duration depends on the type", ask: "Which type, and what are the lump, bruise and rare blood vessel risks?" },
      { name: "Skin boosters", how: "Small injections meant to improve hydration and texture", often: "Dull or dry-looking skin. Evidence is limited or mixed, pending the reviewer", ask: "What do studies show, how many sessions, and what is the downtime?" },
      { name: "PRP for the face", how: "Platelet-rich plasma from your own blood, injected or applied after needling", often: "Texture and tone, with limited evidence. See [PRP treatment](" + PRP + ")", ask: "What does the evidence say, and how many sessions?" },
      { name: "Chemical peels", how: "A solution removes layers of skin, with flaking for days", often: "Texture, tone and fine lines. Depth changes the downtime", ask: "Which depth, how long is the redness, and what is my pigment risk?" },
      { name: "Lasers and light devices", how: "Light energy acts on the skin surface or deeper", often: "Texture, tone, marks and some lines. Several sessions", ask: "What is the aim, what is the downtime, and what is my risk of dark marks?" },
      { name: "Ultrasound or radiofrequency tightening", how: "Heat energy delivered below the surface", often: "Mild firmness in selected areas. Results vary, and it is not a surgical lift", ask: "How many sittings, what does it feel like, and what are the burn risks?" },
    ],
    note: "A [hydrafacial](" + HYDRA + ") is a skin-care session and is not an anti-aging treatment. Each method has its own page or guide, and a combination is a doctor's decision.",
  },

  extraSections: [
    {
      id: "downtime-by-method",
      heading: "Downtime and sessions by method",
      tocLabel: "Downtime by method",
      lead: "General ranges for the reviewer to confirm. Your doctor sets yours, and individual skin varies.",
      table: {
        caption: "What most people notice, by method. Ranges are to be confirmed.",
        head: ["Method", "Usual downtime", "Sessions", "Main risks"],
        rows: [
          ["Botulinum toxin", "Small bumps for hours, bruises for a few days", "A short visit, repeated as the effect fades", "Bruising, uneven result, drooping eyelid or brow"],
          ["Fillers", "Swelling and bruising for several days", "Short visits, repeated by the type", "Lumps, bruises, rare blood vessel blockage"],
          ["Skin boosters", "Small bumps and redness for a day or two", "A short course, set by the doctor", "Bruising, lumps, infection"],
          ["PRP for the face", "Redness and swelling for a day or two", "A short course, set by the doctor", "Bruising, infection, no visible benefit"],
          ["Chemical peels", "Redness and flaking for days, by depth", "A course for light peels", "Burns, dark or light patches, scarring"],
          ["Lasers and light devices", "Redness for days, longer for stronger devices", "A course spaced weeks apart", "Burns, dark marks, scarring"],
          ["Tightening devices", "Mild redness or tenderness", "One or several sittings", "Burns, nerve irritation, uneven result"],
        ],
      },
    },
    {
      id: "pigment-risk",
      heading: "Dark marks and Indian skin",
      tocLabel: "Pigment risk",
      paragraphs: [
        "Skin with more natural pigment can darken after irritation, and some peels and lasers carry a higher chance of dark marks. The reviewer will confirm which options need extra care. A good plan starts gently, may test a small area, and puts sun protection first.",
        "If you already have melasma or marks, tell the doctor before any session. A treatment that irritates the skin can make them darker. {pending}",
      ],
    },
    {
      id: "daily-care",
      heading: "Daily care that matters more than any procedure",
      tocLabel: "Daily care",
      bullets: [
        "Sun protection every day. UV light is a major cause of skin ageing, and it also darkens marks after treatments.",
        "Not smoking. Smoking is linked to earlier ageing of the skin.",
        "Sleep, a varied diet and exercise support general health. No food or home remedy is proven to stop skin ageing.",
        "A gentle cleanser and a moisturiser. A doctor may add a prescription cream, and will tell you what to stop before a peel or laser.",
      ],
      note: { label: "No products named", text: "We do not name products or brands. Ask the doctor which type of sunscreen and moisturiser fits your skin." },
    },
  ],

  recovery: {
    lead: "Downtime depends on the method. This is what the first days commonly look like across options, and your doctor sets yours. {pending}",
    body: "Gentle care, sun protection and not picking at flaking skin help most. Tell the doctor about burning, blistering or swelling that spreads. See [chemical peels](/learn/chemical-peels-for-ageing-skin) and [laser on Indian skin](/learn/laser-for-ageing-skin-indian-skin) for more.",
    highlights: [
      { pre: "from", big: "none", post: "to days", text: "Downtime depends on the method" },
      { pre: "up to", big: "a week", text: "Redness or flaking after some peels and lasers, per the reviewer" },
      { big: "months", text: "Many options need repeat visits, so plan the year and not one session" },
    ],
    timeline: [
      { when: "Day 0", notice: "Redness, bumps or tenderness, by method", doThis: "Follow the written advice. Use the sun protection the doctor names." },
      { when: "Day 1 to 3", notice: "Swelling, bruises or peeling can show", doThis: "Gentle cleanser and moisturiser. Do not pick. Keep out of strong sun." },
      { when: "Day 4 to 7", notice: "Flaking after peels and some lasers settles", doThis: "Resume your routine as the doctor says. Report burning or a spreading rash." },
      { when: "Week 2 to 4", notice: "Most visible effects of a session have settled", doThis: "Review visit. The doctor decides whether to continue, change or stop." },
      { when: "Month 3 and after", notice: "Effects of some methods begin to fade", doThis: "Decide on maintenance. There is no need to rush." },
    ],
    grid: {
      cols: ["Toxin", "Filler", "Peel", "Laser", "Tighten"],
      rows: [
        { label: "Back to work", cells: [{ state: "y", text: "Often" }, { state: "m", text: "Ask" }, { state: "m", text: "Ask" }, { state: "m", text: "Ask" }, { state: "y", text: "Often" }] },
        { label: "Visible redness", cells: [{ state: "m", text: "Hours" }, { state: "m", text: "Days" }, { state: "m", text: "Days" }, { state: "m", text: "Days" }, { state: "m", text: "Hours" }] },
        { label: "Bruising possible", cells: [{ state: "m", text: "Yes" }, { state: "m", text: "Yes" }, { state: "y", text: "Rare" }, { state: "y", text: "Rare" }, { state: "y", text: "Rare" }] },
        { label: "Strict sun cover", cells: [{ state: "y", text: "Yes" }, { state: "y", text: "Yes" }, { state: "n", text: "Strict" }, { state: "n", text: "Strict" }, { state: "y", text: "Yes" }] },
      ],
    },
    closing: "Do not assume that any option has no downtime. If you have an event, start several weeks ahead, so that any redness, swelling or adjustment is done in time.",
  },

  risks: {
    lead: "Every treatment has risks. These are the ones people most often ask about, in plain words, and what to ask. The full list for each method belongs to the doctor, and the product leaflet where there is one.",
    rows: [
      { risk: "Redness, swelling and bruising", means: "Common and usually short-lived after injections, peels and lasers.", ask: "How long should it last for this method, and when should I call?" },
      { risk: "Dark or light patches", means: "Irritation can change the colour of the skin, more often with some peels and lasers and in darker skin.", ask: "What is my risk, and can you test a small area first?" },
      { risk: "Burns and scarring", means: "Peels, lasers and heat devices can injure the skin if used wrongly or too strongly.", ask: "Who performs it, and what do you do if it blisters?" },
      { risk: "Lumps and uneven result", means: "Fillers and injections can leave lumps or an uneven look.", ask: "How is it corrected, and what does a correction cost?" },
      { risk: "Rare blood vessel blockage", means: "A filler can rarely block a blood vessel, which needs urgent care.", ask: "What signs should send me to an emergency department?" },
      { risk: "Infection", means: "Any break in the skin can become infected.", ask: "What are the signs, and who do I call?" },
      { risk: "Allergic reaction", means: "Rash, itch or swelling after a product or a numbing cream.", ask: "Do I have any allergy that matters?" },
      { risk: "No visible benefit", means: "Results vary, and some people see little change from some methods.", ask: "What do you expect for my skin, and what is the plan if there is no change?" },
    ],
    alert: "Call the clinic or a doctor straight away for blistering, spreading redness or heat, fever, severe or worsening pain, a pale or dusky patch of skin, or any change in vision. If you cannot reach them, go to the nearest emergency department.",
    wait: [
      "You are pregnant, breastfeeding or planning a pregnancy (ask before any treatment)",
      "You have an infection or an acne flare on the area",
      "You are sun-tanned or recently sunburned",
      "You took isotretinoin in recent months and a peel or laser is planned (the reviewer will set the interval)",
      "You tend to form keloid or thick scars",
      "You expect to look as you did years ago",
    ],
    tell: [
      "All creams, retinoids, medicines and supplements, including blood thinners",
      "Pregnancy, breastfeeding or plans to conceive",
      "Past reactions to cosmetic treatments, peels or fillers",
      "A tendency to dark marks, cold sores or thick scars",
      "Allergies to medicines, products and numbing creams",
    ],
  },

  patientQuestions: [
    { q: "Which treatment suits my concern?", href: "#compare", linkText: "Read: the options at a glance" },
    { q: "Do these treatments stop ageing?", href: "#surgery", linkText: "Read: what they can and cannot do" },
    { q: "How much downtime should I plan?", href: "#downtime-by-method", linkText: "Read: downtime by method" },
    { q: "Are some options riskier for darker skin?", href: "#pigment-risk", linkText: "Read: dark marks" },
    { q: "What will it cost over a year?", href: "#cost", linkText: "Read: the cost lines" },
    { q: "Should I try daily care first?", href: "#daily-care", linkText: "Read: daily care" },
  ],

  quoteProcess: [
    { title: "You talk to a coordinator", text: "By phone or WhatsApp. Say what bothers you and what you have tried. The coordinator does not name a product or quote a price before you see a doctor." },
    { title: "A dermatologist assesses your skin", text: "The plan is made in person after looking at your skin in good light, not from a photo." },
    { title: "You receive a written plan", text: "Each method, the sessions planned and a total, each on its own line, and what happens if you stop." },
    { title: "You start with one thing", text: "A plan may begin with daily care or one method, so that you can see what it does before you add more." },
    { title: "You return for reviews", text: "A coordinator check-in the next day, then reviews at the interval the doctor sets." },
  ],

  quoteChecks: [
    "list each method, the number of sessions and the price of each?",
    "say who performs each treatment and their training?",
    "tell you what the yearly cost looks like with repeat visits?",
    "name the downtime and risks of each method in writing?",
    "break any package into lines, so you can compare it with a single session?",
  ],

  extras: [
    "Repeat visits and maintenance sessions",
    "Prescription creams and aftercare products",
    "Review and touch-up visits",
    "Treatment of a reaction",
    "Numbing cream or cooling, if charged",
    "Other treatments suggested on the day",
    "Your travel and time off for repeat visits",
  ],

  insurance:
    "Insurance. Anti-aging treatments are cosmetic, and most health policies do not pay for them. Ask your insurer in writing before you start, and keep the plan. We do not promise cashless approval.",
  payment:
    "Payment. Pay per session or per treatment. Package plans and instalments depend on the clinic and the lender and are not shown here. Ask for a line-by-line breakdown of any package before you pay. {tbc}",

  // TODO-VERIFY: the reviewer opens each source and confirms the URL and the facts used.
  sources: [
    { label: "National Medical Commission: public register of doctors", href: "https://www.nmc.org.in/" },
    { label: "American Academy of Dermatology: skin care and sun protection for patients", href: "https://www.aad.org/public/everyday-care" },
  ],

  footnotes: [
    "Medical review is pending. The reviewer, qualification and review date will be shown once a registered dermatologist signs off.",
    "Downtime, session counts and how long effects last are general statements to be confirmed or replaced by the reviewer.",
    "Evidence for skin boosters and for PRP on the face is described as limited or mixed, pending the reviewer.",
    "Botulinum toxin is a prescription medicine. This page names no product, gives no dose and makes no price promotion.",
    "Insurance and payment wording is general and to be confirmed. Studies cited here will be read and checked by the reviewer first. None is cited yet.",
  ],
};

// ------------------------------------------------------------------ city pages
// TODO-VERIFY (all four cities): road times, station and airport names, seasonal statements and water statements are
// general and must be checked against a dated public source before any page leaves noindex.

const agingChecks = (focus: string): FacilityData["checks"] => [
  { check: "Registered doctor plans the course", why: "Several of these methods are medical procedures with real risks", ask: "Who assesses me and plans the course, and where can I check the registration?" },
  { check: "One option at a time", why: "A plan that adds everything at once makes it hard to tell what helped", ask: "Can the plan start with one method and add another after a review?" },
  { check: "Written plan with sessions and total", why: "Packages hide the cost per session", ask: "Can I have each method, the sessions and the total in writing?" },
  { check: "Who performs each treatment", why: "Training differs between a doctor, a nurse and a technician", ask: `Who performs each treatment, and what is their training? ${focus}` },
  { check: "Plan for a problem", why: "A burn, a lump or a reaction needs a plan and a number to call", ask: "What do I do if I have blistering, a lump or severe pain, and who do I call?" },
];

const agingDelhi: CityTreatmentPage = {
  ...cityBase(T, "delhi"),
  seoTitle: "Anti-Aging Treatment in Delhi: Cost, Downtime, Risks",
  h1: "Anti-aging treatment in Delhi",
  metaDescription: "Anti-aging treatment in Delhi: sample cost lines per method, downtime, risks, and how to plan sessions and travel from nearby towns.",
  intro: "Anti-aging treatment in Delhi means a choice among non-surgical options, planned by a dermatologist after looking at your skin. The local sample price per method is {tbc} until quotes are collected. Delhi has many clinics and many methods, so the useful step is to start with one concern and one method.",
  includes: { review: "varies", aftercare: "varies" },
  facilities: {
    intro: "No partner facility is confirmed in Delhi yet. These treatments are given in dermatology clinics, cosmetic clinics and hospital skin departments, and equipment and training differ between them. This page will name the facility type once one is confirmed. Until then, use the questions below.",
    partners: [{ type: "Dermatology or cosmetic clinic in Delhi (to be confirmed)", count: null }],
    accreditation: null,
    checks: agingChecks("In a large city, ask for the answer in writing."),
  },
  travel: {
    intro: "A plan with several sessions means several trips. In Delhi, a clinic on a metro line near your work makes a course of visits easier to keep.",
    airport: "Indira Gandhi International Airport (to be verified)",
    station: "New Delhi, Old Delhi and Hazrat Nizamuddin stations (to be verified against the facility)",
    stayDays: "Same day. No stay for consultations and sessions",
    metro: "The metro suits a session visit. After a peel or laser, skin can be red and sensitive to sun, so a cab with the window up or a cover-up helps. {sample} The nearest station is added once a facility is confirmed.",
    roadTimes: [
      { from: "Noida", time: "50 to 90 min", tip: "Ask for the same weekday and time for every session" },
      { from: "Ghaziabad", time: "60 to 100 min", tip: "Ask which reviews can be a video call with photos" },
      { from: "Faridabad", time: "50 to 90 min", tip: "Book the next session before you leave" },
      { from: "Gurgaon", time: "50 to 90 min", tip: "Gurgaon has its own clinics, so compare before you travel" },
    ],
    privacyNote: "You do not have to explain a visit to anyone. Skin photos are health data, so ask where clinic photos are stored. Ask that messages name the clinic and time only.",
    mapCaption: "Travel into Delhi from nearby towns, no building shown.",
  },
  localContext: [
    { text: "NEEDS REAL DATA: which Delhi facility, if any, will provide these treatments, and its type", source: "", asOf: "" },
    { text: "NEEDS REAL DATA: winter and post-Diwali air quality in Delhi (public CPCB records, month and station)", source: "", asOf: "" },
    { text: "NEEDS REAL DATA: seasonal sun and heat for Delhi (IMD climate normals)", source: "", asOf: "" },
  ],
  usefulness: "For readers in Delhi and the nearby NCR towns who are comparing many anti-aging options and clinics, with notes on pigmentation questions, winter dryness against summer sun and wedding-season timing.",
  localCopy: [
    "Delhi has so many methods that the first job is to choose one concern and one method.",
    "Pollution and pigmentation questions belong with a dermatologist, and we make no claim about them.",
    "Winter dryness and summer sun point to different months for peels and lasers.",
  ],
  localNotes: [
    { heading: "Start with one concern", text: "Pick the feature that bothers you most, for example lines between the brows or uneven tone, and ask the doctor which one method suits it. Adding several at once makes it hard to judge any of them." },
    { heading: "Pigmentation questions", text: "People in Delhi often ask whether air quality affects dark marks and tone. We make no claim here. Ask the dermatologist what is known and what it means for the plan you are considering. {pending}" },
    { heading: "Winter or summer", text: "Peels and lasers leave skin red and sensitive to sun. Many doctors prefer to plan them away from the strongest sun. Ask what suits your skin and the month you want to start." },
    { heading: "Packages", text: "A package of several treatments is easy to buy and hard to compare. Ask for each method, its number of sessions and its price on separate lines before you pay." },
  ],
  sections: [
    {
      heading: "Too many choices in a big city",
      paragraphs: [
        "Delhi has more clinics and more methods than most cities, and a visit to a few can end with five suggestions. That is a reason to slow down. Ask each doctor which single concern is most suitable to treat, which method addresses it, and how you will tell whether it worked.",
        "A good plan has a first step, a review date and a point at which you stop or change. If a plan does not, ask for them in writing.",
      ],
    },
    {
      heading: "Dry winters and strong summer sun",
      paragraphs: [
        "Delhi winters are dry and summers are hot with strong sun. Peels, lasers and some devices leave skin red and more sensitive to sun for days, and sun on treated skin can darken marks. The doctor may prefer to plan these away from the strongest sun and to put sun protection first.",
        "Dry months can make flaking more uncomfortable. Ask what moisturiser fits your plan and how to adjust it in each season.",
      ],
    },
    {
      heading: "Weddings and the last month before an event",
      paragraphs: [
        "Wedding season fills the winter months in Delhi. Start any plan several weeks before a date, so that downtime and an adjustment are done in time. Do not add a new treatment, a new cream or a stronger peel in the last week.",
        "If you are a guest and not the bride or groom, the same applies. A trial session with time to settle is better than a rush.",
      ],
    },
    {
      heading: "Language, referral and second opinions",
      paragraphs: [
        "Staff at most Delhi clinics speak Hindi and English, and some speak Punjabi. Ask for the written plan in the language you read most easily. A second opinion from a dermatologist you trust is reasonable before a large plan, and a plan that is good will stand up to it.",
      ],
    },
    {
      heading: "Water and your daily routine",
      paragraphs: [
        "Tap water in parts of Delhi is described as hard. We make no claim that it changes the effect of any treatment. If your skin feels tight after washing, tell the doctor, who can suggest a gentler cleanser. Keep the routine simple before and after any session.",
      ],
    },
  ],
};

const agingGurgaon: CityTreatmentPage = {
  ...cityBase(T, "gurgaon"),
  seoTitle: "Anti-Aging Treatment in Gurgaon: Cost, Downtime, Risks",
  h1: "Anti-aging treatment in Gurgaon",
  metaDescription: "Anti-aging treatment in Gurgaon (Gurugram): sample cost lines per method, downtime, risks and how to plan a multi-session course.",
  intro: "Anti-aging treatment in Gurgaon (also written Gurugram) means choosing among non-surgical options with a dermatologist. The local sample price per method is {tbc} until quotes are collected. Gurgaon schedules are tight, so the plan has to fit sessions, downtime and work together.",
  includes: { review: "varies", aftercare: "varies" },
  facilities: {
    intro: "A partner facility exists in Gurgaon for other treatments, and whether it provides these skin treatments is to be confirmed. We do not name it. In this city they are given in cosmetic clinics, dermatology clinics and hospital skin departments, so ask what kind of place you are in.",
    partners: [{ type: "Dermatology or cosmetic clinic in Gurgaon (to be confirmed)", count: null }],
    accreditation: null,
    checks: agingChecks("Ask whether the same person sees you at every visit."),
  },
  travel: {
    intro: "In Gurgaon a course of sessions competes with a workday. Choose a clinic near your office or home, and ask which slots are kept for repeat visits.",
    airport: "Indira Gandhi International Airport, Delhi (to be verified)",
    station: "HUDA City Centre (Yellow Line) and Sikandarpur (Rapid Metro)",
    stayDays: "Same day. No stay for consultations and sessions",
    metro: "Sikandarpur and HUDA City Centre serve much of the commercial belt. After a peel or laser, a short cab is easier than a walk in the sun. {sample} The distance to a facility is added once one is confirmed.",
    roadTimes: [
      { from: "South Delhi", time: "40 to 70 min", tip: "A mid-morning slot avoids the highway rush" },
      { from: "Noida", time: "70 to 110 min", tip: "Check clinics in Noida before you commit to a course here" },
      { from: "Faridabad", time: "60 to 100 min", tip: "A weekend slot suits a longer session" },
      { from: "Rewari", time: "60 to 90 min", tip: "Plan sessions on days you are in the city" },
    ],
    privacyNote: "Many clients come from nearby offices. You do not need to explain visits to colleagues. Ask the clinic to keep the treatment name out of messages and reminders.",
    mapCaption: "Travel into Gurgaon from Delhi and nearby towns, no building shown.",
  },
  localContext: [
    { text: "NEEDS REAL DATA: whether the Gurgaon partner facility provides these treatments, and its type", source: "", asOf: "" },
    { text: "NEEDS REAL DATA: groundwater quality for Gurugram (Central Ground Water Board report, year)", source: "", asOf: "" },
    { text: "NEEDS REAL DATA: seasonal sun, heat and humidity for Gurugram (IMD climate normals)", source: "", asOf: "" },
  ],
  usefulness: "For people in Gurgaon (Gurugram) who need an anti-aging plan that fits work schedules, with notes on session spacing, heat from April to September, office air conditioning and a link to Delhi for comparison.",
  localCopy: [
    "In Gurgaon the plan has to fit sessions, downtime and a workday together.",
    "Heat from April to September makes sun protection the main aftercare question.",
    "Water questions are common here, and no claim is made without a source.",
  ],
  localNotes: [
    { heading: "Gurgaon or Gurugram", text: "They are the same city. We use Gurgaon here because more people search for it, and the body text also says Gurugram." },
    { heading: "Sessions and a workday", text: "Ask how long each session takes with preparation and observation, and how much redness to expect. A peel on a Thursday evening leaves a weekend to settle, and a Monday meeting does not." },
    { heading: "Compare with Delhi", text: "Many people from South Delhi look at Gurgaon clinics and the reverse. Compare the same plan line by line, and the travel for every visit, along with the price of one session." },
    { heading: "Office air", text: "Air-conditioned offices dry the skin. Flaking after a peel feels worse in dry air. Ask the doctor what moisturiser suits your plan." },
  ],
  sections: [
    {
      heading: "Courses and calendars",
      paragraphs: [
        "Peels, lasers and some devices are given in a course, with weeks between sessions. A course of three to six visits is common for some methods, and the doctor sets the number for you. Put every visit in your calendar before you pay, and check that it fits a month with travel and deadlines.",
        "If a visit falls before an important meeting, move it. Redness, swelling or bruising can last longer than the plan said.",
      ],
    },
    {
      heading: "Long hot summers and cold offices",
      paragraphs: [
        "Gurgaon summers run from April into September, with strong sun and heat. Treated skin is more sensitive to both, and sun on treated skin can darken marks. Sun protection is the main aftercare question here, and the doctor will say which type fits and how often to reapply.",
        "Cold, dry offices pull moisture from the skin. Ask for a moisturiser plan that works at a desk and outdoors.",
      ],
    },
    {
      heading: "Hard water and facial care",
      paragraphs: [
        "Groundwater in parts of Gurugram is described as hard or salty, and many homes use filters. We make no claim that this changes the effect of any treatment, and no source is yet attached. If your skin feels tight after washing, tell the doctor, who may suggest a gentler cleanser.",
      ],
    },
    {
      heading: "Referral habits and checking a recommendation",
      paragraphs: [
        "People in Gurgaon often take a recommendation from a colleague or a friend. A recommendation is a place to start, and not a check. Ask for the doctor's registration, the written plan and the number of sessions, and compare at least two places.",
        "If a clinic suggests a package of many treatments on the first visit, ask for each part as a separate line, and ask which one part you could start with.",
      ],
    },
    {
      heading: "Monsoon and the schedule",
      paragraphs: [
        "Heavy rain can cause long delays on the roads in July and August. Leave a buffer for each visit, and ask the clinic how a missed session affects the course. A short delay is rarely a problem, and a gap of many weeks may change the plan.",
      ],
    },
  ],
};

const agingLucknow: CityTreatmentPage = {
  ...cityBase(T, "lucknow"),
  seoTitle: "Anti-Aging Treatment in Lucknow: Cost, Downtime, Risks",
  h1: "Anti-aging treatment in Lucknow",
  metaDescription: "Anti-aging treatment in Lucknow: sample cost lines per method, downtime, risks, and travel from Barabanki, Unnao and Sitapur for multi-session plans.",
  intro: "Anti-aging treatment in Lucknow means choosing among non-surgical options with a dermatologist. The local sample price per method is {tbc} until quotes are collected. Many people travel in from nearby towns, so the number of trips a plan needs is as important as its price.",
  includes: { review: "varies", aftercare: "varies" },
  facilities: {
    intro: "No partner facility is confirmed in Lucknow yet. These treatments are given in dermatology clinics, cosmetic clinics and hospital skin departments. If care ends up in another city, we will say so at the top of this page and not claim a local site.",
    partners: [{ type: "Dermatology or cosmetic clinic in Lucknow (to be confirmed)", count: null }],
    accreditation: null,
    checks: agingChecks("From a nearby town, ask who sees you if something goes wrong between visits."),
  },
  travel: {
    intro: "A course of sessions from Unnao or Sitapur is a series of day trips. Plan the whole course and its trips before you pay for the first session.",
    airport: "Chaudhary Charan Singh International Airport, Lucknow (to be verified)",
    station: "Charbagh station and the Lucknow Metro (to be verified against the facility)",
    stayDays: "Same day for most visits. No stay for consultations and sessions",
    metro: "The Lucknow Metro runs along a north-south line and suits a consultation in the city. After a peel or laser, a cab with the window up keeps sun and dust off the skin. {sample} Stations near a facility are added once it is confirmed.",
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
    { text: "NEEDS REAL DATA: which Lucknow facility, if any, will provide these treatments, and its type", source: "", asOf: "" },
    { text: "NEEDS REAL DATA: Lucknow climate normals for heat, humidity and fog (IMD)", source: "", asOf: "" },
    { text: "NEEDS REAL DATA: road times from Barabanki, Unnao, Sitapur and Hardoi, checked on a map with a date", source: "", asOf: "" },
  ],
  usefulness: "For readers in Lucknow and nearby districts who need to plan repeat trips for a multi-session course, with notes on May and June heat for peels and lasers, wedding season and a link to Kanpur.",
  localCopy: [
    "A course of peels or laser sessions from Unnao means a series of trips.",
    "May and June sun and heat suit peels and lasers poorly, so ask about timing.",
    "Lucknow fills with events in the wedding season, and clinics and roads fill with it.",
  ],
  localNotes: [
    { heading: "Count the trips first", text: "Ask the doctor how many sessions and reviews the plan needs, and count each one as a day trip. A plan of six visits from Sitapur is a different commitment from the same plan from Gomti Nagar." },
    { heading: "Areas people ask about", text: "People often ask about clinics in Gomti Nagar, Hazratganj and Indira Nagar. We name no clinic. Choose by the doctor, the plan in writing and the number of trips, and then by distance." },
    { heading: "Summer sun and dust", text: "May and June are hot and dusty, and treated skin is more sensitive to both. Ask whether to schedule peels and lasers in cooler months, and which sun protection fits your skin." },
    { heading: "Compare with Kanpur", text: "If you live between the two cities, compare the road time to each and the plan in each. Kanpur is the nearest other city we cover." },
  ],
  sections: [
    {
      heading: "Plan the course, not one session",
      paragraphs: [
        "A single treatment rarely stands alone. Peels, lasers and tightening devices come in courses, and injections are repeated as the effect fades. Ask for the whole plan, with the number of sessions, the gaps between them and the total. From a nearby town, a series of day trips is the real cost to count.",
        "Ask whether a review can be a video call with photos taken in daylight, and which problems need you in person. Write down where to go for urgent care near home.",
      ],
    },
    {
      heading: "Heat, dust and the strongest sun",
      paragraphs: [
        "Lucknow summers are hot and dry, with the strongest sun in May and June. The monsoon is humid, and winter mornings can be foggy. Sun on treated skin can darken marks, so many doctors prefer to plan peels and lasers for cooler months. The reviewer will confirm what applies.",
        "On any day after a session, carry a cap or an umbrella and use the sun protection the doctor names.",
      ],
    },
    {
      heading: "Water and the daily routine",
      paragraphs: [
        "Households use a mix of piped supply and groundwater, and hardness varies by area. We make no claim that water changes the effect of any treatment. If your skin feels tight after washing, tell the doctor, and ask for a gentler cleanser.",
      ],
    },
    {
      heading: "Weddings, festivals and timing",
      paragraphs: [
        "Wedding season, Diwali and Eid make roads and clinics busy. Start any plan several weeks before a date, and avoid new treatments in the last week. If a family wedding is the reason, book the first session soon, because a course takes weeks to run.",
      ],
    },
    {
      heading: "Hindi, referrals and being told the truth",
      paragraphs: [
        "The consultation can be in Hindi or Hinglish. Ask the doctor to explain each option, including what it cannot do, and to write the plan in a language you read easily. {tbc}",
        "In smaller towns people often hear of a clinic from a relative. Ask your local doctor whether the plan makes sense, and compare it with a second plan before you pay for a package.",
      ],
    },
  ],
};

const agingKanpur: CityTreatmentPage = {
  ...cityBase(T, "kanpur"),
  seoTitle: "Anti-Aging Treatment in Kanpur: Cost, Downtime, Risks",
  h1: "Anti-aging treatment in Kanpur",
  metaDescription: "Anti-aging treatment in Kanpur: sample cost lines per method, downtime, risks, and how to plan 3 to 6 visits including trips to Lucknow.",
  intro: "Anti-aging treatment in Kanpur means choosing among non-surgical options with a dermatologist, and many plans need three to six visits. The local sample price per method is {tbc} until quotes are collected. No partner facility is confirmed in Kanpur yet, so how to plan repeat trips, and whether some go to Lucknow, comes first.",
  includes: { review: "varies", aftercare: "varies" },
  facilities: {
    intro: "No partner facility is confirmed in Kanpur, and Lucknow is the nearest other city we cover. If treatment is in Lucknow, we will say so at the top of this page, with the trip time. Until then, this page shows how to plan a course of visits and what to check.",
    partners: [{ type: "Dermatology or cosmetic clinic in Kanpur (to be confirmed)", count: null }],
    accreditation: null,
    checks: agingChecks("If care is in Lucknow, ask which visits must be there."),
  },
  travel: {
    intro: "A plan with several visits is a plan for repeat trips. Settle which visits are in Kanpur and which, if any, are in Lucknow before you start.",
    airport: "Kanpur civil airport and Lucknow airport (service and schedules to be verified)",
    station: "Kanpur Central, and Charbagh in Lucknow (to be verified)",
    stayDays: "Same day for Kanpur visits. A Lucknow visit is a day trip",
    metro: "Kanpur has a metro line that is partly open, and the part open is to be checked against any facility. {sample} After a peel or laser, a cab is easier on the skin than a crowded vehicle.",
    roadTimes: [
      { from: "Unnao", time: "30 to 60 min", tip: "Close enough for a session and a same-day return" },
      { from: "Kanpur Dehat", time: "40 to 80 min", tip: "An early slot avoids afternoon heat" },
      { from: "Fatehpur", time: "70 to 110 min", tip: "Ask for longer gaps between sessions if the doctor agrees" },
      { from: "Lucknow", time: "100 to 150 min", tip: "The other city we cover. Compare the trips before you commit" },
    ],
    privacyNote: "In a mid-sized city many people know each other. You do not have to explain the visit, and a clinic should keep the treatment name out of messages.",
    mapCaption: "Travel into Kanpur from nearby towns, and the road to Lucknow, no building shown.",
  },
  localContext: [
    { text: "NEEDS REAL DATA: whether any partner facility exists in Kanpur for these treatments, and its type", source: "", asOf: "" },
    { text: "NEEDS REAL DATA: Kanpur road time and train timings to Lucknow, from a map with a date", source: "", asOf: "" },
    { text: "NEEDS REAL DATA: Kanpur air quality record (public CPCB station data)", source: "", asOf: "" },
  ],
  usefulness: "For readers in Kanpur and nearby towns who need to plan three to six visits, decide which stay local and which are in Lucknow, and ask about dust and industrial air without a claim being made for them.",
  localCopy: [
    "In Kanpur a plan of three to six visits needs a decision on what stays local and what goes to Lucknow.",
    "Dust and industrial air are common questions, and no claim is made without a source.",
    "A link to Lucknow shows the road time and the plan in the nearest other city we cover.",
  ],
  localNotes: [
    { heading: "Three to six visits", text: "Many multi-session plans need three to six visits. Write each one on a calendar with the date, the place and the purpose, and add the travel. If the total is more than you can manage, tell the doctor, who can plan around it." },
    { heading: "Dust and industrial air", text: "Kanpur is an industrial city, and people ask whether dust affects skin after treatments. We make no claim here. Ask the dermatologist how to protect and clean treated skin. {pending}" },
    { heading: "Compare with Lucknow", text: "If the plan is in Lucknow, compare the road or train time and the cost of each trip with a plan in Kanpur. The nearest other city we cover is Lucknow." },
    { heading: "Cold winters and hot summers", text: "Winters are cold and dry, and summers are hot with strong sun. Both matter for treated skin. Ask the doctor which months suit peels and lasers for your skin." },
  ],
  sections: [
    {
      heading: "Planning three to six visits",
      paragraphs: [
        "Peels, lasers, skin boosters and tightening devices come in courses, and a course can mean three to six visits. For someone in Kanpur, each visit is a trip. Start by writing the whole plan on a calendar, with the date, the place and the purpose of each visit. If a plan has more visits than you can attend, tell the doctor before you pay.",
        "Ask which visits are procedures and which are checks. Checks can sometimes be done by video or by a local doctor, if the plan is written down.",
      ],
    },
    {
      heading: "What can stay in Kanpur",
      paragraphs: [
        "A local doctor can often see you for a simple check, such as irritated skin or a question about a cream. They cannot usually do what the dermatologist who made the plan does. Ask the planning doctor which changes a local doctor may make, and write the doctor's name on your plan.",
      ],
    },
    {
      heading: "Dust, heat and cold",
      paragraphs: [
        "Kanpur has cold dry winters and hot summers. Cold air dries skin and makes flaking after a peel more noticeable. Heat and dust call for gentle cleansing and sun cover. We make no claim that dust or industrial air changes the effect of any treatment.",
        "Ask what to wear outdoors after a peel or laser, and how often to clean your face. Do not add scrubs or home remedies.",
      ],
    },
    {
      heading: "Water and the daily routine",
      paragraphs: [
        "Water supply in the city mixes the river, piped supply and groundwater, and hardness differs by neighbourhood. We make no claim that water changes the effect of any treatment. If skin feels tight after washing, tell the doctor, and ask for a gentler cleanser.",
      ],
    },
    {
      heading: "Referral, language and winter travel",
      paragraphs: [
        "Hindi and Hinglish are common in clinics. Ask for the plan in the language you read most easily. A family doctor can refer you and keep your notes, which helps if you see two doctors in two cities.",
        "Winter fog can slow roads and trains to Lucknow. Book the earliest slot, allow spare time and avoid a long ride straight after a peel or laser, when skin is red and sensitive.",
      ],
    },
  ],
};

// ------------------------------------------------------------------ cost lines and cost page
// Pending price lines: no figures yet, so the template shows the "To be confirmed" chip.
const agingCosts: CostLine[] = [
  line(T, 1, "Consultation and skin assessment", "The doctor and the clinic type"),
  line(T, 2, "Injectable plan, one visit", "Which injectable and how many areas"),
  line(T, 3, "Skin booster session", "The product type and the area"),
  line(T, 4, "PRP session", "The area and the kit"),
  line(T, 5, "Chemical peel, per session", "The peel depth and the clinic"),
  line(T, 6, "Laser session", "The device and the area"),
  line(T, 7, "Tightening sitting", "The device and the area treated"),
  line(T, 8, "Maintenance or repeat visit", "How often the effect needs repeating, set with the doctor"),
];

export const antiAgingCostPage: NationalCostPage = {
  seoTitle: "Anti-Aging Treatment Cost in India: What Changes It",
  metaDescription: "What anti-aging treatment costs in India by method: sessions, maintenance, clinic and doctor. Sample ranges, labelled, and what to ask in writing.",
  h1: "Anti-aging treatment cost in India",
  answer: "Anti-aging treatment is priced per method and per session, and most plans need several sessions and repeat visits. So the cost for a year matters more than the price of one session. The ranges on this page are {sample} until confirmed quotes are collected, and each will show its source and date.",
  unit: "session",
  rangeHeading: "Sample lines by method",
  rangeCaption: "Each line is a separate case with its own range, one row per method. Your total is built from the methods and sessions in your plan.",
  planner: {
    heading: "A year planner",
    formula: "Yearly cost = consultation + (sessions x price per session, for each method) + repeat visits + aftercare products",
    steps: [
      "Ask the doctor for each method in the plan, the number of sessions and the gap between them.",
      "Add the repeat visits that the plan expects in the year.",
      "Add aftercare products and any review visits that are not in the quote.",
      "Leave blank the methods that are not in your plan. The formula gives your own range, not an average.",
    ],
  },
  factors: [
    { factor: "Which methods are combined", why: "Each method has its own price, and a plan often joins two or more." },
    { factor: "Number of sessions", why: "Peels, lasers and tightening devices are priced per session, and a course needs several." },
    { factor: "Area treated", why: "Face only, or face and neck, changes the plan and the time." },
    { factor: "Who treats", why: "A dermatologist and a general clinic price consultations differently." },
    { factor: "Maintenance", why: "Most methods need repeats, so the yearly cost matters more than one session." },
    { factor: "Device or product used", why: "Different devices and products carry different fees. We name none here." },
    { factor: "City and clinic type", why: "Rents and wages differ between cities, and so do fees." },
  ],
  notIncluded: [
    "Repeat and maintenance visits",
    "Prescription creams and aftercare products",
    "Review and touch-up visits",
    "Numbing cream or cooling, if charged",
    "Treatment of a reaction",
    "Your travel and time off for repeat visits",
  ],
  compareQuotes: [
    "Ask each clinic for the same lines in writing, one row per method with its sessions.",
    "Break any package into lines, so you can compare it with single sessions.",
    "Ask for the yearly cost with repeats, including the first session.",
    "Check who assesses and performs each treatment, and ask for the registration.",
    "Be careful of a package to prepay on the first day.",
  ],
  insurance: "Anti-aging treatments are cosmetic, and most health policies do not pay for them. Ask your insurer in writing before you start.",
  payment: "Sessions are usually paid for as you go. Package plans and instalments depend on the clinic and the lender, and terms are not shown here. {tbc}",
  method: "No figure is shown yet. When quotes arrive, each line will show the source type, the number of data points and the date. A range needs at least three dated points from separate sources before it replaces the pending label. Figures from other websites are not used.",
  faqs: [
    { q: "How much does anti-aging treatment cost in India?", a: "It depends on the methods, the number of sessions and the repeats. The ranges on this page are sample data until confirmed. Ask each clinic for the plan line by line, so you can compare." },
    { q: "Why is the price per method and not one price?", a: "The methods are different treatments with different equipment, time and risks. A single headline figure would hide that." },
    { q: "Are packages cheaper?", a: "A package can lower the price per session, and it commits you before you know the result. Ask for each part as a separate line, and try one session first." },
    { q: "How much will I spend in a year?", a: "Add the sessions for each method and the repeat visits. Ask the doctor for the plan for all twelve months, including the first course." },
    { q: "Does insurance cover it?", a: "Usually not, because the treatments are cosmetic. Ask your insurer in writing." },
    { q: "What should the quote list?", a: "Each method, the sessions, the price of each, who performs it, aftercare products, and what happens if you have a problem." },
  ],
  sources: [
    { label: "National Medical Commission: public register of doctors", href: "https://www.nmc.org.in/" },
  ],
};

// ------------------------------------------------------------------ FAQs
const faqs: FaqRow[] = [
  faqRow(T, null, "aging-what", 1, "What is anti-aging treatment?", "It is a group of non-surgical options, such as injections, peels, lasers and tightening devices, that aim to soften lines or improve skin texture, tone or firmness. A dermatologist plans them after looking at your skin. They do not stop ageing."),
  faqRow(T, null, "aging-which", 2, "Which method suits which concern?", "Injections of botulinum toxin act on movement lines, fillers on folds and lost volume, and peels and lasers on texture and tone. Which suits you is a doctor's decision after an assessment. Start with the one concern that bothers you most."),
  faqRow(T, null, "aging-stop", 3, "Do these treatments stop ageing?", "No. They change some features for a time. Skin continues to age, and most effects fade, so repeat visits are common. Sun protection and not smoking matter more than any procedure."),
  faqRow(T, null, "aging-sessions", 4, "How many sessions are needed?", "It depends on the method. Injections are short visits repeated as the effect fades. Peels, lasers and devices come in courses of several sessions. The doctor sets the number, and the reviewer will give a general range after review."),
  faqRow(T, null, "aging-last", 5, "How long do results last?", "It varies by method and by person. Most effects fade over months, and some people see little change. Ask the doctor what to expect for your skin, and what maintenance would involve."),
  faqRow(T, null, "aging-combine", 6, "Can I combine methods in one visit?", "Sometimes. A doctor may combine them, and a plan that starts with one method lets you see what each does. Be careful of a package that adds many treatments on the first day."),
  faqRow(T, null, "aging-downtime", 7, "What is the downtime?", "From none to several days of redness, flaking or bruising, depending on the method. Ask for the downtime of each method in writing. See [downtime by method](#downtime-by-method)."),
  faqRow(T, null, "aging-dark", 8, "Which are less suitable for darker skin?", "Some peels and lasers carry a higher chance of dark marks in skin with more natural pigment. The reviewer will confirm which need extra care. A doctor may test a small area and start gently."),
  faqRow(T, null, "aging-insurance", 9, "Does insurance cover it?", "Usually not, because the treatments are cosmetic. Check your policy and ask your insurer in writing."),
  faqRow(T, null, "aging-cost", 10, "How much does it cost, and why do quotes differ?", "Each method has its own price per session, and plans differ in sessions, repeats and who treats you. Read the [cost page](/cost/anti-aging-treatment), and ask each clinic for line-by-line quotes. Figures are sample data until confirmed."),

  // ---- Delhi
  faqRow(T, "delhi", "aging-delhi-where", 20, "Is anti-aging treatment available in Delhi itself?", "That is to be confirmed. No partner facility is confirmed in Delhi yet. If care is in Gurgaon, the page will say so at the top, and the [Gurgaon page](/anti-aging-treatment-in-gurgaon) has road times."),
  faqRow(T, "delhi", "aging-delhi-pigment", 21, "Do Delhi's air and sun make pigmentation a bigger issue for treatments?", "We make no claim. Ask the dermatologist about your own skin, about sun protection and about which options carry a risk of dark marks for you."),
  faqRow(T, "delhi", "aging-delhi-season", 22, "Which season suits a peel or laser in Delhi?", "Many doctors prefer to plan them away from the strongest sun. The reviewer will confirm the wording for Delhi. Ask what suits your skin and the month you want to start."),
  faqRow(T, "delhi", "aging-delhi-wedding", 23, "How early should I start before a wedding?", "Several weeks at least, so that downtime and any adjustment are done in time. Avoid new treatments in the final week. Tell the doctor the date."),

  // ---- Gurgaon
  faqRow(T, "gurgaon", "aging-ggn-name", 20, "Gurgaon or Gurugram: is it the same place?", "Yes. Both spellings are used for the same city in Haryana. This page uses Gurgaon because more people search for it."),
  faqRow(T, "gurgaon", "aging-ggn-work", 21, "How do I fit a course of sessions around work?", "Ask how long each session takes and how much redness to expect. Book at the end of the week and keep the next session on your calendar. Tell the doctor if the schedule is too tight."),
  faqRow(T, "gurgaon", "aging-ggn-water", 22, "Does hard water in Gurgaon affect my results?", "We make no claim, and no source is yet attached. If your skin feels tight after washing, tell the doctor, who may suggest a gentler cleanser."),
  faqRow(T, "gurgaon", "aging-ggn-summer", 23, "How should I handle the sun and heat from April to September?", "Treated skin is more sensitive to sun. Use the sun protection the doctor names, cover up outdoors and ask whether to plan peels and lasers for cooler months."),

  // ---- Lucknow
  faqRow(T, "lucknow", "aging-lko-where", 20, "Is anti-aging treatment provided in Lucknow?", "That is to be confirmed. No partner facility is confirmed in Lucknow yet. If it is elsewhere, the page will say so at the top, with the distance."),
  faqRow(T, "lucknow", "aging-lko-trips", 21, "I live in Sitapur. How many trips will a course need?", "That depends on the plan. Ask the doctor to count the sessions and reviews, and ask which reviews can be by video. Count each one as a day trip before you pay."),
  faqRow(T, "lucknow", "aging-lko-summer", 22, "Is May or June a bad time for a peel or laser in Lucknow?", "Strong sun and heat make treated skin more sensitive, so many doctors prefer cooler months. The reviewer will confirm the wording. Ask what suits your skin."),
  faqRow(T, "lucknow", "aging-lko-wedding", 23, "I want to start before a family wedding. When should I book?", "Several weeks ahead, since a course takes time and downtime has to settle. Avoid new treatments in the last week. Tell the doctor the date at the first visit."),

  // ---- Kanpur
  faqRow(T, "kanpur", "aging-knp-lucknow", 20, "Do I need to go to Lucknow?", "That is to be confirmed. No partner facility is confirmed in Kanpur yet, and Lucknow is the nearest other city we cover. If care is there, the page will say so, with the trip time."),
  faqRow(T, "kanpur", "aging-knp-visits", 21, "How do I plan three to six visits from Kanpur?", "Write each visit on a calendar with the date, place and purpose, and add the travel. Ask which visits can be local or by video, and tell the doctor if the total is more than you can manage."),
  faqRow(T, "kanpur", "aging-knp-dust", 22, "Does dust and industrial air in Kanpur affect treated skin?", "We make no claim here. Ask the dermatologist how to protect and clean treated skin, and what to wear outdoors after a peel or laser."),
  faqRow(T, "kanpur", "aging-knp-train", 23, "How do I plan the train or road trip to Lucknow in winter fog?", "Book the earliest slot, allow spare time, and avoid a long ride straight after a peel or laser. Ask the clinic what to do if you cannot reach it on the day."),
];

export const antiAging: SkinHairTopic = {
  treatment: {
    slug: T,
    seo: {
      title: "Anti-Aging Treatment: Options, Cost Factors, Risks",
      description: "Non-surgical anti-aging options: injectables, skin boosters, PRP, peels and lasers. Cost factors, downtime, risks and who should wait.",
      cityTitle: "Anti-Aging Treatment in {city}: Cost, Downtime, Risks",
    },
    content: antiAgingContent,
    display: {
      costMode: "options",
      priceLabel: "One session of one method, usual cost",
      priceLinkText: "The lines by method",
      costHeading: "What each method costs per session",
      costCaption: "One row per method. Each line is a separate case with its own range. Sample data / To be confirmed.",
      operationHeading: "What anti-aging treatment can and cannot do",
      recoveryHeading: "Downtime by method",
      recoveryTocLabel: "Downtime",
      timelineCaption: "What most people notice and do, by time since a session.",
      risksHeading: "Risks and side effects",
      riskGuideHref: "/anti-aging-treatment#risks",
      heroPlate: "none",
      operationPlate: "none",
      labels: {
        techniquesHeading: "The options at a glance",
        techniquesCaption: "What each option is, what it targets and what to ask. No ranking and no price.",
        tocTechniques: "The options",
      },
      tocLabels: { surgery: "What it can do", choices: "Options" },
    },
  },
  costUnit: "session",
  includeKeys: antiAgingIncludeKeys,
  costPage: antiAgingCostPage,
  costLines: agingCosts,
  faqs,
  cityPages: [agingDelhi, agingGurgaon, agingLucknow, agingKanpur],
};
