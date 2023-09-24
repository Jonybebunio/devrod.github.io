import React, { useState } from 'react';
import { Link } from 'react-scroll';
import '../src/index.css';
import facebook from '../src/assets/fb.png';
import gmail from '../src/assets/gmail.png';
import whatsapp from '../src/assets/ws.png';
import att from '../src/assets/att.png';

function Contact({ language, changeLanguage, showContactForm, setShowContactForm }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  {/*----Enviar mensaje por Gmail-------------------------------*/}

  const handleGmailSubmit = (event) => {
    event.preventDefault();
    const { name, phone, message } = formData;
    const gmailSubject = `Mensaje de ${name}`;
    const gmailBody = `Teléfono: ${phone}\n\nMensaje: ${message}`;
    const gmailUrl = `mailto:devrod.developers@gmail.com?subject=${encodeURIComponent(
      gmailSubject
    )}&body=${encodeURIComponent(gmailBody)}`;
    window.open(gmailUrl, '_blank');
  };

  {/*----Enviar mensaje por Whatsapp-------------------------------*/}
  const handleWhatsAppSubmit = (event) => {
    event.preventDefault();
    const { name, message, phone } = formData;
    const phoneApi = '34644190529';
    const whatsappMessage = `¡Hola! Soy ${name}. Mi teléfono es ${phone}. Mi mensaje es: ${message}`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${encodeURIComponent(
      phoneApi
    )}&text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  {/*----stilos del boton del los mensajes-------------------------------*/}
  const buttonStyle = {
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    margin: '5px'
  };

    {/*----manejo del boton de contacto-------------------------------*/}
  const toggleContact = () => {
    setShowContactForm(!showContactForm);
  };

    {/*----Traducciones-------------------------------*/}
  const traducciones = {
    es: {
      buttonText: 'Contacto',
      title: 'Contacto',
      nameLabel: 'Nombre:',
      phoneLabel: 'Teléfono:',
      messageLabel: 'Mensaje:',
    },
    en: {
      buttonText: 'Contact',
      title: 'Contact',
      nameLabel: 'Name:',
      phoneLabel: 'Phone:',
      messageLabel: 'Message:',
    },
    pl: {
      buttonText: 'Kontakt',
      title: 'Kontakt',
      nameLabel: 'Nazwa:',
      phoneLabel: 'Telefon:',
      messageLabel: 'Wiadomość:',
    },
  };

  return (
    <>
      <button
        style={{
          position: 'fixed',        bottom: '90px',
          right: '40px',            zIndex: '9999',
          height: '40px',           fontSize: '30px',
          background: 'transparent',// Elimina el fondo del botón
          border: 'none',           // Elimina el borde del botón
          cursor: 'pointer',
          padding: '0',             // Elimina el espacio interior del botón
        }}
        onClick={toggleContact}
      >
        <img
          src={att}// Reemplaza "ruta-a-tu-imagen.png" con la ruta correcta de tu imagen
          alt="Contact"
          style={{ width: '40px', height: '40px' }}  // Ajusta el tamaño de la imagen según tus necesidades
        />
      </button>

      {/*----Control de Pop-Up-------------------------------*/}
      {showContactForm && (
        <section
          className="titlecenter"
          id="contact"
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: '9999',
            background: "#04414F",
            borderRadius:"16px"            
          }}
        >
          <Link to="contact" smooth={true} duration={500}></Link>
          <h2 className="titlecenter" style={{color:'white'}}>{traducciones[language].title} </h2>
          <form style={{ background: '#04414F', padding: '60px', borderRadius:"16px", color:'white' }}>
            <label style={{color:'white'}}> 
              {traducciones[language].nameLabel}<br/>
              <input type="text" name="name" required onChange={handleChange} />
            </label>
            <br />
            
            <label>
              {traducciones[language].phoneLabel}<br/>
              <input type="tel" name="phone" required onChange={handleChange} />
            </label>
            <br />

            <label>
              {traducciones[language].messageLabel}<br/>
              <textarea name="message" required onChange={handleChange}></textarea>
            </label>
            <br />

            <button type="submit" onClick={handleGmailSubmit} style={buttonStyle}>
              <img
                src={gmail}
                alt="gmail de devrod source by Icons8"
                style={{ width: '50px', marginRight: '10px' }}
              />
            </button>
            
            <button type="submit" onClick={handleWhatsAppSubmit} style={buttonStyle}>
              <img
                src={whatsapp}
                alt="whatsapp de devrod source by Icons8"
                style={{ width: '50px', marginRight: '10px' }}
              />
            </button>
          </form>
        </section>
      )}
    </>
  );
}

export default Contact;
