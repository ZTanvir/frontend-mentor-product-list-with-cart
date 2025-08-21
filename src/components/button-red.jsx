const ActionBtn = ({ handleOnClick, text }) => {
  return (
    <button
      data-center="center-children"
      className="actionBtn"
      onClick={handleOnClick}
    >
      {text}
    </button>
  );
};
export default ActionBtn;
