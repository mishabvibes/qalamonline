import type { MetadataRoute } from "next";
import { abs } from "@/lib/site";

// Search engines and AI answer engines are all welcome: the goal is to be found and cited.
// To opt out of a crawler, change its rule to `disallow: "/"`.
const aiCrawlers = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...aiCrawlers.map((userAgent) => ({ userAgent, allow: "/" })),
    ],
    sitemap: abs("/sitemap.xml"),
    host: abs("/"),
  };
}
