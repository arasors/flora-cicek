import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, MessageCircle, Phone } from "lucide-react";

import { PHONE_DISPLAY, PHONE_HREF, services, WHATSAPP_HREF } from "./data";
import { ContactDetailsSection } from "./ContactDetailsSection";
import type { InnerPageContent } from "./innerPageData";
import { ScrollReveal } from "./ScrollReveal";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";
import { WhatsAppFab } from "./WhatsAppFab";

type InnerPageTemplateProps = {
  page: InnerPageContent;
};

export function InnerPageTemplate({ page }: InnerPageTemplateProps) {
  const isContactPage = page.path === "iletisim";
  const relatedServices = services
    .filter((service) => !page.path.endsWith(service.slug))
    .slice(0, page.path === "urunler" ? 6 : 3);

  return (
    <div className="flora-site">
      <SiteHeader />
      <main>
        <section className="relative isolate overflow-hidden bg-[#f5eee1]">
          <div aria-hidden="true" className="flora-hero-grid absolute inset-0 opacity-25" />
          <div aria-hidden="true" className="flora-ambient flora-ambient-one" />
          <div className={`relative mx-auto grid max-w-[1480px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:px-10 ${isContactPage ? "min-h-[620px] py-12 lg:min-h-[660px] lg:py-14" : "min-h-[calc(100svh-82px)] py-16 lg:py-20"}`}>
            <div className="relative z-10">
              <nav aria-label="Sayfa yolu" className="mb-10 flex items-center gap-2 text-[10px] font-bold tracking-[0.17em] text-[#7a5317] uppercase">
                <Link href="/" className="transition-colors hover:text-[#21180d]">
                  Ana sayfa
                </Link>
                <span aria-hidden="true" className="text-[#a8782a]/40">/</span>
                {page.path.startsWith("urunler/") ? (
                  <>
                    <Link href="/urunler" className="transition-colors hover:text-[#21180d]">
                      Koleksiyon
                    </Link>
                    <span aria-hidden="true" className="text-[#a8782a]/40">/</span>
                  </>
                ) : null}
                <span className="max-w-44 truncate text-[#21180d]/50">{page.title}</span>
              </nav>

              <p className="text-xs font-bold tracking-[0.2em] text-[#a8782a] uppercase">
                {page.eyebrow}
              </p>
              <h1 className={`mt-5 max-w-4xl leading-[0.89] font-medium tracking-[-0.07em] text-[#21180d] ${isContactPage ? "text-[clamp(3.25rem,6vw,6.25rem)]" : "text-[clamp(3.25rem,7vw,7.5rem)]"}`}>
                {page.title}
              </h1>
              <p className="mt-8 max-w-2xl text-base leading-7 text-[#5f574d] sm:text-lg sm:leading-8">
                {page.summary}
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href={WHATSAPP_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex min-h-13 items-center gap-3 rounded-full bg-[#21180d] px-6 text-sm font-semibold text-white transition-[transform,background-color] duration-300 hover:-translate-y-0.5 hover:bg-[#a8782a]"
                >
                  <MessageCircle aria-hidden="true" className="size-4" />
                  Ürün bilgisi alın
                  <ArrowRight aria-hidden="true" className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
                <a
                  href={PHONE_HREF}
                  className="inline-flex min-h-13 items-center gap-2 rounded-full border border-[#21180d]/15 bg-white/40 px-6 text-sm font-semibold text-[#21180d] backdrop-blur-md transition-colors duration-300 hover:bg-white"
                >
                  <Phone aria-hidden="true" className="size-4" />
                  {PHONE_DISPLAY}
                </a>
              </div>
            </div>

            <div className={`relative ${isContactPage ? "min-h-[430px] sm:min-h-[500px] lg:min-h-[540px]" : "min-h-[520px] sm:min-h-[650px] lg:min-h-[min(760px,75vh)]"}`}>
              <div className="absolute top-[5%] right-[2%] h-[80%] w-[76%] overflow-hidden bg-[#d9c8a8] shadow-[0_40px_100px_rgba(33,24,13,0.2)] [clip-path:polygon(12%_0,100%_6%,88%_100%,0_94%)]">
                <Image
                  src={page.image}
                  alt={page.imageAlt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 74vw, 42vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#21180d]/25 via-transparent to-white/10" />
              </div>
              <div className="absolute bottom-[2%] left-[4%] z-10 flex size-32 rotate-[-7deg] flex-col items-center justify-center rounded-full border border-[#a8782a]/20 bg-[#fdfbf7] text-center shadow-[0_20px_50px_rgba(33,24,13,0.15)] sm:size-40">
                <span className="text-[9px] font-bold tracking-[0.19em] text-[#a8782a] uppercase">Flora</span>
                <span className="mt-2 max-w-24 text-lg leading-tight font-medium tracking-[-0.04em] text-[#21180d] sm:text-xl">
                  Toptan Ürünler
                </span>
              </div>
            </div>
          </div>
        </section>

        {isContactPage ? (
          <ScrollReveal>
            <ContactDetailsSection />
          </ScrollReveal>
        ) : (
          <ScrollReveal>
            <section className="mx-auto grid max-w-[1380px] gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:py-32">
              <div>
                <span className="text-xs font-bold tracking-[0.2em] text-[#a8782a] uppercase">
                  01 — Genel bakış
                </span>
                <h2 className="mt-5 max-w-md text-4xl leading-[1] font-semibold tracking-[-0.055em] text-[#241f18] sm:text-5xl">
                  {page.introTitle}
                </h2>
              </div>
              <div>
                <p className="text-2xl leading-[1.35] font-medium tracking-[-0.035em] text-[#342d24] sm:text-3xl lg:text-4xl">
                  {page.intro}
                </p>
                <ul className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-[#21180d]/10 bg-[#21180d]/10 sm:grid-cols-3">
                  {page.highlights.map((highlight, index) => (
                    <li key={highlight} className="flex min-h-44 flex-col justify-between bg-[#f8f3e9] p-6 sm:min-h-48 sm:p-7">
                      <span className="flex items-start justify-between">
                        <span className="flex size-10 items-center justify-center rounded-full bg-[#21180d] text-[#dfc38d]">
                          <Check aria-hidden="true" className="size-4" strokeWidth={2} />
                        </span>
                        <span className="text-[10px] font-bold tracking-[0.15em] text-[#a8782a]/60">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </span>
                      <span className="mt-10 max-w-[15rem] text-lg leading-[1.25] font-semibold tracking-[-0.025em] text-[#241f18] sm:text-xl">
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </ScrollReveal>
        )}

        <ScrollReveal direction="scale">
          <section className="bg-[#21180d] px-5 py-24 text-white sm:px-8 lg:py-32">
            <div className="mx-auto max-w-[1380px]">
              <span className="text-xs font-bold tracking-[0.2em] text-[#dfc38d] uppercase">
                02 — Detaylar
              </span>
              <div className="mt-10 grid gap-px overflow-hidden rounded-[1.75rem] border border-white/12 bg-white/12 lg:grid-cols-2">
                {page.sections.map((section, index) => (
                  <article key={section.title} className="min-h-80 bg-[#21180d] p-7 sm:p-10 lg:p-12">
                    <span className="text-xs font-semibold tracking-[0.15em] text-[#dfc38d]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h2 className="mt-14 max-w-lg text-3xl leading-tight font-medium tracking-[-0.04em] sm:text-4xl">
                      {section.title}
                    </h2>
                    <p className="mt-5 max-w-xl text-sm leading-7 text-white/60 sm:text-base">
                      {section.body}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section className="mx-auto max-w-[1380px] px-5 py-24 sm:px-8 lg:py-32">
            <header className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
              <div>
                <span className="text-xs font-bold tracking-[0.2em] text-[#a8782a] uppercase">
                  03 — Koleksiyondan devam
                </span>
                <h2 className="mt-4 text-4xl font-semibold tracking-[-0.055em] text-[#241f18] sm:text-5xl">
                  Diğer ürün grupları
                </h2>
              </div>
              <Link href="/urunler" className="group flex items-center gap-2 text-sm font-semibold text-[#7a5317]">
                Tüm koleksiyon
                <ArrowUpRight aria-hidden="true" className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </header>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {relatedServices.map((service, index) => (
                <Link key={service.slug} href={service.href} className="group">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[1.25rem] bg-[#e8dfd0]">
                    <Image
                      src={service.image}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.055]"
                    />
                    <span className="absolute top-5 right-5 z-10 flex size-10 items-center justify-center rounded-full bg-white/85 text-[#21180d] backdrop-blur-md transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                      <ArrowUpRight aria-hidden="true" className="size-4" />
                    </span>
                  </div>
                  <div className="flex items-start gap-4 px-2 pt-5">
                    <span className="text-[10px] font-semibold tracking-[0.14em] text-[#a8782a]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-lg font-semibold tracking-[-0.03em] text-[#241f18]">{service.label}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal direction="scale">
          <section className="px-4 py-8 sm:px-7 lg:py-16">
            <div className="relative mx-auto max-w-[1380px] overflow-hidden rounded-[2rem] bg-[#b3802e] px-6 py-16 text-white sm:px-12 lg:px-20 lg:py-24">
              <div aria-hidden="true" className="flora-cta-orbit absolute -top-40 -right-28 size-[32rem] rounded-full border border-white/15" />
              <div className="relative grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
                <h2 className="max-w-4xl text-4xl leading-[0.98] font-medium tracking-[-0.055em] sm:text-6xl">
                  Aradığınız ürünleri birlikte belirleyelim.
                </h2>
                <div>
                  <p className="text-sm leading-6 text-white/75">
                    Güncel ürün, stok ve toptan fiyat bilgisi için Flora Çiçek ekibine ulaşın.
                  </p>
                  <a
                    href={WHATSAPP_HREF}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex min-h-13 items-center gap-3 rounded-full bg-[#21180d] px-6 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5"
                  >
                    WhatsApp ile yazın
                    <ArrowRight aria-hidden="true" className="size-4" />
                  </a>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>
      </main>
      <SiteFooter />
      <WhatsAppFab />
    </div>
  );
}
