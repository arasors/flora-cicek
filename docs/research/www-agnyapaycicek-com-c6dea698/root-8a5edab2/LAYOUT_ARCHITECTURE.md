# Layout Architecture

The document uses normal vertical flow with a sticky header (`top: 0`, `z-index: 50`) and one fixed WhatsApp control (`right: 20px`, `bottom: 20px`, `z-index: 50`). There is no custom full-page scroll container and no smooth-scroll library.

Desktop content is consistently centered in a 1280px max-width wrapper with 24px horizontal padding. Hero is a two-column 596px/596px grid with 40px gap. Highlight cards are three equal columns, services three columns, project tiles four columns, and the final benefit cards three columns.

At 768px the header switches to the compact navigation, hero becomes one column, highlights stay three columns, services become two, and projects become three. At 390px all narrative/card sections stack; projects stay two columns; the inspiration track exposes a 78% card and horizontal swipe affordance.

Section order and background rhythm: white header/hero/highlights → pale value CTA → white stats/story → pale services/references → white inspiration/projects/final CTA → dark-green footer. Footer is separated from the preceding CTA by 96px top margin.
