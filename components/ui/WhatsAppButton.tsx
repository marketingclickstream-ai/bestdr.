import { waLink } from "@/lib/whatsapp";

export function WhatsAppIcon() {
  return (
    <svg aria-hidden="true">
      <use href="#wa" />
    </svg>
  );
}

export function WhatsAppButton({ message, children = "Message us on WhatsApp", id, className = "btn btn-wa" }: { message: string; children?: React.ReactNode; id?: string; className?: string }) {
  const href = waLink(message);
  if (!href) return null;
  return (
    <a className={className} id={id} href={href}>
      <WhatsAppIcon />
      {children}
    </a>
  );
}
