import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home/Home";
import { DefaultLayout } from "./layouts/DefaultLayout/DefaultLayout";
import { Cart } from "./pages/Cart/Cart";
import { Success } from "./pages/Success/Success";
import { useContext } from "react";
import { CartContext } from "./contexts/CartContextProvider";

export function Router() {
  
  const { cart } = useContext(CartContext);

  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={cart && cart.length > 0 ? <Cart /> : <Home />} />
        <Route path="/order/:orderId/success" element={<Success />} />
      </Route>
    </Routes>
  );
}
