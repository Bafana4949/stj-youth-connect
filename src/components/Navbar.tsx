import Image from "next/image";
import Link from "next/link";

const navItems = [
  { href: "/our-story", label: "Our Story" },
  { href: "/study-applications", label: "Study Applications" },
  { href: "/jobs", label: "Jobs" },
  { href: "/events", label: "Events" },
  { href: "/resources", label: "Resources" },
  { href: "/ai-assistant", label: "AI Assistant" },
  { href: "/support-us", label: "Support Us" },
  { href: "/admin", label: "Admin" }
];

export function Navbar() {
  return (
    <header className="site-header">
      <Link href="/" className="brand" aria-label="St.J Youth Connect home">
        <Image src="/assets/stj-logo.jpg" alt="St.J logo" width={52} height={52} className="brand-logo" priority />
        <div>
          <strong>St.J Youth Connect</strong>
          <span>Guidance • Opportunities • Growth</span>
        </div>
      </Link>
      <nav className="main-nav" aria-label="Main navigation">
        {navItems.map((item) => (
          <Link href={item.href} key={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
