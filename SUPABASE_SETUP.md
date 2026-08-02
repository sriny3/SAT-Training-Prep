# Backend Setup (Supabase)

This app now uses [Supabase](https://supabase.com) for real accounts and
progress storage, so an admin can see every student's progress from any
device — not just localStorage on one browser.

## 1. Create a Supabase project

1. Go to https://supabase.com and sign up / log in (free tier is enough).
2. Click **New project**. Pick any name/region, set a database password
   (you won't need it day-to-day — Supabase manages it).
3. Wait ~2 minutes for the project to finish provisioning.

## 2. Run the schema

1. In your project, open **SQL Editor** (left sidebar) → **New query**.
2. Open `supabase/schema.sql` in this repo, copy the whole file, paste it
   into the query editor, and click **Run**.
3. This creates the `profiles`, `progress`, `lesson_completions`,
   `quiz_attempts`, and `practice_test_attempts` tables, a trigger that
   auto-creates a profile on signup, and row-level security policies so
   users can only see their own data — except the admin account, which can
   see everyone's.

## 3. (Recommended) Turn off email confirmation for this demo

Since this is a single-team demo app, not a public product, skipping email
confirmation makes signup instant instead of requiring a confirmation
email click:

1. **Authentication** → **Providers** → **Email**.
2. Turn off **Confirm email**.
3. Save.

(You can leave it on if you'd rather have real email verification — signup
will just show a "check your email" message until confirmed.)

## 4. Get your API keys

1. **Project Settings** (gear icon) → **API**.
2. Copy the **Project URL** and the **anon public** key.

## 5. Add them to the app

**Locally:**

```bash
cd "SAT Training Prep"
cp .env.example .env.local
```

Edit `.env.local` and paste in your values:

```
VITE_SUPABASE_URL=https://your-project-ref.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-public-key
```

Restart `npm run dev` after saving.

**On Vercel** (for the deployed site):

1. Project → **Settings** → **Environment Variables**.
2. Add `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` with the same values.
3. Redeploy (Vercel → Deployments → ⋯ → Redeploy).

## 6. Create the admin account

Go to `/signup` in the app and sign up with **sriny3@gmail.com** and any
password (6+ characters). The database trigger automatically grants that
exact email admin access — every other email that signs up becomes a
regular student. Once logged in as admin, you'll see an **Admin Dashboard**
link in the sidebar showing every registered student's points, level,
streak, badges, and full lesson/quiz/practice-test history.

## What's stored where

| Table | Purpose |
|---|---|
| `profiles` | Name, email, grade level, role (admin/student) |
| `progress` | Points, level, streak, badges — one row per account |
| `lesson_completions` | One row per lesson a student finishes |
| `quiz_attempts` | One row per quiz submission, with score |
| `practice_test_attempts` | One row per practice test submission, with score |

All five tables have row-level security: a normal account can only read
and write its own rows; the admin account (sriny3@gmail.com) can read
every row.
