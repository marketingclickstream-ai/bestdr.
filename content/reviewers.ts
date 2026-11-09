import type { Reviewer } from "./types";

// NEEDS REAL DATA: no reviewer exists yet (name, qualification, review date only; no registration number is shown). This record is a labelled placeholder so the
// page layout can be checked. It is never written into JSON-LD while isSample is true.
export const reviewers: Reviewer[] = [
  {
    id: "sample-reviewer",
    name: "[Reviewer name]",
    credential: "plastic surgeon",
    reviewedOn: "2026-11-09",
    isSample: true,
    photoConsent: false,
  },
];
