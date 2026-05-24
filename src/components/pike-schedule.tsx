"use client";

import { useState } from "react";
import { PIKE_SCHEDULE } from "@/data/content";

export function PikeSchedule() {
  const [activeDay, setActiveDay] = useState(0);

  return (
    <section style={{ background: "var(--paper)" }}>
      <div className="section-inner" style={{ paddingTop: 100, paddingBottom: 100 }}>
        <div className="flex justify-between items-end mb-12">
          <h2 className="m-0" style={{ fontFamily: "var(--serif-display)", fontWeight: 400, fontSize: 72, lineHeight: 0.95, letterSpacing: -1.6 }}>
            Three days, <span className="italic">on the Pike.</span>
          </h2>
          <div className="eyebrow text-brick">§ The Programme</div>
        </div>

        <div className="flex" style={{ gap: 0, border: "2px solid var(--ink)" }}>
          {PIKE_SCHEDULE.map((d, i) => {
            const sel = activeDay === i;
            return (
              <button key={d.day} onClick={() => setActiveDay(i)} className="text-left" style={{ flex: 1, padding: "24px 28px", border: "none", cursor: "pointer", background: sel ? "var(--ink)" : "var(--paper)", color: sel ? "var(--paper)" : "var(--ink)", borderRight: i < PIKE_SCHEDULE.length - 1 ? "1.5px solid var(--ink)" : "none", transition: "all .15s ease" }}>
                <div className="eyebrow mb-1.5" style={{ opacity: sel ? 0.75 : 0.55 }}>Day {i + 1}</div>
                <div style={{ fontFamily: "var(--serif-display)", fontSize: 32, lineHeight: 1, marginBottom: 4 }}>{d.day}</div>
                <div className="num" style={{ fontFamily: "var(--mono)", fontSize: 12, letterSpacing: "0.1em", opacity: sel ? 0.7 : 0.55 }}>{d.date}</div>
              </button>
            );
          })}
        </div>

        <div style={{ border: "2px solid var(--ink)", borderTop: "none" }}>
          {PIKE_SCHEDULE[activeDay].events.map((e, i) => (
            <div key={i} className="grid items-center" style={{ gridTemplateColumns: "140px 1fr 160px 32px", padding: "22px 28px", borderBottom: i < PIKE_SCHEDULE[activeDay].events.length - 1 ? "1px solid rgba(28,24,20,0.18)" : "none", gap: 24 }}>
              <div className="num" style={{ fontFamily: "var(--serif-display)", fontSize: 26, color: "var(--brick)" }}>{e.time}</div>
              <div>
                <div style={{ fontFamily: "var(--serif-display)", fontSize: 24, fontWeight: 500, lineHeight: 1.15 }}>{e.title}</div>
                <div className="mt-1" style={{ fontSize: 13, color: "rgba(28,24,20,0.6)" }}>{e.loc}</div>
              </div>
              <div className="stamp" style={{ color: "var(--ink)", borderColor: "var(--ink)" }}>{e.tag}</div>
              <div className="text-right" style={{ fontSize: 18, opacity: 0.4 }}>→</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
