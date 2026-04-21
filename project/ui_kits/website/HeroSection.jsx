// HeroSection.jsx — The Azure Phuket
function HeroSection({ onNavigate }) {
  return (
    <section style={{
      position: "relative", minHeight: "100vh",
      display: "flex", alignItems: "center",
      overflow: "hidden",
    }}>
      {/* Background image */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "url('../../assets/images/phuket1.png')",
        backgroundSize: "cover", backgroundPosition: "center",
      }} />
      {/* Cinematic overlay */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(135deg, rgba(17,21,34,0.88) 0%, rgba(29,35,64,0.78) 44%, rgba(92,74,108,0.55) 72%, rgba(17,21,34,0.4) 100%)",
      }} />
      {/* Lilac shimmer */}
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(circle at top right, rgba(220,208,255,0.18), transparent 40%)",
        pointerEvents: "none",
      }} />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 2, maxWidth: 1240, margin: "0 auto", padding: "120px 32px 80px", width: "100%" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 64, alignItems: "center" }}>
          <div>
            <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", marginBottom: 14 }}>Luxury Villa + Wellness · Phuket, Thailand</p>
            <h1 style={{
              fontFamily: "'Cormorant Garamond', serif", fontWeight: 500,
              fontSize: "clamp(3.6rem,7vw,6rem)", lineHeight: 0.95,
              color: "white", marginBottom: 20,
            }}>
              Dusk luxury<br />
              <span style={{ fontStyle: "italic", color: "#F4E7B0" }}>with polished clarity</span>
            </h1>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.72)", lineHeight: 1.75, maxWidth: "44ch", marginBottom: 32 }}>
              Where the jungle meets the Andaman Sea, and no request goes unanswered.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <button onClick={() => onNavigate("Villas")} style={{
                background: "#D4AF37", color: "#111522", border: "none",
                borderRadius: 999, padding: "14px 28px", fontSize: 14, fontWeight: 700,
                cursor: "pointer", boxShadow: "0 16px 32px rgba(212,175,55,0.28)",
                fontFamily: "var(--font-body)",
              }}>Reserve Your Villa</button>
              <button onClick={() => onNavigate("Wellness")} style={{
                background: "rgba(255,255,255,0.08)", color: "white",
                border: "1px solid rgba(255,255,255,0.18)", borderRadius: 999,
                padding: "14px 28px", fontSize: 14, cursor: "pointer",
                fontFamily: "var(--font-body)",
              }}>Explore Wellness</button>
            </div>

            {/* Stats */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20, marginTop: 48 }}>
              {[["12", "Private Villas"], ["5✦", "Guest Rating"], ["24/7", "Concierge"]].map(([val, lbl]) => (
                <div key={lbl} style={{ borderTop: "1px solid rgba(255,255,255,0.14)", paddingTop: 16 }}>
                  <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 36, fontWeight: 500, color: "white", lineHeight: 1 }}>{val}</div>
                  <div style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", marginTop: 4, letterSpacing: "0.08em" }}>{lbl}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Side cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={{
              background: "linear-gradient(135deg,rgba(17,21,34,0.72),rgba(37,44,75,0.62),rgba(86,70,104,0.42))",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: 26, padding: "22px 20px",
              backdropFilter: "blur(12px)",
            }}>
              <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", marginBottom: 8 }}>Key Tone</p>
              <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 20, fontWeight: 500, color: "white", marginBottom: 8 }}>Hybrid luxury wellness-tech</h3>
              <p style={{ fontSize: 12, color: "rgba(255,255,255,0.62)", lineHeight: 1.65 }}>Cinematic resort drama meets bright villa utility — all in one platform.</p>
            </div>
            <div style={{
              background: "rgba(255,255,255,0.92)", border: "1px solid rgba(29,35,64,0.08)",
              borderRadius: 26, padding: "20px",
            }}>
              <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: "#5F6478", marginBottom: 8 }}>Visual Character</p>
              <ul style={{ paddingLeft: "1.1rem", color: "#5F6478", fontSize: 12, lineHeight: 1.9 }}>
                <li>Nightfall villa mood in hero areas</li>
                <li>Navy logo authority across all touchpoints</li>
                <li>Pastel softness in wellness modules</li>
                <li>Gold as a luxury action signal only</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { HeroSection });
