import type { TreatmentContent, TreatmentDisplay } from "./types";

// Medical copy for liposuction. Written in our own words from the founder's source notes
// (14-source-data/kalosa-liposuction-facts.md) and the outrank plan (15-outrank-strategy).
// Everything here is pending surgeon review: no reviewer is attached, so reviewedBy / lastReviewed
// are not published. Figures are sample data. No technique brand names, no outcome percentages,
// no counts and no claims about any clinic or doctor.

export const liposuctionDisplay: TreatmentDisplay = {
  titleEm: "(body contouring)",
  heroPlate: "areas",
  heroPlateCaption: "Areas where liposuction is commonly planned. A surgeon marks the exact zones on you.",
  operationHeading: "What the operation involves: tiny cuts, a thin tube and a plan",
  operationPlate: "cannula",
  operationCaptions: [{ title: "Before", text: "Fat sits in layers under the skin" }, { title: "During", text: "A thin tube removes it through tiny cuts" }],
  recoveryHeading: "Recovery calendar: day 0 to month 12",
  riskGuideHref: "/liposuction#risks",
  priceLabel: "One area, usual total bill",
  priceLinkText: "Other areas and techniques",
  costMode: "options",
  costHeading: "What it costs, area by area",
  costCaption: "Price table by area and technique. Each row is a separate case, so the rows are not added together.",
  tocLabels: { surgery: "The operation", choices: "Areas and techniques" },
};

export const liposuctionContent: TreatmentContent = {
  dek: "Liposuction removes pockets of fat that diet and exercise did not shift, from areas such as the abdomen, flanks, thighs, arms or chin. It is not weight loss. Here is what [liposuction](/liposuction) involves, what changes the price area by area, how recovery runs, and how we check a surgeon. The [national cost factors](/cost/liposuction) are on their own page.",

  shortAnswers: [
    {
      q: "Is liposuction a way to lose weight?",
      a: "No. It reshapes stubborn pockets of fat in one or more areas. It is not a treatment for obesity, and the surgeon will ask you to be near a steady weight first.",
      href: "#surgery",
      linkText: "What it does",
    },
    {
      q: "What will it cost?",
      a: "It depends on the area, the number of areas and the technique, so the price is shown area by area, not as one headline figure. The ranges are to be confirmed.",
      href: "#cost",
      linkText: "The price table",
    },
    {
      q: "How long until I am back to normal?",
      a: "Most people rest for a few days, return to desk work within one to two weeks and build up exercise over four to six weeks. The contour keeps settling for months.",
      href: "#recovery",
      linkText: "The calendar",
    },
    {
      q: "Who operates, and who checks them?",
      a: "No surgeon is listed yet. We list one only after registration and accreditation are checked.",
      href: "#choose",
      linkText: "The checks",
    },
  ],

  operation: {
    lead: "Liposuction takes out localised fat through tiny cuts, using a thin tube. It shapes the body. It does not treat weight, and fat cells left in untreated areas can still grow if weight is gained.",
    body: "The surgeon marks the areas while you stand, then you have anaesthesia, which may be local with sedation or general depending on how much is being treated. A salt-water solution with a numbing medicine is often put into the fat first, so there is less bleeding and discomfort. Fat is then loosened and drawn out, the shape is checked from several sides, and the cuts are closed. You wear a compression garment afterwards. [Chest fat in men](/learn/liposuction-for-men) can be treated this way too, and when the cause is gland tissue rather than fat, the plan is different: see [gynecomastia surgery](/gynecomastia-surgery).",
    caption: "Fat removed through tiny cuts with a thin tube.",
    ask: "Which areas will you treat, which technique and why, how much fat do you expect to remove, and what is the plan if one side needs touching up later?",
    how: [
      "Consultation: history, medicines, examination, and tests the surgeon asks for. An anaesthesia fitness check follows.",
      "Planning: the surgeon marks the areas standing up and agrees the goal with you, including what liposuction cannot do.",
      "Anaesthesia: local with sedation for a small area, general for larger or several areas. The surgeon and the anaesthetist decide.",
      "The operation: tiny cuts, a solution into the fat, loosening and removal of fat, then a check of the contour and closure.",
      "Straight after: a compression garment, a short stay in recovery, and written instructions. Some people go home the same day and some stay a night, depending on the areas and the anaesthesia.",
      "Follow-up: a first review in the first week, usually around day 3 to 5, then more visits as the surgeon plans.",
    ],
    whoItSuits: [
      { term: "Often suits", text: "Adults in good general health, near a steady weight, with firm skin and a pocket of fat that has not moved with diet and exercise." },
      { term: "Needs a different plan", text: "Loose skin or a stretched abdominal wall is not fixed by liposuction. See [liposuction or tummy tuck](/learn/liposuction-vs-tummy-tuck)." },
      { term: "Often asked to wait", text: "A recent big change in weight, smoking, pregnancy or plans for it, and some health conditions. The surgeon decides after an examination." },
      { term: "Not a substitute for", text: "Weight loss, or a treatment for obesity. See [liposuction is not weight loss](/learn/liposuction-vs-weight-loss)." },
    ],
  },

  areas: {
    lead: "Surgeons commonly treat the abdomen, waist and flanks, thighs and hips, buttocks, the bra-strap area of the back, the upper arms, the chest, and the chin and neck. Each area behaves differently, and that is why the price depends on the area.",
    body: "How many areas are treated, how much fat sits in each, and how elastic the skin is all change the plan. A small, firm-skinned area may need one short session. Several areas at once take longer, need a larger anaesthetic plan and cost more. Read [which body areas liposuction can treat](/learn/liposuction-body-areas) for a closer look at each one.",
    rows: [
      { area: "Abdomen", usual: "Often the largest single area", depends: "How far the fat extends, and whether loose skin or weak muscle is the real issue" },
      { area: "Waist and flanks", usual: "Often paired with the abdomen", depends: "Number of zones treated, front to back" },
      { area: "Thighs and hips", usual: "Inner, outer or both", depends: "Volume of fat, and skin tone after the fat is removed" },
      { area: "Upper arms", usual: "Usually a smaller area", depends: "Skin elasticity: loose skin may need more than liposuction" },
      { area: "Back, bra-strap area", usual: "Treated in zones", depends: "Number of zones and the depth of fat" },
      { area: "Chest in men", usual: "Fat only, or with gland removal", depends: "Whether it is fat or gland: see [gynecomastia surgery](/gynecomastia-surgery)" },
      { area: "Chin and neck", usual: "Small area, short operation", depends: "Technique, and whether skin or muscle under the chin is also a cause" },
    ],
    note: "Which areas, how many and in what order is a surgeon's decision after an examination. A photo or a phone call cannot settle it.",
  },

  techniques: {
    lead: "Several techniques exist, and a surgeon may combine them. The choice depends on the area, the amount of fat, the skin, earlier procedures and what you want. No technique suits everyone, and this page does not rank them.",
    rows: [
      { name: "Tumescent", how: "A salt-water solution with a numbing medicine and a medicine that narrows blood vessels is put into the fat, then the fat is drawn out.", often: "The base of most plans; used with the others", ask: "How much solution and what limit do you keep for one session?" },
      { name: "Ultrasound-assisted", how: "Sound energy loosens fat before it is drawn out. A surgeon may choose it for denser fat or for finer shaping.", often: "Denser areas such as the back or the male chest", ask: "Why this technique for my area, and does it change the price?" },
      { name: "Power-assisted", how: "The tube moves with a small motor, so the surgeon makes shorter strokes.", often: "Larger volumes, or repeat work", ask: "Does it change the time under anaesthesia?" },
      { name: "Laser-assisted", how: "Laser energy warms and loosens fat before removal, and some surgeons use it to tighten skin slightly.", often: "Small areas and some neck or chin plans", ask: "What does it add over the standard approach in my case?" },
      { name: "Traditional suction", how: "The surgeon moves a thin tube by hand to break up and draw out fat.", often: "Many routine cases", ask: "Is this enough for the areas I have chosen?" },
    ],
    note: "Newer does not mean better for you. Ask the surgeon to explain the choice and what it does to the quote. See [types of liposuction](/learn/types-of-liposuction).",
  },

  compare: {
    tummyTuckLead: "Liposuction and a tummy tuck solve different problems. Liposuction removes fat. A tummy tuck removes loose skin and tightens the abdominal muscle wall. Some people need one, some need both, and a surgeon decides after an examination.",
    tummyTuck: [
      { feature: "What it changes", lipo: "Fat in a chosen area", tuck: "Loose skin and a stretched muscle wall" },
      { feature: "Cuts", lipo: "Tiny cuts, a few millimetres", tuck: "A long cut low on the abdomen, and one around the navel" },
      { feature: "Skin", lipo: "Does not remove loose skin", tuck: "Removes extra skin" },
      { feature: "Recovery", lipo: "Usually shorter", tuck: "Usually longer, with more restriction early on" },
      { feature: "Often chosen when", lipo: "Skin is firm and fat is the main issue", tuck: "Skin is loose or muscles have parted, for example after pregnancy or a large weight change" },
    ],
    nonSurgicalLead: "Several non-surgical options are described for small pockets of fat. They are different from surgery, and this page has no comparison data on how much each changes in how many sessions.",
    nonSurgical: [
      { name: "Fat freezing", text: "A device cools the skin over a pocket of fat. It is done in sessions and no cuts are made." },
      { name: "Radiofrequency", text: "A device warms the tissue in sessions, and is also used for skin tightening." },
      { name: "Laser and ultrasound devices", text: "Energy devices used over the skin in sessions." },
      { name: "Fat-dissolving injections", text: "Injections into a small pocket, such as under the chin, usually in more than one session." },
      { name: "Muscle stimulation", text: "A device that makes muscles contract, sometimes combined with other tools." },
    ],
    nonSurgicalNote: "Each usually changes less per session than surgery, and results vary between people. Ask any provider for written details of what was done for people like you, how many sessions are planned and what each costs. See [fat freezing, laser, RF or liposuction](/learn/liposuction-vs-non-surgical-fat-reduction).",
    whoShouldWait: [
      "Your weight is still changing",
      "You are pregnant or planning a pregnancy soon",
      "You smoke and have not been able to stop",
      "A health condition is not under control",
      "You expect liposuction to replace weight loss",
    ],
  },

  recovery: {
    lead: "Recovery runs in stages, and the contour keeps improving for months. These are typical timings for an uncomplicated operation, {pending} and your surgeon's advice overrides this page.",
    body: "Swelling and bruising are normal at first and hide the final shape. The compression garment helps the skin settle against the new contour. You will usually have a review in the first week, and more visits afterwards. Plan leave and travel around the first review, not around the operation date. The [week by week recovery guide](/learn/liposuction-recovery-timeline) goes into more detail.",
    highlights: [
      { pre: "Rest for", big: "2 to 3", post: "days", text: "Swelling, soreness and bruising are usual" },
      { pre: "Review at", big: "day 3 to 5", text: "The first check, and a garment fit" },
      { pre: "Back to routine in", big: "2 to 4", post: "weeks", text: "Desk work often sooner, if the surgeon agrees" },
      { pre: "Shape settles by", big: "6 to 12", post: "months", text: "Swelling fades slowly, and skin adjusts" },
    ],
    timeline: [
      { when: "Day 0 to 3", notice: "Soreness, swelling, bruising, fluid leaking from the cuts, tiredness", doThis: "Rest, short walks in the house, garment on, medicines as advised, plenty of fluids" },
      { when: "Week 1", notice: "Swelling peaks and bruises change colour; the first review", doThis: "Light movement; the surgeon may allow a shower and desk work soon after" },
      { when: "Weeks 2 to 4", notice: "Less soreness, uneven swelling, numb or tight skin", doThis: "Gradual return to routine; light massage only if the surgeon advises it" },
      { when: "Weeks 4 to 6", notice: "Comfort improves, firmness may remain", doThis: "Step up activity as the surgeon allows; heavy lifting and hard training after approval" },
      { when: "Months 2 to 3", notice: "The contour is clearer; some swelling remains", doThis: "Normal exercise if approved; garment as the surgeon sets" },
      { when: "Months 6 to 12", notice: "Final shape; scars fade and soften", doThis: "Keep a steady weight; ask about any area that looks uneven before deciding on touch-ups" },
    ],
    grid: {
      cols: ["Day 1 to 3", "Week 1", "Week 2", "Weeks 4 to 6"],
      rows: [
        { label: "Desk work", cells: [{ state: "n", text: "No" }, { state: "m", text: "Ask" }, { state: "y", text: "Often" }, { state: "y", text: "Yes" }] },
        { label: "Driving", cells: [{ state: "n", text: "No" }, { state: "n", text: "No" }, { state: "m", text: "Ask" }, { state: "y", text: "Yes" }] },
        { label: "Walking", cells: [{ state: "y", text: "Short" }, { state: "y", text: "Yes" }, { state: "y", text: "Yes" }, { state: "y", text: "Yes" }] },
        { label: "Gym", cells: [{ state: "n", text: "No" }, { state: "n", text: "No" }, { state: "n", text: "No" }, { state: "m", text: "Ask" }] },
        { label: "Flying", cells: [{ state: "n", text: "No" }, { state: "n", text: "No" }, { state: "m", text: "Ask" }, { state: "y", text: "Often" }] },
      ],
    },
    closing: "Bring up any pain that is getting worse, a fever, a hot or red area, a swollen calf or breathlessness with your doctor straight away. Do not wait for the next visit.",
  },

  risks: {
    lead: "Every operation carries risk. These are the ones people most often ask about, in plain words, and what you can do or ask. This is not a complete list, and the surgeon will go through yours.",
    rows: [
      { risk: "Bruising and swelling", means: "Common, and expected for weeks. They hide the final shape.", ask: "How long should I expect it, and what is normal for my areas?" },
      { risk: "Numbness or changed feeling", means: "Often temporary. A patch can stay different for longer.", ask: "How long can this last in my area?" },
      { risk: "Uneven contour or lumps", means: "The surface can look uneven, and one side can differ from the other.", ask: "How do you check the shape during the operation, and when is a touch-up considered?" },
      { risk: "Fluid collection (seroma)", means: "Fluid can gather under the skin and may need draining.", ask: "How will it be checked, and who drains it?" },
      { risk: "Bleeding or a blood collection (haematoma)", means: "Uncommon. May need treatment.", ask: "What is your plan if it happens?" },
      { risk: "Infection", means: "Possible after any cut. Early treatment matters.", ask: "Which signs should make me call, and who do I call?" },
      { risk: "Loose skin", means: "Skin may not tighten fully after fat is removed, especially with low elasticity.", ask: "Will my skin tighten, and what is the plan if it does not?" },
      { risk: "Scars and marks", means: "Tiny scars remain. Colour changes can occur.", ask: "Where will the cuts be, and how do you place them?" },
      { risk: "Clots and anaesthesia risks", means: "Rare, but serious when they happen. Larger operations raise the risk.", ask: "What do you do to lower the risk of clots, and what are my own risk factors?" },
      { risk: "A second operation", means: "Sometimes needed to improve the shape.", ask: "Is a second operation charged, and for how long after the first?" },
    ],
    alert: "Call your doctor straight away for a fever, spreading redness or heat, a swollen painful calf, chest pain, breathlessness, heavy bleeding or pain that keeps getting worse. If you cannot reach the doctor, go to the nearest emergency department. See [liposuction risks](/learn/liposuction-risks).",
    wait: [
      "Your weight is still changing",
      "You smoke and have not stopped",
      "A health condition or a medicine needs adjusting first",
      "You are pregnant, or planning a pregnancy soon",
      "You have had a recent illness or infection",
    ],
    tell: [
      "All your medicines and supplements, including blood thinners",
      "Earlier operations and any problems with anaesthesia",
      "Any history of blood clots, in you or your family",
      "Allergies, especially to medicines or dressings",
      "Smoking, alcohol, and any steroid or supplement use",
    ],
  },

  patientQuestions: [
    { q: "I have tried gym and diet for years. Is this the next step?", href: "#surgery", linkText: "Read: the operation" },
    { q: "Will I be able to work from home the next day?", href: "#recovery", linkText: "Read: recovery calendar" },
    { q: "Can two or three areas be done together?", href: "#areas", linkText: "Read: areas and techniques" },
    { q: "Will the fat come back?", href: "#faq", linkText: "Read: questions" },
    { q: "Is it better to have a tummy tuck?", href: "#compare", linkText: "Read: tummy tuck and other options" },
    { q: "Does a men's chest or love-handle plan differ?", href: "#areas", linkText: "Read: areas and techniques" },
  ],

  quoteProcess: [
    { title: "You talk to a coordinator", text: "In person, by WhatsApp or by phone, whichever you choose. Tell us which areas bother you. No pressure to book." },
    { title: "A surgeon examines you", text: "Areas, technique and anaesthesia are decided in person, not by phone or from a photo." },
    { title: "The hospital writes the cost", text: "The surgeon, anaesthesia and facility fees, plus garments, tests and follow-up visits, listed one by one." },
    { title: "You pick the date", text: "The surgeon and the anaesthetist advise on day care or a night's stay." },
    { title: "After the operation", text: "A check-in from us on day 1, a compression garment, review visits and a staged return to routine." },
  ],

  quoteChecks: [
    "list the areas treated and the technique?",
    "list the surgeon, anaesthesia and facility fees separately?",
    "say whether the compression garment is included?",
    "write down the number of follow-up visits?",
    "say whether a second operation is included, and for how long?",
  ],

  extras: [
    "Tests before surgery",
    "Compression garments (and a spare)",
    "Medicines for the first days",
    "Follow-up visits",
    "Treating a complication",
    "A second operation or touch-up",
    "An overnight stay, if the surgeon asks",
    "Your attendant's stay and travel",
  ],

  insurance:
    "**Insurance.** Liposuction is usually treated as cosmetic, and most policies do not pay for cosmetic surgery. Read your policy, ask your insurer in writing before you book, and keep the estimate. We do not promise cashless approval.",
  payment:
    "**Payment.** Cash, cards and instalments through a lender may be possible. Terms and fees depend on the hospital and the lender and are not shown here. {tbc}",

  sources: [
    { label: "National Medical Commission: public register of doctors", href: "https://www.nmc.org.in/" },
  ],

  footnotes: [
    "Medical review is pending. The reviewer, qualification and review date shown are sample data and will be replaced by the real ones.",
    "The ranges are working figures from one source. They still have to be confirmed in writing for Bestdoctorsin and the partner hospital, and each will carry a date.",
    "Typical timings for an uncomplicated operation, to be confirmed by the reviewer. Your surgeon's advice overrides this page.",
    "Insurance wording is general and is to be confirmed by the reviewer. Your policy document decides.",
    "Published studies on technique, risk and recovery will be read and cited here after the reviewer opens and checks each one. None is cited yet.",
  ],
};
