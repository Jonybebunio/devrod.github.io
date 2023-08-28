import React, { useState, useEffect } from 'react';
import '../src/index.css';
import { Link } from 'react-scroll';
import ImgV from '../src/assets/bg1.mp4';
import facebook from '../src/assets/fb.png';
import gmail from '../src/assets/gmail.png';
import whatsapp from '../src/assets/ws.png';

function Face(props) {
  const { language } = props;
  const [typedText, setTypedText] = useState('');

  const originalText = {
    es: "Bienvenido a Devrod: Donde las Ideas Se Convierten en Éxito en Línea En Devrod, somos los artesanos digitales que transforman tu visión en sitios y programas web que deslumbran. Ya sea que necesites una página web cautivadora o un programa web innovador, estamos aquí para hacer realidad tus ambiciones digitales.",
    en: "Empower your Digital Presence with DevRod: Unleash the potential of your ideas through cutting-edge web solutions and custom application development.",
    pl: "Wzmocnij swoją obecność cyfrową z DevRod: Uwalniaj potencjał swoich pomysłów poprzez nowoczesne rozwiązania internetowe i tworzenie niestandardowych aplikacji."
  };

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < originalText[language].length) {
        setTypedText(originalText[language].slice(0, index + 1));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 2);

    return () => {
      clearInterval(typingInterval);
    };
  }, [language]);

  return (
    <>
      <section 
        id="inicio"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          padding: '11px',
          position: 'relative',
        }}
      >
        <Link to="header" smooth={true} duration={500}></Link>
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
            zIndex: -1,
          }}
        >
          <source src={ImgV} type="video/mp4" />
        </video>
        <div className="text-container-face">
          <p style={{fontSize:"25px",}}>{typedText}</p>
          <br/>
          <a href="https://www.facebook.com/profile.php?id=100094913480501" target="_blank" rel="noopener noreferrer">
            <img 
              src={facebook} 
              alt={language === 'es' ? "facebook de devrod source by Icons8" : language === 'en' ? "Devrod's Facebook source by Icons8" : "Devrod's Facebook źródło przez Icons8"}
              style={{ width: '40px' }}
            />
          </a>   
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=devrod.developers@gmail.com" target="_blank" rel="noopener noreferrer">
            <img 
              src={gmail} 
              alt={language === 'es' ? "gmail de devrod source by Icons8" : language === 'en' ? "Devrod's Gmail source by Icons8" : "Devrod's Gmail źródło przez Icons8"}
              style={{ width: '40px' }}
            />
          </a>
          <a href="https://wa.me/34644190529" target="_blank" rel="noopener noreferrer">
            <img 
              src={whatsapp} 
              alt={language === 'es' ? "whatsapp de devrod source by Icons8" : language === 'en' ? "Devrod's Whatsapp source by Icons8" : "Devrod's Whatsapp źródło przez Icons8"}
              style={{ width: '40px' }}
            />
          </a>       
        </div>
        <div style={{ width: '50%' }}>
          {/* Right side of the screen */}
          {/* Add content here or leave it empty for now */}
        </div>
      </section>
    </>
  );
}

export default Face;
