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
        Nuestro blog te mantiene en la cima de las últimas 
        tendencias y consejos para brillar en línea.
        Este contenido es más corto y directo, 
        pero mantienela esencia atractiva y convincente para 
        los futuros clientes. Si deseas hacer más ajustes o necesitas
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
        <h4>En la era digital en la que vivimos, la presencia en línea se ha vuelto esencial para cualquier negocio
            que busque expandirse y conectarse con una audiencia más amplia.<br/>
          
          
        </h4>
        {expandedBlogs[1] && (
          <p>
            Una forma altamente efectiva de lograrlo es a través de la creación de una tienda en línea. A continuación, exploraremos detalladamente algunas
            razones convincentes por las cuales establecer tu propia tienda virtual puede ser una decisión inteligente
            para impulsar el crecimiento de tu negocio.
            
            <h4>1. Alcance global: Llegando más allá de las fronteras </h4>
               Imagina tener la capacidad de alcanzar a clientes en
               todo el mundo, sin las limitaciones geográficas de una tienda física. Con una tienda en línea, este escenario 
               se convierte en una realidad. Puedes exhibir tus productos o servicios a una audiencia global las 24 horas del 
               día, los 7 días de la semana, abriendo nuevas oportunidades para la expansión de tu negocio.

            <h4>2. Disponibilidad constante: Comodidad para tus clientes </h4>
               Una de las ventajas más notables de tener una tienda en 
               línea es que nunca cierra sus puertas. Tus clientes pueden explorar tu catálogo y realizar compras en cualquier
               momento que les resulte conveniente. Esto significa que tus ventas no se limitan al horario comercial estándar,
               permitiendo una experiencia de compra más flexible y atractiva.
               
            <h4>3. Reducción de costos operativos: Ahorro sin sacrificar calidad</h4>
             En comparación con el mantenimiento de una tienda
              física, administrar una tienda en línea generalmente implica costos operativos más bajos. La ausencia de alquiler
              de local comercial y gastos asociados permite que una mayor parte de tus ingresos se traduzca en ganancias netas. 
              Esto puede proporcionarte un margen financiero más saludable para hacer crecer tu negocio.

            <h4>4. Segmentación precisa del mercado: Conociendo a tus clientes</h4>  
            Con las herramientas digitales a tu disposición, puedes recopilar y analizar datos sobre tus clientes. Esto te brinda
            la capacidad de comprender a tu audiencia en profundidad y adaptar tus estrategias de marketing para llegar a segmentos 
            específicos de manera más efectiva. La personalización resultante puede mejorar la relación con los clientes y aumentar 
            la tasa de conversión.

            <h4>5. Flexibilidad en la expansión: Ampliando tu oferta</h4>
            Introducir nuevos productos o categorías en tu tienda en línea es mucho más ágil que en un entorno físico. Puedes 
            diversificar tu inventario de manera eficiente y rápida, respondiendo a las demandas cambiantes del mercado y manteniendo
            a tus clientes interesados en tus novedades.

            <h4>6. Experiencia de compra personalizada: Satisfaciendo necesidades individuales</h4> 
            Una tienda en línea te permite implementar sistemas de recomendación y personalización. Esto crea una experiencia de 
            compra única para cada cliente, sugiriendo productos basados en sus preferencias anteriores y comportamiento de navegación.
            Esta atención personalizada puede fomentar la fidelización y el boca a boca positivo.

            <h4>7. Control de inventario optimizado: Evitando excesos y faltantes</h4>
            Administrar el inventario puede ser un desafío en el comercio tradicional. Sin embargo, con una tienda en línea, puedes
            realizar un seguimiento preciso de tus existencias y ajustar los niveles según la demanda real. Esto minimiza los riesgos
            de tener productos agotados o excesos de inventario no deseados.

            <h4>8. Menos intermediarios: Conexión directa con los clientes</h4>
            El mundo digital permite que las transacciones ocurran de manera más directa entre tú y tus clientes. Al eliminar 
            intermediarios, puedes establecer relaciones más sólidas y brindar una atención al cliente más cercana, lo que puede
            tener un impacto positivo en la percepción de tu marca.

            <h4>9. Habilidades en marketing digital: Una ventaja valiosa</h4>
            Administrar una tienda en línea te sumerge en el mundo del marketing digital. A medida que desarrollas estrategias para 
            promocionar tus productos en línea, adquieres habilidades valiosas que pueden aplicarse en diversas áreas de tu negocio y carrera.

            <h4>10. Adaptación a las tendencias: Manteniéndote relevante</h4>
              El mercado está evolucionando constantemente, y las compras en línea son una tendencia que sigue ganando fuerza. 
              Tener tu propia tienda en línea te permite mantener tu negocio actualizado y en línea con las preferencias cambiantes 
              de los consumidores.
              <br/><br/>

            En resumen, establecer una tienda en línea presenta una serie de ventajas convincentes para tu negocio. Desde el 
            alcance global y la disponibilidad constante hasta la reducción de costos operativos y la personalización de la 
            experiencia del cliente, las oportunidades son abundantes en el mundo digital. Al abrazar la tecnología y aprovechar
            las oportunidades en línea, puedes llevar tu negocio al siguiente nivel y asegurarte de que esté preparado para el 
            futuro del comercio.
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
        <h3>Tras Bambalinas: Descubriendo los Roles Clave en la Producción de un Sitio Web</h3>
        <h4>
          En el emocionante proceso de dar vida a un sitio web, hay dos grupos de profesionales que desempeñan papeles esenciales: los diseñadores web y los programadores. Estos expertos trabajan en conjunto para transformar ideas en una experiencia digital fluida y atractiva. En este blog, vamos a explorar más a fondo los roles que tienen los diseñadores y programadores web en la producción de un sitio web.
        </h4>
        {expandedBlogs[2] && (
          <p>
            En el emocionante proceso de dar vida a un sitio web, hay dos grupos de profesionales que desempeñan papeles esenciales:
            los diseñadores web y los programadores. Estos expertos trabajan en conjunto para transformar ideas en una experiencia 
            digital fluida y atractiva. En este blog, vamos a explorar más a fondo los roles que tienen los diseñadores y 
            programadores web en la producción de un sitio web.
            
            <h4>Roles de los Diseñadores Web:</h4>
            
            <h4>Diseñador de Experiencia de Usuario (UX): </h4>
            Los diseñadores de UX son los arquitectos detrás de la funcionalidad del sitio. Se sumergen en las necesidades y 
            expectativas de los usuarios para crear flujos de navegación intuitivos y amigables que guíen a los visitantes a 
            través del contenido de manera eficiente.

            <h4>Diseñador de Interfaz de Usuario (UI): </h4>
            Estos diseñadores se encargan de dar vida a la visión creativa del sitio web. Eligen colores, tipografías y elementos 
            gráficos que reflejen la identidad de la marca y creen una experiencia visualmente atractiva y coherente para los usuarios.

            <h4>Diseñador de Gráficos y Multimedia: </h4>
            Si hay imágenes, ilustraciones o contenido multimedia en el sitio web, estos diseñadores son los responsables de crear 
            elementos visuales que aporten valor y transmitan la información de manera efectiva.

            <h4>Diseñador de Animaciones y Transiciones: </h4>
            En sitios web interactivos, los diseñadores de animaciones agregan un toque de magia. Crean transiciones suaves y 
            animaciones atractivas que mejoran la experiencia del usuario y hacen que la interacción sea más agradable.
            <br/>
            <h4>Roles de los Programadores Web:</h4>

            <h4>Desarrollador Front-End: </h4>
            Los desarrolladores front-end toman los diseños de los diseñadores y los convierten en código funcional. Utilizan 
            lenguajes como HTML, CSS y JavaScript para construir la parte visual y de interacción del sitio que los usuarios 
            ven y utilizan.

            <h4>Desarrollador Back-End: </h4>
            Los desarrolladores back-end trabajan en los aspectos técnicos detrás de la escena. Manejan la lógica de la base de 
            datos, la seguridad del sitio y la funcionalidad que no es visible para los usuarios finales.

            <h4>Desarrollador Full Stack: </h4>
            Estos expertos son versátiles y pueden trabajar tanto en el front-end como en el back-end. Tienen un conocimiento 
            completo del proceso y pueden manejar cada etapa del desarrollo del sitio web.

            <h4>Especialista en Optimización y Seguridad:</h4> 
            Los programadores especializados en optimización y seguridad se aseguran de que el sitio web funcione sin problemas 
            y esté protegido contra posibles amenazas. Trabajan en la eficiencia del sitio y en mantener la integridad de los datos.
            <br/><br/>
            En resumen, los diseñadores web se centran en la estética y la experiencia del usuario, mientras que los programadores 
            web se enfocan en la funcionalidad y la tecnología subyacente. Juntos, estos dos grupos de profesionales colaboran para 
            crear un sitio web que sea atractivo, intuitivo y altamente funcional, brindando a los usuarios una experiencia digital
            excepcional.
          </p>
        )}
        <h4>
        quieres segir leyendo haz click en el enlace{" "}
          <span className="read-more-link" onClick={() => handleReadMoreClick(2)}>
              aquí
          </span>
        </h4>        
      </div>
      `{/* 
      <div>
        <h3>title</h3>
        <h4>
          part of setion                 
        </h4>
        {expandedBlogs[1] && (
          <p>
            abc.
          </p>
        )}
        <h4>
        quieres segir leyendo haz click en el enlace{" "}
          <span className="read-more-link" onClick={() => handleReadMoreClick(1)}>
              aquí
          </span>
        </h4>        
      </div>      
      */}`  
      
    </div>
  );
}

export default Blog;
