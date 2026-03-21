import React, { useState } from 'react';
import '../styles/navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <svg className="logo-icon" viewBox="0 0 40 40" fill="currentColor">
            <path d="M8 20 L20 8 L32 20 M12 20 L12 28 M28 20 L28 28 M20 8 L20 20 M12 28 L28 28"/>
          </svg>
          <span className="logo-text">STRUCTURE<span className="logo-accent">.</span></span>
        </div>

        <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <a href="#hero" className="nav-link">Home</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#works" className="nav-link">Portfolio</a>
          <a href="#clients" className="nav-link">Clients</a>
          <a href="#contact" className="nav-cta">Let's Connect</a>
        </div>

        <button className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
