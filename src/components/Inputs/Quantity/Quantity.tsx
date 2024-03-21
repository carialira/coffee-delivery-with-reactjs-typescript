import { Minus, Plus } from "@phosphor-icons/react";
import { Container } from "./Quantity.styles";

type QuantityProps = {
  quantity?: number;
  increment?: () => void;
  decrement?: () => void;
};

export function Quantity({ quantity, increment, decrement }: QuantityProps) {
  return (
    <Container>
      <button onClick={decrement}>
        <Minus size={14} />
      </button>
      <span>{quantity}</span>
      <button onClick={increment}>
        <Plus size={14} />
      </button>
    </Container>
  );
}
