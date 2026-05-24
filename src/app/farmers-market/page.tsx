import type { Metadata } from "next";
import { EventHero } from "@/components/event-hero";
import { MarketDates } from "@/components/market-dates";
import { MarketVendors } from "@/components/market-vendors";
import { MapBlock } from "@/components/map-block";

export const metadata: Metadata = {
  title: "Farmer's Market — Visit Claysville",
  description:
    "Third Saturday, June through October. Twenty-plus local farms, bakers, and makers around Town Square with live music on the courthouse steps.",
};

export default function FarmersMarketPage() {
  return (
    <div className="fade-up">
      <EventHero
        title="The Farmers Market"
        subtitle="Local growers and makers, every third Saturday."
        date="2026-06-20T09:00"
        location="Town Square, Main Street"
        kicker="Opening Day · June 20, 2026"
      />

      <section style={{ background: "var(--paper)" }}>
        <div className="section-inner grid" style={{ gridTemplateColumns: "1fr 1.5fr", gap: 80, paddingTop: 80, paddingBottom: 80 }}>
          <div className="eyebrow text-brick pt-2">About the market</div>
          <p
            className="m-0"
            style={{
              fontFamily: "var(--serif-display)",
              fontSize: 32,
              lineHeight: 1.3,
              letterSpacing: -0.3,
            }}
          >
            On the third Saturday of every month from June through October, twenty-plus local farms, bakers, and
            makers set up around Town Square. Live music on the courthouse steps, a kids&apos; table, and a tradition
            that pre-dates the railroad.
          </p>
        </div>
      </section>

      <MarketDates />
      <MarketVendors />

      <MapBlock
        pins={[
          { x: 45, y: 45, label: "Town Square" },
          { x: 30, y: 55, label: "Parking" },
          { x: 60, y: 40, label: "Music · Courthouse" },
        ]}
        legend="Town Square — free parking one block west."
      />
    </div>
  );
}
