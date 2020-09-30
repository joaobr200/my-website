import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 15px 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
  article {
    width: 100%;
    margin: 30px 8px 30px 8px;
    max-width: 140px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    text-align: center;
  }

  article img {
    width: 100%;
  }

  article p {
    color: ${({ theme }) => theme.colors.gray};
    font-size: 1.4rem;
    font-weight: 500;
    letter-spacing: 0.2rem;
  }

  article img.react{
    animation: rotate 25s linear infinite;

    @keyframes rotate {
      0% {
        transform: rotate(0);
      }
      100% {
        transform: rotate(720deg);
      }
    }
  }

  @media screen and (max-width: 867px) {
    overflow: scroll;

    article img {
      width: 180px;
    }

    article + article {
      margin-left: 100px;
    }
  }
`;

export const About = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  div {
    text-align: center;
    color: ${({ theme }) => theme.colors.gray};
  }

  div h1 {
    font-size: 2rem;
    font-weight: 700;
  }

  div p {
    margin: 8px 0;
    font-weight: 500;
    line-height: 1.2rem;
  }

  @media screen and (max-width: 867px) {
    flex-direction: column;

    div {
      width: 400px;
    }

    div + div {
      margin-top: 50px;
    }
  }

  @media screen and (max-width: 400px) {
    div {
      width: 100%;
    }
  }
`;
