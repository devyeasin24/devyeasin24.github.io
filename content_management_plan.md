# Content Management Plan

## Recommended decision

Build the redesigned website with a structured local content layer first, then connect it to Supabase when Dev has a confirmed public content-update routine. This gives the site a free and reliable first release while avoiding a database that is difficult to secure or maintain.

## Content collections

| Collection | Public fields | Owner-only fields |
|---|---|---|
| Profile | Name, location, positioning, biography, availability | Internal notes |
| Services | Service title, scope, deliverables, display order | Draft state |
| Case studies | Title, role, permitted imagery, process, supported outcome | Client notes and permissions record |
| Proof | Platform, metric label, value, period, source URL | Verification status and evidence link |
| Contact links | Label, public URL, display order | None beyond editing access |
| Enquiries | None | Name, email, project scope, timestamp, consent flag |

## Supabase security rule

Public visitors should only be able to read approved public content. Only Dev's authenticated account should create, update, or delete records. Contact enquiries should accept carefully validated inserts and should never expose other enquiries to the public.

## Implementation sequence

The revised frontend will use a local structured content module. When Dev is ready, a Supabase adapter can replace that module, while the page components keep the same data shape. This avoids redesigning the frontend later.

## Needed before activation

Dev must provide the Supabase project URL and decide which authenticated email address owns the editor. No service-role key belongs in public website code.

