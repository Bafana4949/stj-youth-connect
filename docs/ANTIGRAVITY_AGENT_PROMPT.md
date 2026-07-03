# Antigravity AI Agent Prompt

Use this prompt inside Antigravity when you open the project folder.

```text
You are helping me build the St.J Youth Connect web application.

Context:
This is a youth-led platform for St Johns Apostolic Faith Mission Church Youth Members. The idea started from a TikTok Live discussion about helping Matric learners with university, TVET, college, and funding applications, and helping unemployed youth find trusted job opportunities. The app must also support church events, sponsors, resources, and AI guidance.

Current state:
This folder contains a Next.js + TypeScript front-end prototype. It has mock data and UI pages. It also includes a Supabase starter schema in supabase/schema.sql.

Goal:
Turn the prototype into a working MVP safely and step by step.

Important working rules:
1. Inspect the existing files first and summarize the structure before making changes.
2. Make small changes per task.
3. Do not delete existing files without asking.
4. Do not run destructive commands such as rm -rf, drop database, or reset storage without confirmation.
5. Preserve the visual identity and St.J blue branding.
6. Keep the app mobile-first.
7. After each change, explain what changed and which files were edited.
8. Add tests or validation steps where possible.

Core modules:
- Study application support
- Job board with direct external application links/emails/WhatsApp/instructions
- Calendar and church events
- Resources and help centre
- AI career and job assistant
- Sponsors and our story
- Admin dashboard
- Privacy, consent, and audit logs

Recommended stack:
- Next.js App Router
- TypeScript
- Supabase Auth
- Supabase PostgreSQL
- Supabase Storage private bucket
- OpenAI API for AI guidance
- Vercel for hosting

Build order:
1. Add authentication with Supabase Auth.
2. Add role-based access control for Learner, Job Seeker, Job Poster, Volunteer, Event Manager, Moderator, Admin, and Super Admin.
3. Connect the Supabase database schema.
4. Implement learner profiles.
5. Implement secure document uploads to a private Supabase Storage bucket.
6. Implement application support requests and volunteer assignments.
7. Implement job post submission, moderation, approved public listings, and report job feature.
8. Implement event creation, editing, publishing, cancellation, and public event view.
9. Implement sponsor enquiry form and admin sponsor management.
10. Implement resource library CRUD.
11. Implement AI assistant backend with safe prompts and logging.
12. Add audit logs for sensitive actions.
13. Add production-ready privacy and consent screens.

Security requirements:
- Never store passwords for external portals.
- Volunteers must only access assigned learner cases.
- Documents must not be public.
- Use signed URLs for document access.
- Public jobs and events must be approved before publication.
- AI must provide guidance only, not final admission or employment decisions.
- Ask for consent before AI reviews documents.
- Keep audit logs for sensitive actions.

Acceptance criteria for MVP:
- Learner can register, create profile, upload documents, and request support.
- Admin can assign a learner case to a volunteer.
- Volunteer can only view assigned learner cases.
- Job poster can submit a job with URL/email/WhatsApp/instructions.
- Moderator can approve or reject jobs.
- Public users can view only approved jobs.
- Event manager can add and publish church events.
- Public users can view published public events.
- Sponsor can submit an enquiry.
- Admin can view sponsor enquiries.
- AI assistant can answer basic career/CV/application questions using safe guidance.
- Privacy and consent process exists before real document uploads.
```
