const stats = [
  { stat: "12:1", label: "Student-teacher ratio" },
  { stat: "94%", label: "Graduation rate" },
  { stat: "7", label: "Townships served" },
  { stat: "1885", label: "Founded as McGuffey" },
];

export function McGuffey() {
  return (
    <section style={{ background: "var(--navy)", color: "var(--paper)", position: "relative" }}>
      <div className="section-inner" style={{ paddingTop: 80, paddingBottom: 80 }}>
        <div className="eyebrow text-mustard mb-3.5">§ 04 · Schools</div>
        <div className="grid items-center gap-16" style={{ gridTemplateColumns: "1.2fr 1fr" }}>
          <div>
            <h2 className="m-0" style={{ fontFamily: "var(--serif-display)", fontWeight: 400, fontSize: 64, lineHeight: 0.96, letterSpacing: -1.4 }}>
              McGuffey School District,<br />nurturing the next chapter.
            </h2>
            <p className="mt-6 m-0" style={{ maxWidth: 540, fontSize: 16, lineHeight: 1.65, color: "rgba(243,235,220,0.78)" }}>
              Serving Claysville, West Alexander, Taylorstown, South Franklin, Prosperity, East &amp; West Finley — committed
              to academic excellence and the character a small town can teach.
            </p>
          </div>
          <div className="grid gap-6" style={{ gridTemplateColumns: "1fr 1fr" }}>
            {stats.map((s) => (
              <div key={s.label} style={{ border: "1.5px solid rgba(243,235,220,0.25)", padding: "28px 22px", background: "rgba(243,235,220,0.04)" }}>
                <div className="num" style={{ fontFamily: "var(--serif-display)", fontSize: 64, lineHeight: 0.95, color: "var(--mustard)" }}>{s.stat}</div>
                <div className="eyebrow mt-2.5" style={{ opacity: 0.7 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
