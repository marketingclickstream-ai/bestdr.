import type { CityTreatmentPage, CostLine, FaqRow, NationalCostPage, TreatmentContent, TreatmentDisplay } from "../types";
import { NMC_SOURCE, cityBase, faqRow, line, surgicalIncludes, type PlasticTopic } from "./shared";

// Breast reduction: hub, Kanpur and Lucknow city pages, cost lines, FAQs and the national cost page.
// Rules applied: adults are the main reader. No outcome promise, no counts, no before and after, no named facility or doctor, no price figure.
// Insurance wording is limited to "check your policy wording".
// TODO-VERIFY: the weeks before lifting and exercise, the stay, tissue testing and the symptom checklist are general descriptions
// for the plastic surgeon reviewer to confirm. Marked {pending} where they are shown.

const T = "breast-reduction";

export const breastReductionDisplay: TreatmentDisplay = {
  noPlates: true,
  operationHeading: "What breast reduction removes, and what it moves",
  recoveryHeading: "Recovery calendar for breast reduction, week by week",
  recoveryTocLabel: "Recovery",
  timelineCaption: "What most people notice and do, by time since the operation.",
  risksHeading: "Risks and complications",
  riskGuideHref: "/breast-reduction#risks",
  priceLabel: "Breast reduction, usual total bill",
  priceLinkText: "Other patterns and add-ons",
  costMode: "options",
  costHeading: "What breast reduction costs, by scar pattern",
  costCaption: "Each row is a separate case. Rows are not added together. Sample data / To be confirmed.",
  labels: {
    techniquesHeading: "Scar patterns for breast reduction",
    techniquesCaption: "Plain differences between patterns. A surgeon decides which fits your breast size and skin.",
    tocTechniques: "Scar patterns",
  },
  tocLabels: { surgery: "What it removes", choices: "Eligibility and scar patterns" },
};

export const breastReductionContent: TreatmentContent = {
  dek: "Breast reduction removes breast tissue, fat and skin and lifts the nipple to a higher position. Many people choose it for back, neck and shoulder pain, strap grooves or rashes, and some for appearance. The [cost](/cost/breast-reduction) depends on the scar pattern, the amount removed and the facility. A plastic surgeon decides who it suits.",

  shortAnswers: [
    { q: "Who is it for?", a: "Adults whose heavy breasts cause pain, rashes or limits on activity, and some who want a smaller size for appearance.", href: "#eligibility", linkText: "The eligibility check" },
    { q: "Will I be able to breastfeed?", a: "Some people can and some cannot. It depends on the pattern and how much tissue is removed. Ask the surgeon.", href: "#feeding", linkText: "Breastfeeding and feeling" },
    { q: "How long is recovery?", a: "Desk work often returns after one to two weeks. Lifting and exercise wait several weeks {pending}.", href: "#recovery", linkText: "The weekly calendar" },
    { q: "What sets the price?", a: "The scar pattern, the volume removed, whether liposuction is used, the facility and the stay.", href: "#cost", linkText: "The cost lines" },
  ],

  operation: {
    lead: "Breast reduction is an operation under general anaesthesia. The surgeon removes breast tissue, fat and extra skin, reshapes the remaining breast and moves the nipple and its dark skin to a higher position. Scars follow the pattern the surgeon plans. A surgeon decides whether it suits you.",
    body: "The tissue removed is usually sent to a laboratory for testing. Breast size is not the only thing the surgeon assesses. Skin, shoulder grooves, posture, rash history and your general health are all part of the plan. Read about the different operation of [breast augmentation](/breast-augmentation), which adds volume.",
    caption: "Breast tissue, nipple position and the scar patterns a surgeon plans.",
    ask: "How much tissue do you plan to remove, which pattern do you advise and what happens to nipple feeling?",
    how: [
      "Consultation: the surgeon examines the breasts, measures them, asks about pain, rashes and activity, and reviews your weight history and family history.",
      "Imaging: breast imaging may be advised depending on age and family history.",
      "Marking: while you stand, the surgeon marks the planned scars and the new nipple position.",
      "Anaesthesia: general anaesthesia. The anaesthetist explains the plan and the risks.",
      "Operation: tissue and skin are removed, the breast is reshaped and the nipple is moved. Drains may be placed.",
      "Closure and bra: wounds are closed in layers and a soft surgical bra is fitted.",
      "Stay: many people stay one night or more, and the surgeon sets yours {pending}.",
    ],
    whoItSuits: [
      { term: "Symptoms from weight", text: "Adults with back, neck or shoulder pain, deep bra strap grooves, rashes under the breasts or limits on exercise, linked to breast weight." },
      { term: "Stable weight", text: "People whose weight has held steady, because losing weight after surgery can change the result." },
      { term: "Finished with breastfeeding plans", text: "People who have thought about whether they will breastfeed, and who have discussed the likely effect with the surgeon." },
      { term: "Healthy and ready to heal", text: "People who do not smoke, whose diabetes and blood pressure are controlled and who can take time off with help at home." },
    ],
  },

  techniques: {
    lead: "A scar pattern is chosen from the size, the skin and how far the nipple must move. These are plain differences, and a surgeon decides.",
    rows: [
      { name: "Anchor (inverted T) pattern", how: "A scar around the nipple, down the breast and along the fold. It gives the surgeon the widest control over skin and tissue", often: "Larger reductions and breasts with more loose skin", ask: "How long will the scar along the fold be, and how will it look in a bra?" },
      { name: "Vertical (lollipop) pattern", how: "A scar around the nipple and straight down, with little or none along the fold", often: "Moderate reductions with good skin tone", ask: "Will you need to add a scar in the fold, and how does the skin gather after surgery?" },
      { name: "Short scar pattern", how: "A smaller scar, usually around the nipple only, for a limited lift and reduction", often: "Small reductions where the nipple needs little movement", ask: "Is my breast size within the range this pattern can handle?" },
      { name: "Reduction with liposuction", how: "Fat is removed by liposuction with or without tissue removal", often: "Breasts that are mainly fat, in people for whom a surgeon thinks it fits", ask: "Will you also remove gland tissue, and is the tissue tested?" },
    ],
    note: "Breast reduction with a breast lift in the same operation is common. Ask which parts of the quote are for the reduction and which are for the lift.",
  },

  extraSections: [
    {
      id: "eligibility",
      heading: "A self-check before the consultation",
      tocLabel: "Eligibility check",
      lead: "These are questions a surgeon asks. They do not diagnose anything. Write the answers down and take them with you. {pending}",
      table: {
        caption: "What you notice, what it may point to, and what a surgeon checks.",
        head: ["What you notice", "What it may point to", "What a surgeon or doctor checks"],
        rows: [
          ["Aching in the upper back, neck or shoulders by evening", "Weight of the breasts may be a factor, though other causes exist", "Your posture, your spine and whether physiotherapy or a spine check is advised first"],
          ["Deep grooves from bra straps", "Pressure of the straps carrying heavy breasts", "Skin and strap pressure, and bra fit"],
          ["Rashes or sore skin under the breasts", "Moisture and rubbing, worse in heat and humidity", "Skin condition, and whether it is a fungal or other skin problem that needs treatment"],
          ["Tingling or numb fingers", "Possible nerve compression from many causes", "A medical check to rule out other causes before surgery"],
          ["Difficulty with exercise, yoga or running", "Weight and movement of the breasts", "How your activity is affected, and whether weight loss is advised first"],
          ["A lump or change you have not had checked", "Breast conditions need their own investigation", "Imaging and examination before anything else"],
        ],
      },
    },
    {
      id: "pain-diary",
      heading: "A two-week pain and activity diary",
      tocLabel: "Pain diary",
      paragraphs: [
        "A short diary helps the surgeon and may help with an insurance conversation. For two weeks, note each day when pain starts, where it is, what makes it worse and what you stop doing because of it. Note any rash, the bra you wear and how many hours you wear it. Add what you tried, such as physiotherapy, exercise, a better-fitting bra or weight loss.",
        "Bring the diary to the consultation. Ask the surgeon what records an insurer may want, and whether a letter from your family doctor or physiotherapist helps. {pending}",
      ],
      note: { label: "Ask this", text: "Which records do you keep, and will you write down the symptoms that led to this plan in the papers you give me?" },
    },
    {
      id: "feeding",
      heading: "Breastfeeding, nipple feeling and the long term",
      tocLabel: "Breastfeeding and feeling",
      paragraphs: [
        "Some reduction patterns keep the milk ducts attached to the nipple, and some do not. The pattern and the amount removed both matter. Ask the surgeon what your plan means for breastfeeding. If you want to breastfeed in future, say so at the first visit. {pending}",
        "Nipple and breast feeling can change after surgery. Numbness or altered feeling may last for a time or longer. A nipple can also lose its blood supply in rare cases, and the surgeon explains how that is managed.",
        "Weight change after surgery and pregnancy can change breast size again. Ask what the surgeon advises if you plan a pregnancy.",
      ],
    },
    {
      id: "heat",
      heading: "Heat, moisture and the weeks in a bra",
      tocLabel: "Heat and the bra",
      lead: "A reduction leaves wounds under the breast, in the fold, where sweat gathers. In North Indian heat and in the monsoon, the fold is the hardest part to keep dry.",
      bullets: [
        "Ask how to keep the fold dry, and whether a soft cotton lining under the bra is fine.",
        "Ask how many surgical bras are in the price, so one can be washed while the other is worn.",
        "Ask about underwires. Many surgeons advise soft bras with no underwire for several weeks. {pending}",
        "Plan a day-night routine for dressings, and decide who helps you reach your back.",
        "Ask what to do if a rash appears under the bra, and whom to call.",
        "Wear front-opening kurtas and blouses in the first weeks, because pulling clothes over the head is hard.",
      ],
    },
    {
      id: "questions",
      heading: "Questions to bring to the consultation",
      tocLabel: "Questions to ask",
      bullets: [
        "How much tissue do you plan to remove, and how is that decided?",
        "Which scar pattern do you advise, and where will the scars sit under a bra and a blouse?",
        "What happens to my nipples, and could I lose feeling or the nipple itself?",
        "Will you test the tissue, and who tells me the result?",
        "Can I breastfeed afterwards, given the pattern you plan?",
        "What records of my symptoms will you provide for an insurance claim?",
        "How many nights do I stay, and what follow-up visits are included?",
        "What happens if one breast heals differently from the other?",
      ],
    },
  ],

  recovery: {
    lead: "Healing follows a pattern like this one, with your surgeon setting the dates that apply to you. The ranges are general and the reviewer has not signed them off. {pending}",
    body: "The first fortnight is the hardest. You wear a soft surgical bra around the clock, you cannot reach behind your back easily, and the wounds under each breast need to stay dry. After that the chest eases week by week while swelling shifts for months.",
    highlights: [
      { pre: "about", big: "1 to 2 weeks", text: "Before many people manage desk work again" },
      { pre: "about", big: "4 to 6 weeks", text: "Of no heavy bags, no strenuous exercise and no underwire" },
      { pre: "months", big: "3 to 12", text: "Swelling settles, the breasts drop into place and scars mature" },
    ],
    timeline: [
      { when: "Day 0 to 2", notice: "A tight chest, grogginess, a soft bra over the dressings and possibly drains", doThis: "Sleep half upright. Take the medicines you were given. Walk to the bathroom and back with help." },
      { when: "Day 3 to 7", notice: "Bruising spreads. Reaching, dressing and washing your back need help", doThis: "Wear a front-opening kurta or shirt. Keep the dressings dry. Go to the first review." },
      { when: "Week 2", notice: "Drains are usually out. A little fluid may weep from the wounds. The chest feels less tight", doThis: "Ask about desk work from home. Keep the fold under the breast dry. Carry nothing heavy." },
      { when: "Week 3 to 4", notice: "Energy returns. Scars itch and the nipples may feel odd", doThis: "Short walks. Follow the scar advice you are given. Ask whether you can drive." },
      { when: "Week 6", notice: "Most daily life is back. The breasts are still settling lower", doThis: "Review visit. Ask when underwire, yoga and running are fine, and which bra to buy." },
      { when: "Month 3 to 6", notice: "Swelling mostly down, and the breasts look closer to their final shape", doThis: "Resume exercise step by step. Get measured for bras once the surgeon agrees." },
      { when: "Month 12", notice: "Scars pale slowly and the shape has settled", doThis: "Final review. Talk about a revision only once the scars are mature." },
    ],
    grid: {
      cols: ["Wk 1", "Wk 2", "Wk 4", "Wk 6"],
      rows: [
        { label: "Desk work", cells: [{ state: "n", text: "No" }, { state: "m", text: "Ask" }, { state: "y", text: "Yes" }, { state: "y", text: "Yes" }] },
        { label: "Reaching behind the back", cells: [{ state: "n", text: "No" }, { state: "m", text: "Help" }, { state: "y", text: "Yes" }, { state: "y", text: "Yes" }] },
        { label: "Carrying a bag or bucket", cells: [{ state: "n", text: "No" }, { state: "n", text: "No" }, { state: "n", text: "No" }, { state: "m", text: "Ask" }] },
        { label: "Driving", cells: [{ state: "n", text: "No" }, { state: "n", text: "No" }, { state: "m", text: "Ask" }, { state: "y", text: "Yes" }] },
        { label: "Yoga, gym or running", cells: [{ state: "n", text: "No" }, { state: "n", text: "No" }, { state: "n", text: "No" }, { state: "m", text: "Ask" }] },
      ],
    },
    closing: "Treat any recovery timetable as a guide. The amount removed, the pattern and how your wounds heal all change the pace. Plan weddings, exams and travel months ahead.",
  },

  risks: {
    lead: "All surgery carries risk. These are the concerns patients raise most, written plainly with a question each. Your surgeon will cover any that apply to you and are not here.",
    rows: [
      { risk: "Bleeding", means: "Blood may collect inside a breast and sometimes needs a second visit to theatre.", ask: "How would a collection be found, and where would I be treated?" },
      { risk: "Infection", means: "Spreading redness, warmth, discharge or fever around the wounds.", ask: "Which changes should make me phone you, and what is your night number?" },
      { risk: "Wounds that open or heal slowly", means: "The point where the scars meet under the breast is the usual spot. Nicotine raises the risk.", ask: "What do you advise about nicotine, and how is a slow wound dressed?" },
      { risk: "Damage to the nipple's blood supply", means: "Rarely, part or all of the nipple skin loses its blood flow and needs care.", ask: "How do you keep the nipple alive, and what is the plan if it darkens?" },
      { risk: "Feeling changes", means: "Numbness or oversensitivity of the nipple and breast, which can fade or stay.", ask: "How long does altered feeling usually last with your pattern?" },
      { risk: "Trouble breastfeeding", means: "Some patterns cut milk ducts, so breastfeeding may be partial or not possible.", ask: "What does the pattern you plan mean for milk supply?" },
      { risk: "Heavy or wide scars", means: "Scars can turn raised, wide or dark in some people, especially under the breast.", ask: "Which scar care will you advise, and for how many months?" },
      { risk: "Unequal breasts", means: "Size, shape or nipple height may differ between the two sides.", ask: "What difference is expected, and when would you consider a correction?" },
      { risk: "Fluid pockets", means: "Fluid may gather under the skin and need draining.", ask: "How is a pocket of fluid treated here?" },
      { risk: "Problems with anaesthesia", means: "General anaesthesia can cause nausea, breathing or heart events, more often with other illness.", ask: "Who is my anaesthetist, and what did the fitness check find?" },
    ],
    alert: "Call your surgeon without delay for fever, spreading redness or heat, discharge, severe pain, swelling that grows fast on one side, a nipple that turns dark or cold, chest pain or breathlessness. When the surgeon cannot be reached, go to the nearest emergency department.",
    wait: [
      "You are pregnant or hope to be soon",
      "You want to breastfeed and have not talked it through with the surgeon",
      "Your weight is still moving up or down",
      "You use tobacco or nicotine in any form and have not stopped as advised",
      "A breast lump or change has not been checked",
      "Your pain may have another cause that nobody has examined yet",
      "You are set on one exact cup size",
      "Your diabetes is uncontrolled, or you have a bleeding disorder",
    ],
    tell: [
      "Breast cancer in your family",
      "Earlier breast operations, lumps or biopsies",
      "Plans for pregnancy and breastfeeding",
      "Every medicine, supplement and blood thinner you take",
      "Back, neck and shoulder problems and what you tried for them",
      "Tobacco, nicotine and alcohol use",
    ],
  },

  patientQuestions: [
    { q: "Do I qualify?", href: "#eligibility", linkText: "Read: the eligibility check" },
    { q: "What records help?", href: "#pain-diary", linkText: "Read: the pain diary" },
    { q: "Can I breastfeed?", href: "#feeding", linkText: "Read: breastfeeding and feeling" },
    { q: "How do I manage the heat?", href: "#heat", linkText: "Read: heat and the bra" },
    { q: "What should I ask?", href: "#questions", linkText: "Read: questions to ask" },
    { q: "What will it cost?", href: "#cost", linkText: "Read: the cost lines" },
  ],

  quoteProcess: [
    { title: "A coordinator takes your first call", text: "Phone or WhatsApp. Share your town and your questions. This call does not commit you to anything." },
    { title: "A surgeon examines you", text: "In person. The plan depends on breast size, skin and where the nipple sits now." },
    { title: "The plan arrives in writing", text: "It names the scar pattern and the amount to remove, says whether tissue is tested and gives the surgeon, facility, stay and price." },
    { title: "You compare in your own time", text: "Line up plans for the same pattern and stay. No package is paid before the examination." },
    { title: "Care after the operation", text: "A coordinator call, early review visits and later reviews over several months." },
  ],

  quoteChecks: [
    "state the scar pattern and the amount of tissue planned?",
    "say whether tissue testing is included?",
    "show anaesthesia, theatre and surgeon fees apart?",
    "say whether surgical bras, drains and dressings are included?",
    "list the follow-up visits that are covered?",
    "name the facility type and the length of stay?",
  ],

  extras: [
    "Liposuction, if added",
    "Tissue testing, if charged separately",
    "Breast imaging before surgery",
    "Pre-operative blood tests",
    "Extra surgical bras",
    "Medicines after discharge",
    "GST, if shown separately",
    "Your travel and time off",
  ],

  insurance:
    "Insurance. A breast reduction done for pain or skin problems may be treated differently from one done only for appearance. Read your policy wording and ask your insurer in writing what records it needs before you book. Cashless approval is never promised here.",
  payment:
    "Payment. Methods and instalments depend on the facility and the lender and are not shown here. Keep payment back until you have been examined. {tbc}",

  // TODO-VERIFY: the reviewer opens each source and confirms the URL and the facts used.
  sources: [NMC_SOURCE],

  footnotes: [
    "Medical review is pending. A reviewer name, qualification and date will appear once a registered plastic surgeon signs off.",
    "Day and week ranges, the stay, tissue testing and the symptom checklist are general and await the reviewer.",
    "No satisfaction or complication figure appears, because none has been verified.",
    "Insurance and payment wording is general and still to be confirmed.",
  ],
};

// ------------------------------------------------------------------ city pages
// TODO-VERIFY (both cities): road times, station and airport names, stays and follow-up arrangements are general
// and must be checked against the partner facility and a dated public source before any page leaves noindex.

const brKanpur: CityTreatmentPage = {
  ...cityBase(T, "kanpur"),
  seoTitle: "Breast Reduction in Kanpur: Cost, Recovery, Risks",
  h1: "Breast reduction in Kanpur",
  metaDescription: "Breast reduction in Kanpur: sample cost lines, the pain diary and eligibility questions, recovery in hot months, and travel from Unnao and nearby towns.",
  intro: "The sample total for breast reduction in Kanpur depends on the scar pattern, the amount removed and the facility. No partner facility is confirmed in Kanpur yet, so no price is shown. Many people here first see an orthopaedic doctor or physiotherapist for back pain, and later ask about the breasts. A written symptom record helps.",
  includes: { ...surgicalIncludes },
  facilities: {
    intro: "No partner facility is confirmed in Kanpur yet. Breast reduction needs a theatre, an anaesthetist and an overnight bed, and a laboratory for tissue testing. This page will name the facility type once one exists.",
    partners: [{ type: "Hospital with theatre and overnight beds in Kanpur (to be confirmed)", count: null }],
    accreditation: null,
    checks: [
      { check: "Tissue testing", why: "Removed tissue is usually tested", ask: "Is the test in the price, and who explains the result to me?" },
      { check: "Female staff for examination", why: "Many patients prefer female nurses present", ask: "Will a female nurse be present for every examination?" },
      { check: "Wound care in heat", why: "The fold under the breast is hard to keep dry in summer", ask: "How many bras and dressings are included, and how do I handle a wet fold?" },
    ],
  },
  travel: {
    intro: "The questions here are how to reach the hospital from the town where you live, who goes with you and how to manage a long ride with a tender chest. Many people also ask whether a physiotherapist or a family doctor near home can help with early checks.",
    airport: "Kanpur Airport at Chakeri has limited services (to be verified). Many travellers use Lucknow airport",
    station: "Kanpur Central",
    stayDays: "To be confirmed by the partner. One or more nights in hospital are common {pending}",
    metro: "A cab or a family car is easier than public transport with a tender chest and a surgical bra.",
    roadTimes: [
      { from: "Unnao", time: "40 to 80 min", tip: "A same-day return to the first review is workable" },
      { from: "Kanpur Dehat", time: "60 to 120 min", tip: "Ask whether early wound checks can be done near home" },
      { from: "Fatehpur", time: "90 to 150 min", tip: "A night in the city after discharge may be easier than a long ride" },
      { from: "Lucknow", time: "90 to 150 min", tip: "If you compare Lucknow, compare the same scar pattern and stay" },
    ],
    privacyNote: "Ask the hospital to keep the procedure name off receipts and out of messages, and to tell you who can see your photographs.",
    mapCaption: "Travel into Kanpur from Unnao and nearby towns, no building shown.",
  },
  localContext: [
    { text: "NEEDS REAL DATA: which Kanpur hospital, if any, will do breast reductions, and its type", source: "", asOf: "" },
    { text: "NEEDS REAL DATA: whether tissue testing is available at the partner facility or an outside laboratory", source: "", asOf: "" },
    { text: "NEEDS REAL DATA: Kanpur summer temperatures and humidity by month (India Meteorological Department records)", source: "", asOf: "" },
  ],
  usefulness: "For adults in Kanpur and nearby towns whose first stop was an orthopaedic doctor or a physiotherapist, with notes on the symptom diary, heat and the fold under the breast, privacy, and who helps for the first two weeks.",
  localCopy: [
    "Kanpur patients often come to a surgeon after trying physiotherapy for back pain.",
    "The fold under the breast is hard to keep dry in a Kanpur May.",
    "A pain diary and a doctor's letter are the records most people bring.",
  ],
  localNotes: [
    { heading: "After physiotherapy and bracing", text: "Many people try physiotherapy, exercises or a different bra before asking a surgeon. Bring a note of what you tried and for how long. The surgeon may also ask a spine or orthopaedic doctor to check that the pain comes from another cause." },
    { heading: "The wet fold in summer", text: "Heat and sweat gather in the fold where the wound sits. Ask how to keep it dry, which cotton lining is fine under a bra and what to do if a rash appears. {pending}" },
    { heading: "Help at home", text: "For two weeks, reaching, bathing and dressing are hard. Decide who helps you wash your back and change dressings. Heavy chores like lifting a bucket or a cylinder wait for weeks." },
    { heading: "Unnao and Kanpur Dehat", text: "If you live outside the city, ask whether early wound checks can be done by a doctor near home from a written plan, and who you call if a wound leaks." },
  ],
  sections: [
    {
      heading: "From back pain to a breast surgeon",
      paragraphs: [
        "In Kanpur, as in many cities, people often start with an orthopaedic doctor or a physiotherapist for neck and back pain. Breast weight may come up later, if at all. If your pain is worse by the evening and you have strap grooves or rashes, tell your doctor that breast size may be part of it, and ask whether a plastic surgeon should see you.",
        "Bring the notes from those visits. They show what you tried, and a surgeon uses them to judge whether surgery fits.",
      ],
    },
    {
      heading: "Weeks in a bra when Kanpur is hot",
      paragraphs: [
        "Kanpur is hot and dry from April to June, and humid in the monsoon. A surgical bra worn day and night keeps heat against healing wounds. The scars under the breast, in the fold, are hardest to keep dry. Ask the surgeon what to wear under the bra, how often to change it and what to do if the wound leaks or the skin breaks out.",
        "If you can choose a date, ask whether a cooler month eases the weeks in a bra. {pending}",
      ],
    },
    {
      heading: "Privacy at home and at work",
      paragraphs: [
        "Time off for a breast operation is a private matter. Some people tell a sister or a close friend, and others tell only the person who helps. A medical certificate for leave can say the operation was a surgical procedure, and you decide how much to explain. The facility should keep your records and photographs private.",
        "If you work in an office, ask whether you can work from home from week two. If you are on your feet at work, ask the surgeon how long before you return.",
      ],
    },
    {
      heading: "Insurance wording and records",
      paragraphs: [
        "If your policy might cover a reduction for pain, the insurer may ask for records of symptoms and treatments tried. Keep the pain diary, physiotherapy notes and a letter from your doctor. Ask the facility what it writes in its papers and how it describes the operation. Check your policy wording and ask your insurer in writing before you book. We do not promise any approval.",
      ],
    },
    {
      heading: "Comparing Kanpur with Lucknow",
      paragraphs: [
        "Lucknow is about an hour and a half or two hours by road. Some people ask for a second opinion there. Take the same list to each surgeon: the scar pattern, the amount of tissue, the nipple plan, the stay and the follow-up. A lower total can reflect a different pattern or a shorter stay, so compare line by line.",
      ],
    },
  ],
};

const brLucknow: CityTreatmentPage = {
  ...cityBase(T, "lucknow"),
  seoTitle: "Breast Reduction in Lucknow: Cost, Recovery, Risks",
  h1: "Breast reduction in Lucknow",
  metaDescription: "Breast reduction in Lucknow: sample cost lines, eligibility and insurance record questions, recovery planning, and travel from Barabanki, Unnao and Sitapur.",
  intro: "The sample total for breast reduction in Lucknow depends on the scar pattern, the amount removed and the facility. No partner facility is confirmed in Lucknow yet, so no price is shown. Lucknow draws patients from several districts, and many who come are students or working women who must plan leave and travel together.",
  includes: { ...surgicalIncludes },
  facilities: {
    intro: "No partner facility is confirmed in Lucknow yet. Check the theatre, the anaesthetist, tissue testing and overnight beds in each place you consider.",
    partners: [{ type: "Lucknow hospital with an operating theatre and overnight beds (to be confirmed)", count: null }],
    accreditation: null,
    checks: [
      { check: "A written plan of symptoms", why: "It supports your story if an insurer asks", ask: "Will you write the symptoms and the reason for surgery in the papers you give me?" },
      { check: "A student or workplace letter", why: "Leave from college or work needs a note", ask: "Which papers do you give for leave, and how do they describe the operation?" },
      { check: "Attendant and visiting rules", why: "Families from other towns arrive in groups", ask: "How many people may stay, and is there a female ward?" },
    ],
  },
  travel: {
    intro: "Patients reach Lucknow for this operation from Barabanki, Unnao, Sitapur, Raebareli and Hardoi, and from Kanpur. The stay for the operation is one or more nights, and a first review follows within about a week.",
    airport: "Amausi (Chaudhary Charan Singh International) for flights (to be verified)",
    station: "Lucknow Charbagh for most trains, with Gomti Nagar used for some (to be verified)",
    stayDays: "To be confirmed by the partner. One or more nights in hospital are common {pending}",
    metro: "Lucknow's metro follows a north to south corridor (to be verified). A crowded carriage is uncomfortable after a reduction, so use a cab or a family car.",
    roadTimes: [
      { from: "Barabanki", time: "40 to 80 min", tip: "Half a day is enough for the first review" },
      { from: "Unnao", time: "60 to 100 min", tip: "A night near the facility can ease the ride home" },
      { from: "Sitapur", time: "90 to 150 min", tip: "Book a short stay in Lucknow for the week of the first review" },
      { from: "Kanpur", time: "90 to 150 min", tip: "Compare the scar pattern and stay across both cities" },
    ],
    privacyNote: "A night or two with relatives in Lucknow spares you questions at home. Ask the facility to keep the procedure name out of messages.",
    mapCaption: "Map of travel into Lucknow from the nearby districts, with no building marked.",
  },
  localContext: [
    { text: "NEEDS REAL DATA: which Lucknow facility, if any, will do breast reductions, and its type", source: "", asOf: "" },
    { text: "NEEDS REAL DATA: guest houses near the partner facility suitable for a first post-operative week, with rates", source: "", asOf: "" },
    { text: "NEEDS REAL DATA: Lucknow winter fog and cold days (India Meteorological Department records)", source: "", asOf: "" },
  ],
  usefulness: "For students, working women and families in Lucknow and nearby districts who want to plan leave, a stay in the city, and the papers that support an insurance conversation, with notes on a district doctor and the cold season.",
  localCopy: [
    "A Lucknow student plans reduction around exams and a university's medical leave papers.",
    "Working women from the districts need a note for leave that fits their office rules.",
    "Lucknow winters are cool and foggy, so a surgical bra under layers is more comfortable than in Kanpur's summer.",
  ],
  localNotes: [
    { heading: "College and exam calendars", text: "Students who choose a reduction usually need several weeks of reduced activity. Ask the surgeon which weeks are hardest, and what papers the facility gives for medical leave at college." },
    { heading: "Leave from work", text: "A medical certificate for an operation helps with leave. Ask how the facility words it, and what you will tell the office. You decide how much to share." },
    { heading: "A stay in the city", text: "For the first week many district patients stay in Lucknow with a relative or in a guest house. Ask the facility what a stay costs, and whether an attendant can stay with you. {tbc}" },
    { heading: "Winter layers", text: "In winter a shawl or sweater over a surgical bra is easy to wear, though a tight coat can press on tender skin. Ask what is comfortable. {pending}" },
  ],
  sections: [
    {
      heading: "Planning around college, work and leave",
      paragraphs: [
        "Many Lucknow patients are students or work in offices and schools. The first two weeks are the hardest. After that, desk work is possible if the surgeon agrees, while lifting books or bags waits several weeks. Ask what to carry, and whether a rucksack strap is fine on the shoulders.",
        "Plan the date around exams and busy periods. If your college has a medical leave rule, ask the facility for the right paper before the operation.",
      ],
    },
    {
      heading: "Bringing the right records",
      paragraphs: [
        "If an insurer might cover part of the bill, it may ask for the symptom diary, physiotherapy or spine notes and a surgeon's letter. Start the diary two weeks before the consultation. Ask the facility what it writes in its papers and how it describes the operation. Check your policy wording and ask your insurer in writing.",
      ],
    },
    {
      heading: "Coming from a district",
      paragraphs: [
        "If you live in Sitapur, Hardoi or Raebareli, the trip is long with a tender chest. Many patients arrange a stay in Lucknow for the first week with a relative or in a guest house near the facility. Ask what the facility advises. A doctor near home can check a rash or a fever between visits if you carry the written plan.",
        "Ask for a smooth cab and a small cushion for the seat belt.",
      ],
    },
    {
      heading: "Language and the consultation",
      paragraphs: [
        "In Lucknow clinics you will hear Hindi, Urdu-influenced Hindi and English. Describe your symptoms in the language that feels natural, and bring your diary. Ask for the plan, the scar pattern and the aftercare in writing in the language you read most easily.",
        "It helps to bring a trusted adult to the consultation to listen and ask questions with you.",
      ],
    },
    {
      heading: "Cold season and clothes",
      paragraphs: [
        "Lucknow winters are cool and foggy in the mornings. A surgical bra under layers is easier than in a hot city, but front-opening cardigans and loose kurtas still help, because pulling a sweater over the head is difficult for weeks. A cold with a cough is painful with a tender chest, so tell the surgeon if you catch one.",
      ],
    },
  ],
};

// ------------------------------------------------------------------ cost lines and cost page
const brCosts: CostLine[] = [
  line(T, 1, "Consultation and examination", "The surgeon and the facility"),
  line(T, 2, "Reduction, short scar pattern, usual total", "Amount removed and stay"),
  line(T, 3, "Reduction, vertical pattern, usual total", "Amount removed and operating time"),
  line(T, 4, "Reduction, anchor pattern, usual total", "Amount removed, skin and operating time"),
  line(T, 5, "Add-on: liposuction", "Number of areas"),
  line(T, 6, "Tissue testing", "Laboratory and whether the quote includes it"),
  line(T, 7, "Surgical bras, drains and dressings", "What is included in the quote"),
  line(T, 8, "Follow-up visits and medicines", "Ask in writing before you book"),
];

export const breastReductionCostPage: NationalCostPage = {
  seoTitle: "Breast Reduction Cost in India: What Sets the Total Bill",
  metaDescription: "How breast reduction cost is built: scar pattern, amount removed, tissue testing, facility and stay. Ranges appear only after dated quotes are collected.",
  h1: "Breast reduction cost in India",
  answer: "The total depends on the scar pattern, the amount of tissue removed, tissue testing, the facility and the stay. No range is published yet. Each one will carry a collection date and a source type when it is added.",
  unit: "total",
  rangeHeading: "Sample totals by scar pattern",
  rangeCaption: "Each line is one possible case. Together they are not a bill.",
  planner: {
    heading: "Prepare the paper trail before you ask for a quote",
    formula: "Total = surgeon + anaesthesia + theatre + stay + tissue testing + bras and dressings + follow-up",
    steps: [
      "Write a two-week pain and activity diary and keep notes of treatments tried.",
      "Ask the surgeon which scar pattern is planned and how much tissue is expected to be removed.",
      "Check that tissue testing, surgical bras and drains are listed, or priced separately.",
      "Ask what records and wording the facility gives for an insurance conversation.",
      "Note what the quote omits: GST, discharge medicines and tests done before the operation.",
    ],
  },
  extraSections: [
    {
      id: "papers-and-records",
      heading: "Papers and records that can add to the bill",
      tocLabel: "Papers and records",
      lead: "A reduction done for pain comes with paperwork. Some of it is free and some is charged. The table lists what to ask about before you book.",
      table: {
        caption: "Documents around a breast reduction and what to ask about each.",
        head: ["Paper", "Why you may need it", "What to ask"],
        rows: [
          ["Examination note", "It records your symptoms and the surgeon's findings", "Will the note state the pain, rash and strap grooves in plain words?"],
          ["Tissue test report", "The removed tissue is usually tested", "Is the test in the price, and who explains the result?"],
          ["Letter for an insurer", "An insurer may ask for a surgeon's letter", "Is a letter free, or charged per page?"],
          ["Leave certificate", "College or work may ask for one", "Which words does it use for the operation?"],
          ["Discharge summary", "A local doctor can follow your care from it", "Do I get a copy on the day I leave?"],
        ],
      },
    },
  ],
  factors: [
    { factor: "Scar pattern", why: "Longer patterns take more operating time and skin work." },
    { factor: "Amount removed", why: "A larger reduction takes more time, and may need a longer stay." },
    { factor: "Liposuction and lift", why: "Adding liposuction or a separate lift adds time and materials." },
    { factor: "Tissue testing", why: "A laboratory fee may be in the quote or billed on its own." },
    { factor: "Facility and stay", why: "Theatre and bed charges differ between a hospital and a day-care unit, and one or two nights is common." },
    { factor: "Surgeon and team", why: "Fees follow training and who assists, and we do not rank surgeons." },
    { factor: "Records for insurance", why: "Some facilities charge for letters and detailed reports." },
    { factor: "Where you have it", why: "Facility fees and nights in hospital follow local costs, so Lucknow and Kanpur quotes can differ for one pattern." },
  ],
  notIncluded: [
    "Tissue testing, if billed separately",
    "Breast imaging before surgery",
    "Extra surgical bras",
    "Pre-operative blood tests",
    "Medicines after discharge",
    "Review visits beyond those in the plan",
    "GST, if shown separately",
    "Your travel, stay and time off",
  ],
  compareQuotes: [
    "Ask each facility to write the scar pattern and the expected amount removed.",
    "Compare totals for the same pattern and the same stay.",
    "Ask who will operate, and look up their registration yourself.",
    "Ask whether tissue testing is included and who explains the result.",
    "Keep your payment back until you have been examined.",
  ],
  insurance: "A reduction done for pain or skin problems may be treated differently from one done for appearance. Read your policy wording and ask your insurer in writing what records it needs.",
  payment: "Instalments depend on the facility and the lender, and their terms are not listed here. GST wording is to be confirmed. {tbc}",
  method: "No breast reduction price is shown yet. When quotes arrive, each line will give its source type, how many data points support it and the month collected. Fewer than three dated sources from separate places keeps the pending label. Other websites are not used, and no city's figure is applied to another.",
  faqs: [
    { q: "What affects the price of breast reduction the most?", a: "The scar pattern, the amount removed, the facility and the stay. Ask for each as a line." },
    { q: "Is tissue testing included?", a: "Only if the quote says so. Ask who explains the result." },
    { q: "Does insurance cover breast reduction?", a: "Sometimes when it is done for pain or skin problems, depending on your policy. Check the wording and ask in writing what records are needed." },
    { q: "Does a larger reduction cost more?", a: "Often, because of time and stay. Ask what is planned and compare the same pattern." },
    { q: "Are surgical bras included?", a: "Only if the quote says so. Ask how many." },
    { q: "Is there a way to pay over time?", a: "Some facilities and lenders allow it. Terms vary and are not shown here." },
  ],
  sources: [NMC_SOURCE],
};

// ------------------------------------------------------------------ FAQs (10 on the hub, 4 per city)
const faqs: FaqRow[] = [
  faqRow(T, null, "br-who", 1, "Who qualifies for a breast reduction?", "A surgeon decides. Adults with pain, strap grooves, rashes or limits on activity linked to breast weight are the usual group. See the [eligibility check](#eligibility)."),
  faqRow(T, null, "br-back", 2, "Will it relieve my back pain?", "Not always. Breast weight may be one of several causes, and a doctor may check your spine and posture as well. The surgeon explains what to expect in your case."),
  faqRow(T, null, "br-feed", 3, "Can I breastfeed after a reduction?", "Some people can and some cannot, depending on the pattern and the amount removed. Say at the first visit if you plan to breastfeed. {pending}"),
  faqRow(T, null, "br-scar", 4, "Where are the scars?", "Around the nipple and down the breast, and sometimes along the fold, depending on the pattern. They fade over months, and how much varies."),
  faqRow(T, null, "br-weight", 5, "Do I need to lose weight first?", "Some surgeons advise it, because weight change after surgery can alter the result. Ask what the surgeon wants to see."),
  faqRow(T, null, "br-test", 6, "Is the removed tissue tested?", "Usually, yes. Ask whether the test is in the price and who tells you the result."),
  faqRow(T, null, "br-work", 7, "How soon can I return to work?", "Many people return to desk work after one to two weeks. Lifting and exercise wait several weeks. The surgeon advises. {pending}"),
  faqRow(T, null, "br-hi-kharcha", 8, "Breast reduction ka kharcha kis par depend karta hai?", "Scar pattern, kitna tissue nikalna hai, facility, aur hospital mein kitni raat rukna hai. Quote mein har line likhwa lein. Dekhein [cost page](/cost/breast-reduction)."),
  faqRow(T, null, "br-hi-pain", 9, "Kya kamar aur gardan ke dard ke liye breast reduction hota hai?", "Kuch logon mein breast ka wazan dard ka ek kaaran ho sakta hai. Surgeon aur zaroorat ho to orthopaedic doctor dekhkar tay karte hain. Pain diary saath le jaayein."),
  faqRow(T, null, "br-hi-insurance", 10, "Kya breast reduction insurance mein aata hai?", "Yeh aapki policy par depend karta hai. Dard ya skin ki samasya ke liye hone wali surgery alag tarah se dekhi ja sakti hai. Policy ke shabd padhein aur insurer se likhit mein poochein."),

  // ---- Kanpur
  faqRow(T, "kanpur", "br-knp-physio", 20, "I tried physiotherapy first. Do I bring those notes?", "Yes. Bring the notes and your pain diary. They show what you tried and help the surgeon and any insurer."),
  faqRow(T, "kanpur", "br-knp-heat", 21, "How do I keep the fold dry in a Kanpur summer?", "Ask the surgeon what lining is fine under the bra, how often to change dressings and what to do if a rash appears."),
  faqRow(T, "kanpur", "br-knp-unnao", 22, "I live in Unnao. Who checks my wounds?", "Ask for early checks that a local doctor can do from a written plan, and a number to call if a wound leaks."),
  faqRow(T, "kanpur", "br-knp-help", 23, "Who should help me at home?", "Plan an adult for the first two weeks for washing your back, changing dressings and lifting. Decide who is told what."),

  // ---- Lucknow
  faqRow(T, "lucknow", "br-lko-college", 20, "What papers do I get for college leave?", "Ask the facility before the operation what papers it gives and how it words them. You decide how much to explain."),
  faqRow(T, "lucknow", "br-lko-stay", 21, "Should I stay on in Lucknow after surgery?", "Many people from the districts stay for the first week. Ask the facility for its advice and the cost of a stay."),
  faqRow(T, "lucknow", "br-lko-records", 22, "Which records help with insurance?", "A pain diary, notes of treatments tried and a letter from your doctor. Ask the facility what it writes and check your policy wording."),
  faqRow(T, "lucknow", "br-lko-winter", 23, "Is a cough a problem in winter?", "A cough is painful with a tender chest. Tell the surgeon if you catch a cold, and ask which medicines are fine."),
];

export const breastReduction: PlasticTopic = {
  kind: "pillar",
  treatment: {
    slug: T,
    seo: {
      title: "Breast Reduction: Eligibility, Recovery, Risks",
      description: "How breast reduction works, who qualifies, scar patterns, breastfeeding questions, recovery by week, risks and what sets the price. Results vary.",
      cityTitle: "Breast Reduction in {city}: Cost, Recovery, Risks",
    },
    content: breastReductionContent,
    display: breastReductionDisplay,
    deskWork: "About 1 to 2 weeks, to be confirmed by the reviewer",
    costPage: breastReductionCostPage,
    costFactors: breastReductionCostPage.factors,
    images: { hero: {}, operation: {}, recovery: {}, card: {} },
  },
  costLines: brCosts,
  faqs,
  cityPages: [brKanpur, brLucknow],
};
