interface StatusBadgeProps {
  label: string;
}

export function StatusBadge({ label }: StatusBadgeProps) {
  const normalized = label.toLowerCase().replace(/\s+/g, "-");
  return <span className={`status-badge status-${normalized}`}>{label}</span>;
}
