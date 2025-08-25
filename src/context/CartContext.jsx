import { createContext, useContext, useReducer, useState } from "react";

const cartContext = createContext([]);

function cartReducer(cart, action) {
  switch (action.type) {
    case "added": {
      const copyProduct = { ...action.product };
      copyProduct.qty = 1;
      const nextCart = cart.concat(copyProduct);
      return nextCart;
    }
    case "removed": {
      const nextCart = cart.filter(
        (item) => !(item.name === action.productName)
      );
      return nextCart;
    }

    case "increment_product_quantity": {
      const nextCart = cart.map((item) => {
        if (item.name === action.product.name) {
          return { ...item, qty: item.qty + 1 };
        }
        return { ...item };
      });
      return nextCart;
    }
    case "decrement_product_quantity": {
      const cartProduct = cart.find(
        (item) => item.name === action.product.name
      );

      if (cartProduct.qty >= 2) {
        const nextCart = cart.map((item) => {
          if (item.name === cartProduct.name) {
            return { ...item, qty: item.qty - 1 };
          }
          return { ...item };
        });
        return nextCart;
      } else if (cartProduct.qty <= 1) {
        const nextCart = cart.filter((item) => item.name !== cartProduct.name);
        return nextCart;
      }
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, []);

  const addItemToCart = (product) => {
    dispatch({ type: "added", product });
  };

  const removeItemFromCart = (name) => {
    dispatch({ type: "removed", productName: name });
  };

  const incrementProductAmount = (product) => {
    dispatch({ type: "increment_product_quantity", product });
  };

  const decrementProductAmount = (product) => {
    dispatch({ type: "decrement_product_quantity", product });
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
