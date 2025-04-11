const ProductCard = ({ product, addToCart }) => {
  //const imageSrc = `http://localhost:3001/api/products${product.image}`;
  const imageSrc = `http://localhost:3001${product.image}`; // ✅ correct path

  return (
    <div className="product">
      <img src={imageSrc} alt={product.name} />
      <h3>{product.name}</h3>
      <p>
        ${typeof product.price === "number" ? product.price.toFixed(2) : "N/A"}
      </p>
      <button onClick={() => addToCart(product)} className="btn">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
