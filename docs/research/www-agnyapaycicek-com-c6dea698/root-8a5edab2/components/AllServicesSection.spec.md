# AllServicesSection Specification

## Overview
- **Target file:** `src/components/sites/www-agnyapaycicek-com-c6dea698/root-8a5edab2/AllServicesSection.tsx`
- **Screenshot:** `docs/design-references/www-agnyapaycicek-com-c6dea698/root-8a5edab2/all-services-desktop.png`
- **Interaction model:** linked cards with hover

## DOM Structure
Bordered pale section; container with centered h2 and grid of fourteen anchors. Each anchor contains an 80×64 image and label.

## Computed Styles (exact values from getComputedStyle)

### Section and grid
- borderTop: 1px solid #e7eae8; background rgba(241,247,242,.4); desktop height 695px
- inner maxWidth: 1280px; padding: 64px 24px
- h2: marginBottom 32px; 30px/36px; weight 800; centered
- grid: 3 columns; gap 12px

### Service card
- desktop size: 402.66px × 90px; padding 12px; display flex; align center; gap 16px
- border: 1px solid #e7eae8; borderRadius 8px; background white
- thumbnail: 80px × 64px; radius 6px; objectFit cover
- label: 16px/24px; weight 500; color #1a1d1b

## States & Behaviors

### Card hover
- borderColor #e7eae8 → #8fc398
- boxShadow none → 0 1px 2px rgba(0,0,0,.05)
- label color #1a1d1b → #23512e
- transition 180ms ease

## Per-State Content
N/A; all fourteen items stay visible.

## Assets
The fourteen local thumbnail paths and hrefs come from `services` in the namespaced data module.

## Text Content (verbatim)
Heading: Tüm Hizmetlerimiz. Labels: Yapay Çiçek; Yapay Bitki; Yapay Ağaç Toptancısı; Yapay Bonsai Ağacı; Yosun Duvar Uygulaması; Yapay Dikey Bahçe; Yapay Bitki İthalatı; Şoklanmış Palmiye; Yapay Bambu Seperatör; Yapay Şimşir Uygulaması; Yapay Şimşir Panel Üretimi; Tavan Sarmaşık Uygulaması; Yapay Botanik Bahçe Uygulaması; İç Mekan Bitkilendirme.

## Responsive Behavior
- **Desktop (1440px):** three columns.
- **Tablet (768px):** two columns.
- **Mobile (390px):** one column.
- **Breakpoints:** 2 columns at 640px, 3 at 1024px.
