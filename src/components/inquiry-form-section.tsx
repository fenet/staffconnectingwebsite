export function InquiryFormSection() {
  return (
    <section className="rounded-[2.75rem] bg-white px-8 py-14 shadow-[0_30px_90px_-70px_rgba(15,23,42,0.45)] sm:px-12 lg:px-16">
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-brand-400">Formular</p>
          <h2 className="mt-3 text-3xl font-semibold text-navy-900 sm:text-4xl">Jetzt bewerben</h2>
          <p className="mt-3 text-sm text-sand-700 sm:text-base">
            Füllen Sie das Formular aus, um zu sehen, ob Sie geeignet sind.
            <br />
            Wenn es passt, melden wir uns bei Ihnen.
          </p>
        </div>

        <form
          className="grid w-full gap-5"
          action="mailto:office@staffconnecting.at"
          method="post"
          encType="text/plain"
        >
          <label className="flex flex-col gap-2 text-left text-xs font-semibold uppercase tracking-[0.28em] text-sand-600">
            Vollständiger Name*
            <input
              type="text"
              name="fullName"
              required
              placeholder="Ihr vollständiger Name"
              className="rounded-xl bg-sand-50 px-4 py-3 text-sm font-medium text-navy-900 placeholder:text-sand-400 shadow-[0_12px_32px_-26px_rgba(15,23,42,0.55)] focus:outline-none focus:ring-2 focus:ring-brand-200/70"
            />
          </label>

          <div className="grid gap-5 sm:grid-cols-2">
            <label className="flex flex-col gap-2 text-left text-xs font-semibold uppercase tracking-[0.28em] text-sand-600">
              E-Mail*
              <input
                type="email"
                name="email"
                required
                placeholder="name@beispiel.com"
                className="rounded-xl bg-sand-50 px-4 py-3 text-sm font-medium text-navy-900 placeholder:text-sand-400 shadow-[0_12px_32px_-26px_rgba(15,23,42,0.55)] focus:outline-none focus:ring-2 focus:ring-brand-200/70"
              />
            </label>
            <label className="flex flex-col gap-2 text-left text-xs font-semibold uppercase tracking-[0.28em] text-sand-600">
              Telefonnummer*
              <input
                type="tel"
                name="phone"
                required
                placeholder="+43 ..."
                className="rounded-xl bg-sand-50 px-4 py-3 text-sm font-medium text-navy-900 placeholder:text-sand-400 shadow-[0_12px_32px_-26px_rgba(15,23,42,0.55)] focus:outline-none focus:ring-2 focus:ring-brand-200/70"
              />
            </label>
          </div>

          <fieldset className="rounded-2xl bg-sand-50 p-5 shadow-[0_12px_32px_-26px_rgba(15,23,42,0.55)]">
            <legend className="px-1 text-left text-xs font-semibold uppercase tracking-[0.28em] text-sand-600">
              Sind Sie bereit, in den nächsten 30 Tagen Ihr eigenes Unternehmen zu starten?
            </legend>
            <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
              <label className="inline-flex items-center gap-2 text-sm font-medium text-navy-900">
                <input
                  type="radio"
                  name="readyIn30Days"
                  value="yes"
                  className="h-4 w-4 border-sand-400 text-brand-400 focus:ring-brand-300"
                />
                Ja
              </label>
              <label className="inline-flex items-center gap-2 text-sm font-medium text-navy-900">
                <input
                  type="radio"
                  name="readyIn30Days"
                  value="not-sure"
                  className="h-4 w-4 border-sand-400 text-brand-400 focus:ring-brand-300"
                />
                Noch nicht sicher
              </label>
            </div>
          </fieldset>

          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-brand-400 via-[#0f1a2d] to-navy-900 px-7 py-3 text-sm font-semibold text-white shadow-[0_22px_48px_-32px_rgba(15,23,42,0.85)] transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-300"
          >
            Bewerbung absenden
            <span aria-hidden>→</span>
          </button>
        </form>
      </div>
    </section>
  );
}
