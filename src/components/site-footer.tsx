import { Link } from "react-router-dom";

const legalLinks = [
  { label: "Impressum", href: "https://staffconnecting.at/impressum/" },
  { label: "Datenschutz", href: "https://staffconnecting.at/datenschutz/" },
  { label: "AGB", href: "https://staffconnecting.at/agb.pdf" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-navy-900/30 bg-navy-900 text-sand-50">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
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
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-200">Leistungen</p>
            <ul className="space-y-1">
              <li>
                <Link className="transition hover:text-brand-200" to="/candidate-services">
                  Candidate Services
                </Link>
              </li>
              <li>
                <Link className="transition hover:text-brand-200" to="/company-solutions">
                  Company Solutions
                </Link>
              </li>
              <li>
                <Link className="transition hover:text-brand-200" to="/jobboerse">
                  Jobbörse
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3 text-sm text-sand-100">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-200">Kontakt aufnehmen</p>
            <p className="leading-relaxed">
              Vereinbaren Sie einen vertraulichen Austausch oder senden Sie uns Ihr Projektbriefing. Wir melden uns innerhalb eines Werktages.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-navy-900 via-navy-800 to-brand-400 px-5 py-2 text-sm font-semibold text-white shadow-[0_20px_44px_-30px_rgba(15,23,42,0.8)] transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-300"
            >
              Beratung anfragen
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-sand-200 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Staffconnecting. Alle Rechte vorbehalten.</p>
          <div className="flex flex-wrap items-center gap-4">
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
