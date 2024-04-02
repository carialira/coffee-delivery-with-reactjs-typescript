/* eslint-disable @typescript-eslint/no-unused-vars */
import { CheckFat, ShoppingCart } from "@phosphor-icons/react";
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
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../contexts/CartContextProvider";
import { CoffeesItens } from "../../types/Cart.types";

type PropsCard = {
  coffee: CoffeesItens;
};

export function Card({ coffee }: PropsCard) {
  const theme = useTheme();
  const { addNewItensOfCart } = useContext(CartContext);

  const [quantity, setQuantity] = useState(1);
  const [isItemAdded, setIsItemAdded] = useState(false);

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

  useEffect(() => {
    let timeout: number;

    if (isItemAdded) {
      timeout = setTimeout(() => {
        if (quantity > 1) setQuantity(1);
        setIsItemAdded(false);
      }, 1000);
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [isItemAdded, quantity]);

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

          <Buy
            onClick={() => {
              if (coffee && coffee.quantity !== undefined) {
                const updatedCoffee = { ...coffee };
                if (quantity && quantity >= 1) {
                  updatedCoffee.quantity = quantity;
                  setIsItemAdded(true);
                  addNewItensOfCart(updatedCoffee);
                }
              }
            }}
            disabled={isItemAdded}
          >
            {isItemAdded ? (
              <CheckFat weight="fill" size={22} color={theme["base-card"]} />
            ) : (
              <ShoppingCart size={22} color={theme["base-card"]} />
            )}
          </Buy>
        </div>
      </OrderCoffee>
    </ContainerCard>
  );
}
