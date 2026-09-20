import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#111827" }}>
        <svg width="132" height="132" viewBox="0 0 64 64">
          <path
            d="M32 10c3.6 7.2 12.4 13.6 12.4 25.2 0 6.4-4.4 12.4-12.4 18.8-8-6.4-12.4-12.4-12.4-18.8C19.6 23.6 28.4 17.2 32 10Z"
            fill="#fff"
          />
          <path d="M32 33.5v20" stroke="#111827" strokeWidth="2.6" strokeLinecap="round" />
          <circle cx="32" cy="32" r="3.6" fill="#111827" />
        </svg>
      </div>
    ),
    size,
  );
}
