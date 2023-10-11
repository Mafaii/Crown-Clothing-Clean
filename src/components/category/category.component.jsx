import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../../context/products.context";
import ShopCard from "../shop-card/shop-card.component";
import { ProductContainer } from "../categories/categories.style";

const Category = () => {
  const { category } = useParams();
  const { collection } = useContext(ProductContext);
  const [products, setProducts] = useState(null);

  useEffect(() => {
    setProducts(collection[category]);
  }, [category, collection]);
  return (
    <>
      <h2>{category.toUpperCase()}</h2>
      <ProductContainer >
        {products &&
          products.map((product) => (
            <ShopCard id={product.id} product={product} />
          ))}
      </ProductContainer>
    </>
  );
};

export default Category;
