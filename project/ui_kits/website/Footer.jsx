// Footer.jsx — The Azure Phuket
function Footer({ onNavigate }) {
  const cols = [
    { title: "Stay", links: ["Villas", "Rates", "Availability", "Special Offers"] },
    { title: "Experience", links: ["Wellness", "Dining", "Excursions", "Events"] },
    { title: "The Azure", links: ["About", "Press", "Careers", "Contact"] },
  ];

  return (
    <footer style={{
      background: "#111522",
      borderTop: "1px solid rgba(255,255,255,0.08)",
      padding: "64px 0 40px",
    }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 32px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", gap: 48, marginBottom: 56 }}>
          {/* Brand column */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <svg width="28" height="28" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <text x="30" y="145" fontSize="120" fontFamily="'Cormorant Garamond',serif" fontWeight="500" fill="white">A</text>
                <line x1="95" y1="38" x2="115" y2="162" stroke="white" strokeWidth="3"/>
                <text x="100" y="145" fontSize="120" fontFamily="'Cormorant Garamond',serif" fontWeight="500" fill="white">P</text>
              </svg>
              <div>
                <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 16, fontWeight: 500, color: "white", lineHeight: 1 }}>The Azure</div>
                <div style={{ fontSize: 8, fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)" }}>Phuket</div>
              </div>
            </div>
            <p style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", lineHeight: 1.8, maxWidth: "28ch" }}>
              Sunset luxury for private villa escapes. Phuket, Thailand.
            </p>
            <div style={{ marginTop: 20, display: "flex", gap: 12 }}>
              <button onClick={() => onNavigate("Villas")} style={{
                background: "#D4AF37", color: "#111522", border: "none",
                borderRadius: 999, padding: "10px 18px", fontSize: 12, fontWeight: 700,
                cursor: "pointer", fontFamily: "var(--font-body)",
              }}>Reserve</button>
              <button onClick={() => onNavigate("Concierge")} style={{
                background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.75)",
                border: "1px solid rgba(255,255,255,0.12)", borderRadius: 999,
                padding: "10px 18px", fontSize: 12, cursor: "pointer",
                fontFamily: "var(--font-body)",
              }}>Concierge</button>
            </div>
          </div>

          {/* Link columns */}
          {cols.map(col => (
            <div key={col.title}>
              <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: 16 }}>{col.title}</p>
              {col.links.map(link => (
                <button key={link} onClick={() => {}} style={{
                  display: "block", background: "none", border: "none",
                  cursor: "pointer", padding: "4px 0", fontSize: 13,
                  color: "rgba(255,255,255,0.65)", fontFamily: "var(--font-body)",
                  textAlign: "left",
                }}>{link}</button>
              ))}
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <p style={{ fontSize: 11, color: "rgba(255,255,255,0.35)" }}>© 2026 The Azure Phuket. All rights reserved.</p>
          <p style={{ fontSize: 11, color: "rgba(255,255,255,0.35)" }}>Privacy · Terms · Cookie Policy</p>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Footer });
