import { jobs } from "@/lib/mock-data";
import { JobCard } from "@/components/JobCard";

export default function JobsPage() {
  return (
    <>
      <section className="page-hero">
        <span className="eyebrow">Employment</span>
        <h1>Verified Job Opportunities.</h1>
        <p>
          Find trusted learnerships, internships, and entry-level jobs. Apply directly to the companies using their official links.
        </p>
      </section>

      <section className="section" style={{ paddingTop: 0, marginTop: "-40px" }}>
        <div className="hero-panel" style={{ background: "#fffbfa", borderColor: "#f9d0c4" }}>
          <h3 style={{ color: "#b54708", marginTop: 0 }}>⚠️ Scam Safety Notice</h3>
          <ul className="simple-list" style={{ color: "#b54708" }}>
            <li>• Never pay money to apply for a job or for an interview.</li>
            <li>• Do not share your banking PINs or passwords.</li>
            <li>• If a job looks suspicious, do not apply and report it immediately.</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <h2>Latest Postings</h2>
        </div>
        <div className="grid-2">
          {jobs.filter(j => j.status === "Approved").map(job => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </section>
    </>
  );
}
