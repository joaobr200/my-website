import React from "react";
import projects from "./projects";

import {FiArrowDownCircle} from "react-icons/fi";
import { Container,ProjectWrapper, ProjectArticle, ProjectIcon, Image } from "./styles";

const Projects: React.FC = () => {
  function handleClickNavigateToProject(url: string) {
    window.location.replace(url);
  }
  return (
    <Container>
      <h1>Projetos</h1>
      <ProjectWrapper className="container">
      {projects.map(({name, description, url, imageUri}) => {
        return <ProjectArticle
        onClick={() => handleClickNavigateToProject(url)}
        key={name}
      >
        <header>
        <Image src={imageUri} alt="project" />
        </header>
        <div className="body">
          <p className="project">{name}</p>
          <p className="description">{description}</p>
        </div>
        <ProjectIcon>
          <FiArrowDownCircle fontSize={28} />
        </ProjectIcon>
      </ProjectArticle>;
      })}
      </ProjectWrapper>
    </Container>
  );
};

export default Projects;
