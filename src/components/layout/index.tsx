import React from "react";
import { Container } from "./styles";

import Nav from "../nav";
import Footer from "../footer";

const Layout = (props) => {
  return (
    <Container>
      <Nav/>
      <main>{props.children}</main>
      <Footer/>
    </Container>
  );
};

export default Layout;
