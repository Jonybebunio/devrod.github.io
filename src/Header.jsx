import React, { useState } from 'react';
import { Link } from 'react-scroll';
import Logo from '../src/assets/Logo.png';
import '../src/index.css';

function Header(props) {
  const { language, changeLanguage, showContactForm, setShowContactForm  } = props;
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  const handleLinkClick = () => {
    setShowMenu(false);
  };

  const handleContactLinkClick = () => {
    setShowContactForm(true);
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
            <li><Link to="inicio" smooth={true} duration={500} onClick={handleLinkClick}>
              {language === 'es' && 'Inicio'}
              {language === 'en' && 'Home'}
              {language === 'pl' && 'Strona główna'}
            </Link></li>
            <li><Link to="services" smooth={true} duration={500} onClick={handleLinkClick}>
              {language === 'es' && 'Servicios'}
              {language === 'en' && 'Services'}
              {language === 'pl' && 'Usługi'}
            </Link></li>
            <li><Link to="portfolio" smooth={true} duration={500} onClick={handleLinkClick}>
              {language === 'es' && 'Portafolio'}
              {language === 'en' && 'Portfolio'}
              {language === 'pl' && 'Portfolio'}
            </Link></li>
            <li><Link to="contact" smooth={true} duration={500} onClick={handleContactLinkClick}>
              {language === 'es' && 'Contacto'}
              {language === 'en' && 'Contact'}
              {language === 'pl' && 'Kontakt'}
            </Link></li>
          </ul>
        </div>
        <div className={`hamburger ${showMenu ? 'active' : ''}`} onClick={handleMenuClick}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </nav>
      <div className="language-buttons">
        <button onClick={() => changeLanguage('es')}>ES</button>
        <button onClick={() => changeLanguage('en')}>EN</button>
        <button onClick={() => changeLanguage('pl')}>PL</button>
      </div>
    </header>
  );
}

export default Header;
