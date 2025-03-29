// Navigation.jsx
import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./CSS/Navigation.css";

const Navigation = () => {
  const toggleNav = () => {
    const navMenu = document.querySelector(".nav-menu");
    const navToggle = document.querySelector(".nav-toggle");
    navMenu.classList.toggle("active");
    navToggle.textContent = navMenu.classList.contains("active") ? "✖" : "☰";
  };

  return (
    <nav className="nav-menu">
      <button className="nav-toggle" onClick={toggleNav}>
        ☰
      </button>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
        <li>
          <Link to="/checkout">Checkout</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
        <li>
          <Link to="/guide">User Guide</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
