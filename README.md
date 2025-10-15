# Culturele Introweek — Next.js project

Dit is een Next.js (TypeScript) project voor de "Culturele Introweek" webapplicatie. De repository bevat een App Router-structuur (map `app/`) en een set herbruikbare UI-componenten onder `components/`.

Kort overzicht
- Next.js 15 met React 19
- Tailwind CSS + PostCSS
- Supabase client/server helpers aanwezig in `lib/supabase`
- UI-componenten en hooks in `components/` en `hooks/`

Benodigdheden
- Node.js (aanbevolen LTS, bv. 18+)
- pnpm (de repository bevat `pnpm-lock.yaml`, gebruik daarom bij voorkeur pnpm)

Installatie
1. Clone de repo en ga naar de projectmap:

   git clone <repo-url>
   cd culturele-introweek

2. Installeer afhankelijkheden met pnpm:

```powershell
pnpm install
```

Beschikbare npm-scripts (uit `package.json`)
- dev — development server
  pnpm dev
- build — productie build
  pnpm build
- start — start de productieserver (na build)
  pnpm start
- lint — eslint over de codebase
  pnpm lint

Environment variables
De repo gebruikt Supabase en mogelijk andere services. Maak een `.env.local` in de projectroot met ten minste de Supabase-variabelen, bijvoorbeeld:

```env
NEXT_PUBLIC_SUPABASE_URL=https://xyz.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=public-anon-key
SUPABASE_SERVICE_ROLE_KEY=service-role-key  # alleen op server
```

Projectstructuur (hoog niveau)
- `app/` — Next.js App Router pagina's en layouts
- `components/` — herbruikbare UI-componenten en `ui/` submap met primitives
- `hooks/` — custom React hooks
- `lib/` — hulpfuncties, types en Supabase client code
- `public/` — statische assets
- `styles/` — globale styles

Tips & veelvoorkomende taken
- Development server:

  ```powershell
  pnpm dev
  ```

- Maak production build en draai lokaal:

  ```powershell
  pnpm build; pnpm start
  ```

- Lint check:

  ```powershell
  pnpm lint
  ```

Tests
Er zijn op dit moment geen test-scripts in `package.json`. Als je tests wilt toevoegen, overweeg Jest of Vitest en update `package.json` met de benodigde scripts.

Contributing
- Fork de repo, maak een feature-branch en open een pull request.
- Houd code-stijl consistent met de bestaande code (TypeScript, Tailwind, en de component-conventies).

Problemen/bugs
- Voeg issues toe in de tracker met stappen om te reproduceren en relevante logs.

Contact
- Voeg hier project-specifieke contactinformatie of documentatie links toe.

---

Als je wilt, kan ik:
- Een korte setup-checklist automatiseren (script) of een `.env.example` toevoegen.
- README uitbreiden met screenshots, deployment stappen (Vercel) of CI-configuratie.
