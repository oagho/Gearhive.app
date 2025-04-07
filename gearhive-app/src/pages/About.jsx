import React from "react";
import FounderList from "../components/FounderList";
import CustomerReviews from "../components/CustomerReviews";
import Certifications from "../components/Certifications";
import "../pages/CSS/About.css";

const About = () => {
  return (
    <div>
      <main>
        <section className="hero about-hero">
          <div className="about-hero-text">
            <h1>About Gear Hive</h1>
            <p>
              Behind every great tool is a hardworking team. Here's our story.
            </p>
          </div>
        </section>

        <section className="about">
          <h1>About Gear Hive</h1>
          <p>
            Gear Hive is a trusted provider of high-quality tools and equipment
            designed for professionals and DIY enthusiasts alike. We pride
            ourselves on delivering durable and reliable tools that empower our
            customers to complete any project with confidence.
          </p>
          <div class="about-grid">
            <div class="about-content">
              <h2>Our Story</h2>
              <p>
                Founded in 2025, Gear Hive was built on a passion for
                craftsmanship and engineering excellence. What started in a
                small workshop has now grown into a well-respected brand that
                serves thousands of professionals worldwide.
              </p>
              <p>
                We continuously innovate to ensure our tools meet the highest
                industry standards while maintaining affordability.
              </p>
            </div>
            <div class="about-image">
              <img src="images/con1.jpg" alt="About Gear Hive" />
            </div>
          </div>

          <h2>Why Choose Us?</h2>
          <ul>
            <li>Superior quality tools and equipment</li>
            <li>Affordable pricing for professionals and hobbyists</li>
            <li>Exceptional customer service and support</li>
            <li>Fast and reliable shipping</li>
            <li>Extensive selection of tools for all industries</li>
          </ul>

          <h2>Vision & Mission</h2>
          <p>
            <strong>Our Vision:</strong> To become the most innovative and
            trusted brand in the tools and equipment industry worldwide.
          </p>
          <p>
            <strong>Our Mission:</strong> To empower workers across industries
            with reliable tools, knowledge, and support to elevate their craft
            and safety.
          </p>

          <Certifications />
          <FounderList />
          <CustomerReviews />
          <h2>Company Timeline</h2>
          <ul>
            <li>
              <strong>2025:</strong> Gear Hive is founded in a small garage in
              South Carolina.
            </li>
            <li>
              <strong>2026:</strong> Launched eCommerce platform and first 100
              products.
            </li>
            <li>
              <strong>2027:</strong> Reached 10,000 customers; expanded into B2B
              partnerships.
            </li>
            <li>
              <strong>2028:</strong> Introduced eco-friendly packaging and
              logistics.
            </li>
            <li>
              <strong>2029:</strong> Recognized as a top tool supplier in the
              Southeast.
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default About;
