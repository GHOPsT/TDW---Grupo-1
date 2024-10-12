import React from 'react';
import './Landing.css';
import Faq8 from './Faq8';
import About2 from './About2';
import Footer4 from './Footer4';

function Landing() {
  return (
    <div className="landing-page">
      <section id="inicio" className="section">
        <div className="container">
          <h1>Bienvenido a "Aprendizaje para todos"</h1>
          <p>
            Aquí encontrarás una amplia colección de libros de texto,
            guías de estudio, y materiales complementarios para
            todos los niveles educativos, desde primaria hasta
            secundaria. Nuestro objetivo es apoyar el aprendizaje en
            cualquier lugar y momento, proporcionando materiales
            actualizados y alineados con los programas educativos
            nacionales e internacionales.
          </p>
          <button>Empezar</button>
        </div>
      </section>
      <section id="normativas" className="section">
        <div className="container">
          <h2>Normativas</h2>
          <p>
            Aquí puedes encontrar información sobre las normativas
            que rigen nuestro servicio. 
            Lorem ipsum odor amet, consectetuer adipiscing elit. 
            Ridiculus ornare consectetur ex adipiscing donec feugiat magnis. 
            Etiam in mauris fusce sed parturient fames penatibus nisl! 
            Maecenas ex himenaeos magnis adipiscing dui. 
            Lobortis massa facilisis risus tortor porta sem nibh. 
            Posuere elit id class, vitae ac nunc. 
            Malesuada imperdiet congue ad per nisl mauris etiam placerat.
          </p>
        </div>
      </section>
      <section id="nosotros" className="section">
        <div className="container">
          <h2>Nosotros</h2>
          <About2 /> {/* Renderiza el componente About2 */}
        </div>
      </section>
      <section id="localizacion" className="section">
        <div className="container">
          <h2>Localización</h2>
          <p>
            Encuentra nuestra ubicación y contacta con nosotros.
            Lorem ipsum odor amet, consectetuer adipiscing elit. 
            Ridiculus ornare consectetur ex adipiscing donec feugiat magnis. 
            Etiam in mauris fusce sed parturient fames penatibus nisl! 
            Maecenas ex himenaeos magnis adipiscing dui. 
            Lobortis massa facilisis risus tortor porta sem nibh. 
            Posuere elit id class, vitae ac nunc. 
            Malesuada imperdiet congue ad per nisl mauris etiam placerat.
          </p>
        </div>
      </section>
      <section id="faq" className="section">
        <div className="container">
          <h2>FAQ</h2>
          <Faq8 /> {/* Renderiza el componente Faq8 */}
        </div>
      </section>
      <section id="contactenos" className="section">
        <div className="container">
          <h2>Contáctenos</h2>
          <p>
            Ponte en contacto con nosotros para cualquier duda
            o sugerencia.
            Lorem ipsum odor amet, consectetuer adipiscing elit. 
            Ridiculus ornare consectetur ex adipiscing donec feugiat magnis. 
            Etiam in mauris fusce sed parturient fames penatibus nisl! 
            Maecenas ex himenaeos magnis adipiscing dui. 
            Lobortis massa facilisis risus tortor porta sem nibh. 
            Posuere elit id class, vitae ac nunc. 
            Malesuada imperdiet congue ad per nisl mauris etiam placerat.
          </p>
        </div>
      </section>
      <footer>
        <Footer4 /> 
      </footer>
    </div>
  );
}

export default Landing;