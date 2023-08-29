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
    en: "Welcome to Devrod: Where Ideas Turn into Online Success At Devrod, we are the digital craftsmen who turn your vision into dazzling websites and web programs. Whether you need a captivating webpage or an innovative web program, we're here to bring your digital ambitions to life",
    pl: "Witaj w Devrod: Gdzie Pomysły Przemieniają Się w Sukces Online W Devrodzie jesteśmy cyfrowymi rzemieślnikami, którzy zamieniają Twoją wizję w olśniewające strony internetowe i programy internetowe. Bez względu na to, czy potrzebujesz fascynującej strony internetowej, czy innowacyjnego programu internetowego, jesteśmy tutaj, aby ożywić Twoje cyfrowe ambicje."
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
