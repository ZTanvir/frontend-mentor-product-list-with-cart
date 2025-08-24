import { useRef } from "react";
import iconRemoveItem from "../assets/images/icon-remove-item.svg";
import iconRemoveItemHover from "../assets/images/icon-remove-item-hover.svg";
import { useCart } from "../context/CartContext";

const CartCard = ({ name, qty, price }) => {
  const cartRemoveIconEl = useRef(null);
  const { removeItemFromCart } = useCart();
  const totalPrice = qty * price;

  return (
    <section
      data-stack
      style={{ "--gutter": "1.5rem" }}
      className="cartItem-container"
    >
      <div data-inline="space-between">
        <div data-stack style={{ "--gutter": ".25rem" }}>
          <h3 className="cartItemName">{name}</h3>
          <div data-inline style={{ "--gutter": ".5rem" }}>
            <span className="cartItemQty">{qty}x</span>
            <span className="cartItemPrice">@ {price.toFixed(2)}</span>
            <span className="cartItemTotal">${totalPrice.toFixed(2)}</span>
          </div>
        </div>
        <img
          onClick={() => removeItemFromCart(name)}
          onMouseOver={(e) =>
            (cartRemoveIconEl.current.src = iconRemoveItemHover)
          }
          onMouseOut={(e) => (cartRemoveIconEl.current.src = iconRemoveItem)}
          className="cartItemImg"
          ref={cartRemoveIconEl}
          src={iconRemoveItem}
          alt="remove item from cart"
        />
      </div>
      <div className="border-bottom-red-100"></div>
    </section>
  );
};
export default CartCard;
