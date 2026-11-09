"use client";

import { useEffect, useState } from "react";


/** "In this page" list. Marks the section nearest the top of the screen with aria-current. */
export function TocList({ items }: { items: { id: string; label: string }[] }) {
  const [current, setCurrent] = useState<string | null>(null);
  useEffect(() => {
    const els = items.map((i) => document.getElementById(i.id));
    const update = () => {
      let cur: string | null = null;
      els.forEach((el) => { if (el && el.getBoundingClientRect().top <= 200) cur = el.id; });
      setCurrent(cur);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [items]);
  return (
    <ol id="toc">
      {items.map((i) => (
        <li key={i.id}>
          <a href={`#${i.id}`} aria-current={current === i.id ? "true" : undefined}>{i.label}</a>
        </li>
      ))}
    </ol>
  );
}
