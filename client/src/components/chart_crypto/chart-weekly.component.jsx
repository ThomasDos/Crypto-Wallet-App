import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Line } from "react-chartjs-2";
import { ChartWeeklyContainer } from "./chart-weekly.styles";

const ChartWeekly = () => {
  const [dataCrypto, setDataCrypto] = useState();
  useEffect(() => {
    axios("/crypto/week")
      .then((result) => setDataCrypto(result.data))
      .catch((err) => console.log(err.message));
  }, []);

  const myLabels = [];
  const btcPrices = [];
  const ethPrices = [];
  const xrpPrices = [];

  if (dataCrypto) {
    for (let i in dataCrypto) {
      myLabels[i] = dataCrypto[i].dateString
        .slice(2)
        .split("-")
        .reverse()
        .join("-");
      btcPrices[i] = dataCrypto[i].BTC;
      ethPrices[i] = dataCrypto[i].ETH;
      xrpPrices[i] = dataCrypto[i].XRP;
    }
  }

  const ref = useRef();
  const labels = myLabels;
  const btcData = {
    labels: labels,
    datasets: [
      {
        label: "BTC",
        backgroundColor: "rgb(255, 99, 250)",
        borderColor: "#FFF",
        data: btcPrices,
      },
    ],
  };
  const ethData = {
    labels: labels,
    datasets: [
      {
        label: "ETH",
        backgroundColor: "rgb(55, 1, 200)",
        borderColor: "#FFF",
        data: ethPrices,
      },
    ],
  };
  const xrpData = {
    labels: labels,
    datasets: [
      {
        label: "XRP",
        backgroundColor: "rgb(55, 1, 50)",
        borderColor: "#FFF",
        data: xrpPrices,
      },
    ],
  };

  return (
    <ChartWeeklyContainer>
      {dataCrypto ? <Line ref={ref} data={btcData} /> : "please wait..."}
      {dataCrypto ? <Line ref={ref} data={ethData} /> : ""}
      {dataCrypto ? <Line ref={ref} data={xrpData} /> : ""}
    </ChartWeeklyContainer>
  );
};

export default ChartWeekly;
