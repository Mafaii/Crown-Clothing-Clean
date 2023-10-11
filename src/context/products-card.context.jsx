import { createContext, useEffect, useState } from "react";

export const ProductsCartContext = createContext({
  cart: [],
  setCart: () => {},
  cartVisibility: false,
  setCartVisibility: () => {},
  numberOfCartItems: 0,
  setNumberOfCartItems: () => {},
  cartTotal: 0,
  setCartTotal: () => {},
});

const addItemToCart = (cart, item) => {
  //if element exists
  const element = cart.find((el) => el.id === item.id);
  if (element) {
    return cart.map((el) =>
      el.id === item.id
        ? {
            ...el,
            quantity: el.quantity + 1,
          }
        : el
    );
  }
  //if element does not exists add
  ///return new array with all elemnet + item with quantity
  return [...cart, { ...item, quantity: 1 }];
};

const decreaseItemFromCart = (cart, item) => {
  //find item
  const element = cart.find((el) => el.id === item.id);

  //if quantity 1 then remove it fully
  if (element.quantity === 1) {
    return removeItemFromCart(cart, item);
  }
  //if not one then decrease it
  return cart.map((el) =>
    el.id === item.id ? { ...el, quantity: el.quantity - 1 } : el
  );
};

const removeItemFromCart = (cart, item) => {
  return cart.filter((el) => el.id !== item.id);
};

export const ProductsCartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cartVisibility, setCartVisibility] = useState(false);
  const [numberOfCartItems, setNumberOfCartItems] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  const addItem = (item) => {
    setCart(addItemToCart(cart, item));
  };
  const removeQuantityOfItem = (item) => {
    setCart(decreaseItemFromCart(cart, item));
  };
  const removeItem = (item) => {
    setCart(removeItemFromCart(cart, item));
  };

  const value = {
    cart,
    setCart,
    cartVisibility,
    setCartVisibility,
    numberOfCartItems,
    cartTotal,
    addItem,
    removeQuantityOfItem,
    removeItem,
  };
  //recalculate total
  useEffect(() => {
    const total = cart.reduce(
      (acc, curr) => (acc+ curr.price * curr.quantity),
      0
    );
    setCartTotal(total);
  }, [cart]);
  //recalculate number of itmes
  useEffect(() => {
    const numbers = cart.reduce((acc, curr) => (acc+ curr.quantity), 0);
    setNumberOfCartItems(numbers);
  }, [cart]);

  return (
    <ProductsCartContext.Provider value={value}>
      {children}
    </ProductsCartContext.Provider>
  );
};
