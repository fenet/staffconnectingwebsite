"use client";

import { useState, useMemo, FormEvent, ChangeEvent } from "react";
import { InquiryFormSection } from "../components/inquiry-form-section";
import { trackCompleteRegistration, trackViewContent } from "../lib/meta-pixel";
import { SecondaryNav } from "../components/secondary-nav";
import { SiteFooter } from "../components/site-footer";

interface Job {
  id: string;
  title: string;
  category: string;
  location: string;
  type: string;
  salary: string;
  summary: string;
  description: string;
}

const JOBS: Job[] = [
  {
    id: "1",
    title: "Reinigungskraft (m/w/d)",
    category: "Reinigung",
    location: "Wien",
    type: "Vollzeit / Teilzeit",
    salary: "ab € 2.100 brutto",
    summary: "Unterhalts- und Spezialreinigung in privaten und gewerblichen Objekten mit klaren Einsatzplänen.",
    description: "Unterhalts- und Spezialreinigung in privaten und gewerblichen Objekten mit klaren Einsatzplänen und professionellem Onboarding. Wir suchen zuverlässige und motivierte Fachkräfte für unser wachsendes Team.",
  },
  {
    id: "2",
    title: "Vorarbeiter:in Cleaning Team",
    category: "Reinigung",
    location: "Wien and Umgebung",
    type: "Vollzeit",
    salary: "ab € 2.450 brutto",
    summary: "Koordination von Teams, Qualitätssicherung vor Ort und Schnittstelle zwischen Kund:innen und operativer Leitung.",
    description: "Koordination von Teams, Qualitätssicherung vor Ort und Schnittstelle zwischen Kund:innen und operativer Leitung. Erfahrung im Teammanagement und Kundenkommunikation erforderlich.",
  },
  {
    id: "3",
    title: "Umzugshelfer:in (m/w/d)",
    category: "Umzug",
    location: "Wien",
    type: "Teilzeit / Geringfügig",
    salary: "ab € 14 pro Stunde",
    summary: "Unterstützung bei Transport, Verpackung, Montage und kundenorientierter Abwicklung von Umzugsaufträgen.",
    description: "Unterstützung bei Transport, Verpackung, Montage und kundenorientierter Abwicklung von Umzugsaufträgen. Körperliche Fitness und Teamfähigkeit sind wichtig.",
  },
  {
    id: "4",
    title: "Backoffice and Einsatzplanung",
    category: "Administration",
    location: "Wien",
    type: "Vollzeit",
    salary: "ab € 2.300 brutto",
    summary: "Disposition, Terminplanung, Kund:innenkommunikation und administrative Begleitung des täglichen Betriebs.",
    description: "Disposition, Terminplanung, Kund:innenkommunikation und administrative Begleitung des täglichen Betriebs. Organisationstalent und gute Kommunikationsfähigkeiten erforderlich.",
  },
  {
    id: "5",
    title: "Vertriebsinnendienst (m/w/d)",
    category: "Vertrieb",
    location: "Wien",
    type: "Vollzeit",
    salary: "ab € 2.200 brutto",
    summary: "Telefonische Kundenakquise und Betreuung im B2B-Bereich mit modernen Sales-Tools.",
    description: "Telefonische Kundenakquise und Betreuung im B2B-Bereich mit modernen Sales-Tools. Überzeugungsfähigkeit und Zielorientierung sind erforderlich.",
  },
  {
    id: "6",
    title: "Vertriebsmitarbeiter (m/w/d)",
    category: "Vertrieb",
    location: "Wien",
    type: "Vollzeit",
    salary: "ab € 2.400 brutto + Provisionen",
    summary: "Außendienstmitarbeiter für Kundenakquise und Bestandskundenbetreuung in der Region Wien.",
    description: "Außendienstmitarbeiter für Kundenakquise und Bestandskundenbetreuung in der Region Wien und Umgebung. Führerschein erforderlich.",
  },
  {
    id: "7",
    title: "Linux System Administrator",
    category: "IT",
    location: "Wien",
    type: "Vollzeit",
    salary: "ab € 2.800 brutto",
    summary: "Systemverwaltung, Netzwerkoptimierung und IT-Infrastruktur in modernen Cloud-Umgebungen.",
    description: "Systemverwaltung, Netzwerkoptimierung und IT-Infrastruktur in modernen Cloud-Umgebungen. Erfahrung mit Linux, Docker und Kubernetes erforderlich.",
  },
  {
    id: "8",
    title: "Personalberater (m/w/d)",
    category: "HR",
    location: "Wien",
    type: "Vollzeit",
    salary: "ab € 2.600 brutto + Provisionen",
    summary: "Recruitment, Kandidatenbetreuung und Matching von Talenten mit passenden Positionen.",
    description: "Recruitment, Kandidatenbetreuung und Matching von Talenten mit passenden Positionen. HR-Kenntnisse und Netzwerkfähigkeit erforderlich.",
  },
  {
    id: "9",
    title: "Jurist (m/w/d)",
    category: "Jura",
    location: "Wien",
    type: "Vollzeit",
    salary: "ab € 2.900 brutto",
    summary: "Rechtsberatung, Vertragsmanagement und juristische Begleitung von Geschäftsprozessen.",
    description: "Rechtsberatung, Vertragsmanagement und juristische Begleitung von Geschäftsprozessen. Österreichische Rechtsqualifikation erforderlich.",
  },
  {
    id: "10",
    title: "DGKP – Mitarbeiter (m/w/d)",
    category: "Gesundheit",
    location: "Wien",
    type: "Vollzeit",
    salary: "ab € 2.400 brutto",
    summary: "Professionelle Krankenpflege und Patientenbetreuung in modernen Gesundheitseinrichtungen.",
    description: "Professionelle Krankenpflege und Patientenbetreuung in modernen Gesundheitseinrichtungen. Gültige DGKP-Zertifizierung erforderlich.",
  },
  {
    id: "11",
    title: "Social Media Content Creator",
    category: "Marketing",
    location: "Wien",
    type: "Vollzeit / Freelance",
    salary: "ab € 1.900 brutto",
    summary: "Erstellung von Inhalten für Instagram, TikTok, LinkedIn und Facebook mit kreativen und strategischen Ansätzen.",
    description: "Erstellung von Inhalten für Instagram, TikTok, LinkedIn und Facebook mit kreativen und strategischen Ansätzen. Portfolio erforderlich.",
  },
  {
    id: "12",
    title: "Virtuelle Assistenz (m/w/d)",
    category: "Administration",
    location: "Homeoffice",
    type: "Teilzeit",
    salary: "ab € 1.500 brutto",
    summary: "Administrative Unterstützung, Terminkoordination und digitale Verwaltung für mehrere Clients.",
    description: "Administrative Unterstützung, Terminkoordination und digitale Verwaltung für mehrere Clients. Zuverlässigkeit und Diskretion erforderlich.",
  },
  {
    id: "13",
    title: "IT Support Agent (m/w/d)",
    category: "IT",
    location: "Wien",
    type: "Vollzeit",
    salary: "ab € 1.900 brutto",
    summary: "First-Level Support, Ticketbearbeitung und technische Unterstützung für Enduser.",
    description: "First-Level Support, Ticketbearbeitung und technische Unterstützung für Enduser. IT-Grundkenntnisse und Geduld erforderlich.",
  },
  {
    id: "14",
    title: "API Developer (m/w/d)",
    category: "IT",
    location: "Wien / Hybrid",
    type: "Vollzeit",
    salary: "ab € 3.200 brutto",
    summary: "Entwicklung und Instandhaltung von REST und GraphQL APIs mit modernen Technologien.",
    description: "Entwicklung und Instandhaltung von REST und GraphQL APIs mit modernen Technologien. Erfahrung mit Node.js oder Python erforderlich.",
  },
  {
    id: "15",
    title: "Junior Vertriebsmitarbeiter (m/w/d)",
    category: "Vertrieb",
    location: "Wien",
    type: "Vollzeit",
    salary: "ab € 1.900 brutto",
    summary: "Einstieg in den Vertrieb mit strukturierter Betreuung und Mentoring durch erfahrene Profis.",
    description: "Einstieg in den Vertrieb mit strukturierter Betreuung und Mentoring durch erfahrene Profis. Motivation und Lernbereitschaft erforderlich.",
  },
  {
    id: "16",
    title: "Buchhalter (m/w/d)",
    category: "Finanzen",
    location: "Wien",
    type: "Vollzeit",
    salary: "ab € 2.300 brutto",
    summary: "Finanzbuchhaltung, Rechnungswesen und Abschlussarbeiten in österreichischen Unternehmen.",
    description: "Finanzbuchhaltung, Rechnungswesen und Abschlussarbeiten in österreichischen Unternehmen. SAP oder ähnliche ERP-Kenntnisse erforderlich.",
  },
  {
    id: "17",
    title: "Lohnverrechner (m/w/d)",
    category: "Finanzen",
    location: "Wien",
    type: "Vollzeit",
    salary: "ab € 2.400 brutto",
    summary: "Lohn- und Gehaltsabrechnung, Personalverwaltung und Compliance-Aufgaben.",
    description: "Lohn- und Gehaltsabrechnung, Personalverwaltung und Compliance-Aufgaben in österreichischen Unternehmensstrukturen. SAP erforderlich.",
  },
];

const CATEGORIES = ["Alle Kategorien", ...Array.from(new Set(JOBS.map((j) => j.category))).sort()];
const JOBS_PER_PAGE = 6;

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  coverLetter: string;
  resume: File | null;
  agreeData: boolean;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  coverLetter?: string;
  resume?: string;
  agreeData?: string;
}

function JobboersePage() {
  const [selectedCategory, setSelectedCategory] = useState("Alle Kategorien");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    coverLetter: "",
    resume: null,
    agreeData: false,
  });
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [submitStatus, setSubmitStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const filteredJobs = useMemo(() => {
    if (selectedCategory === "Alle Kategorien") {
      return JOBS;
    }
    return JOBS.filter((job) => job.category === selectedCategory);
  }, [selectedCategory]);

  const totalPages = Math.ceil(filteredJobs.length / JOBS_PER_PAGE);
  const paginatedJobs = filteredJobs.slice(
    (currentPage - 1) * JOBS_PER_PAGE,
    currentPage * JOBS_PER_PAGE
  );

  const handleCategoryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
    setCurrentPage(1);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      setFormData({
        ...formData,
        [name]: (e.target as HTMLInputElement).checked,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
    if (formErrors[name as keyof FormErrors]) {
      setFormErrors({
        ...formErrors,
        [name]: undefined,
      });
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const validTypes = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
      if (!validTypes.includes(file.type)) {
        setFormErrors({
          ...formErrors,
          resume: "Bitte laden Sie eine PDF-, DOC- oder DOCX-Datei hoch.",
        });
        return;
      }
      setFormData({
        ...formData,
        resume: file,
      });
      setFormErrors({
        ...formErrors,
        resume: undefined,
      });
    }
  };

  const validateForm = (): boolean => {
    const errors: FormErrors = {};

    if (!formData.fullName.trim()) {
      errors.fullName = "Vollständiger Name erforderlich";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      errors.email = "Gültige E-Mail-Adresse erforderlich";
    }

    if (!formData.phone.trim()) {
      errors.phone = "Telefonnummer erforderlich";
    }

    if (!formData.coverLetter.trim()) {
      errors.coverLetter = "Anschreiben erforderlich";
    }

    if (!formData.resume) {
      errors.resume = "CV/Lebenslauf erforderlich";
    }

    if (!formData.agreeData) {
      errors.agreeData = "Sie müssen den Datenschutzrichtlinien zustimmen";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setSubmitStatus("loading");

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("fullName", formData.fullName);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("phone", formData.phone);
      formDataToSend.append("coverLetter", formData.coverLetter);
      formDataToSend.append("jobTitle", selectedJob?.title || "");
      if (formData.resume) {
        formDataToSend.append("resume", formData.resume);
      }

      const mailtoLink = `mailto:office@staffconnecting.at?subject=Bewerbung für ${selectedJob?.title}&body=Kandidat: ${formData.fullName}%0AE-Mail: ${formData.email}%0ATelefon: ${formData.phone}%0A%0AAnschreiben:%0A${formData.coverLetter}`;

      trackCompleteRegistration({
        content_name: selectedJob?.title || "Job Application",
        content_category: "job_application",
        status: "submitted",
      });

      window.location.href = mailtoLink;

      setSubmitStatus("success");
      setTimeout(() => {
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          coverLetter: "",
          resume: null,
          agreeData: false,
        });
        setSelectedJob(null);
        setSubmitStatus("idle");
      }, 2000);
    } catch {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 3000);
    }
  };

  return (
    <div className="overflow-x-hidden bg-[#f5f6f8] font-sans text-navy-900">
      <SecondaryNav />

      <header className="relative overflow-hidden pb-12">
        <div className="absolute inset-0 bg-white" aria-hidden />
        <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 pt-20 text-navy-900 sm:px-8 lg:px-10">
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">Jobbörse</h1>
          <div className="h-2 w-20 rounded-full bg-brand-400" aria-hidden />
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl space-y-12 px-4 pb-24 sm:px-8 lg:px-10">
        <section className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="flex flex-col gap-6 pt-4 sm:pt-8 lg:pt-10">
            <span className="text-xs font-semibold uppercase tracking-[0.32em] text-brand-400">Unser Fokus</span>
            <h2 className="text-3xl font-semibold leading-tight text-navy-900 sm:text-4xl">
              Ein starker Start mit den richtigen Stellenangeboten.
            </h2>
            <div className="max-w-2xl space-y-4 text-sm leading-relaxed text-sand-700 sm:text-base">
              <p>Aktuelle Stellenangebote mit klarem Fokus auf professionelle Teams, Verlässlichkeit und langfristige Zusammenarbeit.</p>
              <p>Wir veröffentlichen Positionen mit klaren Anforderungen, transparenten Rahmenbedingungen und echten Entwicklungsmöglichkeiten.</p>
              <p>So finden Bewerber:innen und Unternehmen verlässlich zusammen — strukturiert, effizient und nachhaltig.</p>
            </div>
          </div>
          <div className="relative z-10 overflow-hidden rounded-[2.25rem] bg-gradient-to-br from-white via-sand-50 to-white p-3 shadow-[0_35px_100px_-70px_rgba(15,23,42,0.45)] sm:-mt-14 lg:-mt-24 xl:-mt-28">
            <div className="relative overflow-hidden rounded-[1.8rem]">
              <img
                src="/jobs.jpg"
                alt="Jobbörse - Aktuelle Stellenangebote"
                loading="lazy"
                className="h-[320px] w-full object-cover sm:h-[380px]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0f1a2d]/40 via-transparent to-transparent" aria-hidden />
            </div>
          </div>
        </section>

        <section className="space-y-8">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div className="w-full sm:w-auto">
              <label htmlFor="category-filter" className="block text-sm font-semibold text-navy-900 mb-2">
                Alle Job Kategorien
              </label>
              <select
                id="category-filter"
                value={selectedCategory}
                onChange={handleCategoryChange}
                className="w-full sm:w-64 rounded-full border border-sand-200/70 bg-white px-5 py-3 text-sm font-semibold text-navy-900 transition-all hover:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-400/50"
              >
                {CATEGORIES.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
            <div className="text-sm font-semibold text-sand-700">
              {filteredJobs.length} Positionen verfügbar
            </div>
          </div>

          {filteredJobs.length === 0 ? (
            <div className="rounded-2xl bg-white p-12 text-center shadow-[0_26px_70px_-52px_rgba(15,23,42,0.5)]">
              <p className="text-lg font-semibold text-sand-700">Keine Positionen in dieser Kategorie verfügbar</p>
            </div>
          ) : (
            <>
              <div className="grid gap-6 md:grid-cols-2">
                {paginatedJobs.map((job) => (
                  <article
                    key={job.id}
                    className="group rounded-[2rem] border border-sand-200/70 bg-white p-7 shadow-[0_26px_70px_-52px_rgba(15,23,42,0.5)] transition-all hover:shadow-[0_32px_90px_-60px_rgba(15,23,42,0.65)] hover:border-brand-400/50"
                  >
                    <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em]">
                      <span className="rounded-full bg-brand-400/15 px-3 py-1 text-brand-500">{job.category}</span>
                      <span className="text-sand-600">•</span>
                      <span className="text-sand-600">{job.location}</span>
                    </div>
                    <h2 className="mt-4 text-xl font-semibold text-navy-900 transition-colors group-hover:text-brand-400">
                      {job.title}
                    </h2>
                    <p className="mt-2 text-sm font-semibold text-brand-500">{job.salary}</p>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-sand-600">{job.type}</p>
                    <p className="mt-4 text-sm leading-relaxed text-sand-700">{job.summary}</p>
                    <button
                      onClick={() => {
                        trackViewContent({
                          content_name: job.title,
                          content_category: job.category,
                          content_type: "job_posting",
                        });
                        setSelectedJob(job);
                        setFormData({
                          fullName: "",
                          email: "",
                          phone: "",
                          coverLetter: "",
                          resume: null,
                          agreeData: false,
                        });
                        setFormErrors({});
                      }}
                      className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-[#0e1a2d] px-6 py-2.5 text-sm font-semibold text-white transition-all hover:shadow-[0_16px_40px_-24px_rgba(14,26,45,0.8)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0e1a2d]"
                    >
                      Mehr Informationen
                      <span aria-hidden>→</span>
                    </button>
                  </article>
                ))}
              </div>

              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-3 py-8">
                  <button
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                    className="rounded-full bg-[#0e1a2d] px-4 py-2 font-semibold text-white shadow-[0_12px_30px_-20px_rgba(14,26,45,0.45)] disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:shadow-[0_16px_40px_-24px_rgba(14,26,45,0.6)]"
                  >
                    ← Zurück
                  </button>

                  <div className="flex gap-2">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`h-10 w-10 rounded-full font-semibold transition-all ${
                          currentPage === page
                            ? "bg-[#0e1a2d] text-white shadow-[0_12px_30px_-20px_rgba(14,26,45,0.55)]"
                            : "bg-[#0e1a2d]/15 text-[#0e1a2d] shadow-[0_12px_30px_-20px_rgba(14,26,45,0.25)] hover:bg-[#0e1a2d] hover:text-white hover:shadow-[0_16px_40px_-24px_rgba(14,26,45,0.45)]"
                        }`}
                      >
                        {page}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                    className="rounded-full bg-[#0e1a2d] px-4 py-2 font-semibold text-white shadow-[0_12px_30px_-20px_rgba(14,26,45,0.45)] disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:shadow-[0_16px_40px_-24px_rgba(14,26,45,0.6)]"
                  >
                    Weiter →
                  </button>
                </div>
              )}
            </>
          )}
        </section>

        <InquiryFormSection />
      </main>

      {selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm">
          <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-[2.5rem] bg-white shadow-[0_50px_120px_-40px_rgba(15,23,42,0.8)]">
            <div className="sticky top-0 border-b border-sand-200/50 bg-white px-8 py-6 flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-navy-900">{selectedJob.title}</h2>
              <button
                onClick={() => {
                  setSelectedJob(null);
                  setFormErrors({});
                }}
                className="text-3xl font-light text-sand-600 hover:text-navy-900 transition-colors"
                aria-label="Schließen"
              >
                ✕
              </button>
            </div>

            <div className="space-y-6 px-8 py-6">
              <div className="space-y-4">
                <div className="flex flex-wrap gap-3">
                  <div className="rounded-full bg-brand-400/15 px-4 py-2 text-sm font-semibold text-brand-500">
                    {selectedJob.category}
                  </div>
                  <div className="rounded-full bg-sand-100 px-4 py-2 text-sm font-semibold text-sand-700">
                    {selectedJob.location}
                  </div>
                  <div className="rounded-full bg-sand-100 px-4 py-2 text-sm font-semibold text-sand-700">
                    {selectedJob.type}
                  </div>
                </div>
                <p className="text-lg font-semibold text-brand-500">{selectedJob.salary}</p>
              </div>

              <div className="border-t border-sand-200/50 pt-6">
                <h3 className="mb-3 font-semibold text-navy-900">Stellenbeschreibung</h3>
                <p className="leading-relaxed text-sand-700">{selectedJob.description}</p>
              </div>

              <div className="border-t border-sand-200/50 pt-6">
                <h3 className="mb-4 font-semibold text-navy-900">Auf diese Position bewerben</h3>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-semibold text-navy-900 mb-2">
                      Vollständiger Name <span className="text-brand-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className={`w-full rounded-lg border px-4 py-3 text-sm font-semibold transition-all focus:outline-none focus:ring-2 ${
                        formErrors.fullName
                          ? "border-red-400 focus:ring-red-200"
                          : "border-sand-200/70 focus:ring-brand-400/50"
                      }`}
                      placeholder="Ihr Name"
                    />
                    {formErrors.fullName && (
                      <p className="mt-1 text-xs font-semibold text-red-500">{formErrors.fullName}</p>
                    )}
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-navy-900 mb-2">
                        E-Mail <span className="text-brand-400">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full rounded-lg border px-4 py-3 text-sm font-semibold transition-all focus:outline-none focus:ring-2 ${
                          formErrors.email
                            ? "border-red-400 focus:ring-red-200"
                            : "border-sand-200/70 focus:ring-brand-400/50"
                        }`}
                        placeholder="ihre@email.at"
                      />
                      {formErrors.email && (
                        <p className="mt-1 text-xs font-semibold text-red-500">{formErrors.email}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-navy-900 mb-2">
                        Telefon <span className="text-brand-400">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={`w-full rounded-lg border px-4 py-3 text-sm font-semibold transition-all focus:outline-none focus:ring-2 ${
                          formErrors.phone
                            ? "border-red-400 focus:ring-red-200"
                            : "border-sand-200/70 focus:ring-brand-400/50"
                        }`}
                        placeholder="+43 (0)"
                      />
                      {formErrors.phone && (
                        <p className="mt-1 text-xs font-semibold text-red-500">{formErrors.phone}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="coverLetter" className="block text-sm font-semibold text-navy-900 mb-2">
                      Anschreiben <span className="text-brand-400">*</span>
                    </label>
                    <textarea
                      id="coverLetter"
                      name="coverLetter"
                      value={formData.coverLetter}
                      onChange={handleInputChange}
                      rows={4}
                      className={`w-full rounded-lg border px-4 py-3 text-sm font-semibold transition-all focus:outline-none focus:ring-2 resize-none ${
                        formErrors.coverLetter
                          ? "border-red-400 focus:ring-red-200"
                          : "border-sand-200/70 focus:ring-brand-400/50"
                      }`}
                      placeholder="Erzählen Sie uns, warum Sie interessiert sind..."
                    />
                    {formErrors.coverLetter && (
                      <p className="mt-1 text-xs font-semibold text-red-500">{formErrors.coverLetter}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="resume" className="block text-sm font-semibold text-navy-900 mb-2">
                      CV/Lebenslauf hochladen <span className="text-brand-400">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="file"
                        id="resume"
                        name="resume"
                        onChange={handleFileChange}
                        accept=".pdf,.doc,.docx"
                        className="hidden"
                      />
                      <label
                        htmlFor="resume"
                        className={`flex cursor-pointer items-center justify-center rounded-lg border-2 border-dashed px-4 py-6 text-center transition-all ${
                          formErrors.resume
                            ? "border-red-400 bg-red-50"
                            : "border-sand-200/70 bg-sand-50 hover:border-brand-400"
                        }`}
                      >
                        <span>
                          <p className="text-sm font-semibold text-navy-900">
                            {formData.resume ? formData.resume.name : "Datei zum Hochladen auswählen"}
                          </p>
                          <p className="mt-1 text-xs text-sand-600">PDF, DOC oder DOCX</p>
                        </span>
                      </label>
                    </div>
                    {formErrors.resume && (
                      <p className="mt-1 text-xs font-semibold text-red-500">{formErrors.resume}</p>
                    )}
                  </div>

                  <div className="flex items-start gap-3 rounded-lg bg-sand-50 p-4">
                    <input
                      type="checkbox"
                      id="agreeData"
                      name="agreeData"
                      checked={formData.agreeData}
                      onChange={handleInputChange}
                      className="mt-1 h-5 w-5 cursor-pointer rounded border-sand-300 text-brand-400 focus:ring-2 focus:ring-brand-400/50"
                    />
                    <label htmlFor="agreeData" className="cursor-pointer text-sm leading-relaxed text-sand-700">
                      Ich stimme der Speicherung und Verarbeitung meiner Daten durch diese Website zu.
                      <span className="text-brand-400">*</span>
                    </label>
                  </div>
                  {formErrors.agreeData && (
                    <p className="text-xs font-semibold text-red-500">{formErrors.agreeData}</p>
                  )}

                  {submitStatus === "success" && (
                    <div className="rounded-lg bg-green-50 px-4 py-3 text-sm font-semibold text-green-700">
                      ✓ Bewerbung erfolgreich gesendet! Wir melden uns bald bei Ihnen.
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="rounded-lg bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
                      ✗ Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={submitStatus === "loading"}
                    className="w-full rounded-full bg-[#0e1a2d] px-6 py-3 font-semibold text-white transition-all hover:shadow-[0_20px_50px_-30px_rgba(14,26,45,0.8)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0e1a2d] disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {submitStatus === "loading" ? "Wird gesendet..." : "Bewerbung absenden"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      <SiteFooter />
    </div>
  );
}

export default JobboersePage;
