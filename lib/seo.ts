import type { Metadata } from "next";
import { site, abs, gulfCountriesServed } from "./site";

type PageMeta = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  noindex?: boolean;
};

/** Consistent title, description, canonical, Open Graph and Twitter tags for every page. */
export function pageMeta({ title, description, path, type = "website", publishedTime, modifiedTime, noindex }: PageMeta): Metadata {
  const url = abs(path);
  const fullTitle = title.includes(site.name) ? title : `${title} | ${site.name}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    robots: noindex ? { index: false, follow: false } : undefined,
    openGraph: {
      type,
      url,
      siteName: site.name,
      title: fullTitle,
      description,
      locale: "en_US",
      images: [{ url: abs("/opengraph-image"), width: 1200, height: 630, alt: `${site.name} — ${site.tagline}` }],
      ...(type === "article" ? { publishedTime, modifiedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [abs("/opengraph-image")],
    },
  };
}

/* ---------- JSON-LD builders ---------- */

const orgId = () => `${site.url}/#organization`;
const siteId = () => `${site.url}/#website`;

export function organizationLd() {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": orgId(),
    name: site.name,
    alternateName: site.alternateNames,
    slogan: site.tagline,
    description: site.description,
    url: site.url,
    logo: { "@type": "ImageObject", url: abs("/logo-512.png"), width: 512, height: 512 },
    image: abs("/opengraph-image"),
    telephone: site.phoneTel,
    ...(site.email ? { email: site.email } : {}),
    areaServed: gulfCountriesServed.map((name) => ({ "@type": "Country", name })),
    knowsAbout: ["Noorani Qaida", "Quran recitation", "Tajweed", "Quran Hifz", "Islamic studies", "Online madrasa"],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: site.phoneTel,
        contactType: "customer support",
        areaServed: ["AE", "SA", "QA", "KW", "OM", "BH", "IN"],
      },
    ],
    ...(site.social.length ? { sameAs: site.social.map((s) => s.href) } : {}),
  };
}

export function websiteLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": siteId(),
    url: site.url,
    name: site.name,
    description: site.description,
    inLanguage: "en",
    publisher: { "@id": orgId() },
  };
}

export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: abs(it.path),
    })),
  };
}

export function faqLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function courseLd(c: { name: string; description: string; path: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: c.name,
    description: c.description,
    url: abs(c.path),
    provider: { "@type": "EducationalOrganization", "@id": orgId(), name: site.name, url: site.url },
    inLanguage: "en",
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "online",
      instructor: { "@type": "Organization", name: site.name },
    },
  };
}

export function articleLd(p: { title: string; description: string; path: string; date: string; updated: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: p.title,
    description: p.description,
    mainEntityOfPage: abs(p.path),
    datePublished: p.date,
    dateModified: p.updated,
    image: abs("/opengraph-image"),
    author: { "@type": "Organization", name: site.name, url: site.url },
    publisher: { "@type": "Organization", "@id": orgId(), name: site.name, logo: { "@type": "ImageObject", url: abs("/logo-512.png") } },
  };
}

export function serviceLd(s: { name: string; description: string; path: string; country: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.name,
    serviceType: "Online Islamic education",
    description: s.description,
    url: abs(s.path),
    provider: { "@id": orgId() },
    areaServed: { "@type": "Country", name: s.country },
  };
}

export function definedTermSetLd(terms: { term: string; definition: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    name: "Islamic education glossary",
    url: abs("/glossary"),
    hasDefinedTerm: terms.map((t) => ({
      "@type": "DefinedTerm",
      name: t.term,
      description: t.definition,
    })),
  };
}
