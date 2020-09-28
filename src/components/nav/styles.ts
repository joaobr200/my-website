import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  padding: 8px;

  background: #f3f3f3;
  box-shadow: 0 0 7.5px 2.5px rgba(0, 0, 0, 0.12);
`;

export const NavBar = styled.nav`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.div`
  a {
    color: #000;
    text-decoration: none;
    font-size: 32px;
    font-weight: 500;
  }

  a svg {
    width: 160px;
  }

  cursor: pointer;
`;
