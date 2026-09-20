"use client";

import { useId, useMemo, useState } from "react";
import { Clock, MessageCircle } from "lucide-react";
import { convert, countries, fmtTime, india } from "@/lib/countries";
import { whatsappLink } from "@/lib/site";
import { btn } from "./Buttons";

const slots = Array.from({ length: 15 }, (_, i) => (8 + i) * 60); // 8:00 AM … 10:00 PM

export function TimeFinder({ className = "", defaultCountry = "uae", id = "time-finder" }: { className?: string; defaultCountry?: string; id?: string }) {
  const uid = useId();
  const [slug, setSlug] = useState(defaultCountry);
  const [slot, setSlot] = useState(19 * 60);

  const selected = countries.find((c) => c.slug === slug)!;

  const rows = useMemo(() => {
    const all = [
      ...countries.map((c) => ({ key: c.slug, label: c.short, offset: c.offsetMin })),
      { key: "india", label: india.short, offset: india.offsetMin },
    ];
    // Countries sharing a clock are grouped into one row.
    const groups = new Map<number, string[]>();
    all.forEach((r) => groups.set(r.offset, [...(groups.get(r.offset) ?? []), r.label]));
    return [...groups.entries()]
      .sort((a, b) => a[0] - b[0])
      .map(([offset, labels]) => ({
        offset,
        labels,
        time: fmtTime(convert(slot, selected.offsetMin, offset)),
        mine: offset === selected.offsetMin,
      }));
  }, [selected, slot]);

  const message = `Assalamu alaikum, I live in ${selected.short}. I would like classes around ${fmtTime(slot)} (${selected.short} time) for my child. Please share the available options.`;

  const field =
    "mt-1.5 block min-h-11 w-full rounded-lg border border-gray-200 bg-white px-3 text-[15px] font-semibold text-gray-900 shadow-xs focus:border-gray-400";

  return (
    <div id={id} className={`nice-shadow rounded-2xl bg-white p-5 sm:p-6 ${className}`}>
      <div className="flex items-start gap-3">
        <span className="mt-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-lg bg-qalam-50 text-qalam-700">
          <Clock size={18} aria-hidden="true" />
        </span>
        <div>
          <h2 className="text-lg font-bold tracking-tight text-gray-900">Find a class time that fits your country</h2>
          <p className="mt-1 text-sm leading-relaxed text-gray-600">
            Pick where you live and a time. See what it is across the Gulf and in India.
          </p>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3">
        <div>
          <label htmlFor={`${uid}-c`} className="text-[13px] font-bold text-gray-700">
            I live in
          </label>
          <select id={`${uid}-c`} value={slug} onChange={(e) => setSlug(e.target.value)} className={field}>
            {countries.map((c) => (
              <option key={c.slug} value={c.slug}>
                {c.short}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor={`${uid}-t`} className="text-[13px] font-bold text-gray-700">
            Class time
          </label>
          <select id={`${uid}-t`} value={slot} onChange={(e) => setSlot(Number(e.target.value))} className={field}>
            {slots.map((s) => (
              <option key={s} value={s}>
                {fmtTime(s)}
              </option>
            ))}
          </select>
        </div>
      </div>

      <ul aria-live="polite" className="mt-5 divide-y divide-gray-100 overflow-hidden rounded-xl border border-gray-100">
        {rows.map((r) => (
          <li
            key={r.offset}
            className={`flex items-center justify-between gap-3 px-4 py-2.5 text-sm ${r.mine ? "bg-qalam-50" : "bg-white"}`}
          >
            <span className={`font-semibold ${r.mine ? "text-qalam-900" : "text-gray-700"}`}>
              {r.labels.join(", ")}
              {r.mine && <span className="ms-2 text-xs font-bold text-qalam-700">your time</span>}
            </span>
            <span className="shrink-0 font-extrabold tabular-nums text-gray-900">{r.time}</span>
          </li>
        ))}
      </ul>
      <p className="mt-2 text-xs text-gray-500">None of these countries change their clocks, so the times stay the same all year.</p>

      <a href={whatsappLink(message)} target="_blank" rel="noopener noreferrer" className={`${btn.primary} mt-5 w-full`}>
        <MessageCircle size={18} aria-hidden="true" />
        Ask for this time on WhatsApp
      </a>
    </div>
  );
}
