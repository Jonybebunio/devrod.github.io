import React, { useState, useEffect } from 'react';
import '../src/index.css';
import { Link } from 'react-scroll';
import ImgV from '../src/assets/bg1.mp4';
import woman from '../src/assets/woman.png';

function Face(props) {
  const { language } = props;
  const [typedText, setTypedText] = useState('');

  const titleText = {
    es: "Bienvenido a Devrod: Donde las Ideas Se Convierten en Éxito en Línea",
    en: "Welcome to Devrod: Where Ideas Turn into Online Success At Devrod",
    pl: "Witaj w Devrod: Gdzie Pomysły Przemieniają Się w Sukces"
  };

  const originalText = {
    es: "somos los artesanos digitales que transforman tu visión en sitios y programas web que deslumbran. ",
    en: "we are the digital craftsmen who turn your vision into dazzling websites and web programs. ",
    pl: "jesteśmy cyfrowymi rzemieślnikami, którzy zamieniają Twoją wizję w olśniewające strony internetowe i programy internetowe."
  };

  const sdnParagraph ={
    es: "Ya sea que necesites una página web cautivadora o un programa web innovador, estamos aquí para hacer realidad tus ambiciones digitales.",
    en:"Whether you need a captivating webpage or an innovative web program, we're here to bring your digital ambitions to life",
    pl:"Bez względu na to, czy potrzebujesz fascynującej strony internetowej, czy innowacyjnego programu internetowego, jesteśmy tutaj, aby ożywić Twoje cyfrowe ambicje."
  }

  const subTitle = {
    es: "Donde las Ideas Se Convierten en Éxito en Línea",
    en: "Welcome to Devrod: Where Ideas Turn into Online Success At Devrod",
    pl: "Gdzie Pomysły Przemieniają Się w Sukces"
  };
  const {  setShowContactForm } = props;

  const handleContactLinkClick = () => {
    setShowContactForm(true);
    setShowMenu(false);
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
    {/*------------------------------------------------------------------------*/}
      <section 
        className='sectionFace'
        id="inicio"        
      >
        <Link to="header" smooth={true} duration={500}></Link>
        <video
          autoPlay
          loop
          muted
          style={{
            position: 'absolute',
            top: 120,
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
          <h1 style={{fontSize:"25px",}}>{titleText[language]}</h1>
          <p style={{fontSize:"25px",}}>{typedText}</p>
          <br/>
          <button onClick={handleContactLinkClick} style={{background:"#04414F", width:"189px", height:"60px",borderRadius:"16px",fontSize:"16px", color:"white"}}>Contact</button>

          <br/>
                 
        </div>
        <div style={{ width: '50%' }} className='secondScrm'>
          {/* Right side of the screen */}
          {/* Add content here or leave it empty for now */}
        </div>
      </section>
      {/*------------------------------------------------------------------------*/}
      <section 
        className='sectionFace'
               
      >
        <div className="text-container-face">
          <img src={woman} alt="" className='imgFace'/>                      
        </div>  

        <div className="text-container-face" >
          <p style={{fontSize:"25px",}}>{sdnParagraph[language]}</p>  
          <h1 style={{fontSize:"25px",}}>{subTitle[language]}</h1>                 
        </div>  
        
        
      </section>
      {/*------------------------------------------------------------------------*/}          
    </>
  );
}

export default Face;


