import React from 'react';
import '../src/index.css';
import { Link } from 'react-scroll';
import Img from '../src/assets/bg-5.jpeg';


function Face() {
  return (
    <>
      <section 
      id="inicio"
      style={{
        marginTop:'70px',
        backgroundImage: `url(${Img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '500px',
        padding: '50px',
        position: 'relative', // Añade posición relativa al contenedor para que los elementos internos respeten el posicionamiento
      }}>
        <Link to="header" smooth={true} duration={500}></Link>
        {/* Pseudo-elemento ::before para aplicar el fondo desenfocado */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backdropFilter: 'blur(8px)',
          zIndex: -1, // Coloca el pseudo-elemento detrás del contenido
        }} />
        <div style={{
          color: 'white',
          fontSize: '20px',
          textAlign: 'left',
          padding: '20px',
        }}>
          <h1>Hola somos DevRod</h1><br />
          <p>
            tu equipo de desarrolladores web<br />
            te brindamos la mejor experiencia en
            tus<br /> paginas web o programas web
          </p>
          <br/>
          <br/>
          TELEFONO: +34 644190529<br/>
          CORREO ELECTRONICO: jonath.josue@gmail.com
        </div>
      </section>
    </>
  );
}

export default Face;
