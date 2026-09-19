# HeroSection Specification

## Overview
- **Target file:** `src/components/sites/www-agnyapaycicek-com-c6dea698/root-8a5edab2/HeroSection.tsx`
- **Screenshot:** `docs/design-references/www-agnyapaycicek-com-c6dea698/root-8a5edab2/hero-desktop.png`
- **Interaction model:** static links with hover

## DOM Structure
`section > max-width container > two-column grid`; left column contains badge, h1, paragraph, and two CTAs; right is one bordered 16:11 image frame.

## Computed Styles (exact values from getComputedStyle)

### Container
- maxWidth: 1280px; padding: 80px 24px desktop, 56px 24px below 1024px
- display: grid; gridTemplateColumns: 596px 596px; gap: 40px; alignItems: center
- desktop section height: 571px

### Copy
- badge: 204px × 30px; padding: 4px 12px; borderRadius: 9999px; border: 1px solid #b6dcbd; background: #f1f7f2; color: #23512e; font: 500 14px/20px
- h1: marginTop 20px; font: 700 48px/53.76px; letterSpacing: -0.96px; color: #1a1d1b
- paragraph: marginTop 20px; font: 400 18px/28px; color: #5b635d
- CTA row: marginTop 28px; display flex; gap 12px; wrap
- primary CTA padding: 14px 24px; radius 8px; background #2c6739; color white; trailing 18px ArrowRight
- secondary CTA padding: 14px 24px; radius 8px; border 1px solid #e7eae8; color #1a1d1b

### Image
- width: 596px; height: 410px; aspectRatio: 16 / 11
- border: 1px solid #e7eae8; borderRadius: 12px; overflow: hidden; objectFit: cover

## States & Behaviors

### Hover states
- primary background: #2c6739 → #23512e, transition 180ms ease
- secondary background: transparent → #f1f7f2, transition 180ms ease

## Per-State Content
N/A; content does not switch.

## Assets
- Hero: `public/sites/www-agnyapaycicek-com-c6dea698/root-8a5edab2/images/hero.png`
- Phone icon: Lucide `Phone`.

## Text Content (verbatim)
- 32 Yıllık Tecrübe ve Güven
- Otel, Kafe, Restoran, İşyeri Yapay Çiçek Dekorasyonu
- Dikey Bahçe, Yapay Ağaç ve Yapay Çiçek Sektöründe 32 Yıllık Tecrübe ve Güven
- İletişime Geçin
- 0533 315 32 50

## Responsive Behavior
- **Desktop (1440px):** two 596px columns, 40px gap.
- **Tablet (768px):** single 720px column; image moves below copy.
- **Mobile (390px):** single 342px column; 48px vertical / 24px horizontal padding; h1 36px/40.32px; full-width image; section about 849px tall.
- **Breakpoint:** stacks below 1024px.
