// Updated Home.jsx with Correct State Initialization for Featured Products
import React, { useEffect, useState } from "react";
import "../pages/CSS/Home.css";

const Home = ({ interval = 5000 }) => {
  const [index, setIndex] = useState(0);
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const images = [
    process.env.PUBLIC_URL + "/images/slide1.jpg",
    process.env.PUBLIC_URL + "/images/slide2.jpg",
    process.env.PUBLIC_URL + "/images/slide3.jpg",
    process.env.PUBLIC_URL + "/images/slide4.jpg",
  ];

  // Fetch products from the Shop API link
  // Updated Home.jsx with Data Type Check
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://oagho.github.io/csce242/project/part6/data/products.json"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log("Fetched Products:", data);

        // Check if data is an object or array
        if (Array.isArray(data)) {
          const shuffled = data.sort(() => 0.5 - Math.random()).slice(0, 4);
          setFeaturedProducts(shuffled);
        } else if (
          data &&
          typeof data === "object" &&
          Array.isArray(data.products)
        ) {
          const shuffled = data.products
            .sort(() => 0.5 - Math.random())
            .slice(0, 4);
          setFeaturedProducts(shuffled);
        } else {
          console.error("❌ Unexpected data format:", data);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const changeBackground = () => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
    const intervalId = setInterval(changeBackground, interval);
    return () => clearInterval(intervalId);
  }, [index, interval, images.length]);

  const handleNext = () => setIndex((index + 1) % images.length);
  const handlePrev = () =>
    setIndex((index - 1 + images.length) % images.length);

  return (
    <div>
      <main>
        <section
          className="hero"
          id="hero"
          style={{
            backgroundImage: `url(${images[index]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="slideshow-overlay">
            <h1>Welcome to Gear Hive</h1>
            <p>Your trusted source for tools and equipment.</p>
            <a href="/shop" className="btn">
              Shop Now
            </a>
            <div className="slideshow-controls">
              <button onClick={handlePrev}>&lt;</button>
              <button onClick={handleNext}>&gt;</button>
            </div>
          </div>
        </section>

        <section className="featured-products">
          <h2>Featured Products</h2>
          <div className="products-grid" id="featured-products">
            {featuredProducts.length > 0 ? (
              featuredProducts.map((product, idx) => (
                <div key={idx} className="product">
                  <img
                    src={`https://oagho.github.io/csce242/project/part6/${product.image}`}
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

        <section className="shop-by-industry">
          <h2>Shop by Industry</h2>
          <div className="products-grid">
            <div className="product">
              <img
                src={process.env.PUBLIC_URL + "/images/plumber.jpg"}
                alt="Plumbing"
              />
              <h3>Plumbing</h3>
              <a href="/guide" className="btn">
                View More
              </a>
            </div>
            <div className="product">
              <img
                src={process.env.PUBLIC_URL + "/images/capentry.jpg"}
                alt="Carpenter"
              />
              <h3>Carpenter</h3>
              <a href="/guide" className="btn">
                View More
              </a>
            </div>
            <div className="product">
              <img
                src={process.env.PUBLIC_URL + "/images/hvac.jpg"}
                alt="HVAC Technician"
              />
              <h3>HVAC Technician</h3>
              <a href="/guide" className="btn">
                View More
              </a>
            </div>
            <div className="product">
              <img
                src={process.env.PUBLIC_URL + "/images/electrician.jpg"}
                alt="Electrician"
              />
              <h3>Electrician</h3>
              <a href="/guide" className="btn">
                View More
              </a>
            </div>
          </div>
        </section>

        <section className="updates">
          <h2>Latest Updates</h2>
          <p>
            Check out our newest tools and latest industry insights on our blog.
          </p>
          <a href="/blog" className="btn">
            Read More
          </a>
        </section>
      </main>
    </div>
  );
};

export default Home;
