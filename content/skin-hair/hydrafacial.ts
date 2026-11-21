import type { CityTreatmentPage, CostLine, FaqRow, IncludeKeyDef, NationalCostPage, SkinHairTopic, TreatmentContent } from "../types";
import { SLUGS } from "../slugs";
import { cityBase, faqRow, line } from "./shared";

// Hydrafacial: hub, four city pages, cost lines, FAQs and the national cost page.
// A hydrafacial is written as a skin-care session. No claim to treat acne, scars, pigment or ageing.
// No device or brand comparison, no "approved" wording, no before and after. Pending a dermatology reviewer.

const T = SLUGS.hydrafacial;

// Rows of the "what the price includes" table. 7 of them, gate G2 needs 5 answered.
export const hydrafacialIncludeKeys: IncludeKeyDef[] = [
  { key: "consultation", label: "Skin check before the session", ask: "Is a skin check charged, and who does it?" },
  { key: "performer", label: "Who performs it", ask: "Is it a doctor, a nurse or a trained technician, and can I see their training?" },
  { key: "device", label: "Device tips and single-use parts", ask: "Are the tips new or single-use for me, and how are reusable parts cleaned?" },
  { key: "serums", label: "Serums and boosters", ask: "Which serums are in the base price, and which boosters are extra?" },
  { key: "numbing", label: "Cooling or comfort measures", ask: "Is anything used for comfort, and is it in the price?" },
  { key: "aftercare", label: "Aftercare products", ask: "Which products are advised, and are they in the price?" },
  { key: "review", label: "Review visit if the skin reacts", ask: "What happens, and what do I pay, if my skin reacts?" },
];

// TODO-VERIFY: session length (30 to 45 minutes), how long pinkness lasts, sensitivity days and the interval after
// isotretinoin are general ranges for the dermatology reviewer to confirm or replace.
export const hydrafacialContent: TreatmentContent = {
  dek: "A hydrafacial is a clinic facial that cleans and exfoliates the skin and loosens blocked pores with a handheld device, then applies a serum. A session takes about 30 to 45 minutes. Skin can look pink for a few hours. It is a skin-care session and not a treatment for acne or scars. The [cost per session](/cost/hydrafacial) changes with the serums, add-ons and packs in the quote.",

  shortAnswers: [
    {
      q: "What does it do?",
      a: "It cleans the skin surface, removes dead skin and loosens debris from pores. The effect is on the surface and is short-lived.",
      href: "#surgery",
      linkText: "The steps",
    },
    {
      q: "Who should skip it?",
      a: "Anyone with sunburn, open sores, a cold sore or infection, or a recent peel, laser or isotretinoin course. Ask first if you are pregnant.",
      href: "#risks",
      linkText: "Who should wait",
    },
    {
      q: "What is the downtime?",
      a: "Most people go back to routine the same day. Pink skin can last a few hours and sensitivity a day or two.",
      href: "#recovery",
      linkText: "Hours and days",
    },
    {
      q: "Why do quotes differ?",
      a: "Serums, boosters, extra steps and packs are priced on top of a base session. The ranges shown are to be confirmed.",
      href: "#cost",
      linkText: "The cost lines",
    },
  ],

  operation: {
    lead: "A hydrafacial uses one handheld device to cleanse, exfoliate, loosen debris from pores with gentle suction, and apply serums. It looks and feels like a facial, and it is done in a clinic or salon.",
    body: "It does not treat acne, remove scars or change pigment. If you have active acne, a doctor may suggest another plan first, see [acne treatment](/acne-treatment) and [hydrafacial for acne-prone skin](/learn/hydrafacial-acne-prone-skin). For lines and ageing skin, see [anti-aging treatment](/anti-aging-treatment). Read [how a hydrafacial differs from a regular facial](/learn/hydrafacial-vs-regular-facial) before you compare quotes.",
    caption: "The steps run in order on a clean, dry face.",
    ask: "Who will perform my session, what is in the serum, and which of my skin conditions would make you advise against it?",
    how: [
      "Skin check: a short look at your skin and a few questions about medicines, pregnancy, sunburn, cold sores and recent treatments.",
      "Cleanse and exfoliate: the surface is cleaned and dead skin is loosened with a mild solution.",
      "Loosen pores: a gentle suction removes debris from pores. Some people feel a tugging or stinging.",
      "Serum: a serum is applied, and a booster may be added at extra cost.",
      "Finish: sun protection is advised and aftercare is explained.",
    ],
    whoItSuits: [
      { term: "Who asks", text: "Adults who want a cleaning session before an event, people who like a facial with some exfoliation, and people curious about a clinic option rather than a salon facial." },
      { term: "Expectations", text: "A fresh surface feel that settles over days. It is not a treatment for any skin condition, and results vary between people." },
      { term: "Skin type", text: "Not every skin tolerates it. People with very sensitive skin, active eczema or a tendency to dark marks need a doctor's advice first." },
      { term: "Under 18", text: "A parent or guardian should take part in the decision, and a doctor should check the skin first." },
    ],
  },

  extraSections: [
    {
      id: "steps",
      heading: "The steps in order",
      tocLabel: "Steps",
      lead: "Clinics order the steps slightly differently. This is the usual pattern, and your clinic will explain its own.",
      table: {
        caption: "What happens, and what to ask at each step.",
        head: ["Step", "What happens", "What to ask"],
        rows: [
          ["Skin check", "Questions and a look at your skin", "Will anyone examine my skin before starting?"],
          ["Cleanse and exfoliate", "A solution removes dead skin from the surface", "Which solution, and for how long?"],
          ["Pore cleaning", "Gentle suction lifts debris out of pores", "Is the tip new or cleaned between clients?"],
          ["Serum", "A serum is applied, sometimes with a booster", "What is in it, and is it in the base price?"],
          ["Finish", "Sun protection and aftercare advice", "What should I avoid in the next two days?"],
        ],
      },
    },
    {
      id: "limits",
      heading: "What a hydrafacial cannot do",
      tocLabel: "Limits",
      paragraphs: [
        "A hydrafacial works on the skin surface. It does not remove acne scars, treat melasma or shrink pores in a lasting way, and it does not stop skin ageing. A doctor can say which of those concerns need a different approach.",
        "Some people notice that skin looks fresher for a few days. That is a short-term effect on the surface, and results vary. Ask the clinic to say plainly what it expects for your skin and for how long.",
      ],
      note: { label: "If you have acne scars or pigment", text: "See a dermatologist before you pay for a pack of sessions. Irritating skin that is already marked can make marks darker." },
    },
    {
      id: "how-often",
      heading: "How often people go",
      tocLabel: "How often",
      paragraphs: [
        "Clinics suggest different gaps between sessions, and the suggestion often depends on skin type and on whether you use acids or retinoids at home. Our reviewer will give a general range once review is complete. {pending}",
        "A pack of several sessions has a total price and a per-session price. Read both, and do not prepay for a pack before you have tried one session and seen how your skin reacts. See [how often can you get a hydrafacial](/learn/how-often-hydrafacial).",
      ],
    },
  ],

  techniques: {
    lead: "People compare a hydrafacial with other skin-care options. This table lists the plain differences, with no ranking.",
    rows: [
      { name: "Regular facial", how: "Cleansing, steam or massage, extractions and a mask, usually by hand", often: "People who want a relaxing facial with lower cost", ask: "What steps are included, and who performs them?" },
      { name: "Hydrafacial", how: "A handheld device cleanses, exfoliates, suctions debris and applies serums", often: "People who want a device-based clean with some exfoliation", ask: "Which serums, and what are the extra charges?" },
      { name: "Chemical peel", how: "A stronger solution removes layers of skin, with flaking or redness for days", often: "Some people with marks or rough texture, on a doctor's advice", ask: "How long is the redness, and what is my pigment risk?" },
      { name: "Microdermabrasion", how: "A device rubs away the top layer of dead skin", often: "People who want surface exfoliation", ask: "How does it differ from this for my skin type?" },
    ],
    note: "See [hydrafacial vs chemical peel vs microdermabrasion](/learn/hydrafacial-vs-peel-vs-microdermabrasion) for more.",
  },

  recovery: {
    lead: "There is no recovery period for most people. This is what the first hours and days commonly look like, and your clinic sets yours. {pending}",
    body: "Tell the clinic if skin burns, swells or blisters, or if you get a cold sore. Skin that is irritated needs rest, not extra products. See [side effects and who should skip it](/learn/hydrafacial-side-effects-who-should-skip).",
    highlights: [
      { pre: "about", big: "30 to 45 min", text: "A usual session, per the reviewer" },
      { pre: "for", big: "a few hours", text: "Pink skin is common straight after" },
      { pre: "for", big: "1 to 2 days", text: "Skin can feel sensitive, so keep to gentle care" },
    ],
    timeline: [
      { when: "First hours", notice: "Pink or flushed skin, slight stinging", doThis: "Apply the sun protection the clinic advises. Do not scrub or use strong acids." },
      { when: "Day 1", notice: "Skin may feel tight or sensitive", doThis: "Gentle cleanser and moisturiser. Avoid sun, heat and heavy makeup if you can." },
      { when: "Day 2 to 3", notice: "Sensitivity settles, a few people see small breakouts", doThis: "Do not pick. Tell the clinic if breakouts grow or the skin burns." },
      { when: "Week 1", notice: "Skin back to usual", doThis: "Resume your usual routine, as advised. Check whether a repeat session is needed at all." },
    ],
    grid: {
      cols: ["Hours", "Day 1", "Day 3", "Wk 1"],
      rows: [
        { label: "Normal day", cells: [{ state: "y", text: "Most" }, { state: "y", text: "Yes" }, { state: "y", text: "Yes" }, { state: "y", text: "Yes" }] },
        { label: "Makeup", cells: [{ state: "m", text: "Light" }, { state: "m", text: "Light" }, { state: "y", text: "Yes" }, { state: "y", text: "Yes" }] },
        { label: "Strong acids", cells: [{ state: "n", text: "No" }, { state: "n", text: "No" }, { state: "m", text: "Ask" }, { state: "m", text: "Ask" }] },
        { label: "Strong sun", cells: [{ state: "n", text: "No" }, { state: "n", text: "No" }, { state: "m", text: "Cover" }, { state: "m", text: "Cover" }] },
        { label: "Peel or laser", cells: [{ state: "n", text: "No" }, { state: "n", text: "No" }, { state: "n", text: "No" }, { state: "m", text: "Ask" }] },
      ],
    },
    closing: "Never assume there is no downtime. Skin reacts differently from one person to the next. If you have an event, book a trial session at least a few weeks before it.",
  },

  risks: {
    lead: "A hydrafacial is gentle for many people, and it still has risks. These are the ones people most often ask about, with what to ask. This is not a complete list.",
    rows: [
      { risk: "Redness and stinging", means: "Common straight after, and usually short-lived.", ask: "How long should it last for my skin, and when should I call?" },
      { risk: "Breakouts afterwards", means: "Some people see small spots in the days after.", ask: "Is a breakout likely for me, and what should I do about it?" },
      { risk: "Allergic reaction to a serum", means: "Rash, itch or swelling after a serum or booster.", ask: "What is in the serum, and can I patch test first?" },
      { risk: "Cold sore flare", means: "Skin treatments can bring on a cold sore in people who get them.", ask: "I get cold sores. What should I do before and after?" },
      { risk: "Infection from tools", means: "Tips and tools that are not clean or single-use can spread infection.", ask: "Are the tips new or cleaned, and how?" },
      { risk: "Colour change on irritated skin", means: "Skin that is irritated can darken afterwards, more often in darker skin.", ask: "Is my skin at risk, and should I wait or try a small area?" },
      { risk: "Burns or injury", means: "Misuse of the device, or too many passes, can injure the skin.", ask: "Who performs it, and what training do they have?" },
    ],
    alert: "Call the clinic or a doctor straight away for blistering, swelling of the face or lips, spreading redness or heat, fever, or pain that keeps getting worse. If you cannot reach them, go to the nearest emergency department.",
    wait: [
      "You have sunburn or skin that is raw from the sun",
      "You have open sores, a cold sore, an infection or active eczema on the face",
      "You started a new acid or retinoid and your skin is irritated",
      "You took isotretinoin in recent months (the reviewer will set the interval)",
      "You are pregnant, or you are unsure (ask your doctor first)",
      "You had a peel or laser recently",
    ],
    tell: [
      "All creams, acids, retinoids and tablets you use, including recent ones",
      "Pregnancy, breastfeeding or plans to conceive",
      "A history of cold sores, eczema, dark marks or keloid scars",
      "Allergies to products or ingredients",
      "Any peel, laser or other facial treatment in recent weeks",
    ],
  },

  patientQuestions: [
    { q: "Is a hydrafacial the same as a regular facial?", href: "#compare", linkText: "Read: how it compares" },
    { q: "Can I have one with active acne?", href: "#risks", linkText: "Read: who should wait" },
    { q: "How many sessions and how often?", href: "#how-often", linkText: "Read: how often" },
    { q: "What will it cost, and why do quotes differ?", href: "#cost", linkText: "Read: the cost lines" },
    { q: "How long will my skin look pink?", href: "#recovery", linkText: "Read: hours and days" },
    { q: "How do I check who is performing it?", href: "#choose", linkText: "Read: the checks" },
  ],

  quoteProcess: [
    { title: "You talk to a coordinator", text: "By phone or WhatsApp. Say what you hope for and what products you use. No pressure to book." },
    { title: "A skin check comes first", text: "The person doing the session looks at your skin and asks about medicines, pregnancy and recent treatments." },
    { title: "You see the quote line by line", text: "The base session, serums, boosters, extra steps and any pack, each on its own line." },
    { title: "You try one session", text: "Pay for one session before a pack, and see how your skin reacts." },
    { title: "You get aftercare advice", text: "Written advice for the first days, and who to call if the skin reacts." },
  ],

  quoteChecks: [
    "say who performs the session and what their training is?",
    "list the base session and each serum or booster separately?",
    "give a pack total and the per-session figure side by side?",
    "say how tips and tools are cleaned or whether they are single-use?",
    "state what happens, and what you pay, if your skin reacts?",
  ],

  extras: [
    "Booster serums beyond the base session",
    "Extra steps such as LED, where provided",
    "Packs of several sessions",
    "Aftercare products",
    "A skin check, if charged separately",
    "A review visit if the skin reacts",
    "Treatment of a reaction",
    "Travel and time off",
  ],

  insurance:
    "Insurance. A hydrafacial is skin care and most health policies do not pay for it. Ask your insurer in writing if you think a medical reason applies, and keep the quote.",
  payment:
    "Payment. Pay per session or per pack. Instalment plans may exist for packs, and terms are not shown here. Pay for one session before a pack. {tbc}",

  // TODO-VERIFY: the reviewer opens each source and confirms the URL and the facts used.
  sources: [
    { label: "National Medical Commission: public register of doctors", href: "https://www.nmc.org.in/" },
    { label: "American Academy of Dermatology: skin care basics for patients", href: "https://www.aad.org/public/everyday-care" },
  ],

  footnotes: [
    "Medical review is pending. The reviewer, qualification and review date will be shown once a registered dermatologist signs off.",
    "Session length, how long pinkness lasts and the interval after isotretinoin are general ranges to be confirmed by the reviewer.",
    "Hydrafacial is the name people search for. Other clinics use similar machines under other names. The trademark and wording position is with the founder's lawyer.",
    "Insurance and payment wording is general and to be confirmed. Your policy document decides.",
    "Studies cited here will be read and checked by the reviewer first. None is cited yet.",
  ],
};

// ------------------------------------------------------------------ city pages
// TODO-VERIFY (all four cities): road times, station and airport names, seasonal and water statements are general
// and must be checked against a dated public source before any page leaves noindex.

const hydrafacialDelhi: CityTreatmentPage = {
  ...cityBase(T, "delhi"),
  seoTitle: "Hydrafacial in Delhi: Cost, Downtime, Risks",
  h1: "Hydrafacial in Delhi",
  metaDescription: "Hydrafacial in Delhi: what a session costs, downtime, who should skip it, and how to compare clinic quotes.",
  intro: "A hydrafacial in Delhi is a short skin-care session, usually under an hour, with pink skin for a few hours afterwards. The local price is {tbc} until quotes are collected. Delhi has many clinics and salons, so the useful skill is comparing quotes line by line.",
  includes: { review: "varies", aftercare: "varies" },
  facilities: {
    intro: "No partner facility is confirmed in Delhi yet. Hydrafacial sessions are given in dermatology clinics, skin clinics and salons, and the quality of checks differs between them. This page will name the type once one is confirmed. Until then, use the questions below on any place you are considering.",
    partners: [{ type: "Skin clinic or dermatology clinic in Delhi (to be confirmed)", count: null }],
    accreditation: null,
    checks: [
      { check: "Who performs the session", why: "A doctor, a nurse and a technician have different training", ask: "Who will perform my session, and can I see their training?" },
      { check: "Skin check first", why: "Active infection or sunburn means you should wait", ask: "Will someone look at my skin and ask about my medicines before starting?" },
      { check: "Tips and tools", why: "Reused tools can spread infection", ask: "Are the tips single-use or cleaned, and how?" },
      { check: "Serum and booster list", why: "Add-ons change the bill and can cause reactions", ask: "What is in the base price and what is extra?" },
      { check: "Pack pressure", why: "Prepaid packs are hard to refund", ask: "Can I pay for one session first and decide on a pack afterwards?" },
    ],
  },
  travel: {
    intro: "A session is short, so the trip matters more than the treatment. In Delhi a clinic on a metro line or near your office makes it easy to fit a session between work and home.",
    airport: "Indira Gandhi International Airport (to be verified)",
    station: "New Delhi, Old Delhi and Hazrat Nizamuddin stations (to be verified against the facility)",
    stayDays: "Same day. No stay needed",
    metro: "The metro suits a session visit, and skin may be pink afterwards, so a cap or scarf and sun protection help on the way home. {sample} The nearest station is added once a facility is confirmed.",
    roadTimes: [
      { from: "Noida", time: "50 to 90 min", tip: "A mid-morning slot avoids both peaks" },
      { from: "Ghaziabad", time: "60 to 100 min", tip: "Combine the session with another errand in the city" },
      { from: "Faridabad", time: "50 to 90 min", tip: "Book the last slot before an evening peak" },
      { from: "Gurgaon", time: "50 to 90 min", tip: "Gurgaon has its own clinics, so compare before travelling" },
    ],
    privacyNote: "You do not have to tell anyone why you are at the clinic. Ask that messages name the clinic and the time only, and not the session.",
    mapCaption: "Travel into Delhi from nearby towns, no building shown.",
  },
  localContext: [
    { text: "NEEDS REAL DATA: which Delhi facility, if any, will provide hydrafacial sessions", source: "", asOf: "" },
    { text: "NEEDS REAL DATA: winter and post-Diwali air quality in Delhi (public CPCB records, month and station)", source: "", asOf: "" },
    { text: "NEEDS REAL DATA: tap water quality by area of Delhi (public water board reports)", source: "", asOf: "" },
  ],
  usefulness: "For readers in Delhi and the nearby NCR towns who are comparing many clinic and salon quotes for a hydrafacial and want to read them line by line, with notes on winter dryness and wedding dates.",
  localCopy: [
    "Delhi has many clinics and salons, so comparing quotes line by line is the main task.",
    "Winter dryness and strong summer sun both affect how skin feels after a session.",
    "Book a trial session weeks before a wedding, not days.",
  ],
  localNotes: [
    { heading: "Clinic or salon", text: "Both give hydrafacial sessions in Delhi. A doctor-led clinic can check your skin and advise against a session. A salon may not. Ask which setting you are in, and who performs the session." },
    { heading: "Price comparison", text: "Ask three places for the same lines in writing: the base session, each serum, and any pack. A low base price with many add-ons can end up above a higher base price that includes them." },
    { heading: "A weekday slot", text: "Weekday mornings are quieter and let you avoid peak roads. If your skin is pink, you can cover up for the ride home and go back to your routine in the afternoon." },
    { heading: "Bring a list of products", text: "Take a list of the creams and acids you use, and anything started in the past few weeks. If you use a retinoid or an acid, say so before the session starts." },
  ],
  sections: [
    {
      heading: "Reading Delhi quotes line by line",
      paragraphs: [
        "Delhi has more places that provide a hydrafacial than most cities, and prices vary widely between them. The difference often sits in what is counted. One clinic quotes a base session and adds a serum, a booster and an extra step. Another folds those into one figure.",
        "Write the same questions to each place: what is the base session, which serums are in it, which boosters are extra, what does a pack cost in total and per session, and what happens if my skin reacts. Then compare the totals for the same set of steps.",
      ],
    },
    {
      heading: "Winter dryness and summer sun",
      paragraphs: [
        "Delhi winters are dry and the air in many weeks is poor, and summers are hot with strong sun. A hydrafacial exfoliates the surface, so skin can feel sensitive to both dryness and sun for a day or two. Ask the clinic what moisturiser and sun protection to use, and how to adjust in each season.",
        "We do not claim that pollution or water changes how a session works. If you notice that your skin reacts more at certain times of year, tell the person who performs it.",
      ],
    },
    {
      heading: "Timing around weddings and events",
      paragraphs: [
        "Wedding season fills the winter months. A session just before an event is a risk, because redness, a breakout or a reaction would show on the day. Book a trial session at least a few weeks ahead so you know how your skin reacts, and keep a gap before the event.",
        "Avoid trying a new serum, booster or other facial in the last week.",
      ],
    },
    {
      heading: "Language and asking questions",
      paragraphs: [
        "Staff at most Delhi clinics speak Hindi and English, and many speak Punjabi. If the quote is in English and you read Hindi more easily, ask for a Hindi explanation of each line. Ask who will perform the session and what their training is, and note the answer.",
      ],
    },
    {
      heading: "Where the session sits in a skin routine",
      paragraphs: [
        "A hydrafacial does not replace a doctor's plan for acne, pigment or scars. If you are already seeing a dermatologist, tell them you plan a session and ask whether to wait. If you use a retinoid or acid at home, ask whether to pause it before and after.",
      ],
    },
  ],
};

const hydrafacialGurgaon: CityTreatmentPage = {
  ...cityBase(T, "gurgaon"),
  seoTitle: "Hydrafacial in Gurgaon: Cost, Downtime, Risks",
  h1: "Hydrafacial in Gurgaon",
  metaDescription: "Hydrafacial in Gurgaon (Gurugram): session cost, downtime, who should skip it, and how to compare quotes.",
  intro: "A hydrafacial in Gurgaon (also written Gurugram) is a skin-care session of under an hour, with pink skin for a few hours. The local price is {tbc} until quotes are collected. Gurgaon has a dense mix of clinics and mall-based salons, so a quote check matters more than the address.",
  includes: { review: "varies", aftercare: "varies" },
  facilities: {
    intro: "A partner facility exists in Gurgaon for other treatments, and whether it provides skin-care sessions is to be confirmed. We do not name it. Sessions in this city are given in skin clinics, hospital skin departments and salons, so ask what kind of place you are in.",
    partners: [{ type: "Skin clinic or dermatology clinic in Gurgaon (to be confirmed)", count: null }],
    accreditation: null,
    checks: [
      { check: "Who performs the session", why: "A doctor, a nurse and a technician have different training", ask: "Who will perform my session, and can I see their training?" },
      { check: "Skin check first", why: "Active infection or sunburn means you should wait", ask: "Will someone look at my skin and ask about my medicines before starting?" },
      { check: "Tips and tools", why: "Reused tools can spread infection", ask: "Are the tips single-use or cleaned, and how?" },
      { check: "Serum and booster list", why: "Add-ons change the bill and can cause reactions", ask: "What is in the base price and what is extra?" },
      { check: "Pack pressure", why: "Prepaid packs are hard to refund", ask: "Can I pay for one session first and decide on a pack afterwards?" },
    ],
  },
  travel: {
    intro: "Most people in Gurgaon fit a session into a working day. The question is how close a clinic is to your office or home and whether the slot fits before the evening rush.",
    airport: "Indira Gandhi International Airport, Delhi (to be verified)",
    station: "HUDA City Centre (Yellow Line) and Sikandarpur (Rapid Metro)",
    stayDays: "Same day. No stay needed",
    metro: "Sikandarpur and HUDA City Centre serve much of the commercial belt. With pink skin, a short cab from the station is easier than a walk in the sun. {sample} The distance to a facility is added once one is confirmed.",
    roadTimes: [
      { from: "South Delhi", time: "40 to 70 min", tip: "A mid-morning slot avoids the highway rush" },
      { from: "Noida", time: "70 to 110 min", tip: "Check clinics in Noida before you travel for a short session" },
      { from: "Faridabad", time: "60 to 100 min", tip: "A weekend slot is easier than a weekday one" },
      { from: "Rewari", time: "60 to 90 min", tip: "Combine the visit with errands in the city" },
    ],
    privacyNote: "Many clients come from nearby offices. A short session need not be explained to colleagues. Ask the clinic not to name the session on messages and reminders.",
    mapCaption: "Travel into Gurgaon from Delhi and nearby towns, no building shown.",
  },
  localContext: [
    { text: "NEEDS REAL DATA: whether the Gurgaon partner facility provides skin-care sessions, and its type", source: "", asOf: "" },
    { text: "NEEDS REAL DATA: groundwater quality for Gurugram (Central Ground Water Board report, year)", source: "", asOf: "" },
    { text: "NEEDS REAL DATA: seasonal air quality in Gurugram (public CPCB records)", source: "", asOf: "" },
  ],
  usefulness: "For people in Gurgaon (Gurugram) choosing between many clinics and salons for a hydrafacial, with notes on short sessions around office hours, air-conditioned dryness and heat.",
  localCopy: [
    "Gurgaon has a dense mix of clinics and mall-based salons that provide hydrafacial sessions.",
    "A lunch-hour session sounds easy, and skin that stays pink for hours is the catch.",
    "Air-conditioned offices dry the skin, so ask what moisturiser fits after a session.",
  ],
  localNotes: [
    { heading: "Gurgaon or Gurugram", text: "They are the same city. We use Gurgaon here because more people search for it, and the body text also says Gurugram." },
    { heading: "Lunch-hour sessions", text: "A session of under an hour fits a lunch break, but pink skin can last a few hours. If you have a meeting, book the last slot of the day instead." },
    { heading: "Mall salon or clinic", text: "Both are common here. A clinic can check your skin for sunburn, infection or an irritated barrier. A salon may only follow a fixed menu. Ask who performs the session." },
    { heading: "Questions worth writing down", text: "Send the same three questions to each place: who performs it, what is in the base price, and what happens if my skin reacts. Compare the written replies." },
  ],
  sections: [
    {
      heading: "Many choices, one comparison",
      paragraphs: [
        "Gurgaon has more skin clinics and salons per mile than most cities, and a hydrafacial is on the menu of many. That makes comparison the main task. Look for the same lines in every quote: the base session, each serum, each booster, and the pack total beside the per-session price.",
        "Treat a very low base price with caution until you have seen what it leaves out. Treat pressure to prepay for a pack the same way. Try one session first, and see how your skin reacts.",
      ],
    },
    {
      heading: "Air conditioning, heat and a short session",
      paragraphs: [
        "Long days in air-conditioned offices can dry the skin, and a hydrafacial exfoliates the surface. Skin may feel tight or sensitive for a day or two. Ask the person who performs your session what moisturiser and sun protection fit your skin.",
        "From April to September the sun and heat are strong. Strong sun on freshly exfoliated skin can irritate it, so cover up and keep outdoor time short for the first day.",
      ],
    },
    {
      heading: "Tap water and the face wash you use",
      paragraphs: [
        "Groundwater in parts of Gurugram is reported to be hard or salty, and many homes use filters. We do not claim that water changes how a session works. If your skin feels tight after washing at home, mention it, and let the clinic suggest a gentle cleanser.",
      ],
    },
    {
      heading: "Language and asking for a written quote",
      paragraphs: [
        "Hindi and English are the working languages here. Ask for a written quote that lists each step and add-on. Keep it, because it is the only record of what you agreed to.",
        "If you are unsure about a booster or a serum, ask what it contains and why it is advised for your skin. A specific answer is a good sign, and a vague one is a reason to pause.",
      ],
    },
    {
      heading: "Monsoon and travel",
      paragraphs: [
        "Heavy rain can cause waterlogging and long delays in July and August. If you plan a session before an event, leave a buffer of days. A rescheduled session costs less than a rushed one on a day when your skin looks irritated.",
      ],
    },
  ],
};

const hydrafacialLucknow: CityTreatmentPage = {
  ...cityBase(T, "lucknow"),
  seoTitle: "Hydrafacial in Lucknow: Cost, Downtime, Risks",
  h1: "Hydrafacial in Lucknow",
  metaDescription: "Hydrafacial in Lucknow: session cost, downtime, who should skip it, and how to compare clinic quotes.",
  intro: "A hydrafacial in Lucknow is a skin-care session of under an hour, with pink skin for a few hours. The local price is {tbc} until quotes are collected. Summer sweat and sun are the main local points, and visitors from nearby towns can plan one trip around it.",
  includes: { review: "varies", aftercare: "varies" },
  facilities: {
    intro: "No partner facility is confirmed in Lucknow yet. Sessions here are given in skin clinics, hospital skin departments and salons. If care ends up in another city we will say so at the top of this page and not claim a local site.",
    partners: [{ type: "Skin clinic or dermatology clinic in Lucknow (to be confirmed)", count: null }],
    accreditation: null,
    checks: [
      { check: "Who performs the session", why: "A doctor, a nurse and a technician have different training", ask: "Who will perform my session, and can I see their training?" },
      { check: "Skin check first", why: "Active infection or sunburn means you should wait", ask: "Will someone look at my skin and ask about my medicines before starting?" },
      { check: "Tips and tools", why: "Reused tools can spread infection", ask: "Are the tips single-use or cleaned, and how?" },
      { check: "Serum and booster list", why: "Add-ons change the bill and can cause reactions", ask: "What is in the base price and what is extra?" },
      { check: "Pack pressure", why: "Prepaid packs are hard to refund", ask: "Can I pay for one session first and decide on a pack afterwards?" },
    ],
  },
  travel: {
    intro: "A hydrafacial session is short, so a trip from a nearby town is mostly travel. Plan the day around the session and one or two other errands in the city.",
    airport: "Chaudhary Charan Singh International Airport, Lucknow (to be verified)",
    station: "Charbagh station and the Lucknow Metro (to be verified against the facility)",
    stayDays: "Same day. No stay needed",
    metro: "The Lucknow Metro runs along a north-south corridor and suits a session visit. Pink skin and strong sun do not mix well, so carry a cap or umbrella. {sample} Stations near a facility are added once it is confirmed.",
    roadTimes: [
      { from: "Barabanki", time: "40 to 70 min", tip: "Easy for a same-day visit" },
      { from: "Unnao", time: "60 to 100 min", tip: "Book an early slot to avoid afternoon heat" },
      { from: "Sitapur", time: "80 to 120 min", tip: "Combine with shopping or a family visit" },
      { from: "Hardoi", time: "100 to 150 min", tip: "Plan a full day, with a cap for the return" },
    ],
    privacyNote: "In a smaller town a neighbour may recognise you at a clinic. A short session need not be explained. Ask the clinic not to name the session on messages and reminders.",
    mapCaption: "Travel into Lucknow from nearby districts, no building shown.",
  },
  localContext: [
    { text: "NEEDS REAL DATA: which Lucknow facility, if any, will provide hydrafacial sessions", source: "", asOf: "" },
    { text: "NEEDS REAL DATA: Lucknow climate normals for heat, humidity and fog (IMD)", source: "", asOf: "" },
    { text: "NEEDS REAL DATA: road times from Barabanki, Unnao, Sitapur and Hardoi, checked on a map with a date", source: "", asOf: "" },
  ],
  usefulness: "For readers in Lucknow and nearby districts planning a hydrafacial around summer heat, sweat and sun, wedding dates and a single day trip, with a quote checklist.",
  localCopy: [
    "In Lucknow the main local points are summer sweat and sun after a session, and wedding dates.",
    "From a nearby town, a short session means a long trip, so plan one day around it.",
    "Local skin clinics and salons both provide sessions, and the checks are the same.",
  ],
  localNotes: [
    { heading: "Areas people ask about", text: "People often ask about clinics in Gomti Nagar, Hazratganj and Indira Nagar. We name no clinic. Pick by how easily you can get there and by the answers to the questions on this page." },
    { heading: "Sweat and sun after a session", text: "Skin is more sensitive to sun for a day or two. Avoid being outdoors in the afternoon, wear a cap or carry an umbrella, and use the sun protection the clinic advises." },
    { heading: "Marriage season", text: "Lucknow fills with events through the winter wedding season. Book a trial session well before your date, and avoid trying a new serum or facial in the final week." },
    { heading: "Hindi first", text: "Hindi and Hinglish are fine at most clinics. Ask for the quote to be explained in the language you read most easily. {tbc}" },
  ],
  sections: [
    {
      heading: "One trip, one session",
      paragraphs: [
        "A hydrafacial is a one-session treatment for most people, so the trip is the cost to plan. From Unnao or Sitapur, the visit is a half day or more. Book the earliest slot, and ask the clinic how long you will be there, including the skin check.",
        "Ask whether the pack price makes sense for you if each visit is a day of travel. A pack of sessions is cheaper per session on paper, and it commits you to more trips and more spending before you know how your skin reacts.",
      ],
    },
    {
      heading: "Hot dry summers and humid monsoon",
      paragraphs: [
        "Lucknow summers are hot and dry, and the monsoon is humid. Heat and sweat on freshly exfoliated skin can sting, and humid weeks can bring breakouts after a session in some people. Ask the person who performs it what to do in each season.",
        "Winter mornings can be foggy and cool, and cool dry weeks may leave skin tight after a session. A moisturiser and sun protection matter in every season.",
      ],
    },
    {
      heading: "Water from the Gomti and the tap",
      paragraphs: [
        "Households use a mix of piped supply and groundwater, and hardness varies by area. We do not claim that water changes how a session works. If your skin feels tight after washing at home, tell the clinic, and ask them for a gentle cleanser.",
      ],
    },
    {
      heading: "Who performs it, and how to ask",
      paragraphs: [
        "Both clinics and salons provide hydrafacial sessions in Lucknow. A doctor-led clinic can check for sunburn, infection or irritated skin before starting. A salon may not. Ask who performs the session and what training they have, and ask for tips and tools to be new or cleaned in front of you.",
        "If a person says that everyone can have the session, take that as a reason to ask for details, since some skin conditions and medicines mean you should wait.",
      ],
    },
    {
      heading: "Events, festivals and timing",
      paragraphs: [
        "Diwali, Eid and wedding season bring crowds to markets and clinics. Book early, and keep a gap of a few weeks before any family event for a trial session. If your skin reacts, you will have time for it to settle.",
      ],
    },
  ],
};

const hydrafacialKanpur: CityTreatmentPage = {
  ...cityBase(T, "kanpur"),
  seoTitle: "Hydrafacial in Kanpur: Cost, Downtime, Risks",
  h1: "Hydrafacial in Kanpur",
  metaDescription: "Hydrafacial in Kanpur: session cost, downtime, who should skip it, and how to compare clinic quotes.",
  intro: "A hydrafacial in Kanpur is a skin-care session of under an hour, with pink skin for a few hours. The local price is {tbc} until quotes are collected. Few places in Kanpur publish prices, so this page focuses on how to ask for a quote and who performs the session.",
  includes: { review: "varies", aftercare: "varies" },
  facilities: {
    intro: "No partner facility is confirmed in Kanpur, and Lucknow is the nearest other city we cover. If sessions are in Lucknow we will say so at the top of this page. Until then, this page shows how to compare places in Kanpur and what to check before you pay.",
    partners: [{ type: "Skin clinic or dermatology clinic in Kanpur (to be confirmed)", count: null }],
    accreditation: null,
    checks: [
      { check: "Who performs the session", why: "A doctor, a nurse and a technician have different training", ask: "Who will perform my session, and can I see their training?" },
      { check: "Skin check first", why: "Active infection or sunburn means you should wait", ask: "Will someone look at my skin and ask about my medicines before starting?" },
      { check: "Tips and tools", why: "Reused tools can spread infection", ask: "Are the tips single-use or cleaned, and how?" },
      { check: "Serum and booster list", why: "Add-ons change the bill and can cause reactions", ask: "What is in the base price and what is extra?" },
      { check: "Pack pressure", why: "Prepaid packs are hard to refund", ask: "Can I pay for one session first and decide on a pack afterwards?" },
    ],
  },
  travel: {
    intro: "Kanpur is a large city with long distances inside it. Check how far the clinic is from home or work before you book, and ask for a time that avoids the heaviest traffic.",
    airport: "Kanpur civil airport and Lucknow airport (service and schedules to be verified)",
    station: "Kanpur Central, and Charbagh in Lucknow (to be verified)",
    stayDays: "Same day. No stay needed",
    metro: "Kanpur has a metro line that is partly open, and the part open is to be checked against any facility. {sample} For a session, a cab or a two-wheeler with a cap is easier on pink skin than a crowded vehicle.",
    roadTimes: [
      { from: "Unnao", time: "30 to 60 min", tip: "Close enough for a same-day session" },
      { from: "Kanpur Dehat", time: "40 to 80 min", tip: "An early slot avoids afternoon heat" },
      { from: "Fatehpur", time: "70 to 110 min", tip: "Combine the visit with other errands" },
      { from: "Lucknow", time: "100 to 150 min", tip: "The other city we cover, so compare before you travel" },
    ],
    privacyNote: "In a mid-sized city many people know each other. A short session need not be explained, and a clinic should not name it on messages.",
    mapCaption: "Travel into Kanpur from nearby towns, and the road to Lucknow, no building shown.",
  },
  localContext: [
    { text: "NEEDS REAL DATA: whether any partner facility exists in Kanpur for skin-care sessions", source: "", asOf: "" },
    { text: "NEEDS REAL DATA: Kanpur road time to Lucknow, from a map with a date", source: "", asOf: "" },
    { text: "NEEDS REAL DATA: Kanpur air quality record (public CPCB station data) and tap water quality", source: "", asOf: "" },
  ],
  usefulness: "For readers in Kanpur and nearby towns who find few published prices for a hydrafacial and need a way to ask for a written quote, with notes on who performs the session, dust and cold winters.",
  localCopy: [
    "In Kanpur few places publish prices, so the first job is to ask for a written quote.",
    "Dust and cold winters shape what skin feels like after a session.",
    "Lucknow is the nearest other city we cover, and a trip there needs to earn its time.",
  ],
  localNotes: [
    { heading: "Asking for a written quote", text: "Few places in Kanpur publish a price list. Message or call and ask for the base session, each serum, each booster and any pack in writing. Keep the reply, and ask the same of two other places." },
    { heading: "Is a trip to Lucknow worth it", text: "For a single session, usually not, unless you are going to Lucknow anyway. A day of road time costs more than the difference in a quote. Compare before you travel." },
    { heading: "Cold dry winters", text: "Kanpur winters are cold and dry, and exfoliated skin can feel tight. Ask for a moisturiser that suits you, and avoid hot water on your face for a day." },
    { heading: "Dust and industrial air", text: "Kanpur is an industrial city, and people ask whether dust affects skin after a session. We make no claim. Ask the person who performs it what to wear outdoors afterwards and how to clean your face. {pending}" },
  ],
  sections: [
    {
      heading: "When prices are hard to find",
      paragraphs: [
        "Kanpur has fewer published prices for a hydrafacial than larger cities. That makes a written quote the main tool. Ask for it before you book, and ask for the same lines in each quote: the base session, each serum, each booster, and the pack total beside the per-session price.",
        "When we collect real quotes for Kanpur, this page will show a dated range and the number of sources. Until then the price is a pending figure, and no number from another city stands in for it.",
      ],
    },
    {
      heading: "Who performs it matters more here",
      paragraphs: [
        "With fewer choices, it is easier to accept the first place that fits your budget. Pause and ask who will perform the session and what training they have. Ask whether tips are single-use. Ask what happens if your skin reacts and who you call.",
        "A doctor-led clinic can check your skin and advise you to wait. A place without a skin check may follow a fixed routine for everyone, and that is a reason to ask more questions.",
      ],
    },
    {
      heading: "Cold winters and hot dusty summers",
      paragraphs: [
        "Kanpur has cold winters and hot summers. In winter, exfoliated skin feels dry and tight. In summer, sweat and dust mean skin should be cleaned gently and covered outdoors for a day. Ask for aftercare that fits the month you book in.",
      ],
    },
    {
      heading: "Water and the face wash you use",
      paragraphs: [
        "Water supply in the city mixes the river, piped supply and groundwater, and hardness differs by neighbourhood. We do not claim that water changes how a session works. If skin feels tight after washing, tell the person who performs it, and ask for a gentle cleanser.",
      ],
    },
    {
      heading: "Language, referrals and a second opinion",
      paragraphs: [
        "Hindi and Hinglish are common in Kanpur clinics. If you have a skin condition, ask your family doctor or dermatologist whether a hydrafacial suits you before you pay. A short note from them helps the person performing the session.",
        "Winter fog can slow roads and trains to Lucknow. If you do travel, build in time and avoid a long ride straight after a session, when skin is pink and sensitive.",
      ],
    },
  ],
};

// ------------------------------------------------------------------ cost lines and cost page
// Pending price lines: no figures yet, so the template shows the "To be confirmed" chip.
const hydrafacialCosts: CostLine[] = [
  line(T, 1, "Session, basic", "The clinic and the steps included"),
  line(T, 2, "Session with a booster serum", "Which booster, and the clinic"),
  line(T, 3, "Session with extra steps such as LED, where provided", "The extra steps and their time"),
  line(T, 4, "Add-on, per booster", "The booster chosen"),
  line(T, 5, "Pack of 3 or 6, total and per session", "The pack size and the terms"),
  line(T, 6, "Skin check, if charged", "Whether it is credited to the session"),
  line(T, 7, "Aftercare products, if sold", "The products advised"),
  line(T, 8, "Repeat visit if skin reacts", "Ask in writing before you book"),
];

export const hydrafacialCostPage: NationalCostPage = {
  seoTitle: "Hydrafacial Cost in India: What Changes the Price",
  metaDescription: "What a hydrafacial costs per session, why quotes differ (serums, add-ons, packs), and what to ask in writing.",
  h1: "Hydrafacial cost in India",
  answer: "A hydrafacial is priced per session, and the base price is only the start. Serums, boosters, extra steps and packs change the total, which is why quotes for the same session differ. The ranges on this page are {sample} until confirmed quotes are collected, and each will show its source and date.",
  unit: "session",
  rangeHeading: "Sample lines for one session",
  rangeCaption: "Each line is a separate case with its own range. Your total is built from the lines in your quote, not from one headline figure.",
  factors: [
    { factor: "Base session or add-ons", why: "Boosters, extra steps and add-on serums are usually priced on top of the base session." },
    { factor: "Packs", why: "A pack has a total and a per-session figure. Read both, and try one session before paying for a pack." },
    { factor: "Who performs it", why: "A doctor-led clinic and a salon price the same session differently." },
    { factor: "Device parts and serums", why: "Single-use tips and the serum choice change the bill." },
    { factor: "Aftercare products", why: "Some clinics include them, some sell them separately." },
    { factor: "Skin check", why: "Some places charge for it and credit it to the session, some do not charge." },
    { factor: "City and clinic type", why: "Rents and wages differ between cities, and so do fees." },
  ],
  notIncluded: [
    "Booster serums beyond the base session",
    "Extra steps such as LED, where provided",
    "Aftercare products",
    "A skin check, if charged separately",
    "Treatment of a reaction",
    "Your travel and time off",
  ],
  compareQuotes: [
    "Ask each place for the same lines in writing: the base session, each serum, each booster and any pack.",
    "Compare totals for the same steps, not the headline price.",
    "Ask who performs the session and whether tips are single-use.",
    "Pay for one session before a pack, and keep the written quote.",
    "A promise of a result for every skin type is a reason to ask more questions.",
  ],
  insurance: "A hydrafacial is skin care, and most health policies do not pay for it. Ask your insurer in writing if you think a medical reason applies.",
  payment: "Sessions are usually paid for one at a time. Instalments may exist for packs, and terms are not shown here. {tbc}",
  method: "No figure is shown yet. When quotes arrive, each line will show the source type, the number of data points and the date. A range needs at least three dated points from separate sources before it replaces the pending label. Figures from other websites are not used.",
  faqs: [
    { q: "How much does a hydrafacial cost per session?", a: "It depends on the base session, serums, boosters and extra steps. The range on this page is sample data until confirmed. Ask each place for the same lines in writing, so you can compare totals." },
    { q: "Why do quotes for the same session differ?", a: "Places count different things. One includes a serum and a booster in the base price, another adds them. Compare the total for the same steps." },
    { q: "Is a pack cheaper than single sessions?", a: "A pack total divided by sessions can be lower per session, but you commit before you know how your skin reacts. Try one session first." },
    { q: "Are boosters worth paying for?", a: "That depends on your skin and your goal, and it is a question for the person who performs it. Ask what is in a booster and what it is meant to do." },
    { q: "Does insurance pay for a hydrafacial?", a: "Usually not, because it is skin care. Ask your insurer in writing." },
    { q: "What should the quote list?", a: "The base session, each serum and booster, any extra steps, the pack total and per-session price, aftercare products, and what happens if your skin reacts." },
  ],
  sources: [
    { label: "National Medical Commission: public register of doctors", href: "https://www.nmc.org.in/" },
  ],
};

// ------------------------------------------------------------------ FAQs
const faqs: FaqRow[] = [
  faqRow(T, null, "hydra-same", 1, "Is a hydrafacial the same as a regular facial?", "No. A regular facial is usually done by hand with steam, massage and a mask. A hydrafacial uses a handheld device to cleanse, exfoliate, suction debris from pores and apply serums. Neither is a treatment for a skin condition. See [hydrafacial vs a regular facial](/learn/hydrafacial-vs-regular-facial)."),
  faqRow(T, null, "hydra-acne", 2, "Can I have one with active acne?", "It depends on the acne. Inflamed or painful acne can be irritated by the steps, and a doctor may advise another plan first. A hydrafacial does not treat acne. Ask a dermatologist before you book. See [hydrafacial for acne-prone skin](/learn/hydrafacial-acne-prone-skin)."),
  faqRow(T, null, "hydra-sessions", 3, "How many sessions and how often?", "There is no single answer. Clinics suggest different gaps, and the reviewer will give a general range after review. Try one session first and see how your skin reacts before you buy a pack. See [how often](/learn/how-often-hydrafacial)."),
  faqRow(T, null, "hydra-feel", 4, "What does it feel like?", "Most people feel a gentle suction, some stinging from the solutions and a cool or tingling serum. Sensation varies, and some people find it uncomfortable. Tell the person if it hurts."),
  faqRow(T, null, "hydra-redness", 5, "How long does redness last?", "Pink skin commonly lasts a few hours, and sensitivity can last a day or two. Longer redness, swelling or blistering needs a call to the clinic."),
  faqRow(T, null, "hydra-skip", 6, "Who should skip it?", "Anyone with sunburn, open sores, a cold sore, active infection or irritated skin from new acids, and people who had a recent peel, laser or isotretinoin course. Ask first if you are pregnant. See [who should skip it](/learn/hydrafacial-side-effects-who-should-skip)."),
  faqRow(T, null, "hydra-pigment", 7, "Will it help tan, pigmentation or open pores?", "A hydrafacial works on the surface, so it does not treat pigmentation conditions or change pore size in a lasting way. For melasma or marks, see a dermatologist. See [hydrafacial on Indian skin](/learn/hydrafacial-indian-skin-pigmentation)."),
  faqRow(T, null, "hydra-cost", 8, "How much does it cost, and why do quotes differ?", "The base session, serums, boosters, extra steps and packs all change the total. Read the [cost page](/cost/hydrafacial), and ask each place for the same lines in writing. Figures are sample data until confirmed."),
  faqRow(T, null, "hydra-check", 9, "How do I check the machine and the person performing it?", "Ask who will perform the session and what their training is. Ask whether tips are single-use or how they are cleaned. A reply that is vague is a reason to ask for a doctor-led clinic."),
  faqRow(T, null, "hydra-event", 10, "How many days before a wedding or event should I book?", "Book a trial session at least a few weeks before, so you see how your skin reacts. Avoid new serums, boosters or facials in the final week. The reviewer will give a general range. See [before a wedding](/learn/hydrafacial-before-wedding-timing)."),

  // ---- Delhi
  faqRow(T, "delhi", "hydra-delhi-where", 20, "Is a hydrafacial available in Delhi itself?", "That is to be confirmed. No partner facility is confirmed in Delhi yet. If sessions are in Gurgaon, the page will say so at the top, and the [Gurgaon page](/hydrafacial-in-gurgaon) has road times."),
  faqRow(T, "delhi", "hydra-delhi-compare", 21, "How do I compare Delhi quotes?", "Ask for the base session, serums, boosters and pack in writing from each place. Compare the total for the same steps. Treat a very low base price with caution until you see what it leaves out."),
  faqRow(T, "delhi", "hydra-delhi-winter", 22, "Does Delhi's winter air change how I should plan a session?", "Winter air is dry, and exfoliated skin can feel tighter. Ask what moisturiser fits, and avoid strong sun and heat on the first day. We make no claim about pollution and sessions."),
  faqRow(T, "delhi", "hydra-delhi-wedding", 23, "I have a wedding in Delhi in two months. When should I book?", "Book a trial session a few weeks before, and avoid new products in the final week. Skin can react, and you will want time for it to settle."),

  // ---- Gurgaon
  faqRow(T, "gurgaon", "hydra-ggn-name", 20, "Gurgaon or Gurugram: is it the same place?", "Yes. Both spellings are used for the same city in Haryana. This page uses Gurgaon because more people search for it."),
  faqRow(T, "gurgaon", "hydra-ggn-lunch", 21, "Can I have a session in my lunch hour?", "The session takes under an hour, but pink skin can last a few hours. If you have a meeting, book the last slot of the day instead."),
  faqRow(T, "gurgaon", "hydra-ggn-mall", 22, "Is a mall salon the same as a skin clinic?", "Not always. A clinic can check your skin for infection or sunburn before starting. A salon may follow a fixed menu. Ask who performs the session and what training they have."),
  faqRow(T, "gurgaon", "hydra-ggn-ac", 23, "Does office air conditioning dry my skin after a session?", "It can add to dryness. Ask the person performing the session which moisturiser and sun protection suit you, and use them as advised."),

  // ---- Lucknow
  faqRow(T, "lucknow", "hydra-lko-where", 20, "Is a hydrafacial provided in Lucknow?", "That is to be confirmed. No partner facility is confirmed in Lucknow yet. If it is elsewhere, the page will say so at the top, with the distance."),
  faqRow(T, "lucknow", "hydra-lko-summer", 21, "Can I have a session in a Lucknow summer?", "It is possible, but heat, sweat and strong sun can sting exfoliated skin. Book an early slot, avoid the afternoon sun and use the protection the clinic advises."),
  faqRow(T, "lucknow", "hydra-lko-trip", 22, "I live in Unnao. Is one session worth the trip?", "That depends on your plans. Combine the visit with other errands, book the earliest slot, and avoid prepaying a pack that commits you to more trips."),
  faqRow(T, "lucknow", "hydra-lko-hindi", 23, "Can the quote be explained in Hindi?", "Yes, ask the clinic to explain each line in Hindi or Hinglish. Ask for the written quote in the language you read most easily."),

  // ---- Kanpur
  faqRow(T, "kanpur", "hydra-knp-lucknow", 20, "Do I need to go to Lucknow for a hydrafacial?", "That is to be confirmed. No partner facility is confirmed in Kanpur yet, and Lucknow is the nearest other city we cover. For a single session, a trip usually costs more in time than it saves in price."),
  faqRow(T, "kanpur", "hydra-knp-quote", 21, "How do I get a price when none is published?", "Message or call and ask for the base session, each serum, each booster and any pack in writing. Ask at two or three places and compare."),
  faqRow(T, "kanpur", "hydra-knp-dust", 22, "Does dust in Kanpur matter after a session?", "We make no claim. Ask the person who performs it how to clean your face and what to wear outdoors for the first day."),
  faqRow(T, "kanpur", "hydra-knp-winter", 23, "How does a Kanpur winter affect my skin after a session?", "Winters are cold and dry, so exfoliated skin can feel tight. Use a moisturiser as advised and avoid hot water on your face for the first day."),
];

export const hydrafacial: SkinHairTopic = {
  treatment: {
    slug: T,
    seo: {
      title: "Hydrafacial: Steps, Downtime, Risks and Cost Factors",
      description: "What a hydrafacial involves, what it cannot do, aftercare, who should skip it, and what changes the price. Doctor reviewed.",
      cityTitle: "Hydrafacial in {city}: Cost, Downtime, Risks",
    },
    content: hydrafacialContent,
    display: {
      costMode: "options",
      priceLabel: "One hydrafacial session, usual cost",
      priceLinkText: "The lines inside it",
      costHeading: "What a session costs",
      costCaption: "Each line is a separate case with its own range. Sample data / To be confirmed.",
      operationHeading: "What a hydrafacial is and is not",
      recoveryHeading: "Downtime and aftercare",
      recoveryTocLabel: "Downtime",
      timelineCaption: "What most people notice and do, by time since the session.",
      risksHeading: "Side effects and risks",
      riskGuideHref: "/hydrafacial#risks",
      heroPlate: "none",
      operationPlate: "none",
      labels: {
        techniquesHeading: "How it compares",
        techniquesCaption: "Plain differences between options people compare. No ranking.",
        tocTechniques: "How it compares",
      },
      tocLabels: { surgery: "What it is", choices: "Steps" },
    },
  },
  costUnit: "session",
  includeKeys: hydrafacialIncludeKeys,
  costPage: hydrafacialCostPage,
  costLines: hydrafacialCosts,
  faqs,
  cityPages: [hydrafacialDelhi, hydrafacialGurgaon, hydrafacialLucknow, hydrafacialKanpur],
};
