# StorySection Specification

## Overview
- **Target file:** `src/components/sites/www-agnyapaycicek-com-c6dea698/root-8a5edab2/StorySection.tsx`
- **Screenshot:** `docs/design-references/www-agnyapaycicek-com-c6dea698/root-8a5edab2/story-desktop.png`
- **Interaction model:** static links with hover

## DOM Structure
Narrow centered section with h2, one paragraph, and a centered two-link row.

## Computed Styles (exact values from getComputedStyle)

### Container and copy
- maxWidth: 768px; padding: 0 24px 56px; desktop height: 326px; textAlign center
- h2: 24px/32px; weight 700; color #1a1d1b
- paragraph: marginTop 16px; 16px/26px; color #5b635d
- link row: marginTop 20px; display flex; justifyContent center; gap 24px
- links: 14px/20px; weight 600; color #23512e

## States & Behaviors

### Link hover
- color #23512e → #2c6739, transition 180ms ease

## Per-State Content
N/A.

## Assets
N/A.

## Text Content (verbatim)
- Neden AGN Yapay Çiçek?
- Yapay çiçek ve dekorasyon sektöründeki köklerimiz 1990'a uzanıyor; 1994'ten bu yana yurt dışından doğrudan ithalat yapan, Türkiye'nin bu alandaki öncü firmalarından biriyiz. Ümraniye'deki showroom'umuz ve Gebze'deki depomuzdan tüm illere toptan ürün ve anahtar teslim proje hizmeti veriyoruz: keşif, tasarım, üretim ve montaj tek elden ilerler. UV katkılı ve alev almaz yapay şimşir panellerimizi %100 yerli üretimle kendimiz üretiyor; otel, kafe, ofis ve AVM projelerinde bakım gerektirmeyen, yıllarca ilk günkü görünümünü koruyan çözümler sunuyoruz.
- Hikayemizi okuyun → (`/hakkimizda`)
- Blog yazılarımız → (`/blog`)

## Responsive Behavior
- **Desktop/Tablet:** centered 768px maximum.
- **Mobile (390px):** 24px gutters; links remain a centered flex row and may wrap if needed.
