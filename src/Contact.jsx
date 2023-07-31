import React, { useState } from 'react';
import { Link } from 'react-scroll';
import Draggable from 'react-draggable';
import '../src/index.css';
import facebook from '../src/assets/fb.png';
import gmail from '../src/assets/gmail.png';
import whatsapp from '../src/assets/ws.png';

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

  const handleFacebookSubmit = (event) => {
    event.preventDefault();

    const { name, phone, message } = formData;
    const facebookMessage = `¡Hola! Soy ${name}. Mi teléfono es ${phone}. Mi mensaje es: ${message}`;

    const pageID = '100094913480501';

    const facebookUrl = `fb-messenger://share/?link=https://www.facebook.com/messages/t/${pageID}?text=${encodeURIComponent(facebookMessage)}`;

    const messengerWindow = window.open(facebookUrl, '_blank');
    if (!messengerWindow) {
      alert('Error: Unable to open Facebook Messenger. Please make sure your browser allows pop-ups.');
    }
  };

  const handleGmailSubmit = (event) => {
    event.preventDefault();

    const { name, phone, message } = formData;
    const gmailSubject = `Mensaje de ${name}`;
    const gmailBody = `Teléfono: ${phone}\n\nMensaje: ${message}`;

    const gmailUrl = `mailto:devrod.developers@gmail.com?subject=${encodeURIComponent(gmailSubject)}&body=${encodeURIComponent(gmailBody)}`;

    window.open(gmailUrl, '_blank');
  };

  const handleWhatsAppSubmit = (event) => {
    event.preventDefault();

    const { name, message, phone } = formData;
    const phoneApi = '34644190529';
    const whatsappMessage = `¡Hola! Soy ${name}. Mi teléfono es ${phone}. Mi mensaje es: ${message}`;

    const whatsappUrl = `https://api.whatsapp.com/send?phone=${encodeURIComponent(phoneApi)}&text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappUrl, '_blank');
  };

  const buttonStyle = {
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    margin: '5px'
  };

  const [showContact, setShowContact] = useState(false);

  const toggleContact = () => {
    setShowContactForm(!showContactForm);
  };

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
      
      <Draggable>
        <button 
          style={{ 
            position: 'fixed', bottom: '40px', 
            right: '40px', zIndex: '9999', 
            height: '40px',fontSize: '30px',
          }} 
          onClick={toggleContact}        
        >
          {traducciones[language].buttonText}
        </button>
      </Draggable>

      {showContactForm && (
        <Draggable>
          <section className='titlecenter' id="contact" style={{ position: 'fixed', top: '50%', left: '65%', transform: 'translate(-50%, -50%)', zIndex: '9999' }}>
            <h2 className='titlecenter'>{traducciones[language].title}</h2>
            <Link to="contact" smooth={true} duration={500}></Link>
            <form style={{background: 'blue', padding:'25px'}}>
              <label>
                {traducciones[language].nameLabel}
                <input type="text" name="name" required onChange={handleChange} />
              </label>
              <br />
              <label>
                {traducciones[language].phoneLabel}
                <input type="tel" name="phone" required onChange={handleChange} />
              </label>
              <br />
              <label>
                {traducciones[language].messageLabel}
                <textarea name="message" required onChange={handleChange}></textarea>
              </label>
              <br />
              <button type="submit" onClick={handleFacebookSubmit} style={buttonStyle}>
                <img
                  src={facebook}
                  alt="facebook de devrod source by Icons8"
                  style={{ width: '50px', marginRight: '10px' }}
                />
              </button>
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
        </Draggable>
      )}
    </>
  );
}

export default Contact;