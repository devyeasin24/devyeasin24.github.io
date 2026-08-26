# Free Publishing Plan for Dev Yeasin Studio

## The practical first version

This is a static portfolio website. It can look professional and load quickly without a database. For the first public version, use **GitHub** for the code and **GitHub Pages** for free hosting. When you later buy a domain, GitHub Pages can be configured to use it without rebuilding the site.[1]

| Stage | Recommended setup | Cost | Purpose |
|---|---|---:|---|
| Now | GitHub repository plus GitHub Pages | Free | Publish the portfolio at a GitHub address. |
| Later | A custom domain connected to GitHub Pages | Domain cost only | Use a professional address such as `devyeasin.com`. |
| When needed | Supabase | Free tier available | Store real contact enquiries, portfolio items, or private client records. |

## Publish with GitHub Pages

Create a GitHub repository named `YOUR-USERNAME.github.io` if you want the site at `https://YOUR-USERNAME.github.io`. Upload this project to that repository, then open **Settings**, select **Pages**, and configure a GitHub Actions deployment. GitHub documents the supported Pages publishing options and custom-domain process.[1]

> Keep the first public website simple. A polished static website is better than a complicated site with unfinished features.

## Add a custom domain later

When you own a domain, add it in the GitHub Pages settings and follow the DNS records GitHub provides. Do not change the source code merely to change the domain. GitHub recommends verifying the domain and configuring DNS through the domain provider.[1]

## When Supabase is useful

Do **not** add Supabase merely because it is available. Add it only when there is a genuine data feature, such as a contact form that stores enquiries, a password-protected client area, or a portfolio CMS.

If a Supabase integration is added later, use the project **anon key** only in the browser and protect every database table with Row Level Security. Never place a Supabase service-role key in the public frontend code.[2]

## Before publishing

The present contact routes intentionally use a **Verification pending** status. Replace them only with destinations you genuinely control:

| Item | Required input |
|---|---|
| Calendly | Public booking URL |
| Email | Public business email address |
| WhatsApp | Click-to-chat link or telephone number with country code |
| Platform proof | Exact profile URLs and figures, labelled by platform |
| Portfolio evidence | Work screenshots you own or may publicly display, with sensitive information removed |

## Sources

[1]: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site "GitHub Docs — Managing a custom domain for your GitHub Pages site"

[2]: https://supabase.com/docs/guides/database/postgres/row-level-security "Supabase Docs — Row Level Security"
