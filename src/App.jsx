import React, {useState} from 'react';
import Header from '../src/Header';
import Face from '../src/Face';
import Services from '../src/Services';
import Acerca from '../src/Acerca';
import Process from '../src/Process';
import Portfolio from '../src/Portfolio';
import Contact from '../src/Contact';
import Footer from '../src/Footer';

import '../src/index.css';

function App() {

  const [showContactForm, setShowContactForm] = useState(false);
  const [language, setLanguage] = useState('es');

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <div className="App">
      <Header 
        showContactForm={showContactForm} setShowContactForm={setShowContactForm}
        language={language} changeLanguage={changeLanguage} />
      <Face  language={language}/>
      <section style={{
       //   backgroundImage: `url(${Img})`,
       //   background: '#5f9ea0',
       //   backgroundPosition: 'center',        
          background: 'white', // Aplica el gradiente como una cadena    
          margin: '0', // Eliminar el margen
          padding: '0', // Eliminar el relleno
          
        }}>
        <Services language={language} />
      </section>
      <section >
        <Acerca  language={language}/>
      </section>
      <section style={{background: 'linear-gradient(to right, #0b3d94, #281541)',}} >
        <Process  language={language} />
      </section>
      
      <Portfolio  language={language}/>
      <section style={{background: 'linear-gradient(to right, #0b3d94, #281541)',}} >
        <Contact showContactForm={showContactForm} setShowContactForm={setShowContactForm} language={language}/>
      </section>
        
      
      <Footer />
    </div>
  );
}

export default App;
