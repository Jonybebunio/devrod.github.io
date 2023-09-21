import React, { useState } from 'react';
import { Link } from 'react-scroll';
import coffe from "../src/assets/products/coffeshop.png";
import website from "../src/assets/products/website.png";
import restaurant from "../src/assets/products/restaurant.png";
import menu from "../src/assets/products/menu.png";
import delivery from "../src/assets/products/delivery.png";
import onlineShop from "../src/assets/products/ecomerce.png";
import responsiveSites from "../src/assets/products/responsiveSites.png";
import paymentGateway from "../src/assets/products/paymentGateway.png";
import virtualAssistant from "../src/assets/products/chatbot.jpg";
import forms from "../src/assets/products/forms.png";
import multilingual from "../src/assets/products/multilingual.png";
import '../src/indexProducts.css';

function Products({ language, changeLanguage }) {
  const [selectedImage, setSelectedImage] = useState(coffe);

  const handleButtonClick = (image) => {
    setSelectedImage(image);
  }

  const [selectedImageD, setSelectedImageD] = useState(coffe);

  const handleButtonClickD = (image) => {
    setSelectedImageD(image);
  }

  const translations = {
    es: {
      
      staticTitle: 'Sitios Estáticos',
      dynamicTitle: 'Sitios Dinámicos',
      programsTitle: 'Programas Web',
      staticDescription: 'Un sitio web estático es una presencia en línea fundamental utilizada para fines como perfiles de empresas, detalles de eventos, catálogos de productos como menús de restaurantes. Estos sitios web consisten en contenido fijo sin características interactivas ni actualizaciones dinámicas.',
      dynamicDescription: 'Un sitio web dinámico incluye características como formularios de pago, reservas, mensajería, servicio al cliente y otros. También pueden ser tiendas en línea.',
      staticNeeds: 'Necesidades para un sitio estático:',
      dynamicNeeds: 'Necesidades para un sitio dinámico:',
      serverAndDatabase: 'Dependiendo del tamaño de tu proyecto, es posible que también necesites un servidor y una base de datos.',
      updateWithAppServices: '¿Ya tienes un sitio web? Actualicémoslo con servicios de aplicaciones.',
      //sitios estaticos
      coffe: 'Cafeteria',
      restaurant:'Restaurante',
      menu: 'Menú',
      //sitios dinamicos
      delivery: 'Delivery App',
      onlineShop:'Tienda en linea',
      //programas
      responsiveSites: 'Sitios Responsivos',
      responsiveSitesDescription: 'Diseñamos y desarrollamos sitios web que se ven y funcionan perfectamente en todos los dispositivos.',
      responsiveSitesPrice: 'Precio: Desde €50.00',
      paymentGateway: 'Pasarela de Pago',
      paymentGatewayDescription: 'Integración de una pasarela de pago segura para procesar transacciones de dinero en línea de manera eficiente.',
      paymentGatewayPrice: 'Precio: Desde €50.00',
      virtualAssistant: 'Asistente Virtual',
      virtualAssistantDescription: 'Implementamos asistentes virtuales para brindar soporte automatizado y mejorar la atención al cliente.',
      virtualAssistantPrice: 'Precio: Desde €50.00',
      forms: 'Formularios',
      formsDescription: 'Diseño y desarrollo de formularios personalizados para recopilar información importante de los usuarios.',
      formsPrice: 'Precio: Desde €30.00',
      multilingual: 'Multilingüe',
      multilingualDescription: 'Hacemos que tu sitio web sea accesible en varios idiomas para llegar a una audiencia global.',
      multilingualPrice: 'Precio: Desde €50.00',
    },
    en: {
      
      staticTitle: 'Static Sites',
      dynamicTitle: 'Dynamic Sites',
      programsTitle: 'Web Programs',
      staticDescription: 'A static website is a fundamental online presence used for purposes like company profiles, event details, product catalogs such as restaurant menus. These websites consist of fixed content without interactive features or dynamic updates.',
      dynamicDescription: 'A dynamic website includes features like payment forms, reservations, messaging, customer service, and others. They can also be online stores.',
      staticNeeds: 'Static website needs:',
      dynamicNeeds: 'Dynamic website needs:',
      serverAndDatabase: 'Depending on the size of your project, you may also need a server and a database.',
      updateWithAppServices: 'Already have a website? Let\'s update it with app services.',
       //sitios estaticos
       coffe: 'Café',
       restaurant:'Restaurant',
       menu: 'Menu',
       //sitios dinamicos
       delivery: 'Delivery App',
       onlineShop:'E-commerce',
       //programas
      responsiveSites: 'Responsive Sites',
      responsiveSitesDescription: 'We design and develop websites that look and function perfectly on all devices.',
      responsiveSitesPrice: 'Price: From €50.00',
      paymentGateway: 'Payment Gateway',
      paymentGatewayDescription: 'Integration of a secure payment gateway to efficiently process online money transactions.',
      paymentGatewayPrice: 'Price: From €50.00',
      virtualAssistant: 'Virtual Assistant',
      virtualAssistantDescription: 'We implement virtual assistants to provide automated support and improve customer service.',
      virtualAssistantPrice: 'Price: From €50.00',
      forms: 'Forms',
      formsDescription: 'Design and development of custom forms to collect important user information.',
      formsPrice: 'Price: From €30.00',
      multilingual: 'Multilingual',
      multilingualDescription: 'We make your website accessible in multiple languages to reach a global audience.',
      multilingualPrice: 'Price: From €50.00',
    },
    pl: {
      
      staticTitle: 'Strony Statyczne',
      dynamicTitle: 'Strony Dynamiczne',
      programsTitle: 'Programy Webowe',
      staticDescription: 'Strona internetowa statyczna to podstawowa obecność online używana do celów takich jak profile firm, szczegóły wydarzeń, katalogi produktów, takie jak menu restauracji. Strony te składają się z treści stałych bez interaktywnych funkcji ani dynamicznych aktualizacji.',
      dynamicDescription: 'Strona internetowa dynamiczna obejmuje funkcje takie jak formularze płatności, rezerwacje, komunikacja, obsługa klienta i inne. Mogą to również być sklepy internetowe.',
      staticNeeds: 'Potrzeby strony statycznej:',
      dynamicNeeds: 'Potrzeby strony dynamicznej:',
      serverAndDatabase: 'W zależności od rozmiaru projektu, możliwe, że będziesz potrzebować również serwera i bazy danych.',
      updateWithAppServices: 'Masz już stronę internetową? Zaktualizujmy ją za pomocą usług aplikacji.',
      responsiveSites: 'Strony Responsywne',
      responsiveSitesDescription: 'Projektujemy i tworzymy strony internetowe, które wyglądają i działają doskonale na wszystkich urządzeniach.',
      responsiveSitesPrice: 'Cena: od €50.00',
      paymentGateway: 'Brama Płatności',
      paymentGatewayDescription: 'Integracja bezpiecznej bramy płatności umożliwiającej efektywne przetwarzanie transakcji online.',
      paymentGatewayPrice: 'Cena: od €50.00',
      virtualAssistant: 'Asystent Wirtualny',
      virtualAssistantDescription: 'Wdrażamy asystentów wirtualnych, aby zapewnić automatyczne wsparcie i poprawić obsługę klienta.',
      virtualAssistantPrice: 'Cena: od €50.00',
      forms: 'Formularze',
      formsDescription: 'Projektowanie i tworzenie niestandardowych formularzy do zbierania ważnych informacji od użytkowników.',
      formsPrice: 'Cena: od €30.00',
      multilingual: 'Wielojęzyczność',
      multilingualDescription: 'Sprawiamy, że twoja strona internetowa będzie dostępna w wielu językach, aby dotrzeć do globalnej publiczności.',
      multilingualPrice: 'Cena: od €50.00',
    },
  };
 
  return (
    <>
      
      <Link to="products" smooth={true} duration={500}></Link>
      <br />
      <div className="static-products-start">
        <img src={website} alt="" />
        <div className="static-products-info-start">
          <h2>{translations[language].staticTitle}</h2>
          <p>
            {translations[language].staticDescription}
          </p>
          <h3>{translations[language].staticNeeds}</h3>
          <ul>
            <li>domain</li>
            <li>hosting</li>
          </ul>
          <br />
          <h2>{translations[language].dynamicTitle}</h2>
          <p>
            {translations[language].dynamicDescription}
          </p>
          <h3>{translations[language].dynamicNeeds}</h3>
          <ul>
            <li>domain</li>
            <li>hosting</li>
          </ul>
          <h4>{translations[language].serverAndDatabase}</h4>
          <ul>
            <li>server</li>
            <li>database</li>
          </ul>
          <br />
          <h2>{translations[language].updateWithAppServices}</h2>
        </div>
      </div>
      {/*-------------------------------------------------------------------------------------------*/}
      <div className='section'>
        <h1 className="title">
          {translations[language].staticTitle}
        </h1>
        <div className="static-products">
          <img src={selectedImage} alt="" />
          <div className="static-products-info">
            <button className="button" onClick={() => handleButtonClick(coffe)}>
              {translations[language].coffe}
            </button>
            <button className="button" onClick={() => handleButtonClick(restaurant)}>
              {translations[language].restaurant}
            </button>
            <button className="button" onClick={() => handleButtonClick(menu)}>
              {translations[language].menu}
            </button>
          </div>
        </div>
      </div>
      {/*-------------------------------------------------------------------------------------------*/}
      <div className='section'>
        <h1 className="title">
          {translations[language].dynamicTitle}
        </h1>
        <div className="dynamic-products">
          <img src={selectedImageD} alt="" />
          <div className="dynamic-products-info">
            <button className="button" onClick={() => handleButtonClickD(delivery)}>
              {translations[language].delivery}
            </button>
            <button className="button" onClick={() => handleButtonClickD(onlineShop)}>
              {translations[language].onlineShop}
            </button>
          </div>
        </div>
      </div>
      {/*-------------------------------------------------------------------------------------------*/}
      <h1 className="title">{translations[language].programsTitle}</h1>
      <div className="program-cards-container">
        <div className="program-card">
          <img src={responsiveSites} alt={translations[language].responsiveSites} />
          <h2>{translations[language].responsiveSites}</h2>
          <p>{translations[language].responsiveSitesDescription}</p>
          <p>{translations[language].responsiveSitesPrice}</p>
        </div>
        <div className="program-card">
          <img src={paymentGateway} alt={translations[language].paymentGateway} />
          <h2>{translations[language].paymentGateway}</h2>
          <p>{translations[language].paymentGatewayDescription}</p>
          <p>{translations[language].paymentGatewayPrice}</p>
        </div>
        <div className="program-card">
          <img src={virtualAssistant} alt={translations[language].virtualAssistant} />
          <h2>{translations[language].virtualAssistant}</h2>
          <p>{translations[language].virtualAssistantDescription}</p>
          <p>{translations[language].virtualAssistantPrice}</p>
        </div>
        <div className="program-card">
          <img src={forms} alt={translations[language].forms} />
          <h2>{translations[language].forms}</h2>
          <p>{translations[language].formsDescription}</p>
          <p>{translations[language].formsPrice}</p>
        </div>
        <div className="program-card">
          <img src={multilingual} alt={translations[language].multilingual} />
          <h2>{translations[language].multilingual}</h2>
          <p>{translations[language].multilingualDescription}</p>
          <p>{translations[language].multilingualPrice}</p>
        </div>
      </div>
    </>
  );
}

export default Products;
