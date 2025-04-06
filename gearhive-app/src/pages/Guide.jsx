import React from "react";
import "../pages/CSS/Guide.css";

const Guide = () => {
  return (
    <div>
      <main>
        <section className="guide">
          <h1>Gear Hive Blog</h1>
          <p>
            Stay up to date with the latest industry trends, tool guides, and
            professional tips.
          </p>

          <article className="blog-post">
            <img
              src="images/screwdriver-set.jpg"
              alt="How to Choose the Right Tools"
            />
            <h2>How to Choose the Right Tools for Your Job</h2>
            <p>
              Choosing the right tools can improve efficiency and safety on the
              job site. Learn how to select the best tools for your needs.
            </p>
            <button className="btn" onClick={() => alert("Read More clicked")}>
              Read More
            </button>
          </article>

          <article className="blog-post">
            <img src="images/Hardhat.jpg" alt="Safety Tips" />
            <h2>Top 10 Safety Tips for Construction Workers</h2>
            <p>
              Safety is the top priority for any professional. Follow these ten
              essential safety tips to ensure a secure work environment.
            </p>
            <button className="btn" onClick={() => alert("Read More clicked")}>
              Read More
            </button>
          </article>

          <article className="blog-post">
            <img src="images/power-drill.jpg" alt="Best Power Tools" />
            <h2>Best Power Tools for Professionals in 2025</h2>
            <p>
              We review the best power tools on the market and help you choose
              the best ones for your professional needs.
            </p>
            <button className="btn" onClick={() => alert("Read More clicked")}>
              Read More
            </button>
          </article>
        </section>
      </main>
    </div>
  );
};

export default Guide;
