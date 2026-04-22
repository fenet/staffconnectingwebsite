import { useRef } from "react";
import { InquiryFormSection } from "../components/inquiry-form-section";
import { SectionHeading } from "../components/section-heading";
import { SecondaryNav } from "../components/secondary-nav";
import { SiteFooter } from "../components/site-footer";

const IconPhone = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5"
    aria-hidden
  >
    <path d="M5.5 4.5h4l1.5 3-2 1.5a10.2 10.2 0 0 0 4.5 4.5L15 11l3 1.5v4A1.5 1.5 0 0 1 16.5 18 12.5 12.5 0 0 1 4 5.5 1.5 1.5 0 0 1 5.5 4Z" />
  </svg>
);

const IconMail = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5"
    aria-hidden
  >
    <rect x={3.75} y={4.75} width={16.5} height={14.5} rx={2.25} />
    <path d="m4.5 6 7.5 6 7.5-6" />
  </svg>
);

const CORE_PROMISES = [
  {
    title: "Business statt Bürokratie",
    description:
      "Unsere Kund:innen müssen nur starten wollen – wir übernehmen die operativen und formalen Schritte.",
  },
  {
    title: "Professionelles Partnernetzwerk",
    description:
      "Recht, Steuer, Versicherungen und operative Umsetzung: wir verbinden Sie mit den passenden Expert:innen.",
  },
  {
    title: "Digitale Umsetzung inklusive",
    description:
      "Website, Corporate Design, Online-Präsenz und Software gehören bei uns zum vollständigen Aufbaupaket.",
  },
  {
    title: "Klare Schritte",
    description:
      "Ein strukturierter Ablauf bringt Sie von Onboarding über Legal Setup bis zur Kundengewinnung.",
  },
  {
    title: "Laufender Betrieb",
    description:
      "Wir helfen bei Administration, Teamorganisation und Prozessen für einen stabilen Unternehmensalltag.",
  },
  {
    title: "Skalierbar ab Tag 1",
    description:
      "Mit Software für Rechnung, Verträge, Schichten und Lead-Findung schaffen wir die Basis für nachhaltiges Wachstum.",
  },
];

const LEADERSHIP = [
  {
    name: "Sebastijan-Aleksandar Kerculj",
    role: "Gründer und Inhaber",
    bioLines: [
      "Founded Staffconnecting to unite executive search, active sourcing, and employer branding.",
      "Guides the firm's strategy while remaining hands-on with priority mandates.",
      "Partners with clients to turn business goals into lasting talent outcomes.",
    ],
    initials: "SA",
    imageSrc: "/Sebastijan.jpeg",
    imageAlt: "Portrait von Sebastijan-Aleksandar Kerculj",
  },
  {
    name: "Xiang",
    role: "Lead Designer",
    bioLines: [
      "Dejan orchestrates delivery teams, technology stacks, and quality standards.",
      "He keeps every mandate transparent from kick-off to placement through a disciplined operating rhythm.",
      "His stewardship safeguards measurable performance and consistent customer touchpoints.",
    ],
    initials: "DM",
    imageSrc: "/xiang.JPG",
    imageAlt: "Portrait von Xiang",
  },
  {
    name: "Lucy",
    role: "Office Administrator",
    bioLines: [
      "Laura leads Finance, HR, and Compliance for Staffconnecting.",
      "She builds robust structures so growth initiatives can scale responsibly.",
      "Her alignment of budgets, people frameworks, and governance drives sustainable expansion.",
    ],
    initials: "LK",
    imageSrc: "/lucy.jpg",
    imageAlt: "Portrait von Lucy",
  },
  {
    name: "Fenet",
    role: "IT Lead",
    bioLines: [
      "Nina verantwortet Candidate Experience und Qualifizierungsprozesse entlang des gesamten Funnels.",
      "Sie verbindet Marktfeedback mit klaren Anforderungsprofilen für schnellere Besetzungen.",
      "Ihr Fokus liegt auf nachhaltigem Match zwischen Kultur, Rolle und Entwicklungspotenzial.",
    ],
    initials: "NB",
    imageSrc: "/fenet.jpg",
    imageAlt: "Portrait von Fenet",
  },
  {
    name: "Ljubinka",
    role: "Team Member",
    bioLines: [],
    initials: "LK",
    imageSrc: "/ljubinka.jpeg",
    imageAlt: "Portrait von Ljubinka",
  },
];

const SERVICE_PILLARS = [
  {
    title: "Onboarding and Strategie",
    description: "Wir strukturieren den Start Ihres Unternehmens inklusive Leistungsmodell und Umsetzungsplan.",
  },
  {
    title: "Unternehmensregistrierung",
    description: "Begleitung bei Gewerbeanmeldung und allen notwendigen Schritten zur offiziellen Gründung.",
  },
  {
    title: "Versicherung and Steuer",
    description: "Koordination relevanter Versicherungen und steuerlicher Aufgaben mit geeigneten Fachpartnern.",
  },
  {
    title: "Corporate Brand Design",
    description: "Professioneller Markenauftritt mit klarer visueller Identität für einen starken Marktstart.",
  },
  {
    title: "Website and Online-Präsenz",
    description: "Wir machen Ihr Unternehmen online sichtbar und schaffen die Basis für kontinuierliche Anfragen.",
  },
  {
    title: "Office Administration",
    description: "Einführung strukturierter Abläufe für den operativen Alltag Ihres Unternehmens.",
  },
  {
    title: "Staffing Support",
    description: "Unterstützung bei der Suche nach geeigneten Mitarbeitenden für den laufenden Betrieb.",
  },
  {
    title: "Business Software",
    description: "Funktionen für Rechnungen, Verträge, Schichten und die Online-Suche nach neuen Kund:innen.",
  },
];

export function AboutPage() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [manager, ...teamMembers] = LEADERSHIP;
  const leftServicePillars = SERVICE_PILLARS.slice(0, 4);
  const rightServicePillars = SERVICE_PILLARS.slice(4);

  const scrollCarousel = (direction: "left" | "right") => {
    const container = carouselRef.current;
    if (!container) {
      return;
    }

    const offset = Math.max(container.clientWidth * 0.75, 240);
    const targetLeft = direction === "right"
      ? container.scrollLeft + offset
      : container.scrollLeft - offset;

    container.scrollTo({
      left: Math.max(0, targetLeft),
      behavior: "smooth",
    });
  };

  return (
    <div className="overflow-x-hidden bg-[#f5f6f8] font-sans text-navy-900">
      <SecondaryNav />

      <header className="relative overflow-hidden pb-12">
        <div className="absolute inset-0 bg-white" aria-hidden />
        <div className="relative mx-auto flex w-full max-w-5xl flex-col gap-6 px-6 pt-24 text-navy-900 sm:px-12 lg:px-0">
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">Über uns</h1>
          <div className="h-2 w-20 rounded-full bg-brand-400" aria-hidden />
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl space-y-16 px-4 pb-20 pt-8 sm:space-y-20 sm:px-8 lg:px-10">
        <section className="grid gap-8 bg-transparent lg:grid-cols-2 lg:items-center">
          <div className="flex flex-col gap-6 pt-4 sm:pt-8 lg:pt-10">
            <span className="text-xs font-semibold uppercase tracking-[0.32em] text-brand-400">Unser Versprechen</span>
            <h2 className="text-3xl font-semibold leading-tight text-navy-900 sm:text-4xl">
              Wir bauen Unternehmen in Österreich auf – strukturiert, rechtssicher und digital.
            </h2>
            <div className="max-w-2xl space-y-4 text-sm leading-relaxed text-sand-700 sm:text-base">
              <p>Unsere Marke richtet sich an Menschen, die in Österreich ein neues Unternehmen starten möchten – in verschiedenen Branchen, aktuell mit Schwerpunkt auf Cleaning Business und Moving Companies.</p>
              <p>Wir bieten einen Full Package Service über den gesamten Lebenszyklus: Onboarding, Registrierung, rechtliche Absicherung, Online-Auftritt und Kundengewinnung.</p>
              <p>Von Versicherungen über Steuer-Themen bis Software und Personalaufbau koordinieren wir alle notwendigen Schritte mit den richtigen Profis.</p>
            </div>
          </div>

          <div className="relative z-10 overflow-hidden rounded-[2.25rem] shadow-[0_35px_100px_-70px_rgba(15,23,42,0.45)] -mt-20 sm:-mt-40 lg:-mt-56 xl:-mt-64">
            <div className="relative overflow-hidden rounded-[2.25rem] border-4 border-white">
              <img
                src="/d.jpg"
                alt="Staffconnecting Unternehmen in Österreich"
                loading="lazy"
                decoding="async"
                className="h-[320px] w-full object-cover sm:h-[380px]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0f1a2d]/40 via-transparent to-transparent" aria-hidden />
            </div>
          </div>
        </section>
        <section className="space-y-10">
          <div className="space-y-6 text-center">
            <SectionHeading
              eyebrow="Unser Antrieb"
              title="Ihr Unternehmen von null auf operativ"
              description="Wir begleiten den kompletten Aufbau: von der ersten Idee bis zu laufenden Prozessen im Tagesgeschäft."
              align="center"
            />
            <p className="mx-auto max-w-3xl text-sm leading-relaxed text-sand-700 sm:text-base">
              Unser Ziel ist ein einfaches, professionelles und rechtssicheres Setup. Sie bringen die Vision mit – wir liefern Struktur, Umsetzung und die passenden Expert:innen.
            </p>
          </div>
          <div className="relative">
            <div
              ref={carouselRef}
              className="-mx-6 flex gap-8 overflow-x-auto px-6 pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            >
              {CORE_PROMISES.map((promise) => (
                <article
                  key={promise.title}
                  className="min-w-[18rem] space-y-3 py-2"
                >
                  <h3 className="text-lg font-semibold text-navy-900">{promise.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-sand-700 sm:text-base">{promise.description}</p>
                </article>
              ))}
            </div>
            <div className="mt-4 flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => scrollCarousel("left")}
                className="inline-flex h-14 w-14 items-center justify-center rounded-full border-2 border-navy-300 bg-white text-2xl font-semibold text-navy-900 shadow-[0_20px_44px_-24px_rgba(15,23,42,0.45)] transition-all hover:scale-105 hover:bg-sand-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-700"
                aria-label="Vorherige Karten"
              >
                ←
              </button>
              <button
                type="button"
                onClick={() => scrollCarousel("right")}
                className="inline-flex h-14 w-14 items-center justify-center rounded-full border-2 border-navy-300 bg-white text-2xl font-semibold text-navy-900 shadow-[0_20px_44px_-24px_rgba(15,23,42,0.45)] transition-all hover:scale-105 hover:bg-sand-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-700"
                aria-label="Nächste Karten"
              >
                →
              </button>
            </div>
          </div>
        </section>

        <section className="space-y-10">
          <SectionHeading
            eyebrow="Team Members"
            title="Team Members"
            align="center"
          />
          <div className="mx-auto w-full max-w-4xl">
            <article className="relative overflow-hidden rounded-[2rem] border border-white/50 bg-white/25 p-7 text-center shadow-[0_30px_90px_-70px_rgba(15,23,42,0.5)] backdrop-blur-md sm:p-9">
              <div className="mx-auto max-w-[18rem] overflow-hidden rounded-[1.7rem] bg-white/30 p-1 shadow-[0_28px_70px_-45px_rgba(15,23,42,0.55)]">
                {manager.imageSrc ? (
                  <img
                    src={manager.imageSrc}
                    alt={manager.imageAlt}
                    className="aspect-[3/4] w-full rounded-[1.35rem] object-cover object-center [image-rendering:auto]"
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <div className="flex aspect-[3/4] items-center justify-center bg-gradient-to-br from-brand-200 via-white to-navy-900/25 text-5xl font-semibold text-navy-900">
                    {manager.initials}
                  </div>
                )}
              </div>

              <div className="mx-auto mt-7 flex max-w-2xl flex-col items-center gap-4">
                <span className="inline-flex items-center rounded-full border border-white/60 bg-white/40 px-4 py-1 text-sm font-semibold uppercase tracking-[0.22em] text-navy-900">
                  Gründer und Inhaber
                </span>
                <h3 className="text-3xl font-bold leading-tight text-navy-900 sm:text-4xl">{manager.name}</h3>
                <p className="text-sm leading-relaxed text-sand-700 sm:text-base">
                  Strategische Führung, operative Klarheit und nachhaltiger Business-Aufbau für den erfolgreichen Markteintritt in Österreich.
                </p>
                <div className="mt-2 flex items-center justify-center gap-3">
                  <a
                    href="tel:+436766300167"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/70 bg-white/45 text-navy-900 shadow-[0_14px_36px_-20px_rgba(15,23,42,0.6)]"
                  >
                    <IconPhone />
                    <span className="sr-only">+43 676 6300167</span>
                  </a>
                  <a
                    href="mailto:office@staffconnecting.at"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/70 bg-white/45 text-navy-900 shadow-[0_14px_36px_-20px_rgba(15,23,42,0.6)]"
                  >
                    <IconMail />
                    <span className="sr-only">office@staffconnecting.at</span>
                  </a>
                </div>
              </div>
            </article>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((leader) => (
              <article key={leader.name} className="group relative flex flex-col gap-5 rounded-[2rem] border border-white/45 bg-white/22 p-6 shadow-[0_30px_90px_-70px_rgba(15,23,42,0.4)] backdrop-blur-md">
                <div className="relative overflow-hidden rounded-[1.6rem] bg-white/30 p-1">
                  {leader.imageSrc ? (
                    <div className="overflow-hidden rounded-[1.25rem]">
                      <img
                        src={leader.imageSrc}
                        alt={leader.imageAlt}
                        className="h-64 w-full object-cover object-center [image-rendering:auto] transition duration-700 ease-out group-hover:scale-[1.03]"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  ) : (
                    <div className="flex h-64 items-center justify-center bg-gradient-to-br from-brand-200 via-white to-navy-900/25 text-5xl font-semibold text-navy-900">
                      {leader.initials}
                    </div>
                  )}
                </div>
                <div className="space-y-2 text-center">
                  <h3 className="text-xl font-bold text-navy-900">{leader.name}</h3>
                </div>
                <div className="mt-1 flex items-center justify-center gap-3">
                  <a
                    href="tel:+436766300167"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/70 bg-white/45 text-navy-900 shadow-[0_14px_36px_-24px_rgba(15,23,42,0.6)]"
                  >
                    <IconPhone />
                    <span className="sr-only">+43 676 6300167</span>
                  </a>
                  <a
                    href="mailto:office@staffconnecting.at"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/70 bg-white/45 text-navy-900 shadow-[0_14px_36px_-24px_rgba(15,23,42,0.6)]"
                  >
                    <IconMail />
                    <span className="sr-only">office@staffconnecting.at</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-10">
          <SectionHeading
            eyebrow="Unsere Services"
            title="Unsere Leistungen im Full Package"
            description="Alle wichtigen Bausteine für den Aufbau eines Unternehmens in Österreich – mit aktuellem Fokus auf Cleaning- und Umzugsservices."
            align="center"
          />
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-4">
              {leftServicePillars.map((service, index) => (
                <article
                  key={service.title}
                  className="group flex gap-5 p-2"
                >
                  <div className="relative flex w-20 flex-col items-center">
                    <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-navy-900 text-base font-semibold uppercase tracking-[0.32em] text-white">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="mt-2 h-full w-px bg-gradient-to-b from-brand-300 via-[#0f1a2d]/60 to-transparent" aria-hidden />
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="h-0.5 w-12 bg-gradient-to-r from-brand-300 via-[#0f1a2d] to-transparent" aria-hidden />
                      <h3 className="text-lg font-semibold text-navy-900">{service.title}</h3>
                    </div>
                    <p className="text-sm leading-relaxed text-sand-700 sm:text-base">{service.description}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="space-y-4">
              {rightServicePillars.map((service, index) => (
                <article
                  key={service.title}
                  className="group flex gap-5 p-2"
                >
                  <div className="relative flex w-20 flex-col items-center">
                    <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-navy-900 text-base font-semibold uppercase tracking-[0.32em] text-white">
                      {String(index + 5).padStart(2, "0")}
                    </span>
                    <span className="mt-2 h-full w-px bg-gradient-to-b from-brand-300 via-[#0f1a2d]/60 to-transparent" aria-hidden />
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="h-0.5 w-12 bg-gradient-to-r from-brand-300 via-[#0f1a2d] to-transparent" aria-hidden />
                      <h3 className="text-lg font-semibold text-navy-900">{service.title}</h3>
                    </div>
                    <p className="text-sm leading-relaxed text-sand-700 sm:text-base">{service.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden rounded-[2.75rem] bg-white px-10 py-16 shadow-[0_25px_70px_-50px_rgba(15,23,42,0.45)] sm:px-14">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(14,26,45,0.05),rgba(191,145,92,0.1))]" aria-hidden />
          <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-sand-200 to-transparent" aria-hidden />
          <div className="relative flex flex-col items-center gap-6 text-center sm:gap-8">
            <p className="text-sm font-semibold uppercase tracking-[0.26em] text-brand-400">Lassen Sie sich beraten</p>
            <h2 className="max-w-3xl text-3xl font-semibold text-navy-900 sm:text-4xl">
              Wir entwickeln Ihren Startplan bis zur ersten Kundengewinnung.
            </h2>
            <p className="max-w-2xl text-sm leading-relaxed text-sand-700 sm:text-base">
              Erzählen Sie uns, welches Business Sie starten möchten. Wir liefern Ihnen ein Setup, das legal, digital und operativ funktioniert.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="/contact#consult"
                className="inline-flex items-center justify-center rounded-full bg-navy-900 px-6 py-3 text-sm font-semibold text-white shadow-[0_22px_48px_-32px_rgba(15,23,42,0.85)] transition-colors hover:bg-navy-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-700"
              >
                Startgespräch sichern
                <span aria-hidden>→</span>
              </a>
              <a
                href="/contact#inquiry"
                className="inline-flex items-center justify-center rounded-full bg-navy-900 px-6 py-3 text-sm font-semibold text-white shadow-[0_20px_46px_-28px_rgba(15,23,42,0.75)] transition-colors hover:bg-navy-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-700"
              >
                Gründung anfragen
                <span aria-hidden>→</span>
              </a>
            </div>
          </div>
        </section>

        <InquiryFormSection />
      </main>

      <SiteFooter />
    </div>
  );
}
