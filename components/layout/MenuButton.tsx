"use client";

import { useEffect, useState } from "react";
import { emit, on } from "@/lib/ui-events";

/** Hamburger. The panel itself is <MobileMenu />; they talk through ui-events. */
export function MenuButton({ className }: { className: string }) {
  const [expanded, setExpanded] = useState(false);
  useEffect(() => on("menu-state", (open) => setExpanded(Boolean(open))), []);
  return (
    <button className={className} id="burger" type="button" aria-label="Open menu" aria-expanded={expanded} aria-controls="mp" onClick={() => emit("open-menu")}>
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 7h16M4 12h16M4 17h16" />
      </svg>
    </button>
  );
}
