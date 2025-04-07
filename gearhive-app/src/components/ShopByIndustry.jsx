import React from "react";

const ShopByIndustry = () => {
  const industries = [
    { name: "Plumbing", image: "/images/plumber.jpg", alt: "Plumbing" },
    { name: "Carpenter", image: "/images/capentry.jpg", alt: "Carpenter" },
    {
      name: "HVAC Technician",
      image: "/images/hvac.jpg",
      alt: "HVAC Technician",
    },
    {
      name: "Electrician",
      image: "/images/electrician.jpg",
      alt: "Electrician",
    },
  ];

  return (
    <section className="shop-by-industry">
      <h2>Shop by Industry</h2>
      <div className="products-grid">
        {industries.map((industry, index) => (
          <div key={index} className="product">
            <img
              src={process.env.PUBLIC_URL + industry.image}
              alt={industry.alt}
            />
            <h3>{industry.name}</h3>
            <a href="/guide" className="btn">
              View More
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShopByIndustry;
