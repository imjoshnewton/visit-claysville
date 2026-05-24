"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { label: "History", href: "/#history" },
  { label: "Visit", href: "/#visit" },
  { label: "Events", href: "/#events" },
  { label: "Directory", href: "/#directory" },
];

export function Nav() {
  const pathname = usePathname();
  const isSubPage = pathname !== "/";

  if (isSubPage) {
    return (
      <header className="flex items-center justify-between border-b border-ink/12 bg-paper" style={{ padding: "20px 80px" }}>
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="no-underline text-ink"
            style={{ fontFamily: "var(--serif-display)", fontWeight: 500, fontSize: 22 }}
          >
            ← Visit Claysville
          </Link>
          <span className="eyebrow text-brick">
            {pathname === "/pike-festival" ? "Events / Pike Festival" : "Events / Farmer's Market"}
          </span>
        </div>
        <nav className="flex items-center gap-7">
          {items.map((i) => (
            <Link
              key={i.label}
              href={i.href}
              className="no-underline text-ink"
              style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase" }}
            >
              {i.label}
            </Link>
          ))}
        </nav>
      </header>
    );
  }

  return (
    <header className="flex items-center justify-between border-b border-ink/12 bg-paper relative z-10" style={{ padding: "20px 80px" }}>
      <div className="flex items-baseline gap-3.5">
        <Link
          href="/"
          className="no-underline text-ink"
          style={{ fontFamily: "var(--serif-display)", fontWeight: 500, fontSize: 26, letterSpacing: -0.4 }}
        >
          Visit Claysville
        </Link>
        <span className="eyebrow text-brick opacity-90">Est. 1817 · Washington Co., PA</span>
      </div>
      <nav className="flex items-center gap-9">
        {items.map((i) => (
          <Link
            key={i.label}
            href={i.href}
            className="no-underline text-ink"
            style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase" }}
          >
            {i.label}
          </Link>
        ))}
        <Link
          href="/pike-festival"
          className="no-underline"
          style={{
            border: "1.5px solid var(--ink)",
            background: "var(--ink)",
            color: "var(--paper)",
            padding: "10px 22px",
            borderRadius: 999,
            fontFamily: "var(--mono)",
            fontSize: 11,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
          }}
        >
          Plan a Visit
        </Link>
      </nav>
    </header>
  );
}
