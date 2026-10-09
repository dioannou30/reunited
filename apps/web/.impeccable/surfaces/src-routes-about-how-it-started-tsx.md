---
version: 1
slug: "src-routes-about-how-it-started-tsx"
primary_target: "src/routes/about/how-it-started.tsx"
related_targets: ["src/routes/about/team.tsx"]
---

# Who we are (about section)

Scope: /about/how-it-started (static, Paraglide messages, lorem until the campaign sends text) and /about/team (team members from Payload CMS). Mode: Read.

Audience and job: a visitor who wants to know who is behind the campaign and why, before trusting it enough to sign or join. Proof: the campaign's origin in direct contact with the families; real team members only (none fabricated; empty state until the CMS has entries).

Constraints: inherit the home page world (paper, ink, poster red/green/olive, keffiyeh and tatreez, olive branches); only real motifs; no moving text; el/en/ar with RTL; members may have no photo.

## Direction contract

THESIS: The origin story is a single red embroidery thread stitched down the page, tying each milestone like a knot; it refuses the stock "about us" of a hero photo, a mission paragraph and a team grid floating in white space.

OWN-WORLD: Paper ground, ink type, one red cross-stitch thread (X stitches, poster red) running along the inline-start edge, olive accents for labels, torn-paper frames for photos, monogram badges ringed in red stitches when a member has no photo.

STORY: The visitor reads where the campaign came from in four short stations, understands it grew from contact with the families, then meets the people behind it and can move on to sign.

FIRST VIEWPORT: Large h1 (no eyebrow; the header nav marks the section), short lede; directly below, the thread starts at the inline-start edge and the first station (date label, title, text) sits beside its knot. On mobile the thread runs 1rem from the edge with text beside it.

FORM: Thread timeline, position 3 on the ordered structure list, seed key 13b3b2de.

Signature interaction: the thread is stitched down as the list scrolls into view (CSS scroll-driven scaleY on the stitch line), content always visible; reduced motion and unsupported browsers show the full thread.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

Unresolved: real text and dates for the story; team photos and consent.
