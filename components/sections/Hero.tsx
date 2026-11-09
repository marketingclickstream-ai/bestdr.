import type { ReactNode } from "react";
import type { ImageSlotData, Reviewer } from "@/content/types";
import { ImageSlot } from "../ui/ImageSlot";
import type { Crumb } from "@/lib/schema";
import { longDate } from "@/lib/format";
import { Breadcrumbs } from "../layout/Breadcrumbs";
import { FootRef } from "../ui/FootRef";
import { OpenLeadButton } from "../ui/OpenLeadButton";
import { Rich } from "../ui/Rich";
import { SampleChip } from "../ui/SampleChip";
import { WhatsAppButton } from "../ui/WhatsAppButton";
import styles from "./Hero.module.css";

export interface HeroFigure {
  label: string;
  value: string;
  chip: string | null;
  note?: string;
  linkText: string;
  href: string;
}

export interface HeroProps {
  crumbs: Crumb[];
  title: string;
  titleEm?: string;
  dek: string;
  reviewer: Reviewer | null;
  figure?: HeroFigure | null;
  waMessage: string;
  plate?: ReactNode;
  plateCaption?: string;
  plateSlot?: ImageSlotData;
  shortAnswers: { q: string; a: string; href: string; linkText: string }[];
}

export function Hero({ crumbs, title, titleEm, dek, reviewer, figure, waMessage, plate, plateCaption, plateSlot, shortAnswers }: HeroProps) {
  return (
    <section className={styles.hero} id="top">
      <div className="wrap">
        <Breadcrumbs crumbs={crumbs} />
        <div className={styles.grid}>
          <div>
            <h1>
              {title}
              {titleEm && <> <em>{titleEm}</em></>}
            </h1>
            <p className={styles.dek}><Rich text={dek} /></p>
            <p className={styles.by}>
              {reviewer ? (
                <>
                  Reviewed by <b>{reviewer.name}</b>, {reviewer.credential}, on {longDate(reviewer.reviewedOn)}. {reviewer.isSample && <SampleChip />}
                  <FootRef n={1} id="r1" />
                </>
              ) : (
                <>Medical review is pending. No reviewer is named yet.</>
              )}
            </p>
            {figure && (
              <div className={styles.fig} role="group" aria-label="Price range">
                <p className={styles.k}>
                  {figure.label} {figure.chip && <SampleChip label={figure.chip} />}
                  <FootRef n={2} id="r2" />
                </p>
                <p className={styles.v}><small>Rs</small> {figure.value}</p>
                <a className={styles.s} href={figure.href}>{figure.linkText}</a>
              </div>
            )}
            <div className="cta" id="hero-cta">
              <WhatsAppButton message={waMessage} id="wa1" />
              <OpenLeadButton>Call me back</OpenLeadButton>
            </div>
            <p className={styles.reass}>We reply within 30 minutes, 9 am to 9 pm. <SampleChip /> No call unless you ask. Your details are deleted if you say stop.</p>
          </div>
          {plate && (
            <figure className={styles.plate}>
              <ImageSlot slot={plateSlot} ratio="4 / 5" sizes="(min-width:1180px) 30vw, 100vw" priority>{plate}</ImageSlot>
              {plateCaption && <figcaption className="fcap"><b>Plate 1.</b> {plateCaption}</figcaption>}
            </figure>
          )}
        </div>
        <div className={styles.brief}>
          <h2>The short answers</h2>
          <ul>
            {shortAnswers.map((s) => (
              <li key={s.q}>
                <q>{s.q}</q>
                <p>{s.a} <Rich text={`[${s.linkText}](${s.href})`} /></p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
