const ProductCard = ({ product }) => {
  return (
    <section className="product-card-container">
      <picture>
        <source
          media="(min-width:900px)"
          srcSet={`./src/${product.image.desktop}`}
        />
        <source
          media="(min-width:650px)"
          srcSet={`./src/${product.image.tablet}`}
        />
        <img src={`./src/${product.image.mobile}`} alt={product.name} />
      </picture>
      <div className="itemInfo">
        <h2 className="itemName">{product.name}</h2>
        <p className="itemCategory">{product.category}</p>
        <p className="itemPrice">{product.price}</p>
      </div>
    </section>
  );
};
export default ProductCard;
