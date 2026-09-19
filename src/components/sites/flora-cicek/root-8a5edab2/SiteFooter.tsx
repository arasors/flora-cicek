import Image from "next/image";
import Link from "next/link";
import { MapPin, MessageCircle, Phone } from "lucide-react";

import {
  ADDRESS,
  ASSET_ROOT,
  footerCorporate,
  footerServices,
  MAPS_HREF,
  PHONE_DISPLAY,
  PHONE_HREF,
  WHATSAPP_HREF,
} from "./data";

const footerLinkClass =
  "text-sm leading-5 text-[rgba(243,229,200,0.82)] transition-colors duration-180 ease-out hover:text-white";

export function SiteFooter() {
  return (
    <footer
      id="iletisim"
      className="mt-24 scroll-mt-20 border-t border-[#6b4b22] bg-[#21180d] text-[#fbf7ee]"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Image
            src={`${ASSET_ROOT}/flora-logo.png`}
            alt="Flora Çiçek"
            width={1333}
            height={1180}
            className="h-20 w-24 object-contain object-left"
          />
          <h2 className="mt-3 text-xl leading-7 font-extrabold tracking-tight">
            FLORA ÇİÇEK
          </h2>
          <p className="mt-3 text-sm leading-5 text-[rgba(243,229,200,0.82)]">
            Toptan yapay çiçek, yapay bitki, aranjman ve organizasyon ürünlerinde
            geniş ürün seçenekleri sunuyoruz.
          </p>
        </div>

        <nav aria-label="Altbilgi ürün grupları">
          <h2 className="mb-3 text-sm leading-5 font-bold tracking-[0.35px] text-[#dfc38d] uppercase">
            Ürün Grupları
          </h2>
          <ul className="flex flex-col gap-2 text-sm leading-5 text-[rgba(243,229,200,0.82)]">
            {footerServices.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className={footerLinkClass}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Altbilgi hızlı bağlantılar">
          <h2 className="mb-3 text-sm leading-5 font-bold tracking-[0.35px] text-[#dfc38d] uppercase">
            Hızlı Bağlantılar
          </h2>
          <ul className="flex flex-col gap-2 text-sm leading-5 text-[rgba(243,229,200,0.82)]">
            {footerCorporate.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className={footerLinkClass}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="mb-3 text-sm leading-5 font-bold tracking-[0.35px] text-[#dfc38d] uppercase">
            İletişim
          </h2>
          <ul className="flex flex-col gap-3 text-sm leading-5 text-[rgba(243,229,200,0.82)]">
            <li>
              <a href={PHONE_HREF} className={`flex gap-2 ${footerLinkClass}`}>
                <Phone aria-hidden="true" className="mt-0.5 size-4 shrink-0" strokeWidth={2} />
                <span>{PHONE_DISPLAY}</span>
              </a>
            </li>
            <li>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex gap-2 ${footerLinkClass}`}
              >
                <MessageCircle
                  aria-hidden="true"
                  className="mt-0.5 size-4 shrink-0"
                  strokeWidth={2}
                />
                <span>WhatsApp ile yazın</span>
              </a>
            </li>
            <li>
              <a
                href={MAPS_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex gap-2 ${footerLinkClass}`}
              >
                <MapPin aria-hidden="true" className="mt-0.5 size-4 shrink-0" strokeWidth={2} />
                <span>{ADDRESS}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[#6b4b22] py-5">
        <div className="mx-auto max-w-7xl px-6 text-center text-xs leading-4 text-[rgba(223,195,141,0.75)] sm:text-left">
          © 2026 Flora Çiçek — Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  );
}
