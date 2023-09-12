import { HeaderContainer } from "./styles";
import { Timer, Scroll } from "phosphor-react";

import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <HeaderContainer>
      <img src="https://github.com/3lucasrs/ignite-timer/blob/main/src/assets/logo-ignite.svg" />
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="History">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
};

export default Header;
