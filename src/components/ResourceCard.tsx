import { ResourceArticle } from "@/lib/types";

export function ResourceCard({ resource }: { resource: ResourceArticle }) {
  return (
    <article className="module-card">
      <span className="eyebrow">{resource.category}</span>
      <h3>{resource.title}</h3>
      <p>{resource.summary}</p>
      <div className="meta-row" style={{ marginTop: "auto" }}>
        <span>⏱ {resource.readTime}</span>
      </div>
      <a href={resource.url || "#"} className="text-link" style={{ marginTop: "12px" }}>
        Read more →
      </a>
    </article>
  );
}
