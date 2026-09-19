import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { productImages } from "./data";

const mosaicClasses = [
  "sm:col-span-2 sm:row-span-2",
  "",
  "",
  "sm:row-span-2",
  "",
  "sm:col-span-2",
] as const;

export function ProjectsGridSection() {
  return (
    <section id="galeri" className="scroll-mt-24 px-5 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto max-w-[1380px]">
        <header className="mb-12 flex items-end justify-between gap-6">
          <div>
            <span className="text-xs font-bold tracking-[0.2em] text-[#a8782a] uppercase">
              06 — Uygulama galerisi
            </span>
            <h2 className="mt-4 max-w-3xl text-4xl leading-[0.98] font-semibold tracking-[-0.055em] text-[#241f18] sm:text-6xl">
              Mekânlara ilham veren uygulamalar.
            </h2>
          </div>
          <Link
            href="#urunler"
            className="group hidden items-center gap-2 border-b border-[#a8782a]/30 pb-1 text-sm font-semibold text-[#7a5317] sm:flex"
          >
            Ürün grupları
            <ArrowUpRight
              aria-hidden="true"
              className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </header>

        <div className="grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[230px] sm:grid-cols-4 lg:auto-rows-[285px]">
          {productImages.map((image, index) => (
            <figure
              key={image}
              className={`group relative overflow-hidden rounded-[1.15rem] bg-[#e8dfd0] ${mosaicClasses[index % mosaicClasses.length]}`}
            >
              <Image
                src={image}
                alt={`Flora Çiçek uygulama galerisi ${index + 1}`}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.055]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#21180d]/45 via-transparent to-transparent opacity-30 transition-opacity duration-500 group-hover:opacity-100" />
              <figcaption className="absolute right-5 bottom-5 z-20 translate-y-2 text-[10px] font-bold tracking-[0.16em] text-white opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                UYGULAMA / {String(index + 1).padStart(2, "0")}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
