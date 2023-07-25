import React from 'react';
import '../src/index.css';
import { Link } from 'react-scroll';
import ImgV from '../src/assets/bg.mp4'; // Importa el video en lugar de la imagen

function Face() {
  return (
    <>
      <section 
        id="inicio"
        style={{
          marginTop:'70px',
          height: '100vh', // Ajusta la altura para que el video ocupe toda la pantalla
          padding: '50px',
          position: 'relative', // Añade posición relativa al contenedor para que los elementos internos respeten el posicionamiento
        }}
      >
        <Link to="header" smooth={true} duration={500}></Link>
        {/* Etiqueta de video para el fondo */}
        <video
          autoPlay
          loop
          muted
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: -1, // Coloca el video detrás del contenido
          }}
        >
          <source src={ImgV} type="video/mp4" />
        </video>
        <div style={{
          color: 'white',
          fontSize: '20px',
          textAlign: 'left',
          padding: '20px',
        }}>
          <h1>Hola somos DevRod</h1><br />
          <p>
            Potencia tu Presencia Digital con DevRod:<br/>
            Desata el potencial de tus ideas a través de<br/>
            soluciones web de vanguardia y<br/>
            desarrollo de aplicaciones a medida.
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
