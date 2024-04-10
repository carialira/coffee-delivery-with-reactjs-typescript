/* eslint-disable @typescript-eslint/no-unused-vars */
import { SubmitHandler, useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
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
  PaymentFormErrorMessage,
} from "./Cart.styles";
import { useTheme } from "styled-components";
import { InputText } from "../../components/Inputs/Text/Text";
import { Radio } from "../../components/Inputs/Radio/Radio";
import { Quantity } from "../../components/Inputs/Quantity/Quantity";
import { useContext, useEffect, useRef, useState } from "react";
import { CartContext } from "../../contexts/CartContextProvider";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { normalizeCepNumber, removeFormat } from "../../utils/const";
import { FormCartInputs } from "../../types/Cart.types";

const newOrder = z.object({
  cep: z.string().min(8, "Informe o CEP"),
  rua: z.string().min(1, "Informe a rua"),
  numero: z.string().min(1, "Informe o número"),
  complemento: z.string(),
  bairro: z.string().min(1, "Informe o bairro"),
  cidade: z.string().min(1, "Informe a cidade"),
  estado: z.string().min(1, "Informe a UF"),
  formaPagamento: z.enum(["credito", "debito", "dinheiro"], {
    invalid_type_error: "Selecione uma forma de pagamento acima, por favor.",
  }),
});

export type OrderDetails = z.infer<typeof newOrder>;

export function Cart() {
  const navigate = useNavigate();
  const theme = useTheme();

  const [disabled, setDisabled] = useState(true);
  const [disabledAddressNumberAndComplement, setDisabledAddressNumberAndComplement] = useState(false);

  const {
    cart,
    removeItemOfCart,
    incrementQuantity,
    decrementQuantity,
    checkoutCart,
  } = useContext(CartContext);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    getValues,
    setValue,
    reset,
    setFocus,
  } = useForm<OrderDetails>({
    mode: "all",
    resolver: zodResolver(newOrder),
    defaultValues: {
      cep: "",
      rua: "",
      numero: "",
      complemento: "",
      bairro: "",
      cidade: "",
      estado: "",
      formaPagamento: "credito" || "debito" || "dinheiro",
    },
  });

  const selectedPaymentMethod = watch("formaPagamento");


  const handleOrderCheckout: SubmitHandler<OrderDetails> = async (data) => {
    if (!cart || cart.length === 0) {
      return alert("É preciso ter pelo menos um item no carrinho");
    }

    await checkoutCart(data);
  };

  const totalItems =
    cart && cart.length > 0
      ? cart.reduce((acc, value) => {
          const quantity = value.quantity ?? 1;
          return (acc += value.price * quantity);
        }, 0)
      : 0;

  const deliveryPrice = 3.5;

  const totalCart = totalItems > 0 ? totalItems + deliveryPrice : 0;

  useEffect(() => {
    if (cart && cart.length <= 0) {
      navigate("/");
    }
  }, [cart, navigate]);


  async function getAddressByApi(valueCep: string) {
    try {
      if (valueCep && valueCep !== "" && valueCep.length === 8) {
        const { data } = await axios.get(
          `https://viacep.com.br/ws/${valueCep}/json/`
        );
        console.log(data, "data");
        if (data && data.cep && data.localidade && data.logradouro) {
          setDisabled(true);
          setDisabledAddressNumberAndComplement(false);
          setValue("rua", data.logradouro, { shouldValidate: true });
          setValue("bairro", data.bairro, { shouldValidate: true });
          setValue("cidade", data.localidade, { shouldValidate: true });
          setValue("estado", data.uf, { shouldValidate: true });
          
          
        } else {
          setDisabled(false);
          setDisabledAddressNumberAndComplement(false);

          if (
            getValues("cep") &&
            getValues("cep") !== undefined &&
            getValues("cidade") &&
            getValues("estado")
          ) {
            reset({
              rua: "",
              numero: "",
              complemento: "",
              bairro: "",
            });
            // refRua?.current.focus();
          }
          setFocus("rua", { shouldSelect: true });
        }
      } else {
        setDisabled(true);
        setDisabledAddressNumberAndComplement(true);
        setFocus("cep", { shouldSelect: true });
        console.log("else");
        reset({
          cep: "",
          rua: "",
          numero: "",
          complemento: "",
          bairro: "",
          cidade: "",
          estado: "",
        });
      }
    } catch (error) {
      setDisabled(false);
      setDisabledAddressNumberAndComplement(false);

      console.log(error, "error");
    }
  }

  return (
    <ContainerCart>
      {cart && cart.length > 0 && (
        <>
          <Content>
            <h2>Complete seu pedido</h2>
            <form id="orderCoffee" onSubmit={handleSubmit(handleOrderCheckout)}>
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
                    placeholder="CEP"
                    inputProps={{ style: { gridArea: "cep" } }}
                    {...register("cep")}
                    error={errors.cep}
                    onFocus={(e)=>{
                      const { value } = e.target;
                      const cepValue: string = value ?? getValues("cep");

                      if (cepValue) {
                      setValue("cep", removeFormat(value), {
                        shouldValidate: true,
                      });
                    }
                    }}
                    onBlur={(e) => {
                      const { value } = e.target;
                      const cepValue: string = value ?? getValues("cep");

                      if (cepValue) {
                        getAddressByApi(cepValue).then(() => {
                          setValue("cep", normalizeCepNumber(value), {
                            shouldValidate: true,
                          });
                          setFocus("numero", { shouldSelect: true });
                        });
                      }
                    }}
                    onChange={(e) => {
                      const { value } = e.target;
                      if (!value) {
                        setDisabled(false);
                        setDisabledAddressNumberAndComplement(false);

                        reset({
                          rua: "",
                          numero: "",
                          complemento: "",
                          bairro: "",
                          cidade: "",
                          estado: "",
                        });
                      }
                    }}
                    // ref={refCep}
                    maxLength={8}
                  />

                  <InputText
                    placeholder="Rua"
                    inputProps={{ style: { gridArea: "rua" } }}
                    {...register("rua")}
                    error={errors.rua}
                    disabled={disabled}
                    maxLength={250}
                    />
                  <InputText
                    placeholder="Número"
                    inputProps={{ style: { gridArea: "numero" } }}
                    {...register("numero")}
                    error={errors.numero}
                    maxLength={50}
                    disabled={disabledAddressNumberAndComplement}
                    />
                  <InputText
                    placeholder="Complemento"
                    inputProps={{ style: { gridArea: "complemento" } }}
                    optional
                    {...register("complemento")}
                    error={errors.complemento}
                    disabled={disabledAddressNumberAndComplement}
                    maxLength={250}
                  />
                  <InputText
                    placeholder="Bairro"
                    inputProps={{ style: { gridArea: "bairro" } }}
                    {...register("bairro")}
                    error={errors.bairro}
                    disabled={disabled}
                    maxLength={250}
                  />
                  <InputText
                    placeholder="Cidade"
                    inputProps={{ style: { gridArea: "cidade" } }}
                    {...register("cidade")}
                    error={errors.cidade}
                    disabled={disabled}
                    maxLength={250}
                  />
                  <InputText
                    placeholder="UF"
                    maxLength={2}
                    inputProps={{ style: { gridArea: "estado" } }}
                    {...register("estado")}
                    error={errors.estado}
                    disabled={disabled}
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
                    <Radio
                      isSelected={selectedPaymentMethod === "credito"}
                      {...register("formaPagamento")}
                      value="credito"
                    >
                      <CreditCard size={16} />
                      <span>Cartão de Crédito</span>
                    </Radio>
                    <Radio
                      isSelected={selectedPaymentMethod === "debito"}
                      {...register("formaPagamento")}
                      value="debito"
                    >
                      <Bank size={16} />
                      <span>Cartão de Débito</span>
                    </Radio>
                    <Radio
                      isSelected={selectedPaymentMethod === "dinheiro"}
                      {...register("formaPagamento")}
                      value="dinheiro"
                    >
                      <Money size={16} />
                      <span>Dinheiro </span>
                    </Radio>
                  </div>

                  {errors.formaPagamento ? (
                    <PaymentFormErrorMessage role="alert">
                      {errors.formaPagamento.message}
                    </PaymentFormErrorMessage>
                  ) : null}
                </PaymentForm>
              </PaymentContent>
            </form>
          </Content>
          <Content>
            <h2>Cafés selecionados</h2>
            <CartContent>
              {cart &&
                cart.length > 0 &&
                cart.map((cof) => {
                  return (
                    <CartItens key={cof.id}>
                      <div>
                        <CoffeeImage src={cof.image} alt="café" />
                        <CartInfoItens>
                          <span>{cof.title}</span>
                          <CartUpdanteItens>
                            <Quantity
                              quantity={cof.quantity}
                              increment={() => incrementQuantity(cof.id)}
                              decrement={() => decrementQuantity(cof.id)}
                            />
                            <button
                              type="button"
                              onClick={() => {
                                removeItemOfCart(cof.id);
                              }}
                            >
                              <Trash />
                              <span>Remover</span>
                            </button>
                          </CartUpdanteItens>
                        </CartInfoItens>
                      </div>
                      <aside>R$ {cof.price?.toFixed(2)}</aside>
                    </CartItens>
                  );
                })}

              <CartTotal>
                <div>
                  <span>Total de itens</span>
                  <span>
                    {new Intl.NumberFormat("pt-br", {
                      currency: "BRL",
                      style: "currency",
                    }).format(totalItems)}
                  </span>
                </div>
                <div>
                  <span>Entrega</span>
                  <span>
                    {new Intl.NumberFormat("pt-br", {
                      currency: "BRL",
                      style: "currency",
                    }).format(deliveryPrice)}
                  </span>
                </div>
                <div>
                  <span>Total</span>
                  <span>
                    {new Intl.NumberFormat("pt-br", {
                      currency: "BRL",
                      style: "currency",
                    }).format(totalCart)}
                  </span>
                </div>
              </CartTotal>

              <CartButton type="submit" form="orderCoffee">
                Confirmar pedido
              </CartButton>
            </CartContent>
          </Content>
        </>
      )}
    </ContainerCart>
  );
}
