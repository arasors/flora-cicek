# StatsSection Specification

## Overview
- **Target file:** `src/components/sites/www-agnyapaycicek-com-c6dea698/root-8a5edab2/StatsSection.tsx`
- **Screenshot:** `docs/design-references/www-agnyapaycicek-com-c6dea698/root-8a5edab2/stats-desktop.png`
- **Interaction model:** static

## DOM Structure
`section > dl > three statistic divs`, each with `dt` value and `dd` label.

## Computed Styles (exact values from getComputedStyle)

### Container and items
- maxWidth: 1024px; padding: 56px 24px; desktop height: 180px
- dl display grid; gridTemplateColumns: repeat(3,1fr); gap 32px
- item textAlign center
- dt: 36px/40px; weight 800; color #2c6739
- dd: marginTop 4px; 16px/24px; color #5b635d

## States & Behaviors
N/A; no hover or state changes.

## Per-State Content
N/A.

## Assets
N/A.

## Text Content (verbatim)
- 32 — Senelik Sektör Tecrübesi
- 900+ — Başarılı Proje
- 4.990.050+ — m² Alan Uygulaması

## Responsive Behavior
- **Desktop (1440px):** three columns.
- **Tablet (768px):** three columns.
- **Mobile (390px):** one column with 32px gaps.
- **Breakpoint:** three columns from 640px.
