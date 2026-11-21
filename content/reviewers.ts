import type { Reviewer } from "./types";
import { REVIEWER_IDS } from "./slugs";

// NEEDS REAL DATA: no reviewer is appointed yet. Every record below is an UNASSIGNED SLOT: no person, no credential, no review date.
// isSample = true means the site shows "Medical review is pending" and never prints the name, the credential or the date
// (components use lib/reviewers.ts). Nothing is written into JSON-LD for a slot. A page that points at a slot cannot pass gate G7.
// To appoint someone: replace the record (real name, qualification, review date) and set isSample to false, after the founder
// has checked the registration. Plastic surgery pages use the plastic surgeon slot, skin and injectable pages the dermatologist
// slot, hair pages the hair specialist slot.
const slot = (id: string, specialty: NonNullable<Reviewer["specialty"]>): Reviewer => ({
  id,
  name: "[Reviewer to be appointed]",
  credential: "",
  reviewedOn: "2026-11-09",
  isSample: true,
  photoConsent: false,
  specialty,
});

export const reviewers: Reviewer[] = [
  slot(REVIEWER_IDS.plasticSurgeon, "plastic-surgery"),
  slot(REVIEWER_IDS.dermatologist, "dermatology"),
  slot(REVIEWER_IDS.hairSpecialist, "hair"),
  // Legacy id still used by guides written before the slots existed. It resolves to the slot that matches the guide's topic (lib/data/normalize.ts).
  slot(REVIEWER_IDS.legacySample, "general"),
];
