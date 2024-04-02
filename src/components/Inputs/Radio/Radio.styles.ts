import styled from "styled-components";
import { mixins } from "../../../styles/mixins";

interface ContainerLabelProps {
  $isSelected: boolean;
}

export const ContainerLabel = styled.label<ContainerLabelProps>`
  display: flex;
  align-items: center;
  width: max-content;
  min-width: 17.867rem;
  gap: 1.2rem;

  padding: 1.6rem;
  border-radius: 6px;

  color: ${({ theme }) => theme["base-text"]};

  background-color: ${({ $isSelected, theme }) =>
    $isSelected ? theme["purple-light"] : theme["base-button"]};
  border: ${({ $isSelected, theme }) =>
    $isSelected ? `0.1rem solid ${theme.purple}` : "0.1rem solid transparent"};

  ${mixins.fonts.buttonM}
  text-transform: uppercase;

  transition: all 0.2s;

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme["base-hover"]};
  }

  span {
    /* width: max-content; */
  }

  input {
    // visibility: hidden;
    // max-height: 0;
    // max-width: 0;
    appearance: none;
  }

  svg {
    color: ${({ theme }) => theme.purple};
  }
`;
