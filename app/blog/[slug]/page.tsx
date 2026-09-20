import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { getPost, posts, readingMinutes } from "@/lib/posts";
import { getCourse } from "@/lib/courses";
import { articleLd, faqLd, pageMeta } from "@/lib/seo";
import { PageHeader, Section } from "@/components/Layout";
import { CtaBand } from "@/components/CtaBand";
import { FaqList } from "@/components/FaqList";
import { JsonLd } from "@/components/JsonLd";
import { Rich } from "@/components/Rich";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) return {};
  return pageMeta({
    title: p.metaTitle,
    description: p.description,
    path: `/blog/${p.slug}`,
    type: "article",
    publishedTime: p.date,
    modifiedTime: p.updated,
  });
}

const slugify = (t: string) => t.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
const fmt = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) notFound();

  const path = `/blog/${p.slug}`;
  const course = getCourse(p.course);
  const more = posts.filter((x) => x.slug !== p.slug).slice(0, 3);

  return (
    <>
      <PageHeader
        crumbs={[
          { name: "Blog", path: "/blog" },
          { name: p.title, path },
        ]}
        title={p.title}
        answer={p.answer}
      >
        <p className="mt-5 text-sm text-gray-500">
          By {`Qalam Online Madrasa`} · Updated <time dateTime={p.updated}>{fmt(p.updated)}</time> · {readingMinutes(p)} min read
        </p>
      </PageHeader>

      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <nav aria-label="In this article" className="mb-12 rounded-2xl border border-gray-100 bg-gray-50/70 p-5">
          <p className="text-sm font-bold text-gray-900">In this article</p>
          <ol className="mt-3 space-y-1.5 text-sm">
            {p.sections.map((s) => (
              <li key={s.h2}>
                <a href={`#${slugify(s.h2)}`} className="text-gray-600 underline decoration-gray-300 underline-offset-4 hover:text-gray-900 hover:decoration-gray-900">
                  {s.h2}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <article className="prose-qalam max-w-2xl space-y-12 text-[17px] text-gray-700">
          {p.sections.map((s) => (
            <section key={s.h2} id={slugify(s.h2)} className="scroll-mt-24">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 text-balance">{s.h2}</h2>
              <div className="mt-4 space-y-4">
                {s.blocks.map((b, i) => {
                  if (b.type === "p")
                    return (
                      <p key={i}>
                        <Rich text={b.text} />
                      </p>
                    );
                  const Tag = b.type === "ol" ? "ol" : "ul";
                  return (
                    <Tag key={i} className={`space-y-2 ps-6 marker:font-bold marker:text-qalam-700 ${b.type === "ol" ? "list-decimal" : "list-disc"}`}>
                      {b.items.map((it) => (
                        <li key={it} className="ps-1">
                          <Rich text={it} />
                        </li>
                      ))}
                    </Tag>
                  );
                })}
              </div>
            </section>
          ))}
        </article>

        {p.faqs && (
          <div className="mt-16">
            <h2 className="mb-4 text-2xl font-bold tracking-tight text-gray-900">Quick answers</h2>
            <FaqList faqs={p.faqs} />
          </div>
        )}

        {course && (
          <Link
            href={`/courses/${course.slug}`}
            className="nice-shadow mt-14 flex items-center justify-between gap-4 rounded-2xl bg-white p-6 transition hover:bg-gray-50"
          >
            <span>
              <span className="block text-sm font-semibold text-gray-500">Related course</span>
              <span className="mt-1 block text-lg font-bold text-gray-900">{course.name}</span>
              <span className="mt-1 block max-w-md text-sm text-gray-600">{course.summary}</span>
            </span>
            <ArrowRight size={18} aria-hidden="true" className="shrink-0 text-gray-400" />
          </Link>
        )}
      </div>

      <Section title="More guides for parents" className="pt-0">
        <ul className="grid gap-4 md:grid-cols-3">
          {more.map((m) => (
            <li key={m.slug}>
              <Link href={`/blog/${m.slug}`} className="block h-full rounded-2xl border border-gray-100 p-5 transition hover:bg-gray-50">
                <span className="text-sm font-semibold text-qalam-700">{m.category}</span>
                <span className="mt-1 block font-bold leading-snug text-gray-900">{m.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <CtaBand />
      <JsonLd
        data={[
          articleLd({ title: p.title, description: p.description, path, date: p.date, updated: p.updated }),
          ...(p.faqs ? [faqLd(p.faqs)] : []),
        ]}
      />
    </>
  );
}
