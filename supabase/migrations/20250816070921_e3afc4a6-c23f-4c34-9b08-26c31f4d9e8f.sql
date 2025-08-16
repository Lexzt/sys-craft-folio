-- Fix function search path security warning by setting explicit search_path
create or replace function public.set_updated_at()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create or replace function public.get_table_columns(p_table text)
returns table(
  column_name text,
  data_type text,
  is_nullable boolean,
  column_default text,
  ordinal_position integer
) 
language sql stable 
security definer 
set search_path = public 
as $$
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
returns text[] 
language sql stable 
security definer 
set search_path = public 
as $$
  select array['experiences','skill_categories','skills','skill_category_skills','projects']
$$;