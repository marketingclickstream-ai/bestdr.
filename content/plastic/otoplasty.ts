import type { CityTreatmentPage, CostLine, FaqRow, NationalCostPage, PlasticTopic, TreatmentContent, TreatmentDisplay } from "../types";
import { NMC_SOURCE, cityBase, faqRow, line, surgicalIncludes } from "./shared";

// Otoplasty (ear pinning): hub, Delhi city page, cost lines, FAQs and the national cost page.
// Rules applied: consent and the role of a parent or guardian are stated as the surgeon's decision, made with the facility and the family.
// No age is named as a rule, no outcome promise, no counts, no before and after, no named facility or doctor, no price figure.
// Legal review is pending for the child consent wording (keyword plan, Phase C).
// TODO-VERIFY: the head band weeks, the age at which ears are near adult size, newborn ear moulding, the stay and the school return
// are general descriptions for the plastic surgeon reviewer to confirm. Marked {pending} where they are shown.

const T = "otoplasty";

export const otoplastyDisplay: TreatmentDisplay = {
  noPlates: true,
  operationHeading: "What ear pinning changes, and the ear shapes behind it",
  recoveryHeading: "Recovery calendar for otoplasty, with the head band weeks",
  recoveryTocLabel: "Recovery",
  timelineCaption: "What most people notice and do, by time since the operation.",
  risksHeading: "Risks and complications",
  riskGuideHref: "/otoplasty#risks",
  priceLabel: "Both ears, usual total bill",
  priceLinkText: "Other plans and add-ons",
  costMode: "options",
  costHeading: "What otoplasty costs, by plan",
  costCaption: "Each row is a separate case. Rows are not added together. Sample data / To be confirmed.",
  labels: {
    techniquesHeading: "How the ear is reshaped",
    techniquesCaption: "Plain differences between the methods. A surgeon decides which fits the ear and the age.",
    tocTechniques: "Methods",
  },
  tocLabels: { surgery: "What it changes", choices: "Ear shapes and methods" },
};

export const otoplastyContent: TreatmentContent = {
  dek: "Otoplasty (ear pinning) reshapes ears that stand out, or an ear that formed differently, so it sits closer to the head. It is done in children and adults. Who consents, and how a parent or guardian takes part, is the surgeon's decision. The [cost](/cost/otoplasty) depends on the method, the anaesthesia and the facility, and a head band is worn for weeks.",

  shortAnswers: [
    { q: "What does it change?", a: "The angle of the ear to the head, and sometimes the fold or the lobe. It does not change hearing.", href: "#surgery", linkText: "What it changes" },
    { q: "What about age and consent?", a: "A surgeon decides when it suits, how consent is taken and how a parent or guardian takes part.", href: "#age-consent", linkText: "Age and consent" },
    { q: "How long is recovery?", a: "A bandage for a few days, a head band for weeks, and a return to school or work in about a week {pending}.", href: "#recovery", linkText: "The calendar" },
    { q: "What sets the price?", a: "The method, one or both ears, the anaesthesia, the facility and the head band and reviews.", href: "#cost", linkText: "The cost lines" },
  ],

  operation: {
    lead: "Otoplasty is an operation on the cartilage of the ear. The surgeon usually makes a cut behind the ear, reshapes the cartilage or holds it back with stitches, and closes the cut. The ear then sits closer to the head. Anaesthesia depends on age and plan, and a surgeon decides whether it suits.",
    body: "The operation changes the position and fold of the ear. It does not change hearing, and it cannot make the two ears identical. Many people have it for how they feel about their ears, and a surgeon will ask what bothers you or your child. Read about the related [rhinoplasty](/rhinoplasty) and [blepharoplasty](/blepharoplasty) pages for other facial operations.",
    caption: "The ear fold and the angle between the ear and the head, the two things a surgeon plans around.",
    ask: "Which part of the ear is the problem, which method do you plan and how is consent taken?",
    how: [
      "Consultation: the surgeon examines both ears, asks what bothers you or your child, and takes photos for planning.",
      "Planning: the surgeon explains which part of the ear is the issue and what can change. Both ears are usually planned together.",
      "Fitness check: blood tests and an anaesthesia assessment, suited to age.",
      "Anaesthesia: local anaesthesia for some adults and older teens, and general anaesthesia for younger children and some adults. The anaesthetist explains the plan.",
      "Operation: a cut behind the ear, reshaping or stitching of the cartilage, and closure.",
      "Dressing and head band: a bandage or a soft dressing is placed, and a head band follows.",
      "Stay: many people go home the same day, and the surgeon sets yours {pending}.",
    ],
    whoItSuits: [
      { term: "Ears that stand out", text: "Children and adults whose ears project from the head, or whose fold is flat, and who or whose family want a change after a surgeon's assessment." },
      { term: "A decision the person shares", text: "A child who understands and shares the wish. A surgeon decides how the child's own view is heard and how a parent or guardian takes part." },
      { term: "Ears that have grown enough", text: "People whose ears have reached close to adult size. A surgeon advises on the age at which this is true." },
      { term: "Time to heal", text: "People who can manage a head band for weeks, a short break from sport and a few reviews." },
    ],
  },

  techniques: {
    lead: "A surgeon picks the method from the ear shape. These are plain differences. Ask which one your quote means.",
    rows: [
      { name: "Stitch-based reshaping", how: "Stitches placed through the cartilage create or deepen the fold and hold the ear back", often: "Ears with a fold that can be formed with stitches", ask: "How long do the stitches hold, and what is the chance the ear moves forward again?" },
      { name: "Cartilage reshaping", how: "The surgeon scores, thins or removes cartilage to form the fold, with or without stitches", often: "Firm cartilage, or ears that need more change", ask: "Will you cut or only stitch, and how does that change my recovery?" },
      { name: "Reduction of the conchal bowl", how: "Part of the bowl behind the ear opening is reduced so the ear sits closer to the head", often: "Ears that are deep or cupped", ask: "Does this part of the plan change how the ear looks from the front?" },
      { name: "Lobe correction", how: "A small change to a lobe that sticks out", often: "A prominent lobe in addition to the fold", ask: "Is the lobe part of my plan or a separate line?" },
    ],
    note: "Earlobe repair for a stretched or split piercing is a different, smaller procedure and is not covered here.",
  },

  extraSections: [
    {
      id: "age-consent",
      heading: "Age, consent and who decides",
      tocLabel: "Age and consent",
      lead: "Otoplasty is done in children as well as adults, so this question comes first. The answers below describe how the decision is made. They are not legal advice, and the surgeon and the facility decide the process.",
      paragraphs: [
        "A surgeon advises on whether an ear is ready for surgery. Ears reach close to adult size early in childhood, and the surgeon decides when it is sensible for a given person. {pending}",
        "Who gives consent, how a child's own wishes are heard and how a parent or guardian takes part in the consultation and on the day are the surgeon's decision, made with the facility and the family. Ask the facility for its process in writing before you book.",
        "A child who is teased may want surgery sooner. A child who does not mind may not want it at all. A surgeon may talk to the child alone for part of the visit, and may decide to wait if the child is not ready.",
        "In newborns, some ear shapes can be moulded with a soft splint in the first weeks of life. This is a separate approach, and a paediatrician or surgeon can say whether it applies. {pending}",
      ],
      note: { label: "Ask this", text: "How do you decide whether my child is ready, how is consent taken, and who will be allowed in the room at each step?" },
    },
    {
      id: "ear-shapes",
      heading: "Ear shapes a surgeon looks at",
      tocLabel: "Ear shapes",
      table: {
        caption: "What a surgeon examines, and what may be in the plan. A surgeon decides.",
        head: ["What you notice", "What a surgeon examines", "What may be in the plan"],
        rows: [
          ["The ear stands out from the head", "The angle of the ear to the head and the fold inside the rim", "Stitches or reshaping to set the ear back and form the fold"],
          ["The inner fold is flat", "Whether the fold (antihelix) is missing or shallow", "Forming a fold with stitches or cartilage work"],
          ["The bowl near the ear opening is deep", "Size and depth of the conchal bowl", "Reducing the bowl, with or without stitches"],
          ["The lobe sticks out", "Shape and position of the lobe", "A small lobe correction"],
          ["The two ears differ in size or shape", "Which ear is different, and how", "A plan that aims to improve balance, since ears cannot be made identical"],
          ["An ear that folded over or formed differently from birth", "Whether the shape needs a more complex plan", "A tailored plan, which may need another surgeon or step"],
        ],
      },
    },
    {
      id: "school-planner",
      heading: "Planning around school, exams and heat",
      tocLabel: "School planner",
      lead: "A head band worn for weeks fits some calendars better than others. General planning is below, and the surgeon sets the weeks. {pending}",
      table: {
        caption: "Calendar options and what to weigh. A surgeon advises for you.",
        head: ["Time of year", "In favour", "To weigh"],
        rows: [
          ["Winter break (about January)", "A cool head band, a few free weeks and no school to miss", "Smog or cold on some days, and a cold that blocks hearing and sleep"],
          ["Summer break (about May and June)", "Weeks free of school", "A head band in heat sweats, itches and can irritate the skin"],
          ["During term, away from exams", "No holiday wasted, and a quick return to class", "Missed lessons, and sport and playground knocks"],
          ["Near board exams or entrance tests", "None", "A bandage, pain medicines and a head band at exam time are better avoided"],
          ["Near a wedding or major event", "None", "Ears swell and the scar is pink for weeks, so allow months"],
        ],
      },
    },
    {
      id: "everyday",
      heading: "Everyday things that touch the ears",
      tocLabel: "Everyday things",
      bullets: [
        "Sleeping. Avoid lying on the ears at first. A neck pillow or a soft ring can help, and a head band stays on at night.",
        "Spectacles. Frames press on the back of the ear, so ask when they can be worn and how to pad them.",
        "Masks. A mask with ear loops pulls the ear forward. Ask about a mask that ties behind the head.",
        "Helmets. Ask when a helmet can be worn without pressure on the ears.",
        "Earphones and headsets. Over-ear and in-ear types press differently, so ask when each is fine.",
        "Hair care. Ask when you can wash your hair and how to avoid getting the dressing wet.",
        "Sport. Contact sport and swimming wait for several weeks, as the surgeon advises. {pending}",
        "Piercings and earrings. Ask when earrings can be worn again, and whether a piercing near the surgery needs care.",
      ],
    },
    {
      id: "questions",
      heading: "Questions for the surgeon before you commit",
      tocLabel: "Questions to ask",
      bullets: [
        "Which part of the ear is the problem, and which method do you plan?",
        "How is consent taken, and how does a parent or guardian take part?",
        "Local or general anaesthesia, and who gives it, especially for a child?",
        "How long is the head band worn, and what is the plan if it is uncomfortable?",
        "What is the chance the ears move forward again, and how is that managed?",
        "What does a touch-up cost, and when do you advise it?",
        "What signs of bleeding or infection should I report, and who do I call?",
        "Who will do the operation and who will be in the theatre?",
      ],
    },
  ],

  recovery: {
    lead: "A typical course is set out below, and your surgeon sets your own dates. These ranges are general and await the reviewer's confirmation. {pending}",
    body: "Expect a bandage for a few days, a head band worn day and night at first, and a bruised, swollen ear for about two weeks. Keep the ears clean and dry, avoid knocks and sleeping on the ears, and keep to the review dates.",
    highlights: [
      { pre: "about", big: "1 week", text: "Before many children return to school and adults to desk work" },
      { pre: "weeks", big: "4 to 6", text: "Of wearing a head band, day and night at first and then at night" },
      { pre: "months", big: "3 to 6", text: "Swelling settles and the scar fades behind the ear" },
    ],
    timeline: [
      { when: "Day 0 to 2", notice: "A bandage, a throbbing ear and tiredness", doThis: "Rest with your head raised. Take medicines as prescribed. Do not lie on the ears." },
      { when: "Day 3 to 7", notice: "Bandage replaced by a head band. Swelling and bruising. Itching under the band", doThis: "Wear the band as advised. Attend the first review. Keep ears dry." },
      { when: "Week 2", notice: "Swelling and bruising fading. Stitches settling", doThis: "Return to school or desk work if the surgeon agrees. No contact play." },
      { when: "Week 3 to 6", notice: "The ear still looks pink and a little swollen. Numb patches", doThis: "Head band at night, as advised. Care with spectacles and masks. Ask about sport." },
      { when: "Month 3", notice: "Most swelling down. The ears sit closer to the head", doThis: "Review visit. Ask about sport and swimming." },
      { when: "Month 6", notice: "The scar behind the ear fades", doThis: "Final review. Discuss any concern about shape only after the ears have settled." },
    ],
    grid: {
      cols: ["Wk 1", "Wk 2", "Wk 4", "Wk 6"],
      rows: [
        { label: "School or desk work", cells: [{ state: "n", text: "No" }, { state: "m", text: "Ask" }, { state: "y", text: "Yes" }, { state: "y", text: "Yes" }] },
        { label: "Head band", cells: [{ state: "y", text: "Day and night" }, { state: "y", text: "Day and night" }, { state: "m", text: "Night" }, { state: "m", text: "Night" }] },
        { label: "Spectacles and masks", cells: [{ state: "n", text: "No" }, { state: "m", text: "Ask" }, { state: "m", text: "Ask" }, { state: "y", text: "Yes" }] },
        { label: "Contact sport", cells: [{ state: "n", text: "No" }, { state: "n", text: "No" }, { state: "n", text: "No" }, { state: "m", text: "Ask" }] },
        { label: "Swimming", cells: [{ state: "n", text: "No" }, { state: "n", text: "No" }, { state: "n", text: "No" }, { state: "m", text: "Ask" }] },
      ],
    },
    closing: "Recovery varies, so keep the calendar flexible. Swelling and how long the head band is worn vary with the method, the age and the ear. Plan exams, events and travel months ahead.",
  },

  risks: {
    lead: "Every operation carries risk. People ask most about the ten below, which are described plainly with a question each. Your surgeon will go through the rest.",
    rows: [
      { risk: "Bleeding and a blood collection", means: "Blood under the skin of the ear, often with sudden pain and swelling, needing quick attention.", ask: "What signs should I report at once, and who do I call at night?" },
      { risk: "Infection of the skin or cartilage", means: "Redness, heat, pus, fever or severe pain. Cartilage infection needs prompt treatment.", ask: "Which signs should I report, and what antibiotics are in the plan?" },
      { risk: "Ears moving forward again", means: "One or both ears may drift back toward their old position.", ask: "What is the chance, and what is the plan if it happens?" },
      { risk: "Asymmetry", means: "The two ears may sit differently or have different shapes.", ask: "Which differences are normal, and what is the plan if one persists?" },
      { risk: "Over-correction or an unnatural shape", means: "An ear pinned too far back or with a sharp edge, which a surgeon tries to avoid.", ask: "How do you judge how far to set the ear back?" },
      { risk: "Scarring", means: "A scar behind the ear that may be raised, red or wide. Some people form keloid scars.", ask: "Do I have a keloid tendency, and what scar care do you advise?" },
      { risk: "Numbness and altered feeling", means: "Numb or tingling skin for weeks or months.", ask: "How long does it usually last?" },
      { risk: "Stitch problems", means: "A stitch may work its way to the surface or cause irritation.", ask: "How are stitch problems managed?" },
      { risk: "Pressure sores from the head band", means: "A band that is too tight can mark the skin.", ask: "How tight should the band be, and what do I do if it hurts?" },
      { risk: "Anaesthesia risks", means: "Nausea, breathing and heart events. Children need a suitable anaesthetist.", ask: "Who gives the anaesthesia, and are they used to children?" },
    ],
    alert: "Contact your surgeon without delay for sudden severe pain in one ear, rapid swelling, a bandage that is soaked with blood, fever, pus or spreading redness. Should you fail to reach the surgeon, go to the nearest emergency department.",
    wait: [
      "The surgeon says the ears have not grown enough, or the person is not ready",
      "A child does not share the wish and the surgeon advises waiting",
      "There is an active ear infection or skin condition near the ears",
      "A bleeding condition or blood thinners have not been discussed",
      "A big exam, event or sports match falls in the next weeks",
      "A strong keloid tendency has not been assessed",
      "Expectations are for ears that are identical",
      "You smoke or use nicotine and have not stopped as advised",
    ],
    tell: [
      "Past ear surgery, infection or injury",
      "Keloid or thick scars in the family or on your skin",
      "All medicines, supplements and blood thinners",
      "Bleeding or clotting conditions",
      "Allergies to anaesthetics, tape or antibiotics",
      "Sport, hobbies and school or work dates",
    ],
  },

  patientQuestions: [
    { q: "Who decides about age and consent?", href: "#age-consent", linkText: "Read: age and consent" },
    { q: "Which ear shape do I have?", href: "#ear-shapes", linkText: "Read: ear shapes" },
    { q: "When should we plan it?", href: "#school-planner", linkText: "Read: the school planner" },
    { q: "What about glasses and masks?", href: "#everyday", linkText: "Read: everyday things" },
    { q: "What should I ask?", href: "#questions", linkText: "Read: questions to ask" },
    { q: "What will it cost?", href: "#cost", linkText: "Read: the cost lines" },
  ],

  quoteProcess: [
    { title: "A coordinator takes your first call", text: "Phone or WhatsApp. Say where you live and what you want to ask. A first call carries no pressure to book." },
    { title: "A surgeon examines the ears", text: "In person, with the person who will have the operation. A surgeon decides how a child's view is heard and how a parent or guardian takes part." },
    { title: "The plan arrives in writing", text: "It states the method, the anaesthesia, the surgeon, the facility, the head band, the reviews and the price." },
    { title: "You compare calmly", text: "Weigh plans for the same method and anaesthesia. No package is paid before the examination." },
    { title: "Care after the operation", text: "A coordinator call, a first review in about a week and later reviews as the surgeon sets." },
  ],

  quoteChecks: [
    "state the method and whether both ears are included?",
    "say who gives the anaesthesia and whether it suits a child?",
    "show surgeon, anaesthesia and facility fees on separate lines?",
    "say whether the head band and dressings are included?",
    "give the cost of follow-up visits and of a touch-up?",
    "name the facility type and the length of stay?",
  ],

  extras: [
    "Lobe correction, if listed separately",
    "A second head band",
    "Pre-operative tests",
    "Medicines after discharge",
    "A touch-up, if advised",
    "Review visits beyond those in the plan",
    "GST, if shown separately",
    "A parent's travel and leave, or your own time off",
  ],

  insurance:
    "Insurance. Otoplasty for appearance is usually not covered by health policies. Read your policy wording and ask your insurer in writing before you book. Cashless approval is never promised here.",
  payment:
    "Payment. Methods and instalments depend on the facility and the lender and are not shown here. Pay nothing before an examination. {tbc}",

  // TODO-VERIFY: the reviewer opens each source and confirms the URL and the facts used. Legal review of the consent wording is pending.
  sources: [NMC_SOURCE],

  footnotes: [
    "Medical review is pending. A reviewer name, qualification and date will appear once a registered plastic surgeon signs off.",
    "Legal review is pending for the age and consent wording. The surgeon and facility decide the consent process.",
    "Head band weeks, the age at which ears are near adult size, newborn moulding and the school return are general and await the reviewer.",
    "No satisfaction or complication figure appears, because none has been verified.",
    "Insurance and payment wording is general and still to be confirmed.",
  ],
};

// ------------------------------------------------------------------ city page
// TODO-VERIFY: road times, station and airport names, metro lines, stays, school calendar dates and smog closure rules are general
// and must be checked against the partner facility and a dated public source before the page leaves noindex.

const otDelhi: CityTreatmentPage = {
  ...cityBase(T, "delhi"),
  seoTitle: "Otoplasty in Delhi: Cost, Age, Recovery, Risks",
  h1: "Otoplasty (ear pinning) in Delhi",
  metaDescription: "Otoplasty in Delhi: sample cost lines, age and consent as the surgeon decides, school calendar planning around smog and heat, and travel from Noida and Ghaziabad.",
  intro: "The sample total for otoplasty in Delhi depends on the method, the anaesthesia and the facility. No partner facility is confirmed in Delhi yet, so no price is shown. Many Delhi families ask first about the school calendar, the weeks of a head band in heat or smog, and how consent is taken for a child.",
  includes: { ...surgicalIncludes },
  facilities: {
    intro: "No partner facility is confirmed in Delhi yet. Otoplasty is usually a day-care operation. For a child, check that the facility has an anaesthetist used to children and a plan for a parent to stay close.",
    partners: [{ type: "Day-care facility with a theatre in Delhi (to be confirmed)", count: null }],
    accreditation: null,
    checks: [
      { check: "Anaesthetist for children", why: "Children need an anaesthetist used to their age and size", ask: "Who gives the anaesthesia, and how many children have they treated?" },
      { check: "A parent's place on the day", why: "A parent often stays at the facility", ask: "Where do we wait, and can a parent be with the child before and after?" },
      { check: "Consent process in writing", why: "Consent and a guardian's role are the surgeon's decision", ask: "Can I have the facility's consent process in writing before I book?" },
    ],
  },
  travel: {
    intro: "Families come to Delhi from Noida, Ghaziabad, Faridabad and Gurgaon. A child with a bandage or a head band should travel in a car with a parent, and a school bus is not suitable in the first week.",
    airport: "Indira Gandhi International Airport (to be verified)",
    station: "New Delhi, Old Delhi and Hazrat Nizamuddin stations (to be verified against the facility)",
    stayDays: "To be confirmed by the partner. A same-day return is usual for a day-care operation {pending}",
    metro: "A bandaged child on a crowded metro train risks a knock to the ear. A booked cab or a family car is easier. {sample} Distance to a facility is added once one is confirmed.",
    roadTimes: [
      { from: "Noida", time: "50 to 90 min", tip: "Plan the first review for a time outside the school run" },
      { from: "Ghaziabad", time: "60 to 100 min", tip: "A same-day return is workable with a parent in the car" },
      { from: "Faridabad", time: "50 to 90 min", tip: "Ask whether the review can be early in the morning" },
      { from: "Gurgaon", time: "50 to 90 min", tip: "Compare Gurgaon options before you decide" },
    ],
    privacyNote: "A child's health information belongs to the family. Ask the clinic how it stores photographs, and who may see them.",
    mapCaption: "Travel into Delhi from nearby towns, no building shown.",
  },
  localContext: [
    { text: "NEEDS REAL DATA: which Delhi facility, if any, will do otoplasty, and its type", source: "", asOf: "" },
    { text: "NEEDS REAL DATA: Delhi school winter and summer break dates for the coming year (public school calendar)", source: "", asOf: "" },
    { text: "NEEDS REAL DATA: winter air quality in Delhi (public CPCB records) and smog-day school closure rules", source: "", asOf: "" },
  ],
  usefulness: "For Delhi and NCR parents and adults who want to plan ear surgery around school breaks, exams, smog and heat, with notes on spectacles and masks, the school bus, and how consent and a guardian's role are the surgeon's decision.",
  localCopy: [
    "A Delhi family often plans otoplasty around the winter break or the long summer holiday.",
    "A head band in the Delhi summer is hot, and in winter the weeks after Diwali bring smog.",
    "Parents want to know how consent is taken for a child, and that is the surgeon's decision.",
  ],
  localNotes: [
    { heading: "Winter break or summer break", text: "The winter break is cooler for a head band, though smog and cold days can follow. The summer break is longer, but a head band in May and June is hot and itchy. Ask the surgeon which fits your child's plan. {pending}" },
    { heading: "Consent and the surgeon's decision", text: "How a child's own wishes are heard, and how a parent or guardian takes part, is the surgeon's decision, made with the facility and the family. Ask for the process in writing before you book." },
    { heading: "School bus and playground", text: "A knock to the ear in the first weeks can undo the repair. Keep a child off the school bus and out of contact play until the surgeon says it is fine. Tell the school what the child needs." },
    { heading: "Spectacles, masks and helmets", text: "Frames, mask loops and helmet straps press on the ear. Ask for a tie-behind mask, soft padding for spectacles and a date for a helmet. For an adult who rides a two-wheeler, plan a cab at first." },
  ],
  sections: [
    {
      heading: "Choosing between the winter and summer break",
      paragraphs: [
        "Delhi schools have a winter break around January and a long summer break in May and June. Both can work for otoplasty. In winter the head band is more comfortable, and a cap or scarf can cover it. Smog and cold can affect some days, and a cold with a blocked ear makes sleep hard. In summer, the break is longer, but a head band against sweaty skin itches and can cause rashes.",
        "Ask the surgeon how long the head band must be worn day and night, and when nights only are enough. Then match that to the break. Do not plan it close to board exams or entrance tests, because pain and a bandage get in the way. {pending}",
      ],
    },
    {
      heading: "Smog, dust and healing skin behind the ears",
      paragraphs: [
        "Delhi has heavy smog in winter, and dust in summer. The skin behind the ear is under a bandage and a head band. We make no claim about what the air does to healing. Ask the surgeon how to keep the area clean and dry and what to do if the band gets damp or the skin itches.",
        "On very polluted days, schools may close or hold lessons online. A child with a head band can attend online lessons more comfortably than a crowded classroom, but check with the school. {pending}",
      ],
    },
    {
      heading: "A conversation with the child",
      paragraphs: [
        "Many families come because a child has been teased. Some children want surgery badly, and others do not mind. The surgeon may talk to the child alone and may advise waiting if the child is not ready. Ask how the child's wishes will be heard. A child who is part of the decision usually copes better with the head band and the reviews.",
        "Prepare the child for what happens: a bandage, a head band, a few days of soreness and a break from sport. Tell them they can say if something hurts.",
      ],
    },
    {
      heading: "Adults in Delhi",
      paragraphs: [
        "Adults ask about otoplasty too. Many choose a quiet period at work, wear a cap or scarf over a head band outdoors and use work from home for the first days. Hair length helps, and spectacle wearers need padding. An adult decides consent themselves, and the surgeon explains what the operation can and cannot change.",
        "If you commute by metro, ask when a crowded car is fine for the ears. A knock in the first weeks is a risk.",
      ],
    },
    {
      heading: "Language, travel and a second opinion",
      paragraphs: [
        "Hindi, Punjabi and English are all used in Delhi clinics. Ask for the plan, the consent process and the head band instructions in the language you read most easily. Families from Noida, Ghaziabad and Faridabad should plan the first review for a time outside the school run, and ask whether a paediatrician near home can check the child.",
        "If a clinic quotes a plan before examining the ears, take a second opinion, and compare the same method and the same anaesthesia.",
      ],
    },
  ],
};

// ------------------------------------------------------------------ cost lines and cost page
const otCosts: CostLine[] = [
  line(T, 1, "Consultation and examination", "The surgeon and the facility"),
  line(T, 2, "Both ears, stitch-based method, usual total", "Anaesthesia and stay"),
  line(T, 3, "Both ears, cartilage reshaping, usual total", "Method and operating time"),
  line(T, 4, "Add-on: lobe correction", "Whether it is part of the plan"),
  line(T, 5, "Anaesthesia for a child", "Type of anaesthesia and the anaesthetist"),
  line(T, 6, "Head band and dressings", "What is included in the quote"),
  line(T, 7, "Follow-up visits and any touch-up", "Ask in writing before you book"),
];

export const otoplastyCostPage: NationalCostPage = {
  seoTitle: "Otoplasty Cost in India: Ear Pinning Price Factors",
  metaDescription: "How otoplasty cost is built: method, one or both ears, anaesthesia for a child or an adult, and follow-up. Ranges stay pending until real quotes are collected.",
  h1: "Otoplasty (ear pinning) cost in India",
  answer: "The total depends on the method, whether one or both ears are treated, the anaesthesia (which differs for a child and an adult), the facility and the follow-up. No price is published yet. Each range will be added with a date and the source it came from.",
  unit: "total",
  rangeHeading: "Sample totals by plan",
  rangeCaption: "Each plan is priced on its own line. Adding lines together gives a meaningless total.",
  planner: {
    heading: "Match the quote to the person having the operation",
    formula: "Total = surgeon + anaesthesia + facility + head band + reviews + touch-up allowance",
    steps: [
      "Ask whether the quote is for both ears or one, and which method it assumes.",
      "Ask which anaesthesia is planned and who gives it, and whether it is suited to the age.",
      "Ask whether the head band, dressings and review visits are in the price.",
      "Ask what a touch-up costs and when it would be advised.",
      "Find the lines the quote omits: GST, discharge medicines and tests before the operation.",
    ],
  },
  extraSections: [
    {
      id: "child-or-adult",
      heading: "Child or adult: how the quote changes",
      tocLabel: "Child or adult",
      lead: "The same operation is priced differently for a young child and for an adult, mostly because of anaesthesia and staffing. The table shows where.",
      table: {
        caption: "Differences between a child's and an adult's quote.",
        head: ["Line", "Child", "Adult"],
        rows: [
          ["Anaesthesia", "Usually general, with an anaesthetist used to children", "Local, or sometimes general"],
          ["Facility", "A unit set up for children, with a place for a parent", "A day-care unit or minor theatre"],
          ["Consent papers", "A process the surgeon and facility set for a child and a parent or guardian", "The adult's own consent"],
          ["Head band", "A soft band, sometimes more than one for sleep and for school", "A band worn as advised"],
          ["Reviews", "Often timed around school and a parent's leave", "Timed around work"],
        ],
      },
    },
  ],
  factors: [
    { factor: "One ear or both", why: "Both ears is the usual plan, and a single ear is priced differently." },
    { factor: "Method", why: "Stitch-based and cartilage reshaping methods take different time and skill." },
    { factor: "Age and anaesthesia", why: "Local anaesthesia and general anaesthesia are priced differently, and children are usually planned under general." },
    { factor: "Lobe or bowl work", why: "Extra steps on the lobe or the bowl add time." },
    { factor: "Unit for children", why: "A child often needs a unit with paediatric staff and a parent's space, which affects the facility fee." },
    { factor: "Head band and reviews", why: "The band, and whether review visits are in the quote or billed each time." },
    { factor: "Surgeon", why: "A surgeon's experience with ears, and with children, shapes the fee. We rank no one." },
    { factor: "City", why: "Local costs and the kind of day-care unit affect the fee." },
  ],
  notIncluded: [
    "Lobe correction, if listed separately",
    "A second head band",
    "Tests before the operation",
    "Medicines after discharge",
    "A touch-up if an ear drifts forward",
    "Extra review visits after the first few",
    "GST, where it is a separate line",
    "A parent's travel and leave, or your own time off",
  ],
  compareQuotes: [
    "Have each facility state the method, the anaesthesia and whether both ears are covered.",
    "Set totals side by side only for one method and one type of anaesthesia.",
    "Learn who the operating surgeon is, and look the name up on the public register.",
    "Get the consent process in writing, along with the price of a touch-up.",
    "Wait for the examination before handing over any money.",
  ],
  insurance: "Otoplasty for appearance is usually not covered by health policies. Read your policy wording and ask your insurer in writing.",
  payment: "A parent paying for a child may be given a plan by the facility or a lender. Neither is listed here, and the GST wording is still open. {tbc}",
  method: "Ear pinning has no published price at the moment. A line goes live after it is backed by three dated quotes from separate sources, and it will say how it was built. Figures from other sites play no part, and prices from one city are not carried to another.",
  faqs: [
    { q: "What moves the price of ear pinning the most?", a: "The method, the anaesthesia (which differs for children and adults), the unit and the reviews. Ask for each as a line." },
    { q: "Is it cheaper to treat one ear?", a: "A single ear is a smaller operation, though most plans cover both ears, so compare the same scope." },
    { q: "Will a health policy pay for it?", a: "Usually not, when the reason is appearance. Read your policy and write to the insurer." },
    { q: "Is a child's anaesthesia more expensive?", a: "It can be, because a child usually needs general anaesthesia and an anaesthetist used to children. Ask for it as a line." },
    { q: "Do the head band and reviews come with the price?", a: "Only when the quote lists them. Ask for the list in writing." },
    { q: "Can the cost be spread out?", a: "Some lenders and facilities allow it, on terms this page does not show." },
  ],
  sources: [NMC_SOURCE],
};

// ------------------------------------------------------------------ FAQs (10 on the hub, 4 on the city page)
const faqs: FaqRow[] = [
  faqRow(T, null, "ot-age", 1, "At what age can otoplasty be done?", "A surgeon advises. Ears reach close to adult size early in childhood, and the surgeon decides when it is sensible for a given person. {pending}"),
  faqRow(T, null, "ot-consent", 2, "Who gives consent for a child?", "How consent is taken, how a child's own wishes are heard and how a parent or guardian takes part are the surgeon's decision, made with the facility and the family. Ask for the process in writing."),
  faqRow(T, null, "ot-hearing", 3, "Does ear pinning affect hearing?", "It changes the position and fold of the ear, and does not change the ear canal or the inner ear. The surgeon will confirm this for your plan."),
  faqRow(T, null, "ot-band", 4, "How long is the head band worn?", "Often day and night for a period and then at night. The surgeon sets the weeks. {pending}"),
  faqRow(T, null, "ot-school", 5, "When can my child return to school?", "Often after about a week, with no contact play for weeks. The surgeon advises. {pending}"),
  faqRow(T, null, "ot-back", 6, "Can the ears move forward again?", "It can happen. Ask the surgeon what the chance is for the method planned and what the plan is if it occurs."),
  faqRow(T, null, "ot-scar", 7, "Where is the scar?", "Behind the ear, usually hidden from the front. It fades over months, and how much varies. Tell the surgeon if you or your family form keloid scars."),
  faqRow(T, null, "ot-hi-kharcha", 8, "Ear pinning ka kharcha kis par depend karta hai?", "Method, ek kaan ya dono, anaesthesia (bachon aur badon mein alag), facility aur follow-up. Quote mein har line likhwa lein. Dekhein [cost page](/cost/otoplasty)."),
  faqRow(T, null, "ot-hi-umar", 9, "Kaan ki surgery ke liye sahi umar kya hai?", "Yeh surgeon dekhkar batate hain. Consent kaise liya jayega aur mata-pita ya guardian kaise shamil honge, yeh bhi surgeon ka faisla hota hai."),
  faqRow(T, null, "ot-hi-school", 10, "Bacche ko school kab bhej sakte hain?", "Aam taur par kareeb ek hafta baad, lekin kai hafte tak khel-kood aur dhakka-mukki se bachana hota hai. Surgeon tay karta hai. {pending}"),

  // ---- Delhi
  faqRow(T, "delhi", "ot-del-break", 20, "Winter break or summer break for a head band?", "Winter is cooler, but smog and cold can affect some days. Summer is longer, and a head band in May and June is hot. Ask the surgeon which suits your child."),
  faqRow(T, "delhi", "ot-del-bus", 21, "Can my child take the school bus in the first weeks?", "Usually not. A knock to the ear can undo the repair. Ask the surgeon when the bus and contact play are fine."),
  faqRow(T, "delhi", "ot-del-mask", 22, "What mask can we use in smog with healing ears?", "Ear-loop masks pull the ears forward. Ask the surgeon about a mask that ties behind the head."),
  faqRow(T, "delhi", "ot-del-adult", 23, "I am an adult in Delhi. Do I decide for myself?", "An adult gives their own consent. The surgeon still explains what the operation can change and what it cannot."),
];

export const otoplasty: PlasticTopic = {
  kind: "pillar",
  treatment: {
    slug: T,
    seo: {
      title: "Otoplasty: Ear Pinning Age, Recovery, Risks",
      description: "How ear pinning works, age and consent as the surgeon decides, ear shapes, the head band weeks, school planning, risks and what sets the price.",
      cityTitle: "Otoplasty in {city}: Cost, Recovery, Risks",
    },
    content: otoplastyContent,
    display: otoplastyDisplay,
    deskWork: "About 1 week, to be confirmed by the reviewer",
    costPage: otoplastyCostPage,
    costFactors: otoplastyCostPage.factors,
    images: { hero: {}, operation: {}, recovery: {}, card: {} },
  },
  costLines: otCosts,
  faqs,
  cityPages: [otDelhi],
};
