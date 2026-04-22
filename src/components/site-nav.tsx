import { useState } from "react";
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

const IconBriefcase = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" aria-hidden>
    <path d="M4 8.5A1.5 1.5 0 0 1 5.5 7h13A1.5 1.5 0 0 1 20 8.5v8A1.5 1.5 0 0 1 18.5 18h-13A1.5 1.5 0 0 1 4 16.5v-8Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9 7V6a1.5 1.5 0 0 1 1.5-1.5h3A1.5 1.5 0 0 1 15 6v1" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M4 11h16" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const navItems = [
  {
    label: "Jobbörse",
    to: "/jobboerse",
    icon: <IconBriefcase />,
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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

      <button
        type="button"
        onClick={() => setMobileMenuOpen((prev) => !prev)}
        className="relative z-30 ml-auto inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/35 bg-white/85 text-navy-900 shadow-[0_12px_30px_-20px_rgba(15,23,42,0.45)] backdrop-blur transition hover:bg-white sm:hidden"
        aria-label={mobileMenuOpen ? "Menü schließen" : "Menü öffnen"}
        aria-expanded={mobileMenuOpen}
      >
        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
          {mobileMenuOpen ? (
            <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          ) : (
            <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          )}
        </svg>
      </button>

      {mobileMenuOpen ? (
        <div className="absolute inset-x-4 top-full z-40 mt-3 rounded-2xl border border-white/40 bg-white/95 p-3 shadow-[0_20px_60px_-36px_rgba(15,23,42,0.55)] backdrop-blur sm:hidden">
          <div className="flex flex-col gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-navy-900">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `inline-flex items-center gap-2 rounded-xl px-3 py-2 transition ${isActive ? "bg-navy-900 text-white" : "hover:bg-sand-50"}`
                }
              >
                <span className={`${mobileMenuOpen ? "text-[#bf915c]" : ""}`}>{item.icon}</span>
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      ) : null}
    </nav>
  );
}
