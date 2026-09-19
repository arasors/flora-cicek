import { ArrowRight, BadgeCheck, Boxes, PartyPopper } from "lucide-react";

const benefits = [
  {
    label: "Geniş Toptan Ürün Seçkisi",
    Icon: Boxes,
  },
  {
    label: "Birinci Kalite Ürünler",
    Icon: BadgeCheck,
  },
  {
    label: "Organizasyon Çözümleri",
    Icon: PartyPopper,
  },
] as const;

export function FinalCtaSection() {
  return (
    <section
      aria-labelledby="final-cta-heading"
      className="mx-auto max-w-5xl px-6 py-16 text-center"
    >
      <h2
        id="final-cta-heading"
        className="text-3xl font-extrabold text-[#241f18]"
      >
        Toptan Yapay Çiçek Tedariğinde Yanınızdayız
      </h2>

      <p className="mx-auto mt-3 max-w-2xl text-base font-medium leading-6 text-[#241f18]/80">
        Mağaza, organizasyon, vitrin ve ticari dekorasyon ihtiyaçlarınız için zengin
        ürün seçeneklerini keşfedin.
      </p>

      <p className="mx-auto mt-3 max-w-2xl text-base leading-6 text-[#6e665a]">
        Toptan fiyat, güncel ürün seçenekleri ve sipariş detayları için Flora Çiçek ile
        telefon veya WhatsApp üzerinden iletişime geçin.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {benefits.map(({ label, Icon }) => (
          <div
            key={label}
            className="flex flex-col items-center gap-3 rounded-xl border border-[#e8dfd0] bg-white p-6"
          >
            <span className="flex size-12 items-center justify-center rounded-lg bg-[#f3e5c8] text-[#a8782a]">
              <Icon aria-hidden="true" className="size-6" strokeWidth={2} />
            </span>
            <span className="text-base font-semibold leading-6 text-[#241f18]">
              {label}
            </span>
          </div>
        ))}
      </div>

      <a
        href="#iletisim"
        className="mt-10 inline-flex items-center justify-center gap-2 rounded-lg bg-[#a8782a] px-7 py-3.5 text-base font-semibold leading-6 text-white transition-colors duration-[180ms] ease-in-out hover:bg-[#7a5317]"
      >
        Toptan Teklif Alın
        <ArrowRight aria-hidden="true" className="size-[18px]" strokeWidth={2} />
      </a>
    </section>
  );
}
