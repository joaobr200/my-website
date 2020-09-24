import React from 'react';
import Link from "next/link";


import { Header, NavBar,Logo } from './styles';

const Nav: React.FC = () => {
  return (
    <Header>
      <NavBar>
          <Logo>
            <Link href="/">
              <a>Joaobr200</a>
            </Link>
          </Logo>
      </NavBar>
    </Header>
  );
};

export default Nav;
