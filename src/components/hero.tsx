import Image from "next/image";

export function Hero() {
  return (
    <section className="paper-tex relative overflow-hidden" style={{ background: "var(--paper)" }}>
      <div className="section-inner" style={{ paddingTop: 80, paddingBottom: 100 }}>
        <div className="grid items-center gap-16" style={{ gridTemplateColumns: "1.1fr 1fr" }}>
          <div>
            <div className="eyebrow text-brick mb-4">Volume 209 · Spring 2026</div>
            <h1
              className="m-0"
              style={{
                fontFamily: "var(--serif-display)",
                fontWeight: 400,
                fontSize: 132,
                lineHeight: 0.88,
                letterSpacing: -3.5,
              }}
            >
              Clays-
              <br />
              ville.
            </h1>
            <div className="flex items-center gap-4" style={{ margin: "28px 0 36px" }}>
              <div className="bg-ink" style={{ height: 1, width: 60 }} />
              <span className="eyebrow text-ink">A town on the National Road</span>
            </div>
            <p className="m-0" style={{ maxWidth: 520, fontSize: 19, lineHeight: 1.55, color: "rgba(28,24,20,0.78)" }}>
              Founded 1817. Built by drovers, innkeepers, and farmers along
              America&apos;s first federal highway. Still a small town with a long memory —
              and the doors are open.
            </p>
            <div className="flex gap-3.5 mt-10">
              <a
                href="/pike-festival"
                style={{
                  background: "var(--brick)", color: "var(--paper)", border: "none",
                  padding: "18px 32px", borderRadius: 999, fontFamily: "var(--mono)",
                  fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase", textDecoration: "none",
                }}
              >
                Plan your visit →
              </a>
              <a
                href="/#history"
                style={{
                  background: "transparent", color: "var(--ink)", border: "1.5px solid var(--ink)",
                  padding: "18px 32px", borderRadius: 999, fontFamily: "var(--mono)",
                  fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase", textDecoration: "none",
                }}
              >
                Read our history
              </a>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/images/hero-main-street.avif"
              alt="Historic Main Street, Claysville, PA"
              width={600}
              height={540}
              className="block object-cover"
              style={{ width: "100%", height: 540 }}
              priority
            />
            <div
              className="absolute flex items-center justify-center text-center"
              style={{
                top: -28, right: -28, width: 160, height: 160, borderRadius: "50%",
                border: "2.5px solid var(--brick)", color: "var(--brick)", background: "var(--paper)",
                transform: "rotate(-12deg)",
              }}
            >
              <div>
                <div className="eyebrow" style={{ fontSize: 9, marginBottom: 4 }}>Approved</div>
                <div style={{ fontFamily: "var(--serif-display)", fontWeight: 500, fontSize: 34, lineHeight: 1 }}>1817</div>
                <div className="eyebrow" style={{ fontSize: 8, marginTop: 6 }}>National Road</div>
              </div>
            </div>
            <div
              className="absolute"
              style={{
                bottom: -22, left: -22, background: "var(--ink)", color: "var(--paper)",
                padding: "14px 22px", fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.16em",
              }}
            >
              40.1217° N · 80.4106° W
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
