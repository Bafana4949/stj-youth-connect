# Roadmap

## Phase 1: Prototype Foundation (Current)
- Frontend prototype built with Next.js and standard CSS.
- Public pages for jobs, events, resources, and study applications.
- **APS Calculator module added to Study Applications.**
- Mock job board, mock events, mock resources.
- Sponsor page and our story.
- Admin dashboard preview (mocked).

### Future Enhancements for APS Calculator
- University-specific APS rules and calculations.
- Course matching engine (using APS and subjects to find eligible degrees/diplomas).
- Direct AI career recommendations based on APS results.

## Phase 2: Authentication & Database
- Integrate Supabase Auth.
- Implement user roles (admin, learner, volunteer, moderator).
- Apply the database schema from `DATABASE_SCHEMA.md`.
- Convert mock forms to real database-backed submissions.

## Phase 3: Workflows & Moderation
- Enable secure document uploads to Supabase Storage.
- Volunteer assignment workflow for study applications.
- Admin dashboard CRUD operations (manage jobs, events, sponsors).
- Job and event moderation approval flows.

## Phase 4: AI Integration
- Integrate OpenAI API for the AI Assistant.
- Build CV review feature.
- Develop career guidance and APS explanation tools.
- Implement job scam checker.

## Phase 5: Notifications & Expansion
- In-app notifications.
- WhatsApp/SMS integration for reminders and updates.
- Advanced reporting and analytics for admins.
- Event RSVP tracking.
- Further mobile UI improvements.
