import React, { useState } from 'react';
import { Link } from 'react-scroll';
import Draggable from 'react-draggable';
import '../src/index.css';
import facebook from '../src/assets/fb.png';
import gmail from '../src/assets/gmail.png';
import whatsapp from '../src/assets/ws.png';

function Contact() {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  // Update form data when input fields change
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission for Facebook Messenger
  const handleFacebookSubmit = (event) => {
    event.preventDefault();

    // Compose the Facebook message
    const { name, phone, message } = formData;
    const facebookMessage = `¡Hola! Soy ${name}. Mi teléfono es ${phone}. Mi mensaje es: ${message}`;

    // Replace the page ID with your actual Facebook page ID
    const pageID = '100094913480501';

    // Construct the Facebook Messenger URL
    const facebookUrl = `fb-messenger://share/?link=https://www.facebook.com/messages/t/${pageID}?text=${encodeURIComponent(facebookMessage)}`;

    // Open the Facebook Messenger URL in a new tab
    const messengerWindow = window.open(facebookUrl, '_blank');
    if (!messengerWindow) {
      alert('Error: Unable to open Facebook Messenger. Please make sure your browser allows pop-ups.');
    }
  };

  // Handle form submission for Gmail
  const handleGmailSubmit = (event) => {
    event.preventDefault();

    // Compose the Gmail message
    const { name, phone, message } = formData;
    const gmailSubject = `Mensaje de ${name}`;
    const gmailBody = `Teléfono: ${phone}\n\nMensaje: ${message}`;

    // Construct the Gmail URL
    const gmailUrl = `mailto:devrod.developers@gmail.com?subject=${encodeURIComponent(gmailSubject)}&body=${encodeURIComponent(gmailBody)}`;

    // Open the Gmail URL in a new tab
    window.open(gmailUrl, '_blank');
  };

  // Handle form submission for WhatsApp
  const handleWhatsAppSubmit = (event) => {
    event.preventDefault();

    // Compose the WhatsApp message
    const { name, message, phone } = formData;
    const phoneApi = '34644190529'; // Número específico al que se enviará el mensaje
    const whatsappMessage = `¡Hola! Soy ${name}. Mi teléfono es ${phone}. Mi mensaje es: ${message}`;

    // Construct the WhatsApp URL
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${encodeURIComponent(phoneApi)}&text=${encodeURIComponent(whatsappMessage)}`;

    // Open the WhatsApp URL in a new tab
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
    setShowContact(!showContact);
  };

  return (
    <>
      <Draggable>
        <button style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: '9999' }} onClick={toggleContact}>
          Contacto
        </button>
      </Draggable>

      {showContact && (
        <Draggable>
          <section className='titlecenter' id="contact" style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: '9999' }}>
            <h2 className='titlecenter'>Contacto</h2>
            <Link to="contact" smooth={true} duration={500}></Link>
            <form style={{background: 'blue', padding:'25px'}}>
              <label>
                Nombre:
                <input type="text" name="name" required onChange={handleChange} />
              </label>
              <br />
              <label>
                Teléfono:
                <input type="tel" name="phone" required onChange={handleChange} />
              </label>
              <br />
              <label>
                Mensaje:
                <textarea name="message" required onChange={handleChange}></textarea>
              </label>
              <br />
              {/* Cambiar type="button" a type="submit" */}
              <button type="submit" onClick={handleFacebookSubmit} style={buttonStyle}>
                <img
                  src={facebook}
                  alt="facebook de devrod source by Icons8"
                  style={{ width: '50px', marginRight: '10px' }}
                />
              </button>
              {/* Cambiar type="button" a type="submit" */}
              <button type="submit" onClick={handleGmailSubmit} style={buttonStyle}>
                <img
                  src={gmail}
                  alt="gmail de devrod source by Icons8"
                  style={{ width: '50px', marginRight: '10px' }}
                />
              </button>
              {/* Cambiar type="button" a type="submit" */}
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
