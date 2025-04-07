import React from "react";

const certifications = [
  "ISO 9001 Certified Manufacturing",
  "EcoPack Sustainability Award 2028",
  "Top Rated Industrial Tools by ToolPro Magazine",
  "“Customer Favorite” Award - Southern Builders Council 2029",
];

const Certifications = () => {
  return (
    <section className="certifications">
      <h2>Certifications & Awards</h2>
      <ul>
        {certifications.map((certification, index) => (
          <li key={index}>{certification}</li>
        ))}
      </ul>
    </section>
  );
};

export default Certifications;
