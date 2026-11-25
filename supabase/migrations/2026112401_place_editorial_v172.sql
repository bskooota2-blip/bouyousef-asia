-- V172: public editorial content only. Existing administrator allowlist is authoritative.
-- Run once in the existing project, as database owner in SQL Editor.
begin;
create table if not exists public.by3_admin_members (
  user_id uuid primary key references auth.users(id) on delete cascade,
  created_at timestamptz not null default now()
);
alter table public.by3_admin_members enable row level security;
revoke all on public.by3_admin_members from public, anon, authenticated;
grant select on public.by3_admin_members to service_role;

create table if not exists public.by172_place_editorial (
  place_key text primary key check (char_length(place_key) between 4 and 1800 and place_key ~ '^(china|thailand|malaysia|hong-kong|macau)/'),
  note text not null default '' check (char_length(note) <= 1000),
  recommended boolean not null default false,
  updated_at timestamptz not null default now()
);
alter table public.by172_place_editorial enable row level security;
revoke all on public.by172_place_editorial from public, anon, authenticated;
grant select on public.by172_place_editorial to anon, authenticated;
drop policy if exists by172_public_read on public.by172_place_editorial;
create policy by172_public_read on public.by172_place_editorial for select to anon, authenticated
  using (recommended or note <> '');
-- No write grants/policies to browser roles. Only the RPC below may write.
create or replace function public.by172_is_admin() returns boolean
language sql stable security definer set search_path = ''
as $$ select exists(select 1 from public.by3_admin_members a where a.user_id = auth.uid()) $$;
revoke all on function public.by172_is_admin() from public, anon, authenticated;
grant execute on function public.by172_is_admin() to authenticated;

create or replace function public.by172_set_editorial(p_place_key text, p_note text default null, p_recommended boolean default null)
returns jsonb language plpgsql security definer set search_path = ''
as $$
declare result public.by172_place_editorial;
begin
  if auth.uid() is null or not public.by172_is_admin() then
    raise exception 'Administrator access required' using errcode = '42501';
  end if;
  if p_place_key is null or char_length(p_place_key) not between 4 and 1800
     or p_place_key !~ '^(china|thailand|malaysia|hong-kong|macau)/'
     or (p_note is null and p_recommended is null)
     or char_length(p_note) > 1000 then
    raise exception 'Invalid editorial input' using errcode = '22023';
  end if;
  insert into public.by172_place_editorial as e(place_key,note,recommended,updated_at)
  values(p_place_key,coalesce(btrim(p_note),''),coalesce(p_recommended,false),now())
  on conflict(place_key) do update set
    note=coalesce(btrim(p_note),e.note), recommended=coalesce(p_recommended,e.recommended), updated_at=now()
  returning * into result;
  return jsonb_build_object('place_key',result.place_key,'note',result.note,'recommended',result.recommended);
end; $$;
revoke all on function public.by172_set_editorial(text,text,boolean) from public, anon, authenticated;
grant execute on function public.by172_set_editorial(text,text,boolean) to authenticated;
commit;
