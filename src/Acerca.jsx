import React, { useEffect, useState } from 'react';
import { Link, Element } from 'react-scroll';
import { useSpring, animated } from 'react-spring';
import Img from '../src/assets/Logo2.png';

function Acerca() {
  // Estado para controlar la visibilidad del componente en la vista
  const [isVisible, setIsVisible] = useState(false);

  // useEffect para detectar cuándo el componente está en la vista
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('acerca');
      if (element) {
        const rect = element.getBoundingClientRect();
        setIsVisible(rect.top <= window.innerHeight * 0.5); // Marca como visible cuando el componente está en el 50% superior de la ventana
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Ejecuta la función al cargar el componente para determinar si es visible inicialmente

    // Limpia el evento del listener al desmontar el componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Animaciones de texto e imagen utilizando react-spring
  const textAnimation = useSpring({
    opacity: isVisible ? 1 : 0, // Hace que el texto aparezca cuando está en la vista
    transform: isVisible ? 'translateY(0)' : 'translateY(20px)', // Aplica la animación de deslizamiento hacia arriba cuando entra en la vista
    config: { duration: 1000 },
  });

  const imageAnimation = useSpring({
    opacity: isVisible ? 1 : 0, // Hace que la imagen aparezca cuando está en la vista
    transform: isVisible ? 'scale(1)' : 'scale(0.8)', // Aplica una animación de escala para que la imagen aparezca gradualmente
    config: { duration: 1000 },
  });

  return (
    <Element name="acerca">
    <section id="acerca" className="about-section">
      {/* Enlace para el scroll */}
      <Link to="acerca" smooth={true} duration={500}></Link>
      <div className="text-container" style={{ flex: '1', margin: '0 10px' }}>
        {/* Título con animación */}
        <animated.h2 style={textAnimation}>CONÓCENOS</animated.h2>
        <br /><br />
        {/* Subtítulo con animación */}
        <animated.h3 style={textAnimation}>Soluciones de diseño, no solo imágenes.</animated.h3>
        {/* Párrafo con animación */}
        <animated.p style={textAnimation}>
          Nuestro equipo de UI/UX hacen que tu web luzca estupenda<br />
          y nuestros programadores hacen que tu web sea desarrollada<br />
          con las últimas tecnologías en programación web.
        </animated.p>
        {/* Título adicional con animación */}
        <animated.h2 style={textAnimation}>Piensa en grande, Piensa en DevRod!</animated.h2>
      </div>
      <div className="image-container" style={{ flex: '1', margin: '0 10px', textAlign: 'center' }}>
        {/* Aquí puedes agregar la imagen con animación */}
        <animated.img src={Img} alt="Imagen" style={{ maxWidth: '80%', ...imageAnimation }} />
      </div>
    </section>
  </Element>
  );
}

export default Acerca;
