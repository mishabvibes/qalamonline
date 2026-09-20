import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Award, CheckCircle2, Clock, UserRound, Video } from "lucide-react";
import { courses, getCourse } from "@/lib/courses";
import { posts } from "@/lib/posts";
import { courseLd, faqLd, pageMeta } from "@/lib/seo";
import { PageHeader, Section, container } from "@/components/Layout";
import { CtaBand } from "@/components/CtaBand";
import { FaqList } from "@/components/FaqList";
import { JsonLd } from "@/components/JsonLd";
import { Rich } from "@/components/Rich";
import { WhatsAppButton } from "@/components/Buttons";

export function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const c = getCourse(slug);
  if (!c) return {};
  return pageMeta({ title: c.metaTitle, description: c.metaDescription, path: `/courses/${c.slug}` });
}

export default async function CoursePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = getCourse(slug);
  if (!c) notFound();

  const related = c.related.map((s) => getCourse(s)!).filter(Boolean);
  const articles = posts.filter((p) => p.course === c.slug);
  const path = `/courses/${c.slug}`;

  return (
    <>
      <PageHeader
        crumbs={[
          { name: "Courses", path: "/courses" },
          { name: c.name, path },
        ]}
        title={c.h1}
        answer={c.answer}
      />

      <div className={`${container} grid gap-12 py-12 sm:py-16 lg:grid-cols-12`}>
        <article className="prose-qalam lg:col-span-8">
          <div className="space-y-4 text-[17px] text-gray-700">
            {c.intro.map((p) => (
              <p key={p}>
                <Rich text={p} />
              </p>
            ))}
          </div>

          <h2 className="mt-12 text-2xl font-bold tracking-tight text-gray-900">Who this course is for</h2>
          <ul className="mt-4 space-y-3 text-[16px] text-gray-700">
            {c.whoFor.map((w) => (
              <li key={w} className="flex gap-3">
                <CheckCircle2 size={20} aria-hidden="true" className="mt-1 shrink-0 text-qalam-600" />
                <span>{w}</span>
              </li>
            ))}
          </ul>

          <h2 className="mt-12 text-2xl font-bold tracking-tight text-gray-900">What your child learns</h2>
          <dl className="mt-5 divide-y divide-gray-100 border-y border-gray-100">
            {c.learn.map((l) => (
              <div key={l.title} className="grid gap-1 py-4 sm:grid-cols-3 sm:gap-6">
                <dt className="font-bold text-gray-900">{l.title}</dt>
                <dd className="text-[16px] text-gray-600 sm:col-span-2">
                  <Rich text={l.text} />
                </dd>
              </div>
            ))}
          </dl>

          <h2 className="mt-12 text-2xl font-bold tracking-tight text-gray-900">How the classes run</h2>
          <ul className="mt-4 space-y-3 text-[16px] text-gray-700">
            {c.howItWorks.map((h) => (
              <li key={h} className="flex gap-3">
                <CheckCircle2 size={20} aria-hidden="true" className="mt-1 shrink-0 text-qalam-600" />
                <span>{h}</span>
              </li>
            ))}
          </ul>

          <h2 className="mt-12 text-2xl font-bold tracking-tight text-gray-900">What to expect at the end</h2>
          <p className="mt-4 text-[17px] text-gray-700">{c.outcome}</p>
        </article>

        <aside className="lg:col-span-4">
          <div className="nice-shadow rounded-2xl bg-white p-6 lg:sticky lg:top-24">
            <h2 className="text-lg font-bold text-gray-900">Enrol in {c.name}</h2>
            <ul className="mt-4 space-y-3 text-sm font-medium text-gray-700">
              <li className="flex items-center gap-3"><Video size={17} aria-hidden="true" className="text-qalam-700" />Live online classes</li>
              <li className="flex items-center gap-3"><UserRound size={17} aria-hidden="true" className="text-qalam-700" />One-to-one attention</li>
              <li className="flex items-center gap-3"><Clock size={17} aria-hidden="true" className="text-qalam-700" />Flexible timings</li>
              <li className="flex items-center gap-3"><Award size={17} aria-hidden="true" className="text-qalam-700" />Certificate on completion</li>
            </ul>
            <WhatsAppButton
              className="mt-6 w-full"
              message={`Assalamu alaikum, I would like to know more about the ${c.name} course for my child.`}
            />
            <p className="mt-3 text-center text-xs text-gray-500">Ask about fees and class times</p>
          </div>
        </aside>
      </div>

      <Section title={`${c.name}: common questions`} narrow className="pt-0">
        <FaqList faqs={c.faqs} />
      </Section>

      <Section title="Continue with" className="pt-0">
        <ul className="grid gap-4 sm:grid-cols-2">
          {related.map((r) => (
            <li key={r.slug}>
              <Link href={`/courses/${r.slug}`} className="nice-shadow block h-full rounded-2xl bg-white p-5 transition hover:bg-gray-50">
                <span className="text-lg font-bold text-gray-900">{r.name}</span>
                <span className="mt-1 block text-sm leading-relaxed text-gray-600">{r.summary}</span>
              </Link>
            </li>
          ))}
          {articles.slice(0, 1).map((a) => (
            <li key={a.slug} className="sm:col-span-2">
              <Link href={`/blog/${a.slug}`} className="block rounded-2xl border border-gray-100 bg-gray-50/70 p-5 transition hover:bg-gray-100/70">
                <span className="text-sm font-semibold text-gray-500">Read the guide</span>
                <span className="mt-1 block text-lg font-bold text-gray-900">{a.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <CtaBand message={`Assalamu alaikum, I would like to enrol my child in ${c.name}.`} />
      <JsonLd data={[courseLd({ name: c.name, description: c.metaDescription, path }), faqLd(c.faqs)]} />
    </>
  );
}
