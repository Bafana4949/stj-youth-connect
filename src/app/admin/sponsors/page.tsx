import { StatusBadge } from "@/components/StatusBadge";

export default function AdminSponsorsPage() {
  const enquiries = [
    { id: "sp-1", org: "Local Business Network", type: "Financial Contribution", status: "New", date: "2026-07-02" },
    { id: "sp-2", org: "MayTech Solutions", type: "Internship Opportunities", status: "Contacted", date: "2026-06-28" },
    { id: "sp-3", org: "Community Printers", type: "Services (Printing)", status: "Closed", date: "2026-06-15" }
  ];

  return (
    <>
      <h1 style={{ marginTop: 0 }}>Sponsors & Support</h1>
      <p style={{ color: "var(--muted)", marginBottom: "32px" }}>
        Manage enquiries from organizations wanting to sponsor or partner with the youth.
      </p>

      <div className="admin-panel">
        <div className="table-like">
          {enquiries.map((enq) => (
            <div key={enq.id} className="table-row">
              <strong>{enq.org}</strong>
              <span>{enq.type}</span>
              <StatusBadge label={enq.status} />
              <div style={{ display: "flex", gap: "8px" }}>
                <button className="btn btn-primary" style={{ padding: "6px 12px", fontSize: "0.8rem" }}>View Message</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
