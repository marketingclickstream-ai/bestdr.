import Image from "next/image";
import type { ImageSlotData } from "@/content/types";

/**
 * A picture slot with a fixed aspect ratio, so the page never shifts when an image loads.
 * Until slot.imageSrc is set the built-in SVG (children) is shown. When it is set, the file in
 * public/images/ is shown with next/image. Only the hero slot passes priority; all others lazy-load.
 * See public/images/README.md for slot names, sizes and the rules for stock photos.
 */
export function ImageSlot({ slot, ratio, sizes, priority = false, children }: {
  slot?: ImageSlotData;
  /** width / height, e.g. "3 / 2" */
  ratio: string;
  sizes: string;
  priority?: boolean;
  children: React.ReactNode;
}) {
  if (!slot?.imageSrc) return <>{children}</>;
  return (
    <div className="slot" style={{ aspectRatio: ratio }}>
      <Image src={slot.imageSrc} alt={slot.imageAlt ?? ""} fill sizes={sizes} priority={priority} style={{ objectFit: "cover" }} />
      {slot.credit && <span className="credit">{slot.credit}</span>}
    </div>
  );
}
