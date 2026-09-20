import type { Metadata } from "next";
import Link from "next/link";
import { posts, readingMinutes } from "@/lib/posts";
import { pageMeta } from "@/lib/seo";
import { PageHeader, Section } from "@/components/Layout";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = pageMeta({
  title: "Blog: Guides for Parents",
  description:
    "Practical guides for Gulf parents: starting Noorani Qaida, understanding Tajweed, beginning Hifz, choosing an online madrasa and helping children focus at home.",
  path: "/blog",
});

const fmt = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });

export default function BlogIndex() {
  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));
  return (
    <>
      <PageHeader
        crumbs={[{ name: "Blog", path: "/blog" }]}
        title="Guides for parents"
        lead="Clear, practical answers on Quran learning and Islamic education for children growing up in the Gulf."
      />
      <Section narrow>
        <ul className="divide-y divide-gray-100 border-y border-gray-100">
          {sorted.map((p) => (
            <li key={p.slug}>
              <article className="py-7">
                <p className="text-sm font-semibold text-qalam-700">{p.category}</p>
                <h2 className="mt-1 text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
                  <Link href={`/blog/${p.slug}`} className="hover:text-qalam-700">
                    {p.title}
                  </Link>
                </h2>
                <p className="mt-2 text-[16px] leading-relaxed text-gray-600">{p.description}</p>
                <p className="mt-3 text-sm text-gray-500">
                  <time dateTime={p.date}>{fmt(p.date)}</time> · {readingMinutes(p)} min read
                </p>
              </article>
            </li>
          ))}
        </ul>
      </Section>
      <CtaBand />
    </>
  );
}
