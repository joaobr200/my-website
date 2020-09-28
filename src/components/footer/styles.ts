import styled from "styled-components";

export const Footer = styled.footer`
  width: 100%;
  padding: 15px;

  background: ${({ theme }) => theme.colors.gray};
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MadeWithLove = styled.div`
  width: 100%;
  opacity: 0.6;
  font-size: 1rem;

  > p,
  a {
    color: ${({ theme }) => theme.color};
    letter-spacing: 1.2px;
  }

  svg {
    color: red;
    width: 12px;
    height: 12px;
  }
`;
