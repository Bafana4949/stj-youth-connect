export type UserRole =
  | "Guest"
  | "Learner"
  | "Job Seeker"
  | "Job Poster"
  | "Volunteer"
  | "Event Manager"
  | "Moderator"
  | "Admin"
  | "Super Admin";

export interface LearnerProfile {
  id: string;
  userId: string;
  fullName: string;
  idNumber: string;
  grade: string;
  province: string;
  apsScore?: number;
  createdAt: string;
}

export type DocumentStatus = "Pending" | "Verified" | "Rejected";
export interface DocumentRecord {
  id: string;
  userId: string;
  documentType: "ID" | "Results" | "ProofOfRes" | "Other";
  storagePath: string;
  status: DocumentStatus;
  createdAt: string;
}

export type SupportStatus = "New" | "Assigned" | "In Progress" | "Waiting for Learner" | "Submitted" | "Closed";
export interface ApplicationRequest {
  id: string;
  learnerId: string;
  institution: string;
  status: SupportStatus;
  volunteerId?: string;
  createdAt: string;
}

export type JobStatus = "Pending Review" | "Approved" | "Rejected" | "Expired";
export interface JobPost {
  id: string;
  title: string;
  company: string;
  location: string;
  province: string;
  type: string;
  closingDate: string;
  status: JobStatus;
  description: string;
  requirements: string[];
  salaryRange?: string;
  applicationMethod: "Company Website" | "Email" | "WhatsApp" | "Walk-in";
  applicationUrl?: string;
  applicationEmail?: string;
  applicationPhone?: string;
  applicationInstructions: string;
}

export type EventStatus = "Draft" | "Published" | "Cancelled" | "Completed";
export type EventVisibility = "Public" | "Private";
export interface Event {
  id: string;
  title: string;
  category: "Church Service" | "Youth Event" | "Education Support" | "Career Support" | "Deadline Reminder" | "Community Outreach" | "Leadership Meeting" | "Other";
  date: string;
  time: string;
  location: string;
  status: EventStatus;
  visibility: EventVisibility;
  description: string;
}

export interface ResourceArticle {
  id: string;
  title: string;
  category: string;
  summary: string;
  readTime: string;
  url?: string;
}

export type SponsorStatus = "New" | "Contacted" | "Closed";
export interface SponsorEnquiry {
  id: string;
  fullName: string;
  organization: string;
  email: string;
  phone: string;
  supportType: string;
  message: string;
  status: SponsorStatus;
  createdAt: string;
}

export interface AiRecommendation {
  id: string;
  userId: string;
  topic: string;
  advice: string;
  createdAt: string;
}

export interface AuditLog {
  id: string;
  userId: string;
  action: string;
  entityType: string;
  entityId: string;
  timestamp: string;
}

export type ApsSubject = {
  id: string;
  name: string;
  percentage: number;
  isLifeOrientation?: boolean;
}

export type ApsSubjectWithPoints = ApsSubject & {
  apsPoints: number;
}

export type ApsCalculationResult = {
  totalAps: number;
  maxAps: number;
  subjectsUsed: ApsSubjectWithPoints[];
  subjectsExcluded: ApsSubjectWithPoints[];
  lifeOrientationExcluded: boolean;
  guidanceBand: string;
  warnings: string[];
}
