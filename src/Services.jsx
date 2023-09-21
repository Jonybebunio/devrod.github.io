import React, { useState } from 'react';
import { Link } from 'react-scroll';
import '../src/index.css';

import dinamic from '../src/assets/dinamic.jpg';
import estatic from '../src/assets/static.jpg';
import ecommerce from '../src/assets/ecommerce.jpg';

import calander from '../src/assets/calander.webp';
import chatbot from '../src/assets/chatbot.jpg';
import delivery from '../src/assets/delivery.jpg';
import responsive from '../src/assets/responsive.jpg';
import form from '../src/assets/form.png';
import languages from '../src/assets/languages.png';
import payment from '../src/assets/Payment.jpg';
import reserve from '../src/assets/reserve.png';
import android from '../src/assets/android.jpg';
import social from '../src/assets/social.jpg';
import optimo from '../src/assets/optimo.gif';
import galeria from '../src/assets/galeria.png';

function Services(props) {
  const { language } = props;

  const traducciones = {
    es: {
      mainServices: 'SERVICIOS',
      additionalApps: 'INTEGRA LO QUE TU NEGOCIO NECESITA',
      showLess: 'Mostrar menos',
      showMore: 'Mostrar más',
      stunningWebsites: 'Páginas Web Impactantes: Diseños web que no solo son hermosos, sino que también funcionan a la perfección. Creamos sitios que hablan por tu marca y cautivan a tus visitantes desde el primer clic.',
      customWebApps: 'Programas Web a la Medida: Ideas transformadas en programas potentes. Desde aplicaciones interactivas hasta soluciones empresariales, creamos programas web que hacen que tu negocio avance.',
      seamlessUpdates: 'Actualización Web Sin Complicaciones: Mantén tu presencia en línea fresca y actualizada. Con nuestra ayuda, evolucionar tu sitio web es tan sencillo como inspirador.',
  
    },
    en: {
      mainServices: 'MAIN SERVICES',
      additionalApps: 'GET WHAT YOUR BUSINESS NEEDS',
      showLess: 'Show less',
      showMore: 'Show more',
      stunningWebsites: 'Stunning Websites: Web designs that are not only beautiful but also function perfectly. We create sites that speak for your brand and captivate your visitors from the first click.',
      customWebApps: 'Custom Web Programs: Ideas transformed into powerful programs. From interactive applications to business solutions, we create web programs that drive your business forward.',
      seamlessUpdates: 'Seamless Web Updates: Keep your online presence fresh and updated. With our help, evolving your website is as easy as it is inspiring.',

    },
    pl: {
      mainServices: 'USŁUGI GŁÓWNE',
      additionalApps: 'Zintegruj To, Czego Potrzebuje Twoja Firma',
      showLess: 'Pokaż mniej',
      showMore: 'Pokaż więcej',
      stunningWebsites: 'Zachwycające strony internetowe: Projektowanie stron internetowych, które są nie tylko piękne, ale również działają doskonale. Tworzymy strony, które mówią za twoją markę i zachwycają od pierwszego kliknięcia.',
      customWebApps: 'Niestandardowe programy internetowe: Pomysły przekształcone w potężne programy. Od interaktywnych aplikacji po rozwiązania biznesowe, tworzymy programy internetowe, które napędzają twój biznes do przodu.',
      seamlessUpdates: 'Bezproblemowe aktualizacje witryny: Utrzymaj świeżość i aktualność swojej obecności online. Dzięki naszej pomocy, rozwijanie swojej witryny jest równie łatwe, co inspirujące.',

    },
  };

  const servicios = [
    {
      nombre: {
        es: 'BÁSICO',
        en: 'BASIC',
        pl: 'PODSTAWOWE',
      },
      descripcion: {
        es: [
          "Contenido fijo y preestablecido",
          "No utiliza una base de datos",
          "Rápido rendimiento y tiempos de carga",
          "Fácil de alojar y bajo mantenimiento",
          "Seguridad mejorada",
          "Ideal para proyectos pequeños y de bajo presupuesto",
          "Limitado a interacciones básicas",
          "Actualización de contenido más técnica",
        ],
        en: [
          "Fixed and preestablished content",
          "Does not use a database",
          "Fast performance and loading times",
          "Easy to host and low maintenance",
          "Enhanced security",
          "Ideal for small and low-budget projects",
          "Limited to basic interactions",
          "Technical content updates",
        ],
        pl: [
          "Zawartość ustalona i ustalona z góry",
          "Nie korzysta z bazy danych",
          "Szybka wydajność i czasy ładowania",
          "Łatwe do hostowania i niskie utrzymanie",
          "Zwiększona ochrona",
          "Idealne dla małych i niskobudżetowych projektów",
          "Ograniczone do podstawowych interakcji" ,
          "Technicznych aktualizacji treści",
        ],
      },
      imagen: estatic,
      precio: {
        es: 'Desde € 499.00',
        en: 'From € 499.00',
        pl: 'Od 499,00 €',
      },
    },
    {
      nombre: {
        es: 'DINÁMICO',
        en: 'DYNAMIC',
        pl: 'DYNAMICZNE',
      },
      descripcion: {
        es: [
          "Ideal para tiendas en linea",
          "Catálogo de productos",
          "Utiliza base de datos",
          "Carrito de compras",
          "Soporte al cliente",
          "Personalización del contenido",
          "Integración pasarela de pago",
          "Diseño adaptable (Responsive)",
          "Funcionalidades avanzadas",
          "Mayor complejidad",
          "Escalabilidad",
        ],
        en: [
          "Ideal for online stores",
          "Product catalog",
          "Uses a database",
          "Shopping cart",
          "Customer support",
          "Content customization",
          "Payment gateway integration",
          "Responsive design",
          "Advanced features",
          "Higher complexity",
          "Scalability"
        ],
        pl: [
          "Idealne dla sklepów internetowych",
          "Katalog produktów",
          "Używa bazy danych",
          "Koszyk zakupowy",
          "Wsparcie klienta",
          "Dostosowanie treści",
          "Integracja bramy płatności",
          "Projekt responsywny",
          "Zaawansowane funkcje",
          "Większa złożoność",
          "Skalowalność"
        ]
      },
      imagen: dinamic,
      precio: {
        es: 'Desde € 899.00',
        en: 'From € 899.00',
        pl: 'Od 899,00 €',
      },
    },
    {
      nombre: {
        es: 'SOPORTE TÉCNICO',
        en: 'IT SUPPORT ',
        pl: 'WSPIERANIE IT',
      },
      descripcion: {
        es: [
          "Actualización de sitios web",
          "Modificación de idioma",
          "Integración de aplicaciones web",
          "Sitios web responsivos",
          "Optimización web",
          "Migración web a Android y iOS",
          "Creación de formularios",
          "Conexión de redes sociales",
          "Optimización de contenido",
          "Migración de código de la página",
          "Otros"
        ],
        en: [
          "Website updates",
          "Language modification",
          "Web application integration",
          "Responsive websites",
          "Website optimization",
          "Web migration to Android and iOS",
          "Form creation",
          "Social media integration",
          "Content optimization",
          "Page code migration",
          "Others"
        ],
        pl: [
          "Aktualizacja stron internetowych",
          "Modyfikacja języka",
          "Integracja aplikacji internetowych",
          "Responsywne strony internetowe",
          "Optymalizacja stron internetowych",
          "Migracja stron internetowych na Androida i iOS",
          "Tworzenie formularzy",
          "Integracja mediów społecznościowych",
          "Optymalizacja treści",
          "Migracja kodu strony",
          "Inne"
        ],
      },
      imagen: ecommerce,
      precio: {
        es: 'Desde € 250.00 Mensual',
        en: 'From € 250.00 Monthly',
        pl: 'Od 250,00 € miesięcznie',
      },
    },
    // Resto de los servicios en el mismo formato...
  ];

  const aplicacionesAdicionales = [
    {
      nombre: {
        es: 'APLICACIONES DE REPARTO',
        en: 'DELIVERY APPLICATIONS',
        pl: 'APLIKACJE DOSTAWCZE',
      },
      descripcion: {
        es: 'Aplicación de reparto a domicilio, recibe directamente la orden por mensajes de tus clientes.',
        en: 'Home delivery application, receive orders directly from your customers via messages.',
        pl: 'Aplikacja dostawcza do domu, odbieraj zamówienia bezpośrednio od swoich klientów za pośrednictwem wiadomości.',
      },
      imagen: delivery,
    },
    {
      nombre: {
        es: 'SITIO WEB RESPONSIVO',
        en: 'RESPONSIVE WEBSITE',
        pl: 'STRONA INTERNETOWA RESPONSIVE',
      },
      descripcion: {
        es: 'Adaptación del diseño y desarrollo del sitio web para que se vea y funcione correctamente en dispositivos móviles.',
        en: 'Adaptation of the website design and development to look and function correctly on mobile devices.',
        pl: 'Adaptacja projektu i rozwoju strony internetowej, aby wyglądała i działała poprawnie na urządzeniach mobilnych.',
      },
      imagen: responsive,
    },
    {
      nombre: {
        es: 'SITIO WEB OPTIMIZADO',
        en: 'OPTIMIZED WEBSITE',
        pl: 'ZOPTYMALIZOWANA STRONA INTERNETOWA',
      },
      descripcion: {
        es: 'Optimización del rendimiento y velocidad del sitio web para una mejor experiencia del usuario.',
        en: 'Optimization of website performance and speed for a better user experience.',
        pl: 'Optymalizacja wydajności i szybkości witryny dla lepszych doświadczeń użytkownika.',
      },
      imagen: optimo,
    },
    {
      nombre: {
        es: 'DESARROLLO DE APLICACIONES MÓVILES',
        en: 'MOBILE APPLICATION DEVELOPMENT',
        pl: 'ROZWOJ APLIKACJI MOBILNYCH',
      },
      descripcion: {
        es: 'Creación de aplicaciones móviles para iOS y Android, utilizando tecnologías como React Native o Flutter.',
        en: 'Creation of mobile applications for iOS and Android, using technologies like React Native or Flutter.',
        pl: 'Tworzenie aplikacji mobilnych na iOS i Androida, wykorzystując technologie takie jak React Native lub Flutter.',
      },
      imagen: android,
    },
    {
      nombre: {
        es: 'SITIO WEB MULTILINGÜE',
        en: 'MULTILINGUAL WEBSITE',
        pl: 'WIELUJĘZYCZNA STRONA INTERNETOWA',
      },
      descripcion: {
        es: 'Desarrollo de sitios web con soporte para múltiples idiomas, permitiendo llegar a audiencias internacionales.',
        en: 'Development of websites with support for multiple languages, reaching international audiences.',
        pl: 'Rozwój stron internetowych z obsługą wielu języków, docierając do międzynarodowych odbiorców.',
      },
      imagen: languages,
    },
    {
      nombre: {
        es: 'INTEGRACIÓN DE PAGO EN LÍNEA',
        en: 'ONLINE PAYMENT INTEGRATION',
        pl: 'INTEGRACJA PŁATNOŚCI ONLINE',
      },
      descripcion: {
        es: 'Implementación de pasarelas de pago en sitios web y tiendas en línea para aceptar pagos en línea de forma segura.',
        en: 'Implementation of online payment gateways on websites and online stores to accept secure online payments.',
        pl: 'Wdrażanie bram płatności online na stronach internetowych i sklepach internetowych w celu akceptacji bezpiecznych płatności online.',
      },
      imagen: payment,
    },
    {
      nombre: {
        es: 'ASISTENTE VIRTUAL',
        en: 'VIRTUAL ASSISTANT',
        pl: 'ASYSTENT WIRTUALNY',
      },
      descripcion: {
        es: 'Integración de un sistema de chat automatizado en el sitio web para brindar atención al cliente en tiempo real.',
        en: 'Integration of an automated chat system on the website to provide real-time customer support.',
        pl: 'Integracja zautomatyzowanego systemu czatowego na stronie internetowej w celu świadczenia wsparcia dla klientów w czasie rzeczywistym.',
      },
      imagen: chatbot,
    },
    {
      nombre: {
        es: 'CALENDARIO DE EVENTOS',
        en: 'EVENT CALENDAR',
        pl: 'KALENDARZ WYDARZEŃ',
      },
      descripcion: {
        es: 'Inclusión de un calendario interactivo en el sitio web para mostrar eventos, fechas importantes o disponibilidad.',
        en: 'Inclusion of an interactive calendar on the website to display events, important dates, or availability.',
        pl: 'Włączenie interaktywnego kalendarza na stronie internetowej w celu wyświetlania wydarzeń, ważnych dat lub dostępności.',
      },
      imagen: calander,
    },
    {
      nombre: {
        es: 'FORMULARIOS AVANZADOS',
        en: 'ADVANCED FORMS',
        pl: 'ZAWEANSOWANE FORMULARZE',
      },
      descripcion: {
        es: 'Creación de formularios personalizados con validaciones, campos dinámicos y funcionalidades avanzadas.',
        en: 'Creation of custom forms with validations, dynamic fields, and advanced functionalities.',
        pl: 'Tworzenie niestandardowych formularzy z walidacjami, dynamicznymi polami i zaawansowanymi funkcjonalnościami.',
      },
      imagen: form,
    },
    {
      nombre: {
        es: 'GALERÍA DE IMÁGENES',
        en: 'IMAGE GALLERY',
        pl: 'GALERIA OBRAZÓW',
      },
      descripcion: {
        es: 'Integración de una galería de imágenes en el sitio web para mostrar una colección de fotos o trabajos.',
        en: 'Integration of an image gallery on the website to display a collection of photos or works.',
        pl: 'Integracja galerii obrazów na stronie internetowej w celu wyświetlenia kolekcji zdjęć lub prac.',
      },
      imagen: galeria,
    },
    {
      nombre: {
        es: 'SISTEMA DE RESERVAS',
        en: 'BOOKING SYSTEM',
        pl: 'SYSTEM REZERWACJI',
      },
      descripcion: {
        es: 'Implementación de un sistema de reservas en línea para que los usuarios puedan programar citas o hacer reservas.',
        en: 'Implementation of an online booking system for users to schedule appointments or make reservations.',
        pl: 'Wdrożenie systemu rezerwacji online, dzięki któremu użytkownicy mogą umawiać się na spotkania lub dokonywać rezerwacji.',
      },
      imagen: reserve,
    },
    {
      nombre: {
        es: 'INTEGRACIÓN DE REDES SOCIALES',
        en: 'SOCIAL MEDIA INTEGRATION',
        pl: 'INTEGRACJA Z MEDIAMI SPOŁECZNOŚCIOWYMI',
      },
      descripcion: {
        es: 'Conexión del sitio web con las redes sociales para compartir contenido y fomentar la interacción con los usuarios.',
        en: 'Connection of the website with social media platforms to share content and encourage user interaction.',
        pl: 'Połączenie witryny z platformami mediów społecznościowych w celu udostępniania treści i zachęcania do interakcji z użytkownikami.',
      },
      imagen: social,
    },
    // Agregar más aplicaciones adicionales en el mismo formato...
  ];

  const [showAllApps, setShowAllApps] = useState(false);
  const initialAppsToShow = 3;
  const visibleApps = showAllApps
    ? aplicacionesAdicionales
    : aplicacionesAdicionales.slice(0, initialAppsToShow);

  const handleToggleShowApps = () => {
    setShowAllApps(!showAllApps);
  };

  return (
    <section id="services" className="services-section">
      <Link to="services" smooth={true} duration={500}></Link>{/*CONCETING WITH HEADER*/}      
      <h2 className="titlecenter" style={{color:"black"}}>{traducciones[language].mainServices}</h2> {/*TITLE*/}    
      <br />
      <br /><br />
      <br />          
       {/*----SERVICIOS------------------------------------------------------------------*/}     
       <ul className="services-list">{/*3 PRINCIPAL CARDS*/}
  {servicios.map((servicio, index) => (
    <li 
      key={index} 
      className={`service-item ${index < 3 ? 'main-service' : ''}`}            
    >
      <span >
        <h3 
          style={{
            background: index === 0 ? '#ffffff' : index === 1 ? '#193152':'#EDF3FB',  
            color: index === 1 ? 'white' : 'black',
          }}
        >
          <strong>{servicio.nombre[language]}</strong>
        </h3>
      </span> <br/>      {/*SERVICES CARDS*/}         
      {index < 3 && (
        <>
          {index === 0 && (
            <h1 style={{ fontSize: '40px', }}>
              {servicio.precio[language]}<br/>                    
            </h1>
          )}
          {index === 1 && (
            <h1 style={{ fontSize: '40px', }}>
              {servicio.precio[language]}
            </h1>
          )}
          {index === 2 && (
            <h1 style={{ fontSize: '40px', }}>
              {servicio.precio[language]}
            </h1>
          )}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <ul style={{ textAlign: 'left', padding: 0, margin: 0 }}>
              {servicio.descripcion[language].map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </>
      )}
    </li>
  ))}
</ul>



      <br />
      <br />
      <br />
      <h3 className="titlecenter" style={{color:"black"}}>{traducciones[language].additionalApps}</h3>
      {/* Other services------------------------------------------------------------------------------------------*/}
      <ul className="services-list" style={{display: 'none'}}>
        {visibleApps.map((servicio, index) => (
          <li key={index} className="service-item">
            <h3>{servicio.nombre[language]}</h3>
            <img src={servicio.imagen} alt={servicio.nombre[language]} />
            <p>{servicio.descripcion[language]}</p>
          </li>
        ))}
      </ul>

      <div className="button-container" style={{display: 'none'}}>
        {aplicacionesAdicionales.length > initialAppsToShow && (
          <button className="show-more-button" onClick={handleToggleShowApps}>
            {showAllApps ? traducciones[language].showLess : traducciones[language].showMore}
          </button>
        )}
      </div>
    </section>
  );
}

export default Services;