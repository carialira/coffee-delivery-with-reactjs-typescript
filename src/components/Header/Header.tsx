import { MapPin, ShoppingCart } from "phosphor-react";
import { ContainerHeader } from "./Header.styles";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContextProvider";

export function Header() {
  const { cart } = useContext(CartContext);

  return (
    <ContainerHeader>
      <Link to="/">
        <img src="/logo.svg" alt="Coffee Delivery" />
      </Link>
      <aside>
        <div>
          <MapPin size={22} weight="fill" />
          <span>Mineiros do Tietê, SP</span>
        </div>
        <Link to="/cart">
          <ShoppingCart size={26} weight="fill" />
          {cart && cart.length > 0 && <span>{cart?.length}</span>}
        </Link>
      </aside>
    </ContainerHeader>
  );
}
