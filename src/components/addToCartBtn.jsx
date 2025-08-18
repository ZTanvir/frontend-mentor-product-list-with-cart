import addToCartIcon from "../assets/images/icon-add-to-cart.svg";
import incrementIcon from "../assets/images/icon-increment-quantity.svg";
import decrementIcon from "../assets/images/icon-decrement-quantity.svg";
import { useCart } from "../context/CartContext";
import { useEffect } from "react";

const AddToCartBtn = ({ product, isItemInCart, setIsItemInCart }) => {
  const {
    cart,
    addItemToCart,
    incrementProductAmount,
    decrementProductAmount,
  } = useCart();

  const addToCartBtn = (
    <div onClick={() => addItemToCart(product)} className="addToCartContainer">
      <img src={addToCartIcon} alt="cart icon" />
      <span>Add to Cart</span>
    </div>
  );
  const adjustProductBtn = (
    <div className="adjustProductContainer">
      <img
        onClick={() => decrementProductAmount(product)}
        src={decrementIcon}
        alt="minus symbol"
      />
      <span>{isItemInCart && isItemInCart.qty}</span>
      <img
        onClick={() => incrementProductAmount(product)}
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
