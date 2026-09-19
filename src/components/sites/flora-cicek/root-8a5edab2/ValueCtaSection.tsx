import Link from "next/link";

export function ValueCtaSection() {
  return (
    <section className="border-y border-[#e8dfd0] bg-[rgba(251,247,238,0.7)]">
      <div className="mx-auto max-w-4xl px-6 py-16 text-center">
        <h2 className="text-3xl font-extrabold text-[#241f18]">
          İşletmeniz İçin Güçlü Ürün Çeşitliliği
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-base leading-6 text-[#6e665a]">
          Yapay çiçeklerden saksılı bitkilere, yapay ağaçlardan organizasyon
          malzemelerine kadar farklı ihtiyaçları tek noktadan karşılayın.
        </p>

        <p className="mx-auto mt-4 max-w-2xl text-base leading-6 text-[#6e665a]">
          Birinci kalite, güneş ışığına dayanıklı ve dekoratif seçeneklerimizle
          mağazalara, organizasyon firmalarına ve profesyonel alıcılara toptan satış
          desteği sunuyoruz.
        </p>

        <Link
          href="#iletisim"
          className="mt-8 inline-flex h-[52px] items-center justify-center rounded-lg bg-[#a8782a] px-7 py-3.5 text-base font-semibold text-white transition-colors duration-180 ease-out hover:bg-[#7a5317]"
        >
          Toptan Satış İçin Ulaşın
        </Link>
      </div>
    </section>
  );
}
