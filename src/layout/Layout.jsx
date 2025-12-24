import { NavLink, Outlet } from "react-router-dom";

const linkStyle = ({ isActive }) => ({
  display: "block",
  padding: "10px 12px",
  borderRadius: 12,
  border: "1px solid var(--border)",
  background: isActive ? "rgba(96,165,250,0.14)" : "rgba(255,255,255,0.03)",
});

export default function Layout() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "260px 1fr", minHeight: "100vh" }}>
      <aside style={{ padding: 14, borderRight: "1px solid var(--border)" }}>
        <div style={{ fontWeight: 900, marginBottom: 12 }}>RentSystem UI</div>

        <div style={{ display: "grid", gap: 10 }}>
          <NavLink to="/" style={linkStyle}>🏠 Головна</NavLink>
          <NavLink to="/tenants" style={linkStyle}>👤 Орендарі</NavLink>
          <NavLink to="/premises" style={linkStyle}>🏢 Площі</NavLink>
          <NavLink to="/leases" style={linkStyle}>📝 Договори</NavLink>
          <NavLink to="/payments" style={linkStyle}>💳 Платежі</NavLink>
        </div>

        <div style={{ marginTop: 14, fontSize: 12, color: "var(--muted)" }}>
          API base: <span style={{ color: "var(--text)" }}>{import.meta.env.VITE_API_BASE_URL || "http://localhost:3001"}</span>
        </div>
      </aside>

      <main style={{ padding: 16 }}>
        <Outlet />
      </main>
    </div>
  );
}
