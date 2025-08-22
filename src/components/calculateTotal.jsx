const CalculateTotal = ({ items }) => {
  const totalPrice = items.reduce((acc, cur) => acc + cur.price * cur.qty, 0);
  return (
    <div data-inline="space-between">
      <span>Oder Total</span>
      <span className="cartItemsTotal">${totalPrice.toFixed(2)}</span>
    </div>
  );
};
export default CalculateTotal;
