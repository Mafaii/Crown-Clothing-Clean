import { createContext, useEffect, useState } from "react";
import { getProducts } from "../services/authentication-and-authorization.service";

export const ProductContext = createContext({
  collection: {},
  setCollection: () => {},
});

export const ProductProvider = ({ children }) => {
  const [collection, setCollection] = useState({});

  const value = { collection };

  useEffect(() => {
     const test = async () => {
      const map = await getProducts();      
      setCollection(map);
    };
    test();
  }, []);

  
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
