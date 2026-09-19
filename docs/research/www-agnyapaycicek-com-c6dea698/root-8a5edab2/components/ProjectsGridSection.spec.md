# ProjectsGridSection Specification

## Overview
- **Target file:** `src/components/sites/www-agnyapaycicek-com-c6dea698/root-8a5edab2/ProjectsGridSection.tsx`
- **Screenshot:** `docs/design-references/www-agnyapaycicek-com-c6dea698/root-8a5edab2/projects-desktop.png`
- **Interaction model:** image hover

## DOM Structure
Bordered section; max-width wrapper; heading row with h2 and desktop “Tüm projeler” link; grid of twelve square image frames.

## Computed Styles (exact values from getComputedStyle)

### Section and heading
- borderTop: 1px solid #e7eae8; desktop height 1122px
- wrapper maxWidth 1280px; padding 64px 24px
- heading row marginBottom 36px; display flex; alignItems flex-end; justifyContent space-between
- h2 30px/36px; weight 800; color #1a1d1b
- link 16px/24px; weight 600; color #2c6739; gap 4px

### Grid
- grid desktop 4 columns; gap 12px
- tile 299px × 299px; aspectRatio 1; radius 8px; border 1px solid #e7eae8; overflow hidden
- image objectFit cover; transform scale(1)

## States & Behaviors

### Image hover
- transform scale(1) → scale(1.05)
- transition 500ms cubic-bezier(.4,0,.2,1)

### Link hover
- color #2c6739 → #23512e, 180ms ease

## Per-State Content
N/A.

## Assets
Twelve local project paths from `projectImages`; Lucide `ArrowRight`.

## Text Content (verbatim)
- PROJELERİMİZ
- Tüm projeler (`/projeler`)
- image alt: `AGN proje görseli {1..12}`

## Responsive Behavior
- **Desktop (1440px):** four columns.
- **Tablet (768px):** three columns.
- **Mobile (390px):** two columns; heading link hidden below 640px.
- **Breakpoints:** 3 columns from 640px; 4 from 1024px.
