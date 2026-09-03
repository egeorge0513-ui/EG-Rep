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

No build step — open `index.html` directly, or serve the folder with any
static file server (e.g. `python3 -m http.server`).

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
