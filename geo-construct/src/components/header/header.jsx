import React, { useState } from "react";
import "./header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="navbar">
        <div className="text-xs font-bold p-2">GEO-CONSTRUCT</div>
        <div className={`hamburger ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          <ul className="list">
            <a href="/"><li>Home</li></a>
            <a href="/services"><li>Services</li></a>
            <a href="/about"><li>About Us</li></a>
            <a href="/map"><li>Get Started</li></a>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
