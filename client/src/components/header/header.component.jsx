import React from "react";
import {
  HeaderContainer,
  LogoContainer,
  OptionLink,
  OptionsContainer,
} from "./header.styles";
import { ReactComponent as Logo } from "../../assets/portefeuille.svg";

const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/login">Login</OptionLink>
        <OptionLink to="/contact">CONTACT</OptionLink>
      </OptionsContainer>
    </HeaderContainer>
  );
};

export default Header;
