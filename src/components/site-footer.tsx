import { Link } from "react-router-dom";

const legalLinks = [
  { label: "Datenschutz", href: "https://staffconnecting.at/datenschutz/" },
  { label: "AGB", href: "/public/agb.pdf" },
];

const IconFacebook = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" aria-hidden>
    <path d="M14 8h2.5V5.5H14c-2.2 0-4 1.8-4 4V12H7.5v2.5H10v4h2.5v-4H15L15.5 12H12.5V9.5c0-.83.67-1.5 1.5-1.5Z" fill="currentColor" />
  </svg>
);

const IconInstagram = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" aria-hidden>
    <rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="2.2" />
    <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="2.2" />
    <circle cx="16.5" cy="7.5" r="1" fill="currentColor" />
  </svg>
);

const IconLinkedIn = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" aria-hidden>
    <rect x="4" y="4" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="2.2" />
    <path d="M8.5 10.2V16" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    <circle cx="8.5" cy="8" r="1" fill="currentColor" />
    <path d="M12 16v-3.1c0-1.2.9-2.2 2-2.2s2 .9 2 2.2V16" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 10.2V16" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
  </svg>
);

export function SiteFooter() {
  return (
    <footer className="border-t border-navy-900/30 bg-navy-900 text-sand-50">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-200">Staffconnecting</p>
            <p className="text-sm leading-relaxed text-sand-100/90">
              Karriereberatung und Recruiting-Lösungen für Professionals sowie Unternehmen mit Anspruch an Qualität und Verbindlichkeit.
            </p>
          </div>

          <div className="space-y-3 text-sm text-sand-100">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-200">Kontakt</p>
            <ul className="space-y-1">
              <li>office@staffconnecting.at</li>
              <li>+43 676 6300167</li>
              <li>Wien, Österreich</li>
            </ul>
          </div>

          <div className="space-y-3 text-sm text-sand-100">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-200">Kontakt aufnehmen</p>
            <p className="leading-relaxed">
              Vereinbaren Sie einen vertraulichen Austausch oder senden Sie uns Ihr Projektbriefing. Wir melden uns innerhalb eines Werktages.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-5 text-[#bf915c]">
          <a
            href="https://www.facebook.com/profile.php?id=61575558951712"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#bf915c]/60 bg-white/5 text-[#bf915c] transition hover:border-[#bf915c] hover:text-[#d0a46d]"
          >
            <IconFacebook />
          </a>
          <a
            href="https://www.instagram.com/staffconnecting/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#bf915c]/60 bg-white/5 text-[#bf915c] transition hover:border-[#bf915c] hover:text-[#d0a46d]"
          >
            <IconInstagram />
          </a>
          <a
            href="https://www.linkedin.com/company/staffconnecting/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#bf915c]/60 bg-white/5 text-[#bf915c] transition hover:border-[#bf915c] hover:text-[#d0a46d]"
          >
            <IconLinkedIn />
          </a>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-sand-200 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Staffconnecting. Alle Rechte vorbehalten.</p>
          <div className="flex flex-wrap items-center gap-4">
            <Link to="/impressum" className="transition hover:text-brand-200">
              Impressum
            </Link>
            {legalLinks.map((item) => (
              <a key={item.label} href={item.href} className="transition hover:text-brand-200" target="_blank" rel="noreferrer">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
