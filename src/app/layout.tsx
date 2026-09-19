import type { Metadata } from "next";

import { TrackingScripts } from "@/components/analytics/TrackingScripts";
import { StructuredData } from "@/components/seo/StructuredData";
import {
  absoluteUrl,
  LOGO_IMAGE,
  SITE_DESCRIPTION,
  SITE_LOCALE,
  SITE_NAME,
  SITE_URL,
  SOCIAL_IMAGE,
} from "@/lib/site-config";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Flora Çiçek | Toptan Yapay Çiçek ve Bitki",
    template: "%s | Flora Çiçek",
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "toptan yapay çiçek",
    "toptan yapay bitki",
    "yapay ağaç",
    "yapay aranjman",
    "organizasyon çiçekleri",
    "dikey bahçe",
    "İstanbul toptan çiçek",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "Yapay çiçek ve dekorasyon",
  alternates: {
    canonical: "/",
    languages: { "tr-TR": "/" },
  },
  openGraph: {
    type: "website",
    locale: SITE_LOCALE,
    url: "/",
    siteName: SITE_NAME,
    title: "Flora Çiçek | Toptan Yapay Çiçek ve Bitki",
    description: SITE_DESCRIPTION,
    images: [
      {
        url: SOCIAL_IMAGE,
        width: 1376,
        height: 768,
        alt: "Flora Çiçek profesyonel yapay çiçek ve bitki koleksiyonu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Flora Çiçek | Toptan Yapay Çiçek ve Bitki",
    description: SITE_DESCRIPTION,
    images: [SOCIAL_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION || undefined,
    yandex: process.env.YANDEX_SITE_VERIFICATION || undefined,
    other: process.env.BING_SITE_VERIFICATION
      ? { "msvalidate.01": process.env.BING_SITE_VERIFICATION }
      : undefined,
  },
  icons: {
    icon: [
      {
        url: LOGO_IMAGE,
        sizes: "512x512",
        type: "image/png",
      },
    ],
    apple: LOGO_IMAGE,
  },
  manifest: absoluteUrl("/manifest.webmanifest"),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" className="h-full" data-scroll-behavior="smooth">
      <body className="flex min-h-full flex-col font-sans text-ink">
        <StructuredData />
        {children}
        <TrackingScripts />
      </body>
    </html>
  );
}
