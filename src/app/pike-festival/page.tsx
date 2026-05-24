import type { Metadata } from "next";
import { EventHero } from "@/components/event-hero";
import { PikeSchedule } from "@/components/pike-schedule";
import { MapBlock } from "@/components/map-block";

export const metadata: Metadata = {
  title: "Pike Festival — Visit Claysville",
  description:
    "Three-day heritage celebration on the National Road. Parades, juried artisans, stage music, and the closing bonfire on Hilltop Park. Memorial Day Weekend.",
};

export default function PikeFestivalPage() {
  return (
    <div className="fade-up">
      <EventHero
        title="The Pike Festival"
        subtitle="A three-day heritage celebration on the National Road."
        date="2026-05-23T10:00"
        location="Main Street"
        kicker="Memorial Day Weekend · May 23–25, 2026"
      />

      <section style={{ padding: "80px 80px", background: "var(--paper)" }}>
        <div className="grid" style={{ gridTemplateColumns: "1fr 1.5fr", gap: 80 }}>
          <div className="eyebrow text-brick pt-2">About the festival</div>
          <p
            className="m-0"
            style={{
              fontFamily: "var(--serif-display)",
              fontSize: 32,
              lineHeight: 1.3,
              letterSpacing: -0.3,
            }}
          >
            Established in 1972 to mark the National Road&apos;s bicentennial, the Pike Festival has grown into a
            three-day return to the commerce, music, and craft of the old federal highway — with parades down Main
            Street, juried artisans, a Memorial Day service, and the closing bonfire on Hilltop Park.
          </p>
        </div>
      </section>

      <PikeSchedule />

      <MapBlock
        pins={[
          { x: 35, y: 50, label: "Main Stage" },
          { x: 55, y: 35, label: "Artisan Market" },
          { x: 70, y: 60, label: "Pig Roast" },
          { x: 20, y: 70, label: "Hayride" },
        ]}
        legend="Five venues, all within a half-mile of Main Street."
      />
    </div>
  );
}
