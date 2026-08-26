# Portfolio Technical Audit

**Date:** 26 August 2026  
**Scope:** hero presentation, representative responsive checks, crawl foundations, accessibility essentials, and the public-enquiry security boundary.

## What this revision establishes

The hero is now designed around Dev Yeasin’s supplied 2000 × 2000 original portrait. The image is treated as an identity signal rather than a work sample: it is not AI-generated, retouched, or obscured by a marketing card. The layout reserves image dimensions to reduce layout shift and uses content-led breakpoints rather than naming device brands.

| Area | Implemented now | Important limit |
|---|---|---|
| Hero image | Original 2000px portrait, a responsive framed composition, descriptive alternative text, and declared dimensions. | The GitHub Pages version needs a stable public image URL under Dev’s control; the Manus storage fallback is not portable. |
| Responsive design | Flexible layout, image containment/cropping rules, mobile navigation, single-column form fallback, touch-friendly action controls, and reduced-motion support. | Browser emulation is representative QA, not a physical test of every handset, browser version, operating system, or network. |
| Crawl foundations | Page titles/descriptions, canonical URLs, Open Graph text, `robots.txt`, `sitemap.xml`, semantic page headings, and Person structured data based only on confirmed profile information. | These changes aid discovery and presentation; they do not guarantee indexing, rankings, enquiries, or hiring results. |
| Form privacy | Client-side length/email checks, fixed project-area options, honeypot, clear consent, and RLS guidance that permits public insert only. | Client checks and a honeypot can be bypassed. A direct browser-to-database form is not the final anti-spam design for high public traffic. |

## Security maintenance decision

The present SQL model should retain **RLS enabled**, revoke broad `anon` and `authenticated` grants, and grant anonymous visitors only the narrowly required `INSERT` privilege on `public.enquiries`. No public `SELECT`, `UPDATE`, or `DELETE` policy should exist. Supabase explains that grants decide whether a role can attempt an operation while RLS policies decide which rows that operation can affect.[1]

Before paid promotion or high-volume form traffic, replace the direct REST insert with a Supabase Edge Function or another trusted serverless endpoint. That endpoint should verify a Turnstile/CAPTCHA token, rate-limit requests, apply the same allowlisted field validation server-side, and write with a server-only credential stored as a platform secret. Supabase documents Edge Functions as the place to centralize security checks and rate limits, while OWASP states that browser-side validation can be bypassed and must be paired with server-side validation.[2] [3]

## SEO and accessibility maintenance

Google supports `description`, `robots`, viewport, and canonical-related metadata, but it does not use the obsolete `meta keywords` tag for ranking.[4] A sitemap can help discovery for a new site with few external links, but Google can also discover correctly internally linked pages without one.[5] The included two-page sitemap is therefore a crawl hint, not a ranking mechanism.

Keep the site’s page title, description, canonical domain, sitemap, `robots.txt`, and structured-data URL aligned whenever the production domain changes. Add a real Open Graph image only after a stable, publicly accessible branded asset exists; do not point social metadata at a Manus-only asset or an unverified third-party URL.

## Responsive QA matrix

The planned check set is 320, 375, 390, 414, 768, 820, 1024, 1280, and 1440 CSS pixels. Each representative view checks the hero image crop, heading flow, mobile navigation, action links, service ledger, enquiry inputs, direct-contact rows, and footer. Responsive guidance recommends content-led breakpoints, flexible images, declared image dimensions, and layouts that avoid horizontal scrolling.[6]

### QA observations

| Viewport | Result | Observation |
|---|---|---|
| 320 × 720 | Pass | The home page reflows to one column; the hero portrait remains visible without a card covering it, primary actions wrap, and the form fields stay inside the viewport. |
| 375 × 812 | Pass | The hero has a readable first-screen hierarchy, portrait caption remains legible, content rows stack, and the enquiry form is usable without apparent horizontal scrolling. |
| 390 × 844 | Pass | The portrait’s art-directed frame, caption, and status row preserve spacing; service and contact content wrap without truncation. |
| 414 × 896 | Pass | The mobile hero and content sections retain their visual hierarchy, while project-area and consent controls stay readable and touch-sized. |
| 768 × 1024 | Pass | The tablet layout preserves a strong portrait scale, changes form inputs into two columns, and keeps the service ledger and proof sections readable. |
| 820 × 1180 | Pass | The home page’s tablet presentation maintains section rhythm, form-grid alignment, and readable contact links with no apparent horizontal overflow. |
| 1024 × 768 | Pass | The split desktop hero aligns the original portrait beside the core message; the service ledger switches to its intended multi-column structure. |
| 1280 × 720 | Pass | The desktop composition keeps the portrait prominent but secondary to the message, with sufficient white space and an orderly full-page hierarchy. |
| 1440 × 900 | Pass | The wide desktop home page preserves the editorial split-hero balance, while the About page keeps its profile image, four-column identity row, and public-profile ledger aligned. |

### Final visual refinement verification

The final desktop and 390px checks confirmed that the custom Signal Red studio stamp, original-portrait caption strip, evidence-dossier labels, and contact record frame remain legible and aligned with the existing editorial system. The phone presentation keeps these additions in a single readable sequence without a visible horizontal overflow.

## References

[1]: https://supabase.com/docs/guides/database/postgres/row-level-security "Supabase Docs — Row Level Security"

[2]: https://supabase.com/docs/guides/functions "Supabase Docs — Edge Functions"

[3]: https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html "OWASP Cheat Sheet — Input Validation"

[4]: https://developers.google.com/search/docs/crawling-indexing/special-tags "Google Search Central — Meta tags and attributes"

[5]: https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview "Google Search Central — Sitemaps"

[6]: https://web.dev/articles/responsive-web-design-basics "web.dev — Responsive web design basics"
