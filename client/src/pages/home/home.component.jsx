import React from "react";
import { HomeContainer } from "./home.styles";
import ChartCrypto from "../../components/chart_crypto/chart-weekly.component";
import ChartPortfolio from "../../components/chart_portfolio/chart-portfolio.component";
const HomePage = () => {
  return (
    <HomeContainer>
      <ChartCrypto />
      <ChartPortfolio />
    </HomeContainer>
  );
};

export default HomePage;
