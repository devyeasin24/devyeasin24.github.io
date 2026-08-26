# Final Readiness Audit

**Audit date:** 26 August 2026

## Current build and release state

The local production check completed successfully with `pnpm check && pnpm build`. The build produces `dist/public`, which is the directory configured in `github-pages.yml` for the GitHub Pages artifact.

The audit found one important GitHub Pages preparation item: the current Manus deployment uses `/manus-storage/` URLs for the portrait and the three selected-work previews. Those URLs should not be assumed to resolve after an independent GitHub Pages deployment. The source now supports `VITE_PUBLIC_ASSET_BASE_URL`; before the first GitHub push, the photo and three project previews must be copied into the repository’s `client/public/media/` folder and the variable set to `https://devyeasin24.github.io/media`.

The final source defaults for canonical, sitemap, robots, Open Graph, and schema URLs now target `https://devyeasin24.github.io`. A future custom domain requires updating `VITE_SITE_URL` and the checked-in indexing files together.

The unresolved analytics script placeholder was removed. No analytics code will load until Dev explicitly chooses an analytics provider and adds a privacy-aware implementation.

## Official deployment findings

GitHub recommends a custom Actions workflow for sites that need a build process. The approved flow is to check out the repository, build the static files, upload a Pages artifact, and deploy it with the Pages action. The current workflow follows this pattern.[1]

GitHub configuration variables may use letters, digits, and underscores, and the existing `VITE_*` names satisfy those rules.[2] However, every `VITE_*` value is compiled into the browser bundle. Only a Supabase project URL and publishable/legacy anon key may be passed this way; a database password, `service_role`, or `sb_secret` key must never be used in the frontend workflow.

For a future custom domain, configure the domain in GitHub Pages settings **before** configuring its DNS records. GitHub recommends domain verification and warns against wildcard DNS records because of takeover risk.[3]

## Database-security findings

Supabase states that both grants and RLS policies determine access. Tables in an exposed schema should have RLS enabled, existing grants should be revoked, and only the minimum required privileges granted back.[4] The provided enquiry SQL is designed around anonymous insert only. This limits read exposure but is not a complete anti-spam solution; a promoted or business-critical public form should move behind an Edge Function with server-side validation, rate limiting, and Turnstile/CAPTCHA verification.

## Release blockers before GitHub Pages

1. Create a public repository named `devyeasin24.github.io` and copy this project into its root.
2. Place `github-pages.yml` at `.github/workflows/github-pages.yml`.
3. Copy the authentic portrait and all three selected-work previews to `client/public/media/` in the GitHub copy. The published filenames must match the stable URLs used in the build.
4. Set the site domain consistently in `client/index.html`, `client/public/robots.txt`, and `client/public/sitemap.xml` after selecting the final public address.
5. Keep the enquiry form inactive until the Supabase SQL and RLS policy are applied and only browser-safe public values are configured.

## Final verification

On 26 August 2026, the final TypeScript check and production build completed successfully. The only build note is Vite’s advisory that the main JavaScript bundle exceeds its default 500 kB warning threshold after minification; this does not prevent publication, but it is a future performance-improvement opportunity.

The primary Calendly, email, WhatsApp, Upwork, Fiverr, GitHub, LinkedIn, and X destinations returned successful public HTTP responses during the audit. The homepage and About page were also rendered at **1280px** desktop, and the homepage was rendered at **375px** phone width. The selected-work cards, service ledger, portrait, enquiry controls, and footer remained visible without detected horizontal clipping in these representative browser checks. This does not claim testing on every physical browser or device.

The GitHub Pages release is ready once the repository, media bundle, Actions Variables, and Pages source setting in the checklist above are completed. The Supabase form is intentionally not production-ready until its RLS policy and public-key configuration are applied; the stronger Edge Function, CAPTCHA, and rate-limiting path remains recommended before a high-traffic promotion.

## Sources

[1]: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

[2]: https://docs.github.com/en/actions/reference/workflows-and-actions/variables

[3]: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site

[4]: https://supabase.com/docs/guides/database/postgres/row-level-security
