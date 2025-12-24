import { useCallback, useEffect, useState } from "react";
import { api } from "../api.js";
import { Button, Card, Table } from "../components/ui.jsx";

export default function Premises() {
  const [rows, setRows] = useState([
    { id: 1, number: "A-101", type: "Магазин", area: 45 },
    { id: 2, number: "B-202", type: "Офіс", area: 32 },
  ]);
  const [status, setStatus] = useState("demo");

  const reload = useCallback(async () => {
    try {
      setStatus("loading");
      const res = await api.get("/premises");
      setRows(Array.isArray(res.data) ? res.data : []);
      setStatus("api");
    } catch {
      setStatus("demo");
    }
  }, []);

  useEffect(() => {
    reload();
  }, [reload]);

  return (
    <div style={{ display: "grid", gap: 14 }}>
      <h1 style={{ margin: 0 }}>Площі</h1>

      <Card title="Список" right={<Button onClick={reload}>Оновити</Button>}>
        <div style={{ fontSize: 12, opacity: 0.75, marginBottom: 10 }}>
          Режим: {status === "api" ? "API" : status === "loading" ? "Загрузка..." : "DEMO (без API)"}
        </div>

        <Table
          columns={[
            { key: "id", title: "ID" },
            { key: "number", title: "Номер" },
            { key: "type", title: "Тип" },
            { key: "area", title: "Площа (м²)" },
          ]}
          rows={rows}
          keyField="id"
        />
      </Card>
    </div>
  );
}
