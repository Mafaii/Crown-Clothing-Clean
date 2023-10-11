import { useContext } from "react";
import Button, { ButtonTypes } from "../button/button.component";

import { ProductsCartContext } from "../../context/products-card.context";
import {
  ShopCardContainer,
  ShopCardDetails,
  ShopCardImageContainer,
} from "./shop-card.styles.jsx";

const ShopCard = ({ id, product }) => {
  const { name, price, imageUrl } = product;

  const { addItem } = useContext(ProductsCartContext);

  const addToCartHandler = (ev) => {
    addItem(product);
  };

  return (
    <ShopCardContainer key={id} data-id={id}>
      <ShopCardImageContainer>
        <img src={imageUrl} alt={`${name}`} />
        <Button
          type="button"
          value="Shop Now"
          btnType={ButtonTypes.reversed}
          onClick={addToCartHandler}
        />
      </ShopCardImageContainer>
      <ShopCardDetails>
        <h2>{name}</h2>
        <span>{price}$</span>
      </ShopCardDetails>
    </ShopCardContainer>
  );
};

export default ShopCard;
