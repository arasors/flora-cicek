export function StorySection() {
  return (
    <section className="px-5 py-16 sm:px-8 lg:py-28">
      <div className="mx-auto grid max-w-[1380px] gap-10 lg:grid-cols-[0.42fr_1fr]">
        <div>
          <span className="text-xs font-bold tracking-[0.2em] text-[#a8782a] uppercase">
            02 — Flora yaklaşımı
          </span>
          <h2 className="mt-4 text-2xl leading-8 font-semibold text-[#241f18]">
            Neden Flora Çiçek?
          </h2>
        </div>
        <div>
          <p className="text-2xl leading-[1.32] font-medium tracking-[-0.035em] text-[#342d24] sm:text-4xl lg:text-5xl">
            Flora Çiçek, Bağcılar&apos;daki merkezinden mağazalara, organizasyon
            firmalarına ve profesyonel projelere toptan yapay çiçek ve bitki
            sağlar.{" "}
            <span className="text-[#a8782a]">
              Ürün kalitesi, dayanıklılık ve doğal görünüm bizim için her zaman
              önceliklidir.
            </span>
          </p>
          <nav
            aria-label="Kurumsal bağlantılar"
            className="mt-8 flex flex-wrap items-center gap-7"
          >
            <a
              href="#urunler"
              className="border-b border-[#a8782a]/25 pb-1 text-sm leading-5 font-semibold text-[#7a5317] transition-colors duration-300 hover:text-[#a8782a]"
            >
              Ürün gruplarını inceleyin →
            </a>
            <a
              href="#iletisim"
              className="border-b border-[#a8782a]/25 pb-1 text-sm leading-5 font-semibold text-[#7a5317] transition-colors duration-300 hover:text-[#a8782a]"
            >
              Toptan satış için ulaşın →
            </a>
          </nav>
        </div>
      </div>
    </section>
  );
}
