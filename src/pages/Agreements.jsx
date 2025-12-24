import { useCallback, useEffect, useState } from "react";
import { api } from "../api.js";
import { Button, Card, Table } from "../components/ui.jsx";

export default function Agreements() {
  const [rows, setRows] = useState([
    { id: 1, number: "AG-0001", tenant: "Іван Петренко", premise: "A-101", status: "активний" },
    { id: 2, number: "AG-0002", tenant: "Олена Коваль", premise: "B-202", status: "завершений" },
  ]);
  const [status, setStatus] = useState("demo");

  const reload = useCallback(async () => {
    try {
      setStatus("loading");
      const res = await api.get("/agreements");
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
      <h1 style={{ margin: 0 }}>Договори</h1>

      <Card title="Список" right={<Button onClick={reload}>Оновити</Button>}>
        <div style={{ fontSize: 12, opacity: 0.75, marginBottom: 10 }}>
          Режим: {status === "api" ? "API" : status === "loading" ? "Загрузка..." : "DEMO (без API)"}
        </div>

        <Table
          columns={[
            { key: "id", title: "ID" },
            { key: "number", title: "Номер" },
            { key: "tenant", title: "Орендар" },
            { key: "premise", title: "Площа" },
            { key: "status", title: "Статус" },
          ]}
          rows={rows}
          keyField="id"
        />
      </Card>
    </div>
  );
}
