import { useEffect, useRef, useState } from "react";
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

const PRACTICE_AREAS = [
  {
    title: "Wir unterstützen Interessenten umfassend bei der Gründung ihres Unternehmens.",
    description:
      "Von der GISA-Anmeldung über den Firmenbucheintrag bis hin zur passenden Betriebshaftpflicht begleiten wir Sie strukturiert und zuverlässig durch alle notwendigen Schritte.\nSo schaffen wir gemeinsam die Grundlage für einen erfolgreichen Start in Ihre Selbstständigkeit.",
    href: "#inquiry",
    icon: <IconCompass />,
  },
  {
    title: "Erfolgreichen Marktpositionierung.",
    description:
      "Die Entwicklung eines professionellen Logos und einer starken Markenidentität über den optimalen Google-Auftritt bis hin zur strategischen Präsenz in sozialen Netzwerken wird durch Staffconnecting professionell begleitet.\nDarüber hinaus planen und steuern wir zielgerichtete Werbekampagnen (Meta Ads, Google Ads) und entwickeln moderne, überzeugende Websites sowie ein konsistentes Corporate Design.\nAuch bei der Erstellung von Dienst- und Dienstleistungsverträgen sowie bei der Gewinnung qualifizierter Mitarbeiter stehen wir Ihnen kompetent zur Seite.\nGemeinsam schaffen wir die Basis für nachhaltiges Wachstum und einen starken Marktauftritt.",
    href: "#inquiry",
    icon: <IconHandshake />,
  },
  {
    title: "Wir begleiten Sie beim Aufbau eines starken Fundaments für Ihr Unternehmen.",
    description:
      "Dazu gehört die gezielte Auswahl und Vernetzung mit professionellen Partnern in den Bereichen Recht, Buchhaltung, Lohnverrechnung, Backoffice, Softwarelösungen zur Erleichterung des Arbeitsalltages, Unternehmensberatung, Versicherungen und Marketing.\nGleichzeitig unterstützen wir Sie bei der effektiven Kundengewinnung – mit klaren Strategien und praxisnaher Umsetzung, um Ihre Sichtbarkeit zu erhöhen und nachhaltig zu wachsen.\nSo schaffen Sie die besten Voraussetzungen für langfristigen unternehmerischen Erfolg.",
    href: "#inquiry",
    icon: <IconSignal />,
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
  { label: "Fakturierung Management", icon: <IconInvoice />, href: "https://marketing.putzelf.com" },
  { label: "Dienstplan- und Zeiterfassungsmanagement", icon: <IconTeamSchedule />, href: "https://marketing.putzelf.com" },
  { label: "Mitarbeiterverwaltungsmanagement", icon: <IconDocument />, href: "https://marketing.putzelf.com" },
  { label: "Kundenverwaltungsmanagement", icon: <IconSearchTarget />, href: "https://marketing.putzelf.com" },
];

const FLOW_STEPS = [
  {
    title: "Anfrage / Bewerbung",
    description: "Sie senden uns Ihre Anfrage mit ersten Informationen zu Ihrer Person und Ihrer Geschäftsidee.",
  },
  {
    title: "Erste Prüfung",
    description: "Wir prüfen Ihre Angaben auf Zielsetzung, Motivation und grundlegende Eignung.",
  },
  {
    title: "Persönliches Erstgespräch",
    description: "In einem unverbindlichen Gespräch lernen wir uns kennen und besprechen Ihre Ziele sowie unsere Zusammenarbeit.",
  },
  {
    title: "Potenzialanalyse",
    description: "Wir analysieren Ihre Ausgangssituation und bewerten gemeinsam das unternehmerische Potenzial.",
  },
  {
    title: "Auswahlverfahren",
    description: "Da die Plätze begrenzt sind, nehmen wir nur ausgewählte Teilnehmer in unser Programm auf.",
  },
  {
    title: "Aufnahme and Start",
    description: "Nach erfolgreicher Auswahl beginnt die strukturierte Zusammenarbeit mit einem klaren Fahrplan.",
  },
  {
    title: "Umsetzung and Wachstum",
    description: "Wir begleiten Sie aktiv beim Aufbau Ihres Unternehmens – von der Struktur bis zur Kundengewinnung.",
  },
];

export function HomePage() {
  const [activeStep, setActiveStep] = useState<number>(-1);
  const stepRefs = useRef<Array<HTMLDivElement | null>>([]);
  const visibilityRatiosRef = useRef<Record<number, number>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const stepIndex = Number(entry.target.getAttribute("data-step-index"));
          if (Number.isNaN(stepIndex)) {
            return;
          }

          visibilityRatiosRef.current[stepIndex] = entry.isIntersecting ? entry.intersectionRatio : 0;
        });

        let bestIndex = -1;
        let bestRatio = 0;

        Object.entries(visibilityRatiosRef.current).forEach(([key, value]) => {
          if (value > bestRatio) {
            bestRatio = value;
            bestIndex = Number(key);
          }
        });

        setActiveStep(bestRatio > 0.16 ? bestIndex : -1);
      },
      {
        threshold: [0, 0.1, 0.25, 0.45, 0.6, 0.8, 1],
        rootMargin: "-20% 0px -20% 0px",
      },
    );

    stepRefs.current.forEach((element) => {
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

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
          preload="auto"
          poster="/homeimg.jpg"
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
                className="inline-flex items-center justify-center gap-2 rounded-full bg-navy-900 px-10 py-4 text-lg font-semibold text-white shadow-[0_22px_48px_-32px_rgba(15,23,42,0.85)] transition-colors hover:bg-navy-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-700"
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
          <section className="relative isolate overflow-hidden rounded-[2.75rem] px-8 py-14 shadow-[0_30px_80px_-60px_rgba(15,23,42,0.35)] sm:px-12 sm:py-16">
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                backgroundImage: "url('/team2.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "grayscale(100%) opacity(0.35)",
              }}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#0f1a2d]/20 to-[#0f1a2d]/30" />
            <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
              <p className="text-2xl font-extrabold uppercase tracking-[0.2em] text-[#0e1a2d] sm:text-3xl">Begrenzte Plätze</p>
              <p className="max-w-3xl text-base leading-relaxed text-white sm:text-lg">
                Wir wählen eine kleine Anzahl motivierter Personen aus und helfen Ihnen, ein erfolgreiches
                Reinigungsunternehmen von Grund auf aufzubauen – auch ohne Vorerfahrung.
              </p>
              <p className="text-xl font-extrabold uppercase tracking-[0.18em] text-[#0e1a2d] sm:text-2xl">
                Nur wenige Plätze in diesem Monat verfügbar.
              </p>
              <a
                href="#inquiry"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-navy-900 px-7 py-3 text-sm font-semibold text-white shadow-[0_22px_48px_-32px_rgba(15,23,42,0.85)] transition-colors hover:bg-navy-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-700"
              >
                Jetzt bewerben
                <span aria-hidden>→</span>
              </a>
            </div>
          </section>

          <div className="mx-auto max-w-3xl border-l-4 border-brand-400 bg-white/80 px-5 py-3 text-center shadow-[0_16px_36px_-28px_rgba(15,23,42,0.55)]">
            <p className="text-base font-medium text-sand-700">Begrenzte Plätze verfügbar</p>
          </div>

          <section className="space-y-10 rounded-[2.75rem] bg-white/90 p-8 shadow-[0_30px_80px_-60px_rgba(15,23,42,0.35)] backdrop-blur-sm sm:p-12">
            <SectionHeading
              eyebrow="Leistungen"
              title="Das ist nicht für jede:n"
              description="Wir suchen engagierte und zielorientierte Persönlichkeiten, die bereit sind, langfristig etwas Eigenes aufzubauen."
              align="center"
            />
            <p className="mx-auto max-w-4xl whitespace-pre-line text-center text-sm leading-relaxed text-sand-700 sm:text-base">
              {`Sie möchten ein eigenes Unternehmen gründen und streben nach unternehmerischer Freiheit?
Sie haben den Wunsch, selbstständig zu arbeiten und Ihre Ideen erfolgreich umzusetzen?

Wir unterstützen Sie dabei – strukturiert, praxisnah und individuell.
Von der ersten Idee bis zur erfolgreichen Umsetzung begleiten wir Sie Schritt für Schritt.`}
            </p>
            <div className="grid gap-7 lg:grid-cols-[0.95fr_1.05fr]">
              <article className="relative overflow-hidden rounded-[2rem] bg-navy-900 text-white shadow-[0_25px_70px_-42px_rgba(15,23,42,0.65)]">
                <img
                  src="/homeimg.jpg"
                  alt="Team bei der Planung einer Unternehmensgründung"
                  className="h-full min-h-[22rem] w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-navy-900/45" aria-hidden />
                <div className="absolute inset-x-6 bottom-6 rounded-2xl border border-white/20 bg-navy-900/70 p-5 backdrop-blur-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sand-200">Business Setup</p>
                  <p className="mt-2 text-sm leading-relaxed text-sand-100">
                    Wir kombinieren Gründungsbegleitung, Marktpositionierung und operative Strukturen in einem klaren Umsetzungsplan.
                  </p>
                </div>
              </article>

              <div className="space-y-4">
                {PRACTICE_AREAS.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-2xl border border-sand-200 bg-sand-50/80 px-6 py-6 shadow-[0_20px_50px_-40px_rgba(15,23,42,0.45)]"
                  >
                    <div className="flex items-start gap-4">
                      <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy-900 text-white shadow-[0_18px_38px_-24px_rgba(15,23,42,0.75)]">
                        {item.icon}
                      </span>
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold leading-snug text-navy-900">{item.title}</h3>
                        <p className="whitespace-pre-line text-sm leading-relaxed text-sand-700">{item.description}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <div className="mx-auto max-w-3xl border-l-4 border-brand-400 bg-white/80 px-5 py-3 text-center shadow-[0_16px_36px_-28px_rgba(15,23,42,0.55)]">
            <p className="text-base font-medium text-sand-700">Wir wählen Bewerber:innen sorgfältig aus</p>
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
                  <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-navy-900 shadow-[0_20px_50px_-28px_rgba(15,23,42,0.75)]">
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

          <section className="relative isolate overflow-hidden rounded-[2.75rem] px-2 py-6 shadow-[0_30px_80px_-60px_rgba(15,23,42,0.35)] sm:px-4 lg:px-6">
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                backgroundImage: "url('/teamm.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "grayscale(100%) opacity(0.35)",
              }}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#0f1a2d]/20 to-[#0f1a2d]/30" />
            <div className="relative mx-auto max-w-6xl">
              <div className="mx-auto max-w-2xl text-center">
                <p className="inline-flex items-center justify-center gap-3 text-sm font-extrabold uppercase tracking-[0.28em] text-[#0e1a2d]">
                  <span className="h-px w-6 bg-[#0e1a2d]/70" aria-hidden />
                  Ablauf
                </p>
                <h2 className="mt-4 text-[2.1rem] font-semibold text-navy-900 sm:text-[2.5rem] md:text-[3rem] md:leading-tight">
                  So funktioniert es
                </h2>
              </div>

              <div className="relative mx-auto mt-8 max-w-5xl">

                <div className="space-y-6">
                  {FLOW_STEPS.map((step, index) => {
                    const isActive = index === activeStep;

                    return (
                      <div
                        key={step.title}
                        ref={(element) => {
                          stepRefs.current[index] = element;
                        }}
                        data-step-index={index}
                        className="relative grid md:grid-cols-2 md:items-center"
                      >
                        <div
                          className={`relative z-10 overflow-hidden rounded-[1.65rem] border-2 px-5 py-5 shadow-[0_24px_58px_-48px_rgba(15,23,42,0.35)] transition-all duration-700 md:max-w-[92%] ${
                            index % 2 === 0 ? "md:col-start-1 md:mr-16 lg:mr-20" : "md:col-start-2 md:ml-16 lg:ml-20"
                          } ${
                            isActive
                              ? "border-[#0e1a2d] bg-[#0e1a2d]/95 text-white ring-2 ring-[#0e1a2d]/25 -translate-y-2 shadow-[0_32px_70px_-28px_rgba(14,26,45,0.45)] backdrop-blur-sm"
                              : "border-[#d6e0ea] bg-white/95 text-[#0e1a2d]"
                          }`}
                        >
                          <span
                            className={`pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full ${isActive ? "bg-white/12 blur-2xl" : "bg-[#0e1a2d]/6"}`}
                            aria-hidden
                          />
                          <span
                            className={`pointer-events-none absolute -left-12 -bottom-12 h-32 w-32 rounded-full ${isActive ? "bg-white/10 blur-3xl" : "hidden"}`}
                            aria-hidden
                          />

                          <h3 className={`relative mt-2 text-xl font-semibold ${isActive ? "text-white" : "text-[#0e1a2d]"}`}>
                            {step.title}
                          </h3>
                          <p className={`relative mt-3 text-sm leading-relaxed ${isActive ? "text-white/95" : "text-sand-700"}`}>
                            {step.description}
                          </p>
                        </div>

                        <span
                          className={`pointer-events-none absolute top-1/2 z-0 hidden h-[3px] -translate-y-1/2 transition-all duration-700 md:block ${
                            index % 2 === 0
                              ? "right-[calc(50%-1.5rem)] w-52 lg:w-72"
                              : "left-[calc(50%-1.5rem)] w-52 lg:w-72"
                          } ${isActive ? "bg-[#0f1a2d]/55" : "bg-[#0f1a2d]/25"}`}
                          aria-hidden
                        />

                        <span
                          className={`pointer-events-none absolute top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full text-sm font-bold tracking-[0.08em] transition-all duration-700 md:flex ${
                            index % 2 === 0 ? "right-[calc(50%-1.5rem)] translate-x-1/2" : "left-[calc(50%-1.5rem)] -translate-x-1/2"
                          } ${
                            isActive
                              ? "bg-gradient-to-br from-brand-300 to-brand-500 text-white shadow-[0_0_0_10px_rgba(191,145,92,0.2),0_18px_44px_-20px_rgba(191,145,92,0.55)] scale-110"
                              : "bg-[#0f1a2d] text-white shadow-[0_12px_26px_-16px_rgba(15,23,42,0.45)]"
                          }`}
                          aria-hidden
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          <section className="px-8 py-8 sm:px-10 lg:px-12 xl:px-16">
            <div className="mx-auto max-w-4xl space-y-8">
              <SectionHeading
                eyebrow="Software and Prozesse"
                title="Digitale Softwarelösungen für den Arbeitsalltag"
                align="center"
              />
              <ul className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
                {SOFTWARE_FEATURES.map((feature) => (
                  <li
                    key={feature.label}
                    className="rounded-2xl bg-sand-50 shadow-[0_20px_60px_-42px_rgba(15,23,42,0.45)]"
                  >
                    <a
                      href={feature.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex min-h-[8.5rem] flex-col items-center justify-center gap-3 rounded-2xl px-5 py-5 text-center text-sm font-medium text-sand-700 transition-colors hover:bg-sand-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-700"
                    >
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-navy-900 text-white shadow-[0_14px_30px_-18px_rgba(15,23,42,0.75)]">
                        {feature.icon}
                      </span>
                      <span>{feature.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
              <div className="flex justify-center">
                <a
                  href="#inquiry"
                  className="inline-flex items-center justify-center rounded-full bg-navy-900 px-6 py-3 text-sm font-semibold text-white shadow-[0_20px_44px_-30px_rgba(15,23,42,0.8)] transition-colors hover:bg-navy-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-700"
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
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-400">Nächster Schritt</p>
              <h2 className="max-w-3xl text-3xl font-semibold text-navy-900 sm:text-4xl">
                Lassen Sie uns Ihr Unternehmen in Österreich gemeinsam aufbauen.
              </h2>
              <p className="max-w-2xl text-sm leading-relaxed text-sand-700 sm:text-base">
                Von der Registrierung bis zu den ersten Kund:innen erhalten Sie ein strukturiertes Setup, das rechtlich, operativ und digital funktioniert.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="#inquiry"
                  className="inline-flex items-center justify-center rounded-full bg-navy-900 px-6 py-3 text-sm font-semibold text-white shadow-[0_22px_48px_-32px_rgba(15,23,42,0.85)] transition-colors hover:bg-navy-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-700"
                >
                  Erstgespräch buchen
                  <span aria-hidden>→</span>
                </a>
                <a
                  href="#inquiry"
                  className="inline-flex items-center justify-center rounded-full bg-navy-900 px-6 py-3 text-sm font-semibold text-white shadow-[0_20px_46px_-28px_rgba(15,23,42,0.75)] transition-colors hover:bg-navy-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-700"
                >
                  Gründungsanfrage senden
                  <span aria-hidden>→</span>
                </a>
              </div>
            </div>
          </section>

          <div className="mx-auto max-w-3xl border-l-4 border-brand-400 bg-white/80 px-5 py-3 text-center shadow-[0_16px_36px_-28px_rgba(15,23,42,0.55)]">
            <p className="text-base font-medium text-sand-700">Nicht alle Bewerbungen werden angenommen.</p>
          </div>

          <div id="inquiry" className="scroll-mt-24">
            <InquiryFormSection />
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}

export default HomePage;
