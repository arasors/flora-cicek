"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useCallback, useEffect, useRef } from "react";

import { inspirationImages } from "./data";

export function InspirationCarouselSection() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scroll = useCallback((direction: -1 | 1) => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const { clientWidth, scrollLeft, scrollWidth } = scroller;
    let target = scrollLeft + clientWidth * 0.72 * direction;

    if (direction === 1 && scrollLeft + clientWidth >= scrollWidth - 4) target = 0;
    if (direction === -1 && scrollLeft <= 4) target = scrollWidth;
    scroller.scrollTo({ left: target, behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const autoplay = window.setInterval(() => scroll(1), 4200);
    return () => window.clearInterval(autoplay);
  }, [scroll]);

  return (
    <section className="overflow-hidden bg-[#21180d] py-24 text-white lg:py-32">
      <div className="mx-auto max-w-[1380px] px-5 sm:px-8">
        <header className="mb-12 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <span className="text-xs font-bold tracking-[0.2em] text-[#dfc38d] uppercase">
              05 — Uygulamalardan ilham
            </span>
            <h2 className="mt-4 max-w-4xl text-4xl leading-[0.96] font-medium tracking-[-0.055em] sm:text-6xl lg:text-7xl">
              Ürünlerimizi farklı uygulamalarda görün.
            </h2>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              aria-label="Önceki"
              onClick={() => scroll(-1)}
              className="flex size-12 items-center justify-center rounded-full border border-white/20 text-white transition-colors duration-300 hover:bg-white hover:text-[#21180d]"
            >
              <ArrowLeft aria-hidden="true" className="size-5" />
            </button>
            <button
              type="button"
              aria-label="Sonraki"
              onClick={() => scroll(1)}
              className="flex size-12 items-center justify-center rounded-full border border-white/20 text-white transition-colors duration-300 hover:bg-white hover:text-[#21180d]"
            >
              <ArrowRight aria-hidden="true" className="size-5" />
            </button>
          </div>
        </header>

        <div
          ref={scrollerRef}
          className="-mx-5 flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth px-5 pb-3 sm:-mx-8 sm:px-8 lg:gap-5 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {inspirationImages.map((image, index) => (
            <figure
              key={image}
              className={`group relative aspect-[3/4] w-[78%] shrink-0 snap-center overflow-hidden bg-[#6b5d4d] sm:w-[44%] lg:w-[29%] ${index % 2 === 0 ? "[clip-path:polygon(7%_0,100%_0,93%_100%,0_100%)]" : "[clip-path:polygon(0_0,93%_0,100%_100%,7%_100%)]"}`}
            >
              <Image
                src={image}
                alt={`Flora Çiçek koleksiyon görünümü ${index + 1}`}
                fill
                sizes="(min-width: 1024px) 29vw, (min-width: 640px) 44vw, 78vw"
                className="object-cover transition duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#21180d]/55 via-transparent to-transparent" />
              <figcaption className="absolute right-7 bottom-7 z-20 text-xs font-semibold tracking-[0.15em] text-white">
                FLORA / {String(index + 1).padStart(2, "0")}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
