import Link from "next/link";

interface ModuleCardProps {
  title: string;
  description: string;
  href: string;
  eyebrow: string;
}

export function ModuleCard({ title, description, href, eyebrow }: ModuleCardProps) {
  return (
    <article className="module-card">
      <span className="eyebrow">{eyebrow}</span>
      <h3>{title}</h3>
      <p>{description}</p>
      <Link href={href} className="text-link">
        Open module →
      </Link>
    </article>
  );
}
