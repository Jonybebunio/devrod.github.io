import React, {useState} from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Header from '../src/Header';
import Face from '../src/Face';
import Services from '../src/Services';
import Acerca from '../src/Acerca';
import Process from '../src/Process';
import Portfolio from '../src/Portfolio';
import Contact from '../src/Contact';
import Footer from '../src/Footer';
import Blog from '../src/Blog';
import Layout from '../src/Layout';
import Resenas from '../src/Resenas';
import Products from '../src/Products';
import NavPhone from '../src/NavPhone';

import '../src/index.css';

function App() {

  const [showContactForm, setShowContactForm] = useState(false);
  const [language, setLanguage] = useState('es');

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <Router>
      <div className="App">
        <Header 
          showContactForm={showContactForm} setShowContactForm={setShowContactForm}
          language={language} changeLanguage={changeLanguage} />
        <Routes>
          <Route path="/" element={
            <>
              <Face language={language} showContactForm={showContactForm} setShowContactForm={setShowContactForm}/>
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
              
              <section  >
                <Process language={language} />
              </section>
              <Portfolio language={language} />
              <section style={{background: 'linear-gradient(to right, #0b3d94, #281541)',}} >
                <Contact showContactForm={showContactForm} setShowContactForm={setShowContactForm} language={language}/>
              </section>
              <section >
                <Acerca language={language} />
              </section>
           </>
          }/>
         
          <Route 
            path="/blog/*" 
            element={
            <>
              <Layout showContactForm={showContactForm} setShowContactForm={setShowContactForm} language={language} changeLanguage={changeLanguage} showAllLinks={false} />
              <Contact showContactForm={showContactForm} setShowContactForm={setShowContactForm} language={language}/>
            </>            
            } 
          />        
          <Route 
            path ="/products/*" 
            element={
              <>
                <Products language={language} changeLanguage={changeLanguage}/>
                <Contact showContactForm={showContactForm} setShowContactForm={setShowContactForm} language={language}/>
              </>
            }
          />
        </Routes>
         
        
        <Resenas/>
        
        
        <section className='footerUI'>
          <Footer />
        </section>
        <section className='phoneUI'>
          <NavPhone 
            language={language}
            changeLanguage={setLanguage}
            showContactForm={showContactForm}
            setShowContactForm={setShowContactForm} 
          />
        </section>
        
        
      </div>
    </Router>
  );
}

export default App;
