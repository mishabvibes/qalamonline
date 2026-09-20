"use client";

import { useId, useState } from "react";
import { MessageCircle } from "lucide-react";
import { countries } from "@/lib/countries";
import { courses } from "@/lib/courses";
import { whatsappLink } from "@/lib/site";
import { btn } from "./Buttons";

const field =
  "mt-1.5 block min-h-11 w-full rounded-lg border border-gray-200 bg-white px-3 text-[15px] text-gray-900 shadow-xs placeholder:text-gray-400 focus:border-gray-400";
const label = "text-[13px] font-bold text-gray-700";

/** No server needed: the form builds a message and opens WhatsApp with it pre-filled. */
export function ContactForm() {
  const uid = useId();
  const [v, setV] = useState({ name: "", country: "UAE", age: "", course: courses[0].name, time: "" });
  const set = (k: keyof typeof v) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setV((s) => ({ ...s, [k]: e.target.value }));

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const lines = [
      "Assalamu alaikum, I would like to enrol my child at Qalam Online Madrasa.",
      v.name && `Parent name: ${v.name}`,
      `Country: ${v.country}`,
      v.age && `Child's age: ${v.age}`,
      `Interested in: ${v.course}`,
      v.time && `Preferred time: ${v.time}`,
    ].filter(Boolean);
    window.open(whatsappLink(lines.join("\n")), "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={submit} className="nice-shadow rounded-2xl bg-white p-5 sm:p-7" aria-labelledby={`${uid}-h`}>
      <h2 id={`${uid}-h`} className="text-xl font-bold tracking-tight text-gray-900">
        Tell us about your child
      </h2>
      <p className="mt-1 text-sm text-gray-600">We will open WhatsApp with your details filled in, so you only need to press send.</p>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor={`${uid}-n`} className={label}>Your name</label>
          <input id={`${uid}-n`} value={v.name} onChange={set("name")} autoComplete="name" className={field} placeholder="Parent or guardian" />
        </div>
        <div>
          <label htmlFor={`${uid}-c`} className={label}>Country you live in</label>
          <select id={`${uid}-c`} value={v.country} onChange={set("country")} className={field}>
            {countries.map((c) => (<option key={c.slug}>{c.short}</option>))}
            <option>India</option>
            <option>Other</option>
          </select>
        </div>
        <div>
          <label htmlFor={`${uid}-a`} className={label}>Child&apos;s age</label>
          <input id={`${uid}-a`} value={v.age} onChange={set("age")} inputMode="numeric" className={field} placeholder="e.g. 8" />
        </div>
        <div>
          <label htmlFor={`${uid}-k`} className={label}>Interested in</label>
          <select id={`${uid}-k`} value={v.course} onChange={set("course")} className={field}>
            {courses.map((c) => (<option key={c.slug}>{c.name}</option>))}
            <option>Not sure yet</option>
          </select>
        </div>
        <div>
          <label htmlFor={`${uid}-t`} className={label}>Preferred class time</label>
          <input id={`${uid}-t`} value={v.time} onChange={set("time")} className={field} placeholder="e.g. 7 PM UAE time" />
        </div>
      </div>

      <button type="submit" className={`${btn.primary} mt-6 w-full sm:w-auto`}>
        <MessageCircle size={18} aria-hidden="true" />
        Send on WhatsApp
      </button>
    </form>
  );
}
