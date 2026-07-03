import { events } from "@/lib/mock-data";
import { StatusBadge } from "@/components/StatusBadge";

export default function AdminEventsPage() {
  return (
    <>
      <h1 style={{ marginTop: 0 }}>Manage Events</h1>
      <p style={{ color: "var(--muted)", marginBottom: "32px" }}>
        Create, edit, and publish church events and youth programs.
      </p>

      <div style={{ marginBottom: "16px" }}>
        <button className="btn btn-dark">Create New Event</button>
      </div>

      <div className="admin-panel">
        <div className="table-like">
          {events.map((event) => (
            <div key={event.id} className="table-row">
              <strong>{event.title}</strong>
              <span>{new Date(event.date).toLocaleDateString()}</span>
              <StatusBadge label={event.status} />
              <div style={{ display: "flex", gap: "8px" }}>
                <button className="btn btn-secondary" style={{ padding: "6px 12px", fontSize: "0.8rem", color: "var(--ink)" }}>Edit</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
