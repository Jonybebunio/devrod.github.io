import React from 'react';
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
  return (
    <div className="App">
      <Header />
      <Face />
      <section style={{
       //   backgroundImage: `url(${Img})`,
       //   background: '#5f9ea0',
       //   backgroundPosition: 'center',        
          background: 'linear-gradient(to right, #0b3d94, #281541)', // Aplica el gradiente como una cadena    
          margin: '0', // Eliminar el margen
          padding: '0', // Eliminar el relleno
          
        }}>
        <Services />
      </section>
      <section >
        <Acerca />
      </section>
      <section style={{background: 'linear-gradient(to right, #0b3d94, #281541)',}} >
        <Process />
      </section>
      
      <Portfolio />
      <section style={{background: 'linear-gradient(to right, #0b3d94, #281541)',}} >
        <Contact />
      </section>
        
      
      <Footer />
    </div>
  );
}

export default App;
