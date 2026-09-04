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
- `assets/fonts/` — Self-hosted GFS Didot, Archivo, Cormorant Garamond italic
  (no Google Fonts CDN dependency)
- `assets/img/hero-lily.jpg` — Hero background photo

No build step — open `index.html` directly, or serve the folder with any
static file server (e.g. `python3 -m http.server`).

## Design system

Vogue-inspired editorial look: `GFS Didot` for headlines (uppercase, wide
letter-spacing, single weight) paired with `Archivo` for nav/labels/body
copy, both self-hosted as local `.woff2` files (no external font CDN).
`Cormorant Garamond` italic is also self-hosted (`--font-quote`) for
editorial pull-quotes, but nothing currently uses it — the homepage
testimonial section it was added for was later removed.
Palette is ivory/black/white/cream — near-black (`#0b0b0a`) for all text,
blush pink (`#efcfd9`) as the one interactive accent color (hover states,
the Book Now nav item, the featured pricing tier fill), warm cream/greige
for dividers. Leaf green (`#4a5a3c`) is defined as a CSS variable
(`--color-green`) but currently unused — reserved only for small non-text
accents if ever needed, never for headlines/nav/body text. Layout favors
asymmetric splits and thin 1px dividers over boxed/centered sections;
CTAs are underlined text links rather than filled buttons, except the
pricing tier cards, where the featured tier gets a blush fill. The hero
photo has a bottom-heavy dark gradient with bottom-right-aligned white text.

## Before launch, replace these placeholders

1. **Booking form endpoint** — In `booking.html`, the form posts to
   `https://formspree.io/f/YOUR_FORM_ID`. Create a free form at
   [formspree.io](https://formspree.io) and swap in the real endpoint.
2. **About page bio/photo** — `about.html` has placeholder bio text; the
   headshot thumbnail is a low-resolution placeholder (172×186px source) —
   swap in a higher-res photo when available.
3. **Travel radius** — `services.html` Premium tier has `[XX] miles` to fill in.
4. **FAQ answers** marked `[Placeholder]` — booking lead time, payment/deposit
   process, and date-change policy should reflect actual policy.

The footer is intentionally minimal (brand, tagline, contact email, copyright)
with no nav links or social links — add those back in `site-footer` across
all 5 HTML files if wanted later.

## Contact info

The site currently shows email only (`admin@egweds.com`) — no phone number is
displayed, by design. The booking form still asks *couples* for their phone
number so you can call them back; that's separate from a public business
line. If you want a phone number listed later without exposing a personal
cell, a free [Google Voice](https://voice.google.com) number is a common,
zero-cost option — it forwards to your real phone but keeps the number
separate and screenable.

## Password gate

The whole site is currently behind a client-side password screen
(password: `lily`, set in `assets/js/main.js` as `SITE_GATE_PASSWORD`).
**This is not real security** — the password is visible to anyone who
views the page source or network requests, since GitHub Pages' free tier
has no server-side auth. It's meant only to keep casual visitors out
while the site is still in progress.

- To change the password: edit `SITE_GATE_PASSWORD` in `assets/js/main.js`.
- To remove the gate entirely: delete the `#site-gate` block from the top
  of `<body>` in each HTML file, the inline unlock-check `<script>` in
  each `<head>`, the "Site password gate" CSS block at the end of
  `style.css`, and the gate-handling code at the top of `main.js`.
- Once entered, the password is remembered via `localStorage` (per
  browser), so returning visitors won't be asked again on that device.

## Deploying

Any static host works (GitHub Pages, Netlify, Vercel, etc.) since there's no
backend — just push the repo and point the host at the root directory.
