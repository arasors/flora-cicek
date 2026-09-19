# ValueCtaSection Specification

## Overview
- **Target file:** `src/components/sites/www-agnyapaycicek-com-c6dea698/root-8a5edab2/ValueCtaSection.tsx`
- **Screenshot:** `docs/design-references/www-agnyapaycicek-com-c6dea698/root-8a5edab2/value-cta-desktop.png`
- **Interaction model:** static CTA with hover

## DOM Structure
Full-width section with centered narrow wrapper, h2, two paragraphs, and anchor.

## Computed Styles (exact values from getComputedStyle)

### Section
- borderTop/borderBottom: 1px solid #e7eae8; background: rgba(241,247,242,.5)
- desktop height: 414px
- inner maxWidth: 896px; padding: 64px 24px; textAlign center
- h2: 30px/36px; weight 800; color #1a1d1b
- paragraphs: maxWidth 672px; margin 16px auto 0; 16px/24px; color #5b635d
- CTA: marginTop 32px; 141px × 52px; padding 14px 28px; radius 8px; weight 600; background #2c6739; color white

## States & Behaviors

### CTA hover
- background #2c6739 → #23512e, transition 180ms ease

## Per-State Content
N/A.

## Assets
N/A.

## Text Content (verbatim)
- Mekanlarınıza Değer Katan Profesyonel Yapay Bitki ve Çiçek Dekorasyonları
- Otelden AVM'ye, havalimanından kafelere kadar tüm iç ve dış mekân projelerinizde; dekoratif, kalıcı ve bakım gerektirmeyen bitkilendirme çözümleriyle yanınızdayız.
- 32 yıllık tecrübemizle; mimarlara, markalara ve kurumlara özel yapay çiçek ve bitki projeleri üretiyoruz. Detaylı bilgi ve keşif için bizimle iletişime geçin.
- Bize Ulaşın (`/iletisim`)

## Responsive Behavior
- **Desktop (1440px):** 896px centered wrapper.
- **Tablet (768px):** same centered composition with 24px gutters.
- **Mobile (390px):** content wraps naturally; same 64px vertical padding and centered CTA.
