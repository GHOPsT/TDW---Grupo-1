import React, { useState } from 'react';
import { RiBookmarkLine } from "react-icons/ri";
import './AppLanding.css';
import Landing from './Landing';
import {useNavigate} from 'react-router-dom';


function AppLanding() {
  const [activeLink, setActiveLink] = useState('');
  const navigate = useNavigate();

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const handleLogin = () => {
    navigate('/login');
  }

  return (
    <div className="App">
      <nav>
        <div className="logo">
          <RiBookmarkLine size={30} />
        </div>
        <ul>
          <li className={activeLink === 'inicio' ? 'active' : ''}>
            <a href="#inicio" onClick={() => handleLinkClick('inicio')}>
              Inicio
            </a>
          </li>
          <li className={activeLink === 'normativas' ? 'active' : ''}>
            <a href="#normativas" onClick={() => handleLinkClick('normativas')}>
              Normativas
            </a>
          </li>
          <li className={activeLink === 'nosotros' ? 'active' : ''}>
            <a href="#nosotros" onClick={() => handleLinkClick('nosotros')}>
              Nosotros
            </a>
          </li>
          <li className={activeLink === 'localizacion' ? 'active' : ''}>
            <a href="#localizacion" onClick={() => handleLinkClick('localizacion')}>
              Localización
            </a>
          </li>
          <li className={activeLink === 'faq' ? 'active' : ''}>
            <a href="#faq" onClick={() => handleLinkClick('faq')}>
              FAQ
            </a>
          </li>
          <li className={activeLink === 'contactenos' ? 'active' : ''}>
            <a href="#contactenos" onClick={() => handleLinkClick('contactenos')}>
              Contáctenos
            </a>
          </li>
        </ul>
        <button onClick={handleLogin}>Iniciar Sesión</button>
      </nav>
      <Landing />
    </div>
  );
}

export default AppLanding;