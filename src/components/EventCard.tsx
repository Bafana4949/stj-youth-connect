import Link from "next/link";
import { Event } from "@/lib/types";
import { StatusBadge } from "./StatusBadge";

export function EventCard({ event }: { event: Event }) {
  return (
    <article className="event-card">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <h3>{event.title}</h3>
        <StatusBadge label={event.status} />
      </div>
      <p>
        <strong>{new Date(event.date).toLocaleDateString()} at {event.time}</strong>
      </p>
      <div className="meta-row">
        <span className="pill">{event.category}</span>
        <span className="pill">{event.location}</span>
      </div>
      <p>{event.description}</p>
      <Link href={`/events/${event.id}`} className="text-link">
        View details →
      </Link>
    </article>
  );
}
