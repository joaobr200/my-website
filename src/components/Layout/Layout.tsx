import React from "react";
import { Container } from "./Layout.styles";

const Layout = (props) => {
  return (
    <Container>
      <h1>Layout</h1> {props.children}
    </Container>
  );
};

export default Layout;
