# Emma George Weddings

Static website for Emma George Weddings, a wedding officiant serving NY/NJ.

## Structure

- `index.html` — Home
- `about.html` — About Emma
- `services.html` — Pricing tiers (Basic / Mid-Range / Premium)
- `faq.html` — Frequently asked questions
- `booking.html` — Inquiry form with wedding-date picker
- `assets/css/style.css` — Site styles
- `assets/js/main.js` — Nav toggle, FAQ accordion, date picker init, form submit
- `assets/vendor/flatpickr/` — Self-hosted date picker library (no CDN dependency)
- `assets/img/hero-lily.jpg` — Hero background photo

No build step — open `index.html` directly, or serve the folder with any
static file server (e.g. `python3 -m http.server`).

## Design system

Vogue-inspired editorial look: `GFS Didot` for headlines (uppercase, wide
letter-spacing, single weight) paired with `Archivo` for nav/labels/body
copy, both loaded from Google Fonts. Palette is lily-derived — ivory
background, blush pink accent, leaf green for headline/key text, warm
greige for dividers, near-black for the dark sections and footer. Layout
favors asymmetric splits and thin 1px dividers over boxed/centered
sections; CTAs are underlined text links rather than filled buttons,
except the pricing tier cards, where the featured tier gets a blush fill.

## Before launch, replace these placeholders

1. **Booking form endpoint** — In `booking.html`, the form posts to
   `https://formspree.io/f/YOUR_FORM_ID`. Create a free form at
   [formspree.io](https://formspree.io) and swap in the real endpoint.
2. **About page bio/photo** — `about.html` has placeholder bio text and a
   placeholder portrait box; replace with a real photo and bio.
3. **Testimonial** — `index.html` has a placeholder testimonial quote.
4. **Travel radius** — `services.html` Premium tier has `[XX] miles` to fill in.
5. **FAQ answers** marked `[Placeholder]` — booking lead time, payment/deposit
   process, and date-change policy should reflect actual policy.
6. **Instagram / WeddingWire links** — footer links on every page currently
   point to `#`; swap in the real profile URLs.
7. **Homepage split-section images** — `index.html` has two more portrait
   placeholder boxes (in the "why couples choose Emma" and pricing teaser
   sections) beyond the About page photo.

## Contact info

The site currently shows email only (`admin@egweds.com`) — no phone number is
displayed, by design. The booking form still asks *couples* for their phone
number so you can call them back; that's separate from a public business
line. If you want a phone number listed later without exposing a personal
cell, a free [Google Voice](https://voice.google.com) number is a common,
zero-cost option — it forwards to your real phone but keeps the number
separate and screenable.

## Deploying

Any static host works (GitHub Pages, Netlify, Vercel, etc.) since there's no
backend — just push the repo and point the host at the root directory.
