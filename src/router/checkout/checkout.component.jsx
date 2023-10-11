import { useContext } from "react";
import { ProductsCartContext } from "../../context/products-card.context";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import "./checkout.styles.jsx";
import {
  CheckoutContainer,
  CheckoutHeader,
  CheckoutItemsContainer,
  CheckoutTableContainer,
  CheckoutTotal,
} from "./checkout.styles.jsx";

const Checkout = () => {
  const { cart, cartTotal } = useContext(ProductsCartContext);

  return (
    <CheckoutContainer>
      <CheckoutTableContainer>
        <CheckoutHeader>
          <span>Product</span>
          <span>Description</span>
          <span>Quantity</span>
          <span>Price</span>
          <span>Remove</span>
        </CheckoutHeader>
        <CheckoutItemsContainer>
          {cart && cart.map((el) => <CheckoutItem product={el} />)}
        </CheckoutItemsContainer>
      </CheckoutTableContainer>
      <CheckoutTotal>Total: ${cartTotal}</CheckoutTotal>
    </CheckoutContainer>
  );
};

export default Checkout;
