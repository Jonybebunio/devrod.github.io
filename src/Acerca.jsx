import React from 'react';
import { Link } from 'react-scroll';
import '../src/index.css';
import Img from '../src/assets/Logo2.png';

function Acerca() {
  return (
    <section
      id="acerca"
      className="about-section"
      style={{
        display: 'flex',
        flexDirection: 'row', // Dividir en filas para pantallas grandes
        margin: '30px',
      }}
    >
      <Link to="acerca" smooth={true} duration={500}></Link>
      <div className="text-container" style={{ flex: '1', margin: '0 10px' }}>
        <h2>CONÓCENOS</h2>
        <br /><br />
        <h3>Soluciones de diseño, no solo imágenes</h3>
        <p>
          Nuestro equipo de UI/UX hacen que tu web luzca estupenda<br />
          y nuestros programadores hacen que tu web sea desarrollada<br />
          con las últimas tecnologías en programación web
        </p>
        <h2>Piensa en grande, Piensa en DevRod!</h2>
      </div>
      <div
        className="image-container"
        style={{ flex: '1', margin: '0 10px', textAlign: 'center' }}
      >
        {/* Aquí puedes agregar la imagen */}
        <img src={Img} alt="Imagen" style={{ maxWidth: '100%' }} />
      </div>
    </section>
  );
}

export default Acerca;
