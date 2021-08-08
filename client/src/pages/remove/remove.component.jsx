import React, { useState } from "react";
import axios from "axios";
import {
  AddContainer,
  HeaderContainer,
  DatasContainer,
  MainContainer,
  LogoContainerLink,
  // IconContainer,
  AddButton,
  InputContainer,
} from "./remove.styles";

const RemovePage = () => {
  const [data, setData] = useState({ coin: "", quantity: 0 });

  const handleChange = (e) => {
    setData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleClick = async () => {
    if (data.coin === "" || data.quantity <= 0)
      return alert("Merci de remplir tous les champs");
    await axios("/wallet", {
      method: "POST",
      data: { ...data, quantity: (data.quantity *= -1) },
    });

    setData({ coin: "", quantity: 0, price: 0 });
  };

  return (
    <AddContainer>
      <HeaderContainer>
        <LogoContainerLink to="/">X</LogoContainerLink>{" "}
        <div className="header-title">Ajouter une transaction</div>
      </HeaderContainer>

      <MainContainer>
        <DatasContainer>
          <InputContainer>
            <select name="coin" onChange={handleChange} value={data.coin}>
              <option value="">Sélectionner une crypto</option>
              <option value="BTC">BTC</option>
              <option value="ETH">ETH</option>
              <option value="XRP">XRP</option>
            </select>
          </InputContainer>
          <InputContainer>
            <input
              type="number"
              name="quantity"
              id="quantity"
              placeholder="Quantité"
              value={data.quantity}
              onChange={handleChange}
            />
          </InputContainer>
        </DatasContainer>
        <div className="add-button">
          <AddButton className="add" onClick={handleClick}>
            VALIDER
          </AddButton>
        </div>
      </MainContainer>
    </AddContainer>
  );
};

export default RemovePage;
