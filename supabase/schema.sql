-- St.J Youth Connect prototype database schema
-- Use this as a starting point in Supabase SQL Editor.
-- Review and strengthen Row Level Security policies before production.

create extension if not exists "pgcrypto";

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text not null,
  phone text,
  province text,
  status text not null default 'active',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.roles (
  id uuid primary key default gen_random_uuid(),
  name text unique not null,
  description text,
  created_at timestamptz not null default now()
);

create table if not exists public.user_roles (
  user_id uuid references public.profiles(id) on delete cascade,
  role_id uuid references public.roles(id) on delete cascade,
  created_at timestamptz not null default now(),
  primary key (user_id, role_id)
);

insert into public.roles (name, description) values
  ('learner', 'Matric learner or study applicant'),
  ('job_seeker', 'User looking for job opportunities'),
  ('job_poster', 'Person or organization submitting jobs'),
  ('volunteer', 'Approved youth volunteer helping assigned learners'),
  ('event_manager', 'Person allowed to add church events'),
  ('moderator', 'Person allowed to approve or reject public content'),
  ('admin', 'Administrator managing users and platform content'),
  ('super_admin', 'Top-level administrator and compliance owner')
on conflict (name) do nothing;

create table if not exists public.learner_profiles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid unique not null references public.profiles(id) on delete cascade,
  school_name text,
  matric_year text,
  grade11_average numeric,
  matric_average numeric,
  subjects jsonb default '[]'::jsonb,
  preferred_fields text[],
  preferred_province text,
  guardian_contact text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.documents (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  document_type text not null,
  file_name text not null,
  storage_path text not null,
  mime_type text,
  file_size_bytes integer,
  status text not null default 'uploaded',
  verified_by uuid references public.profiles(id),
  verified_at timestamptz,
  created_at timestamptz not null default now()
);

create table if not exists public.application_requests (
  id uuid primary key default gen_random_uuid(),
  learner_id uuid not null references public.learner_profiles(id) on delete cascade,
  status text not null default 'new',
  priority text not null default 'normal',
  support_type text not null default 'study_application',
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.volunteer_assignments (
  id uuid primary key default gen_random_uuid(),
  application_request_id uuid not null references public.application_requests(id) on delete cascade,
  volunteer_user_id uuid not null references public.profiles(id) on delete cascade,
  assigned_by uuid references public.profiles(id),
  assigned_at timestamptz not null default now(),
  unique (application_request_id, volunteer_user_id)
);

create table if not exists public.job_posts (
  id uuid primary key default gen_random_uuid(),
  posted_by_user_id uuid references public.profiles(id) on delete set null,
  company_name text not null,
  job_title text not null,
  job_description text not null,
  requirements text,
  responsibilities text,
  location text not null,
  province text,
  job_type text,
  salary_range text,
  closing_date date,
  application_method text not null,
  application_url text,
  application_email text,
  application_phone text,
  application_instructions text not null,
  status text not null default 'pending_review',
  reviewed_by uuid references public.profiles(id),
  reviewed_at timestamptz,
  rejection_reason text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint job_application_contact_required check (
    application_url is not null or application_email is not null or application_phone is not null or length(application_instructions) > 0
  )
);

create table if not exists public.job_reports (
  id uuid primary key default gen_random_uuid(),
  job_post_id uuid not null references public.job_posts(id) on delete cascade,
  reported_by uuid references public.profiles(id) on delete set null,
  reason text not null,
  details text,
  status text not null default 'new',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.events (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  category text not null,
  location text,
  start_at timestamptz not null,
  end_at timestamptz,
  is_all_day boolean not null default false,
  is_public boolean not null default true,
  status text not null default 'draft',
  created_by_user_id uuid references public.profiles(id),
  updated_by_user_id uuid references public.profiles(id),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.resources (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  category text not null,
  content text not null,
  source_url text,
  status text not null default 'draft',
  verified_by uuid references public.profiles(id),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.sponsor_enquiries (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  organization_name text,
  email text not null,
  phone text,
  support_type text not null,
  message text,
  status text not null default 'new',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.ai_conversations (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references public.profiles(id) on delete cascade,
  topic text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.ai_messages (
  id uuid primary key default gen_random_uuid(),
  conversation_id uuid not null references public.ai_conversations(id) on delete cascade,
  role text not null,
  message text not null,
  created_at timestamptz not null default now()
);

create table if not exists public.consent_records (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references public.profiles(id) on delete cascade,
  consent_type text not null,
  consent_text text not null,
  accepted boolean not null default false,
  ip_address text,
  created_at timestamptz not null default now()
);

create table if not exists public.audit_logs (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references public.profiles(id) on delete set null,
  action text not null,
  entity_type text not null,
  entity_id uuid,
  metadata jsonb default '{}'::jsonb,
  ip_address text,
  created_at timestamptz not null default now()
);

-- Enable RLS. Policies must be completed before production.
alter table public.profiles enable row level security;
alter table public.user_roles enable row level security;
alter table public.learner_profiles enable row level security;
alter table public.documents enable row level security;
alter table public.application_requests enable row level security;
alter table public.volunteer_assignments enable row level security;
alter table public.job_posts enable row level security;
alter table public.job_reports enable row level security;
alter table public.events enable row level security;
alter table public.resources enable row level security;
alter table public.sponsor_enquiries enable row level security;
alter table public.ai_conversations enable row level security;
alter table public.ai_messages enable row level security;
alter table public.consent_records enable row level security;
alter table public.audit_logs enable row level security;

-- Starter read policies for public content only.
create policy "Published public events are readable" on public.events
for select using (status = 'published' and is_public = true);

create policy "Approved jobs are readable" on public.job_posts
for select using (status = 'approved');

create policy "Published resources are readable" on public.resources
for select using (status = 'published');
