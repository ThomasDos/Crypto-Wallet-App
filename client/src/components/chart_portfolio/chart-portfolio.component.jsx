import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Line } from "react-chartjs-2";
import { ChartPortfolioContainer } from "./chart-portfolio.styles";

const ChartPortfolio = () => {
  const [dataPortfolio, setDataPortfolio] = useState();

  useEffect(() => {
    axios("/portfolio/week")
      .then((result) => {
        setDataPortfolio(result.data);
      })
      .catch((err) => console.log(err.message));
  }, []);

  const myLabels = [];
  const prices = [];
  if (dataPortfolio) {
    for (let i in dataPortfolio) {
      myLabels[i] = dataPortfolio[i].dateString
        .slice(2)
        .split("-")
        .reverse()
        .join("-");
      prices[i] =
        dataPortfolio[i].BTC.value +
        dataPortfolio[i].ETH.value +
        dataPortfolio[i].XRP.value;
    }
  }

  const ref = useRef();
  const labels = myLabels;
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Portfolio",
        backgroundColor: "rgb(255, 99, 100)",
        borderColor: "#FFF",
        data: prices,
      },
    ],
  };

  return (
    <ChartPortfolioContainer>
      {dataPortfolio ? <Line ref={ref} data={data} /> : "Please wait..."}
    </ChartPortfolioContainer>
  );
};

export default ChartPortfolio;
