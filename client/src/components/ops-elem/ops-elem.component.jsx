import React from "react";

const OpsElem = ({ date, coin, arrowDirection }) => {
  return (
    <div>
      {" "}
      {date} - {coin} : {arrowDirection}
    </div>
  );
};

export default OpsElem;
