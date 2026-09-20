import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { countries, india } from "@/lib/countries";
import { pageMeta } from "@/lib/seo";
import { PageHeader, Section } from "@/components/Layout";
import { TimeFinder } from "@/components/TimeFinder";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = pageMeta({
  title: "Online Madrasa in the Gulf Countries",
  description:
    "Live online madrasa for children in the UAE, Saudi Arabia, Qatar, Kuwait, Oman and Bahrain. Compare Gulf time zones, weekends and class timings.",
  path: "/online-madrasa",
});

const diff = (o: number) => {
  const h = (india.offsetMin - o) / 60;
  return `${h} hours`;
};

export default function GulfHub() {
  return (
    <>
      <PageHeader
        crumbs={[{ name: "Gulf countries", path: "/online-madrasa" }]}
        title="Online madrasa for children in the Gulf"
        answer="Qalam Online Madrasa teaches children in the UAE, Saudi Arabia, Qatar, Kuwait, Oman and Bahrain through live online classes. Because classes are online, the class time is chosen to suit your country's school week and time zone."
      />

      <Section title="Time zones and weekends across the Gulf" intro="Use this table to plan a class time. Kerala is 1.5 or 2.5 hours ahead of the Gulf, depending on the country.">
        <div className="overflow-x-auto rounded-2xl border border-gray-100">
          <table className="w-full min-w-[640px] border-collapse text-start text-sm">
            <caption className="sr-only">Time zone, weekend and difference from India for each Gulf country</caption>
            <thead className="bg-gray-50 text-gray-700">
              <tr>
                <th scope="col" className="px-4 py-3 text-start font-bold">Country</th>
                <th scope="col" className="px-4 py-3 text-start font-bold">Time zone</th>
                <th scope="col" className="px-4 py-3 text-start font-bold">Weekend</th>
                <th scope="col" className="px-4 py-3 text-start font-bold">India is ahead by</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {countries.map((c) => (
                <tr key={c.slug}>
                  <th scope="row" className="px-4 py-3 text-start font-bold text-gray-900">
                    <Link href={`/online-madrasa/${c.slug}`} className="underline decoration-gray-300 underline-offset-4 hover:decoration-gray-900">
                      {c.name}
                    </Link>
                  </th>
                  <td className="px-4 py-3 text-gray-600">{c.tzLabel}</td>
                  <td className="px-4 py-3 text-gray-600">{c.weekend}</td>
                  <td className="px-4 py-3 text-gray-600">{diff(c.offsetMin)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-6">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Pick your country</h2>
            <p className="mt-3 text-base leading-relaxed text-gray-600 sm:text-lg">
              Every country page has the class timings, cities we serve and answers to the questions parents there ask most.
            </p>
            <ul className="mt-6 divide-y divide-gray-100 border-y border-gray-100">
              {countries.map((c) => (
                <li key={c.slug}>
                  <Link href={`/online-madrasa/${c.slug}`} className="group flex min-h-14 items-center justify-between gap-4 py-3">
                    <span>
                      <span className="block font-bold text-gray-900 group-hover:text-qalam-700">Online madrasa in {c.name}</span>
                      <span className="block text-sm text-gray-500">{c.cities.slice(0, 3).join(", ")}</span>
                    </span>
                    <ArrowRight size={16} aria-hidden="true" className="shrink-0 text-gray-400" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-6">
            <TimeFinder id="hub-time-finder" />
          </div>
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
