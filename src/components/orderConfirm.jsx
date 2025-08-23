import ActionBtn from "./button-red";
import orderConfirmIcon from "../assets/images/icon-order-confirmed.svg";
import ItemInOrder from "./itemInOrder";
import CalculateTotal from "./calculateTotal";

const OrderConfirm = ({ handleCloseModal, itemList }) => {
  return (
    <section
      data-stack
      style={{ "--gutter": "1rem" }}
      className="order-confirm-container"
    >
      <img
        className="confirm-order-img"
        src={orderConfirmIcon}
        alt="green circle with check mark on it"
      />
      <div>
        <h2 className="title">Order Confirmed</h2>
        <p className="subtitle">We hope you enjoy your food!</p>
      </div>
      <div className="product-list">
        <div className="products" data-stack style={{ "--gutter": "1.2rem" }}>
          {itemList.map((item) => (
            <ItemInOrder item={item} />
          ))}
        </div>
        <CalculateTotal items={itemList} />
      </div>
      <ActionBtn handleOnClick={handleCloseModal} text="Start New Order" />
    </section>
  );
};
export default OrderConfirm;
