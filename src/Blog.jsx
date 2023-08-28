import React, { useState } from 'react';
import { Link } from 'react-scroll';
import '../src/indexBlog.css';

function Blog(){

  const [expandedBlogs, setExpandedBlogs] = useState({});

  const handleReadMoreClick = (blogIndex) => {
    setExpandedBlogs((prevExpandedBlogs) => ({
      ...prevExpandedBlogs,
      [blogIndex]: !prevExpandedBlogs[blogIndex],
    }));
  };
  
  return (
    <div className="blog">
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
      </h4>
      
      
      <br/>
      <div>
        <h3>Restaurantes en la era digital</h3>
        <h4>Los restaurantes de hoy en día representan una gran demanda 
          especialmente en zonas turísticas, en este caso hablare de mi experiencia en Torrevieja, España....<br/>
          
        </h4>
        {expandedBlogs[0] && (
          <p>
            La cantidad de turistas que visitan esta ciudad en la temporada de verano es inmensa con 
            sus atracciones como la playa, parques y el Lago Rosa, se estima que un total de 400,000 
            habitantes hay en la ciudad en temporada.<br/><br/>

            Muchos restaurantes tienen clientes de diferentes 
            nacionalidades como franceses, suecos, alemanes, británicos sin mencionar 
            el habla española y muchos mas. Y sus empleados tienen no solo la tarea de ser cualificados
            sino que también bilingües o multi-idioma ya que se complica la comunicación. Otros restaurantes 
            recurren a las nuevas tecnologías usando programas diseñados por desarrolladores web para
            facilitar la comunicación entre sus clientes.<br/><br/>

            Como bien dice la frase “si no estas en internet no existes” para que tus clientes no locales
            visiten tu negocio crea una pagina web o bien contrata un disenador web, un buen fotógrafo también
            es ideal. Dependiendo cuanto quieres invertir en tu negocio veras sus resultados. Habla con tus
            expertos para saber que es lo mejor para ti, agrega funciones a tu sitio web como un asistente
            virtual que te dirá toda la información que los clientes necesiten, haz una web multilingue que
            permita que tu negocio alcance mas reconocimiento.<br/><br/>
            
            Jonathan Rodríguez <br/>
            Front-end <br/>
            DevRod<br/>
            www.devrod.site
          </p>
        )}
        <h4>
        quieres segir leyendo haz click en el enlace{" "}
          <span className="read-more-link" onClick={() => handleReadMoreClick(0)}>
              aquí
          </span>
        </h4>
      </div><br/>
      <div>
        <h3>Motivos por cual tener mi tienda en linea</h3>
        <h4>Los restaurantes de hoy en día representan una gran demanda 
          especialmente en zonas turísticas, en este caso hablare de mi experiencia en Torrevieja, España....<br/>
          
          
        </h4>
        {expandedBlogs[1] && (
          <p>
            Contenido adicional del segundo blog aquí...
          </p>
        )}
        <h4>
        quieres segir leyendo haz click en el enlace{" "}
          <span className="read-more-link" onClick={() => handleReadMoreClick(1)}>
              aquí
          </span>
        </h4>
        
      </div><br/>
      <div>
        <h3>Motivos por cual tener mi tienda en linea</h3>
        <h4>Los restaurantes de hoy en día representan una gran demanda 
          especialmente en zonas turísticas, en este caso hablare de mi experiencia en Torrevieja, España....<br/>
          quieres segir leyendo haz click en el enlace{" "}
          <span className="read-more-link" onClick={() => handleReadMoreClick(0)}>
               aquí
            </span>
        </h4>
        {expandedBlogs[0] && (
          <h4>
            La cantidad de turistas que visitan esta ciudad en la temporada de verano es inmensa con 
            sus atracciones como la playa, parques y el Lago Rosa, se estima que un total de 400,000 
            habitantes hay en la ciudad en temporada.<br/><br/>

            Muchos restaurantes tienen clientes de diferentes 
            nacionalidades como franceses, suecos, alemanes, británicos sin mencionar 
            el habla española y muchos mas. Y sus empleados tienen no solo la tarea de ser cualificados
            sino que también bilingües o multi-idioma ya que se complica la comunicación. Otros restaurantes 
            recurren a las nuevas tecnologías usando programas diseñados por desarrolladores web para
            facilitar la comunicación entre sus clientes.<br/><br/>

            Como bien dice la frase “si no estas en internet no existes” para que tus clientes no locales
            visiten tu negocio crea una pagina web o bien contrata un disenador web, un buen fotógrafo también
            es ideal. Dependiendo cuanto quieres invertir en tu negocio veras sus resultados. Habla con tus
            expertos para saber que es lo mejor para ti, agrega funciones a tu sitio web como un asistente
            virtual que te dirá toda la información que los clientes necesiten, haz una web multilingue que
            permita que tu negocio alcance mas reconocimiento.<br/><br/>
            
            Jonathan Rodríguez <br/>
            Front-end <br/>
            DevRod<br/>
            www.devrod.site
          </h4>
        )}
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
      
    </div>
  );
}

export default Blog;
