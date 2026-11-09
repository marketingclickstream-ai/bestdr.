import type { FaqRow } from "./types";

// Liposuction FAQs (treatment-level, shown on the treatment page and every liposuction city page)
// and city-only FAQs for the new city pages. Each city's questions are written from that city's
// situation, not copied between cities. NEEDS REAL DATA: replace with real patient-desk questions.

const L = "liposuction";
const G = "gynecomastia-surgery";

const row = (id: string, treatmentSlug: string, citySlug: string | null, order: number, question: string, answer: string): FaqRow => ({ id, treatmentSlug, citySlug, order, question, answer });

export const liposuctionFaqs: FaqRow[] = [
  row("lipo-weight", L, null, 1, "Is liposuction a way to lose weight?", "No. It removes pockets of fat that have not responded to diet and exercise and reshapes the area. It is not a treatment for obesity, and the number on the scale may change very little. Surgeons usually ask you to be near a steady weight first. Read [liposuction is not weight loss](/learn/liposuction-vs-weight-loss)."),
  row("lipo-regain", L, null, 2, "What happens if I gain weight afterwards?", "Fat cells in the treated area are removed, but fat cells elsewhere remain, and weight gain can show up in the treated area and in other places. A steady weight and regular exercise keep the shape you worked for. See [can fat come back after liposuction](/learn/liposuction-fat-return)."),
  row("lipo-pain", L, null, 3, "How painful is it?", "Most people describe soreness, tightness and bruising rather than sharp pain, and medicines for pain and swelling are given. Larger plans usually hurt more. Tell the doctor straight away if pain keeps getting worse instead of easing."),
  row("lipo-activity", L, null, 4, "When can I return to normal activity?", "Many people rest for a few days, return to desk work within one to two weeks and build up exercise from about four weeks, as the surgeon allows. These are typical timings, not promises. The [recovery calendar](/liposuction#recovery) shows the full pattern."),
  row("lipo-technique", L, null, 5, "How do I choose a technique?", "You do not choose it alone. The surgeon recommends one after looking at the area, the amount of fat, your skin and any earlier operations. Ask why that technique suits you and whether it changes the quote. See [types of liposuction](/learn/types-of-liposuction)."),
  row("lipo-consult", L, null, 6, "What happens at a consultation?", "The surgeon asks about your health, medicines and goals, examines the areas while you stand, explains the plan and the risks, and arranges any tests and an anaesthesia check. Ask for the quote in writing, line by line."),
  row("lipo-chin", L, null, 7, "Can a double chin or neck be treated?", "Often yes, when the cause is fat under the chin. If the cause is loose skin or the shape of the jaw, liposuction alone may not help. It is a small area and a shorter operation. See [double chin liposuction](/learn/double-chin-liposuction)."),
  row("lipo-men", L, null, 8, "Can liposuction treat a man's chest or love handles?", "It can treat chest fat and fat at the waist. If the chest enlargement is gland tissue, liposuction alone does not remove it, and the plan may include gland removal. See [gynecomastia surgery](/gynecomastia-surgery) and [liposuction for men](/learn/liposuction-for-men)."),
  row("lipo-insurance", L, null, 9, "Does insurance cover liposuction?", "Usually not, because most policies treat it as cosmetic. Ask your insurer in writing before you book, and ask the hospital which diagnosis and procedure it will put on the estimate."),
  row("lipo-scars", L, null, 10, "Will there be scars?", "Yes, tiny marks remain where the tube went in. The surgeon chooses places that are easy to hide, and the marks fade over months. Ask the surgeon to show you where they are planned."),
];

export const cityFaqs: FaqRow[] = [
  // ---- gynecomastia, Delhi
  row("gyn-delhi-where", G, "delhi", 20, "Is the operation in Delhi itself?", "That is to be confirmed. No partner facility is confirmed in Delhi yet. If the operation is in Gurgaon, we will say so at the top of this page, and the [Gurgaon page](/gynecomastia-surgery-in-gurgaon) has the road times for that route."),
  row("gyn-delhi-traffic", G, "delhi", 21, "How do I plan around Delhi traffic on the day?", "Ask for a morning slot so that the ride home is before the evening peak, and bring an adult who can drive. Wear a loose, front-opening shirt, because lifting your arms may be hard on the first day."),
  row("gyn-delhi-ncr", G, "delhi", 22, "I live in Noida or Ghaziabad. Is the trip manageable?", "Most people from there manage a day-care operation with one attendant, but the roads are slow. Ask whether a night nearby makes sense if the operation is late in the day, and whether the first review can be a video call."),
  row("gyn-delhi-air", G, "delhi", 23, "Does Delhi's winter air matter for recovery?", "Whether it matters is a question for the reviewing surgeon. Until that review is done, a sensible plan is to stay indoors in the first week when the air is poor, and to keep your follow-up visits."),
  // ---- gynecomastia, Lucknow
  row("gyn-lko-small-town", G, "lucknow", 20, "I live outside Lucknow. Can I do this in a day?", "For nearby towns such as Barabanki, many people manage a same-day return after a day-care operation if the surgeon agrees. From farther towns, plan a night in the city. Book an early slot so that you travel in daylight."),
  row("gyn-lko-where", G, "lucknow", 21, "Is the operation in Lucknow?", "That is to be confirmed. No partner facility is confirmed in Lucknow yet. If it is somewhere else, we will say so at the top of the page, with the distance."),
  row("gyn-lko-hindi", G, "lucknow", 22, "Can the consultation and the paperwork be in Hindi?", "Yes, the first call and the consultation can be in Hindi or Hinglish. Ask for the written estimate in the language you read most easily, and check every line before you sign."),
  row("gyn-lko-heat", G, "lucknow", 23, "How do I manage the vest in the summer heat?", "Ask for a breathable garment and a spare, wear it over a thin cotton vest and spend the first week in a cool room. If the skin under the garment is red or sore, tell the surgeon at the review."),
  // ---- gynecomastia, Kanpur
  row("gyn-knp-travel", G, "kanpur", 20, "Do I have to travel to Lucknow or Delhi?", "That is to be confirmed. No partner facility is confirmed in Kanpur yet, and Lucknow is the nearest other city we cover. If the operation is there, we will say so at the top of the page, with the trip time."),
  row("gyn-knp-train", G, "kanpur", 21, "Is the train or the road better for the trip home?", "The road is usually easier after the operation, because you can recline and stop when needed. Ask the coordinator to arrange a cab. Train timings are to be added after they are checked."),
  row("gyn-knp-followup", G, "kanpur", 22, "How are follow-up visits handled after I go home?", "Ask which visits must be in person and which can be a video call. The first review at about a week is the one most likely to need an in-person visit, and later ones may be remote."),
  row("gyn-knp-night", G, "kanpur", 23, "Should a family member stay with me?", "One adult can usually stay with you in the facility or nearby. Ask about guest-house options if you need to stay a night away from home, and who looks after the vest and the medicines the first evening."),
  // ---- liposuction, Gurgaon
  row("lipo-ggn-name", L, "gurgaon", 20, "Gurgaon or Gurugram: is it the same place?", "Yes. Both spellings are in common use for the same city in Haryana. This page uses Gurgaon because more people search for it."),
  row("lipo-ggn-day", L, "gurgaon", 21, "Is liposuction in Gurgaon day care or an overnight stay?", "It depends on the number of areas and the anaesthesia. A single small area may be day care. Several areas, or ultrasound-assisted work, may need a night. Ask the surgeon before you choose a facility and a date."),
  row("lipo-ggn-office", L, "gurgaon", 22, "I work in a Gurgaon office. How much leave do I need?", "Many people take a few days off, and return to desk work within one to two weeks. Larger plans need longer. The surgeon decides after the first review, so keep your leave flexible."),
  row("lipo-ggn-summer", L, "gurgaon", 23, "Is the garment a problem in the heat?", "It can be, from April to September. Ask for a breathable fabric and a spare, wear a thin cotton layer under it, and keep the first week indoors with air conditioning if you can."),
  // ---- liposuction, Delhi
  row("lipo-del-where", L, "delhi", 20, "Is liposuction available in Delhi itself?", "That is to be confirmed. No partner facility is confirmed in Delhi yet. If the work is done in Gurgaon, we will say so at the top of the page, and the [Gurgaon page](/liposuction-in-gurgaon) has the road times for that route."),
  row("lipo-del-trips", L, "delhi", 21, "How many trips across the city will I need?", "Usually three: the consultation, the operation day and the first review about three to five days later. Ask whether the consultation and a later review can be by video to keep the trips down."),
  row("lipo-del-clothes", L, "delhi", 22, "What should I wear to the operation and home?", "Loose, dark clothes a size up, a front-opening top, and slip-on shoes. The garment goes under your clothes and it is easier to dress without bending."),
  row("lipo-del-parking", L, "delhi", 23, "Where does my attendant park and wait?", "Parking near a hospital can be limited. Ask the coordinator which gate to use for drop-off and pick-up, and where an attendant can wait. A cab booked for the return avoids the problem."),
  // ---- liposuction, Lucknow
  row("lipo-lko-where", L, "lucknow", 20, "Is liposuction done in Lucknow?", "That is to be confirmed. No partner facility is confirmed in Lucknow yet. If it is elsewhere, we will say so at the top of the page, with the distance and the travel plan."),
  row("lipo-lko-review", L, "lucknow", 21, "I live far from the city. Who checks me on day 3 to 5?", "Ask the coordinator at the start. Options are a video call, or a local doctor who looks at the garment and the cuts and sends a note to the surgeon. The surgeon decides what is acceptable."),
  row("lipo-lko-stay", L, "lucknow", 22, "Do I need to stay a night in Lucknow?", "From nearby towns a same-day return may work for a small, single-area plan. For several areas, or a trip of more than about an hour and a half, plan a night. The surgeon and the anaesthetist decide."),
  row("lipo-lko-season", L, "lucknow", 23, "Does the time of year matter?", "Heat from May to June makes the garment harder to wear. Weddings and festivals can fill hotels and roads. Ask the surgeon whether the first weeks of recovery fit around any event you have."),
  // ---- liposuction, Kanpur
  row("lipo-knp-where", L, "kanpur", 20, "Do I have to go to Lucknow for liposuction?", "That is to be confirmed. No partner facility is confirmed in Kanpur yet, and Lucknow is the nearest other city we cover. If the operation is there, the page will say so, with the trip time."),
  row("lipo-knp-ride", L, "kanpur", 21, "How do I manage the ride home with a garment on?", "Book a cab with a seat that reclines, bring a pillow, keep the garment on, sip water and stop every hour. Do not drive yourself on the first day."),
  row("lipo-knp-standing", L, "kanpur", 22, "My job keeps me standing for long hours. When can I go back?", "That is for the surgeon to say after the first review. Many people return to desk work earlier than to standing or lifting work. Tell the coordinator what your work involves before you book."),
  row("lipo-knp-video", L, "kanpur", 23, "Can later reviews be done by video from Kanpur?", "Often yes, once the first in-person review is done. Ask the coordinator which visits must be in person, and send photos only through the channel the clinic names, never by an unknown chat."),
];
