import type { Reviewer, ReviewerSpecialty, TopicCategory } from "@/content/types";
import { REVIEWER_IDS } from "@/content/slugs";

/** The slot id that matches a topic category: surgery = plastic surgeon, skin and injectables = dermatologist, hair = hair specialist. */
export function reviewerSlotFor(category: TopicCategory): string {
  return category === "surgery" ? REVIEWER_IDS.plasticSurgeon : category === "hair" ? REVIEWER_IDS.hairSpecialist : REVIEWER_IDS.dermatologist;
}

const BY_ID: Record<string, ReviewerSpecialty> = {
  [REVIEWER_IDS.plasticSurgeon]: "plastic-surgery",
  [REVIEWER_IDS.dermatologist]: "dermatology",
  [REVIEWER_IDS.hairSpecialist]: "hair",
};
export const specialtyOfReviewerId = (id: string): ReviewerSpecialty => BY_ID[id] ?? "general";

const WORDS: Record<ReviewerSpecialty, string> = {
  "plastic-surgery": "plastic surgeon",
  dermatology: "dermatologist",
  hair: "hair specialist",
  general: "medical reviewer",
};

/**
 * The one place that decides what a reader sees about a reviewer. An unassigned slot (isSample) shows a pending line that names
 * the kind of reviewer needed and nothing else: never a credential, a name or a date.
 */
export function reviewerLine(r: Reviewer | null): { named: boolean; pending: string; credential: string; name: string; reviewedOn: string } {
  if (!r || r.isSample) {
    const word = r ? WORDS[r.specialty ?? specialtyOfReviewerId(r.id)] : WORDS.general;
    return { named: false, pending: `Medical review is pending. No ${word} is named yet.`, credential: "", name: "", reviewedOn: "" };
  }
  return { named: true, pending: "", credential: r.credential, name: r.name, reviewedOn: r.reviewedOn };
}

/** Ids of the unassigned slots and the legacy sample record. Used where only an id is at hand. */
export const isPlaceholderReviewerId = (id: string): boolean => id === REVIEWER_IDS.legacySample || id in BY_ID;
