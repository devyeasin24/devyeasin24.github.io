# Research Notes: Premium Agency Portfolio and Free Hosting

## Design findings

High-quality agency portfolios emphasize strong typography, deliberate whitespace, concise messaging, micro-interactions, and visual storytelling. The design reference collection from Awwwards explicitly highlights typography, animation, micro-interactions, and whitespace as recurring elements in recognised agency portfolios. Webflow's agency portfolio guidance also centres project galleries and case-study layouts. The site will use those principles without copying a particular studio or presenting fictional client work.

## Free-hosting and future-domain findings

GitHub Pages is suitable for the first static version. GitHub documents that a custom domain can be added later in repository settings and linked through the user's DNS provider. The architecture will therefore avoid hard-coded host-specific links, so moving from the free GitHub address to a custom domain will be a configuration change rather than a redesign.

## Supabase boundary

The first version does not need a database. Supabase becomes useful only for real submissions or managed content. Its documentation requires Row Level Security and least-privilege policies for frontend data access, and it states that service-role or secret keys must never be exposed in a frontend application. Until there is a real need, the site will use direct contact links rather than collect personal data.

## Public-proof rule

All public numerical claims must be either user-confirmed and source-labelled or omitted. Fiverr-related figures must never be stated as Upwork outcomes. The site will not display invented client logos, testimonials, project counts, revenue results, performance guarantees, or AI-generated work as completed client work.

## Sources

1. [GitHub Docs: Managing a custom domain for your GitHub Pages site](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
2. [Supabase Docs: Securing your data](https://supabase.com/docs/guides/database/secure-data)
3. [Awwwards: Agency portfolios collection](https://www.awwwards.com/awwwards/collections/agency-portfolios/)
4. [Webflow: Portfolio and agency templates](https://webflow.com/templates/category/portfolio-and-agency-websites)
