import { useEffect, useState, useCallback } from "react";
import { api } from "../api.js";
import { Button, Card, Table } from "../components/ui.jsx";

export default function Tenants() {
  const [rows, setRows] = useState([
    { id: 1, name: "Іван Петренко", phone: "+380...", email: "ivan@mail.com" },
    { id: 2, name: "Олена Коваль", phone: "+380...", email: "olena@mail.com" },
  ]);
  const [status, setStatus] = useState("demo");
  const [error, setError] = useState("");

  const reload = useCallback(async () => {
    try {
      setError("");
      setStatus("loading");
      const res = await api.get("/tenants");
      setRows(Array.isArray(res.data) ? res.data : []);
      setStatus("api");
    } catch {
  setStatus("demo");
  setError("API недоступне (перевір VITE_API_BASE_URL або запусти бекенд)");
}

  }, []);

  useEffect(() => {
    reload();
  }, [reload]);

  return (
    <div style={{ display: "grid", gap: 14 }}>
      <h1 style={{ margin: 0 }}>Орендарі</h1>

      <Card title="Список" right={<Button onClick={reload}>Оновити</Button>}>
        <div style={{ fontSize: 12, opacity: 0.85, marginBottom: 10 }}>
          Режим: {status === "api" ? "API" : status === "loading" ? "Загрузка..." : "DEMO"}
          {error ? <div style={{ marginTop: 6, color: "#ffb4b4" }}>{error}</div> : null}
        </div>

        <Table
          columns={[
            { key: "id", title: "ID" },
            { key: "name", title: "ПІБ" },
            { key: "phone", title: "Телефон" },
            { key: "email", title: "Email" },
          ]}
          rows={rows}
        />
      </Card>
    </div>
  );
}
