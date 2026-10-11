# MakkelijkLeren

MakkelijkLeren is a modern learning platform built with Next.js, Supabase, and Vercel, designed for daily learning goals, quiz sessions, streaks, badges, and content creation workflows.

## Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Supabase Auth + PostgreSQL
- Vercel deployment

## Quick start

1. Install dependencies:
   ```bash
   npm install
   ```
2. Create your local env file:
   ```bash
   cp .env.example .env.local
   ```
3. Fill in your Supabase values.
4. Start the app:
   ```bash
   npm run dev
   ```

## Supabase setup

1. Create a new project in Supabase.
2. Open Settings > API.
3. Copy the Project URL and anon key.
4. Set them in `.env.local`.
5. Run the SQL from `supabase/schema.sql` in the Supabase SQL editor.
6. Enable email/password auth.

## Vercel deployment

1. Push the repo to GitHub.
2. Import it in Vercel.
3. Add environment variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
   - `NEXT_PUBLIC_SITE_URL`
4. Deploy.

## MVP included

- auth-ready structure
- role-based UI shell
- dashboard
- learning overview
- creator dashboard
- quiz overview
- results page
- daily goal + streak concept
- leaderboard
- admin panel
- Supabase schema starter

## Notes

This repo contains the architecture and MVP foundation for the product requirements. You should connect Supabase, enable RLS, and finalize the content flows before production use.
