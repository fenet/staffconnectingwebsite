import { Link, NavLink } from "react-router-dom";

type SiteNavProps = {
  mode?: "overlay" | "solid";
  palette?: "light" | "dark";
};

const IconBuilding = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" aria-hidden>
    <path d="M5 20V6.5L12 4l7 2.5V20M3 20h18M8.5 9h1M8.5 12h1M8.5 15h1M14.5 9h1M14.5 12h1M14.5 15h1" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconMail = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" aria-hidden>
    <path d="M4 7.5A1.5 1.5 0 0 1 5.5 6h13A1.5 1.5 0 0 1 20 7.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 16.5v-9Zm0 1 8 5 8-5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const navItems = [
  {
    label: "Unternehmen",
    to: "/company-solutions",
    icon: <IconBuilding />,
  },
  {
    label: "Über uns",
    to: "/about",
    icon: <IconBuilding />,
  },
  {
    label: "Kontakt",
    to: "/contact",
    icon: <IconMail />,
  },
];

export function SiteNav({ mode = "solid", palette }: SiteNavProps) {
  const baseClasses = "z-30 flex items-center px-6 py-5 sm:px-12 lg:px-24";
  const resolvedPalette = palette ?? (mode === "overlay" ? "light" : "dark");
  const variantClasses =
    mode === "overlay"
      ? `absolute inset-x-0 top-0 ${resolvedPalette === "dark" ? "text-navy-900" : "text-white"}`
      : "relative inset-x-0 top-0 bg-white/85 text-navy-900 shadow-[0_12px_32px_-26px_rgba(15,23,42,0.25)] backdrop-blur";

  const linkBase =
    "inline-flex items-center gap-2 transition hover:text-brand-200 uppercase tracking-[0.22em]";

  return (
    <nav className={`${baseClasses} ${variantClasses}`}>
      <div className="pointer-events-none absolute left-1/2 top-1 z-10 flex -translate-x-[60%] items-center justify-center">
        <Link
          to="/"
          className="pointer-events-auto"
          aria-label="Staffconnecting Startseite"
        >
          <span className="relative block h-52 w-52 sm:h-60 sm:w-60 lg:h-72 lg:w-72">
            <img
              src="/staff.png?v=20260323"
              alt="Staffconnecting"
              className="h-full w-full scale-[1.33] object-cover"
              loading="eager"
            />
          </span>
        </Link>
      </div>
      <div className="relative z-20 mx-auto hidden items-center justify-center gap-6 text-sm font-semibold sm:flex lg:gap-8 lg:text-base">
        {navItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.to}
            className={({ isActive }) =>
              `${linkBase} ${isActive ? "text-brand-200" : ""}`
            }
          >
            <span className="text-[#bf915c] opacity-95">{item.icon}</span>
            {item.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
