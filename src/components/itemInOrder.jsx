const ItemInOrder = ({ item }) => {
  return (
    <section
      className="product"
      data-inline="space-between"
      style={{ "--gutter": "1rem" }}
    >
      <div data-inline style={{ "--gutter": "1rem" }}>
        <img
          className="item-image"
          src={`src/${item.image.thumbnail}`}
          alt={item.name}
        />
        <div data-stack>
          <p className="item-name">{item.name}</p>
          <p data-inline>
            <span className="item-quantity">{item.qty}x </span>
            <span className="item-price">@{item.price.toFixed(2)}</span>
          </p>
        </div>
      </div>
      <div className="total">{(item.qty * item.price).toFixed(2)}</div>
    </section>
  );
};
export default ItemInOrder;
