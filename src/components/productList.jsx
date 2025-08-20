import { useProducts } from "../context/ProductContext";
import ProductCard from "./productCard";

const ProductList = () => {
  const { products, error, isLoading } = useProducts();

  if (error) {
    return <h1>{error.message}</h1>;
  }

  return (
    <div
      data-stack
      style={{ "--gutter": "32px" }}
      className="products-container"
    >
      <h1>Desserts</h1>
      <div data-grid style={{ "--gutter": "1rem" }} className="products">
        {Boolean(products.length) &&
          products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
      </div>
    </div>
  );
};
export default ProductList;
