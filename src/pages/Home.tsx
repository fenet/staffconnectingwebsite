import { InquiryFormSection } from "../components/inquiry-form-section";
import { SectionHeading } from "../components/section-heading";
import { SiteNav } from "../components/site-nav";
import { SiteFooter } from "../components/site-footer";

const IconCompass = () => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    stroke="currentColor"
    strokeWidth={3}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-14 w-14 text-white"
    aria-hidden
  >
    <rect x={12} y={20} width={40} height={30} rx={6} />
    <path d="M24 20v-4a8 8 0 0 1 16 0v4" />
    <path d="M12 32h40" />
    <path d="M29 32h6" />
  </svg>
);

const IconHandshake = () => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    stroke="currentColor"
    strokeWidth={3.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-14 w-14 text-white"
    aria-hidden
  >
    <path d="M32 10 20 34h9l-3 20 18-28h-9l3-16Z" />
  </svg>
);

const IconSignal = () => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    stroke="currentColor"
    strokeWidth={3}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-14 w-14 text-white"
    aria-hidden
  >
    <path d="M12 50h40" />
    <path d="M16 42 28 30l9 8 11-14" />
    <path d="M48 24h-8" />
    <path d="M48 24v8" />
  </svg>
);

const IconContract = () => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    stroke="currentColor"
    strokeWidth={3}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-8 w-8 text-white"
    aria-hidden
  >
    <rect x={16} y={10} width={32} height={44} rx={4} />
    <path d="M24 18h16" />
    <path d="M24 26h16" />
    <path d="M24 34h10" />
    <path d="m24 42 4 4 8-8" />
  </svg>
);

const IconClock = () => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    stroke="currentColor"
    strokeWidth={3}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-8 w-8 text-white"
    aria-hidden
  >
    <circle cx={32} cy={32} r={20} />
    <path d="M32 18v14l10 6" />
  </svg>
);

const IconBriefcase = () => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    stroke="currentColor"
    strokeWidth={3}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-8 w-8 text-white"
    aria-hidden
  >
    <rect x={12} y={20} width={40} height={30} rx={6} />
    <path d="M24 20v-4a8 8 0 0 1 16 0v4" />
    <path d="M12 32h40" />
  </svg>
);

const IconGrowth = () => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    stroke="currentColor"
    strokeWidth={3}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-8 w-8 text-white"
    aria-hidden
  >
    <path d="M12 50h40" />
    <path d="M16 44 28 32l9 8 11-14" />
    <path d="M48 26h-8" />
    <path d="M48 26v8" />
  </svg>
);

const IconInvoice = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5"
    aria-hidden
  >
    <path d="M6 3.5h12a1 1 0 0 1 1 1v15l-2-1.3-2 1.3-2-1.3-2 1.3-2-1.3-2 1.3v-15a1 1 0 0 1 1-1Z" />
    <path d="M8.5 8h7" />
    <path d="M8.5 12h7" />
    <path d="M8.5 16h4" />
  </svg>
);

const IconDocument = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5"
    aria-hidden
  >
    <path d="M7 3.5h7l4 4V20a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-15a1 1 0 0 1 1-1Z" />
    <path d="M14 3.5V8h4" />
    <path d="M9 12h6" />
    <path d="M9 16h6" />
  </svg>
);

const IconTeamSchedule = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5"
    aria-hidden
  >
    <circle cx="8" cy="8" r="2.5" />
    <circle cx="16" cy="8" r="2.5" />
    <path d="M3.5 18a4.5 4.5 0 0 1 9 0" />
    <path d="M11.5 18a4.5 4.5 0 0 1 9 0" />
  </svg>
);

const IconSearchTarget = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5"
    aria-hidden
  >
    <circle cx="10.5" cy="10.5" r="5.5" />
    <path d="M14.5 14.5 20 20" />
    <path d="M10.5 8v5" />
    <path d="M8 10.5h5" />
  </svg>
);

const IconAdvisory = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    aria-hidden
  >
    <path
      d="M4 6.5A1.5 1.5 0 0 1 5.5 5h13A1.5 1.5 0 0 1 20 6.5v8A1.5 1.5 0 0 1 18.5 16H10l-4 3v-3h-.5A1.5 1.5 0 0 1 4 14.5v-8Z"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M8.5 10h7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
  </svg>
);

const IconCheck = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4"
    aria-hidden
  >
    <path d="m5 12 4 4 10-10" />
  </svg>
);

const PRACTICE_AREAS = [
  {
    title: "Sie möchten Ihr eigenes Unternehmen gründen.",
    description:
      "Sie haben den Wunsch nach Selbstständigkeit.\nWir helfen Ihnen beim strukturierten Start.\nVon der Idee bis zur Umsetzung begleiten wir Sie.",
    href: "#inquiry",
    icon: <IconCompass />,
  },
  {
    title: "Sie sind bereit, ins Handeln zu kommen.",
    description:
      "Sie wollen nicht nur planen, sondern starten.\nWir geben Ihnen klare Schritte und Tempo.\nSo kommen Sie schneller in den aktiven Betrieb.",
    href: "#inquiry",
    icon: <IconHandshake />,
  },
  {
    title: "Sie suchen langfristiges Einkommen, nicht schnelles Geld.",
    description:
      "Sie denken nachhaltig statt kurzfristig.\nWir bauen gemeinsam ein stabiles Fundament.\nFür planbares Wachstum über Jahre hinweg.",
    href: "#inquiry",
    icon: <IconSignal />,
  },
];

const VALUE_PILLARS = [
  "Gewinnung Ihrer ersten zahlenden Kund:innen",
  "Aufbau von Marketing und Social Media",
  "Geschäftsstruktur und operatives Setup",
  "Versicherung und grundlegende Buchhaltung",
  "Bewährte Systeme, die in der Praxis funktionieren",
];

const APPROACH_STEPS = [
  {
    stage: "01",
    title: "Senden Sie Ihre Bewerbung",
  },
  {
    stage: "02",
    title: "Wir prüfen Ihre Antworten",
  },
  {
    stage: "03",
    title: "Bei Auswahl → kontaktieren wir Sie für eine kostenlose Erstberatung",
  },
];

const IMPACT_METRICS = [
  {
    icon: <IconBriefcase />,
    label: "Sie sind Ihr eigener Boss",
    description: "Sie entscheiden über Ihren Weg, Ihre Kund:innen und den Aufbau Ihres Unternehmens.",
  },
  {
    icon: <IconClock />,
    label: "Flexible Arbeitszeiten",
    description: "Sie gestalten Ihre Tagesplanung so, dass sie zu Ihrem Leben und Ihren Zielen passt.",
  },
  {
    icon: <IconContract />,
    label: "Branche mit hoher Nachfrage",
    description: "Professionelle Reinigungsservices werden laufend benötigt – privat wie gewerblich.",
  },
  {
    icon: <IconGrowth />,
    label: "Skalierbares Einkommenspotenzial",
    description: "Mit klaren Prozessen und wachsendem Kundenstamm kann Ihr Umsatz nachhaltig steigen.",
  },
];

const SOFTWARE_FEATURES = [
  { label: "Rechnungsmanagement", icon: <IconInvoice /> },
  { label: "Vertragsmanagement", icon: <IconDocument /> },
  { label: "Mitarbeiter-Schichtplanung", icon: <IconTeamSchedule /> },
  { label: "Crawler zur Neukundenfindung online", icon: <IconSearchTarget /> },
];

export function HomePage() {
  return (
    <div id="top" className="overflow-x-hidden font-sans text-navy-900">
      <section className="relative left-1/2 flex h-screen w-screen -translate-x-1/2 items-center overflow-hidden py-28 text-white">
        <SiteNav mode="overlay" />
        <video
          className="hero-zoom absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label="Staffconnecting Team"
        >
          <source src="/homevid.mp4" type="video/mp4" />
        </video>
        <div
          className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#0e1a2d]/70 via-[#0e1a2d]/35 to-transparent sm:h-44"
          aria-hidden
        />
        <div className="relative mx-auto flex w-full flex-col items-end px-8 pt-36 text-right sm:px-16 sm:pt-44 lg:px-24">
          <div className="w-full max-w-[52rem]">
            <h1 className="w-full font-semibold leading-tight text-white">
              <span className="block text-[38px] sm:text-[48px] lg:text-[56px]">Exklusive Expertise.</span>
              <span className="block text-[40px] sm:text-[52px] lg:text-[64px] lg:leading-[1.02]">Neue Horizonte.</span>
              <span className="mt-3 block text-[23px] font-medium leading-relaxed text-white sm:text-[28px] lg:text-[34px]">
                Sie wollen gründen,
                <br />
                wir erledigen den Rest.
              </span>
            </h1>
            <div className="mt-8 flex justify-end">
              <a
                href="#inquiry"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#2b4e85] to-[#0e1a2d] px-10 py-4 text-lg font-semibold text-white shadow-[0_22px_48px_-32px_rgba(15,23,42,0.85)] transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-300"
              >
                <IconAdvisory />
                Erstgespräch
              </a>
            </div>
          </div>
        </div>
      </section>

      <main className="relative mx-auto w-full max-w-6xl px-4 pb-20 pt-20 sm:px-8 lg:px-10">
        <div className="space-y-12 pb-16 sm:space-y-14 lg:space-y-16">
          <section className="relative overflow-hidden rounded-[2.75rem] bg-white px-8 py-14 shadow-[0_30px_80px_-60px_rgba(15,23,42,0.35)] sm:px-12 sm:py-16">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(14,26,45,0.04),rgba(191,145,92,0.12))]" aria-hidden />
            <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-400">Begrenzte Plätze</p>
              <h2 className="text-3xl font-semibold leading-tight text-navy-900 sm:text-4xl">
                Starten Sie Ihr eigenes Reinigungsunternehmen – begrenzte Plätze verfügbar
              </h2>
              <p className="max-w-3xl text-sm leading-relaxed text-sand-700 sm:text-base">
                Wir wählen eine kleine Anzahl motivierter Personen aus und helfen Ihnen, ein erfolgreiches
                Reinigungsunternehmen von Grund auf aufzubauen – auch ohne Vorerfahrung.
              </p>
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-brand-500">
                Nur wenige Plätze in diesem Monat verfügbar.
              </p>
              <a
                href="#inquiry"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-400 via-[#0f1a2d] to-navy-900 px-7 py-3 text-sm font-semibold text-white shadow-[0_22px_48px_-32px_rgba(15,23,42,0.85)] transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-300"
              >
                Jetzt bewerben
                <span aria-hidden>→</span>
              </a>
            </div>
          </section>

          <div className="flex justify-center">
            <p className="inline-flex items-center rounded-full border border-brand-300/60 bg-white px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-500 shadow-[0_14px_30px_-22px_rgba(15,23,42,0.5)]">
              Begrenzte Plätze verfügbar
            </p>
          </div>

          <section className="space-y-10 rounded-[2.75rem] bg-white/90 p-8 shadow-[0_30px_80px_-60px_rgba(15,23,42,0.35)] backdrop-blur-sm sm:p-12">
            <SectionHeading
              eyebrow="Leistungen"
              title="Das ist nicht für jede:n"
              description="Wir arbeiten nicht mit allen zusammen. Wir suchen ernsthafte Menschen, die bereit sind, langfristig etwas aufzubauen."
              align="center"
            />
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {PRACTICE_AREAS.map((item) => (
                <article
                  key={item.title}
                  className="group relative flex h-full flex-col rounded-2xl bg-white px-8 py-7 text-center shadow-[0_20px_55px_-40px_rgba(15,23,42,0.5)] transition hover:-translate-y-1 hover:shadow-[0_26px_70px_-40px_rgba(15,23,42,0.6)]"
                >
                  <div className="mb-6 flex justify-center" aria-hidden>
                    <div className="relative inline-flex h-20 w-20 items-center justify-center">
                      <span className="absolute inset-0 rounded-[1.75rem] bg-gradient-to-br from-navy-900 via-navy-800 to-brand-400 opacity-70 blur-sm" />
                      <span className="absolute inset-0 rotate-6 rounded-[1.9rem] bg-gradient-to-br from-brand-500/70 via-navy-700/60 to-brand-300/50" />
                      <span className="relative flex h-full w-full items-center justify-center rounded-[1.5rem] bg-gradient-to-br from-navy-900 via-navy-800 to-brand-400 shadow-[0_20px_45px_-30px_rgba(15,23,42,0.8)]">
                        {item.icon}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-[1.35rem] font-semibold text-navy-900">{item.title}</h3>
                  <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-sand-700">{item.description}</p>
                  <a
                    href={item.href ?? "#inquiry"}
                    className="mt-6 inline-flex items-center justify-center gap-2 self-center rounded-full bg-gradient-to-r from-brand-400 via-[#0f1a2d] to-navy-900 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_20px_44px_-30px_rgba(15,23,42,0.8)] transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-300"
                  >
                    Prüfen, ob Sie geeignet sind
                    <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </a>
                </article>
              ))}
            </div>
          </section>

          <section className="rounded-[2.3rem] bg-white p-10 shadow-[0_25px_70px_-50px_rgba(15,23,42,0.45)] lg:p-16">
            <div className="mx-auto max-w-4xl space-y-8">
              <SectionHeading
                eyebrow="Unterstützung"
                title="Wobei wir Sie unterstützen"
                description="Wir begleiten Sie Schritt für Schritt beim Aufbau Ihres eigenen Reinigungsunternehmens."
                align="center"
              />
              <div className="grid gap-3 sm:grid-cols-2">
                {VALUE_PILLARS.map((point) => (
                  <div
                    key={point}
                    className="flex items-start gap-3 rounded-2xl bg-sand-50 px-5 py-4 shadow-[0_18px_50px_-38px_rgba(15,23,42,0.45)]"
                  >
                    <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-400 via-[#0f1a2d] to-navy-900 text-white shadow-[0_14px_30px_-18px_rgba(15,23,42,0.75)]">
                      <IconCheck />
                    </span>
                    <p className="text-sm font-medium leading-relaxed text-sand-700">{point}</p>
                  </div>
                ))}
              </div>
              <div className="flex justify-center">
                <a
                  href="#inquiry"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-400 via-[#0f1a2d] to-navy-900 px-6 py-3 text-sm font-semibold text-white shadow-[0_20px_44px_-30px_rgba(15,23,42,0.8)] transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-300"
                >
                  Kostenlose Erstberatung anfragen
                  <span aria-hidden>→</span>
                </a>
              </div>
            </div>
          </section>

          <div className="rounded-2xl bg-[linear-gradient(90deg,rgba(14,26,45,0.05),rgba(191,145,92,0.16),rgba(14,26,45,0.05))] px-5 py-3 text-center">
            <p className="text-xs font-semibold tracking-[0.22em] text-navy-900">
              Wir wählen Bewerber:innen sorgfältig aus
            </p>
          </div>

          <section className="space-y-8 rounded-[2.75rem] bg-white px-8 py-12 shadow-[0_30px_80px_-70px_rgba(15,23,42,0.4)] sm:px-12 lg:px-16">
            <SectionHeading
              eyebrow="Vorteile"
              title="Warum ein Reinigungsunternehmen starten?"
              description="Die Branche bietet starke Chancen für einen stabilen und langfristigen Geschäftsaufbau."
              align="center"
            />
            <div className="grid gap-6 lg:grid-cols-4">
            {IMPACT_METRICS.map((metric) => (
              <article key={metric.label} className="flex flex-col items-center justify-between rounded-2xl bg-sand-50 px-8 py-10 text-center shadow-[0_22px_60px_-40px_rgba(15,23,42,0.45)]">
                <div className="flex w-full flex-col items-center gap-5">
                  <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-navy-900 via-navy-800 to-brand-400 shadow-[0_20px_50px_-28px_rgba(15,23,42,0.75)]">
                    {metric.icon}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-navy-900">{metric.label}</h3>
                  </div>
                </div>
                <p className="mt-6 text-sm leading-relaxed text-sand-700">{metric.description}</p>
              </article>
            ))}
            </div>
          </section>

          <section className="rounded-[2.3rem] bg-white px-8 py-12 shadow-[0_25px_70px_-50px_rgba(15,23,42,0.45)] sm:px-12 lg:px-16">
            <div className="mx-auto max-w-4xl space-y-8">
              <SectionHeading
                eyebrow="Ablauf"
                title="So funktioniert es"
                align="center"
              />
              <div className="space-y-6">
                {APPROACH_STEPS.map((step) => (
                  <div key={`second-${step.stage}`} className="flex items-center gap-5 border-b border-sand-200/60 pb-6 last:border-none last:pb-0">
                    <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-navy-900 via-navy-800 to-black text-sm font-semibold text-white shadow-[0_12px_30px_-20px_rgba(15,23,42,0.6)]">
                      {step.stage}
                    </div>
                    <h3 className="text-base font-semibold text-navy-900 sm:text-lg">{step.title}</h3>
                  </div>
                ))}
              </div>
              <div className="flex justify-center">
                <a
                  href="#inquiry"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-400 via-[#0f1a2d] to-navy-900 px-6 py-3 text-sm font-semibold text-white shadow-[0_20px_44px_-30px_rgba(15,23,42,0.8)] transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-300"
                >
                  Jetzt bewerben – begrenzte Plätze
                  <span aria-hidden>→</span>
                </a>
              </div>
            </div>
          </section>

          <section className="px-8 py-8 sm:px-10 lg:px-12 xl:px-16">
            <div className="mx-auto max-w-4xl space-y-8">
              <SectionHeading
                eyebrow="Software & Prozesse"
                title="Digitale Werkzeuge für Reinigungsunternehmen im laufenden Betrieb"
                description="Neben dem Setup liefern wir Software-Funktionen, die den Alltag von Reinigungsunternehmen effizient steuern."
                align="center"
              />
              <ul className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
                {SOFTWARE_FEATURES.map((feature) => (
                  <li
                    key={feature.label}
                    className="flex min-h-[8.5rem] flex-col items-center justify-center gap-3 rounded-2xl bg-sand-50 px-5 py-5 text-center text-sm font-medium text-sand-700 shadow-[0_20px_60px_-42px_rgba(15,23,42,0.45)]"
                  >
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-brand-400 via-[#0f1a2d] to-navy-900 text-white shadow-[0_14px_30px_-18px_rgba(15,23,42,0.75)]">
                      {feature.icon}
                    </span>
                    <span>{feature.label}</span>
                  </li>
                ))}
              </ul>
              <div className="flex justify-center">
                <a
                  href="#inquiry"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-brand-400 via-[#0f1a2d] to-navy-900 px-6 py-3 text-sm font-semibold text-white shadow-[0_20px_44px_-30px_rgba(15,23,42,0.8)] transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-300"
                >
                  Beratung anfragen
                  <span aria-hidden>→</span>
                </a>
              </div>
            </div>
          </section>

          <section className="relative overflow-hidden rounded-[2.75rem] bg-white px-10 py-16 shadow-[0_25px_70px_-50px_rgba(15,23,42,0.45)] sm:px-14">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(14,26,45,0.04),rgba(191,145,92,0.08))]" aria-hidden />
            <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-sand-200 to-transparent" aria-hidden />
            <div className="relative flex flex-col items-center gap-6 text-center sm:gap-8">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-brand-400">Nächster Schritt</p>
              <h2 className="max-w-3xl text-3xl font-semibold text-navy-900 sm:text-4xl">
                Lassen Sie uns Ihr Unternehmen in Österreich gemeinsam aufbauen.
              </h2>
              <p className="max-w-2xl text-sm leading-relaxed text-sand-700 sm:text-base">
                Von der Registrierung bis zu den ersten Kund:innen erhalten Sie ein strukturiertes Setup, das rechtlich, operativ und digital funktioniert.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="#inquiry"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-brand-400 via-[#0f1a2d] to-navy-900 px-6 py-3 text-sm font-semibold text-white shadow-[0_22px_48px_-32px_rgba(15,23,42,0.85)] transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-300"
                >
                  Erstgespräch buchen
                  <span aria-hidden>→</span>
                </a>
                <a
                  href="#inquiry"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-brand-400 via-[#0f1a2d] to-navy-900 px-6 py-3 text-sm font-semibold text-white shadow-[0_20px_46px_-28px_rgba(15,23,42,0.75)] transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-300"
                >
                  Gründungsanfrage senden
                  <span aria-hidden>→</span>
                </a>
              </div>
            </div>
          </section>

          <div className="mx-auto max-w-3xl border-l-4 border-brand-400 bg-white/80 px-5 py-3 text-center shadow-[0_16px_36px_-28px_rgba(15,23,42,0.55)]">
            <p className="text-sm font-medium text-sand-700">Nicht alle Bewerbungen werden angenommen.</p>
          </div>

          <div id="inquiry">
            <InquiryFormSection />
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}

export default HomePage;
