import { useContext } from "react";
import { ProductsCartContext } from "../../context/products-card.context";

import { ReactComponent as ShoppingBag } from "../../assets/shopping-bag.svg";

import "./cart-icon.styles.jsx";
import { CartIconContainer } from "./cart-icon.styles.jsx";
const CartIcon = () => {
  const { numberOfCartItems } = useContext(ProductsCartContext);

  return (
    <CartIconContainer>
      <ShoppingBag />
      <span>{numberOfCartItems}</span>
    </CartIconContainer>
  );
};

export default CartIcon;
