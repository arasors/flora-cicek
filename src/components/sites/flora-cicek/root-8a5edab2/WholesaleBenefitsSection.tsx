import { BadgeCheck, Boxes, PartyPopper, Sun } from "lucide-react";

const wholesaleBenefits = [
  {
    label: "Geniş Ürün Yelpazesi",
    description: "Çiçekten bitkiye, aranjmandan organizasyon ürünlerine uzanan seçenekler.",
    Icon: Boxes,
  },
  {
    label: "Birinci Kalite",
    description: "Profesyonel kullanım için özenle seçilmiş yapay çiçek ve bitkiler.",
    Icon: BadgeCheck,
  },
  {
    label: "Dayanıklı Seçenekler",
    description: "Güneş ışığına dayanıklı ürün alternatifleriyle uzun ömürlü dekorasyon.",
    Icon: Sun,
  },
  {
    label: "Organizasyon Çözümleri",
    description: "Etkinlik ve davet dekorasyonlarını tamamlayan çiçek ve ekipmanlar.",
    Icon: PartyPopper,
  },
] as const;

export function WholesaleBenefitsSection() {
  return (
    <section
      aria-labelledby="wholesale-benefits-heading"
      className="border-t border-[#e8dfd0] bg-[rgba(251,247,238,0.6)]"
    >
      <div className="mx-auto max-w-7xl px-6 py-16">
        <h2
          id="wholesale-benefits-heading"
          className="mb-9 text-center text-3xl font-extrabold text-[#241f18]"
        >
          Toptan Alışverişte Flora Avantajı
        </h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {wholesaleBenefits.map(({ label, description, Icon }) => (
            <article
              key={label}
              className="rounded-xl border border-[#e8dfd0] bg-white p-6 text-center"
            >
              <span className="mx-auto flex size-12 items-center justify-center rounded-full bg-[#f3e5c8] text-[#a8782a]">
                <Icon aria-hidden="true" className="size-6" strokeWidth={1.8} />
              </span>
              <h3 className="mt-4 text-base font-bold text-[#241f18]">{label}</h3>
              <p className="mt-2 text-sm leading-5 text-[#6e665a]">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
