import { Breadcrumbs } from "./Breadcrumbs";
import { Rich } from "./Rich";

export const container = "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8";

/** Page opener used by every inner page: breadcrumbs, H1, and a direct answer. */
export function PageHeader({
  crumbs,
  title,
  answer,
  lead,
  children,
}: {
  crumbs: { name: string; path: string }[];
  title: string;
  /** Short, self-contained answer that search and AI engines can quote. */
  answer?: string;
  lead?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-gray-100">
      <div className="blueprint absolute inset-0" aria-hidden="true" />
      <div className={`${container} relative pb-10 pt-8 sm:pb-14 sm:pt-10`}>
        <Breadcrumbs items={crumbs} />
        <h1 className="mt-6 max-w-3xl text-3xl font-black tracking-tight text-gray-900 text-balance sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {lead && <p className="mt-4 max-w-2xl text-lg leading-relaxed text-gray-600">{lead}</p>}
        {answer && (
          <p className="nice-shadow mt-6 max-w-3xl rounded-xl border-s-4 border-qalam-600 bg-white p-5 text-[17px] leading-relaxed text-gray-800">
            <Rich text={answer} />
          </p>
        )}
        {children}
      </div>
    </section>
  );
}

export const containerNarrow = "mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8";

export function Section({
  title,
  intro,
  id,
  children,
  className = "",
  narrow = false,
}: {
  title?: string;
  intro?: string;
  id?: string;
  children: React.ReactNode;
  className?: string;
  narrow?: boolean;
}) {
  return (
    <section id={id} className={`${narrow ? containerNarrow : container} py-12 sm:py-16 ${className}`}>
      {title && <h2 className="max-w-2xl text-2xl font-bold tracking-tight text-gray-900 text-balance sm:text-3xl">{title}</h2>}
      {intro && <p className="mt-3 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">{intro}</p>}
      <div className={title || intro ? "mt-8" : ""}>{children}</div>
    </section>
  );
}
