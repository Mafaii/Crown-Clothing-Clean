import { useContext } from "react";

import { ProductsCartContext } from "../../context/products-card.context";

import CartItem from "../cart-item/cart-item.component";
import Button, { ButtonTypes } from "../button/button.component";

import {
  CartDropDownContainer,
  CartHeader,
  CartItems,
  CheckoutButton,
} from "./cart-dropdown.style.jsx";

const CartDropdown = () => {
  const { cart } = useContext(ProductsCartContext);
  const { setCartVisibility } = useContext(ProductsCartContext);
  const toggleCartVisibility = () => setCartVisibility(false);
  return (
    <CartDropDownContainer onMouseLeave={toggleCartVisibility}>
      <CartHeader>Cart</CartHeader>
      {cart.length > 0 && (
        <CartItems>
          {cart.map((item) => {
            return <CartItem {...item} />;
          })}
        </CartItems>
      )}

      <CheckoutButton to="/cart" className="checkout-btn">
        <Button
          value={cart.length > 0 ? "Checkout" : "See Cart"}
          type="button"
          btnType={ButtonTypes.default}
        />
      </CheckoutButton>
    </CartDropDownContainer>
  );
};

export default CartDropdown;
