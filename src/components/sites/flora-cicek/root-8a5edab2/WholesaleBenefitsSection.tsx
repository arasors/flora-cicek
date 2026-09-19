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
    description: "Güneş ışığına dayanıklı alternatiflerle uzun ömürlü dekorasyon.",
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
    <section aria-labelledby="wholesale-benefits-heading" className="px-5 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto max-w-[1380px]">
        <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr]">
          <header>
            <span className="text-xs font-bold tracking-[0.2em] text-[#a8782a] uppercase">
              04 — Flora avantajı
            </span>
            <h2
              id="wholesale-benefits-heading"
              className="mt-4 text-4xl leading-[1] font-semibold tracking-[-0.055em] text-[#241f18] sm:text-5xl"
            >
              Güzel görünür. Güçlü çalışır.
            </h2>
            <p className="mt-6 max-w-md text-base leading-7 text-[#6e665a]">
              Yalnızca ürün değil; profesyonel tedarik sürecinizi kolaylaştıran
              seçki, çeşitlilik ve çözüm ortaklığı sunuyoruz.
            </p>
          </header>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {wholesaleBenefits.map(({ label, description, Icon }, index) => (
              <article
                key={label}
                className={`group relative min-h-64 overflow-hidden rounded-[1.5rem] border border-[#a8782a]/15 p-7 transition-[transform,background-color,border-color] duration-500 hover:-translate-y-1 hover:border-[#a8782a]/30 hover:bg-[#f7f0e4] ${index === 1 || index === 3 ? "sm:translate-y-8 sm:hover:translate-y-7" : ""}`}
              >
                <span className="flex size-12 items-center justify-center rounded-full bg-[#21180d] text-[#dfc38d] transition-transform duration-500 group-hover:rotate-6 group-hover:scale-105">
                  <Icon aria-hidden="true" className="size-5" strokeWidth={1.7} />
                </span>
                <span className="absolute top-7 right-7 text-xs font-semibold tracking-[0.14em] text-[#a8782a]/55">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-10 text-xl font-semibold tracking-[-0.03em] text-[#241f18]">
                  {label}
                </h3>
                <p className="mt-3 max-w-xs text-sm leading-6 text-[#6e665a]">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
