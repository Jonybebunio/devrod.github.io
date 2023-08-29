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
          nombre: 'Idea and Planning',
          descripcion: 'Define the purpose and audience of your site.',
        },
        {
          nombre: 'Design',
          descripcion: 'Create a visual design and navigation structure.',
        },
        {
          nombre: 'Front-End Development',
          descripcion: 'Code the design with HTML, CSS, and possibly JavaScript.',
        },
        {
          nombre: 'Back-End Development',
          descripcion: 'Add advanced functionalities if necessary.',
        },
        {
          nombre: 'Testing',
          descripcion: 'Verify and test all parts of your site.',
        },
        {
          nombre: 'Add Content',
          descripcion: 'Insert images, text, and other elements.',
        },
        {
          nombre: 'Optimize',
          descripcion: 'Improve performance and SEO of your site.',
        },
        {
          nombre: 'Registration and Hosting',
          descripcion: 'Choose a domain name and a hosting provider.',
        },
        {
          nombre: 'Upload and Launch',
          descripcion: 'Upload files to the server and verify everything.',
        },
        {
          nombre: 'Maintenance',
          descripcion: 'Perform updates and adjustments regularly.',
        }
        
      ],
    },
    pl: {
      title: 'PROCES',
      subtitle: 'NASZY PROCES PRACY',
      cards: [
        {
          nombre: 'Idea i Planowanie',
          descripcion: 'Zdefiniuj cel i grupę docelową swojej strony.',
        },
        {
          nombre: 'Projektowanie',
          descripcion: 'Stwórz projekt wizualny oraz strukturę nawigacji.',
        },
        {
          nombre: 'Tworzenie Front-Endu',
          descripcion: 'Zakoduj projekt za pomocą HTML, CSS i ewentualnie JavaScriptu.',
        },
        {
          nombre: 'Tworzenie Back-Endu',
          descripcion: 'Dodaj zaawansowane funkcje, jeśli to konieczne.',
        },
        {
          nombre: 'Testowanie',
          descripcion: 'Zweryfikuj i przetestuj wszystkie części swojej strony.',
        },
        {
          nombre: 'Dodawanie Zawartości',
          descripcion: 'Wstaw obrazy, tekst i inne elementy.',
        },
        {
          nombre: 'Optymalizacja',
          descripcion: 'Popraw wydajność i pozycjonowanie SEO swojej strony.',
        },
        {
          nombre: 'Rejestracja i Hosting',
          descripcion: 'Wybierz nazwę domeny i dostawcę hostingu.',
        },
        {
          nombre: 'Przesyłanie i Uruchamianie',
          descripcion: 'Prześlij pliki na serwer i zweryfikuj wszystko.',
        },
        {
          nombre: 'Utrzymanie',
          descripcion: 'Regularnie dokonuj aktualizacji i dostosowań.',
        }
        
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
