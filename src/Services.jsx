import React, { useState } from 'react';
import {Link} from 'react-scroll'
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


function Services() {
  const servicios = [
    
      {
        nombre: "BÁSICO",
        descripcion:[
          "Contenido fijo y preestablecido",
          "No utiliza una base de datos",
          "Rápido rendimiento y tiempos de carga",
          "Fácil de alojar y bajo mantenimiento",
          "Seguridad mejorada",
          "Ideal para proyectos pequeños y de bajo presupuesto",
          "Limitado a interacciones básicas",
          "y actualización de contenido más técnica" 
        ],
        imagen: estatic
      },
      {
        nombre: "DINÁMICO",
        descripcion:["Contenido actualizable",
                      "Interacción con usuarios"  ,    
                      "Utiliza base de datos",      
                      "Personalización del contenido",        
                      "Integración con servicios externos " ,      
                      "Diseño adaptable (Responsive)"        ,
                      "Actualización en tiempo real"        ,
                      "Funcionalidades avanzadas "       ,
                      "Mayor complejidad",
                      "Escalabilidad"
                    ], 
        imagen: dinamic
      },
      {
        nombre: "TIENDA EN LÍNEA",
        descripcion:[
                      "Catálogo de productos",
                      "Carrito de compras"    ,    
                      "Pasarela de pago segura",        
                      "Gestión de inventario"   ,    
                      "Cuentas de usuario"  ,
                      "Valoraciones y reseñas de productos" ,       
                      "Proceso de compra sencillo"        ,
                      "Seguimiento de pedidos"        ,
                      "Seguridad y privacidad"        ,
                      "Soporte al cliente"        ,
                      "Diseño responsive"        ,
                      "Promociones y descuentos"  ,      
                      "Funciones de búsqueda y filtrado",        
                      "Informes y análisis.",
                    ]       ,

        imagen: ecommerce
      },
      // El resto de los servicios se considerarán aplicaciones adicionales
      // y se agregarán en la siguiente lista
    ];
    
    const aplicacionesAdicionales = [
      {
        nombre: "APLICACIONES DE REPARTO",
        descripcion: "Aplicación de reparto a domicilio, recibe directamente la orden por mensajes de tus clientes.",
        imagen: delivery
      },
      {
        nombre: "SITIO WEB RESPONSIVO",
        descripcion: "Adaptación del diseño y desarrollo del sitio web para que se vea y funcione correctamente en dispositivos móviles.",
        imagen: responsive
      },
      {
        nombre: "SITIO WEB OPTIMIZADO",
        descripcion: "Optimización del rendimiento y velocidad del sitio web para una mejor experiencia del usuario.",
        imagen: optimo
      },
      {
        nombre: "DESARROLLO DE APLICACIONES MÓVILES",
        descripcion: "Creación de aplicaciones móviles para iOS y Android, utilizando tecnologías como React Native o Flutter.",
        imagen: android
      },
      { 
        nombre: "SITIO WEB MULTILINGÜE",
        descripcion: "Desarrollo de sitios web con soporte para múltiples idiomas, permitiendo llegar a audiencias internacionales.",
        imagen: languages
      },
      { 
        nombre: "INTEGRACIÓN DE PAGO EN LÍNEA",
        descripcion: "Implementación de pasarelas de pago en sitios web y tiendas en línea para aceptar pagos en línea de forma segura.",
        imagen: payment
      },
      { 
        nombre: "ASISTENTE VIRTUAL",
        descripcion: "Integración de un sistema de chat automatizado en el sitio web para brindar atención al cliente en tiempo real.",
        imagen: chatbot
      },
      { 
        nombre: "CALENDARIO DE EVENTOS",
        descripcion: "Inclusión de un calendario interactivo en el sitio web para mostrar eventos, fechas importantes o disponibilidad.",
        imagen: calander
      },
      { 
        nombre: "FORMULARIOS AVANZADOS",
        descripcion: "Creación de formularios personalizados con validaciones, campos dinámicos y funcionalidades avanzadas.",
        imagen: form
      },
      { 
        nombre: "GALERÍA DE IMÁGENES",
        descripcion: "Integración de una galería de imágenes en el sitio web para mostrar una colección de fotos o trabajos.",
        imagen: galeria
      },
      { 
        nombre: "SISTEMA DE RESERVAS",
        descripcion: "Implementación de un sistema de reservas en línea para que los usuarios puedan programar citas o hacer reservas.",
        imagen: reserve
      },
      { 
        nombre: "INTEGRACIÓN DE REDES SOCIALES",
        descripcion: "Conexión del sitio web con las redes sociales para compartir contenido y fomentar la interacción con los usuarios.",
        imagen: social
      }
    
    
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
    <section 
      id="services"
      className="services-section"
    >
      <Link to="services" smooth={true} duration={500}></Link>
      <h2 className='titlecenter'>NUESTROS SERVICIOS</h2>
      <br/><br/>
      <h3 className='titlecenter'>SERVICIOS PRINCIPALES</h3>
      <br/><br/>


      <ul className="services-list">
        {servicios.map((servicio, index) => (
          <li key={index} className={`service-item ${index < 3 ? 'main-service' : ''}`}>
            <h3><strong>{servicio.nombre}</strong></h3>
            {/* ... (imagen del servicio) */}
            {index < 3 && (
  <>
    {index === 0 && (
      <h1 style={{ fontSize: '40px', color: 'white' }}>
        Desde € 499.00
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
        {servicio.descripcion.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  </>
)}
          </li>
        ))}
      </ul>


      <br/><br/><br/>
      <h3 className='titlecenter'>APLICACIONES ADICIONALES</h3>
      <br/>
      <ul className="services-list">
        {/* Código para mostrar las aplicaciones adicionales */}
        {visibleApps.map((servicio, index) => (
          <li key={index} className="service-item">
            <h3>{servicio.nombre}</h3>
            <img src={servicio.imagen} alt={servicio.nombre} />
            <p>{servicio.descripcion}</p>
          </li>
        ))}
      </ul>

      <div className="button-container">
        {/* Botón para alternar la visibilidad de todas las aplicaciones adicionales */}
        {aplicacionesAdicionales.length > initialAppsToShow && (
          <button className="show-more-button" onClick={handleToggleShowApps}>
            {showAllApps ? 'Mostrar menos' : 'Mostrar más'}
          </button>
        )}
      </div>
    </section>
  );
}


export default Services