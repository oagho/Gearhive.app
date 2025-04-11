import React, { useState, useEffect } from "react";
import ProductCard from "../components/productCard";
import AddToShop from "../components/AddToShop";
import "../pages/CSS/Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [showAddDialog, setShowAddDialog] = useState(false);

  const fetchProducts = async () => {
    try {
      //const response = await fetch("http://localhost:3001/api/products"); // change to localhost if testing
      const response = await fetch(
        "https://gearhiveserver.onrender.com/api/products"
      );
      const data = await response.json();
      if (Array.isArray(data.products)) {
        setProducts(data.products);
      } else if (Array.isArray(data)) {
        setProducts(data);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const openAddDialog = () => setShowAddDialog(true);
  const closeAddDialog = () => setShowAddDialog(false);

  const addToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItem = cart.find((item) => item._id === product._id);
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

          <button
            id="add-product"
            onClick={openAddDialog}
            className="btn"
            style={{ marginBottom: "1rem" }}
          >
            +
          </button>

          {showAddDialog && (
            <AddToShop
              closeDialog={closeAddDialog}
              onProductAdded={fetchProducts}
            />
          )}

          <div className="products-grid">
            {products.map((product) => (
              <ProductCard
                key={product._id}
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
