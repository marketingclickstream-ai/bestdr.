// Plain pages: trust, policy and legal. Paragraphs accept the same rich markup as the rest of the site.
// NEEDS REAL DATA is shown with the "To be confirmed" chip: grievance officer, company registration, reviewer names.

export interface StaticPage {
  slug: string;
  title: string; // <= 60 chars
  h1: string;
  description: string; // <= 160 chars
  lead: string;
  sections: { heading: string; paragraphs?: string[]; list?: string[] }[];
  published: boolean;
}

export const staticPages: StaticPage[] = [
  {
    slug: "about",
    title: "About Bestdoctorsin: who we are and what we do",
    h1: "About Bestdoctorsin",
    description: "Bestdoctorsin is an Indian patient guide for plastic and cosmetic surgery. What we publish, how we earn, and what we do not do.",
    lead: "Bestdoctorsin is a patient guide to plastic and cosmetic surgery in India. We start with Delhi, Gurgaon, Kanpur and Lucknow.",
    sections: [
      { heading: "What we do", paragraphs: [
        "We write plain pages on each operation: the price line by line, recovery by week, the risks, and what to ask. A coordinator helps you reach a partner hospital if you ask for a call back.",
        "We do not list individual surgeons yet. We list one only after we have checked registration and accreditation ourselves. See [how we check surgeons](/how-we-verify-surgeons).",
      ] },
      { heading: "How we earn", paragraphs: [
        "How Bestdoctorsin is paid will be stated here in full before launch, and the same statement will appear on every cost page. {tbc}",
      ] },
      { heading: "What we do not do", list: [
        "We do not rank or rate doctors. Bestdoctorsin is a name, not a ranking.",
        "We do not publish before and after photos without a written consent record.",
        "We do not show countdown timers, fake deals or invented review counts.",
      ] },
      { heading: "Contact", paragraphs: ["Write to us through the [contact page](/contact)."] },
    ],
    published: true,
  },
  {
    slug: "how-we-verify-surgeons",
    title: "How we verify surgeons and partner hospitals",
    h1: "How we verify surgeons",
    description: "The checks we make before a surgeon or a partner hospital is listed: council registration, accreditation, date of check, and no ranking.",
    lead: "No surgeon is listed on Bestdoctorsin yet. This is the order of checks we will make before one is.",
    sections: [
      { heading: "The checks", list: [
        "Registration: we look the surgeon up on the public register of the state medical council ourselves.",
        "Hospital: we ask for its accreditation certificate and check the issuing body's public list.",
        "Date: we record the day we checked, and show it on the page.",
        "Complaints: we ask the surgeon and the hospital how complaints are handled, in writing.",
      ] },
      { heading: "How often we re-check", paragraphs: ["Every listing is re-checked at least once a year, and again when a patient reports a problem. A listing that cannot be re-verified is removed."] },
      { heading: "What the checks do not tell you", paragraphs: [
        "Being registered shows a doctor is on the council list. It does not show skill, and we do not rank surgeons against each other. Ask the questions in [questions to ask your surgeon](/learn/questions-to-ask-your-plastic-surgeon).",
      ] },
    ],
    published: true,
  },
  {
    slug: "medical-review-board",
    title: "Medical review board: who reads our pages",
    h1: "Medical review board",
    description: "Every medical page on Bestdoctorsin is read by a registered surgeon before it is published. The board is being formed.",
    lead: "Every medical page is read by a registered surgeon before it is published. The board is being formed, so no page has a named reviewer yet.",
    sections: [
      { heading: "What a reviewer does", list: [
        "Reads the sources we used and checks our wording against them.",
        "Confirms the recovery timings and the risk list.",
        "Signs the page with name, qualification and date.",
      ] },
      { heading: "Members", paragraphs: ["Names and qualifications will be listed here. {tbc}"] },
    ],
    published: true,
  },
  {
    slug: "editorial-policy",
    title: "Editorial policy: how we write and review pages",
    h1: "Editorial policy",
    description: "How Bestdoctorsin writes, sources, reviews and updates its medical pages, and which words we do not use.",
    lead: "How a page gets from first draft to publication, and how it is kept up to date.",
    sections: [
      { heading: "Sources", paragraphs: ["Medical statements are checked against named public sources such as national health services and hospital education pages. We show a figure only when a named source backs it."] },
      { heading: "Review and dates", paragraphs: ["A registered surgeon reviews each medical page. Each page shows the reviewer and the date. Prices show the month they are valid for, and a price older than six months is taken down."] },
      { heading: "Language", paragraphs: ["We write in plain words. We do not use claims that cannot be checked, such as promises of results, superlatives or promises about outcomes."] },
      { heading: "Corrections", paragraphs: ["Found a mistake? Write to us through the [contact page](/contact). We fix confirmed errors and note the change."] },
      { heading: "Sample data", paragraphs: ["While the site is being built, some figures are placeholders. They carry a yellow chip that reads Sample data or To be confirmed."] },
    ],
    published: true,
  },
  {
    slug: "privacy",
    title: "Privacy notice (DPDP Act 2023) | Bestdoctorsin",
    h1: "Privacy notice",
    description: "What personal data Bestdoctorsin collects through its forms, why, how long it is kept, and how to ask for deletion under the DPDP Act 2023.",
    lead: "We collect only what you type into a form and submit. We do not track what you type before you press the button.",
    sections: [
      { heading: "What we collect", list: [
        "Name, mobile number, the city you can reach easily, the page you were on, and the time you agreed.",
        "Nothing from a form you did not submit. Typing in a field sends nothing.",
      ] },
      { heading: "Why", paragraphs: ["To answer your enquiry by the channel you chose. We share your details with a partner hospital only if you agree."] },
      { heading: "Consent and withdrawal", paragraphs: ["The form asks for your agreement before it sends anything. Say stop at any point, by WhatsApp or through the [contact page](/contact), and your details are deleted."] },
      { heading: "How long we keep it", paragraphs: ["Enquiry details are kept only as long as the enquiry is open, and the exact period will be stated here. {tbc}"] },
      { heading: "Cookies and trackers", paragraphs: ["This site sets no cookies and loads no third-party trackers or advertising scripts. Videos load from a privacy-enhanced player only after you press play."] },
      { heading: "Your rights", paragraphs: ["Under the Digital Personal Data Protection Act 2023 you can ask to see, correct or delete your data, and to complain to our grievance officer. Details are on the [contact page](/contact)."] },
    ],
    published: true,
  },
  {
    slug: "medical-disclaimer",
    title: "Medical disclaimer | Bestdoctorsin",
    h1: "Medical disclaimer",
    description: "Bestdoctorsin pages are for education, not medical advice. Outcomes vary from person to person. Talk to a registered surgeon before you decide.",
    lead: "Information on this site is for education, not medical advice.",
    sections: [
      { heading: "What this means", list: [
        "Pages describe typical cases. Yours may differ, and your surgeon's advice overrides anything here.",
        "Outcomes vary from person to person.",
        "Prices are ranges, dated, and not quotes. A final figure comes only after a surgeon has examined you.",
        "In an emergency call 112. Do not use a web page or a chat message for urgent care.",
      ] },
    ],
    published: true,
  },
  {
    slug: "terms",
    title: "Terms of use | Bestdoctorsin",
    h1: "Terms of use",
    description: "The terms for using the Bestdoctorsin website: what the pages are, what they are not, and how enquiries are handled.",
    lead: "By using this site you accept these short terms.",
    sections: [
      { heading: "The site", paragraphs: ["Bestdoctorsin provides information and an enquiry service. It is not a hospital and does not give medical advice or treatment."] },
      { heading: "Enquiries", paragraphs: ["A call back or a WhatsApp reply is not a contract. Any treatment is agreed between you and the hospital in writing."] },
      { heading: "Content", paragraphs: ["Text and drawings belong to Bestdoctorsin. You may link to a page. Please do not copy it."] },
      { heading: "Company details", paragraphs: ["Company name, legal registration and registered office. {tbc}"] },
    ],
    published: true,
  },
  {
    slug: "contact",
    title: "Contact and grievance | Bestdoctorsin",
    h1: "Contact and grievance",
    description: "Ask a question, request a call back, correct a page, or reach the grievance officer. Replies by WhatsApp or phone, at the time you choose.",
    lead: "Write on WhatsApp and nobody calls. Or ask for a call back, and we call at the time you choose.",
    sections: [
      { heading: "Questions and call backs", paragraphs: ["Use the WhatsApp button or the call-back sheet on any page. We reply 9 am to 9 pm. {tbc}"] },
      { heading: "Grievance officer", paragraphs: ["Name, email and postal address of the grievance officer under the DPDP Act and the IT Rules. {tbc}"] },
      { heading: "Corrections", paragraphs: ["Tell us which page and what is wrong. A reviewer checks it and we publish the fix."] },
    ],
    published: true,
  },
];
