import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1em;
`;
export const CategoryHeader = styled.h2`
    color: black;
    &:active {
      color: grey;
    }
    &:hover {
      color: grey;
    }
`;
export const CategoryLink = styled(Link)`
  text-decoration: none;
`;
