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
      
      paragraph: `
      En DevRod, estamos dedicados a dar vida a tus visiones tecnológicas. 
      Somos un equipo de apasionados expertos en desarrollo y diseño, comprometidos 
      en crear soluciones digitales excepcionales que superen tus expectativas.`,

      subtitle01: 'Nuestro Enfoque Único',
      paragraph01:`
      En DevRod, fusionamos creatividad y experiencia técnica
      para desarrollar programas y sitios web innovadores. 
      Creemos en el poder de la tecnología para transformar el mundo,
      y nuestro enfoque refleja esa creencia en cada proyecto que emprendemos.`,

      subtitle02: 'Valores que Impulsan Nuestro Éxito',
      paragraph02:`      
      Nuestro éxito se basa en valores sólidos. La excelencia, la creatividad 
      y la atención al detalle son los pilares de todo lo que hacemos. Nuestro 
      compromiso con la calidad se refleja en cada línea de código y en cada diseño 
      cuidadosamente elaborado.`,     

      subtitle03: 'Experiencia y Pasión',
      paragraph03:`      
      Con un equipo experimentado en desarrollo de software y diseño web, hemos 
      trabajado en una variedad de proyectos desafiantes. Nuestra pasión por la 
      tecnología y la innovación nos impulsa a continuar superándonos y entregando 
      soluciones de primer nivel.`, 
      
      subtitle04: 'Nuestro Compromiso',
      paragraph04:`      
      En DevRod, no solo construimos programas y sitios web, sino también relaciones 
      sólidas y duraderas. Estamos aquí para ser tu socio tecnológico confiable, 
      trabajando juntos para convertir tus ideas en realidad digital.`,    
      
      subtitle05: 'Únete a Nuestra Historia',
      paragraph05:`      
      Te invitamos a ser parte de la historia de DevRod. Si estás buscando soluciones 
      digitales que marquen la diferencia, estamos aquí para escucharte, colaborar contigo 
      y llevar tus proyectos al siguiente nivel.`, 
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
          <animated.h3 style={textAnimation}>{traducciones[language].subtitle01}</animated.h3>
          <animated.p style={textAnimation}>{traducciones[language].paragraph01}</animated.p>
          <animated.h3 style={textAnimation}>{traducciones[language].subtitle02}</animated.h3>
          <animated.p style={textAnimation}>{traducciones[language].paragraph02}</animated.p>
          <animated.h3 style={textAnimation}>{traducciones[language].subtitle03}</animated.h3>
          <animated.p style={textAnimation}>{traducciones[language].paragraph03}</animated.p>
          <animated.h3 style={textAnimation}>{traducciones[language].subtitle04}</animated.h3>
          <animated.p style={textAnimation}>{traducciones[language].paragraph04}</animated.p>
          <animated.h3 style={textAnimation}>{traducciones[language].subtitle05}</animated.h3>
          <animated.p style={textAnimation}>{traducciones[language].paragraph05}</animated.p>
          <animated.h2 style={textAnimation}>{traducciones[language].additionalTitle}</animated.h2>
        </div>
        <div className="image-container" style={{ flex: '1', margin: '0 10px', textAlign: 'center' }}>
          <animated.img src={Img} alt="Imagen" style={{ maxWidth: '40%', ...imageAnimation }} />
        </div>
      </section>
    </Element>
  );
}

export default Acerca;
