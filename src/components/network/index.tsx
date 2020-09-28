import React from "react";

import GithubSVG from "../../assets/github.svg";
import LinkedinSVG from "../../assets/linkedin-black.svg";
import InstagramSVG from "../../assets/instagram-icon.svg";
import { Container } from "./styles";

const network: React.FC = () => {
  return (
    <Container>
      <a href="https://github.com/joaobr200" target="_blank" rel="noreferrer">
        <GithubSVG />
      </a>
      <a
        href="https://www.linkedin.com/in/jo%C3%A3o-vitor-justo-arantes-867628161/"
        target="_blank"
        rel="noreferrer"
      >
        <LinkedinSVG />
      </a>
      <a
        href="https://instagram.com/joaojusto07"
        target="_blank"
        rel="noreferrer"
      >
        <InstagramSVG />
      </a>
    </Container>
  );
};

export default network;
