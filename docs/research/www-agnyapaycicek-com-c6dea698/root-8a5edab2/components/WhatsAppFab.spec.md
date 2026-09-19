# WhatsAppFab Specification

## Overview
- **Target file:** `src/components/sites/www-agnyapaycicek-com-c6dea698/root-8a5edab2/WhatsAppFab.tsx`
- **Screenshot:** `docs/design-references/www-agnyapaycicek-com-c6dea698/root-8a5edab2/desktop-full.png`
- **Interaction model:** fixed linked control with hover

## DOM Structure
One labelled anchor containing the shared WhatsApp SVG.

## Computed Styles (exact values from getComputedStyle)

### Anchor
- position: fixed; right: 20px; bottom: 20px; zIndex: 50
- width: 56px; height: 56px; borderRadius: 9999px
- display flex; alignItems center; justifyContent center
- background: #25d366; color: white; boxShadow: 0 4px 12px rgba(0,0,0,.2)

## States & Behaviors

### Hover
- transform: scale(1) → scale(1.05), transition 180ms ease

## Per-State Content
N/A.

## Assets
- `WhatsAppIcon` from the site shared icon module.

## Text Content (verbatim)
- aria-label: WhatsApp ile iletişime geçin
- href: `https://wa.me/905333153250`

## Responsive Behavior
- Same 56px control and 20px offsets at 1440px, 768px, and 390px.
