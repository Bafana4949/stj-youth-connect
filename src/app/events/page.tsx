import { events } from "@/lib/mock-data";
import { EventCard } from "@/components/EventCard";

export default function EventsPage() {
  return (
    <>
      <section className="page-hero">
        <span className="eyebrow">Church & Community</span>
        <h1>Upcoming Events.</h1>
        <p>
          Stay informed about church services, youth workshops, application support days, and community outreach programs.
        </p>
      </section>

      <section className="section">
        <div className="section-heading">
          <h2>Public Events</h2>
        </div>
        <div className="grid-2">
          {events.filter(e => e.visibility === "Public" && e.status === "Published").map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>
    </>
  );
}
