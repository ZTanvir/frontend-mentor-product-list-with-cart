import addToCartIcon from "../assets/images/icon-add-to-cart.svg";
import incrementIcon from "../assets/images/icon-increment-quantity.svg";
import incrementIconHover from "../assets/images/icon-increment-quantity-hover.svg";
import decrementIcon from "../assets/images/icon-decrement-quantity.svg";
import decrementIconHover from "../assets/images/icon-decrement-quantity-hover.svg";
import { useCart } from "../context/CartContext";
import { useEffect, useRef } from "react";

const AddToCartBtn = ({ product, isItemInCart, setIsItemInCart }) => {
  const {
    cart,
    addItemToCart,
    incrementProductAmount,
    decrementProductAmount,
  } = useCart();

  const iconDecrementEl = useRef();
  const iconIncrementEl = useRef();

  const addToCartBtn = (
    <div
      data-center="center-children"
      style={{ "--gutter": ".5rem" }}
      onClick={() => addItemToCart(product)}
      className="addToCartContainer"
    >
      <img src={addToCartIcon} alt="cart icon" />
      <span className="addToCartText">Add to Cart</span>
    </div>
  );
  const adjustProductBtn = (
    <div data-split="fraction:3/1" className="adjustProductContainer">
      <img
        onClick={() => decrementProductAmount(product)}
        onMouseEnter={(e) => (iconDecrementEl.current.src = decrementIconHover)}
        onMouseLeave={(e) => (iconDecrementEl.current.src = decrementIcon)}
        ref={iconDecrementEl}
        src={decrementIcon}
        alt="minus symbol"
      />
      <span className="product-qty">{isItemInCart && isItemInCart.qty}</span>
      <img
        onClick={() => incrementProductAmount(product)}
        onMouseEnter={(e) => (iconIncrementEl.current.src = incrementIconHover)}
        onMouseLeave={(e) => (iconIncrementEl.current.src = incrementIcon)}
        ref={iconIncrementEl}
        src={incrementIcon}
        alt="plus symbol"
      />
    </div>
  );
  useEffect(() => {
    const checkItemInCart = cart.find((item) => item.name === product.name);
    if (checkItemInCart) {
      setIsItemInCart(checkItemInCart);
    } else {
      setIsItemInCart(null);
    }
  });

  return (
    <>
      <button className="addToCartBtn">
        {isItemInCart ? adjustProductBtn : addToCartBtn}
      </button>
    </>
  );
};
export default AddToCartBtn;
