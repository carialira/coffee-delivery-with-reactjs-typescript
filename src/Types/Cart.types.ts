export interface CoffeesItens {
  id: string;
  title: string;
  description: string;
  tags: Array<string>;
  price: number;
  quantity?: number;
  image: string;
}

export type FormCartInputs = {
  cep: number;
  rua: string;
  numero: string;
  complemento: string;
  bairro: string;
  cidade: string;
  estado: string;
  formaPagamento: "credito" | "debito" | "dinheiro";
};

export interface Order extends FormCartInputs {
  id: number;
  items: CoffeesItens[];
}
