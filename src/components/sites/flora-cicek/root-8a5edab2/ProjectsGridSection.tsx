import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { productImages } from "./data";
import { FloraStamp } from "./FloraStamp";

export function ProjectsGridSection() {
  return (
    <section id="galeri" className="scroll-mt-20 border-t border-[#e8dfd0]">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-9 flex items-end justify-between">
          <h2 className="text-3xl font-extrabold text-[#241f18]">
            ÜRÜN GALERİSİ
          </h2>

          <Link
            href="#urunler"
            className="hidden items-center gap-1 text-base leading-6 font-semibold text-[#a8782a] transition-colors duration-180 ease-out hover:text-[#7a5317] sm:flex"
          >
            Tüm ürün grupları
            <ArrowRight aria-hidden="true" className="size-[18px]" strokeWidth={2} />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {productImages.map((image, index) => (
            <div
              key={image}
              className="group relative aspect-square overflow-hidden rounded-lg border border-[#e8dfd0]"
            >
              <Image
                src={image}
                alt={`Flora Çiçek ürün galerisi ${index + 1}`}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-105"
              />
              <FloraStamp />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
