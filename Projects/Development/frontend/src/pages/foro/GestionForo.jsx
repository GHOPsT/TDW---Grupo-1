import React, { useState, useEffect } from 'react';
import Sidebar from '../../component/sidebar/Sidebar';
import '../../component/sidebar/sidebar.css';
import './GestionForo.css';
import { FaUser, FaBook, FaForumbee } from 'react-icons/fa';
import forumData from '../foro/forumData.json';
import Cookies from 'js-cookie'; // Importar la librería de cookies

function GestionForo() {
  const [showDropdown, setShowDropdown] = useState(null);
  const [filteredData, setFilteredData] = useState(forumData);
  const [filterType, setFilterType] = useState('titulo');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const filtered = forumData.filter((item) => {
      const searchValue = item[filterType].toLowerCase();
      return searchValue.includes(searchTerm.toLowerCase());
    });
    setFilteredData(filtered);
  }, [searchTerm, filterType]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilterType(event.target.value);
  };

  const userLinks = [
    { icon: <FaUser />, title: 'Gestionar Usuario', path: '/user' },
    { icon: <FaForumbee />, title: 'Gestionar Foro', path: '/GestionForo' },
    { icon: <FaBook />, title: 'Gestionar Libros', path: '/material_register' },
  ];

  const handleDropdownToggle = (index) => {
    setShowDropdown(showDropdown === index ? null : index);
  };

  // Obtener el nombre y correo del usuario desde las cookies
  const nombreUsuario = Cookies.get('nombreUsuario') || 'Usuario';
  const correoUsuario = Cookies.get('correoUsuario') || 'correo@ejemplo.com';

  return (
    <div className="app-container">
      <Sidebar
        userType="admin"
        profileImg="https://www.example.com/profile-picture.jpg"
        name={nombreUsuario} // Usar el nombre del usuario desde cookies
        email={correoUsuario} // Usar el correo del usuario desde cookies
        links={userLinks}
      />
      <div className="main-content">
        <div className="content">
          <div className="header">
            <h2 className="title">Foros</h2>
            <div className="filter">
              <label>Filtrar por:</label>
              <select className="filter-select" value={filterType} onChange={handleFilterChange}>
                <option value="titulo">Título</option>
                <option value="autor">Autor</option>
                <option value="fecha">Fecha</option>
                <option value="estado">Estado</option>
                <option value="reporte">Reporte</option>
              </select>
            </div>
          </div>

          <div className="search-bar">
            <input
              type="text"
              placeholder="Buscar por Título"
              className="search-input"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>

          <div className="table-container">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Título</th>
                  <th>Detalles</th>
                  <th>Título de la obra</th>
                  <th>Autor</th>
                  <th>Fecha</th>
                  <th>Estado</th>
                  <th>Reporte</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((item, index) => (
                  <tr key={index}>
                    <td>{item.titulo}</td>
                    <td>{item.detalles}</td>
                    <td>{item.tituloObra}</td>
                    <td>{item.autor}</td>
                    <td>{item.fecha}</td>
                    <td>
                      <span className={`status-badge ${item.estado.toLowerCase()}`}>
                        {item.estado}
                      </span>
                    </td>
                    <td>{item.reporte}</td>
                    <td>
                      <button className="action-button" onClick={() => handleDropdownToggle(index)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20">
                          <path
                            d="M4.16667 10.8332C4.62691 10.8332 5 10.4601 5 9.99984C5 9.5396 4.62691 9.1665 4.16667 9.1665C3.70643 9.1665 3.33334 9.5396 3.33334 9.99984C3.33334 10.4601 3.70643 10.8332 4.16667 10.8332Z"
                            stroke="#9CA3AF"
                            strokeWidth={1.25}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M10 10.8332C10.4602 10.8332 10.8333 10.4601 10.8333 9.99984C10.8333 9.5396 10.4602 9.1665 10 9.1665C9.53976 9.1665 9.16666 9.5396 9.16666 9.99984C9.16666 10.4601 9.53976 10.8332 10 10.8332Z"
                            stroke="#9CA3AF"
                            strokeWidth={1.25}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M15.8333 10.8332C16.2936 10.8332 16.6667 10.4601 16.6667 9.99984C16.6667 9.5396 16.2936 9.1665 15.8333 9.1665C15.3731 9.1665 15 9.5396 15 9.99984C15 10.4601 15.3731 10.8332 15.8333 10.8332Z"
                            stroke="#9CA3AF"
                            strokeWidth={1.25}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                      {showDropdown === index && (
                        <div className="dropdown-menu">
                          <p>Editar</p>
                          <p>Eliminar</p>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GestionForo;
