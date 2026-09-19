"use client";

import Image from "next/image";
import { ArrowDownRight, ArrowRight, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

import { BRANDED_ASSET_ROOT, PHONE_DISPLAY, PHONE_HREF } from "./data";

const heroSlides = [
  {
    eyebrow: "İstanbul’dan profesyonellere",
    title: "Toptan çiçekte aradığınız çeşitlilik.",
    description:
      "Yapay çiçek, bitki ve aranjman koleksiyonlarımızla mağazanız veya projeniz için doğru ürünleri kolayca bulun.",
    image: `${BRANDED_ASSET_ROOT}/hero.png`,
    alt: "Flora Çiçek yapay çiçek ve bitki koleksiyonu",
  },
  {
    eyebrow: "Organizasyon koleksiyonu",
    title: "Her etkinliğe yakışan çiçekler.",
    description:
      "Düğün, davet, vitrin ve özel projeler için birbiriyle uyumlu çiçek ve dekorasyon ürünleri.",
    image: `${BRANDED_ASSET_ROOT}/catalog/tavan-yapay-cicek.jpg`,
    alt: "Organizasyon için yapay çiçek uygulaması",
  },
  {
    eyebrow: "İç ve dış mekân ürünleri",
    title: "Güneşe dayanıklı, her mevsim yeşil.",
    description:
      "İç ve dış mekânlar için uzun ömürlü, doğal görünümlü yapay bitki ve dikey bahçe çözümleri.",
    image: `${BRANDED_ASSET_ROOT}/catalog/dikey-bahce-buyuk.jpg`,
    alt: "Flora Çiçek dikey bahçe uygulaması",
  },
  {
    eyebrow: "Flora Çiçek koleksiyonları",
    title: "Mağazanız için her sezon yeni seçenekler.",
    description:
      "Geniş ürün yelpazemiz ve toptan satış desteğimizle mağazanızın ürün çeşitliliğini her sezon yenileyin.",
    image: `${BRANDED_ASSET_ROOT}/catalog/dev-agac.jpg`,
    alt: "Büyük yapay ağaç ve bitki koleksiyonu",
  },
] as const;

const supportImages = [
  `${BRANDED_ASSET_ROOT}/catalog/agn-yapay-cicek-0001.jpeg`,
  `${BRANDED_ASSET_ROOT}/catalog/agn2023-3.jpg`,
] as const;

export function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const slide = heroSlides[activeSlide];

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 5600);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate min-h-[calc(100svh-73px)] overflow-hidden bg-[#f7f0e4]"
    >
      <div aria-hidden="true" className="flora-hero-grid absolute inset-0" />
      <div aria-hidden="true" className="flora-ambient flora-ambient-one" />
      <div aria-hidden="true" className="flora-ambient flora-ambient-two" />
      <div aria-hidden="true" className="flora-ambient flora-ambient-three" />

      <div className="relative mx-auto grid min-h-[calc(100svh-73px)] max-w-[1440px] grid-cols-1 items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-6 lg:px-10 lg:py-10 xl:px-14">
        <div className="relative z-20 max-w-3xl lg:py-10">
          <div className="mb-7 flex items-center gap-3">
            <span className="flex size-9 items-center justify-center rounded-full border border-[#a8782a]/25 bg-white/60 text-[#a8782a] backdrop-blur-md">
              <Sparkles aria-hidden="true" className="size-4" />
            </span>
            <span className="text-[11px] font-semibold tracking-[0.22em] text-[#7a5317] uppercase sm:text-xs">
              Toptan • Kaliteli • Çeşitli
            </span>
          </div>

          <div
            key={`copy-${activeSlide}`}
            className="flora-hero-copy"
            aria-live="polite"
          >
            <p className="mb-4 text-xs font-bold tracking-[0.19em] text-[#a8782a] uppercase sm:text-sm">
              {slide.eyebrow}
            </p>
            <h1
              id="hero-heading"
              className="max-w-[850px] text-[clamp(3rem,7.2vw,7.25rem)] leading-[0.88] font-semibold tracking-[-0.075em] text-[#21180d]"
            >
              {slide.title}
            </h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-[#5f574d] sm:text-lg sm:leading-8">
              {slide.description}
            </p>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#iletisim"
              className="group inline-flex min-h-13 items-center justify-center gap-3 rounded-full bg-[#21180d] px-6 text-sm font-semibold text-white shadow-[0_16px_35px_rgba(33,24,13,0.18)] transition-[transform,background-color] duration-300 hover:-translate-y-0.5 hover:bg-[#a8782a] sm:px-7 sm:text-base"
            >
              Toptan teklif alın
              <ArrowRight
                aria-hidden="true"
                className="size-[18px] transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
            <a
              href={PHONE_HREF}
              className="inline-flex min-h-13 items-center justify-center rounded-full border border-[#21180d]/15 bg-white/45 px-6 text-sm font-semibold text-[#21180d] backdrop-blur-md transition-[transform,border-color,background-color] duration-300 hover:-translate-y-0.5 hover:border-[#a8782a]/50 hover:bg-white/80 sm:text-base"
            >
              {PHONE_DISPLAY}
            </a>
          </div>

          <div className="mt-11 flex items-center gap-4" aria-label="Hero slaytları">
            <span className="text-xs font-bold tracking-[0.14em] text-[#21180d]">
              {String(activeSlide + 1).padStart(2, "0")}
            </span>
            <div className="flex gap-2">
              {heroSlides.map((item, index) => (
                <button
                  key={item.title}
                  type="button"
                  aria-label={`${index + 1}. slayta geç`}
                  aria-current={activeSlide === index ? "true" : undefined}
                  onClick={() => setActiveSlide(index)}
                  className="relative h-8 w-10 overflow-hidden rounded-full"
                >
                  <span className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 bg-[#21180d]/20" />
                  {activeSlide === index ? (
                    <span className="flora-hero-progress absolute top-1/2 left-0 h-[2px] -translate-y-1/2 bg-[#a8782a]" />
                  ) : null}
                </button>
              ))}
            </div>
            <span className="text-xs font-medium tracking-[0.14em] text-[#21180d]/45">
              {String(heroSlides.length).padStart(2, "0")}
            </span>
          </div>
        </div>

        <div className="relative z-10 min-h-[520px] sm:min-h-[650px] lg:min-h-[min(760px,79vh)]">
          <div className="flora-hero-panel flora-hero-panel-back absolute top-[4%] right-[2%] h-[72%] w-[43%] overflow-hidden bg-[#21180d] shadow-[0_35px_80px_rgba(33,24,13,0.19)]">
            <Image
              src={supportImages[1]}
              alt=""
              fill
              priority
              sizes="(max-width: 1024px) 42vw, 22vw"
              className="object-cover opacity-70 mix-blend-luminosity"
            />
          </div>

          <div
            key={`image-${activeSlide}`}
            className="flora-hero-panel flora-hero-panel-main flora-hero-image absolute top-[9%] left-[9%] h-[77%] w-[70%] overflow-hidden bg-[#d8c49b] shadow-[0_40px_90px_rgba(33,24,13,0.22)]"
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              priority={activeSlide === 0}
              sizes="(max-width: 1024px) 68vw, 38vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#21180d]/20 via-transparent to-white/10" />
          </div>

          <div className="flora-hero-panel flora-hero-panel-front absolute bottom-[1%] left-0 h-[41%] w-[39%] overflow-hidden bg-[#f3e5c8] shadow-[0_25px_60px_rgba(33,24,13,0.22)]">
            <Image
              src={supportImages[0]}
              alt=""
              fill
              sizes="(max-width: 1024px) 38vw, 20vw"
              className="object-cover"
            />
          </div>

          <div className="absolute right-[1%] bottom-[7%] z-20 flex size-28 rotate-6 flex-col items-center justify-center rounded-full border border-white/60 bg-[#21180d] text-center text-white shadow-2xl sm:size-32">
            <span className="text-[10px] font-semibold tracking-[0.17em] uppercase">Flora</span>
            <span className="mt-1 text-xl font-semibold italic">Koleksiyonu</span>
            <ArrowDownRight aria-hidden="true" className="mt-1 size-4 text-[#dfc38d]" />
          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute right-0 bottom-0 left-0 h-px bg-gradient-to-r from-transparent via-[#a8782a]/30 to-transparent"
      />
    </section>
  );
}
