# Ankit Jain author website

Static Astro 5 site, deployed to GitHub Pages via `.github/workflows/deploy.yml`. The owner doesn't edit code; changes are made through Claude Code. Keep the UX simple and minimal.

## Where things live
- Books: `src/content/books/<slug>.md` (frontmatter = all book data; body = "About the book"). The slug becomes `/books/<slug>`.
  - `theme`: `noir-gold` (Patterns) or `ivory-ink` (Wisdom). New moods go in `src/styles/global.css` (`.t-<name>`) and the enum in `src/content.config.ts`.
  - `authors` order = order shown on the book page (match the cover).
- Reviews: `src/content/reviews/<name>.md`, one per review (`_TEMPLATE.md` shows the format; files starting with `_` are ignored). `book:` picks the book page. No reviews = section hidden. Only add real reviews the owner supplies; show a short excerpt + link to source by default (`showFull: false`).
- Signed copies: each book page has an "Order a signed copy" popup (`src/components/SignedCopyDialog.astro`), sent via Web3Forms; payment/shipping handled offline. Turn off per book with `signedCopies: false`.
- Authors: `src/content/authors/<id>.md`; photos at `public/images/authors/<id>.jpeg`.
- Upcoming ideas: `src/content/upcoming/*.md` (empty = no cards).
- Covers / art: `public/images/books/`. `scripts/optimize-images.mjs` makes .webp copies in `public/images/_opt/` (git-ignored) before dev/build.
- Site name, author-level social links (footer), Web3Forms key: `src/data/site.ts`.
- Book-level social links: `social:` in each book file, shown as "Follow <book>" on its page. Values may be a handle or full URL; `socialHref()` in `src/lib/utils.ts` builds the link.
- `design/`: approved static mockups (Direction B = home). Reference only, not part of the build.

## Rules
- Patterns in the Noise content: educational only, never buy/sell calls (SEBI). Keep the disclaimer.
- Wisdom content: no medical/therapy claims.
- Use `url()` from `src/lib/utils.ts` for internal links (base path support).
- Run: `npm run dev` (port 4321), `npm run build`.

## Publishing
- Repo: github.com/ankit-jain-aj/books (public). Live: https://books.ankit-jain.in (custom domain set in repo Settings → Pages; DNS: CNAME `books` → `ankit-jain-aj.github.io` at Hostinger). Old github.io/books URL redirects there.
- `ankit-jain.in` (root) is reserved for a future hub page; other subdomains (tools., coaching.) for separate sites.
- Every push to `main` rebuilds and publishes via GitHub Actions (~2 min). The workflow reads the address/base path from Pages settings, so a repo rename or custom domain needs no code change.
- Ask the owner before committing/pushing (pushing publishes). Commit email: ankit-jain-aj@users.noreply.github.com.
