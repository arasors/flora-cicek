# InspirationCarouselSection Specification

## Overview
- **Target file:** `src/components/sites/www-agnyapaycicek-com-c6dea698/root-8a5edab2/InspirationCarouselSection.tsx`
- **Screenshot:** `docs/design-references/www-agnyapaycicek-com-c6dea698/root-8a5edab2/inspiration-desktop.png`
- **Interaction model:** time-, click-, and swipe-driven

## DOM Structure
Pale bordered section; max-width wrapper with centered h2; relative carousel containing a horizontal snap scroller with twenty-four square cards and two absolute arrow buttons.

## Computed Styles (exact values from getComputedStyle)

### Section and track
- borderTop: 1px solid #e7eae8; background rgba(241,247,242,.4); desktop height 591px
- wrapper maxWidth 1280px; padding 64px 24px
- h2 marginBottom 36px; 30px/36px; weight 800; center
- scroller width 1232px; display flex; gap 16px; overflowX auto; scrollBehavior smooth; paddingBottom 8px; scrollbar hidden; snapType x mandatory
- desktop card width 31% = 381.92px; aspectRatio 1/1; radius 12px; border #e7eae8; snapAlign center; objectFit cover

### Controls
- 38px × 38px including padding; absolute left/right 8px; top 50%; translateY(-50%)
- border 1px solid #e7eae8; pill; background rgba(255,255,255,.9); shadow 0 1px 3px rgba(0,0,0,.1)
- chevron size 20px; color #1a1d1b

## States & Behaviors

### Autoplay and controls
- **Trigger:** interval every 3500ms; previous/next button click; native swipe.
- **Step:** target scrollLeft = current scrollLeft + direction × 0.8 × clientWidth.
- **Wrap:** next near end targets 0; previous at start targets scrollWidth.
- **Transition:** native `scrollTo({behavior:'smooth'})`; track also has CSS smooth scrolling.
- Controls are hidden below 640px.

### Hover states
- button background rgba(255,255,255,.9) → white.

## Per-State Content
All 24 images remain in DOM in the `inspirationImages` order; visible state is determined only by scroll position.

## Assets
Twenty-four local paths from `inspirationImages`; Lucide `ChevronLeft` and `ChevronRight`.

## Text Content (verbatim)
- Projeleriniz İçin İlham Verecek Çalışmalarımız
- image alt: `AGN Yapay Çiçek dekorasyon örneği {1..24}`
- button labels: Önceki, Sonraki

## Responsive Behavior
- **Desktop (1440px):** each card 31% width; arrows visible.
- **Tablet (768px):** each card 45% width; arrows visible.
- **Mobile (390px):** each card 78% width; arrows hidden; horizontal swipe remains.
