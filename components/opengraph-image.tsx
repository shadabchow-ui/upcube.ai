import { ImageResponse } from "next/og";

export type Props = {
  title?: string;
};

export default async function OpengraphImage(
  props?: Props,
): Promise<ImageResponse> {
  const { title } = {
    ...{
      title: "UpCube",
    },
    ...props,
  };

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          background: "#050505",
          color: "#ffffff",
          padding: "72px 80px",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <div
              style={{
                display: "flex",
                width: 86,
                height: 86,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 24,
                border: "1px solid rgba(255,255,255,0.12)",
                background: "#101010",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 28"
                width="44"
                height="39"
                fill="white"
              >
                <path d="M21.5758 9.75769L16 0L0 28H11.6255L21.5758 9.75769Z" />
                <path d="M26.2381 17.9167L20.7382 28H32L26.2381 17.9167Z" />
              </svg>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: 28,
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontSize: 28,
                  fontWeight: 600,
                  letterSpacing: "-0.04em",
                }}
              >
                UpcubeAI
              </p>
              <p
                style={{
                  margin: "8px 0 0",
                  fontSize: 16,
                  color: "rgba(255,255,255,0.72)",
                }}
              >
                AI Technology Company
              </p>
            </div>
          </div>
          <p
            style={{
              margin: 0,
              fontSize: 15,
              color: "rgba(255,255,255,0.58)",
            }}
          >
            AI for the way you work, discover, build, and imagine what's next.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            maxWidth: 920,
            flexDirection: "column",
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: 18,
              textTransform: "uppercase",
              letterSpacing: "0.24em",
              color: "rgba(255,255,255,0.46)",
            }}
          >
            UpCube
          </p>
          <p
            style={{
              margin: "20px 0 0",
              fontSize: 78,
              fontWeight: 600,
              lineHeight: 1.02,
              letterSpacing: "-0.055em",
            }}
          >
            {title}
          </p>
          <p
            style={{
              margin: "32px 0 0",
              maxWidth: 820,
              fontSize: 28,
              lineHeight: 1.28,
              color: "rgba(255,255,255,0.74)",
            }}
          >
            High-end AI products for work, discovery, commerce, cloud
            infrastructure, entertainment, and the future of computing.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: 28,
            borderTop: "1px solid rgba(255,255,255,0.10)",
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: 16,
              color: "rgba(255,255,255,0.54)",
            }}
          >
            Branded social preview
          </p>
          <p
            style={{
              margin: 0,
              fontSize: 16,
              color: "rgba(255,255,255,0.54)",
            }}
          >
            upcube.ai
          </p>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
