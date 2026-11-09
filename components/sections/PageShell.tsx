import { OpenLeadButton } from "../ui/OpenLeadButton";
import { SampleChip } from "../ui/SampleChip";
import { WhatsAppButton } from "../ui/WhatsAppButton";
import { TocList } from "./TocList";
import styles from "./PageShell.module.css";

export interface RailChip { label: string; value: string; chip: string | null }

/** Two-column frame: sticky rail (contents, price chip, contact buttons) and the content column. */
export function PageShell({ toc, chip, waMessage, children }: { toc: { id: string; label: string }[]; chip?: RailChip | null; waMessage: string; children: React.ReactNode }) {
  return (
    <div className={`wrap ${styles.page}`}>
      <aside className={styles.rail} aria-label="On this page">
        <b className={styles.t}>In this page</b>
        <TocList items={toc} />
        {chip && (
          <div className={styles.chip}>
            <small>{chip.label}</small>
            <strong>Rs {chip.value}</strong>
            {chip.chip && <SampleChip label={chip.chip} />}
          </div>
        )}
        <WhatsAppButton message={waMessage}>WhatsApp us</WhatsAppButton>
        <OpenLeadButton className={styles.cb}>Call me back</OpenLeadButton>
        <small className={styles.r}>Replies within 30 minutes</small>
      </aside>
      <div className="content">{children}</div>
    </div>
  );
}
