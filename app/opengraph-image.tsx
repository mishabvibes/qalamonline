import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#ffffff",
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          color: "#111827",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <svg width="84" height="84" viewBox="0 0 64 64">
            <rect width="64" height="64" rx="16" fill="#111827" />
            <path
              d="M32 10c3.6 7.2 12.4 13.6 12.4 25.2 0 6.4-4.4 12.4-12.4 18.8-8-6.4-12.4-12.4-12.4-18.8C19.6 23.6 28.4 17.2 32 10Z"
              fill="#fff"
            />
            <path d="M32 33.5v20" stroke="#111827" strokeWidth="2.6" strokeLinecap="round" />
            <circle cx="32" cy="32" r="3.6" fill="#111827" />
          </svg>
          <div style={{ display: "flex", flexDirection: "column", marginLeft: 24 }}>
            <div style={{ fontSize: 40, fontWeight: 800, lineHeight: 1 }}>Qalam</div>
            <div style={{ fontSize: 24, color: "#6b7280", marginTop: 6 }}>Online Madrasa</div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 76, fontWeight: 800, lineHeight: 1.05, letterSpacing: -2, maxWidth: 940 }}>
            Online Madrasa for Gulf Families
          </div>
          <div style={{ fontSize: 32, color: "#4b5563", marginTop: 24, maxWidth: 900 }}>
            Live Quran, Tajweed, Hifz and Islamic studies with qualified teachers
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 26, color: "#0a6248", fontWeight: 700 }}>
          <div>{site.tagline}</div>
          <div>{site.url.replace(/^https?:\/\//, "")}</div>
        </div>
      </div>
    ),
    size,
  );
}
