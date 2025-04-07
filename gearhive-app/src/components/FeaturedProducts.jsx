import React, { useState, useEffect } from "react";

const FeaturedProducts = ({ apiUrl, numProducts = 4 }) => {
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        let products = [];
        if (Array.isArray(data)) {
          products = data;
        } else if (
          data &&
          typeof data === "object" &&
          Array.isArray(data.products)
        ) {
          products = data.products;
        } else {
          console.error("❌ Unexpected data format:", data);
          return;
        }

        // Shuffle the products and take the first numProducts
        const shuffled = products
          .sort(() => 0.5 - Math.random())
          .slice(0, numProducts);
        setFeaturedProducts(shuffled);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [apiUrl, numProducts]);

  return (
    <section className="featured-products">
      <h2>Featured Products</h2>
      <div className="products-grid" id="featured-products">
        {featuredProducts.length > 0 ? (
          featuredProducts.map((product, idx) => (
            <div key={idx} className="product">
              <img
                src={`https://gearhiveserver.onrender.com${product.image}`}
                alt={product.name}
              />
              <h3>{product.name}</h3>
              <p>${product.price.toFixed(2)}</p>
              <a href="/shop" className="btn">
                View More
              </a>
            </div>
          ))
        ) : (
          <p>Loading featured products...</p>
        )}
      </div>
    </section>
  );
};

export default FeaturedProducts;
