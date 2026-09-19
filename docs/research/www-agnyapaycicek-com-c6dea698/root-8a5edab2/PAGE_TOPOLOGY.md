# Page Topology

| Order | Component | Flow/layer | Interaction model |
|---:|---|---|---|
| 1 | SiteHeader | sticky, z-50 | click-driven mobile menu; hover links |
| 2 | HeroSection | flow | static with links |
| 3 | ServicesHighlightSection | flow | static cards with links |
| 4 | ValueCtaSection | flow | static CTA |
| 5 | StatsSection | flow | static |
| 6 | StorySection | flow | static links |
| 7 | AllServicesSection | flow | static link cards |
| 8 | ReferenceLogosSection | flow | time-driven marquee |
| 9 | InspirationCarouselSection | flow | time-, click-, and swipe-driven |
| 10 | ProjectsGridSection | flow | hover image zoom |
| 11 | FinalCtaSection | flow | static CTA |
| 12 | SiteFooter | flow | hover links |
| overlay | WhatsAppFab | fixed, z-50 | hover + link |

The page root is a single site-scoped wrapper followed by the footer and fixed contact control. The header's in-page links target `#hizmetler`, `#projeler`, and `#iletisim` anchors.
