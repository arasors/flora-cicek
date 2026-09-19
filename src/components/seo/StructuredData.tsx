import {
  ADDRESS,
  PHONE_DISPLAY,
} from "@/components/sites/flora-cicek/root-8a5edab2/data";
import {
  absoluteUrl,
  LOGO_IMAGE,
  SITE_DESCRIPTION,
  SITE_NAME,
  SOCIAL_IMAGE,
} from "@/lib/site-config";

export function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${absoluteUrl("/")}#website`,
        url: absoluteUrl("/"),
        name: SITE_NAME,
        description: SITE_DESCRIPTION,
        inLanguage: "tr-TR",
      },
      {
        "@type": "Florist",
        "@id": `${absoluteUrl("/")}#business`,
        name: SITE_NAME,
        description: SITE_DESCRIPTION,
        url: absoluteUrl("/"),
        logo: absoluteUrl(LOGO_IMAGE),
        image: absoluteUrl(SOCIAL_IMAGE),
        telephone: PHONE_DISPLAY,
        priceRange: "₺₺",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Mahmutbey Mahallesi, 2421 Sokak No: 163",
          addressLocality: "Bağcılar",
          addressRegion: "İstanbul",
          addressCountry: "TR",
        },
        areaServed: {
          "@type": "City",
          name: "İstanbul",
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+90 531 334 05 10",
          contactType: "sales",
          areaServed: "TR",
          availableLanguage: "Turkish",
        },
        hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
