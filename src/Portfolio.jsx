import React from 'react';
import {Link} from 'react-scroll'

import Proyecto1 from '../src/assets/restaurante.png';
import Proyecto2 from '../src/assets/ong.png';
import Proyecto3 from '../src/assets/music.png';
import Proyecto4 from '../src/assets/chatbot.jpg';
import '../src/index.css';

function Portfolio() {
  // Array de nombres de proyectos
  const projectData = [
    { 
      image: Proyecto1,
      name: 'La Casa del Frances',
      link: 'https://64b6ad2bbf143410c4a8949f--fastidious-pavlova-ec199a.netlify.app/?fbclid=IwAR1z4GgA1ObYoSyPmdE1ao4pcyCAUmlVnP2YbzeNYnck-axMeT_yHffP8nI',
      description: 'Este proyecto es un restaurante que ofrece servicios a domicilio',
      platform: 'React',
      apps: ['Mesajeria a WhatsApp', 'Plataforma de pagos', 'Animaciones'],
    },
    { 
      image: Proyecto2,
      name: 'ACOC',
      link: 'https://www.acoc.es/',
      description: 'ACOC es una asociacion cultural en Orihuela Costa.',
      platform: 'Ionos',
      apps: ['Blog', 'Galería de fotos'],
    },
    { 
      image: Proyecto3,
      name: 'SoundSight',
      link: 'https://www.thesoundsight.com/',
      description: 'SoundSight es una plataforma de streaming de música y videos.',
      platform: 'React',
      apps: ['Reproductor de música', 'Recomendaciones personalizadas'],
    },    
    { 
      image: Proyecto4,
      name: 'Asistente Virtual',
      link: 'https://64bcea90c252e07d9c126f26--creative-blancmange-c7927a.netlify.app/',
      description: 'Es un chatbot automatizado para responder a los clientes el menu del restaurante.',
      platform: 'HTML, CSS y JavaScript',
      apps: ['ChatBot'],
    },

    
    // Agrega más proyectos aquí con sus respectivas imágenes, enlaces, descripciones, plataforma y aplicaciones
  ];

  return (
    <section className="portfolio-section" id="portfolio">
      <Link to="portfolio" smooth={true} duration={500}></Link>
      <h2 >Portafolio</h2>
      <div className="portfolio-cards">
        {projectData.map((project, index) => (
          <div key={index} className="portfolio-card">
            {/* Enlace e imagen del proyecto */}
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img src={project.image} alt={project.name} />
            </a>
            {/* Título y descripción del proyecto */}
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            {/* Detalles adicionales */}
            <p>Plataforma: {project.platform}</p>
            <ul>
               <strong>Aplicaciones incluidas:</strong>
              {project.apps.map((app, idx) => (
                <li key={idx}>{app}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
