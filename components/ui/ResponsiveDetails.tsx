"use client";

import { useEffect, useRef } from "react";

/**
 * <details> that is open in the HTML (so crawlers and no-JS visitors get everything) and
 * folds shut on narrow screens after load. Tables that are heavy on a phone start collapsed there.
 */
export function ResponsiveDetails({ summary, children, className = "more dd", id, minWidth = 900, bare = false }: { summary: React.ReactNode; children: React.ReactNode; className?: string; id?: string; minWidth?: number; bare?: boolean }) {
  const ref = useRef<HTMLDetailsElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const mq = window.matchMedia(`(min-width:${minWidth}px)`);
    const apply = () => { el.open = mq.matches; };
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, [minWidth]);
  return (
    <details ref={ref} className={className} id={id} open>
      <summary>{summary}</summary>
      {bare ? children : <div className="in">{children}</div>}
    </details>
  );
}
