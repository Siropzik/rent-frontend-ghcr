import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h1>404</h1>
      <p>Сторінку не знайдено</p>
      <Link to="/" style={{ color: "#9ad" }}>На головну</Link>
    </div>
  );
}
