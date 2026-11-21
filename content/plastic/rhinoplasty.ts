import type { CityTreatmentPage, CostLine, FaqRow, NationalCostPage, TreatmentContent, TreatmentDisplay } from "../types";
import { NMC_SOURCE, cityBase, faqRow, line, surgicalIncludes, type PlasticTopic } from "./shared";

// Rhinoplasty: hub, Kanpur and Lucknow city pages, cost lines, FAQs and the national cost page.
// Rules applied: no outcome promise, no before and after, no counts, no named facility or doctor, no price figure.
// Insurance wording is limited to "check your policy wording" for the breathing (septoplasty) part.
// TODO-VERIFY: the splint days, the weeks before glasses and sport, the swelling timeline and the stay are general descriptions for the
// plastic surgeon reviewer to confirm. Marked {pending} where they are shown.

const T = "rhinoplasty";

export const rhinoplastyDisplay: TreatmentDisplay = {
  noPlates: true,
  operationHeading: "What rhinoplasty changes, and what swelling hides for months",
  recoveryHeading: "Recovery calendar for rhinoplasty, splint to month 12",
  recoveryTocLabel: "Recovery",
  timelineCaption: "What most people notice and do, by time since the operation.",
  risksHeading: "Risks and complications",
  riskGuideHref: "/rhinoplasty#risks",
  priceLabel: "Rhinoplasty, usual total bill",
  priceLinkText: "Other scopes and add-ons",
  costMode: "options",
  costHeading: "What rhinoplasty costs, by scope",
  costCaption: "Each row is a separate case. Rows are not added together. Sample data / To be confirmed.",
  labels: {
    techniquesHeading: "Closed, open and graft-based rhinoplasty",
    techniquesCaption: "Plain differences between approaches. A surgeon decides which fits your nose and your goal.",
    tocTechniques: "Approaches",
  },
  tocLabels: { surgery: "What it changes", choices: "Scope and approach" },
};

export const rhinoplastyContent: TreatmentContent = {
  dek: "Rhinoplasty reshapes the nose by changing bone and cartilage, for looks, for breathing or for both. Septoplasty straightens the wall inside the nose and is a different operation, often done together. The [cost](/cost/rhinoplasty) depends on the scope, the facility and the surgeon. Swelling takes many months to settle, and a surgeon decides who it suits.",

  shortAnswers: [
    { q: "What does it change?", a: "The shape of the bridge, tip, nostrils or the airway, depending on your plan. It cannot give you a different face.", href: "#surgery", linkText: "What it changes" },
    { q: "Is it the same as septoplasty?", a: "No. Septoplasty straightens the inner wall to help breathing. Rhinoplasty changes shape. Some people have both.", href: "#which-operation", linkText: "Rhinoplasty, septoplasty or both" },
    { q: "How long is recovery?", a: "A splint for about a week, bruising for about two, and swelling that fades over many months {pending}.", href: "#recovery", linkText: "The calendar" },
    { q: "What sets the price?", a: "The scope, whether cartilage is taken from elsewhere, the facility, anaesthesia and whether it is a repeat operation.", href: "#cost", linkText: "The cost lines" },
  ],

  operation: {
    lead: "Rhinoplasty is an operation under anaesthesia, usually general anaesthesia. The surgeon reshapes the bone and cartilage of the nose through cuts inside the nostrils, or through an extra small cut across the skin between the nostrils. Packing or a splint supports the nose afterwards. A surgeon decides whether it suits you.",
    body: "The nose also has a job. It warms and filters air, and some changes to its shape affect breathing. A good plan covers both the look and the airway. Photos or a computer image at the consultation are a way to talk about shape, and they do not show what your nose will look like after surgery. Read how it differs from [septoplasty](/learn/rhinoplasty-vs-septoplasty).",
    caption: "Bridge, tip and inner wall of the nose, the three areas a surgeon discusses with you.",
    ask: "What exactly will you change, how will the airway be checked, and what do you want to leave alone?",
    how: [
      "Consultation: the surgeon examines the outside and inside of the nose, asks about breathing, past injury and allergies, and takes photos for planning.",
      "Planning: you say what bothers you. The surgeon tells you what is realistic, what the skin and cartilage allow and what you should not expect.",
      "Fitness check: blood tests and an anaesthesia assessment. Nicotine, blood thinners and herbal medicines are reviewed.",
      "Anaesthesia: usually general anaesthesia. The anaesthetist explains the plan and the risks.",
      "Operation: bone and cartilage are reshaped, trimmed or supported. If the surgeon needs more cartilage, it may be taken from the nasal wall, the ear or the rib.",
      "Closure and support: the skin is closed, a splint is placed outside and packing or soft supports may be placed inside.",
      "Stay: many people go home the same day or the next morning, and the surgeon sets yours {pending}.",
    ],
    whoItSuits: [
      { term: "A clear concern", text: "Adults who can say what bothers them about the shape or the airway and who understand that change has limits." },
      { term: "A finished nose", text: "People whose nose has finished growing. A surgeon advises on the age at which that is true, and a guardian takes part in the decision for a younger person as the surgeon decides." },
      { term: "Time to heal", text: "People who can manage a week of splint, a month or more of care with sport and spectacles, and many months of swelling." },
      { term: "Health in order", text: "People who do not smoke or chew tobacco, whose allergies and sinus problems are assessed and who tell the surgeon about past nose injury or surgery." },
    ],
  },

  techniques: {
    lead: "These are names for how the surgeon reaches the structure of the nose and what is used to support it. Ask which one your quote means.",
    rows: [
      { name: "Closed approach", how: "All cuts are inside the nostrils. There is no cut across the skin between the nostrils", often: "Smaller changes where the surgeon needs less view of the cartilage", ask: "Does the closed approach give you enough control for my plan?" },
      { name: "Open approach", how: "A small extra cut across the narrow strip of skin between the nostrils lets the surgeon lift the skin of the tip and see the cartilage directly", often: "Tip work, larger changes and repeat operations", ask: "How visible is the small cut after healing, and how long does the tip stay swollen?" },
      { name: "Cartilage grafts", how: "Cartilage is taken from the inner wall, the ear or the rib to support or reshape the nose", often: "A weak tip, a collapsed side wall, or a repeat operation", ask: "Where will the cartilage come from, and what does that add to the bill and the recovery?" },
      { name: "Repeat (revision) rhinoplasty", how: "Surgery on a nose that has already had an operation, with scar tissue and less cartilage to work with", often: "Breathing trouble or shape concerns after a first operation", ask: "How many revisions have you done, and when after the first operation do you advise it?" },
    ],
    note: "Nose shaping with injectables is a different approach with its own regulation and risks. This page covers surgery only.",
  },

  extraSections: [
    {
      id: "which-operation",
      heading: "Rhinoplasty, septoplasty or both",
      tocLabel: "Rhinoplasty, septoplasty or both",
      lead: "People often say rhinoplasty and mean the nose that blocks. The two operations answer different problems, and quotes, insurance wording and recovery differ.",
      table: {
        caption: "What each operation addresses. A surgeon examines you and decides.",
        head: ["Operation", "What it changes", "Usual reason", "Ask about cost and cover"],
        rows: [
          ["Rhinoplasty", "The shape of the bridge, tip or nostrils", "Appearance, sometimes after an injury", "Is the quote for appearance only, and is it a cosmetic bill?"],
          ["Septoplasty", "The inner wall that divides the nose", "A blocked airway on one or both sides", "Check your policy wording. Ask whether the operation is described as functional in the papers"],
          ["Septorhinoplasty", "Inner wall and outer shape in one operation", "A blocked nose and a shape concern together", "Can the bill be split into a breathing part and a shape part, and what does your insurer say?"],
          ["Turbinate or sinus work", "Structures inside the nose that swell or block", "Blocked airway not fixed by the wall alone", "Is it in this quote, and who does it, the surgeon or an ENT colleague?"],
        ],
      },
    },
    {
      id: "everyday",
      heading: "Everyday things that touch the nose in the first weeks",
      tocLabel: "Everyday things",
      lead: "A nose is in the way of ordinary life. The table lists what to plan for, with general timings for the reviewer to confirm. {pending}",
      table: {
        caption: "Ask your surgeon for the dates that apply to you.",
        head: ["Thing", "General guidance", "Ask"],
        rows: [
          ["Spectacles and sunglasses", "Weight on the bridge is avoided for several weeks. Tape or a light frame may be advised", "How do I support my glasses, and for how long?"],
          ["Sneezing and blowing the nose", "Open the mouth to sneeze. Do not blow the nose for a period", "When can I blow my nose, and what do I use for blocked nostrils?"],
          ["Head bath and hair wash", "Keep the splint dry. A wash with the head tilted back may be advised", "How do I wash my hair in the first week?"],
          ["Sleeping", "Head raised on pillows, on the back, for a period", "How long should I sleep this way?"],
          ["Cricket, football and contact sport", "Many weeks off, because a knock to the nose can change the result", "When can I play, and with what protection?"],
          ["Helmet and face guard", "A helmet strap near the nose can press. Ask about a two-wheeler ride", "When can I ride, and which helmet suits me?"],
          ["Sun on the bridge", "Sun can darken healing skin. Sunscreen and a hat are often advised", "Which sunscreen suits healing skin, and for how long?"],
          ["Pollution masks and cloth masks", "Pressure on the splint is avoided. The surgeon says when a mask is fine", "Which mask can I use outdoors in the first month?"],
        ],
      },
    },
    {
      id: "swelling",
      heading: "Why the nose looks different at week 2, month 3 and month 12",
      tocLabel: "Swelling over a year",
      paragraphs: [
        "Bruising around the eyes usually fades within about two weeks. Swelling of the bridge and tip goes down more slowly. The tip is often the last to settle, and thick skin holds swelling longer. A surgeon will say whether your skin is thick or thin, and what that means for the timeline. {pending}",
        "Because of this, a nose is not judged at the first review. Many surgeons advise waiting a year before talking about a repeat operation. Ask when you will be seen, and how the surgeon will judge whether the nose has settled.",
      ],
      note: { label: "Ask this", text: "How long until I can go out without feeling self-conscious, and what swelling is normal at each review?" },
    },
    {
      id: "images",
      heading: "Computer images and what they can and cannot do",
      tocLabel: "Computer images",
      paragraphs: [
        "Some surgeons use a computer image at the consultation to talk about shape. The image is a way to compare ideas, and it is not a prediction. Surgery cannot copy an image onto a nose, because the skin, cartilage and bone set limits. Ask the surgeon to show you what the limits are for your nose.",
        "Be careful of a clinic that shows you a perfect image before an examination and promises it. A good consultation includes a look inside the nose and a discussion of what to leave alone.",
      ],
    },
    {
      id: "questions",
      heading: "Questions for your surgeon before any payment",
      tocLabel: "Questions to ask",
      bullets: [
        "What do you plan to change, and what do you plan to leave alone?",
        "Will you use cartilage from another part of my body, and where will the extra cut be?",
        "Will you check my breathing and my septum, and is a septoplasty part of this quote?",
        "How many nights do I stay, and when is the splint removed?",
        "When will I see you for review, and what is your plan if one side heals differently?",
        "What does a repeat operation cost, and when do you advise it?",
        "Who will do the operation and who will be in the theatre?",
        "What do I do if I get a nosebleed at night?",
      ],
    },
  ],

  recovery: {
    lead: "Most people follow this pattern, and your surgeon decides your dates. Every range here is a general figure waiting for the reviewer's check. {pending}",
    body: "Expect a splint and some blocked breathing in the first week, bruising around the eyes for about two weeks, and a nose that keeps changing for months. Sleep with the head raised, avoid knocks, and keep to the review dates.",
    highlights: [
      { pre: "about", big: "1 week", text: "Before the splint usually comes off" },
      { pre: "about", big: "2 weeks", text: "Before many people return to office work" },
      { pre: "months", big: "6 to 12", text: "Swelling settles and the nose can be judged" },
    ],
    timeline: [
      { when: "Day 0 to 2", notice: "Blocked breathing through the nose, a splint, mild oozing and tiredness", doThis: "Sleep with your head raised. Breathe through the mouth. Do not blow your nose." },
      { when: "Day 3 to 7", notice: "Bruising, swelling and a stuffy nose. The splint stays on", doThis: "Rest. Keep the splint dry. Use the drops or rinse you are given. Attend the first review." },
      { when: "Week 1 to 2", notice: "Splint and any packing out. Bruising fades to yellow. The nose looks swollen", doThis: "Gentle face washing. No glasses on the bridge unless advised. Return to desk work if the surgeon agrees." },
      { when: "Week 3 to 4", notice: "Most bruising gone. Tip swelling and numbness remain", doThis: "Light walking. No contact sport. Ask about spectacles." },
      { when: "Week 6", notice: "The bones have started to firm up. The nose still changes", doThis: "Review visit. Ask about exercise, sport and glasses." },
      { when: "Month 3 to 6", notice: "Swelling goes down and the shape becomes clearer", doThis: "Gradual return to sport as advised. Sun care on the bridge." },
      { when: "Month 12", notice: "Most swelling has settled. Fine change can continue", doThis: "Final review. Discuss any further steps only after the nose has settled." },
    ],
    grid: {
      cols: ["Wk 1", "Wk 2", "Wk 4", "Wk 6"],
      rows: [
        { label: "Desk work", cells: [{ state: "m", text: "Ask" }, { state: "y", text: "Yes" }, { state: "y", text: "Yes" }, { state: "y", text: "Yes" }] },
        { label: "Glasses on the bridge", cells: [{ state: "n", text: "No" }, { state: "n", text: "No" }, { state: "m", text: "Ask" }, { state: "m", text: "Ask" }] },
        { label: "Blowing the nose", cells: [{ state: "n", text: "No" }, { state: "n", text: "No" }, { state: "m", text: "Ask" }, { state: "m", text: "Ask" }] },
        { label: "Two-wheeler ride", cells: [{ state: "n", text: "No" }, { state: "n", text: "No" }, { state: "m", text: "Ask" }, { state: "m", text: "Ask" }] },
        { label: "Contact sport", cells: [{ state: "n", text: "No" }, { state: "n", text: "No" }, { state: "n", text: "No" }, { state: "n", text: "No" }] },
      ],
    },
    closing: "A fixed recovery is a myth. Bruising, swelling and the time to a settled shape vary with skin thickness, the scope of surgery and whether grafts were used. Plan weddings and photographs many months ahead.",
  },

  risks: {
    lead: "Any operation can go wrong in some way. The common concerns are listed in plain words, each with something to ask. A surgeon covers the rest in your consultation.",
    rows: [
      { risk: "Bleeding and nosebleeds", means: "Oozing in the first days, and sometimes a later bleed that needs attention.", ask: "What do I do for a nosebleed at night, and who do I call?" },
      { risk: "Infection", means: "Redness, heat, pus or fever around the nose or inside.", ask: "Which signs should I report, and are antibiotics part of the plan?" },
      { risk: "Breathing problems", means: "The airway may feel narrower after surgery, or a blockage may remain.", ask: "How do you check my breathing before and after surgery?" },
      { risk: "Asymmetry or an unwanted shape", means: "The two sides may differ, or the shape may not match what you hoped.", ask: "What differences are normal, and when do you consider more surgery?" },
      { risk: "Numbness", means: "A numb tip or upper lip for weeks or months.", ask: "How long does it usually last?" },
      { risk: "Septal hole or nasal wall problems", means: "A rare opening in the inner wall, or a weak wall after cartilage is removed.", ask: "How do you support the nose, and what happens if a hole forms?" },
      { risk: "Skin changes", means: "Redness, small visible veins or thin skin over cartilage.", ask: "Which signs of skin trouble do you watch for?" },
      { risk: "Need for repeat surgery", means: "Some people have a further operation for shape or breathing.", ask: "What does a repeat operation cost, and when do you advise it?" },
      { risk: "Graft site problems", means: "Pain, scar or a change at the ear or rib where cartilage was taken.", ask: "Which site will you use, and what is its recovery?" },
      { risk: "Anaesthesia risks", means: "Nausea, breathing and heart events, higher with some illnesses.", ask: "Who gives my anaesthesia, and what did my fitness check show?" },
    ],
    alert: "Contact your surgeon straight away for a nosebleed that does not stop, fever, spreading redness, severe pain, sudden vision changes, clear fluid running from the nose or a very swollen eye. If no one answers, go to the nearest emergency department.",
    wait: [
      "You are still growing, or your surgeon says the nose is not ready",
      "You smoke or chew tobacco and have not stopped as advised",
      "You use nasal sprays or drugs that affect the lining, and have not told the surgeon",
      "You have a current sinus infection or untreated allergies",
      "You have a bleeding condition or take blood thinners without a plan",
      "You expect to look like a photo",
      "You have a wedding or major event within a few months",
      "You have an unresolved concern about your appearance that affects your mood and have not discussed it",
    ],
    tell: [
      "Past nose injury, surgery or fillers",
      "Allergies, sinus problems and nasal sprays",
      "All medicines, supplements and herbal products",
      "Bleeding or clotting conditions",
      "Smoking, chewing tobacco and alcohol",
      "Previous anaesthesia reactions",
    ],
  },

  patientQuestions: [
    { q: "Is it rhinoplasty or septoplasty?", href: "#which-operation", linkText: "Read: the difference" },
    { q: "What about my glasses and sneezing?", href: "#everyday", linkText: "Read: everyday things" },
    { q: "When will it look settled?", href: "#swelling", linkText: "Read: swelling over a year" },
    { q: "Can I trust a computer image?", href: "#images", linkText: "Read: computer images" },
    { q: "What should I ask?", href: "#questions", linkText: "Read: questions to ask" },
    { q: "What will it cost?", href: "#cost", linkText: "Read: the cost lines" },
  ],

  quoteProcess: [
    { title: "A coordinator takes your first call", text: "Phone or WhatsApp. Give your town and what you want to ask. A first call carries no obligation to book." },
    { title: "A surgeon looks inside and outside the nose", text: "In person. Photos can start the conversation, and the plan is made only after an examination." },
    { title: "The plan arrives in writing", text: "It states the approach, whether the airway is addressed, where any cartilage comes from, and the surgeon, facility and price." },
    { title: "You compare at your own pace", text: "Put plans for the same scope side by side. No package is paid before the examination." },
    { title: "Care after the operation", text: "A coordinator call, a splint visit around the end of the first week and later reviews across the year." },
  ],

  quoteChecks: [
    "state whether it is rhinoplasty, septoplasty or both?",
    "say whether cartilage from another site is included and where it comes from?",
    "show anaesthesia, theatre and surgeon fees on separate lines?",
    "say whether the splint, packing and review visits are included?",
    "give the price of a repeat operation?",
    "name the facility type and the length of stay?",
  ],

  extras: [
    "Septoplasty or turbinate work, if listed separately",
    "Cartilage grafts from the ear or rib",
    "A repeat operation",
    "Pre-operative blood tests",
    "Medicines and nasal care after discharge",
    "Review visits beyond the splint visit",
    "GST, if shown separately",
    "Your travel and time off",
  ],

  insurance:
    "Insurance. Nose surgery for appearance is usually not covered by health policies. A septoplasty done for a breathing problem may be treated differently, so read your policy wording and write to your insurer before you book. Cashless approval is never promised here.",
  payment:
    "Payment. Methods and instalments depend on the facility and the lender and are not shown here. Keep your payment back until an examination is done. {tbc}",

  // TODO-VERIFY: the reviewer opens each source and confirms the URL and the facts used.
  sources: [NMC_SOURCE],

  footnotes: [
    "Medical review is pending. A reviewer name, qualification and date will appear once a registered plastic surgeon signs off.",
    "Splint days, the weeks before glasses and sport, the swelling timeline and the stay are general and await the reviewer.",
    "No satisfaction or revision figure appears, because none has been verified.",
    "Insurance and payment wording is general and still to be confirmed.",
  ],
};

// ------------------------------------------------------------------ city pages
// TODO-VERIFY (both cities): road times, station and airport names, stays and follow-up arrangements are general
// and must be checked against the partner facility and a dated public source before any page leaves noindex.

const rhKanpur: CityTreatmentPage = {
  ...cityBase(T, "kanpur"),
  seoTitle: "Rhinoplasty in Kanpur: Cost, Recovery, Risks",
  h1: "Rhinoplasty in Kanpur",
  metaDescription: "Rhinoplasty in Kanpur: sample cost lines, how scope and grafts change the bill, the splint week, dust and heat, and travel from Unnao and nearby towns.",
  intro: "The sample total for rhinoplasty in Kanpur depends on the scope, whether cartilage is taken from elsewhere and the stay. No partner facility is confirmed in Kanpur yet, so no price is shown. Most Kanpur questions concern the splint week, two-wheeler travel with a bandaged nose and tobacco habits that slow healing.",
  includes: { ...surgicalIncludes },
  facilities: {
    intro: "No partner facility is confirmed in Kanpur yet. Rhinoplasty is usually done under general anaesthesia in a hospital or a day-care unit with an anaesthetist, so ask which one your quote means.",
    partners: [{ type: "Hospital or day-care unit with a theatre in Kanpur (to be confirmed)", count: null }],
    accreditation: null,
    checks: [
      { check: "An anaesthetist and recovery area", why: "Breathing is managed through a blocked nose after surgery", ask: "Who monitors my breathing in recovery, and when am I sent home?" },
      { check: "Out-of-hours contact for a nosebleed", why: "Late bleeds happen after discharge", ask: "Who do I call at night, and where do I go?" },
      { check: "Written scope", why: "Quotes may mix septum work and shape work", ask: "Does this quote include breathing work, grafts and the splint visit?" },
    ],
  },
  travel: {
    intro: "A person with a splint on the nose is not at ease on a crowded bus or the back of a two-wheeler. The questions in Kanpur are how to get home after discharge, how to make the splint visit around day seven and how to travel from the districts without exposing a healing nose to dust.",
    airport: "Kanpur Airport at Chakeri has limited services (to be verified). Many travellers use Lucknow airport",
    station: "Kanpur Central",
    stayDays: "To be confirmed by the partner. Many plans use a same-day return or one night {pending}",
    metro: "A cab or a family car is easier than public transport with a splint, and a closed window helps against dust.",
    roadTimes: [
      { from: "Unnao", time: "40 to 80 min", tip: "A same-day return to the splint visit is workable for most people" },
      { from: "Kanpur Dehat", time: "60 to 120 min", tip: "A night in the city may suit better than a long return at dusk" },
      { from: "Farrukhabad", time: "120 to 180 min", tip: "Ask whether the splint visit can be combined with a longer stay" },
      { from: "Lucknow", time: "90 to 150 min", tip: "If you compare Lucknow, compare the same scope and the same stay" },
    ],
    privacyNote: "A mask worn for dust covers a splint less well than a loose scarf. Ask your surgeon what is allowed over the nose in public.",
    mapCaption: "Travel into Kanpur from Unnao and nearby towns, no building shown.",
  },
  localContext: [
    { text: "NEEDS REAL DATA: which Kanpur facility, if any, will do rhinoplasty, and its type", source: "", asOf: "" },
    { text: "NEEDS REAL DATA: Kanpur air quality record (public CPCB station data, month and station)", source: "", asOf: "" },
    { text: "NEEDS REAL DATA: whether an ENT and a plastic surgeon work together at the partner facility", source: "", asOf: "" },
  ],
  usefulness: "For readers in Kanpur and nearby towns who want to plan the splint week, a two-wheeler commute, tobacco and dust, with notes on the ENT referral, the splint visit and a Lucknow comparison.",
  localCopy: [
    "A Kanpur rhinoplasty plan starts with how you will travel home and back for the splint visit.",
    "Chewing tobacco and gutka slow healing, so Kanpur patients are asked to stop well ahead.",
    "Many Kanpur patients reach a nose surgeon through an ENT doctor who treated a blocked nose.",
  ],
  localNotes: [
    { heading: "Tobacco in every form", text: "Smoking is the usual question. In Kanpur, as in much of Uttar Pradesh, many people also chew tobacco or pan masala. Nicotine in any form can slow healing. Tell the surgeon honestly and ask how long before surgery you must stop." },
    { heading: "Two-wheeler and the splint", text: "A rider's helmet strap and wind pressure on a splint are a problem. Plan a cab or a family car for discharge and for the splint visit, and ask when a helmet can be used again." },
    { heading: "The ENT route", text: "Many people begin with an ENT doctor who treats a blocked nose and then ask about shape. Ask whether the ENT and the plastic surgeon agree on the scope, and who handles the breathing part." },
    { heading: "Dust after the splint comes off", text: "Kanpur is dusty through much of the year. When packing and splint are out, the nose is sensitive. We make no claim about what dust does to healing. Ask the surgeon about saline rinses and what to wear outdoors. {pending}" },
  ],
  sections: [
    {
      heading: "Dust, industry and a healing nose",
      paragraphs: [
        "Kanpur has industry in and around the city, with dust on many roads. A nose in the first weeks after surgery is blocked, sore and dry. We make no claim about what local air does to healing. Ask the surgeon what to rinse with, how often, and what to wear over your face outside.",
        "If you have allergies or sinus trouble that flare in the dusty months, tell the surgeon at the first visit. The date of surgery may be chosen with that in mind.",
      ],
    },
    {
      heading: "Heat, sweat and tape on the bridge",
      paragraphs: [
        "Summers in Kanpur are hot and dry, and in May and June the tape and splint on a sweaty bridge can loosen or irritate the skin. Ask how to keep the splint on, whether a cooler room helps and what to do if the tape lifts. In winter the problem is a cold that blocks a nose already stuffy from surgery. Keep a plan for both.",
      ],
    },
    {
      heading: "Getting home and getting back for the splint",
      paragraphs: [
        "Many plans send you home the same day or after one night. The splint usually comes off around the end of the first week, and a short visit follows. If you live in Unnao, the trip is short. If you live in Kanpur Dehat or Farrukhabad, a night nearby may save a hard day. Ask the hospital what a night costs. {tbc}",
        "Bring someone to drive you. After general anaesthesia you should not drive, and a bandaged nose in a crowded vehicle is uncomfortable.",
      ],
    },
    {
      heading: "Family, photographs and who knows",
      paragraphs: [
        "In a joint household a splint is visible, and relatives may ask. Decide beforehand what you will say. Bruising around the eyes fades over about two weeks, and the nose stays swollen for months. If you have a wedding or a family event, plan well ahead. Many surgeons advise a gap of many months between rhinoplasty and an important photograph. {pending}",
        "Young adults often bring a parent. A surgeon decides how a parent takes part in the consultation and the consent.",
      ],
    },
    {
      heading: "Comparing Kanpur with Lucknow",
      paragraphs: [
        "Lucknow is about an hour and a half or two hours away by road, and some people compare surgeons in both cities. Ask each for the scope in writing, the stay, the graft source and the splint visit. A bill without grafts can look lower than one with them, and a quote for septoplasty alone is not a quote for rhinoplasty.",
      ],
    },
  ],
};

const rhLucknow: CityTreatmentPage = {
  ...cityBase(T, "lucknow"),
  seoTitle: "Rhinoplasty in Lucknow: Cost, Recovery, Risks",
  h1: "Rhinoplasty in Lucknow",
  metaDescription: "Rhinoplasty in Lucknow: sample cost lines, scope and graft questions, the splint week, exams and weddings, and travel from Barabanki, Unnao and Sitapur.",
  intro: "The sample total for rhinoplasty in Lucknow depends on the scope, the graft source, the facility and the stay. No partner facility is confirmed in Lucknow yet, so no price is shown. Students, young professionals and families from nearby districts come to Lucknow for this, and their calendars drive the questions.",
  includes: { ...surgicalIncludes },
  facilities: {
    intro: "No partner facility is confirmed in Lucknow yet. Lucknow has hospitals and day-care units of many sizes, so check the theatre, the anaesthetist and the follow-up plan in each.",
    partners: [{ type: "Hospital or day-care unit with an operating theatre, Lucknow (to be confirmed)", count: null }],
    accreditation: null,
    checks: [
      { check: "Who does the breathing work", why: "Septum and turbinate work may sit with an ENT surgeon", ask: "Is breathing work in this quote, and who performs it?" },
      { check: "Parent or guardian rules", why: "Younger adults often attend with a parent", ask: "How is consent taken, and who may sit in the consultation?" },
      { check: "Splint visit on a fixed day", why: "Out-of-town patients need a date they can plan around", ask: "Can the splint visit be fixed before I book my ticket?" },
    ],
  },
  travel: {
    intro: "People come to Lucknow for nose surgery from Barabanki, Unnao, Sitapur, Raebareli and Hardoi, and from Kanpur. A splint week means one stay for the operation, a break in the city or at home, and a second short trip for the splint visit.",
    airport: "Amausi airport, officially Chaudhary Charan Singh International (to be verified)",
    station: "Charbagh is the main station, with Lucknow Junction also in use (to be verified)",
    stayDays: "To be confirmed by the partner. Many plans use a same-day return or one night {pending}",
    metro: "One metro line serves Lucknow along a north to south route (to be verified), though a splint draws looks in a crowded car. A cab or a family car is calmer.",
    roadTimes: [
      { from: "Barabanki", time: "40 to 80 min", tip: "A half day covers the splint visit" },
      { from: "Unnao", time: "60 to 100 min", tip: "A night near the facility after the operation spares a long ride in the dark" },
      { from: "Sitapur", time: "90 to 150 min", tip: "Spend the splint week in Lucknow if you can" },
      { from: "Kanpur", time: "90 to 150 min", tip: "Compare scope and stay with Kanpur options before you decide" },
    ],
    privacyNote: "Resting at a relative's house in the city saves you from explaining a splint to neighbours at home. Ask the facility to keep the procedure name out of messages.",
    mapCaption: "Roads into Lucknow from the surrounding districts, with no building shown.",
  },
  localContext: [
    { text: "NEEDS REAL DATA: which Lucknow facility, if any, will do rhinoplasty, and its type", source: "", asOf: "" },
    { text: "NEEDS REAL DATA: Lucknow winter air quality and fog days (public CPCB and IMD records)", source: "", asOf: "" },
    { text: "NEEDS REAL DATA: guest houses near the partner facility that accept people with a splint, with rates and distance", source: "", asOf: "" },
  ],
  usefulness: "For students, young professionals and families in Lucknow and nearby districts who plan around exams, weddings and the splint week, with notes on parent involvement, district town travel, the cold season and who handles breathing work.",
  localCopy: [
    "In Lucknow, the plan often begins with an exam date or a wedding date and works backwards.",
    "Parents commonly come to the first consultation with a younger adult, and the surgeon decides how.",
    "The splint visit is one return trip, and district patients plan a stay around it.",
  ],
  localNotes: [
    { heading: "Exam and college calendars", text: "Many people who ask about rhinoplasty in Lucknow are at university or in a first job. Avoid the weeks before an exam or a placement round. Bruising fades in about two weeks and swelling stays for months, so ask the surgeon what to plan for a big interview." },
    { heading: "Parents and consent", text: "A younger adult often comes with a parent. How a parent or guardian takes part in the consultation and the consent is the surgeon's decision. Ask the facility for its process before the visit." },
    { heading: "From the districts", text: "Barabanki, Unnao and Sitapur send many patients. Plan one stay for the operation and one short trip for the splint visit. A relative's house in Lucknow can bridge the week." },
    { heading: "Cold season and a blocked nose", text: "Lucknow has cold, foggy mornings in winter. A cold after surgery stuffs a nose that is already blocked. We make no claim about winter and healing. Ask the surgeon how to manage a cold and which medicines are fine. {pending}" },
  ],
  sections: [
    {
      heading: "Working back from an exam or a wedding",
      paragraphs: [
        "Lucknow families plan around weddings and festivals, and students plan around exams. Rhinoplasty needs a quiet first week and a bruised face for about two weeks. The nose stays swollen for months, so the weeks before a large event are the wrong time. Pick the event, count back at least several months, and then ask the surgeon whether that date works. {pending}",
        "If the date is fixed and short, a surgeon may advise waiting. That is a fair answer, and it is better to hear it early.",
      ],
    },
    {
      heading: "A nose that also has to breathe",
      paragraphs: [
        "In Lucknow, as elsewhere, many people with a blocked nose also want a shape change. A doctor who treats the blockage may be an ENT specialist, and the shape work may be with a plastic surgeon. Ask who plans the operation, whether both are in the theatre and who is your contact afterwards. Keep one written plan for the whole thing.",
        "If your insurer might cover the breathing part, ask the facility how the bill describes it. Check your policy wording and ask your insurer in writing.",
      ],
    },
    {
      heading: "The splint week and a stay in the city",
      paragraphs: [
        "The splint usually stays on for about a week. People from Hardoi or Sitapur often stay in Lucknow for those days with a relative or in a guest house, then see the surgeon, then go home. Ask the facility what a stay costs, whether a person can stay with you and what the visiting rules are. {tbc}",
        "A closed cab with the windows up is more comfortable than an open vehicle while the nose is tender.",
      ],
    },
    {
      heading: "Language, photographs and expectations",
      paragraphs: [
        "Lucknow clinics work in Hindi, in Urdu-influenced Hindi and in English. Tell the surgeon what bothers you in your own words, and bring two or three ordinary photographs of yourself or of noses you like in everyday life. Ask for the plan in writing in the language you read most easily.",
        "A consultation that begins with a catalogue of noses, or promises a copy of one, is a reason to take a second opinion.",
      ],
    },
    {
      heading: "Tobacco, pan and paan masala",
      paragraphs: [
        "Nicotine slows healing and raises the risk of skin problems on the tip of the nose. That includes cigarettes, bidis, chewing tobacco and some paan and pan masala mixes. Tell the surgeon what you use, and ask how long you must stop before and after surgery.",
      ],
    },
  ],
};

// ------------------------------------------------------------------ cost lines and cost page
const rhCosts: CostLine[] = [
  line(T, 1, "Consultation and nasal examination", "The surgeon and the facility"),
  line(T, 2, "Rhinoplasty (shape only), usual total", "Scope, anaesthesia and stay"),
  line(T, 3, "Septorhinoplasty, usual total", "Breathing work and shape work in one operation"),
  line(T, 4, "Add-on: cartilage graft from ear or rib", "Source of the graft and operating time"),
  line(T, 5, "Repeat (revision) rhinoplasty, usual total", "Scar tissue, grafts and the number of past operations"),
  line(T, 6, "Splint, packing and dressings", "What is included in the quote"),
  line(T, 7, "Follow-up visits and medicines", "Ask in writing before you book"),
];

export const rhinoplastyCostPage: NationalCostPage = {
  seoTitle: "Rhinoplasty Cost in India: What Sets the Total Bill",
  metaDescription: "How rhinoplasty cost is built: scope, septum work, cartilage grafts, facility and repeat surgery. Ranges stay pending until dated quotes exist.",
  h1: "Rhinoplasty cost in India",
  answer: "The total depends on the scope of the operation, whether the septum is also corrected, whether cartilage is taken from elsewhere, and the facility. No amount appears yet. A range will be added after dated quotes are collected, with its source named.",
  unit: "total",
  rangeHeading: "Sample totals by scope of rhinoplasty",
  rangeCaption: "Every line stands alone, so do not add them.",
  planner: {
    heading: "Check which operation the quote is for",
    formula: "Total = surgeon + anaesthesia + theatre + stay + grafts if any + splint and review visits",
    steps: [
      "Ask whether the quote is for shape only, for the airway only, or for both.",
      "Ask whether cartilage will be taken from the septum, the ear or the rib, and what that adds.",
      "Ask whether the splint, packing and review visits are included.",
      "Ask what a repeat operation would cost, and when it is advised.",
      "Look for what the quote omits: GST, discharge medicines, nasal care products and pre-operative tests.",
    ],
  },
  extraSections: [
    {
      id: "where-the-money-goes",
      heading: "Where the money goes in a rhinoplasty quote",
      tocLabel: "Where the money goes",
      lead: "A rhinoplasty bill has more parts than most people expect. The table lists them with the question that tests each one.",
      table: {
        caption: "Parts of a rhinoplasty quote and what to ask about each.",
        head: ["Part of the bill", "Why it varies", "Question to put to the surgeon"],
        rows: [
          ["Shape work", "A tip change and a full reshaping of bridge and tip take different time", "Which parts of my nose will you change?"],
          ["Airway work", "Septum or turbinate work may be billed on its own line", "Is breathing work in this price, and who performs it?"],
          ["Graft material", "Cartilage from the nasal wall, ear or rib needs a second site", "Where will cartilage come from, if any is needed?"],
          ["Anaesthesia", "General anaesthesia is priced by the length of the operation", "How long do you expect the operation to take?"],
          ["Splint and packing", "Supplied in the price, or added as consumables", "What do I take home, and who removes it?"],
          ["Repeat allowance", "Some quotes cover a touch-up for a period, others do not", "What is the price if I need a second operation?"],
        ],
      },
    },
  ],
  factors: [
    { factor: "Scope of the operation", why: "Small changes to the tip take less time than reshaping the bridge, tip and nostrils together." },
    { factor: "Septum and airway work", why: "Straightening the inner wall adds time and may be billed as a separate line." },
    { factor: "Cartilage grafts", why: "Taking cartilage from the ear or rib adds a second site and time in theatre." },
    { factor: "Repeat surgery", why: "Scar tissue and less cartilage make a repeat operation longer and more complex." },
    { factor: "Anaesthesia", why: "Rhinoplasty is usually done under general anaesthesia, and the fee depends on the length and your health." },
    { factor: "Facility and stay", why: "A hospital and a day-care unit charge differently for the theatre and the bed." },
    { factor: "Surgeon and team", why: "A surgeon's training and the team in the theatre shape the fee. We rank no one." },
    { factor: "Where you have it", why: "Fees follow local rents and salaries, so the same plan can price differently in Kanpur, Lucknow or Delhi." },
  ],
  notIncluded: [
    "Septoplasty or turbinate work, if listed separately",
    "Cartilage grafts from the ear or rib",
    "A repeat operation",
    "Saline rinses and other nasal care after discharge",
    "Pre-operative blood tests",
    "Review visits beyond the splint visit",
    "GST, if billed on its own line",
    "Your travel, stay near the facility and time off",
  ],
  compareQuotes: [
    "Ask each facility whether the quote is rhinoplasty, septoplasty or both.",
    "Compare totals for the same scope and the same graft plan.",
    "Find out who will operate, and look up their registration yourself.",
    "Ask what a second operation costs before you book the first.",
    "Hold back payment until you have been examined in person.",
  ],
  insurance: "Nose surgery for appearance is usually not covered by health policies. A septoplasty for a breathing problem may be treated differently, so read your policy wording and write to your insurer.",
  payment: "Instalments depend on the facility and the lender, and their terms are not listed here. GST wording is to be confirmed. {tbc}",
  method: "No rhinoplasty price is published yet. When quotes arrive, every line will state where it came from, how many data points support it and when they were collected. Fewer than three dated points from separate sources keeps the pending label. Other websites supply nothing here, and a figure from one city is never reused for another.",
  faqs: [
    { q: "What affects the price of rhinoplasty the most?", a: "The scope of the operation, whether the airway is included, whether cartilage is taken from another site and the facility. Ask for each as a line." },
    { q: "Is a septoplasty cheaper than a rhinoplasty?", a: "Usually it is a different operation with a different scope, so the bills are not directly comparable. Ask what each quote covers." },
    { q: "Does insurance cover rhinoplasty?", a: "Usually not when it is done for appearance. A septoplasty for breathing may be treated differently. Check your policy wording and ask in writing." },
    { q: "Does a repeat operation cost more?", a: "Often yes, because scar tissue and less cartilage make the work longer. Ask what a repeat would cost before you book the first." },
    { q: "Are the splint and follow-up included?", a: "Only if the quote says so. Ask for a written list." },
    { q: "Is payment in instalments possible?", a: "Some facilities and lenders allow it, on terms that vary and are not shown here." },
  ],
  sources: [NMC_SOURCE],
};

// ------------------------------------------------------------------ FAQs (10 on the hub, 4 per city)
const faqs: FaqRow[] = [
  faqRow(T, null, "rh-vs-sept", 1, "What is the difference between rhinoplasty and septoplasty?", "Rhinoplasty changes the outer shape. Septoplasty straightens the inner wall to help breathing. Some people have both in one operation. See [rhinoplasty vs septoplasty](/learn/rhinoplasty-vs-septoplasty)."),
  faqRow(T, null, "rh-age", 2, "What is the right age for rhinoplasty?", "The nose should have finished growing, and a surgeon advises on that for you. For a younger person, a parent or guardian takes part as the surgeon decides. {pending}"),
  faqRow(T, null, "rh-splint", 3, "How long do I wear the splint?", "About a week is common, and the surgeon sets yours. Keep it dry and do not touch it. {pending}"),
  faqRow(T, null, "rh-swelling", 4, "When will my nose look settled?", "Bruising fades in about two weeks. Swelling goes down over many months, and the tip is often last. Many surgeons judge the nose at around a year. {pending}"),
  faqRow(T, null, "rh-glasses", 5, "Can I wear spectacles after rhinoplasty?", "Not on the bridge for several weeks. The surgeon may advise tape or a light frame, and contact lenses are an alternative. Ask for the dates that apply to you."),
  faqRow(T, null, "rh-work", 6, "How soon can I go back to work?", "Many people return to desk work after about two weeks. A visible splint or bruising may make you choose a longer break. The surgeon advises. {pending}"),
  faqRow(T, null, "rh-image", 7, "Will the computer image look like my result?", "No. It is a way to discuss shape, and surgery is limited by your skin, cartilage and bone."),
  faqRow(T, null, "rh-hi-recovery", 8, "Nose surgery ke baad kitne din rest chahiye?", "Aam taur par ek hafta splint rehta hai aur office ka kaam kareeb do hafte baad shuru hota hai, lekin surgeon tay karta hai. Sujan kai mahine mein kam hoti hai. {pending}"),
  faqRow(T, null, "rh-hi-kharcha", 9, "Rhinoplasty ka kharcha kis par depend karta hai?", "Operation kitna bada hai, septum ka kaam saath mein hai ya nahi, cartilage kahin aur se liya jayega ya nahi, aur facility kaisi hai. Quote mein har line likhwa lein. Dekhein [cost page](/cost/rhinoplasty)."),
  faqRow(T, null, "rh-hi-insurance", 10, "Kya septoplasty insurance mein aata hai?", "Yeh aapki policy par depend karta hai. Policy ke shabd dekhein aur insurer se likhit mein poochein. Sirf shape ke liye ki gayi surgery aam taur par cover nahi hoti."),

  // ---- Kanpur
  faqRow(T, "kanpur", "rh-knp-tobacco", 20, "I chew tobacco. Does it matter for rhinoplasty?", "Yes. Nicotine in any form slows healing. Tell the surgeon honestly and ask how long you must stop before and after the operation."),
  faqRow(T, "kanpur", "rh-knp-bike", 21, "Can I ride my scooter home after rhinoplasty?", "No. Do not drive or ride after general anaesthesia. A helmet strap can press on a splint, so ask when you can ride again."),
  faqRow(T, "kanpur", "rh-knp-ent", 22, "My ENT doctor treats my blocked nose. Can the same visit cover shape?", "Ask both doctors. A blocked nose and a shape concern may be handled in one operation or two. Keep one written plan."),
  faqRow(T, "kanpur", "rh-knp-dust", 23, "Does Kanpur dust matter in the first weeks?", "We make no claim. Ask the surgeon about saline rinses and what to wear outdoors."),

  // ---- Lucknow
  faqRow(T, "lucknow", "rh-lko-exam", 20, "How far before exams or interviews should I plan?", "Many surgeons advise several months before an important date, because swelling lasts. The surgeon advises for you. {pending}"),
  faqRow(T, "lucknow", "rh-lko-parent", 21, "Can my parents come to the consultation?", "That is the surgeon's decision. Ask the facility how consent is taken and who may be present."),
  faqRow(T, "lucknow", "rh-lko-stay", 22, "Do I stay in Lucknow for the splint week?", "Many district patients do. A relative's house or a guest house near the facility works. Ask what the facility advises."),
  faqRow(T, "lucknow", "rh-lko-cold", 23, "What if I catch a cold after rhinoplasty?", "Tell the surgeon. A cold blocks a nose that is already blocked, and medicines need care. Ask in advance which medicines are fine."),
];

export const rhinoplasty: PlasticTopic = {
  kind: "pillar",
  treatment: {
    slug: T,
    seo: {
      title: "Rhinoplasty: Approaches, Recovery by Week, Risks",
      description: "How rhinoplasty works, rhinoplasty vs septoplasty, open vs closed, the splint week and swelling over a year, risks and what sets the price. Results vary.",
      cityTitle: "Rhinoplasty in {city}: Cost, Recovery, Risks",
    },
    content: rhinoplastyContent,
    display: rhinoplastyDisplay,
    deskWork: "About 2 weeks, to be confirmed by the reviewer",
    costPage: rhinoplastyCostPage,
    costFactors: rhinoplastyCostPage.factors,
    images: { hero: {}, operation: {}, recovery: {}, card: {} },
  },
  costLines: rhCosts,
  faqs,
  cityPages: [rhKanpur, rhLucknow],
};
