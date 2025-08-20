import AddToCartBtn from "./addToCartBtn";
import { useState } from "react";

const ProductCard = ({ product }) => {
  const [isItemInCart, setIsItemInCart] = useState(null);

  return (
    <section
      data-stack
      style={{ "--gutter": "38px" }}
      className="product-card-container"
    >
      <div className="product-card__image-btn-container">
        <picture>
          <source
            media="(min-width:900px)"
            srcSet={`./src/${product.image.desktop}`}
          />
          <source
            media="(min-width:650px)"
            srcSet={`./src/${product.image.tablet}`}
          />
          <img
            className={isItemInCart ? "activeProduct" : ""}
            src={`./src/${product.image.mobile}`}
            alt={product.name}
          />
        </picture>
        <AddToCartBtn
          product={product}
          isItemInCart={isItemInCart}
          setIsItemInCart={setIsItemInCart}
        />
      </div>
      <div className="itemInfo">
        <h2 className="itemName">{product.name}</h2>
        <p className="itemCategory">{product.category}</p>
        <p className="itemPrice">${product.price}</p>
      </div>
    </section>
  );
};
export default ProductCard;
