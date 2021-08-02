import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const flexColumn = css`
  display: flex;
  flex-direction: column;
`;

export const AddContainer = styled.div`
  ${flexColumn}

  width: 50%;
  margin: auto;
  margin-top: 4rem;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

export const MainContainer = styled.div`
  ${flexColumn}
`;

export const DatasContainer = styled.div`
  ${flexColumn}
  select,
  input {
    padding: 1rem;
    padding-left: 5rem;
    background-color: black;
    color: white;
    margin-bottom: 1rem;
    border: grey solid 1.5px;
    border-radius: 1%;
  }
`;

export const LogoContainerLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
`;

export const IconContainer = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  position: absolute;
  top: 0.9rem;
  left: 7rem;
`;

export const InputContainer = styled.div`
  /* position: relative; */
`;

export const AddButton = styled.button`
  width: auto;
  margin-top: 20rem;
  padding: 1rem 5rem;
  background: grey;
  font-weight: bold;
  color: black;
  font-size: 1.2rem;
  border-radius: 10px;
`;
