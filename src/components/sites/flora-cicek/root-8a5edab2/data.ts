import type { FeatureService, ServiceItem, SiteLink, StatItem } from "./types";

export const ASSET_ROOT = "/sites/flora-cicek/root-8a5edab2/images";
export const BRANDED_ASSET_ROOT = `${ASSET_ROOT}/branded`;
export const PHONE_DISPLAY = "0531 334 05 10";
export const PHONE_HREF = "tel:+905313340510";
export const WHATSAPP_HREF = "https://wa.me/905313340510";
export const ADDRESS =
  "Mahmutbey Mahallesi, 2421 Sokak No: 163, Bağcılar, İstanbul, Türkiye";
export const MAPS_HREF =
  "https://www.google.com/maps/search/?api=1&query=Mahmutbey%20Mahallesi%202421%20Sokak%20No%20163%20Ba%C4%9Fc%C4%B1lar%20%C4%B0stanbul";
export const MAP_EMBED_HREF = `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`;

export const navigation: SiteLink[] = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Koleksiyon", href: "/urunler" },
  { label: "Kurumsal", href: "/hakkimizda" },
  { label: "Projeler", href: "/galeri" },
  { label: "İletişim", href: "/iletisim" },
];

export const featureServices: FeatureService[] = [
  {
    label: "Toptan Yapay Çiçek ve Aranjman",
    href: "/urunler/toptan-yapay-cicek",
    image: `${BRANDED_ASSET_ROOT}/catalog/agn-yapay-cicek-0001.jpeg`,
    description:
      "Mağaza, organizasyon ve dekorasyon ihtiyaçları için farklı renk, form ve ölçülerde birinci kalite yapay çiçekler ile hazır aranjman seçenekleri sunuyoruz.",
  },
  {
    label: "Yapay Bitki ve Ağaçlar",
    href: "/urunler/yapay-bitki",
    image: `${BRANDED_ASSET_ROOT}/catalog/dev-agac.jpg`,
    description:
      "İç ve dış mekân kullanımlarına uygun yapay bitki, saksılı ürün ve yapay ağaç çeşitlerini toptan satış avantajıyla işletmelerle buluşturuyoruz.",
  },
  {
    label: "Organizasyon Ürünleri",
    href: "/urunler/organizasyon-cicekleri",
    image: `${BRANDED_ASSET_ROOT}/catalog/tavan-yapay-cicek.jpg`,
    description:
      "Düğün, davet, vitrin ve etkinlik dekorasyonları için yapay çiçekler, tamamlayıcı organizasyon ekipmanları ve dekoratif ürünler sağlıyoruz.",
  },
];

export const stats: StatItem[] = [
  { value: "Toptan", label: "Satış Odaklı Ürün Tedariği" },
  { value: "1. Kalite", label: "Seçkin Yapay Çiçek ve Bitkiler" },
  { value: "İstanbul", label: "Bağcılar Merkezli Hizmet" },
];

const serviceRows: Array<[string, string, string]> = [
  ["Toptan Yapay Çiçek", "catalog/agn-yapay-cicek-0001.jpeg", "toptan-yapay-cicek"],
  ["Toptan Yapay Bitki", "catalog/monstera-kopya.jpg", "yapay-bitki"],
  ["Yapay Ağaç", "catalog/dev-agac.jpg", "yapay-agac"],
  ["Yapay Aranjman", "catalog/agn2023-3.jpg", "yapay-aranjman"],
  ["Güneşe Dayanıklı Ürünler", "catalog/dikey-bahce-buyuk.jpg", "gunese-dayanikli-urunler"],
  ["Organizasyon Çiçekleri", "catalog/tavan-yapay-cicek-1.jpg", "organizasyon-cicekleri"],
  ["Organizasyon Ekipmanları", "catalog/agn2023-13.jpg", "organizasyon-ekipmanlari"],
  ["Dikey Bahçe Ürünleri", "catalog/agn-dikey-bahce.jpeg", "dikey-bahce"],
  ["Saksılı Yapay Bitkiler", "catalog/lobi-kopya.jpg", "saksili-yapay-bitkiler"],
  ["Yapay Sarmaşıklar", "catalog/merdiven-alti-yapay-cicek.jpg", "yapay-sarmasiklar"],
  ["Yapay Bonsai", "catalog/yapay-bonsai-agaci-plaza-uygulama.png", "yapay-bonsai"],
  ["Dekoratif Yapay Yeşillikler", "catalog/botanik-bahce.jpg", "dekoratif-yapay-yesillikler"],
];

export const services: ServiceItem[] = serviceRows.map(([label, image, slug]) => ({
  label,
  href: `/urunler/${slug}`,
  image: `${BRANDED_ASSET_ROOT}/${image}`,
  slug,
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
  (file) => `${BRANDED_ASSET_ROOT}/catalog/${file}`,
);

export const productImages = Array.from(
  { length: 12 },
  (_, index) =>
    `${BRANDED_ASSET_ROOT}/projeler/proje-${String(index + 1).padStart(3, "0")}.jpg`,
);

export const footerServices: SiteLink[] = services.slice(0, 6).map(({ label, href }) => ({
  label,
  href,
}));

export const footerCorporate: SiteLink[] = [
  { label: "Ürün Grupları", href: "/urunler" },
  { label: "Ürün Galerisi", href: "/galeri" },
  { label: "Toptan Satış", href: "/toptan-satis" },
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "Teklif Al", href: "/iletisim" },
];
