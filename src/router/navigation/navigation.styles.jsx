import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const Navi = styled.nav`
  display: flex;
  justify-content: center;
  position: relative;
  align-items: center;
  margin-bottom: 2em;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
`;

export const NaviLogo = styled(Link)`
  margin: 1em;
`;
export const NaviLinks = styled.ul`
  list-style: none;
  display: flex;
  margin-left: auto;
  margin-right: 1em;
  align-items: center;

  a {
    text-decoration: none;
    color: black;
    margin: 0 1em;
  }
`;
export const SignOut = styled.span`
  cursor: pointer;
`;

export const CartIconContainer = styled.div`
  margin-left: 1rem;
`;

//         .shopping-bag {
//             cursor: pointer;
//             margin-left: 1em;
//         }
