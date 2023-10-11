import { Link, Outlet } from "react-router-dom";
import { Fragment, useContext } from "react";


import { singUserOut } from "../../utils/firebase/firebase.utils";

import { ReactComponent as CrownIcon } from "../../assets/crown.svg";

import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { ProductsCartContext } from "../../context/products-card.context";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import { UserContext } from "../../context/user.context";
import { CartIconContainer, Navi, NaviLinks, NaviLogo } from "./navigation.styles.jsx";

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const signOutHandler = async () => {
    await singUserOut();
    setCurrentUser(null);
  };

  const { setCartVisibility, cartVisibility } = useContext(ProductsCartContext);

  const toggleCartVisibility = () => {
    setCartVisibility(!cartVisibility);
  };
  return (
    <Fragment>
      <Navi >
        <NaviLogo to="/" >
          <CrownIcon />
        </NaviLogo>
        <NaviLinks >
          <li>
            <Link to="/shop">SHOP</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT</Link>
          </li>
          <li>
            {currentUser !== null ? (
              <span onClick={signOutHandler} className="sign-out">
                SIGN OUT
              </span>
            ) : (
              <Link to="/sign-in">SIGN IN</Link>
            )}
          </li>
          <li>
            <CartIconContainer
              className="shopping-bag cart-icon"
              onClick={toggleCartVisibility}
            >
              <CartIcon onClickhandler={toggleCartVisibility} />
            </CartIconContainer>
          </li>
        </NaviLinks>
        {cartVisibility && <CartDropdown />}
      </Navi>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
