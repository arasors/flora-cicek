# FinalCtaSection Specification

## Overview
- **Target file:** `src/components/sites/www-agnyapaycicek-com-c6dea698/root-8a5edab2/FinalCtaSection.tsx`
- **Screenshot:** `docs/design-references/www-agnyapaycicek-com-c6dea698/root-8a5edab2/final-cta-desktop.png`
- **Interaction model:** static CTA with hover

## DOM Structure
Centered narrow section with h2, lead, description, three icon benefit cards, and contact CTA.

## Computed Styles (exact values from getComputedStyle)

### Section and copy
- maxWidth 1024px; padding 64px 24px; textAlign center; desktop height 574px
- h2 30px/36px; weight 800; color #1a1d1b
- lead maxWidth 672px; margin 12px auto 0; 16px/24px; weight 500; color rgba(26,29,27,.8)
- body maxWidth 672px; margin 12px auto 0; 16px/24px; color #5b635d

### Benefits and CTA
- grid marginTop 40px; 3 columns; gap 24px
- card desktop 309.33px × 158px (natural content height; 134px on 390px mobile); padding 24px; radius 12px; border #e7eae8; centered flex column; gap 12px
- icon box 48px square; radius 8px; background #dcebde; color #2c6739; icon 24px
- label 16px/24px; weight 600; color #1a1d1b
- CTA marginTop 40px; 166.9px × 52px; padding 14px 28px; radius 8px; gap 8px; weight 600; bg #2c6739; white

## States & Behaviors

### CTA hover
- background #2c6739 → #23512e, 180ms ease

## Per-State Content
N/A.

## Assets
Lucide `Building2`, `Factory`, `Users`, `ArrowRight`.

## Text Content (verbatim)
- Canlı Çiçek ve Bitki Projelerinde Yanınızdayız
- Otel, Avm, Havalimanı, Kafe, İç ve Dış Mekan tüm yapay çiçek ve bitki projelerinizde yanınızdayız
- 32 yıllık tecrübe ve geniş yapay bitki ve yapay çiçek çeşitlerimizle kurumlara, mimarlara ve kişilere özel çözümler sunuyoruz. Detaylı bilgi almak için bize ulaşın.
- Otel, Kafe, Ofis Proje Uygulama
- 1994'ten Bugüne İthal-Yerli Üretim
- Tecrübeli, Profesyonel Ekip
- Bize Ulaşın (`/iletisim`)

## Responsive Behavior
- **Desktop/Tablet:** three cards.
- **Mobile:** one column.
- **Breakpoint:** three columns from 640px.
