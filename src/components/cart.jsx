import { useCart } from "../context/CartContext";
import CartCard from "./cartCard";
import ActionBtn from "./button-red";
import CalculateTotal from "./calculateTotal";
import iconCarbonNeutral from "../assets/images/icon-carbon-neutral.svg";
import emptyCartImg from "../assets/images/illustration-empty-cart.svg";
import Modal from "./modal";
import OrderConfirm from "./orderConfirm";
import { useRef } from "react";

const Cart = () => {
  const { cart } = useCart();
  const modalRef = useRef(null);

  return (
    <div data-stack className="cart-container" style={{ "--gutter": "1rem" }}>
      <h2 className="your-cart-title">Your Cart {`(${cart.length})`}</h2>
      {cart.length ? (
        <div
          className="cart-with-product-container"
          data-stack
          style={{ "--gutter": "1rem" }}
        >
          <div className="cart-products-container">
            {cart.map((item) => (
              <CartCard
                key={item.id}
                name={item.name}
                qty={item.qty}
                price={item.price}
              />
            ))}
          </div>
          <CalculateTotal items={cart} />
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
            handleOnClick={() => modalRef.current.showModal()}
            text="Confirm Order"
          />
        </div>
      ) : (
        <div
          data-stack
          style={{ "--gutter": "1rem" }}
          className="empty-cart-container"
        >
          <img className="emptyCartImg" src={emptyCartImg} alt="empty cart." />
          <p data-center="center-text" className="emptyCartText">
            Your added items will appear here
          </p>
        </div>
      )}
      <Modal modalRef={modalRef}>
        <OrderConfirm
          handleCloseModal={() => modalRef.current.close()}
          itemList={cart}
        />
      </Modal>
    </div>
  );
};
export default Cart;
