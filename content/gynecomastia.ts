import type { TreatmentContent } from "./types";

// Medical copy for gynecomastia. Written in our own words from the founder's source notes
// (14-source-data) and the approved design. Everything here is pending surgeon review:
// no reviewer is attached, so reviewedBy / lastReviewed are not published.

export const gynecomastiaContent: TreatmentContent = {
  dek: "Surgery removes extra chest gland, fat or both, and a surgeon decides which after an examination. Here is what [gynecomastia surgery](/gynecomastia-surgery) involves, when you can work, drive and train, and how we check a surgeon. The [national cost factors](/cost/gynecomastia-surgery) are on their own page.",

  shortAnswers: [
    {
      q: "Do I even need surgery?",
      a: "It depends on whether the enlargement is gland, fat or both. Only an examination can tell. Many teenagers settle without surgery.",
      href: "#fat-or-gland",
      linkText: "Gland or fat",
    },
    {
      q: "What will it cost?",
      a: "One bill with the surgeon, anaesthesia and facility fees in it, and a few items to ask for in writing. The range shown is to be confirmed.",
      href: "#cost",
      linkText: "The lines",
    },
    {
      q: "How long until I can work and drive?",
      a: "Desk work after about a week, driving after about two, chest training after six or more.",
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
    lead: "Gynecomastia is growth of the breast gland in boys and men, on one side or both. Surgery takes out fat, gland or both, and the plan depends on what an examination finds.",
    body: "Your surgeon may suggest [liposuction only or gland removal](/learn/gynecomastia-liposuction-vs-gland-removal), or the two together. [Liposuction](/liposuction) reaches the fat through tiny cuts, and some surgeons use ultrasound- or power-assisted tools for it. Gland tissue is firm and has to be cut out, usually through a small cut at the edge of the areola or the side of the chest. Larger cases also need skin removal or tightening. The [grades of gynecomastia](/learn/gynecomastia-grades) help the surgeon choose.",
    caption: "Two common approaches, drawn side by side.",
    ask: "Is mine gland, fat or both, and what would you do about each part?",
    how: [
      "**Liposuction:** fat is suctioned out through tiny cuts. A few very small marks.",
      "**Gland removal:** the gland is cut out through a small cut at the edge of the areola or the side of the chest. One small line.",
      "**Skin removal or tightening:** extra skin is cut away, or tightened with radiofrequency energy in some cases. Longer scars if skin is cut away.",
      "Smaller operations may use local anaesthesia with sedation, larger ones general anaesthesia. Many are day care; some need one night. A thin drain is sometimes placed for a day or two.",
    ],
    whoItSuits: [
      { term: "Health", text: "Good general health, a weight that has been steady for some months, and no smoking if you can manage it." },
      { term: "Expectations", text: "A clear idea of what surgery can change. Scars remain and the result depends on your body." },
      { term: "Reason", text: "The chest bothers you in daily life: clothes, the gym, swimming, or how you feel about it." },
      { term: "Who asks", text: "Teenagers and their parents, bodybuilders, men in desk jobs, and older men with loose skin. Each group has a different first question, and the surgeon's answer differs too." },
    ],
  },

  fatOrGland: {
    lead: "The two look alike in a mirror and feel different to the hand. Only a doctor can tell after an examination, and may ask for an ultrasound or blood tests.",
    body: "Hormone balance, some medicines and recent weight change can all cause chest enlargement, so see a doctor before you plan surgery. Read about [fat or gland](/learn/gynecomastia-fat-or-gland) and [chest fat without gland](/learn/pseudogynecomastia). Many teenagers settle without an operation, and some [possible causes](/learn/gynecomastia-causes) can be treated first. For [what exercise can change](/learn/male-chest-exercise-and-fat), see our short guide.",
    term: "**Pseudogynecomastia** is chest fat that looks like gland. Many men have a mix of the two.",
    tissueTable: [
      { feature: "Feel", gland: "Firm, rubbery disc", fat: "Soft, spread across the chest" },
      { feature: "Where", gland: "Behind the nipple", fat: "All over the chest, often the sides too" },
      { feature: "Tenderness", gland: "Often tender to touch", fat: "Usually not tender" },
      { feature: "Weight loss", gland: "Changes little", fat: "Often reduces" },
    ],
    seeDoctor: "A hard lump, one side only, pain or nipple discharge. Do this before you plan surgery.",
    causes: [
      "Hormone balance: relatively more oestrogen than testosterone, as in puberty, later life or some illnesses.",
      "Some medicines, for example certain antibiotics, anxiety medicines and treatments for the prostate or the stomach.",
      "Alcohol, anabolic steroids and some drugs.",
      "Medical conditions such as kidney, liver or thyroid problems.",
    ],
    symptoms: [
      "A lump or firm disc behind the nipple, on one or both sides.",
      "Swelling that is uneven between the two sides.",
      "Tenderness, or a wider areola.",
      "Fluid from the nipple. This needs a doctor's check soon.",
    ],
    myths: [
      "Creams, oils, homeopathy and fat-burner supplements: there is no good evidence that any of them removes gland tissue.",
      "Chest exercise: it builds muscle under the tissue and can make a gland look more prominent, not smaller.",
      "\"It is always just fat\": not so. Many men have gland, and gland does not shrink with diet.",
    ],
    gradesCaption: "Grades of gynecomastia, and the usual approach. Scales differ between surgeons, so yours will explain theirs.",
    grades: [
      { grade: "I", looks: "Small mound around the nipple, no loose skin", approach: "Liposuction, or gland removal if firm" },
      { grade: "II", looks: "Larger, with more fat around it, no loose skin", approach: "Gland removal with liposuction" },
      { grade: "III", looks: "Moderate, with loose skin", approach: "As II, and sometimes skin removal" },
      { grade: "IV", looks: "Large, with loose skin", approach: "Skin removal, often in two stages" },
    ],
  },

  recovery: {
    lead: "Typical timing for an uncomplicated operation. Your surgeon sets yours. {pending}",
    body: "A compression vest is worn for the first weeks, under clothes, as the surgeon advises. Summers here are hot, so ask for a breathable garment and a spare. The [full recovery guide](/gynecomastia-surgery#recovery) has the detail.",
    highlights: [
      { pre: "about", big: "1 week", text: "Desk work, with some soreness" },
      { pre: "about", big: "2 weeks", text: "Driving, if the surgeon agrees" },
      { big: "6 weeks", post: "or more", text: "Chest and arm training, if the surgeon agrees" },
    ],
    timeline: [
      { when: "Day 0", notice: "Drowsy after anaesthesia, chest wrapped", doThis: "Home the same day or after one night. An attendant stays with you. Garment on." },
      { when: "Day 1 to 2", notice: "Soreness and tightness, some swelling", doThis: "Rest, with light movement indoors. Pain medicine as prescribed. WhatsApp check-in from us on day 1." },
      { when: "Day 3 to 7", notice: "Bruising and swelling at their most, then easing", doThis: "Short walks. Desk work from home from about day 5 to 7 if you feel ready. Drain out, if one was placed." },
      { when: "Week 2", notice: "Bruising fading, chest feels tight", doThis: "Office, and driving if the surgeon agrees. Brisk walking or cycling if comfortable. Review visit. Stitches checked." },
      { when: "Week 4", notice: "Swelling lessening, numb patches common", doThis: "Light leg gym. Garment continues as advised." },
      { when: "Week 6", notice: "Chest feels more normal", doThis: "Heavy lifting, chest press and swimming only if the surgeon agrees." },
      { when: "Week 12", notice: "Most swelling settled, scars still pink", doThis: "Review visit. Flights and long drives as the surgeon advises." },
    ],
    grid: {
      cols: ["Day 1", "Wk 1", "Wk 2", "Wk 4", "Wk 6+"],
      rows: [
        { label: "Desk work", cells: [{ state: "n", text: "No" }, { state: "m", text: "Some" }, { state: "y", text: "Yes" }, { state: "y", text: "Yes" }, { state: "y", text: "Yes" }] },
        { label: "Driving", cells: [{ state: "n", text: "No" }, { state: "m", text: "Ask" }, { state: "y", text: "Yes" }, { state: "y", text: "Yes" }, { state: "y", text: "Yes" }] },
        { label: "Walking", cells: [{ state: "m", text: "Short" }, { state: "y", text: "Yes" }, { state: "y", text: "Yes" }, { state: "y", text: "Yes" }, { state: "y", text: "Yes" }] },
        { label: "Leg gym", cells: [{ state: "n", text: "No" }, { state: "n", text: "No" }, { state: "m", text: "Light" }, { state: "y", text: "Yes" }, { state: "y", text: "Yes" }] },
        { label: "Chest, arms", cells: [{ state: "n", text: "No" }, { state: "n", text: "No" }, { state: "n", text: "No" }, { state: "m", text: "Ask" }, { state: "m", text: "If ok" }] },
      ],
    },
    closing: "Ask before booking a flight in the first weeks. Some soreness and swelling are expected, and swelling takes months to settle.",
  },

  risks: {
    lead: "Every operation has risks. These are the ones to ask about, in plain words. No frequencies are shown here, because we show a figure only when a named source backs it.",
    rows: [
      { risk: "Bleeding", means: "Blood collects under the skin and may need draining", ask: "Whether a drain is used, and what to watch for at home" },
      { risk: "Fluid or infection", means: "Fluid collects (a seroma), or the wound gets infected", ask: "Which signs mean a same-day call, and whose number to use" },
      { risk: "Uneven chest", means: "Dents, lumps, or one side that differs from the other", ask: "How the surgeon checks both sides before you leave theatre" },
      { risk: "Nipple feeling", means: "Numbness or extra sensitivity, usually easing over months", ask: "How long it can last in your case" },
      { risk: "Scars and loose skin", means: "Scars fade over a year or more; loose skin may remain", ask: "To see where the cuts will be marked" },
      { risk: "Slow healing", means: "A wound heals late, and in rare cases some tissue is lost", ask: "What raises the chance, such as smoking, and what to stop beforehand" },
      { risk: "Anaesthesia and medicines", means: "Allergic reactions and, rarely, a blood clot", ask: "Who gives the anaesthesia, and what the fitness check covers" },
      { risk: "Coming back", means: "Weight gain, some medicines and steroids can bring new enlargement", ask: "What to avoid, and what to do if it returns" },
      { risk: "A second operation", means: "A touch-up may be needed after the first", ask: "Whether it is charged, and for how long after the first" },
    ],
    alert: "**Call the hospital the same day** for fever, spreading redness, fast swelling on one side, bleeding through the dressing or severe pain. Chest pain or breathlessness: call 112.",
    wait: [
      "Your chest is still changing, or it started recently.",
      "You use steroids or testosterone products. Stopping may help.",
      "A liver, kidney or thyroid problem has not been looked at.",
      "You plan to lose a lot of weight soon, or you smoke.",
    ],
    tell: [
      "Every medicine and supplement, including gym supplements.",
      "Alcohol and cannabis use.",
      "When the enlargement began, and whether it changed in the last year.",
    ],
  },

  patientQuestions: [
    { q: "Will anyone at work come to know I had this done?", href: "#getting-there", linkText: "Read: getting there and staying" },
    { q: "I am 19. Is it too early to think about surgery?", href: "#fat-or-gland", linkText: "Read: is it fat or gland" },
    { q: "Do I need to stop my gym routine before and after?", href: "#recovery", linkText: "Read: recovery calendar" },
    { q: "Can I take a flight or a long drive a few days later?", href: "#recovery", linkText: "Read: recovery calendar" },
    { q: "Is one side done first, or both together?", href: "#surgery", linkText: "Read: the operation" },
    { q: "How do I know if it is fat, or a gland?", href: "#fat-or-gland", linkText: "Read: is it fat or gland" },
  ],

  quoteProcess: [
    { title: "You talk to a coordinator", text: "In person, by WhatsApp or by phone, whichever you choose. No pressure to book." },
    { title: "A surgeon examines you", text: "Gland or fat, and the grade, are decided in person, not on the phone." },
    { title: "The hospital writes the cost", text: "Surgeon, anaesthesia and facility fees, plus the items it adds, listed one by one." },
    { title: "You pick the anaesthesia and the date", text: "The surgeon and the anaesthetist advise. Most operations are day care." },
    { title: "After the operation", text: "A check-in from us on day 1, a compression vest, review visits, and a staged return to work and training." },
  ],

  quoteChecks: [
    "list the surgeon, anaesthesia and facility fees separately?",
    "say whether a second operation is included, and for how long?",
    "name the same room, day care or overnight?",
    "write down the number of follow-up visits?",
  ],

  extras: [
    "Tests before surgery",
    "Compression garment",
    "Medicines for the first days",
    "Follow-up visits",
    "Treating a complication",
    "A second operation",
    "Loose skin, if added later",
    "Your attendant's stay and travel",
  ],

  insurance:
    "**Insurance.** Gynecomastia surgery is usually treated as cosmetic, and most policies do not pay for cosmetic surgery. A policy may consider it when a doctor records a medical need. Read your policy, ask your insurer in writing before you book, and keep the estimate and the diagnosis. We do not promise cashless approval.",
  payment:
    "**Payment.** Cash, cards and instalments through a lender may be possible. Terms and fees depend on the hospital and the lender and are not shown here. {tbc}",

  sources: [
    { label: "NHS: Gynaecomastia", href: "https://www.nhs.uk/conditions/gynaecomastia/" },
    { label: "Mayo Clinic: Gynecomastia", href: "https://www.mayoclinic.org/diseases-conditions/gynecomastia/symptoms-causes/syc-20351793" },
    { label: "National Medical Commission: public register of doctors", href: "https://www.nmc.org.in/" },
  ],

  footnotes: [
    "Medical review is pending. The reviewer, qualification and review date shown are sample data and will be replaced by the real ones.",
    "The range is a working figure from the partner side. It still has to be confirmed in writing for Bestdoctorsin and the partner hospital, and it will carry a date.",
    "Typical timings for an uncomplicated operation, to be confirmed by the reviewer. Your surgeon's advice overrides this page.",
    "Insurance wording is general and is to be confirmed by the reviewer. Your policy document decides.",
    "Several grading scales are in use and they do not match exactly. The four grades here are a plain summary, not a quotation of one scale. Studies on technique and recovery will be read and cited here after the reviewer checks each one.",
  ],
};
