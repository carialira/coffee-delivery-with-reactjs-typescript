import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const ContainerCart = styled.div`
  display: flex;
  min-width: 100vw;
  /* overflow-x: hidden; */

  padding: 4.4rem 11.6rem;
  margin: 0 auto;
  gap: 3.2rem;

  @media (max-width: 80em) {
    border: 1px solid red;
    flex-direction: column;
    padding: 0.5rem 1rem 1rem;
  }

  @media (max-width: 60em) {
    padding: 0.5rem 2rem 1rem;
  }
`;

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
  /* padding: 9.4rem 11.6rem; */

  gap: 1.6rem;

  h2 {
    ${mixins.fonts.titleXS};
    color: ${({ theme }) => theme["base-subtitle"]};
  }

  > form {
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
  }
`;

const BasesContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  border-radius: 6px;
  background: ${({ theme }) => theme["base-card"]};

  padding: 4rem;
  justify-content: space-between;
`;

const BaseAddressHeader = styled.div`
  display: flex;

  gap: 0.8rem;
  > div {
    span {
      ${mixins.fonts.textM};
      color: ${({ theme }) => theme["base-subtitle"]};
    }
    p {
      color: ${({ theme }) => theme["base-text"]};
      ${mixins.fonts.textS};
    }
  }
`;

export const AddressContent = styled(BasesContent)``;

export const AddressHeader = styled(BaseAddressHeader)``;

export const AddressForm = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr) 6rem;
  gap: 1.6rem;
  grid-template-areas:
    "cep . ."
    "rua rua rua"
    "numero complemento complemento"
    "bairro cidade estado";
`;

export const PaymentContent = styled(BasesContent)``;

export const PaymentHeader = styled(BaseAddressHeader)``;

export const PaymentForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  > div {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    @media (max-width: 46.875em) {
      flex-direction: column;
    }
  }
`;

export const CartContent = styled(BasesContent)`
  border-radius: 6px 44px;
`;

export const CartItens = styled.div`
  display: flex;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: stretch;
    gap: 2rem;
  }

  > aside {
    font-weight: bold;
    padding-left: 5rem;
  }
`;

export const CoffeeImage = styled.img`
  transform: translateY(-10%);
  max-width: 6.4rem;
  max-height: 6.4rem;
  align-self: center;
`;

export const CartInfoItens = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  span {
    ${mixins.fonts.textM}
  }
`;

export const CartUpdanteItens = styled.div`
  display: flex;
  gap: 0.8rem;

  > button {
    display: flex;
    align-items: center;

    background-color: ${({ theme }) => theme["base-button"]};
    border-radius: 6px;
    gap: 0.8rem;
    padding: 0.6rem 0.8rem;

    > span {
      ${mixins.fonts.buttonM};
      text-transform: uppercase;
      color: ${({ theme }) => theme["base-text"]};
    }

    > svg {
      color: ${({ theme }) => theme.purple};
    }

    &:hover {
      background-color: ${({ theme }) => theme["base-hover"]};
      > svg {
        color: ${({ theme }) => theme["purple-dark"]};
      }
    }
  }
`;

export const CartTotal = styled.section`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 1.2rem;

  > div {
    display: flex;
    justify-content: space-between;

    span:first-child {
      ${mixins.fonts.textS};
    }

    span:last-child {
      ${mixins.fonts.textM};
    }
  }

  div:last-child {
    span {
      ${mixins.fonts.textL};
      font-weight: bold;
    }
  }
`;

export const CartButton = styled.button`
  background-color: ${({ theme }) => theme.yellow};
  color: ${({ theme }) => theme.white};
  padding: 1.2rem;
  border-radius: 6px;
  text-transform: uppercase;

  justify-self: flex-end;
  ${mixins.fonts.buttonG}

  &:hover {
    background-color: ${({ theme }) => theme["yellow-dark"]};
  }
`;

export const PaymentFormErrorMessage = styled.p`
  ${mixins.fonts.textXS};
  font-weight: 400;
  color: ${({ theme }) => theme.red};

  display: flex;
  align-items: center;
  padding: 0.5rem;
  /* justify-content: flex-end; */
`;
