"use client";

import { useState } from "react";
import { VENDORS, VENDOR_CATEGORIES } from "@/data/content";

export function MarketVendors() {
  const [f, setF] = useState("All");
  const shown = VENDORS.filter((v) => (f === "All" ? true : v.cat === f));

  return (
    <section style={{ padding: "100px 80px", background: "var(--paper)" }}>
      <div className="flex justify-between items-end mb-10">
        <h2
          className="m-0"
          style={{
            fontFamily: "var(--serif-display)",
            fontWeight: 400,
            fontSize: 64,
            lineHeight: 0.95,
            letterSpacing: -1.4,
          }}
        >
          The growers <span className="italic">&amp; the makers.</span>
        </h2>
        <div className="num" style={{ fontFamily: "var(--mono)", fontSize: 12, color: "rgba(28,24,20,0.55)" }}>
          {String(shown.length).padStart(2, "0")} / {String(VENDORS.length).padStart(2, "0")} vendors
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-10 pb-6" style={{ borderBottom: "1px solid rgba(28,24,20,0.12)" }}>
        {VENDOR_CATEGORIES.map((c) => {
          const sel = f === c;
          return (
            <button
              key={c}
              onClick={() => setF(c)}
              style={{
                border: "1.5px solid var(--ink)",
                borderRadius: 999,
                padding: "8px 18px",
                background: sel ? "var(--ink)" : "transparent",
                color: sel ? "var(--paper)" : "var(--ink)",
                fontFamily: "var(--mono)",
                fontSize: 11,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                cursor: "pointer",
                transition: "all .15s ease",
              }}
            >
              {c}
            </button>
          );
        })}
      </div>

      <div className="grid" style={{ gridTemplateColumns: "repeat(4, 1fr)", gap: 0, borderTop: "1px solid rgba(28,24,20,0.12)" }}>
        {shown.map((v, i) => (
          <div
            key={v.name}
            style={{
              padding: "24px 22px",
              borderRight: i % 4 !== 3 ? "1px solid rgba(28,24,20,0.12)" : "none",
              borderBottom: "1px solid rgba(28,24,20,0.12)",
            }}
          >
            <div
              style={{
                width: "100%",
                height: 130,
                marginBottom: 14,
                background: "repeating-linear-gradient(135deg, rgba(0,0,0,0.04) 0 6px, rgba(0,0,0,0.02) 6px 12px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "rgba(0,0,0,0.35)",
                fontFamily: "var(--mono)",
                fontSize: 10,
                letterSpacing: "0.06em",
              }}
            >
              photo · {v.name}
            </div>
            <div className="eyebrow text-brick mb-1.5">{v.cat}</div>
            <h3
              className="m-0 mb-2"
              style={{ fontFamily: "var(--serif-display)", fontSize: 22, fontWeight: 500, lineHeight: 1.15 }}
            >
              {v.name}
            </h3>
            <p className="m-0" style={{ fontSize: 13, color: "rgba(28,24,20,0.7)", lineHeight: 1.5 }}>
              {v.blurb}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
