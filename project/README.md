# The Azure Phuket — Design System

**The Azure Phuket** is a luxury villa and wellness platform set in Phuket, Thailand. The brand targets affluent travellers seeking private villa stays, curated wellness programming, and five-star concierge experiences. Products span a marketing website, a guest mobile app (with Apple Watch companion), and physical brand collateral (packaging, uniforms, signage).

## Sources

| Source | Path / Reference |
|---|---|
| GitHub codebase | `BearyCenter/Challenge` (main branch) — `index.html`, `styles.css`, `design-system.md`, SVGs |
| Brand moodboard | `assets/images/brand-moodboard.jpg` |
| Photography | `assets/images/phuket1.png` – `phuket6.png` |
| Logo monogram | `assets/logo.svg` |
| Full wordmark | `assets/logo_full.svg` |
| Key visual preview | `assets/azure-key-preview.svg` |

> The GitHub repo is public at https://github.com/BearyCenter/Challenge

---

## CONTENT FUNDAMENTALS

### Tone & Voice
The Azure Phuket writes in a **calm, assured, first-person plural luxury voice** — like a private concierge, never a salesperson. Copy is evocative and short; it trusts imagery to carry weight.

**Key traits:**
- **Elegant restraint** — sentences are short; no hyperbole ("amazing", "incredible"). Let nouns do the work ("dusk villa", "lemongrass ritual").
- **Warmth without familiarity** — addresses the reader as *you* ("Your private infinity pool awaits"), never as "guys" or first-name only.
- **Sensory anchoring** — copy anchors experience in smell, light, temperature: "warm teak underfoot", "the salt air at dusk".
- **No emoji.** Ever. Not even in app copy.
- **Title Case for section labels, eyebrows, and navigation.** Sentence case for body and CTAs.
- **CTAs are declarative, not imperative** — "Reserve Your Villa" not "Click Here".
- **Numbers** are written as numerals (5 villas, not "five villas") in UI; spelled out in long editorial copy.

### Example Copy
> *"Step into a world where every detail is considered — where the jungle meets the Andaman Sea, and no request goes unanswered."*

> *"Sunset luxury for private villa escapes."* — Billboard copy, Phuket

> *"Wellness Dashboard — Personal Training · Spa · Herat Cycling · Chrion try"* — App module labels (short, noun-first)

### Casing Rules
- Navigation: Title Case
- Eyebrows / kickers: ALL CAPS, tracked wide
- Headings: Title Case or Sentence case (display font handles the elegance)
- Buttons: Title Case
- Body: Sentence case

---

## VISUAL FOUNDATIONS

### Colors
Six brand tokens — see `colors_and_type.css` for full CSS variable definitions.

| Token | Hex | Role |
|---|---|---|
| Dusk Gold | `#D4AF37` | CTAs, active states, premium highlights |
| Evening Lilac | `#DCD0FF` | Soft glow, shimmer, wellness surface tints |
| Sea Glass | `#AFEEEE` | Wellness modules, concierge freshness |
| Azure Navy | `#1D2340` | Logo, headline ink, navigation |
| Midnight Ink | `#111522` | Hero overlays, villa-night storytelling |
| Cloud Ivory | `#F8F6F1` | Primary light background, reading surface |

Supporting: `Paper (#FFFDF9)`, `Ink Soft (#5F6478)` for secondary body text.

### Typography
- **Display / Serif**: `Cormorant Garamond` — used for all headings, hero titles, editorial moments. Weight 500 (medium). Line height ~0.95 for display; ~1.3 for subheadings.
- **Body / Sans**: `Manrope` — clean geometric humanist. Used for all UI, captions, labels, buttons. Weight 400/700.
- Fallback stack: display → `Iowan Old Style`, `Palatino Linotype`, serif; body → `Aptos`, `Segoe UI`, sans-serif.
- **Google Fonts substitution**: Both `Cormorant Garamond` and `Manrope` are available on Google Fonts — no custom font files are needed.

### Spacing Scale
Spacing uses a base-4 scale: `0.5rem`, `0.75rem`, `1rem`, `1.25rem`, `1.5rem`, `2rem`, `2.5rem`, `3rem`. Max content width: `1240px`.

### Backgrounds
- **Dark hero layer**: `linear-gradient(135deg, rgba(17,21,34,.98), rgba(29,35,64,.94) 44%, rgba(92,74,108,.78) 72%, rgba(248,246,241,.2))` with radial gold and lilac shimmer overlays.
- **Light sections**: `rgba(255,255,255,0.78)` glass panels on top of an ivory base.
- **Page body**: multi-stop gradient from `#1a1d2b` → `#f8f6f1` — cinematic at top, clean at bottom.
- Full-bleed photography is used extensively in hero sections and villa cards. Imagery is warm, golden-hour or twilight-toned, never flat or clinical.

### Borders & Radius
- `--radius-xl: 34px` — hero sections, major cards
- `--radius-lg: 26px` — glass panels, swatches, info cards
- `--radius-pill: 999px` — all buttons
- Border: `1px solid rgba(29,35,64,.10)` on light; `1px solid rgba(255,255,255,.14)` on dark

### Shadows
- **Standard**: `0 24px 64px rgba(17,21,34,.12)`
- **Dark / cinematic**: `0 32px 84px rgba(9,11,22,.38)`

### Glass / Backdrop Blur
`backdrop-filter: blur(16px)` is used on hero cards and overlaid panels. Glass-morphism is a key visual motif — frosted panels over dark imagery.

### Hover & Press States
- Buttons: opacity nudge (0.88) + slight scale(0.98) on press
- Cards: subtle `box-shadow` expansion, no color change
- Navigation links: gold underline on hover
- No harsh background swaps; transitions are `200ms ease`

### Animations
- Prefer slow, graceful fades (`opacity`, `transform: translateY`) — nothing bouncy
- Easing: `cubic-bezier(0.25, 0.46, 0.45, 0.94)` (ease-out)
- Hero imagery uses parallax scroll where possible
- No spin or pop animations; everything should feel like silk

### Imagery
- Warm, slightly moody; golden hour and blue-dusk tones dominate
- Full-bleed, cinematic aspect ratios (16:9, 21:9)
- Subjects: infinity pools, tropical foliage, interior wood tones, wellness spaces, happy guests
- Always high-quality; no stock-photo flatness
- A four-pointed star watermark (`✦`) appears subtly in corner of brand photography

### Iconography
See ICONOGRAPHY section below.

### Cards
- Light cards: `background: rgba(255,255,255,0.82)`, `border-radius: 26px`, standard shadow
- Dark/navy cards: `background: linear-gradient(180deg, #111522, #1D2340)`, white text
- Featured/shimmer cards: lilac/sea-glass gradient overlay

---

## ICONOGRAPHY

- **No proprietary icon font** in the codebase. The GitHub source uses no icon library.
- The moodboard app UI shows **line-style icons** (thin, 1.5px stroke) for wellness categories: personal training, spa, cycling — consistent with a system like **Lucide Icons** or similar geometric line set.
- **Recommendation**: Use Lucide Icons (CDN: `https://unpkg.com/lucide@latest`) — thin stroke, geometric, pairs well with Manrope. Stroke width 1.5px, never filled.
- The **AP monogram** (interlocking A and P with a diagonal slash) is the primary compact icon, used for: favicon, app icon, watch face, dark overlays, merchandise stamps.
- No emoji in UI. Unicode `✦` (four-pointed star) is used as a photographic watermark only.
- Navigation uses text links, not icon-only buttons at desktop scale.

---

## FILE INDEX & MANIFEST

```
README.md                   ← This file
SKILL.md                    ← Agent skill definition
colors_and_type.css         ← All CSS custom properties
assets/
  logo.svg                  ← AP monogram (dark, use inverted on dark bg)
  logo_full.svg             ← Full wordmark
  azure-key-preview.svg     ← Key visual / brand illustration
  images/
    phuket1–6.png           ← Brand photography (villa, spa, dining, beach)
    brand-moodboard.jpg     ← Full brand moodboard with app UI, colors, logo
preview/                    ← Design system card previews (registered in asset review)
ui_kits/
  website/                  ← Hotel marketing website UI kit
    index.html              ← Interactive website prototype
    Header.jsx
    HeroSection.jsx
    VillaCard.jsx
    BookingBar.jsx
    Footer.jsx
```
