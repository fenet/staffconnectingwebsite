type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, description, align = "left" }: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "text-left";

  return (
    <div className={`max-w-2xl ${alignment}`}>
      {eyebrow ? (
        <p className={`inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.32em] text-brand-400 ${align === "center" ? "justify-center" : ""}`}>
          <span className="h-px w-6 bg-brand-400/70" aria-hidden />
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-4 text-[2.1rem] font-semibold text-navy-900 sm:text-[2.5rem] md:text-[3rem] md:leading-tight">
        {title}
      </h2>
      {description ? <p className="mt-4 text-base leading-relaxed text-sand-600 md:text-lg">{description}</p> : null}
    </div>
  );
}
