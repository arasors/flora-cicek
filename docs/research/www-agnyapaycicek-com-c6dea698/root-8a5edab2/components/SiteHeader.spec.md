# SiteHeader Specification

## Overview
- **Target file:** `src/components/sites/www-agnyapaycicek-com-c6dea698/root-8a5edab2/SiteHeader.tsx`
- **Screenshot:** `docs/design-references/www-agnyapaycicek-com-c6dea698/root-8a5edab2/header-desktop.png`
- **Interaction model:** click-driven mobile disclosure; sticky on scroll

## DOM Structure
`header` contains a max-width row with linked logo, desktop nav, phone pill, and compact menu button. The mobile panel is a sibling below the row and contains all links plus the phone.

## Computed Styles (exact values from getComputedStyle)

### Header and row
- position: sticky; top: 0px; zIndex: 50
- background: rgba(255,255,255,.9); backdropFilter: blur(8px)
- borderBottom: 1px solid #e7eae8
- row maxWidth: 1280px; padding: 12px 24px (16px horizontal below 640px); desktop height: 73px
- display: flex; alignItems: center; justifyContent: space-between

### Logo and navigation
- logo: 85.54px × 48px, objectFit: contain; compact 78.4px × 44px
- desktop nav display: flex; gap: 28px
- nav fontSize: 14px; lineHeight: 20px; fontWeight: 500; color: #1a1d1b
- phone: 160.04px × 36px; padding: 8px 16px; borderRadius: 9999px; background: #2c6739; color: white

## States & Behaviors

### Mobile menu
- **Trigger:** click hamburger; breakpoint below 1024px
- **Closed:** panel display none; Menu icon
- **Open:** white panel below row with vertical 14px links and phone; X icon
- **Transition:** no measured enter animation; disclosure renders immediately

### Hover states
- nav link color: #1a1d1b → #23512e, transition 180ms ease
- phone background: #2c6739 → #23512e, transition 180ms ease
- Header style does not change with scroll.

## Per-State Content
Links: Ana Sayfa (`/`); Neler Yapıyoruz? (`/hizmetler`); Projelerimiz (`/projeler`); Bize Ulaşın (`/iletisim`). Phone: 0533 315 32 50.

## Assets
- Logo: `public/sites/www-agnyapaycicek-com-c6dea698/root-8a5edab2/images/agn-logo.png`
- Icons: Lucide `Menu`, `X`, and `Phone`.

## Text Content (verbatim)
Ana Sayfa · Neler Yapıyoruz? · Projelerimiz · Bize Ulaşın · Canlı Peyzaj Uygulama · 0533 315 32 50

## Responsive Behavior
- **Desktop (1440px):** 73px header; full nav + phone visible; menu hidden.
- **Tablet (768px):** 69px header; hamburger and phone visible; nav hidden.
- **Mobile (390px):** 69px header; hamburger visible; desktop nav and separate phone pill hidden; phone appears in open panel.
- **Breakpoint:** desktop navigation at 1024px.
