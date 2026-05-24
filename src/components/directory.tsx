"use client";

import { useState, useMemo } from "react";
import { BUSINESSES, CATEGORIES } from "@/data/content";

export function Directory() {
  const [filter, setFilter] = useState("All");
  const [hov, setHov] = useState<string | null>(null);
  const shown = useMemo(
    () => BUSINESSES.filter((b) => (filter === "All" ? true : b.cat === filter)),
    [filter]
  );

  return (
    <section id="directory" style={{ padding: "80px 80px", background: "var(--paper)", position: "relative" }}>
      <div className="flex justify-between items-end mb-8">
        <div>
          <div className="eyebrow text-brick mb-2.5">The Local Index</div>
          <h2
            className="m-0"
            style={{
              fontFamily: "var(--serif-display)",
              fontWeight: 400,
              fontSize: 64,
              lineHeight: 1,
              letterSpacing: -1.2,
            }}
          >
            Open in town.
          </h2>
        </div>
        <div className="num" style={{ fontFamily: "var(--mono)", fontSize: 12, color: "rgba(28,24,20,0.55)" }}>
          {String(shown.length).padStart(2, "0")} / {String(BUSINESSES.length).padStart(2, "0")} listings
        </div>
      </div>

      <div
        className="flex flex-wrap gap-2 mb-10 pb-6"
        style={{ borderBottom: "1px solid rgba(28,24,20,0.12)" }}
      >
        {CATEGORIES.map((c) => {
          const sel = filter === c;
          return (
            <button
              key={c}
              onClick={() => setFilter(c)}
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

      <div
        className="grid"
        style={{
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 0,
          borderTop: "1px solid rgba(28,24,20,0.12)",
        }}
      >
        {shown.map((b, i) => (
          <div
            key={b.name}
            onMouseEnter={() => setHov(b.name)}
            onMouseLeave={() => setHov(null)}
            style={{
              padding: "28px 28px 32px",
              borderRight: i % 3 !== 2 ? "1px solid rgba(28,24,20,0.12)" : "none",
              borderBottom: "1px solid rgba(28,24,20,0.12)",
              background: hov === b.name ? "rgba(162,61,43,0.04)" : "transparent",
              transition: "background .2s ease",
              cursor: "pointer",
              position: "relative",
            }}
          >
            <div className="flex justify-between items-baseline mb-3.5">
              <span
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: 10,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--brick)",
                }}
              >
                {b.cat}
              </span>
              <span className="num" style={{ fontFamily: "var(--mono)", fontSize: 11, color: "rgba(28,24,20,0.45)" }}>
                est. {b.since}
              </span>
            </div>
            <h3
              className="m-0 mb-2.5"
              style={{
                fontFamily: "var(--serif-display)",
                fontWeight: 400,
                fontSize: 26,
                letterSpacing: -0.3,
                lineHeight: 1.15,
              }}
            >
              {b.name}
            </h3>
            <p className="m-0 mb-4" style={{ fontSize: 14, lineHeight: 1.5, color: "rgba(28,24,20,0.7)" }}>
              {b.blurb}
            </p>
            <div style={{ fontFamily: "var(--mono)", fontSize: 11, color: "rgba(28,24,20,0.45)", letterSpacing: "0.05em" }}>
              {b.addr}
            </div>
            <div
              style={{
                position: "absolute",
                right: 20,
                bottom: 20,
                fontSize: 20,
                opacity: hov === b.name ? 1 : 0,
                transform: hov === b.name ? "translateX(0)" : "translateX(-6px)",
                transition: "all .2s ease",
                color: "var(--brick)",
              }}
            >
              →
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
