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
        <OptionLink to="/add">Ajout</OptionLink>
        <OptionLink to="/remove">Editer</OptionLink>
      </OptionsContainer>
    </HeaderContainer>
  );
};

export default Header;
