import { MARKET_DATES } from "@/data/content";

export function MarketDates() {
  return (
    <section style={{ background: "var(--ink)", color: "var(--paper)" }}>
      <div className="section-inner" style={{ paddingTop: 80, paddingBottom: 80 }}>
        <div className="eyebrow text-mustard mb-4">The 2026 Calendar</div>
        <h2 className="m-0 mb-12" style={{ fontFamily: "var(--serif-display)", fontWeight: 400, fontSize: 64, letterSpacing: -1.4, lineHeight: 0.96 }}>
          Five Saturdays.
        </h2>
        <div className="grid gap-4" style={{ gridTemplateColumns: "repeat(5, 1fr)" }}>
          {MARKET_DATES.map((d, i) => (
            <div key={i} style={{ border: "1.5px solid rgba(243,235,220,0.3)", padding: "28px 22px", background: "rgba(243,235,220,0.04)" }}>
              <div className="eyebrow text-mustard mb-3">{d.m} 2026</div>
              <div className="num" style={{ fontFamily: "var(--serif-display)", fontSize: 80, lineHeight: 0.9 }}>{d.d}</div>
              <div className="eyebrow mt-3.5" style={{ opacity: 0.65 }}>Saturday · 9 AM – 1 PM</div>
              <div className="mt-2" style={{ fontSize: 13, color: "rgba(243,235,220,0.7)", lineHeight: 1.5 }}>{d.tag}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
