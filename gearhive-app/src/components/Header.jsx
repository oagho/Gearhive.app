import React, { useState } from "react";
import Navigation from "../components/Navigation";
import "./CSS/Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header>
      <div className="logo">Gear Hive</div>
      <button className="menu-toggle" onClick={toggleMenu}>
        {isMenuOpen ? "✖" : "☰"}
      </button>
      <Navigation toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
    </header>
  );
};

export default Header;
