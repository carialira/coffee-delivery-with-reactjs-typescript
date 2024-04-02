import styled from "styled-components";
import { mixins } from "../../../styles/mixins";

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 3.8rem;
  width: 7.2rem;

  border-radius: 6px;
  background: ${({ theme }) => theme["base-button"]};

  button {
    display: flex;
    padding: 0.8rem;

    border: 0;
    background: transparent;
    color: ${({ theme }) => theme.purple};

    &:not(:disabled):hover {
      color: ${({ theme }) => theme["purple-dark"]};
    }
  }

  span {
    ${mixins.fonts.textM};
  }
`;
