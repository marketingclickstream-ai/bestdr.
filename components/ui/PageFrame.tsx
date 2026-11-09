import { LeadContext } from "../forms/LeadContext";
import { JsonLd } from "./JsonLd";

/** <main> wrapper shared by every page: JSON-LD, and the context the call-back sheet needs. */
export function PageFrame({ jsonLd, treatment = "", city = "other", label = "plastic surgery", children }: { jsonLd: object; treatment?: string; city?: string; label?: string; children: React.ReactNode }) {
  return (
    <main id="main">
      <JsonLd data={jsonLd} />
      <LeadContext treatment={treatment} city={city} label={label} />
      {children}
    </main>
  );
}
