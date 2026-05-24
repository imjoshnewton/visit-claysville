import { MUNICIPALITIES } from "@/data/content";

export function Municipalities() {
  return (
    <section style={{ background: "var(--paper)", borderTop: "1px solid rgba(28,24,20,0.12)", borderBottom: "1px solid rgba(28,24,20,0.12)" }}>
      <div className="section-inner" style={{ paddingTop: 100, paddingBottom: 100 }}>
        <div className="flex justify-between items-end mb-12">
          <h2 className="m-0" style={{ fontFamily: "var(--serif-display)", fontWeight: 400, fontSize: 56, lineHeight: 0.96, letterSpacing: -1.2 }}>
            Your municipality, on speed dial.
          </h2>
          <div className="eyebrow text-brick">§ 06 · The Directory</div>
        </div>
        <div className="grid" style={{ gridTemplateColumns: "repeat(3, 1fr)", gap: 0, border: "1px solid rgba(28,24,20,0.18)" }}>
          {MUNICIPALITIES.map(([name, phone], i) => (
            <div key={name} style={{ padding: "24px 28px", borderRight: i % 3 !== 2 ? "1px solid rgba(28,24,20,0.18)" : "none", borderBottom: i < 6 ? "1px solid rgba(28,24,20,0.18)" : "none" }}>
              <div style={{ fontFamily: "var(--serif-display)", fontSize: 22, fontWeight: 500, lineHeight: 1.2, marginBottom: 6 }}>{name}</div>
              <div className="num" style={{ fontFamily: "var(--mono)", fontSize: 14, letterSpacing: "0.05em", color: "var(--brick)" }}>{phone}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
