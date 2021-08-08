import axios from "axios";
import React, { useEffect, useState } from "react";
import OpsLastList from "../../components/ops-last-list/ops-last-list.component";
import PlusValue from "../../components/plusvalue/plusvalue.component";
import { HomePageContainer } from "./home.styles";

const HomePage = (props) => {
  const initialData = [
    {
      coin: "BTC",
      price: 0,
      quantity: 0,
      dateString: "1970-01-01",
    },
    {
      coin: "BTC",
      price: 0,
      quantity: 0,
      dateString: "1970-01-01",
    },
  ];
  const [walletLast, setWalletLast] = useState(initialData);
  const [walletAll, setWalletAll] = useState(initialData);
  useEffect(() => {
    axios("/wallet/last")
      .then((result) => {
        console.log(result.data);
        setWalletLast(result.data);
      })
      .catch((err) => console.log(err));

    axios("/wallet")
      .then((result) => {
        console.log(result.data);
        setWalletAll(result.data);
      })
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
