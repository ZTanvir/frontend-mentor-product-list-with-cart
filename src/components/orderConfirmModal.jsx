const OrderConfirmModal = ({ modalRef, children }) => {
  return (
    <dialog ref={modalRef} id="orderConfirmModal">
      {children}
    </dialog>
  );
};
export default OrderConfirmModal;
