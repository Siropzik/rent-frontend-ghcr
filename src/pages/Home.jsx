import { Badge } from "../components/ui.jsx";

export default function Home() {
  return (
    <div style={{ display: "grid", gap: 14 }}>
      <h1 style={{ margin: 0, color: "#fff" }}>Головна</h1>

      <div
        style={{
          padding: 16,
          borderRadius: 14,
          background: "#0f1218",
          border: "1px solid rgba(255,255,255,0.08)",
          color: "rgba(255,255,255,0.88)",
        }}
      >
        <div style={{ fontWeight: 700, marginBottom: 10, color: "rgba(255,255,255,0.95)" }}>
          Статус
        </div>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 10 }}>
          <Badge>Vite + React</Badge>
          <Badge>CRUD pages</Badge>
          <Badge>Ready for API</Badge>
        </div>

        <div style={{ fontSize: 13, opacity: 0.85 }}>
          Це UI для курсової/лаби. Підключається до твого REST API через{" "}
          <code style={{ background: "rgba(255,255,255,0.08)", padding: "2px 6px", borderRadius: 8 }}>
            VITE_API_BASE_URL
          </code>
        </div>
      </div>
    </div>
  );
}
