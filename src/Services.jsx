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
      mainServices: 'SERVICIOS PRINCIPALES',
      additionalApps: 'APLICACIONES ADICIONALES',
      showLess: 'Mostrar menos',
      showMore: 'Mostrar más',
    },
    en: {
      mainServices: 'MAIN SERVICES',
      additionalApps: 'ADDITIONAL APPLICATIONS',
      showLess: 'Show less',
      showMore: 'Show more',
    },
    pl: {
      mainServices: 'USŁUGI GŁÓWNE',
      additionalApps: 'DODATKOWE APLIKACJE',
      showLess: 'Pokaż mniej',
      showMore: 'Pokaż więcej',
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
          "y actualización de contenido más técnica",
        ],
        en: [
          "Fixed and preestablished content",
          "Does not use a database",
          "Fast performance and loading times",
          "Easy to host and low maintenance",
          "Enhanced security",
          "Ideal for small and low-budget projects",
          "Limited to basic interactions and more technical content updates",
        ],
        pl: [
          "Zawartość ustalona i ustalona z góry",
          "Nie korzysta z bazy danych",
          "Szybka wydajność i czasy ładowania",
          "Łatwe do hostowania i niskie utrzymanie",
          "Zwiększona ochrona",
          "Idealne dla małych i niskobudżetowych projektów",
          "Ograniczone do podstawowych interakcji i bardziej technicznych aktualizacji treści",
        ],
      },
      imagen: estatic,
    },
    {
      nombre: {
        es: 'DINÁMICO',
        en: 'DYNAMIC',
        pl: 'DYNAMICZNE',
      },
      descripcion: {
        es: [
          "Contenido actualizable",
          "Interacción con usuarios",
          "Utiliza base de datos",
          "Personalización del contenido",
          "Integración con servicios externos",
          "Diseño adaptable (Responsive)",
          "Actualización en tiempo real",
          "Funcionalidades avanzadas",
          "Mayor complejidad",
          "Escalabilidad",
        ],
        en: [
          "Updatable content",
          "Interaction with users",
          "Uses a database",
          "Content personalization",
          "Integration with external services",
          "Responsive design",
          "Real-time updates",
          "Advanced functionalities",
          "Higher complexity",
          "Scalability",
        ],
        pl: [
          "Zaktualizowalna zawartość",
          "Interakcja z użytkownikami",
          "Korzysta z bazy danych",
          "Personalizacja treści",
          "Integracja z usługami zewnętrznymi",
          "Projekt responsywny",
          "Aktualizacje w czasie rzeczywistym",
          "Zaawansowane funkcje",
          "Wyższa złożoność",
          "Skalowalność",
        ],
      },
      imagen: dinamic,
    },
    {
      nombre: {
        es: 'TIENDA EN LÍNEA',
        en: 'ONLINE STORE',
        pl: 'SKLEP INTERNETOWY',
      },
      descripcion: {
        es: [
          "Catálogo de productos",
          "Carrito de compras",
          "Pasarela de pago segura",
          "Gestión de inventario",
          "Cuentas de usuario",
          "Valoraciones y reseñas de productos",
          "Proceso de compra sencillo",
          "Seguimiento de pedidos",
          "Seguridad y privacidad",
          "Soporte al cliente",
          "Diseño responsive",
          "Promociones y descuentos",
          "Funciones de búsqueda y filtrado",
          "Informes y análisis.",
        ],
        en: [
          "Product catalog",
          "Shopping cart",
          "Secure payment gateway",
          "Inventory management",
          "User accounts",
          "Product ratings and reviews",
          "Simple checkout process",
          "Order tracking",
          "Security and privacy",
          "Customer support",
          "Responsive design",
          "Promotions and discounts",
          "Search and filtering functionalities",
          "Reports and analytics",
        ],
        pl: [
          "Katalog produktów",
          "Koszyk",
          "Bezpieczna brama płatności",
          "Zarządzanie stanem magazynowym",
          "Konta użytkowników",
          "Oceny i recenzje produktów",
          "Prosty proces zakupów",
          "Śledzenie zamówień",
          "Bezpieczeństwo i prywatność",
          "Wsparcie dla klientów",
          "Projekt responsywny",
          "Promocje i zniżki",
          "Funkcje wyszukiwania i filtrowania",
          "Raporty i analizy",
        ],
      },
      imagen: ecommerce,
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
      <Link to="services" smooth={true} duration={500}></Link>
      <h2 className="titlecenter">{traducciones[language].mainServices}</h2>
      <br />
      <br />

      <ul className="services-list">
        {servicios.map((servicio, index) => (
          <li key={index} className={`service-item ${index < 3 ? 'main-service' : ''}`}>
            <h3><strong>{servicio.nombre[language]}</strong></h3>
            {/* ... (imagen del servicio) */}
            {index < 3 && (
              <>
                {index === 0 && (
                  <h1 style={{ fontSize: '40px', color: 'white' }}>
                    <s>Desde € 499.00</s>
                    Agosto desde € 399.00
                  </h1>
                )}
                {index === 1 && (
                  <h1 style={{ fontSize: '40px', color: 'white' }}>
                    Desde € 899.00
                  </h1>
                )}
                {index === 2 && (
                  <h1 style={{ fontSize: '40px', color: 'white' }}>
                    Desde € 999.00
                  </h1>
                )}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <ul style={{ textAlign: 'left', listStyle: 'none', color: 'white', padding: 0, margin: 0 }}>
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
      <h3 className="titlecenter">{traducciones[language].additionalApps}</h3>
      <br />
      <ul className="services-list">
        {visibleApps.map((servicio, index) => (
          <li key={index} className="service-item">
            <h3>{servicio.nombre[language]}</h3>
            <img src={servicio.imagen} alt={servicio.nombre[language]} />
            <p>{servicio.descripcion[language]}</p>
          </li>
        ))}
      </ul>

      <div className="button-container">
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