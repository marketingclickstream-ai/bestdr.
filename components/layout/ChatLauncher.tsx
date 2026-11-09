"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./ChatLauncher.module.css";

/**
 * Optional chat launcher. It renders nothing unless NEXT_PUBLIC_CHATBOT_SRC is set.
 * Privacy rules (DPDP):
 *  - no script is requested until the visitor clicks "Start chat" after reading the consent line;
 *  - nothing from any form on this site is read or sent to the chat provider;
 *  - no automatic pop-up: the visitor opens it.
 * Position: above the sticky bar on phones, bottom right on desktop. It hides while the hero buttons are
 * on screen, while someone types in a form, and while a dialog is open, so it never competes with the
 * sticky bar or covers the Call me back and WhatsApp buttons.
 */
export function ChatLauncher({ src }: { src: string }) {
  const [open, setOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [heroVisible, setHeroVisible] = useState(true);
  const [busy, setBusy] = useState(false);
  const openBtn = useRef<HTMLButtonElement>(null);
  let host = "the chat provider";
  try { host = new URL(src).hostname; } catch { /* keep the generic name */ }

  useEffect(() => {
    const target = document.getElementById("hero-cta");
    if (!target || !("IntersectionObserver" in window)) { setHeroVisible(false); return; }
    const io = new IntersectionObserver(([e]) => setHeroVisible(Boolean(e?.isIntersecting)), { threshold: 0 });
    io.observe(target);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const onIn = (e: FocusEvent) => {
      const el = e.target as HTMLInputElement;
      setBusy(/INPUT|TEXTAREA/.test(el.tagName) && el.type !== "checkbox" && el.type !== "radio" && !el.closest("[data-chat]"));
    };
    const onOut = () => setBusy(false);
    document.addEventListener("focusin", onIn);
    document.addEventListener("focusout", onOut);
    return () => { document.removeEventListener("focusin", onIn); document.removeEventListener("focusout", onOut); };
  }, []);

  function start() {
    const s = document.createElement("script");
    s.src = src;
    s.async = true;
    s.referrerPolicy = "strict-origin";
    s.onload = () => setLoaded(true);
    s.onerror = () => { setLoaded(false); setOpen(false); };
    document.body.appendChild(s);
    setLoaded(true); // the provider shows its own window from here
    setOpen(false);
  }

  function close() {
    setOpen(false);
    requestAnimationFrame(() => openBtn.current?.focus());
  }

  if (loaded) return null;
  const hidden = heroVisible || busy;

  return (
    <div className={`${styles.wrap} ${hidden && !open ? styles.off : ""}`} data-chat {...(hidden && !open ? { inert: true } : {})}>
      {open && (
        <div className={styles.panel} role="region" aria-label="Before you chat" onKeyDown={(e) => { if (e.key === "Escape") close(); }}>
          <p>
            Chat is run by another company ({host}). Starting it loads their service on this page, and what you type in the chat goes to them.
            We do not send them anything from the forms on this site. Say stop at any point.
          </p>
          <div className={styles.row}>
            <button type="button" className="btn btn-cta" onClick={start} autoFocus>Start chat</button>
            <button type="button" className="btn btn-line" onClick={close}>Not now</button>
          </div>
        </div>
      )}
      <button ref={openBtn} type="button" className={styles.open} aria-expanded={open} onClick={() => setOpen((v) => !v)}>
        Chat with us
      </button>
    </div>
  );
}
