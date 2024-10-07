import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css'; // Importa el archivo CSS

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
          <img src="/logo.png" alt="icon" className="logo" />
          <h2 className="title">Plataform</h2>
        </div>
        <div className="profileContainer">
          <img src={profileImg} alt="profile" className="profile" />
          <div className="profileContents">
            <p className="name">Hello, {name}</p>
            <p>{email}</p>
          </div>
        </div>
        <div className="contentsContainer">
          <ul>
            {links.map((link, index) => (
              <li key={index}>
                <img src={link.icon} alt={link.title} className="menuIcon" />
                <Link to={link.path}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
