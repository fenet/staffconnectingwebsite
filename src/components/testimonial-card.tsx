type TestimonialCardProps = {
  quote: string;
  name: string;
  role?: string;
};

export function TestimonialCard({ quote, name, role }: TestimonialCardProps) {
  return (
    <figure className="relative flex h-full flex-col justify-between rounded-2xl bg-white p-8 shadow-[0_20px_55px_-40px_rgba(15,23,42,0.5)]">
      <span className="mb-4 inline-block h-0.5 w-10 bg-brand-400" aria-hidden />
      <blockquote className="text-lg leading-relaxed text-navy-800">“{quote}”</blockquote>
      <figcaption className="mt-8 text-sm font-semibold text-navy-900">
        {name}
        {role ? <span className="ml-2 font-normal text-sand-600">· {role}</span> : null}
      </figcaption>
    </figure>
  );
}
