import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { pageMeta } from "@/lib/seo";
import { courses } from "@/lib/courses";
import { PageHeader, Section } from "@/components/Layout";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { abs, site } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Online Madrasa Courses for Kids",
  description:
    "Explore online madrasa courses for children: Noorani Qaida, Quran recitation with Tajweed, Hifz and Islamic studies, taught live by qualified teachers.",
  path: "/courses",
});

export default function CoursesPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ name: "Courses", path: "/courses" }]}
        title="Online madrasa courses for children"
        answer="Qalam Online Madrasa teaches four courses in live online classes: Noorani Qaida, Quran recitation with Tajweed, Quran Hifz and Islamic studies. Most children begin with Noorani Qaida and move through the Quran courses in order."
      />
      <Section>
        <ul className="grid gap-5 md:grid-cols-2">
          {courses.map((c) => (
            <li key={c.slug} className="nice-shadow flex flex-col rounded-2xl bg-white p-6 sm:p-8">
              <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">{c.name}</h2>
              <p className="mt-3 flex-1 text-[15px] leading-relaxed text-gray-600">{c.summary}</p>
              <ul className="mt-5 space-y-1.5 text-sm text-gray-700">
                {c.learn.slice(0, 3).map((l) => (
                  <li key={l.title} className="flex gap-2">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-qalam-600" aria-hidden="true" />
                    {l.title}
                  </li>
                ))}
              </ul>
              <Link
                href={`/courses/${c.slug}`}
                className="mt-6 inline-flex min-h-11 items-center gap-1.5 text-sm font-bold text-gray-900 hover:text-qalam-700"
              >
                See the course <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>
      </Section>
      <CtaBand />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: `${site.name} courses`,
          itemListElement: courses.map((c, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: c.name,
            url: abs(`/courses/${c.slug}`),
          })),
        }}
      />
    </>
  );
}
