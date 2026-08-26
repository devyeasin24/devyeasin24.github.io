# GitHub Pages and Supabase Enquiry Form Setup

This guide publishes the portfolio without exposing database-administrator credentials. It is written for a static Vite site; GitHub Pages hosts the public pages, while Supabase can hold private enquiry records after its row-level policy is configured.

## Part A — Publish the site with GitHub Pages

1. Sign in to the GitHub account `devyeasin24`.
2. Create a **public** repository named exactly `devyeasin24.github.io`. This gives the cleanest free address: `https://devyeasin24.github.io`.
3. Export or download this project, then put the project files at the repository root.
4. Create `client/public/media/` in the GitHub copy and add the four files from the supplied GitHub media bundle: `dev-yeasin-authentic-portrait-2000.png`, `systemeio-digital-product-funnel-public-preview.png`, `shopify-web-design-public-preview.png`, and `portland-ace-force-fitness-funnel-public-preview.png`.
5. Create the folder `.github/workflows` and place the supplied `github-pages.yml` file there with the exact final path `.github/workflows/github-pages.yml`.
6. In **Settings** → **Secrets and variables** → **Actions** → **Variables**, create `VITE_SITE_URL` with `https://devyeasin24.github.io` and `VITE_PUBLIC_ASSET_BASE_URL` with `https://devyeasin24.github.io/media`.
7. Commit and push the project. In the repository, open **Settings** → **Pages**. Under **Build and deployment**, select **GitHub Actions**.
8. Open the **Actions** tab and wait for the workflow named **Publish portfolio to GitHub Pages** to complete. GitHub’s Pages workflow builds the site, uploads the static artifact, and deploys it.[1]
9. Return to **Settings** → **Pages** and open the published address.

> GitHub Pages is public hosting. Never add private documents, customer data, database passwords, Supabase `sb_secret` keys, or legacy `service_role` keys to the repository.[1]

## Part B — Keep the new portrait working after GitHub deployment

The current fallback beginning with `/manus-storage/` is valid on the Manus deployment only. Do **not** assume that it will work on GitHub Pages. The current source now supports a public media base variable for the GitHub copy.

1. Keep the supplied original as `dev-yeasin-authentic-portrait-2000.png`; it is a 2000 × 2000 real photo approved for this site.
2. Before the GitHub build, place the portrait and all three selected-work previews in `client/public/media/`. Vite will copy them to `/media/` in the published site.
3. In GitHub, open **Settings** → **Secrets and variables** → **Actions** → **Variables**.
4. Create `VITE_PUBLIC_ASSET_BASE_URL` with `https://devyeasin24.github.io/media` if it was not already added in Part A.
5. `VITE_PORTRAIT_URL` is optional. Use it only if you later host the authentic portrait on another stable public URL you control.
6. Push the images and variable update, then rerun the deployment workflow. Open the site in a private browser window and confirm the portrait and all three selected-work previews load.

Do not use a lower-resolution GitHub avatar as the production hero fallback. Keep the original photo unchanged; this site only crops it responsively for layout.

## Part C — Create the Supabase enquiry table

1. In the Supabase dashboard for the intended project, open **SQL Editor**.
2. Open this project’s `supabase/enquiries.sql`, copy all of it, paste it into SQL Editor, and select **Run**.
3. Open **Table Editor** and confirm that `public.enquiries` exists.
4. In **Authentication** → **Policies**, confirm that RLS is enabled for `enquiries`. The anonymous role should have only an **INSERT** policy. There must be no anonymous **SELECT**, **UPDATE**, or **DELETE** policy.
5. In **Project Settings** → **API**, copy the project URL and the **publishable** key. A publishable key is browser-visible by design; the data restriction comes from the narrow grants and RLS policy.[2]

## Part D — Add only browser-safe configuration

### Local testing

1. Create `.env.local` yourself. Do not commit it.
2. Add `VITE_SUPABASE_URL=https://YOUR_PROJECT_REF.supabase.co`.
3. Add `VITE_SUPABASE_PUBLISHABLE_KEY=YOUR_PUBLIC_KEY`. If the project provides only the legacy anon key, use `VITE_SUPABASE_ANON_KEY=YOUR_ANON_KEY` instead.
4. Run `pnpm check && pnpm build`, then run `pnpm dev`.
5. Submit one test enquiry and confirm it appears in the Table Editor while signed in as the project owner.

### GitHub Pages deployment

1. In the portfolio repository, open **Settings** → **Secrets and variables** → **Actions** → **Variables**.
2. Create `VITE_SUPABASE_URL` and `VITE_SUPABASE_PUBLISHABLE_KEY` with the two browser-safe values. If using a legacy key, create `VITE_SUPABASE_ANON_KEY` instead.
3. Keep these as **Variables** because every `VITE_` value is compiled into the visitor-facing JavaScript. Putting a secret in GitHub Secrets would not protect it once the frontend build exposes it.
4. Commit a small change or choose **Run workflow** in the Actions tab to rebuild and publish.

## Part E — Test privacy and decide when to strengthen the form

1. Submit one test enquiry through the deployed site.
2. Confirm that the row appears for you in Supabase Table Editor.
3. Open the deployed site in a private/incognito window. It may submit a new enquiry, but it must not display previous enquiries.
4. In a separate browser request or Supabase API client, verify that anonymous `SELECT`, `UPDATE`, and `DELETE` requests fail.
5. If the form has a public promotion campaign, receives spam, or becomes business-critical, replace the direct browser REST insert with a Supabase Edge Function. The function should verify a Turnstile/CAPTCHA token, rate-limit by request/IP strategy, validate every field server-side, and write with a server-only secret stored in Supabase project secrets.[3] [4]

## Production-domain checklist

The checked-in defaults now use `https://devyeasin24.github.io`. If the site moves to a custom domain later, update the `VITE_SITE_URL` Actions Variable and these three checked-in locations together:

| File | What to replace |
|---|---|
| `client/index.html` | Canonical URL, Open Graph URL, and Person schema `url` |
| `client/public/robots.txt` | Sitemap URL |
| `client/public/sitemap.xml` | Both page URLs |

If a custom domain is added later, configure it through **Settings** → **Pages** → **Custom domain** and follow the DNS records GitHub displays. A `CNAME` file alone does not configure the domain.[1]

## Credentials rule

| Appropriate in the browser | Never put in GitHub, frontend code, or chat |
|---|---|
| Supabase project URL | Supabase `sb_secret` / secret key |
| Supabase publishable or legacy anon key | Legacy `service_role` key |
| RLS-limited public insert endpoint | Database password |

## Sources

[1]: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site "GitHub Docs — Configuring a publishing source for your GitHub Pages site"

[2]: https://supabase.com/docs/guides/database/postgres/row-level-security "Supabase Docs — Row Level Security"

[3]: https://supabase.com/docs/guides/functions "Supabase Docs — Edge Functions"

[4]: https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html "OWASP Cheat Sheet — Input Validation"
