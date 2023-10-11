import { styled } from "styled-components";

export const CheckoutItemContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1em;
  margin: 1em 0;
  align-items: center;
  text-align: center;
`;
export const CheckoutImage = styled.img`
  width: 70%;
  background-size: cover;
`;
export const RemoveButton = styled.button`
  cursor: pointer;
`;

export const QuantityArrows = styled.div`
  cursor: pointer;
  display: inline;
  margin: 1em;
`;
