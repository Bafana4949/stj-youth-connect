import Link from "next/link";

interface FeatureCardProps {
  title: string;
  description: string;
  href: string;
  eyebrow: string;
}

export function FeatureCard({ title, description, href, eyebrow }: FeatureCardProps) {
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
