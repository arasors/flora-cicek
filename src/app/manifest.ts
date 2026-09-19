import type { MetadataRoute } from "next";

import { LOGO_IMAGE, SITE_DESCRIPTION, SITE_NAME } from "@/lib/site-config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE_NAME} | Toptan Yapay Çiçek ve Bitki`,
    short_name: SITE_NAME,
    description: SITE_DESCRIPTION,
    start_url: "/",
    display: "standalone",
    background_color: "#f5eee1",
    theme_color: "#21180d",
    lang: "tr",
    icons: [
      {
        src: LOGO_IMAGE,
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
