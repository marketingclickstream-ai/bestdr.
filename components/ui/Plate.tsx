/** Figure frame for the drawn plates: rule on top, caption underneath. */
import type { ImageSlotData } from "@/content/types";
import { ImageSlot } from "./ImageSlot";

export function Plate({ n, caption, children, captions, slot, ratio = "3 / 2" }: { n: number; caption: string; children: React.ReactNode; captions?: { title: string; text: string }[]; slot?: ImageSlotData; ratio?: string }) {
  const cols = captions?.length === 2 ? "caps2" : "caps";
  return (
    <figure className="pl">
      <ImageSlot slot={slot} ratio={ratio} sizes="(min-width:1180px) 40vw, 100vw">{children}</ImageSlot>
      {captions && (
        <div className={cols}>
          {captions.map((c) => <div key={c.title}><b>{c.title}</b><span>{c.text}</span></div>)}
        </div>
      )}
      <figcaption className="fcap"><b>Plate {n}.</b> {caption}</figcaption>
    </figure>
  );
}
