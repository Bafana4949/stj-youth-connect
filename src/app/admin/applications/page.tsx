import { StatusBadge } from "@/components/StatusBadge";

export default function AdminApplicationsPage() {
  const applications = [
    { id: "app-1", learner: "Nomsa M.", institution: "University of Pretoria", status: "In Progress", volunteer: "Thando" },
    { id: "app-2", learner: "Sipho K.", institution: "Tshwane South TVET", status: "Waiting for Learner", volunteer: "Lerato" },
    { id: "app-3", learner: "Anele D.", institution: "University of Johannesburg", status: "Assigned", volunteer: "Bafana" }
  ];

  return (
    <>
      <h1 style={{ marginTop: 0 }}>Study Applications</h1>
      <p style={{ color: "var(--muted)", marginBottom: "32px" }}>
        Track learner progress and assign volunteers to assist with applications.
      </p>

      <div className="admin-panel">
        <div className="table-like">
          {applications.map((app) => (
            <div key={app.id} className="table-row">
              <strong>{app.learner}</strong>
              <span>{app.institution}</span>
              <StatusBadge label={app.status} />
              <div style={{ display: "flex", gap: "8px" }}>
                <span className="pill" style={{ fontSize: "0.8rem", color: "var(--muted)" }}>Assigned: {app.volunteer}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
