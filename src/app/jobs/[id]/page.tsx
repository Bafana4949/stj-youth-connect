import { jobs } from "@/lib/mock-data";
import { StatusBadge } from "@/components/StatusBadge";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function JobDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const job = jobs.find(j => j.id === resolvedParams.id);
  
  if (!job) {
    return notFound();
  }

  return (
    <>
      <section className="page-hero" style={{ paddingBottom: "40px" }}>
        <Link href="/jobs" className="text-link" style={{ marginBottom: "20px", display: "inline-block" }}>
          ← Back to Jobs
        </Link>
        <div style={{ display: "flex", gap: "12px", alignItems: "center", marginBottom: "16px" }}>
          <StatusBadge label={job.status} />
          <span className="eyebrow">{job.type}</span>
        </div>
        <h1>{job.title}</h1>
        <p style={{ fontSize: "1.2rem", color: "var(--blue-950)", fontWeight: "600" }}>
          {job.company} • {job.location} ({job.province})
        </p>
      </section>

      <section className="section">
        <div className="admin-layout" style={{ gridTemplateColumns: "1fr 340px" }}>
          <div className="form-panel">
            <h2>Job Description</h2>
            <p style={{ whiteSpace: "pre-line", marginBottom: "32px" }}>{job.description}</p>
            
            <h2>Requirements</h2>
            <ul className="check-list" style={{ marginTop: "16px" }}>
              {job.requirements.map((req, idx) => (
                <li key={idx}>{req}</li>
              ))}
            </ul>
          </div>
          
          <aside className="form-panel" style={{ alignSelf: "start" }}>
            <h3>How to Apply</h3>
            <p style={{ marginBottom: "16px" }}>{job.applicationInstructions}</p>
            
            <div style={{ marginTop: "24px" }}>
              {job.applicationUrl && (
                <a href={job.applicationUrl} target="_blank" rel="noopener noreferrer" className="btn btn-dark" style={{ width: "100%", marginBottom: "12px" }}>
                  Apply on Company Website
                </a>
              )}
              {job.applicationEmail && (
                <a href={`mailto:${job.applicationEmail}`} className="btn btn-primary" style={{ width: "100%", marginBottom: "12px" }}>
                  Apply by Email
                </a>
              )}
              {job.applicationPhone && (
                <a href={`https://wa.me/${job.applicationPhone.replace(/\+/g, '')}`} target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ width: "100%", color: "var(--ink)" }}>
                  Contact / WhatsApp
                </a>
              )}
            </div>
            
            <div style={{ marginTop: "32px", fontSize: "0.85rem", color: "var(--muted)" }}>
              <strong>Closing Date:</strong> {new Date(job.closingDate).toLocaleDateString()}
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
