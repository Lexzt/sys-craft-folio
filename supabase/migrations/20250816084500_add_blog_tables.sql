-- Add blog categories and posts tables

-- Blog categories table
create table if not exists public.blog_categories (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name text not null,
  sort_order int default 0,
  is_published boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists blog_categories_sort_idx on public.blog_categories (is_published desc, sort_order desc, name);

drop trigger if exists set_blog_categories_updated_at on public.blog_categories;
create trigger set_blog_categories_updated_at
before update on public.blog_categories
for each row execute function public.set_updated_at();

-- Blog posts table
create table if not exists public.blog_posts (
  id uuid primary key default gen_random_uuid(),
  category_id uuid not null references public.blog_categories(id) on delete cascade,
  title text not null,
  content text,
  is_published boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists blog_posts_sort_idx on public.blog_posts (is_published desc, created_at desc);

drop trigger if exists set_blog_posts_updated_at on public.blog_posts;
create trigger set_blog_posts_updated_at
before update on public.blog_posts
for each row execute function public.set_updated_at();

-- Enable RLS and public read access
alter table public.blog_categories enable row level security;
alter table public.blog_posts enable row level security;

create policy if not exists "Public read blog_categories" on public.blog_categories for select using (true);
create policy if not exists "Public read blog_posts" on public.blog_posts for select using (true);

-- Realtime support
alter table public.blog_categories replica identity full;
alter table public.blog_posts replica identity full;

do $$
begin
  if exists (select 1 from pg_publication where pubname = 'supabase_realtime') then
    execute 'alter publication supabase_realtime add table public.blog_categories, public.blog_posts';
  end if;
end$$;

-- Update helper function listing content tables
create or replace function public.get_content_tables()
returns text[] language sql stable security definer set search_path = public as $$
  select array['experiences','skill_categories','skills','skill_category_skills','projects','blog_categories','blog_posts']
$$;
