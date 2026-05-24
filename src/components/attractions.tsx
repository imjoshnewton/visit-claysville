import Link from "next/link";

const attractions = [
  { name: "West Alexander Fair", since: "1899", blurb: "A timeless tradition celebrating agriculture, community, and heritage every September.", href: "/#events" },
  { name: "Pike Festival", since: "1972", blurb: "Honor national history with unique artisans and local foods. Memorial Day weekend.", href: "/pike-festival" },
  { name: "Farmer's Market", since: "2018", blurb: "Local growers and artisans, 3rd Saturday of the month between June and October.", href: "/farmers-market" },
];

export function Attractions() {
  return (
    <section style={{ background: "var(--paper)" }}>
      <div className="section-inner" style={{ paddingTop: 100, paddingBottom: 100 }}>
        <div className="mb-14">
          <div className="eyebrow text-brick mb-3.5">§ 07 · Tentpoles</div>
          <h2 className="m-0" style={{ fontFamily: "var(--serif-display)", fontWeight: 400, fontSize: 72, lineHeight: 0.95, letterSpacing: -1.6 }}>
            Three traditions <span className="italic">worth a road trip.</span>
          </h2>
        </div>
        <div className="grid gap-8" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
          {attractions.map((t) => (
            <Link key={t.name} href={t.href} className="no-underline text-ink block">
              <div style={{ width: "100%", height: 320, marginBottom: 20, background: "repeating-linear-gradient(135deg, rgba(0,0,0,0.04) 0 6px, rgba(0,0,0,0.02) 6px 12px)", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(0,0,0,0.35)", fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.06em" }}>
                photo · {t.name}
              </div>
              <div className="flex justify-between items-baseline mb-2">
                <span className="eyebrow text-brick">{t.name}</span>
                <span className="num eyebrow" style={{ opacity: 0.5 }}>Since {t.since}</span>
              </div>
              <h3 className="m-0 mb-2.5" style={{ fontFamily: "var(--serif-display)", fontSize: 32, fontWeight: 500, lineHeight: 1.1 }}>{t.name}</h3>
              <p className="m-0" style={{ fontSize: 15, lineHeight: 1.55, color: "rgba(28,24,20,0.7)" }}>{t.blurb}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
