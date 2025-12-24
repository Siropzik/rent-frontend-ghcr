import { Card } from "../components/ui.jsx";

export default function Leases() {
  return (
    <div style={{ display: "grid", gap: 14 }}>
      <h1 style={{ margin: 0 }}>Договори</h1>
      <Card title="Поки що">
        Тут зробимо CRUD для договорів (GET/POST/PUT/DELETE /leases).
      </Card>
    </div>
  );
}
