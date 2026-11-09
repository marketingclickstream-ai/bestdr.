"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { NavGroup } from "@/content/site";
import { emit, on } from "@/lib/ui-events";
import { WhatsAppIcon } from "../ui/WhatsAppButton";
import styles from "./MobileMenu.module.css";

/**
 * Full-height menu panel for screens under 1180px: search that filters the links, accordion
 * rows, focus trap, Escape to close, and the page behind it made inert while it is open.
 */
export function MobileMenu({ groups, whatsappHref }: { groups: NavGroup[]; whatsappHref: string | null }) {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<number | null>(null);
  const [query, setQuery] = useState("");
  const panel = useRef<HTMLDivElement>(null);
  const search = useRef<HTMLInputElement>(null);
  const returnFocus = useRef<HTMLElement | null>(null);

  const flat = useMemo(() => {
    const seen = new Set<string>();
    return groups.flatMap((g) => g.links).filter((l) => (seen.has(l.href + l.label) ? false : (seen.add(l.href + l.label), true)));
  }, [groups]);

  const q = query.trim().toLowerCase();
  const results = q ? flat.filter((l) => l.label.toLowerCase().includes(q) || l.href.includes(q.replace(/\s+/g, "-"))) : [];

  const close = useCallback(() => {
    setOpen(false);
    setQuery("");
    emit("menu-state", false);
  }, []);

  useEffect(() => on("open-menu", () => { returnFocus.current = document.activeElement as HTMLElement; setOpen(true); emit("menu-state", true); }), []);
  useEffect(() => on("open-lead", () => { if (open) close(); }), [open, close]);

  useEffect(() => {
    const site = document.getElementById("site");
    if (!open) {
      site?.removeAttribute("inert");
      document.body.style.overflow = "";
      returnFocus.current?.focus?.();
      return;
    }
    site?.setAttribute("inert", "");
    document.body.style.overflow = "hidden";
    search.current?.focus();
  }, [open]);

  function onKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Escape") { close(); return; }
    if (e.key !== "Tab" || !panel.current) return;
    const focusable = Array.from(panel.current.querySelectorAll<HTMLElement>("a[href],button,input")).filter((el) => !el.hasAttribute("disabled") && el.offsetParent !== null);
    const first = focusable[0], last = focusable[focusable.length - 1];
    if (!first || !last) return;
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }

  return (
    <div className={styles.mp} id="mp" role="dialog" aria-modal="true" aria-label="Menu" hidden={!open} ref={panel} onKeyDown={onKeyDown}>
      <div className={styles.mpH}>
        <Link className="logo" href="/" aria-label="Bestdoctorsin, home" onClick={close}>
          <Image className="lg" src="/assets/logo.png" width={480} height={131} alt="Bestdoctorsin" sizes="125px" />
        </Link>
        <button className="ib" id="mp-x" type="button" aria-label="Close menu" onClick={close}>
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 5l14 14M19 5L5 19" /></svg>
        </button>
      </div>
      <div className={styles.mpB}>
        <form className={styles.mpS} role="search" onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="mq">Search treatments and guides</label>
          <input id="mq" ref={search} type="search" autoComplete="off" placeholder="For example: cost, recovery, grades" value={query} onChange={(e) => setQuery(e.target.value)} />
        </form>
        {q && results.length === 0 && (
          <p className={styles.nores}>No page matches.{whatsappHref && <> <a href={whatsappHref}>Ask us on WhatsApp</a>.</>}</p>
        )}
        {q && results.length > 0 && (
          <ul className={styles.sres}>
            {results.map((l) => <li key={l.href + l.label}><Link href={l.href} onClick={close}>{l.label}</Link></li>)}
          </ul>
        )}
        {!q && (
          <nav aria-label="Menu">
            <ul className={styles.acc}>
              {groups.map((g, i) => (
                <li key={g.label}>
                  <button type="button" aria-expanded={expanded === i} aria-controls={`m${i}`} onClick={() => setExpanded(expanded === i ? null : i)}>{g.label}</button>
                  <ul id={`m${i}`} hidden={expanded !== i}>
                    {g.links.map((l) => (
                      <li key={l.href + l.label}><Link href={l.href} onClick={close}>{l.label}</Link></li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
      <div className={styles.mpF}>
        {whatsappHref && <a className="btn btn-wa" href={whatsappHref}><WhatsAppIcon />Chat on WhatsApp</a>}
        <button className="btn btn-line" type="button" onClick={() => { close(); emit("open-lead"); }}>Request a call back</button>
      </div>
    </div>
  );
}
