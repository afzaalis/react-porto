import React, { useState } from 'react';
import './Navbar.css';
import './Popup.css';
import './Contact.css'
import Contact from './Contact';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const toggleContact = () => {
    setIsContactOpen(!isContactOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img
          src="/icon/afz logo.png"
          alt="afz"
          width="40px"
          style={{ borderRadius: '8px' }}
        />
      </div>
             
      <div className="navbar-toggle" onClick={toggleNavbar}>
        ☰
      </div>
      <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#contact" onClick={toggleContact}>Contact</a></li>
      </ul>

      {isContactOpen && <Contact toggleContact={toggleContact} />}
    </nav>
  );
};

export default Navbar;
