import Link from "next/link";

const links = [
  ["/", "Home"],
  ["/about", "About"],
  ["/services", "Services"],
  ["/blog", "Blog"],
  ["/book-appointment", "Book Appointment"],
  ["/contact", "Contact"],
  ["/admin/login", "Admin"]
];

export const SiteHeader = () => (
  <header className="sticky top-0 z-20 border-b border-slate-100 bg-white/90 backdrop-blur">
    <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
      <Link href="/" className="text-lg font-bold text-brand-900">Dr. Kainat Clinic</Link>
      <nav className="hidden gap-5 text-sm font-medium text-slate-600 md:flex">
        {links.map(([href, label]) => (
          <Link key={href} href={href} className="transition hover:text-brand-600">{label}</Link>
        ))}
      </nav>
    </div>
  </header>
);
