# St.J Youth Connect Prototype

This is a front-end MVP prototype for the **St Johns Apostolic Faith Mission Church Youth Members** web application.

The system idea started from a TikTok Live discussion by church youth members about helping:

- Matric learners with university, TVET, college, funding, and career guidance.
- Unemployed youth with trusted job opportunities, CV support, and career preparation.
- Church members with events, announcements, and youth programmes.
- Sponsors and partners who want to support youth development.

## Included prototype modules

- Home page with mission, origin story, sponsors message, and module overview.
- Study application support preview (including **Interactive APS Calculator**).
- Job board where applicants apply directly to company URLs, emails, WhatsApp numbers, or instructions.
- Church calendar and events preview.
- Resource library preview.
- AI assistant concept page.
- Support Us / Sponsors page.
- Admin dashboard preview.
- Privacy and consent page.

## Tech stack

- Next.js (App Router)
- TypeScript
- React
- Custom CSS (`globals.css`)
- Supabase ready
- OpenAI API ready
- Vercel ready

## How to run locally

Open the folder in your IDE, then run:

```bash
npm install
npm run dev
```

Open `http://localhost:3000`

## Environment variables

Copy `.env.example` to `.env.local` and fill in your keys later:

```bash
cp .env.example .env.local
```

Required later:

```text
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
OPENAI_API_KEY=
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## Folder Structure

```text
app/
  about/
  our-story/
  support-us/
  study-applications/
  jobs/
    [id]/
  events/
    [id]/
  resources/
  ai-assistant/
  privacy/
  admin/
    jobs/
    events/
    applications/
    sponsors/
components/
lib/
docs/
```

## Documentation

See the `docs/` folder for detailed planning:
- `DATABASE_SCHEMA.md`
- `SECURITY_PLAN.md`
- `ROADMAP.md`
- `ANTIGRAVITY_AGENT_PROMPT.md`

## Important safety notes

Never collect or store learner passwords for external portals such as NSFAS, university portals, email accounts, or SAYouth. Ensure all documents are kept in a private bucket with RLS enabled.
