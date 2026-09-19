# SiteFooter Specification

## Overview
- **Target file:** `src/components/sites/www-agnyapaycicek-com-c6dea698/root-8a5edab2/SiteFooter.tsx`
- **Screenshot:** `docs/design-references/www-agnyapaycicek-com-c6dea698/root-8a5edab2/footer-desktop.png`
- **Interaction model:** static links with hover

## DOM Structure
Dark footer with a four-column main grid (brand, services, corporate, contact) and a separated bottom legal block containing copyright, tax line, policy links, and agency credit.

## Computed Styles (exact values from getComputedStyle)

### Footer and main grid
- marginTop 96px; borderTop 1px solid #dcebde; background #1d4126; color #f1f7f2; desktop height 410px
- main maxWidth 1280px; padding 56px 24px; display grid; 4 columns; gap 40px
- brand title 20px/28px; weight 800; letterSpacing -0.5px
- brand paragraph marginTop 12px; 14px/20px; color rgba(220,235,222,.8)
- column headings marginBottom 12px; 14px/20px; weight 600; uppercase; letterSpacing .35px; color #b6dcbd
- link lists 14px/20px; row gap 8px; color rgba(220,235,222,.8); contact gap 12px

### Bottom bar
- borderTop 1px solid #23512e; padding 20px 0; desktop height 105px
- inner maxWidth 1280px; padding 0 24px; flex space-between; 12px/16px; color rgba(182,220,189,.7)
- policy links gap 16px; agency credit marginTop 16px; centered

## States & Behaviors

### Link hover
- current translucent brand text → white, transition 180ms ease

## Per-State Content
N/A.

## Assets
Lucide `Phone`, `Mail`, `MapPin`, and `Instagram`.

## Text Content (verbatim)
Brand: AGN YAPAY ÇİÇEK VE DEKORASYON. Description: “32 yıllık tecrübe ve geniş bitki ve çiçek çeşitlerimizle tüm ihtiyaçlarınıza çözüm sunuyoruz. En son projelerimizi incelemek için instagram hesabımıza göz atın. Detaylı bilgi almak için bize ulaşın.” Columns and hrefs come from `footerServices` and `footerCorporate`. Contact: 0533 315 32 50; info@agnyapaycicek.com; Tatlısu Mah. Elalmış Cad. No: 52/2, Ümraniye/İstanbul; Instagram. Bottom: © 2026 AGN Yapay Çiçek Dekorasyon Sanayi ve Ticaret Limited Şirketi — Tüm hakları saklıdır. Alemdağ V.D. — Vergi No: 0091924030. KVKK; Gizlilik Politikası; Çerez Politikası. Powered by Medinne Medya Ajansı.

## Responsive Behavior
- **Desktop (1440px):** four columns and horizontal legal row.
- **Tablet (768px):** two main columns.
- **Mobile (390px):** one main column; bottom content stacks and centers.
- **Breakpoints:** two columns at 640px; four at 1024px.
