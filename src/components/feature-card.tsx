import { ReactNode } from "react";

type FeatureCardProps = {
  icon?: ReactNode;
  title: string;
  description: string;
  href?: string;
  actionLabel?: string;
};

export function FeatureCard({ icon, title, description, href, actionLabel }: FeatureCardProps) {
  const Wrapper = href ? "a" : "div";

  return (
    <Wrapper
      {...(href
        ? {
            href,
            className:
              "group relative flex h-full flex-col items-center justify-between rounded-2xl bg-white px-8 py-7 text-center shadow-[0_20px_55px_-40px_rgba(15,23,42,0.5)] transition hover:-translate-y-1 hover:shadow-[0_26px_70px_-40px_rgba(15,23,42,0.6)]",
          }
        : {
            className:
              "relative flex h-full flex-col items-center justify-between rounded-2xl bg-white px-8 py-7 text-center shadow-[0_20px_55px_-40px_rgba(15,23,42,0.5)]",
          })}
    >
      <div>
        {icon ? (
          <div className="mb-6 flex justify-center" aria-hidden>
            <div className="relative inline-flex h-20 w-20 items-center justify-center">
              <span className="relative flex h-full w-full items-center justify-center rounded-[1.5rem] bg-navy-900 shadow-[0_20px_45px_-30px_rgba(15,23,42,0.8)]">
                {icon}
              </span>
            </div>
          </div>
        ) : null}
        <h3 className="text-[1.4rem] font-semibold text-navy-900">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-sand-700">{description}</p>
      </div>
      {href && actionLabel ? (
        <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-navy-900 group-hover:text-navy-800">
          {actionLabel}
          <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1.5">
            →
          </span>
        </span>
      ) : null}
    </Wrapper>
  );
}
