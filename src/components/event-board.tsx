"use client";

import { useState } from "react";
import { EVENTS, nextEvent } from "@/data/content";
import { useCountdown } from "./countdown";

function EventRow({ ev, idx }: { ev: (typeof EVENTS)[number]; idx: number }) {
  const [hov, setHov] = useState(false);
  const d = new Date(ev.date);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        padding: "28px 24px",
        borderRight: idx % 3 !== 2 ? "1px solid rgba(243,235,220,0.15)" : "none",
        borderBottom: "1px solid rgba(243,235,220,0.15)",
        background: hov ? "rgba(243,235,220,0.06)" : "transparent",
        transition: "background .2s ease",
        cursor: "pointer",
        position: "relative",
      }}
    >
      <div className="num" style={{ fontFamily: "var(--serif-display)", fontSize: 28, lineHeight: 1, color: "var(--mustard)" }}>
        {d.toLocaleDateString("en-US", { month: "short" }).toUpperCase()} {d.getDate()}
      </div>
      <div style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", opacity: 0.55, marginTop: 4 }}>
        {ev.tag} · {ev.loc}
      </div>
      <h4 className="m-0" style={{ margin: "14px 0 8px", fontFamily: "var(--serif-display)", fontSize: 22, fontWeight: 400, lineHeight: 1.15 }}>
        {ev.name}
      </h4>
      <div style={{ fontSize: 13, color: "rgba(243,235,220,0.65)", lineHeight: 1.5, maxHeight: hov ? 80 : 0, overflow: "hidden", transition: "max-height .35s ease" }}>
        {ev.short}
      </div>
      <div style={{ position: "absolute", right: 24, top: 28, fontSize: 22, opacity: hov ? 1 : 0.3, transform: hov ? "translateX(0)" : "translateX(-6px)", transition: "all .25s ease" }}>→</div>
    </div>
  );
}

export function EventBoard() {
  const featured = nextEvent(EVENTS);
  const cd = useCountdown(featured.date);

  return (
    <section id="events" className="relative overflow-hidden" style={{ background: "var(--ink)", color: "var(--paper)" }}>
      <div className="section-inner" style={{ paddingTop: 64, paddingBottom: 64 }}>
        <div className="absolute" style={{ top: 32, right: 40, transform: "rotate(8deg)", border: "2px solid var(--paper)", borderRadius: 999, padding: "8px 16px", fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.7 }}>
          Posted · {new Date().toLocaleDateString("en-US", { month: "short", day: "numeric" })}
        </div>

        <div className="eyebrow text-mustard mb-4">What&apos;s coming up</div>
        <h2 className="m-0" style={{ fontFamily: "var(--serif-display)", fontWeight: 400, fontSize: 64, lineHeight: 1, letterSpacing: -1.2 }}>
          The town crier.
        </h2>
        <div style={{ height: 1, background: "rgba(243,235,220,0.2)", margin: "40px 0 32px" }} />

        <div className="grid items-center" style={{ gridTemplateColumns: "1fr 1fr", gap: 48, padding: "32px 0", borderBottom: "1px solid rgba(243,235,220,0.15)", marginBottom: 32 }}>
          <div>
            <div className="stamp mb-3.5" style={{ borderColor: "var(--mustard)", color: "var(--mustard)" }}>Next up · {featured.tag}</div>
            <h3 className="m-0 mb-3" style={{ fontFamily: "var(--serif-display)", fontWeight: 400, fontSize: 44, lineHeight: 1.05, letterSpacing: -0.5 }}>
              {featured.name}
            </h3>
            <div style={{ fontFamily: "var(--mono)", fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", opacity: 0.75, marginBottom: 8 }}>
              {new Date(featured.date).toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" })}
            </div>
            <div style={{ opacity: 0.65, fontSize: 14 }}>{featured.loc} · {featured.short}</div>
          </div>
          <div>
            <div className="eyebrow mb-3.5" style={{ opacity: 0.55 }}>Time until</div>
            <div className="grid gap-3" style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>
              {([["Days", cd.days], ["Hours", cd.hours], ["Min.", cd.minutes], ["Sec.", cd.seconds]] as const).map(([label, val]) => (
                <div key={label} className="text-center" style={{ border: "1.5px solid rgba(243,235,220,0.25)", padding: "20px 12px", background: "rgba(243,235,220,0.04)" }}>
                  <div className="num" style={{ fontFamily: "var(--serif-display)", fontWeight: 500, fontSize: 44, lineHeight: 1, color: "var(--mustard)" }}>
                    {String(val).padStart(2, "0")}
                  </div>
                  <div style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", opacity: 0.55, marginTop: 6 }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid" style={{ gridTemplateColumns: "1fr 1fr 1fr", gap: 0, borderTop: "1px solid rgba(243,235,220,0.15)" }}>
          {EVENTS.filter((e) => e.id !== featured.id).slice(0, 6).map((e, i) => (
            <EventRow key={e.id} ev={e} idx={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
