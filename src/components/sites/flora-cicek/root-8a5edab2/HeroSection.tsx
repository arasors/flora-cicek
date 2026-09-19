import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { ASSET_ROOT, PHONE_DISPLAY, PHONE_HREF } from "./data";

export function HeroSection() {
  return (
    <section aria-labelledby="hero-heading" className="border-b border-[#e8dfd0]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-14 lg:grid-cols-2 lg:py-20">
        <div>
          <span className="inline-flex h-[30px] items-center rounded-full border border-[#dfc38d] bg-[#fbf7ee] px-3 py-1 text-sm font-medium leading-5 text-[#7a5317]">
            İstanbul Merkezli Toptan Satış
          </span>

          <h1
            id="hero-heading"
            className="mt-5 text-4xl font-extrabold leading-[1.12] text-[#241f18] sm:text-5xl"
          >
            Toptan Yapay Çiçek, Bitki ve Organizasyon Ürünleri
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-7 text-[#6e665a]">
            Birinci kalite yapay çiçek, yapay bitki, aranjman ve organizasyon
            malzemelerini geniş ürün seçenekleriyle işletmenize sunuyoruz.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#iletisim"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#a8782a] px-6 py-3.5 text-base font-semibold leading-6 text-white transition-colors duration-[180ms] ease-in-out hover:bg-[#7a5317]"
            >
              Toptan Teklif Alın
              <ArrowRight aria-hidden="true" className="size-[18px]" />
            </a>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#e8dfd0] px-6 py-3.5 text-base font-semibold leading-6 text-[#241f18] transition-colors duration-[180ms] ease-in-out hover:border-[#c99b47] hover:text-[#7a5317]"
            >
              {PHONE_DISPLAY}
            </a>
          </div>
        </div>

        <div className="relative aspect-[16/11] overflow-hidden rounded-xl border border-[#e8dfd0]">
          <Image
            src={`${ASSET_ROOT}/hero.png`}
            alt="Flora Çiçek yapay çiçek ve bitki ürünleri"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
