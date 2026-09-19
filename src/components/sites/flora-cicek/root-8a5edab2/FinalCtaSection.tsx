import { ArrowRight, MessageCircle } from "lucide-react";

import { PHONE_DISPLAY, PHONE_HREF, WHATSAPP_HREF } from "./data";

export function FinalCtaSection() {
  return (
    <section className="px-4 py-10 sm:px-7 lg:py-20">
      <div className="relative mx-auto max-w-[1380px] overflow-hidden rounded-[2rem] bg-[#b3802e] px-6 py-16 text-white sm:px-12 lg:px-20 lg:py-28">
        <div aria-hidden="true" className="flora-cta-orbit absolute -top-32 -right-20 size-[30rem] rounded-full border border-white/15" />
        <div aria-hidden="true" className="absolute -right-6 -bottom-36 size-[25rem] rounded-full bg-[#21180d]/12 blur-3xl" />
        <div className="relative grid items-end gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <span className="text-xs font-bold tracking-[0.2em] text-white/70 uppercase">
              Bir sonraki projeniz
            </span>
            <h2 className="mt-5 max-w-5xl text-4xl leading-[0.96] font-medium tracking-[-0.06em] sm:text-6xl lg:text-8xl">
              Doğru seçki bir konuşmayla başlar.
            </h2>
          </div>
          <div>
            <p className="max-w-lg text-base leading-7 text-white/78">
              Güncel ürünler, toptan fiyatlar ve sipariş detayları için Flora Çiçek
              ekibiyle telefon veya WhatsApp üzerinden iletişime geçin.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-13 items-center gap-3 rounded-full bg-[#21180d] px-6 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5"
              >
                <MessageCircle aria-hidden="true" className="size-4" />
                WhatsApp ile yazın
                <ArrowRight aria-hidden="true" className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href={PHONE_HREF}
                className="inline-flex min-h-13 items-center rounded-full border border-white/30 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur-md transition-colors duration-300 hover:bg-white hover:text-[#21180d]"
              >
                {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
