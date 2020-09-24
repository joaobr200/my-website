import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    border-box: box-sizing;
  }

  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.color};
  }

`;
