import styled from "styled-components";

export const Welcome = styled.section`
  display: flex;
  align-items: center;

  > div {
    width: 100%;
    max-width: 600px;
    margin-right: 24px;
  }

  h1 {
    color: ${({ theme }) => theme.color};
    font-size: 4.6rem;
  }

  h1::after {
    content: "";
    background: ${({ theme }) => theme.color};
    width: 4px;
    height: 55px;
    display: inline-block;
    margin-left: 8px;
    animation: blink 0.2s linear infinite alternate;

    @keyframes blink {
      0% {
        opacity: 0;
      }

      100% {
        opacity: 1;
      }
    }
  }

  p {
    line-height: 1.4rem;
  }

  > svg {
    width: 100%;
    max-width: 400px;
  }

  @media screen and (max-width: 784px) {
    h1 {
      font-size: 3.6rem;
    }
    > svg {
      display: none;
    }

    > div {
      display: flex;
      align-items: center;
      flex-flow: column;

      text-align: center;
    }
  }
`;

export const Stack = styled.section`
  width: 100%;
  padding: 8px;
  background: ${({ theme }) => theme.colors.secundary};

  div.title {
    width: 100%;
    display: flex;
    align-items: center;

    > h1 {
      font-size: 3.2rem;
      color: ${({ theme }) => theme.colors.gray};

      > svg {
        width: 56px;
        height: 56px;
        margin-left: 12px;
      }
    }
  }

  @media screen and (max-width: 748px) {
    div.title {
      > h1 {
        font-size: 2.4rem;

        > svg {
          width: 36px;
          height: 36px;
          margin-left: 12px;
        }
      }
    }
  }
`;

