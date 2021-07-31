import React from "react";
import axios from "axios";

const ButtonC = () => {
  const onClick = () => {
    axios("/test")
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <button onClick={onClick}>test</button>
    </div>
  );
};

export default ButtonC;
