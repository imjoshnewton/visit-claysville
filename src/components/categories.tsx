"use client";

import { useState } from "react";
import Link from "next/link";

const cats = [
  { name: "Local Shops", blurb: "Curated treasures and local fashion in our community storefronts.", tag: "Shop Local" },
  { name: "Recreation", blurb: "Parks, ridge trails, and the National Pike Trail.", tag: "Get Outside" },
  { name: "Grab a Bite", blurb: "Home-made recipes and farm-to-table flavor.", tag: "Explore Dining" },
  { name: "Worship", blurb: "Many places of worship, open to all in our area.", tag: "Worship" },
  { name: "Services", blurb: "Trusted local experts and personalized care.", tag: "Meet Experts" },
];

function CatCard({ c, i }: { c: (typeof cats)[number]; i: number }) {
  const [hov, setHov] = useState(false);
  return (
    <Link
      href="/#directory"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className="block no-underline text-ink"
      style={{
        transform: hov ? "translateY(-6px) rotate(0)" : `rotate(${i % 2 === 0 ? -0.6 : 0.6}deg)`,
        transition: "transform .3s ease",
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: 14,
          border: "1px solid rgba(28,24,20,0.15)",
          boxShadow: hov ? "0 18px 40px rgba(28,24,20,0.16)" : "0 4px 16px rgba(28,24,20,0.06)",
          transition: "box-shadow .3s ease",
        }}
      >
        <div
          style={{
            width: "100%",
            height: 220,
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
          photo · {c.name.toLowerCase()}
        </div>
        <div className="eyebrow text-brick mb-2">
          {String(i + 1).padStart(2, "0")} · {c.tag}
        </div>
        <h3
          className="m-0 mb-1.5"
          style={{ fontFamily: "var(--serif-display)", fontWeight: 500, fontSize: 24, lineHeight: 1.1 }}
        >
          {c.name}
        </h3>
        <p className="m-0 text-sm leading-snug" style={{ color: "rgba(28,24,20,0.7)" }}>
          {c.blurb}
        </p>
      </div>
    </Link>
  );
}

export function Categories() {
  return (
    <section id="visit" style={{ padding: "100px 80px", background: "var(--paper)" }}>
      <div className="flex justify-between items-end mb-14">
        <h2
          className="m-0"
          style={{
            fontFamily: "var(--serif-display)",
            fontWeight: 400,
            fontSize: 72,
            lineHeight: 0.95,
            letterSpacing: -1.6,
          }}
        >
          Five ways
          <br />
          into town.
        </h2>
        <div className="eyebrow text-brick">§ 02 · The Lay of the Land</div>
      </div>
      <div className="grid gap-4" style={{ gridTemplateColumns: "repeat(5, 1fr)" }}>
        {cats.map((c, i) => (
          <CatCard key={c.name} c={c} i={i} />
        ))}
      </div>
    </section>
  );
}
