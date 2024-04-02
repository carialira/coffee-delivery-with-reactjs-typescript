import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";
import {
  AddressDelivery,
  ContainerSuccess,
  ContentSuccess,
  BodyContentSuccess,
  HeaderContentSuccess,
} from "./Success.styles";
import { useTheme } from "styled-components";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContextProvider";
import { useParams } from "react-router-dom";
import { Order } from "../../types/Cart.types";

export function Success() {
  const theme = useTheme();
  const { orders } = useContext(CartContext);
  const { orderId } = useParams();

  const orderDetails: Order = orders?.find((order) => order.id === orderId);
  console.log(orderId, "orderId");
  console.log(orderDetails, "orderDetails");
  console.log(orders, "orders");

  const paymentMethod = {
    credito: "Cartão de crédito",
    debito: "Cartão de débito",
    dinheiro: "Dinheiro",
  };

  return (
    <ContainerSuccess>
      <ContentSuccess>
        <HeaderContentSuccess>
          <h2>Uhu! Pedido confirmado</h2>
          <span>Agora é só aguardar que logo o café chegará até você</span>
        </HeaderContentSuccess>

        <BodyContentSuccess>
          <AddressDelivery>
            <div>
              <MapPin
                color={theme.white}
                style={{ backgroundColor: theme.purple }}
                size={32}
              />
              <div>
                <span>
                  Entrega em{" "}
                  <strong>
                    {orderDetails.rua}, {orderDetails.numero}
                  </strong>
                </span>
                <span>
                  {orderDetails.bairro} - {orderDetails.cidade},{" "}
                  {orderDetails.estado.toUpperCase()}
                </span>
              </div>
            </div>
            <div>
              <Timer
                color={theme.white}
                style={{ backgroundColor: theme.yellow }}
                size={32}
              />

              <div>
                <span>Previsão de entrega</span>
                <strong>20 min - 30 min </strong>
              </div>
            </div>
            <div>
              <CurrencyDollar
                color={theme.white}
                style={{ backgroundColor: theme["yellow-dark"] }}
                size={32}
              />
              <div>
                <span>Pagamento na entrega</span>
                <strong>{paymentMethod[orderDetails.formaPagamento]}</strong>
              </div>
            </div>
          </AddressDelivery>
        </BodyContentSuccess>
      </ContentSuccess>
      <img src="/illustration.svg" alt="Pedido concluído" />
    </ContainerSuccess>
  );
}
