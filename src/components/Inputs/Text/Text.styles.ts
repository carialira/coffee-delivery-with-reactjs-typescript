import styled from "styled-components";
import { mixins } from "../../../styles/mixins";

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const LabelInput = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 4.2rem;
  border: 1px solid ${({ theme }) => theme["base-button"]};
  border-radius: 6px;

  background-color: ${({ theme }) => theme["base-input"]};

  transition: all 0.2s;

  &[data-state="focused"] {
    border-color: ${({ theme }) => theme["yellow-dark"]};
  }

  &[data-state="blurred"] {
    border-color: ${({ theme }) => theme["base-button"]};
  }

  input {
    padding: 1.2rem;
    width: 100%;
    background-color: transparent;
    border: 0;
    outline: none;

    &::placeholder {
      color: ${({ theme }) => theme["base-label"]};
    }
  }

  span {
    color: ${({ theme }) => theme["base-label"]};
    ${mixins.fonts.label};
    padding-right: 1.2rem;
  }
`;

export const InputError = styled.p`
  padding: 0.5rem;

  ${mixins.fonts.textXS};
  font-weight: 400;
  color: red;
`;
