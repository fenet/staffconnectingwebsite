import { InquiryFormSection } from "../components/inquiry-form-section";
import { SectionHeading } from "../components/section-heading";
import { SecondaryNav } from "../components/secondary-nav";
import { SiteFooter } from "../components/site-footer";

const COMPANY_SERVICES = [
  {
    title: "Gründungs-Setup",
    description:
      "Von der Idee zur registrierten Firma: wir begleiten den formalen Start Ihres Unternehmens in Österreich.",
  },
  {
    title: "Recht, Versicherung und Steuer",
    description:
      "Wir koordinieren alle notwendigen rechtlichen, versicherungsbezogenen und steuerlichen Themen mit passenden Expert:innen.",
  },
  {
    title: "Branding und Online-Präsenz",
    description:
      "Corporate Design, Website und digitale Sichtbarkeit für einen professionellen Marktauftritt ab Tag 1.",
  },
  {
    title: "Operations und Software",
    description:
      "Werkzeuge und Prozesse für Rechnungen, Verträge, Schichten und die aktive Suche nach neuen Kund:innen.",
  },
];

const EXPERT_MODULES = [
  {
    title: "Ihr Experte in der Lohnverrechnung",
    body:
      "Stecken Sie Ihre Energie in Ihr Kerngeschäft und überlassen Sie die komplexe Personalverrechnung unserem Team. Wir sorgen für eine genaue und zeitgerechte Abwicklung aller lohn- und gehaltsrelevanten Prozesse. Dazu zählen Lohn- und Gehaltsabrechnung, Verwaltung von Sozialversicherungsbeiträgen und laufende Auswertungen. Mit moderner Technologie und fundierter Erfahrung stellen wir sicher, dass rechtliche Vorgaben erfüllt werden und Ihre Mitarbeitenden pünktlich korrekt entlohnt werden.",
    cta: "Lohnverrechnung anfragen",
  },
  {
    title: "Professionelle Buchhaltung und Bilanzbuchhaltung",
    body:
      "Sie konzentrieren sich auf Ihr Geschäft, wir übernehmen Ihre Finanzstruktur. Unser Team unterstützt Sie in der laufenden Buchhaltung, bei Jahresabschlüssen und in der finanziellen Planung. Wir arbeiten zuverlässig, transparent und abgestimmt auf die Anforderungen Ihres Unternehmens. So behalten Sie den Überblick über Zahlen, Pflichten und Chancen und schaffen eine solide Basis für nachhaltiges Wachstum.",
    cta: "Beratung zur Buchhaltung",
  },
  {
    title: "Ihre digitale und grafische Präsenz",
    body:
      "Sie haben die Vision, wir setzen sie digital und visuell um. Wir entwickeln moderne Websites, klare Markenauftritte und professionelle Designmaterialien für Web, Social Media und Print. Von der Konzeption bis zur Umsetzung sorgen wir dafür, dass Ihr Unternehmen online sichtbar wird und einen starken ersten Eindruck hinterlässt. Damit verbinden wir Designqualität mit messbarer Geschäftswirkung.",
    cta: "Digitale Präsenz ausbauen",
  },
];

function CompanyPage() {
  return (
    <div className="overflow-x-hidden bg-[#f5f6f8] font-sans text-navy-900">
      <SecondaryNav />

      <header className="relative overflow-hidden pb-16 pt-16 sm:pb-20 sm:pt-20">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(14,26,45,0.06),rgba(191,145,92,0.12))]" aria-hidden />
        <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-8 lg:px-10">
          <h1 className="text-4xl font-semibold text-navy-900 sm:text-5xl">Company Solutions</h1>
          <div className="mt-4 h-2 w-20 rounded-full bg-brand-400" aria-hidden />
          <p className="mt-4 max-w-4xl text-2xl font-semibold leading-tight text-sand-700 sm:text-3xl lg:text-4xl">
            Wir unterstützen Gründer:innen beim Aufbau verschiedener Unternehmen in Österreich und bündeln Candidate-Service sowie Company-Service in einem klaren Ablauf.
          </p>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl space-y-20 px-4 pb-24 sm:px-8 lg:px-10">
        <section className="grid gap-8 rounded-[2.75rem] bg-white p-6 shadow-[0_35px_90px_-68px_rgba(15,23,42,0.45)] sm:p-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center lg:p-12">
          <div className="space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-brand-400">Integrated Overview</p>
            <h2 className="text-3xl font-semibold text-navy-900 sm:text-4xl">Ein moderner Aufbau für Ihr Business in Österreich.</h2>
            <p className="text-sm leading-relaxed text-sand-700 sm:text-base">
              Wir verbinden strategische Candidate-Services mit operativen Company-Services. So entsteht ein eleganter, effizienter und rechtssicherer Gesamtprozess vom ersten Schritt bis zum stabilen Tagesgeschäft.
            </p>
            <div className="flex flex-wrap gap-3 pt-1">
              <span className="rounded-full bg-sand-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-navy-900">Candidate-Service</span>
              <span className="rounded-full bg-sand-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-navy-900">Company-Service</span>
              <span className="rounded-full bg-sand-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-navy-900">Full Package</span>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[1.9rem]">
            <img
              src="/teamm.png"
              alt="Team bei der Planung von Company und Candidate Services"
              className="h-[320px] w-full object-cover sm:h-[380px]"
              loading="lazy"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0f1a2d]/40 via-transparent to-transparent" aria-hidden />
            <div className="absolute bottom-4 left-4 rounded-xl border border-white/25 bg-white/10 px-4 py-3 text-white backdrop-blur-md">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-white/80">Staffconnecting</p>
              <p className="text-sm font-semibold">Candidate and Company in one flow</p>
            </div>
          </div>
        </section>

        <section id="candidate-services" className="rounded-[2.75rem] bg-white p-8 shadow-[0_32px_85px_-62px_rgba(15,23,42,0.42)] sm:p-12">
          <SectionHeading
            eyebrow="Candidate-Service in Company Area"
            title="Spezialisierte Services für Ihren laufenden Betrieb"
            description="Diese Leistungen stehen bewusst oben: Sie sichern den täglichen Ablauf und ergänzen den gesamten Unternehmensaufbau."
            align="center"
          />

          <div className="mt-8 space-y-6">
            {EXPERT_MODULES.map((module) => (
              <article key={module.title} className="relative overflow-hidden rounded-2xl border border-sand-200/70 bg-[linear-gradient(145deg,#ffffff,#f8f5f0)] p-6 shadow-[0_20px_55px_-42px_rgba(15,23,42,0.55)] sm:p-8">
                <div className="absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b from-brand-300 via-[#0f1a2d] to-brand-500" aria-hidden />
                <h3 className="text-xl font-semibold text-navy-900 sm:text-2xl">{module.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-sand-700 sm:text-base">{module.body}</p>
                <div className="mt-6">
                  <a
                    href="/contact#inquiry"
                    className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-brand-400 via-[#0f1a2d] to-navy-900 px-6 py-3 text-sm font-semibold text-white shadow-[0_22px_48px_-32px_rgba(15,23,42,0.85)] transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-300"
                  >
                    {module.cta}
                    <span aria-hidden>→</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-[2.75rem] bg-white p-8 shadow-[0_30px_80px_-60px_rgba(15,23,42,0.35)] sm:p-12">
          <SectionHeading
            eyebrow="Services"
            title="Full Package Service für Ihren Unternehmensstart"
            description="Hier folgen die zentralen Company-Leistungen für Registrierung, Strukturaufbau und nachhaltiges Wachstum."
            align="center"
          />

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {COMPANY_SERVICES.map((service, index) => (
              <article key={service.title} className="rounded-2xl bg-sand-50 p-6 shadow-[0_18px_50px_-38px_rgba(15,23,42,0.45)]">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-brand-400 via-[#0f1a2d] to-navy-900 text-xs font-semibold text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-lg font-semibold text-navy-900">{service.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-sand-700">{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <InquiryFormSection />
      </main>

      <SiteFooter />
    </div>
  );
}

export default CompanyPage;
