import { useCart } from "../context/CartContext";
import CartCard from "./cartCard";
import ActionBtn from "./button-red";
import iconCarbonNeutral from "../assets/images/icon-carbon-neutral.svg";

const Cart = () => {
  const { cart } = useCart();
  const totalPrice = cart.reduce((acc, cur) => acc + cur.price * cur.qty, 0);

  return (
    <>
      {cart.length ? (
        <div
          className="cart-container"
          data-stack
          style={{ "--gutter": "1rem" }}
        >
          <h2 className="your-cart-title">Your Cart {`(${cart.length})`}</h2>
          <div className="cart-products-container">
            {cart.map((item) => (
              <CartCard name={item.name} qty={item.qty} price={item.price} />
            ))}
          </div>
          <div data-inline="space-between">
            <span>Oder Total</span>
            <span className="cartItemsTotal">${totalPrice.toFixed(2)}</span>
          </div>
          <div
            data-center="center-children"
            data-inline
            style={{ "--gutter": "0.5rem" }}
            className="carbon-natural-container"
          >
            <img src={iconCarbonNeutral} alt="green tree" />
            <p>
              This is a{" "}
              <span className="carbon-natural-text-bold">carbon-natural</span>{" "}
              delivery
            </p>
          </div>
          <ActionBtn
            handleOnClick={() => {
              console.log("confirm order btn clicked");
            }}
            text="Confirm Order"
          />
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
export default Cart;
