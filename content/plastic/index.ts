import type { PlasticTopic } from "../types";
import { tummyTuck } from "./tummy-tuck";
import { rhinoplasty } from "./rhinoplasty";
import { breastAugmentation } from "./breast-augmentation";
import { breastReduction } from "./breast-reduction";
import { blepharoplasty } from "./blepharoplasty";
import { otoplasty } from "./otoplasty";
import { plasticCostOnlyTopics } from "./cost-only";

/**
 * Six pillars (hub, national cost page, written city pages for the approved pairs only) and six cost-only topics
 * (national cost page, no hub, no city pages). One entry per slug, as the contract in content/types.ts asks.
 * City pages written here: breast-augmentation, tummy-tuck, rhinoplasty and breast-reduction in Kanpur and Lucknow;
 * otoplasty in Delhi; blepharoplasty in Delhi and Gurgaon.
 */
export const plasticTreatments: PlasticTopic[] = [
  tummyTuck,
  rhinoplasty,
  breastAugmentation,
  breastReduction,
  blepharoplasty,
  otoplasty,
  ...plasticCostOnlyTopics,
];
