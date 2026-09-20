"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, MessageCircle, X } from "lucide-react";
import { Logo } from "./Logo";
import { defaultWhatsAppMessage, whatsappLink } from "@/lib/site";

const links = [
  { href: "/courses", label: "Courses" },
  { href: "/online-madrasa", label: "Gulf countries" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/about", label: "About" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="nice-shadow fixed inset-x-0 top-0 z-50 h-[60px] bg-white/90 backdrop-blur-lg">
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" aria-label="Qalam Online Madrasa — home" className="rounded-md">
          <Logo />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={isActive(l.href) ? "page" : undefined}
              className={`rounded-lg px-3 py-2 text-sm font-semibold transition-colors hover:bg-black/[0.04] hover:text-gray-900 ${
                isActive(l.href) ? "text-gray-900" : "text-gray-500"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={whatsappLink(defaultWhatsAppMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden min-h-10 items-center gap-2 rounded-lg bg-gray-900 px-4 text-sm font-extrabold text-white transition hover:bg-gray-700 sm:inline-flex"
          >
            <MessageCircle size={16} aria-hidden="true" />
            WhatsApp
          </a>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-lg text-gray-700 hover:bg-black/[0.04] md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="absolute inset-x-0 top-[60px] max-h-[calc(100dvh-60px)] overflow-y-auto border-t border-gray-100 bg-white px-4 pb-6 pt-3 shadow-lg md:hidden"
        >
          <ul className="flex flex-col">
            {[{ href: "/", label: "Home" }, ...links, { href: "/contact", label: "Contact" }].map((l) => (
              <li key={l.href} className="border-b border-gray-100 last:border-0">
                <Link
                  href={l.href}
                  aria-current={pathname === l.href ? "page" : undefined}
                  className="flex min-h-12 items-center text-base font-semibold text-gray-900"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={whatsappLink(defaultWhatsAppMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex min-h-12 items-center justify-center gap-2 rounded-lg bg-gray-900 text-sm font-extrabold text-white"
          >
            <MessageCircle size={18} aria-hidden="true" />
            Chat on WhatsApp
          </a>
        </nav>
      )}
    </header>
  );
}
