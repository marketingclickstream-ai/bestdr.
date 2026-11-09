import type { CityTreatmentPage, FacilityData, IncludeKey, IncludeState, PriceMeta } from "./types";

// City pages for gynecomastia and liposuction in Delhi, Lucknow and Kanpur, plus liposuction in Gurgaon.
// Every page is written for its own city and treatment (travel, arrival, local questions); none is a
// find-and-replace of another. All of them render fully for staging with Sample / To be confirmed chips,
// and none can leave noindex: the publish gate fails them on sample price, placeholder reviewer, missing
// sign-offs and unsourced local context. Do not weaken the gate. Anything we do not know is written as
// "NEEDS REAL DATA" in localContext (with an empty source on purpose) and as a to-be-confirmed line in the copy.
//
// Prices: the founder's own published figures are the only source. They are the same for every city
// until local quotes exist, and every page says so. No figure is scaled or guessed per city.

const GYN_PRICE: PriceMeta = {
  minInr: 62000, maxInr: 94000, fromInr: 45000, validAsOf: "2026-11", collectedOn: "2026-11-10", dataPoints: 1,
  sourceType: "founder_published", isSample: true, chipLabel: "To be confirmed",
  basis: "Working range from one source, dated 10 Nov 2026. It covers the three fees listed below. The same figure is shown for every city until local quotes are collected. Bills from about Rs 45,000 are possible for small cases.",
};
const LIPO_PRICE: PriceMeta = {
  minInr: 60000, maxInr: 80000, validAsOf: "2026-11", collectedOn: "2026-11-10", dataPoints: 1,
  sourceType: "founder_published", isSample: true, chipLabel: "To be confirmed",
  basis: "Working range for one area, such as the abdomen or the arms, from one source dated 10 Nov 2026. Two areas, ultrasound-assisted work, full-body plans and the chin cost differently, so see the table. The same figures are shown for every city until local quotes are collected.",
};

const gynIncludes: Record<IncludeKey, IncludeState> = { surgeon: "included", anaesthesia: "included", theatre: "included", stay: "varies", consumables: "unknown", followups: "unknown", medicines: "unknown" };
const lipoIncludes: Record<IncludeKey, IncludeState> = { surgeon: "unknown", anaesthesia: "unknown", theatre: "unknown", stay: "varies", consumables: "unknown", followups: "unknown", medicines: "unknown" };

const base = (treatmentSlug: string, citySlug: string) => ({
  treatmentSlug, citySlug, isPlaceholder: false, published: false, reviewerId: "sample-reviewer",
  signoffs: {}, lighthouseOk: false, beforeAfter: [] as { imageId: string; consentId: string | null }[],
});

const gynChecks: FacilityData["checks"] = [
  { check: "Registration", why: "The facility and the surgeon should both be registered", ask: "May I see the facility's certificate and proof that the surgeon is registered with a medical council?" },
  { check: "Day care or beds", why: "Decides whether you can stay a night if needed", ask: "Is an overnight bed kept for me if the surgeon asks?" },
  { check: "Privacy at the front desk", why: "Many men want a quiet drop-off and discreet paperwork", ask: "Which entrance is used, and what name appears on the billing paper?" },
  { check: "Emergency plan", why: "A complication needs a plan, not a phone call", ask: "Where would I be taken if I needed more care?" },
  { check: "Billing", why: "Every fee and every extra, before you decide", ask: "Can I have the estimate in writing, with every line?" },
];
const lipoChecks: FacilityData["checks"] = [
  { check: "Registration and accreditation", why: "An outside body should have checked the facility, and the surgeon should be on a medical council's register", ask: "Which body accredits the facility, until when, and where can I check the surgeon's registration?" },
  { check: "Anaesthesia team", why: "Larger or several-area plans need a separate anaesthetist, and a plan for monitoring", ask: "Who gives the anaesthetic, and how is my breathing and blood pressure watched after the operation?" },
  { check: "Limit on fat removed in one session", why: "Removing a very large volume at once raises the risk", ask: "What limit do you keep for one session, and would you split a large plan?" },
  { check: "Garments and follow-up", why: "The first garment and the first visit decide how the shape settles", ask: "Which garments are included, and how many visits are in the quote?" },
  { check: "Clot prevention and emergencies", why: "Clots are rare but serious after larger operations", ask: "What do you do to lower the risk of clots, and where would I go in an emergency?" },
];

// ---------------------------------------------------------------- gynecomastia in Delhi
export const gynecomastiaDelhi: CityTreatmentPage = {
  ...base("gynecomastia-surgery", "delhi"),
  metaDescription: "Gynecomastia surgery in Delhi: price lines, recovery, risks, and how a visit from Noida, Ghaziabad or Faridabad is planned.",
  price: GYN_PRICE,
  includes: gynIncludes,
  facilities: {
    intro: "No partner facility is confirmed in Delhi yet. Until one is, this page shows how a Delhi plan is made, and the checks to run on any place you are given. If the surgery turns out to be in Gurgaon, the page will say so plainly.",
    partners: [{ type: "Partner facility in Delhi (to be confirmed)", count: null }],
    accreditation: null,
    checks: gynChecks,
  },
  travel: {
    intro: "In Delhi the hard part is not distance but traffic. Plan the consultation day and the operation day for off-peak hours, and bring an attendant who can drive you home.",
    airport: "Indira Gandhi International Airport (to be verified)",
    station: "New Delhi, Old Delhi and Hazrat Nizamuddin stations (to be verified against the facility)",
    stayDays: "Day care for most; one night if the surgeon asks",
    metro: "Most of Delhi is on the metro, but you should not take it home after the operation. A cab with a reclining seat is easier on the chest. {sample} The nearest station to the facility is added once it is confirmed.",
    roadTimes: [
      { from: "Noida", time: "50 to 90 min", tip: "Cross the river before the evening peak" },
      { from: "Ghaziabad", time: "60 to 100 min", tip: "Ask for a late-morning slot to miss the rush" },
      { from: "Faridabad", time: "50 to 90 min", tip: "Plan the ride home away from peak hour" },
      { from: "Gurgaon", time: "50 to 90 min", tip: "Leave before the morning peak" },
    ],
    privacyNote: "Ask which entrance is quietest and whether the clothes you wear in can be loose. No building name is printed on any message we send. A night's stay is a surgeon's decision, and your attendant can stay with you.",
    mapCaption: "Travel into Delhi from nearby towns, no building shown.",
  },
  localContext: [
    { text: "NEEDS REAL DATA: which Delhi facility, if any, will host the operation", source: "", asOf: "" },
    { text: "NEEDS REAL DATA: metro station and road access to that facility, with a date", source: "", asOf: "" },
  ],
  usefulness: "",
  localCopy: [
    "Delhi pages are written after a partner is confirmed. Until then this page shows how a Delhi plan is made.",
    "Noida, Ghaziabad and Faridabad patients lose most time to traffic, not distance.",
  ],
  localNotes: [
    { heading: "Where the operation happens", text: "To be confirmed. If it is done in Gurgaon, the [Gurgaon page](/gynecomastia-surgery-in-gurgaon) has the road times and the facility checks. {tbc}" },
    { heading: "Choosing a day", text: "Delhi traffic is lightest mid-morning and early afternoon on weekdays. Ask for a morning operation slot so that you are home well before the evening peak." },
    { heading: "Air quality and the first week", text: "Winter air in Delhi can be poor. Whether it matters for recovery is a question for the reviewing surgeon. {pending} Until then, plan the first week indoors if you can." },
    { heading: "Who comes with you", text: "Bring one adult who can drive. Parking near a hospital can be limited, so ask the coordinator where the attendant can wait." },
  ],
};

// ---------------------------------------------------------------- gynecomastia in Lucknow
export const gynecomastiaLucknow: CityTreatmentPage = {
  ...base("gynecomastia-surgery", "lucknow"),
  metaDescription: "Gynecomastia surgery in Lucknow: price lines, recovery, risks, and the trip from Barabanki, Unnao or Sitapur.",
  price: GYN_PRICE,
  includes: gynIncludes,
  facilities: {
    intro: "No partner facility is confirmed in Lucknow yet. If the operation ends up being in another city, we will say so at the top of this page and not claim a local site. Whatever the place, run the same checks.",
    partners: [{ type: "Partner facility in Lucknow (to be confirmed)", count: null }],
    accreditation: null,
    checks: gynChecks,
  },
  travel: {
    intro: "Many people who ask about this surgery in Lucknow live in a town outside it and come in for the day. The plan is built around one early train or road trip in, and one ride home with a seat that reclines.",
    airport: "Chaudhary Charan Singh International Airport, Lucknow (to be verified)",
    station: "Charbagh station and the Lucknow Metro (to be verified against the facility)",
    stayDays: "Day care for most; one night if the surgeon asks or the road home is long",
    metro: "The Lucknow Metro runs along the north-south corridor and is useful for the consultation visit. After the operation a cab is easier. {sample} Station names and distances to the facility are added once it is confirmed.",
    roadTimes: [
      { from: "Barabanki", time: "40 to 70 min", tip: "Short enough for a same-day return if the surgeon agrees" },
      { from: "Unnao", time: "60 to 100 min", tip: "Consider a night in Lucknow if the operation is late in the day" },
      { from: "Sitapur", time: "80 to 120 min", tip: "Ask whether the first review can be on a video call" },
      { from: "Hardoi", time: "100 to 150 min", tip: "Plan a night's stay and book the return by road, not train" },
    ],
    privacyNote: "If you come from a smaller town, tell the coordinator early who may know you at the hospital. A cousin or a neighbour at the front desk is a real worry for many men, and a quiet entrance or a different slot can help.",
    mapCaption: "Travel into Lucknow from nearby districts, no building shown.",
  },
  localContext: [
    { text: "NEEDS REAL DATA: which Lucknow facility, if any, will host the operation", source: "", asOf: "" },
    { text: "NEEDS REAL DATA: road times from Barabanki, Unnao, Sitapur and Hardoi, checked on a map with a date", source: "", asOf: "" },
    { text: "NEEDS REAL DATA: guest-house or hotel options near the facility", source: "", asOf: "" },
  ],
  usefulness: "",
  localCopy: [
    "Many people ask about this surgery in Lucknow from a town outside it, and come in for the day.",
    "A first review on a video call can save a second long trip to the city.",
  ],
  localNotes: [
    { heading: "Coming in from a smaller town", text: "Decide before you book whether you will go home the same day or stay a night. Roads out of Lucknow in the evening are slow, and an early operation slot makes a same-day return realistic for nearby towns." },
    { heading: "Language", text: "Hindi and Hinglish are fine for the first call and for the consultation. Ask for the written estimate in the language you read most easily. {tbc}" },
    { heading: "Summer heat and the vest", text: "May and June heat makes the compression vest hard to wear. Ask for a breathable garment and a spare, and plan the first week in a cool room." },
    { heading: "If you live in Kanpur", text: "Lucknow is the nearest other city we cover for Kanpur patients. Read the [Kanpur page](/gynecomastia-surgery-in-kanpur) to compare the trip." },
  ],
};

// ---------------------------------------------------------------- gynecomastia in Kanpur
export const gynecomastiaKanpur: CityTreatmentPage = {
  ...base("gynecomastia-surgery", "kanpur"),
  metaDescription: "Gynecomastia surgery in Kanpur: price lines, recovery, risks, and whether the operation is in Kanpur or a short trip away.",
  price: GYN_PRICE,
  includes: gynIncludes,
  facilities: {
    intro: "No partner facility is confirmed in Kanpur yet. It is possible that people from Kanpur will be asked to travel for the operation, and if so this page will say where and how far, before anything else.",
    partners: [{ type: "Partner facility for Kanpur patients (to be confirmed)", count: null }],
    accreditation: null,
    checks: gynChecks,
  },
  travel: {
    intro: "For Kanpur the first question is where the operation is. If it is in Kanpur, plan a local day-care visit. If it is in Lucknow, plan a trip of roughly one and a half to two hours each way, and think about a night away.",
    airport: "Kanpur civil airport and Lucknow airport (service and schedules to be verified)",
    station: "Kanpur Central, and Charbagh in Lucknow (to be verified)",
    stayDays: "Day care for most; one night if the surgeon asks or travel is long",
    metro: "Kanpur has a metro that is being extended; whether it serves the facility is to be checked. {sample} For the trip to Lucknow, rail and road both run between the two cities, and the road is the easier ride home.",
    roadTimes: [
      { from: "Unnao", time: "30 to 60 min", tip: "Close enough for a same-day consultation" },
      { from: "Kanpur Dehat", time: "40 to 80 min", tip: "Ask for an early slot for the operation" },
      { from: "Fatehpur", time: "70 to 110 min", tip: "Plan a night in Kanpur after the operation" },
      { from: "Lucknow", time: "100 to 150 min", tip: "The other city we cover; compare before you book" },
    ],
    privacyNote: "Kanpur is a city where people often know each other. Ask which entrance is used and whether the first review can be a video call, so that you travel less in the first two weeks.",
    mapCaption: "Travel in and out of Kanpur, no building shown.",
  },
  localContext: [
    { text: "NEEDS REAL DATA: whether a Kanpur facility exists for this operation, or patients go to Lucknow", source: "", asOf: "" },
    { text: "NEEDS REAL DATA: timings of trains and buses between Kanpur and Lucknow, with a date", source: "", asOf: "" },
  ],
  usefulness: "",
  localCopy: [
    "For Kanpur patients the first question is where the operation is, in Kanpur or a short trip away.",
    "A first review by video can save the second trip after the operation.",
  ],
  localNotes: [
    { heading: "Do I have to leave Kanpur?", text: "To be confirmed. Until a Kanpur partner exists, the likeliest plan is a consultation by call, then a trip to the facility for the operation. The page will say so clearly if that is the case. {tbc}" },
    { heading: "Follow-up after you go home", text: "Ask which review visits must be in person and which can be on a video call. The first check at about a week matters most, and you may be asked to attend it in person." },
    { heading: "Train and road", text: "If you travel to Lucknow, the road is the easier way home with a compression vest on. Ask the coordinator for a cab that reclines. Train timings are to be added after they are checked. {pending}" },
    { heading: "Family and stay", text: "If you stay a night away, one family member can usually stay with you. Ask about guest-house options near the facility." },
  ],
};

// ---------------------------------------------------------------- liposuction in Gurgaon
export const liposuctionGurgaon: CityTreatmentPage = {
  ...base("liposuction", "gurgaon"),
  metaDescription: "Liposuction in Gurgaon: price by area, recovery, risks, and the trip from Delhi, Noida, Faridabad or Rewari.",
  price: LIPO_PRICE,
  includes: lipoIncludes,
  facilities: {
    intro: "A liposuction plan in Gurgaon, also written Gurugram, is done at a partner facility that we do not name on this page. Larger plans with several areas need a hospital with an anaesthesia team, and small ones may suit a day-care centre. Ask which one your plan needs.",
    partners: [{ type: "Partner facility (day care or hospital)", count: null }],
    accreditation: null,
    checks: lipoChecks,
  },
  travel: {
    intro: "People come to Gurgaon for liposuction from across the Delhi region. Several areas treated at once means a longer day and a garment under your clothes on the ride home, so plan the trip with that in mind.",
    airport: "Indira Gandhi International Airport, Delhi (to be verified)",
    station: "HUDA City Centre (Yellow Line) and Sikandarpur (Rapid Metro)",
    stayDays: "Day care for small plans; a night for larger ones if the surgeon asks",
    metro: "The Yellow Line reaches HUDA City Centre and Rapid Metro joins it at Sikandarpur, which suits the consultation visit. After a larger plan a cab is more comfortable. {sample}",
    roadTimes: [
      { from: "South Delhi", time: "40 to 70 min", tip: "A garment feels tight in a long jam, so leave off-peak" },
      { from: "Noida", time: "70 to 110 min", tip: "For several areas, book a night nearby" },
      { from: "Faridabad", time: "60 to 100 min", tip: "Bring a loose, dark set of clothes to wear home" },
      { from: "Rewari", time: "60 to 90 min", tip: "A reclining seat and a pillow for the ride" },
    ],
    privacyNote: "The coordinator can tell you which entrance is quiet. No building name is printed on any message we send. If you are staying a night, one adult can stay with you.",
    mapCaption: "Travel into Gurgaon from nearby areas, no building shown.",
  },
  localContext: [
    { text: "NEEDS REAL DATA: the partner facility's anaesthesia set-up for multi-area plans", source: "", asOf: "" },
    { text: "NEEDS REAL DATA: drive time from the facility to the nearest metro station", source: "", asOf: "" },
  ],
  usefulness: "",
  localCopy: [
    "Several areas treated at once means a longer day and a garment under your clothes on the ride home.",
    "Larger plans need a hospital with an anaesthesia team; small ones may suit a day-care centre.",
  ],
  localNotes: [
    { heading: "Small plan or large plan", text: "A single small area may be done as day care. Two or more areas, or an ultrasound-assisted plan, often need a longer anaesthetic and more recovery time. Ask the surgeon which of the two your plan is before you choose a facility." },
    { heading: "Corporate schedules", text: "Many people from Gurgaon offices plan the operation on a Thursday or Friday so that a weekend sits inside the first days of rest. Whether it is wise for you is a question for the surgeon. {pending}" },
    { heading: "Heat and the garment", text: "From April to September the garment is hard to wear in a Gurgaon summer. Ask for a breathable fabric and a spare, and plan the first week in a cool room." },
    { heading: "If you live in Delhi", text: "Delhi is close, but the roads are slow. See the [Delhi page](/liposuction-in-delhi) to compare the trip." },
  ],
};

// ---------------------------------------------------------------- liposuction in Delhi
export const liposuctionDelhi: CityTreatmentPage = {
  ...base("liposuction", "delhi"),
  metaDescription: "Liposuction in Delhi: price by area, recovery, risks, and how a visit from Noida, Ghaziabad or Faridabad is planned.",
  price: LIPO_PRICE,
  includes: lipoIncludes,
  facilities: {
    intro: "No partner facility is confirmed in Delhi yet. Until one is, this page shows how a Delhi liposuction plan is made, and the checks to run on any facility. If the work is done in Gurgaon, the page will say so first.",
    partners: [{ type: "Partner facility in Delhi (to be confirmed)", count: null }],
    accreditation: null,
    checks: lipoChecks,
  },
  travel: {
    intro: "A body-contouring plan in Delhi usually means one consultation, one operation day and a first review within the week. Three trips across the city add up, so ask which of them can be done by video.",
    airport: "Indira Gandhi International Airport (to be verified)",
    station: "New Delhi, Old Delhi and Hazrat Nizamuddin stations (to be verified against the facility)",
    stayDays: "Day care for small plans; one night for larger ones if the surgeon asks",
    metro: "The metro is useful for the consultation and the first review, but a cab with a reclining seat is better after the operation. {sample} The nearest station to the facility is added once it is confirmed.",
    roadTimes: [
      { from: "Noida", time: "50 to 90 min", tip: "Plan the first review for a mid-morning slot" },
      { from: "Ghaziabad", time: "60 to 100 min", tip: "Ask if the first review can be a video call" },
      { from: "Faridabad", time: "50 to 90 min", tip: "Wear loose clothes that fit over the garment" },
      { from: "Gurgaon", time: "50 to 90 min", tip: "Consider a night nearby after a larger plan" },
    ],
    privacyNote: "Ask which entrance is used, whether billing papers carry only your name, and whether you can leave by a side door. A garment is hidden by loose clothes, so pack a size up.",
    mapCaption: "Travel into Delhi from nearby towns, no building shown.",
  },
  localContext: [
    { text: "NEEDS REAL DATA: which Delhi facility, if any, will host liposuction plans", source: "", asOf: "" },
    { text: "NEEDS REAL DATA: whether the Delhi facility keeps a bed for an overnight stay after larger plans", source: "", asOf: "" },
  ],
  usefulness: "",
  localCopy: [
    "A body-contouring plan in Delhi usually means one consultation, one operation day and a first review within the week.",
    "Three trips across the city add up, so ask which of them can be done by video.",
  ],
  localNotes: [
    { heading: "Where the operation happens", text: "To be confirmed. If it is done in Gurgaon, the [Gurgaon page](/liposuction-in-gurgaon) has the facility checks and road times for that route. {tbc}" },
    { heading: "Winter and the first weeks", text: "Winter fog and poor air in Delhi may affect how comfortable the first weeks are. Whether it changes the plan is for the reviewing surgeon. {pending}" },
    { heading: "Travel in a garment", text: "A compression garment is tight in a long drive. Choose off-peak hours and keep a loose change of clothes in the car." },
    { heading: "Parking and an attendant", text: "Parking near a hospital can be limited. Ask the coordinator where your attendant can wait, and who brings the car to the door." },
  ],
};

// ---------------------------------------------------------------- liposuction in Lucknow
export const liposuctionLucknow: CityTreatmentPage = {
  ...base("liposuction", "lucknow"),
  metaDescription: "Liposuction in Lucknow: price by area, recovery, risks, and the trip from Barabanki, Unnao, Sitapur or Hardoi.",
  price: LIPO_PRICE,
  includes: lipoIncludes,
  facilities: {
    intro: "No partner facility is confirmed in Lucknow yet. If liposuction for Lucknow patients is done in another city, we will say so at the top of the page. For any facility, the checks below apply, and larger plans need an anaesthesia team and a bed.",
    partners: [{ type: "Partner facility in Lucknow (to be confirmed)", count: null }],
    accreditation: null,
    checks: lipoChecks,
  },
  travel: {
    intro: "Lucknow draws people from a ring of towns. For liposuction the trip matters twice: the operation day, and a first review about three to five days later. Ask whether that review can be done close to home.",
    airport: "Chaudhary Charan Singh International Airport, Lucknow (to be verified)",
    station: "Charbagh station and the Lucknow Metro (to be verified against the facility)",
    stayDays: "Day care for small plans; one night for larger ones or a long road home",
    metro: "The metro suits the consultation visit within the city. For the ride home after a larger plan, a cab with a reclining seat is more comfortable. {sample}",
    roadTimes: [
      { from: "Barabanki", time: "40 to 70 min", tip: "A same-day return suits a small, single-area plan" },
      { from: "Unnao", time: "60 to 100 min", tip: "Plan a night in the city for several areas" },
      { from: "Sitapur", time: "80 to 120 min", tip: "Ask whether the day-3 to 5 review can be done locally" },
      { from: "Hardoi", time: "100 to 150 min", tip: "Plan two nights, and keep the return trip for after the first review" },
    ],
    privacyNote: "If you come from a town where people know you, ask for a quiet entrance. Loose clothes a size up hide a garment, and a scarf or jacket helps in the first days.",
    mapCaption: "Travel into Lucknow from nearby districts, no building shown.",
  },
  localContext: [
    { text: "NEEDS REAL DATA: which Lucknow facility, if any, will host liposuction plans", source: "", asOf: "" },
    { text: "NEEDS REAL DATA: bed availability for an overnight stay after multi-area plans", source: "", asOf: "" },
    { text: "NEEDS REAL DATA: road times from the districts listed above, with a date", source: "", asOf: "" },
  ],
  usefulness: "",
  localCopy: [
    "Lucknow draws people from a ring of towns, and for liposuction the trip matters twice: the operation and the first review.",
    "Ask whether the review three to five days later can be done close to home.",
  ],
  localNotes: [
    { heading: "The first review", text: "The first review at about day 3 to 5 is the one people most often miss when they live far away. Ask whether it can be a video call, or whether a local doctor can check the garment and the cuts and send a note." },
    { heading: "Marriage season and travel", text: "Weddings can fill hotels and roads in Lucknow at certain times of year. If you are staying a night, book early. Whether a wedding or a family event fits inside the first weeks is a question for the surgeon. {pending}" },
    { heading: "Summer garment", text: "Heat from May to June makes the garment hard to wear. Ask for a breathable one and a spare, and plan the first week in a cool room." },
    { heading: "If you live in Kanpur", text: "Kanpur is the nearest other city we cover. Read the [Kanpur page](/liposuction-in-kanpur) to compare the trip." },
  ],
};

// ---------------------------------------------------------------- liposuction in Kanpur
export const liposuctionKanpur: CityTreatmentPage = {
  ...base("liposuction", "kanpur"),
  metaDescription: "Liposuction in Kanpur: price by area, recovery, risks, and whether the operation is in Kanpur or a short trip away.",
  price: LIPO_PRICE,
  includes: lipoIncludes,
  facilities: {
    intro: "No partner facility is confirmed in Kanpur yet. If liposuction for Kanpur patients is done in Lucknow or elsewhere, this page will say so first. Larger plans need an anaesthesia team and a bed, so ask about those before travel.",
    partners: [{ type: "Partner facility for Kanpur patients (to be confirmed)", count: null }],
    accreditation: null,
    checks: lipoChecks,
  },
  travel: {
    intro: "If liposuction is in Kanpur, the plan is a local visit. If it is in Lucknow, add a road trip of roughly one and a half to two hours each way, and plan the first night away or the ride home with extra care.",
    airport: "Kanpur civil airport and Lucknow airport (service and schedules to be verified)",
    station: "Kanpur Central, and Charbagh in Lucknow (to be verified)",
    stayDays: "Day care for small plans; one night for larger ones or a long ride home",
    metro: "Kanpur's metro is being extended and whether it serves the facility is to be checked. {sample} For a trip to Lucknow, a cab on the highway is more comfortable than a train with a garment on.",
    roadTimes: [
      { from: "Unnao", time: "30 to 60 min", tip: "Close enough for a consultation and a same-day review" },
      { from: "Kanpur Dehat", time: "40 to 80 min", tip: "Ask for an early slot on the operation day" },
      { from: "Etawah", time: "120 to 180 min", tip: "Plan a night in Kanpur after the operation" },
      { from: "Lucknow", time: "100 to 150 min", tip: "If the facility is there, plan a night and a ride home the next day" },
    ],
    privacyNote: "Ask which entrance is used and which of the review visits can be on video. Loose clothes a size up hide a garment, and a jacket helps in the first days.",
    mapCaption: "Travel in and out of Kanpur, no building shown.",
  },
  localContext: [
    { text: "NEEDS REAL DATA: whether a Kanpur facility will host liposuction, or patients go to Lucknow", source: "", asOf: "" },
    { text: "NEEDS REAL DATA: highway road time Kanpur to Lucknow, with a date", source: "", asOf: "" },
  ],
  usefulness: "",
  localCopy: [
    "If liposuction is in Kanpur the plan is a local visit; if it is in Lucknow add a road trip each way.",
    "The ride home with a garment on matters more than the ride in.",
  ],
  localNotes: [
    { heading: "Kanpur or Lucknow?", text: "To be confirmed. If the operation is in Lucknow, the [Lucknow page](/liposuction-in-lucknow) has the facility checks and the road times for that trip. {tbc}" },
    { heading: "Work that keeps you standing", text: "If your work keeps you on your feet, ask the surgeon when standing work is possible for you, and plan leave around the first review, not around the operation. {pending}" },
    { heading: "Ride home on the highway", text: "A seat that reclines, a pillow and a stop every hour make the trip easier. Keep the garment on and sip water. Ask the coordinator to book a cab for the return." },
    { heading: "Follow-up by video", text: "Ask which reviews can be on video once the first in-person one is done. This saves a second long trip in the first month." },
  ],
};
