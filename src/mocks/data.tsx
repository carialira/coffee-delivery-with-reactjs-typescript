import { v4 as uuidv4 } from "uuid";
import { CoffeesItens } from "../types/Cart.types";

interface CoffeesProps {
  coffees: Array<CoffeesItens>;
  // coffees: Array<Omit<CoffeesItens, "quantity">>;
}

export const dataCoffees: CoffeesProps = {
  coffees: [
    {
      id: uuidv4(),
      title: "Expresso Tradicional",
      description: "O tradicional café feito com água quente e grãos moídos",
      tags: ["tradicional"],
      price: 9.9,
      quantity: 0,
      image: "../../images/expresso.png",
    },
    {
      id: uuidv4(),
      title: "Expresso Americano",
      description: "Expresso diluído, menos intenso que o tradicional",
      tags: ["tradicional"],
      price: 9.9,
      quantity: 0,
      image: "../../images/americano.png",
    },
    {
      id: uuidv4(),
      title: "Expresso Cremoso",
      description: "Café expresso tradicional com espuma cremosa",
      tags: ["tradicional"],
      price: 9.9,
      quantity: 0,
      image: "../../images/expresso-cremoso.png",
    },
    {
      id: uuidv4(),
      title: "Expresso Gelado",
      description: "Bebida preparada com café expresso e cubos de gelo",
      tags: ["tradicional", "gelado"],
      price: 9.9,
      quantity: 0,
      image: "../../images/cafe-gelado.png",
    },
    {
      id: uuidv4(),
      title: "Café com Leite",
      description: "Meio a meio de expresso tradicional com leite vaporizado",
      tags: ["tradicional", "com leite"],
      price: 9.9,
      quantity: 0,
      image: "../../images/cafe-com-leite.png",
    },
    {
      id: uuidv4(),
      title: "Latte",
      description:
        "Uma dose de café expresso com o dobro de leite e espuma cremosa",
      tags: ["tradicional", "com leite"],
      price: 9.9,
      quantity: 0,
      image: "../../images/latte.png",
    },
    {
      id: uuidv4(),
      title: "Capuccino",
      description:
        "Bebida com canela feita de doses iguais de café, leite e espuma",
      tags: ["tradicional", "com leite"],
      price: 9.9,
      quantity: 0,
      image: "../../images/capuccino.png",
    },
    {
      id: uuidv4(),
      title: "Macchiato",
      description:
        "Café expresso misturado com um pouco de leite quente e espuma",
      tags: ["tradicional", "com leite"],
      price: 9.9,
      quantity: 0,
      image: "../../images/macchiato.png",
    },
    {
      id: uuidv4(),
      title: "Mocaccino",
      description:
        "Café expresso misturado com um pouco de leite quente e espuma",
      tags: ["tradicional", "com leite"],
      price: 9.9,
      quantity: 0,
      image: "../../images/mocaccino.png",
    },
    {
      id: uuidv4(),
      title: "Chocolate Quente",
      description:
        "Bebida feita com chocolate dissolvido no leite quente e café",
      tags: ["especial", "com leite"],
      price: 9.9,
      quantity: 0,
      image: "../../images/chocolate-quente.png",
    },
    {
      id: uuidv4(),
      title: "Cubano",
      description:
        "Drink gelado de café expresso com rum, creme de leite e hortelã",
      tags: ["especial", "alcoólico", "gelado"],
      price: 9.9,
      quantity: 0,
      image: "../../images/cubano.png",
    },
    {
      id: uuidv4(),
      title: "Havaiano",
      description: "Bebida adocicada preparada com café e leite de coco",
      tags: ["especial"],
      price: 9.9,
      quantity: 0,
      image: "../../images/havaiano.png",
    },
    {
      id: uuidv4(),
      title: "Árabe",
      description: "Bebida preparada com grãos de café árabe e especiarias",
      tags: ["especial"],
      price: 9.9,
      quantity: 0,
      image: "../../images/arabe.png",
    },
    {
      id: uuidv4(),
      title: "Irlandês",
      description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
      tags: ["especial", "alcoólico"],
      price: 9.9,
      quantity: 0,
      image: "../../images/irlandes.png",
    },
  ],
};
