import { styled } from "styled-components";

export const CheckoutContainer = styled.div`
  padding: 1em;
  margin-bottom: 2em;
`;

export const CheckoutTableContainer = styled.div`
  margin: 1em auto;
  width: 80vw;
`;

export const CheckoutHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1em;
  text-align: center;
  padding-bottom: 1em;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  margin-bottom: 1em;
`;

export const CheckoutItemsContainer = styled.div``;

export const CheckoutTotal = styled.span`
  position: fixed;
  bottom: 2em;
  right: 2em;
  color: rgba(0, 0, 0, 0.8);
  float: right;
  text-align: end;
  font-size: 1.4em;
  font-weight: 800;
`;
