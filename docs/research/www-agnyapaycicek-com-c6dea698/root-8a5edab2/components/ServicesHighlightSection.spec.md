# ServicesHighlightSection Specification

## Overview
- **Target file:** `src/components/sites/www-agnyapaycicek-com-c6dea698/root-8a5edab2/ServicesHighlightSection.tsx`
- **Screenshot:** `docs/design-references/www-agnyapaycicek-com-c6dea698/root-8a5edab2/services-highlights-desktop.png`
- **Interaction model:** static linked cards with hover

## DOM Structure
`section#hizmetler > max-width container`; centered h2/subtitle followed by a three-column grid. Every card contains a 4:3 image, then a padded content stack with h3, description, and ArrowRight link.

## Computed Styles (exact values from getComputedStyle)

### Section and heading
- maxWidth: 1280px; padding: 64px 24px; desktop height: 794px
- h2: 30px/36px, weight 800, centered, color #1a1d1b
- subtitle: 16px/24px, maxWidth 768px, centered, color #5b635d; marginTop 12px
- heading block: marginBottom 36px; grid: 3 equal columns; gap 24px

### Card
- desktop size: 394.66px × 534px
- border: 1px solid #e7eae8; borderRadius: 12px; overflow hidden; background white
- image: 394.66px × 296px; aspectRatio 4/3; objectFit cover
- content padding: 24px; display flex; flexDirection column
- h3: 18px/28px; weight 700; color #1a1d1b
- body: marginTop 8px; 14px/22.75px; color #5b635d
- link: marginTop 16px; 16px/24px; weight 600; color #2c6739

## States & Behaviors

### Hover states
- link color: #2c6739 → #23512e, transition 180ms ease
- arrow translates 0px → 4px horizontally, transition 180ms ease

## Per-State Content
N/A; all three services remain visible.

## Assets
- `agn/dev-agac.jpg`
- `agn/agn-dikey-bahce.jpeg`
- `agn/lobi-kopya.jpg`
- Lucide `ArrowRight`.

## Text Content (verbatim)
- Heading: Neler Yapıyoruz?
- Subtitle: Yapay Çiçek Dekorasyonu, Dikey Bahçe, Yosun Duvar, Yapay Ağaç, Şoklanmış Palmiye, Gül Duvarı, ve Yapay Bitki Sektöründe 32 Yıllık Tecrübe ve Güven
- Cards and descriptions come verbatim from `featureServices` in the namespaced data module; link label is “Daha Fazla Bilgi Edinin”.

## Responsive Behavior
- **Desktop (1440px):** 3 × 394.66px columns.
- **Tablet (768px):** three equal columns remain at the `md` breakpoint with narrower cards.
- **Mobile (390px):** one column, 24px gaps; section about 1931px tall.
- **Breakpoint:** 3 columns at 768px; one below 768px.
