import { createGlobalStyle, css } from "styled-components";
import { mixins } from "./mixins";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
  font-size: 62.5%;
}

* body{
  overflow-x: hidden !important;
}


  body {
    ${(props) => {
      return css`
        background: ${props.theme.background};
        color: ${props.theme["base-text"]};
      `;
    }}

    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    ${mixins.fonts.textM};
  }

  button {
    border: none;
    cursor: pointer;
  }
`;
