import React from "react";

const reviews = [
  {
    name: "Alicia M.",
    image: "/images/pasian.jpg",
    alt: "Customer Review 1",
    text: "Gear Hive’s tools helped me build my contracting business from the ground up. Amazing quality and service!",
  },
  {
    name: "Chris D.",
    image: "/images/pblackwoman1.jpg",
    alt: "Customer Review 2",
    text: "Their kits are perfect for apprentices. Gear Hive gets what tradespeople actually need.",
  },
  {
    name: "Sharon L.",
    image: "/images/pwhite.jpg",
    alt: "Customer Review 3",
    text: "Quick delivery, great tools, and the customer support is top-notch. Highly recommend.",
  },
];

const CustomerReviews = () => {
  return (
    <section className="customer-reviews">
      <h2>What Our Customers Say</h2>
      <div className="founders">
        {reviews.map((review, index) => (
          <div className="review-card" key={index}>
            <img src={process.env.PUBLIC_URL + review.image} alt={review.alt} />
            <h3>{review.name}</h3>
            <p>{review.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
