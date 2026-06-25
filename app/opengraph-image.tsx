import { ImageResponse } from "next/og";

import { site } from "@/config";

export const alt = `${site.name} — ${site.role}`;
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
          justifyContent: "center",
          padding: "80px",
          background:
            "radial-gradient(900px 600px at 80% -10%, #1f2a4d, transparent), radial-gradient(800px 600px at 0% 120%, #2a1f4d, transparent), #0b0e16",
          color: "#f4f6fb",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 26,
            letterSpacing: 8,
            color: "#38e0ff",
            textTransform: "uppercase",
          }}
        >
          {site.role}
        </div>
        <div
          style={{
            fontSize: 120,
            fontWeight: 700,
            marginTop: 16,
            lineHeight: 1,
          }}
        >
          {site.name}
        </div>
        <div
          style={{
            fontSize: 32,
            color: "#9aa6c2",
            marginTop: 28,
            maxWidth: 880,
            lineHeight: 1.35,
          }}
        >
          AI-powered products end to end — RAG, semantic search and LLM apps,
          plus the cloud to ship them.
        </div>
        <div style={{ fontSize: 26, color: "#6b7694", marginTop: "auto" }}>
          oscardaly.tech
        </div>
      </div>
    ),
    { ...size },
  );
}
