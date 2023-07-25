import React from 'react';
import '../src/index.css';
import { Link } from 'react-scroll';
import ImgV from '../src/assets/bg.mp4'; // Importa el video en lugar de la imagen
import facebook from '../src/assets/fb.png'
import gmail from '../src/assets/gmail.png'
import whatsapp from '../src/assets/ws.png'

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
          fontSize: '40px',
          textAlign: 'left',
          padding: '20px',
          fontFamily: 'Forum, cursive',
        }}>          
          <p>
            Potencia tu Presencia Digital<br/> con DevRod:
            Desata el potencial <br/>de tus ideas a través de<br/>
            soluciones web de vanguardia y<br/>
            desarrollo de aplicaciones a medida.
          </p>
         
          <br/>
         
          <a href="https://www.facebook.com/profile.php?id=100094913480501" target="_blank" rel="noopener noreferrer">
              <img 
                src={facebook} 
                alt="facebook de devrod source by Icons8" 
                style={{width:'70px',}}
              />
          </a>   
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=devrod.developers@gmail.com" target="_blank" rel="noopener noreferrer">
              <img 
                src={gmail} 
                alt="gmail de devrod source by Icons8" 
                style={{width:'70px',}}
              />
          </a>
          <a href="https://wa.me/34644190529" target="_blank" rel="noopener noreferrer">
              <img 
                src={whatsapp} 
                alt="whatsapp de devrod source by Icons8" 
                style={{width:'70px',}}
              />
          </a>       
          
        </div>
      </section>
    </>
  );
}

export default Face;
