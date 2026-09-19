# Technical Stack Analysis

- Original: Next.js App Router with React, Tailwind CSS utilities, Next Image, and Lucide icons.
- Clone: existing Next.js 16 / React 19 / Tailwind CSS 4 scaffold.
- Font: self-hosted Inter variable WOFF2, Latin and Latin Extended subsets.
- Media: local namespaced copies of all visible raster/AVIF assets; responsive images rendered with `next/image`.
- Client-side code is needed only for the mobile navigation disclosure and inspiration carousel timer/buttons.
- No analytics, backend, authentication, data persistence, or remote runtime asset dependency is needed for the visible page clone.
