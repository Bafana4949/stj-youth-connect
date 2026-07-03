# Database Schema (Planned)

The following schema is planned for the Supabase PostgreSQL database.

## Tables

### `users` (Managed by Supabase Auth)
- Core authentication user records.

### `roles`
- `id` (uuid)
- `name` (text: admin, volunteer, moderator, learner, job_seeker)

### `user_roles`
- `user_id` (uuid, fk to users)
- `role_id` (uuid, fk to roles)

### `learner_profiles`
- `id` (uuid, pk)
- `user_id` (uuid, fk to users)
- `full_name` (text)
- `id_number` (text)
- `grade` (text)
- `province` (text)
- `aps_score` (integer)
- `created_at` (timestamp)

### `documents`
- `id` (uuid, pk)
- `user_id` (uuid, fk to users)
- `document_type` (text: ID, Results, ProofOfRes, etc.)
- `storage_path` (text)
- `status` (text: pending, verified, rejected)
- `created_at` (timestamp)

### `application_requests`
- `id` (uuid, pk)
- `learner_id` (uuid, fk to learner_profiles)
- `institution` (text)
- `status` (text: pending, in-progress, completed)
- `volunteer_id` (uuid, fk to users, nullable)

### `job_posts`
- `id` (uuid, pk)
- `title` (text)
- `company` (text)
- `location` (text)
- `province` (text)
- `job_type` (text)
- `description` (text)
- `requirements` (text)
- `closing_date` (date)
- `application_url` (text, nullable)
- `application_email` (text, nullable)
- `application_phone` (text, nullable)
- `application_instructions` (text)
- `status` (text: pending, approved, rejected, expired)
- `created_at` (timestamp)

### `events`
- `id` (uuid, pk)
- `title` (text)
- `description` (text)
- `category` (text)
- `location` (text)
- `start_time` (timestamp)
- `end_time` (timestamp)
- `status` (text: draft, published, cancelled, completed)
- `visibility` (text: public, private)

### `resources`
- `id` (uuid, pk)
- `title` (text)
- `category` (text)
- `content` (text)
- `url` (text, nullable)
- `created_at` (timestamp)

### `sponsor_enquiries`
- `id` (uuid, pk)
- `full_name` (text)
- `organization` (text)
- `email` (text)
- `phone` (text)
- `support_type` (text)
- `message` (text)
- `status` (text: new, contacted, closed)
- `created_at` (timestamp)

### `ai_conversations` & `ai_messages`
- Store AI chat history for users.

### `audit_logs`
- `id` (uuid, pk)
- `user_id` (uuid, fk to users)
- `action` (text)
- `entity_type` (text)
- `entity_id` (uuid)
- `timestamp` (timestamp)
