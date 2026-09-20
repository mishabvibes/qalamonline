import type { Metadata } from "next";
import { faqGroups, allFaqs } from "@/lib/faqs";
import { faqLd, pageMeta } from "@/lib/seo";
import { PageHeader, Section } from "@/components/Layout";
import { CtaBand } from "@/components/CtaBand";
import { FaqList } from "@/components/FaqList";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = pageMeta({
  title: "Online Madrasa FAQ: Fees, Timings, Safety",
  description:
    "Answers to common questions about Qalam Online Madrasa: how online madrasa works, class timings, one-to-one attention, fees, safety and certificates.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ name: "FAQ", path: "/faq" }]}
        title="Frequently asked questions"
        answer="Qalam Online Madrasa teaches children live over the internet, with one-to-one attention, flexible timings, weekly tests and a certificate on completion. Below are the questions parents ask most often."
      />
      <Section narrow>
        <div className="space-y-12">
          {faqGroups.map((g) => (
            <section key={g.title}>
              <h2 className="mb-4 text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">{g.title}</h2>
              <FaqList faqs={g.items} />
            </section>
          ))}
        </div>
      </Section>
      <CtaBand title="Still have a question?" text="Message us on WhatsApp and we will reply with the details you need." />
      <JsonLd data={faqLd(allFaqs)} />
    </>
  );
}
