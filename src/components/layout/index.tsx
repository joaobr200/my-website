import React from "react";
import Head from "next/head";

import Nav from "../nav";
import Footer from "../footer";
import { Container } from "./styles";

const Layout = ({ children, title, description }: LayoutProps) => {
  return (
    <Container>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <Nav />
      <main>{children}</main>
      <Footer />
    </Container>
  );
};

type WithChildren = {
  children?: React.ReactNode;
};

interface LayoutProps extends WithChildren {
  title?: string;
  description?: string;
}
export default Layout;
