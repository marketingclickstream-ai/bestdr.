"use client";

import { useEffect, useRef, useState } from "react";
import { getLeadContext, type LeadContextValue } from "@/lib/lead-context";
import { on } from "@/lib/ui-events";
import { LeadForm } from "./LeadForm";
import styles from "./LeadDialog.module.css";

/** The call-back sheet: a native <dialog>, so focus handling and Escape come from the browser. */
export function LeadDialog({ whatsappHref }: { whatsappHref: string | null }) {
  const ref = useRef<HTMLDialogElement>(null);
  const [ctx, setCtx] = useState<LeadContextValue>(getLeadContext());
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => on("open-lead", () => {
    setCtx(getLeadContext());
    setIsOpen(true);
    const d = ref.current;
    if (d && !d.open) d.showModal();
  }), []);

  useEffect(() => {
    if (isOpen) ref.current?.querySelector<HTMLElement>("input[name=name]")?.focus();
  }, [isOpen]);

  function close() {
    ref.current?.close();
  }

  return (
    <dialog className={styles.dlg} id="lead" ref={ref} aria-labelledby="lead-h" onClose={() => setIsOpen(false)} onClick={(e) => { if (e.target === ref.current) close(); }}>
      {isOpen && (
        <div style={{ padding: "20px var(--g) 22px" }}>
          <div className={styles.top}>
            <div>
              <h2 id="lead-h">Call me back</h2>
              <p style={{ margin: "4px 0 0", fontSize: "14.5px", color: "var(--muted)" }}>About {ctx.label}. No call unless you ask.</p>
            </div>
            <button className={styles.x} type="button" aria-label="Close" onClick={close}>&times;</button>
          </div>
          <LeadForm idPrefix="d" treatment={ctx.treatment} defaultCity={ctx.city} whatsappHref={whatsappHref ?? undefined} />
        </div>
      )}
    </dialog>
  );
}
