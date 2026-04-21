// BookingBar.jsx — The Azure Phuket
function BookingBar() {
  return (
    <div style={{
      background: "white",
      border: "1px solid rgba(29,35,64,0.10)",
      borderRadius: 26,
      boxShadow: "0 24px 64px rgba(17,21,34,0.12)",
      padding: "18px 24px",
      maxWidth: 1240,
      margin: "-28px auto 0",
      position: "relative",
      zIndex: 10,
    }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr auto", gap: 16, alignItems: "end" }}>
        {[
          { label: "Check In", type: "date" },
          { label: "Check Out", type: "date" },
          { label: "Guests", type: "select", opts: ["2 Guests","3 Guests","4 Guests","5+ Guests"] },
          { label: "Villa Type", type: "select", opts: ["Any Villa","Beachfront","Jungle","Clifftop"] },
        ].map(({ label, type, opts }) => (
          <div key={label} style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <label style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#5F6478" }}>{label}</label>
            {type === "select"
              ? <select style={{ height: 44, borderRadius: 12, border: "1.5px solid rgba(29,35,64,0.14)", padding: "0 12px", fontFamily: "var(--font-body)", fontSize: 13, color: "#1D2340", background: "white", outline: "none" }}>
                  {opts.map(o => <option key={o}>{o}</option>)}
                </select>
              : <input type={type} style={{ height: 44, borderRadius: 12, border: "1.5px solid rgba(29,35,64,0.14)", padding: "0 12px", fontFamily: "var(--font-body)", fontSize: 13, color: "#1D2340", outline: "none" }} />
            }
          </div>
        ))}
        <button style={{
          height: 44, background: "#D4AF37", color: "#111522",
          border: "none", borderRadius: 12,
          fontWeight: 700, fontSize: 13, padding: "0 24px",
          cursor: "pointer", fontFamily: "var(--font-body)",
          boxShadow: "0 8px 20px rgba(212,175,55,0.26)",
          whiteSpace: "nowrap",
        }}>Check Availability</button>
      </div>
    </div>
  );
}

Object.assign(window, { BookingBar });
