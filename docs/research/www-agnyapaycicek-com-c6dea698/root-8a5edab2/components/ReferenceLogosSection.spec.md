# ReferenceLogosSection Specification

## Overview
- **Target file:** `src/components/sites/www-agnyapaycicek-com-c6dea698/root-8a5edab2/ReferenceLogosSection.tsx`
- **Screenshot:** `docs/design-references/www-agnyapaycicek-com-c6dea698/root-8a5edab2/references-desktop.png`
- **Interaction model:** time-driven CSS marquee

## DOM Structure
Pale section; max-width wrapper with h2; masked overflow container; a width-max flex track containing the 39-logo list twice. Second set is `aria-hidden=true`.

## Computed Styles (exact values from getComputedStyle)

### Section and track
- borderTop: 1px solid #e7eae8; background rgba(241,247,242,.4); desktop height 297px
- wrapper maxWidth 1280px; padding 64px 24px
- h2: marginBottom 36px; 30px/36px; weight 800; centered
- viewport width 1232px; overflow hidden; maskImage linear-gradient(to right, transparent, black 8%, black 92%, transparent)
- track display flex; width 14960px; gap 16px; animation `marquee` 124.8s linear infinite

### Logo card
- 176px × 96px; padding 16px; flex center; shrink 0
- border 1px solid #e7eae8; radius 12px; background white
- image content box 142px × 62px; objectFit contain

## States & Behaviors

### Marquee
- **Trigger:** begins on render and runs continuously.
- **State A:** translateX(0).
- **State B:** translateX(calc(-50% - 8px)).
- **Transition:** 124.8s linear infinite CSS animation.
- `prefers-reduced-motion` pauses animation.

## Per-State Content
N/A; duplicated track has identical 39-logo order.

## Assets
All local logo paths and alt names come from `referenceLogos` in the namespaced data module.

## Text Content (verbatim)
Heading: Referanslarımız. Alt text is the exact customer name in `referenceLogos`.

## Responsive Behavior
- **Desktop/Tablet/Mobile:** same card dimensions and marquee; viewport clips according to available width; 24px page gutters remain.
