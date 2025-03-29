import React, { useState } from "react";
import Navigation from "../components/Navigation";
import "./CSS/Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className="logo">Gear Hive</div>
      <button className="menu-toggle" onClick={toggleMenu}>
        {isMenuOpen ? "✖" : "☰"}
      </button>
      <nav className={`navigation ${isMenuOpen ? "active" : ""}`}>
        <Navigation />
      </nav>
    </header>
  );
};

export default Header;
