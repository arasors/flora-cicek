import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { services } from "./data";

export function AllServicesSection() {
  return (
    <section
      id="toptan-satis"
      className="scroll-mt-24 bg-[#efe7da] px-5 py-24 sm:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-[1380px]">
        <header className="mb-12 flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
          <div>
            <span className="text-xs font-bold tracking-[0.2em] text-[#a8782a] uppercase">
              03 — Ürün grupları
            </span>
            <h2 className="mt-4 max-w-3xl text-4xl leading-[0.98] font-semibold tracking-[-0.055em] text-[#241f18] sm:text-6xl">
              Birbirini tamamlayan ürün grupları.
            </h2>
          </div>
          <p className="max-w-lg text-base leading-7 text-[#6e665a]">
            Projenize, mağazanıza ve sezonunuza uyum sağlayan profesyonel toptan
            ürün gruplarını keşfedin.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-[1.75rem] border border-[#21180d]/10 bg-[#21180d]/10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Link
              key={service.label}
              href={service.href}
              className="group relative flex min-h-40 items-end overflow-hidden bg-[#f8f3e9] p-6 transition-colors duration-500 hover:bg-[#21180d] sm:min-h-48"
            >
              <span className="absolute top-0 right-0 h-full w-[42%] overflow-hidden opacity-80 transition-[width,opacity] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] [clip-path:polygon(28%_0,100%_0,100%_100%,0_100%)] group-hover:w-[52%] group-hover:opacity-100">
                <Image
                  src={service.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 15vw, (min-width: 640px) 25vw, 42vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </span>
              <span className="relative z-10 max-w-[62%]">
                <span className="mb-7 block text-[10px] font-bold tracking-[0.16em] text-[#a8782a] uppercase group-hover:text-[#dfc38d]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="block text-lg leading-tight font-semibold tracking-[-0.025em] text-[#241f18] transition-colors duration-500 group-hover:text-white sm:text-xl">
                  {service.label}
                </span>
              </span>
              <ArrowUpRight
                aria-hidden="true"
                className="absolute top-5 left-5 size-5 -translate-y-2 opacity-0 text-[#dfc38d] transition duration-500 group-hover:translate-y-0 group-hover:opacity-100"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
