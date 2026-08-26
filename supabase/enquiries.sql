-- Run this once in Supabase Dashboard > SQL Editor.
-- This table accepts limited public enquiry inserts but never permits public reads.

create table if not exists public.enquiries (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null check (char_length(trim(name)) between 2 and 80),
  email text not null check (char_length(trim(email)) between 5 and 254),
  company text check (company is null or char_length(trim(company)) <= 120),
  project_type text not null check (char_length(trim(project_type)) between 2 and 80),
  message text not null check (char_length(trim(message)) between 20 and 3000),
  consent boolean not null default false,
  source text not null default 'portfolio-site' check (char_length(trim(source)) <= 80)
);

alter table public.enquiries enable row level security;

revoke all on table public.enquiries from anon, authenticated;
grant insert on table public.enquiries to anon;

drop policy if exists "Public can submit a valid enquiry" on public.enquiries;
create policy "Public can submit a valid enquiry"
on public.enquiries
for insert
to anon
with check (
  consent = true
  and char_length(trim(name)) between 2 and 80
  and char_length(trim(email)) between 5 and 254
  and char_length(trim(project_type)) between 2 and 80
  and char_length(trim(message)) between 20 and 3000
);

-- No SELECT, UPDATE, or DELETE policy is created for anon users.
-- Read submissions only through the Supabase dashboard using the owner's authenticated account.
