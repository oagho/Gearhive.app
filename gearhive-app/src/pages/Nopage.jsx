import React from "react";
import "../pages/CSS/Nopage.css";

const Nopage = () => {
  return (
    <div>
      <main>
        <section className="nopage">
          <h1>404 - Page Not Found</h1>
          <p>Sorry, the page you are looking for does not exist.</p>
          <a href="/" className="btn">
            Go Back Home
          </a>
        </section>
      </main>
    </div>
  );
};

export default Nopage;
