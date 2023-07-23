import React from 'react';
import {Link} from 'react-scroll'
import '../src/index.css';

function Footer() {
  return (
    <footer id="footer">
      <Link to="footer" smooth={true} duration={500}></Link>
      <p>DevRod - Todos los derechos reservados</p>
    </footer>
  );
}

export default Footer;
