import React from 'react';
import { Link } from 'react-scroll';

import Proyecto1 from '../src/assets/restaurante.png';
import Proyecto2 from '../src/assets/ong.png';
import Proyecto3 from '../src/assets/music.png';
import Proyecto4 from '../src/assets/chatbot.jpg';
import '../src/index.css';

function Portfolio({ language, changeLanguage }) {
  const projectData = [
    {
      image: Proyecto1,
      name: 'La Casa del Frances.',
      link: 'https://64b6ad2bbf143410c4a8949f--fastidious-pavlova-ec199a.netlify.app/?fbclid=IwAR1z4GgA1ObYoSyPmdE1ao4pcyCAUmlVnP2YbzeNYnck-axMeT_yHffP8nI',
      description: {
        es: 'Este proyecto es un restaurante que ofrece servicios a domicilio.',
        en: 'This project is a restaurant that offers home delivery services.',
        pl: 'Ten projekt to restauracja oferująca usługi dostawy do domu.',
      },
      platform: {
        es: 'React',
        en: 'React',
        pl: 'React',
      },
      apps: {
        es: ['Mensajería a WhatsApp', 'Plataforma de pagos', 'Animaciones'],
        en: ['WhatsApp Messaging', 'Payment Platform', 'Animations'],
        pl: ['Wiadomości WhatsApp', 'Platforma płatności', 'Animacje'],
      },
    },
    {
      image: Proyecto2,
      name: 'ACOC',
      link: 'https://www.acoc.es/',
      description: {
        es: 'ACOC es una asociación cultural en Orihuela Costa.',
        en: 'ACOC is a cultural association in Orihuela Costa.',
        pl: 'ACOC to stowarzyszenie kulturalne na Costa Orihuela.',
      },
      platform: {
        es: 'Ionos',
        en: 'Ionos',
        pl: 'Ionos',
      },
      apps: {
        es: ['Blog', 'Galería de fotos'],
        en: ['Blog', 'Photo Gallery'],
        pl: ['Blog', 'Galeria zdjęć'],
      },
    },
    {
      image: Proyecto3,
      name: 'SoundSight',
      link: 'https://www.thesoundsight.com/',
      description: {
        es: 'SoundSight es una plataforma de streaming de música y videos.',
        en: 'SoundSight is a music and video streaming platform.',
        pl: 'SoundSight to platforma strumieniowa do muzyki i wideo.',
      },
      platform: {
        es: 'React',
        en: 'React',
        pl: 'React',
      },
      apps: {
        es: ['Reproductor de música', 'Recomendaciones personalizadas'],
        en: ['Music Player', 'Personalized Recommendations'],
        pl: ['Odtwarzacz muzyki', 'Spersonalizowane rekomendacje'],
      },
    },
    {
      image: Proyecto4,
      name: 'Asistente Virtual',
      link: 'https://64bcea90c252e07d9c126f26--creative-blancmange-c7927a.netlify.app/',
      description: {
        es: 'Es un chatbot automatizado para responder a los clientes el menú del restaurante.',
        en: 'It is an automated chatbot to respond to restaurant menu queries from customers.',
        pl: 'To automatyczny chatbot odpowiadający na zapytania menu restauracji od klientów.',
      },
      platform: {
        es: 'HTML, CSS y JavaScript',
        en: 'HTML, CSS, and JavaScript',
        pl: 'HTML, CSS i JavaScript',
      },
      apps: {
        es: ['ChatBot'],
        en: ['ChatBot'],
        pl: ['ChatBot'],
      },
    },
    // Agrega más proyectos aquí con sus respectivas imágenes, enlaces, descripciones, plataforma y aplicaciones
  ];

  const traducciones = {
    es: {
      title: 'Portafolio',
      appsTitle: 'Aplicaciones incluidas:',
    },
    en: {
      title: 'Portfolio',
      appsTitle: 'Included Apps:',
    },
    pl: {
      title: 'Portfolio',
      appsTitle: 'Wliczone aplikacje:',
    },
  };

  return (
    <section className="portfolio-section" id="portfolio">
      <Link to="portfolio" smooth={true} duration={500}></Link>
      <h2>{traducciones[language].title}</h2>
      <div className="portfolio-cards">
        {projectData.map((project, index) => (
          <div key={index} className="portfolio-card">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img src={project.image} alt={project.name} />
            </a>
            <h3>{project.name}</h3>
            <p>{project.description[language]}</p>
            <p>{`Plataforma: ${project.platform[language]}`}</p>
            <ul>
              <strong>{traducciones[language].appsTitle}</strong>
              {project.apps[language].map((app, idx) => (
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