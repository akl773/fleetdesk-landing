import { ImageResponse } from "next/og";

export const alt = "FleetDecks — white-label car rental operations software";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          backgroundColor: "#07110d",
          backgroundImage:
            "radial-gradient(circle at 18% 0%, rgba(16,185,129,0.28), transparent 55%), radial-gradient(circle at 100% 100%, rgba(132,204,22,0.18), transparent 50%)",
          color: "#f7f5ef",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <div
            style={{
              width: 76,
              height: 76,
              borderRadius: 24,
              backgroundColor: "#10b981",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#07110d",
              fontSize: 46,
              fontWeight: 800,
            }}
          >
            F
          </div>
          <div style={{ fontSize: 42, fontWeight: 800, letterSpacing: -1 }}>
            FleetDecks
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              width: 96,
              height: 8,
              borderRadius: 999,
              backgroundColor: "#10b981",
            }}
          />
          <div
            style={{
              fontSize: 74,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: -3,
              maxWidth: 1000,
            }}
          >
            Run bookings, fleet, and WhatsApp demand from one dashboard.
          </div>
          <div
            style={{
              fontSize: 34,
              color: "rgba(245,242,232,0.78)",
              maxWidth: 920,
            }}
          >
            White-label car rental operations software for lean teams.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 26,
            fontWeight: 700,
            color: "rgba(167,243,208,0.9)",
          }}
        >
          <div>fleetdecks.com</div>
          <div>Bookings · Fleet · Deposits · Handovers</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
