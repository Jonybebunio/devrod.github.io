import React from 'react';
import '../src/index.css';

import idea from '../src/assets/idea.png';
import diseno from '../src/assets/diseno.png';
import internet from '../src/assets/internet.png';

function Process() {
  return (
    <section className="process-section">
      <h2 className='titlecenter'>PROCESO</h2>
      <h4 className='titlecenter'>NUESTRO PROCESO DE TRABAJO</h4>
      <div className="process-cards">
        <div className="process-card">
          <img src={idea} alt="Plan de la web" />
          <h3>Plan de la web</h3>
          <p>Descripción del proceso de planificación de la web.</p>
        </div>
        <div className="process-card">
          <img src={diseno} alt="Diseño de la web" />
          <h3>Diseño de la web</h3>
          <p>Descripción del proceso de diseño de la web.</p>
        </div>
        <div className="process-card">
          <img src={internet} alt="Web en línea" />
          <h3>Web en línea</h3>
          <p>Descripción del proceso de poner la web en línea.</p>
        </div>
      </div>
    </section>
  );
}

export default Process;
