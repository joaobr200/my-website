import React from "react";

import reactLogo from "../../assets/react.png";
import reactNativeLogo from "../../assets/react-native.png";
import typescriptLogo from "../../assets/typescript.png";
import nodeLogo from "../../assets/node.png";
import graphqlLogo from "../../assets/graphql.png";
import testLogo from "../../assets/test.png";
import databaseLogo from "../../assets/database.png";
import { Container, About } from "./styles";

const DevelopmentStack: React.FC = () => {
  return (
    <>
    <Container>
      <article>
        <img src={reactLogo} alt="ReactJS" className="react" />
        <p>ReactJS</p>
      </article>
      <article>
        <img src={reactNativeLogo} alt="React Native" />
        <p>React Native</p>
      </article>
      <article>
        <img src={typescriptLogo} alt="Typescript" />
        <p>Typescript</p>
      </article>
      <article>
        <img src={nodeLogo} alt="nodeJS e Express" />
        <p>NodeJS + Express</p>
      </article>
      <article>
        <img src={graphqlLogo} alt="graphql" />
        <p>Graphql</p>
      </article>
      <article>
        <img src={testLogo} alt="Teste automatizado com jest e cypress" />
        <p>Testes automatizados</p>
      </article>
      <article>
        <img src={databaseLogo} alt="Relacionamento com banco de dados" />
        <p>Banco de dados</p>
      </article>
    </Container>
    <About className="container">
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
  </>
  );
};

export default DevelopmentStack;
