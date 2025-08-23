import ActionBtn from "./button-red";
import orderConfirmIcon from "../assets/images/icon-order-confirmed.svg";
const OrderConfirm = ({ handleCloseModal, itemList }) => {
  return (
    <section className="order-confirm-container">
      <img src={orderConfirmIcon} alt="green circle with check mark on it" />
      <h2 className="title">Order Confirmed</h2>
      <p className="subtitle">We hope you enjoy your food!</p>
      <div className="product-list">
        <div className="products"></div>
      </div>
      <ActionBtn handleOnClick={handleCloseModal} text="Start New Order" />
    </section>
  );
};
export default OrderConfirm;
