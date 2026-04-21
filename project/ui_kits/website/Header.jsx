// Header.jsx — The Azure Phuket
const { useState, useEffect } = React;

function Header({ active, onNavigate, screens }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const isDark = active === "Home" || active === "Dining";

  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      transition: "background 300ms ease, backdrop-filter 300ms ease",
      background: scrolled
        ? (isDark ? "rgba(17,21,34,0.88)" : "rgba(248,246,241,0.92)")
        : "transparent",
      backdropFilter: scrolled ? "blur(16px)" : "none",
      borderBottom: scrolled ? `1px solid ${isDark ? "rgba(255,255,255,0.08)" : "rgba(29,35,64,0.08)"}` : "1px solid transparent",
    }}>
      <div style={{
        maxWidth: 1240, margin: "0 auto", padding: "0 32px",
        height: 72, display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        {/* Brand */}
        <button onClick={() => onNavigate("Home")} style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 12, padding: 0 }}>
          <svg width="32" height="32" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <text x="30" y="145" fontSize="120" fontFamily="'Cormorant Garamond',serif" fontWeight="500" fill={isDark ? "white" : "#1D2340"}>A</text>
            <line x1="95" y1="38" x2="115" y2="162" stroke={isDark ? "white" : "#1D2340"} strokeWidth="3"/>
            <text x="100" y="145" fontSize="120" fontFamily="'Cormorant Garamond',serif" fontWeight="500" fill={isDark ? "white" : "#1D2340"}>P</text>
          </svg>
          <div style={{ textAlign: "left" }}>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 18, fontWeight: 500, lineHeight: 1, color: isDark ? "white" : "#1D2340" }}>The Azure</div>
            <div style={{ fontSize: 9, fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: isDark ? "rgba(255,255,255,0.45)" : "#5F6478" }}>Phuket</div>
          </div>
        </button>

        {/* Nav */}
        <nav style={{ display: "flex", gap: 28, alignItems: "center" }}>
          {screens.filter(s => s !== "Home").map(s => (
            <button key={s} onClick={() => onNavigate(s)} style={{
              background: "none", border: "none", cursor: "pointer", padding: "4px 0",
              fontSize: 13, fontWeight: active === s ? 600 : 400,
              color: isDark
                ? (active === s ? "#D4AF37" : "rgba(255,255,255,0.8)")
                : (active === s ? "#1D2340" : "#5F6478"),
              borderBottom: active === s ? `1.5px solid #D4AF37` : "1.5px solid transparent",
              transition: "color 180ms ease, border-color 180ms ease",
              fontFamily: "var(--font-body)",
            }}>{s}</button>
          ))}
          <button onClick={() => onNavigate("Villas")} style={{
            background: "#D4AF37", color: "#111522", border: "none",
            borderRadius: 999, padding: "10px 20px", fontSize: 13, fontWeight: 700,
            cursor: "pointer", boxShadow: "0 8px 20px rgba(212,175,55,0.28)",
            fontFamily: "var(--font-body)", transition: "opacity 150ms ease",
          }}
            onMouseEnter={e => e.target.style.opacity = "0.88"}
            onMouseLeave={e => e.target.style.opacity = "1"}
          >Reserve</button>
        </nav>
      </div>
    </header>
  );
}

Object.assign(window, { Header });
