import { Link } from "react-router-dom";
import styled from "styled-components";

export const CartDropDownContainer = styled.div`
  // height: 0vh;
  width: 300px;
  
  background-color: white;
  padding: 1em;
  padding-right: 0;
  border: 1px solid rgba(0, 0, 0, 0.6);
  position: absolute;
  z-index: 1;
  top: 90%;
  right: 0;
  transition: 1s all ease-in;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export const CartHeader = styled.h3`
  /* position: absolute;
  top: -1em; //remove padding
  left: 0.2rem; */
`;
export const CartItems = styled.div`
  overflow-y: auto;
  padding-right: 1rem;
  max-height: 50vh;
  height: 80%;
`;

export const CheckoutButton = styled(Link)`
  button {
    
    cursor: pointer;
    width: 80%;
    margin: 0 auto;
  }
`;
