export function NibMark({ size = 36, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" className={className} role="img" aria-label="Qalam logo">
      <rect width="64" height="64" rx="16" fill="#111827" />
      <path
        d="M32 10c3.6 7.2 12.4 13.6 12.4 25.2 0 6.4-4.4 12.4-12.4 18.8-8-6.4-12.4-12.4-12.4-18.8C19.6 23.6 28.4 17.2 32 10Z"
        fill="#fff"
      />
      <path d="M32 33.5v20" stroke="#111827" strokeWidth="2.6" strokeLinecap="round" />
      <circle cx="32" cy="32" r="3.6" fill="#111827" />
    </svg>
  );
}

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <NibMark size={34} />
      <span className="flex flex-col leading-none">
        <span className={`text-[17px] font-extrabold tracking-tight ${light ? "text-white" : "text-gray-900"}`}>Qalam</span>
        <span className={`mt-0.5 text-[11px] font-semibold ${light ? "text-white/60" : "text-gray-500"}`}>Online Madrasa</span>
      </span>
    </span>
  );
}
