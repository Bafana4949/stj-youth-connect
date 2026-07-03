import Link from "next/link";

export default function AdminLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "40px 20px" }}>
      <div className="admin-layout">
        <aside className="admin-menu">
          <Link href="/admin">Dashboard Overview</Link>
          <Link href="/admin/applications">Study Applications</Link>
          <Link href="/admin/jobs">Job Board</Link>
          <Link href="/admin/events">Events & Calendar</Link>
          <Link href="/admin/sponsors">Sponsors & Support</Link>
          <Link href="/admin">Users (Coming Soon)</Link>
          <Link href="/admin">Settings (Coming Soon)</Link>
        </aside>
        <section>
          {children}
        </section>
      </div>
    </div>
  );
}
