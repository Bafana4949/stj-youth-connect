import { jobs } from "@/lib/mock-data";
import { StatusBadge } from "@/components/StatusBadge";

export default function AdminJobsPage() {
  return (
    <>
      <h1 style={{ marginTop: 0 }}>Manage Jobs</h1>
      <p style={{ color: "var(--muted)", marginBottom: "32px" }}>
        Review, approve, or reject job postings submitted by users or partners.
      </p>

      <div className="admin-panel">
        <div className="table-like">
          {jobs.map((job) => (
            <div key={job.id} className="table-row">
              <strong>{job.title}</strong>
              <span>{job.company}</span>
              <StatusBadge label={job.status} />
              <div style={{ display: "flex", gap: "8px" }}>
                <button className="btn btn-primary" style={{ padding: "6px 12px", fontSize: "0.8rem" }}>Review</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
