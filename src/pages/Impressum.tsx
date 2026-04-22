import { SecondaryNav } from "../components/secondary-nav";
import { SiteFooter } from "../components/site-footer";

function ImpressumPage() {
  return (
    <div className="overflow-x-hidden bg-[#f5f6f8] font-sans text-navy-900">
      <SecondaryNav />

      <header className="relative overflow-hidden pb-16 pt-16 sm:pb-20 sm:pt-20">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(14,26,45,0.06),rgba(191,145,92,0.12))]" aria-hidden />
        <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-8 lg:px-10">
          <h1 className="text-4xl font-semibold text-navy-900 sm:text-5xl">Impressum</h1>
          <div className="mt-4 h-2 w-20 rounded-full bg-brand-400" aria-hidden />
          <p className="mt-4 max-w-4xl text-lg leading-relaxed text-sand-700 sm:text-xl">
            Rechtliche Angaben gemäß österreichischem Recht.
          </p>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl space-y-8 px-4 pb-24 sm:px-8 lg:px-10">
        <section className="rounded-[2.2rem] bg-white p-8 shadow-[0_30px_80px_-60px_rgba(15,23,42,0.35)] sm:p-10">
          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl bg-sand-50 p-6">
              <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-500">Firmenwortlaut</h2>
              <p className="mt-3 text-lg font-semibold text-navy-900">Sebastijan Aleksandar Kerculj</p>
              <p className="text-base text-sand-700">Staffconnecting</p>
            </article>

            <article className="rounded-2xl bg-sand-50 p-6">
              <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-500">Gründer und Inhaber</h2>
              <p className="mt-3 text-lg font-semibold text-navy-900">Sebastijan Aleksandar Kerculj</p>
            </article>
          </div>
        </section>

        <section className="rounded-[2.2rem] bg-white p-8 shadow-[0_30px_80px_-60px_rgba(15,23,42,0.35)] sm:p-10">
          <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-500">Unternehmensgegenstand</h2>
          <p className="mt-4 text-base leading-relaxed text-sand-700 sm:text-lg">
            Gegenstand des Unternehmens ist die Ausübung der Arbeitskräftevermittlung, Vermittlung von Werk und Dienstleistung,
            sowie die Ausübung von Marketing und PR einer Werbeargentur und die Hausbetreuung.
          </p>
        </section>

        <section className="rounded-[2.2rem] bg-white p-8 shadow-[0_30px_80px_-60px_rgba(15,23,42,0.35)] sm:p-10">
          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl bg-sand-50 p-6">
              <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-500">UID-Nummer</h3>
              <p className="mt-3 text-base font-semibold text-navy-900">ATU78448967</p>
            </article>

            <article className="rounded-2xl bg-sand-50 p-6">
              <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-500">Firmenbuchnummer</h3>
              <p className="mt-3 text-base text-sand-700">—</p>
            </article>

            <article className="rounded-2xl bg-sand-50 p-6 md:col-span-2">
              <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-500">Firmenbuchgericht</h3>
              <p className="mt-3 text-base text-sand-700">Handelsgericht Wien, Marxergasse 1a, A-1030 Wien</p>
            </article>

            <article className="rounded-2xl bg-sand-50 p-6 md:col-span-2">
              <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-500">Firmensitz</h3>
              <p className="mt-3 text-base text-sand-700">Simmeringer Hauptstraße 24, 1110 Wien</p>
            </article>
          </div>
        </section>

        <section className="rounded-[2.2rem] bg-[linear-gradient(145deg,#0b1424,#0f1a2d)] p-8 text-white shadow-[0_35px_100px_-70px_rgba(15,23,42,0.75)] sm:p-10">
          <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-300">Kontaktdaten</h2>
          <div className="mt-4 space-y-2 text-base sm:text-lg">
            <p>Tel.: +43 (0)676 6300167</p>
            <p>
              E-Mail: <a href="mailto:info@staffconnecting.at" className="underline underline-offset-4">info@staffconnecting.at</a>
            </p>
          </div>
          <p className="mt-6 text-sm text-white/85 sm:text-base">
            Mitglied der WKO-Wien, Fachgruppe Wien gewerbliche Dienstleister
          </p>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

export default ImpressumPage;
