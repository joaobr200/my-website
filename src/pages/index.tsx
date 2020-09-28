import React from "react";

import Layout from "../components/layout";
import TypeWriter from "../components/typewriter";
import DevelopmentStack from "../components/developmentStack";
import Button from "../components/button";
import Portfolio from "../assets/portfolio.svg";
import JavaScript from "../assets/javascript.svg";
import { Welcome, Stack, About, Portifolio } from "../styles/Pages/Home";

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
            mobile nativos e desde o começo da quarentena da covid-19 dediquei a
            aprimorar minhas habilidades nessa incrível mundo da programação.
          </p>
          <a href="#stack">
            <Button size="md" type="button">
              Saiba mais
            </Button>
          </a>
        </div>
        <Portfolio />
      </Welcome>
      <Stack id="stack">
        <div className="container">
          <div className="title">
            <h1>
              Stack de desenvolvimento <JavaScript />
            </h1>
          </div>
          <DevelopmentStack />
          <About>
            <div>
              <h1>Por quê escolhi essa stack ?</h1>
              <p>
                Como minha linguagem de desenvolvimento é o javascript, com essa
                stack consigo usa-lá tanto no front-end como no back-end,
                aumentando minha produtividade.
              </p>
            </div>
            <div>
              <h1>Por quê ReactJS ?</h1>
              <p>
                Simples, pela facilidade e rapidez de poder criar interfaces e
                aplicações web e com o mesmo código criar também aplicações
                mobile nativas para android e IOS.
              </p>
            </div>
          </About>
        </div>
      </Stack>
      <Portifolio>
        <h1>Potifólio</h1>
        <p>Carregando...</p>
      </Portifolio>
    </Layout>
  );
};

export default Home;
