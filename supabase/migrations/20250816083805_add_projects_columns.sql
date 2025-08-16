-- Add missing columns to projects table
alter table public.projects
  add column if not exists description text,
  add column if not exists image_url text,
  add column if not exists is_featured boolean default false;

create index if not exists projects_featured_idx on public.projects (is_featured desc, sort_order desc, title);
