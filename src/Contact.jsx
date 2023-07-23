import React from 'react';
import {Link} from 'react-scroll'
import '../src/index.css';


function Contact() {
  return (
    <section className='titlecenter' id="contact">
      <h2 className='titlecenter'>Contacto</h2>
      <Link to="contact" smooth={true} duration={500}></Link>
      <p>
        ¡Prepárate para una experiencia web fuera de lo común! En DevRod, <br/>
        abrazamos la innovación y la creatividad en cada proyecto. <br/>
        Permítenos convertir tus ideas en una realidad digital única que atraiga y deleite a tus visitantes.</p>
      <div> <strong>       
        <br />
        TELEFONO: +34 644190529
        <br />
        CORREO ELECTRONICO: jonath.josue@gmail.com
        <br/> </strong>
      </div>      
     <br/>
      <p>
        "En el mundo digital, la creatividad es clave. En DevRod, <br/>
        nos destacamos por nuestra innovación y diseño único. <br/>
        Únete a nosotros para dar vida a una experiencia en línea sorprendente."
      </p>
    </section>
  );
}

export default Contact;
