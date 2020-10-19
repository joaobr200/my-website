import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  padding: 8px 0 50px 0;

  display: flex;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 4.8rem;
    padding-bottom: 100px;
  }

  h1::after {
    content: "";
    display: block;
    width: 86px;
    height: 6px;
    background: #000;
    margin: 0 auto;
  }

  p {
    font-size: 3.2rem;
  }
`;

export const ProjectWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
`;

export const ProjectArticle = styled.article`
  position: relative;

  width: 250px;
  height: 230px;
  margin: 15px;

  border-radius: 8px;

  background: ${({ theme }) => theme.colors.gray};
  box-shadow: 0 0 5px 2.5 rgba(0, 0, 0, 0.8);

  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    opacity: 0.9;
  }

  div.body {
    padding: 8px;
    p {
      font-size: 1.2rem;
    }

    p.project {
      font-weight: 700;
    }
    p.description {
      font-size: 1rem;
    }
  }
`;

export const ProjectIcon = styled.div`
  position: absolute;
  top: 150px;
  right: 0;
`;

export const Image = styled.img`
  width: 250px;
  height: 150px;
  object-fit: cover;
`;
