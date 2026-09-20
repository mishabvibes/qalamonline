import Link from "next/link";
import { MessageCircle, Phone } from "lucide-react";
import { site, whatsappLink, defaultWhatsAppMessage } from "@/lib/site";

const base =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-extrabold transition duration-150 active:scale-[0.98]";

export const btn = {
  primary: `${base} bg-gray-900 text-white shadow-sm hover:bg-gray-700`,
  secondary: `${base} border border-gray-200 bg-white text-gray-900 hover:border-gray-300 hover:bg-gray-50`,
  light: `${base} bg-white text-gray-900 hover:bg-gray-100`,
  outlineLight: `${base} border border-white/25 text-white hover:bg-white/10`,
};

export function WhatsAppButton({
  label = "Chat on WhatsApp",
  message = defaultWhatsAppMessage,
  variant = "primary",
  className = "",
}: {
  label?: string;
  message?: string;
  variant?: keyof typeof btn;
  className?: string;
}) {
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`${btn[variant]} ${className}`}
    >
      <MessageCircle size={18} aria-hidden="true" />
      {label}
    </a>
  );
}

export function CallButton({ variant = "secondary", className = "" }: { variant?: keyof typeof btn; className?: string }) {
  return (
    <a href={`tel:${site.phoneTel}`} className={`${btn[variant]} ${className}`}>
      <Phone size={17} aria-hidden="true" />
      Call {site.phoneDisplay}
    </a>
  );
}

export function LinkButton({
  href,
  children,
  variant = "secondary",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: keyof typeof btn;
  className?: string;
}) {
  return (
    <Link href={href} className={`${btn[variant]} ${className}`}>
      {children}
    </Link>
  );
}
