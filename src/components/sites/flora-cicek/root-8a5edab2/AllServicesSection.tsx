import Image from "next/image";
import Link from "next/link";

import { services } from "./data";
import { FloraStamp } from "./FloraStamp";

export function AllServicesSection() {
  return (
    <section id="toptan-satis" className="scroll-mt-20 border-t border-[#e8dfd0] bg-[rgba(251,247,238,0.6)]">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="mb-8 text-center text-3xl font-extrabold text-[#241f18]">
          Tüm Ürün Gruplarımız
        </h2>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.label}
              href={service.href}
              className="group flex items-center gap-4 rounded-lg border border-[#e8dfd0] bg-white p-3 transition-[border-color,box-shadow] duration-180 ease-out hover:border-[#c99b47] hover:shadow-[0_1px_2px_rgba(0,0,0,0.05)]"
            >
              <span className="relative h-16 w-20 shrink-0 overflow-hidden rounded-md">
                <Image
                  src={service.image}
                  alt=""
                  fill
                  sizes="80px"
                  className="object-cover"
                />
                <FloraStamp />
              </span>

              <span className="text-base leading-6 font-medium text-[#241f18] transition-colors duration-180 ease-out group-hover:text-[#7a5317]">
                {service.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
