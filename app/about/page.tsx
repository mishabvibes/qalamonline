import type { Metadata } from "next";
import Link from "next/link";
import { pageMeta } from "@/lib/seo";
import { abs, site } from "@/lib/site";
import { courses } from "@/lib/courses";
import { PageHeader } from "@/components/Layout";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = pageMeta({
  title: "About Us",
  description:
    "Qalam Online Madrasa helps Gulf expatriate families give their children a proper religious education from anywhere, with live classes by qualified teachers.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ name: "About", path: "/about" }]}
        title="About Qalam Online Madrasa"
        answer="Qalam Online Madrasa is an online madrasa for Gulf expatriate families. We teach the Quran, Tajweed, Hifz and Islamic studies in live classes led by experienced, qualified teachers, so children can receive a religious education from wherever they live."
      />
      <div className="mx-auto max-w-4xl space-y-14 px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <section className="prose-qalam space-y-4 text-[17px] text-gray-700">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Our priority</h2>
          <p>
            Our motto is <strong>{site.tagline}</strong>. Families who live in the Gulf often find it hard to give their children a
            proper madrasa education: schedules are tight, distances are long and the right teacher may not be nearby. We started
            Qalam Online Madrasa so that families can now ensure their children&apos;s religious education from anywhere.
          </p>
          <p>
            The Arabic word <em>qalam</em> means pen. We chose it as our name because it stands for learning and writing, and
            we aim to put a good teacher and a clear path in front of every child.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">What we teach</h2>
          <ul className="mt-5 divide-y divide-gray-100 border-y border-gray-100">
            {courses.map((c) => (
              <li key={c.slug} className="py-4">
                <Link href={`/courses/${c.slug}`} className="font-bold text-gray-900 underline decoration-gray-300 decoration-2 underline-offset-4 hover:decoration-qalam-600">
                  {c.name}
                </Link>
                <p className="mt-1 text-[15px] text-gray-600">{c.summary}</p>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">How we teach</h2>
          <dl className="mt-5 grid gap-x-8 gap-y-6 sm:grid-cols-2">
            {[
              ["Live classes", "Interactive lessons with a qualified teacher, not recorded videos."],
              ["One-to-one attention", "Personalised support so each child understands before moving on."],
              ["Regular assessment", "Weekly tests and progress reports keep parents informed."],
              ["Flexible timings", "Class times chosen by the family to suit school and home routines."],
              ["Safe environment", "A safe and secure online space for every student."],
              ["Certificate", "Students receive a certificate on completion."],
            ].map(([t, d]) => (
              <div key={t}>
                <dt className="font-bold text-gray-900">{t}</dt>
                <dd className="mt-1 text-[15px] leading-relaxed text-gray-600">{d}</dd>
              </div>
            ))}
          </dl>
        </section>

        {site.teachers.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Meet the teachers</h2>
            <ul className="mt-5 grid gap-5 sm:grid-cols-2">
              {site.teachers.map((t) => (
                <li key={t.name} className="nice-shadow rounded-2xl bg-white p-5">
                  <p className="font-bold text-gray-900">{t.name}</p>
                  <p className="text-sm font-semibold text-qalam-700">{t.role}</p>
                  <p className="mt-2 text-[15px] text-gray-600">{t.bio}</p>
                </li>
              ))}
            </ul>
          </section>
        )}

        <p className="text-[17px] text-gray-700">
            Have a question before you enrol? Read the <Link href="/faq" className="font-bold underline decoration-gray-300 underline-offset-4 hover:decoration-gray-900">FAQ</Link> or{" "}
            <Link href="/contact" className="font-bold underline decoration-gray-300 underline-offset-4 hover:decoration-gray-900">contact us</Link>.
        </p>
      </div>
      <CtaBand />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          url: abs("/about"),
          name: `About ${site.name}`,
          about: { "@id": `${site.url}/#organization` },
        }}
      />
    </>
  );
}
