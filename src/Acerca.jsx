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
      subtitle: 'Design Solutions, Not Just Images.',

      paragraph: `
      At DevRod, we're dedicated to bringing your technological visions to life.
      We're a team of passionate experts in development and design, committed
      to creating exceptional digital solutions that exceed your expectations.`,

      subtitle01: 'Our Unique Approach',
      paragraph01:`
      At DevRod, we blend creativity and technical expertise
      to develop innovative software and websites.
      We believe in the power of technology to transform the world,
      and our approach reflects that belief in every project we undertake.`,

      subtitle02: 'Values Driving Our Success',
      paragraph02:`      
      Our success is built on strong values. Excellence, creativity,
      and attention to detail are the cornerstones of everything we do.
      Our commitment to quality is reflected in every line of code and every
      carefully crafted design.`,

      subtitle03: 'Experience and Passion',
      paragraph03:`      
      With an experienced team in software development and web design,
      we've worked on a variety of challenging projects.
      Our passion for technology and innovation drives us to continue
      pushing our limits and delivering top-notch solutions.`,

      subtitle04: 'Our Commitment',
      paragraph04:`      
      At DevRod, we don't just build software programs and websites,
      but also strong and lasting relationships.
      We're here to be your reliable technology partner, working together
      to turn your ideas into digital reality.`,

      subtitle05: 'Join Our Story',
      paragraph05:`      
      We invite you to be a part of the DevRod story.
      If you're looking for digital solutions that make a difference,
      we're here to listen, collaborate with you,
      and take your projects to the next level.`,
      additionalTitle: 'Think Big, Think DevRod!',

    },
    pl: {
      title: 'POZNAJ NAS',
      subtitle: 'Rozwiązania Projektowe, Nie Tylko Obrazy.',

      paragraph: `
      W DevRod jesteśmy dedykowani ożywianiu Twoich technologicznych wizji.
      Jesteśmy zespołem pasjonatów ekspertów w dziedzinie rozwoju i projektowania,
      zaangażowanych w tworzenie wyjątkowych rozwiązań cyfrowych,
      które przekraczają Twoje oczekiwania.`,

      subtitle01: 'Nasze Unikalne Podejście',
      paragraph01:`
      W DevRod łączymy kreatywność i doświadczenie techniczne,
      aby rozwijać innowacyjne oprogramowanie i strony internetowe.
      Wierzymy w moc technologii w przekształcaniu świata,
      a nasze podejście odzwierciedla tę wiarę w każdym projekcie, który podejmujemy.`,

      subtitle02: 'Wartości Kształtujące Nasz Sukces',
      paragraph02:`      
      Nasz sukces opiera się na solidnych wartościach. Doskonałość, kreatywność
      i dbałość o szczegóły są fundamentami wszystkiego, co robimy.
      Nasze zaangażowanie w jakość odzwierciedla się w każdej linii kodu
      i każdym starannie wykonanym projekcie.`,

      subtitle03: 'Doświadczenie i Pasja',
      paragraph03:`      
      Dzięki doświadczonemu zespołowi w dziedzinie rozwoju oprogramowania i projektowania stron internetowych,
      pracowaliśmy nad różnorodnymi projektami wymagającymi wyzwania.
      Nasza pasja do technologii i innowacji napędza nas do nieustannego
      przekraczania własnych ograniczeń i dostarczania najwyższej jakości rozwiązań.`,

      subtitle04: 'Nasze Zaangażowanie',
      paragraph04:`      
      W DevRod nie tylko tworzymy programy i strony internetowe,
      ale także trwałe i silne relacje.
      Jesteśmy tutaj, aby być Twoim niezawodnym partnerem technologicznym,
      pracując razem, aby zamienić Twoje pomysły w cyfrową rzeczywistość.`,

      subtitle05: 'Dołącz do Naszej Historii',
      paragraph05:`      
      Zapraszamy Cię do wzięcia udziału w historii DevRod.
      Jeśli szukasz rozwiązań cyfrowych, które robią różnicę,
      jesteśmy tutaj, aby wysłuchać, współpracować z Tobą
      i podnieść Twoje projekty na wyższy poziom.`,
      additionalTitle: 'Mysląc Wielko, Myśl DevRod!',

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
