import { styled } from "styled-components";

export const CartItemContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 1fr;
  align-items: center;

  gap: 1em;
  margin: 1em 0;
  img {
    width: 50px;
    height: auto;
  }
`;

export const RemoveButton = styled.button`
  justify-self: end;
`;
