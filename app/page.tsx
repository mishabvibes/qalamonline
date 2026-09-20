import type { Metadata } from "next";
import Link from "next/link";
import {
  Award,
  ClipboardCheck,
  Clock,
  GraduationCap,
  MessageCircle,
  ShieldCheck,
  UserRound,
  Video,
  Wallet,
  ArrowRight,
} from "lucide-react";
import { pageMeta } from "@/lib/seo";
import { site, whatsappLink } from "@/lib/site";
import { courses } from "@/lib/courses";
import { countries } from "@/lib/countries";
import { posts } from "@/lib/posts";
import { homeFaqs } from "@/lib/faqs";
import { TimeFinder } from "@/components/TimeFinder";
import { CallButton, LinkButton, WhatsAppButton } from "@/components/Buttons";
import { CtaBand } from "@/components/CtaBand";
import { FaqList } from "@/components/FaqList";
import { JsonLd } from "@/components/JsonLd";
import { faqLd } from "@/lib/seo";
import { container, Section } from "@/components/Layout";

export const metadata: Metadata = {
  ...pageMeta({
    title: `${site.name} | Online Madrasa for Gulf Families`,
    description:
      "Live online madrasa for Gulf families: Noorani Qaida, Quran with Tajweed, Hifz and Islamic studies with qualified teachers and flexible timings.",
    path: "/",
  }),
  title: { absolute: `${site.name} | Online Madrasa for Gulf Families` },
};

const path = [
  { slug: "noorani-qaida", n: 1, text: "Learn the Arabic letters, their sounds and the first reading rules." },
  { slug: "quran-recitation-tajweed", n: 2, text: "Read the Quran fluently from the mushaf and apply Tajweed." },
  { slug: "quran-hifz", n: 3, text: "Memorise the Quran with a daily lesson, revision and weekly tests." },
];

const how = [
  {
    icon: Video,
    title: "Live online classes",
    text: "Interactive classes with qualified teachers. Your child speaks, the teacher listens and corrects on the spot.",
  },
  {
    icon: UserRound,
    title: "One-to-one attention",
    text: "Personalised support, so each child understands a lesson before moving to the next.",
  },
  {
    icon: Clock,
    title: "Flexible timings",
    text: "Choose a class time that suits school hours and your family's routine, in any Gulf time zone.",
  },
  {
    icon: ClipboardCheck,
    title: "Regular assessments",
    text: "Weekly tests and progress reports show you exactly where your child stands.",
  },
];

const why = [
  { icon: GraduationCap, title: "Experienced and qualified teachers", text: "Every class is led by a teacher who knows how to teach children." },
  { icon: ShieldCheck, title: "Safe and secure online environment", text: "A protected space where children can focus on learning." },
  { icon: Wallet, title: "Affordable fees", text: "Madrasa education that stays within a family's budget." },
  { icon: Award, title: "Certificate on completion", text: "Students receive a certificate when they complete their course." },
];

export default function Home() {
  const latest = [...posts].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="blueprint absolute inset-0" aria-hidden="true" />
        <div className={`${container} relative grid gap-10 pb-14 pt-10 sm:pt-14 lg:grid-cols-12 lg:gap-12 lg:pb-24 lg:pt-20`}>
          <div className="lg:col-span-7">
            <p>
              <span dir="rtl" lang="ar" className="inline-block font-arabic text-3xl leading-[1.8] text-qalam-700 sm:text-4xl">
                بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
              </span>
            </p>
            <h1 className="mt-7 text-4xl font-black tracking-tight text-gray-900 text-balance sm:text-5xl lg:text-6xl">
              Online Madrasa for Gulf Families
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-gray-600">
              Gulf expatriate families can now ensure their children&apos;s religious education from anywhere. Live Quran, Tajweed
              and Islamic studies classes with qualified teachers, for children in the UAE, Saudi Arabia, Qatar, Kuwait, Oman and
              Bahrain.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <WhatsAppButton />
              <LinkButton href="/courses">View courses</LinkButton>
            </div>
            <ul className="mt-10 grid max-w-xl grid-cols-2 gap-x-6 gap-y-4 text-sm font-semibold text-gray-700">
              {[
                [Video, "Live classes"],
                [UserRound, "One-to-one attention"],
                [Clock, "Flexible timings"],
                [ClipboardCheck, "Weekly tests"],
              ].map(([Icon, label]) => {
                const I = Icon as typeof Video;
                return (
                  <li key={label as string} className="flex items-center gap-2.5">
                    <span className="inline-flex size-8 items-center justify-center rounded-lg bg-qalam-50 text-qalam-700">
                      <I size={16} aria-hidden="true" />
                    </span>
                    {label as string}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="lg:col-span-5">
            <TimeFinder />
          </div>
        </div>
      </section>

      {/* Quran learning path — a real sequence */}
      <Section
        title="Quran learning, one step at a time"
        intro="Most children follow this order. Weekly tests show when your child is ready for the next stage."
      >
        <ol className="grid gap-4 md:grid-cols-3">
          {path.map((p) => {
            const c = courses.find((x) => x.slug === p.slug)!;
            return (
              <li key={p.slug} className="nice-shadow relative flex flex-col rounded-2xl bg-white p-6">
                <span className="inline-flex size-9 items-center justify-center rounded-full bg-gray-900 text-sm font-extrabold text-white">
                  {p.n}
                </span>
                <h3 className="mt-5 text-xl font-bold tracking-tight text-gray-900">{c.name}</h3>
                <p className="mt-2 flex-1 text-[15px] leading-relaxed text-gray-600">{p.text}</p>
                <Link
                  href={`/courses/${c.slug}`}
                  className="mt-5 inline-flex min-h-11 items-center gap-1.5 text-sm font-bold text-gray-900 hover:text-qalam-700"
                >
                  About {c.name}
                  <ArrowRight size={15} aria-hidden="true" />
                </Link>
              </li>
            );
          })}
        </ol>

        <div className="mt-6 flex flex-col gap-4 rounded-2xl border border-gray-100 bg-gray-50/70 p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-lg font-bold text-gray-900">Islamic studies</h3>
            <p className="mt-1 max-w-xl text-[15px] leading-relaxed text-gray-600">
              Beliefs, prayer and fiqh, hadith, the seerah of the Prophet, daily duas and good manners, alongside Quran classes.
            </p>
          </div>
          <LinkButton href="/courses/islamic-studies" className="shrink-0">
            About Islamic studies
          </LinkButton>
        </div>
      </Section>

      {/* How classes work */}
      <section className="border-y border-gray-100 bg-gray-50/60">
        <div className={`${container} grid gap-10 py-14 sm:py-20 lg:grid-cols-12`}>
          <div className="lg:col-span-4">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 text-balance sm:text-3xl">How classes work</h2>
            <p className="mt-3 text-base leading-relaxed text-gray-600 sm:text-lg">
              A simple routine that fits around school, homework and family time.
            </p>
          </div>
          <ul className="divide-y divide-gray-200 lg:col-span-8">
            {how.map(({ icon: Icon, title, text }) => (
              <li key={title} className="flex gap-4 py-5 first:pt-0 last:pb-0">
                <span className="mt-0.5 inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-white text-gray-900 nice-shadow">
                  <Icon size={19} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{title}</h3>
                  <p className="mt-1 max-w-xl text-[15px] leading-relaxed text-gray-600">{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Why us */}
      <Section title="Why families choose Qalam">
        <ul className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {why.map(({ icon: Icon, title, text }) => (
            <li key={title}>
              <Icon size={26} aria-hidden="true" className="text-qalam-700" strokeWidth={1.75} />
              <h3 className="mt-4 text-lg font-bold leading-snug text-gray-900">{title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-gray-600">{text}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* Countries */}
      <section className="border-y border-gray-100 bg-gray-50/60">
        <div className={`${container} py-14 sm:py-20`}>
          <h2 className="max-w-2xl text-2xl font-bold tracking-tight text-gray-900 text-balance sm:text-3xl">
            Teaching families across the Gulf
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">
            Classes run online, so where you live does not matter. See timings and school-week tips for your country.
          </p>
          <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {countries.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/online-madrasa/${c.slug}`}
                  className="nice-shadow flex h-full min-h-20 flex-col justify-between rounded-xl bg-white p-4 transition hover:-translate-y-0.5 hover:bg-gray-50"
                >
                  <span className="text-[15px] font-bold text-gray-900">{c.short}</span>
                  <span className="mt-2 text-xs font-medium text-gray-500">{c.cities.slice(0, 2).join(", ")}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Malayalam */}
      <Section>
        <div className="grid gap-6 rounded-2xl border border-gray-100 p-6 sm:p-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-8" lang="ml">
            <h2 className="font-malayalam text-2xl font-bold leading-snug text-gray-900 sm:text-3xl">
              ഗൾഫിലെ കുട്ടികൾക്കായി ഓൺലൈൻ മദ്രസ
            </h2>
            <p className="mt-4 max-w-2xl font-malayalam text-base leading-8 text-gray-600">
              ഗൾഫ് പ്രവാസി കുടുംബങ്ങൾക്ക് ഇനി എവിടെയിരുന്നും കുട്ടികളുടെ മതവിദ്യാഭ്യാസം ഉറപ്പാക്കാം. ഖുർആൻ പഠനം, തജ്‌വീദ്,
              ഹിഫ്ള്, ഇസ്‌ലാമിക് സ്റ്റഡീസ് എന്നിവ യോഗ്യരായ അധ്യാപകരുടെ ലൈവ് ക്ലാസുകളിലൂടെ.
            </p>
          </div>
          <div className="lg:col-span-4 lg:justify-self-end">
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <WhatsAppButton label="WhatsApp" message="Assalamu alaikum, I would like to know more about the online madrasa." />
              <CallButton />
            </div>
          </div>
        </div>
      </Section>

      {/* Blog */}
      <section className="border-y border-gray-100 bg-gray-50/60">
        <div className={`${container} py-14 sm:py-20`}>
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Guides for parents</h2>
            <Link href="/blog" className="hidden min-h-11 items-center gap-1.5 text-sm font-bold text-gray-900 hover:text-qalam-700 sm:inline-flex">
              All articles <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>
          <ul className="mt-8 divide-y divide-gray-200 border-y border-gray-200">
            {latest.map((p) => (
              <li key={p.slug}>
                <Link href={`/blog/${p.slug}`} className="group flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
                  <span className="text-lg font-bold text-gray-900 group-hover:text-qalam-700">{p.title}</span>
                  <span className="shrink-0 text-sm font-medium text-gray-500">{p.category}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <Section title="Questions parents ask" narrow>
        <FaqList faqs={homeFaqs} />
        <p className="mt-5 text-sm text-gray-600">
          More questions?{" "}
          <Link href="/faq" className="font-bold text-gray-900 underline decoration-gray-300 underline-offset-4 hover:decoration-gray-900">
            Read all FAQs
          </Link>{" "}
          or{" "}
          <a
            href={whatsappLink("Assalamu alaikum, I have a question about the online madrasa.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-bold text-gray-900 underline decoration-gray-300 underline-offset-4 hover:decoration-gray-900"
          >
            <MessageCircle size={14} aria-hidden="true" /> ask us on WhatsApp
          </a>
          .
        </p>
      </Section>

      <CtaBand />
      <JsonLd data={faqLd(homeFaqs)} />
    </>
  );
}
