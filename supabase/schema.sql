-- ============================================================
-- SAT Prep Platform — Supabase schema
--
-- HOW TO USE:
-- 1. Create a free project at https://supabase.com
-- 2. Open Project > SQL Editor > New query
-- 3. Paste this entire file and click "Run"
-- 4. Get your Project URL and anon public key from
--    Project Settings > API, and put them in .env.local
--    (see .env.example in the project root)
-- 5. Sign up through the app's normal /signup page using
--    sriny3@gmail.com — that email is auto-granted admin access
--    by the trigger below. Everyone else who signs up becomes
--    a regular student.
-- ============================================================

create extension if not exists pgcrypto;

-- ---------- profiles (1 row per account) ----------
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text unique not null,
  username text not null,
  first_name text not null,
  last_name text not null,
  avatar text default '👤',
  grade_level text not null check (grade_level in ('7','8','9','10','11')),
  role text not null default 'student' check (role in ('admin','student')),
  created_at timestamptz not null default now()
);

-- ---------- progress (gamification summary, 1 row per account) ----------
create table if not exists public.progress (
  user_id uuid primary key references public.profiles(id) on delete cascade,
  points integer not null default 0,
  current_level integer not null default 1,
  unlocked_badges text[] not null default '{}',
  current_streak integer not null default 0,
  best_streak integer not null default 0,
  last_study_date date,
  total_study_days integer not null default 0,
  updated_at timestamptz not null default now()
);

-- ---------- activity history (many rows per account) ----------
create table if not exists public.lesson_completions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  lesson_id text not null,
  lesson_title text not null,
  subject text not null,
  topic text not null,
  points_earned integer not null default 0,
  completed_at timestamptz not null default now()
);

create table if not exists public.quiz_attempts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  quiz_id text not null,
  quiz_title text not null,
  subject text not null,
  topic text not null,
  score integer not null,
  max_score integer not null,
  percentage integer not null,
  points_earned integer not null default 0,
  completed_at timestamptz not null default now()
);

create table if not exists public.practice_test_attempts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  test_id text not null,
  test_title text not null,
  subject text not null,
  topic text not null,
  correct_count integer not null,
  total_questions integer not null,
  percentage integer not null,
  points_earned integer not null default 0,
  time_spent_seconds integer not null default 0,
  completed_at timestamptz not null default now()
);

-- ---------- helper: is the requesting user an admin? ----------
-- security definer lets this bypass RLS internally so it doesn't recurse
-- into the profiles policy that calls it.
create or replace function public.is_admin()
returns boolean
language sql
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.profiles
    where id = auth.uid() and role = 'admin'
  );
$$;

-- ---------- auto-create profile + progress row whenever someone signs up ----------
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  admin_email text := 'sriny3@gmail.com';
begin
  insert into public.profiles (id, email, username, first_name, last_name, avatar, grade_level, role)
  values (
    new.id,
    new.email,
    coalesce(new.raw_user_meta_data->>'username', split_part(new.email, '@', 1)),
    coalesce(new.raw_user_meta_data->>'first_name', ''),
    coalesce(new.raw_user_meta_data->>'last_name', ''),
    coalesce(new.raw_user_meta_data->>'avatar', '👤'),
    coalesce(new.raw_user_meta_data->>'grade_level', '11'),
    case when lower(new.email) = lower(admin_email) then 'admin' else 'student' end
  );

  insert into public.progress (user_id) values (new.id);

  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- ============================================================
-- Row Level Security — everyone can read/write their own data;
-- only the admin account can read everyone's data.
-- ============================================================

alter table public.profiles enable row level security;
alter table public.progress enable row level security;
alter table public.lesson_completions enable row level security;
alter table public.quiz_attempts enable row level security;
alter table public.practice_test_attempts enable row level security;

create policy "profiles_select_own_or_admin" on public.profiles
  for select using (auth.uid() = id or public.is_admin());

create policy "profiles_update_own" on public.profiles
  for update using (auth.uid() = id);

create policy "progress_select_own_or_admin" on public.progress
  for select using (auth.uid() = user_id or public.is_admin());

create policy "progress_update_own" on public.progress
  for update using (auth.uid() = user_id);

create policy "progress_insert_own" on public.progress
  for insert with check (auth.uid() = user_id);

create policy "lesson_completions_select_own_or_admin" on public.lesson_completions
  for select using (auth.uid() = user_id or public.is_admin());

create policy "lesson_completions_insert_own" on public.lesson_completions
  for insert with check (auth.uid() = user_id);

create policy "quiz_attempts_select_own_or_admin" on public.quiz_attempts
  for select using (auth.uid() = user_id or public.is_admin());

create policy "quiz_attempts_insert_own" on public.quiz_attempts
  for insert with check (auth.uid() = user_id);

create policy "practice_test_attempts_select_own_or_admin" on public.practice_test_attempts
  for select using (auth.uid() = user_id or public.is_admin());

create policy "practice_test_attempts_insert_own" on public.practice_test_attempts
  for insert with check (auth.uid() = user_id);
