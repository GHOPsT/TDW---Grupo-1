// GestionForo.jsx
import React, { useState, useEffect } from 'react';
import Sidebar from '../../component/sidebar/Sidebar';
import '../../component/sidebar/sidebar.css';
import './GestionForo.css';
import forumData from '../foro/forumData.json'; // Importa el JSON de datos

function GestionForo() {
  const [show, setShow] = useState(null);
  const [filteredData, setFilteredData] = useState(forumData);
  const [filterType, setFilterType] = useState('titulo'); // Tipo de filtro por defecto
  const [searchTerm, setSearchTerm] = useState('');

  // Filtrar datos por tipo de filtro y término de búsqueda
  useEffect(() => {
    const filtered = forumData.filter((item) => {
      // Filtrar por tipo de filtro
      const searchValue = item[filterType].toLowerCase();
      return searchValue.includes(searchTerm.toLowerCase());
    });
    setFilteredData(filtered);
  }, [searchTerm, filterType]);

  // Manejar cambios en el campo de búsqueda
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Manejar cambios en el selector de tipo de filtro
  const handleFilterChange = (event) => {
    setFilterType(event.target.value);
  };

  const userLinks = [
    { icon: 'https://www.example.com/user-icon.png', title: 'Gestionar Usuario', path: '/user' },
    { icon: 'https://www.example.com/forum-icon.png', title: 'Gestionar Foro', path: '/forum' },
    { icon: 'https://www.example.com/book-icon.png', title: 'Gestionar Libros', path: '/books' },
  ];

  return (
    <div className="app-container">
      <Sidebar
        userType="admin" // O "user" si corresponde
        profileImg="https://www.example.com/profile-picture.jpg"
        name="Max Saavedra"
        email="john.doe@example.com"
        links={userLinks}
      />
      <div className="main-content">
        <div className="sm:px-6 w-full">
          <div className="px-4 md:px-10 py-4 md:py-7">
            <div className="flex items-center justify-between">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">
                Foros
              </p>
              <div className="py-3 px-4 flex items-center text-sm font-medium leading-none text-gray-600 bg-gray-200 hover:bg-gray-300 cursor-pointer rounded">
                <p>Filtrar por:</p>
                <select className="focus:outline-none bg-transparent ml-1" value={filterType} onChange={handleFilterChange}>
                  <option value="titulo">Título</option>
                  <option value="autor">Autor</option>
                  <option value="fecha">Fecha</option>
                  <option value="estado">Estado</option>
                  <option value="reporte">Reporte</option>
                </select>
              </div>
            </div>
          </div>
          <div className="bg-white py-4 md:py-7 px-4 md:px-8 xl:px-10">
            <div className="sm:flex items-center justify-between">
              <div className="flex items-center">
                {/* ... (filtros por tipo) ... */}
              </div>
              <div className="mt-4 sm:mt-0">
                <input type="text" placeholder="Buscar por Título" className="px-4 py-2 border rounded" value={searchTerm} onChange={handleSearchChange} />
              </div>
            </div>
            <div className="mt-7 overflow-x-auto">
              <table className="w-full whitespace-nowrap">
                <thead>
                  <tr>
                    <th className="px-4 py-3 font-medium leading-4 text-gray-800">
                      Título de la duda o debate
                    </th>
                    <th className="px-4 py-3 font-medium leading-4 text-gray-800">
                      Detalles
                    </th>
                    <th className="px-4 py-3 font-medium leading-4 text-gray-800">
                      Título de la obra
                    </th>
                    <th className="px-4 py-3 font-medium leading-4 text-gray-800">
                      Autor
                    </th>
                    <th className="px-4 py-3 font-medium leading-4 text-gray-800">
                      Fecha
                    </th>
                    <th className="px-4 py-3 font-medium leading-4 text-gray-800">
                      Estado
                    </th>
                    <th className="px-4 py-3 font-medium leading-4 text-gray-800">
                      Reporte
                    </th>
                    <th className="px-4 py-3 font-medium leading-4 text-gray-800" />
                  </tr>
                </thead>
                <tbody>
                  {filteredData.map((item, index) => (
                    <tr key={index} className="h-16 border border-gray-100 rounded">
                      <td className="px-4 py-3">
                        <p className="text-base font-medium leading-none text-gray-700">
                          {item.titulo}
                        </p>
                      </td>
                      <td className="px-4 py-3">
                        <p className="text-base font-medium leading-none text-gray-700">
                          {item.detalles}
                        </p>
                      </td>
                      <td className="px-4 py-3">
                        <p className="text-base font-medium leading-none text-gray-700">
                          {item.tituloObra}
                        </p>
                      </td>
                      <td className="px-4 py-3">
                        <p className="text-base font-medium leading-none text-gray-700">
                          {item.autor}
                        </p>
                      </td>
                      <td className="px-4 py-3">
                        <p className="text-base font-medium leading-none text-gray-700">
                          {item.fecha}
                        </p>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center">
                          <span
                            className={`bg-${
                              item.estado === 'Aprobado'
                                ? 'green'
                                : item.estado === 'Desaprobado'
                                ? 'red'
                                : 'yellow'
                            }-500 text-white px-2 py-1 rounded`}
                          >
                            {item.estado}
                          </span>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <p className="text-base font-medium leading-none text-gray-700">
                          {item.reporte}
                        </p>
                      </td>
                      <td className="px-4 py-3">
                        <div className="relative px-5 pt-2">
                          <button className="focus:outline-none" onClick={() => setShow(index)}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                            >
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
                          {show === index && (
                            <div className="dropdown-menu">
                              {/* Opciones del dropdown */}
                            </div>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GestionForo;
