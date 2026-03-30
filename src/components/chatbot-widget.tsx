import { useState } from "react";

const IconChatBubble = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden
  >
    <path
      d="M12 18c0-4.418 4.477-8 10-8h20c5.523 0 10 3.582 10 8v16c0 4.418-4.477 8-10 8H26l-12 10V18Z"
      stroke="currentColor"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="24" cy="28" r="3" fill="currentColor" />
    <circle cx="32" cy="28" r="3" fill="currentColor" />
    <circle cx="40" cy="28" r="3" fill="currentColor" />
  </svg>
);

export function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleWidget = () => setIsOpen((prev) => !prev);

  return (
    <div className="fixed bottom-8 left-8 z-[60] flex flex-col items-start gap-4">
      {isOpen && (
        <div
          id="chatbot-widget"
          className="w-80 max-w-[85vw] overflow-hidden rounded-3xl border border-navy-700/60 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-800 text-white shadow-[0_25px_60px_-30px_rgba(15,23,42,0.55)]"
        >
          <div className="border-b border-white/10 bg-gradient-to-r from-brand-400/25 via-transparent to-transparent px-5 py-3">
            <p className="text-sm font-semibold text-white">Digitale Beraterin</p>
            <p className="text-xs text-white/70">Wie können wir Ihr People-Team unterstützen?</p>
          </div>
          <div className="space-y-4 px-5 py-4 text-sm text-white/80">
            <p className="rounded-2xl bg-white/10 px-4 py-3 text-white">
              Hallo! Ich bin Ihre virtuelle Ansprechpartnerin. Stellen Sie einfach Ihre Frage oder wählen Sie ein Thema.
            </p>
            <div className="space-y-2">
              <a
                href="mailto:office@staffconnecting.at?subject=Executive%20Search%20Anfrage"
                className="block w-full rounded-full bg-gradient-to-r from-navy-900 via-navy-800 to-brand-400 px-4 py-2 text-left font-semibold text-white shadow-[0_18px_42px_-28px_rgba(15,23,42,0.9)] transition hover:brightness-110"
              >
                Executive Search anfragen
              </a>
              <a
                href="mailto:office@staffconnecting.at?subject=Recruiting%20Enablement%20Anfrage"
                className="block w-full rounded-full bg-gradient-to-r from-navy-900 via-navy-800 to-brand-400 px-4 py-2 text-left font-semibold text-white shadow-[0_18px_42px_-28px_rgba(15,23,42,0.9)] transition hover:brightness-110"
              >
                Recruiting Enablement besprechen
              </a>
              <a
                href="mailto:office@staffconnecting.at?subject=Beratungstermin%20Anfrage"
                className="block w-full rounded-full bg-gradient-to-r from-navy-900 via-navy-800 to-brand-400 px-4 py-2 text-left font-semibold text-white shadow-[0_18px_42px_-28px_rgba(15,23,42,0.9)] transition hover:brightness-110"
              >
                Beratungstermin buchen
              </a>
            </div>
          </div>
          <form
            className="flex items-center gap-2 border-t border-white/10 bg-transparent px-5 py-3"
            action="mailto:office@staffconnecting.at?subject=Website%20Chat%20Inquiry"
            method="post"
            encType="text/plain"
          >
            <label htmlFor="chatbot-message" className="sr-only">
              Nachricht eingeben
            </label>
            <input
              id="chatbot-message"
              type="text"
              name="message"
              required
              placeholder="Nachricht eingeben..."
              className="h-10 flex-1 rounded-full border border-white/15 bg-navy-950/60 px-4 text-sm text-white placeholder:text-white/40 outline-none transition focus:border-brand-300/80"
            />
            <button
              type="submit"
              className="inline-flex h-10 items-center justify-center rounded-full bg-gradient-to-r from-navy-900 via-navy-800 to-brand-400 px-4 text-xs font-semibold uppercase tracking-[0.28em] text-white transition hover:brightness-110"
            >
              Senden
            </button>
          </form>
        </div>
      )}

      <button
        type="button"
        onClick={toggleWidget}
        aria-expanded={isOpen}
        aria-controls="chatbot-widget"
        className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-navy-900 via-navy-800 to-brand-500 text-white shadow-[0_35px_90px_-45px_rgba(15,23,42,0.65)] transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-300"
      >
        <span className="sr-only">Chatbot öffnen</span>
        <IconChatBubble className="h-12 w-12 text-white" />
      </button>
    </div>
  );
}
