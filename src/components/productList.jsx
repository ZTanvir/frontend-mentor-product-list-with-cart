import { useProducts } from "../context/ProductContext";
import ProductCard from "./productCard";

const ProductList = () => {
  const { products, error, isLoading } = useProducts();

  if (error) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      <h1>Desserts</h1>
      {Boolean(products.length) &&
        products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
    </>
  );
};
export default ProductList;
