import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
  const linkStyle = ({ isActive }) => ({
    padding: "10px 12px",
    borderRadius: 10,
    textDecoration: "none",
    border: "1px solid rgba(255,255,255,.10)",
    background: isActive ? "rgba(255,255,255,.12)" : "transparent",
  });

  return (
    <div style={{ minHeight: "100vh" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: 16 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
          <div style={{ fontWeight: 800, letterSpacing: 0.3 }}>RentSystem UI</div>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <NavLink to="/" style={linkStyle}>Головна</NavLink>
            <NavLink to="/tenants" style={linkStyle}>Орендарі</NavLink>
            <NavLink to="/premises" style={linkStyle}>Площі</NavLink>
            <NavLink to="/leases" style={linkStyle}>Договори</NavLink>
            <NavLink to="/payments" style={linkStyle}>Платежі</NavLink>
          </div>
        </div>

        <div style={{ marginTop: 16 }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
