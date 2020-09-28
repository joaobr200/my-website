import React from "react";
import Link from "next/link";

import Network from "../../components/network";
import LogoSVG from "../../assets/logo.svg";
import { Header, NavBar, Logo } from "./styles";

const Nav: React.FC = () => {
  return (
    <Header>
      <div className="container">
        <NavBar>
          <Logo>
            <Link href="/">
              <a>
                <LogoSVG />
              </a>
            </Link>
          </Logo>

          <Network />
        </NavBar>
      </div>
    </Header>
  );
};

export default Nav;
