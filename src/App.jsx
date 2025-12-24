import { Routes, Route } from "react-router-dom";
import Layout from "./Layout.jsx";

import Home from "./pages/Home.jsx";
import Tenants from "./pages/Tenants.jsx";
import Premises from "./pages/Premises.jsx";
import Leases from "./pages/Leases.jsx";
import Payments from "./pages/Payments.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/tenants" element={<Tenants />} />
        <Route path="/premises" element={<Premises />} />
        <Route path="/leases" element={<Leases />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
