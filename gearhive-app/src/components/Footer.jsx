// Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./CSS/Footer.css";

const Footer = () => {
  return (
    <footer>
      <p>&copy; 2025 Gear Hive. All rights reserved.</p>
      <p>
        <Link to="/admin" className="footer-link">
          Admin Dashboard
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
