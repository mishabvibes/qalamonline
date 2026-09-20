import Link from "next/link";
import { Fragment } from "react";

/**
 * Tiny inline formatter for content strings:
 *   [label](/path)  → internal link
 *   **bold**        → strong
 *   ﷺ              → set in the Arabic typeface so it always renders
 */
export function Rich({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*|ﷺ)/g);
  return (
    <>
      {parts.map((part, i) => {
        if (!part) return null;
        const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (link) {
          return (
            <Link
              key={i}
              href={link[2]}
              className="font-semibold text-gray-900 underline decoration-gray-300 decoration-2 underline-offset-4 transition-colors hover:decoration-qalam-600"
            >
              {link[1]}
            </Link>
          );
        }
        const bold = part.match(/^\*\*([^*]+)\*\*$/);
        if (bold) return <strong key={i}>{bold[1]}</strong>;
        if (part === "ﷺ") {
          return (
            <span key={i} lang="ar" className="font-arabic">
              ﷺ
            </span>
          );
        }
        return <Fragment key={i}>{part}</Fragment>;
      })}
    </>
  );
}
