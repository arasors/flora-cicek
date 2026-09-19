export function StorySection() {
  return (
    <section>
      <div className="mx-auto max-w-3xl px-6 pb-14 text-center">
        <h2 className="text-2xl leading-8 font-bold text-[#241f18]">
          Neden Flora Çiçek?
        </h2>
        <p className="mt-4 text-base leading-[26px] text-[#6e665a]">
          Flora Çiçek, İstanbul&apos;un Bağcılar ilçesindeki merkezinden toptan yapay
          çiçek, yapay bitki, yapay aranjman ve organizasyon ürünleri sunar. Geniş
          ürün seçkimiz; mağaza stoklarından düğün ve etkinlik dekorasyonlarına,
          vitrin düzenlemelerinden ticari mekânlara kadar farklı ihtiyaçlara cevap
          verir. Birinci kalite ve güneş ışığına dayanıklı seçenekler için ürün ve
          fiyat bilgisi almak üzere ekibimizle iletişime geçebilirsiniz.
        </p>
        <nav
          aria-label="Kurumsal bağlantılar"
          className="mt-5 flex flex-wrap items-center justify-center gap-6"
        >
          <a
            href="#urunler"
            className="text-sm leading-5 font-semibold text-[#7a5317] transition-colors duration-[180ms] ease-out hover:text-[#a8782a]"
          >
            Ürün gruplarını inceleyin →
          </a>
          <a
            href="#iletisim"
            className="text-sm leading-5 font-semibold text-[#7a5317] transition-colors duration-[180ms] ease-out hover:text-[#a8782a]"
          >
            Toptan satış için ulaşın →
          </a>
        </nav>
      </div>
    </section>
  );
}
