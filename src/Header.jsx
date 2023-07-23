import React, { useState } from 'react';
import { Link } from 'react-scroll';
import Logo from '../src/assets/Logo.png';
import '../src/index.css';

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  // Agregamos una función para cerrar el menú al hacer clic en un enlace
  const handleLinkClick = () => {
    setShowMenu(false);
  };

  return (
    <header>
      <nav className="navbar">
        <div className="navbar-left">
          <img 
            src={Logo} 
            alt="Logo" 
          />
        </div>
        <div className={`navbar-right ${showMenu ? 'active' : ''}`}>
          <ul className="menu">
            <li><Link to="inicio" smooth={true} duration={500} onClick={handleLinkClick}>Inicio</Link></li>
            <li><Link to="services" smooth={true} duration={500} onClick={handleLinkClick}>Servicios</Link></li>
            <li><Link to="portfolio" smooth={true} duration={500} onClick={handleLinkClick}>Portafolio</Link></li>
            <li><Link to="contact" smooth={true} duration={500} onClick={handleLinkClick}>Contacto</Link></li>
          </ul>
        </div>
        <div className={`hamburger ${showMenu ? 'active' : ''}`} onClick={handleMenuClick}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </nav>
    </header>
  );
}

export default Header;
