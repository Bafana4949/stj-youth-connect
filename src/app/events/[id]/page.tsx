import { events } from "@/lib/mock-data";
import { StatusBadge } from "@/components/StatusBadge";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function EventDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const event = events.find(e => e.id === resolvedParams.id);
  
  if (!event) {
    return notFound();
  }

  return (
    <>
      <section className="page-hero" style={{ paddingBottom: "40px" }}>
        <Link href="/events" className="text-link" style={{ marginBottom: "20px", display: "inline-block" }}>
          ← Back to Events
        </Link>
        <div style={{ display: "flex", gap: "12px", alignItems: "center", marginBottom: "16px" }}>
          <StatusBadge label={event.status} />
          <span className="eyebrow">{event.category}</span>
        </div>
        <h1>{event.title}</h1>
      </section>

      <section className="section">
        <div className="admin-layout" style={{ gridTemplateColumns: "1fr 340px" }}>
          <div className="form-panel">
            <h2>About this Event</h2>
            <p style={{ whiteSpace: "pre-line", marginBottom: "32px" }}>{event.description}</p>
          </div>
          
          <aside className="form-panel" style={{ alignSelf: "start" }}>
            <h3>When & Where</h3>
            <div style={{ marginTop: "16px", marginBottom: "16px" }}>
              <strong>Date:</strong> {new Date(event.date).toLocaleDateString()}
              <br/><br/>
              <strong>Time:</strong> {event.time}
              <br/><br/>
              <strong>Location:</strong> {event.location}
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
