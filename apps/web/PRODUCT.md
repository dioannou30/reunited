# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- Visitors arriving mostly on mobile from social media posts and QR codes on posters, with little time and no prior context. The Greek public comes first; English-speaking supporters, journalists and partner organisations second; Arabic-speaking Palestinian community members third.
- Their job: understand within seconds what ReUnited is and what the problem is, then sign the appeal, share it, or offer to take part.
- Campaign editors (non-developers) maintain dynamic content such as events and team members through the CMS.

## Product Purpose

ReUnited is the campaign site for the family reunification of Palestinian refugees in Greece. The authorities have recognised the families' right to reunification, but the responsible ministries are not taking the next steps. The site is the campaign's hub: it explains the issue accessibly, holds testimonies and legal material, announces actions, and collects signatures. Success means more signatures, more shares and more people offering skills.

## Positioning

A campaign built from direct contact with the affected families, which presents human stories and legal facts side by side. It must look neither like a cold legal database nor like an emotional campaign without documentation.

## Operating Context

- Traffic peaks follow social posts, events and press; many visits come from QR codes on printed material.
- Content lives in two places: static page copy in Paraglide messages (el/en/ar), dynamic content (events, team) in Payload CMS with per-locale fields.
- The petition itself will likely be hosted on an external platform.

## Capabilities and Constraints

- Languages: Greek (base), English and Arabic (RTL) from launch.
- Routes follow the PM's menu doc: Who we are (how it started, team), The issue (3 pages), Testimonies (Greece, Gaza), The campaign (actions, sign), How you can help (support, take part), plus contact and privacy.
- Team members in the CMS: name, role, short bio, optional photo, display order. Members may not want a photo shown.
- Undecided: hero and section imagery, handwriting font, Arabic copy review, a mobile mockup, the text of "How it started" (lorem placeholder until the campaign provides it).
- Donations are not enabled until legal, accounting and data-protection requirements are confirmed.

## Brand Commitments

- Visual identity from the campaign poster and the home mockup `docs/reunited-site.jpg`: warm paper background, red/green/black Palestinian palette, keffiyeh and tatreez patterns, handmade/printed texture, olive branches.
- Only real traditional motifs (sourced, credited), never invented ones. No moving or marquee text.
- The ReUnited wordmark is the campaign SVG logo (`apps/web/public/logo.svg`).
- Never add sections or new campaign copy outside the agreed design without the owner's approval.

## Evidence on Hand

- Campaign brief (`docs/brief-en.md`), menu doc (`docs/ReUnited_Domi_Kentrikou_Menu (1).docx`), home mockup (`docs/reunited-site.jpg`), motif research (`docs/motifs.md`), decisions (`docs/decisions.md`).
- No real testimonies, partner logos, team members, photos or signature counts yet. The home quote and its name are mockup placeholders. None of these may be fabricated as if real.

## Product Principles

1. Immediate understanding: every page says what it is about and what the visitor can do within the first screen.
2. People and facts together: pair human voices with verifiable information.
3. Protect the families and the team: consent before any name, face or story is shown.
4. Mobile first, fast on weak connections.
5. One clear ask: signing the appeal stays reachable everywhere.

## Accessibility & Inclusion

Readable sizes, sufficient contrast, alt text, keyboard navigation, subtitles and transcripts for videos, accessible forms, and full RTL support for Arabic.
