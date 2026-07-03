import Link from "next/link";

export function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <strong>St.J Youth Connect</strong>
        <p>
          A youth-led initiative by St Johns Apostolic Faith Mission Church Youth Members to support learners,
          job seekers, church events, and community growth.
        </p>
      </div>
      <div className="footer-links">
        <Link href="/privacy">Privacy</Link>
        <Link href="/our-story">Our Story</Link>
        <Link href="/support-us">Sponsors</Link>
        <Link href="/resources">Resources</Link>
      </div>
    </footer>
  );
}
