import React from "react";
import { Link } from "react-router-dom";
import "./CSS/ProductCard.css";

const ProductCard = ({ product, showCartButton }) => {
  return (
    <div className="product">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price.toFixed(2)}</p>
      {showCartButton ? (
        <Link to="/cart" className="btn">
          Add to Cart
        </Link>
      ) : (
        <Link to="/shop" className="btn">
          View More
        </Link>
      )}
    </div>
  );
};

export default ProductCard;
