"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { NavGroup } from "@/content/site";
import styles from "./Header.module.css";

/**
 * Desktop menu (1180px and wider). Every link is a real <a> in the HTML. The caret button
 * opens the dropdown; hover also opens it in CSS. Keyboard: Enter/Space on the caret opens,
 * ArrowDown/ArrowUp move through links, Escape closes and returns focus to the caret.
 */
export function DesktopNav({ groups }: { groups: NavGroup[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const root = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (root.current && !root.current.contains(e.target as Node)) setOpen(null);
    };
    document.addEventListener("click", onDoc);
    return () => document.removeEventListener("click", onDoc);
  }, []);

  function onKeyDown(e: React.KeyboardEvent<HTMLLIElement>, index: number) {
    const li = e.currentTarget;
    const links = Array.from(li.querySelectorAll<HTMLAnchorElement>(`.${styles.sub} a`));
    const caret = li.querySelector<HTMLButtonElement>(`.${styles.cr}`);
    const i = links.indexOf(document.activeElement as HTMLAnchorElement);
    if (e.key === "Escape" && open === index) {
      setOpen(null);
      caret?.focus();
      e.stopPropagation();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setOpen(index);
      (links[i + 1] ?? links[0])?.focus();
    } else if (e.key === "ArrowUp" && open === index) {
      e.preventDefault();
      (i > 0 ? links[i - 1] : caret)?.focus();
    }
  }

  return (
    <ul className={styles.dnav} ref={root}>
      {groups.map((g, i) => (
        <li
          key={g.label}
          className={open === i ? styles.open : undefined}
          onKeyDown={(e) => onKeyDown(e, i)}
          onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget as Node | null) && open === i) setOpen(null); }}
        >
          <Link href={g.href}>{g.label}</Link>
          {g.links.length > 1 && (
            <>
              <button
                className={styles.cr}
                type="button"
                aria-expanded={open === i}
                aria-label={`${g.label} submenu`}
                aria-controls={`sub${i}`}
                onClick={() => setOpen(open === i ? null : i)}
              />
              <ul className={`${styles.sub} ${g.links.length > 6 ? styles.mega : ""} ${g.alignRight ? styles.r : ""}`} id={`sub${i}`}>
                {g.links.map((l) => (
                  <li key={l.href + l.label} className={l.all ? styles.all : undefined}>
                    <Link href={l.href}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}
