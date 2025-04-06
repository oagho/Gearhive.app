// src/pages/Shop.jsx
import React, { useState, useEffect } from "react";
import ProductCard from "../components/productCard";
import "../pages/CSS/Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://gearhiveserver.onrender.com/api/products"
        );
        const data = await response.json();
        if (Array.isArray(data.products)) {
          setProducts(data.products);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const addToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product.name} added to cart!`);
  };

  return (
    <div>
      <main>
        <section className="shop">
          <h1>Shop Tools & Equipment</h1>
          <div className="products-grid">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                addToCart={addToCart}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Shop;
