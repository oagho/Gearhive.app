import React from "react";

const founders = [
  {
    name: "John Smith",
    role: "Mechanical Engineer",
    description:
      "John is a mechanical engineer with over 20 years of experience in tool manufacturing. His vision for accessible, high-quality tools drives Gear Hive's success.",
    image: "/images/pasian.jpg",
    alt: "John Smith",
  },
  {
    name: "Jane Doe",
    role: "Industrial Designer",
    description:
      "Jane is an industrial designer passionate about innovation. She ensures our tools are ergonomic and efficient.",
    image: "/images/pblackwoman1.jpg",
    alt: "Jane Doe",
  },
  {
    name: "Mike Johnson",
    role: "Business Strategist",
    description:
      "Mike, our business strategist, ensures Gear Hive continues to expand while maintaining excellence in product quality and service.",
    image: "/images/pwhite.jpg",
    alt: "Mike Johnson",
  },
];

const FounderList = () => {
  return (
    <section className="founders">
      <h2>Meet Our Founders</h2>
      <div className="founder-list">
        {founders.map((founder, index) => (
          <div className="founder" key={index}>
            <img
              src={process.env.PUBLIC_URL + founder.image}
              alt={founder.alt}
            />
            <h3>{founder.name}</h3>
            <p>{founder.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FounderList;
