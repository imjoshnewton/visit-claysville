const phrases = [
  "★ The National Road since 1818",
  "Pike Festival · Memorial Day Weekend",
  "Farmers Market · 3rd Saturday June—October",
  "Population 724 · Elevation 1,168 ft",
  "★ Where Henry Clay's name still rides Main Street",
];

export function Marquee() {
  const reel = [...phrases, ...phrases, ...phrases];
  return (
    <div
      className="overflow-hidden whitespace-nowrap"
      style={{
        background: "var(--ink)",
        color: "var(--paper)",
        padding: "14px 0",
        borderTop: "1px solid var(--ink)",
        borderBottom: "1px solid var(--ink)",
      }}
    >
      <div
        className="marquee-track"
        style={{
          fontFamily: "var(--mono)",
          fontSize: 12,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
        }}
      >
        {reel.map((p, i) => (
          <span key={i} style={{ padding: "0 28px", opacity: i % 5 === 0 ? 1 : 0.7 }}>
            {p}
          </span>
        ))}
      </div>
    </div>
  );
}
