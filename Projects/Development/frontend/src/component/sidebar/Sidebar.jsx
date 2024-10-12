import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css'; // Importa el archivo CSS
import perfil from './imagenes/perfil_axel.jpg';
import libro from './imagenes/libro.png';


const Sidebar = ({ userType, profileImg, name, email, links }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Botón de hamburguesa que se muestra cuando el sidebar está oculto */}
      <div className={`burgerIcon ${isOpen ? 'open' : ''}`} onClick={toggleSidebar}>
        <div className="burgerLine"></div>
        <div className="burgerLine"></div>
        <div className="burgerLine"></div>
      </div>

      {/* Sidebar con contenido */}
      <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        <div className="logoContainer">
        <img src={libro} alt="Libro" className="logoIcon" /> {/* Reemplaza el ícono por la imagen */}
          <h2 className="title"><br/>Aprendizaje para todos</h2>
        </div>
        <div className="profileContainer">
          <div className="profileContents">
            <p className="name">{name}</p>
            <img src={perfil} alt="profile" className="profile" /> {/* Usa la imagen importada */}
            <p className = "email">{email}</p>
          </div>
        </div>
        <div className="contentsContainer">
          <ul>
            {links.map((link, index) => (
              <li key={index}>
                {link.icon} {/* Renderiza el ícono */}
                <a href={link.path}>{link.title}</a> {/* Enlace al path */}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
