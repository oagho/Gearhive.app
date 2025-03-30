import React from "react";
import { Link } from "react-router-dom";
import "./CSS/Navigation.css";

const Navigation = ({ toggleMenu, isMenuOpen }) => {
  return (
    <ul className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
      <li onClick={toggleMenu}>
        <Link to="/">Home</Link>
      </li>
      <li onClick={toggleMenu}>
        <Link to="/shop">Shop</Link>
      </li>
      <li onClick={toggleMenu}>
        <Link to="/cart">Cart</Link>
      </li>
      <li onClick={toggleMenu}>
        <Link to="/checkout">Checkout</Link>
      </li>
      <li onClick={toggleMenu}>
        <Link to="/about">About Us</Link>
      </li>
      <li onClick={toggleMenu}>
        <Link to="/contact">Contact Us</Link>
      </li>
      <li onClick={toggleMenu}>
        <Link to="/guide">User Guide</Link>
      </li>
    </ul>
  );
};

export default Navigation;
