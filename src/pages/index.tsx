import React from "react";

import Layout from "../components/layout";
import TypeWriter from "../components/typewriter";
import DevelopmentStack from "../components/developmentStack";
import Projects from "../components/projects";
import About from "../components/about";
import Button from "../components/button";
import Portfolio from "../assets/portfolio.svg";
import JavaScript from "../assets/javascript.svg";
import { Welcome, Stack } from "../styles/Pages/Home";

const Home = () => {
  return (
    <Layout title="JoaoBR200 Website">
       <Welcome className="container">
        <div>
          <h1>
            <TypeWriter text="Seja bem vindo ao meu site" />
          </h1>
          <p>
            Olá me chamo João Vitor, sou desenvolvedor web e de aplicativos
            mobile nativos apaixonado por esse incrível mundo da programação.
          </p>
          <a href="#about">
            <Button size="md" type="button">
              Saiba mais
            </Button>
          </a>
        </div>
        <Portfolio />
      </Welcome>
      <Stack>
        <div className="container">
          <div className="title">
            <h1>
              Stack de desenvolvimento <JavaScript />
            </h1>
          </div>
        </div>
          <DevelopmentStack />
      </Stack>
      <Projects/>
      <About/>
    </Layout>
  );
};

export default Home;
