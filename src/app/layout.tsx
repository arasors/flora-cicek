import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Flora Çiçek | Toptan Yapay Çiçek ve Bitki",
  description:
    "İstanbul merkezli Flora Çiçek'ten toptan yapay çiçek, yapay bitki, yapay aranjman ve organizasyon ürünleri.",
  icons: {
    icon: [
      {
        url: "/sites/flora-cicek/root-8a5edab2/images/flora-logo.png",
        sizes: "1333x1180",
        type: "image/png",
      },
    ],
    apple: "/sites/flora-cicek/root-8a5edab2/images/flora-logo.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" className="h-full">
      <body className="flex min-h-full flex-col font-sans text-ink">{children}</body>
    </html>
  );
}
