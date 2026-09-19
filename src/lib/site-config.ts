const FALLBACK_SITE_URL = "http://localhost:3000";

function resolveSiteUrl() {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

  if (!configuredUrl) {
    return FALLBACK_SITE_URL;
  }

  try {
    return new URL(configuredUrl).origin;
  } catch {
    return FALLBACK_SITE_URL;
  }
}

export const SITE_NAME = "Flora Çiçek";
export const SITE_DESCRIPTION =
  "İstanbul merkezli Flora Çiçek'ten profesyonellere özel toptan yapay çiçek, yapay bitki, yapay ağaç, aranjman ve organizasyon ürünleri.";
export const SITE_URL = resolveSiteUrl();
export const SITE_LOCALE = "tr_TR";
export const SITE_LANGUAGE = "tr";
export const SOCIAL_IMAGE =
  "/sites/flora-cicek/root-8a5edab2/images/branded/hero.png";
export const LOGO_IMAGE =
  "/sites/flora-cicek/root-8a5edab2/images/flora-icon-black-transparent.png";

export function absoluteUrl(path = "/") {
  return new URL(path, `${SITE_URL}/`).toString();
}
