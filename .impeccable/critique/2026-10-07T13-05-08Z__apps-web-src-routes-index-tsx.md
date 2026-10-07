---
target: web app header + hero
total_score: 22
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 3
target_identity: "file:/home/dio/repos/personal/reUnited/apps/web/src/routes/index.tsx"
target_fingerprint: "sha256:db335dfabcf2164a1e67f325cbf85ce3cb9cfb5941fe43cbc4e589b3682bbb20"
target_path: /home/dio/repos/personal/reUnited/apps/web/src/routes/index.tsx
timestamp: 2026-10-07T13-05-08Z
slug: apps-web-src-routes-index-tsx
---
# Critique: ReUnited web app (header + hero, after fixes), live

Method: dual-agent (A: code + mockup + live screenshots; B: detector + live browser at 320/390/1280/1440, el/en/ar)

## Score: 22/32 (69%). Heuristics 7 and 10 scored n/a.
| # | Heuristic | Score |
|---|---|---|
| 1 | Visibility | 3 |
| 2 | Real world | 3 |
| 3 | Control | 3 |
| 4 | Consistency | 3 |
| 5 | Error prevention | 3 |
| 6 | Recognition | 2 |
| 7 | Flexibility | n/a |
| 8 | Aesthetic | 3 |
| 9 | Recovery | 2 |
| 10 | Help | n/a |

## Specificity
Clearly authored, and faithful to the mockup's hierarchy.

Detector:
- CLI: 0 findings.
- Overlay:
  - content-overflow at 320: the CTA label is clipped by 26px (real).
  - layout-property-animation: Mantine internals (probably a false positive).
  - all-caps-body and cream: false positives.

Live checks:
- No overflow at any width.
- No wordmark overlap (92px gap at 1280, 132px at 1440).
- All targets 44px or more.
- Contrast passes AA.
- Logo order in Arabic is correct.
- Favicon returns 200 and there are no 404s.
- Font preload works.
- Skip link works.

## Priority issues
- [P1] Brush underline overshoots the balanced text (it's a box-wide background). Command: typeset.
- [P1] Language switch hidden below 1360px; laptops get the burger. Command: adapt.
- [P1] Drawer opens from the right in /ar (Mantine auto-mirrors, so position should stay right); CTA clipped at 320px. Command: harden.
- [P2] Eyebrow takes 3 lines on mobile; Arabic eyebrow at 12px is too small. Command: typeset.
- [P2] Drawer sign button buried under 11 links; footer has no organisation, contact or privacy. Command: layout.

## Minor
- olive-branch chart reads as a rosette.
- Play icon vs arrow on the secondary CTA.
- "عربي" vs "العربية".
- Placeholder frame contrast is low.
- Language controls are buttons, not links (SEO, open in new tab).
- The lede does not state the injustice (copy decision for owner/PM).
