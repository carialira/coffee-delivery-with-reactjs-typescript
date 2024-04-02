import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home/Home";
import { DefaultLayout } from "./layouts/DefaultLayout/DefaultLayout";
import { Cart } from "./pages/Cart/Cart";
import { Success } from "./pages/Success/Success";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order/:orderId/success" element={<Success />} />
      </Route>
    </Routes>
  );
}
