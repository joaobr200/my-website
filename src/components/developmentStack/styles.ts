import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 15px 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
  article {
    width: 100%;
    margin: 8px;
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
