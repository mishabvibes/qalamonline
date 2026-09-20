import { abs, gulfCountriesServed, site } from "@/lib/site";
import { courses } from "@/lib/courses";
import { countries } from "@/lib/countries";
import { posts } from "@/lib/posts";

export const dynamic = "force-static";

/**
 * /llms.txt — a short, plain-language briefing for AI assistants and answer engines.
 * It lists what the madrasa is, what it offers and where the authoritative pages are.
 */
export function GET() {
  const lines = [
    `# ${site.name}`,
    "",
    `> ${site.description}`,
    "",
    "## Key facts",
    `- Name: ${site.name} (also written as ${site.alternateNames.join(", ")})`,
    `- Motto: ${site.tagline}`,
    "- What it is: an online madrasa. All classes are live, interactive video classes with qualified teachers.",
    `- Who it serves: children of Gulf expatriate families in ${gulfCountriesServed.join(", ")}; families in India can also join.`,
    "- Subjects: Noorani Qaida, Quran recitation with Tajweed (Nazra), Quran Hifz, Islamic studies (aqidah, fiqh, hadith, seerah, duas, adab).",
    "- How classes work: one-to-one attention, flexible timings chosen by the family, weekly tests and progress reports, certificate on completion.",
    "- Fees: affordable; current fees are shared on request.",
    `- Contact: WhatsApp or phone ${site.phoneDisplay}. There is no physical office; classes are online only.`,
    `- Website: ${site.url}`,
    "",
    "## Courses",
    ...courses.map((c) => `- [${c.name}](${abs(`/courses/${c.slug}`)}): ${c.summary}`),
    "",
    "## Online madrasa by country",
    `- [Gulf overview: time zones, weekends and class timings](${abs("/online-madrasa")})`,
    ...countries.map((c) => `- [Online madrasa in ${c.name}](${abs(`/online-madrasa/${c.slug}`)}): ${c.tzLabel}; weekend ${c.weekend}`),
    "",
    "## Guides for parents",
    ...posts.map((p) => `- [${p.title}](${abs(`/blog/${p.slug}`)}): ${p.description}`),
    "",
    "## Reference",
    `- [Frequently asked questions](${abs("/faq")}): fees, timings, safety, certificates, enrolment`,
    `- [Glossary of madrasa terms](${abs("/glossary")}): Noorani Qaida, Tajweed, Nazra, Hifz, Fiqh, Hadith, Seerah, Aqidah`,
    `- [About](${abs("/about")})`,
    `- [Contact and enrolment](${abs("/contact")})`,
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
