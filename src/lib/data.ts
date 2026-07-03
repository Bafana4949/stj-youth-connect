import type { ChurchEvent, JobPost, LearnerCase, ResourceArticle, Role } from "./types";

export const roles: Role[] = [
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

export const learnerCases: LearnerCase[] = [
  {
    id: "case-001",
    learnerName: "Nomsa M.",
    matricYear: "2026",
    province: "Mpumalanga",
    status: "In Progress",
    assignedVolunteer: "Thando",
    checklistComplete: 5,
    checklistTotal: 9
  },
  {
    id: "case-002",
    learnerName: "Sipho K.",
    matricYear: "2025",
    province: "Gauteng",
    status: "Waiting for Learner",
    assignedVolunteer: "Lerato",
    checklistComplete: 3,
    checklistTotal: 9
  },
  {
    id: "case-003",
    learnerName: "Anele D.",
    matricYear: "2026",
    province: "Limpopo",
    status: "Assigned",
    assignedVolunteer: "Bafana",
    checklistComplete: 2,
    checklistTotal: 9
  }
];

export const jobs: JobPost[] = [
  {
    id: "job-001",
    title: "Retail Assistant Learnership",
    company: "Community Retail Partner",
    location: "Witbank, Mpumalanga",
    type: "Learnership",
    closingDate: "2026-08-15",
    status: "Approved",
    summary: "Entry-level opportunity for youth with Grade 12 and good communication skills.",
    requirements: ["Grade 12", "Basic computer literacy", "Available full-time", "No upfront payment required"],
    applicationMethod: "Company Website",
    applicationTarget: "https://example.com/careers"
  },
  {
    id: "job-002",
    title: "Junior Admin Assistant",
    company: "Local Business Network",
    location: "Pretoria, Gauteng",
    type: "Full-time",
    closingDate: "2026-08-30",
    status: "Pending Review",
    summary: "Office support role for a young person with computer skills and good English communication.",
    requirements: ["Grade 12", "MS Word and Excel", "Professional CV", "Contactable references"],
    applicationMethod: "Email",
    applicationTarget: "hr@example.com"
  },
  {
    id: "job-003",
    title: "ICT Support Internship",
    company: "MayTech Solutions Partner",
    location: "Hybrid / Pretoria",
    type: "Internship",
    closingDate: "2026-09-10",
    status: "Approved",
    summary: "Basic IT support internship for youth interested in helpdesk, networking, and systems support.",
    requirements: ["Computer Science or IT background", "Basic networking", "Problem-solving skills", "Willingness to learn"],
    applicationMethod: "Email",
    applicationTarget: "careers@example.com"
  }
];

export const events: ChurchEvent[] = [
  {
    id: "event-001",
    title: "Matric Application Support Day",
    category: "Education Support",
    date: "2026-07-18",
    time: "10:00 - 14:00",
    location: "St.J Youth Centre",
    status: "Published",
    visibility: "Public",
    description: "Youth volunteers help learners prepare documents and understand university, TVET, and NSFAS application steps."
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
    description: "A practical workshop for unemployed youth to improve CVs, cover letters, and interview confidence."
  },
  {
    id: "event-003",
    title: "Youth Prayer and Planning Meeting",
    category: "Youth Event",
    date: "2026-08-01",
    time: "16:00 - 18:00",
    location: "Main Church",
    status: "Draft",
    visibility: "Private",
    description: "Internal planning session for youth leaders and volunteers."
  }
];

export const resources: ResourceArticle[] = [
  {
    id: "res-001",
    title: "How to prepare for university applications",
    category: "Study Applications",
    summary: "A simple checklist for Matric learners before applying to universities or colleges.",
    readTime: "5 min"
  },
  {
    id: "res-002",
    title: "How to avoid job scams",
    category: "Employment",
    summary: "Warning signs to check before sending your CV, ID copy, or personal information.",
    readTime: "4 min"
  },
  {
    id: "res-003",
    title: "Writing a strong entry-level CV",
    category: "CV Support",
    summary: "Guidance for youth with little or no work experience.",
    readTime: "6 min"
  },
  {
    id: "res-004",
    title: "What our sponsors can support",
    category: "Sponsors",
    summary: "Data, devices, printing, mentorship, workshops, and opportunities for young people.",
    readTime: "3 min"
  }
];

export const aiPrompts = [
  "Help me choose a career based on my subjects and marks.",
  "Review my CV and tell me what to improve.",
  "Write a cover letter for a retail assistant job.",
  "Explain what APS means in simple language.",
  "Check if this job post looks suspicious."
];
