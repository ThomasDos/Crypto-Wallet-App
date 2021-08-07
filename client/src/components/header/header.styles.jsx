import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 5rem;

  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px;
    margin-bottom: 20px;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 4rem;
  padding: 25px;
  display: flex;
  align-items: center;

  @media screen and (max-width: 800px) {
    width: 50px;
    padding: 0;
  }
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 800px) {
    width: 80%;
  }
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  font-size: 2rem;
  color: white;
  text-decoration: none;
  margin: 0 1.5rem;
`;

export const DailyDataContainer = styled.div`
  display: flex;
  padding-top: 1rem;
  flex-direction: column;
  align-items: center;
`;

export const AllDataContainer = styled.div``;
export const SingleDataContainer = styled.div``;

export const DateContainer = styled.div``;
