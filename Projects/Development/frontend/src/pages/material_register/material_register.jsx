import React from 'react';
import Sidebar from '../../component/sidebar/Sidebar'; // Asegúrate de que la ruta sea correcta
import './material_register.css'; // Opcional para estilos adicionales

const RegistrarMaterial = () => {
  // Datos de ejemplo para el sidebar
  const links = [
    { title: 'Inicio', path: '/', icon: '/icons/home.png' },
    { title: 'Materiales', path: '/materiales', icon: '/icons/material.png' },
    { title: 'Registro', path: '/registrar-material', icon: '/icons/register.png' },
  ];

  return (
    <div className="registrar-material-page">
      <Sidebar
        userType="admin" // Puedes ajustar el tipo de usuario si es necesario
        profileImg="/path-to-profile-image.jpg" // Ruta a la imagen de perfil
        name="John Doe" // Nombre del usuario
        email="john.doe@example.com" // Email del usuario
        links={links} // Enlaces de navegación
      />
      <div className="content">
        <h1>Registrar Material</h1>
        {/* Aquí puedes agregar el contenido adicional de la página */}
        <p>Formulario o contenido para registrar material...</p>
      </div>
    </div>
  );
};

export default RegistrarMaterial;
