# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

All commands run from `SAT Training Prep/` (the project root containing `package.json`).

- `npm install` — install deps
- `npm run dev` — Vite dev server on port 5173 (host `0.0.0.0`)
- `npm run build` — `tsc` typecheck then `vite build` to `dist/`
- `npm run preview` — serve built bundle
- `npm run lint` — ESLint on `ts,tsx`, `--max-warnings 0` (no ESLint config committed; script will fail until one is added)

No test runner configured. `test-app.js` / `test-app.mjs` are ad-hoc smoke scripts, not a suite.

`RUN_APP.bat` (Windows) and `run_app.sh` (bash) wrap `npm run dev` and open the browser.

## Architecture

Single-page React 18 + TypeScript + Vite app. No backend — all state is in-memory plus `localStorage`. All "data" is hardcoded TS modules under `src/data/`.

### Provider stack (`src/App.tsx`)

`AuthProvider` → `NotificationProvider` → `GameificationProvider` → `Router`. Order matters: `GameificationProvider` reads no auth, but downstream pages assume all three are mounted. Routes split into public (`/`, `/login`, `/signup`) and `ProtectedRoute`-wrapped pages rendered inside `MainLayout` (Navbar + Sidebar shell).

### State persistence

Two `localStorage` keys, written by their providers and never coordinated:
- `satPrepUser` — current `User` object (`AuthContext.tsx`). Login matches against `mockUsersDatabase` in `src/data/mockUsers.ts`; password is ignored (demo). New signups are pushed into the in-memory array — lost on reload, but the new user's session survives via localStorage.
- `userGameification` — `UserGameification` (points, level, badges, streak) (`GameificationContext.tsx`). Decoupled from `User.totalPoints` / `User.currentStreak` in the type; the gameification context is the source of truth for runtime gamification, the `User` fields are static seed data.

When changing reward logic, update both the reducer in `GameificationContext` AND the pure helpers in `src/services/GamificationService.ts` (the service is the calculator; the context is the store). `useLessonRewards` / `useQuizRewards` hooks compose them.

### Data layer

`src/data/` is the "database":
- `lessons/{readingWriting,math,essay}.ts` aggregated by `lessons/index.ts` into `allLessons` with `getLessonById` / `getLessonsBySubject` / `getLessonsByTopic` / `getLessonsByDifficulty` lookups.
- `quizzes/index.ts`, `tests/{practiceTests,testQuestions,testResults}.ts`, `gamification/{badges,levels}.ts` follow the same flat-array + lookup-helper pattern.
- `mockUsers.ts` is mutable at runtime (signup pushes into it).

When adding lessons/quizzes/badges, append to the topic file and let `index.ts` re-export — pages import only from `index.ts`.

### Types

`src/types/index.ts` is the single type source. Domain enums (`Subject`, `TopicType`, `DifficultyLevel`, `BadgeCategory`, `PointsReason`) are string literal unions — extending them requires touching seed data that uses the old values.

Note the typo `Gameification` (vs `Gamification`) is consistent throughout context/provider/hook names; the service class is spelled `GamificationService`. Don't "fix" one without the other — imports will break.

## Conventions

- TypeScript `strict` + `noUnusedLocals` + `noUnusedParameters`. Unused params must be prefixed `_` (see `_password` in `AuthContext.login`).
- Functional components only, named exports (`export const Foo: React.FC = ...`); `App.tsx` also default-exports.
- Path imports are relative; no path aliases configured.
- Styles are plain CSS files under `src/components/styles/` and `src/pages/*.css`, imported directly by components. No CSS modules / Tailwind.
- Icons: `lucide-react`. Charts: `recharts` (Phase 4).

## Repo notes

- Many `vite.config.ts.timestamp-*.mjs` files are Vite's reload artifacts — safe to ignore / delete, do not edit.
- `PHASE*.md`, `*_GUIDE.md`, `PROJECT_REVIEW.md` are progress/design docs; treat as historical context, not specs. The `README.md` describes Phase 1 only and is stale relative to current code (Phases 2–4 features exist).
- The outer `SATPreparation/` directory contains only the `SAT Training Prep/` project folder; `cd` into it for all work.
