import { Link, NavLink } from "react-router-dom";

const IconBuilding = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" aria-hidden>
    <path d="M5 20V6.5L12 4l7 2.5V20M3 20h18M8.5 9h1M8.5 12h1M8.5 15h1M14.5 9h1M14.5 12h1M14.5 15h1" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconInfo = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" aria-hidden>
    <path d="M12 17v-6M12 7h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconMail = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" aria-hidden>
    <path d="M4 7.5A1.5 1.5 0 0 1 5.5 6h13A1.5 1.5 0 0 1 20 7.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 16.5v-9Zm0 1 8 5 8-5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const navItems = [
  { label: "UNTERNEHMEN", to: "/company-solutions", icon: <IconBuilding /> },
  { label: "ÜBER UNS", to: "/about", icon: <IconInfo /> },
  { label: "KONTAKT", to: "/contact", icon: <IconMail /> },
];

export function SecondaryNav() {
  return (
    <nav className="sticky top-0 z-40 border-b border-navy-900/10 bg-white/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-1 sm:px-8 lg:px-10">
        <Link to="/" className="flex items-center" aria-label="Staffconnecting Startseite">
          <span className="relative block h-36 w-80 sm:h-40 sm:w-[22rem] lg:h-44 lg:w-[24rem]">
            <img src="/logo.png?v=20260316" alt="Staffconnecting" className="h-full w-full scale-[1.65] object-contain" loading="eager" />
          </span>
        </Link>

        <div className="hidden items-center gap-6 text-xs font-semibold tracking-[0.2em] text-navy-900 sm:flex lg:gap-8">
          {navItems.map((item) =>
            item.to ? (
              <NavLink
                key={item.label}
                to={item.to}
                className={({ isActive }) =>
                  `inline-flex items-center gap-2 transition hover:text-brand-500 ${isActive ? "text-brand-500" : ""}`
                }
              >
                <span className="text-[#bf915c]">{item.icon}</span>
                {item.label}
              </NavLink>
            ) : (
              <a key={item.label} href={item.href} className="inline-flex items-center gap-2 transition hover:text-brand-500">
                <span className="text-[#bf915c]">{item.icon}</span>
                {item.label}
              </a>
            ),
          )}
        </div>
      </div>
    </nav>
  );
}
