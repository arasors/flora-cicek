import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { featureServices } from "./data";
import { FloraStamp } from "./FloraStamp";

export function ServicesHighlightSection() {
  return (
    <section id="urunler" className="mx-auto max-w-7xl scroll-mt-20 px-6 py-16">
        <header className="mb-9 text-center">
          <h2 className="text-3xl font-extrabold text-[#241f18]">
            Öne Çıkan Ürün Grupları
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-base leading-6 text-[#6e665a]">
            Mağazalar, organizasyon firmaları ve profesyonel dekorasyon ihtiyaçları
            için toptan yapay çiçek, bitki ve tamamlayıcı ürünler.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {featureServices.map((service, index) => (
            <article
              key={service.href}
              className="overflow-hidden rounded-xl border border-[#e8dfd0] bg-white"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.label}
                  fill
                  priority={index === 0}
                  sizes="(min-width: 768px) calc((min(100vw, 1280px) - 96px) / 3), calc(100vw - 48px)"
                  className="object-cover"
                />
                <FloraStamp />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-[#241f18]">
                  {service.label}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#6e665a]">
                  {service.description}
                </p>
                <a
                  href={service.href}
                  className="group mt-4 inline-flex items-center gap-1 font-semibold text-[#a8782a] transition-colors duration-[180ms] ease-out hover:text-[#7a5317]"
                >
                  Toptan Satış İçin Ulaşın
                  <ArrowRight
                    aria-hidden="true"
                    className="size-4 transition-transform duration-[180ms] ease-out group-hover:translate-x-1"
                    strokeWidth={1.75}
                  />
                </a>
              </div>
            </article>
          ))}
        </div>
    </section>
  );
}
