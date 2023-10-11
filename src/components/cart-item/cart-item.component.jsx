import { useContext } from "react";
import { ProductsCartContext } from "../../context/products-card.context";



import { CartItemContainer, RemoveButton } from "./cart-item.style.jsx";

const CartItem = (product) => {
  const { removeQuantityOfItem } = useContext(ProductsCartContext);

  const removeItem = () => {
    removeQuantityOfItem(product);
  };
  const { imageUrl, name, id, price, quantity } = product;
  return (
    <CartItemContainer key={id}>
      <img src={imageUrl} alt={`${name}`} />
      <span>{name}</span>
      <span>
        {quantity}x{price}$
      </span>
      <RemoveButton as="span" onClick={removeItem} style={{ cursor: "pointer" }} className="remove-btn">
        X
      </RemoveButton>
    </CartItemContainer>
  );
};

export default CartItem;
