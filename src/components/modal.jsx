const Modal = ({ modalRef, children }) => {
  const handleOutSideClick = (e) => {
    const dialogDimensions = modalRef.current.getBoundingClientRect();
    if (
      e.clientX < dialogDimensions.left ||
      e.clientX > dialogDimensions.right ||
      e.clientY < dialogDimensions.top ||
      e.clientY > dialogDimensions.bottom
    ) {
      modalRef.current.close();
    }
  };
  return (
    <dialog onClick={handleOutSideClick} ref={modalRef} id="orderConfirmModal">
      {children}
    </dialog>
  );
};
export default Modal;
