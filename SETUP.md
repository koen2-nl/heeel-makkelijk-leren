# MakkelijkLeren - Vercel & Supabase Setup

## Stap 1: Supabase Project Aanmaken

1. Ga naar [supabase.com](https://supabase.com)
2. Klik **"New Project"**
3. Kies je organisatie (of maak een nieuwe)
4. Vul in:
   - Project name: `makkelijk-leren` (of wat je wilt)
   - Database password: Veilig wachtwoord (sla op)
   - Region: EU (of dichtstbij)
5. Klik **"Create new project"** en wacht tot het klaar is (2-5 minuten)

## Stap 2: Supabase Credentials Kopieëren

1. In je Supabase project, ga naar **Settings → API**
2. Kopieer deze 3 waarden:
   - **Project URL** → Dit is `NEXT_PUBLIC_SUPABASE_URL`
   - **anon public key** → Dit is `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - **service_role secret** → Dit is `SUPABASE_SERVICE_ROLE_KEY` (KEEP PRIVATE!)

Voorbeeld:
```
NEXT_PUBLIC_SUPABASE_URL=https://abcdef123456.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

## Stap 3: Database Schema Instellen

1. In je Supabase project, ga naar **SQL Editor**
2. Klik **"New Query"**
3. Plak de volledige inhoud van `supabase/schema.sql` (uit je GitHub repo)
4. Klik **"Run"** (groen knopje)
5. Wacht tot alle tabellen/policies zijn aangemaakt

## Stap 4: Email Authentication Inschakelen

1. Ga naar **Authentication → Providers**
2. Zorg dat **Email** is ingeschakeld
3. Optioneel: Voeg Google/GitHub toe voor later

## Stap 5: Vercel Deployment

### Via GitHub (Aanbevolen):

1. Zorg dat je repo op GitHub staat (`koen2-nl/heeel-makkelijk-leren`)
2. Ga naar [vercel.com](https://vercel.com)
3. Klik **"Import Project"** (rechtsboven)
4. Plak je GitHub repo URL of kies uit je repos
5. Klik **"Import"**
6. Vul in:
   - **Project Name**: `makkelijk-leren` (of wat je wilt)
   - **Framework Preset**: Next.js (auto-geselecteerd)
   - **Root Directory**: `./` (default is goed)

### Environment Variables in Vercel:

1. Scroll naar **Environment Variables**
2. Voeg deze 4 variabelen toe (kopieëerd van Supabase):
   ```
   NEXT_PUBLIC_SUPABASE_URL = https://abcdef123456.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
   SUPABASE_SERVICE_ROLE_KEY = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
   NEXT_PUBLIC_SITE_URL = https://makkelijk-leren.vercel.app
   ```
   *(Vervang `makkelijk-leren` met je Vercel project name)*

3. Klik **"Deploy"**
4. Vercel zal je project bouwen en deployen (3-5 minuten)

## Stap 6: Supabase Auth Redirect URL's

1. Ga terug naar je Supabase project
2. **Authentication → URL Configuration**
3. Voeg deze toe onder **Redirect URLs**:
   ```
   https://makkelijk-leren.vercel.app/auth/callback
   https://makkelijk-leren.vercel.app
   http://localhost:3000
   ```
   *(Vervang `makkelijk-leren` met je Vercel project name)*

4. Zet **Site URL**:
   ```
   https://makkelijk-leren.vercel.app
   ```

## Stap 7: Test de Deployment

1. Ga naar je Vercel URL: `https://makkelijk-leren.vercel.app`
2. Je ziet de homepage
3. Klik op **"Aanmelden"**
4. Maak een testaccount aan met email/wachtwoord
5. Je account wordt aangemaakt in Supabase

## Troubleshooting

### "Database error" bij sign-up
- Controleer of `supabase/schema.sql` volledig is gerun
- Controleer of `SUPABASE_SERVICE_ROLE_KEY` correct is in Vercel

### "Invalid redirect URL"
- Zorg dat je Vercel URL in Supabase **Redirect URLs** staat

### Env vars niet geladen
- Redeploy in Vercel: **Deployments → Redeploy**
- Of push een commit naar GitHub

### Can't connect to Supabase
- Controleer `NEXT_PUBLIC_SUPABASE_URL`
- Controleer internet verbinding

## Volgende Stappen

Nu het live staat, kun je:
1. Auth flow implementeren
2. Quiz-engine bouwen
3. Daily goals/streaks/badges toevoegen
4. Content maker flow uitwerken
5. Admin dashboard

## Handige Links

- **Vercel Dashboard**: https://vercel.com/dashboard
- **Supabase Dashboard**: https://app.supabase.com
- **GitHub Repo**: https://github.com/koen2-nl/heeel-makkelijk-leren
- **Live Site**: https://makkelijk-leren.vercel.app

## Ondersteuning

Als je tegen problemen aanloopt:
- Check Vercel logs: **Deployments → log**
- Check Supabase SQL errors: **SQL Editor**
- Check browser console voor errors

