/**
 * Single source of truth for everything about the madrasa.
 * Edit this file (and the other files in /lib) — pages update automatically.
 */
export const site = {
  name: "Qalam Online Madrasa",
  shortName: "Qalam",
  alternateNames: ["Qalam Online", "GCC Online Madrasa"],
  tagline: "Madrasa Education, Our Priority",
  description:
    "Live online madrasa classes for children of Gulf expatriate families: Noorani Qaida, Quran recitation with Tajweed, Hifz and Islamic studies with qualified teachers.",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://qalamonline.vercel.app").replace(/\/$/, ""),

  // Contact — the number is treated as an Indian mobile that also works on WhatsApp.
  phoneDisplay: "+91 73066 85324",
  phoneTel: "+917306685324",
  whatsappNumber: "917306685324",
  email: undefined as string | undefined,

  /** Date the content was last reviewed (ISO). Used in sitemap and structured data. */
  updated: "2026-09-20",

  /** Add real profile links (Instagram, YouTube, Facebook…) — they are used as `sameAs` in structured data. */
  social: [] as { label: string; href: string }[],

  /** Add real teachers here and a "Meet the teachers" block appears on the About page. */
  teachers: [] as { name: string; role: string; bio: string }[],
};

export const gulfCountriesServed = [
  "United Arab Emirates",
  "Saudi Arabia",
  "Qatar",
  "Kuwait",
  "Oman",
  "Bahrain",
];

export function abs(path = "/") {
  return `${site.url}${path.startsWith("/") ? path : `/${path}`}`;
}

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${site.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const defaultWhatsAppMessage =
  "Assalamu alaikum, I would like to know more about the online madrasa classes at Qalam.";
