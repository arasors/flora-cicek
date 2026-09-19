# Interaction Patterns

- Buttons use 12px or pill radii, 180ms color transitions, and darken from brand-600 to brand-700 on hover.
- Text links and navigation links shift from ink/muted to brand-700 on hover.
- The mobile menu is click-driven and appears below the 69px header; the menu icon toggles to a close icon.
- Header styling is invariant across scroll position.
- Reference logos use a duplicated list with a 124.8s linear infinite horizontal marquee.
- Inspiration carousel is both time- and click-driven. It autoplays every 3500ms. Each step calls smooth `scrollTo` by `0.8 * clientWidth`; next wraps to 0 near the end, previous wraps to `scrollWidth` near the start. Buttons are hidden below 640px, where native horizontal swiping remains.
- Project imagery scales from 1 to 1.05 on hover over 500ms.
- No entrance animations, scroll-triggered state changes, parallax, dialogs, tabs, or scroll snapping were found outside the carousel track's item snapping.
