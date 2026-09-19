import { innerPages } from "@/components/sites/flora-cicek/root-8a5edab2/innerPageData";
import {
  ADDRESS,
  PHONE_DISPLAY,
  WHATSAPP_HREF,
} from "@/components/sites/flora-cicek/root-8a5edab2/data";
import { absoluteUrl, SITE_DESCRIPTION, SITE_NAME } from "@/lib/site-config";

export function GET() {
  const pages = innerPages
    .map((page) => {
      const sections = page.sections
        .map((section) => `### ${section.title}\n\n${section.body}`)
        .join("\n\n");

      return `## ${page.title}\n\nURL: ${absoluteUrl(`/${page.path}`)}\n\n${page.summary}\n\n${page.intro}\n\n${sections}`;
    })
    .join("\n\n");

  const document = [
    `# ${SITE_NAME}`,
    "",
    SITE_DESCRIPTION,
    "",
    "## Firma bilgileri",
    "",
    `- Merkez: ${ADDRESS}`,
    `- Telefon: ${PHONE_DISPLAY}`,
    `- WhatsApp: ${WHATSAPP_HREF}`,
    "- Hizmet alanı: Toptan yapay çiçek, yapay bitki, yapay ağaç, aranjman, dikey bahçe ve organizasyon ürünleri.",
    "- Müşteri profili: Mağazalar, organizasyon firmaları, iç mimarlar, uygulama ekipleri ve ticari mekânlar.",
    "",
    "Güncel stok, ölçü ve fiyat bilgileri dönemsel olarak değişebilir. Sipariş öncesinde Flora Çiçek satış ekibiyle doğrudan iletişim kurulmalıdır.",
    "",
    pages,
    "",
  ].join("\n");

  return new Response(document, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
