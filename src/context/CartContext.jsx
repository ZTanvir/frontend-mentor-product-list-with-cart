import { createContext, useContext, useState } from "react";

const cartContext = createContext([]);

export function cartProvider({ children }) {
  const [cart, setCart] = useState([]);
  return (
    <cartContext.Provider value={{ cart }}>{children}</cartContext.Provider>
  );
}

export function useCart() {
  return useContext(cartContext);
}
