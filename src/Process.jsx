import React from 'react';
import '../src/index.css';

import idea from '../src/assets/idea.png';
import diseno from '../src/assets/diseno.png';
import internet from '../src/assets/internet.png';

function Process({ language }) {
  const traducciones = {
    es: {
      title: 'PROCESO',
      subtitle: 'NUESTRO PROCESO DE TRABAJO',
      cards: [
        {
          nombre: 'Plan de la web',
          descripcion: 'Descripción del proceso de planificación de la web.',
        },
        {
          nombre: 'Diseño de la web',
          descripcion: 'Descripción del proceso de diseño de la web.',
        },
        {
          nombre: 'Web en línea',
          descripcion: 'Descripción del proceso de poner la web en línea.',
        },
      ],
    },
    en: {
      title: 'PROCESS',
      subtitle: 'OUR WORKING PROCESS',
      cards: [
        {
          nombre: 'Website Planning',
          descripcion: 'Description of the website planning process.',
        },
        {
          nombre: 'Website Design',
          descripcion: 'Description of the website design process.',
        },
        {
          nombre: 'Website Online',
          descripcion: 'Description of the process of putting the website online.',
        },
      ],
    },
    pl: {
      title: 'PROCES',
      subtitle: 'NASZY PROCES PRACY',
      cards: [
        {
          nombre: 'Planowanie Strony',
          descripcion: 'Opis procesu planowania strony internetowej.',
        },
        {
          nombre: 'Projektowanie Strony',
          descripcion: 'Opis procesu projektowania strony internetowej.',
        },
        {
          nombre: 'Strona na Żywo',
          descripcion: 'Opis procesu umieszczania strony internetowej w sieci.',
        },
      ],
    },
  };

  return (
    <section className="process-section">
      <h2 className="titlecenter">{traducciones[language].title}</h2>
      <h4 className="titlecenter">{traducciones[language].subtitle}</h4>
      <div className="process-cards">
        {traducciones[language].cards.map((card, index) => (
          <div key={index} className="process-card">
            {index === 0 && <img src={idea} alt={card.nombre} />}
            {index === 1 && <img src={diseno} alt={card.nombre} />}
            {index === 2 && <img src={internet} alt={card.nombre} />}
            <h3>{card.nombre}</h3>
            <p>{card.descripcion}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Process;
