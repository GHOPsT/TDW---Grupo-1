import React, { useState, useRef } from 'react';
import { RiBookmarkLine } from "react-icons/ri";
import './AppLanding.css';
import Landing from './Landing';
import { useNavigate } from 'react-router-dom';

function AppLanding() {
  const [activeLink, setActiveLink] = useState('');
  const navigate = useNavigate();

  // Crear referencias para las secciones
  const inicioRef = useRef(null);
  const normativasRef = useRef(null);
  const nosotrosRef = useRef(null);
  const localizacionRef = useRef(null);
  const faqRef = useRef(null);
  const contactenosRef = useRef(null);

  const handleLinkClick = (link, ref) => {
    setActiveLink(link);
    // Desplazar suavemente a la sección correspondiente
    ref.current.scrollIntoView({ behavior: 'smooth' });
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
            <a onClick={() => handleLinkClick('inicio', inicioRef)}>
              Inicio
            </a>
          </li>
          <li className={activeLink === 'normativas' ? 'active' : ''}>
            <a onClick={() => handleLinkClick('normativas', normativasRef)}>
              Normativas
            </a>
          </li>
          <li className={activeLink === 'nosotros' ? 'active' : ''}>
            <a onClick={() => handleLinkClick('nosotros', nosotrosRef)}>
              Nosotros
            </a>
          </li>
          <li className={activeLink === 'localizacion' ? 'active' : ''}>
            <a onClick={() => handleLinkClick('localizacion', localizacionRef)}>
              Localización
            </a>
          </li>
          <li className={activeLink === 'faq' ? 'active' : ''}>
            <a onClick={() => handleLinkClick('faq', faqRef)}>
              FAQ
            </a>
          </li>
          <li className={activeLink === 'contactenos' ? 'active' : ''}>
            <a onClick={() => handleLinkClick('contactenos', contactenosRef)}>
              Contáctenos
            </a>
          </li>
        </ul>
        <button onClick={handleLogin}>Iniciar Sesión</button>
      </nav>

      {/* Pasar las referencias a Landing */}
      <Landing 
        inicioRef={inicioRef}
        normativasRef={normativasRef}
        nosotrosRef={nosotrosRef}
        localizacionRef={localizacionRef}
        faqRef={faqRef}
        contactenosRef={contactenosRef}
      />
    </div>
  );
}

export default AppLanding;
