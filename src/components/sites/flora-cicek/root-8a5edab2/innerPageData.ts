import { ADDRESS, BRANDED_ASSET_ROOT, PHONE_DISPLAY, services } from "./data";

export type InnerPageSection = {
  title: string;
  body: string;
};

export type InnerPageContent = {
  path: string;
  eyebrow: string;
  title: string;
  summary: string;
  image: string;
  imageAlt: string;
  introTitle: string;
  intro: string;
  highlights: string[];
  sections: InnerPageSection[];
};

const productSummaries: Record<string, string> = {
  "toptan-yapay-cicek":
    "Farklı renk, form ve ölçülerde seçilmiş yapay çiçeklerle mağaza ve proje stoklarınıza güçlü bir çeşitlilik kazandırın.",
  "yapay-bitki":
    "Doğal dokuyu bakım ihtiyacı olmadan mekâna taşıyan, profesyonel kullanıma uygun yapay bitki koleksiyonu.",
  "yapay-agac":
    "Yüksek hacimli alanlara güçlü bir odak noktası kazandıran, farklı boy ve türlerde yapay ağaç seçenekleri.",
  "yapay-aranjman":
    "Vitrin, masa ve karşılama alanları için kullanıma hazır, dengeli renk ve form kompozisyonları.",
  "gunese-dayanikli-urunler":
    "Yoğun ışık alan projeler için görünümünü uzun süre korumaya odaklanan dayanıklı ürün alternatifleri.",
  "organizasyon-cicekleri":
    "Düğün, davet ve özel etkinliklerin atmosferini bütünleyen, birlikte kullanılmak üzere seçilmiş çiçek grupları.",
  "organizasyon-ekipmanlari":
    "Profesyonel uygulamaları hızlandıran ve çiçek kompozisyonlarını tamamlayan organizasyon ekipmanları.",
  "dikey-bahce":
    "Duvarları yaşayan bir yüzeye dönüştüren, farklı ölçekte uygulanabilen yapay dikey bahçe ürünleri.",
  "saksili-yapay-bitkiler":
    "Ofis, mağaza ve konaklama alanlarına doğrudan yerleştirilebilen tamamlanmış saksılı bitki seçenekleri.",
  "yapay-sarmasiklar":
    "Tavan, duvar ve geçiş alanlarında akışkan yeşil dokular kurmak için esnek yapay sarmaşık çeşitleri.",
  "yapay-bonsai":
    "Kompakt alanlarda heykelsi bir etki oluşturan, güçlü gövde ve yaprak detaylarına sahip bonsai seçkisi.",
  "dekoratif-yapay-yesillikler":
    "Kompozisyonlara hacim, ritim ve doğal katmanlar ekleyen tamamlayıcı dekoratif yeşillikler.",
};

const productPages: InnerPageContent[] = services.map((service) => ({
  path: `urunler/${service.slug}`,
  eyebrow: "Flora profesyonel koleksiyon",
  title: service.label,
  summary: productSummaries[service.slug],
  image: service.image,
  imageAlt: `${service.label} koleksiyonu`,
  introTitle: "Projeye uyum sağlayan seçki",
  intro: `${service.label} grubumuzu mağazalar, organizasyon firmaları, mimari projeler ve profesyonel dekorasyon uygulamaları için farklı ölçü, renk ve kullanım senaryolarını dikkate alarak oluşturuyoruz. Güncel ürün ve stok bilgisi için ekibimiz size doğrudan destek verir.`,
  highlights: [
    "Profesyonel ve toptan satış odağı",
    "Birbiriyle uyumlu ürün alternatifleri",
    "Proje ve kullanım alanına göre yönlendirme",
  ],
  sections: [
    {
      title: "Doğru ürünü birlikte seçelim",
      body: "İhtiyaç duyduğunuz adet, kullanım alanı, renk paleti ve hedeflenen görünümü ekibimizle paylaşın. Koleksiyondaki uygun alternatifleri projenizin dili ve bütçesi doğrultusunda birlikte netleştirelim.",
    },
    {
      title: "Toptan sipariş ve bilgi",
      body: "Ürünlerin güncel stok, ölçü ve fiyat bilgileri dönemsel olarak değişebilir. Sipariş planınızı oluşturmak ve mevcut seçenekleri görmek için telefon veya WhatsApp üzerinden Flora Çiçek ekibine ulaşabilirsiniz.",
    },
  ],
}));

const corporatePages: InnerPageContent[] = [
  {
    path: "urunler",
    eyebrow: "Flora ürün evreni",
    title: "Her projeye uyumlanan koleksiyonlar.",
    summary:
      "Yapay çiçekten büyük ağaçlara, dikey bahçeden organizasyon ürünlerine uzanan profesyonel toptan seçki.",
    image: `${BRANDED_ASSET_ROOT}/catalog/botanik-bahce.jpg`,
    imageAlt: "Flora Çiçek ürün koleksiyonları",
    introTitle: "Tek merkezden güçlü çeşitlilik",
    intro:
      "Flora Çiçek koleksiyonları mağaza stokları, etkinlik uygulamaları, vitrinler ve ticari mekânlar için birbirini tamamlayan ürün gruplarından oluşur. İhtiyacınız olan görünümü farklı kategorileri birlikte kullanarak kurabilirsiniz.",
    highlights: ["12 ana ürün grubu", "Toptan satış desteği", "İstanbul merkezli hızlı iletişim"],
    sections: [
      {
        title: "Koleksiyonu nasıl oluşturuyoruz?",
        body: "Renk, doku, ölçek ve kullanım dayanımı koleksiyona ürün seçerken odaklandığımız temel başlıklardır. Bu yaklaşım farklı ürünlerin aynı proje içinde dengeli şekilde kullanılmasını kolaylaştırır.",
      },
      {
        title: "Profesyonellere özel yaklaşım",
        body: "Mağaza, organizasyon ve proje ihtiyaçları birbirinden farklıdır. Adet ve kullanım senaryonuza göre doğru ürün gruplarını belirlemek için ekibimizden doğrudan yönlendirme alabilirsiniz.",
      },
    ],
  },
  {
    path: "hakkimizda",
    eyebrow: "Flora Çiçek / İstanbul",
    title: "Doğal etkinin profesyonel yorumu.",
    summary:
      "Flora Çiçek, yapay çiçek ve bitki ürünlerini güçlü bir seçki anlayışıyla profesyonel alıcılarla buluşturur.",
    image: `${BRANDED_ASSET_ROOT}/hero.png`,
    imageAlt: "Flora Çiçek koleksiyonu",
    introTitle: "Seçki, güven ve sürdürülebilir iş ilişkisi",
    intro:
      "İstanbul Bağcılar’daki merkezimizden mağazalara, organizasyon firmalarına ve proje profesyonellerine hizmet veriyoruz. Amacımız yalnızca ürün sağlamak değil, doğru koleksiyonun doğru kullanım alanıyla buluşmasını kolaylaştırmak.",
    highlights: ["İstanbul merkezli hizmet", "Toptan satış uzmanlığı", "Profesyonel ürün seçkisi"],
    sections: [
      {
        title: "Bakış açımız",
        body: "İyi bir yapay bitkinin yalnızca gerçeğe yakın görünmesi yetmez; mekânın ölçeğiyle, ışığıyla ve kullanım biçimiyle de uyum kurması gerekir. Ürün seçkimizi bu bütünsel bakışla oluşturuyoruz.",
      },
      {
        title: "Kimlerle çalışıyoruz?",
        body: "Perakende mağazaları, organizasyon firmaları, iç mimarlar, uygulama ekipleri ve ticari mekân yöneticileriyle farklı hacimlerde toptan ürün tedariği için çalışıyoruz.",
      },
    ],
  },
  {
    path: "galeri",
    eyebrow: "Flora uygulamaları",
    title: "Üründen atmosfere uzanan fikirler.",
    summary:
      "Farklı mekân ve etkinliklerde yapay çiçek, bitki ve yeşilliklerin oluşturabileceği etkiden ilham alın.",
    image: `${BRANDED_ASSET_ROOT}/projeler/proje-001.jpg`,
    imageAlt: "Flora Çiçek uygulama örneği",
    introTitle: "Her alan kendi kompozisyonunu ister",
    intro:
      "Dikey yüzeylerden tavan uygulamalarına, saksılı bitkilerden büyük ağaçlara kadar her ürün mekânda farklı bir görev üstlenir. Galerimiz koleksiyonların birlikte nasıl çalışabileceğine dair bir başlangıç noktası sunar.",
    highlights: ["Ticari mekân fikirleri", "Etkinlik atmosferleri", "Vitrin ve karşılama alanları"],
    sections: [
      {
        title: "İlhamı projeye dönüştürün",
        body: "Beğendiğiniz görünümü, alan ölçülerini ve hedeflediğiniz atmosferi bizimle paylaşın. Benzer etkiyi oluşturabilecek güncel ürün seçenekleri konusunda ekibimizden bilgi alın.",
      },
      {
        title: "Katmanlı kullanım",
        body: "Daha doğal ve zengin bir görünüm için farklı yaprak boylarını, çiçek formlarını ve yeşil tonlarını birlikte değerlendirin. Tamamlayıcı ürün grupları kompozisyonun derinliğini artırır.",
      },
    ],
  },
  {
    path: "toptan-satis",
    eyebrow: "Profesyonel tedarik",
    title: "Toptan sipariş sürecini sadeleştirin.",
    summary:
      "İşletmenizin ürün ihtiyacını, proje takvimini ve hedeflenen görünümü birlikte değerlendirerek doğru seçkiyi planlayalım.",
    image: `${BRANDED_ASSET_ROOT}/catalog/agn2023-13.jpg`,
    imageAlt: "Flora Çiçek toptan satış ürünleri",
    introTitle: "İhtiyaçtan doğru koleksiyona",
    intro:
      "Toptan siparişlerde ürün grubu, adet, kullanım alanı ve teslim planı birlikte değerlendirilir. Böylece seçenekleri daha hızlı daraltabilir, bütçe ve proje hedefleriyle uyumlu bir sipariş oluşturabilirsiniz.",
    highlights: ["İhtiyaca göre ürün yönlendirmesi", "Güncel stok ve fiyat bilgisi", "Doğrudan ekip iletişimi"],
    sections: [
      {
        title: "Sipariş öncesi",
        body: "Talep ettiğiniz kategori, yaklaşık adet, uygulama alanı ve varsa referans görselleri paylaşmanız sürecin daha hızlı ilerlemesini sağlar. Ekibimiz güncel alternatifleri sizin için netleştirir.",
      },
      {
        title: "Sipariş planlama",
        body: "Ürün ve stok teyidinin ardından sipariş detayları, teslim yaklaşımı ve diğer ihtiyaçlar doğrudan sizinle paylaşılır. Büyük hacimli taleplerde erken planlama önerilir.",
      },
    ],
  },
  {
    path: "iletisim",
    eyebrow: "Flora ile konuşun",
    title: "Yeni projenizi birlikte başlatalım.",
    summary:
      `Ürün, stok ve toptan fiyat bilgisi için ${PHONE_DISPLAY} numarasından bize ulaşın veya İstanbul’daki merkezimizi ziyaret edin.`,
    image: `${BRANDED_ASSET_ROOT}/catalog/lobi-kopya.jpg`,
    imageAlt: "Flora Çiçek iletişim",
    introTitle: "Doğrudan ve hızlı iletişim",
    intro:
      "Flora Çiçek’in Bağcılar’daki merkezine yol tarifi alın veya güncel ürün ve stok bilgisi için satış ekibimize doğrudan ulaşın.",
    highlights: [PHONE_DISPLAY, "WhatsApp üzerinden ürün bilgisi", "Bağcılar / İstanbul merkez"],
    sections: [
      {
        title: "Teklif için ne paylaşmalısınız?",
        body: "İlgilendiğiniz ürün grubu, tahmini adet, kullanım alanı ve varsa referans görselleriniz teklif sürecini hızlandırır. Ekibimiz uygun alternatiflerle size dönüş sağlar.",
      },
      {
        title: "Merkez ve ziyaret",
        body: `Flora Çiçek, ${ADDRESS} adresinde hizmet verir. Ziyaret öncesinde ürün ve görüşme uygunluğunu telefonla teyit etmenizi öneririz.`,
      },
    ],
  },
];

export const innerPages = [...corporatePages, ...productPages];

export function getInnerPage(path: string) {
  return innerPages.find((page) => page.path === path);
}
