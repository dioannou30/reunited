# ReUnited – Technical Decisions

Decisions made so far for the ReUnited campaign website. Solo developer, no designer for now.

Related files in `docs/`:

- [ReUnited_Domi_Kentrikou_Menu (1).docx](<ReUnited_Domi_Kentrikou_Menu (1).docx>): the campaign's menu and page structure. **This is the source of truth for routes.**
- [reunited-site.jpg](reunited-site.jpg): the campaign's homepage mockup, the target visual direction (desktop only).
- [brief-en.md](brief-en.md) / `brief-gr.docx`: the original brief. It is still useful for requirements (accessibility, SEO, CMS needs), but its menu and homepage flow are superseded by the menu doc.
- [devQuestions.md](devQuestions.md): questions for the campaign.
- [reunited-theme.json](reunited-theme.json): Mantine theme for previewing on remoraid.dev.

## Approach

- **CMS-first, single build.** The earlier two-phase plan (landing page first, CMS later) is dropped. The web app and Payload are built together from the start, following the menu doc.
- The landing-page POC artifact is now only a reference for components (timeline, sign card, keffiyeh band): https://claude.ai/artifact/33JRrb6qbP7wVqpS8PUMuD

## Site structure and routes

Source: the menu doc. Every route lives under the locale prefix (`/el`, `/en`, `/ar`). Slugs are in English for every language: simpler routing, trivial `hreflang` pairs, stable QR URLs.

| Menu (Greek) | Route |
| --- | --- |
| **Ποιοι είμαστε** | |
| Πώς ξεκίνησε η πρωτοβουλία | `/about/how-it-started` |
| Η ομάδα | `/about/team` |
| **Το ζήτημα** | |
| Τι είναι η οικογενειακή επανένωση | `/issue/family-reunification` |
| Πού κολλάει η διαδικασία (the doc calls it «Τι θα μπορούσε να γίνει») | `/issue/where-it-stalls` |
| Τι ζητάμε να γίνει | `/issue/our-demands` |
| **Μαρτυρίες** | |
| Στην Ελλάδα | `/testimonies/greece` |
| Στη Γάζα | `/testimonies/gaza` |
| **Η καμπάνια** | |
| Δράσεις | `/campaign/actions` |
| Υπόγραψε | `/campaign/sign` |
| **Πώς μπορείς να βοηθήσεις** | |
| Στήριξε την έκκληση | `/help/support-the-appeal` |
| Πάρε μέρος (the doc says «Συμμετείχε», a grammar error) | `/help/get-involved` |

- Top-level items are menu groups for now, with no page of their own. Waiting on the PM (see devQuestions).
- Legal pages (`/privacy`, `/cookies`) and contact live in the footer.
- The menu itself is defined in code (routes plus Paraglide labels). It can become a Payload `Navigation` global later if editors need to change it.

## Repo, tooling and deployment

- **Monorepo** with pnpm 12 workspaces: `apps/web` (TanStack Start) and `apps/cms` (Payload). No Turborepo.
- **Ports:** web `9510`, cms `9520`.
- **pnpm 12** uses `allowBuilds` in `pnpm-workspace.yaml` (it no longer reads `onlyBuiltDependencies`).
- **Tooling:** Biome for lint and format (`pnpm lint`, `pnpm format`). Generated files are excluded: route tree, Payload types, import map, Payload admin. No tests for now.
- **Each app is its own Vercel project**, pointing at the same repo with a different Root Directory, its own env vars and its own domain (e.g. `reunited.gr` and `cms.reunited.gr`).
- **Deployment:** Vercel Git integration only. A push to `main` deploys to production. No GitHub Actions.
- **Error monitoring:** none.

## Frontend (`apps/web`)

- **TanStack Start** (React + TypeScript), SSR. Pages are cached at the edge (`Cache-Control: s-maxage` + `stale-while-revalidate`) to handle spikes from QR codes and social media.
- **nitro** builds the deployment output. The Vercel preset is detected automatically; `node .output/server/index.mjs` runs it locally.
- **Mantine 9.** The theme is in `src/theme.ts`.
- **TanStack Query**, integrated with the router through `@tanstack/react-router-ssr-query`.
  - Route loaders call `queryClient.ensureQueryData(...)`, and components read the data with `useSuspenseQuery`.
  - Mutations (forms) use `useMutation` calling Start server functions.
- **Content comes from Payload** over REST, typed with the generated `payload-types.ts`. UI chrome text (labels, aria, buttons) stays in Paraglide.

## Internationalisation

- **Paraglide JS:** compile-time, type-safe messages.
  - Base locale `el`, plus `en` and `ar`.
  - Locale strategy: URL first, then cookie, then browser language, then `el`.
- **The language is part of the URL** (`/el/...`, `/en/...`, `/ar/...`). This gives shareable URLs per language, `hreflang` tags and correct social previews.
- **`lang` and `dir` are set on `<html>` per locale.** Arabic renders RTL, and Mantine's `DirectionProvider` handles RTL inside components. Greek uppercase text drops accents correctly thanks to `lang`.
- **Use CSS logical properties** from day one, so RTL needs no rework.
- **All static text is a Paraglide message**, UI labels and page copy alike (decided 2026-10-09). The home page keys are `home_hero_*`, `home_yes_*` and `home_quote_*` in `apps/web/messages/{el,en,ar}.json`. Translations for CMS content (events etc.) will be handled when that content exists.
- **Arabic is wired in the infrastructure.** Whether it launches with content depends on the campaign providing translations.

## CMS (`apps/cms`)

- **Payload 3** (MIT, self-hosted), chosen over Strapi because:
  - the schema is TypeScript code kept in git
  - it generates types for the frontend
  - access control is code-level, down to fields and documents
  - drafts, versions and localization are all free
  - it can run on Vercel for free
- **Runs as a separate Next.js app.** Built from Payload's official `blank` template, with the template's frontend, tests, lint and Docker files removed. `/` redirects to `/admin`.
- **Localization:** `el` (default), `en`, `ar` (RTL), with fallback to `el`.
- **Database:** PostgreSQL via `@payloadcms/db-postgres`. Host: Neon (scales to zero, built-in restore). Local development needs a Postgres `DATABASE_URL`.
- **File storage:** Cloudflare R2 through `@payloadcms/storage-s3`. It is only enabled when `S3_BUCKET` is set; otherwise files go to local disk.
- **CORS/CSRF** allow `WEB_URL`.
- **Plugins:**
  - wired: **form builder** (for "Πάρε μέρος", the get-involved form)
  - deferred until content collections exist: **SEO**, **search**, **redirects** (it refuses an empty collection list)
- **Roles are defined in code.** Dimitri creates the admin and editor accounts.
- **The CMS does not hold static page text.** It is for dynamic content such as events. Static pages (the home page included) use Paraglide messages; anything that later needs editing in the CMS moves there case by case.
- **Team members (built):** `team-members` collection (name, role, short bio, optional photo, order; text fields localized). The web reads it in the `/about/team` loader with `?locale=`. While `CMS_URL` is not set, the page shows six obviously fictional mock members from `apps/web/src/cms/team.mock.ts` so the design can be shown on Vercel. Remove the mock fallback before launch.
- **Planned content model** (derived from the menu doc, to be confirmed):
  - `Pages`: static subpages such as how it started and what we ask for
  - `TeamMembers`
  - `Testimonies`: `region: greece | gaza`, pseudonym, consent status, YouTube URL, transcript
  - `ExpertContributions`: lawyers and experts in "Τι είναι η οικογενειακή επανένωση"
  - `Actions`: events and campaign news
  - globals: `Petition` (appeal text, petition URL) and `SiteSettings` (social links, email, donation toggle)

## Integrations

- **Videos:** YouTube embeds, with subtitles on YouTube and a transcript field in the CMS.
- **Petition:** most likely an external platform. The petition URL comes from the CMS.
- **Donations:** not enabled. The architecture is a `donationUrl` field plus an on/off toggle in `SiteSettings`. Which provider depends on the campaign's legal entity.
- **Spam protection:** Cloudflare Turnstile, added with the first public form.
- **Analytics:** Umami (cookieless). It needs a site ID before it can be wired.
- **Fonts:** self-hosted with `@fontsource-variable` (Commissioner, Noto Sans, Noto Sans Arabic). No Google CDN, for GDPR reasons.
- **Purchases** (domain, hosting): made by the campaign itself, so it owns the accounts. The domain must be bought early because printed QR codes depend on it.

## SEO

- Per-route `head()`: title, description, canonical URL.
- Open Graph and Twitter card tags on every page.
- `hreflang` alternates for `el`/`en`/`ar` plus `x-default`.
- `sitemap.xml` with language alternates, and `robots.txt`.
- JSON-LD structured data: Organization/NGO, Event, Article.
- Semantic HTML and a fast LCP, since visitors arrive on mobile.

## Visual identity and theme

- **Target direction:** the campaign mockup `reunited-site.jpg`.
  - brush "ReUnited" wordmark
  - keffiyeh side borders
  - torn-paper photo edges
  - olive branches and handwritten headings
  - nav with dropdowns, a red "ΥΠΟΓΡΑΨΕ" pill, ΕΛ/EN/عربي and search
- **Previous palette presentation:** https://claude.ai/artifact/ExeKXvueSumorUvJTQr5qk

### Colours (in `apps/web/src/theme.ts`)

| Role | Hex |
| --- | --- |
| Poster red: sign CTA, key highlights | `#BE231C` |
| Poster green: links, form controls | `#0B5A30` |
| Ink: text | `#0B0D09` |
| Paper: page background | `#F1EADA` |
| Olive: quiet accents | `#4F5733` |

- **Mantine `primaryColor`: `green`.** Red is applied explicitly to the sign CTA only, because a red primary colour would make form controls look like errors.
- Every text/background pair passes WCAG AA.

### Typography (under review)

- **Installed for now:** Commissioner for headings, Noto Sans for body, Noto Sans Arabic.
- **Logo:** the "ReUnited" lettering is used as an SVG of the original artwork. A vector or high-res source is needed from the campaign.
- **Handwriting:** the free Greek handwriting fonts (Playpen Sans + Playpen Sans Arabic, Mansalva) were rejected as too "comic". Still open (see below).

### Side patterns (keffiyeh and tatreez)

- **Decided: tileable SVG strips**, repeated vertically as two `body` background layers (left and right) and recoloured through `mask` with theme colours. They weigh 1–3 KB and stay sharp at any DPI.
- On mobile the side borders are replaced by a horizontal band, the 44px ink band with the net pattern and red borders that Dimitri likes.
- **Only real traditional motifs, never invented ones.**
  - Keffiyeh fishnet, plus tatreez (Palestinian cross-stitch) motifs identified by name and region.
  - Cross-stitch is grid-based, so each motif is encoded as a stitch grid and rendered to SVG, with slight per-stitch irregularity so it looks hand-sewn.
  - The provenance of each motif is documented in [motifs.md](motifs.md). Preferred source: Tirazain, which allows website use with attribution.
- The mockup's illustrations (olive branches, birds, torn paper, sepia town) still need a source: an illustrator, licensed assets, or SVG drawn by us.

## Greek copy

- Greek copy is fixed directly, without waiting for the PM:
  - "Τι θα μπορούσε να γίνει" becomes "Πού κολλάει η διαδικασία", to match its description.
  - "Συμμετείχε" becomes "Πάρε μέρος".
  - The third home point "Ανοίγει στην πλατφόρμα / Η φωνή σου μετράει" becomes "Μαζί έχουμε φωνή / Κάθε υπογραφή δυναμώνει την πίεση στα υπουργεία." (Dimitri's choice, 2026-10-08), with matching English and Arabic.

## Still open (asked the PM)

- The documents library is missing from the menu: where does it go?
- Contact and news: are they in the footer and in "Δράσεις"?
- "Υπόγραψε" appears twice in the menu: one page or two?
- Do top-level menu items get their own pages?
- The mockup photo looks AI-generated: real photos with consent, or illustration?
- Handwriting for display text. Options:
  - custom SVG lettering for fixed headlines
  - paid fonts: George Bourle "Theologos" brush (Latin + Greek, OTF/TTF, web licence €78) and 29LT Massira (Arabic, Ruqaa-based protest-graffiti hand; Pen/TippEx/Lipstick/Spray at €25 each or €70 for the bundle; rentable on Fontstand for testing)
  - a font made from a campaign member's handwriting
- Which tatreez motifs and regions the campaign prefers.
- A mobile version of the mockup.
- Does Arabic launch with content?
- Backups: Neon restore plus occasional dumps for the database, and R2 for media.
