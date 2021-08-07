import React from "react";
import OpsElem from "./../ops-elem/ops-elem.component";

const OpsLastList = ({ coin, price, data, dateString }) => {
  let progression = false;
  let date = false;
  let arrowDirection = "";
  if (data && coin) {
    progression = data[coin] / price;
    date = dateString.split("-").reverse().join("-");

    if (progression < 0.8) {
      arrowDirection = "Very Bad !";
    } else if (progression <= 1) {
      arrowDirection = "Bad !";
    } else if (progression < 1.2) {
      arrowDirection = "Good !";
    } else {
      arrowDirection = "Very Good!";
    }
  }
  return (
    <div>
      {progression ? (
        <OpsElem date={date} coin={coin} arrowDirection={arrowDirection} />
      ) : (
        "please wait..."
      )}
    </div>
  );
};

export default OpsLastList;
