import React, { useState, useEffect } from 'react';
import Sidebar from '../../component/sidebar/Sidebar';
import '../../component/sidebar/sidebar.css';
import './Biblioteca.css'; // Importa el archivo CSS para los estilos del contenido de la página
import bookData from '../../data/bookData.json'; // Importa el JSON de datos
import Carta from '../../component/carta/Carta';
import Pagination from '../../component/pagination/Pagination';

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

  // Manejar cambios de página
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Obtener los libros para la página actual
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = filteredData.slice(indexOfFirstBook, indexOfLastBook);

  const userLinks = [
    { icon: 'https://www.example.com/user-icon.png', title: 'Gestionar Usuario', path: '/user' },
    { icon: 'https://www.example.com/forum-icon.png', title: 'Gestionar Foro', path: '/forum' },
    { icon: 'https://www.example.com/book-icon.png', title: 'Gestionar Libros', path: '/books' },
  ];

  return (
    <div className="app-container">
      <Sidebar
        userType="lector" // O "user" si corresponde
        profileImg="https://www.example.com/profile-picture.jpg"
        name="John Doe"
        email="john.doe@example.com"
        links={userLinks}
      />
      <div className="main-content">
        <div className="sm:px-6 w-full">
          <div className="px-4 md:px-10 py-4 md:py-7 flex items-center justify-between">
            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">
              Biblioteca
            </h2>
            <div className="flex items-center gap-x-4">
              <div className="py-3 px-4 flex items-center text-sm font-medium leading-none text-gray-600 bg-gray-200 hover:bg-gray-300 cursor-pointer rounded">
                <p>Filtrar por Categoría:</p>
                <select className="focus:outline-none bg-transparent ml-1" value={categoryFilter} onChange={handleCategoryChange}>
                  <option value="todos">Todas</option>
                  <option value="literatura">Literatura</option>
                  <option value="historia">Historia</option>
                  <option value="ciencia">Ciencia</option>
                  {/* Agrega más categorías aquí */}
                </select>
              </div>
              <div className="mt-4 sm:mt-0">
                <input type="text" placeholder="Buscar por nombre" className="px-4 py-2 border rounded" value={searchTerm} onChange={handleSearchChange} />
              </div>
            </div>
          </div>
          <div className="bg-white py-4 md:py-7 px-4 md:px-8 xl:px-10">
            <div className="grid grid-cols-5 gap-4 mt-4">
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