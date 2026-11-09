"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { CITY_CHOICES, CONSENT_TEXT, digitsOnly, validateLeadFields, type LeadFieldErrors } from "@/lib/lead-fields";
import { WhatsAppIcon } from "../ui/WhatsAppButton";
import Link from "next/link";

interface Props {
  /** Prefix for element ids so two forms can sit on one page. */
  idPrefix: string;
  treatment: string;
  defaultCity: string;
  whatsappHref?: string;
  submitLabel?: string;
}

/** Keeps 10 digits. A pasted "+91 98765 43210" or "098765 43210" loses its prefix first. */
function tenDigits(raw: string): string {
  let d = digitsOnly(raw);
  if (d.length > 10 && d.startsWith("91")) d = d.slice(2);
  else if (d.length > 10 && d.startsWith("0")) d = d.slice(1);
  return d.slice(0, 10);
}

type Status = "idle" | "sending" | "sent" | "demo" | "error";

/**
 * Three labelled fields (name, mobile, city), consent, and a hidden honeypot.
 * Nothing is read from the fields until the person presses the button: no input listeners
 * send data, and nothing is stored in the browser.
 */
export function LeadForm({ idPrefix, treatment, defaultCity, whatsappHref, submitLabel = "Call me back" }: Props) {
  const pathname = usePathname();
  const [errors, setErrors] = useState<LeadFieldErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [phone, setPhone] = useState("");
  const id = (s: string) => `${idPrefix}-${s}`;

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const consent = data.get("consent") === "on";
    const found = validateLeadFields({ name, phone, consent });
    setErrors(found);
    if (found.name) return form.querySelector<HTMLElement>("[name=name]")?.focus();
    if (found.phone) return form.querySelector<HTMLElement>("[name=phone]")?.focus();
    if (found.consent) return form.querySelector<HTMLElement>("[name=consent]")?.focus();

    setStatus("sending");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(), mobile: phone, city: String(data.get(idPrefix + "city") ?? "other"), treatment, source: pathname || "/",
          consent: true, website: String(data.get("website") ?? ""),
        }),
      });
      if (!res.ok) { setStatus("error"); return; }
      // The server says stored:false when no database is connected. Never claim a lead was captured then.
      const result = (await res.json().catch(() => ({}))) as { stored?: boolean };
      setStatus(result.stored === false ? "demo" : "sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "demo") {
    return (
      <p className="msg" role="status"><b>Demo mode: nothing was saved.</b> This site is a prototype and is not connected to a database yet, so nobody will call you. {whatsappHref ? "Please use WhatsApp to reach us." : "Please check back when the site is live."}</p>
    );
  }

  if (status === "sent") {
    return (
      <div className="lf">
        <p className="msg" role="status"><b>Thank you.</b> A coordinator will reach out on the number you gave, at a reasonable hour. Say stop on WhatsApp or at the call and your details are deleted.</p>
      </div>
    );
  }

  return (
    <form className="lf" noValidate onSubmit={onSubmit}>
      <div className="field">
        <label htmlFor={id("name")}>Your name</label>
        <input className="fld" id={id("name")} name="name" type="text" autoComplete="given-name" maxLength={80} aria-invalid={errors.name ? true : undefined} aria-describedby={id("en")} />
        <p className="err" id={id("en")} aria-live="polite">{errors.name}</p>
      </div>
      <div className="field">
        <label htmlFor={id("phone")}>Mobile number</label>
        <div className="phone">
          <span className="cc" aria-hidden="true">+91</span>
          <input className="fld" id={id("phone")} name="phone" type="tel" inputMode="numeric" autoComplete="tel-national" value={phone} onChange={(e) => setPhone(tenDigits(e.target.value))} aria-invalid={errors.phone ? true : undefined} aria-describedby={id("ep")} />
        </div>
        <p className="err" id={id("ep")} aria-live="polite">{errors.phone}</p>
      </div>
      <fieldset>
        <legend>City you can reach easily</legend>
        <div className="chips">
          {CITY_CHOICES.map((c) => (
            <label key={c.value}>
              <input type="radio" name={idPrefix + "city"} value={c.value} defaultChecked={c.value === defaultCity} />
              <span>{c.label}</span>
            </label>
          ))}
        </div>
      </fieldset>
      <div className="sr" aria-hidden="true">
        <label>Leave this empty<input type="text" name="website" tabIndex={-1} autoComplete="off" /></label>
      </div>
      <label className="consent" htmlFor={id("consent")}>
        <input type="checkbox" id={id("consent")} name="consent" aria-describedby={id("ec")} aria-invalid={errors.consent ? true : undefined} />
        <span>{CONSENT_TEXT}</span>
      </label>
      <p className="err" id={id("ec")} aria-live="polite">{errors.consent}</p>
      <div className="btns">
        <button className="btn btn-cta" type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending" : submitLabel}</button>
        {whatsappHref && <a className="btn btn-wa" href={whatsappHref}><WhatsAppIcon />Message us on WhatsApp instead</a>}
      </div>
      {status === "error" && <p className="msg" role="alert"><b>We could not send that.</b> Please try again, or use WhatsApp.</p>}
      <p className="fine">We keep your name and number only to answer this enquiry, and share them with a partner hospital only if you agree. <Link href="/privacy">Privacy notice</Link></p>
    </form>
  );
}
