import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";
import {
  AddressDelivery,
  ContainerSuccess,
  ContentSuccess,
  BodyContentSuccess,
  HeaderContentSuccess,
} from "./Success.styles";
import { useTheme } from "styled-components";

export function Success() {
  const theme = useTheme();
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
                  Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
                </span>
                <span>Farrapos - Porto Alegre, RS</span>
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
                <strong>Cartão de Crédito</strong>
              </div>
            </div>
          </AddressDelivery>
        </BodyContentSuccess>
      </ContentSuccess>
      <img src="/illustration.svg" alt="Pedido concluído" />
    </ContainerSuccess>
  );
}
