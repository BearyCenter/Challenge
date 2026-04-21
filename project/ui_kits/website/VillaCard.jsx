// VillaCard.jsx — The Azure Phuket
function VillaCard({ villa, onNavigate }) {
  const [hovered, setHovered] = React.useState(false);

  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: 26, overflow: "hidden",
        border: "1px solid rgba(29,35,64,0.10)",
        background: "white",
        boxShadow: hovered ? "0 32px 72px rgba(17,21,34,0.18)" : "0 24px 64px rgba(17,21,34,0.10)",
        transition: "box-shadow 250ms ease, transform 250ms ease",
        transform: hovered ? "translateY(-4px)" : "none",
        cursor: "pointer",
      }}
      onClick={() => onNavigate && onNavigate("Villas")}
    >
      {/* Image */}
      <div style={{ position: "relative", overflow: "hidden", height: 220 }}>
        <img
          src={villa.img}
          alt={villa.name}
          style={{
            width: "100%", height: "100%", objectFit: "cover",
            transition: "transform 500ms ease",
            transform: hovered ? "scale(1.04)" : "scale(1)",
            display: "block",
          }}
        />
        {/* Tag */}
        <div style={{
          position: "absolute", top: 14, left: 14,
          background: "rgba(17,21,34,0.72)", backdropFilter: "blur(8px)",
          borderRadius: 999, padding: "5px 12px",
          fontSize: 10, fontWeight: 600, letterSpacing: "0.12em",
          textTransform: "uppercase", color: "rgba(255,255,255,0.85)",
          border: "1px solid rgba(255,255,255,0.12)",
        }}>{villa.tag}</div>
      </div>

      {/* Content */}
      <div style={{ padding: "20px 20px 22px" }}>
        <h3 style={{
          fontFamily: "'Cormorant Garamond',serif", fontSize: 22,
          fontWeight: 500, color: "#1D2340", lineHeight: 1.1, marginBottom: 8,
        }}>{villa.name}</h3>

        {/* Specs */}
        <div style={{ display: "flex", gap: 16, marginBottom: 16 }}>
          {[`${villa.beds} Bedrooms`, `${villa.guests} Guests`, `${villa.sqm} m²`].map(spec => (
            <span key={spec} style={{ fontSize: 11, color: "#5F6478", fontWeight: 500 }}>{spec}</span>
          ))}
        </div>

        {/* Price + CTA */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <div style={{ fontSize: 10, color: "#5F6478", letterSpacing: "0.1em", textTransform: "uppercase" }}>From</div>
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 22, fontWeight: 500, color: "#1D2340" }}>{villa.price}<span style={{ fontSize: 11, fontWeight: 400, color: "#5F6478" }}>/night</span></div>
          </div>
          <button style={{
            background: "#D4AF37", color: "#111522", border: "none",
            borderRadius: 999, padding: "10px 20px", fontSize: 12, fontWeight: 700,
            cursor: "pointer", fontFamily: "var(--font-body)",
            boxShadow: "0 8px 20px rgba(212,175,55,0.22)",
          }}>Reserve</button>
        </div>
      </div>
    </article>
  );
}

Object.assign(window, { VillaCard });
