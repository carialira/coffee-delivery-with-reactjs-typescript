import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const ContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 0 auto;

  padding: 3.2rem 11.6rem;
  /* min-width: 100vw; */
  aside {
    display: flex;
    justify-content: center;
    align-items: center;

    gap: 1.2rem;

    div {
      display: flex;
      align-items: center;
      justify-content: center;

      padding: 1rem;

      background: ${(props) => props.theme["purple-light"]};
      color: ${(props) => props.theme["purple-dark"]};

      gap: 0.5rem;

      border-radius: 6px;

      svg {
        color: ${(props) => props.theme["purple"]};
      }
    }

    a {
      display: flex;
      padding: 0.8rem;
      border-radius: 6px;

      background: ${(props) => props.theme["yellow-light"]};
      color: ${(props) => props.theme["yellow-dark"]};

      position: relative;

      &[aria-disabled="true"] {
        pointer-events: none;
      }

      span {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 2rem;
        height: 2rem;

        border-radius: 1000px;
        background: ${(props) => props.theme["yellow-dark"]};
        color: ${(props) => props.theme.white};

        ${mixins.fonts.textS};
        font-weight: bold;

        position: absolute;
        top: 0px;
        right: 0px;
        transform: translate(50%, -50%);
      }
    }
  }

  @media (max-width: 60em) {
    padding: 3.2rem 2rem;

    aside a {
      margin-right: 1rem;
    }
  }
`;
