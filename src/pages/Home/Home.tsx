// import { Header } from "../../components/Header/Header";
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import {
  Container,
  ContentHeader,
  ContentDetails,
  HeadDetails,
  TagDetails,
  ContentList,
} from "./Home.styles";
import { useTheme } from "styled-components";
import { Card } from "../../components/Card/Card";
import { dataCoffees } from "../../mocks/data";

export function Home() {
  const theme = useTheme();

  return (
    <Container>
      <ContentHeader>
        <ContentDetails>
          <div>
            <HeadDetails>
              <h1>Encontre o café perfeito para qualquer hora do dia</h1>
              <span>
                Com o Coffee Delivery você recebe seu café onde estiver, a
                qualquer hora
              </span>
            </HeadDetails>
            <TagDetails>
              <div>
                <ShoppingCart
                  size={32}
                  weight="fill"
                  color={theme.background}
                  style={{ backgroundColor: theme["yellow-dark"] }}
                />
                <span>Compra simples e segura</span>
              </div>

              <div>
                <Package
                  size={32}
                  weight="fill"
                  color={theme.background}
                  style={{ backgroundColor: theme["base-text"] }}
                />
                <span>Embalagem mantém o café intacto</span>
              </div>

              <div>
                <Timer
                  size={32}
                  weight="fill"
                  color={theme.background}
                  style={{ backgroundColor: theme.yellow }}
                />
                <span>Entrega rápida e rastreada</span>
              </div>

              <div>
                <Coffee
                  size={32}
                  weight="fill"
                  color={theme.background}
                  style={{ backgroundColor: theme.purple }}
                />
                <span>O café chega fresquinho até você</span>
              </div>
            </TagDetails>
          </div>

          <img src="/imagemcoffee.svg" alt="Café do Coffee Delivery" />
        </ContentDetails>
        <img src="/background.svg" id="bg" alt="" />
      </ContentHeader>

      <ContentList>
        <h2>Nossos cafés</h2>
        <div className="listCard">
          {dataCoffees.coffees.map((coffee) => {
            return <Card key={coffee.id} coffee={coffee} />;
          })}
        </div>
      </ContentList>
    </Container>
  );
}
