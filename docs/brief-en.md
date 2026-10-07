# ReUnited – Website Structure

**Core goal.** The website must work at the same time as the campaign's central hub, an accessible explanation of the family reunification issue, an archive of legal and documentary material, a space for personal testimonies and actions, and a "tool" for anyone who wants to support the campaign.

## 1. Design and user experience principles

- Mobile-first design and fast loading. A large share of traffic is expected to come from social media and QR codes.
- Immediate understanding: from the first screen, visitors should understand what ReUnited is, what the problem is, and what they can do.
- A strong but restrained visual identity based on the campaign poster: warm off-white background, the red/green/black of the Palestinian palette, subtle use of keffiyeh patterns, a handmade/printed texture, and the illustration of the family as a puzzle.
- Human stories and legal facts should be presented side by side. The site should look neither like a cold legal database nor like an emotional campaign without documentation.
- Greek and English from launch. The architecture must allow Arabic to be added without a redesign. Arabic requires right-to-left (RTL) support.
- Accessibility: readable font sizes, sufficient contrast, subtitles and transcripts for videos, alt text on images, keyboard navigation, and accessible forms.

## 2. Proposed main menu

**HOME | THE ISSUE | TESTIMONIES | LEGAL FRAMEWORK | THE CAMPAIGN | SUPPORT | WHO WE ARE | CONTACT**

A fixed primary call-to-action button must stay visible in the header on both desktop and mobile: **SIGN THE APPEAL**. If donations are enabled later, a second button, "DONATE", can be added without changing the structure.

## 3. HOME

- **Hero screen.** ReUnited identity, one sentence explaining the campaign, and a prominent "SIGN THE APPEAL" button. There can be a short video or a static image, with no autoplaying sound.
- **The issue in 30 seconds.** Three or four short points explaining the core of the problem.
- **Two voices.** A pair of selected short videos: one legal/institutional explanation and one Palestinian testimony. This makes the campaign's core narrative logic clear right away.
- **Latest / next action.** A dynamic box for the next event, press conference, concert, neighbourhood action, public discussion, or other initiative.
- **How you can help.** Three clear paths: sign/share, participate/volunteer, and financial support (if donations are enabled).
- **Partners / supporters.** Logos or names of organisations, lawyers, collectives, and supporting bodies, where they have given consent.

## 4. THE ISSUE

- **What is family reunification?** A simple, understandable explanation before any legal detail.
- **How does the process work?** A simple visual timeline: right/eligibility → application → review → positive decision → practical steps → actual reunification.
- **Where does the process get stuck?** An explanation of the practical gap between the recognition/approval of the right and the family's actual reunification.
- **Palestinian families.** Two clearly separate subsections: (a) positive decisions that have not been implemented, and (b) applications that remain pending.
- **FAQ.** Short answers to the key questions from the Reels series. Each answer can link to the relevant legal document or expert statement.

## 5. TESTIMONIES

- **Personal stories.** Separate pages for Palestinian participants, with video, photo, short text, and selected quotes.
- **Linking testimony with institutional explanation.** Where it makes sense, show a related lawyer/expert video next to the testimony, so the personal experience and the institutional framework answer the same question from two perspectives.
- **Video requirements.** Support for embedded or hosted videos, subtitles, transcripts, preview images, and vertical Reel-style format.

## 6. LEGAL FRAMEWORK & DOCUMENTS

- **Legal explanations.** Short, readable texts by lawyers on what the law provides, which administrative steps should be followed, and where implementation problems arise.
- **Document library.** Publishing and organising laws, regulations, decisions, official correspondence, statements, legal memos, reports, and other documentary material.
- **Documentation.** Legal claims should be linked, where possible, to the relevant primary document or a named expert statement.
- **Updates.** The structure should allow new legal or administrative developments to be added without rebuilding the page.

## 7. THE CAMPAIGN

- **What ReUnited is.** Purpose, origin, goals, and the meaning of the campaign's name.
- **What we do.** Presentation of the strategy: public awareness, testimonies, legal clarification, public advocacy, and collective actions.
- **Actions & events.** A section for press conferences, concerts, neighbourhood actions, screenings, discussions, and future initiatives – could work as blog posts.
- **News / updates.** Short posts that keep the site active between major actions – could work as blog posts.

## 8. SUPPORT / HOW YOU CAN HELP

- **Sign the appeal.** Embedded signature form or a secure link to the signature-collection platform. After signing, a confirmation message and optional sign-up for updates.
- **Share the campaign.** Instant share buttons and downloadable material for Instagram, Facebook, WhatsApp, and other channels.
- **Volunteering / collaboration.** A simple form for individuals, lawyers, artists, organisations, venues, and other potential partners – submissions go to the campaign's central email.
- **Donate.** The architecture should support online donations even if they are not enabled in the first phase. One-off or recurring donations only if the organisation's legal and accounting framework allows it.
- **Other ways to support.** In-kind support: providing a venue, printing, technical support, interpreting, communications partnership, etc.

## 9. WHO WE ARE

- **The campaign organisers.** Who started and coordinates ReUnited, with short descriptions rather than lengthy organisational bios.
- **Why we do it.** A short statement connecting the campaign to direct contact with the affected families and the need that emerged from that relationship.
- **Partners and supporters.** An expandable list of organisations, legal partners, community groups, and supporters.
- **Transparency.** Where needed, explain how financial or other support is used and who is responsible for the campaign.

## 10. CONTACT & SOCIAL MEDIA

- **Contact details.** Campaign email, optionally a phone number/contact person, and a simple contact form.
- **Social media.** Visible icons in the header/footer and share buttons on testimonies, videos, and actions.

## 11. Functional requirements for the technical team

- A simple CMS so the campaign team can add/edit texts, testimonies, videos, events, documents, and news without developer help.
- Fully responsive design for mobile, tablet, and desktop.
- Multilingual architecture: Greek/English initially, ready for Arabic with RTL.
- Video embedding and fields for subtitles/transcripts.
- Photo galleries and downloadable media files.
- PDF/document library with categories, tags, and search/filters.
- Events module (blog posts) with upcoming/past actions.
- Signature-collection integration or native form, with data export.
- Architecture ready for donations/payments integration. Not to be enabled before legal, accounting, and data-protection requirements are confirmed.
- Share buttons and links to social media.
- Permanent URLs suitable for QR codes for campaign pages and individual actions.
- Basic internal search.
- SEO and metadata for social previews (title, description, image) on every page/testimony/event.
- Cookie and privacy settings, privacy policy, terms where needed, and consent management for forms/newsletter/analytics.
- Security: HTTPS, spam protection, backups, admin access roles, an update policy, and a recovery plan.
- Performance: image compression, lazy loading, and avoiding unnecessary heavy animations.

## 12. Content structure / CMS fields to plan for from the start

_(what we need to be able to upload and manage ourselves)_

| Content type | Core fields |
| --- | --- |
| Testimony / story | Name or pseudonym, title, summary, full text, video/audio, transcript, image, consent/privacy status, language |
| Legal / institutional contribution | Expert name/role, question, answer, video, transcript, sources/linked documents |
| Document | Title, type, date, author/source, summary, file/link, language, tags |
| Event / action | Title, type, date/time, venue, map/link, description, registration, media, status |
| News / update | Title, date, short text, image/video, related action/testimony |
| Partner / supporter | Name, logo, short description, link, category |

## 13. Proposed homepage flow

1. ReUnited + one sentence about the campaign + SIGN THE APPEAL
2. The problem in 3–4 key points
3. Featured testimony + related lawyer/expert answer
4. Short section "What should happen / what happens in practice"
5. Latest or next campaign action
6. Preview of legal documentation / documents
7. How you can help: Sign – Share – Take part – Donate (if enabled)
8. Organisers / partners
9. Social media + contact
