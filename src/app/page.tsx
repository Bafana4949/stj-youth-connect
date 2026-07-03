import Link from "next/link";
import { FeatureCard } from "@/components/FeatureCard";
import { DashboardCard } from "@/components/DashboardCard";
import { events, jobs, stats } from "@/lib/mock-data";
import { StatusBadge } from "@/components/StatusBadge";

export default function HomePage() {
  const approvedJobs = jobs.filter((job) => job.status === "Approved").slice(0, 2);
  const publicEvents = events.filter((event) => event.status === "Published" && event.visibility === "Public").slice(0, 2);

  return (
    <>
      <section className="home-hero">
        <div className="hero-copy">
          <span className="eyebrow">Church youth community platform</span>
          <h1>Helping young people move from dreams to action.</h1>
          <p>
            St.J Youth Connect supports Matric learners with study applications, helps unemployed youth find
            opportunities, shares church events, provides resources, and introduces AI-powered career guidance.
          </p>
          <div className="hero-actions">
            <Link className="btn btn-primary" href="/study-applications">
              Start study support
            </Link>
            <Link className="btn btn-secondary" href="/jobs">
              View job opportunities
            </Link>
          </div>
        </div>
        <aside className="hero-panel">
          <h2>Prototype focus</h2>
          <ul className="check-list">
            <li>Learner application checklist and volunteer support cases.</li>
            <li>Verified job board with external company apply links and emails.</li>
            <li>Church calendar for youth events, workshops, and deadlines.</li>
            <li>Sponsor page explaining the origin of the idea and support needed.</li>
            <li>AI assistant concept for careers, CVs, cover letters, and scam checks.</li>
          </ul>
        </aside>
      </section>

      <section className="section">
        <div className="grid-4">
          {stats.map((stat) => (
            <DashboardCard key={stat.label} {...stat} />
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Main modules</span>
            <h2>One platform for learners, job seekers, church members, volunteers, and sponsors.</h2>
          </div>
          <p>
            This prototype is front-end first. The database schema and Antigravity AI agent instructions are included in
            the project folder so the backend can be connected next.
          </p>
        </div>
        <div className="grid-3">
          <FeatureCard
            eyebrow="Education"
            title="Study Application Support"
            description="Profiles, documents, checklists, APS guidance, and volunteer support for Matric learners."
            href="/study-applications"
          />
          <FeatureCard
            eyebrow="Employment"
            title="Verified Job Board"
            description="Job posters provide URLs, emails, WhatsApp numbers, or instructions so applicants apply directly."
            href="/jobs"
          />
          <FeatureCard
            eyebrow="Church"
            title="Calendar & Events"
            description="Admins and event managers publish church events, youth workshops, application days, and deadlines."
            href="/events"
          />
          <FeatureCard
            eyebrow="AI"
            title="AI Career Assistant"
            description="Career choices, CV reviews, cover letters, APS explanations, job matching, and scam checks."
            href="/ai-assistant"
          />
          <FeatureCard
            eyebrow="Resources"
            title="Help Centre"
            description="Guides for applications, NSFAS, CV writing, interviews, job safety, and official links."
            href="/resources"
          />
          <FeatureCard
            eyebrow="Sponsors"
            title="Our Story & Support Us"
            description="Explain how the idea started on TikTok Live and invite sponsors to support the youth mission."
            href="/support-us"
          />
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Our story</span>
            <h2>Born from a youth discussion.</h2>
          </div>
        </div>
        <div className="grid-2">
          <article className="card">
            <h3>Where the idea came from</h3>
            <p>
              The idea started from a TikTok Live discussion by St Johns Apostolic Faith Mission Church Youth Members.
              The youth spoke about the need to help Matric learners with study applications and unemployed youth with
              trusted job opportunities.
            </p>
            <p>
              The platform is designed to bring guidance, opportunities, church events, and community support closer to
              young people.
            </p>
          </article>
          <article className="card">
            <h3>We are seeking sponsors</h3>
            <p>
              Sponsors can help with hosting, data, devices, printing, workshops, mentorship, transport, AI costs, and
              opportunities for young people.
            </p>
            <Link href="/support-us" className="btn btn-dark">
              Support the initiative
            </Link>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Live previews</span>
            <h2>Approved jobs and upcoming events.</h2>
          </div>
        </div>
        <div className="grid-2">
          <div className="card">
            <h3>Latest approved jobs</h3>
            {approvedJobs.map((job) => (
              <div key={job.id} className="table-row">
                <strong>{job.title}</strong>
                <span>{job.company}</span>
                <span>{job.location}</span>
                <StatusBadge label={job.status} />
              </div>
            ))}
          </div>
          <div className="card">
            <h3>Upcoming church events</h3>
            {publicEvents.map((event) => (
              <div key={event.id} className="table-row">
                <strong>{event.title}</strong>
                <span>{new Date(event.date).toLocaleDateString()}</span>
                <span>{event.location}</span>
                <StatusBadge label={event.status} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
