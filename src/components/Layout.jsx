import { NavLink, Outlet } from "react-router-dom";

const linkStyle = ({ isActive }) => ({
  padding: "10px 12px",
  borderRadius: 10,
  textDecoration: "none",
  color: isActive ? "#fff" : "rgba(255,255,255,.8)",
  background: isActive ? "rgba(255,255,255,.12)" : "transparent",
});

export default function Layout() {
  return (
    <div style={{ minHeight: "100vh", background: "#0b1020", color: "#fff" }}>
      <div style={{ display: "flex" }}>
        <aside
          style={{
            width: 260,
            padding: 16,
            borderRight: "1px solid rgba(255,255,255,.08)",
            position: "sticky",
            top: 0,
            height: "100vh",
          }}
        >
          <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 12 }}>
            Rent System
          </div>

          <div style={{ display: "grid", gap: 8 }}>
            <NavLink to="/" style={linkStyle}>Dashboard</NavLink>
            <NavLink to="/tenants" style={linkStyle}>Орендарі</NavLink>
            <NavLink to="/premises" style={linkStyle}>Площі</NavLink>
            <NavLink to="/leases" style={linkStyle}>Договори</NavLink>
            <NavLink to="/payments" style={linkStyle}>Платежі</NavLink>
          </div>

          <div style={{ marginTop: 16, opacity: 0.75, fontSize: 12 }}>
            Deploy: GitHub Actions → GHCR → Azure App Service
          </div>
        </aside>

        <main style={{ flex: 1, padding: 18, maxWidth: 1100 }}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
