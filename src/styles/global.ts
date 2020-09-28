import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.color};
    font-family: "Roboto", sans-serif;
  }

  a,
  ul {
    text-decoration:none;
    list-style:none;
  }

  .container {
    width: 100%;
    max-width:1024px;
    
    margin:0 auto;
    padding:8px;
  }

`;
