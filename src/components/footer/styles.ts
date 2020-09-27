import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding: 8px;
`;

export const MadeWithLove = styled.div`
  > p,
  a {
    color: ${({ theme }) => theme.color};
    font-size: 28px;
    letter-spacing: 1.2px;
  }

  > p svg {
    fill: ${({ theme }) => theme.color};
    width: 28px;
    height: 28px;
  }
`;

export const NetWork = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    fill: ${({ theme }) => theme.color};
    width: 36px;
    height: 36px;
  }

  a + a {
    margin-left: 12px;
  }
`;
