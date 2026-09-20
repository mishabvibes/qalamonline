import { ChevronDown } from "lucide-react";
import type { Faq } from "@/lib/courses";
import { Rich } from "./Rich";

/** Native <details> keeps every answer in the HTML for crawlers and works without JavaScript. */
export function FaqList({ faqs, className = "" }: { faqs: Faq[]; className?: string }) {
  return (
    <div className={`divide-y divide-gray-100 overflow-hidden rounded-2xl border border-gray-100 bg-white ${className}`}>
      {faqs.map((f) => (
        <details key={f.q} className="group">
          <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-start text-base font-bold text-gray-900 marker:hidden hover:bg-gray-50 [&::-webkit-details-marker]:hidden">
            <h3 className="text-base font-bold">{f.q}</h3>
            <ChevronDown size={18} aria-hidden="true" className="shrink-0 text-gray-400 transition-transform group-open:rotate-180" />
          </summary>
          <p className="px-5 pb-5 text-[15px] leading-relaxed text-gray-600">
            <Rich text={f.a} />
          </p>
        </details>
      ))}
    </div>
  );
}
