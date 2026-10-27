# MAX — Design System

The design system for **MAX**, a Brazilian mobile banking / payments app (the product is built in **Flutter**). This system was extracted from the team's living visual+behavior guide (`max-design-system-versao25.html`, kept in `uploads/`) and re-expressed as compiler-readable tokens, React primitives, and documentation cards so other projects can design against the MAX brand.

> MAX is a **dark-only**, mobile-first product. Everything starts on pure black `#000`. The palette is deliberately sober: deep blacks for background, a scale of transparent whites for everything neutral (cards, borders, text), and semantic color (purple / green / red / amber) that appears **only when it carries meaning**. The facelift this system documents is aesthetic standardization — the functional components (buttons, inputs, modals) are unchanged.

**Source of truth:** `uploads/max-design-system-versao25.html` — the original interactive doc (identity, backgrounds, colors, type, spacing, borders, effects, feedback, principles, icons, inputs, buttons, cards, lists, modals/sheets, menu, PIN, animations, app screens). Open it for any detail not captured here.

---

## Content fundamentals

- **Language:** Portuguese (Brazil). UI copy is concise and direct — `R$ 4.580,00`, `Nome da Tela`, `Em análise`, `Pix copiado`.
- **Tone:** calm, plain, trustworthy. No exclamation, no hype, no emoji. Financial clarity over personality.
- **Casing:** sentence case for body and titles. UPPERCASE only for small section **labels** (`.t-label`, 12px, +0.5px tracking) — e.g. `SALDO DA CONTA`, `NOME COMPLETO`.
- **Numbers:** Brazilian formatting — `R$` prefix, `.` thousands, `,` decimals. Values are the loudest element on a screen (Display, 32px/300).
- **Microcopy examples:** `Operação concluída`, `MED em andamento`, `Aguarde até 80 dias para conclusão do processo.`, `Envie áudio, foto ou digite sua mensagem`.

## Visual foundations

- **Background:** always pure `#000`. The only overlay is `--ambient` — a subtle purple radial glow at the top of a screen (home, splash, onboarding). Bottom sheets use translucent navy `rgba(14,8,24,.96)` and *require* blur.
- **Color:** neutral = transparent whites. Semantic green = credit/success, red = error/loss, amber = attention/pending, purple = brand accent. **Purple is never used on buttons** — only accents (active tab, filled PIN, ambient glow). Primary CTAs are always white.
- **Type:** Inter, single family. Restricted scale **12 / 14 / 16 / 24 / 32**. Weights 300 (display), 400, 500, 600. 14px is reserved for dense lists. JetBrains Mono appears only in code/spec readouts, never in the app UI.
- **Spacing:** 8-point scale (8→48). Standard horizontal screen padding is 20px (the one exception to the scale).
- **Borders:** **always `0.5px solid`** on cards, lists, inputs, buttons, separators — borders delimit without shouting. `1px` is allowed in exactly two places, where the border carries meaning: semantic banners (warning/info) and the chat receipt card (solid purple).
- **Radii:** 8 (chips/small), 16 (cards, inputs, buttons, list groups), 24 (sheet tops, centered modal, chat input, toast), pill (avatars, circular close, status badges).
- **Surfaces / cards:** frosted — `rgba(255,255,255,.04)` fill + `0.5px` border + `backdrop-filter: blur(20px)`, radius 16. The hero card adds a soft purple ambient glow.
- **Blur:** 12px (light — back button, modal close), 20px (default — balance, hero, voice, toasts), 32px (strong — tab bar, bottom sheets).
- **Motion:** short (.12s–.32s). Easings: `cubic-bezier(.4,0,.2,1)` (iOS default / toggles / sheets), `cubic-bezier(.32,.72,0,1)` (centered modal + side menu), `ease-in-out` (waveforms). **Press feedback** = `transform: scale(.92)` + a slightly darker/lighter background; **hover** (web/desktop) brightens the fill. No bounces, no decorative loops.
- **Active-tab glow:** the signature motif — `box-shadow: 0 0 20px rgba(155,106,250,.25)` plus a small blurred purple bar above the active tab.

## Iconography

- **Two sets.** (1) **Custom MAX icons** — filled, white, drawn specifically for brand functions (statement Entrada/Saída, Pix Automático, etc.); they preserve the brand identity. (2) A **stroked library** for everything else (lists, menus, actions): feather/Lucide-style, `stroke-width: 1.5–1.8`, `stroke-linecap/linejoin: round`, `currentColor` stroke, typically 20–24px.
- **No emoji, ever.** No unicode glyphs as icons.
- **Where to get them:** the custom icons live as inline SVGs in `uploads/max-design-system-versao25.html` (search "Customizados do MAX") — copy the exact SVG when you need one. For general UI icons, use [Lucide](https://lucide.dev) (the closest match to MAX's stroked set) — **substitution flagged** since the app's general set isn't shipped as standalone files. Match weight 1.5–1.8 and round caps.
- Icons inherit color from text (`stroke="currentColor"`), so they pick up the surrounding text-opacity level automatically.

---

## Index / manifest

**Root**
- `styles.css` — global entry point (consumers link this). `@import`s only.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `radii.css`, `effects.css`, `base.css`.
- `assets/` — `max-wordmark-white.svg`, `max-symbol-white.svg`.
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand).
- `uploads/max-design-system-versao25.html` — original source doc.

**Components** (`components/<group>/` — React primitive + `.d.ts` + `.prompt.md` + card)
- `buttons/` — **Button** (primary/secondary/card/ghost × compact/default/extra), **IconButton** (plain/boxed)
- `forms/` — **Input**, **Textarea**, **Switch**
- `surfaces/` — **Card** (generic/hero/receipt)
- `feedback/` — **Toast**, **Banner** (success/warning/error/info), **StatusPill**
- `lists/` — **ListGroup**, **ListItem**, **InfoRow**
- `navigation/` — **TabBar**
- `misc/` — **PinDots**

**UI kit** (`ui_kits/max-app/`) — interactive recreation of core MAX app screens.

Mount components from `window.DesignSystem_4b19a9` after loading `_ds_bundle.js` (generated). Example in any component's card HTML.

> **Fonts note:** Inter and JetBrains Mono load from Google Fonts (`tokens/fonts.css`). If you need them self-hosted, drop the files in and swap to `@font-face`.
