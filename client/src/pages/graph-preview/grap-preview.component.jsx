import React from "react";
import { GraphPreviewContainer } from "./grap-preview.styles";
import ChartCrypto from "../../components/chart_crypto/chart-weekly.component";
import ChartPortfolio from "../../components/chart_portfolio/chart-portfolio.component";
const GraphPreview = () => {
  return (
    <GraphPreviewContainer>
      <ChartCrypto />
      <ChartPortfolio />
    </GraphPreviewContainer>
  );
};

export default GraphPreview;
