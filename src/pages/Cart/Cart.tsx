import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPin,
  Money,
  Trash,
} from "@phosphor-icons/react";
import {
  AddressContent,
  AddressHeader,
  AddressForm,
  CartContent,
  ContainerCart,
  Content,
  PaymentContent,
  PaymentHeader,
  PaymentForm,
  CartItens,
  CartInfoItens,
  CartUpdanteItens,
  CartTotal,
  CoffeeImage,
  CartButton,
} from "./Cart.styles";
import { useTheme } from "styled-components";
import { InputText } from "../../components/Inputs/Text/Text";
import { Radio } from "../../components/Inputs/Radio/Radio";
import { Quantity } from "../../components/Inputs/Quantity/Quantity";

export function Cart() {
  const theme = useTheme();
  return (
    <ContainerCart>
      <Content>
        <h2>Complete seu pedido</h2>
        <form id="orderCoffee">
          <AddressContent>
            <AddressHeader>
              <MapPin size={22} fill={theme["yellow-dark"]} />
              <div>
                <span>Endereço de Entrega</span>
                <p>Informe o endereço onde deseja receber o seu pedido</p>
              </div>
            </AddressHeader>
            <AddressForm>
              <InputText
                name="cep"
                placeholder="CEP"
                inputProps={{ style: { gridArea: "cep" } }}
              />
              <InputText
                name="rua"
                placeholder="Rua"
                inputProps={{ style: { gridArea: "rua" } }}
              />
              <InputText
                name="numero"
                placeholder="Número"
                inputProps={{ style: { gridArea: "numero" } }}
              />
              <InputText
                name="complemento"
                placeholder="Complemento"
                inputProps={{ style: { gridArea: "complemento" } }}
                optional
              />
              <InputText
                name="bairro"
                placeholder="Bairro"
                inputProps={{ style: { gridArea: "bairro" } }}
              />
              <InputText
                name="cidade"
                placeholder="Cidade"
                inputProps={{ style: { gridArea: "cidade" } }}
              />
              <InputText
                name="uf"
                placeholder="UF"
                inputProps={{ style: { gridArea: "estado" } }}
              />
            </AddressForm>
          </AddressContent>
          <PaymentContent>
            <PaymentHeader>
              <CurrencyDollar size={22} fill={theme.purple} />

              <div>
                <span>Pagamento</span>

                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </PaymentHeader>
            <PaymentForm>
              <div>
                <Radio>
                  <CreditCard size={16} />
                  <span>Cartão de Crédito</span>
                </Radio>
                <Radio isSelected>
                  <Bank size={16} />
                  <span>Cartão de Débito</span>
                </Radio>
                <Radio>
                  <Money size={16} />
                  <span>Dinheiro </span>
                </Radio>
              </div>
            </PaymentForm>
          </PaymentContent>
        </form>
      </Content>
      <Content>
        <h2>Cafés selecionados</h2>
        <CartContent>
          <CartItens>
            <div>
              <CoffeeImage
                src="../../../public/images/Type=Americano.png"
                alt="café"
              />
              <CartInfoItens>
                <span>Expresso Americano</span>
                <CartUpdanteItens>
                  <Quantity />
                  <button type="button">
                    <Trash />
                    <span>Remover</span>
                  </button>
                </CartUpdanteItens>
              </CartInfoItens>
            </div>
            <aside>R$ 9,99</aside>
          </CartItens>
          <CartItens>
            <div>
              <CoffeeImage
                src="../../../public/images/Type=Americano.png"
                alt="café"
              />
              <CartInfoItens>
                <span>Expresso Tradicional</span>
                <CartUpdanteItens>
                  <Quantity />
                  <button type="button">
                    <Trash />
                    <span>Remover</span>
                  </button>
                </CartUpdanteItens>
              </CartInfoItens>
            </div>
            <aside>R$ 9,99</aside>
          </CartItens>
          <CartTotal>
            <div>
              <span>Total de itens</span>
              <span>
                R$ 9,90
                {/* {new Intl.NumberFormat("pt-br", {
                  currency: "BRL",
                  style: "currency",
                }).format("9.90")} */}
              </span>
            </div>
            <div>
              <span>Entrega</span>
              <span>R$ 3,50</span>
            </div>
            <div>
              <span>Total</span>
              <span>R$ 33,10</span>
            </div>
          </CartTotal>

          <CartButton type="submit" form="orderCoffee">
            Confirmar pedido
          </CartButton>
        </CartContent>
      </Content>
    </ContainerCart>
  );
}
