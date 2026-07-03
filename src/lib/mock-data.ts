import type { Event, JobPost, ApplicationRequest, ResourceArticle, UserRole, SponsorEnquiry } from "./types";

export const roles: UserRole[] = [
  "Guest",
  "Learner",
  "Job Seeker",
  "Job Poster",
  "Volunteer",
  "Event Manager",
  "Moderator",
  "Admin",
  "Super Admin"
];

export const stats = [
  { label: "Learners supported", value: "120+", helper: "Prototype impact target" },
  { label: "Verified jobs shared", value: "45", helper: "Approved opportunities" },
  { label: "Youth events", value: "12", helper: "Workshops and services" },
  { label: "Volunteers", value: "18", helper: "Church youth helpers" }
];

export const applicationChecklist = [
  "ID document copy (certified)",
  "Grade 11 results",
  "Matric results (if available)",
  "Proof of residence",
  "Parent/guardian documents (if required)",
  "NSFAS guidance completed",
  "Institution choices selected",
  "Application submitted on official portal",
  "Reference number captured"
];

export const jobs: JobPost[] = [
  {
    id: "job-001",
    title: "Retail Assistant Learnership",
    company: "Community Retail Partner",
    location: "Witbank",
    province: "Mpumalanga",
    type: "Learnership",
    closingDate: "2026-08-15",
    status: "Approved",
    description: "Entry-level opportunity for youth with Grade 12 and good communication skills to work in our local stores.",
    requirements: ["Grade 12", "Basic computer literacy", "Available full-time", "No upfront payment required"],
    applicationMethod: "Company Website",
    applicationUrl: "https://example.com/careers",
    applicationInstructions: "Apply directly on the company website using the link provided."
  },
  {
    id: "job-002",
    title: "Junior Admin Assistant",
    company: "Local Business Network",
    location: "Pretoria",
    province: "Gauteng",
    type: "Full-time",
    closingDate: "2026-08-30",
    status: "Pending Review",
    description: "Office support role for a young person with computer skills and good English communication. You will assist with daily admin tasks.",
    requirements: ["Grade 12", "MS Word and Excel", "Professional CV", "Contactable references"],
    applicationMethod: "Email",
    applicationEmail: "hr@example.com",
    applicationInstructions: "Email your CV and ID copy to hr@example.com with the subject line 'Junior Admin Assistant'."
  },
  {
    id: "job-003",
    title: "ICT Support Internship",
    company: "MayTech Solutions Partner",
    location: "Hybrid",
    province: "Pretoria",
    type: "Internship",
    closingDate: "2026-09-10",
    status: "Approved",
    description: "Basic IT support internship for youth interested in helpdesk, networking, and systems support. Great learning opportunity.",
    requirements: ["Computer Science or IT background", "Basic networking", "Problem-solving skills", "Willingness to learn"],
    applicationMethod: "WhatsApp",
    applicationPhone: "+27820000000",
    applicationInstructions: "Send a WhatsApp message with your name and 'IT Internship' to the number provided to receive the application form."
  }
];

export const events: Event[] = [
  {
    id: "event-001",
    title: "Matric Application Support Day",
    category: "Education Support",
    date: "2026-07-18",
    time: "10:00 - 14:00",
    location: "St.J Youth Centre",
    status: "Published",
    visibility: "Public",
    description: "Youth volunteers help learners prepare documents and understand university, TVET, and NSFAS application steps. Bring your ID and results."
  },
  {
    id: "event-002",
    title: "CV Writing Workshop",
    category: "Career Support",
    date: "2026-07-25",
    time: "11:00 - 13:00",
    location: "Church Hall",
    status: "Published",
    visibility: "Public",
    description: "A practical workshop for unemployed youth to improve CVs, cover letters, and interview confidence. Laptops will be available."
  },
  {
    id: "event-003",
    title: "Youth Prayer and Planning Meeting",
    category: "Leadership Meeting",
    date: "2026-08-01",
    time: "16:00 - 18:00",
    location: "Main Church",
    status: "Draft",
    visibility: "Private",
    description: "Internal planning session for youth leaders and volunteers to coordinate the upcoming quarter."
  }
];

export const resources: ResourceArticle[] = [
  {
    id: "res-001",
    title: "How to prepare for university applications",
    category: "University applications",
    summary: "A simple checklist for Matric learners before applying to universities or colleges.",
    readTime: "5 min"
  },
  {
    id: "res-002",
    title: "NSFAS Application Guide",
    category: "NSFAS guidance",
    summary: "Step-by-step guide to applying for NSFAS funding.",
    readTime: "7 min"
  },
  {
    id: "res-003",
    title: "How to avoid job scams",
    category: "Job scam awareness",
    summary: "Warning signs to check before sending your CV, ID copy, or personal information.",
    readTime: "4 min"
  },
  {
    id: "res-004",
    title: "Writing a strong entry-level CV",
    category: "CV writing",
    summary: "Guidance for youth with little or no work experience.",
    readTime: "6 min"
  }
];

export const aiPrompts = [
  "Help me choose a career based on my subjects and marks.",
  "Review my CV and tell me what to improve.",
  "Write a cover letter for a retail assistant job.",
  "Explain what APS means in simple language.",
  "Check if this job post looks suspicious."
];
