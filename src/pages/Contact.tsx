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
    className="h-7 w-7"
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
    className="h-7 w-7"
    aria-hidden
  >
    <rect x={3.75} y={4.75} width={16.5} height={14.5} rx={2.25} />
    <path d="m4.5 6 7.5 6 7.5-6" />
  </svg>
);

const IconLocation = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-7 w-7"
    aria-hidden
  >
    <path d="M12 21c-2.4-3-6-6.4-6-10.5a6 6 0 1 1 12 0C18 14.6 14.4 18 12 21Z" />
    <circle cx={12} cy={10.5} r={2.25} />
  </svg>
);

const CONTACT_POINTS = [
  {
    title: "Headquarter Wien",
    description: [
      "Simmeringer Hauptstraße 24, 1110 Wien",
      "Tel: +43 676 6300167",
      "office@staffconnecting.at",
    ],
    icon: <IconPhone />,
  },
  {
    title: "Direktkontakt",
    description: [
      "Mo–Fr, 8:30–18:00",
      "Rückmeldung innerhalb eines Werktages",
      "Kontaktformular oder direkter Anruf",
    ],
    icon: <IconMail />,
  },
  {
    title: "Gründungsberatung",
    description: [
      "Verschiedene Geschäftsmodelle",
      "Fokus: Cleaning and Moving",
      "Full Package Service",
    ],
    icon: <IconLocation />,
  },
];

function ContactPage() {
  return (
    <div className="overflow-x-hidden bg-[#f5f6f8] font-sans text-navy-900">
      <SecondaryNav />

      <header className="relative overflow-hidden pb-24">
        <div className="absolute inset-0 bg-white" aria-hidden />
        <div className="relative mx-auto flex w-full max-w-5xl flex-col gap-6 px-6 pt-20 text-navy-900 sm:px-12 lg:px-0">
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">Kontakt aufnehmen</h1>
          <div className="h-2 w-20 rounded-full bg-brand-400" aria-hidden />
          <p className="max-w-4xl text-2xl font-semibold leading-tight text-sand-700 sm:text-3xl lg:text-4xl">
            Sie möchten ein Unternehmen in Österreich starten? Wir begleiten Sie Schritt für Schritt – vom Onboarding bis zur laufenden Geschäftsentwicklung.
          </p>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl space-y-16 px-4 py-20 sm:space-y-20 sm:px-8 lg:px-10">
        <section className="grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center">
          <div className="flex flex-col gap-6">
            <span className="text-xs font-semibold uppercase tracking-[0.32em] text-brand-400">Unser Versprechen</span>
            <h2 className="text-3xl font-semibold sm:text-4xl">Ein vollständiger Startservice für Ihr Business.</h2>
            <div className="space-y-4 text-sm leading-relaxed text-sand-700 sm:text-base">
              <p>
                Jede Anfrage beginnt mit einem strukturierten Erstgespräch. Wir klären Ihr Geschäftsmodell und definieren den Umsetzungsplan.
              </p>
              <p>
                Danach koordinieren wir alle nötigen Schritte: Registrierung, Versicherungen, Steuer-Themen, Branding, Website und operative Prozesse.
              </p>
              <p>
                Unser Team begleitet Sie bis Ihr Unternehmen legal, online sichtbar und vertrieblich startklar ist.
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-[2.25rem] bg-gradient-to-br from-white via-sand-50 to-white p-3 shadow-[0_35px_100px_-70px_rgba(15,23,42,0.45)]">
            <div className="relative overflow-hidden rounded-[1.8rem]">
              <img
                src="/teamm4.png"
                alt="Beratungsgespräch zur Unternehmensgründung in Österreich"
                loading="lazy"
                className="h-[420px] w-full object-cover sm:h-[500px]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0f1a2d]/45 via-transparent to-transparent" aria-hidden />
              <div className="absolute bottom-4 right-4 rounded-2xl border border-white/25 bg-white/10 px-4 py-3 text-right text-white backdrop-blur-md">
                <p className="inline-flex items-center justify-end gap-2 text-[0.68rem] uppercase tracking-[0.22em] text-white/80">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" aria-hidden>
                    <path d="M12 21c-2.4-3-6-6.4-6-10.5a6 6 0 1 1 12 0C18 14.6 14.4 18 12 21Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="12" cy="10.5" r="2.25" stroke="currentColor" strokeWidth="1.7" />
                  </svg>
                  Office
                </p>
                <p className="mt-1 text-sm font-semibold">Simmeringer Hauptstraße 24</p>
                <p className="text-sm text-white/90">1110 Vienna</p>
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-[2.75rem] bg-white p-8 shadow-[0_30px_80px_-60px_rgba(15,23,42,0.35)] sm:p-12">
          <SectionHeading
            eyebrow="Mehr Inhalt"
            title="Was wir auf dem Weg zur Gründung konkret übernehmen"
            description="Damit Ihr Start reibungslos verläuft, koordinieren wir die wichtigsten Aufgaben in klaren Arbeitspaketen."
            align="center"
          />
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl bg-sand-50 p-6 shadow-[0_18px_50px_-38px_rgba(15,23,42,0.45)]">
              <h3 className="inline-flex items-center gap-2 text-lg font-semibold text-navy-900">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-brand-400" aria-hidden>
                  <path d="M12 3 4.5 6.5v5.2c0 4.7 3.1 8.6 7.5 9.8 4.4-1.2 7.5-5.1 7.5-9.8V6.5L12 3Z" />
                  <path d="m9.5 12.2 1.7 1.8 3.5-3.8" />
                </svg>
                Legal and Compliance
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-sand-700">Registrierung, Versicherungen und steuerliche Basisaufgaben mit den passenden Fachpartnern.</p>
            </article>
            <article className="rounded-2xl bg-sand-50 p-6 shadow-[0_18px_50px_-38px_rgba(15,23,42,0.45)]">
              <h3 className="inline-flex items-center gap-2 text-lg font-semibold text-navy-900">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-brand-400" aria-hidden>
                  <circle cx="12" cy="12" r="8" />
                  <path d="M12 8v4l2.8 2" />
                </svg>
                Markenaufbau
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-sand-700">Corporate Design, Website und Online-Präsenz für einen professionellen Start am Markt.</p>
            </article>
            <article className="rounded-2xl bg-sand-50 p-6 shadow-[0_18px_50px_-38px_rgba(15,23,42,0.45)]">
              <h3 className="inline-flex items-center gap-2 text-lg font-semibold text-navy-900">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-brand-400" aria-hidden>
                  <path d="M14.7 6.3a4.2 4.2 0 1 0 3 3l2.8 2.8a1.4 1.4 0 1 1-2 2L15.7 11a4.2 4.2 0 0 0-1-4.7Z" />
                </svg>
                Operations Setup
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-sand-700">Office-Administration, Teamorganisation und klare Abläufe für den laufenden Betrieb.</p>
            </article>
            <article className="rounded-2xl bg-sand-50 p-6 shadow-[0_18px_50px_-38px_rgba(15,23,42,0.45)]">
              <h3 className="inline-flex items-center gap-2 text-lg font-semibold text-navy-900">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-brand-400" aria-hidden>
                  <path d="M4 12h16" />
                  <path d="m13 7 5 5-5 5" />
                </svg>
                Kundengewinnung
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-sand-700">Digitale Strategien und Tools, um sichtbar zu werden und laufend neue Kund:innen zu gewinnen.</p>
            </article>
          </div>
        </section>

        <section className="space-y-10">
          <SectionHeading
            eyebrow="Direkte Ansprechpartner"
            title="So erreichen Sie uns"
            description="Wählen Sie den Kanal, der am besten passt. Wir melden uns mit einem klaren Startplan und den nächsten Schritten."
            align="center"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CONTACT_POINTS.map((point) => (
              <article
                key={point.title}
                className="flex flex-col items-center gap-4 rounded-[2rem] bg-white p-6 text-center shadow-[0_30px_90px_-70px_rgba(15,23,42,0.35)]"
              >
                <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-brand-400 via-[#0f1a2d] to-navy-900 text-white shadow-[0_22px_48px_-30px_rgba(15,23,42,0.7)]">
                  {point.icon}
                </span>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-navy-900">{point.title}</h3>
                  <div className="space-y-1 text-sm text-sand-700">
                    {point.description.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="relative overflow-hidden rounded-[2.75rem] bg-white px-10 py-16 shadow-[0_25px_70px_-50px_rgba(15,23,42,0.45)] sm:px-14">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(14,26,45,0.05),rgba(191,145,92,0.1))]" aria-hidden />
          <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-sand-200 to-transparent" aria-hidden />
          <div className="relative flex flex-col items-center gap-6 text-center sm:gap-8">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-brand-400">Erstgespräch</p>
            <h2 className="max-w-3xl text-3xl font-semibold text-navy-900 sm:text-4xl">
              Gemeinsam bauen wir Ihr Unternehmen von Anfang an richtig auf.
            </h2>
            <p className="max-w-2xl text-sm leading-relaxed text-sand-700 sm:text-base">
              Erzählen Sie uns Ihre Idee. Wir erstellen eine klare Roadmap von rechtlichen Grundlagen über digitale Präsenz bis zur Kundengewinnung.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="/contact#inquiry"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-brand-400 via-[#0f1a2d] to-navy-900 px-6 py-3 text-sm font-semibold text-white shadow-[0_22px_48px_-32px_rgba(15,23,42,0.85)] transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-300"
              >
                Termin anfragen
                <span aria-hidden>→</span>
              </a>
              <a
                href="tel:+436766300167"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-brand-400 via-[#0f1a2d] to-navy-900 px-6 py-3 text-sm font-semibold text-white shadow-[0_20px_46px_-28px_rgba(15,23,42,0.75)] transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-300"
              >
                +43 676 6300167
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

export default ContactPage;
