import React , { useState } from 'react';
import { Link } from 'react-router-dom'; 
import './Landing.css';
import Footer4 from './Footer4';

function Landing({ inicioRef, normativasRef, nosotrosRef, localizacionRef, faqRef, contactenosRef }) {

  const faqData = [
    {
      question: "¿Qué es la biblioteca virtual?",
      answer: "La biblioteca virtual es una plataforma en línea que permite acceder a una vasta colección de libros, artículos y recursos educativos desde cualquier lugar y en cualquier momento."
    },
    {
      question: "¿Cómo puedo registrarme?",
      answer: "Para registrarte, visita la sección de registro en nuestra página principal y completa el formulario con tus datos."
    },
    {
      question: "¿Qué recursos están disponibles?",
      answer: "Disponemos de libros electrónicos, artículos de revistas, bases de datos de investigación y mucho más."
    },
    {
      question: "¿Puedo acceder a los recursos desde mi teléfono?",
      answer: "Sí, nuestra plataforma es compatible con dispositivos móviles, por lo que puedes acceder a los recursos en cualquier momento y lugar."
    },
    {
      question: "¿Hay soporte técnico disponible?",
      answer: "Sí, contamos con un equipo de soporte técnico que está disponible para ayudarte con cualquier problema."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null); // Estado para manejar el índice activo

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Alternar entre mostrar/ocultar la respuesta
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevenir el comportamiento predeterminado del formulario
    alert('Mensaje enviado!'); // Aquí puedes agregar la lógica para enviar el formulario
  };

  return (
    <div className="landing-page">
      {/* Sección de inicio */}
      <section ref={inicioRef} className="section inicio">
        <div className="container">
          <h1>Bienvenido a "Aprendizaje para todos"</h1>
          <p className="intro-text">
            La biblioteca virtual es una herramienta clave en el ámbito académico, ofreciendo acceso inmediato y global a una vasta colección de libros, artículos y recursos educativos. Rompiendo las barreras del tiempo y la geografía, facilita el acceso a información actualizada para mejorar sus estudios o investigaciones desde cualquier lugar, en cualquier momento.
          </p>
          <Link to="/register"> {/* Usa Link para redirigir */}
            <button>Empezar</button>
          </Link>
          <div className="image-container">
            <img src="https://i.pinimg.com/736x/c6/10/0c/c6100c4317632c6c56bd13078722ca8b.jpg" alt="Biblioteca Virtual" />
          </div>
        </div>
      </section>


      {/* Sección de normativas */}
      <section ref={normativasRef} className="section normativas">
        <div className="container">
          <h2>Normativas</h2>
          <p className="intro-text">
            A continuación, se presentan algunas normativas esenciales para el uso de la biblioteca virtual:
          </p>
          <ul className="normativas-list">
            <li>1. El acceso a la biblioteca virtual está disponible las 24 horas, todos los días del año.</li>
            <li>2. Los usuarios deben iniciar sesión con sus credenciales institucionales para acceder al contenido completo.</li>
            <li>3. Los materiales descargados de la biblioteca virtual están destinados exclusivamente para uso personal y académico.</li>
            <li>4. Está prohibido compartir materiales de la biblioteca virtual en redes sociales o plataformas no autorizadas.</li>
            <li>5. La biblioteca se reserva el derecho de suspender el acceso de usuarios que infrinjan los términos de uso.</li>
          </ul>
          <div className="image-container">
            <img src="https://www.saniseg.com/wp-content/uploads/banner-de-normas-legales-saniseg-1.png" alt="Ilustración de Normativas" />
          </div>
        </div>
      </section>

      {/* Sección de nosotros */}
      <section ref={nosotrosRef} className="section nosotros">
        <div className="container">
          <div className="content-wrapper">
            <div className="text-content">
              <h2>Nosotros</h2>
              <p className="intro-text">
                En "Aprendizaje para Todos", somos un equipo apasionado por la educación y el desarrollo personal. Creemos en el poder del conocimiento compartido y en la importancia de ofrecer acceso a recursos educativos de calidad para todos, sin importar su ubicación o condición. Nos dedicamos a crear una plataforma que permita a estudiantes, profesionales y curiosos del mundo acceder a contenido relevante para su crecimiento académico y personal.
              </p>
            </div>
            <div className="image-content">
              <img src="https://i.pinimg.com/enabled_lo/564x/d4/19/c4/d419c425e7ad8f24fd963ec5142bb680.jpg" alt="Nosotros" />
            </div>
          </div>
        </div>
      </section>

      {/* Sección de localización */}
      <section ref={localizacionRef} className="section localizacion">
        <div className="container">
          <h2>Localización</h2>
          <p className="intro-text">Encuéntranos en nuestra sede principal o a través de nuestra ubicación en línea para acceder a todos nuestros servicios educativos.</p>
          
          <div className="location-info">
            <div className="address">
              <h3>Dirección:</h3>
              <p>Av. Siempre Viva 123, Ciudad Educativa, País</p>
              <p>Horario de Atención: Lunes a Viernes, 9:00 AM - 6:00 PM</p>
            </div>
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3154.537228937326!2d144.96308731531803!3d-37.81520697975198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce7e33!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2spe!4v1604973788541!5m2!1sen!2spe"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de FAQ */}
      <section ref={faqRef} className="section faq">
        <div className="container">
          <h2>Preguntas Frecuentes (FAQ)</h2>
          <div className="faq-list">
            {faqData.map((item, index) => (
              <div className="faq-item" key={index}>
                <button className="faq-question" onClick={() => handleToggle(index)}>
                  {item.question}
                </button>
                {activeIndex === index && (
                  <p className="faq-answer">{item.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección de contacto */}
      <section ref={contactenosRef} className="section contactenos">
        <div className="container">
          <h2>Contáctenos</h2>
          <p>
            Si tienes alguna pregunta o necesitas más información, no dudes en contactarnos utilizando el siguiente formulario.
          </p>
          
          {/* Formulario de contacto */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <input 
              type="text" 
              placeholder="Nombre" 
              required 
              className="form-input" 
            />
            <input 
              type="email" 
              placeholder="Correo Electrónico" 
              required 
              className="form-input" 
            />
            <textarea 
              placeholder="Mensaje" 
              required 
              className="form-textarea" 
            />
            <button type="submit" className="btn-submit">Enviar Mensaje</button>
          </form>

          {/* Información de contacto adicional */}
          <div className="contact-info">
            <h3>Información de contacto</h3>
            <p>Teléfono: (123) 456-7890</p>
            <p>Email: contacto@example.com</p>
            <div className="social-media">
              <h4>Síguenos en:</h4>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <Footer4 />
      </footer>
    </div>
  );
}

export default Landing;
