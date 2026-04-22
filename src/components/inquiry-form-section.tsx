import { FormEvent, useState } from "react";
import { trackLead } from "../lib/meta-pixel";

export function InquiryFormSection() {
  const [showThankYou, setShowThankYou] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const values = {
      firstName: String(formData.get("firstName") ?? ""),
      lastName: String(formData.get("lastName") ?? ""),
      email: String(formData.get("email") ?? ""),
      land: String(formData.get("land") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    const mailSubject = encodeURIComponent("Neue Anfrage über Website");
    const mailBody = encodeURIComponent(
      `Vorname: ${values.firstName}\n` +
      `Nachname: ${values.lastName}\n` +
      `E-mail: ${values.email}\n` +
      `Land: ${values.land}\n` +
      `Telefonnummer: ${values.phone}\n\n` +
      `Ihre Nachricht:\n${values.message}`,
    );

    trackLead({
      content_name: "Inquiry Form",
      status: "submitted",
    });

    window.location.href = `mailto:office@staffconnecting.at?subject=${mailSubject}&body=${mailBody}`;
    setShowThankYou(true);
    form.reset();
  };

  return (
    <section className="rounded-[2.75rem] bg-white px-4 py-8 shadow-[0_30px_90px_-70px_rgba(15,23,42,0.45)] sm:px-6 lg:px-8">
      <div className="mx-auto grid w-full gap-6 lg:grid-cols-[60%_40%] lg:items-start">
        <div className="p-0">
          <div className="text-left">
            <h2 className="text-3xl font-semibold text-navy-900 sm:text-4xl">Anfrage absenden</h2>
            <p className="mt-2 text-base text-sand-700 sm:text-lg">Wir freuen uns auf Ihre Anfrage</p>
          </div>

          <form
            className="mt-5 grid w-full gap-3 md:grid-cols-2 lg:grid-cols-3"
            onSubmit={handleSubmit}
          >
            <label className="flex flex-col gap-2 text-left text-sm font-semibold text-sand-700 sm:text-base">
              Vorname*
              <input
                type="text"
                name="firstName"
                required
                className="rounded-xl border border-brand-400/70 bg-sand-50 px-4 py-3 text-base font-medium text-navy-900 placeholder:text-sand-400 shadow-[0_12px_32px_-26px_rgba(15,23,42,0.55)] focus:outline-none focus:ring-2 focus:ring-brand-200/70"
              />
            </label>

            <label className="flex flex-col gap-2 text-left text-sm font-semibold text-sand-700 sm:text-base">
              Nachname*
              <input
                type="text"
                name="lastName"
                required
                className="rounded-xl border border-brand-400/70 bg-sand-50 px-4 py-3 text-base font-medium text-navy-900 placeholder:text-sand-400 shadow-[0_12px_32px_-26px_rgba(15,23,42,0.55)] focus:outline-none focus:ring-2 focus:ring-brand-200/70"
              />
            </label>

            <label className="flex flex-col gap-2 text-left text-sm font-semibold text-sand-700 sm:text-base">
              E-mail*
              <input
                type="email"
                name="email"
                required
                className="rounded-xl border border-brand-400/70 bg-sand-50 px-4 py-3 text-base font-medium text-navy-900 placeholder:text-sand-400 shadow-[0_12px_32px_-26px_rgba(15,23,42,0.55)] focus:outline-none focus:ring-2 focus:ring-brand-200/70"
              />
            </label>

            <label className="flex flex-col gap-2 text-left text-sm font-semibold text-sand-700 sm:text-base">
              Land*
              <select
                name="land"
                required
                defaultValue=""
                className="rounded-xl border border-brand-400/70 bg-sand-50 px-4 py-3 text-base font-medium text-navy-900 shadow-[0_12px_32px_-26px_rgba(15,23,42,0.55)] focus:outline-none focus:ring-2 focus:ring-brand-200/70"
              >
                <option value="" disabled>
                  Bitte wählen
                </option>
                <option value="austria">Austria</option>
                <option value="germany">Germany</option>
                <option value="albania">Albania</option>
                <option value="andorra">Andorra</option>
                <option value="armenia">Armenia</option>
                <option value="azerbaijan">Azerbaijan</option>
                <option value="belarus">Belarus</option>
                <option value="belgium">Belgium</option>
                <option value="bosnia-herzegovina">Bosnia and Herzegovina</option>
                <option value="bulgaria">Bulgaria</option>
                <option value="croatia">Croatia</option>
                <option value="cyprus">Cyprus</option>
                <option value="czechia">Czechia</option>
                <option value="denmark">Denmark</option>
                <option value="estonia">Estonia</option>
                <option value="finland">Finland</option>
                <option value="france">France</option>
                <option value="georgia">Georgia</option>
                <option value="greece">Greece</option>
                <option value="hungary">Hungary</option>
                <option value="iceland">Iceland</option>
                <option value="ireland">Ireland</option>
                <option value="italy">Italy</option>
                <option value="kazakhstan">Kazakhstan</option>
                <option value="kosovo">Kosovo</option>
                <option value="latvia">Latvia</option>
                <option value="liechtenstein">Liechtenstein</option>
                <option value="lithuania">Lithuania</option>
                <option value="luxembourg">Luxembourg</option>
                <option value="malta">Malta</option>
                <option value="moldova">Moldova</option>
                <option value="monaco">Monaco</option>
                <option value="montenegro">Montenegro</option>
                <option value="netherlands">Netherlands</option>
                <option value="north-macedonia">North Macedonia</option>
                <option value="norway">Norway</option>
                <option value="poland">Poland</option>
                <option value="portugal">Portugal</option>
                <option value="romania">Romania</option>
                <option value="san-marino">San Marino</option>
                <option value="serbia">Serbia</option>
                <option value="slovakia">Slovakia</option>
                <option value="slovenia">Slovenia</option>
                <option value="spain">Spain</option>
                <option value="sweden">Sweden</option>
                <option value="switzerland">Switzerland</option>
                <option value="turkey">Turkey</option>
                <option value="ukraine">Ukraine</option>
                <option value="united-kingdom">United Kingdom</option>
                <option value="vatican-city">Vatican City</option>
              </select>
            </label>

            <label className="flex flex-col gap-2 text-left text-sm font-semibold text-sand-700 sm:text-base">
              Telefonnummer*
              <input
                type="tel"
                name="phone"
                required
                className="rounded-xl border border-brand-400/70 bg-sand-50 px-4 py-3 text-base font-medium text-navy-900 placeholder:text-sand-400 shadow-[0_12px_32px_-26px_rgba(15,23,42,0.55)] focus:outline-none focus:ring-2 focus:ring-brand-200/70"
              />
            </label>

            <label className="flex flex-col gap-2 text-left text-sm font-semibold text-sand-700 sm:text-base md:col-span-2 lg:col-span-3">
              Ihre Nachricht*
              <textarea
                name="message"
                required
                rows={2}
                className="rounded-xl border border-brand-400/70 bg-sand-50 px-4 py-3 text-base font-medium text-navy-900 placeholder:text-sand-400 shadow-[0_12px_32px_-26px_rgba(15,23,42,0.55)] focus:outline-none focus:ring-2 focus:ring-brand-200/70"
              />
            </label>

            <label className="inline-flex items-start gap-3 rounded-xl border border-brand-400/70 bg-sand-50 px-4 py-3 text-left text-sm font-semibold text-sand-700 sm:text-base md:col-span-2 lg:col-span-3">
              <input
                type="checkbox"
                name="privacyAccepted"
                value="yes"
                required
                className="mt-1 h-4 w-4 border-sand-400 text-brand-500 focus:ring-brand-300"
              />
              <span>Ich aktzeptiere die Datenverarbeitung und habe die Datenschutzerklärung akzeptiert*</span>
            </label>

            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-navy-900 px-7 py-3 text-base font-semibold text-white shadow-[0_22px_48px_-32px_rgba(15,23,42,0.85)] transition-colors hover:bg-navy-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-700 md:col-span-2 md:justify-self-start lg:col-span-3"
            >
              Anfrage absenden
              <span aria-hidden>→</span>
            </button>

            {showThankYou ? (
              <p className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-800 md:col-span-2 lg:col-span-3" role="status" aria-live="polite">
                Vielen Dank für Ihre Anfrage! Wir melden uns so schnell wie möglich bei Ihnen.
              </p>
            ) : null}
          </form>
        </div>

        <div>
          <img
            src="/contact.jpg"
            alt="Kontakt"
            className="h-[360px] w-full object-cover sm:h-[440px] lg:h-full lg:min-h-[520px]"
            loading="lazy"
            decoding="async"
          />
        </div>

      </div>
    </section>
  );
}
