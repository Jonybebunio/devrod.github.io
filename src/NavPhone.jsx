import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { NavLink, useLocation } from 'react-router-dom';
import inicio from '../src/assets/products/inicio.png';
import product from '../src/assets/products/product.png';
import blog from '../src/assets/products/blog.png';
import contact from '../src/assets/products/contact.png';
import '../src/index.css';

function NavPhone(props) {
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
  };

  useEffect(() => {
    setShowMenu(false);
  }, [location]);

  return (
    <nav className="navbarUI">
      <ul className='ulUI'>
        <li>
          <NavLink exact to="/" activeClassName="active" onClick={handleLinkClick}>
            <img src={inicio} alt="" width={'35px'} />
          </NavLink>
        </li>

        <li>
          <NavLink to="/products" activeClassName="active" onClick={handleLinkClick}>
            <img src={product} alt="" width={'35px'} />
          </NavLink>
        </li>
        <li>
          <NavLink to="/blog" activeClassName="active" onClick={handleLinkClick}>
            <img src={blog} alt="" width={'35px'} />
          </NavLink>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500} onClick={handleContactLinkClick}>
            <img src={contact} alt="" width={'35px'} />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavPhone;
