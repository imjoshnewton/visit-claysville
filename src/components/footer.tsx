import Link from "next/link";

const columns = [
  { title: "Explore", items: [{ label: "Our History", href: "/#history" }, { label: "Local Shops", href: "/#directory" }, { label: "Recreation", href: "/#directory" }, { label: "Dining", href: "/#directory" }, { label: "Worship", href: "/#directory" }, { label: "Services", href: "/#directory" }] },
  { title: "Events", items: [{ label: "Pike Festival", href: "/pike-festival" }, { label: "Farmer's Market", href: "/farmers-market" }, { label: "West Alexander Fair", href: "/#events" }, { label: "Hero Awards", href: "/#events" }] },
  { title: "About", items: [{ label: "CABA", href: "#" }, { label: "CAPRI", href: "#" }, { label: "National Pike Trail", href: "#" }, { label: "Become a Sponsor", href: "#" }, { label: "Shop", href: "#" }] },
];

export function Footer() {
  return (
    <footer style={{ background: "var(--ink)", color: "var(--paper)" }}>
      <div className="section-inner" style={{ paddingTop: 64, paddingBottom: 64 }}>
        <div className="grid gap-12 mb-12" style={{ gridTemplateColumns: "2fr 1fr 1fr 1fr" }}>
          <div>
            <div style={{ fontFamily: "var(--serif-display)", fontSize: 32, fontWeight: 500, marginBottom: 8 }}>Visit Claysville</div>
            <div className="eyebrow text-mustard mb-6">Est. 1817</div>
            <p className="m-0 text-sm leading-relaxed opacity-70" style={{ maxWidth: 360 }}>
              Claysville Area Business Association · PO Box 522, Claysville, PA 15323.
              A small-town association for a small town with a long memory.
            </p>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <div className="eyebrow text-mustard mb-4">{col.title}</div>
              <ul className="list-none p-0 m-0 flex flex-col gap-2.5">
                {col.items.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="no-underline text-sm opacity-85" style={{ color: "var(--paper)" }}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex justify-between pt-6" style={{ borderTop: "1px solid rgba(243,235,220,0.2)", fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", opacity: 0.6 }}>
          <span>© 2026 Visit Claysville Area. All rights reserved.</span>
          <span>40.1217° N · 80.4106° W</span>
        </div>
      </div>
    </footer>
  );
}
