interface DashboardCardProps {
  label: string;
  value: string | number;
  helper: string;
}

export function DashboardCard({ label, value, helper }: DashboardCardProps) {
  return (
    <article className="stat-card">
      <span>{label}</span>
      <strong>{value}</strong>
      <small>{helper}</small>
    </article>
  );
}
