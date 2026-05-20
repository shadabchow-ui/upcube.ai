import { ImageResponse } from "next/og";

export const alt = "UpCubeAI | Artificial Intelligence Company";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          background: "#050505",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "72px 80px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              <div
                style={{
                  fontSize: 30,
                  fontWeight: 600,
                  letterSpacing: "-0.04em",
                }}
              >
                UpCubeAI
              </div>
              <div
                style={{
                  fontSize: 18,
                  color: "rgba(255,255,255,0.72)",
                }}
              >
                Artificial Intelligence Company
              </div>
            </div>
            <div
              style={{
                fontSize: 16,
                color: "rgba(255,255,255,0.58)",
              }}
            >
              The Next Frontier.
            </div>
          </div>

          <div
            style={{
              display: "flex",
              maxWidth: 860,
              flexDirection: "column",
              gap: "18px",
            }}
          >
            <div
              style={{
                fontSize: 18,
                letterSpacing: "0.24em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.46)",
              }}
            >
              UpCubeAI
            </div>
            <div
              style={{
                fontSize: 76,
                lineHeight: 1.02,
                fontWeight: 600,
                letterSpacing: "-0.055em",
              }}
            >
              Artificial Intelligence Company
            </div>
            <div
              style={{
                maxWidth: 820,
                fontSize: 28,
                lineHeight: 1.28,
                color: "rgba(255,255,255,0.74)",
              }}
            >
              High-end AI products for work, discovery, commerce, cloud
              infrastructure, entertainment, voice, education, and the future of
              computing.
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderTop: "1px solid rgba(255,255,255,0.1)",
              paddingTop: 28,
              fontSize: 16,
              color: "rgba(255,255,255,0.54)",
            }}
          >
            <div>Branded social preview</div>
            <div>upcube.ai</div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
