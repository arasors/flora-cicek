import { innerPages } from "@/components/sites/flora-cicek/root-8a5edab2/innerPageData";
import { absoluteUrl, SITE_DESCRIPTION, SITE_NAME } from "@/lib/site-config";

export function GET() {
  const productPages = innerPages.filter((page) => page.path.startsWith("urunler/"));
  const primaryPaths = ["urunler", "toptan-satis", "hakkimizda"];
  const primaryPages = primaryPaths
    .map((path) => innerPages.find((page) => page.path === path))
    .filter((page) => page !== undefined);
  const optionalPages = innerPages.filter((page) => ["galeri", "iletisim"].includes(page.path));

  const document = [
    `# ${SITE_NAME}`,
    "",
    `> ${SITE_DESCRIPTION}`,
    "",
    "Flora Çiçek; İstanbul, Bağcılar merkezli bir toptan yapay çiçek, yapay bitki ve dekorasyon ürünleri firmasıdır.",
    "",
    "## Ana sayfalar",
    "",
    `- [Ana sayfa](${absoluteUrl("/")}): Flora Çiçek ürün grupları ve toptan satış yaklaşımı.`,
    ...primaryPages.map(
      (page) => `- [${page.title}](${absoluteUrl(`/${page.path}`)}): ${page.summary}`,
    ),
    "",
    "## Ürün koleksiyonları",
    "",
    ...productPages.map(
      (page) => `- [${page.title}](${absoluteUrl(`/${page.path}`)}): ${page.summary}`,
    ),
    "",
    "## Optional",
    "",
    ...optionalPages.map(
      (page) => `- [${page.title}](${absoluteUrl(`/${page.path}`)}): ${page.summary}`,
    ),
    "",
  ].join("\n");

  return new Response(document, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
