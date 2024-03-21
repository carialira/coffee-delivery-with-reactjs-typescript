import {
  // CheckFat,
  ShoppingCart,
} from "@phosphor-icons/react";
import {
  CoffeeImage,
  ContainerCard,
  OrderCoffee,
  TagCoffee,
  Title,
  Description,
  Price,
  Buy,
} from "./Card.styles";
import { useTheme } from "styled-components";
import { Quantity } from "../Inputs/Quantity/Quantity";
import { CoffeesItensProps } from "../../mocks/data";
import { useState } from "react";

type PropsCard = {
  coffee: CoffeesItensProps;
};

export function Card({ coffee }: PropsCard) {
  const theme = useTheme();

  const [quantity, setQuantity] = useState(1);

  function increment() {
    if (quantity < 10) {
      setQuantity((state) => state + 1);
    }
  }

  function decrement() {
    if (quantity > 1) {
      setQuantity((state) => state - 1);
    }
  }

  return (
    <ContainerCard>
      <CoffeeImage src={coffee.image} alt={coffee.title} />
      <TagCoffee>
        {coffee.tags.map((tag) => {
          return <span>{tag}</span>;
        })}
      </TagCoffee>

      <Title>{coffee.title}</Title>
      <Description>{coffee.description}</Description>

      <OrderCoffee>
        <Price>
          <span>R$</span>
          <span> {coffee.price.toFixed(2)} </span>
        </Price>
        <div>
          <Quantity
            quantity={quantity}
            decrement={decrement}
            increment={increment}
          />
          <Buy>
            <ShoppingCart size={22} color={theme["base-card"]} />
            {/* <CheckFat weight="fill" size={22} color={theme["base-card"]} /> */}
          </Buy>
        </div>
      </OrderCoffee>
    </ContainerCard>
  );
}
