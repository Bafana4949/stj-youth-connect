import { applicationChecklist } from "@/lib/mock-data";
import Link from "next/link";

export default function StudyApplicationsPage() {
  return (
    <>
      <section className="page-hero">
        <span className="eyebrow">Education Support</span>
        <h1>Study Applications Guidance.</h1>
        <p>
          We provide guidance, application checklists, and volunteer support to help Matric learners navigate university, TVET college, and NSFAS applications.
        </p>
      </section>

      <section className="section">
        <div className="grid-2">
          <div className="card">
            <h3>Important Warning</h3>
            <div style={{ background: "#fef3f2", borderLeft: "4px solid #b42318", padding: "16px", borderRadius: "8px", marginTop: "12px", color: "#b42318" }}>
              <strong>This platform gives guidance only.</strong><br/>
              Final applications must be submitted on official institution portals. We will never ask for your university or NSFAS passwords.
            </div>
            
            <h3 style={{ marginTop: "24px" }}>Learner Profile Overview</h3>
            <p>
              By creating a profile (coming soon), you will be able to track your documents securely, calculate your Admission Point Score (APS), and get paired with a volunteer who will guide you through the process.
            </p>
          </div>

          <div className="card">
            <h3>Application Checklist</h3>
            <p>Make sure you have the following ready before you begin applying:</p>
            <ul className="check-list" style={{ marginTop: "16px" }}>
              {applicationChecklist.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="hero-panel" style={{ background: "#fdf8ec", borderColor: "var(--gold)" }}>
          <h2 style={{ color: "#201600" }}>Calculate Your APS</h2>
          <p style={{ maxWidth: "700px" }}>
            Understanding your Admission Point Score (APS) is crucial for knowing which courses you qualify for. Use our new interactive calculator to estimate your APS based on your Grade 12 subjects.
          </p>
          <div className="hero-actions" style={{ marginTop: "24px" }}>
            <Link href="/study-applications/aps-calculator" className="btn btn-primary">
              Launch APS Calculator
            </Link>
          </div>
          <div className="meta-row" style={{ marginTop: "24px" }}>
            <span className="pill">University Requirements</span>
            <span className="pill">TVET College Options</span>
            <span className="pill">Career Guidance</span>
          </div>
        </div>
      </section>
    </>
  );
}
