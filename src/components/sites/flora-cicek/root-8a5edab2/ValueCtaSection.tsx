import Link from "next/link";

export function ValueCtaSection() {
  return (
    <section className="px-4 py-10 sm:px-7 lg:py-16">
      <div className="relative mx-auto max-w-[1380px] overflow-hidden rounded-[2rem] bg-[#21180d] px-6 py-16 text-[#fbf7ee] sm:px-12 lg:px-20 lg:py-24">
        <div
          aria-hidden="true"
          className="absolute -top-24 -right-12 size-80 rounded-full border border-[#dfc38d]/15"
        />
        <div
          aria-hidden="true"
          className="absolute -top-5 right-20 size-48 rounded-full border border-[#dfc38d]/10"
        />
        <div className="relative grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <span className="text-xs font-bold tracking-[0.2em] text-[#dfc38d] uppercase">
              Tek noktada profesyonel tedarik
            </span>
            <h2 className="mt-5 max-w-4xl text-4xl leading-[1.02] font-medium tracking-[-0.055em] sm:text-6xl lg:text-7xl">
              İşletmenizin farklı ihtiyaçları için tek adres.
            </h2>
          </div>
          <div>
            <p className="max-w-xl text-base leading-7 text-[#f3e5c8]/75">
              Yapay çiçeklerden saksılı bitkilere, büyük ağaçlardan organizasyon
              malzemelerine kadar farklı ihtiyaçları tek noktadan karşılayın.
              Dayanıklı ve dekoratif seçeneklerle satış alanınıza değer katın.
            </p>
            <Link
              href="#iletisim"
              className="mt-7 inline-flex min-h-13 items-center justify-center rounded-full bg-[#dfc38d] px-7 text-sm font-bold text-[#21180d] transition-[transform,background-color] duration-300 hover:-translate-y-0.5 hover:bg-white"
            >
              Toptan satış için ulaşın
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
