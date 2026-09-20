import type { Metadata } from "next";
import { Clock, MessageCircle, Phone } from "lucide-react";
import { pageMeta } from "@/lib/seo";
import { abs, site, whatsappLink } from "@/lib/site";
import { PageHeader, container } from "@/components/Layout";
import { ContactForm } from "@/components/ContactForm";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = pageMeta({
  title: "Contact & Enrol on WhatsApp",
  description: `Enrol your child or ask a question. Message or call Qalam Online Madrasa on ${site.phoneDisplay}. We reply on WhatsApp.`,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ name: "Contact", path: "/contact" }]}
        title="Contact Qalam Online Madrasa"
        answer={`To enrol your child or ask about fees and class times, message or call ${site.phoneDisplay}. You can also fill the form below and it will open WhatsApp with your details ready to send.`}
      />
      <div className={`${container} grid gap-10 py-12 sm:py-16 lg:grid-cols-12`}>
        <div className="lg:col-span-7">
          <ContactForm />
        </div>
        <aside className="space-y-4 lg:col-span-5">
          <a
            href={whatsappLink("Assalamu alaikum, I would like to know more about the online madrasa classes.")}
            target="_blank"
            rel="noopener noreferrer"
            className="nice-shadow flex items-start gap-4 rounded-2xl bg-white p-5 transition hover:bg-gray-50"
          >
            <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-qalam-50 text-qalam-700">
              <MessageCircle size={19} aria-hidden="true" />
            </span>
            <span>
              <span className="block font-bold text-gray-900">WhatsApp</span>
              <span className="block text-sm text-gray-600">{site.phoneDisplay}</span>
              <span className="mt-1 block text-xs text-gray-500">Best for families in the Gulf</span>
            </span>
          </a>
          <a href={`tel:${site.phoneTel}`} className="nice-shadow flex items-start gap-4 rounded-2xl bg-white p-5 transition hover:bg-gray-50">
            <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-qalam-50 text-qalam-700">
              <Phone size={19} aria-hidden="true" />
            </span>
            <span>
              <span className="block font-bold text-gray-900">Phone</span>
              <span className="block text-sm text-gray-600">{site.phoneDisplay}</span>
            </span>
          </a>
          <div className="flex items-start gap-4 rounded-2xl border border-gray-100 bg-gray-50/70 p-5">
            <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-white text-gray-700 nice-shadow">
              <Clock size={19} aria-hidden="true" />
            </span>
            <p className="text-sm leading-relaxed text-gray-600">
              We are an online madrasa, so there is no office to visit. Every class takes place live over the internet.
            </p>
          </div>
        </aside>
      </div>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          url: abs("/contact"),
          name: `Contact ${site.name}`,
          about: { "@id": `${site.url}/#organization` },
        }}
      />
    </>
  );
}
