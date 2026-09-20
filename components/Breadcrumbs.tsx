import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { JsonLd } from "./JsonLd";
import { breadcrumbLd } from "@/lib/seo";

export function Breadcrumbs({ items }: { items: { name: string; path: string }[] }) {
  const all = [{ name: "Home", path: "/" }, ...items];
  return (
    <>
      <nav aria-label="Breadcrumb" className="text-[13px] font-medium text-gray-500">
        <ol className="flex flex-wrap items-center gap-1">
          {all.map((it, i) => {
            const last = i === all.length - 1;
            return (
              <li key={it.path} className="flex items-center gap-1">
                {last ? (
                  <span aria-current="page" className="text-gray-900">
                    {it.name}
                  </span>
                ) : (
                  <>
                    <Link href={it.path} className="hover:text-gray-900 hover:underline underline-offset-4">
                      {it.name}
                    </Link>
                    <ChevronRight size={14} aria-hidden="true" className="text-gray-300" />
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
      <JsonLd data={breadcrumbLd(all)} />
    </>
  );
}
