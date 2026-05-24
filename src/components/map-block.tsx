interface Pin { x: number; y: number; label: string }

export function MapBlock({ pins = [], legend = "" }: { pins?: Pin[]; legend?: string }) {
  return (
    <section style={{ background: "var(--paper)" }}>
      <div className="section-inner" style={{ paddingBottom: 100 }}>
        <div className="grid items-stretch" style={{ gridTemplateColumns: "1fr 320px", gap: 32 }}>
          <div className="relative overflow-hidden" style={{ background: "#e8dfca", height: 440, border: "2px solid var(--ink)" }}>
            <svg viewBox="0 0 800 440" preserveAspectRatio="xMidYMid slice" className="absolute inset-0" style={{ width: "100%", height: "100%" }}>
              <path d="M -20 220 Q 200 200 400 230 T 820 240" stroke="var(--ink)" strokeWidth="3.5" fill="none" opacity="0.7" />
              <path d="M 140 -20 Q 180 200 220 460" stroke="var(--ink)" strokeWidth="1.5" fill="none" opacity="0.4" />
              <path d="M 540 -20 Q 580 220 620 460" stroke="var(--ink)" strokeWidth="1.5" fill="none" opacity="0.4" />
              <path d="M 20 80 Q 200 110 380 90 T 780 100" stroke="var(--ink)" strokeWidth="1" fill="none" opacity="0.25" strokeDasharray="4 5" />
              <path d="M 20 360 Q 200 340 380 360 T 780 350" stroke="var(--ink)" strokeWidth="1" fill="none" opacity="0.25" strokeDasharray="4 5" />
            </svg>
            {pins.map((p, i) => (
              <div key={i} className="absolute flex flex-col items-center gap-1" style={{ left: `${p.x}%`, top: `${p.y}%`, transform: "translate(-50%, -100%)" }}>
                <div className="whitespace-nowrap" style={{ background: "var(--brick)", color: "var(--paper)", padding: "4px 10px", fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase" }}>{p.label}</div>
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "var(--brick)", border: "2px solid var(--paper)" }} />
              </div>
            ))}
            <div className="eyebrow absolute" style={{ bottom: 14, right: 18, color: "var(--ink)", opacity: 0.65 }}>Main Street · National Pike</div>
          </div>
          <div style={{ background: "var(--ink)", color: "var(--paper)", padding: 28 }}>
            <div className="eyebrow text-mustard mb-3.5">Getting here</div>
            <h3 className="m-0 mb-4" style={{ fontFamily: "var(--serif-display)", fontSize: 28, fontWeight: 500, lineHeight: 1.15 }}>
              {legend || "All within a half-mile of Main Street."}
            </h3>
            <div className="flex flex-col gap-4">
              {[["From Pittsburgh", "45 min on I-70 W"], ["From Wheeling", "20 min on US-40 E"], ["From Washington", "15 min on US-40 W"], ["Free parking", "Town lot · Wheeling Pike"]].map(([k, v]) => (
                <div key={k} className="flex justify-between pb-3" style={{ borderBottom: "1px solid rgba(243,235,220,0.2)" }}>
                  <span className="eyebrow" style={{ opacity: 0.65 }}>{k}</span>
                  <span style={{ fontFamily: "var(--serif-display)", fontSize: 15 }}>{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
