import React from "react";
import {
  HeaderContainer,
  LogoContainer,
  OptionLink,
  OptionsContainer,
  DailyDataContainer,
  SingleDataContainer,
  DateContainer,
  AllDataContainer,
} from "./header.styles";
import { ReactComponent as Logo } from "../../assets/portefeuille.svg";

const Header = (props) => {
  const { BTC, ETH, XRP, date } = props;
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>

      <DailyDataContainer>
        <DateContainer>Date : {date}</DateContainer>
        <AllDataContainer>
          <SingleDataContainer>BTC : {BTC} €</SingleDataContainer>
          <SingleDataContainer>ETH : {ETH} €</SingleDataContainer>
          <SingleDataContainer>XRP : {XRP} €</SingleDataContainer>
        </AllDataContainer>
      </DailyDataContainer>

      <OptionsContainer>
        <OptionLink to="/graph">Graph</OptionLink>
        <OptionLink to="/add">Ajout</OptionLink>
        <OptionLink to="/remove">Editer</OptionLink>
      </OptionsContainer>
    </HeaderContainer>
  );
};

export default Header;
