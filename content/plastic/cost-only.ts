import type { CostLine, NationalCostPage, PlasticTopic } from "../types";
import { NMC_SOURCE, line } from "./shared";

// Cost-only topics: national cost pages at /cost/<slug>. No hub, no city pages, content null.
// Rules applied: no price figure, no range, no invented statistic. Every price line is null with "Sample data / To be confirmed".
// Each page carries its own decision table or staging table in extraSections so that it is not a template with a swapped noun.
// Links go to /cost/<slug> for other cost-only topics and to the hub for the six pillars.
// TODO-VERIFY: every timing, staging gap and scar-placement description is a general statement for the plastic surgeon reviewer to confirm.
// Legal review is pending for scar revision wording that touches injections and laser (kept generic, no product names).

// ------------------------------------------------------------------ arm lift
const ARM = "arm-lift";

const armCosts: CostLine[] = [
  line(ARM, 1, "Consultation and examination", "The surgeon and the facility"),
  line(ARM, 2, "Short-scar arm lift, both arms, usual total", "Amount of loose skin and anaesthesia"),
  line(ARM, 3, "Standard arm lift, both arms, usual total", "Scar length from armpit to elbow and the stay"),
  line(ARM, 4, "Extended arm lift, both arms, usual total", "Scar carried onto the side of the chest"),
  line(ARM, 5, "Add-on: liposuction of the arms", "Whether fat is removed first"),
  line(ARM, 6, "Compression sleeves and dressings", "How many sleeves and what is included"),
  line(ARM, 7, "Follow-up visits and medicines", "Ask in writing before you book"),
];

const armCostPage: NationalCostPage = {
  seoTitle: "Arm Lift Cost in India: Scar Length and Total Bill",
  metaDescription: "How arm lift (brachioplasty) cost is built: how far the scar runs, one or both arms, liposuction and sleeves. No range is shown until dated quotes exist.",
  h1: "Arm lift (brachioplasty) cost in India",
  answer: "An arm lift removes loose upper arm skin through a scar along the inner arm, so the total mostly follows how long that scar must be, whether fat is also removed and whether the quote covers one arm or both. Nothing is priced yet, and a range will come with its date and source.",
  unit: "total",
  rangeHeading: "Sample totals by scar length",
  rangeCaption: "Lines are separate cases, so they cannot be summed.",
  planner: {
    heading: "Ask for the scar before you ask for the price",
    formula: "Total = surgeon + anaesthesia + theatre + (short, standard or extended plan) + liposuction if any + sleeves + follow-up",
    steps: [
      "Ask the surgeon to mark how far the scar runs, from the elbow toward the armpit and onto the chest.",
      "Ask whether the quote covers both arms in one sitting or one arm at a time.",
      "Ask whether liposuction of the arms is part of the plan or a separate line.",
      "Ask how many compression sleeves are in the price.",
      "Ask whether the quote lists day care or a night in hospital.",
    ],
  },
  extraSections: [
    {
      id: "scar-length",
      heading: "How far the scar runs, and what that does to the bill",
      tocLabel: "Scar length",
      lead: "The name of the operation says little. What counts is how much skin is removed and how long the cut must be. The table lists plain differences. A surgeon decides for you. {pending}",
      table: {
        caption: "General differences between plans. A surgeon examines you first.",
        head: ["Plan", "Where the scar runs", "Usual situation", "What to ask"],
        rows: [
          ["Short scar", "A short cut hidden in the armpit", "Mild loose skin near the armpit", "Will a short scar leave skin loose near the elbow?"],
          ["Standard", "Along the inner arm from the armpit toward the elbow", "Moderate to large loose skin on the upper arm", "How visible is the scar when I raise my arm or wear a sleeveless blouse?"],
          ["Extended", "Along the arm and onto the side of the chest", "Loose skin that continues down the side of the chest", "Is the chest scar within my usual blouse or bra line?"],
          ["With liposuction first", "Small cuts for fat removal, then the skin cut", "Skin laxity with a fatty layer on top", "Is liposuction a separate line, and does it change my recovery?"],
        ],
      },
    },
    {
      id: "sleeves-and-blouses",
      heading: "Sleeves, blouses and the first weeks",
      tocLabel: "Sleeves and blouses",
      paragraphs: [
        "A scar on the inner arm shows when you raise your arm or wear a sleeveless blouse or a short-sleeved kurta. Ask the surgeon how the scar will look in the clothes you wear most. Plan to wear loose, long sleeves while healing, and plan tailoring after the swelling settles.",
        "Ask how many compression sleeves are in the price, and whether the first pair fits again once swelling falls. Washing a sleeve daily in the hot months needs a second pair. {pending}",
        "Lifting a child, a bucket or a gas cylinder strains the wound. Decide who does these tasks for several weeks, and ask the surgeon how long.",
      ],
    },
    {
      id: "weight-first",
      heading: "When the arms come after weight loss",
      tocLabel: "After weight loss",
      paragraphs: [
        "Arm skin often hangs after large weight loss. Many surgeons want weight to be steady for a period before the operation, because a further change alters the result. If you also have loose skin on the abdomen or thighs, ask for a staged plan. See [tummy tuck](/tummy-tuck), the [body lift cost page](/cost/body-lift) and the [thigh lift cost page](/cost/thigh-lift).",
        "Ask whether the surgeon wants blood tests for haemoglobin and protein levels first, because healing depends on them. {pending}",
      ],
    },
  ],
  factors: [
    { factor: "Scar length and skin removed", why: "A short scar in the armpit and a scar that runs onto the chest are different operations with different times." },
    { factor: "One arm or both", why: "Most quotes cover both arms, so check which one the total is for." },
    { factor: "Liposuction first", why: "Removing arm fat before the skin cut is priced on top of the skin work." },
    { factor: "Anaesthesia", why: "General anaesthesia costs more than local with sedation, and the surgeon decides which is fit." },
    { factor: "Facility and stay", why: "A day-care unit and a hospital price the theatre and room differently." },
    { factor: "Sleeves and follow-up", why: "Sleeves, dressings and review visits may be separate lines." },
    { factor: "Staging with other lifts", why: "A combined plan with a tummy tuck or thigh lift changes how bills are split." },
    { factor: "City and unit", why: "Local rents and wages move the fee, and a day-care unit is priced apart from a hospital." },
  ],
  notIncluded: [
    "Liposuction of the arms, if listed separately",
    "A second pair of sleeves",
    "Blood work before surgery",
    "Medicines to take home",
    "A touch-up for a wide or raised scar",
    "Reviews beyond the first few",
    "GST, if it is a separate line",
    "Travel, and the days you need help with lifting at home",
  ],
  compareQuotes: [
    "Ask each surgeon to mark the planned scar on your arm, then compare totals for the same scar.",
    "Check that both arms are in the quote.",
    "Find out who will operate and look up their registration.",
    "Ask what a scar touch-up costs and when it is advised.",
    "Wait for an in-person look at your arms before paying anything.",
  ],
  insurance: "An arm lift for appearance is usually not covered by health policies. Skin problems after large weight loss, such as rashes under loose skin, may be treated differently, so check your policy wording and ask your insurer in writing.",
  payment: "Lenders and facilities decide instalment terms, which this page does not list. GST wording is still to be confirmed. {tbc}",
  method: "No arm lift price appears yet. Each future line will carry its source type, the number of dated quotes behind it and the month it was collected. At least three dated quotes from separate sources are needed before the pending label comes off. We use no figures copied from other websites.",
  faqs: [
    { q: "What decides the cost of an arm lift?", a: "How far the scar runs and how much skin is removed, whether liposuction is added, the anaesthesia, the facility and the sleeves." },
    { q: "Does the quote cover both arms?", a: "Often yes, but not always. Ask for it in writing, because one arm costs less and the total can look low." },
    { q: "Is liposuction included?", a: "Only if the quote says so. It is often a separate line." },
    { q: "Does insurance cover an arm lift?", a: "Usually not for appearance. Skin problems under loose skin may be treated differently. Read your policy and write to your insurer." },
    { q: "Will there be a visible scar?", a: "Yes. The scar sits along the inner arm and fades over months, and how far it fades varies. A surgeon marks it before surgery." },
    { q: "How long is recovery?", a: "Many people return to desk work after about a week or two, with lifting limits for weeks. A surgeon sets yours. {pending}" },
  ],
  sources: [NMC_SOURCE],
};

// ------------------------------------------------------------------ thigh lift
const THIGH = "thigh-lift";

const thighCosts: CostLine[] = [
  line(THIGH, 1, "Consultation and examination", "The surgeon and the facility"),
  line(THIGH, 2, "Inner thigh lift (groin crease cut), both legs, usual total", "Amount of skin and anaesthesia"),
  line(THIGH, 3, "Inner thigh lift (cut down the inner thigh), both legs, usual total", "Scar length and operating time"),
  line(THIGH, 4, "Outer thigh lift as part of a lower body lift", "Staged with other areas"),
  line(THIGH, 5, "Add-on: liposuction of the thighs", "Number of areas"),
  line(THIGH, 6, "Compression garment and dressings", "How many garments and what is included"),
  line(THIGH, 7, "Follow-up visits and medicines", "Ask in writing before you book"),
];

const thighCostPage: NationalCostPage = {
  seoTitle: "Thigh Lift Cost in India: Inner Thigh Scar and Total Bill",
  metaDescription: "How thigh lift cost is built: inner or outer thigh, groin crease or long scar, liposuction and staging. Ranges stay pending until real quotes are collected.",
  h1: "Thigh lift cost in India",
  answer: "A thigh lift removes loose skin from the inner or outer thigh, so the total follows where the cut sits, how long it is, whether fat is also removed and whether it is staged with other lifts. No price is published yet. Ranges will follow, each with its date and source.",
  unit: "total",
  rangeHeading: "Sample totals by plan",
  rangeCaption: "These lines describe different plans and should not be added.",
  planner: {
    heading: "Ask which thigh the plan treats and where the cut sits",
    formula: "Total = surgeon + anaesthesia + facility + (groin crease or long inner scar plan) + liposuction if any + garments + follow-up",
    steps: [
      "Ask whether the plan treats the inner thigh, the outer thigh or both.",
      "Ask whether the cut sits in the groin crease or runs down the inner thigh.",
      "Ask whether liposuction is part of it and whether it is a separate line.",
      "Ask how many garments are included.",
      "Ask whether this is one stage of a longer plan with other areas.",
    ],
  },
  extraSections: [
    {
      id: "which-thigh",
      heading: "Inner thigh, outer thigh and where the cut sits",
      tocLabel: "Which thigh",
      lead: "A thigh lift is two or three operations that share a name. The table sets out the plain differences, and a surgeon decides. {pending}",
      table: {
        caption: "General differences between plans.",
        head: ["Plan", "Where the cut sits", "Usual situation", "What to ask"],
        rows: [
          ["Inner thigh, groin crease cut", "In the crease where the thigh meets the body, hidden by underwear", "Loose skin high on the inner thigh", "Will skin lower down the leg stay loose?"],
          ["Inner thigh, long cut", "From the groin crease down the inner thigh toward the knee", "Loose skin along most of the inner thigh, often after large weight loss", "How long will the scar be, and how does it sit when I sit cross-legged?"],
          ["Outer thigh", "Part of a lower body lift, with a cut around the hips", "Loose skin on the outer thigh and buttock", "Is this included in a body lift quote?"],
          ["With liposuction", "Small cuts for fat removal plus the skin cut", "A fatty layer with loose skin", "Is liposuction a separate line?"],
        ],
      },
    },
    {
      id: "sitting-floor",
      heading: "Sitting, squatting and floor life in the first weeks",
      tocLabel: "Sitting and floors",
      paragraphs: [
        "A thigh lift tightens skin along the inner thigh. Cross-legged sitting on the floor, a squat toilet, prayer postures and low furniture all pull on the wound in the first weeks. Ask the surgeon how long to avoid them, and what to use in the meantime, such as a raised seat or a commode.",
        "Stairs are fine for most people when they have help. Ask about a walking plan and when the garment can come off for a wash.",
        "Wound healing in the groin crease is harder in heat and damp. Ask how to keep the area dry in the monsoon. {pending}",
      ],
    },
    {
      id: "staged-with-others",
      heading: "One stage or several",
      tocLabel: "One stage or several",
      paragraphs: [
        "After large weight loss, loose skin often covers the abdomen, thighs and arms. A surgeon may plan the areas in stages. Each stage is its own operation and its own bill, with its own recovery. See the [body lift cost page](/cost/body-lift), the [arm lift cost page](/cost/arm-lift) and [tummy tuck](/tummy-tuck).",
        "Ask for the full plan and an estimate of the number of stages before you pay for the first.",
      ],
    },
  ],
  factors: [
    { factor: "Inner or outer thigh", why: "Each area is a separate part of the plan with its own time." },
    { factor: "Cut position and length", why: "A groin crease cut and a long inner thigh cut take different amounts of skin and time." },
    { factor: "Liposuction", why: "Fat removal is priced on top of the skin work." },
    { factor: "Both legs", why: "Most quotes cover both legs, so check which one the total is for." },
    { factor: "Anaesthesia", why: "General anaesthesia costs more than other types, and a surgeon decides which fits." },
    { factor: "Facility and stay", why: "A day-care unit and a hospital price the theatre and room differently, and a night or two is common." },
    { factor: "Garments and follow-up", why: "Garments and review visits may be separate lines." },
    { factor: "City", why: "The same plan can price differently across cities, because local costs differ." },
  ],
  notIncluded: [
    "Liposuction of the thighs, if listed separately",
    "Other stages in a combined plan",
    "A second compression garment",
    "Blood work before surgery",
    "Take-home medicines",
    "Review visits past those in the plan",
    "GST on its own line",
    "Help at home while you cannot squat or sit on the floor",
  ],
  compareQuotes: [
    "Ask each surgeon where the cut sits and how long it is, then compare totals for the same plan.",
    "Check that both legs are in the quote.",
    "Ask who the operating surgeon is, and check the register for them.",
    "Ask how many stages a full plan needs and what each stage costs.",
    "Hold back payment until a surgeon has seen you in person.",
  ],
  insurance: "A thigh lift for appearance is usually not covered by health policies. Skin infections or rashes under loose folds may be treated differently, so check your policy wording and ask your insurer in writing.",
  payment: "Whether payment can be split depends on the facility and the lender. Terms are not listed, and GST wording is open. {tbc}",
  method: "Thigh lift prices are absent for now. A line is filled in only when three dated quotes from separate sources exist, and it will show how it was built. Other websites supply none of our figures.",
  faqs: [
    { q: "What decides the cost of a thigh lift?", a: "Where the cut sits and how long it is, whether fat is also removed, the anaesthesia, the facility and whether it is one stage of a longer plan." },
    { q: "Is a thigh lift the same as an outer thigh lift?", a: "No. Inner thigh and outer thigh are different plans, and the outer thigh is often part of a lower body lift. Ask which one the quote means." },
    { q: "Can I sit cross-legged afterwards?", a: "Not for a while. Ask the surgeon how many weeks and what to use in the meantime." },
    { q: "Does insurance cover it?", a: "Usually not for appearance. Skin problems under loose folds may be treated differently. The policy wording decides. Ask your insurer in writing." },
    { q: "Will the scar show?", a: "A groin crease scar is mostly hidden by underwear. A long inner thigh scar shows in some clothes and fades slowly. A surgeon marks it before surgery." },
    { q: "How long is recovery?", a: "Many people return to desk work after about two weeks, with limits on stretching and sitting low. A surgeon sets yours. {pending}" },
  ],
  sources: [NMC_SOURCE],
};

// ------------------------------------------------------------------ neck lift
const NECK = "neck-lift";

const neckCosts: CostLine[] = [
  line(NECK, 1, "Consultation and examination", "The surgeon and the facility"),
  line(NECK, 2, "Liposuction of the chin and neck only", "Amount of fat and anaesthesia"),
  line(NECK, 3, "Neck lift with muscle tightening, usual total", "Cuts under the chin and behind the ears"),
  line(NECK, 4, "Neck lift as part of a facelift", "How the surgeon bills a combined plan"),
  line(NECK, 5, "Chin support garment and dressings", "What is included in the quote"),
  line(NECK, 6, "Follow-up visits and medicines", "Ask in writing before you book"),
];

const neckCostPage: NationalCostPage = {
  seoTitle: "Neck Lift Cost in India: Muscle, Fat and Total Bill",
  metaDescription: "How neck lift cost is built: fat removal, neck muscle tightening, skin removal, facelift combinations and anaesthesia. Ranges are labelled and dated once quotes arrive.",
  h1: "Neck lift cost in India",
  answer: "A neck lift can remove fat, tighten neck muscle bands, remove loose skin or do all three, so the total depends on which of these your neck needs and whether it is combined with a facelift. We hold no figure at present. Ranges will be added with a date and a basis.",
  unit: "total",
  rangeHeading: "Sample totals by plan",
  rangeCaption: "Each line is one plan. Do not total them.",
  planner: {
    heading: "Work out what your neck needs before you compare quotes",
    formula: "Total = surgeon + anaesthesia + facility + (fat only, or muscle and skin, or with facelift) + garment + follow-up",
    steps: [
      "Ask whether the problem is fat under the chin, neck muscle bands, loose skin or a mix.",
      "Ask whether liposuction alone could be enough, and what the surgeon thinks about it.",
      "Ask whether the plan includes cuts behind the ears and under the chin.",
      "Ask whether a facelift is advised in the same operation and how it is billed.",
      "Ask which anaesthesia is planned.",
    ],
  },
  extraSections: [
    {
      id: "what-the-neck-needs",
      heading: "What your neck needs: a decision table",
      tocLabel: "What the neck needs",
      lead: "People say neck lift and mean three different things. The table sets out what a surgeon looks for. A surgeon decides for you. {pending}",
      table: {
        caption: "What you notice, what a surgeon checks, and what the plan may be.",
        head: ["What you notice", "What a surgeon checks", "What the plan may be"],
        rows: [
          ["A soft fullness under the chin", "Fat above the neck muscle, and skin quality", "Liposuction of the chin and neck, with or without more"],
          ["Two vertical bands when you tense the neck", "The platysma muscle (neck muscle) bands", "Muscle tightening through a cut under the chin"],
          ["Loose skin hanging at the neck", "Skin laxity and how it moves", "Skin removal with cuts behind the ears"],
          ["Jowls along the jaw with a loose neck", "Whether the lower face and neck are involved together", "A facelift with a neck lift in one operation"],
          ["A neck that sagged after large weight loss", "Skin elasticity and whether weight is steady", "A neck lift planned with the weight-loss history in mind"],
        ],
      },
    },
    {
      id: "scarves-and-scars",
      heading: "Dupattas, collars and the scars behind the ears",
      tocLabel: "Scars and clothing",
      paragraphs: [
        "The cuts for a neck lift sit under the chin and behind the ears, where hair and collars cover them. Swelling and bruising around the neck last for weeks. A dupatta, a scarf or a collar can cover the neck while it heals, and surgeons often advise a chin garment worn day and night at first. Ask how long.",
        "Sleeping with the head raised and turning the whole body, with the neck held still, are common instructions. Ask what to do about a long commute or a two-wheeler ride. {pending}",
      ],
    },
    {
      id: "numbness-and-nerves",
      heading: "Numbness and nerve questions",
      tocLabel: "Numbness and nerves",
      paragraphs: [
        "The skin of the neck and around the ear can feel numb for weeks or months after surgery. The nerve that lifts the corner of the mouth runs near the area, and injury to it is rare and usually temporary. Ask the surgeon how often they do neck lifts, how they protect the nerve and what they do if a weakness appears.",
      ],
    },
  ],
  factors: [
    { factor: "Fat, muscle, skin or all three", why: "Each part of the neck needs a different step, and each step adds time." },
    { factor: "Cuts under the chin and behind the ears", why: "A plan with both cuts takes longer than a small cut under the chin." },
    { factor: "Combined facelift", why: "A neck lift with a facelift is often one operation and one bill, so compare it with a facelift quote." },
    { factor: "Liposuction", why: "Fat removal may be a separate line or the only step." },
    { factor: "Anaesthesia", why: "Local with sedation and general anaesthesia are priced differently." },
    { factor: "Facility and stay", why: "A day-care unit and a hospital price the theatre and room differently." },
    { factor: "Garment and follow-up", why: "The chin garment and review visits may be separate lines." },
    { factor: "Place", why: "Clinic rents, wages and the kind of facility shift the fee from city to city." },
  ],
  notIncluded: [
    "A facelift, if added",
    "Liposuction, if listed separately",
    "A second chin garment",
    "Pre-operative tests",
    "Discharge medicines",
    "A touch-up, if advised",
    "GST, if billed separately",
    "Time off, and help with dressing and sleeping upright",
  ],
  compareQuotes: [
    "Ask each surgeon whether the quote is for fat, muscle, skin or a combination.",
    "Compare totals for the same plan, not for the same name.",
    "Confirm who will operate, and check the council register.",
    "Ask how a combined facelift is billed.",
    "Do not pay until a surgeon has examined your neck face to face.",
  ],
  insurance: "A neck lift for appearance is usually not covered by health policies. Check your policy wording and ask your insurer in writing.",
  payment: "This page lists no instalment terms, since they vary by lender and facility. GST handling is to be confirmed. {tbc}",
  method: "No neck lift price appears yet. Each future line will name its source type, the number of dated quotes behind it and the month they were collected. A range needs at least three dated quotes from separate sources. No figure from another website is used.",
  faqs: [
    { q: "What decides the cost of a neck lift?", a: "Whether the plan is fat only, muscle and skin, or combined with a facelift, the cuts, the anaesthesia and the facility." },
    { q: "Can liposuction alone be enough?", a: "For a soft fullness under the chin with good skin, a surgeon may think so. Loose skin or muscle bands need more. A surgeon examines you." },
    { q: "Is a neck lift part of a facelift?", a: "Often they are done together, and some quotes give one price. Ask for the neck part as a separate line to compare." },
    { q: "Does insurance cover it?", a: "Usually not for appearance. Your policy wording applies, so ask the insurer in writing." },
    { q: "Where are the scars?", a: "Under the chin and behind the ears, mostly hidden by hair and collars. They fade over months, and how much varies." },
    { q: "How long is recovery?", a: "Many people return to desk work after about two weeks, with swelling for longer. A surgeon sets yours. {pending}" },
  ],
  sources: [NMC_SOURCE],
};

// ------------------------------------------------------------------ brow lift
const BROW = "brow-lift";

const browCosts: CostLine[] = [
  line(BROW, 1, "Consultation and examination", "The surgeon and the facility"),
  line(BROW, 2, "Endoscopic brow lift, usual total", "Cuts in the hairline and operating time"),
  line(BROW, 3, "Temporal (side) brow lift, usual total", "Extent of the lift"),
  line(BROW, 4, "Open brow lift (hairline or forehead cut), usual total", "Scar position and skin removed"),
  line(BROW, 5, "Add-on: upper eyelid surgery", "Whether done in the same sitting"),
  line(BROW, 6, "Dressings and follow-up visits", "Ask in writing before you book"),
];

const browCostPage: NationalCostPage = {
  seoTitle: "Brow Lift Cost in India: Method, Scar and Total Bill",
  metaDescription: "How brow lift cost is built: endoscopic, temporal or open method, hairline, eyelid surgery in the same sitting and anaesthesia. A range appears only with a date and a source.",
  h1: "Brow lift cost in India",
  answer: "A brow lift raises a low or drooping brow, and the total depends on the method (endoscopic, side or open), where the cuts sit, whether eyelid surgery is added and the anaesthesia. No amount is shown yet. A range arrives only with dated, sourced quotes.",
  unit: "total",
  rangeHeading: "Sample totals by method",
  rangeCaption: "Rows show alternatives, and no row adds to another.",
  planner: {
    heading: "Check whether the brow is really the problem",
    formula: "Total = surgeon + anaesthesia + facility + (endoscopic, side or open method) + eyelid surgery if added + follow-up",
    steps: [
      "Ask whether a low brow, loose upper lid skin or both explain the heavy look.",
      "Ask which method the surgeon plans and where the cuts sit.",
      "Ask whether eyelid surgery is in the same quote, and as a separate line.",
      "Ask what happens to the hairline and the forehead height.",
      "Ask which anaesthesia is planned.",
    ],
  },
  extraSections: [
    {
      id: "method-by-forehead",
      heading: "Method, hairline and forehead: a decision table",
      tocLabel: "Method and hairline",
      lead: "The method depends on the hairline, the height of the forehead and how much lift is planned. A surgeon decides. {pending}",
      table: {
        caption: "General differences between methods.",
        head: ["Method", "Where the cuts sit", "Often considered when", "What to ask"],
        rows: [
          ["Endoscopic", "Small cuts behind the hairline, with a thin camera to guide the lift", "A moderate lift, with a normal or low hairline", "Will the lift hold, and how are the fixing points handled?"],
          ["Temporal (side)", "Cuts at the temples, lifting the outer brow", "A drooping outer brow with a normal inner brow", "Does lifting only the outer brow suit my face?"],
          ["Open, hairline", "A cut along the hairline", "A high forehead where lowering the hairline may be wanted, or a large lift", "How will the scar look when my hair is tied back?"],
          ["Open, forehead crease", "A cut along a forehead crease", "A very high hairline in selected cases", "Can the scar be hidden in a natural crease?"],
          ["With eyelid surgery", "The above plus a cut in the upper eyelid crease", "Both a low brow and loose lid skin", "Is the brow or the lid more responsible for the heavy look?"],
        ],
      },
    },
    {
      id: "hair-and-feeling",
      heading: "Hair, feeling and movement",
      tocLabel: "Hair and feeling",
      paragraphs: [
        "A cut in or near the hairline can lead to a patch of thin hair or numbness of the scalp or forehead for weeks or longer. Ask the surgeon about the chance of hair loss at the scar and what is advised if it happens. People with a receding hairline or thin hair should say so at the first visit.",
        "Nerves that move the forehead run near the surgery. Weakness is uncommon and usually temporary, and the surgeon should explain how they protect those nerves. Ask for a clear answer. {pending}",
      ],
    },
    {
      id: "with-eyelids",
      heading: "Brow lift with or without eyelid surgery",
      tocLabel: "With eyelid surgery",
      paragraphs: [
        "A low brow pushes skin down onto the upper lid, so people sometimes have upper eyelid surgery and then still feel heavy-lidded. A surgeon who plans both can decide how to divide the work. Ask whether the brow lift should come first, and whether the lid skin to remove is then smaller. See the [blepharoplasty hub](/blepharoplasty) for the eyelid operation itself.",
      ],
    },
  ],
  factors: [
    { factor: "Method", why: "Endoscopic, side and open methods differ in time, equipment and scar position." },
    { factor: "Scar position", why: "A cut along the hairline or forehead crease changes how much skin is removed and the operating time." },
    { factor: "Eyelid surgery in the same sitting", why: "It is often priced as its own line, and it may reduce the lid skin to be removed." },
    { factor: "Anaesthesia", why: "Local with sedation and general anaesthesia are priced differently." },
    { factor: "Facility and stay", why: "A day-care unit and a hospital price the theatre and room differently." },
    { factor: "Surgeon and team", why: "Training and experience affect the fee, and we do not rank surgeons." },
    { factor: "Follow-up", why: "Review visits and dressings may be separate lines." },
    { factor: "Where it is done", why: "Facility type and local costs change the fee." },
  ],
  notIncluded: [
    "Upper eyelid surgery, if added",
    "A facelift or neck lift, if added",
    "Tests before the operation",
    "Medicines after discharge",
    "A touch-up, if advised",
    "Follow-up visits beyond those in the plan",
    "GST, if shown separately",
    "Time off, and any wig or hair cover you choose while the scalp heals",
  ],
  compareQuotes: [
    "Ask each surgeon which method is planned and where the cuts sit.",
    "Compare totals for the same method and the same anaesthesia.",
    "Ask who will do the operation. Registration can be checked on the public register.",
    "Ask whether eyelid surgery is separate and what it adds.",
    "Hold payment until a surgeon has checked your forehead and hairline.",
  ],
  insurance: "A brow lift for appearance is usually not covered by health policies. When a low brow reduces your view, a plan may be treated differently, so check your policy wording and ask your insurer in writing.",
  payment: "Payment plans come from lenders and facilities, and none are shown. How GST is billed is to be confirmed. {tbc}",
  method: "No brow lift price appears yet. Each future line will state its source type, the number of dated quotes and the month they were collected. A range needs at least three dated quotes from separate sources before the pending label comes off. We use nothing from other websites.",
  faqs: [
    { q: "What decides the cost of a brow lift?", a: "The method, the position of the cuts, whether eyelid surgery is added, the anaesthesia and the facility." },
    { q: "Is a brow lift the same as an eyelid operation?", a: "No. A brow lift raises the brow. Eyelid surgery removes lid skin or fat. Some people need both, and a surgeon decides." },
    { q: "Where are the scars?", a: "Behind the hairline for endoscopic methods, at the temples for a side lift and along the hairline or a forehead crease for open methods. They fade over months." },
    { q: "Could I lose hair?", a: "Thin hair at the scar is possible. Ask the surgeon how likely it is for your hairline and what is advised." },
    { q: "Does insurance cover it?", a: "Usually not for appearance. If a low brow reduces your view, it may be treated differently. Check the policy and put the question to your insurer in writing." },
    { q: "How long is recovery?", a: "Many people return to desk work after one to two weeks, with swelling and bruising around the eyes. A surgeon sets yours. {pending}" },
  ],
  sources: [NMC_SOURCE],
};

// ------------------------------------------------------------------ body lift
const BODY = "body-lift";

const bodyCosts: CostLine[] = [
  line(BODY, 1, "Consultation and examination", "The surgeon and the facility"),
  line(BODY, 2, "Lower body lift (stage one), usual total", "Skin removed, operating time and nights in hospital"),
  line(BODY, 3, "Upper body or breast stage, usual total", "Which areas the plan includes"),
  line(BODY, 4, "Thigh and arm stages", "See the thigh lift and arm lift cost pages"),
  line(BODY, 5, "Pre-operative tests and nutrition checks", "Tests the surgeon asks for"),
  line(BODY, 6, "Compression garments and dressings", "How many garments and what is included"),
  line(BODY, 7, "Follow-up visits and medicines", "Ask in writing before you book"),
];

const bodyCostPage: NationalCostPage = {
  seoTitle: "Body Lift Cost in India: Stages and Total Bill",
  metaDescription: "How body lift cost is built after weight loss: lower body lift, staging, tests, nights in hospital and garments. Ranges follow once dated quotes exist, stage by stage.",
  h1: "Body lift cost in India",
  answer: "A body lift removes loose skin and fat that hang after large weight loss, usually in more than one stage, so you pay for each stage, each hospital stay and each recovery. No price appears yet. Each stage will get its own dated range when quotes exist.",
  unit: "total",
  rangeHeading: "Sample totals by stage",
  rangeCaption: "Each line is one stage or one plan. Stage totals add up only as your surgeon plans them.",
  planner: {
    heading: "Ask for the whole plan, then price each stage",
    formula: "Total = stage one + stage two + stage three + tests + garments + follow-up, with a recovery between stages",
    steps: [
      "Ask which areas the surgeon plans, in what order and how many weeks apart.",
      "Ask for a bill for each stage with its own surgeon fee, anaesthesia and nights in hospital.",
      "Ask which tests the surgeon wants before stage one, such as haemoglobin and protein levels.",
      "Ask which stage is most worth doing first for your skin and your daily life.",
      "Ask what happens to the plan if your weight changes between stages.",
    ],
  },
  extraSections: [
    {
      id: "stages",
      heading: "A staged plan, and what each stage costs you",
      tocLabel: "Stages",
      lead: "Few people have everything done in one operation. A surgeon decides the order. The table shows common stage plans and the time and money each one needs. {pending}",
      table: {
        caption: "General stage plans. A surgeon decides for you.",
        head: ["Stage", "Areas", "Why it may come first or later", "What to ask"],
        rows: [
          ["Lower body lift", "Abdomen, flanks, lower back and buttocks, in a cut right round the body", "The largest area of loose skin, and often the one that bothers most", "How many nights in hospital, and how is the cut placed on my body?"],
          ["Tummy tuck alone", "Abdomen only, with muscle tightening", "When loose skin is mostly in front", "Is a body lift needed, or does a tummy tuck cover it? See [tummy tuck](/tummy-tuck)"],
          ["Thigh stage", "Inner and outer thigh", "After the lower body lift has healed", "See the [thigh lift cost page](/cost/thigh-lift)"],
          ["Arm stage", "Upper arms", "Often last, as a shorter operation", "See the [arm lift cost page](/cost/arm-lift)"],
          ["Breast and chest stage", "Breast lift, or chest skin", "After the lower stages when the body is healed", "Is this part of the plan or a separate operation?"],
        ],
      },
    },
    {
      id: "before-surgery",
      heading: "What the surgeon wants to see before stage one",
      tocLabel: "Before stage one",
      paragraphs: [
        "Many surgeons want weight to be steady for a period before surgery, and want nutrition in order, because wounds heal slowly in someone who is deficient. Blood tests such as haemoglobin, protein levels and vitamin B12 are common, and anaemia and low B12 are common in India, especially in vegetarians. Ask the surgeon which tests to expect and who pays. {pending}",
        "Weight loss by any route, including weight-loss surgery or prescription medicines, matters. Tell the surgeon how you lost weight and what you take.",
      ],
    },
    {
      id: "time-and-leave",
      heading: "Weeks of leave over several stages",
      tocLabel: "Leave and time",
      paragraphs: [
        "A body lift is a long operation with a longer stay than a tummy tuck, and recovery is slow. Many people need several weeks off for each large stage. Over a two or three stage plan that adds up to months of leave and a good deal of help at home. Ask the surgeon how many weeks to plan for each stage, and what the bill is for each. {pending}",
      ],
    },
  ],
  factors: [
    { factor: "Number of stages", why: "Each stage is a separate operation with its own surgeon fee, anaesthesia and facility bill." },
    { factor: "Areas in each stage", why: "A lower body lift is far larger than an arm lift, and the time in theatre differs." },
    { factor: "Nights in hospital", why: "A body lift usually needs more nights than smaller operations, and room type sets the daily rate." },
    { factor: "Pre-operative tests", why: "Blood tests and nutrition checks add to the first stage." },
    { factor: "Blood and drains", why: "Large operations may need blood products or drains, which are separate lines." },
    { factor: "Anaesthesia", why: "A long general anaesthetic is priced by time." },
    { factor: "Garments and follow-up", why: "Garments and review visits may be separate lines for every stage." },
    { factor: "Facility and city", why: "Large operations tie up theatre time and beds, so local rates matter more here." },
  ],
  notIncluded: [
    "Later stages, such as thigh, arm or breast work",
    "Tests before each stage",
    "Blood products, if needed",
    "Extra nights in hospital",
    "Compression garments for each stage",
    "Medicines after discharge",
    "GST, if shown separately",
    "Weeks of leave, help at home and travel for every stage",
  ],
  compareQuotes: [
    "Ask each surgeon for the full plan and the number of stages, then compare totals for the same stages.",
    "Ask for a separate bill for each stage.",
    "Ask which surgeon will do each stage, and check each registration.",
    "Ask what you pay if your weight changes between stages.",
    "Keep payment back for the first stage until you have been examined.",
  ],
  insurance: "A body lift for appearance is usually not covered by health policies. Skin infections or rashes under heavy folds may be treated differently, so check your policy wording and ask your insurer in writing what records it needs.",
  payment: "Staged operations may be paid stage by stage or as a plan, depending on the facility. No terms are listed, and GST wording is to be confirmed. {tbc}",
  method: "No body lift price appears yet. Each future line will give its source type, the number of dated quotes and the month collected, per stage. Three dated quotes from separate sources are needed before the pending label comes off. We copy nothing from other websites.",
  faqs: [
    { q: "What decides the cost of a body lift?", a: "The number of stages, the areas in each stage, the nights in hospital, tests and the anaesthesia." },
    { q: "Is a body lift one operation?", a: "Sometimes a lower body lift is one operation. A full plan that covers abdomen, thighs, arms and breasts is usually several stages." },
    { q: "Is a body lift the same as a tummy tuck?", a: "No. A tummy tuck treats the abdomen. A lower body lift extends the cut around the body to treat flanks and buttocks. See [tummy tuck](/tummy-tuck)." },
    { q: "How soon after weight loss?", a: "Many surgeons want steady weight for a period first. Ask the surgeon what they want to see. {pending}" },
    { q: "Does insurance cover it?", a: "Usually not for appearance. Skin problems under folds may be treated differently. The policy wording decides this, and a written reply from the insurer is worth having." },
    { q: "How long is recovery?", a: "Longer than a tummy tuck, and it repeats with each stage. A surgeon sets yours. {pending}" },
  ],
  sources: [NMC_SOURCE],
};

// ------------------------------------------------------------------ scar revision
const SCAR = "scar-revision";

const scarCosts: CostLine[] = [
  line(SCAR, 1, "Consultation and scar assessment", "The doctor and how the scar formed"),
  line(SCAR, 2, "Surgical excision and re-closure of a wide scar", "Size, place and anaesthesia"),
  line(SCAR, 3, "Release of a tight scar (contracture)", "Size, joint involvement and technique"),
  line(SCAR, 4, "Injections and silicone care for a raised scar, per visit", "Number of visits and the doctor"),
  line(SCAR, 5, "Procedures for acne scars, per session", "See the acne treatment page for the skin team's options"),
  line(SCAR, 6, "Dressings, garments and follow-up", "Ask in writing before you book"),
];

const scarCostPage: NationalCostPage = {
  seoTitle: "Scar Revision Cost in India: Scar Type and Total Bill",
  metaDescription: "How scar revision cost is built: type of scar, size and place, one step or several, and how many visits. Ranges follow real, dated quotes only.",
  h1: "Scar revision cost in India",
  answer: "The cost of scar revision follows the type of scar (wide, raised, tight or pitted), its size and place, and whether one operation or several visits are needed. No price is shown yet. A range will be added per type of care once dated quotes exist.",
  unit: "total",
  rangeHeading: "Sample totals by type of care",
  rangeCaption: "Rows show types of care, not a bill to be summed.",
  planner: {
    heading: "Identify the scar before you ask for the price",
    formula: "Total = assessment + (surgery or injections or a course of sessions) + dressings and garments + follow-up over months",
    steps: [
      "Ask the doctor what type your scar is and how long ago it formed.",
      "Ask whether the scar is mature, because many doctors wait before surgery. A scar can look red and raised for many months and settle.",
      "Ask whether the plan is one operation, a series of visits or both.",
      "Ask whether follow-up care, such as silicone or pressure garments, is in the price.",
      "Ask how the doctor will judge whether the scar has improved, and what that costs.",
    ],
  },
  extraSections: [
    {
      id: "scar-types",
      heading: "Scar types and the plan each one may need",
      tocLabel: "Scar types",
      lead: "No single price fits scar revision, because scars are not one problem. The table lists common types and what a doctor may consider. A doctor decides. {pending}",
      table: {
        caption: "General notes by scar type. A doctor examines the scar first.",
        head: ["Scar type", "What it looks and feels like", "What a doctor may consider", "Why the cost moves"],
        rows: [
          ["Wide or stretched scar", "Flat but wide, often after surgery or injury under tension", "Cutting out the scar and closing it again", "An operation, with anaesthesia and stitches"],
          ["Hypertrophic scar", "Raised and red but within the original wound", "Silicone, pressure, injections or surgery in selected cases", "Number of visits over months"],
          ["Keloid", "Raised and growing beyond the wound, often itchy", "A combined plan, because a keloid can return after cutting", "More visits and a higher chance of repeat care"],
          ["Contracture scar", "Tight, pulling at skin or a joint, often after a burn", "Releasing the tightness with surgery, sometimes with skin from elsewhere", "A larger operation and a longer plan"],
          ["Acne scar", "Pitted or uneven skin from past acne", "Options in the skin team's pages, such as sessions of peels or other procedures. See [acne treatment](/acne-treatment)", "Number of sessions"],
          ["Old, flat, pale scar", "Mature scar that bothers you for appearance", "Sometimes nothing, and a doctor may say so plainly", "Depends on the plan"],
        ],
      },
    },
    {
      id: "wait-and-see",
      heading: "Why waiting is often part of the plan",
      tocLabel: "Why wait",
      paragraphs: [
        "A scar keeps changing for many months. It may be red and raised at first and then soften and fade. Many doctors prefer to wait until a scar has matured before cutting it, and may suggest silicone, massage or sun protection first. Ask the doctor how long to wait for your scar. {pending}",
        "A repeat scar from a second operation can be worse than the first, especially in people who form keloids. Tell the doctor if keloids run in your family or if you have formed one before.",
      ],
    },
    {
      id: "one-step-or-many",
      heading: "One operation, or visits over months",
      tocLabel: "One step or many",
      paragraphs: [
        "Surgery is one bill. Injections, silicone and pressure garments are many small bills over months. Both add up, and they are priced differently. Ask the doctor to give you a plan with the number of visits and what each costs.",
        "Do not assume that a cheaper plan means fewer visits. A keloid plan that starts small can need many reviews. Ask the doctor what a typical course looks like. {pending}",
      ],
    },
  ],
  factors: [
    { factor: "Type of scar", why: "A wide scar, a raised keloid, a tight burn scar and acne pits need different plans." },
    { factor: "Size and place", why: "A large scar on a joint or the face takes more planning and time." },
    { factor: "One step or several", why: "Surgery, injections and scar care over months are each a line in the plan." },
    { factor: "Anaesthesia", why: "Local anaesthesia and general anaesthesia are priced differently." },
    { factor: "Skin grafts or flaps", why: "A contracture release may need skin from another site, which adds time." },
    { factor: "Garments and silicone", why: "Pressure garments and silicone products may be listed separately." },
    { factor: "Follow-up", why: "Review visits and scar care over many months may be separate lines." },
    { factor: "City and clinic", why: "A dermatology clinic and a surgical unit bill differently, and local costs add to the difference." },
  ],
  notIncluded: [
    "A second operation or more injection visits",
    "Pressure garments and silicone products",
    "Skin grafts, if needed",
    "Tests before the operation",
    "Medicines after the procedure",
    "Follow-up visits beyond those in the plan",
    "GST, if shown separately",
    "Time off for wound care and your travel for repeated visits",
  ],
  compareQuotes: [
    "Ask each doctor what type of scar they think you have and what plan they advise.",
    "Compare plans that cover the same type of care and the same number of visits.",
    "Ask which doctor will treat you and where to check their registration.",
    "Ask what happens if the scar returns, and what that costs.",
    "Pay only once a doctor has examined the scar in person.",
  ],
  insurance: "Scar revision for appearance is usually not covered by health policies. A tight scar that limits movement may be treated differently, so check your policy wording and ask your insurer in writing.",
  payment: "Visits and procedures may be billed one by one. No instalment terms are listed, and GST wording is to be confirmed. {tbc}",
  method: "No price for revising a scar appears yet. Each future line will show its source type, the number of dated quotes behind it and the month collected. Three dated quotes from separate sources are needed before the pending label comes off, and no figure from another website is used.",
  faqs: [
    { q: "What decides the cost of scar revision?", a: "The type of scar, its size and place, whether one operation or many visits are needed and the follow-up." },
    { q: "Can a scar be removed?", a: "A scar cannot be removed. A doctor may change how it looks or feels, and sometimes advises leaving it alone." },
    { q: "Why do doctors ask me to wait?", a: "A scar keeps changing for many months, and surgery on an immature scar can make it worse. Ask how long to wait for yours." },
    { q: "Does a keloid come back after surgery?", a: "It can. Doctors often combine surgery with other care, and ask about keloids in your family." },
    { q: "Does insurance cover it?", a: "Usually not for appearance. A tight scar that limits movement may be treated differently. Read your policy and ask the insurer to reply in writing." },
    { q: "Where do I look for acne scar options?", a: "The skin team's pages cover them. See [acne treatment](/acne-treatment)." },
  ],
  sources: [NMC_SOURCE],
};

// ------------------------------------------------------------------ exports
const costOnly = (slug: string, costPage: NationalCostPage, costLines: CostLine[], deskWork: string): PlasticTopic => ({
  kind: "cost-only",
  treatment: {
    slug,
    content: null,
    costPage,
    costFactors: costPage.factors,
    deskWork,
  },
  costPage,
  costLines,
  cityPages: [],
  faqs: [],
});

export const armLift = costOnly(ARM, armCostPage, armCosts, "About 1 to 2 weeks, to be confirmed by the reviewer");
export const thighLift = costOnly(THIGH, thighCostPage, thighCosts, "About 2 weeks, to be confirmed by the reviewer");
export const neckLift = costOnly(NECK, neckCostPage, neckCosts, "About 2 weeks, to be confirmed by the reviewer");
export const browLift = costOnly(BROW, browCostPage, browCosts, "About 1 to 2 weeks, to be confirmed by the reviewer");
export const bodyLift = costOnly(BODY, bodyCostPage, bodyCosts, "Several weeks per stage, to be confirmed by the reviewer");
export const scarRevision = costOnly(SCAR, scarCostPage, scarCosts, "To be confirmed by the reviewer");

export const plasticCostOnlyTopics: PlasticTopic[] = [armLift, thighLift, neckLift, browLift, bodyLift, scarRevision];
