# Form Security and Hosting Research

## GitHub Pages

GitHub Pages can publish a static site from a repository or a GitHub Actions workflow. A user site repository is named `<user>.github.io`; public repositories are required for GitHub Free in the usual Pages setup. GitHub also notes that Pages sites are public and should never include sensitive data. GitHub Actions is free for public repositories. [GitHub Docs](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)

## Supabase form security

Supabase documentation states that Row Level Security must be enabled on every table exposed to browser clients, and grants as well as policies must be configured. A browser can use a publishable key, but a secret key or legacy `service_role` key must never be placed in a public web page or browser code. [Supabase RLS Docs](https://supabase.com/docs/guides/database/postgres/row-level-security) · [Supabase API Key Docs](https://supabase.com/docs/guides/api/api-keys)

## Implication for this portfolio

The public portfolio should collect only a small enquiry record. The form will use the browser-safe project URL and publishable key after Dev configures the secure SQL policy. The site must not contain database-admin credentials. A hidden honeypot field and client-side validation reduce low-effort spam; RLS controls who may write and prevents the public from reading submissions.
