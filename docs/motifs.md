# Side patterns: traditional motifs research

Rule: **only real traditional motifs, never invented shapes.** Every motif used on the site is listed here with its name, origin and the source it was charted from.

## What the mockup shows

- **Left edge:** keffiyeh **fishnet**, a black lattice with dots.
- **Right edge:** **tatreez** (Palestinian cross-stitch): red and green X stitches in toothed and zigzag borders.

## Shortlist

| Motif | Arabic | Type | Origin | Meaning / notes | Use on the site |
| --- | --- | --- | --- | --- | --- |
| Fishnet | شبكة الصياد | Keffiyeh weave | Keffiyeh (pan-Palestinian) | Connection to the sea; collectivism | Left border |
| Olive leaves | ورق الزيتون | Keffiyeh border | Keffiyeh | Resilience, attachment to the land | Edge of the left border |
| Bold lines | — | Keffiyeh border | Keffiyeh | Trade routes (some read them as walls) | Optional thin rule |
| **Old Man's Teeth** | سنان العجوز (snan el-ajouz) | Tatreez border | **Used in all regions of Palestine** | Classic border that frames tatreez panels | Right border, frame |
| Cypress tree | السرو | Tatreez motif | Popular across regions, strongly associated with Ramallah | Longevity, resilience, stability | Right border, repeated vertically between the borders |
| Moon of Bethlehem | قمر بيت لحم | Tatreez motif | Bethlehem | Guidance, spirituality | Optional accent, not for the borders |

**Proposal:**

- **Left border:** fishnet with olive leaves along its edge. This is the keffiyeh, which belongs to all Palestinians.
- **Right border:** a cypress repeat framed by Old Man's Teeth on both sides, in red and green on the paper background.

Both borders use motifs that are national rather than tied to one village. That's the safest choice for a campaign that speaks for families from many places. If the campaign wants a specific region, swap in that region's motifs.

## Sources and licensing

The motifs themselves are traditional heritage. A specific **chart** (the stitch grid someone drew), however, can be protected. So each SVG is charted from a named source, credited, and the source's terms are respected.

| Source | What it has | Terms |
| --- | --- | --- |
| [Tirazain](https://tirazain.com/) | 1,000+ traditional motifs digitised from books, journals and photos (incl. Sliman Mansour and Nabil Anani's village research). Searchable by origin and topic. Grid images and editable files. | **Website use allowed with attribution**: "Illustration from Tirazain" next to the asset, linking to tirazain.com. Redistributing the archive is prohibited. Commercial use isn't stated; the campaign is non-profit. **Preferred source.** Email them for written permission to be safe. |
| [Tatreez Traditions motif library](https://www.tatreeztraditions.com/motif-library/border-motifs) | Border motifs incl. Old Man's Teeth and Baker's Wife, with grids and locations (PDF) | "Personal, educational, and non-commercial use only. Not for sale or profit." Use for reference only. |
| [The Palestinian Museum collections](https://www.palmuseum.org/en/collections/collections/tatreez-pattern-0) | Original pattern samplers (e.g. a cypress sampler on etamine) | Reference for checking authenticity |
| [The Tatreez Archive](https://tatreezarchive.org/) | A community motif database | Reference |

## Build approach (decided)

1. Pick the exact chart for each motif on Tirazain, and save the grid image to `docs/motifs/` with its source URL.
2. Transcribe the grid into a stitch matrix (`apps/web/src/motifs/*.ts`): one row of cells per line, `1` = stitch, plus a colour per cell.
3. A small build script renders the matrix to a tileable SVG. Each stitch is an `X`, with a tiny random offset and rotation so it reads as hand-sewn. Output is 1–3 KB.
4. Apply it as two `body` background layers (`repeat-y`, left and right), recoloured through `mask` with theme colours. On mobile, replace the side borders with the horizontal band.
5. Credit it in the footer: "Tatreez motifs: Illustration from Tirazain" plus a link.

## Implemented

Tatreez charts were extracted from the Tirazain chart images. The stitch matrices are in `apps/web/scripts/motifs/charts.mjs`, along with each source's URL.

| Motif | Tirazain entry |
| --- | --- |
| Snan Al Ajouz / Old Man's Teeth (all areas) | https://tirazain.com/archive/p/lily-f5j49-2ydlp-jkdr3-7xj63 |
| Sarwa / Cypress Tree Gaza (1) | https://tirazain.com/archive/p/lily-f5j49-2ydlp-jkdr3-x32jf |
| Irq Al Zaytoun / Olive Branch (1) (all areas) | https://tirazain.com/archive/p/lily-f5j49-2ydlp-jkdr3-66k56 |

- **Right border:** Cypress Tree (Gaza) in green and red, framed by Old Man's Teeth in red on both sides.
- **Left border:** the **keffiyeh**: bold lines on the outer edge, then a row of olive leaves, then the fishnet with its beads, all in ink. Because the keffiyeh is **woven** rather than embroidered, it's drawn procedurally with solid lines, not X stitches. Reference: the Hirbawi black-and-white kufiya from Hebron, the last keffiyeh factory in Palestine (https://hirbawiusa.com/products/black-and-white). An earlier version used tatreez's "Al Shbak / The Net" here, which was dropped because it isn't the keffiyeh.
- **Olive Branch:** rendered as a standalone SVG for later use as a decoration (the mockup's olive branch).
- `pnpm --filter web motifs` regenerates the SVGs into `apps/web/public/motifs/` (about 3.6–4.6 KB each, gzipped). Each stitch is drawn as an X with seeded jitter, so the output is stable between builds.
- Applied in `src/styles/global.css` as two `body` background layers, from 62em (desktop) up only. The credit sits in the footer.
- The Tirazain chart images are **not** committed (their terms prohibit redistributing the archive). Only our transcription and the source links are.

## To do

- [ ] Mobile: horizontal band instead of side borders.
- [ ] Licensing and permission with Tirazain (Dimitri).
