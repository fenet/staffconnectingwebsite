export type JobCategory = "Sales" | "IT" | "Finance" | "HR" | "Marketing" | "Operations";

export type JobPosting = {
  id: string;
  title: string;
  location: string;
  category: JobCategory;
  type: "Vollzeit" | "Teilzeit" | "Freelance";
  teaser: string;
};

export const JOB_POSTINGS: JobPosting[] = [
  {
    id: "vertriebsinnendienst",
    title: "Vertriebsinnendienst (m/w/d)",
    location: "Wien · Hybrid",
    category: "Sales",
    type: "Vollzeit",
    teaser: "Kundenbetreuung, Angebote und Pipeline-Management im wachsenden Team.",
  },
  {
    id: "jurist",
    title: "Jurist:in Arbeitsrecht",
    location: "Wien · Hybrid",
    category: "Finance",
    type: "Teilzeit",
    teaser: "Begleitung arbeitsrechtlicher Fragestellungen und Gestaltung von Vertragsvorlagen.",
  },
  {
    id: "content-creator",
    title: "Social Media Content Creator",
    location: "Remote",
    category: "Marketing",
    type: "Freelance",
    teaser: "Konzeption und Umsetzung von Content-Kampagnen zur Talentgewinnung.",
  },
  {
    id: "lohnverrechner",
    title: "Senior Payroll Specialist",
    location: "Salzburg · Onsite",
    category: "Finance",
    type: "Vollzeit",
    teaser: "Eigenverantwortliche Lohn- und Gehaltsabrechnung inklusive Reporting und Audits.",
  },
  {
    id: "personalberater",
    title: "Personalberater:in",
    location: "Linz · Onsite",
    category: "HR",
    type: "Vollzeit",
    teaser: "Beratung von Kundenunternehmen, Active Sourcing und Begleitung des gesamten Recruiting-Prozesses.",
  },
  {
    id: "linux-admin",
    title: "Linux System Administrator",
    location: "Graz · Remote-Option",
    category: "IT",
    type: "Vollzeit",
    teaser: "Verantwortung für Infrastruktur, Automatisierung und Security-Best-Practices.",
  },
];
