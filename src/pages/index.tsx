import React from "react";
import Head from "next/head";

import Layout from "../components/layout";
// import { Container } from './styles';

function Home() {
  return (
    <Layout>
      <Head>
        <title>JoaoBR200</title>
      </Head>
      <div>
        <h1>Bash</h1>
      </div>
    </Layout>
  );
}

export default Home;
