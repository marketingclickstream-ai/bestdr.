"use client";

import { useEffect, useState } from "react";
import { WhatsAppIcon } from "../ui/WhatsAppButton";
import { OpenLeadButton } from "../ui/OpenLeadButton";
import styles from "./StickyBar.module.css";

/**
 * Bottom bar on phones. Hidden while the hero buttons are on screen and while someone is
 * typing (the on-screen keyboard would cover it). No data is read from the fields.
 */
export function StickyBar({ whatsappHref }: { whatsappHref: string | null }) {
  const [heroVisible, setHeroVisible] = useState(true);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    const target = document.getElementById("hero-cta");
    if (!target || !("IntersectionObserver" in window)) { setHeroVisible(false); return; }
    const io = new IntersectionObserver(([entry]) => setHeroVisible(Boolean(entry?.isIntersecting)), { threshold: 0 });
    io.observe(target);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const onIn = (e: FocusEvent) => {
      const el = e.target as HTMLInputElement;
      if (/INPUT|TEXTAREA/.test(el.tagName) && el.type !== "checkbox" && el.type !== "radio" && !el.closest("dialog,#mp")) setTyping(true);
    };
    const onOut = () => setTyping(false);
    document.addEventListener("focusin", onIn);
    document.addEventListener("focusout", onOut);
    return () => { document.removeEventListener("focusin", onIn); document.removeEventListener("focusout", onOut); };
  }, []);

  const on = !heroVisible && !typing;
  return (
    <div className={`${styles.bar} ${on ? styles.on : ""}`} id="bar" role="region" aria-label="Contact options" {...(on ? {} : { inert: true })}>
      {whatsappHref && <a className="btn btn-wa" href={whatsappHref}><WhatsAppIcon />WhatsApp</a>}
      <OpenLeadButton>Call me back</OpenLeadButton>
    </div>
  );
}
