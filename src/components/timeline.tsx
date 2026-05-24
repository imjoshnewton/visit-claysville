"use client";

import { useState, useEffect, useRef } from "react";
import { TIMELINE } from "@/data/content";

function TimelineCard({
  row,
  side,
  active,
}: {
  row: (typeof TIMELINE)[number];
  side: "left" | "right";
  active: boolean;
}) {
  return (
    <div
      style={{
        transform: active ? "translateY(0)" : `translateY(${side === "left" ? "-4px" : "4px"})`,
        transition: "transform .35s ease",
      }}
    >
      <div className="eyebrow text-brick mb-2">{row.tag}</div>
      <h3
        className="m-0 mb-2.5"
        style={{ fontFamily: "var(--serif-display)", fontWeight: 500, fontSize: 30, lineHeight: 1.1, letterSpacing: -0.5 }}
      >
        {row.title}
      </h3>
      <p
        className="m-0"
        style={{
          color: "rgba(28,24,20,0.75)",
          fontSize: 15,
          lineHeight: 1.55,
          maxWidth: 380,
          textAlign: side === "left" ? "right" : "left",
          marginLeft: side === "left" ? "auto" : 0,
        }}
      >
        {row.body}
      </p>
    </div>
  );
}

export function Timeline() {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const idx = Number((e.target as HTMLElement).dataset.idx);
            setActive(idx);
          }
        });
      },
      { threshold: 0.55, rootMargin: "-30% 0px -30% 0px" }
    );
    refs.current.forEach((r) => r && obs.observe(r));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="relative" style={{ padding: "40px 0" }}>
      <div
        className="absolute"
        style={{
          left: "50%",
          top: 0,
          bottom: 0,
          width: 2,
          background: "repeating-linear-gradient(to bottom, var(--brick) 0 6px, transparent 6px 12px)",
          transform: "translateX(-50%)",
          opacity: 0.4,
        }}
      />
      {TIMELINE.map((row, i) => {
        const left = i % 2 === 0;
        const isActive = active === i;
        return (
          <div
            key={row.year}
            ref={(el) => { refs.current[i] = el; }}
            data-idx={i}
            className="grid items-start"
            style={{
              gridTemplateColumns: "1fr 80px 1fr",
              padding: "36px 0",
              opacity: isActive ? 1 : 0.55,
              transition: "opacity .35s ease",
            }}
          >
            <div style={{ paddingRight: 32, textAlign: "right", visibility: left ? "visible" : "hidden" }}>
              {left && <TimelineCard row={row} side="left" active={isActive} />}
            </div>
            <div className="relative h-full flex items-start justify-center" style={{ paddingTop: 18 }}>
              <div
                className="num flex items-center justify-center"
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: "50%",
                  background: isActive ? "var(--brick)" : "var(--paper)",
                  border: "2px solid var(--brick)",
                  color: isActive ? "var(--paper)" : "var(--brick)",
                  fontFamily: "var(--serif-display)",
                  fontWeight: 600,
                  fontSize: 16,
                  transition: "all .35s ease",
                  boxShadow: isActive ? "0 0 0 6px rgba(162, 61, 43, 0.12)" : "none",
                }}
              >
                {row.year}
              </div>
            </div>
            <div style={{ paddingLeft: 32, visibility: left ? "hidden" : "visible" }}>
              {!left && <TimelineCard row={row} side="right" active={isActive} />}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function HistoryIntro() {
  return (
    <section id="history" className="text-center" style={{ padding: "120px 80px 60px", background: "var(--paper)" }}>
      <div className="eyebrow text-brick mb-4">§ 03 · A short history</div>
      <h2
        className="m-0 mx-auto"
        style={{
          maxWidth: 900,
          fontFamily: "var(--serif-display)",
          fontWeight: 400,
          fontSize: 84,
          lineHeight: 0.96,
          letterSpacing: -2,
        }}
      >
        Two hundred and nine years <span className="italic">on the Pike.</span>
      </h2>
      <p className="mx-auto mt-8 m-0" style={{ maxWidth: 620, fontSize: 18, color: "rgba(28,24,20,0.7)", lineHeight: 1.6 }}>
        John Purviance laid out Claysville in 1817 along the route of the new National Road. Scroll on for the long version.
      </p>
    </section>
  );
}
