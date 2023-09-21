import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { NavLink, useLocation } from 'react-router-dom';

import Logo from '../src/assets/Logo.png';
import es from '../src/assets/es.png';
import en from '../src/assets/en.png';
import pl from '../src/assets/pl.png';
import '../src/index.css';

function Header(props) {
  const { language, changeLanguage, showContactForm, setShowContactForm } = props;
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();

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

  const handleHomeClick = () => {
    setShowMenu(false);
    window.location.href = '/';
  };

  useEffect(() => {
    setShowMenu(false);
  }, [location]);

  return (
    <header>
      <nav className="navbar">
        <div className="navbar-left">
          <img 
            src={Logo} 
            alt="Logo" 
          />
          
        </div>
        
        <div>
        <div className={`hamburger ${showMenu ? 'active' : ''}`} onClick={handleMenuClick}>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </div>
        <div className={`navbar-center ${showMenu ? 'active' : ''}`}>
          
          <ul className="menu">
            {location.pathname === '/blog' || location.pathname === '/products' ? (
              <li>
                <a onClick={handleHomeClick}>
                  {language === 'es' && 'Inicio'}
                  {language === 'en' && 'Home'}
                  {language === 'pl' && 'Strona główna'}
                </a>
              </li>
            ) : (
              <>
                <li>
                  <Link to="inicio" smooth={true} duration={500} onClick={handleLinkClick}>
                    {language === 'es' && 'Inicio'}
                    {language === 'en' && 'Home'}
                    {language === 'pl' && 'Strona główna'}
                  </Link>
                </li>
                <li>
                  <NavLink to="/products" onClick={handleLinkClick}> 
                    {language === 'es' && 'Productos'}
                    {language === 'en' && 'Products'}
                    {language === 'pl' && 'Blog'}
                  </NavLink>
                </li>
                <li>
                  <Link to="services" smooth={true} duration={500} onClick={handleLinkClick}>
                    {language === 'es' && 'Servicios'}
                    {language === 'en' && 'Services'}
                    {language === 'pl' && 'Usługi'}
                  </Link>
                </li>
                <li>
                  <Link to="portfolio" smooth={true} duration={500} onClick={handleLinkClick}>
                    {language === 'es' && 'Portafolio'}
                    {language === 'en' && 'Portfolio'}
                    {language === 'pl' && 'Portfolio'}
                  </Link>
                </li>
                <li>
                  <Link to="contact" smooth={true} duration={500} onClick={handleContactLinkClick}>
                    {language === 'es' && 'Contacto'}
                    {language === 'en' && 'Contact'}
                    {language === 'pl' && 'Kontakt'}
                  </Link>
                </li>
                <li>
                  <NavLink to="/blog" onClick={handleLinkClick}> 
                    {language === 'es' && 'Blog'}
                    {language === 'en' && 'Blog'}
                    {language === 'pl' && 'Blog'}
                  </NavLink>
                </li>
                
              </>
            )}
          </ul>          
        </div>  
        </div>  
        
        
        
      <div className="language-buttons navbar-right ">
        
          <img 
            src={es} 
            alt="Logo" 
            onClick={() => changeLanguage('es') }
            style={{width:'30px'}}
          />
          <img 
            src={en} 
            alt="Logo" 
            onClick={() => changeLanguage('en')}
            style={{width:'30px'}}
          /><img 
            src={pl} 
            alt="Logo" 
            onClick={() => changeLanguage('pl')}
            style={{width:'30px', display: 'none'}}
            
          />
        
      </div>
      </nav>
      
    </header>
  );
}

export default Header;
