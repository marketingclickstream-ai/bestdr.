"use client";

import { emit } from "@/lib/ui-events";

/** A button that opens the call-back sheet. Server components use it where the original used data-open="lead". */
export function OpenLeadButton({ children = "Call me back", className = "btn btn-cta", closeMenu }: { children?: React.ReactNode; className?: string; closeMenu?: boolean }) {
  return (
    <button className={className} type="button" data-close-menu={closeMenu ? "" : undefined} onClick={() => emit("open-lead")}>
      {children}
    </button>
  );
}
