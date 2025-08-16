-- Retry: Content schema with public read policies (compatible syntax)

-- 1) Utility: updated_at trigger
create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

-- 2) Optional enum for role type
do $$
begin
  if not exists (select 1 from pg_type where typname = 'role_type') then
    create type public.role_type as enum ('IC','Lead','Manager','Mixed');
  end if;
end$$;

-- 3) Experiences
create table if not exists public.experiences (
  id uuid primary key default gen_random_uuid(),
  company text not null,
  title text not null,
  role public.role_type not null default 'IC',
  start_date date not null,
  end_date date,
  location text,
  employment_type text,
  summary text,
  highlights text[],
  tags text[],
  sort_order int default 0,
  is_published boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists experiences_sort_idx on public.experiences (is_published desc, sort_order desc, start_date desc);

drop trigger if exists set_experiences_updated_at on public.experiences;
create trigger set_experiences_updated_at
before update on public.experiences
for each row execute function public.set_updated_at();

-- 4) Skills and categories (many-to-many)
create table if not exists public.skill_categories (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name text not null,
  sort_order int default 0,
  is_published boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists skill_categories_sort_idx on public.skill_categories (is_published desc, sort_order desc, name);

drop trigger if exists set_skill_categories_updated_at on public.skill_categories;
create trigger set_skill_categories_updated_at
before update on public.skill_categories
for each row execute function public.set_updated_at();

create table if not exists public.skills (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  level text,
  years_of_experience numeric,
  is_featured boolean default false,
  sort_order int default 0,
  tags text[],
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists skills_sort_idx on public.skills (is_featured desc, sort_order desc, name);

drop trigger if exists set_skills_updated_at on public.skills;
create trigger set_skills_updated_at
before update on public.skills
for each row execute function public.set_updated_at();

create table if not exists public.skill_category_skills (
  category_id uuid not null references public.skill_categories(id) on delete cascade,
  skill_id uuid not null references public.skills(id) on delete cascade,
  sort_order int default 0,
  primary key (category_id, skill_id)
);

-- 5) Projects (case studies)
create table if not exists public.projects (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  subtitle text,
  problem text,
  approach text,
  outcome text,
  metrics jsonb,
  tech_stack text[],
  links jsonb,
  is_lead boolean default false,
  tags text[],
  sort_order int default 0,
  is_published boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists projects_sort_idx on public.projects (is_published desc, sort_order desc, title);

drop trigger if exists set_projects_updated_at on public.projects;
create trigger set_projects_updated_at
before update on public.projects
for each row execute function public.set_updated_at();

-- 6) Enable RLS and permit public SELECT (for read-only site rendering)
alter table public.experiences enable row level security;
alter table public.skill_categories enable row level security;
alter table public.skills enable row level security;
alter table public.skill_category_skills enable row level security;
alter table public.projects enable row level security;

-- Public read policies (drop-then-create for idempotency)
drop policy if exists "Public read experiences" on public.experiences;
create policy "Public read experiences" on public.experiences for select using (true);

drop policy if exists "Public read skill_categories" on public.skill_categories;
create policy "Public read skill_categories" on public.skill_categories for select using (true);

drop policy if exists "Public read skills" on public.skills;
create policy "Public read skills" on public.skills for select using (true);

drop policy if exists "Public read skill_category_skills" on public.skill_category_skills;
create policy "Public read skill_category_skills" on public.skill_category_skills for select using (true);

drop policy if exists "Public read projects" on public.projects;
create policy "Public read projects" on public.projects for select using (true);

-- 7) Realtime-ready (optional)
alter table public.experiences replica identity full;
alter table public.skill_categories replica identity full;
alter table public.skills replica identity full;
alter table public.skill_category_skills replica identity full;
alter table public.projects replica identity full;

do $$
begin
  if exists (select 1 from pg_publication where pubname = 'supabase_realtime') then
    execute 'alter publication supabase_realtime add table public.experiences, public.skill_categories, public.skills, public.skill_category_skills, public.projects';
  end if;
end$$;

-- 8) RPC to introspect table columns so UI can auto-render unknown fields
create or replace function public.get_table_columns(p_table text)
returns table(
  column_name text,
  data_type text,
  is_nullable boolean,
  column_default text,
  ordinal_position integer
) language sql stable security definer set search_path = public as $$
  select
    c.column_name,
    c.data_type,
    c.is_nullable = 'YES' as is_nullable,
    c.column_default,
    c.ordinal_position
  from information_schema.columns c
  where c.table_schema = 'public'
    and c.table_name = p_table
  order by c.ordinal_position
$$;

create or replace function public.get_content_tables()
returns text[] language sql stable security definer set search_path = public as $$
  select array['experiences','skill_categories','skills','skill_category_skills','projects']
$$;