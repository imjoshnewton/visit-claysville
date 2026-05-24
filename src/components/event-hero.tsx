"use client";

import { useCountdown } from "./countdown";

interface EventHeroProps {
  title: string;
  subtitle: string;
  date: string;
  location: string;
  kicker: string;
}

export function EventHero({ title, subtitle, date, location, kicker }: EventHeroProps) {
  const cd = useCountdown(date);
  const d = new Date(date);

  return (
    <section
      className="paper-tex relative"
      style={{ padding: "60px 80px 80px", background: "var(--paper)" }}
    >
      <div className="grid items-center gap-16" style={{ gridTemplateColumns: "1.2fr 1fr" }}>
        <div>
          <div className="eyebrow text-mustard mb-5">{kicker}</div>
          <h1
            className="m-0"
            style={{
              fontFamily: "var(--serif-display)",
              fontWeight: 400,
              fontSize: 112,
              lineHeight: 0.88,
              letterSpacing: -2.6,
            }}
          >
            {title}
          </h1>
          <div
            className="smallcaps"
            style={{
              fontFamily: "var(--serif-display)",
              fontStyle: "italic",
              fontSize: 28,
              margin: "20px 0 28px",
              color: "rgba(28,24,20,0.7)",
            }}
          >
            {subtitle}
          </div>
          <div className="flex gap-9 pt-6" style={{ borderTop: "1.5px solid var(--ink)" }}>
            <div>
              <div className="eyebrow mb-1.5" style={{ opacity: 0.55 }}>When</div>
              <div style={{ fontFamily: "var(--serif-display)", fontSize: 22, lineHeight: 1.2 }}>
                {d.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })}
              </div>
              <div
                className="num mt-1"
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: 12,
                  color: "rgba(28,24,20,0.55)",
                  letterSpacing: "0.08em",
                }}
              >
                {d.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" })} · {d.getFullYear()}
              </div>
            </div>
            <div>
              <div className="eyebrow mb-1.5" style={{ opacity: 0.55 }}>Where</div>
              <div style={{ fontFamily: "var(--serif-display)", fontSize: 22, lineHeight: 1.2 }}>{location}</div>
              <div
                className="num mt-1"
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: 12,
                  color: "rgba(28,24,20,0.55)",
                  letterSpacing: "0.08em",
                }}
              >
                Claysville, PA · Free entry
              </div>
            </div>
          </div>
        </div>

        {/* Ticket stub */}
        <div
          className="relative"
          style={{
            background: "var(--ink)",
            color: "var(--paper)",
            padding: 32,
            boxShadow: "0 24px 60px rgba(28,24,20,0.18)",
            transform: "rotate(1.5deg)",
          }}
        >
          <div
            className="absolute left-0 right-0"
            style={{
              bottom: 110,
              height: 1,
              background: "repeating-linear-gradient(to right, rgba(243,235,220,0.4) 0 6px, transparent 6px 12px)",
            }}
          />
          <div className="eyebrow text-mustard mb-4">★ Admit one ★ Countdown ★</div>
          <div className="num grid gap-2.5" style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>
            {(
              [
                ["days", cd.days],
                ["hrs", cd.hours],
                ["min", cd.minutes],
                ["sec", cd.seconds],
              ] as const
            ).map(([k, v]) => (
              <div
                key={k}
                className="text-center"
                style={{ border: "1px solid rgba(243,235,220,0.3)", padding: "14px 6px" }}
              >
                <div style={{ fontFamily: "var(--serif-display)", fontSize: 38, lineHeight: 1, color: "var(--mustard)" }}>
                  {String(v).padStart(2, "0")}
                </div>
                <div className="eyebrow mt-1.5" style={{ fontSize: 9, opacity: 0.6 }}>
                  {k}
                </div>
              </div>
            ))}
          </div>
          <div
            className="flex justify-between pt-5"
            style={{
              fontFamily: "var(--mono)",
              fontSize: 11,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              opacity: 0.7,
            }}
          >
            <span>No. 26-{Math.floor(Math.random() * 900 + 100)}</span>
            <span>★</span>
            <span>Visit Claysville</span>
          </div>
        </div>
      </div>
    </section>
  );
}
