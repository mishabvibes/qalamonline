import { CallButton, WhatsAppButton } from "./Buttons";
import { container } from "./Layout";

/** Eight-pointed star tile — a quiet nod to Islamic geometry, drawn as one repeating SVG pattern. */
function StarPattern() {
  return (
    <svg className="absolute inset-0 h-full w-full text-white/[0.06]" aria-hidden="true">
      <defs>
        <pattern id="khatam" width="72" height="72" patternUnits="userSpaceOnUse">
          <g fill="none" stroke="currentColor" strokeWidth="1.2">
            <rect x="16" y="16" width="40" height="40" />
            <rect x="16" y="16" width="40" height="40" transform="rotate(45 36 36)" />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#khatam)" />
    </svg>
  );
}

export function CtaBand({
  title = "Ready to enrol your child?",
  text = "Message us your country, your child's age and the course you want. We will suggest a class time that suits your family.",
  message,
}: {
  title?: string;
  text?: string;
  message?: string;
}) {
  return (
    <section className={`${container} pb-16 sm:pb-24`}>
      <div className="relative overflow-hidden rounded-2xl bg-gray-900 px-6 py-12 text-white sm:px-12 sm:py-16">
        <StarPattern />
        <div className="relative max-w-2xl">
          <h2 className="text-2xl font-black tracking-tight text-balance sm:text-4xl">{title}</h2>
          <p className="mt-4 text-base leading-relaxed text-white/70 sm:text-lg">{text}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <WhatsAppButton variant="light" message={message} />
            <CallButton variant="outlineLight" />
          </div>
        </div>
      </div>
    </section>
  );
}
