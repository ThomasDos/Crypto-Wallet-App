import React from "react";

const OpsLastList = ({ coin, price, data, dateString }) => {
  const progression = data[coin] / price;
  const date = dateString.split("-").reverse().join("-");
  let arrowDirection = "";
  if (progression < 0.8) {
    arrowDirection = "Very Bad !";
  } else if (progression < 1) {
    arrowDirection = "Bad !";
  } else if (progression < 1.2) {
    arrowDirection = "Good !";
  } else {
    arrowDirection = "Very Good!";
  }
  return (
    <div>
      {date} - {coin} : {arrowDirection}
    </div>
  );
};

export default OpsLastList;
