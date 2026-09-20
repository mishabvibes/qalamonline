import type { Metadata } from "next";
import { LinkButton, WhatsAppButton } from "@/components/Buttons";
import { container } from "@/components/Layout";

export const metadata: Metadata = { title: "Page not found", robots: { index: false, follow: false } };

export default function NotFound() {
  return (
    <section className="relative overflow-hidden">
      <div className="blueprint absolute inset-0" aria-hidden="true" />
      <div className={`${container} relative py-24 text-center sm:py-32`}>
        <p lang="ar" dir="rtl" className="font-arabic text-4xl text-qalam-700">٤٠٤</p>
        <h1 className="mt-4 text-3xl font-black tracking-tight text-gray-900 sm:text-4xl">This page could not be found</h1>
        <p className="mx-auto mt-3 max-w-md text-gray-600">The link may be old or mistyped. Try one of these instead.</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <LinkButton href="/" variant="primary">Go to home page</LinkButton>
          <LinkButton href="/courses">View courses</LinkButton>
          <WhatsAppButton variant="secondary" label="Ask on WhatsApp" />
        </div>
      </div>
    </section>
  );
}
