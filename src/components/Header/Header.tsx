import { MapPin, ShoppingCart } from "phosphor-react";
import { ContainerHeader } from "./Header.styles";
import { Link } from "react-router-dom";

export function Header() {
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
          <span>2</span>
        </Link>
      </aside>
    </ContainerHeader>
  );
}
