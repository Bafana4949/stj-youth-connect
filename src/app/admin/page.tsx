import { DashboardCard } from "@/components/DashboardCard";
import { stats } from "@/lib/mock-data";

export default function AdminDashboardPage() {
  return (
    <>
      <h1 style={{ marginTop: 0 }}>Admin Dashboard</h1>
      <p style={{ color: "var(--muted)", marginBottom: "32px" }}>
        Welcome to the St.J Youth Connect administration panel. Select an option from the menu to manage the platform.
      </p>

      <div className="grid-3" style={{ marginBottom: "32px" }}>
        {stats.map(stat => (
          <DashboardCard key={stat.label} {...stat} />
        ))}
        <DashboardCard label="Pending Jobs" value="2" helper="Awaiting review" />
        <DashboardCard label="Sponsor Enquiries" value="4" helper="New messages" />
      </div>

      <div className="admin-panel">
        <h3>Recent Activity</h3>
        <p>Mock activity log showing recent actions by admins and moderators.</p>
        <div className="table-like" style={{ marginTop: "16px" }}>
          <div className="table-row">
            <strong>System</strong>
            <span>Admin user logged in</span>
            <span style={{ color: "var(--muted)" }}>Just now</span>
          </div>
          <div className="table-row">
            <strong>Lerato (Moderator)</strong>
            <span>Approved job post &quot;Junior Admin Assistant&quot;</span>
            <span style={{ color: "var(--muted)" }}>2 hours ago</span>
          </div>
          <div className="table-row">
            <strong>Bafana (Volunteer)</strong>
            <span>Updated learner application status</span>
            <span style={{ color: "var(--muted)" }}>5 hours ago</span>
          </div>
        </div>
      </div>
    </>
  );
}
