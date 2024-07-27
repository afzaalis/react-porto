import React, { useState } from 'react';
import './Navbar.css';
import './Popup.css'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };



  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img
          src="/icon/afz logo.png"
          alt="afz"
          width='40px'
          style={{ borderRadius: '8px' }}
        />
      </div>
             
      <div className="navbar-toggle" onClick={toggleNavbar}>
        ☰
      </div>
      <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <li><a href="">Home</a></li>
        <li><a href="">Contact</a></li>
      </ul>

    </nav>
  );
};
