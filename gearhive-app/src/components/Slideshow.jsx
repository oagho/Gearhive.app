import React, { useState, useEffect } from "react";

const Slideshow = ({ interval = 2000 }) => {
  const [index, setIndex] = useState(0);

  // Move the images array into the slideshow component
  const images = [
    process.env.PUBLIC_URL + "/images/slide1.jpg",
    process.env.PUBLIC_URL + "/images/slide2.jpg",
    process.env.PUBLIC_URL + "/images/slide3.jpg",
    process.env.PUBLIC_URL + "/images/slide4.jpg",
  ];

  useEffect(() => {
    const changeBackground = () => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
    const intervalId = setInterval(changeBackground, interval);
    return () => clearInterval(intervalId);
  }, [images.length, interval]);

  const handleNext = () => setIndex((index + 1) % images.length);
  const handlePrev = () =>
    setIndex((index - 1 + images.length) % images.length);

  return (
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
  );
};

export default Slideshow;
