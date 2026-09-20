import type { MetadataRoute } from "next";
import { abs, site } from "@/lib/site";
import { courses } from "@/lib/courses";
import { countries } from "@/lib/countries";
import { posts } from "@/lib/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const last = new Date(`${site.updated}T00:00:00Z`);
  const page = (path: string, lastModified: Date = last) => ({ url: abs(path), lastModified });

  return [
    page("/"),
    page("/courses"),
    ...courses.map((c) => page(`/courses/${c.slug}`)),
    page("/online-madrasa"),
    ...countries.map((c) => page(`/online-madrasa/${c.slug}`)),
    page("/blog"),
    ...posts.map((p) => page(`/blog/${p.slug}`, new Date(`${p.updated}T00:00:00Z`))),
    page("/faq"),
    page("/glossary"),
    page("/about"),
    page("/contact"),
  ];
}
