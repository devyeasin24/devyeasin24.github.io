# Premium Portfolio Upgrade Research

## Design direction findings

Figma's 2026 design overview highlights bold typography, purposeful motion, immersive depth, and accessible interaction as major website directions. Its guidance also warns that visual trends should support the actual brand and user journey rather than be copied indiscriminately.[1]

### Applied decision for Dev Yeasin

The next version should retain the current editorial confidence but move toward a more contemporary **digital atelier** style. The page will use a kinetic but restrained headline system, an interactive case-study navigator, a deeper dark presentation mode, and a clearer route for the three audiences: clients, remote-hiring teams, and collaborators. It should not use a trendy effect merely to look expensive.

## Initial content-management view

The portfolio itself can remain quick and static, but a database becomes valuable when Dev needs to update project evidence, links, and inbound enquiries without changing code. A Supabase-backed content model should be small and secure: project records, service records, public links, and optionally contact enquiries. It must never expose private keys in the public site.

Supabase documents that tables in an exposed schema should have Row Level Security enabled, because without it any role with access can read or write data according to its permissions. The content-management route therefore needs a protected owner-only editing interface rather than direct public write access.[2]

## International audience data check

The country figures supplied by Dev were described as Fiverr sales analytics. The stated numerical values total **157**, not 100, before the unspecified Algeria and Morocco values or the separate "World Domination" label are included. They therefore cannot responsibly be presented as one percentage distribution. The site can instead say that Dev has served an international Fiverr audience only after he confirms the reporting period and supplies an export or screenshot. Until then, the country data will stay out of the public tracker.

## Recommended content-management architecture

| Stage | Content source | Editing method | When to use it |
|---|---|---|---|
| Initial release | Typed local content file | Update one structured file in the codebase | Fastest, lowest-maintenance path while portfolio evidence is small. |
| Managed portfolio | Supabase public-read tables plus protected owner write policies | A private editor authenticated as Dev | Use when case studies, proof figures, and links change regularly. |
| Enquiries | A separate Supabase table or a trusted form endpoint, protected by validation and RLS | View enquiries in a private dashboard | Use only after a real public email or form workflow is ready. |

The initial redesign will prepare content in a single structured layer so it can move to Supabase later without rewriting the visual site.

## Source

[1]: https://www.figma.com/resource-library/web-design-trends/ "Figma — Top Web Design Trends for 2026"

[2]: https://supabase.com/docs/guides/database/postgres/row-level-security "Supabase Docs — Row Level Security"
