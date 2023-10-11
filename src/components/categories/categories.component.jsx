import { Fragment, useContext } from "react";
import { ProductContext } from "../../context/products.context";
import ShopCard from "../shop-card/shop-card.component";

import "./categories.style.jsx";
import {
  CategoryHeader,
  CategoryLink,
  ProductContainer,
} from "./categories.style.jsx";

const Categories = () => {
  const { collection } = useContext(ProductContext);
  return (
    <Fragment>
      {collection &&
        Object.keys(collection).map((el) => {
          const items = collection[el].filter((_, id) => id < 4);
          return (
            <>
              <CategoryLink to={`${el}`}>
                <CategoryHeader>{el.toUpperCase()}</CategoryHeader>
              </CategoryLink>
              <ProductContainer>
                {items &&
                  items.map((product) => (
                    <ShopCard id={product.id} product={product} />
                  ))}
              </ProductContainer>
            </>
          );
        })}
    </Fragment>
  );
};

export default Categories;
