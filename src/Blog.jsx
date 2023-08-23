import React, { useState } from 'react';
import { Link } from 'react-scroll';
import '../src/index.css';

function Blog(){

  return (
    <>
      <br/><br/><br/><br/>
      
      <h1 className="titlecenter" style={{color:"black"}}>Blog</h1>
      <br/>
      <Link to="blog" smooth={true} duration={500}></Link>
      <h4>
        Mantente actualizado en diseño y desarrollo web. 
        Nuestro blog te mantiene en la cima de las últimas <br/>
        tendencias y consejos para brillar en línea.
        Este contenido es más corto y directo, 
        pero mantiene<br/> la esencia atractiva y convincente para 
        los futuros clientes. Si deseas hacer más ajustes o necesitas<br/>
        contenido adicional, no dudes en decírmelo. <br/><br/>
        Estamos aquí para ayudarte a crear el mensaje perfecto para tu sitio web.
      </h4><br/>
      <div>
        <h3>Restaurantes en la era digital</h3>
        <h4>Los restaurantes de hoy en día representan una gran demanda 
          especialmente en zonas turísticas, en este caso hablare de mi experiencia en Torrevieja, España....<br/>
          quieres segir leyendo haz click en el enlace
          <a href="http://"></a>
        </h4>
      </div><br/>
      <div>
        <h3>Motivos por cual tener mi tienda en linea</h3>
        <h4>Los restaurantes de hoy en día representan una gran demanda 
          especialmente en zonas turísticas, en este caso hablare de mi experiencia en Torrevieja, España....<br/>
          quieres segir leyendo haz click en el enlace
          <a href="http://"></a>
        </h4>
      </div><br/>
      <div>
        <h3>Formas de Pago</h3>
        <h4>Los restaurantes de hoy en día representan una gran demanda 
          especialmente en zonas turísticas, en este caso hablare de mi experiencia en Torrevieja, España....<br/>
          quieres segir leyendo haz click en el enlace
          <a href="http://"></a>
        </h4>
      </div>
      <div>
        <h3>Hosting Gratuitos o Pagados</h3>
        <h4>Los restaurantes de hoy en día representan una gran demanda 
          especialmente en zonas turísticas, en este caso hablare de mi experiencia en Torrevieja, España....<br/>
          quieres segir leyendo haz click en el enlace
          <a href="http://"></a>
        </h4>
      </div>    
      <div>
        <h3>Los Roles en el Diseño Web</h3>
        <h4>Los restaurantes de hoy en día representan una gran demanda 
          especialmente en zonas turísticas, en este caso hablare de mi experiencia en Torrevieja, España....<br/>
          quieres segir leyendo haz click en el enlace
          <a href="http://"></a>
        </h4>
      </div>  
      
    </>
  );
}

export default Blog;
