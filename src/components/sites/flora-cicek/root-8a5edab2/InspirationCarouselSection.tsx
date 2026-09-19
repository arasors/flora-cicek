"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef } from "react";

import { inspirationImages } from "./data";
import { FloraStamp } from "./FloraStamp";

export function InspirationCarouselSection() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scroll = useCallback((direction: -1 | 1) => {
    const scroller = scrollerRef.current;

    if (!scroller) {
      return;
    }

    const { clientWidth, scrollLeft, scrollWidth } = scroller;
    let target = scrollLeft + clientWidth * 0.8 * direction;

    if (direction === 1 && scrollLeft + clientWidth >= scrollWidth - 4) {
      target = 0;
    }

    if (direction === -1 && scrollLeft <= 4) {
      target = scrollWidth;
    }

    scroller.scrollTo({ left: target, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const autoplay = window.setInterval(() => scroll(1), 3500);
    return () => window.clearInterval(autoplay);
  }, [scroll]);

  return (
    <section className="border-t border-[#e8dfd0] bg-[#fbf7ee99]">
      <div className="mx-auto max-w-[1280px] px-6 py-16">
        <h2 className="mb-9 text-center text-3xl font-extrabold text-[#241f18]">
          Koleksiyonumuzdan İlham Alın
        </h2>

        <div className="relative">
          <div
            ref={scrollerRef}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {inspirationImages.map((image, index) => (
              <div
                key={image}
                className="relative aspect-square w-[78%] shrink-0 snap-center overflow-hidden rounded-xl border border-[#e8dfd0] sm:w-[45%] lg:w-[31%]"
              >
                <Image
                  src={image}
                  alt={`Flora Çiçek ürün örneği ${index + 1}`}
                  fill
                  sizes="(min-width: 1024px) 31vw, (min-width: 640px) 45vw, 78vw"
                  className="object-cover"
                />
                <FloraStamp />
              </div>
            ))}
          </div>

          <button
            type="button"
            aria-label="Önceki"
            onClick={() => scroll(-1)}
            className="absolute top-1/2 left-2 hidden size-[38px] -translate-y-1/2 items-center justify-center rounded-full border border-[#e8dfd0] bg-white/90 text-[#241f18] shadow-sm transition-colors duration-[180ms] hover:bg-white sm:flex"
          >
            <ChevronLeft aria-hidden="true" className="size-5" />
          </button>
          <button
            type="button"
            aria-label="Sonraki"
            onClick={() => scroll(1)}
            className="absolute top-1/2 right-2 hidden size-[38px] -translate-y-1/2 items-center justify-center rounded-full border border-[#e8dfd0] bg-white/90 text-[#241f18] shadow-sm transition-colors duration-[180ms] hover:bg-white sm:flex"
          >
            <ChevronRight aria-hidden="true" className="size-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
