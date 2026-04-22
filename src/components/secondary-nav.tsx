import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

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

const IconBriefcase = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" aria-hidden>
    <path d="M4 8.5A1.5 1.5 0 0 1 5.5 7h13A1.5 1.5 0 0 1 20 8.5v8A1.5 1.5 0 0 1 18.5 18h-13A1.5 1.5 0 0 1 4 16.5v-8Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9 7V6a1.5 1.5 0 0 1 1.5-1.5h3A1.5 1.5 0 0 1 15 6v1" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M4 11h16" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconFacebook = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" aria-hidden>
    <path d="M14 8h2.5V5.5H14c-2.2 0-4 1.8-4 4V12H7.5v2.5H10v4h2.5v-4H15L15.5 12H12.5V9.5c0-.83.67-1.5 1.5-1.5Z" fill="currentColor" />
  </svg>
);

const IconInstagram = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" aria-hidden>
    <rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="2.2" />
    <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="2.2" />
    <circle cx="16.5" cy="7.5" r="1" fill="currentColor" />
  </svg>
);

const IconLinkedIn = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" aria-hidden>
    <rect x="4" y="4" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="2.2" />
    <path d="M8.5 10.2V16" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    <circle cx="8.5" cy="8" r="1" fill="currentColor" />
    <path d="M12 16v-3.1c0-1.2.9-2.2 2-2.2s2 .9 2 2.2V16" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 10.2V16" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
  </svg>
);

const navItems = [
  { label: "JOBBÖRSE", to: "/jobboerse", icon: <IconBriefcase /> },
  { label: "ÜBER UNS", to: "/about", icon: <IconInfo /> },
  { label: "KONTAKT", to: "/contact", icon: <IconMail /> },
];

export function SecondaryNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 border-b border-navy-900/10 bg-white/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-1 sm:px-8 lg:px-10">
        <Link to="/" className="flex items-center" aria-label="Staffconnecting Startseite">
          <span className="relative block h-36 w-80 sm:h-40 sm:w-[22rem] lg:h-44 lg:w-[24rem]">
            <img src="/logo.png?v=20260316" alt="Staffconnecting" className="h-full w-full scale-[1.65] object-contain" loading="eager" />
          </span>
        </Link>

        <div className="hidden flex-col items-center gap-2 sm:flex">
          <div className="flex items-center gap-6 text-xs font-semibold tracking-[0.2em] text-navy-900 lg:gap-8">
            {navItems.map((item) => (
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
            ))}
          </div>

          <div className="flex items-center justify-center gap-3 text-[#bf915c]">
            <a
              href="https://www.facebook.com/profile.php?id=61575558951712"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#bf915c]/40 bg-white text-[#bf915c] transition hover:border-[#bf915c] hover:text-[#bf915c]"
            >
              <IconFacebook />
            </a>
            <a
              href="https://www.instagram.com/staffconnecting/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#bf915c]/40 bg-white text-[#bf915c] transition hover:border-[#bf915c] hover:text-[#bf915c]"
            >
              <IconInstagram />
            </a>
            <a
              href="https://www.linkedin.com/company/staffconnecting/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#bf915c]/40 bg-white text-[#bf915c] transition hover:border-[#bf915c] hover:text-[#bf915c]"
            >
              <IconLinkedIn />
            </a>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-navy-900/20 bg-white text-navy-900 shadow-[0_12px_30px_-20px_rgba(15,23,42,0.45)] transition hover:bg-sand-50 sm:hidden"
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
      </div>

      {mobileMenuOpen ? (
        <div className="mx-4 mb-3 rounded-2xl border border-navy-900/15 bg-white p-3 shadow-[0_20px_60px_-36px_rgba(15,23,42,0.45)] sm:hidden">
          <div className="flex flex-col gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-navy-900">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `inline-flex items-center gap-2 rounded-xl px-3 py-2 transition ${isActive ? "bg-navy-900 text-white" : "hover:bg-sand-50"}`
                }
              >
                <span className="text-[#bf915c]">{item.icon}</span>
                {item.label}
              </NavLink>
            ))}
          </div>

          <div className="mt-3 flex items-center justify-center gap-3 text-[#bf915c]">
            <a
              href="https://www.facebook.com/profile.php?id=61575558951712"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#bf915c]/40 bg-white text-[#bf915c] transition hover:border-[#bf915c] hover:text-[#bf915c]"
            >
              <IconFacebook />
            </a>
            <a
              href="https://www.instagram.com/staffconnecting/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#bf915c]/40 bg-white text-[#bf915c] transition hover:border-[#bf915c] hover:text-[#bf915c]"
            >
              <IconInstagram />
            </a>
            <a
              href="https://www.linkedin.com/company/staffconnecting/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#bf915c]/40 bg-white text-[#bf915c] transition hover:border-[#bf915c] hover:text-[#bf915c]"
            >
              <IconLinkedIn />
            </a>
          </div>
        </div>
      ) : null}
    </nav>
  );
}
