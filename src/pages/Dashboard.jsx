import { Card } from "../components/ui.jsx";

export default function Dashboard() {
  return (
    <div style={{ display: "grid", gap: 14 }}>
      <h1 style={{ margin: 0 }}>Dashboard</h1>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 12 }}>
        <Card title="Орендарі">База орендарів + контакти</Card>
        <Card title="Договори">Статуси, дати, площі</Card>
        <Card title="Платежі">Історія та заборгованість</Card>
      </div>
    </div>
  );
}
