import React from 'react';
import './Pagination.css';

function Pagination({ booksPerPage, totalBooks, paginate, currentPage }) {
  const pageNumbers = [];

  // Calcula el número de páginas
  for (let i = 1; i <= Math.ceil(totalBooks / booksPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="pagination">
      <ul>
        {/* Botón "Anterior" */}
        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
          <a onClick={() => paginate(currentPage - 1)} className="page-link" href="#!">
            Anterior
          </a>
        </li>
        {/* Números de página */}
        {pageNumbers.map((number) => (
          <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
            <a onClick={() => paginate(number)} className="page-link" href="#!">
              {number}
            </a>
          </li>
        ))}
        {/* Botón "Siguiente" */}
        <li className={`page-item ${currentPage === pageNumbers.length ? 'disabled' : ''}`}>
          <a onClick={() => paginate(currentPage + 1)} className="page-link" href="#!">
            Siguiente
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;