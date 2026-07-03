# Security Plan

## 1. Role-Based Access Control (RBAC)
- All users must authenticate via Supabase Auth.
- We will enforce access via Row Level Security (RLS) in PostgreSQL.
- Roles include: `admin`, `volunteer`, `moderator`, `learner`, and `public`.
- `admin`: Full access to manage all tables.
- `volunteer`: Can only view/manage application_requests assigned to them.
- `learner`: Can only view/edit their own profile and documents.

## 2. Private Document Storage
- Learner documents (ID copies, results) are highly sensitive.
- Documents will be stored in a private Supabase Storage bucket.
- Access requires a signed URL which is generated only after checking permissions.
- Only the document owner and authorized admins/volunteers can access these files.

## 3. POPIA-Aware Consent
- All users must explicitly agree to the Privacy Policy and terms.
- A `consent_records` table will track who agreed to what and when.
- Users have the right to request account deletion and data removal.

## 4. No Third-Party Portal Passwords
- The platform will **never** ask for users' passwords for external portals (e.g., NSFAS, Universities).
- Volunteers will assist through screen sharing or providing guidance, but learners submit applications themselves.

## 5. Audit Logs
- Critical actions (e.g., viewing a sensitive document, approving a job, assigning a volunteer) will be logged in `audit_logs` to ensure accountability.

## 6. Content Moderation
- Jobs and events submitted by users start with a `pending` or `draft` status.
- They must be reviewed and `approved` by an admin or moderator before appearing on the public feeds.
