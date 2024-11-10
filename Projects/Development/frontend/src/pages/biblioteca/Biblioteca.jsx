import React, { useState, useEffect } from 'react';
import Sidebar from '../../component/sidebar/Sidebar';
import '../../component/sidebar/sidebar.css';
import './Biblioteca.css'; // Importa el archivo CSS para los estilos del contenido de la página
import bookData from '../../data/bookData.json'; // Importa el JSON de datos
import Carta from '../../component/carta/Carta';
import Pagination from '../../component/pagination/Pagination';
import { FcBusinessman, FcOpenedFolder } from "react-icons/fc";  // Importa tus íconos
import { FaBookBible } from "react-icons/fa6";
import Cookies from 'js-cookie';


function Biblioteca() {
  const [show, setShow] = useState(null);
  const [filteredData, setFilteredData] = useState(bookData);
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(20); // Número de libros por página

  const [categoryFilter, setCategoryFilter] = useState('todos'); // Filtro de categoría por defecto
  const [searchTerm, setSearchTerm] = useState('');

  // Filtrar datos por tipo de filtro y término de búsqueda
  useEffect(() => {
    const filtered = bookData.filter((book) => {
      // Filtrar por categoría
      if (categoryFilter !== 'todos' && book.categoria !== categoryFilter) {
        return false;
      }
      // Filtrar por término de búsqueda
      if (searchTerm && !book.nombre.toLowerCase().includes(searchTerm.toLowerCase())) {
        return false;
      }
      return true;
    });
    setFilteredData(filtered);
  }, [categoryFilter, searchTerm]);

  // Manejar cambios en el campo de búsqueda
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Manejar cambios en el selector de categoría
  const handleCategoryChange = (event) => {
    setCategoryFilter(event.target.value);
  };

 // Obtener el nombre y correo del usuario desde las cookies
  const nombreUsuario = Cookies.get('nombreUsuario') || 'Usuario';
  const correoUsuario = Cookies.get('correoUsuario') || 'correo@ejemplo.com';


  // Manejar cambios de página
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Obtener los libros para la página actual
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = filteredData.slice(indexOfFirstBook, indexOfLastBook);

 const userLinks = [
  { icon: <FcBusinessman />, title: 'Subir Material', path: '/material_register'  },
  { icon: <FcOpenedFolder />, title: 'Foros', path: '/Foro' },
  { icon: <FaBookBible />, title: 'Biblioteca', path: '/Biblioteca' },
];

  return (
    <div className="app-container">
      <Sidebar
        userType="lector"
        profileImg="../../images/libros/user.png"  
        name={nombreUsuario} // Usar el nombre del usuario desde cookies
        email={correoUsuario} // Usar el correo del usuario desde cookies
        links={userLinks}
      />
      <div className="main-content">
        <div className="content-wrapper">
          <div className="content-header">
            <h2 className="title">Biblioteca</h2>
            <div className="filters">
              <p>Filtrar por Categoría:</p>
              <div className="filter-category">
                <select
                  className="select-category"
                  value={categoryFilter}
                  onChange={handleCategoryChange}
                >
                  <option value="todos">Todas</option>
                  <option value="literatura">Literatura</option>
                  <option value="historia">Historia</option>
                  <option value="ciencia">Ciencia</option>
                </select>
              </div>
              <div className="search-box">
                <input
                  type="text"
                  placeholder="Buscar"
                  className="search-input"
                  value={searchTerm}
                  onChange={handleSearchChange}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      // Lógica para realizar la búsqueda
                      console.log("Búsqueda iniciada:", searchTerm);
                    }
                  }}
                />
              </div>
            </div>
          </div>
          <div className="books-section">
            <div className="book-grid">
              {currentBooks.map((book, index) => (
                <Carta key={index} book={book} setShow={setShow} show={show} />
              ))}
            </div>
            <Pagination
              booksPerPage={booksPerPage}
              totalBooks={filteredData.length}
              paginate={paginate}
              currentPage={currentPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Biblioteca;
