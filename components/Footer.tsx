import Link from "next/link";
import { Logo } from "./Logo";
import { courses } from "@/lib/courses";
import { countries } from "@/lib/countries";
import { site } from "@/lib/site";

const colTitle = "text-sm font-extrabold text-gray-900";
const colLink = "text-sm text-gray-600 transition-colors hover:text-gray-900";

export function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-gray-50/60">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-12 lg:px-8">
        <div className="md:col-span-4">
          <Link href="/" aria-label="Qalam Online Madrasa — home">
            <Logo />
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-gray-600">
            {site.tagline}. Live Quran and Islamic studies classes for the children of Gulf expatriate families.
          </p>
          <p className="mt-4 text-sm text-gray-600">
            <span className="font-semibold text-gray-900">Call or WhatsApp: </span>
            <a href={`tel:${site.phoneTel}`} className="underline decoration-gray-300 underline-offset-4 hover:decoration-gray-900">
              {site.phoneDisplay}
            </a>
          </p>
        </div>

        <nav aria-label="Courses" className="md:col-span-3">
          <p className={colTitle}>Courses</p>
          <ul className="mt-4 space-y-2.5">
            {courses.map((c) => (
              <li key={c.slug}>
                <Link href={`/courses/${c.slug}`} className={colLink}>
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Countries" className="md:col-span-3">
          <p className={colTitle}>Online madrasa in</p>
          <ul className="mt-4 space-y-2.5">
            {countries.map((c) => (
              <li key={c.slug}>
                <Link href={`/online-madrasa/${c.slug}`} className={colLink}>
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Company" className="md:col-span-2">
          <p className={colTitle}>Learn more</p>
          <ul className="mt-4 space-y-2.5">
            {[
              ["/about", "About us"],
              ["/faq", "FAQ"],
              ["/blog", "Blog"],
              ["/glossary", "Glossary"],
              ["/contact", "Contact"],
            ].map(([href, label]) => (
              <li key={href}>
                <Link href={href} className={colLink}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="border-t border-gray-100">
        <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-6 text-[13px] font-medium text-gray-500 sm:flex-row sm:justify-between sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>Online madrasa for children in the UAE, Saudi Arabia, Qatar, Kuwait, Oman and Bahrain.</p>
        </div>
      </div>
    </footer>
  );
}
