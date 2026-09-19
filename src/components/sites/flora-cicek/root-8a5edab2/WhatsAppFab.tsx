import { WhatsAppIcon } from "../shared/icons";
import { WHATSAPP_HREF } from "./data";

export function WhatsAppFab() {
  return (
    <a
      href={WHATSAPP_HREF}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Flora Çiçek ile WhatsApp üzerinden iletişime geçin"
      className="fixed right-5 bottom-5 z-50 flex size-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-[0_4px_12px_rgba(0,0,0,0.2)] transition-transform duration-[180ms] ease-out hover:scale-105"
    >
      <WhatsAppIcon className="size-[30px]" />
    </a>
  );
}
