import { useCallback, useEffect, useState } from "react";
import { api } from "../api.js";
import { Button, Card, Table } from "../components/ui.jsx";

export default function Payments() {
  const [rows, setRows] = useState([
    { id: 1, agreement: "AG-0001", date: "2025-12-01", amount: 12000, method: "card" },
    { id: 2, agreement: "AG-0002", date: "2025-11-15", amount: 9000, method: "cash" },
  ]);
  const [status, setStatus] = useState("demo");

  const reload = useCallback(async () => {
    try {
      setStatus("loading");
      const res = await api.get("/payments");
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
      <h1 style={{ margin: 0 }}>Платежі</h1>

      <Card title="Список" right={<Button onClick={reload}>Оновити</Button>}>
        <div style={{ fontSize: 12, opacity: 0.75, marginBottom: 10 }}>
          Режим: {status === "api" ? "API" : status === "loading" ? "Загрузка..." : "DEMO (без API)"}
        </div>

        <Table
          columns={[
            { key: "id", title: "ID" },
            { key: "agreement", title: "Договір" },
            { key: "date", title: "Дата" },
            { key: "amount", title: "Сума" },
            { key: "method", title: "Метод" },
          ]}
          rows={rows}
          keyField="id"
        />
      </Card>
    </div>
  );
}
