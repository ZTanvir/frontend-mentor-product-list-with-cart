import { useRef } from "react";
import iconRemoveItem from "../assets/images/icon-remove-item.svg";
import iconRemoveItemHover from "../assets/images/icon-remove-item-hover.svg";

const CartCard = ({ name, qty, price }) => {
  const totalPrice = qty * price;
  const cartRemoveIconEl = useRef();

  return (
    <section data-inline="space-between" className="cartItem-container">
      <div data-stack style={{ "--gutter": ".25rem" }}>
        <p className="cartItemName">{name}</p>
        <div data-inline style={{ "--gutter": ".5rem" }}>
          <span className="cartItemQty">{qty}x</span>
          <span className="cartItemPrice">@ {price}</span>
          <span className="cartItemTotal">${totalPrice}</span>
        </div>
      </div>
      <img
        onMouseOver={(e) =>
          (cartRemoveIconEl.current.src = iconRemoveItemHover)
        }
        onMouseOut={(e) => (cartRemoveIconEl.current.src = iconRemoveItem)}
        className="cartItemImg"
        ref={cartRemoveIconEl}
        src={iconRemoveItem}
        alt="remove item from cart"
      />
    </section>
  );
};
export default CartCard;
