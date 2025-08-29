import { createContext, useContext, useState, useEffect } from "react";

const ProductContext = createContext([]);

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://product-list-with-cart-json-server.onrender.com/products"
        );

        if (!response.ok) {
          throw new Error("Error on fetching products data");
        }
        const data = await response.json();
        const addIdToDataItems = data.map((item) => {
          return { ...item, id: crypto.randomUUID() };
        });
        setProducts(addIdToDataItems);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products, error, isLoading }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => {
  return useContext(ProductContext);
};
