import Link from "next/link";
import { JobPost } from "@/lib/types";
import { StatusBadge } from "./StatusBadge";

export function JobCard({ job }: { job: JobPost }) {
  return (
    <article className="job-card">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <h3>{job.title}</h3>
        <StatusBadge label={job.status} />
      </div>
      <p>
        <strong>{job.company}</strong> • {job.location}
      </p>
      <div className="meta-row">
        <span className="pill">{job.type}</span>
        <span className="pill">Closes: {new Date(job.closingDate).toLocaleDateString()}</span>
      </div>
      <p>{job.description}</p>
      <Link href={`/jobs/${job.id}`} className="text-link">
        View details →
      </Link>
    </article>
  );
}
