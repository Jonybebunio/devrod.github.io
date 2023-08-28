import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../src/index.css';

 

function Process({ language }) {
  const traducciones = {
    es: {
      title: 'PROCESO',
      subtitle: 'NUESTRO PROCESO DE TRABAJO',
      cards: [
        {
          nombre: 'Idea y Planificación',
          descripcion: 'Define el propósito y público de tu sitio.',
        },
        {
          nombre: 'Diseño',
          descripcion: 'Crea un diseño visual y una estructura de navegación.',
        },
        {
          nombre: 'Desarrollo Front-End',
          descripcion: 'Codifica el diseño con HTML, CSS y posiblemente JavaScript.',
        },
        {
          nombre: 'Desarrollo Back-End',
          descripcion: 'Agrega funcionalidades avanzadas si es necesario.',
        },
        {
          nombre: 'Pruebas',
          descripcion: 'Verifica y prueba todas las partes de tu sitio.',
        },
        {
          nombre: 'Agrega Contenido',
          descripcion: 'Inserta imágenes, texto y otros elementos.',
        },
        {
          nombre: 'Optimiza',
          descripcion: 'Mejora el rendimiento y el SEO de tu sitio.',
        },
        {
          nombre: 'Registro y Alojamiento',
          descripcion: 'Elige un nombre de dominio y un proveedor de hosting.',
        },
        {
          nombre: 'Subida y Lanzamiento',
          descripcion: 'Carga los archivos en el servidor y verifica todo.',
        },
        {
          nombre: 'Mantenimiento',
          descripcion: 'Realiza actualizaciones y ajustes regularmente.',
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
      <Carousel
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
        showArrows={true}
        centerMode={true}
        centerSlidePercentage={33.33}
        dynamicHeight={false}
      >
        {traducciones[language].cards.map((card, index) => (
          <div key={index} className="process-card">   
          <br/>
          <br/>       
            <h3>{card.nombre}</h3>
            <p>{card.descripcion}</p>
            <br/>
            <br/>
          </div>
        ))}
        
      </Carousel>
    </section>
  );
}

export default Process;
