import type { FeatureService, ServiceItem, SiteLink, StatItem } from "./types";

export const ASSET_ROOT = "/sites/flora-cicek/root-8a5edab2/images";
export const PHONE_DISPLAY = "0531 334 05 10";
export const PHONE_HREF = "tel:+905313340510";
export const WHATSAPP_HREF = "https://wa.me/905313340510";
export const ADDRESS =
  "Mahmutbey Mahallesi, 2421 Sokak No: 163, Bağcılar, İstanbul, Türkiye";
export const MAPS_HREF =
  "https://www.google.com/maps/search/?api=1&query=Mahmutbey%20Mahallesi%202421%20Sokak%20No%20163%20Ba%C4%9Fc%C4%B1lar%20%C4%B0stanbul";

export const navigation: SiteLink[] = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Ürün Grupları", href: "#urunler" },
  { label: "Ürün Galerisi", href: "#galeri" },
  { label: "İletişim", href: "#iletisim" },
];

export const featureServices: FeatureService[] = [
  {
    label: "Toptan Yapay Çiçek ve Aranjman",
    href: "#iletisim",
    image: `${ASSET_ROOT}/catalog/agn-yapay-cicek-0001.jpeg`,
    description:
      "Mağaza, organizasyon ve dekorasyon ihtiyaçları için farklı renk, form ve ölçülerde birinci kalite yapay çiçekler ile hazır aranjman seçenekleri sunuyoruz.",
  },
  {
    label: "Yapay Bitki ve Ağaçlar",
    href: "#iletisim",
    image: `${ASSET_ROOT}/catalog/dev-agac.jpg`,
    description:
      "İç ve dış mekân kullanımlarına uygun yapay bitki, saksılı ürün ve yapay ağaç çeşitlerini toptan satış avantajıyla işletmelerle buluşturuyoruz.",
  },
  {
    label: "Organizasyon Ürünleri",
    href: "#iletisim",
    image: `${ASSET_ROOT}/catalog/tavan-yapay-cicek.jpg`,
    description:
      "Düğün, davet, vitrin ve etkinlik dekorasyonları için yapay çiçekler, tamamlayıcı organizasyon ekipmanları ve dekoratif ürünler sağlıyoruz.",
  },
];

export const stats: StatItem[] = [
  { value: "Toptan", label: "Satış Odaklı Ürün Tedariği" },
  { value: "1. Kalite", label: "Seçkin Yapay Çiçek ve Bitkiler" },
  { value: "İstanbul", label: "Bağcılar Merkezli Hizmet" },
];

const serviceRows: Array<[string, string]> = [
  ["Toptan Yapay Çiçek", "catalog/agn-yapay-cicek-0001.jpeg"],
  ["Toptan Yapay Bitki", "catalog/monstera-kopya.jpg"],
  ["Yapay Ağaç", "catalog/dev-agac.jpg"],
  ["Yapay Aranjman", "catalog/agn2023-3.jpg"],
  ["Güneşe Dayanıklı Ürünler", "catalog/dikey-bahce-buyuk.jpg"],
  ["Organizasyon Çiçekleri", "catalog/tavan-yapay-cicek-1.jpg"],
  ["Organizasyon Ekipmanları", "catalog/agn2023-13.jpg"],
  ["Dikey Bahçe Ürünleri", "catalog/agn-dikey-bahce.jpeg"],
  ["Saksılı Yapay Bitkiler", "catalog/lobi-kopya.jpg"],
  ["Yapay Sarmaşıklar", "catalog/merdiven-alti-yapay-cicek.jpg"],
  ["Yapay Bonsai", "catalog/yapay-bonsai-agaci-plaza-uygulama.png"],
  ["Dekoratif Yapay Yeşillikler", "catalog/botanik-bahce.jpg"],
];

export const services: ServiceItem[] = serviceRows.map(([label, image]) => ({
  label,
  href: "#iletisim",
  image: `${ASSET_ROOT}/${image}`,
}));

const inspirationFiles = [
  "agn2023-1.jpg",
  "agn2023-2.jpg",
  "agn2023-3.jpg",
  "agn2023-8.jpg",
  "agn2023-12.jpg",
  "agn2023-13.jpg",
  "agn-yp-2.jpg",
  "agn-yp-3.jpg",
  "agn-yp7.jpg",
  "agn-yp8.jpg",
  "dikey-bahce-buyuk.jpg",
  "dikey-bahce-dekoru.jpg",
  "dikey-bahce-dekoru-1.jpg",
  "tavan-yapay-cicek.jpg",
  "tavan-yapay-cicek-1.jpg",
  "dev-agac.jpg",
  "bambu-agaci-yapay.jpg",
  "soklanmis-palmiye-agnyapaycicek.jpg",
  "starlice-dekoru-agn-2.jpg",
  "lobi-kopya.jpg",
  "botanik-bahce.jpg",
  "top-agac-yapay.jpg",
  "merdiven-alti-yapay-cicek.jpg",
  "agn-duvar-dikey-bahce.jpg",
];

export const inspirationImages = inspirationFiles.map(
  (file) => `${ASSET_ROOT}/catalog/${file}`,
);

export const productImages = Array.from(
  { length: 12 },
  (_, index) =>
    `${ASSET_ROOT}/projeler/proje-${String(index + 1).padStart(3, "0")}.jpg`,
);

export const footerServices: SiteLink[] = services.slice(0, 6).map(({ label }) => ({
  label,
  href: "#urunler",
}));

export const footerCorporate: SiteLink[] = [
  { label: "Ürün Grupları", href: "#urunler" },
  { label: "Ürün Galerisi", href: "#galeri" },
  { label: "Toptan Satış", href: "#toptan-satis" },
  { label: "Teklif Al", href: "#iletisim" },
];
