# Website UI Kit — The Azure Phuket

## Overview
A full click-through prototype of The Azure Phuket marketing website. Five screens: Home, Villas, Wellness, Dining, Concierge.

## Running
Open `index.html` directly in a browser (no build step). Requires internet for Google Fonts.

## Components

| File | Description |
|---|---|
| `Header.jsx` | Sticky navigation — transparent on load, frosted on scroll. Dark/light aware. |
| `HeroSection.jsx` | Full-viewport hero with photography bg, cinematic overlay, display headline + CTA |
| `VillaCard.jsx` | Reusable villa card with hover animation, image, specs, price, reserve CTA |
| `BookingBar.jsx` | Floating booking widget (check-in, check-out, guests, villa type + availability CTA) |
| `Footer.jsx` | Dark footer with brand lockup, nav columns, CTAs |

## Design Width
1240px content max-width, full-bleed backgrounds.

## Screen Flow
Home → hero with full imagery, villa grid, wellness band, testimonial
Villas → filtered listing with booking bar
Wellness → treatment cards with imagery
Dining → full-bleed dining photography
Concierge → contact form

## Notes
- Uses Cormorant Garamond (display) + Manrope (body) from Google Fonts
- All photography from `../../assets/images/`
- Lucide Icons not yet implemented — icon placeholders use ✦ brand symbol
