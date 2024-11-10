import React from 'react';
import { FaUser, FaBook, FaForumbee } from 'react-icons/fa';
import Cookies from 'js-cookie';
import './Home.css'; // Importa los estilos personalizados para la página de inicio

const Home = () => {
  // Obtener el nombre del usuario desde las cookies
  const nombreUsuario = Cookies.get('nombreUsuario') || 'Usuario';

  return (
    <div className="home-container">
      <h1 className="home-title">¡Bienvenido, {nombreUsuario}!</h1>
      <p className="home-description">
        Administra tu plataforma de manera eficiente con los enlaces a continuación.
      </p>

      <div className="home-links-grid">
        <a href="/GestionForo" className="home-link-card">
          <FaUser className="home-link-icon" />
          <h3 className="home-link-title">Gestionar Usuarios</h3>
          <p className="home-link-description">Ver, editar y gestionar usuarios en el sistema.</p>
        </a>

        <a href="/Foro" className="home-link-card">
          <FaForumbee className="home-link-icon" />
          <h3 className="home-link-title">Foros</h3>
          <p className="home-link-description">Crear, editar y moderar publicaciones en el foro.</p>
        </a>

        <a href="/Biblioteca" className="home-link-card">
          <FaBook className="home-link-icon" />
          <h3 className="home-link-title">Biblioteca</h3>
          <p className="home-link-description">Agregar, editar y categorizar libros.</p>
        </a>
      </div>
    </div>
  );
};

export default Home;
