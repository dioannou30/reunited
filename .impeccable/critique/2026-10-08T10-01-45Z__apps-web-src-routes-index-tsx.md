---
target: home page
total_score: 23
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 2
target_identity: "file:/home/dio/repos/personal/reUnited/apps/web/src/routes/index.tsx"
target_fingerprint: "sha256:680dc24e10c0ca9e94a42124e8f97fe1b74a31e610cb395fe3cf8642a0233e56"
target_path: /home/dio/repos/personal/reUnited/apps/web/src/routes/index.tsx
timestamp: 2026-10-08T10-01-45Z
slug: apps-web-src-routes-index-tsx
---
Method: dual-agent (A: design review, B: detector + browser)

| # | Heuristic | Score | Key issue |
|---|---|---|---|
| 1 | Visibility of system status | 3 | Active language and active menu item are marked |
| 2 | Match with real world | 3 | "Ανοίγει στην πλατφόρμα" vague; "των αρχών" unspecified |
| 3 | User control | 3 | Skip link, languages always visible, drawer closes |
| 4 | Consistency | 3 | Quote arrow-only circle breaks labelled-button pattern |
| 5 | Error prevention | 3 | "1 λεπτό" CTA lands on a placeholder page |
| 6 | Recognition | 2 | Quote arrow has no visible label |
| 7 | Flexibility | n/a | Single-visit campaign page |
| 8 | Aesthetic/minimalist | 3 | Mobile first screen: two logos, two ΥΠΟΓΡΑΨΕ |
| 9 | Error recovery | 3 | Placeholder pages are dead ends |
| 10 | Help | n/a | Campaign page |
| Total | | 23/32 (72%) | Good |

Specificity: frame (keffiyeh/tatreez, logo, olives, torn paper) is authored; the middle three-icon row is stock NGO pattern.
Detector: CLI 0 findings. Browser: all-caps-body (34-char eyebrow span), cream-palette (brand, false positive). No overflow at 390; all images have alt; ar "وقّع" link 23px wide.

Priority issues:
- [P1] No closing ask after the quote (emotional peak). Fix: closing sign band after FamilyQuote, CMS-driven. bolder
- [P1] Duplicate logo + ΥΠΟΓΡΑΨΕ in mobile first screen. Fix: hide header sign button on home <62em until hero CTAs leave viewport. distill
- [P2] Quote link is an unlabelled arrow. Fix: show linkLabel visibly. clarify
- [P2] Three points generic, not actionable. Fix: link "1 λεπτό" to sign, concrete point 3, tatreez-style marks, start-aligned desktop text. clarify + delight
- [P2] Arabic subtitle/title line-height tight, underline collides. Fix: :lang(ar) line-height ~1.45. typeset

Personas: Jordan (no addressee/outcome stated, eyebrow hard to read), Riley (ar underline, text-as-key, tall-viewport right border), Casey (no sticky bottom ask, top-edge controls).
Minor: empty desktop hero top-right, quote section unlabelled, Latin quote mark in ar, right tatreez louder than content, Tirazain/ar tap sizes.
Questions: quote next to hero CTA? show signature count? does the three-icon row persuade?
