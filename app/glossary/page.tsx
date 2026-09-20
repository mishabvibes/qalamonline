import type { Metadata } from "next";
import { glossary } from "@/lib/glossary";
import { definedTermSetLd, pageMeta } from "@/lib/seo";
import { PageHeader, Section } from "@/components/Layout";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { Rich } from "@/components/Rich";

export const metadata: Metadata = pageMeta({
  title: "Madrasa Glossary: Qaida, Tajweed, Hifz",
  description:
    "Plain-language definitions of madrasa terms parents hear: Noorani Qaida, Tajweed, Makharij, Nazra, Hifz, Sabaq, Fiqh, Hadith, Seerah and Aqidah.",
  path: "/glossary",
});

const slugify = (t: string) => t.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export default function GlossaryPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ name: "Glossary", path: "/glossary" }]}
        title="Madrasa terms explained"
        answer="This glossary defines the Arabic and Urdu terms parents hear in madrasa classes, such as Noorani Qaida, Tajweed, Nazra and Hifz, in plain language."
      />
      <Section narrow>
        <dl className="divide-y divide-gray-100 border-y border-gray-100">
          {glossary.map((g) => (
            <div key={g.term} id={slugify(g.term)} className="grid gap-2 py-6 sm:grid-cols-3 sm:gap-8">
              <dt>
                <span className="text-lg font-bold text-gray-900">{g.term}</span>
                {g.arabic && (
                  <span lang="ar" dir="rtl" className="ms-3 font-arabic text-xl text-qalam-700">
                    {g.arabic}
                  </span>
                )}
              </dt>
              <dd className="text-[16px] leading-relaxed text-gray-700 sm:col-span-2">
                <Rich text={g.definition} />
              </dd>
            </div>
          ))}
        </dl>
      </Section>
      <CtaBand />
      <JsonLd data={definedTermSetLd(glossary)} />
    </>
  );
}
