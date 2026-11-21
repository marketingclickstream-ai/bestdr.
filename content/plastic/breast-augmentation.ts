import type { CityTreatmentPage, CostLine, FaqRow, NationalCostPage, TreatmentContent, TreatmentDisplay } from "../types";
import { NMC_SOURCE, cityBase, faqRow, line, surgicalIncludes, type PlasticTopic } from "./shared";

// Breast augmentation: hub, Kanpur and Lucknow city pages, cost lines, FAQs and the national cost page.
// Rules applied: adults only. No implant brand or manufacturer name anywhere. No size promise, no outcome promise, no counts,
// no before and after, no named facility or doctor, no price figure. Material names (silicone gel, saline) are generic.
// TODO-VERIFY: implant check-up advice, how long implants are expected to last, the weeks before lifting and exercise, and the
// pregnancy and breastfeeding statements are general descriptions for the plastic surgeon reviewer to confirm. Legal review is
// pending for implant pages. Marked {pending} where they are shown.

const T = "breast-augmentation";

export const breastAugmentationDisplay: TreatmentDisplay = {
  noPlates: true,
  operationHeading: "What breast augmentation involves, and the choices you will be asked to make",
  recoveryHeading: "Recovery calendar for breast augmentation, week by week",
  recoveryTocLabel: "Recovery",
  timelineCaption: "What most people notice and do, by time since the operation.",
  risksHeading: "Risks and complications",
  riskGuideHref: "/breast-augmentation#risks",
  priceLabel: "Implant breast augmentation, usual total bill",
  priceLinkText: "Other approaches and add-ons",
  costMode: "options",
  costHeading: "What breast augmentation costs, by approach",
  costCaption: "Each row is a separate case. Rows are not added together. Sample data / To be confirmed.",
  labels: {
    techniquesHeading: "Where the cut goes and where the implant sits",
    techniquesCaption: "Plain differences between the choices a surgeon will ask you about. No ranking.",
    tocTechniques: "Cut and implant position",
  },
  tocLabels: { surgery: "What it involves", choices: "Choices and implants" },
};

export const breastAugmentationContent: TreatmentContent = {
  dek: "Breast augmentation increases breast size, using an implant placed through a small cut or, for a smaller change, fat moved from another area. This page covers adults. The [cost](/cost/breast-augmentation) depends on the approach, the implant type and the facility. Implants need check-ups for years, and a plastic surgeon decides who it suits.",

  shortAnswers: [
    { q: "Implant or fat transfer?", a: "An implant gives a larger and more predictable change in size. Fat transfer is a smaller change and depends on how much fat survives.", href: "#implant-or-fat", linkText: "Implant or fat transfer" },
    { q: "Who should wait?", a: "Anyone pregnant or planning a pregnancy soon, still breastfeeding, or under the age at which the surgeon advises. This page covers adults.", href: "#surgery", linkText: "Who it suits" },
    { q: "How long is recovery?", a: "Desk work often returns within about a week. Heavy lifting and strenuous exercise wait for several weeks {pending}.", href: "#recovery", linkText: "The weekly calendar" },
    { q: "What sets the price?", a: "The approach, the implant type, the facility, anaesthesia and the follow-up the quote includes.", href: "#cost", linkText: "The cost lines" },
  ],

  operation: {
    lead: "Breast augmentation is an operation under anaesthesia. For an implant, the surgeon makes a small cut, creates a pocket, places the implant and closes the wound. For fat transfer, fat is taken from another area by liposuction and placed into the breast. A surgeon decides whether it suits you.",
    body: "An implant is a medical device with a shell and a filling. It is not a lifetime item, and it needs follow-up for as long as you have it. Surgeons ask about size, shape, where the cut goes and whether the implant sits above or below the chest muscle. Each choice has trade-offs, listed below. Compare it with [breast reduction](/breast-reduction), which is a different operation with a different aim.",
    caption: "Cut positions and the two implant pockets a surgeon discusses with you.",
    ask: "Which cut, which pocket and which implant type do you advise for my body, and why?",
    how: [
      "Consultation: the surgeon examines the chest and breasts, asks about family history, pregnancies and breastfeeding, and checks skin and tissue thickness.",
      "Sizing: the surgeon measures the chest and breast, and you try sizers in a bra. The goal is a shape that fits your frame.",
      "Fitness check: blood tests and an anaesthesia assessment. Breast imaging may be advised depending on age and family history.",
      "Anaesthesia: usually general anaesthesia. The anaesthetist explains the plan and the risks.",
      "Operation: a cut is made, a pocket is created above or below the muscle, the implant is placed and the wound is closed.",
      "Support: a surgical bra or a dressing is fitted. Some surgeons use drains.",
      "Stay: many people go home the same day or after one night, and the surgeon sets yours {pending}.",
    ],
    whoItSuits: [
      { term: "Adults who want more volume", text: "Adults with a clear wish for fuller breasts, who have thought about size and shape for some time." },
      { term: "Stable situation", text: "People whose weight is steady and who are not pregnant, not breastfeeding and not planning a pregnancy soon." },
      { term: "Realistic about limits", text: "People who understand that the chest wall and tissue set limits, and that one size does not fit every frame." },
      { term: "Ready for follow-up", text: "People who will go to check-ups for years and who will keep a record of the device they receive." },
    ],
  },

  techniques: {
    lead: "A surgeon decides the cut and the pocket after an examination. These are the common choices, and the table gives plain differences, with no ranking.",
    rows: [
      { name: "Cut under the breast fold", how: "A cut in the crease under the breast. The scar sits in the fold", often: "Wide choice of implant sizes and a direct view of the pocket", ask: "How visible will the scar be when I lie down or wear a bikini top?" },
      { name: "Cut around the nipple edge", how: "A cut at the lower edge of the dark skin around the nipple", often: "A well-hidden scar for some skin types, with a different pathway to the pocket", ask: "How does this cut affect nipple feeling and breastfeeding?" },
      { name: "Cut in the armpit", how: "A cut in a skin fold of the armpit, so the breast skin is not cut", often: "People who prefer that the breast skin is not cut", ask: "How is the implant placed through this route, and what are the trade-offs?" },
      { name: "Implant above the muscle", how: "The implant sits behind the breast tissue and in front of the chest muscle", often: "People with enough breast tissue to cover the implant", ask: "Will I feel or see the edges of the implant?" },
      { name: "Implant below the muscle", how: "The implant sits partly behind the chest muscle", often: "People with thin tissue, who need more coverage", ask: "How does this affect pain, recovery and the look when I flex my chest?" },
    ],
    note: "Implants are filled with silicone gel or saline. Shells can be smooth or textured, and shapes can be round or teardrop. The surgeon explains what each means for you. We name no brand.",
  },

  extraSections: [
    {
      id: "implant-or-fat",
      heading: "Implant or fat transfer: a decision table",
      tocLabel: "Implant or fat transfer",
      lead: "People often start with this question. The table compares what changes, and a surgeon examines you before advising.",
      table: {
        caption: "General differences. A surgeon decides for you.",
        head: ["Question", "Implant", "Fat transfer"],
        rows: [
          ["How large a change?", "Larger and more predictable in volume", "Smaller, often about one cup size, depending on the fat that stays {pending}"],
          ["Do I need spare fat?", "No", "Yes. The surgeon needs enough fat to take"],
          ["Where is the scar?", "A cut in the fold, around the nipple or in the armpit", "Several tiny cuts where fat is taken and where it is placed"],
          ["What happens over time?", "The device may need replacing or removing, and needs check-ups", "Some fat is absorbed in the months after, so the change can be less than planned"],
          ["Does it affect breast imaging?", "Implants can make screening images more complex. Tell the imaging team", "Fat can leave small hard areas that need follow-up imaging"],
          ["Recovery", "Soreness in the chest, with the muscle pocket often more tender", "Soreness at the fat-taking sites as well"],
        ],
      },
    },
    {
      id: "sizing",
      heading: "How size is chosen",
      tocLabel: "How size is chosen",
      paragraphs: [
        "Size is chosen from a mix of measurements and your wishes. A surgeon measures the width of the chest and the breast, the tissue thickness and the skin tightness, and then shows you sizers in a bra. The size is described in volume, and cup sizes are a poor guide because brands of bras differ.",
        "Bring a photograph of a size you like only as a way to describe your wish. Ask the surgeon what your frame allows. A volume that is too large for your tissue can stretch skin and lead to more surgery later.",
        "Plan for a second look at your blouses and clothes after swelling settles. Most tailors advise waiting until the shape is steady before stitching new blouses or fitted outfits. {pending}",
      ],
    },
    {
      id: "implant-life",
      heading: "Implants are devices that need check-ups",
      tocLabel: "Check-ups and replacement",
      paragraphs: [
        "An implant is not a lifetime item. Many need to be checked, and some are replaced or removed after years. Ask the surgeon how often you should be reviewed, how a leak or a change would be found, and who will see you if your surgeon moves. {pending}",
        "Keep the device record card that the hospital gives you. It lists the type, size and batch of the implant, and it helps any future doctor. Keep a copy on your phone as well. Do not accept an operation if the facility cannot tell you exactly what implant will be used.",
        "Ask about breast imaging. Implants can change how screening images are taken. Tell the imaging team that you have implants every time.",
      ],
      note: { label: "Ask this", text: "What check-up schedule do you advise, what does a check-up cost, and what happens if I need the implant removed or replaced?" },
    },
    {
      id: "pregnancy",
      heading: "Pregnancy, breastfeeding and the long term",
      tocLabel: "Pregnancy and breastfeeding",
      paragraphs: [
        "Pregnancy and breastfeeding change breast size and skin. Many surgeons advise waiting until the family is complete. Some people breastfeed after an implant, and the cut and the pocket can affect that. Ask the surgeon what the chosen cut means for milk supply. {pending}",
        "Weight change also alters breast shape. Large gains or losses can stretch the skin around an implant or change how it looks.",
      ],
    },
    {
      id: "questions",
      heading: "What to ask your surgeon before paying",
      tocLabel: "Questions to ask",
      bullets: [
        "Which implant type, shape and pocket do you advise for me, and why?",
        "What size will you try, and how did you choose it?",
        "Where will the cut be, and what happens to nipple feeling?",
        "Will I receive a device record card, and what does it list?",
        "How often will you review me, and what does each check-up cost?",
        "What do you do if the implant needs to be removed or replaced, and what do I pay?",
        "How many nights do I stay, and what follow-up visits are included?",
        "Who will do the operation and who will be in the theatre?",
      ],
    },
  ],

  recovery: {
    lead: "Here is the common course of healing. Your surgeon sets your dates, and the plastic surgeon reviewer still has to confirm each range. {pending}",
    body: "Expect a tight, sore chest in the first days, a surgical bra worn day and night, and swelling that goes down over weeks. Avoid lifting your arms above shoulder height and avoid heavy lifting for the time you are told. Keep to the review dates.",
    highlights: [
      { pre: "about", big: "1 week", text: "Before many people return to desk work" },
      { pre: "about", big: "4 to 6 weeks", text: "Before heavy lifting and strenuous exercise are usually allowed" },
      { pre: "months", big: "3 to 6", text: "Swelling settles and the implants soften and settle" },
    ],
    timeline: [
      { when: "Day 0 to 2", notice: "Soreness, tightness, a surgical bra and drowsiness", doThis: "Rest with your head and chest raised. Take medicines as prescribed. Walk short distances." },
      { when: "Day 3 to 7", notice: "Swelling, bruising and a tight chest. Arm movement is stiff", doThis: "Short walks. Keep the bra on. Avoid reaching high or lifting. Attend the first review." },
      { when: "Week 2", notice: "Soreness eases. Swelling remains. The implants may sit high", doThis: "Return to desk work if the surgeon agrees. No heavy lifting. Keep the bra on." },
      { when: "Week 3 to 4", notice: "More comfort. Skin around the scar may itch", doThis: "Light activity. Scar care as advised. Ask about driving." },
      { when: "Week 6", notice: "Most people feel close to usual. The implants start to settle", doThis: "Review visit. Ask about exercise and the type of bra to wear." },
      { when: "Month 3 to 6", notice: "Swelling mostly down. The implants soften and settle into position", doThis: "Gradual return to exercise. Ask when to be measured for new clothes." },
      { when: "Year 1", notice: "The scar fades and the shape is settled", doThis: "Review. Set the schedule for later check-ups and keep your device record." },
    ],
    grid: {
      cols: ["Wk 1", "Wk 2", "Wk 4", "Wk 6"],
      rows: [
        { label: "Desk work", cells: [{ state: "m", text: "Ask" }, { state: "y", text: "Yes" }, { state: "y", text: "Yes" }, { state: "y", text: "Yes" }] },
        { label: "Reaching above the head", cells: [{ state: "n", text: "No" }, { state: "m", text: "Ask" }, { state: "y", text: "Yes" }, { state: "y", text: "Yes" }] },
        { label: "Lifting heavy items", cells: [{ state: "n", text: "No" }, { state: "n", text: "No" }, { state: "n", text: "No" }, { state: "m", text: "Ask" }] },
        { label: "Driving", cells: [{ state: "n", text: "No" }, { state: "m", text: "Ask" }, { state: "y", text: "Yes" }, { state: "y", text: "Yes" }] },
        { label: "Gym or running", cells: [{ state: "n", text: "No" }, { state: "n", text: "No" }, { state: "n", text: "No" }, { state: "m", text: "Ask" }] },
      ],
    },
    closing: "No recovery follows a fixed timetable. Pain, swelling and the time to settle vary with the pocket, the implant and your body. Plan weddings, travel and tailoring months ahead.",
  },

  risks: {
    lead: "Every operation carries risk, and an implant adds some of its own. The list below puts the common ones in plain words with a question for each, and leaves the full list to your surgeon.",
    rows: [
      { risk: "Bleeding and bruising", means: "Blood collecting around the implant, sometimes needing a return to theatre.", ask: "What do you do if I bleed, and where would I be treated?" },
      { risk: "Infection", means: "Redness, heat, pus or fever. An infection may need the implant removed.", ask: "Which signs should I report, and what is your plan if an implant must come out?" },
      { risk: "Capsular contracture", means: "Scar tissue around the implant tightens and the breast feels hard or changes shape.", ask: "How do you lower the chance, and how is it treated?" },
      { risk: "Implant position or shape problems", means: "An implant may sit too high, too low or to the side, or ripple under the skin.", ask: "What is the plan if the position is not right?" },
      { risk: "Rupture or leak", means: "The shell can fail over time, and some leaks are found only on imaging.", ask: "How will a leak be found, and what do I pay if it happens?" },
      { risk: "Changes in nipple or breast feeling", means: "Numbness, oversensitivity or altered feeling, for a time or longer.", ask: "How long does it usually last?" },
      { risk: "Scarring", means: "A scar that can be raised, wide or dark in some people.", ask: "What scar care do you advise?" },
      { risk: "Asymmetry", means: "The two breasts may differ in size, shape or position.", ask: "Which differences are normal, and what is the plan if one persists?" },
      { risk: "Further surgery", means: "Many people need another operation at some point, for replacement, removal or a change.", ask: "What would a second operation cost, and when do you advise it?" },
      { risk: "Anaesthesia risks", means: "Nausea, breathing and heart events, higher with some illnesses.", ask: "Who gives my anaesthesia, and what did my fitness check show?" },
    ],
    alert: "Ring your surgeon at once for fever, spreading redness or heat, pus, severe pain, a fast-growing swelling on one side, chest pain or breathlessness. Failing that, go to the nearest emergency department.",
    wait: [
      "You are pregnant, breastfeeding, or planning a pregnancy soon",
      "You are under the age at which the surgeon advises, or the surgeon says your breasts are still changing",
      "Your weight is still changing",
      "You smoke or use nicotine and have not stopped as advised",
      "You have an unexplained breast lump or have not had advised breast imaging",
      "You expect a particular cup size or a copy of a photograph",
      "You have an active infection of the skin or chest",
      "You have a bleeding condition or take blood thinners without a plan",
    ],
    tell: [
      "Family history of breast cancer",
      "Past breast surgery, lumps or biopsies",
      "Pregnancies and breastfeeding",
      "All medicines, supplements and blood thinners",
      "Autoimmune and skin conditions",
      "Smoking, nicotine and alcohol",
    ],
  },

  patientQuestions: [
    { q: "Implant or fat?", href: "#implant-or-fat", linkText: "Read: the decision table" },
    { q: "How is size chosen?", href: "#sizing", linkText: "Read: how size is chosen" },
    { q: "Do implants wear out?", href: "#implant-life", linkText: "Read: check-ups and replacement" },
    { q: "What about pregnancy?", href: "#pregnancy", linkText: "Read: pregnancy and breastfeeding" },
    { q: "What should I ask?", href: "#questions", linkText: "Read: questions to ask" },
    { q: "What will it cost?", href: "#cost", linkText: "Read: the cost lines" },
  ],

  quoteProcess: [
    { title: "A coordinator takes your first call", text: "Phone or WhatsApp. Say where you live and what you want to ask. Nobody needs to commit on this call." },
    { title: "A surgeon examines you", text: "In person. A first view from photos is limited, because the plan depends on tissue and chest shape." },
    { title: "The plan arrives in writing", text: "It names the approach, implant type and volume, cut and pocket, plus the surgeon, the facility and the price." },
    { title: "You compare without hurry", text: "Set plans for the same approach and implant type next to each other. No package is paid before the examination." },
    { title: "Care after the operation", text: "A coordinator call, early review visits and a schedule for check-ups in later years." },
  ],

  quoteChecks: [
    "state the approach, the implant type and the pocket?",
    "say which implant will be used and promise a record card?",
    "show anaesthesia, theatre and surgeon fees separately?",
    "say whether the surgical bra, dressings and review visits are included?",
    "give the cost of check-ups and of a later replacement or removal?",
    "name the facility type and the length of stay?",
  ],

  extras: [
    "Fat transfer, if combined",
    "A breast lift, if advised",
    "Breast imaging before surgery",
    "Pre-operative blood tests",
    "Surgical bras and medicines after discharge",
    "Check-ups, and replacement or removal later",
    "GST, if shown separately",
    "Your travel and time off",
  ],

  insurance:
    "Insurance. Breast augmentation for appearance is usually not covered by health policies. Reconstruction after illness may be treated differently, so read your policy wording and write to your insurer before you book. Cashless approval is never promised here.",
  payment:
    "Payment. Methods and instalments depend on the facility and the lender and are not shown here. Do not pay a package until a surgeon has examined you. {tbc}",

  // TODO-VERIFY: the reviewer opens each source and confirms the URL and the facts used.
  sources: [NMC_SOURCE],

  footnotes: [
    "Medical review is pending. A reviewer name, qualification and date will appear once a registered plastic surgeon signs off.",
    "Implant check-up advice, the expected life of an implant, recovery ranges and breastfeeding statements are general and await the reviewer.",
    "Legal review of implant wording is pending. No brand or manufacturer is named.",
    "No satisfaction or complication figure appears, because none has been verified.",
    "Insurance and payment wording is general and still to be confirmed.",
  ],
};

// ------------------------------------------------------------------ city pages
// TODO-VERIFY (both cities): road times, station and airport names, stays and follow-up arrangements are general
// and must be checked against the partner facility and a dated public source before any page leaves noindex.

const baKanpur: CityTreatmentPage = {
  ...cityBase(T, "kanpur"),
  seoTitle: "Breast Augmentation in Kanpur: Cost, Recovery, Risks",
  h1: "Breast augmentation in Kanpur",
  metaDescription: "Breast augmentation in Kanpur: sample cost lines, implant and check-up questions, recovery in a hot climate, and travel from Unnao and nearby towns.",
  intro: "The sample total for breast augmentation in Kanpur depends on the approach, the implant type and the facility. No partner facility is confirmed in Kanpur yet, so no price is shown. Kanpur women often ask about privacy at home, a female attendant, and where a long-term check-up will happen after the operation.",
  includes: { ...surgicalIncludes },
  facilities: {
    intro: "No partner facility is confirmed in Kanpur yet. Breast augmentation needs a theatre, an anaesthetist and a recovery area. The facility must be able to tell you the exact implant type and give you a record card.",
    partners: [{ type: "Hospital or day-care unit with a theatre in Kanpur (to be confirmed)", count: null }],
    accreditation: null,
    checks: [
      { check: "Implant record card", why: "Future doctors need the type, size and batch", ask: "Will I get a record card on the day, and can I see the implant packaging before surgery?" },
      { check: "Female staff and privacy", why: "Many patients prefer female nurses and chaperones", ask: "Will a female nurse be present during the examination and in recovery?" },
      { check: "Check-up access in Kanpur", why: "Implants need review for years", ask: "Where will I be reviewed in the years after, and what does it cost?" },
    ],
  },
  travel: {
    intro: "Most people who come for this operation travel with a family member. The questions in Kanpur are who goes with you, how to travel home in a hot car with a tender chest and where long-term check-ups happen if the surgeon is in another city.",
    airport: "Kanpur Airport at Chakeri has limited services (to be verified). Many travellers use Lucknow airport",
    station: "Kanpur Central",
    stayDays: "To be confirmed by the partner. Many plans use a same-day return or one night {pending}",
    metro: "A cab or a family car is easier than public transport with a tender chest and a surgical bra.",
    roadTimes: [
      { from: "Unnao", time: "40 to 80 min", tip: "A same-day return to the first review is workable" },
      { from: "Kanpur Dehat", time: "60 to 120 min", tip: "Ask whether early reviews can be done by a local doctor from a written plan" },
      { from: "Etawah", time: "120 to 180 min", tip: "A night in the city after surgery may suit better than a long return" },
      { from: "Lucknow", time: "90 to 150 min", tip: "If you compare Lucknow, compare the same implant type and check-up plan" },
    ],
    privacyNote: "Breast surgery is private health information. Ask the facility to keep the procedure name out of messages and receipts, and to tell you who can see your photographs.",
    mapCaption: "Travel into Kanpur from Unnao and nearby towns, no building shown.",
  },
  localContext: [
    { text: "NEEDS REAL DATA: which Kanpur facility, if any, will do breast augmentation, and its type", source: "", asOf: "" },
    { text: "NEEDS REAL DATA: where implant check-up imaging (ultrasound or MRI) is available in Kanpur", source: "", asOf: "" },
    { text: "NEEDS REAL DATA: Kanpur summer temperatures and humidity by month (India Meteorological Department records)", source: "", asOf: "" },
  ],
  usefulness: "For adults in Kanpur and nearby towns who weigh implant against fat transfer, plan privacy at home, travel with a family member, handle a hot-season surgical bra and want to know where later check-ups happen.",
  localCopy: [
    "A Kanpur patient often needs to plan who goes with her, who is told and where she will be reviewed years later.",
    "A surgical bra in a Kanpur summer causes heat rash, so ask about the fabric and the number of bras in the price.",
    "Implants need check-ups, and the Kanpur question is where imaging is available.",
  ],
  localNotes: [
    { heading: "Who goes with you", text: "Hospitals usually allow one attendant. Many patients choose a sister, a friend or a husband. Decide in advance who stays, who is told and what you want to share at home." },
    { heading: "Heat and the surgical bra", text: "A bra worn day and night in a Kanpur summer is hot and the skin under it can break out. Ask what fabric is used, how many bras are in the price and how to wash them. {pending}" },
    { heading: "Check-ups after you go home", text: "Implants need review for years. Ask where the imaging is done in Kanpur, who reads it and what happens if the surgeon is in another city." },
    { heading: "Blouses, kurtas and tailoring", text: "Plan new blouse and kurta fittings after the swelling settles, as advised by your surgeon. Old blouses may feel tight in the first weeks, so wear loose, front-open clothes at first." },
  ],
  sections: [
    {
      heading: "Privacy, family and who is told",
      paragraphs: [
        "A joint family means many eyes at home. Some Kanpur patients tell only a sister or a husband, and others tell no one beyond the household. How much you share is your choice. The surgeon needs your full health history, and the facility should keep your records private. Ask who will call you and what the caller says if someone else answers.",
        "You will need help for the first week. Think about who can open doors, lift a water jug and help you wash your hair without asking questions.",
      ],
    },
    {
      heading: "Implant or fat transfer, in a city with few options",
      paragraphs: [
        "In a smaller city the choice may feel narrower than on paper. Ask any surgeon you see what fits your tissue and goals, and what the trade-offs are. Fat transfer needs spare fat and a second site, and gives a smaller change. An implant gives a larger and more predictable volume, and needs check-ups for years.",
        "If a surgeon recommends one option without saying why, ask for the reasoning in writing. A second opinion in Lucknow is a short trip away.",
      ],
    },
    {
      heading: "Long-term check-ups from Kanpur",
      paragraphs: [
        "An implant is not a one-time purchase. You may need review visits and imaging for years. Before you book, ask where those happen. If the surgeon is in Lucknow or Delhi, a Kanpur doctor can examine you from your record card and written plan, and send you back only if there is a problem. Keep copies of the operation note and the device record on your phone.",
      ],
    },
    {
      heading: "The hot months and healing skin",
      paragraphs: [
        "Kanpur summers are hot and dry. Sweat under a surgical bra can irritate the scar and the skin around it. Ask your surgeon how to keep the area clean and dry, what to do if a rash appears and how long you will need the bra. If you can choose the date, ask whether a cooler month eases the weeks in a garment. {pending}",
      ],
    },
    {
      heading: "Reaching the hospital and getting home",
      paragraphs: [
        "A bumpy road is painful for a tender chest. Ask for a cab with a driver who can drive smoothly, and sit in the back with a small cushion against the seat belt. From Unnao the ride is short. From Kanpur Dehat or Etawah it is long, and a night in the city may help. Ask what a stay costs. {tbc}",
        "Plan the first review in the first week, and write down the date before you leave.",
      ],
    },
  ],
};

const baLucknow: CityTreatmentPage = {
  ...cityBase(T, "lucknow"),
  seoTitle: "Breast Augmentation in Lucknow: Cost, Recovery, Risks",
  h1: "Breast augmentation in Lucknow",
  metaDescription: "Breast augmentation in Lucknow: sample cost lines, implant and fat transfer questions, recovery planning, and travel from Barabanki, Unnao and Sitapur.",
  intro: "The sample total for breast augmentation in Lucknow depends on the approach, the implant type and the facility. No partner facility is confirmed in Lucknow yet, so no price is shown. Lucknow draws patients from several districts, so the questions here concern where to stay, who knows and how long-term review will work from a smaller town.",
  includes: { ...surgicalIncludes },
  facilities: {
    intro: "No partner facility is confirmed in Lucknow yet. Lucknow has facilities of many sizes. For breast augmentation, check the theatre, the anaesthetist, the implant record card and the check-up plan in each.",
    partners: [{ type: "Theatre-equipped hospital or day-care unit, Lucknow (to be confirmed)", count: null }],
    accreditation: null,
    checks: [
      { check: "Imaging for check-ups", why: "Implants need review that may include imaging", ask: "Which imaging does your plan use, and where can I get it done near my home town?" },
      { check: "Written implant details", why: "Quotes may say only 'implant' without type", ask: "Can I see the exact type and volume written on the quote?" },
      { check: "Visitor and attendant rules", why: "Families from other towns arrive in groups", ask: "How many people can stay with me, and are there female-only wards?" },
    ],
  },
  travel: {
    intro: "Lucknow serves many districts. People come from Barabanki, Unnao, Sitapur, Raebareli, Hardoi and further, and from Kanpur. The questions are where to stay between discharge and the first review, and how to arrange long-term check-ups from a smaller town.",
    airport: "Chaudhary Charan Singh International Airport at Amausi (to be verified)",
    station: "Charbagh and Lucknow Junction (to be verified)",
    stayDays: "To be confirmed by the partner. Many plans use a same-day return or one night {pending}",
    metro: "The city has a north to south metro line (to be verified). With a tender chest a packed carriage hurts, so book a cab or ask family to drive.",
    roadTimes: [
      { from: "Barabanki", time: "40 to 80 min", tip: "One morning covers the first review" },
      { from: "Unnao", time: "60 to 100 min", tip: "Ask whether a night close to the facility is possible after surgery" },
      { from: "Sitapur", time: "90 to 150 min", tip: "A short stay in the city around the first review saves a hard ride" },
      { from: "Kanpur", time: "90 to 150 min", tip: "Compare the implant type, stay and check-up plan across both cities" },
    ],
    privacyNote: "Staying with a relative in the city lets you rest without explaining the operation at home. Ask the facility to keep the procedure name off messages and receipts.",
    mapCaption: "Where Lucknow's patients travel from, drawn without any building.",
  },
  localContext: [
    { text: "NEEDS REAL DATA: which Lucknow facility, if any, will do breast augmentation, and its type", source: "", asOf: "" },
    { text: "NEEDS REAL DATA: where implant check-up imaging is available in Lucknow and nearby districts", source: "", asOf: "" },
    { text: "NEEDS REAL DATA: serviced stays close to the partner facility, with rates, distance and attendant rules", source: "", asOf: "" },
  ],
  usefulness: "For adults in Lucknow and nearby districts who plan around weddings, family events and travel from smaller towns, with notes on the record card, the week of rest in the city and what a district doctor can do between reviews.",
  localCopy: [
    "In Lucknow, a wedding date often comes first, and a surgeon may advise waiting several months.",
    "District patients ask whether a local doctor can check them between visits.",
    "A record card lets any doctor in any town know what implant you have.",
  ],
  localNotes: [
    { heading: "Wedding and trousseau timing", text: "Some patients plan this operation before a wedding. Swelling lasts weeks and the implants settle over months, so a date a few weeks before is risky. Ask the surgeon what gap to leave. {pending}" },
    { heading: "A stay in the city", text: "For the first week, many district patients stay in Lucknow with a relative or in a guest house near the facility. Ask the facility what a stay costs and what the attendant rules are. {tbc}" },
    { heading: "A local doctor for small problems", text: "Between visits you may need a doctor near home for a rash or a fever. Give them the written plan and the record card. Ask the surgeon what to tell them." },
    { heading: "Winter cold and bras", text: "Lucknow winters are cool and foggy. A surgical bra under layers is easier than in summer, though a heavy shawl or coat can press on a tender chest. Ask what is comfortable. {pending}" },
  ],
  sections: [
    {
      heading: "From a smaller town to Lucknow and back",
      paragraphs: [
        "A person from Sitapur or Hardoi has a longer trip than someone who lives in the city. The operation may need one night. Then the first review comes around the end of the first week. Plan a stay in Lucknow for those days, with an adult who can help you. Ask what the facility advises and where it knows of comfortable stays. {tbc}",
        "A tender chest does not like bumps. Ask for a smooth cab ride and a cushion.",
      ],
    },
    {
      heading: "Weddings, festivals and a date you cannot move",
      paragraphs: [
        "Lucknow has a long wedding season. If you have a date fixed, count back several months and ask the surgeon whether that is enough. Swelling in the first weeks makes a chest look high and firm. The implants soften and settle over months, and tailors prefer to measure after that. A surgeon may suggest waiting for the next season. {pending}",
      ],
    },
    {
      heading: "Implants are devices, so ask for the record",
      paragraphs: [
        "Insist on knowing exactly which implant will be used before the day of surgery. The type, size and batch go on a record card. A future doctor in any city will want that card. Keep the original and a photograph.",
        "Ask what a check-up costs, who does it and how often. The aim is to know, in advance, that you are not tied to a single clinic for life without a plan.",
      ],
    },
    {
      heading: "Privacy and who is told",
      paragraphs: [
        "Large families in the Lucknow region often hear about a hospital visit quickly. You decide how much to share. Some patients tell a close friend or sister and keep the rest private. Ask the facility how it handles calls, messages and receipts. A receipt with the procedure name is a risk if a relative sees it.",
      ],
    },
    {
      heading: "A second opinion and the same questions",
      paragraphs: [
        "With several facilities in the city, a second opinion is easy to get. Take the same list to each: the cut, the pocket, the implant type and volume, the check-up plan, the stay and the follow-up. Two surgeons may advise differently, and the reasons matter more than the totals. Compare quotes only once the scope is the same.",
      ],
    },
  ],
};

// ------------------------------------------------------------------ cost lines and cost page
const baCosts: CostLine[] = [
  line(T, 1, "Consultation and examination", "The surgeon and the facility"),
  line(T, 2, "Implant breast augmentation, usual total", "Implant type, pocket and stay"),
  line(T, 3, "Fat transfer breast augmentation, usual total", "Amount of fat and number of areas treated"),
  line(T, 4, "Add-on: breast lift", "Skin laxity and operating time"),
  line(T, 5, "Surgical bra and dressings", "What is included in the quote"),
  line(T, 6, "Check-up visits and imaging after the operation", "How often and where"),
  line(T, 7, "Later implant replacement or removal", "Ask what the plan covers before you book"),
];

export const breastAugmentationCostPage: NationalCostPage = {
  seoTitle: "Breast Augmentation Cost in India: What Sets the Total Bill",
  metaDescription: "How breast augmentation cost is built: approach, implant type, pocket, facility and check-ups. No range is shown until dated quotes exist.",
  h1: "Breast augmentation cost in India",
  answer: "The total depends on the approach (implant or fat transfer), the implant type and the pocket, the facility, and the check-ups the quote includes. Nothing is priced yet. Each range will arrive with its date and the type of source behind it.",
  unit: "total",
  rangeHeading: "Sample totals by approach",
  rangeCaption: "These are alternative cases, and no line builds on another.",
  planner: {
    heading: "Look at the lifetime cost of an implant",
    formula: "Total = surgeon + anaesthesia + theatre + stay + implant + bra + check-ups over the years + later replacement",
    steps: [
      "Ask which implant type and volume are in the quote, and ask to see the record card.",
      "Ask which pocket and cut are planned, and whether either changes the price.",
      "Ask what check-ups and imaging are included, and for how long.",
      "Ask what removal or replacement would cost, and who pays if an implant fails early.",
      "Total up what the quote leaves out: GST, discharge medicines and pre-operative tests.",
    ],
  },
  extraSections: [
    {
      id: "years-after",
      heading: "The cost of the years after the operation",
      tocLabel: "The years after",
      lead: "An implant is a device that stays in the body, so its bill continues after discharge. The table lists the later items to ask about before you pay for the first.",
      table: {
        caption: "Costs that come after the operation, and what to ask about each.",
        head: ["Later item", "Why it can arise", "What to ask now"],
        rows: [
          ["Routine check-ups", "A surgeon reviews implants at set intervals", "How often, and is the visit charged?"],
          ["Imaging", "A scan may be advised to look at the implant", "Which scan, where, and who pays?"],
          ["Replacement", "An implant can wear or the breast can change", "What would a second operation cost, and what does the quote cover?"],
          ["Removal", "Some people choose to remove an implant later", "What would removal cost, and is a breast lift needed?"],
          ["A problem visit", "Pain, a change in shape or a suspected leak", "Who sees me, and is the first visit free?"],
        ],
      },
    },
  ],
  factors: [
    { factor: "Approach", why: "An implant operation and a fat transfer operation use different materials, sites and time." },
    { factor: "Implant type", why: "Filling, shell, shape and volume affect the cost of the device." },
    { factor: "Pocket and cut", why: "Placing an implant below the muscle takes more time and may affect the fee." },
    { factor: "Add-ons", why: "A breast lift, fat transfer or a second area adds time and materials." },
    { factor: "Facility and stay", why: "Theatre and bed charges differ between a hospital and a day-care unit." },
    { factor: "Check-ups and imaging", why: "A quote may or may not include later reviews and scans." },
    { factor: "Surgeon and team", why: "Fees follow a surgeon's training and who assists. We do not rank surgeons." },
    { factor: "Location", why: "A smaller city can have fewer facilities to compare, and local costs shape the fee." },
  ],
  notIncluded: [
    "A breast lift or fat transfer, if added",
    "Breast imaging before surgery",
    "Check-up visits and scans over the years",
    "Later implant replacement or removal",
    "Pre-operative blood tests",
    "Surgical bras and medicines after discharge",
    "GST, if shown separately",
    "Your travel, stay and time off",
  ],
  compareQuotes: [
    "Ask each facility to write the implant type, volume, pocket and cut.",
    "Compare totals for the same device and the same approach.",
    "Ask who will operate, and verify their registration yourself.",
    "Ask what removal or replacement would cost, and what the check-up plan covers.",
    "Pay only after a surgeon has examined you.",
  ],
  insurance: "Breast augmentation for appearance is usually not covered by health policies. Reconstruction after illness may be treated differently, so read your policy wording and write to your insurer.",
  payment: "Whether instalments exist depends on the facility and the lender. Their terms are not listed here, and GST wording is to be confirmed. {tbc}",
  method: "This page carries no price yet. Future lines will each give the source type, the count of data points and the collection date. A line with fewer than three dated sources stays pending. We do not borrow figures from other websites or from another city.",
  faqs: [
    { q: "What affects the price of breast augmentation the most?", a: "The approach, the implant type, the facility and what check-ups the quote includes. Ask for each as a line." },
    { q: "Is fat transfer cheaper than an implant?", a: "Not always. It uses liposuction and a second site, so the bill depends on what is done. Compare quotes for the same approach." },
    { q: "Is a later replacement included?", a: "Usually not. Ask the facility in writing what it covers and what you pay." },
    { q: "Does insurance cover it?", a: "Usually not for appearance. Reconstruction may be treated differently. Check your policy wording and ask in writing." },
    { q: "Are check-ups and scans included?", a: "Only if the quote says so. Ask for how long and how often." },
    { q: "Can the cost be spread over months?", a: "Some facilities and lenders allow it. Terms vary and are not shown here." },
  ],
  sources: [NMC_SOURCE],
};

// ------------------------------------------------------------------ FAQs (10 on the hub, 4 per city)
const faqs: FaqRow[] = [
  faqRow(T, null, "ba-fat", 1, "Is fat transfer better than an implant?", "They suit different aims. An implant gives a larger and more predictable change, and fat transfer gives a smaller one and needs spare fat. A surgeon decides after an examination. See [implant or fat transfer](/learn/breast-implant-vs-fat-transfer)."),
  faqRow(T, null, "ba-life", 2, "How long do implants last?", "They are not lifetime devices. Many are checked for years and some are replaced or removed. Ask the surgeon for a check-up plan. {pending}"),
  faqRow(T, null, "ba-size", 3, "How is the size chosen?", "From measurements of your chest and breast, your tissue and your wishes. Sizers in a bra help. Cup sizes are a poor guide, because bras differ."),
  faqRow(T, null, "ba-feed", 4, "Can I breastfeed after an implant?", "Many people can, but the cut and the pocket may affect it. Ask the surgeon what your plan means for milk supply. {pending}"),
  faqRow(T, null, "ba-scan", 5, "Do implants affect breast screening?", "They can make screening images more complex. Tell the imaging team you have implants each time."),
  faqRow(T, null, "ba-record", 6, "What is an implant record card?", "A card that lists the type, size and batch of your implant. Ask for it on the day, and keep a photograph."),
  faqRow(T, null, "ba-work", 7, "How soon can I return to work?", "Many people return to desk work after about a week. Heavy lifting and strenuous exercise wait for weeks. The surgeon advises. {pending}"),
  faqRow(T, null, "ba-hi-kharcha", 8, "Breast augmentation ka kharcha kis par depend karta hai?", "Implant ya fat transfer, implant ka type, facility, aur check-up ka plan quote mein hai ya nahi. Quote mein har line likhwa lein. Dekhein [cost page](/cost/breast-augmentation)."),
  faqRow(T, null, "ba-hi-rest", 9, "Surgery ke baad kitne din rest karna hota hai?", "Aam taur par office ka kaam kareeb ek hafta baad shuru hota hai. Bhaari saaman uthana aur gym kai hafte baad hi hota hai. Surgeon tay karta hai. {pending}"),
  faqRow(T, null, "ba-hi-implant", 10, "Implant kitne saal chalta hai aur kya baar baar check karna padta hai?", "Implant zindagi bhar ke liye nahi hote. Surgeon se check-up ka plan poochein aur implant ka record card sambhal kar rakhein. {pending}"),

  // ---- Kanpur
  faqRow(T, "kanpur", "ba-knp-who", 20, "Who can stay with me in hospital?", "Most hospitals allow one attendant. Ask the facility in advance and decide who stays and who is told."),
  faqRow(T, "kanpur", "ba-knp-checkup", 21, "Where do I get a check-up in Kanpur?", "Ask where imaging is available and who reads it. A Kanpur doctor can examine you from your record card and written plan."),
  faqRow(T, "kanpur", "ba-knp-heat", 22, "Is a surgical bra manageable in a Kanpur summer?", "It is hot, and rash can happen. Ask what fabric is used, how many bras are in the price and how to wash them."),
  faqRow(T, "kanpur", "ba-knp-lko", 23, "Should I take a second opinion in Lucknow?", "Many people do. Compare the same approach, implant type and check-up plan, with line items in writing."),

  // ---- Lucknow
  faqRow(T, "lucknow", "ba-lko-wedding", 20, "How far before a wedding should I plan?", "Several months is often advised, because swelling and settling take time. The surgeon advises for you. {pending}"),
  faqRow(T, "lucknow", "ba-lko-stay", 21, "Do I stay in Lucknow after surgery?", "Patients from the districts often do, at least until the first review. Ask what the facility advises and what a stay costs."),
  faqRow(T, "lucknow", "ba-lko-district", 22, "Can a doctor in my town check me between visits?", "For a rash or a fever, yes. Give them the written plan and the record card, and ask your surgeon what to tell them."),
  faqRow(T, "lucknow", "ba-lko-privacy", 23, "How is my privacy protected?", "Ask the facility how it handles calls, messages and receipts, and who can see your photographs."),
];

export const breastAugmentation: PlasticTopic = {
  kind: "pillar",
  treatment: {
    slug: T,
    seo: {
      title: "Breast Augmentation: Implants, Recovery, Risks",
      description: "How breast augmentation works, implant vs fat transfer, how size is chosen, check-ups, recovery by week, risks and what sets the price. Results vary.",
      cityTitle: "Breast Augmentation in {city}: Cost, Recovery, Risks",
    },
    content: breastAugmentationContent,
    display: breastAugmentationDisplay,
    deskWork: "About 1 week, to be confirmed by the reviewer",
    costPage: breastAugmentationCostPage,
    costFactors: breastAugmentationCostPage.factors,
    images: { hero: {}, operation: {}, recovery: {}, card: {} },
  },
  costLines: baCosts,
  faqs,
  cityPages: [baKanpur, baLucknow],
};
