import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { featureServices } from "./data";

export function ServicesHighlightSection() {
  return (
    <section
      id="urunler"
      className="mx-auto max-w-[1380px] scroll-mt-24 px-5 py-24 sm:px-8 lg:py-32"
    >
      <header className="mb-14 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
        <div>
          <span className="text-xs font-bold tracking-[0.2em] text-[#a8782a] uppercase">
            01 — Öne çıkan ürünler
          </span>
          <h2 className="mt-4 max-w-2xl text-4xl leading-[0.98] font-semibold tracking-[-0.055em] text-[#241f18] sm:text-6xl">
            Projelerinize değer katan ürünler.
          </h2>
        </div>
        <p className="max-w-2xl text-base leading-7 text-[#6e665a] lg:justify-self-end lg:text-lg">
          Mağazalar, organizasyon firmaları ve profesyonel dekorasyon ihtiyaçları
          için birbirini tamamlayan toptan yapay çiçek, bitki ve tamamlayıcı ürün
          koleksiyonları.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-4 lg:gap-7">
        {featureServices.map((service, index) => (
          <article
            key={service.label}
            className={`group ${index === 1 ? "md:translate-y-16" : ""} ${index === 2 ? "md:translate-y-7" : ""}`}
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden [clip-path:polygon(8%_0,100%_0,92%_100%,0_100%)]">
              <Image
                src={service.image}
                alt={service.label}
                fill
                priority={index === 0}
                sizes="(min-width: 768px) calc((min(100vw, 1380px) - 96px) / 3), calc(100vw - 40px)"
                className="object-cover transition duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.055] group-hover:saturate-[1.08]"
              />
              <span className="absolute top-5 right-6 z-20 text-sm font-semibold tracking-[0.16em] text-white drop-shadow-md">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="absolute inset-0 bg-gradient-to-t from-[#21180d]/55 via-transparent to-transparent" />
            </div>

            <div className="px-2 pt-6">
              <h3 className="text-xl font-semibold tracking-[-0.03em] text-[#241f18]">
                {service.label}
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#6e665a]">
                {service.description}
              </p>
              <a
                href={service.href}
                className="mt-5 inline-flex items-center gap-2 border-b border-[#a8782a]/30 pb-1 text-sm font-semibold text-[#7a5317] transition-[gap,border-color] duration-300 hover:gap-3 hover:border-[#a8782a]"
              >
                Toptan satış için ulaşın
                <ArrowRight aria-hidden="true" className="size-4" strokeWidth={1.75} />
              </a>
            </div>
          </article>
        ))}
      </div>
      <div className="h-12 md:h-20" />
    </section>
  );
}
