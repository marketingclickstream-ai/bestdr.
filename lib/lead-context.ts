// What the call-back sheet should say and send for the page the visitor is on.
// Set by <LeadContext /> on each page, read when the sheet opens.

export interface LeadContextValue {
  /** treatment slug, e.g. "gynecomastia-surgery" ("" on pages not about one treatment) */
  treatment: string;
  /** city value from lead-fields (delhi, gurgaon, ...) or "other" */
  city: string;
  /** Phrase shown under the sheet title, e.g. "gynecomastia surgery in Gurgaon" */
  label: string;
}

let current: LeadContextValue = { treatment: "", city: "other", label: "plastic surgery" };

export function setLeadContext(v: LeadContextValue): void {
  current = v;
}

export function getLeadContext(): LeadContextValue {
  return current;
}
