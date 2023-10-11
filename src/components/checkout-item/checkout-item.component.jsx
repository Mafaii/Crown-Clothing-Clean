import { useContext } from "react";
import { ProductsCartContext } from "../../context/products-card.context";

import { CheckoutImage, CheckoutItemContainer, QuantityArrows, RemoveButton } from "./checkout-item.style";
const CheckoutItem = ({ product }) => {
  const { id, imageUrl, name, price, quantity } = product;

  const { removeQuantityOfItem, removeItem, addItem } =
    useContext(ProductsCartContext);

  const clearItemHandler = () => {
    removeItem(product);
  };
  const decreaseItem = () => {
    removeQuantityOfItem(product);
  };
  const increaseItem = () => {
    addItem(product);
  };

  return (
    <CheckoutItemContainer className="checkout-item" key={id}>
      <CheckoutImage src={imageUrl} alt={`${name}`} />

      <span className="name">{name}</span>
      <div>
        <QuantityArrows onClick={decreaseItem}>&#10094;</QuantityArrows>
        <span className="value">{quantity}</span>
        <QuantityArrows onClick={increaseItem}>&#10095;</QuantityArrows>
      </div>

      <span className="price">{price}</span>

      <RemoveButton as="span" onClick={clearItemHandler}>
        &#10005;
      </RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
