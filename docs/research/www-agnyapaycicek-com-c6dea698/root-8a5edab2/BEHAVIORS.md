# Behaviors

## Scroll sweep

- Header remains 73px desktop / 69px compact, translucent white with backdrop blur, and receives no shadow or size change at any scroll position.
- Sections enter without reveal animation. Browser-native document scrolling is used.
- Reference logos move continuously left via CSS marquee.
- WhatsApp control remains fixed 20px from bottom and right.

## Click sweep

- Desktop/tablet phone and CTA links use their real `tel:` or contact destination.
- Mobile menu toggles a stacked link panel: Ana Sayfa, Neler Yapıyoruz?, Projelerimiz, Bize Ulaşın, Canlı Peyzaj Uygulama, then the phone link.
- Inspiration previous/next controls scroll the track by 80% of its client width with smooth behavior and wrap at either end.
- The carousel also invokes next every 3500ms.

## Hover sweep

- Brand-filled buttons: background `#2c6739` → `#23512e`, transition 180ms ease.
- Light/outline links: border remains `#e7eae8`; text/background move toward white/brand tint over 180ms.
- Project image: transform matrix identity → scale(1.05), 500ms cubic-bezier(.4,0,.2,1).
- WhatsApp button: scale(1) → scale(1.05), 180ms ease.

## Responsive sweep

- 1440px: desktop navigation; hero two columns; highlights/services/final benefits three columns; projects four columns.
- 768px: hamburger plus phone button; hero single column; highlights three columns; services two columns; projects three columns; final benefits three columns.
- 390px: hamburger without desktop navigation/phone pill; menu disclosure spans the header; all narrative card groups one column; projects two columns; carousel arrows hidden and each item is 78% width.
