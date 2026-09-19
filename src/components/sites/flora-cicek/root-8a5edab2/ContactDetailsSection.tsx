import { ArrowUpRight, MapPin, MessageCircle, Phone } from "lucide-react";

import {
  ADDRESS,
  MAP_EMBED_HREF,
  MAPS_HREF,
  PHONE_DISPLAY,
  PHONE_HREF,
  WHATSAPP_HREF,
} from "./data";

export function ContactDetailsSection() {
  return (
    <section className="px-4 py-16 sm:px-7 lg:py-24">
      <div className="mx-auto max-w-[1380px] overflow-hidden rounded-[2rem] border border-[#21180d]/10 bg-[#21180d] shadow-[0_30px_90px_rgba(33,24,13,0.12)] lg:grid lg:grid-cols-2">
        <div className="relative min-h-[430px] overflow-hidden bg-[#e8dfd0] sm:min-h-[520px] lg:min-h-[640px]">
          <iframe
            src={MAP_EMBED_HREF}
            title="Flora Çiçek Bağcılar merkez haritası"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 size-full border-0 grayscale-[0.18] contrast-[0.95]"
          />
          <div className="pointer-events-none absolute top-5 left-5 rounded-full border border-white/70 bg-[#fdfbf7]/90 px-4 py-2 text-[10px] font-bold tracking-[0.16em] text-[#21180d] uppercase shadow-sm backdrop-blur-md sm:top-7 sm:left-7">
            Bağcılar / İstanbul
          </div>
        </div>

        <div className="relative flex min-h-[560px] flex-col justify-between overflow-hidden px-6 py-12 text-white sm:px-10 sm:py-14 lg:min-h-[640px] lg:px-14 lg:py-16">
          <div aria-hidden="true" className="absolute -top-36 -right-32 size-[28rem] rounded-full border border-[#dfc38d]/10" />
          <div aria-hidden="true" className="absolute -top-10 -right-12 size-[17rem] rounded-full border border-[#dfc38d]/8" />

          <div className="relative">
            <span className="text-xs font-bold tracking-[0.2em] text-[#dfc38d] uppercase">
              01 — Bize ulaşın
            </span>
            <h2 className="mt-5 max-w-xl text-4xl leading-[1] font-medium tracking-[-0.055em] sm:text-5xl lg:text-6xl">
              Ziyaret edin veya doğrudan yazın.
            </h2>
            <p className="mt-6 max-w-xl text-sm leading-7 text-white/58 sm:text-base">
              Güncel koleksiyon, stok durumu ve toptan siparişler için satış ekibimizle
              iletişime geçin. Merkezimize gelmeden önce ürün uygunluğunu birlikte
              teyit edebiliriz.
            </p>
          </div>

          <div className="relative mt-12 space-y-3">
            <a
              href={MAPS_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start justify-between gap-5 rounded-2xl border border-white/12 bg-white/[0.035] p-5 transition-colors duration-300 hover:bg-white/[0.075] sm:p-6"
            >
              <span className="flex gap-4">
                <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-full bg-[#dfc38d] text-[#21180d]">
                  <MapPin aria-hidden="true" className="size-4" />
                </span>
                <span>
                  <span className="block text-[9px] font-bold tracking-[0.18em] text-white/35 uppercase">
                    Adres ve yol tarifi
                  </span>
                  <span className="mt-2 block max-w-md text-sm leading-6 font-medium text-white/85">
                    {ADDRESS}
                  </span>
                </span>
              </span>
              <ArrowUpRight aria-hidden="true" className="size-4 shrink-0 text-[#dfc38d] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
            </a>

            <div className="grid gap-3 sm:grid-cols-2">
              <a
                href={PHONE_HREF}
                className="group flex items-center gap-4 rounded-2xl border border-white/12 bg-white/[0.035] p-5 transition-colors duration-300 hover:bg-white/[0.075]"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-[#dfc38d]/30 text-[#dfc38d]">
                  <Phone aria-hidden="true" className="size-4" />
                </span>
                <span>
                  <span className="block text-[9px] font-bold tracking-[0.18em] text-white/35 uppercase">Telefon</span>
                  <span className="mt-1.5 block text-sm font-semibold text-white">{PHONE_DISPLAY}</span>
                </span>
              </a>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl bg-[#dfc38d] p-5 text-[#21180d] transition-colors duration-300 hover:bg-white"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#21180d] text-[#dfc38d]">
                  <MessageCircle aria-hidden="true" className="size-4" />
                </span>
                <span>
                  <span className="block text-[9px] font-bold tracking-[0.18em] text-[#21180d]/50 uppercase">WhatsApp</span>
                  <span className="mt-1.5 block text-sm font-semibold">Ürün bilgisi alın</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
