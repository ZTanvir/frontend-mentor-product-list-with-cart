import { createContext, useContext, useState } from "react";

const cartContext = createContext([]);

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const addItemToCart = (product) => {
    const copyProduct = { ...product };
    copyProduct.qty = 1;
    setCart((prev) => prev.concat(copyProduct));
  };
  const removeItemFromCart = (name) => {
    const nextCart = cart.filter((item) => !(item.name === name));
    setCart(nextCart);
  };
  const incrementProductAmount = (product) => {
    const nextCart = cart.map((item) => {
      if (item.name === product.name) {
        return { ...item, qty: item.qty + 1 };
      }
      return { ...item };
    });
    setCart(nextCart);
  };
  const decrementProductAmount = (product) => {
    const cartProduct = cart.find((item) => item.name === product.name);

    if (cartProduct.qty >= 2) {
      const nextCart = cart.map((item) => {
        if (item.name === cartProduct.name) {
          return { ...item, qty: item.qty - 1 };
        }
        return { ...item };
      });
      setCart(nextCart);
    } else if (cartProduct.qty <= 1) {
      const nextCart = cart.filter((item) => item.name !== cartProduct.name);
      setCart(nextCart);
    }
  };

  return (
    <cartContext.Provider
      value={{
        cart,
        addItemToCart,
        removeItemFromCart,
        incrementProductAmount,
        decrementProductAmount,
      }}
    >
      {children}
    </cartContext.Provider>
  );
}

export function useCart() {
  return useContext(cartContext);
}
