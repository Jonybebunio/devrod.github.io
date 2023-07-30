import React, { useEffect, useState } from 'react';
import { Link, Element } from 'react-scroll';
import { useSpring, animated } from 'react-spring';
import Img from '../src/assets/Logo2.png';

function Acerca({ language }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('acerca');
      if (element) {
        const rect = element.getBoundingClientRect();
        setIsVisible(rect.top <= window.innerHeight * 0.5);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const textAnimation = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
    config: { duration: 1000 },
  });

  const imageAnimation = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'scale(1)' : 'scale(0.8)',
    config: { duration: 1000 },
  });

  const traducciones = {
    es: {
      title: 'CONÓCENOS',
      subtitle: 'Soluciones de diseño, no solo imágenes.',
      paragraph: `Nuestro equipo de UI/UX hacen que tu web luzca estupenda
                  y nuestros programadores hacen que tu web sea desarrollada
                  con las últimas tecnologías en programación web.`,
      additionalTitle: 'Piensa en grande, Piensa en DevRod!',
    },
    en: {
      title: 'ABOUT US',
      subtitle: 'Design solutions, not just images.',
      paragraph: `Our UI/UX team makes your website look great,
                  and our programmers develop your website
                  with the latest web programming technologies.`,
      additionalTitle: 'Think big, Think DevRod!',
    },
    pl: {
      title: 'O NAS',
      subtitle: 'Rozwiązania projektowe, nie tylko obrazy.',
      paragraph: `Nasz zespół UI/UX sprawia, że Twoja strona internetowa prezentuje się świetnie,
                  a nasi programiści tworzą ją z wykorzystaniem najnowszych technologii
                  w zakresie programowania stron internetowych.`,
      additionalTitle: 'Myśl wielko, Myśl DevRod!',
    },
  };

  return (
    <Element name="acerca">
      <section id="acerca" className="about-section">
        <Link to="acerca" smooth={true} duration={500}></Link>
        <div className="text-container" style={{ flex: '1', margin: '0 10px' }}>
          <animated.h2 style={textAnimation}>{traducciones[language].title}</animated.h2>
          <br /><br />
          <animated.h3 style={textAnimation}>{traducciones[language].subtitle}</animated.h3>
          <animated.p style={textAnimation}>{traducciones[language].paragraph}</animated.p>
          <animated.h2 style={textAnimation}>{traducciones[language].additionalTitle}</animated.h2>
        </div>
        <div className="image-container" style={{ flex: '1', margin: '0 10px', textAlign: 'center' }}>
          <animated.img src={Img} alt="Imagen" style={{ maxWidth: '80%', ...imageAnimation }} />
        </div>
      </section>
    </Element>
  );
}

export default Acerca;
