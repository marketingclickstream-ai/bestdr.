import type { Treatment } from "./types";
import { gynecomastiaContent } from "./gynecomastia";
import { liposuctionContent, liposuctionDisplay } from "./liposuction";
import { SLUGS } from "./slugs";
import { skinHairTreatments } from "./skin-hair";

// Phase 1: plastic and cosmetic surgery. Only gynecomastia has full editorial content so far;
// the others render as short, noindex "being prepared" pages until a reviewer signs off real copy.

const stub = (t: Omit<Treatment, "content" | "published" | "reviewerId" | "nationalRange" | "videoSlugs" | "category">): Treatment => ({
  category: "surgery",
  ...t,
  nationalRange: undefined,
  videoSlugs: [],
  reviewerId: null,
  published: false,
  content: null,
});

const baseTreatments: Treatment[] = [
  {
    slug: "gynecomastia-surgery",
    category: "surgery",
    name: "Gynecomastia surgery",
    menuName: "Gynecomastia surgery",
    alternateName: "Male breast reduction",
    summary: "Surgery for enlarged chest tissue in men: fat removed by liposuction, gland cut out, or both.",
    procedure: {
      procedureType: "https://schema.org/SurgicalProcedure",
      bodyLocation: "Chest",
      howPerformed:
        "Fat is removed by liposuction, breast gland tissue is cut out through a small cut at the edge of the areola or the side of the chest, or both; extra skin is removed or tightened in large cases.",
      preparation: "Examination by a surgeon, review of medicines, blood tests and an anaesthesia fitness check.",
      followup: "Compression garment, review visits, and a gradual return to exercise as the surgeon advises.",
    },
    nationalRange: { minInr: 58000, maxInr: 98000, fromInr: 42000, validAsOf: "2026-11", isSample: true },
    costFactors: [
      { factor: "Grade and method", why: "Liposuction alone takes less theatre time than gland removal with skin removal." },
      { factor: "Anaesthesia", why: "General anaesthesia costs more than local with sedation." },
      { factor: "Hospital type", why: "A day-care centre and a multi-specialty hospital price rooms and theatre differently." },
      { factor: "City", why: "Rents and wages differ between cities, and so do facility fees." },
      { factor: "Stay", why: "Day care at the lower end, one night in a room at the upper." },
      { factor: "Garment and medicines", why: "Brand and number of garments, and the medicines prescribed." },
      { factor: "Follow-up visits", why: "Some quotes include them, some charge per visit." },
      { factor: "A second operation", why: "Some hospitals include a touch-up for a period, some charge in full." },
    ],
    deskWork: "About 1 week",
    cardBlurb: "The full procedure guide: who it suits, how it is done, recovery.",
    icon: 3,
    related: ["liposuction", "tummy-tuck"],
    readSlugs: ["gynecomastia-grades", "gynecomastia-fat-or-gland", "pseudogynecomastia"],
    videoSlugs: ["gynecomastia-explained", "gynecomastia-recovery-weeks"],
    reviewerId: null,
    published: false,
    content: gynecomastiaContent,
    images: { hero: {}, operation: {}, recovery: {}, card: {} },
  },
  {
    slug: "liposuction",
    category: "surgery",
    name: "Liposuction",
    menuName: "Liposuction",
    alternateName: "Body contouring",
    summary: "Removes stubborn pockets of fat from areas such as the abdomen, flanks, thighs, arms, chest and chin. Not a weight-loss treatment.",
    procedure: {
      procedureType: "https://schema.org/SurgicalProcedure",
      bodyLocation: "Abdomen, waist, thighs, hips, arms, back, chest, chin and neck",
      howPerformed: "Fat is loosened and drawn out through tiny cuts with a thin tube, sometimes with ultrasound, power or laser assistance; a solution is often put into the fat first.",
      preparation: "Examination by a surgeon, review of medicines, blood tests and an anaesthesia fitness check.",
      followup: "Compression garment, a first review about three to five days later, more review visits, and a gradual return to exercise as the surgeon advises.",
    },
    // Sample figure for one area, from one source. Other cases are on the cost page by area. No headline floor price.
    nationalRange: { minInr: 60000, maxInr: 80000, validAsOf: "2026-11", isSample: true },
    costFactors: [
      { factor: "Areas treated", why: "The abdomen, flanks, thighs, arms, back, chest and chin differ in size, depth of fat and skin." },
      { factor: "Number of areas", why: "Two or more areas take longer, need a bigger anaesthetic plan and usually cost more." },
      { factor: "Technique", why: "Ultrasound-assisted and other equipment-based methods are priced differently from standard suction." },
      { factor: "Amount of fat removed", why: "More fat means more time, and may mean a night in hospital." },
      { factor: "Hospital charges", why: "A day-care centre and a multi-specialty hospital price theatre and rooms differently." },
      { factor: "Anaesthesia", why: "General anaesthesia costs more than local with sedation." },
      { factor: "Garments and follow-up", why: "Number of garments, and whether review visits are included or charged one by one." },
      { factor: "A second operation", why: "Some quotes include a touch-up for a period, some charge in full." },
    ],
    deskWork: "About 1 to 2 weeks",
    cardBlurb: "Removes stubborn fat from chosen areas. Not for weight loss.",
    icon: 1,
    related: ["gynecomastia-surgery", "tummy-tuck"],
    readSlugs: ["liposuction-vs-weight-loss", "liposuction-recovery-timeline", "liposuction-body-areas"],
    videoSlugs: [],
    reviewerId: null,
    published: false,
    content: liposuctionContent,
    display: liposuctionDisplay,
    images: { hero: {}, operation: {}, recovery: {}, card: {} },
  },
  stub({
    slug: "tummy-tuck",
    name: "Tummy tuck",
    menuName: "Tummy tuck",
    alternateName: "Abdominoplasty",
    summary: "For loose skin and weak abdominal muscle after weight change.",
    procedure: {
      procedureType: "https://schema.org/SurgicalProcedure",
      bodyLocation: "Abdomen",
      howPerformed: "Extra skin is removed and the abdominal muscle is tightened.",
      preparation: "Examination, medicine review and an anaesthesia fitness check.",
      followup: "Compression garment and review visits.",
    },
    costFactors: [],
    deskWork: "2 to 3 weeks",
    cardBlurb: "For loose skin and weak abdominal muscle after weight change.",
    icon: 2,
    related: ["liposuction", "gynecomastia-surgery"],
    readSlugs: [],
  }),
  stub({
    slug: "rhinoplasty",
    name: "Rhinoplasty",
    menuName: "Rhinoplasty",
    alternateName: "Nose surgery",
    summary: "Surgery to change the shape or the breathing function of the nose.",
    procedure: {
      procedureType: "https://schema.org/SurgicalProcedure",
      bodyLocation: "Nose",
      howPerformed: "The bone and cartilage of the nose are reshaped.",
      preparation: "Examination, medicine review and an anaesthesia fitness check.",
      followup: "Splint, review visits and a staged return to activity.",
    },
    costFactors: [],
    deskWork: "To be confirmed",
    cardBlurb: "Surgery to change the shape or the breathing function of the nose.",
    icon: 1,
    related: ["liposuction"],
    readSlugs: [],
  }),
  stub({
    slug: "breast-augmentation",
    name: "Breast augmentation",
    menuName: "Breast augmentation",
    summary: "Surgery to increase breast size with implants or fat.",
    procedure: {
      procedureType: "https://schema.org/SurgicalProcedure",
      bodyLocation: "Breast",
      howPerformed: "An implant is placed through a small cut, or fat is moved from another area.",
      preparation: "Examination, medicine review and an anaesthesia fitness check.",
      followup: "Support garment and review visits.",
    },
    costFactors: [],
    deskWork: "To be confirmed",
    cardBlurb: "Surgery to increase breast size with implants or fat.",
    icon: 3,
    related: ["tummy-tuck"],
    readSlugs: [],
  }),

  // ---------------------------------------------------------------- release 3: skin, hair and injectables
  // The registry owns identity and short copy. Dev B's content/skin-hair/* is merged over each entry by slug
  // (content, display, costFactors, nationalRange, readSlugs, images, seo ...). Until a topic has content it
  // renders the short "being prepared" page and stays noindex. No price figure is invented here.
  topic({
    slug: SLUGS.acne,
    category: "skin",
    name: "Acne treatment",
    menuName: "Acne treatment",
    summary: "Medicines, peels and light-based sessions a doctor can use for acne, chosen by the type and grade of acne and by skin type.",
    procedure: {
      procedureType: "https://schema.org/NoninvasiveProcedure", // ASSUMPTION: reviewer to confirm
      bodyLocation: "Face, chest and back",
      howPerformed: "A doctor examines the skin, then chooses creams, tablets, peels, light or laser sessions, or a mix, and reviews progress over weeks.",
      preparation: "Skin examination, a review of current creams and medicines, and a pregnancy check where it applies.",
      followup: "Review visits every few weeks, sun protection, and changes to the plan as the skin responds.",
    },
    costFactors: [
      { factor: "Type and grade of acne", why: "Mild acne may need a cream only, while deeper or widespread acne may need tablets, tests and more visits." },
      { factor: "Who treats", why: "A dermatologist and a general clinic price consultations differently." },
      { factor: "Medicines", why: "The prescription decides the monthly cost, and some tablets need blood tests." },
      { factor: "Sessions", why: "Peels, light and laser are priced per session, and a plan often needs several." },
      { factor: "Follow-up visits", why: "Some clinics include review visits in the plan, some charge for each." },
      { factor: "Aftercare products", why: "Cleansers, moisturisers and sun protection are bought separately in most plans." },
      { factor: "City and clinic type", why: "Rents and wages differ between cities, and so do clinic fees." },
    ],
    deskWork: "Most people go on with normal days",
    cardBlurb: "Types and grades of acne, treatment options, what the first three months look like.",
    icon: 2,
    related: [SLUGS.hydrafacial, SLUGS.antiAging],
    readSlugs: ["acne-grades-when-to-see-doctor", "acne-medicines-doctors-prescribe", "how-long-acne-treatment-takes"],
  }),
  topic({
    slug: SLUGS.hydrafacial,
    category: "skin",
    name: "Hydrafacial",
    menuName: "Hydrafacial",
    summary: "A skin-care session with a device that cleanses, exfoliates and applies serums. It is not a treatment for acne, scars or ageing.",
    procedure: {
      procedureType: "https://schema.org/NoninvasiveProcedure", // ASSUMPTION: reviewer to confirm
      bodyLocation: "Face",
      howPerformed: "A handheld device cleanses the skin, loosens dead skin with a mild acid, draws out debris by suction and applies serums, in steps over about half an hour.",
      preparation: "A short skin check, including recent medicines, pregnancy, active infection and sunburn.",
      followup: "Gentle skin care and sun protection for a few days, and a review visit if the skin reacts.",
    },
    costFactors: [
      { factor: "Base session or add-ons", why: "Boosters, extra steps and add-on serums are usually priced on top of the base session." },
      { factor: "Packs", why: "A pack of sessions has a total and a per-session figure, and the two should be read together." },
      { factor: "Who performs it", why: "A doctor-led clinic and a salon price the same session differently." },
      { factor: "Device parts and serums", why: "Single-use tips and the serum choice change the bill." },
      { factor: "Aftercare products", why: "Some clinics include them, some sell them separately." },
      { factor: "City and clinic type", why: "Rents and wages differ between cities, and so do fees." },
    ],
    deskWork: "Most people go back to routine the same day",
    cardBlurb: "What the steps are, who should skip it, downtime and aftercare.",
    icon: 1,
    related: [SLUGS.acne, SLUGS.antiAging],
    readSlugs: ["hydrafacial-vs-regular-facial", "hydrafacial-side-effects-who-should-skip", "read-hydrafacial-quote"],
  }),
  topic({
    slug: SLUGS.toxin,
    category: "injectables",
    name: "Botulinum toxin injections",
    menuName: "Botulinum toxin injections",
    // No brand name and no alternateName until the founder's lawyer decides (see seo-2, decision 1).
    summary: "Small injections of a prescription medicine into facial muscles to soften lines such as frown lines. A doctor decides if it suits you.",
    procedure: {
      procedureType: "https://schema.org/NoninvasiveProcedure",
      bodyLocation: "Face",
      howPerformed: "A doctor injects a diluted prescription medicine into chosen facial muscles with a fine needle, at several points, in a short visit.",
      preparation: "A doctor's examination, a medical history, a check of current medicines, and a pregnancy check where it applies.",
      followup: "Staying upright and avoiding rubbing the area for the hours the doctor names, and a review visit if needed.",
    },
    costFactors: [
      { factor: "Areas treated", why: "Each area needs a different amount of medicine and a different plan." },
      { factor: "Who injects", why: "A trained doctor and the clinic's seniority change the consultation fee." },
      { factor: "Repeat visits", why: "The effect fades over months, so the yearly cost depends on how often you return." },
      { factor: "Review visit", why: "Some clinics include a check visit, some charge for it." },
      { factor: "City and clinic type", why: "Rents and wages differ between cities, and so do fees." },
    ],
    deskWork: "Most people go back to routine the same day",
    cardBlurb: "What it is, who it suits, side effects, aftercare, and how to check what is used.",
    icon: 3,
    related: [SLUGS.antiAging, SLUGS.prp],
    readSlugs: ["how-long-wrinkle-injections-last", "botulinum-toxin-side-effects", "check-wrinkle-injection-product"],
  }),
  topic({
    slug: SLUGS.antiAging,
    category: "skin",
    name: "Anti-aging treatment",
    menuName: "Anti-aging treatment",
    alternateName: "Anti-ageing skin care",
    summary: "The non-surgical options people compare for ageing skin: injections, peels, light and energy devices, and daily skin care. A doctor matches them to your skin.",
    procedure: {
      procedureType: "https://schema.org/NoninvasiveProcedure", // ASSUMPTION: reviewer to confirm
      bodyLocation: "Face and neck",
      howPerformed: "A doctor looks at skin type, the signs that bother you and your health, then plans one or more options such as injections, peels, light or energy devices and a home routine.",
      preparation: "A skin and medical history, a review of current products and medicines, and sun exposure habits.",
      followup: "Review visits, sun protection, and changes to the plan as the skin responds.",
    },
    costFactors: [
      { factor: "Which options are combined", why: "Each option has its own price, and a plan often joins two or more." },
      { factor: "Number of sessions", why: "Peels, light and energy devices are priced per session, and a course needs several." },
      { factor: "Area treated", why: "Face only, or face and neck, changes the plan and the time." },
      { factor: "Who treats", why: "A dermatologist and a general clinic price consultations differently." },
      { factor: "Maintenance", why: "Most options need repeat visits, so the yearly cost matters more than one session." },
      { factor: "City and clinic type", why: "Rents and wages differ between cities, and so do fees." },
    ],
    deskWork: "Depends on the option, from none to a few days",
    cardBlurb: "A plain map of the options, what each can and cannot do, and what to ask.",
    icon: 2,
    related: [SLUGS.toxin, SLUGS.prp, SLUGS.hydrafacial],
    readSlugs: ["skin-boosters-vs-fillers-vs-toxin", "chemical-peels-for-ageing-skin", "anti-aging-care-by-decade"],
  }),
  topic({
    slug: SLUGS.prp,
    category: "hair",
    name: "PRP treatment",
    menuName: "PRP treatment",
    alternateName: "Platelet-rich plasma",
    summary: "A small blood sample is spun to concentrate platelets, which are then injected into the scalp or face skin. Results vary and it is not a transplant.",
    procedure: {
      procedureType: "https://schema.org/PercutaneousProcedure", // ASSUMPTION: reviewer to confirm
      bodyLocation: "Scalp, face",
      howPerformed: "Blood is drawn from your arm and spun in a machine to separate the platelet-rich part, which is injected into the skin of the scalp or face with a fine needle.",
      preparation: "A doctor's examination, a medical history, a review of blood-thinning medicines, and a plan for the number of sessions.",
      followup: "Gentle care of the area for a day or two, and review visits as the doctor plans.",
    },
    costFactors: [
      { factor: "Area treated", why: "Scalp and face need different amounts of work." },
      { factor: "Number of sessions", why: "A plan usually has several sessions spaced weeks apart, so the course total matters." },
      { factor: "Kit and method", why: "The blood-draw kit and the method used for spinning the sample are priced differently." },
      { factor: "Who performs it", why: "A doctor-led clinic and other settings price it differently." },
      { factor: "Add-ons", why: "Needling or other add-ons are priced on top of the base session." },
      { factor: "City and clinic type", why: "Rents and wages differ between cities, and so do fees." },
    ],
    deskWork: "Same day to 2 days, as the scalp or face settles",
    cardBlurb: "How it is made, what the evidence says, sessions, side effects, and who should wait.",
    icon: 1,
    related: [SLUGS.hairTransplant, SLUGS.antiAging],
    readSlugs: ["prp-how-it-is-made", "prp-hair-sessions-and-spacing", "prp-cost-why-quotes-differ"],
  }),
  topic({
    slug: SLUGS.hairTransplant,
    category: "hair",
    careKind: "surgical",
    name: "Hair transplant",
    menuName: "Hair transplant",
    summary: "Moves hair follicles from a donor area, usually the back of the scalp, to a thinning part. Results vary with donor hair and the plan.",
    procedure: {
      procedureType: "https://schema.org/SurgicalProcedure",
      bodyLocation: "Scalp",
      howPerformed: "Hair follicles are taken from a donor area one by one or as a thin strip, and placed in tiny cuts in the thinning area, usually under local anaesthesia.",
      preparation: "Scalp examination, a review of medicines and health, and a plan for the number of grafts and the hairline.",
      followup: "A first wash visit, review visits, and care instructions for the scabs and the donor area.",
    },
    costFactors: [
      { factor: "Grafts needed", why: "A larger area needs more grafts, and the quote often depends on the graft count." },
      { factor: "Technique", why: "The method used to take and place follicles changes time and fees." },
      { factor: "Donor limits and sessions", why: "A limited donor area may mean more than one session." },
      { factor: "Body hair", why: "Using beard or body hair needs extra planning." },
      { factor: "Facility type", why: "A day-care centre and a hospital price theatre and rooms differently." },
      { factor: "Surgeon time", why: "Who does the key steps, and how long they take, changes the bill." },
      { factor: "Medicines and PRP add-on", why: "Medicines after the procedure and any PRP add-on may be listed separately." },
      { factor: "Follow-up visits", why: "Some quotes include them, some charge for each." },
      { factor: "Tax", why: "Whether tax is added to the quoted figure should be asked in writing." },
    ],
    deskWork: "To be confirmed by the reviewer",
    cardBlurb: "Techniques, who is a candidate, grafts, recovery calendar, shock loss and cost.",
    icon: 1,
    related: [SLUGS.prp],
    readSlugs: ["hair-transplant-fue-fut-dhi", "hair-transplant-norwood-grade-candidate", "hair-transplant-recovery-calendar"],
  }),
];

/** Non-surgical entries default to published=false and no content, like the surgery stubs. */
function topic(t: Omit<Treatment, "content" | "published" | "reviewerId" | "nationalRange" | "videoSlugs">): Treatment {
  return { ...t, nationalRange: undefined, videoSlugs: [], reviewerId: null, published: false, content: null, images: { hero: {}, operation: {}, recovery: {}, card: {} } };
}

/** The registry: base entries with Dev B's skin and hair content merged over them by slug. */
export const treatments: Treatment[] = baseTreatments.map((t) => {
  const topicContent = skinHairTreatments.find((x) => x.treatment.slug === t.slug);
  if (!topicContent) return t;
  const over = topicContent.treatment;
  const display = { ...t.display, ...over.display };
  if (topicContent.costUnit && !over.display?.costUnit) display.costUnit = topicContent.costUnit;
  return {
    ...t,
    ...over,
    slug: t.slug,
    category: t.category,
    careKind: over.careKind ?? t.careKind,
    display,
    includeKeys: over.includeKeys ?? topicContent.includeKeys ?? t.includeKeys,
    costPage: over.costPage ?? topicContent.costPage ?? t.costPage,
    images: { ...t.images, ...over.images },
  };
});
