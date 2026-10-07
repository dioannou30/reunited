---
target: web app header + hero
total_score: 23
max_score: 36
na_heuristics: 10
p0_count: 0
p1_count: 3
target_identity: "file:/home/dio/repos/personal/reUnited/apps/web/src/routes/index.tsx"
target_fingerprint: "sha256:e9230e25abfa43102002f06053ed80d2816cf14e276029784f877b381d1b165c"
target_path: /home/dio/repos/personal/reUnited/apps/web/src/routes/index.tsx
timestamp: 2026-10-07T11-56-37Z
slug: apps-web-src-routes-index-tsx
---
# Critique: ReUnited web app (header + hero), live at reunited-theta.vercel.app

Method: dual-agent (A: code + mockup review; B: detector + live browser at 390/1440, el/en/ar)

## Score: 23/36 (Acceptable, 64%). Heuristic 10 scored n/a.
| # | Heuristic | Score |
|---|---|---|
| 1 | Visibility | 2 |
| 2 | Real world | 3 |
| 3 | Control | 3 |
| 4 | Consistency | 3 |
| 5 | Error prevention | 3 |
| 6 | Recognition | 3 |
| 7 | Flexibility | 2 |
| 8 | Aesthetic | 2 |
| 9 | Recovery | 2 |
| 10 | Help | n/a |

## Specificity
The frame is specific (keffiyeh, Gaza cypress, palette). The voice is generic (SaaS-like type, pills, default accordion).

Detector:
- CLI: 0 findings.
- Overlay: body-text-viewport-edge on the footer (real); all-caps-body and cream-palette (false positives, mockup choices).

Browser evidence:
- The eyebrow contrast is actually 6.17 (the static check's 4.04 was wrong).
- Two reds confirmed (#9E1C16 buttons vs #BE231C accents).

## Priority issues
- [P1] Hero image: poster in a black slab, upscaled 1.79x on mobile, distorted olive branch. The user dislikes it. Command: layout.
- [P1] Tap targets: burger 28, drawer close 28, sign 36, drawer sign 42, logo 28. Burger has no aria-expanded. Drawer side is wrong in RTL. Command: adapt.
- [P1] Intermediate widths: wordmark overlap at 62–85em, header crowding at 75–83em, 320px overflow (calculated, not measured live). Command: adapt.
- [P2] Brand before message: duplicate "ReUnited", eyebrow repeats the lede, no people. Command: distill.
- [P2] Two reds, invisible nav hover/no aria-current, mobile band reduced to hairlines. Command: polish.

## Minor
- Footer unstyled and touching the edge, default blue link.
- No skip link, no per-route titles.
- No font preload, 5 blocking CSS files.
- Favicon 404.
- Olive branch rotated, low contrast.
- Menu role vs disclosure pattern.
