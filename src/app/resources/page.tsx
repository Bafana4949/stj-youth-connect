import { resources } from "@/lib/mock-data";
import { ResourceCard } from "@/components/ResourceCard";

export default function ResourcesPage() {
  return (
    <>
      <section className="page-hero">
        <span className="eyebrow">Help Centre</span>
        <h1>Guides & Resources.</h1>
        <p>
          Read helpful articles about university applications, TVET colleges, NSFAS guidance, CV writing, and interview preparation.
        </p>
      </section>

      <section className="section">
        <div className="grid-3">
          {resources.map(resource => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </div>
      </section>
    </>
  );
}
