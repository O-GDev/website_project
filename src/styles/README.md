# Styles Architecture

This app's styling is intentionally layered. No jQuery, no PHP, and no
unused vendor files live anywhere in this project.

## How styles are loaded

### 1. Vendor / framework stylesheets (`public/assets/css/`)
These are third-party and load as static `<link>` tags from `index.html`
BEFORE the React bundle so their rules participate in the normal cascade:

| File | Purpose |
|------|---------|
| `bootstrap/core.css` … `bootstrap/utilities.css` | **Bootstrap 5.x, split into 8 logical modules** (`core, grid, tables, forms, buttons, nav, modal-carousel, utilities`). Split of the original single `bootstrap.css` (10,906 lines); loaded in the *same order* as the original, so the cascade is unchanged. Reassembly is byte-identical |
| `font-awesome-all.css` | Icon font — **trimmed to the 12 icons this app uses** (8,003 → 134 lines). Base classes + `@font-face` were preserved verbatim |
| `flaticon_kaizenbank.css` | Brand icon font |
| `owl.css` | Carousel base styles |
| `nice-select.css` | Custom `<select>` styling |

> `animate.css` was removed entirely after an audit: no page/component
> references any `animated`/`wow`/`data-animate` class (the jQuery template
> used to drive those; the React port does not).
> Vendor originals are recoverable from git:
> - `git checkout HEAD -- public/assets/css/bootstrap.css`
> - `git checkout HEAD -- public/assets/css/font-awesome-all.css`
> - `git checkout HEAD -- public/assets/css/animate.css`
> Vendor files are imported once, globally, in `index.html`. Do not hand-edit.

### 2. Authored / theme stylesheets (`src/styles/`)
This is the site's own CSS. It is imported by `src/styles/index.css`, which is
pulled in from `src/main.jsx` and bundled by Vite into the production CSS file.
**The `@import` order in `index.css` IS the cascade order** — keep it:

| Import | File | Lines | What it contains |
|--------|------|------:|------------------|
| `@import 1` | `variables.css` | 20 | Theme tokens: `--theme-color`, `--secondary-color`, `--text-color`, `--title-color` |
| `@import 2` | `globals.css` | 677 | Reset, global settings, preloader, buttons, pagination, scroll-to-top |
| `@import 3` | `utilities.css` | 4,415 | Elpath helper classes (`b_*`, `m_*`, `p_*`, `color_*`, flex helpers) |
| `@import 4` | `layout/header.css` | 1,385 | Main header, search popup, header-top, side-panel, nav menu, mobile menu |
| `@import 5` | `layout/footer.css` | 361 | Main footer |
| `@import 6` | `sections/home.css` | 2,628 | Banner + homepage sections (Index 1) |
| `@import 7` | `sections/home2.css` | 2,052 | Banner/hero + sections for `Index_2` |
| `@import 8` | `sections/home3.css` | 710 | Banner/hero + testimonials for `Index_3` |
| `@import 9` | `sections/home4.css` | 806 | Banner/hero + investment + instant sections for `Index_4` |
| `@import 10` | `sections/pages.css` | 1,214 | Page title, overview, features, documents, performance, cards, card details |
| `@import 11` | `sections/about.css` | 909 | About, statements, choose-us, team details |
| `@import 12` | `sections/careers.css` | 519 | Careers + career details |
| `@import 13` | `sections/error.css` | 989 | 404 error page |
| `@import 14` | `sections/forms.css` | 711 | Appointment, corporate, branches, contact, support |
| `@import 15` | `sections/brand.css` | 124 | Kaizen logo sizing + partners styles |
| `@import 16` | `responsive.css` | 1,656 | Breakpoint overrides — **MUST stay last** |

> The section files were extracted byte-for-byte from the original monolithic
> `style.css` by its `/** section **/` markers. Relative image URLs were
> rewritten once from `url(../images/...)` to absolute `url(/assets/images/...)`
> because the files now live in `src/styles/` — those images are served from
> `public/assets/images/`.

### 3. Component-scoped React styles
Component-specific CSS is imported *inside* the owning component and bundled
by Vite:

| Component | CSS file |
|-----------|----------|
| `components/ui/Lightbox.jsx` | `components/ui/Lightbox.css` |
| `pages/ContactPage.jsx` | `pages/ContactPage.css` |

`src/index.css` only contains the Tailwind directives.

## Editing guidance

- **Add a new section** → append a new `/** my-section **/` block to the
  matching file in `src/styles/sections/` (or add a new file + `@import`).
- **Change theme colors** → edit `src/styles/variables.css`.
- **Component-specific React styles** → create a `.css` next to the component
  and `import './X.css'` inside it.
- **Removing styles** → first confirm no JSX / dynamic class name / other CSS
  references the selector. `responsive.css` may reference selectors from any
  section file — grep before deleting.
- **Never import `src/styles` files through `index.html`** — they are bundled
  and ordered by `src/styles/index.css`.