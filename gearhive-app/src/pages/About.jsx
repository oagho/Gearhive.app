import React from "react";
import "../pages/CSS/About.css";

const About = () => {
  return (
    <div>
      <main>
        <section class="hero about-hero">
          <div class="about-hero-text">
            <h1>About Gear Hive</h1>
            <p>
              Behind every great tool is a hardworking team. Here's our story.
            </p>
          </div>
        </section>
        <section class="about">
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
          <img
            src="images/con2.jpg"
            alt="Wide selection of tools"
            class="about-img"
          />
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

          <h2>What Our Customers Say</h2>
          <div class="founders">
            <div class="founder">
              <img src="images/pasian.jpg" alt="Customer Review 1" />
              <h3>Alicia M.</h3>
              <p>
                "Gear Hive’s tools helped me build my contracting business from
                the ground up. Amazing quality and service!"
              </p>
            </div>
            <div class="founder">
              <img src="images/pblackwoman1.jpg" alt="Customer Review 2" />
              <h3>Chris D.</h3>
              <p>
                "Their kits are perfect for apprentices. Gear Hive gets what
                tradespeople actually need."
              </p>
            </div>
            <div class="founder">
              <img src="images/pwhite.jpg" alt="Customer Review 3" />
              <h3>Sharon L.</h3>
              <p>
                "Quick delivery, great tools, and the customer support is
                top-notch. Highly recommend."
              </p>
            </div>
          </div>

          <h2>Certifications & Awards</h2>
          <ul>
            <li>ISO 9001 Certified Manufacturing</li>
            <li>EcoPack Sustainability Award 2028</li>
            <li>Top Rated Industrial Tools by ToolPro Magazine</li>
            <li>“Customer Favorite” Award - Southern Builders Council 2029</li>
          </ul>

          <blockquote
            style={{
              fontSize: "1.2rem",
              fontStyle: "italic",
              margin: "2rem 0",
              textAlign: "center",
            }}
          >
            "We don't just build tools — we build trust, reliability, and a
            legacy of craftsmanship." – Gear Hive Founders
          </blockquote>

          <h2>Meet Our Founders</h2>
          <div class="founders">
            <div class="founder">
              <img src="images/pasian.jpg" alt="John Smith" />
              <h3>John Smith</h3>
              <p>
                John is a mechanical engineer with over 20 years of experience
                in tool manufacturing. His vision for accessible, high-quality
                tools drives Gear Hive's success.
              </p>
            </div>
            <div class="founder">
              <img src="images/pblackwoman1.jpg" alt="Jane Doe" />
              <h3>Jane Doe</h3>
              <p>
                Jane is an industrial designer passionate about innovation. She
                ensures our tools are ergonomic and efficient.
              </p>
            </div>
            <div class="founder">
              <img src="images/pwhite.jpg" alt="Mike Johnson" />
              <h3>Mike Johnson</h3>
              <p>
                Mike, our business strategist, ensures Gear Hive continues to
                expand while maintaining excellence in product quality and
                service.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
