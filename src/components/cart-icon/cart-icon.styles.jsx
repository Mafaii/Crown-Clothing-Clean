import { styled } from "styled-components";

export const CartIconContainer = styled.div`
  position: relative;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  text-align: center;
  cursor: pointer;
  svg {
    position: relative;
    width: 30px;
  }
  span {
    width: 100%;
    position: absolute;
    bottom: 0;
  }
`;
