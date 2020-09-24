import React from "react";
import { ThemeProvider } from "styled-components";

import { dark } from "../styles/themes/dark";
import { GlobalStyle } from "../styles/global";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={dark}>
      <Component {...pageProps}></Component>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default MyApp;
