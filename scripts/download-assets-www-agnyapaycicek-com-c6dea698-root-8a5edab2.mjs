import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";

const ORIGIN = "https://www.agnyapaycicek.com";
const ROOT = process.cwd();
const IMAGE_ROOT = join(
  ROOT,
  "public/sites/www-agnyapaycicek-com-c6dea698/root-8a5edab2/images",
);
const FONT_ROOT = join(
  ROOT,
  "public/sites/www-agnyapaycicek-com-c6dea698/shared/fonts",
);

const imagePaths = [
  "/favicon.ico",
  "/icon.png",
  "/apple-icon.png",
  "/images/agn-logo.png",
  "/images/hero.png",
  "/images/agn/dev-agac.jpg",
  "/images/agn/agn-dikey-bahce.jpeg",
  "/images/agn/lobi-kopya.jpg",
  "/images/agn/agn-yapay-cicek-0001.jpeg",
  "/images/agn/monstera-kopya.jpg",
  "/images/agn/yapay-bonsai-agaci-plaza-uygulama.png",
  "/images/agn/yapi-yapi-simsir.jpg",
  "/images/agn/botanik-bahce.jpg",
  "/images/agn/soklanmis-palmiye-agnyapaycicek.jpg",
  "/images/agn/bambu-agaci-yapay.jpg",
  "/images/agn/agn-2023-5.jpg",
  "/images/services/yapay-simsir-panel.png",
  "/images/agn/tavan-yapay-cicek.jpg",
  "/images/agn/yapay-botanik-bahce-uygulamasi.avif",
  "/images/agn/Ciragan-Palace-Kempinski-Istanbul-Logo.jpg",
  "/images/agn/Trendyol-Group_id1GLwBgkZ_1.png",
  "/images/agn/starbucks.png",
  "/images/agn/getir.png",
  "/images/agn/hepsiburada.jpg",
  "/images/agn/is-bankasi.png",
  "/images/agn/anpa-gross.png",
  "/images/agn/safi-holding.jpg",
  "/images/agn/bati-yakasi.png",
  "/images/agn/godiva.png",
  "/images/agn/burger-king.jpg",
  "/images/agn/borsa-istanbul.png",
  "/images/agn/akasya-avm.png",
  "/images/agn/shake-shack.png",
  "/images/agn/soju-bar.jpg",
  "/images/agn/magnolia-bakery.jpg",
  "/images/agn/saray-muhallebicisi.png",
  "/images/agn/bb-logo-turkish-airlines-beyaz.jpeg",
  "/images/agn/6.png",
  "/images/agn/denizbank.png",
  "/images/agn/Untitled-design-99.png",
  "/images/agn/Untitled-design-100.png",
  "/images/agn/dedeman-logo.jpeg",
  "/images/agn/5.png",
  "/images/agn/9.png",
  "/images/agn/sushico_kare_logo.jpeg",
  "/images/agn/yatas_grup_logo.jpeg",
  "/images/agn/yildirim-holding-logo.jpeg",
  "/images/agn/4.png",
  "/images/agn/3.png",
  "/images/agn/14.png",
  "/images/agn/10.png",
  "/images/agn/13.png",
  "/images/agn/2.png",
  "/images/agn/15.png",
  "/images/agn/11.png",
  "/images/agn/12.png",
  "/images/agn/8.png",
  "/images/agn/1.png",
  "/images/agn/agn2023-1.jpg",
  "/images/agn/agn2023-2.jpg",
  "/images/agn/agn2023-3.jpg",
  "/images/agn/agn2023-8.jpg",
  "/images/agn/agn2023-12.jpg",
  "/images/agn/agn2023-13.jpg",
  "/images/agn/agn-yp-2.jpg",
  "/images/agn/agn-yp-3.jpg",
  "/images/agn/agn-yp7.jpg",
  "/images/agn/agn-yp8.jpg",
  "/images/agn/dikey-bahce-buyuk.jpg",
  "/images/agn/dikey-bahce-dekoru.jpg",
  "/images/agn/dikey-bahce-dekoru-1.jpg",
  "/images/agn/tavan-yapay-cicek-1.jpg",
  "/images/agn/starlice-dekoru-agn-2.jpg",
  "/images/agn/top-agac-yapay.jpg",
  "/images/agn/merdiven-alti-yapay-cicek.jpg",
  "/images/agn/agn-duvar-dikey-bahce.jpg",
  ...Array.from(
    { length: 12 },
    (_, index) => `/images/projeler/proje-${String(index + 1).padStart(3, "0")}.jpg`,
  ),
];

const fonts = [
  {
    url: "/_next/static/media/1bffadaabf893a1e-s.p.16ipb6fqu393i.woff2",
    destination: join(FONT_ROOT, "inter-latin-ext.woff2"),
  },
  {
    url: "/_next/static/media/83afe278b6a6bb3c-s.p.0q-301v4kxxnr.woff2",
    destination: join(FONT_ROOT, "inter-latin.woff2"),
  },
];

const jobs = [
  ...imagePaths.map((path) => ({
    url: path,
    destination: join(IMAGE_ROOT, path.replace(/^\/(?:images\/)?/, "")),
  })),
  ...fonts,
];

async function download({ url, destination }) {
  const response = await fetch(new URL(url, ORIGIN), {
    headers: { "user-agent": "AGN homepage clone asset downloader" },
  });

  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}: ${url}`);
  }

  await mkdir(dirname(destination), { recursive: true });
  await writeFile(destination, Buffer.from(await response.arrayBuffer()));
  return destination;
}

for (let index = 0; index < jobs.length; index += 4) {
  const batch = jobs.slice(index, index + 4);
  const completed = await Promise.all(batch.map(download));
  completed.forEach((path) => console.log(`downloaded ${path}`));
}

console.log(`Downloaded ${jobs.length} assets.`);
