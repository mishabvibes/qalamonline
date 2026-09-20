import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, MapPin } from "lucide-react";
import { convert, countries, fmtTime, getCountry, india } from "@/lib/countries";
import { courses } from "@/lib/courses";
import { faqLd, pageMeta, serviceLd } from "@/lib/seo";
import { PageHeader, Section, container } from "@/components/Layout";
import { TimeFinder } from "@/components/TimeFinder";
import { CtaBand } from "@/components/CtaBand";
import { FaqList } from "@/components/FaqList";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return countries.map((c) => ({ country: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ country: string }> }): Promise<Metadata> {
  const { country } = await params;
  const c = getCountry(country);
  if (!c) return {};
  return pageMeta({
    title: `Online Madrasa in ${c.short} for Kids`,
    description: `Live online madrasa classes for children in ${c.name} (${c.cities.slice(0, 3).join(", ")}). Noorani Qaida, Quran with Tajweed, Hifz and Islamic studies at times that suit ${c.short} families.`,
    path: `/online-madrasa/${c.slug}`,
  });
}

export default async function CountryPage({ params }: { params: Promise<{ country: string }> }) {
  const { country } = await params;
  const c = getCountry(country);
  if (!c) notFound();

  const path = `/online-madrasa/${c.slug}`;
  const sample = 19 * 60; // 7:00 PM local
  const indiaTime = fmtTime(convert(sample, c.offsetMin, india.offsetMin));
  const diffH = (india.offsetMin - c.offsetMin) / 60;
  const sameClock = countries.filter((x) => x.offsetMin === c.offsetMin && x.slug !== c.slug).map((x) => x.short);
  const others = countries.filter((x) => x.slug !== c.slug);

  const faqs = [
    {
      q: `What time are online madrasa classes in ${c.short}?`,
      a: `Class times are flexible, so you can choose one that suits your child's school day. ${c.short} follows ${c.tzLabel}. For example, a class at 7:00 PM in ${c.short} is ${indiaTime} in India. Tell us your preferred time and we will suggest options.`,
    },
    {
      q: `Which days suit families in ${c.short}?`,
      a: `The weekend in ${c.short} is generally ${c.weekend}. ${c.rhythm}`,
    },
    {
      q: `Can my child join from ${c.cities[0]} or another city in ${c.short}?`,
      a: `Yes. Classes are online, so children in ${c.cities.slice(0, 4).join(", ")} or anywhere else in ${c.short} can join with a stable internet connection.`,
    },
    {
      q: `How do I enrol my child from ${c.short}?`,
      a: `Message us on WhatsApp or call ${site.phoneDisplay} with your child's age and the course you want, and we will confirm a class time.`,
    },
  ];

  return (
    <>
      <PageHeader
        crumbs={[
          { name: "Gulf countries", path: "/online-madrasa" },
          { name: c.name, path },
        ]}
        title={`Online Madrasa in ${c.name}`}
        answer={`Qalam Online Madrasa offers live online Quran and Islamic studies classes for children in ${c.name}, including ${c.cities.slice(0, 3).join(", ")}. ${c.short} follows ${c.tzLabel}, and class times are flexible to suit your family.`}
      />

      <div className={`${container} grid gap-12 py-12 sm:py-16 lg:grid-cols-12`}>
        <div className="lg:col-span-7">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Class timings for families in {c.short}</h2>
          <div className="prose-qalam mt-4 space-y-4 text-[17px] text-gray-700">
            <p>{c.rhythm}</p>
            <p>
              Weekend in {c.short}: <strong>{c.weekend}</strong>. Time zone: <strong>{c.tzLabel}</strong>. India is{" "}
              <strong>{diffH} hours ahead</strong> of {c.short}, so a 7:00 PM class in {c.short} is {indiaTime} in Kerala.
              {sameClock.length > 0 && <> {c.short} is on the same clock as {sameClock.join(", ")}.</>}
            </p>
          </div>

          <h2 className="mt-12 text-2xl font-bold tracking-tight text-gray-900">What children in {c.short} can learn</h2>
          <ul className="mt-5 divide-y divide-gray-100 border-y border-gray-100">
            {courses.map((k) => (
              <li key={k.slug}>
                <Link href={`/courses/${k.slug}`} className="group flex min-h-16 items-center justify-between gap-4 py-3">
                  <span>
                    <span className="block font-bold text-gray-900 group-hover:text-qalam-700">{k.name}</span>
                    <span className="block max-w-lg text-sm leading-relaxed text-gray-600">{k.summary}</span>
                  </span>
                  <ArrowRight size={16} aria-hidden="true" className="shrink-0 text-gray-400" />
                </Link>
              </li>
            ))}
          </ul>

          <h2 className="mt-12 text-2xl font-bold tracking-tight text-gray-900">Cities we teach in {c.short}</h2>
          <p className="mt-3 text-[16px] text-gray-600">Classes are online, so these are examples, not limits.</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {c.cities.map((city) => (
              <li key={city} className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-3.5 py-1.5 text-sm font-semibold text-gray-700">
                <MapPin size={14} aria-hidden="true" className="text-qalam-700" />
                {city}
              </li>
            ))}
          </ul>
        </div>

        <aside className="lg:col-span-5">
          <div className="lg:sticky lg:top-24">
            <TimeFinder defaultCountry={c.slug} id="country-time-finder" />
          </div>
        </aside>
      </div>

      <Section title={`Questions from parents in ${c.short}`} narrow className="pt-0">
        <FaqList faqs={faqs} />
      </Section>

      <Section title="Other Gulf countries" className="pt-0">
        <ul className="flex flex-wrap gap-2">
          {others.map((o) => (
            <li key={o.slug}>
              <Link
                href={`/online-madrasa/${o.slug}`}
                className="inline-flex min-h-11 items-center rounded-full border border-gray-200 bg-white px-4 text-sm font-semibold text-gray-700 hover:bg-gray-50"
              >
                {o.name}
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <CtaBand
        title={`Start madrasa classes from ${c.short}`}
        message={`Assalamu alaikum, I live in ${c.short} and would like to enrol my child in the online madrasa.`}
      />
      <JsonLd
        data={[
          serviceLd({
            name: `Online madrasa classes in ${c.name}`,
            description: `Live online Quran, Tajweed, Hifz and Islamic studies classes for children in ${c.name}.`,
            path,
            country: c.name,
          }),
          faqLd(faqs),
        ]}
      />
    </>
  );
}
