import axios from "axios";
import React, { useEffect, useState } from "react";
import OpsLastList from "../../components/ops-last-list/ops-last-list.component";
import PlusValue from "../../components/plusvalue/plusvalue.component";
import { HomePageContainer } from "./home.styles";

const HomePage = (props) => {
  const [walletLast, setWalletLast] = useState([]);
  const [walletAll, setWalletAll] = useState([]);
  useEffect(() => {
    axios("/wallet/last")
      .then((result) => {
        setWalletLast(result.data);
      })
      .catch((err) => console.log(err));

    axios("/wallet")
      .then((result) => setWalletAll(result.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <HomePageContainer>
      <PlusValue wallet={walletAll} data={props} />

      {walletLast.map((result, index) => {
        return <OpsLastList key={index} {...result} data={props} />;
      })}
    </HomePageContainer>
  );
};

export default HomePage;
