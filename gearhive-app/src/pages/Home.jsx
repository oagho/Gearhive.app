// Home.jsx
import React, { useEffect } from "react";
import "../pages/CSS/Home.css";

const Home = () => {
  useEffect(() => {
    const hero = document.getElementById("hero");
    const images = [
      "/images/slide1.jpg",
      "/images/slide2.jpg",
      "/images/slide3.jpg",
      "/images/slide4.jpg",
    ];
    let index = 0;

    const changeBackground = () => {
      hero.style.backgroundImage = `url(${images[index]})`;
      index = (index + 1) % images.length;
    };

    changeBackground();
    const interval = setInterval(changeBackground, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <main>
        <section className="hero" id="hero">
          <div className="slideshow-overlay">
            <h1>Welcome to Gear Hive</h1>
            <p>Your trusted source for tools and equipment.</p>
            <a href="/shop" className="btn">
              Shop Now
            </a>
          </div>
        </section>

        <section className="featured-products">
          <h2>Featured Products</h2>
          <div className="products-grid" id="featured-products"></div>
        </section>

        <section className="featured-products">
          <h2>Shop by Industry</h2>
          <div className="products-grid">
            <div className="product">
              <img src="/images/plumber.jpg" alt="Plumbing" />
              <h3>Plumbing</h3>
              <a href="/guide" className="btn">
                View More
              </a>
            </div>
            <div className="product">
              <img src="/images/capentry.jpg" alt="Carpenter" />
              <h3>Carpenter</h3>
              <a href="/guide" className="btn">
                View More
              </a>
            </div>
            <div className="product">
              <img src="/images/hvac.jpg" alt="HVAC Technician" />
              <h3>HVAC Technician</h3>
              <a href="/guide" className="btn">
                View More
              </a>
            </div>
            <div className="product">
              <img src="/images/electrician.jpg" alt="Electrician" />
              <h3>Electrician</h3>
              <a href="/guide" className="btn">
                View More
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
